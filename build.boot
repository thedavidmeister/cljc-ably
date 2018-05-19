(def project 'thedavidmeister/cljc-ably)
(def version "0.1.0")
(def description "CLJC wrapper for ably.")
(def github-url "https://github.com/thedavidmeister/cljc-ably")

(set-env!
 :repositories [["jcenter" "https://jcenter.bintray.com/"]
                ["clojars.org" "http://clojars.org/repo"]]
 :source-paths #{"src"}
 :dependencies
 '[; scaffolding...
   [org.clojure/clojure "1.10.0-alpha4"]
   [org.clojure/clojurescript "1.9.946"]
   [hoplon "7.3.0-SNAPSHOT"]
   [pandeiro/boot-http "0.8.3"]
   [adzerk/boot-reload "0.5.1"]
   [adzerk/boot-cljs "2.1.4"]
   [tailrecursion/boot-jetty  "0.1.3"]
   [thedavidmeister/boot-github-pages "0.1.0-SNAPSHOT"]
   [crisptrutski/boot-cljs-test "0.3.5-SNAPSHOT"]
   [adzerk/bootlaces "0.1.13"]

   ; everything else...
   [thedavidmeister/wheel "0.3.2-SNAPSHOT"]
   [io.ably/ably-java "1.0.1"]])

(task-options!
 pom {:project project
      :version version
      :description description
      :url github-url
      :scm {:url github-url}})

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[hoplon.boot-hoplon :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]]
 '[thedavidmeister.boot-github-pages :refer [github-pages]]
 '[crisptrutski.boot-cljs-test :refer [test-cljs]]
 '[adzerk.bootlaces :refer :all])

(bootlaces! version)

(def compiler-options
 {:externs ["externs.js"]
  :foreign-libs [
                 ; Ably client lib.
                 {; https://cdn.ably.io/lib/ably-1.0.6.js
                  :file "lib/ably/1.0.13/ably.js"
                  ; https://cdn.ably.io/lib/ably.min-1.0.6.js
                  :file-min "lib/ably/1.0.13/ably.min.js"
                  :provides ["ably.lib"]}]})

(deftask front-dev
 "Build for local development."
 [a advanced-compilation? bool "Compile CLJS with advanced compilation"]
 (comp
  (watch)
  (speak)
  (hoplon)
  (cljs
   :optimizations (if advanced-compilation? :advanced :none)
   :compiler-options compiler-options)
  (serve :port 8000)))

(deftask build
 []
 (comp
  (hoplon)
  (cljs
   :optimizations :advanced
   :compiler-options compiler-options)))

(deftask deploy-gh-pages
 []
 (comp
  (build)
  (target
   :dir #{"gh-pages"})
  (github-pages)))

(deftask deploy-clojars
 []
 (comp
  (build-jar)
  (push-release)))

(deftask deploy
 []
 (comp
  (deploy-gh-pages)
  (deploy-clojars)))

(require
 '[samestep.boot-refresh :refer [refresh]])

(deftask repl-server
 []
 (comp
  (watch)
  (refresh)
  (repl :server true)))

(deftask repl-client
 []
 (repl :client true))
