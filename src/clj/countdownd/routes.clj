(ns countdownd.routes
  (:use compojure.core
        countdownd.views
        [hiccup.middleware :only (wrap-base-url)])
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]
            [ring.util.response :as rresp]))

(def all-events (atom {}))
(defn str-replace [s m r]
  (apply str (replace {m r} s)))

(defn resource-key [s]
  (str-replace s \space \-))

(defn add-event [event]
  (if-let [cname (resource-key (:name event))]
    (do
      (swap! all-events assoc (keyword cname) event)
      (rresp/redirect-after-post (str "/events/" cname)))))

(defn get-event [name]
  (if-let [x ((keyword (resource-key name)) @all-events)]
    (index-page x)
    (rresp/redirect "/")))

(defroutes main-routes
  (POST "/" [& event] (add-event event))
  (GET "/" [] (new-event-page))
  (GET "/events/:name" [name] (get-event name))
  (route/resources "/")
;;  (GET "/*" {:as x} (str x))
  (route/not-found "Page not found"))

  (comment (GET "/events" [] (index-page
               {:name "some event"
                :year 2012
                :month 5
                :day 20
                :hours 14
                :minutes 12})))


(def app
  (handler/site main-routes))

