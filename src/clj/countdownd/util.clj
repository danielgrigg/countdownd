(ns countdownd.util)

(defn str-replace [s m r] (apply str (replace {m r} s)))

(defn resource-key [s]
  (if-not (empty? s)
    (keyword (str-replace s \space \-))))
