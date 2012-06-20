(ns countdownd.views
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

(def ^:const all-months
  (vec (map keyword ["Jan" "Feb" "Mar" "Apr" "May" "Jun"
   "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])))

(def ^:const month-map
  (zipmap all-months (range 0 12)))

(defn month-from-n [n]
  "Get month corresponding to its natural index (1-12)"
  (all-months (dec n)))

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
   (drop-down  {:class "choose"} "hour" (range 0 24) 0)
   (drop-down  {:class "choose"} "minute" (range 0 60) 0)]
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

(defn event-date-str [{:keys [year month day]}]
  (str year "/" (inc month) "/" (inc day)))

(defn event-time-str [{:keys [hour minute second]}]
  (str hour ":" minute ":" second))

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
      [:h2 (event-date-str event)]]
     [:br
      [:div.boxxed
       [:h3#countdown {:style "text-align:center;margin-top:10px"}]]]
     [:div#event_year.hidden year]
     [:div#event_month.hidden month]
     [:div#event_day.hidden day]]))

