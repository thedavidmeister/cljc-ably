(ns ably.realtime.connection
 (:require
  ably.realtime.core))

; https://www.ably.io/documentation/realtime/connection#connection-state-explained
(def valid-events
 #{"initialized"
   "connecting"
   "connected"
   "disconnected"
   "suspended"
   "closing"
   "closed"
   "failed"})

(defn connection
 ([] (connection (ably.realtime.core/ably)))
 ([ably]
  {:pre [(ably.realtime.core/ably? ably)]}
  (when ably
   (.-connection ably))))

(defn on!
 ([ably cb] (on! (ably.realtime.core/ably) nil cb))
 ([ably e cb]
  {:pre [(ably.realtime.core/ably? ably)
         (or (valid-events e) (nil? e))
         (fn? cb)]}
  (when ably
   (let [cb' #?(:cljs cb
                :clj (proxy
                      [io.ably.lib.realtime.ConnectionStateListener]
                      []
                      (onConnectionStateChanged [change] (cb change))))]
    (if e
     (.on (connection ably) e cb')
     (.on (connection ably) cb'))))))
