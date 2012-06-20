(ns countdownd.routes
  (:gen-class)
  (:use compojure.core
        countdownd.views
        ring.adapter.jetty
        [hiccup.middleware :only (wrap-base-url)])
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]
            [ring.util.response :as ring-resp]))

(defn str-replace [s m r]
  (apply str (replace {m r} s)))

(defn resource-key [s]
  (str-replace s \space \-))

(def all-events (atom {}))

(defn add-event [event]
  (if-let [cname (resource-key (:name event))]
    (do
      (swap! all-events assoc (keyword cname) event)
      (ring-resp/redirect-after-post (str "/events/" cname)))))

(defn get-event [name]
  (if-let [x ((keyword (resource-key name)) @all-events)]
    (index-page x)
    (ring-resp/redirect "/")))

(defn parse-event [{:keys [day month year name]}]
  {:day (max 0 (dec (Integer. day)))
   :month (or ((keyword month) month-map) :Janurary)
   :year (Integer. year)
   :name name})

(defroutes main-routes
  (POST "/" [& event]  (add-event (parse-event event))) ;; (str (parse-event event)));;
  (GET "/" [] (new-event-page))
  (GET "/events/:name" [name] (get-event name))
  (route/resources "/")
;;  (GET "/*" {:as x} (str x))
  (route/not-found "Page not found"))

(def app
  (handler/site main-routes))

(defn start-server  []  
  (run-jetty (var app) {:port 8080 :join? false}))

(defn -main [& args]
  (start-server))
