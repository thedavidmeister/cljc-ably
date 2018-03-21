(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  goog.crypt.base64
  ably.realtime.channels))

(set! *warn-on-infer* true)

(defonce ably-key
 (goog.crypt.base64/decodeString
  (subs
   (.-hash (.-location js/window))
   1)))
(assert (not= "" ably-key) "Missing ably key!")
(defonce ably (ably.realtime.core/ably ably-key))

(h/html
 (h/head
  (h/title "CLJC ably test"))
 (h/body
  (let [c (j/with-let [c (j/cell 0)]
           (ably.realtime.channels/subscribe! ably "xyz" :inc #(swap! c inc)))]
   (h/div
    (h/button
     :click
     (fn []
      (ably.realtime.channels/publish! ably "xyz" :inc :inc #(prn "publish!")))
     "Click to increment over network!")
    (h/span "Count: " c)))))
