(ns ably.ws-event
 (:require
  [sente.wire :refer [-event-msg-handler]]
  ably.rest.core
  ably.rest.auth
  ably.data
  ably.rest.spec
  wheel.json.core
  [clojure.spec.alpha :as spec]))

(defmethod -event-msg-handler :ably.rest/create-token-request
 [{:as ev-msg :keys [event id ?data user-id ring-req send-fn]}]
 ; invalid token-params throws client side, so the only way this wouldn't be
 ; valid is if someone is trying to bypass ably.wire/auth-callback
 (when (spec/valid? :ably.rest/token-params ?data)
  (ably.rest.auth/create-token-request
   (ably.rest.core/ably ably.data/subscribe-key)
   :token-params (merge
                  ?data
                  {:clientId user-id
                   :capability
                   (wheel.json.core/string
                    {(str "private:eavt:" user-id) ["subscribe"]
                     (str "private:auth:" user-id) ["subscribe"]})}))))
