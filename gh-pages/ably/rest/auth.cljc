(ns ably.rest.auth
 #?(:clj
    (:import
     io.ably.lib.rest.Auth))
 (:require
  ably.rest.core
  ably.rest.spec
  wheel.json.core
  [clojure.spec.alpha :as spec]
  #?(:cljs [cljs.test :refer-macros [deftest is async]]
     :clj [clojure.test :refer [deftest is]])))

; The fn signature and behaviour for creating tokens is totally different in JS
; and Java.
; JS uses callbacks while Java is synchronous.
#?(:cljs
   (defn create-token-request
    [ably cb & {:keys [token-params auth-options]}]
    {:pre [(ably.rest.core/ably? ably)
           (spec/valid? (spec/nilable :ably.rest/token-params) token-params)
           (fn? cb)]}
    (let [cb' #(cb
                (js->clj %1)
                (clojure.walk/keywordize-keys (js->clj %2)))]
     (.auth.createTokenRequest
      ably
      (clj->js token-params)
      (clj->js auth-options)
      cb'))))

#?(:clj
   (defn create-token-request
    [ably & {:keys [token-params auth-options]}]
    {:pre [(ably.rest.core/ably? ably)
           (spec/valid? (spec/nilable :ably.rest/token-params) token-params)]}
    (let [java-token-params (io.ably.lib.rest.Auth$TokenParams.)]
     ; Configure token params.
     (when-let [v (:clientId token-params)]
      (set! (.-clientId java-token-params) v))
     (when-let [v (:ttl token-params)]
      (set! (.-ttl java-token-params) v))
     (when-let [v (:capability token-params)]
      (set! (.-capability java-token-params) v))
     (when-let [v (:timestamp token-params)]
      (set! (.-timestamp java-token-params) v))

     (wheel.json.core/parse
      (.asJson
       (.createTokenRequest
        (.-auth ably)
        java-token-params
        auth-options))))))

; TESTS

(defn ??compare-token-request-to-params
 [params request]
 (is (spec/valid? :ably.rest/token-request request))
 (is (spec/valid? :ably.rest/token-params params))
 (doseq [k [:clientId :ttl :timestamp]]
  (when (k params)
   (is
    (= (k params) (k request))
    (str "request and param not the same for k:" k))))
 ; ably chops up and rearranges the capability internally so the before and
 ; after JSON cannot be directly compared
 (let [parse #(let [c (:capability %)]
               (if (or (not c) (= "" c))
                nil
                (wheel.json.core/parse c)))
       k-set (comp set keys)
       v-set (fn [c k] ((comp set k) c))
       pcap (parse params)
       rcap (parse request)]
  (is (= (k-set pcap)
         (k-set rcap)))
  (doseq [k (keys pcap)]
   (is (= (v-set pcap k)
          (v-set rcap k))))))

(deftest ??create-token-request--basic
 #?(:cljs
    (async done
     (let [a (ably.rest.core/ably ably.data/sandbox-subscribe-key)
           cb (fn [e r]
               (is (not e))
               (is (spec/valid? :ably.rest/token-request r))
               (done))]
      (create-token-request a cb))))
 #?(:clj
    (let [a (ably.rest.core/ably ably.data/sandbox-subscribe-key)
          r (create-token-request a)]
     (is (spec/valid? :ably.rest/token-request (create-token-request a))))))

(deftest ??create-token-request--token-params
 #?(:cljs
    (async done
     (let [a (ably.rest.core/ably ably.data/sandbox-subscribe-key)
           params (wheel.test.util/fake :ably.rest/token-params)
           cb (fn [e r]
               (is (not e))
               (??compare-token-request-to-params params r)
               (done))]
      (create-token-request a cb :token-params params)))
    :clj
    (let [a (ably.rest.core/ably ably.data/sandbox-subscribe-key)
          params (wheel.test.util/fake :ably.rest/token-params)
          r (create-token-request a :token-params params)]
     (??compare-token-request-to-params params r))))
