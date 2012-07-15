(ns countdownd.events
  (:use countdownd.util)
  (:require [clojureql [core :as ql]]
            [clj-time
             [core :as tm]
             [coerce :refer [from-sql-date to-timestamp]]]))

(def db {:classname "com.mysql.jdbc.Driver"
          :subprotocol "mysql"
          :subname "//localhost:3306/countdownd"
          :user "countdown_user"
          :password "sliplane"
          :auto-commit true
          :fetch-size 500})

(ql/open-global :db-conn db)

(def ^:const all-months
  (vec (map keyword ["Jan" "Feb" "Mar" "Apr" "May" "Jun"
   "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])))

(def ^:const month-map
  (zipmap all-months (range 1 13)))

(defn month-from-n "Get month corresponding to its natural index (1-12)" [n]
  (all-months (dec n)))

(defn event-add "Add a new event" [event]
  (do (ql/conj! (ql/table :db-conn :countdown) event)
      (first @(-> (ql/table :db-conn :countdown)
                  (ql/sort [:id#desc])
                  (ql/take 1)))))

(defn event-delete "Delete event with given id" [id]
  (ql/disj! (ql/table :db-conn :countdown) (ql/where (= :id id))))

(defn event-with-id "Find event with id" [id]
  (first @(-> (ql/table :db-conn :countdown)
              (ql/select (ql/where (= :id id)))
              (ql/take 1))))

(defn event-date-time "Get canonical date-time for event e" [e]
  (from-sql-date (:expires_at e)))

(defn parse-event 
  "Parse an event from component value map. Supplied date-time values are local to tzone"
  [{:keys [name minute hour day month year tzone]}]
  (let [tzone-minutes (- (Integer. tzone))]
    {:expires_at (to-timestamp
                  (tm/from-time-zone
                   (tm/date-time (Integer. year)
                                   ((keyword month) month-map)
                                   (Integer. day)
                                   (Integer. hour)
                                   (Integer. minute))
                   (tm/time-zone-for-offset (quot tzone-minutes 60)
                                            (mod tzone-minutes 60))))   
     :name name
     :comment ""}))

