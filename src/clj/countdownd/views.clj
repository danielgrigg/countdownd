(ns countdownd.views
  (:use countdownd.events)
  (:require
   [clj-time
    [core :as tm]
     [format :as tmf]
    [local :refer [local-now]]]
    [hiccup
     [page :refer [html5]]
     [def :refer [defhtml]]
     [element :refer [javascript-tag]]
     [page :refer [include-js include-css]]
     [form :refer [label form-to text-field submit-button drop-down hidden-field]]]))

(defn- include-scripts [path]
  (list
   (javascript-tag "var CLOSURE_NO_DEPS = true;")
    (include-js path)))

(defhtml date-select-fields [for-date] 
  [:h4.text_line {:style "margin-bottom:0px"} "Give it a date"]
  (drop-down {:class "choose" :id "choose_day"}
             "day" (range 1 32) (tm/day for-date))
  (drop-down {:class "choose" :id "choose_month"}
             "month" all-months (month-from-n (tm/month for-date)))
  (drop-down {:class "choose" :id "choose_year"}
             "year" (map #(+ % (tm/year for-date)) (range 20)))
  [:br]
  [:div
   [:h4.text_line "Give it a time"]
   (drop-down  {:class "choose" :id "choose_hour"}
               "hour" (range 0 24) (tm/hour for-date))
   (drop-down  {:class "choose" :id "choose_minute"}
               "minute" (range 0 60) (tm/minute for-date))]
  [:br.text_line]
  )

(defhtml add-fields []
  [:h4.text_line "Call it something"]
  (text-field {:style "width:250px;margin-left:5px"} "name" "")
  (date-select-fields (local-now))
  (hidden-field "tzone" 0)
  )

(defn- copyright-element []
  [:div#footer
   (str "Copyright © " (tm/year (local-now)) " Daniel C Grigg")])
    
(defn new-event-page []
  (html5
   [:head
    [:title "Sliptimer"]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1, maximum-scale=1"}]
    (include-css "/css/base.css")
    (include-css "/css/theme.css")]
   [:body {:onload "countdownd.add_page_load()" } 
    [:div#container
     [:div#content
      [:h1 {:style "margin:5px"} "Sliptimer"]
      [:div {:style "margin:5px"}
    (form-to {:id "add_form" }
     [:post "/"]
     (add-fields)
     (submit-button  "Submit"))]]]
    (copyright-element)
    (include-scripts "/js/main.js" )]
   ))
    
(defn view-page [{:keys [name] :as event }]
  (let [expires (event-date-time event)]
    (html5
     [:head
      [:title (if (empty? name) "Sliptimer" name)]
      [:meta {:name "viewport"
              :content "width=device-width, initial-scale=1, maximum-scale=1"}]
      (include-css "/css/theme.css") ]
     (include-css "/css/base.css")
     [:body {:onload "countdownd.view_page_load()"}
      [:div#container
       [:div#content
        (include-scripts "/js/main.js" )
        [:h1 name]
        [:br
         [:h2#event_date]]
        [:h2#event_time]
        [:div.boxxed
         [:h3#countdown {:style "font-size:2em;text-align:center;margin-top:10px"}]]
        [:div#event_date_time.hidden
         (tmf/unparse (tmf/formatters :basic-date-time-no-ms) expires)]
        ]]
      (copyright-element)]
     )))