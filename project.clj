(defproject countdownd "0.1.0"
  :description "countdownd project"
  :source-paths ["src/clj"]
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [compojure "1.1.0"]
                 [hiccup "1.0.0"]
                 [clj-time "0.4.3"]
                 [ring "1.1.1"]
                 [mysql/mysql-connector-java "5.1.20"]
                 [clojureql "1.0.3"]
                 ]
  :plugins [[lein-ring "0.7.1"]
            [lein-cljsbuild "0.2.1"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {
    :builds [{:source-path "src/cljs"
              :compiler {:output-to "resources/public/js/main.js"
                         :optimizations :advanced
                         }}]}            
  :ring {:handler countdownd.routes/app}
;;  :main countdownd.routes
  )
