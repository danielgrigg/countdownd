(ns countdownd.events
  (:use countdownd.util))

(def ^:const all-months
  (vec (map keyword ["Jan" "Feb" "Mar" "Apr" "May" "Jun"
   "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])))

(def ^:const month-map
  (zipmap all-months (range 0 12)))

(defn month-from-n [n]
  "Get month corresponding to its natural index (1-12)"
  (all-months (dec n)))

(def all-events (atom {}))

(defn add-event [event]
  (if-let [key (resource-key (:name event))]
    (swap! all-events assoc key event)))

(defn get-event [name]
  (let [k (resource-key name)]
    (k @all-events)))

(defn parse-event [{:keys [minute hour day month year name]}]
  {:hour (Integer. hour)
   :minute (Integer. minute)
   :day (Integer. day)
   :month (or ((keyword month) month-map) :Janurary)
   :year (Integer. year)
   ;;TODO - gen ids from the db
   :name (if (empty? name) (str "c" (rand-int 1e4)) name)})

(defn event-date-str [{:keys [year month day]}]
  (str year "/" (inc month) "/" (inc day)))

(defn event-time-str [{:keys [hour minute]}]
  (str hour ":" minute))
