(ns ably.realtime.channels
 (:require
  ably.realtime.core
  taoensso.timbre
  ably.channels
  [clojure.test :refer [deftest is are]]))

(defn subscribe!
 [ably name-or-channel k cb]
 {:pre [(ably.realtime.core/ably? ably)]}
 (when-let [channel (ably.channels/name-or-channel->channel ably name-or-channel)]
  (let [cb' #?(:cljs cb
               :clj (proxy
                     [io.ably.lib.realtime.Channel$MessageListener]
                     []
                     (onMessage [message] (cb message))))]
   (.subscribe channel (str k) cb'))))

(defn publish!
 [ably name-or-channel k v cb]
 {:pre [(ably.realtime.core/ably? ably)]}
 (when-let [channel (ably.channels/name-or-channel->channel ably name-or-channel)]
  (let [cb' #?(:cljs cb
               :clj (proxy
                     [io.ably.lib.realtime.CompletionListener]
                     []
                     (onError [reason] (cb reason))
                     (onSuccess [] (cb nil))))]
   (.publish channel (str k) (pr-str v) cb'))))
