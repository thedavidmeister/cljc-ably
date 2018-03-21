(ns ably.channels
 (:require
  medley.core
  taoensso.timbre
  [clojure.test :refer [deftest is are]]))

(defn channel? [ch]
 #?(:cljs (exists? (.-channelOptions ch))
    :clj (or
          (instance? io.ably.lib.realtime.Channel ch)
          (instance? io.ably.lib.rest.Channel ch))))

(defn valid-channel-name?
 [s]
 ; Must be a string.
 (when (string? s)
  ; https://support.ably.io/support/solutions/articles/3000046824-what-restrictions-exist-for-the-name-field-of-a-channel
  (let [[x & _] s
        x (str x)
        invalid? (or
                  ; Cannot be empty.
                  (= "" s)
                  ; Cannot start with a colon.
                  (= ":" x)
                  ; Cannot start with a square bracket.
                  (= "[" x))]
   (not invalid?))))

(defn normalize-name
 [channel-name]
 (cond
  (uuid? channel-name) (normalize-name (str channel-name))
  (valid-channel-name? channel-name) channel-name
  :else (taoensso.timbre/warn "Invalid channel" channel-name)))

(defn channels
 [ably]
 (when ably
  (.-channels ably)))

(defn get!
 [ably chid]
 {:pre [(string? chid)]}
 (when ably
  (.get (channels ably) chid)))

(defn name-or-channel->channel
 [ably name-or-channel]
 (when ably
  (if (channel? name-or-channel)
   name-or-channel
   (get! ably (normalize-name name-or-channel)))))

; TESTS.

(deftest ??valid-channel-name?
 ; Invalids.
 (are [i] (not (valid-channel-name? i))
  :foo "" ":foo" "[foo]")

 ; Valids.
 (are [i] (valid-channel-name? i)
  "foo" "foo:bar" "foo[bar" "foo]bar"))

(deftest ??normalize-name
 (let [n (medley.core/random-uuid)]
  (is (= (str n) (normalize-name n))))

 ; valids
 (doseq [v ["foo" "foo:bar" "foo[bar"]]
  (is (= v (normalize-name v))))

 ; invalids
 (doseq [i ["" ":" ":foo" "[" "[foo"]]
  (is (nil? (normalize-name i)))))
