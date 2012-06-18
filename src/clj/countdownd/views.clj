(ns countdownd.views
  (:require
    [hiccup
      [page :refer [html5]]
      [element :refer [javascript-tag]]
      [page :refer [include-js include-css]]]))

(defn- include-clojurescript [path]
  (list
    (javascript-tag "var CLOSURE_NO_DEPS = true;")
    (include-js path)))

(defn index-page []
  (html5
    [:head
     [:title "Countdown"]]
    (include-css "/css/base.css")
    [:body {:onload "hello.start_counter()"}
     (include-clojurescript "/js/main.js")
     [:h1 "countdown"]
     [:h2 "looking good"]
     [:div {:style "margin-left:10px;margin-right:10px;background-color:floralWhite;border:1px solid #CCC"}
      [:h3#countdown {:style "text-align:center"}]]]))


