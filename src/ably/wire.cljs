(ns ably.wire
 (:require
  [javelin.core :as j]
  ably.rest.spec
  sente.wire
  [clojure.spec.alpha :as spec]))

; https://www.ably.io/documentation/realtime/usage#client-options
(defn auth-callback
 [token-params cb]
 {:pre [(fn? cb)]}
 (let [token-params (js->clj token-params :keywordize-keys true)]
  (assert (spec/valid? :ably.rest/token-params token-params))
  (sente.wire/send!
   {:event :ably.rest/create-token-request
    :data token-params
    :success (fn [r]
              (cb nil (clj->js r)))
    :error (fn [e]
            (cb (clj->js e) nil))})))
