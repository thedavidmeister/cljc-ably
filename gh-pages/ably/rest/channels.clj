(ns ably.rest.channels
 (:require
  taoensso.timbre
  ably.channels))

(defn publish!
 [ably channel-name k v]
 (let [k' (str k)
       v' (pr-str v)]
  (.publish
   (ably.channels/get! ably (ably.channels/normalize-name channel-name))
   k'
   v')))
