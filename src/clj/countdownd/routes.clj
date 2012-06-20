(ns countdownd.routes
  (:gen-class)
  (:use compojure.core
        countdownd.views
        countdownd.util
        countdownd.events
        ring.adapter.jetty
        [hiccup.middleware :only (wrap-base-url)])
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]
            [ring.util.response :as ring-resp])
  )

(defroutes main-routes
 ; (GET "/*" {:as x} (str x))
  (POST "/" [& event]        
        (if-let [e (parse-event event)]
          (do (add-event e)
;;              (str e))))
              (ring-resp/redirect-after-post         
               (str "/events/" (:name e))))))
  (GET "/" [] (new-event-page))
  (GET "/events/:name" [name]
       (if-let [e (get-event name)]
         (index-page e)
         (ring-resp/redirect "/")))
  (route/resources "/")
  (route/not-found "Page not found")
)

(def app  (handler/site main-routes))

;(defn start-server  []  (run-jetty (var app) {:port 8080 :join? false}))

;(defn -main [& args]  (start-server))
