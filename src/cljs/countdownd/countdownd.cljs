(ns countdownd
  (:require 
   [clojure.browser.dom :as dom]
   [goog.dom :as gdom]
   [goog.Timer :as gtimer]
   [goog.events :as events]
   [goog.date :as gdate]
   ))
;; [clojure.browser.event :as event]

;;(def target-date (gdate/Date. 2012 9 9))

(defn days-hours-minutes-seconds [s]
  (let [seconds (mod s 60)
        minutes (mod (quot s 60) 60)
        hours (mod (quot s 3600) 24)
        days (quot s (* 24 3600))]
    [days hours minutes seconds]))

(defn ^:export format-seconds [s]
  (apply str (map str (days-hours-minutes-seconds s) ["d " "h " "m " "s"])))

(defn get-text [id]
  (gdom/getTextContent (dom/get-element id)))

(defn parse-int [s]
  (js/parseInt s))

(defn get-int [id]
  (parse-int (get-text id)))
   
(defn target-date []
  (gdate/DateTime. (get-int "event_year")
                   (get-int "event_month")
                   (get-int "event_day")))
                   
(defn update-counter []
  (let [target (target-date)
        seconds-to (max 0 (quot (- target (goog.now)) 1000))]
;;    (dom/set-text :countdown seconds-to)))
  (dom/set-text :countdown (format-seconds seconds-to))))

(defn poll []
  (let [timer (goog.Timer. 200)]
    (do (update-counter)
        (. timer (start))
        (events/listen timer goog.Timer/TICK update-counter))))
    
(defn ^export main []
  (poll))
