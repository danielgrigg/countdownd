(ns countdownd.views
  (:require
    [hiccup
      [page :refer [html5]]
      [element :refer [javascript-tag]]
      [page :refer [include-js include-css]]]))

(defn- include-scripts [path];; {:keys [year month day hours minutes]} ]
;;  (let [date-string (str "new Date("
;;                         year ", "
;;                         month ", "
;;                         day ", "
;;                         hours ", "
;;                         minutes ")")]
  (list
   (javascript-tag "var CLOSURE_NO_DEPS = true;")
;;   (javascript-tag (str "var mock_date = " date-string ";"))
    (include-js path)))

(defn index-page [{name :event-name :as event }]
  (html5
    [:head
     [:title "Countdown"]]
    (include-css "/css/base.css")
    [:body {:onload "countdownd.start_counter()"}
     (include-scripts "/js/main.js" )
     [:h1 name]
     [:br
      [:div {:style "margin-left:10px;margin-right:10px;background-color:floralWhite;border:1px solid #CCC"}
       [:h3#countdown {:style "text-align:center;margin-top:10px"}]]]
     [:div#event_year "2012"]
     [:div#event_month "6"]
     [:div#event_day "3"]]))

