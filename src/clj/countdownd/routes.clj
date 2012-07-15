(ns countdownd.routes
  (:gen-class)
  (:require clojure.string)
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
  (POST "/" [& event]
        (if-let [e (event-add (parse-event event))]
          (ring-resp/redirect-after-post         
           (str "/events/" (:id e) "/" 
                (clojure.string/replace (:name e) #"\s" "-")))))
  (GET "/" [] (new-event-page))
  (GET ["/events/:id/*" :id #"[0-9]+"] [id]
       (if-let [e (event-with-id id)]
         (view-page e)
  ))
  (route/resources "/")
  (GET "/*" [] (ring-resp/redirect "/"))
  (route/not-found "Uh oh..")
)

(def app  (handler/site main-routes))
