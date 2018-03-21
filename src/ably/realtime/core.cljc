(ns ably.realtime.core
 #?(:cljs
    (:require
     ably.lib)))
  ; #?(:cljs ably.wire)))

(defn ably? [a]
 ; (if ably.data/enabled?
 #?(:cljs (exists? (.-channels a))
    :clj (instance? io.ably.lib.realtime.AblyRealtime a)))
  ; (nil? a))

(defn -ably
 ; ([] (-ably #?(:clj ably.data/subscribe-key
 ;               :cljs {:authCallback ably.wire/auth-callback})))
 [params-or-key]
 ; (when ably.data/enabled?
 #?(:cljs (Ably.Realtime. (clj->js params-or-key))
    :clj (io.ably.lib.realtime.AblyRealtime. params-or-key)))
(def ably (memoize -ably))
