(ns countdownd.views
  (:use countdownd.events)
  (:require
   [clj-time
    [core :as time]
    [local :refer [local-now]]]
    [hiccup
     [page :refer [html5]]
     [def :refer [defhtml]]
     [element :refer [javascript-tag]]
     [page :refer [include-js include-css]]
     [form :refer [label form-to text-field submit-button drop-down]]]))

(defn- include-scripts [path]
  (list
   (javascript-tag "var CLOSURE_NO_DEPS = true;")
    (include-js path)))

(defhtml date-select-fields [for-date] 
;;  (label {:class "hidden"} "year" "Year")
  ;;  (label {:class "hidden"} "month" "Month")
  ;; (label {:class "hidden"} "day" "Day")
  [:h4.text_line {:style "margin-bottom:0px"} "Give it a date?"]
  (drop-down {:class "choose"} "day" (range 1 32) (time/day for-date))
  (drop-down {:class "choose"} "month" all-months (month-from-n (time/month for-date)))
  (drop-down {:class "choose"} "year" (for [y (range (time/year for-date)
                                   (+ (time/year for-date) 20))] y))

  [:br]
  [:div
   [:h4.text_line "Give it a time?"]
   (drop-down  {:class "choose"} "hour" (range 0 24) (time/hour for-date))
   (drop-down  {:class "choose"} "minute" (range 0 60) (time/minute for-date))]
  [:br.text_line]
  )

(defhtml add-fields []
  [:h4.text_line "Call it something"]
  (text-field {:style "width:250px;margin-left:5px"} "name" "")
  (date-select-fields (local-now))
  )
    
(defn new-event-page []
  (html5
   [:head
    [:title "Add form"]
    (include-css "/css/base.css")
    [:style {:type "text/css"}
     (str "div.hidden {display:none;}\n"
          ".choose {width:80px;display:inline;margin:5px;}\n"
          ".text_line { clear:both;margin-bottom:0px;}")]
     ]
   [:body 
    (include-scripts "/js/main.js" )
    [:h1 {:style "margin:5px"} "Countdown"]
   
    [:div {:style "margin:5px"}
    (form-to
     [:post "/"]
     (add-fields)
     (submit-button "Submit"))]]))

(defn index-page [{:keys [name year month day hour minute] :as event }]
  (html5
    [:head
     [:title "Countdown"]
     [:style {:type "text/css"}
      (str "div.hidden {display:none;}\n"
           "div.boxxed {margin-left:10px;margin-right:10px;
                        background-color:floralWhite;border:1px solid #CCC}"
           "html, body, #container { height: 100%; margin: 0; padding: 0; }"
           "body > #container { height: auto; min-height: 100%; }"
           "#content { padding-bottom: 3em; }"
           "#footer { clear: both; position: relative; z-index: 10; height: 2em; margin-top: -2em; }"
           "#footer { text-align: center; font-size:75%;line-height: 1em; }"
           )]
     ]
    (include-css "/css/base.css")
    [:body {:onload "countdownd.main()"}
     [:div#container
      [:div#content
       (include-scripts "/js/main.js" )
       [:h1 name]
       [:br
        [:h2 (event-date-str event)]]
       [:h2 (event-time-str event)]
      ;;   [:br
       [:div.boxxed
        [:h3#countdown {:style "font-size:2em;text-align:center;margin-top:10px"}]]
       [:div#event_year.hidden year]
       [:div#event_month.hidden month]
       [:div#event_day.hidden day]
      [:div#event_hour.hidden hour]
       [:div#event_minute.hidden minute]]]
      [:div#footer
       (str "Copyright © " (time/year (local-now)) " Daniel C Grigg")]]
     ))
  
