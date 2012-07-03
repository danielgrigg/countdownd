(ns countdownd
  (:require 
   [clojure.browser.dom :as dom]
   [goog.dom :as gdom]
   [goog.Timer :as gtimer]
   [goog.events :as events]
   [goog.date :as gdate]
   ))

(defn days-hours-minutes-seconds "Extract components" [s]
  (let [seconds (mod s 60)
        minutes (mod (quot s 60) 60)
        hours (mod (quot s 3600) 24)
        days (quot s (* 24 3600))]
    [days hours minutes seconds]))

(defn ^:export format-seconds [s]
  (apply str (map str (days-hours-minutes-seconds s) ["d " "h " "m " "s"])))

(defn get-text [id]
  "Get text-content for element of id"
  (gdom/getTextContent (dom/get-element id)))
                      
(defn update-counter "Set the counter value" [expiry]
  (let [seconds-to (max 0 (quot (- expiry (goog.now)) 1000))]
      (dom/set-text :countdown (format-seconds seconds-to))))

(defn poll "Update the countdown" [expiry]
  ;; update 3hz else it aliases and the countdown jumps
  (let [timer (goog.Timer. 333)]
    (do (update-counter expiry)
        (. timer (start))
        (events/listen timer goog.Timer/TICK (partial update-counter expiry) ))))

(defn ^:export add-page-load "Actions performed loading the add-page" []
  (let [[year month day hour minute] (map #(dom/get-element (str "choose_" %))
                                          ["year" "month" "day"
                                           "hour" "minute"])
        now-local (gdate/DateTime.)]
    (do (dom/set-value :tzone (.getTimezoneOffset (js/Date.)))

        ;; Adjust the default date-time selection to the user's timezone.
        (set! (.-selectedIndex year) (- 2012 (.getYear now-local)))
        (set! (.-selectedIndex month) (.getMonth now-local))
        (set! (.-selectedIndex day) (.getDay now-local))
        (set! (.-selectedIndex hour) (dec (.getHour now-local)))
        (set! (.-selectedIndex minute) (.getMinute now-local))
)))
        
(defn ^:export view-page-load "Actions performed loading the view-page" []
  (let [expiry (gdate/fromIsoString (get-text "event_date_time"))
        event-date-str (str (.getYear expiry) "/"
                            (inc (.getMonth expiry)) "/"
                            (.getDate expiry))
        event-time-str (str (.getHours expiry) ":" (.getMinutes expiry))]
    
    (do (dom/set-text :event_date event-date-str)
        (dom/set-text :event_time event-time-str)
        (poll expiry))))
