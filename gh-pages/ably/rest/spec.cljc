(ns ably.rest.spec
 (:require
  wheel.string.spec
  wheel.json.core
  [clojure.spec.alpha :as spec]))

(spec/def :ably.rest/keyName :wheel.string/not-blank)
(spec/def :ably.rest/capability
 (spec/spec string?
  :gen
  (constantly
   (clojure.test.check.generators/fmap
    wheel.json.core/string
    (spec/gen
     (spec/map-of
      string?
      (spec/coll-of
       string?
       :kind sequential?)))))))
(spec/def :ably.rest/timestamp int?)
(spec/def :ably.rest/nonce :wheel.string/not-blank)
(spec/def :ably.rest/mac :wheel.string/string)
(spec/def :ably.rest/clientId :wheel.string/not-blank)
(spec/def :ably.rest/ttl int?)

(spec/def :ably.rest/token-params
 (spec/keys
  :opt-un [:ably.rest/clientId
           :ably.rest/ttl
           :ably.rest/capability
           :ably.rest/timestamp]))

(spec/def :ably.rest/token-request
 (spec/keys
  :req-un [:ably.rest/keyName
           :ably.rest/timestamp
           :ably.rest/nonce
           :ably.rest/mac]
  ; https://github.com/ably/ably-java/issues/349
  :opt-un [:ably.rest/clientId
           :ably.rest/capability
           :ably.rest/ttl]))
