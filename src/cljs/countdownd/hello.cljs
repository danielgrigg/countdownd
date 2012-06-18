(ns hello
  (:require 
   [clojure.browser.dom :as dom]
   [goog.Timer :as gtimer]
   [goog.events :as events]
   ))
;; [clojure.browser.event :as event]

;;(def my-timer (gtimer/
(defn ^:export set-counter [s]
  (dom/set-text :countdown s))

(defn ^:export append-content []
  (dom/append (dom/get-element "content")                                         
              (dom/element :div "divider")))

(defn update-counter []
  (let [d (js/Date.)]
    (dom/set-text :countdown d)))

(defn ^:export poll []
  (let [timer (goog.Timer. 1000)]
    (do (update-counter)
        (. timer (start))
        (events/listen timer goog.Timer/TICK update-counter))))
    
(defn ^export start-counter []
  (dom/set-text :countdown "starting 2..."))
