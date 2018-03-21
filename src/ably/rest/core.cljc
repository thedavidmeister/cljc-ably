(ns ably.rest.core
 (:require
  ably.data
  #?(:cljs ably.lib)))

(defn ably? [a]
 #?(:cljs (exists? (.-channels a))
    :clj (instance? io.ably.lib.rest.AblyRest a)))

(defn -ably
 ([] (-ably ably.data/subscribe-key))
 ([params-or-key]
  #?(:cljs (Ably.Rest. params-or-key)
     :clj (io.ably.lib.rest.AblyRest. params-or-key))))
(def ably (memoize -ably))
