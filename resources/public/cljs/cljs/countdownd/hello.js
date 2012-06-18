goog.provide('countdownd.hello');
goog.require('cljs.core');
goog.require('clojure.browser.dom');
/**
* @param {...*} var_args
*/
countdownd.hello.log = (function() { 
var log__delegate = function (args){
return console.log(cljs.core.apply.call(null,cljs.core.pr_str,args));
};
var log = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, args);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__15611){
var args = cljs.core.seq(arglist__15611);;
return log__delegate(args);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
countdownd.hello.log_obj = (function log_obj(obj){
return console.log(obj);
});
countdownd.hello.date_obj = (new Date());
clojure.browser.dom.append.call(null,clojure.browser.dom.get_element.call(null,"result"),clojure.browser.dom.element.call(null,"Hello World!"));
countdownd.hello.log.call(null,"log testing");
