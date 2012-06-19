(ns countdownd.views
  (:require
    [hiccup
     [page :refer [html5]]
     [def :refer [defhtml]]
     [element :refer [javascript-tag]]
     [page :refer [include-js include-css]]
     [form :refer [label form-to text-field submit-button]]]))

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

(defhtml add-fields []
  (label "name" "What is it?")
  (text-field "name" "")
  (label "year" "Year")
  (text-field "year" "")
  (label "month" "month")
  (text-field "month" "")
  (label "day" "day")
  (text-field "day" "")
)
    
(defn new-event-page []
  (html5
   [:head
    [:title "Add form"]
    (include-css "/css/base.css")]
   [:body
    (form-to
     [:post "/"]
     (add-fields)
     (submit-button "Add event"))]))

(defn index-page [{:keys [name year month day] :as event }]
  (html5
    [:head
     [:title "Countdown"]
     [:style {:type "text/css"}
      (str "div.hidden {display:none;}\n"
           "div.boxxed {margin-left:10px;margin-right:10px;
                        background-color:floralWhite;border:1px solid #CCC}")]
     ]
    (include-css "/css/base.css")
    [:body {:onload "countdownd.main()"}
     (include-scripts "/js/main.js" )
     [:h1 name]
     [:br
      [:div.boxxed
       [:h3#countdown {:style "text-align:center;margin-top:10px"}]]]
     [:div#event_year.hidden year]
     [:div#event_month.hidden month]
     [:div#event_day.hidden day]]))

