goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf(x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__5915__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__5915 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5915__delegate.call(this, array, i, idxs);
};
G__5915.cljs$lang$maxFixedArity = 2;
G__5915.cljs$lang$applyTo = (function (arglist__5916){
var array = cljs.core.first(arglist__5916);
var i = cljs.core.first(cljs.core.next(arglist__5916));
var idxs = cljs.core.rest(cljs.core.next(arglist__5916));
return G__5915__delegate(array, i, idxs);
});
G__5915.cljs$lang$arity$variadic = G__5915__delegate;
return G__5915;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____5980 = this$;
if(and__3822__auto____5980)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____5980;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____5981 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5981)
{return or__3824__auto____5981;
} else
{var or__3824__auto____5982 = (cljs.core._invoke["_"]);
if(or__3824__auto____5982)
{return or__3824__auto____5982;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____5983 = this$;
if(and__3822__auto____5983)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____5983;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____5984 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5984)
{return or__3824__auto____5984;
} else
{var or__3824__auto____5985 = (cljs.core._invoke["_"]);
if(or__3824__auto____5985)
{return or__3824__auto____5985;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____5986 = this$;
if(and__3822__auto____5986)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____5986;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____5987 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5987)
{return or__3824__auto____5987;
} else
{var or__3824__auto____5988 = (cljs.core._invoke["_"]);
if(or__3824__auto____5988)
{return or__3824__auto____5988;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____5989 = this$;
if(and__3822__auto____5989)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____5989;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____5990 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5990)
{return or__3824__auto____5990;
} else
{var or__3824__auto____5991 = (cljs.core._invoke["_"]);
if(or__3824__auto____5991)
{return or__3824__auto____5991;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____5992 = this$;
if(and__3822__auto____5992)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____5992;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____5993 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5993)
{return or__3824__auto____5993;
} else
{var or__3824__auto____5994 = (cljs.core._invoke["_"]);
if(or__3824__auto____5994)
{return or__3824__auto____5994;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____5995 = this$;
if(and__3822__auto____5995)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____5995;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____5996 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5996)
{return or__3824__auto____5996;
} else
{var or__3824__auto____5997 = (cljs.core._invoke["_"]);
if(or__3824__auto____5997)
{return or__3824__auto____5997;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____5998 = this$;
if(and__3822__auto____5998)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____5998;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____5999 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5999)
{return or__3824__auto____5999;
} else
{var or__3824__auto____6000 = (cljs.core._invoke["_"]);
if(or__3824__auto____6000)
{return or__3824__auto____6000;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6001 = this$;
if(and__3822__auto____6001)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6001;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____6002 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6002)
{return or__3824__auto____6002;
} else
{var or__3824__auto____6003 = (cljs.core._invoke["_"]);
if(or__3824__auto____6003)
{return or__3824__auto____6003;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6004 = this$;
if(and__3822__auto____6004)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6004;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____6005 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6005)
{return or__3824__auto____6005;
} else
{var or__3824__auto____6006 = (cljs.core._invoke["_"]);
if(or__3824__auto____6006)
{return or__3824__auto____6006;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6007 = this$;
if(and__3822__auto____6007)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6007;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____6008 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6008)
{return or__3824__auto____6008;
} else
{var or__3824__auto____6009 = (cljs.core._invoke["_"]);
if(or__3824__auto____6009)
{return or__3824__auto____6009;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6010 = this$;
if(and__3822__auto____6010)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6010;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____6011 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6011)
{return or__3824__auto____6011;
} else
{var or__3824__auto____6012 = (cljs.core._invoke["_"]);
if(or__3824__auto____6012)
{return or__3824__auto____6012;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6013 = this$;
if(and__3822__auto____6013)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6013;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____6014 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6014)
{return or__3824__auto____6014;
} else
{var or__3824__auto____6015 = (cljs.core._invoke["_"]);
if(or__3824__auto____6015)
{return or__3824__auto____6015;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6016 = this$;
if(and__3822__auto____6016)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6016;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____6017 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6017)
{return or__3824__auto____6017;
} else
{var or__3824__auto____6018 = (cljs.core._invoke["_"]);
if(or__3824__auto____6018)
{return or__3824__auto____6018;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6019 = this$;
if(and__3822__auto____6019)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6019;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____6020 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6020)
{return or__3824__auto____6020;
} else
{var or__3824__auto____6021 = (cljs.core._invoke["_"]);
if(or__3824__auto____6021)
{return or__3824__auto____6021;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6022 = this$;
if(and__3822__auto____6022)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6022;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____6023 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6023)
{return or__3824__auto____6023;
} else
{var or__3824__auto____6024 = (cljs.core._invoke["_"]);
if(or__3824__auto____6024)
{return or__3824__auto____6024;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6025 = this$;
if(and__3822__auto____6025)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6025;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____6026 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6026)
{return or__3824__auto____6026;
} else
{var or__3824__auto____6027 = (cljs.core._invoke["_"]);
if(or__3824__auto____6027)
{return or__3824__auto____6027;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6028 = this$;
if(and__3822__auto____6028)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6028;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____6029 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6029)
{return or__3824__auto____6029;
} else
{var or__3824__auto____6030 = (cljs.core._invoke["_"]);
if(or__3824__auto____6030)
{return or__3824__auto____6030;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6031 = this$;
if(and__3822__auto____6031)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6031;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____6032 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6032)
{return or__3824__auto____6032;
} else
{var or__3824__auto____6033 = (cljs.core._invoke["_"]);
if(or__3824__auto____6033)
{return or__3824__auto____6033;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6034 = this$;
if(and__3822__auto____6034)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6034;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____6035 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6035)
{return or__3824__auto____6035;
} else
{var or__3824__auto____6036 = (cljs.core._invoke["_"]);
if(or__3824__auto____6036)
{return or__3824__auto____6036;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6037 = this$;
if(and__3822__auto____6037)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6037;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____6038 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6038)
{return or__3824__auto____6038;
} else
{var or__3824__auto____6039 = (cljs.core._invoke["_"]);
if(or__3824__auto____6039)
{return or__3824__auto____6039;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6040 = this$;
if(and__3822__auto____6040)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6040;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____6041 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6041)
{return or__3824__auto____6041;
} else
{var or__3824__auto____6042 = (cljs.core._invoke["_"]);
if(or__3824__auto____6042)
{return or__3824__auto____6042;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6046 = coll;
if(and__3822__auto____6046)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6046;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6047 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____6047)
{return or__3824__auto____6047;
} else
{var or__3824__auto____6048 = (cljs.core._count["_"]);
if(or__3824__auto____6048)
{return or__3824__auto____6048;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6052 = coll;
if(and__3822__auto____6052)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6052;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6053 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____6053)
{return or__3824__auto____6053;
} else
{var or__3824__auto____6054 = (cljs.core._empty["_"]);
if(or__3824__auto____6054)
{return or__3824__auto____6054;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6058 = coll;
if(and__3822__auto____6058)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6058;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6059 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____6059)
{return or__3824__auto____6059;
} else
{var or__3824__auto____6060 = (cljs.core._conj["_"]);
if(or__3824__auto____6060)
{return or__3824__auto____6060;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6067 = coll;
if(and__3822__auto____6067)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6067;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6068 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6068)
{return or__3824__auto____6068;
} else
{var or__3824__auto____6069 = (cljs.core._nth["_"]);
if(or__3824__auto____6069)
{return or__3824__auto____6069;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6070 = coll;
if(and__3822__auto____6070)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6070;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6071 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6071)
{return or__3824__auto____6071;
} else
{var or__3824__auto____6072 = (cljs.core._nth["_"]);
if(or__3824__auto____6072)
{return or__3824__auto____6072;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6076 = coll;
if(and__3822__auto____6076)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6076;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6077 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____6077)
{return or__3824__auto____6077;
} else
{var or__3824__auto____6078 = (cljs.core._first["_"]);
if(or__3824__auto____6078)
{return or__3824__auto____6078;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6082 = coll;
if(and__3822__auto____6082)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6082;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6083 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____6083)
{return or__3824__auto____6083;
} else
{var or__3824__auto____6084 = (cljs.core._rest["_"]);
if(or__3824__auto____6084)
{return or__3824__auto____6084;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6088 = coll;
if(and__3822__auto____6088)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6088;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6089 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____6089)
{return or__3824__auto____6089;
} else
{var or__3824__auto____6090 = (cljs.core._next["_"]);
if(or__3824__auto____6090)
{return or__3824__auto____6090;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6097 = o;
if(and__3822__auto____6097)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6097;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6098 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6098)
{return or__3824__auto____6098;
} else
{var or__3824__auto____6099 = (cljs.core._lookup["_"]);
if(or__3824__auto____6099)
{return or__3824__auto____6099;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6100 = o;
if(and__3822__auto____6100)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6100;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6101 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6101)
{return or__3824__auto____6101;
} else
{var or__3824__auto____6102 = (cljs.core._lookup["_"]);
if(or__3824__auto____6102)
{return or__3824__auto____6102;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6106 = coll;
if(and__3822__auto____6106)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6106;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6107 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____6107)
{return or__3824__auto____6107;
} else
{var or__3824__auto____6108 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6108)
{return or__3824__auto____6108;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6112 = coll;
if(and__3822__auto____6112)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6112;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6113 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____6113)
{return or__3824__auto____6113;
} else
{var or__3824__auto____6114 = (cljs.core._assoc["_"]);
if(or__3824__auto____6114)
{return or__3824__auto____6114;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6118 = coll;
if(and__3822__auto____6118)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6118;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6119 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____6119)
{return or__3824__auto____6119;
} else
{var or__3824__auto____6120 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6120)
{return or__3824__auto____6120;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6124 = coll;
if(and__3822__auto____6124)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6124;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6125 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____6125)
{return or__3824__auto____6125;
} else
{var or__3824__auto____6126 = (cljs.core._key["_"]);
if(or__3824__auto____6126)
{return or__3824__auto____6126;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6130 = coll;
if(and__3822__auto____6130)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6130;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6131 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____6131)
{return or__3824__auto____6131;
} else
{var or__3824__auto____6132 = (cljs.core._val["_"]);
if(or__3824__auto____6132)
{return or__3824__auto____6132;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6136 = coll;
if(and__3822__auto____6136)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6136;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6137 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____6137)
{return or__3824__auto____6137;
} else
{var or__3824__auto____6138 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6138)
{return or__3824__auto____6138;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6142 = coll;
if(and__3822__auto____6142)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6142;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6143 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____6143)
{return or__3824__auto____6143;
} else
{var or__3824__auto____6144 = (cljs.core._peek["_"]);
if(or__3824__auto____6144)
{return or__3824__auto____6144;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6148 = coll;
if(and__3822__auto____6148)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6148;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6149 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____6149)
{return or__3824__auto____6149;
} else
{var or__3824__auto____6150 = (cljs.core._pop["_"]);
if(or__3824__auto____6150)
{return or__3824__auto____6150;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6154 = coll;
if(and__3822__auto____6154)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6154;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6155 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____6155)
{return or__3824__auto____6155;
} else
{var or__3824__auto____6156 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6156)
{return or__3824__auto____6156;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6160 = o;
if(and__3822__auto____6160)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6160;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6161 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____6161)
{return or__3824__auto____6161;
} else
{var or__3824__auto____6162 = (cljs.core._deref["_"]);
if(or__3824__auto____6162)
{return or__3824__auto____6162;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6166 = o;
if(and__3822__auto____6166)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6166;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6167 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____6167)
{return or__3824__auto____6167;
} else
{var or__3824__auto____6168 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6168)
{return or__3824__auto____6168;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6172 = o;
if(and__3822__auto____6172)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6172;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6173 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____6173)
{return or__3824__auto____6173;
} else
{var or__3824__auto____6174 = (cljs.core._meta["_"]);
if(or__3824__auto____6174)
{return or__3824__auto____6174;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6178 = o;
if(and__3822__auto____6178)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6178;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6179 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____6179)
{return or__3824__auto____6179;
} else
{var or__3824__auto____6180 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6180)
{return or__3824__auto____6180;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6187 = coll;
if(and__3822__auto____6187)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6187;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6188 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6188)
{return or__3824__auto____6188;
} else
{var or__3824__auto____6189 = (cljs.core._reduce["_"]);
if(or__3824__auto____6189)
{return or__3824__auto____6189;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6190 = coll;
if(and__3822__auto____6190)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6190;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6191 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6191)
{return or__3824__auto____6191;
} else
{var or__3824__auto____6192 = (cljs.core._reduce["_"]);
if(or__3824__auto____6192)
{return or__3824__auto____6192;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6196 = coll;
if(and__3822__auto____6196)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6196;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6197 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____6197)
{return or__3824__auto____6197;
} else
{var or__3824__auto____6198 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6198)
{return or__3824__auto____6198;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6202 = o;
if(and__3822__auto____6202)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6202;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6203 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____6203)
{return or__3824__auto____6203;
} else
{var or__3824__auto____6204 = (cljs.core._equiv["_"]);
if(or__3824__auto____6204)
{return or__3824__auto____6204;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6208 = o;
if(and__3822__auto____6208)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6208;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6209 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____6209)
{return or__3824__auto____6209;
} else
{var or__3824__auto____6210 = (cljs.core._hash["_"]);
if(or__3824__auto____6210)
{return or__3824__auto____6210;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6214 = o;
if(and__3822__auto____6214)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6214;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6215 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____6215)
{return or__3824__auto____6215;
} else
{var or__3824__auto____6216 = (cljs.core._seq["_"]);
if(or__3824__auto____6216)
{return or__3824__auto____6216;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6220 = coll;
if(and__3822__auto____6220)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6220;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6221 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____6221)
{return or__3824__auto____6221;
} else
{var or__3824__auto____6222 = (cljs.core._rseq["_"]);
if(or__3824__auto____6222)
{return or__3824__auto____6222;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6226 = coll;
if(and__3822__auto____6226)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6226;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6227 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____6227)
{return or__3824__auto____6227;
} else
{var or__3824__auto____6228 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6228)
{return or__3824__auto____6228;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6232 = coll;
if(and__3822__auto____6232)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6232;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6233 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____6233)
{return or__3824__auto____6233;
} else
{var or__3824__auto____6234 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6234)
{return or__3824__auto____6234;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6238 = coll;
if(and__3822__auto____6238)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6238;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6239 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____6239)
{return or__3824__auto____6239;
} else
{var or__3824__auto____6240 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6240)
{return or__3824__auto____6240;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6244 = coll;
if(and__3822__auto____6244)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6244;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6245 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____6245)
{return or__3824__auto____6245;
} else
{var or__3824__auto____6246 = (cljs.core._comparator["_"]);
if(or__3824__auto____6246)
{return or__3824__auto____6246;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6250 = o;
if(and__3822__auto____6250)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6250;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6251 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____6251)
{return or__3824__auto____6251;
} else
{var or__3824__auto____6252 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6252)
{return or__3824__auto____6252;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6256 = d;
if(and__3822__auto____6256)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6256;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6257 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____6257)
{return or__3824__auto____6257;
} else
{var or__3824__auto____6258 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6258)
{return or__3824__auto____6258;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6262 = this$;
if(and__3822__auto____6262)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6262;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6263 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____6263)
{return or__3824__auto____6263;
} else
{var or__3824__auto____6264 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6264)
{return or__3824__auto____6264;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6268 = this$;
if(and__3822__auto____6268)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6268;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____6269 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____6269)
{return or__3824__auto____6269;
} else
{var or__3824__auto____6270 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6270)
{return or__3824__auto____6270;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6274 = this$;
if(and__3822__auto____6274)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6274;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____6275 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____6275)
{return or__3824__auto____6275;
} else
{var or__3824__auto____6276 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6276)
{return or__3824__auto____6276;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6280 = coll;
if(and__3822__auto____6280)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6280;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____6281 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____6281)
{return or__3824__auto____6281;
} else
{var or__3824__auto____6282 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6282)
{return or__3824__auto____6282;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6286 = tcoll;
if(and__3822__auto____6286)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6286;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____6287 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6287)
{return or__3824__auto____6287;
} else
{var or__3824__auto____6288 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6288)
{return or__3824__auto____6288;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6292 = tcoll;
if(and__3822__auto____6292)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6292;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6293 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6293)
{return or__3824__auto____6293;
} else
{var or__3824__auto____6294 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6294)
{return or__3824__auto____6294;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6298 = tcoll;
if(and__3822__auto____6298)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6298;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____6299 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6299)
{return or__3824__auto____6299;
} else
{var or__3824__auto____6300 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6300)
{return or__3824__auto____6300;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6304 = tcoll;
if(and__3822__auto____6304)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6304;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____6305 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6305)
{return or__3824__auto____6305;
} else
{var or__3824__auto____6306 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6306)
{return or__3824__auto____6306;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6310 = tcoll;
if(and__3822__auto____6310)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6310;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____6311 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6311)
{return or__3824__auto____6311;
} else
{var or__3824__auto____6312 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6312)
{return or__3824__auto____6312;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6316 = tcoll;
if(and__3822__auto____6316)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6316;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6317 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6317)
{return or__3824__auto____6317;
} else
{var or__3824__auto____6318 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6318)
{return or__3824__auto____6318;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6322 = tcoll;
if(and__3822__auto____6322)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6322;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____6323 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6323)
{return or__3824__auto____6323;
} else
{var or__3824__auto____6324 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6324)
{return or__3824__auto____6324;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6328 = x;
if(and__3822__auto____6328)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6328;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____6329 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____6329)
{return or__3824__auto____6329;
} else
{var or__3824__auto____6330 = (cljs.core._compare["_"]);
if(or__3824__auto____6330)
{return or__3824__auto____6330;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6334 = coll;
if(and__3822__auto____6334)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6334;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6335 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____6335)
{return or__3824__auto____6335;
} else
{var or__3824__auto____6336 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6336)
{return or__3824__auto____6336;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6340 = coll;
if(and__3822__auto____6340)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6340;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6341 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____6341)
{return or__3824__auto____6341;
} else
{var or__3824__auto____6342 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6342)
{return or__3824__auto____6342;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6346 = coll;
if(and__3822__auto____6346)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6346;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6347 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____6347)
{return or__3824__auto____6347;
} else
{var or__3824__auto____6348 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6348)
{return or__3824__auto____6348;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6352 = coll;
if(and__3822__auto____6352)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6352;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6353 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____6353)
{return or__3824__auto____6353;
} else
{var or__3824__auto____6354 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6354)
{return or__3824__auto____6354;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____6356 = (x === y);
if(or__3824__auto____6356)
{return or__3824__auto____6356;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6357__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6358 = y;
var G__6359 = cljs.core.first.call(null,more);
var G__6360 = cljs.core.next.call(null,more);
x = G__6358;
y = G__6359;
more = G__6360;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6357 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6357__delegate.call(this, x, y, more);
};
G__6357.cljs$lang$maxFixedArity = 2;
G__6357.cljs$lang$applyTo = (function (arglist__6361){
var x = cljs.core.first(arglist__6361);
var y = cljs.core.first(cljs.core.next(arglist__6361));
var more = cljs.core.rest(cljs.core.next(arglist__6361));
return G__6357__delegate(x, y, more);
});
G__6357.cljs$lang$arity$variadic = G__6357__delegate;
return G__6357;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6362 = null;
var G__6362__2 = (function (o,k){
return null;
});
var G__6362__3 = (function (o,k,not_found){
return not_found;
});
G__6362 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6362__2.call(this,o,k);
case 3:
return G__6362__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6362;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6363 = null;
var G__6363__2 = (function (_,f){
return f.call(null);
});
var G__6363__3 = (function (_,f,start){
return start;
});
G__6363 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6363__2.call(this,_,f);
case 3:
return G__6363__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6363;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6364 = null;
var G__6364__2 = (function (_,n){
return null;
});
var G__6364__3 = (function (_,n,not_found){
return not_found;
});
G__6364 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6364__2.call(this,_,n);
case 3:
return G__6364__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6364;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__6377 = cljs.core._count.call(null,cicoll);
if((cnt__6377 === 0))
{return f.call(null);
} else
{var val__6378 = cljs.core._nth.call(null,cicoll,0);
var n__6379 = 1;
while(true){
if((n__6379 < cnt__6377))
{var nval__6380 = f.call(null,val__6378,cljs.core._nth.call(null,cicoll,n__6379));
if(cljs.core.reduced_QMARK_.call(null,nval__6380))
{return cljs.core.deref.call(null,nval__6380);
} else
{{
var G__6389 = nval__6380;
var G__6390 = (n__6379 + 1);
val__6378 = G__6389;
n__6379 = G__6390;
continue;
}
}
} else
{return val__6378;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6381 = cljs.core._count.call(null,cicoll);
var val__6382 = val;
var n__6383 = 0;
while(true){
if((n__6383 < cnt__6381))
{var nval__6384 = f.call(null,val__6382,cljs.core._nth.call(null,cicoll,n__6383));
if(cljs.core.reduced_QMARK_.call(null,nval__6384))
{return cljs.core.deref.call(null,nval__6384);
} else
{{
var G__6391 = nval__6384;
var G__6392 = (n__6383 + 1);
val__6382 = G__6391;
n__6383 = G__6392;
continue;
}
}
} else
{return val__6382;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6385 = cljs.core._count.call(null,cicoll);
var val__6386 = val;
var n__6387 = idx;
while(true){
if((n__6387 < cnt__6385))
{var nval__6388 = f.call(null,val__6386,cljs.core._nth.call(null,cicoll,n__6387));
if(cljs.core.reduced_QMARK_.call(null,nval__6388))
{return cljs.core.deref.call(null,nval__6388);
} else
{{
var G__6393 = nval__6388;
var G__6394 = (n__6387 + 1);
val__6386 = G__6393;
n__6387 = G__6394;
continue;
}
}
} else
{return val__6386;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__6407 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__6408 = (arr[0]);
var n__6409 = 1;
while(true){
if((n__6409 < cnt__6407))
{var nval__6410 = f.call(null,val__6408,(arr[n__6409]));
if(cljs.core.reduced_QMARK_.call(null,nval__6410))
{return cljs.core.deref.call(null,nval__6410);
} else
{{
var G__6419 = nval__6410;
var G__6420 = (n__6409 + 1);
val__6408 = G__6419;
n__6409 = G__6420;
continue;
}
}
} else
{return val__6408;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6411 = arr.length;
var val__6412 = val;
var n__6413 = 0;
while(true){
if((n__6413 < cnt__6411))
{var nval__6414 = f.call(null,val__6412,(arr[n__6413]));
if(cljs.core.reduced_QMARK_.call(null,nval__6414))
{return cljs.core.deref.call(null,nval__6414);
} else
{{
var G__6421 = nval__6414;
var G__6422 = (n__6413 + 1);
val__6412 = G__6421;
n__6413 = G__6422;
continue;
}
}
} else
{return val__6412;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6415 = arr.length;
var val__6416 = val;
var n__6417 = idx;
while(true){
if((n__6417 < cnt__6415))
{var nval__6418 = f.call(null,val__6416,(arr[n__6417]));
if(cljs.core.reduced_QMARK_.call(null,nval__6418))
{return cljs.core.deref.call(null,nval__6418);
} else
{{
var G__6423 = nval__6418;
var G__6424 = (n__6417 + 1);
val__6416 = G__6423;
n__6417 = G__6424;
continue;
}
}
} else
{return val__6416;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6425 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6426 = this;
if(((this__6426.i + 1) < this__6426.a.length))
{return (new cljs.core.IndexedSeq(this__6426.a,(this__6426.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6427 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6428 = this;
var c__6429 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6429 > 0))
{return (new cljs.core.RSeq(coll,(c__6429 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6430 = this;
var this__6431 = this;
return cljs.core.pr_str.call(null,this__6431);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6432 = this;
if(cljs.core.counted_QMARK_.call(null,this__6432.a))
{return cljs.core.ci_reduce.call(null,this__6432.a,f,(this__6432.a[this__6432.i]),(this__6432.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6432.a[this__6432.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6433 = this;
if(cljs.core.counted_QMARK_.call(null,this__6433.a))
{return cljs.core.ci_reduce.call(null,this__6433.a,f,start,this__6433.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6434 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6435 = this;
return (this__6435.a.length - this__6435.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6436 = this;
return (this__6436.a[this__6436.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6437 = this;
if(((this__6437.i + 1) < this__6437.a.length))
{return (new cljs.core.IndexedSeq(this__6437.a,(this__6437.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6438 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6439 = this;
var i__6440 = (n + this__6439.i);
if((i__6440 < this__6439.a.length))
{return (this__6439.a[i__6440]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6441 = this;
var i__6442 = (n + this__6441.i);
if((i__6442 < this__6441.a.length))
{return (this__6441.a[i__6442]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__6443 = null;
var G__6443__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6443__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6443 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6443__2.call(this,array,f);
case 3:
return G__6443__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6443;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6444 = null;
var G__6444__2 = (function (array,k){
return (array[k]);
});
var G__6444__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6444 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6444__2.call(this,array,k);
case 3:
return G__6444__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6444;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6445 = null;
var G__6445__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6445__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6445 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6445__2.call(this,array,n);
case 3:
return G__6445__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6445;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6446 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6447 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6448 = this;
var this__6449 = this;
return cljs.core.pr_str.call(null,this__6449);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6450 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6451 = this;
return (this__6451.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6452 = this;
return cljs.core._nth.call(null,this__6452.ci,this__6452.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6453 = this;
if((this__6453.i > 0))
{return (new cljs.core.RSeq(this__6453.ci,(this__6453.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6454 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6455 = this;
return (new cljs.core.RSeq(this__6455.ci,this__6455.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6456 = this;
return this__6456.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6460__6461 = coll;
if(G__6460__6461)
{if((function (){var or__3824__auto____6462 = (G__6460__6461.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6462)
{return or__3824__auto____6462;
} else
{return G__6460__6461.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6460__6461.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6460__6461);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6460__6461);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6467__6468 = coll;
if(G__6467__6468)
{if((function (){var or__3824__auto____6469 = (G__6467__6468.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6469)
{return or__3824__auto____6469;
} else
{return G__6467__6468.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6467__6468.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6467__6468);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6467__6468);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6470 = cljs.core.seq.call(null,coll);
if((s__6470 == null))
{return null;
} else
{return cljs.core._first.call(null,s__6470);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__6475__6476 = coll;
if(G__6475__6476)
{if((function (){var or__3824__auto____6477 = (G__6475__6476.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6477)
{return or__3824__auto____6477;
} else
{return G__6475__6476.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6475__6476.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6475__6476);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6475__6476);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6478 = cljs.core.seq.call(null,coll);
if(!((s__6478 == null)))
{return cljs.core._rest.call(null,s__6478);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6482__6483 = coll;
if(G__6482__6483)
{if((function (){var or__3824__auto____6484 = (G__6482__6483.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____6484)
{return or__3824__auto____6484;
} else
{return G__6482__6483.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6482__6483.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6482__6483);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6482__6483);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__6486 = cljs.core.next.call(null,s);
if(!((sn__6486 == null)))
{{
var G__6487 = sn__6486;
s = G__6487;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__6488__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6489 = conj.call(null,coll,x);
var G__6490 = cljs.core.first.call(null,xs);
var G__6491 = cljs.core.next.call(null,xs);
coll = G__6489;
x = G__6490;
xs = G__6491;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6488 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6488__delegate.call(this, coll, x, xs);
};
G__6488.cljs$lang$maxFixedArity = 2;
G__6488.cljs$lang$applyTo = (function (arglist__6492){
var coll = cljs.core.first(arglist__6492);
var x = cljs.core.first(cljs.core.next(arglist__6492));
var xs = cljs.core.rest(cljs.core.next(arglist__6492));
return G__6488__delegate(coll, x, xs);
});
G__6488.cljs$lang$arity$variadic = G__6488__delegate;
return G__6488;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__6495 = cljs.core.seq.call(null,coll);
var acc__6496 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6495))
{return (acc__6496 + cljs.core._count.call(null,s__6495));
} else
{{
var G__6497 = cljs.core.next.call(null,s__6495);
var G__6498 = (acc__6496 + 1);
s__6495 = G__6497;
acc__6496 = G__6498;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__6505__6506 = coll;
if(G__6505__6506)
{if((function (){var or__3824__auto____6507 = (G__6505__6506.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6507)
{return or__3824__auto____6507;
} else
{return G__6505__6506.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6505__6506.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6505__6506);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6505__6506);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__6508__6509 = coll;
if(G__6508__6509)
{if((function (){var or__3824__auto____6510 = (G__6508__6509.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6510)
{return or__3824__auto____6510;
} else
{return G__6508__6509.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6508__6509.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6508__6509);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6508__6509);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__6513__delegate = function (coll,k,v,kvs){
while(true){
var ret__6512 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6514 = ret__6512;
var G__6515 = cljs.core.first.call(null,kvs);
var G__6516 = cljs.core.second.call(null,kvs);
var G__6517 = cljs.core.nnext.call(null,kvs);
coll = G__6514;
k = G__6515;
v = G__6516;
kvs = G__6517;
continue;
}
} else
{return ret__6512;
}
break;
}
};
var G__6513 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6513__delegate.call(this, coll, k, v, kvs);
};
G__6513.cljs$lang$maxFixedArity = 3;
G__6513.cljs$lang$applyTo = (function (arglist__6518){
var coll = cljs.core.first(arglist__6518);
var k = cljs.core.first(cljs.core.next(arglist__6518));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6518)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6518)));
return G__6513__delegate(coll, k, v, kvs);
});
G__6513.cljs$lang$arity$variadic = G__6513__delegate;
return G__6513;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__6521__delegate = function (coll,k,ks){
while(true){
var ret__6520 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6522 = ret__6520;
var G__6523 = cljs.core.first.call(null,ks);
var G__6524 = cljs.core.next.call(null,ks);
coll = G__6522;
k = G__6523;
ks = G__6524;
continue;
}
} else
{return ret__6520;
}
break;
}
};
var G__6521 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6521__delegate.call(this, coll, k, ks);
};
G__6521.cljs$lang$maxFixedArity = 2;
G__6521.cljs$lang$applyTo = (function (arglist__6525){
var coll = cljs.core.first(arglist__6525);
var k = cljs.core.first(cljs.core.next(arglist__6525));
var ks = cljs.core.rest(cljs.core.next(arglist__6525));
return G__6521__delegate(coll, k, ks);
});
G__6521.cljs$lang$arity$variadic = G__6521__delegate;
return G__6521;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__6529__6530 = o;
if(G__6529__6530)
{if((function (){var or__3824__auto____6531 = (G__6529__6530.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____6531)
{return or__3824__auto____6531;
} else
{return G__6529__6530.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6529__6530.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6529__6530);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6529__6530);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__6534__delegate = function (coll,k,ks){
while(true){
var ret__6533 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6535 = ret__6533;
var G__6536 = cljs.core.first.call(null,ks);
var G__6537 = cljs.core.next.call(null,ks);
coll = G__6535;
k = G__6536;
ks = G__6537;
continue;
}
} else
{return ret__6533;
}
break;
}
};
var G__6534 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6534__delegate.call(this, coll, k, ks);
};
G__6534.cljs$lang$maxFixedArity = 2;
G__6534.cljs$lang$applyTo = (function (arglist__6538){
var coll = cljs.core.first(arglist__6538);
var k = cljs.core.first(cljs.core.next(arglist__6538));
var ks = cljs.core.rest(cljs.core.next(arglist__6538));
return G__6534__delegate(coll, k, ks);
});
G__6534.cljs$lang$arity$variadic = G__6534__delegate;
return G__6534;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__6540 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__6540);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__6540;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__6542 = (cljs.core.string_hash_cache[k]);
if(!((h__6542 == null)))
{return h__6542;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____6544 = goog.isString(o);
if(and__3822__auto____6544)
{return check_cache;
} else
{return and__3822__auto____6544;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6548__6549 = x;
if(G__6548__6549)
{if((function (){var or__3824__auto____6550 = (G__6548__6549.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____6550)
{return or__3824__auto____6550;
} else
{return G__6548__6549.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6548__6549.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6548__6549);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6548__6549);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6554__6555 = x;
if(G__6554__6555)
{if((function (){var or__3824__auto____6556 = (G__6554__6555.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____6556)
{return or__3824__auto____6556;
} else
{return G__6554__6555.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6554__6555.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6554__6555);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6554__6555);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6560__6561 = x;
if(G__6560__6561)
{if((function (){var or__3824__auto____6562 = (G__6560__6561.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____6562)
{return or__3824__auto____6562;
} else
{return G__6560__6561.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6560__6561.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6560__6561);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6560__6561);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6566__6567 = x;
if(G__6566__6567)
{if((function (){var or__3824__auto____6568 = (G__6566__6567.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____6568)
{return or__3824__auto____6568;
} else
{return G__6566__6567.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6566__6567.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6566__6567);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6566__6567);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6572__6573 = x;
if(G__6572__6573)
{if((function (){var or__3824__auto____6574 = (G__6572__6573.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____6574)
{return or__3824__auto____6574;
} else
{return G__6572__6573.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6572__6573.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6572__6573);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6572__6573);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6578__6579 = x;
if(G__6578__6579)
{if((function (){var or__3824__auto____6580 = (G__6578__6579.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6580)
{return or__3824__auto____6580;
} else
{return G__6578__6579.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6578__6579.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6578__6579);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6578__6579);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6584__6585 = x;
if(G__6584__6585)
{if((function (){var or__3824__auto____6586 = (G__6584__6585.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6586)
{return or__3824__auto____6586;
} else
{return G__6584__6585.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6584__6585.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6584__6585);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6584__6585);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6590__6591 = x;
if(G__6590__6591)
{if((function (){var or__3824__auto____6592 = (G__6590__6591.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6592)
{return or__3824__auto____6592;
} else
{return G__6590__6591.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__6590__6591.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6590__6591);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6590__6591);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__6596__6597 = x;
if(G__6596__6597)
{if((function (){var or__3824__auto____6598 = (G__6596__6597.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____6598)
{return or__3824__auto____6598;
} else
{return G__6596__6597.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__6596__6597.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6596__6597);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6596__6597);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__6602__6603 = x;
if(G__6602__6603)
{if(cljs.core.truth_((function (){var or__3824__auto____6604 = null;
if(cljs.core.truth_(or__3824__auto____6604))
{return or__3824__auto____6604;
} else
{return G__6602__6603.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__6602__6603.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6602__6603);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6602__6603);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__6605__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__6605 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6605__delegate.call(this, keyvals);
};
G__6605.cljs$lang$maxFixedArity = 0;
G__6605.cljs$lang$applyTo = (function (arglist__6606){
var keyvals = cljs.core.seq(arglist__6606);;
return G__6605__delegate(keyvals);
});
G__6605.cljs$lang$arity$variadic = G__6605__delegate;
return G__6605;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__6608 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__6608.push(key);
}));
return keys__6608;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__6612 = i;
var j__6613 = j;
var len__6614 = len;
while(true){
if((len__6614 === 0))
{return to;
} else
{(to[j__6613] = (from[i__6612]));
{
var G__6615 = (i__6612 + 1);
var G__6616 = (j__6613 + 1);
var G__6617 = (len__6614 - 1);
i__6612 = G__6615;
j__6613 = G__6616;
len__6614 = G__6617;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__6621 = (i + (len - 1));
var j__6622 = (j + (len - 1));
var len__6623 = len;
while(true){
if((len__6623 === 0))
{return to;
} else
{(to[j__6622] = (from[i__6621]));
{
var G__6624 = (i__6621 - 1);
var G__6625 = (j__6622 - 1);
var G__6626 = (len__6623 - 1);
i__6621 = G__6624;
j__6622 = G__6625;
len__6623 = G__6626;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__6630__6631 = s;
if(G__6630__6631)
{if((function (){var or__3824__auto____6632 = (G__6630__6631.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6632)
{return or__3824__auto____6632;
} else
{return G__6630__6631.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6630__6631.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6630__6631);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6630__6631);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__6636__6637 = s;
if(G__6636__6637)
{if((function (){var or__3824__auto____6638 = (G__6636__6637.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6638)
{return or__3824__auto____6638;
} else
{return G__6636__6637.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6636__6637.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6636__6637);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6636__6637);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____6641 = goog.isString(x);
if(and__3822__auto____6641)
{return !((function (){var or__3824__auto____6642 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____6642)
{return or__3824__auto____6642;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____6641;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____6644 = goog.isString(x);
if(and__3822__auto____6644)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____6644;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____6646 = goog.isString(x);
if(and__3822__auto____6646)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____6646;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____6651 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____6651)
{return or__3824__auto____6651;
} else
{var G__6652__6653 = f;
if(G__6652__6653)
{if((function (){var or__3824__auto____6654 = (G__6652__6653.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____6654)
{return or__3824__auto____6654;
} else
{return G__6652__6653.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__6652__6653.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6652__6653);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6652__6653);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____6656 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____6656)
{return (n == n.toFixed());
} else
{return and__3822__auto____6656;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____6659 = coll;
if(cljs.core.truth_(and__3822__auto____6659))
{var and__3822__auto____6660 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____6660)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____6660;
}
} else
{return and__3822__auto____6659;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__6669__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__6665 = cljs.core.set([y,x]);
var xs__6666 = more;
while(true){
var x__6667 = cljs.core.first.call(null,xs__6666);
var etc__6668 = cljs.core.next.call(null,xs__6666);
if(cljs.core.truth_(xs__6666))
{if(cljs.core.contains_QMARK_.call(null,s__6665,x__6667))
{return false;
} else
{{
var G__6670 = cljs.core.conj.call(null,s__6665,x__6667);
var G__6671 = etc__6668;
s__6665 = G__6670;
xs__6666 = G__6671;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__6669 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6669__delegate.call(this, x, y, more);
};
G__6669.cljs$lang$maxFixedArity = 2;
G__6669.cljs$lang$applyTo = (function (arglist__6672){
var x = cljs.core.first(arglist__6672);
var y = cljs.core.first(cljs.core.next(arglist__6672));
var more = cljs.core.rest(cljs.core.next(arglist__6672));
return G__6669__delegate(x, y, more);
});
G__6669.cljs$lang$arity$variadic = G__6669__delegate;
return G__6669;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__6676__6677 = x;
if(G__6676__6677)
{if(cljs.core.truth_((function (){var or__3824__auto____6678 = null;
if(cljs.core.truth_(or__3824__auto____6678))
{return or__3824__auto____6678;
} else
{return G__6676__6677.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__6676__6677.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6676__6677);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6676__6677);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__6683 = cljs.core.count.call(null,xs);
var yl__6684 = cljs.core.count.call(null,ys);
if((xl__6683 < yl__6684))
{return -1;
} else
{if((xl__6683 > yl__6684))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__6683,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__6685 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____6686 = (d__6685 === 0);
if(and__3822__auto____6686)
{return ((n + 1) < len);
} else
{return and__3822__auto____6686;
}
})())
{{
var G__6687 = xs;
var G__6688 = ys;
var G__6689 = len;
var G__6690 = (n + 1);
xs = G__6687;
ys = G__6688;
len = G__6689;
n = G__6690;
continue;
}
} else
{return d__6685;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__6692 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__6692))
{return r__6692;
} else
{if(cljs.core.truth_(r__6692))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__6694 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__6694,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__6694);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____6700 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____6700)
{var s__6701 = temp__3971__auto____6700;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__6701),cljs.core.next.call(null,s__6701));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__6702 = val;
var coll__6703 = cljs.core.seq.call(null,coll);
while(true){
if(coll__6703)
{var nval__6704 = f.call(null,val__6702,cljs.core.first.call(null,coll__6703));
if(cljs.core.reduced_QMARK_.call(null,nval__6704))
{return cljs.core.deref.call(null,nval__6704);
} else
{{
var G__6705 = nval__6704;
var G__6706 = cljs.core.next.call(null,coll__6703);
val__6702 = G__6705;
coll__6703 = G__6706;
continue;
}
}
} else
{return val__6702;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
void 0;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__6708 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__6708);
return cljs.core.vec.call(null,a__6708);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__6715__6716 = coll;
if(G__6715__6716)
{if((function (){var or__3824__auto____6717 = (G__6715__6716.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6717)
{return or__3824__auto____6717;
} else
{return G__6715__6716.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6715__6716.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6715__6716);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6715__6716);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__6718__6719 = coll;
if(G__6718__6719)
{if((function (){var or__3824__auto____6720 = (G__6718__6719.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6720)
{return or__3824__auto____6720;
} else
{return G__6718__6719.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6718__6719.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6718__6719);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6718__6719);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__6721 = this;
return this__6721.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__6722__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__6722 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6722__delegate.call(this, x, y, more);
};
G__6722.cljs$lang$maxFixedArity = 2;
G__6722.cljs$lang$applyTo = (function (arglist__6723){
var x = cljs.core.first(arglist__6723);
var y = cljs.core.first(cljs.core.next(arglist__6723));
var more = cljs.core.rest(cljs.core.next(arglist__6723));
return G__6722__delegate(x, y, more);
});
G__6722.cljs$lang$arity$variadic = G__6722__delegate;
return G__6722;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__6724__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__6724 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6724__delegate.call(this, x, y, more);
};
G__6724.cljs$lang$maxFixedArity = 2;
G__6724.cljs$lang$applyTo = (function (arglist__6725){
var x = cljs.core.first(arglist__6725);
var y = cljs.core.first(cljs.core.next(arglist__6725));
var more = cljs.core.rest(cljs.core.next(arglist__6725));
return G__6724__delegate(x, y, more);
});
G__6724.cljs$lang$arity$variadic = G__6724__delegate;
return G__6724;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__6726__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__6726 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6726__delegate.call(this, x, y, more);
};
G__6726.cljs$lang$maxFixedArity = 2;
G__6726.cljs$lang$applyTo = (function (arglist__6727){
var x = cljs.core.first(arglist__6727);
var y = cljs.core.first(cljs.core.next(arglist__6727));
var more = cljs.core.rest(cljs.core.next(arglist__6727));
return G__6726__delegate(x, y, more);
});
G__6726.cljs$lang$arity$variadic = G__6726__delegate;
return G__6726;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__6728__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__6728 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6728__delegate.call(this, x, y, more);
};
G__6728.cljs$lang$maxFixedArity = 2;
G__6728.cljs$lang$applyTo = (function (arglist__6729){
var x = cljs.core.first(arglist__6729);
var y = cljs.core.first(cljs.core.next(arglist__6729));
var more = cljs.core.rest(cljs.core.next(arglist__6729));
return G__6728__delegate(x, y, more);
});
G__6728.cljs$lang$arity$variadic = G__6728__delegate;
return G__6728;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__6730__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__6731 = y;
var G__6732 = cljs.core.first.call(null,more);
var G__6733 = cljs.core.next.call(null,more);
x = G__6731;
y = G__6732;
more = G__6733;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6730 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6730__delegate.call(this, x, y, more);
};
G__6730.cljs$lang$maxFixedArity = 2;
G__6730.cljs$lang$applyTo = (function (arglist__6734){
var x = cljs.core.first(arglist__6734);
var y = cljs.core.first(cljs.core.next(arglist__6734));
var more = cljs.core.rest(cljs.core.next(arglist__6734));
return G__6730__delegate(x, y, more);
});
G__6730.cljs$lang$arity$variadic = G__6730__delegate;
return G__6730;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__6735__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__6736 = y;
var G__6737 = cljs.core.first.call(null,more);
var G__6738 = cljs.core.next.call(null,more);
x = G__6736;
y = G__6737;
more = G__6738;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6735 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6735__delegate.call(this, x, y, more);
};
G__6735.cljs$lang$maxFixedArity = 2;
G__6735.cljs$lang$applyTo = (function (arglist__6739){
var x = cljs.core.first(arglist__6739);
var y = cljs.core.first(cljs.core.next(arglist__6739));
var more = cljs.core.rest(cljs.core.next(arglist__6739));
return G__6735__delegate(x, y, more);
});
G__6735.cljs$lang$arity$variadic = G__6735__delegate;
return G__6735;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__6740__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__6741 = y;
var G__6742 = cljs.core.first.call(null,more);
var G__6743 = cljs.core.next.call(null,more);
x = G__6741;
y = G__6742;
more = G__6743;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6740 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6740__delegate.call(this, x, y, more);
};
G__6740.cljs$lang$maxFixedArity = 2;
G__6740.cljs$lang$applyTo = (function (arglist__6744){
var x = cljs.core.first(arglist__6744);
var y = cljs.core.first(cljs.core.next(arglist__6744));
var more = cljs.core.rest(cljs.core.next(arglist__6744));
return G__6740__delegate(x, y, more);
});
G__6740.cljs$lang$arity$variadic = G__6740__delegate;
return G__6740;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__6745__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__6746 = y;
var G__6747 = cljs.core.first.call(null,more);
var G__6748 = cljs.core.next.call(null,more);
x = G__6746;
y = G__6747;
more = G__6748;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6745 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6745__delegate.call(this, x, y, more);
};
G__6745.cljs$lang$maxFixedArity = 2;
G__6745.cljs$lang$applyTo = (function (arglist__6749){
var x = cljs.core.first(arglist__6749);
var y = cljs.core.first(cljs.core.next(arglist__6749));
var more = cljs.core.rest(cljs.core.next(arglist__6749));
return G__6745__delegate(x, y, more);
});
G__6745.cljs$lang$arity$variadic = G__6745__delegate;
return G__6745;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__6750__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__6750 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6750__delegate.call(this, x, y, more);
};
G__6750.cljs$lang$maxFixedArity = 2;
G__6750.cljs$lang$applyTo = (function (arglist__6751){
var x = cljs.core.first(arglist__6751);
var y = cljs.core.first(cljs.core.next(arglist__6751));
var more = cljs.core.rest(cljs.core.next(arglist__6751));
return G__6750__delegate(x, y, more);
});
G__6750.cljs$lang$arity$variadic = G__6750__delegate;
return G__6750;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__6752__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__6752 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6752__delegate.call(this, x, y, more);
};
G__6752.cljs$lang$maxFixedArity = 2;
G__6752.cljs$lang$applyTo = (function (arglist__6753){
var x = cljs.core.first(arglist__6753);
var y = cljs.core.first(cljs.core.next(arglist__6753));
var more = cljs.core.rest(cljs.core.next(arglist__6753));
return G__6752__delegate(x, y, more);
});
G__6752.cljs$lang$arity$variadic = G__6752__delegate;
return G__6752;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__6755 = (n % d);
return cljs.core.fix.call(null,((n - rem__6755) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__6757 = cljs.core.quot.call(null,n,d);
return (n - (d * q__6757));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__6760 = (v - ((v >> 1) & 1431655765));
var v__6761 = ((v__6760 & 858993459) + ((v__6760 >> 2) & 858993459));
return ((((v__6761 + (v__6761 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__6762__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6763 = y;
var G__6764 = cljs.core.first.call(null,more);
var G__6765 = cljs.core.next.call(null,more);
x = G__6763;
y = G__6764;
more = G__6765;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6762 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6762__delegate.call(this, x, y, more);
};
G__6762.cljs$lang$maxFixedArity = 2;
G__6762.cljs$lang$applyTo = (function (arglist__6766){
var x = cljs.core.first(arglist__6766);
var y = cljs.core.first(cljs.core.next(arglist__6766));
var more = cljs.core.rest(cljs.core.next(arglist__6766));
return G__6762__delegate(x, y, more);
});
G__6762.cljs$lang$arity$variadic = G__6762__delegate;
return G__6762;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__6770 = n;
var xs__6771 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6772 = xs__6771;
if(and__3822__auto____6772)
{return (n__6770 > 0);
} else
{return and__3822__auto____6772;
}
})()))
{{
var G__6773 = (n__6770 - 1);
var G__6774 = cljs.core.next.call(null,xs__6771);
n__6770 = G__6773;
xs__6771 = G__6774;
continue;
}
} else
{return xs__6771;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__6775__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6776 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__6777 = cljs.core.next.call(null,more);
sb = G__6776;
more = G__6777;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__6775 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6775__delegate.call(this, x, ys);
};
G__6775.cljs$lang$maxFixedArity = 1;
G__6775.cljs$lang$applyTo = (function (arglist__6778){
var x = cljs.core.first(arglist__6778);
var ys = cljs.core.rest(arglist__6778);
return G__6775__delegate(x, ys);
});
G__6775.cljs$lang$arity$variadic = G__6775__delegate;
return G__6775;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__6779__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6780 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__6781 = cljs.core.next.call(null,more);
sb = G__6780;
more = G__6781;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__6779 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6779__delegate.call(this, x, ys);
};
G__6779.cljs$lang$maxFixedArity = 1;
G__6779.cljs$lang$applyTo = (function (arglist__6782){
var x = cljs.core.first(arglist__6782);
var ys = cljs.core.rest(arglist__6782);
return G__6779__delegate(x, ys);
});
G__6779.cljs$lang$arity$variadic = G__6779__delegate;
return G__6779;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__6785 = cljs.core.seq.call(null,x);
var ys__6786 = cljs.core.seq.call(null,y);
while(true){
if((xs__6785 == null))
{return (ys__6786 == null);
} else
{if((ys__6786 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__6785),cljs.core.first.call(null,ys__6786)))
{{
var G__6787 = cljs.core.next.call(null,xs__6785);
var G__6788 = cljs.core.next.call(null,ys__6786);
xs__6785 = G__6787;
ys__6786 = G__6788;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__6789_SHARP_,p2__6790_SHARP_){
return cljs.core.hash_combine.call(null,p1__6789_SHARP_,cljs.core.hash.call(null,p2__6790_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__6794 = 0;
var s__6795 = cljs.core.seq.call(null,m);
while(true){
if(s__6795)
{var e__6796 = cljs.core.first.call(null,s__6795);
{
var G__6797 = ((h__6794 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__6796)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__6796)))) % 4503599627370496);
var G__6798 = cljs.core.next.call(null,s__6795);
h__6794 = G__6797;
s__6795 = G__6798;
continue;
}
} else
{return h__6794;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__6802 = 0;
var s__6803 = cljs.core.seq.call(null,s);
while(true){
if(s__6803)
{var e__6804 = cljs.core.first.call(null,s__6803);
{
var G__6805 = ((h__6802 + cljs.core.hash.call(null,e__6804)) % 4503599627370496);
var G__6806 = cljs.core.next.call(null,s__6803);
h__6802 = G__6805;
s__6803 = G__6806;
continue;
}
} else
{return h__6802;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__6827__6828 = cljs.core.seq.call(null,fn_map);
if(G__6827__6828)
{var G__6830__6832 = cljs.core.first.call(null,G__6827__6828);
var vec__6831__6833 = G__6830__6832;
var key_name__6834 = cljs.core.nth.call(null,vec__6831__6833,0,null);
var f__6835 = cljs.core.nth.call(null,vec__6831__6833,1,null);
var G__6827__6836 = G__6827__6828;
var G__6830__6837 = G__6830__6832;
var G__6827__6838 = G__6827__6836;
while(true){
var vec__6839__6840 = G__6830__6837;
var key_name__6841 = cljs.core.nth.call(null,vec__6839__6840,0,null);
var f__6842 = cljs.core.nth.call(null,vec__6839__6840,1,null);
var G__6827__6843 = G__6827__6838;
var str_name__6844 = cljs.core.name.call(null,key_name__6841);
(obj[str_name__6844] = f__6842);
var temp__3974__auto____6845 = cljs.core.next.call(null,G__6827__6843);
if(temp__3974__auto____6845)
{var G__6827__6846 = temp__3974__auto____6845;
{
var G__6847 = cljs.core.first.call(null,G__6827__6846);
var G__6848 = G__6827__6846;
G__6830__6837 = G__6847;
G__6827__6838 = G__6848;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6849 = this;
var h__2057__auto____6850 = this__6849.__hash;
if(!((h__2057__auto____6850 == null)))
{return h__2057__auto____6850;
} else
{var h__2057__auto____6851 = cljs.core.hash_coll.call(null,coll);
this__6849.__hash = h__2057__auto____6851;
return h__2057__auto____6851;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6852 = this;
if((this__6852.count === 1))
{return null;
} else
{return this__6852.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6853 = this;
return (new cljs.core.List(this__6853.meta,o,coll,(this__6853.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__6854 = this;
var this__6855 = this;
return cljs.core.pr_str.call(null,this__6855);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6856 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6857 = this;
return this__6857.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6858 = this;
return this__6858.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6859 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6860 = this;
return this__6860.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6861 = this;
if((this__6861.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__6861.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6862 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6863 = this;
return (new cljs.core.List(meta,this__6863.first,this__6863.rest,this__6863.count,this__6863.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6864 = this;
return this__6864.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6865 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6866 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6867 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6868 = this;
return (new cljs.core.List(this__6868.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__6869 = this;
var this__6870 = this;
return cljs.core.pr_str.call(null,this__6870);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6871 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6872 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6873 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6874 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6875 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6876 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6877 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6878 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6879 = this;
return this__6879.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6880 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__6884__6885 = coll;
if(G__6884__6885)
{if((function (){var or__3824__auto____6886 = (G__6884__6885.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____6886)
{return or__3824__auto____6886;
} else
{return G__6884__6885.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__6884__6885.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__6884__6885);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__6884__6885);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__6887__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__6887 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6887__delegate.call(this, x, y, z, items);
};
G__6887.cljs$lang$maxFixedArity = 3;
G__6887.cljs$lang$applyTo = (function (arglist__6888){
var x = cljs.core.first(arglist__6888);
var y = cljs.core.first(cljs.core.next(arglist__6888));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6888)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6888)));
return G__6887__delegate(x, y, z, items);
});
G__6887.cljs$lang$arity$variadic = G__6887__delegate;
return G__6887;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6889 = this;
var h__2057__auto____6890 = this__6889.__hash;
if(!((h__2057__auto____6890 == null)))
{return h__2057__auto____6890;
} else
{var h__2057__auto____6891 = cljs.core.hash_coll.call(null,coll);
this__6889.__hash = h__2057__auto____6891;
return h__2057__auto____6891;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6892 = this;
if((this__6892.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__6892.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6893 = this;
return (new cljs.core.Cons(null,o,coll,this__6893.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__6894 = this;
var this__6895 = this;
return cljs.core.pr_str.call(null,this__6895);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6896 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6897 = this;
return this__6897.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6898 = this;
if((this__6898.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__6898.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6899 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6900 = this;
return (new cljs.core.Cons(meta,this__6900.first,this__6900.rest,this__6900.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6901 = this;
return this__6901.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6902 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6902.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____6907 = (coll == null);
if(or__3824__auto____6907)
{return or__3824__auto____6907;
} else
{var G__6908__6909 = coll;
if(G__6908__6909)
{if((function (){var or__3824__auto____6910 = (G__6908__6909.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6910)
{return or__3824__auto____6910;
} else
{return G__6908__6909.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6908__6909.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6908__6909);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6908__6909);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__6914__6915 = x;
if(G__6914__6915)
{if((function (){var or__3824__auto____6916 = (G__6914__6915.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____6916)
{return or__3824__auto____6916;
} else
{return G__6914__6915.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__6914__6915.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__6914__6915);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__6914__6915);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__6917 = null;
var G__6917__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__6917__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__6917 = function(string,f,start){
switch(arguments.length){
case 2:
return G__6917__2.call(this,string,f);
case 3:
return G__6917__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6917;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__6918 = null;
var G__6918__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__6918__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__6918 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__6918__2.call(this,string,k);
case 3:
return G__6918__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6918;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__6919 = null;
var G__6919__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__6919__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__6919 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__6919__2.call(this,string,n);
case 3:
return G__6919__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6919;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function (this_sym6922,coll){
var this__6923 = this;
var this_sym6922__6924 = this;
var ___6925 = this_sym6922__6924;
if((coll == null))
{return null;
} else
{var strobj__6926 = coll.strobj;
if((strobj__6926 == null))
{return cljs.core._lookup.call(null,coll,this__6923.k,null);
} else
{return (strobj__6926[this__6923.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym6920,args6921){
var this__6927 = this;
return this_sym6920.call.apply(this_sym6920,[this_sym6920].concat(args6921.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__6936 = null;
var G__6936__2 = (function (this_sym6930,coll){
var this_sym6930__6932 = this;
var this__6933 = this_sym6930__6932;
return cljs.core._lookup.call(null,coll,this__6933.toString(),null);
});
var G__6936__3 = (function (this_sym6931,coll,not_found){
var this_sym6931__6934 = this;
var this__6935 = this_sym6931__6934;
return cljs.core._lookup.call(null,coll,this__6935.toString(),not_found);
});
G__6936 = function(this_sym6931,coll,not_found){
switch(arguments.length){
case 2:
return G__6936__2.call(this,this_sym6931,coll);
case 3:
return G__6936__3.call(this,this_sym6931,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6936;
})()
;
String.prototype.apply = (function (this_sym6928,args6929){
return this_sym6928.call.apply(this_sym6928,[this_sym6928].concat(args6929.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__6938 = lazy_seq.x;
if(lazy_seq.realized)
{return x__6938;
} else
{lazy_seq.x = x__6938.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6939 = this;
var h__2057__auto____6940 = this__6939.__hash;
if(!((h__2057__auto____6940 == null)))
{return h__2057__auto____6940;
} else
{var h__2057__auto____6941 = cljs.core.hash_coll.call(null,coll);
this__6939.__hash = h__2057__auto____6941;
return h__2057__auto____6941;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6942 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6943 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__6944 = this;
var this__6945 = this;
return cljs.core.pr_str.call(null,this__6945);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6946 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6947 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6948 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6949 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6950 = this;
return (new cljs.core.LazySeq(meta,this__6950.realized,this__6950.x,this__6950.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6951 = this;
return this__6951.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6952 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6952.meta);
});
cljs.core.LazySeq;
void 0;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6953 = this;
return this__6953.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__6954 = this;
var ___6955 = this;
(this__6954.buf[this__6954.end] = o);
return this__6954.end = (this__6954.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__6956 = this;
var ___6957 = this;
var ret__6958 = (new cljs.core.ArrayChunk(this__6956.buf,0,this__6956.end));
this__6956.buf = null;
return ret__6958;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6959 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__6959.arr[this__6959.off]),(this__6959.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6960 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__6960.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__6961 = this;
if((this__6961.off === this__6961.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__6961.arr,(this__6961.off + 1),this__6961.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__6962 = this;
return (this__6962.arr[(this__6962.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__6963 = this;
if((function (){var and__3822__auto____6964 = (i >= 0);
if(and__3822__auto____6964)
{return (i < (this__6963.end - this__6963.off));
} else
{return and__3822__auto____6964;
}
})())
{return (this__6963.arr[(this__6963.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6965 = this;
return (this__6965.end - this__6965.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__6966 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6967 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6968 = this;
return cljs.core._nth.call(null,this__6968.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6969 = this;
if((cljs.core._count.call(null,this__6969.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__6969.chunk),this__6969.more,this__6969.meta));
} else
{if((this__6969.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__6969.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__6970 = this;
if((this__6970.more == null))
{return null;
} else
{return this__6970.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6971 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__6972 = this;
return (new cljs.core.ChunkedCons(this__6972.chunk,this__6972.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6973 = this;
return this__6973.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__6974 = this;
return this__6974.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__6975 = this;
if((this__6975.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__6975.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__6979__6980 = s;
if(G__6979__6980)
{if(cljs.core.truth_((function (){var or__3824__auto____6981 = null;
if(cljs.core.truth_(or__3824__auto____6981))
{return or__3824__auto____6981;
} else
{return G__6979__6980.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__6979__6980.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__6979__6980);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__6979__6980);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__6984 = [];
var s__6985 = s;
while(true){
if(cljs.core.seq.call(null,s__6985))
{ary__6984.push(cljs.core.first.call(null,s__6985));
{
var G__6986 = cljs.core.next.call(null,s__6985);
s__6985 = G__6986;
continue;
}
} else
{return ary__6984;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__6990 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__6991 = 0;
var xs__6992 = cljs.core.seq.call(null,coll);
while(true){
if(xs__6992)
{(ret__6990[i__6991] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__6992)));
{
var G__6993 = (i__6991 + 1);
var G__6994 = cljs.core.next.call(null,xs__6992);
i__6991 = G__6993;
xs__6992 = G__6994;
continue;
}
} else
{}
break;
}
return ret__6990;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7002 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7003 = cljs.core.seq.call(null,init_val_or_seq);
var i__7004 = 0;
var s__7005 = s__7003;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7006 = s__7005;
if(and__3822__auto____7006)
{return (i__7004 < size);
} else
{return and__3822__auto____7006;
}
})()))
{(a__7002[i__7004] = cljs.core.first.call(null,s__7005));
{
var G__7009 = (i__7004 + 1);
var G__7010 = cljs.core.next.call(null,s__7005);
i__7004 = G__7009;
s__7005 = G__7010;
continue;
}
} else
{return a__7002;
}
break;
}
} else
{var n__2396__auto____7007 = size;
var i__7008 = 0;
while(true){
if((i__7008 < n__2396__auto____7007))
{(a__7002[i__7008] = init_val_or_seq);
{
var G__7011 = (i__7008 + 1);
i__7008 = G__7011;
continue;
}
} else
{}
break;
}
return a__7002;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7019 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7020 = cljs.core.seq.call(null,init_val_or_seq);
var i__7021 = 0;
var s__7022 = s__7020;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7023 = s__7022;
if(and__3822__auto____7023)
{return (i__7021 < size);
} else
{return and__3822__auto____7023;
}
})()))
{(a__7019[i__7021] = cljs.core.first.call(null,s__7022));
{
var G__7026 = (i__7021 + 1);
var G__7027 = cljs.core.next.call(null,s__7022);
i__7021 = G__7026;
s__7022 = G__7027;
continue;
}
} else
{return a__7019;
}
break;
}
} else
{var n__2396__auto____7024 = size;
var i__7025 = 0;
while(true){
if((i__7025 < n__2396__auto____7024))
{(a__7019[i__7025] = init_val_or_seq);
{
var G__7028 = (i__7025 + 1);
i__7025 = G__7028;
continue;
}
} else
{}
break;
}
return a__7019;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7036 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7037 = cljs.core.seq.call(null,init_val_or_seq);
var i__7038 = 0;
var s__7039 = s__7037;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7040 = s__7039;
if(and__3822__auto____7040)
{return (i__7038 < size);
} else
{return and__3822__auto____7040;
}
})()))
{(a__7036[i__7038] = cljs.core.first.call(null,s__7039));
{
var G__7043 = (i__7038 + 1);
var G__7044 = cljs.core.next.call(null,s__7039);
i__7038 = G__7043;
s__7039 = G__7044;
continue;
}
} else
{return a__7036;
}
break;
}
} else
{var n__2396__auto____7041 = size;
var i__7042 = 0;
while(true){
if((i__7042 < n__2396__auto____7041))
{(a__7036[i__7042] = init_val_or_seq);
{
var G__7045 = (i__7042 + 1);
i__7042 = G__7045;
continue;
}
} else
{}
break;
}
return a__7036;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7050 = s;
var i__7051 = n;
var sum__7052 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7053 = (i__7051 > 0);
if(and__3822__auto____7053)
{return cljs.core.seq.call(null,s__7050);
} else
{return and__3822__auto____7053;
}
})()))
{{
var G__7054 = cljs.core.next.call(null,s__7050);
var G__7055 = (i__7051 - 1);
var G__7056 = (sum__7052 + 1);
s__7050 = G__7054;
i__7051 = G__7055;
sum__7052 = G__7056;
continue;
}
} else
{return sum__7052;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7061 = cljs.core.seq.call(null,x);
if(s__7061)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7061))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7061),concat.call(null,cljs.core.chunk_rest.call(null,s__7061),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7061),concat.call(null,cljs.core.rest.call(null,s__7061),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7065__delegate = function (x,y,zs){
var cat__7064 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7063 = cljs.core.seq.call(null,xys);
if(xys__7063)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7063))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7063),cat.call(null,cljs.core.chunk_rest.call(null,xys__7063),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7063),cat.call(null,cljs.core.rest.call(null,xys__7063),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7064.call(null,concat.call(null,x,y),zs);
};
var G__7065 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7065__delegate.call(this, x, y, zs);
};
G__7065.cljs$lang$maxFixedArity = 2;
G__7065.cljs$lang$applyTo = (function (arglist__7066){
var x = cljs.core.first(arglist__7066);
var y = cljs.core.first(cljs.core.next(arglist__7066));
var zs = cljs.core.rest(cljs.core.next(arglist__7066));
return G__7065__delegate(x, y, zs);
});
G__7065.cljs$lang$arity$variadic = G__7065__delegate;
return G__7065;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7067__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7067 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7067__delegate.call(this, a, b, c, d, more);
};
G__7067.cljs$lang$maxFixedArity = 4;
G__7067.cljs$lang$applyTo = (function (arglist__7068){
var a = cljs.core.first(arglist__7068);
var b = cljs.core.first(cljs.core.next(arglist__7068));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7068)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7068))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7068))));
return G__7067__delegate(a, b, c, d, more);
});
G__7067.cljs$lang$arity$variadic = G__7067__delegate;
return G__7067;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7110 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7111 = cljs.core._first.call(null,args__7110);
var args__7112 = cljs.core._rest.call(null,args__7110);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7111);
} else
{return f.call(null,a__7111);
}
} else
{var b__7113 = cljs.core._first.call(null,args__7112);
var args__7114 = cljs.core._rest.call(null,args__7112);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7111,b__7113);
} else
{return f.call(null,a__7111,b__7113);
}
} else
{var c__7115 = cljs.core._first.call(null,args__7114);
var args__7116 = cljs.core._rest.call(null,args__7114);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7111,b__7113,c__7115);
} else
{return f.call(null,a__7111,b__7113,c__7115);
}
} else
{var d__7117 = cljs.core._first.call(null,args__7116);
var args__7118 = cljs.core._rest.call(null,args__7116);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7111,b__7113,c__7115,d__7117);
} else
{return f.call(null,a__7111,b__7113,c__7115,d__7117);
}
} else
{var e__7119 = cljs.core._first.call(null,args__7118);
var args__7120 = cljs.core._rest.call(null,args__7118);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7111,b__7113,c__7115,d__7117,e__7119);
} else
{return f.call(null,a__7111,b__7113,c__7115,d__7117,e__7119);
}
} else
{var f__7121 = cljs.core._first.call(null,args__7120);
var args__7122 = cljs.core._rest.call(null,args__7120);
if((argc === 6))
{if(f__7121.cljs$lang$arity$6)
{return f__7121.cljs$lang$arity$6(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121);
}
} else
{var g__7123 = cljs.core._first.call(null,args__7122);
var args__7124 = cljs.core._rest.call(null,args__7122);
if((argc === 7))
{if(f__7121.cljs$lang$arity$7)
{return f__7121.cljs$lang$arity$7(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123);
}
} else
{var h__7125 = cljs.core._first.call(null,args__7124);
var args__7126 = cljs.core._rest.call(null,args__7124);
if((argc === 8))
{if(f__7121.cljs$lang$arity$8)
{return f__7121.cljs$lang$arity$8(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125);
}
} else
{var i__7127 = cljs.core._first.call(null,args__7126);
var args__7128 = cljs.core._rest.call(null,args__7126);
if((argc === 9))
{if(f__7121.cljs$lang$arity$9)
{return f__7121.cljs$lang$arity$9(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127);
}
} else
{var j__7129 = cljs.core._first.call(null,args__7128);
var args__7130 = cljs.core._rest.call(null,args__7128);
if((argc === 10))
{if(f__7121.cljs$lang$arity$10)
{return f__7121.cljs$lang$arity$10(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129);
}
} else
{var k__7131 = cljs.core._first.call(null,args__7130);
var args__7132 = cljs.core._rest.call(null,args__7130);
if((argc === 11))
{if(f__7121.cljs$lang$arity$11)
{return f__7121.cljs$lang$arity$11(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131);
}
} else
{var l__7133 = cljs.core._first.call(null,args__7132);
var args__7134 = cljs.core._rest.call(null,args__7132);
if((argc === 12))
{if(f__7121.cljs$lang$arity$12)
{return f__7121.cljs$lang$arity$12(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133);
}
} else
{var m__7135 = cljs.core._first.call(null,args__7134);
var args__7136 = cljs.core._rest.call(null,args__7134);
if((argc === 13))
{if(f__7121.cljs$lang$arity$13)
{return f__7121.cljs$lang$arity$13(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135);
}
} else
{var n__7137 = cljs.core._first.call(null,args__7136);
var args__7138 = cljs.core._rest.call(null,args__7136);
if((argc === 14))
{if(f__7121.cljs$lang$arity$14)
{return f__7121.cljs$lang$arity$14(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137);
}
} else
{var o__7139 = cljs.core._first.call(null,args__7138);
var args__7140 = cljs.core._rest.call(null,args__7138);
if((argc === 15))
{if(f__7121.cljs$lang$arity$15)
{return f__7121.cljs$lang$arity$15(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139);
}
} else
{var p__7141 = cljs.core._first.call(null,args__7140);
var args__7142 = cljs.core._rest.call(null,args__7140);
if((argc === 16))
{if(f__7121.cljs$lang$arity$16)
{return f__7121.cljs$lang$arity$16(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139,p__7141);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139,p__7141);
}
} else
{var q__7143 = cljs.core._first.call(null,args__7142);
var args__7144 = cljs.core._rest.call(null,args__7142);
if((argc === 17))
{if(f__7121.cljs$lang$arity$17)
{return f__7121.cljs$lang$arity$17(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139,p__7141,q__7143);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139,p__7141,q__7143);
}
} else
{var r__7145 = cljs.core._first.call(null,args__7144);
var args__7146 = cljs.core._rest.call(null,args__7144);
if((argc === 18))
{if(f__7121.cljs$lang$arity$18)
{return f__7121.cljs$lang$arity$18(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139,p__7141,q__7143,r__7145);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139,p__7141,q__7143,r__7145);
}
} else
{var s__7147 = cljs.core._first.call(null,args__7146);
var args__7148 = cljs.core._rest.call(null,args__7146);
if((argc === 19))
{if(f__7121.cljs$lang$arity$19)
{return f__7121.cljs$lang$arity$19(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139,p__7141,q__7143,r__7145,s__7147);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139,p__7141,q__7143,r__7145,s__7147);
}
} else
{var t__7149 = cljs.core._first.call(null,args__7148);
var args__7150 = cljs.core._rest.call(null,args__7148);
if((argc === 20))
{if(f__7121.cljs$lang$arity$20)
{return f__7121.cljs$lang$arity$20(a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139,p__7141,q__7143,r__7145,s__7147,t__7149);
} else
{return f__7121.call(null,a__7111,b__7113,c__7115,d__7117,e__7119,f__7121,g__7123,h__7125,i__7127,j__7129,k__7131,l__7133,m__7135,n__7137,o__7139,p__7141,q__7143,r__7145,s__7147,t__7149);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7165 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7166 = cljs.core.bounded_count.call(null,args,(fixed_arity__7165 + 1));
if((bc__7166 <= fixed_arity__7165))
{return cljs.core.apply_to.call(null,f,bc__7166,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7167 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7168 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7169 = cljs.core.bounded_count.call(null,arglist__7167,(fixed_arity__7168 + 1));
if((bc__7169 <= fixed_arity__7168))
{return cljs.core.apply_to.call(null,f,bc__7169,arglist__7167);
} else
{return f.cljs$lang$applyTo(arglist__7167);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7167));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7170 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7171 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7172 = cljs.core.bounded_count.call(null,arglist__7170,(fixed_arity__7171 + 1));
if((bc__7172 <= fixed_arity__7171))
{return cljs.core.apply_to.call(null,f,bc__7172,arglist__7170);
} else
{return f.cljs$lang$applyTo(arglist__7170);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7170));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7173 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7174 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7175 = cljs.core.bounded_count.call(null,arglist__7173,(fixed_arity__7174 + 1));
if((bc__7175 <= fixed_arity__7174))
{return cljs.core.apply_to.call(null,f,bc__7175,arglist__7173);
} else
{return f.cljs$lang$applyTo(arglist__7173);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7173));
}
});
var apply__6 = (function() { 
var G__7179__delegate = function (f,a,b,c,d,args){
var arglist__7176 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7177 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7178 = cljs.core.bounded_count.call(null,arglist__7176,(fixed_arity__7177 + 1));
if((bc__7178 <= fixed_arity__7177))
{return cljs.core.apply_to.call(null,f,bc__7178,arglist__7176);
} else
{return f.cljs$lang$applyTo(arglist__7176);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7176));
}
};
var G__7179 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7179__delegate.call(this, f, a, b, c, d, args);
};
G__7179.cljs$lang$maxFixedArity = 5;
G__7179.cljs$lang$applyTo = (function (arglist__7180){
var f = cljs.core.first(arglist__7180);
var a = cljs.core.first(cljs.core.next(arglist__7180));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7180)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7180))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7180)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7180)))));
return G__7179__delegate(f, a, b, c, d, args);
});
G__7179.cljs$lang$arity$variadic = G__7179__delegate;
return G__7179;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7181){
var obj = cljs.core.first(arglist__7181);
var f = cljs.core.first(cljs.core.next(arglist__7181));
var args = cljs.core.rest(cljs.core.next(arglist__7181));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7182__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7182 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7182__delegate.call(this, x, y, more);
};
G__7182.cljs$lang$maxFixedArity = 2;
G__7182.cljs$lang$applyTo = (function (arglist__7183){
var x = cljs.core.first(arglist__7183);
var y = cljs.core.first(cljs.core.next(arglist__7183));
var more = cljs.core.rest(cljs.core.next(arglist__7183));
return G__7182__delegate(x, y, more);
});
G__7182.cljs$lang$arity$variadic = G__7182__delegate;
return G__7182;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7184 = pred;
var G__7185 = cljs.core.next.call(null,coll);
pred = G__7184;
coll = G__7185;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7187 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7187))
{return or__3824__auto____7187;
} else
{{
var G__7188 = pred;
var G__7189 = cljs.core.next.call(null,coll);
pred = G__7188;
coll = G__7189;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7190 = null;
var G__7190__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7190__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7190__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7190__3 = (function() { 
var G__7191__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7191 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7191__delegate.call(this, x, y, zs);
};
G__7191.cljs$lang$maxFixedArity = 2;
G__7191.cljs$lang$applyTo = (function (arglist__7192){
var x = cljs.core.first(arglist__7192);
var y = cljs.core.first(cljs.core.next(arglist__7192));
var zs = cljs.core.rest(cljs.core.next(arglist__7192));
return G__7191__delegate(x, y, zs);
});
G__7191.cljs$lang$arity$variadic = G__7191__delegate;
return G__7191;
})()
;
G__7190 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7190__0.call(this);
case 1:
return G__7190__1.call(this,x);
case 2:
return G__7190__2.call(this,x,y);
default:
return G__7190__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7190.cljs$lang$maxFixedArity = 2;
G__7190.cljs$lang$applyTo = G__7190__3.cljs$lang$applyTo;
return G__7190;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7193__delegate = function (args){
return x;
};
var G__7193 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7193__delegate.call(this, args);
};
G__7193.cljs$lang$maxFixedArity = 0;
G__7193.cljs$lang$applyTo = (function (arglist__7194){
var args = cljs.core.seq(arglist__7194);;
return G__7193__delegate(args);
});
G__7193.cljs$lang$arity$variadic = G__7193__delegate;
return G__7193;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7201 = null;
var G__7201__0 = (function (){
return f.call(null,g.call(null));
});
var G__7201__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7201__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7201__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7201__4 = (function() { 
var G__7202__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7202 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7202__delegate.call(this, x, y, z, args);
};
G__7202.cljs$lang$maxFixedArity = 3;
G__7202.cljs$lang$applyTo = (function (arglist__7203){
var x = cljs.core.first(arglist__7203);
var y = cljs.core.first(cljs.core.next(arglist__7203));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7203)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7203)));
return G__7202__delegate(x, y, z, args);
});
G__7202.cljs$lang$arity$variadic = G__7202__delegate;
return G__7202;
})()
;
G__7201 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7201__0.call(this);
case 1:
return G__7201__1.call(this,x);
case 2:
return G__7201__2.call(this,x,y);
case 3:
return G__7201__3.call(this,x,y,z);
default:
return G__7201__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7201.cljs$lang$maxFixedArity = 3;
G__7201.cljs$lang$applyTo = G__7201__4.cljs$lang$applyTo;
return G__7201;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7204 = null;
var G__7204__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7204__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7204__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7204__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7204__4 = (function() { 
var G__7205__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7205 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7205__delegate.call(this, x, y, z, args);
};
G__7205.cljs$lang$maxFixedArity = 3;
G__7205.cljs$lang$applyTo = (function (arglist__7206){
var x = cljs.core.first(arglist__7206);
var y = cljs.core.first(cljs.core.next(arglist__7206));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7206)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7206)));
return G__7205__delegate(x, y, z, args);
});
G__7205.cljs$lang$arity$variadic = G__7205__delegate;
return G__7205;
})()
;
G__7204 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7204__0.call(this);
case 1:
return G__7204__1.call(this,x);
case 2:
return G__7204__2.call(this,x,y);
case 3:
return G__7204__3.call(this,x,y,z);
default:
return G__7204__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7204.cljs$lang$maxFixedArity = 3;
G__7204.cljs$lang$applyTo = G__7204__4.cljs$lang$applyTo;
return G__7204;
})()
});
var comp__4 = (function() { 
var G__7207__delegate = function (f1,f2,f3,fs){
var fs__7198 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7208__delegate = function (args){
var ret__7199 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7198),args);
var fs__7200 = cljs.core.next.call(null,fs__7198);
while(true){
if(fs__7200)
{{
var G__7209 = cljs.core.first.call(null,fs__7200).call(null,ret__7199);
var G__7210 = cljs.core.next.call(null,fs__7200);
ret__7199 = G__7209;
fs__7200 = G__7210;
continue;
}
} else
{return ret__7199;
}
break;
}
};
var G__7208 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7208__delegate.call(this, args);
};
G__7208.cljs$lang$maxFixedArity = 0;
G__7208.cljs$lang$applyTo = (function (arglist__7211){
var args = cljs.core.seq(arglist__7211);;
return G__7208__delegate(args);
});
G__7208.cljs$lang$arity$variadic = G__7208__delegate;
return G__7208;
})()
;
};
var G__7207 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7207__delegate.call(this, f1, f2, f3, fs);
};
G__7207.cljs$lang$maxFixedArity = 3;
G__7207.cljs$lang$applyTo = (function (arglist__7212){
var f1 = cljs.core.first(arglist__7212);
var f2 = cljs.core.first(cljs.core.next(arglist__7212));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7212)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7212)));
return G__7207__delegate(f1, f2, f3, fs);
});
G__7207.cljs$lang$arity$variadic = G__7207__delegate;
return G__7207;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7213__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7213 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7213__delegate.call(this, args);
};
G__7213.cljs$lang$maxFixedArity = 0;
G__7213.cljs$lang$applyTo = (function (arglist__7214){
var args = cljs.core.seq(arglist__7214);;
return G__7213__delegate(args);
});
G__7213.cljs$lang$arity$variadic = G__7213__delegate;
return G__7213;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7215__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7215 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7215__delegate.call(this, args);
};
G__7215.cljs$lang$maxFixedArity = 0;
G__7215.cljs$lang$applyTo = (function (arglist__7216){
var args = cljs.core.seq(arglist__7216);;
return G__7215__delegate(args);
});
G__7215.cljs$lang$arity$variadic = G__7215__delegate;
return G__7215;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7217__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7217 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7217__delegate.call(this, args);
};
G__7217.cljs$lang$maxFixedArity = 0;
G__7217.cljs$lang$applyTo = (function (arglist__7218){
var args = cljs.core.seq(arglist__7218);;
return G__7217__delegate(args);
});
G__7217.cljs$lang$arity$variadic = G__7217__delegate;
return G__7217;
})()
;
});
var partial__5 = (function() { 
var G__7219__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7220__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7220 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7220__delegate.call(this, args);
};
G__7220.cljs$lang$maxFixedArity = 0;
G__7220.cljs$lang$applyTo = (function (arglist__7221){
var args = cljs.core.seq(arglist__7221);;
return G__7220__delegate(args);
});
G__7220.cljs$lang$arity$variadic = G__7220__delegate;
return G__7220;
})()
;
};
var G__7219 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7219__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7219.cljs$lang$maxFixedArity = 4;
G__7219.cljs$lang$applyTo = (function (arglist__7222){
var f = cljs.core.first(arglist__7222);
var arg1 = cljs.core.first(cljs.core.next(arglist__7222));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7222)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7222))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7222))));
return G__7219__delegate(f, arg1, arg2, arg3, more);
});
G__7219.cljs$lang$arity$variadic = G__7219__delegate;
return G__7219;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7223 = null;
var G__7223__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7223__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7223__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7223__4 = (function() { 
var G__7224__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7224 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7224__delegate.call(this, a, b, c, ds);
};
G__7224.cljs$lang$maxFixedArity = 3;
G__7224.cljs$lang$applyTo = (function (arglist__7225){
var a = cljs.core.first(arglist__7225);
var b = cljs.core.first(cljs.core.next(arglist__7225));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7225)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7225)));
return G__7224__delegate(a, b, c, ds);
});
G__7224.cljs$lang$arity$variadic = G__7224__delegate;
return G__7224;
})()
;
G__7223 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7223__1.call(this,a);
case 2:
return G__7223__2.call(this,a,b);
case 3:
return G__7223__3.call(this,a,b,c);
default:
return G__7223__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7223.cljs$lang$maxFixedArity = 3;
G__7223.cljs$lang$applyTo = G__7223__4.cljs$lang$applyTo;
return G__7223;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7226 = null;
var G__7226__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7226__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7226__4 = (function() { 
var G__7227__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7227 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7227__delegate.call(this, a, b, c, ds);
};
G__7227.cljs$lang$maxFixedArity = 3;
G__7227.cljs$lang$applyTo = (function (arglist__7228){
var a = cljs.core.first(arglist__7228);
var b = cljs.core.first(cljs.core.next(arglist__7228));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7228)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7228)));
return G__7227__delegate(a, b, c, ds);
});
G__7227.cljs$lang$arity$variadic = G__7227__delegate;
return G__7227;
})()
;
G__7226 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7226__2.call(this,a,b);
case 3:
return G__7226__3.call(this,a,b,c);
default:
return G__7226__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7226.cljs$lang$maxFixedArity = 3;
G__7226.cljs$lang$applyTo = G__7226__4.cljs$lang$applyTo;
return G__7226;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7229 = null;
var G__7229__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7229__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7229__4 = (function() { 
var G__7230__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7230 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7230__delegate.call(this, a, b, c, ds);
};
G__7230.cljs$lang$maxFixedArity = 3;
G__7230.cljs$lang$applyTo = (function (arglist__7231){
var a = cljs.core.first(arglist__7231);
var b = cljs.core.first(cljs.core.next(arglist__7231));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7231)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7231)));
return G__7230__delegate(a, b, c, ds);
});
G__7230.cljs$lang$arity$variadic = G__7230__delegate;
return G__7230;
})()
;
G__7229 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7229__2.call(this,a,b);
case 3:
return G__7229__3.call(this,a,b,c);
default:
return G__7229__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7229.cljs$lang$maxFixedArity = 3;
G__7229.cljs$lang$applyTo = G__7229__4.cljs$lang$applyTo;
return G__7229;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7247 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7255 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7255)
{var s__7256 = temp__3974__auto____7255;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7256))
{var c__7257 = cljs.core.chunk_first.call(null,s__7256);
var size__7258 = cljs.core.count.call(null,c__7257);
var b__7259 = cljs.core.chunk_buffer.call(null,size__7258);
var n__2396__auto____7260 = size__7258;
var i__7261 = 0;
while(true){
if((i__7261 < n__2396__auto____7260))
{cljs.core.chunk_append.call(null,b__7259,f.call(null,(idx + i__7261),cljs.core._nth.call(null,c__7257,i__7261)));
{
var G__7262 = (i__7261 + 1);
i__7261 = G__7262;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7259),mapi.call(null,(idx + size__7258),cljs.core.chunk_rest.call(null,s__7256)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7256)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7256)));
}
} else
{return null;
}
}),null));
});
return mapi__7247.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7272 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7272)
{var s__7273 = temp__3974__auto____7272;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7273))
{var c__7274 = cljs.core.chunk_first.call(null,s__7273);
var size__7275 = cljs.core.count.call(null,c__7274);
var b__7276 = cljs.core.chunk_buffer.call(null,size__7275);
var n__2396__auto____7277 = size__7275;
var i__7278 = 0;
while(true){
if((i__7278 < n__2396__auto____7277))
{var x__7279 = f.call(null,cljs.core._nth.call(null,c__7274,i__7278));
if((x__7279 == null))
{} else
{cljs.core.chunk_append.call(null,b__7276,x__7279);
}
{
var G__7281 = (i__7278 + 1);
i__7278 = G__7281;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7276),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7273)));
} else
{var x__7280 = f.call(null,cljs.core.first.call(null,s__7273));
if((x__7280 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7273));
} else
{return cljs.core.cons.call(null,x__7280,keep.call(null,f,cljs.core.rest.call(null,s__7273)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7307 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7317 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7317)
{var s__7318 = temp__3974__auto____7317;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7318))
{var c__7319 = cljs.core.chunk_first.call(null,s__7318);
var size__7320 = cljs.core.count.call(null,c__7319);
var b__7321 = cljs.core.chunk_buffer.call(null,size__7320);
var n__2396__auto____7322 = size__7320;
var i__7323 = 0;
while(true){
if((i__7323 < n__2396__auto____7322))
{var x__7324 = f.call(null,(idx + i__7323),cljs.core._nth.call(null,c__7319,i__7323));
if((x__7324 == null))
{} else
{cljs.core.chunk_append.call(null,b__7321,x__7324);
}
{
var G__7326 = (i__7323 + 1);
i__7323 = G__7326;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7321),keepi.call(null,(idx + size__7320),cljs.core.chunk_rest.call(null,s__7318)));
} else
{var x__7325 = f.call(null,idx,cljs.core.first.call(null,s__7318));
if((x__7325 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7318));
} else
{return cljs.core.cons.call(null,x__7325,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7318)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7307.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7412 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7412))
{return p.call(null,y);
} else
{return and__3822__auto____7412;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7413 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7413))
{var and__3822__auto____7414 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____7414))
{return p.call(null,z);
} else
{return and__3822__auto____7414;
}
} else
{return and__3822__auto____7413;
}
})());
});
var ep1__4 = (function() { 
var G__7483__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7415 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7415))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____7415;
}
})());
};
var G__7483 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7483__delegate.call(this, x, y, z, args);
};
G__7483.cljs$lang$maxFixedArity = 3;
G__7483.cljs$lang$applyTo = (function (arglist__7484){
var x = cljs.core.first(arglist__7484);
var y = cljs.core.first(cljs.core.next(arglist__7484));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7484)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7484)));
return G__7483__delegate(x, y, z, args);
});
G__7483.cljs$lang$arity$variadic = G__7483__delegate;
return G__7483;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7427 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7427))
{return p2.call(null,x);
} else
{return and__3822__auto____7427;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7428 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7428))
{var and__3822__auto____7429 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7429))
{var and__3822__auto____7430 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7430))
{return p2.call(null,y);
} else
{return and__3822__auto____7430;
}
} else
{return and__3822__auto____7429;
}
} else
{return and__3822__auto____7428;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7431 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7431))
{var and__3822__auto____7432 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7432))
{var and__3822__auto____7433 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7433))
{var and__3822__auto____7434 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7434))
{var and__3822__auto____7435 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7435))
{return p2.call(null,z);
} else
{return and__3822__auto____7435;
}
} else
{return and__3822__auto____7434;
}
} else
{return and__3822__auto____7433;
}
} else
{return and__3822__auto____7432;
}
} else
{return and__3822__auto____7431;
}
})());
});
var ep2__4 = (function() { 
var G__7485__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7436 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7436))
{return cljs.core.every_QMARK_.call(null,(function (p1__7282_SHARP_){
var and__3822__auto____7437 = p1.call(null,p1__7282_SHARP_);
if(cljs.core.truth_(and__3822__auto____7437))
{return p2.call(null,p1__7282_SHARP_);
} else
{return and__3822__auto____7437;
}
}),args);
} else
{return and__3822__auto____7436;
}
})());
};
var G__7485 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7485__delegate.call(this, x, y, z, args);
};
G__7485.cljs$lang$maxFixedArity = 3;
G__7485.cljs$lang$applyTo = (function (arglist__7486){
var x = cljs.core.first(arglist__7486);
var y = cljs.core.first(cljs.core.next(arglist__7486));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7486)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7486)));
return G__7485__delegate(x, y, z, args);
});
G__7485.cljs$lang$arity$variadic = G__7485__delegate;
return G__7485;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7456 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7456))
{var and__3822__auto____7457 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7457))
{return p3.call(null,x);
} else
{return and__3822__auto____7457;
}
} else
{return and__3822__auto____7456;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7458 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7458))
{var and__3822__auto____7459 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7459))
{var and__3822__auto____7460 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7460))
{var and__3822__auto____7461 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7461))
{var and__3822__auto____7462 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7462))
{return p3.call(null,y);
} else
{return and__3822__auto____7462;
}
} else
{return and__3822__auto____7461;
}
} else
{return and__3822__auto____7460;
}
} else
{return and__3822__auto____7459;
}
} else
{return and__3822__auto____7458;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7463 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7463))
{var and__3822__auto____7464 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7464))
{var and__3822__auto____7465 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7465))
{var and__3822__auto____7466 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7466))
{var and__3822__auto____7467 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7467))
{var and__3822__auto____7468 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____7468))
{var and__3822__auto____7469 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7469))
{var and__3822__auto____7470 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____7470))
{return p3.call(null,z);
} else
{return and__3822__auto____7470;
}
} else
{return and__3822__auto____7469;
}
} else
{return and__3822__auto____7468;
}
} else
{return and__3822__auto____7467;
}
} else
{return and__3822__auto____7466;
}
} else
{return and__3822__auto____7465;
}
} else
{return and__3822__auto____7464;
}
} else
{return and__3822__auto____7463;
}
})());
});
var ep3__4 = (function() { 
var G__7487__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7471 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7471))
{return cljs.core.every_QMARK_.call(null,(function (p1__7283_SHARP_){
var and__3822__auto____7472 = p1.call(null,p1__7283_SHARP_);
if(cljs.core.truth_(and__3822__auto____7472))
{var and__3822__auto____7473 = p2.call(null,p1__7283_SHARP_);
if(cljs.core.truth_(and__3822__auto____7473))
{return p3.call(null,p1__7283_SHARP_);
} else
{return and__3822__auto____7473;
}
} else
{return and__3822__auto____7472;
}
}),args);
} else
{return and__3822__auto____7471;
}
})());
};
var G__7487 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7487__delegate.call(this, x, y, z, args);
};
G__7487.cljs$lang$maxFixedArity = 3;
G__7487.cljs$lang$applyTo = (function (arglist__7488){
var x = cljs.core.first(arglist__7488);
var y = cljs.core.first(cljs.core.next(arglist__7488));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7488)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7488)));
return G__7487__delegate(x, y, z, args);
});
G__7487.cljs$lang$arity$variadic = G__7487__delegate;
return G__7487;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__7489__delegate = function (p1,p2,p3,ps){
var ps__7474 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7284_SHARP_){
return p1__7284_SHARP_.call(null,x);
}),ps__7474);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7285_SHARP_){
var and__3822__auto____7479 = p1__7285_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7479))
{return p1__7285_SHARP_.call(null,y);
} else
{return and__3822__auto____7479;
}
}),ps__7474);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7286_SHARP_){
var and__3822__auto____7480 = p1__7286_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7480))
{var and__3822__auto____7481 = p1__7286_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____7481))
{return p1__7286_SHARP_.call(null,z);
} else
{return and__3822__auto____7481;
}
} else
{return and__3822__auto____7480;
}
}),ps__7474);
});
var epn__4 = (function() { 
var G__7490__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7482 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7482))
{return cljs.core.every_QMARK_.call(null,(function (p1__7287_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7287_SHARP_,args);
}),ps__7474);
} else
{return and__3822__auto____7482;
}
})());
};
var G__7490 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7490__delegate.call(this, x, y, z, args);
};
G__7490.cljs$lang$maxFixedArity = 3;
G__7490.cljs$lang$applyTo = (function (arglist__7491){
var x = cljs.core.first(arglist__7491);
var y = cljs.core.first(cljs.core.next(arglist__7491));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7491)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7491)));
return G__7490__delegate(x, y, z, args);
});
G__7490.cljs$lang$arity$variadic = G__7490__delegate;
return G__7490;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__7489 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7489__delegate.call(this, p1, p2, p3, ps);
};
G__7489.cljs$lang$maxFixedArity = 3;
G__7489.cljs$lang$applyTo = (function (arglist__7492){
var p1 = cljs.core.first(arglist__7492);
var p2 = cljs.core.first(cljs.core.next(arglist__7492));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7492)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7492)));
return G__7489__delegate(p1, p2, p3, ps);
});
G__7489.cljs$lang$arity$variadic = G__7489__delegate;
return G__7489;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____7573 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7573))
{return or__3824__auto____7573;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____7574 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7574))
{return or__3824__auto____7574;
} else
{var or__3824__auto____7575 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____7575))
{return or__3824__auto____7575;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__7644__delegate = function (x,y,z,args){
var or__3824__auto____7576 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7576))
{return or__3824__auto____7576;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7644 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7644__delegate.call(this, x, y, z, args);
};
G__7644.cljs$lang$maxFixedArity = 3;
G__7644.cljs$lang$applyTo = (function (arglist__7645){
var x = cljs.core.first(arglist__7645);
var y = cljs.core.first(cljs.core.next(arglist__7645));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7645)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7645)));
return G__7644__delegate(x, y, z, args);
});
G__7644.cljs$lang$arity$variadic = G__7644__delegate;
return G__7644;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____7588 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7588))
{return or__3824__auto____7588;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____7589 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7589))
{return or__3824__auto____7589;
} else
{var or__3824__auto____7590 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7590))
{return or__3824__auto____7590;
} else
{var or__3824__auto____7591 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7591))
{return or__3824__auto____7591;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____7592 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7592))
{return or__3824__auto____7592;
} else
{var or__3824__auto____7593 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7593))
{return or__3824__auto____7593;
} else
{var or__3824__auto____7594 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7594))
{return or__3824__auto____7594;
} else
{var or__3824__auto____7595 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7595))
{return or__3824__auto____7595;
} else
{var or__3824__auto____7596 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7596))
{return or__3824__auto____7596;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__7646__delegate = function (x,y,z,args){
var or__3824__auto____7597 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7597))
{return or__3824__auto____7597;
} else
{return cljs.core.some.call(null,(function (p1__7327_SHARP_){
var or__3824__auto____7598 = p1.call(null,p1__7327_SHARP_);
if(cljs.core.truth_(or__3824__auto____7598))
{return or__3824__auto____7598;
} else
{return p2.call(null,p1__7327_SHARP_);
}
}),args);
}
};
var G__7646 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7646__delegate.call(this, x, y, z, args);
};
G__7646.cljs$lang$maxFixedArity = 3;
G__7646.cljs$lang$applyTo = (function (arglist__7647){
var x = cljs.core.first(arglist__7647);
var y = cljs.core.first(cljs.core.next(arglist__7647));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7647)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7647)));
return G__7646__delegate(x, y, z, args);
});
G__7646.cljs$lang$arity$variadic = G__7646__delegate;
return G__7646;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____7617 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7617))
{return or__3824__auto____7617;
} else
{var or__3824__auto____7618 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7618))
{return or__3824__auto____7618;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____7619 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7619))
{return or__3824__auto____7619;
} else
{var or__3824__auto____7620 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7620))
{return or__3824__auto____7620;
} else
{var or__3824__auto____7621 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7621))
{return or__3824__auto____7621;
} else
{var or__3824__auto____7622 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7622))
{return or__3824__auto____7622;
} else
{var or__3824__auto____7623 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7623))
{return or__3824__auto____7623;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____7624 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7624))
{return or__3824__auto____7624;
} else
{var or__3824__auto____7625 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7625))
{return or__3824__auto____7625;
} else
{var or__3824__auto____7626 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7626))
{return or__3824__auto____7626;
} else
{var or__3824__auto____7627 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7627))
{return or__3824__auto____7627;
} else
{var or__3824__auto____7628 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7628))
{return or__3824__auto____7628;
} else
{var or__3824__auto____7629 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____7629))
{return or__3824__auto____7629;
} else
{var or__3824__auto____7630 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7630))
{return or__3824__auto____7630;
} else
{var or__3824__auto____7631 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____7631))
{return or__3824__auto____7631;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__7648__delegate = function (x,y,z,args){
var or__3824__auto____7632 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7632))
{return or__3824__auto____7632;
} else
{return cljs.core.some.call(null,(function (p1__7328_SHARP_){
var or__3824__auto____7633 = p1.call(null,p1__7328_SHARP_);
if(cljs.core.truth_(or__3824__auto____7633))
{return or__3824__auto____7633;
} else
{var or__3824__auto____7634 = p2.call(null,p1__7328_SHARP_);
if(cljs.core.truth_(or__3824__auto____7634))
{return or__3824__auto____7634;
} else
{return p3.call(null,p1__7328_SHARP_);
}
}
}),args);
}
};
var G__7648 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7648__delegate.call(this, x, y, z, args);
};
G__7648.cljs$lang$maxFixedArity = 3;
G__7648.cljs$lang$applyTo = (function (arglist__7649){
var x = cljs.core.first(arglist__7649);
var y = cljs.core.first(cljs.core.next(arglist__7649));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7649)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7649)));
return G__7648__delegate(x, y, z, args);
});
G__7648.cljs$lang$arity$variadic = G__7648__delegate;
return G__7648;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__7650__delegate = function (p1,p2,p3,ps){
var ps__7635 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7329_SHARP_){
return p1__7329_SHARP_.call(null,x);
}),ps__7635);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7330_SHARP_){
var or__3824__auto____7640 = p1__7330_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7640))
{return or__3824__auto____7640;
} else
{return p1__7330_SHARP_.call(null,y);
}
}),ps__7635);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7331_SHARP_){
var or__3824__auto____7641 = p1__7331_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7641))
{return or__3824__auto____7641;
} else
{var or__3824__auto____7642 = p1__7331_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____7642))
{return or__3824__auto____7642;
} else
{return p1__7331_SHARP_.call(null,z);
}
}
}),ps__7635);
});
var spn__4 = (function() { 
var G__7651__delegate = function (x,y,z,args){
var or__3824__auto____7643 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7643))
{return or__3824__auto____7643;
} else
{return cljs.core.some.call(null,(function (p1__7332_SHARP_){
return cljs.core.some.call(null,p1__7332_SHARP_,args);
}),ps__7635);
}
};
var G__7651 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7651__delegate.call(this, x, y, z, args);
};
G__7651.cljs$lang$maxFixedArity = 3;
G__7651.cljs$lang$applyTo = (function (arglist__7652){
var x = cljs.core.first(arglist__7652);
var y = cljs.core.first(cljs.core.next(arglist__7652));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7652)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7652)));
return G__7651__delegate(x, y, z, args);
});
G__7651.cljs$lang$arity$variadic = G__7651__delegate;
return G__7651;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__7650 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7650__delegate.call(this, p1, p2, p3, ps);
};
G__7650.cljs$lang$maxFixedArity = 3;
G__7650.cljs$lang$applyTo = (function (arglist__7653){
var p1 = cljs.core.first(arglist__7653);
var p2 = cljs.core.first(cljs.core.next(arglist__7653));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7653)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7653)));
return G__7650__delegate(p1, p2, p3, ps);
});
G__7650.cljs$lang$arity$variadic = G__7650__delegate;
return G__7650;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7672 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7672)
{var s__7673 = temp__3974__auto____7672;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7673))
{var c__7674 = cljs.core.chunk_first.call(null,s__7673);
var size__7675 = cljs.core.count.call(null,c__7674);
var b__7676 = cljs.core.chunk_buffer.call(null,size__7675);
var n__2396__auto____7677 = size__7675;
var i__7678 = 0;
while(true){
if((i__7678 < n__2396__auto____7677))
{cljs.core.chunk_append.call(null,b__7676,f.call(null,cljs.core._nth.call(null,c__7674,i__7678)));
{
var G__7690 = (i__7678 + 1);
i__7678 = G__7690;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7676),map.call(null,f,cljs.core.chunk_rest.call(null,s__7673)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7673)),map.call(null,f,cljs.core.rest.call(null,s__7673)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7679 = cljs.core.seq.call(null,c1);
var s2__7680 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7681 = s1__7679;
if(and__3822__auto____7681)
{return s2__7680;
} else
{return and__3822__auto____7681;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7679),cljs.core.first.call(null,s2__7680)),map.call(null,f,cljs.core.rest.call(null,s1__7679),cljs.core.rest.call(null,s2__7680)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7682 = cljs.core.seq.call(null,c1);
var s2__7683 = cljs.core.seq.call(null,c2);
var s3__7684 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____7685 = s1__7682;
if(and__3822__auto____7685)
{var and__3822__auto____7686 = s2__7683;
if(and__3822__auto____7686)
{return s3__7684;
} else
{return and__3822__auto____7686;
}
} else
{return and__3822__auto____7685;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7682),cljs.core.first.call(null,s2__7683),cljs.core.first.call(null,s3__7684)),map.call(null,f,cljs.core.rest.call(null,s1__7682),cljs.core.rest.call(null,s2__7683),cljs.core.rest.call(null,s3__7684)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__7691__delegate = function (f,c1,c2,c3,colls){
var step__7689 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7688 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7688))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7688),step.call(null,map.call(null,cljs.core.rest,ss__7688)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__7493_SHARP_){
return cljs.core.apply.call(null,f,p1__7493_SHARP_);
}),step__7689.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7691 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7691__delegate.call(this, f, c1, c2, c3, colls);
};
G__7691.cljs$lang$maxFixedArity = 4;
G__7691.cljs$lang$applyTo = (function (arglist__7692){
var f = cljs.core.first(arglist__7692);
var c1 = cljs.core.first(cljs.core.next(arglist__7692));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7692)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7692))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7692))));
return G__7691__delegate(f, c1, c2, c3, colls);
});
G__7691.cljs$lang$arity$variadic = G__7691__delegate;
return G__7691;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____7695 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7695)
{var s__7696 = temp__3974__auto____7695;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__7696),take.call(null,(n - 1),cljs.core.rest.call(null,s__7696)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__7702 = (function (n,coll){
while(true){
var s__7700 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7701 = (n > 0);
if(and__3822__auto____7701)
{return s__7700;
} else
{return and__3822__auto____7701;
}
})()))
{{
var G__7703 = (n - 1);
var G__7704 = cljs.core.rest.call(null,s__7700);
n = G__7703;
coll = G__7704;
continue;
}
} else
{return s__7700;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7702.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__7707 = cljs.core.seq.call(null,coll);
var lead__7708 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__7708)
{{
var G__7709 = cljs.core.next.call(null,s__7707);
var G__7710 = cljs.core.next.call(null,lead__7708);
s__7707 = G__7709;
lead__7708 = G__7710;
continue;
}
} else
{return s__7707;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7716 = (function (pred,coll){
while(true){
var s__7714 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7715 = s__7714;
if(and__3822__auto____7715)
{return pred.call(null,cljs.core.first.call(null,s__7714));
} else
{return and__3822__auto____7715;
}
})()))
{{
var G__7717 = pred;
var G__7718 = cljs.core.rest.call(null,s__7714);
pred = G__7717;
coll = G__7718;
continue;
}
} else
{return s__7714;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7716.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7721 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7721)
{var s__7722 = temp__3974__auto____7721;
return cljs.core.concat.call(null,s__7722,cycle.call(null,s__7722));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7727 = cljs.core.seq.call(null,c1);
var s2__7728 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7729 = s1__7727;
if(and__3822__auto____7729)
{return s2__7728;
} else
{return and__3822__auto____7729;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7727),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7728),interleave.call(null,cljs.core.rest.call(null,s1__7727),cljs.core.rest.call(null,s2__7728))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__7731__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7730 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7730))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7730),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7730)));
} else
{return null;
}
}),null));
};
var G__7731 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7731__delegate.call(this, c1, c2, colls);
};
G__7731.cljs$lang$maxFixedArity = 2;
G__7731.cljs$lang$applyTo = (function (arglist__7732){
var c1 = cljs.core.first(arglist__7732);
var c2 = cljs.core.first(cljs.core.next(arglist__7732));
var colls = cljs.core.rest(cljs.core.next(arglist__7732));
return G__7731__delegate(c1, c2, colls);
});
G__7731.cljs$lang$arity$variadic = G__7731__delegate;
return G__7731;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__7742 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____7740 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7740)
{var coll__7741 = temp__3971__auto____7740;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7741),cat.call(null,cljs.core.rest.call(null,coll__7741),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__7742.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__7743__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7743 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7743__delegate.call(this, f, coll, colls);
};
G__7743.cljs$lang$maxFixedArity = 2;
G__7743.cljs$lang$applyTo = (function (arglist__7744){
var f = cljs.core.first(arglist__7744);
var coll = cljs.core.first(cljs.core.next(arglist__7744));
var colls = cljs.core.rest(cljs.core.next(arglist__7744));
return G__7743__delegate(f, coll, colls);
});
G__7743.cljs$lang$arity$variadic = G__7743__delegate;
return G__7743;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7754 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7754)
{var s__7755 = temp__3974__auto____7754;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7755))
{var c__7756 = cljs.core.chunk_first.call(null,s__7755);
var size__7757 = cljs.core.count.call(null,c__7756);
var b__7758 = cljs.core.chunk_buffer.call(null,size__7757);
var n__2396__auto____7759 = size__7757;
var i__7760 = 0;
while(true){
if((i__7760 < n__2396__auto____7759))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__7756,i__7760))))
{cljs.core.chunk_append.call(null,b__7758,cljs.core._nth.call(null,c__7756,i__7760));
} else
{}
{
var G__7763 = (i__7760 + 1);
i__7760 = G__7763;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7758),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__7755)));
} else
{var f__7761 = cljs.core.first.call(null,s__7755);
var r__7762 = cljs.core.rest.call(null,s__7755);
if(cljs.core.truth_(pred.call(null,f__7761)))
{return cljs.core.cons.call(null,f__7761,filter.call(null,pred,r__7762));
} else
{return filter.call(null,pred,r__7762);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__7766 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__7766.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7764_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__7764_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__7770__7771 = to;
if(G__7770__7771)
{if((function (){var or__3824__auto____7772 = (G__7770__7771.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____7772)
{return or__3824__auto____7772;
} else
{return G__7770__7771.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__7770__7771.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7770__7771);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7770__7771);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__7773__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__7773 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7773__delegate.call(this, f, c1, c2, c3, colls);
};
G__7773.cljs$lang$maxFixedArity = 4;
G__7773.cljs$lang$applyTo = (function (arglist__7774){
var f = cljs.core.first(arglist__7774);
var c1 = cljs.core.first(cljs.core.next(arglist__7774));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7774)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7774))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7774))));
return G__7773__delegate(f, c1, c2, c3, colls);
});
G__7773.cljs$lang$arity$variadic = G__7773__delegate;
return G__7773;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7781 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7781)
{var s__7782 = temp__3974__auto____7781;
var p__7783 = cljs.core.take.call(null,n,s__7782);
if((n === cljs.core.count.call(null,p__7783)))
{return cljs.core.cons.call(null,p__7783,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7782)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7784 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7784)
{var s__7785 = temp__3974__auto____7784;
var p__7786 = cljs.core.take.call(null,n,s__7785);
if((n === cljs.core.count.call(null,p__7786)))
{return cljs.core.cons.call(null,p__7786,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7785)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7786,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__7791 = cljs.core.lookup_sentinel;
var m__7792 = m;
var ks__7793 = cljs.core.seq.call(null,ks);
while(true){
if(ks__7793)
{var m__7794 = cljs.core._lookup.call(null,m__7792,cljs.core.first.call(null,ks__7793),sentinel__7791);
if((sentinel__7791 === m__7794))
{return not_found;
} else
{{
var G__7795 = sentinel__7791;
var G__7796 = m__7794;
var G__7797 = cljs.core.next.call(null,ks__7793);
sentinel__7791 = G__7795;
m__7792 = G__7796;
ks__7793 = G__7797;
continue;
}
}
} else
{return m__7792;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__7798,v){
var vec__7803__7804 = p__7798;
var k__7805 = cljs.core.nth.call(null,vec__7803__7804,0,null);
var ks__7806 = cljs.core.nthnext.call(null,vec__7803__7804,1);
if(cljs.core.truth_(ks__7806))
{return cljs.core.assoc.call(null,m,k__7805,assoc_in.call(null,cljs.core._lookup.call(null,m,k__7805,null),ks__7806,v));
} else
{return cljs.core.assoc.call(null,m,k__7805,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__7807,f,args){
var vec__7812__7813 = p__7807;
var k__7814 = cljs.core.nth.call(null,vec__7812__7813,0,null);
var ks__7815 = cljs.core.nthnext.call(null,vec__7812__7813,1);
if(cljs.core.truth_(ks__7815))
{return cljs.core.assoc.call(null,m,k__7814,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__7814,null),ks__7815,f,args));
} else
{return cljs.core.assoc.call(null,m,k__7814,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__7814,null),args));
}
};
var update_in = function (m,p__7807,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7807, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7816){
var m = cljs.core.first(arglist__7816);
var p__7807 = cljs.core.first(cljs.core.next(arglist__7816));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7816)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7816)));
return update_in__delegate(m, p__7807, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7819 = this;
var h__2057__auto____7820 = this__7819.__hash;
if(!((h__2057__auto____7820 == null)))
{return h__2057__auto____7820;
} else
{var h__2057__auto____7821 = cljs.core.hash_coll.call(null,coll);
this__7819.__hash = h__2057__auto____7821;
return h__2057__auto____7821;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7822 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7823 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7824 = this;
var new_array__7825 = this__7824.array.slice();
(new_array__7825[k] = v);
return (new cljs.core.Vector(this__7824.meta,new_array__7825,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__7856 = null;
var G__7856__2 = (function (this_sym7826,k){
var this__7828 = this;
var this_sym7826__7829 = this;
var coll__7830 = this_sym7826__7829;
return coll__7830.cljs$core$ILookup$_lookup$arity$2(coll__7830,k);
});
var G__7856__3 = (function (this_sym7827,k,not_found){
var this__7828 = this;
var this_sym7827__7831 = this;
var coll__7832 = this_sym7827__7831;
return coll__7832.cljs$core$ILookup$_lookup$arity$3(coll__7832,k,not_found);
});
G__7856 = function(this_sym7827,k,not_found){
switch(arguments.length){
case 2:
return G__7856__2.call(this,this_sym7827,k);
case 3:
return G__7856__3.call(this,this_sym7827,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7856;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym7817,args7818){
var this__7833 = this;
return this_sym7817.call.apply(this_sym7817,[this_sym7817].concat(args7818.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7834 = this;
var new_array__7835 = this__7834.array.slice();
new_array__7835.push(o);
return (new cljs.core.Vector(this__7834.meta,new_array__7835,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__7836 = this;
var this__7837 = this;
return cljs.core.pr_str.call(null,this__7837);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7838 = this;
return cljs.core.ci_reduce.call(null,this__7838.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7839 = this;
return cljs.core.ci_reduce.call(null,this__7839.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7840 = this;
if((this__7840.array.length > 0))
{var vector_seq__7841 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__7840.array.length))
{return cljs.core.cons.call(null,(this__7840.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__7841.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7842 = this;
return this__7842.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7843 = this;
var count__7844 = this__7843.array.length;
if((count__7844 > 0))
{return (this__7843.array[(count__7844 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7845 = this;
if((this__7845.array.length > 0))
{var new_array__7846 = this__7845.array.slice();
new_array__7846.pop();
return (new cljs.core.Vector(this__7845.meta,new_array__7846,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7847 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7848 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7849 = this;
return (new cljs.core.Vector(meta,this__7849.array,this__7849.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7850 = this;
return this__7850.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7851 = this;
if((function (){var and__3822__auto____7852 = (0 <= n);
if(and__3822__auto____7852)
{return (n < this__7851.array.length);
} else
{return and__3822__auto____7852;
}
})())
{return (this__7851.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7853 = this;
if((function (){var and__3822__auto____7854 = (0 <= n);
if(and__3822__auto____7854)
{return (n < this__7853.array.length);
} else
{return and__3822__auto____7854;
}
})())
{return (this__7853.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7855 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7855.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2175__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__7858 = pv.cnt;
if((cnt__7858 < 32))
{return 0;
} else
{return (((cnt__7858 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__7864 = level;
var ret__7865 = node;
while(true){
if((ll__7864 === 0))
{return ret__7865;
} else
{var embed__7866 = ret__7865;
var r__7867 = cljs.core.pv_fresh_node.call(null,edit);
var ___7868 = cljs.core.pv_aset.call(null,r__7867,0,embed__7866);
{
var G__7869 = (ll__7864 - 5);
var G__7870 = r__7867;
ll__7864 = G__7869;
ret__7865 = G__7870;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__7876 = cljs.core.pv_clone_node.call(null,parent);
var subidx__7877 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__7876,subidx__7877,tailnode);
return ret__7876;
} else
{var child__7878 = cljs.core.pv_aget.call(null,parent,subidx__7877);
if(!((child__7878 == null)))
{var node_to_insert__7879 = push_tail.call(null,pv,(level - 5),child__7878,tailnode);
cljs.core.pv_aset.call(null,ret__7876,subidx__7877,node_to_insert__7879);
return ret__7876;
} else
{var node_to_insert__7880 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__7876,subidx__7877,node_to_insert__7880);
return ret__7876;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____7884 = (0 <= i);
if(and__3822__auto____7884)
{return (i < pv.cnt);
} else
{return and__3822__auto____7884;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__7885 = pv.root;
var level__7886 = pv.shift;
while(true){
if((level__7886 > 0))
{{
var G__7887 = cljs.core.pv_aget.call(null,node__7885,((i >>> level__7886) & 31));
var G__7888 = (level__7886 - 5);
node__7885 = G__7887;
level__7886 = G__7888;
continue;
}
} else
{return node__7885.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__7891 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__7891,(i & 31),val);
return ret__7891;
} else
{var subidx__7892 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__7891,subidx__7892,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7892),i,val));
return ret__7891;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__7898 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__7899 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7898));
if((function (){var and__3822__auto____7900 = (new_child__7899 == null);
if(and__3822__auto____7900)
{return (subidx__7898 === 0);
} else
{return and__3822__auto____7900;
}
})())
{return null;
} else
{var ret__7901 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7901,subidx__7898,new_child__7899);
return ret__7901;
}
} else
{if((subidx__7898 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__7902 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7902,subidx__7898,null);
return ret__7902;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__7905 = this;
return (new cljs.core.TransientVector(this__7905.cnt,this__7905.shift,cljs.core.tv_editable_root.call(null,this__7905.root),cljs.core.tv_editable_tail.call(null,this__7905.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7906 = this;
var h__2057__auto____7907 = this__7906.__hash;
if(!((h__2057__auto____7907 == null)))
{return h__2057__auto____7907;
} else
{var h__2057__auto____7908 = cljs.core.hash_coll.call(null,coll);
this__7906.__hash = h__2057__auto____7908;
return h__2057__auto____7908;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7909 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7910 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7911 = this;
if((function (){var and__3822__auto____7912 = (0 <= k);
if(and__3822__auto____7912)
{return (k < this__7911.cnt);
} else
{return and__3822__auto____7912;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__7913 = this__7911.tail.slice();
(new_tail__7913[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__7911.meta,this__7911.cnt,this__7911.shift,this__7911.root,new_tail__7913,null));
} else
{return (new cljs.core.PersistentVector(this__7911.meta,this__7911.cnt,this__7911.shift,cljs.core.do_assoc.call(null,coll,this__7911.shift,this__7911.root,k,v),this__7911.tail,null));
}
} else
{if((k === this__7911.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__7911.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__7961 = null;
var G__7961__2 = (function (this_sym7914,k){
var this__7916 = this;
var this_sym7914__7917 = this;
var coll__7918 = this_sym7914__7917;
return coll__7918.cljs$core$ILookup$_lookup$arity$2(coll__7918,k);
});
var G__7961__3 = (function (this_sym7915,k,not_found){
var this__7916 = this;
var this_sym7915__7919 = this;
var coll__7920 = this_sym7915__7919;
return coll__7920.cljs$core$ILookup$_lookup$arity$3(coll__7920,k,not_found);
});
G__7961 = function(this_sym7915,k,not_found){
switch(arguments.length){
case 2:
return G__7961__2.call(this,this_sym7915,k);
case 3:
return G__7961__3.call(this,this_sym7915,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7961;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym7903,args7904){
var this__7921 = this;
return this_sym7903.call.apply(this_sym7903,[this_sym7903].concat(args7904.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__7922 = this;
var step_init__7923 = [0,init];
var i__7924 = 0;
while(true){
if((i__7924 < this__7922.cnt))
{var arr__7925 = cljs.core.array_for.call(null,v,i__7924);
var len__7926 = arr__7925.length;
var init__7930 = (function (){var j__7927 = 0;
var init__7928 = (step_init__7923[1]);
while(true){
if((j__7927 < len__7926))
{var init__7929 = f.call(null,init__7928,(j__7927 + i__7924),(arr__7925[j__7927]));
if(cljs.core.reduced_QMARK_.call(null,init__7929))
{return init__7929;
} else
{{
var G__7962 = (j__7927 + 1);
var G__7963 = init__7929;
j__7927 = G__7962;
init__7928 = G__7963;
continue;
}
}
} else
{(step_init__7923[0] = len__7926);
(step_init__7923[1] = init__7928);
return init__7928;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__7930))
{return cljs.core.deref.call(null,init__7930);
} else
{{
var G__7964 = (i__7924 + (step_init__7923[0]));
i__7924 = G__7964;
continue;
}
}
} else
{return (step_init__7923[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7931 = this;
if(((this__7931.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__7932 = this__7931.tail.slice();
new_tail__7932.push(o);
return (new cljs.core.PersistentVector(this__7931.meta,(this__7931.cnt + 1),this__7931.shift,this__7931.root,new_tail__7932,null));
} else
{var root_overflow_QMARK___7933 = ((this__7931.cnt >>> 5) > (1 << this__7931.shift));
var new_shift__7934 = ((root_overflow_QMARK___7933)?(this__7931.shift + 5):this__7931.shift);
var new_root__7936 = ((root_overflow_QMARK___7933)?(function (){var n_r__7935 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__7935,0,this__7931.root);
cljs.core.pv_aset.call(null,n_r__7935,1,cljs.core.new_path.call(null,null,this__7931.shift,(new cljs.core.VectorNode(null,this__7931.tail))));
return n_r__7935;
})():cljs.core.push_tail.call(null,coll,this__7931.shift,this__7931.root,(new cljs.core.VectorNode(null,this__7931.tail))));
return (new cljs.core.PersistentVector(this__7931.meta,(this__7931.cnt + 1),new_shift__7934,new_root__7936,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7937 = this;
if((this__7937.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__7937.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__7938 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__7939 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__7940 = this;
var this__7941 = this;
return cljs.core.pr_str.call(null,this__7941);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7942 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7943 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7944 = this;
if((this__7944.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7945 = this;
return this__7945.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7946 = this;
if((this__7946.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__7946.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7947 = this;
if((this__7947.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__7947.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7947.meta);
} else
{if((1 < (this__7947.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__7947.meta,(this__7947.cnt - 1),this__7947.shift,this__7947.root,this__7947.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__7948 = cljs.core.array_for.call(null,coll,(this__7947.cnt - 2));
var nr__7949 = cljs.core.pop_tail.call(null,coll,this__7947.shift,this__7947.root);
var new_root__7950 = (((nr__7949 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__7949);
var cnt_1__7951 = (this__7947.cnt - 1);
if((function (){var and__3822__auto____7952 = (5 < this__7947.shift);
if(and__3822__auto____7952)
{return (cljs.core.pv_aget.call(null,new_root__7950,1) == null);
} else
{return and__3822__auto____7952;
}
})())
{return (new cljs.core.PersistentVector(this__7947.meta,cnt_1__7951,(this__7947.shift - 5),cljs.core.pv_aget.call(null,new_root__7950,0),new_tail__7948,null));
} else
{return (new cljs.core.PersistentVector(this__7947.meta,cnt_1__7951,this__7947.shift,new_root__7950,new_tail__7948,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7953 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7954 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7955 = this;
return (new cljs.core.PersistentVector(meta,this__7955.cnt,this__7955.shift,this__7955.root,this__7955.tail,this__7955.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7956 = this;
return this__7956.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7957 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7958 = this;
if((function (){var and__3822__auto____7959 = (0 <= n);
if(and__3822__auto____7959)
{return (n < this__7958.cnt);
} else
{return and__3822__auto____7959;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7960 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7960.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__7965 = xs.length;
var xs__7966 = (((no_clone === true))?xs:xs.slice());
if((l__7965 < 32))
{return (new cljs.core.PersistentVector(null,l__7965,5,cljs.core.PersistentVector.EMPTY_NODE,xs__7966,null));
} else
{var node__7967 = xs__7966.slice(0,32);
var v__7968 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__7967,null));
var i__7969 = 32;
var out__7970 = cljs.core._as_transient.call(null,v__7968);
while(true){
if((i__7969 < l__7965))
{{
var G__7971 = (i__7969 + 1);
var G__7972 = cljs.core.conj_BANG_.call(null,out__7970,(xs__7966[i__7969]));
i__7969 = G__7971;
out__7970 = G__7972;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__7970);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__7973){
var args = cljs.core.seq(arglist__7973);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7974 = this;
if(((this__7974.off + 1) < this__7974.node.length))
{var s__7975 = cljs.core.chunked_seq.call(null,this__7974.vec,this__7974.node,this__7974.i,(this__7974.off + 1));
if((s__7975 == null))
{return null;
} else
{return s__7975;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7976 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7977 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7978 = this;
return (this__7978.node[this__7978.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7979 = this;
if(((this__7979.off + 1) < this__7979.node.length))
{var s__7980 = cljs.core.chunked_seq.call(null,this__7979.vec,this__7979.node,this__7979.i,(this__7979.off + 1));
if((s__7980 == null))
{return cljs.core.List.EMPTY;
} else
{return s__7980;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7981 = this;
var l__7982 = this__7981.node.length;
var s__7983 = ((((this__7981.i + l__7982) < cljs.core._count.call(null,this__7981.vec)))?cljs.core.chunked_seq.call(null,this__7981.vec,(this__7981.i + l__7982),0):null);
if((s__7983 == null))
{return null;
} else
{return s__7983;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7984 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7985 = this;
return cljs.core.chunked_seq.call(null,this__7985.vec,this__7985.node,this__7985.i,this__7985.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__7986 = this;
return this__7986.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7987 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7987.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7988 = this;
return cljs.core.array_chunk.call(null,this__7988.node,this__7988.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7989 = this;
var l__7990 = this__7989.node.length;
var s__7991 = ((((this__7989.i + l__7990) < cljs.core._count.call(null,this__7989.vec)))?cljs.core.chunked_seq.call(null,this__7989.vec,(this__7989.i + l__7990),0):null);
if((s__7991 == null))
{return cljs.core.List.EMPTY;
} else
{return s__7991;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7994 = this;
var h__2057__auto____7995 = this__7994.__hash;
if(!((h__2057__auto____7995 == null)))
{return h__2057__auto____7995;
} else
{var h__2057__auto____7996 = cljs.core.hash_coll.call(null,coll);
this__7994.__hash = h__2057__auto____7996;
return h__2057__auto____7996;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7997 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7998 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__7999 = this;
var v_pos__8000 = (this__7999.start + key);
return (new cljs.core.Subvec(this__7999.meta,cljs.core._assoc.call(null,this__7999.v,v_pos__8000,val),this__7999.start,((this__7999.end > (v_pos__8000 + 1)) ? this__7999.end : (v_pos__8000 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8026 = null;
var G__8026__2 = (function (this_sym8001,k){
var this__8003 = this;
var this_sym8001__8004 = this;
var coll__8005 = this_sym8001__8004;
return coll__8005.cljs$core$ILookup$_lookup$arity$2(coll__8005,k);
});
var G__8026__3 = (function (this_sym8002,k,not_found){
var this__8003 = this;
var this_sym8002__8006 = this;
var coll__8007 = this_sym8002__8006;
return coll__8007.cljs$core$ILookup$_lookup$arity$3(coll__8007,k,not_found);
});
G__8026 = function(this_sym8002,k,not_found){
switch(arguments.length){
case 2:
return G__8026__2.call(this,this_sym8002,k);
case 3:
return G__8026__3.call(this,this_sym8002,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8026;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym7992,args7993){
var this__8008 = this;
return this_sym7992.call.apply(this_sym7992,[this_sym7992].concat(args7993.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8009 = this;
return (new cljs.core.Subvec(this__8009.meta,cljs.core._assoc_n.call(null,this__8009.v,this__8009.end,o),this__8009.start,(this__8009.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8010 = this;
var this__8011 = this;
return cljs.core.pr_str.call(null,this__8011);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8012 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8013 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8014 = this;
var subvec_seq__8015 = (function subvec_seq(i){
if((i === this__8014.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8014.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8015.call(null,this__8014.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8016 = this;
return (this__8016.end - this__8016.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8017 = this;
return cljs.core._nth.call(null,this__8017.v,(this__8017.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8018 = this;
if((this__8018.start === this__8018.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8018.meta,this__8018.v,this__8018.start,(this__8018.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8019 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8020 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8021 = this;
return (new cljs.core.Subvec(meta,this__8021.v,this__8021.start,this__8021.end,this__8021.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8022 = this;
return this__8022.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8023 = this;
return cljs.core._nth.call(null,this__8023.v,(this__8023.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8024 = this;
return cljs.core._nth.call(null,this__8024.v,(this__8024.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8025 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8025.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8028 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8028,0,tl.length);
return ret__8028;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8032 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8033 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8032,subidx__8033,(((level === 5))?tail_node:(function (){var child__8034 = cljs.core.pv_aget.call(null,ret__8032,subidx__8033);
if(!((child__8034 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8034,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8032;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8039 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8040 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8041 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8039,subidx__8040));
if((function (){var and__3822__auto____8042 = (new_child__8041 == null);
if(and__3822__auto____8042)
{return (subidx__8040 === 0);
} else
{return and__3822__auto____8042;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8039,subidx__8040,new_child__8041);
return node__8039;
}
} else
{if((subidx__8040 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8039,subidx__8040,null);
return node__8039;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8047 = (0 <= i);
if(and__3822__auto____8047)
{return (i < tv.cnt);
} else
{return and__3822__auto____8047;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8048 = tv.root;
var node__8049 = root__8048;
var level__8050 = tv.shift;
while(true){
if((level__8050 > 0))
{{
var G__8051 = cljs.core.tv_ensure_editable.call(null,root__8048.edit,cljs.core.pv_aget.call(null,node__8049,((i >>> level__8050) & 31)));
var G__8052 = (level__8050 - 5);
node__8049 = G__8051;
level__8050 = G__8052;
continue;
}
} else
{return node__8049.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8092 = null;
var G__8092__2 = (function (this_sym8055,k){
var this__8057 = this;
var this_sym8055__8058 = this;
var coll__8059 = this_sym8055__8058;
return coll__8059.cljs$core$ILookup$_lookup$arity$2(coll__8059,k);
});
var G__8092__3 = (function (this_sym8056,k,not_found){
var this__8057 = this;
var this_sym8056__8060 = this;
var coll__8061 = this_sym8056__8060;
return coll__8061.cljs$core$ILookup$_lookup$arity$3(coll__8061,k,not_found);
});
G__8092 = function(this_sym8056,k,not_found){
switch(arguments.length){
case 2:
return G__8092__2.call(this,this_sym8056,k);
case 3:
return G__8092__3.call(this,this_sym8056,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8092;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8053,args8054){
var this__8062 = this;
return this_sym8053.call.apply(this_sym8053,[this_sym8053].concat(args8054.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8063 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8064 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8065 = this;
if(this__8065.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8066 = this;
if((function (){var and__3822__auto____8067 = (0 <= n);
if(and__3822__auto____8067)
{return (n < this__8066.cnt);
} else
{return and__3822__auto____8067;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8068 = this;
if(this__8068.root.edit)
{return this__8068.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8069 = this;
if(this__8069.root.edit)
{if((function (){var and__3822__auto____8070 = (0 <= n);
if(and__3822__auto____8070)
{return (n < this__8069.cnt);
} else
{return and__3822__auto____8070;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8069.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8075 = (function go(level,node){
var node__8073 = cljs.core.tv_ensure_editable.call(null,this__8069.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8073,(n & 31),val);
return node__8073;
} else
{var subidx__8074 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8073,subidx__8074,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8073,subidx__8074)));
return node__8073;
}
}).call(null,this__8069.shift,this__8069.root);
this__8069.root = new_root__8075;
return tcoll;
}
} else
{if((n === this__8069.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8069.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8076 = this;
if(this__8076.root.edit)
{if((this__8076.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8076.cnt))
{this__8076.cnt = 0;
return tcoll;
} else
{if((((this__8076.cnt - 1) & 31) > 0))
{this__8076.cnt = (this__8076.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8077 = cljs.core.editable_array_for.call(null,tcoll,(this__8076.cnt - 2));
var new_root__8079 = (function (){var nr__8078 = cljs.core.tv_pop_tail.call(null,tcoll,this__8076.shift,this__8076.root);
if(!((nr__8078 == null)))
{return nr__8078;
} else
{return (new cljs.core.VectorNode(this__8076.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8080 = (5 < this__8076.shift);
if(and__3822__auto____8080)
{return (cljs.core.pv_aget.call(null,new_root__8079,1) == null);
} else
{return and__3822__auto____8080;
}
})())
{var new_root__8081 = cljs.core.tv_ensure_editable.call(null,this__8076.root.edit,cljs.core.pv_aget.call(null,new_root__8079,0));
this__8076.root = new_root__8081;
this__8076.shift = (this__8076.shift - 5);
this__8076.cnt = (this__8076.cnt - 1);
this__8076.tail = new_tail__8077;
return tcoll;
} else
{this__8076.root = new_root__8079;
this__8076.cnt = (this__8076.cnt - 1);
this__8076.tail = new_tail__8077;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8082 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8083 = this;
if(this__8083.root.edit)
{if(((this__8083.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8083.tail[(this__8083.cnt & 31)] = o);
this__8083.cnt = (this__8083.cnt + 1);
return tcoll;
} else
{var tail_node__8084 = (new cljs.core.VectorNode(this__8083.root.edit,this__8083.tail));
var new_tail__8085 = cljs.core.make_array.call(null,32);
(new_tail__8085[0] = o);
this__8083.tail = new_tail__8085;
if(((this__8083.cnt >>> 5) > (1 << this__8083.shift)))
{var new_root_array__8086 = cljs.core.make_array.call(null,32);
var new_shift__8087 = (this__8083.shift + 5);
(new_root_array__8086[0] = this__8083.root);
(new_root_array__8086[1] = cljs.core.new_path.call(null,this__8083.root.edit,this__8083.shift,tail_node__8084));
this__8083.root = (new cljs.core.VectorNode(this__8083.root.edit,new_root_array__8086));
this__8083.shift = new_shift__8087;
this__8083.cnt = (this__8083.cnt + 1);
return tcoll;
} else
{var new_root__8088 = cljs.core.tv_push_tail.call(null,tcoll,this__8083.shift,this__8083.root,tail_node__8084);
this__8083.root = new_root__8088;
this__8083.cnt = (this__8083.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8089 = this;
if(this__8089.root.edit)
{this__8089.root.edit = null;
var len__8090 = (this__8089.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8091 = cljs.core.make_array.call(null,len__8090);
cljs.core.array_copy.call(null,this__8089.tail,0,trimmed_tail__8091,0,len__8090);
return (new cljs.core.PersistentVector(null,this__8089.cnt,this__8089.shift,this__8089.root,trimmed_tail__8091,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8093 = this;
var h__2057__auto____8094 = this__8093.__hash;
if(!((h__2057__auto____8094 == null)))
{return h__2057__auto____8094;
} else
{var h__2057__auto____8095 = cljs.core.hash_coll.call(null,coll);
this__8093.__hash = h__2057__auto____8095;
return h__2057__auto____8095;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8096 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8097 = this;
var this__8098 = this;
return cljs.core.pr_str.call(null,this__8098);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8099 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8100 = this;
return cljs.core._first.call(null,this__8100.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8101 = this;
var temp__3971__auto____8102 = cljs.core.next.call(null,this__8101.front);
if(temp__3971__auto____8102)
{var f1__8103 = temp__3971__auto____8102;
return (new cljs.core.PersistentQueueSeq(this__8101.meta,f1__8103,this__8101.rear,null));
} else
{if((this__8101.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8101.meta,this__8101.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8104 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8105 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8105.front,this__8105.rear,this__8105.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8106 = this;
return this__8106.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8107 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8107.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8108 = this;
var h__2057__auto____8109 = this__8108.__hash;
if(!((h__2057__auto____8109 == null)))
{return h__2057__auto____8109;
} else
{var h__2057__auto____8110 = cljs.core.hash_coll.call(null,coll);
this__8108.__hash = h__2057__auto____8110;
return h__2057__auto____8110;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8111 = this;
if(cljs.core.truth_(this__8111.front))
{return (new cljs.core.PersistentQueue(this__8111.meta,(this__8111.count + 1),this__8111.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8112 = this__8111.rear;
if(cljs.core.truth_(or__3824__auto____8112))
{return or__3824__auto____8112;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8111.meta,(this__8111.count + 1),cljs.core.conj.call(null,this__8111.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8113 = this;
var this__8114 = this;
return cljs.core.pr_str.call(null,this__8114);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8115 = this;
var rear__8116 = cljs.core.seq.call(null,this__8115.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8117 = this__8115.front;
if(cljs.core.truth_(or__3824__auto____8117))
{return or__3824__auto____8117;
} else
{return rear__8116;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8115.front,cljs.core.seq.call(null,rear__8116),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8118 = this;
return this__8118.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8119 = this;
return cljs.core._first.call(null,this__8119.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8120 = this;
if(cljs.core.truth_(this__8120.front))
{var temp__3971__auto____8121 = cljs.core.next.call(null,this__8120.front);
if(temp__3971__auto____8121)
{var f1__8122 = temp__3971__auto____8121;
return (new cljs.core.PersistentQueue(this__8120.meta,(this__8120.count - 1),f1__8122,this__8120.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8120.meta,(this__8120.count - 1),cljs.core.seq.call(null,this__8120.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8123 = this;
return cljs.core.first.call(null,this__8123.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8124 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8125 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8126 = this;
return (new cljs.core.PersistentQueue(meta,this__8126.count,this__8126.front,this__8126.rear,this__8126.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8127 = this;
return this__8127.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8128 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8129 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8132 = array.length;
var i__8133 = 0;
while(true){
if((i__8133 < len__8132))
{if((k === (array[i__8133])))
{return i__8133;
} else
{{
var G__8134 = (i__8133 + incr);
i__8133 = G__8134;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8137 = cljs.core.hash.call(null,a);
var b__8138 = cljs.core.hash.call(null,b);
if((a__8137 < b__8138))
{return -1;
} else
{if((a__8137 > b__8138))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8146 = m.keys;
var len__8147 = ks__8146.length;
var so__8148 = m.strobj;
var out__8149 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8150 = 0;
var out__8151 = cljs.core.transient$.call(null,out__8149);
while(true){
if((i__8150 < len__8147))
{var k__8152 = (ks__8146[i__8150]);
{
var G__8153 = (i__8150 + 1);
var G__8154 = cljs.core.assoc_BANG_.call(null,out__8151,k__8152,(so__8148[k__8152]));
i__8150 = G__8153;
out__8151 = G__8154;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8151,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8160 = {};
var l__8161 = ks.length;
var i__8162 = 0;
while(true){
if((i__8162 < l__8161))
{var k__8163 = (ks[i__8162]);
(new_obj__8160[k__8163] = (obj[k__8163]));
{
var G__8164 = (i__8162 + 1);
i__8162 = G__8164;
continue;
}
} else
{}
break;
}
return new_obj__8160;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8167 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8168 = this;
var h__2057__auto____8169 = this__8168.__hash;
if(!((h__2057__auto____8169 == null)))
{return h__2057__auto____8169;
} else
{var h__2057__auto____8170 = cljs.core.hash_imap.call(null,coll);
this__8168.__hash = h__2057__auto____8170;
return h__2057__auto____8170;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8171 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8172 = this;
if((function (){var and__3822__auto____8173 = goog.isString(k);
if(and__3822__auto____8173)
{return !((cljs.core.scan_array.call(null,1,k,this__8172.keys) == null));
} else
{return and__3822__auto____8173;
}
})())
{return (this__8172.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8174 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8175 = (this__8174.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8175)
{return or__3824__auto____8175;
} else
{return (this__8174.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8174.keys) == null)))
{var new_strobj__8176 = cljs.core.obj_clone.call(null,this__8174.strobj,this__8174.keys);
(new_strobj__8176[k] = v);
return (new cljs.core.ObjMap(this__8174.meta,this__8174.keys,new_strobj__8176,(this__8174.update_count + 1),null));
} else
{var new_strobj__8177 = cljs.core.obj_clone.call(null,this__8174.strobj,this__8174.keys);
var new_keys__8178 = this__8174.keys.slice();
(new_strobj__8177[k] = v);
new_keys__8178.push(k);
return (new cljs.core.ObjMap(this__8174.meta,new_keys__8178,new_strobj__8177,(this__8174.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8179 = this;
if((function (){var and__3822__auto____8180 = goog.isString(k);
if(and__3822__auto____8180)
{return !((cljs.core.scan_array.call(null,1,k,this__8179.keys) == null));
} else
{return and__3822__auto____8180;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8202 = null;
var G__8202__2 = (function (this_sym8181,k){
var this__8183 = this;
var this_sym8181__8184 = this;
var coll__8185 = this_sym8181__8184;
return coll__8185.cljs$core$ILookup$_lookup$arity$2(coll__8185,k);
});
var G__8202__3 = (function (this_sym8182,k,not_found){
var this__8183 = this;
var this_sym8182__8186 = this;
var coll__8187 = this_sym8182__8186;
return coll__8187.cljs$core$ILookup$_lookup$arity$3(coll__8187,k,not_found);
});
G__8202 = function(this_sym8182,k,not_found){
switch(arguments.length){
case 2:
return G__8202__2.call(this,this_sym8182,k);
case 3:
return G__8202__3.call(this,this_sym8182,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8202;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8165,args8166){
var this__8188 = this;
return this_sym8165.call.apply(this_sym8165,[this_sym8165].concat(args8166.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8189 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8190 = this;
var this__8191 = this;
return cljs.core.pr_str.call(null,this__8191);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8192 = this;
if((this__8192.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8155_SHARP_){
return cljs.core.vector.call(null,p1__8155_SHARP_,(this__8192.strobj[p1__8155_SHARP_]));
}),this__8192.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8193 = this;
return this__8193.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8194 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8195 = this;
return (new cljs.core.ObjMap(meta,this__8195.keys,this__8195.strobj,this__8195.update_count,this__8195.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8196 = this;
return this__8196.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8197 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8197.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8198 = this;
if((function (){var and__3822__auto____8199 = goog.isString(k);
if(and__3822__auto____8199)
{return !((cljs.core.scan_array.call(null,1,k,this__8198.keys) == null));
} else
{return and__3822__auto____8199;
}
})())
{var new_keys__8200 = this__8198.keys.slice();
var new_strobj__8201 = cljs.core.obj_clone.call(null,this__8198.strobj,this__8198.keys);
new_keys__8200.splice(cljs.core.scan_array.call(null,1,k,new_keys__8200),1);
cljs.core.js_delete.call(null,new_strobj__8201,k);
return (new cljs.core.ObjMap(this__8198.meta,new_keys__8200,new_strobj__8201,(this__8198.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8206 = this;
var h__2057__auto____8207 = this__8206.__hash;
if(!((h__2057__auto____8207 == null)))
{return h__2057__auto____8207;
} else
{var h__2057__auto____8208 = cljs.core.hash_imap.call(null,coll);
this__8206.__hash = h__2057__auto____8208;
return h__2057__auto____8208;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8209 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8210 = this;
var bucket__8211 = (this__8210.hashobj[cljs.core.hash.call(null,k)]);
var i__8212 = (cljs.core.truth_(bucket__8211)?cljs.core.scan_array.call(null,2,k,bucket__8211):null);
if(cljs.core.truth_(i__8212))
{return (bucket__8211[(i__8212 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8213 = this;
var h__8214 = cljs.core.hash.call(null,k);
var bucket__8215 = (this__8213.hashobj[h__8214]);
if(cljs.core.truth_(bucket__8215))
{var new_bucket__8216 = bucket__8215.slice();
var new_hashobj__8217 = goog.object.clone(this__8213.hashobj);
(new_hashobj__8217[h__8214] = new_bucket__8216);
var temp__3971__auto____8218 = cljs.core.scan_array.call(null,2,k,new_bucket__8216);
if(cljs.core.truth_(temp__3971__auto____8218))
{var i__8219 = temp__3971__auto____8218;
(new_bucket__8216[(i__8219 + 1)] = v);
return (new cljs.core.HashMap(this__8213.meta,this__8213.count,new_hashobj__8217,null));
} else
{new_bucket__8216.push(k,v);
return (new cljs.core.HashMap(this__8213.meta,(this__8213.count + 1),new_hashobj__8217,null));
}
} else
{var new_hashobj__8220 = goog.object.clone(this__8213.hashobj);
(new_hashobj__8220[h__8214] = [k,v]);
return (new cljs.core.HashMap(this__8213.meta,(this__8213.count + 1),new_hashobj__8220,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8221 = this;
var bucket__8222 = (this__8221.hashobj[cljs.core.hash.call(null,k)]);
var i__8223 = (cljs.core.truth_(bucket__8222)?cljs.core.scan_array.call(null,2,k,bucket__8222):null);
if(cljs.core.truth_(i__8223))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8248 = null;
var G__8248__2 = (function (this_sym8224,k){
var this__8226 = this;
var this_sym8224__8227 = this;
var coll__8228 = this_sym8224__8227;
return coll__8228.cljs$core$ILookup$_lookup$arity$2(coll__8228,k);
});
var G__8248__3 = (function (this_sym8225,k,not_found){
var this__8226 = this;
var this_sym8225__8229 = this;
var coll__8230 = this_sym8225__8229;
return coll__8230.cljs$core$ILookup$_lookup$arity$3(coll__8230,k,not_found);
});
G__8248 = function(this_sym8225,k,not_found){
switch(arguments.length){
case 2:
return G__8248__2.call(this,this_sym8225,k);
case 3:
return G__8248__3.call(this,this_sym8225,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8248;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8204,args8205){
var this__8231 = this;
return this_sym8204.call.apply(this_sym8204,[this_sym8204].concat(args8205.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8232 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8233 = this;
var this__8234 = this;
return cljs.core.pr_str.call(null,this__8234);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8235 = this;
if((this__8235.count > 0))
{var hashes__8236 = cljs.core.js_keys.call(null,this__8235.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8203_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8235.hashobj[p1__8203_SHARP_])));
}),hashes__8236);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8237 = this;
return this__8237.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8238 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8239 = this;
return (new cljs.core.HashMap(meta,this__8239.count,this__8239.hashobj,this__8239.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8240 = this;
return this__8240.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8241 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8241.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8242 = this;
var h__8243 = cljs.core.hash.call(null,k);
var bucket__8244 = (this__8242.hashobj[h__8243]);
var i__8245 = (cljs.core.truth_(bucket__8244)?cljs.core.scan_array.call(null,2,k,bucket__8244):null);
if(cljs.core.not.call(null,i__8245))
{return coll;
} else
{var new_hashobj__8246 = goog.object.clone(this__8242.hashobj);
if((3 > bucket__8244.length))
{cljs.core.js_delete.call(null,new_hashobj__8246,h__8243);
} else
{var new_bucket__8247 = bucket__8244.slice();
new_bucket__8247.splice(i__8245,2);
(new_hashobj__8246[h__8243] = new_bucket__8247);
}
return (new cljs.core.HashMap(this__8242.meta,(this__8242.count - 1),new_hashobj__8246,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8249 = ks.length;
var i__8250 = 0;
var out__8251 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8250 < len__8249))
{{
var G__8252 = (i__8250 + 1);
var G__8253 = cljs.core.assoc.call(null,out__8251,(ks[i__8250]),(vs[i__8250]));
i__8250 = G__8252;
out__8251 = G__8253;
continue;
}
} else
{return out__8251;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8257 = m.arr;
var len__8258 = arr__8257.length;
var i__8259 = 0;
while(true){
if((len__8258 <= i__8259))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8257[i__8259]),k))
{return i__8259;
} else
{if("\uFDD0'else")
{{
var G__8260 = (i__8259 + 2);
i__8259 = G__8260;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8263 = this;
return (new cljs.core.TransientArrayMap({},this__8263.arr.length,this__8263.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8264 = this;
var h__2057__auto____8265 = this__8264.__hash;
if(!((h__2057__auto____8265 == null)))
{return h__2057__auto____8265;
} else
{var h__2057__auto____8266 = cljs.core.hash_imap.call(null,coll);
this__8264.__hash = h__2057__auto____8266;
return h__2057__auto____8266;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8267 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8268 = this;
var idx__8269 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8269 === -1))
{return not_found;
} else
{return (this__8268.arr[(idx__8269 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8270 = this;
var idx__8271 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8271 === -1))
{if((this__8270.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8270.meta,(this__8270.cnt + 1),(function (){var G__8272__8273 = this__8270.arr.slice();
G__8272__8273.push(k);
G__8272__8273.push(v);
return G__8272__8273;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8270.arr[(idx__8271 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8270.meta,this__8270.cnt,(function (){var G__8274__8275 = this__8270.arr.slice();
(G__8274__8275[(idx__8271 + 1)] = v);
return G__8274__8275;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8276 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8308 = null;
var G__8308__2 = (function (this_sym8277,k){
var this__8279 = this;
var this_sym8277__8280 = this;
var coll__8281 = this_sym8277__8280;
return coll__8281.cljs$core$ILookup$_lookup$arity$2(coll__8281,k);
});
var G__8308__3 = (function (this_sym8278,k,not_found){
var this__8279 = this;
var this_sym8278__8282 = this;
var coll__8283 = this_sym8278__8282;
return coll__8283.cljs$core$ILookup$_lookup$arity$3(coll__8283,k,not_found);
});
G__8308 = function(this_sym8278,k,not_found){
switch(arguments.length){
case 2:
return G__8308__2.call(this,this_sym8278,k);
case 3:
return G__8308__3.call(this,this_sym8278,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8308;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8261,args8262){
var this__8284 = this;
return this_sym8261.call.apply(this_sym8261,[this_sym8261].concat(args8262.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8285 = this;
var len__8286 = this__8285.arr.length;
var i__8287 = 0;
var init__8288 = init;
while(true){
if((i__8287 < len__8286))
{var init__8289 = f.call(null,init__8288,(this__8285.arr[i__8287]),(this__8285.arr[(i__8287 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8289))
{return cljs.core.deref.call(null,init__8289);
} else
{{
var G__8309 = (i__8287 + 2);
var G__8310 = init__8289;
i__8287 = G__8309;
init__8288 = G__8310;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8290 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8291 = this;
var this__8292 = this;
return cljs.core.pr_str.call(null,this__8292);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8293 = this;
if((this__8293.cnt > 0))
{var len__8294 = this__8293.arr.length;
var array_map_seq__8295 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8294))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8293.arr[i]),(this__8293.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8295.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8296 = this;
return this__8296.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8297 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8298 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8298.cnt,this__8298.arr,this__8298.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8299 = this;
return this__8299.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8300 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8300.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8301 = this;
var idx__8302 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8302 >= 0))
{var len__8303 = this__8301.arr.length;
var new_len__8304 = (len__8303 - 2);
if((new_len__8304 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8305 = cljs.core.make_array.call(null,new_len__8304);
var s__8306 = 0;
var d__8307 = 0;
while(true){
if((s__8306 >= len__8303))
{return (new cljs.core.PersistentArrayMap(this__8301.meta,(this__8301.cnt - 1),new_arr__8305,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8301.arr[s__8306])))
{{
var G__8311 = (s__8306 + 2);
var G__8312 = d__8307;
s__8306 = G__8311;
d__8307 = G__8312;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8305[d__8307] = (this__8301.arr[s__8306]));
(new_arr__8305[(d__8307 + 1)] = (this__8301.arr[(s__8306 + 1)]));
{
var G__8313 = (s__8306 + 2);
var G__8314 = (d__8307 + 2);
s__8306 = G__8313;
d__8307 = G__8314;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8315 = cljs.core.count.call(null,ks);
var i__8316 = 0;
var out__8317 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8316 < len__8315))
{{
var G__8318 = (i__8316 + 1);
var G__8319 = cljs.core.assoc_BANG_.call(null,out__8317,(ks[i__8316]),(vs[i__8316]));
i__8316 = G__8318;
out__8317 = G__8319;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8317);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8320 = this;
if(cljs.core.truth_(this__8320.editable_QMARK_))
{var idx__8321 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8321 >= 0))
{(this__8320.arr[idx__8321] = (this__8320.arr[(this__8320.len - 2)]));
(this__8320.arr[(idx__8321 + 1)] = (this__8320.arr[(this__8320.len - 1)]));
var G__8322__8323 = this__8320.arr;
G__8322__8323.pop();
G__8322__8323.pop();
G__8322__8323;
this__8320.len = (this__8320.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8324 = this;
if(cljs.core.truth_(this__8324.editable_QMARK_))
{var idx__8325 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8325 === -1))
{if(((this__8324.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8324.len = (this__8324.len + 2);
this__8324.arr.push(key);
this__8324.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8324.len,this__8324.arr),key,val);
}
} else
{if((val === (this__8324.arr[(idx__8325 + 1)])))
{return tcoll;
} else
{(this__8324.arr[(idx__8325 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8326 = this;
if(cljs.core.truth_(this__8326.editable_QMARK_))
{if((function (){var G__8327__8328 = o;
if(G__8327__8328)
{if((function (){var or__3824__auto____8329 = (G__8327__8328.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8329)
{return or__3824__auto____8329;
} else
{return G__8327__8328.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8327__8328.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8327__8328);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8327__8328);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8330 = cljs.core.seq.call(null,o);
var tcoll__8331 = tcoll;
while(true){
var temp__3971__auto____8332 = cljs.core.first.call(null,es__8330);
if(cljs.core.truth_(temp__3971__auto____8332))
{var e__8333 = temp__3971__auto____8332;
{
var G__8339 = cljs.core.next.call(null,es__8330);
var G__8340 = tcoll__8331.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8331,cljs.core.key.call(null,e__8333),cljs.core.val.call(null,e__8333));
es__8330 = G__8339;
tcoll__8331 = G__8340;
continue;
}
} else
{return tcoll__8331;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8334 = this;
if(cljs.core.truth_(this__8334.editable_QMARK_))
{this__8334.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8334.len,2),this__8334.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8335 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8336 = this;
if(cljs.core.truth_(this__8336.editable_QMARK_))
{var idx__8337 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8337 === -1))
{return not_found;
} else
{return (this__8336.arr[(idx__8337 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8338 = this;
if(cljs.core.truth_(this__8338.editable_QMARK_))
{return cljs.core.quot.call(null,this__8338.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8343 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8344 = 0;
while(true){
if((i__8344 < len))
{{
var G__8345 = cljs.core.assoc_BANG_.call(null,out__8343,(arr[i__8344]),(arr[(i__8344 + 1)]));
var G__8346 = (i__8344 + 2);
out__8343 = G__8345;
i__8344 = G__8346;
continue;
}
} else
{return out__8343;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2175__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8351__8352 = arr.slice();
(G__8351__8352[i] = a);
return G__8351__8352;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8353__8354 = arr.slice();
(G__8353__8354[i] = a);
(G__8353__8354[j] = b);
return G__8353__8354;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__8356 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8356,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8356,(2 * i),(new_arr__8356.length - (2 * i)));
return new_arr__8356;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8359 = inode.ensure_editable(edit);
(editable__8359.arr[i] = a);
return editable__8359;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8360 = inode.ensure_editable(edit);
(editable__8360.arr[i] = a);
(editable__8360.arr[j] = b);
return editable__8360;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__8367 = arr.length;
var i__8368 = 0;
var init__8369 = init;
while(true){
if((i__8368 < len__8367))
{var init__8372 = (function (){var k__8370 = (arr[i__8368]);
if(!((k__8370 == null)))
{return f.call(null,init__8369,k__8370,(arr[(i__8368 + 1)]));
} else
{var node__8371 = (arr[(i__8368 + 1)]);
if(!((node__8371 == null)))
{return node__8371.kv_reduce(f,init__8369);
} else
{return init__8369;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8372))
{return cljs.core.deref.call(null,init__8372);
} else
{{
var G__8373 = (i__8368 + 2);
var G__8374 = init__8372;
i__8368 = G__8373;
init__8369 = G__8374;
continue;
}
}
} else
{return init__8369;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8375 = this;
var inode__8376 = this;
if((this__8375.bitmap === bit))
{return null;
} else
{var editable__8377 = inode__8376.ensure_editable(e);
var earr__8378 = editable__8377.arr;
var len__8379 = earr__8378.length;
editable__8377.bitmap = (bit ^ editable__8377.bitmap);
cljs.core.array_copy.call(null,earr__8378,(2 * (i + 1)),earr__8378,(2 * i),(len__8379 - (2 * (i + 1))));
(earr__8378[(len__8379 - 2)] = null);
(earr__8378[(len__8379 - 1)] = null);
return editable__8377;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8380 = this;
var inode__8381 = this;
var bit__8382 = (1 << ((hash >>> shift) & 0x01f));
var idx__8383 = cljs.core.bitmap_indexed_node_index.call(null,this__8380.bitmap,bit__8382);
if(((this__8380.bitmap & bit__8382) === 0))
{var n__8384 = cljs.core.bit_count.call(null,this__8380.bitmap);
if(((2 * n__8384) < this__8380.arr.length))
{var editable__8385 = inode__8381.ensure_editable(edit);
var earr__8386 = editable__8385.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__8386,(2 * idx__8383),earr__8386,(2 * (idx__8383 + 1)),(2 * (n__8384 - idx__8383)));
(earr__8386[(2 * idx__8383)] = key);
(earr__8386[((2 * idx__8383) + 1)] = val);
editable__8385.bitmap = (editable__8385.bitmap | bit__8382);
return editable__8385;
} else
{if((n__8384 >= 16))
{var nodes__8387 = cljs.core.make_array.call(null,32);
var jdx__8388 = ((hash >>> shift) & 0x01f);
(nodes__8387[jdx__8388] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8389 = 0;
var j__8390 = 0;
while(true){
if((i__8389 < 32))
{if((((this__8380.bitmap >>> i__8389) & 1) === 0))
{{
var G__8443 = (i__8389 + 1);
var G__8444 = j__8390;
i__8389 = G__8443;
j__8390 = G__8444;
continue;
}
} else
{(nodes__8387[i__8389] = ((!(((this__8380.arr[j__8390]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8380.arr[j__8390])),(this__8380.arr[j__8390]),(this__8380.arr[(j__8390 + 1)]),added_leaf_QMARK_):(this__8380.arr[(j__8390 + 1)])));
{
var G__8445 = (i__8389 + 1);
var G__8446 = (j__8390 + 2);
i__8389 = G__8445;
j__8390 = G__8446;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8384 + 1),nodes__8387));
} else
{if("\uFDD0'else")
{var new_arr__8391 = cljs.core.make_array.call(null,(2 * (n__8384 + 4)));
cljs.core.array_copy.call(null,this__8380.arr,0,new_arr__8391,0,(2 * idx__8383));
(new_arr__8391[(2 * idx__8383)] = key);
(new_arr__8391[((2 * idx__8383) + 1)] = val);
cljs.core.array_copy.call(null,this__8380.arr,(2 * idx__8383),new_arr__8391,(2 * (idx__8383 + 1)),(2 * (n__8384 - idx__8383)));
added_leaf_QMARK_.val = true;
var editable__8392 = inode__8381.ensure_editable(edit);
editable__8392.arr = new_arr__8391;
editable__8392.bitmap = (editable__8392.bitmap | bit__8382);
return editable__8392;
} else
{return null;
}
}
}
} else
{var key_or_nil__8393 = (this__8380.arr[(2 * idx__8383)]);
var val_or_node__8394 = (this__8380.arr[((2 * idx__8383) + 1)]);
if((key_or_nil__8393 == null))
{var n__8395 = val_or_node__8394.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8395 === val_or_node__8394))
{return inode__8381;
} else
{return cljs.core.edit_and_set.call(null,inode__8381,edit,((2 * idx__8383) + 1),n__8395);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8393))
{if((val === val_or_node__8394))
{return inode__8381;
} else
{return cljs.core.edit_and_set.call(null,inode__8381,edit,((2 * idx__8383) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__8381,edit,(2 * idx__8383),null,((2 * idx__8383) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8393,val_or_node__8394,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8396 = this;
var inode__8397 = this;
return cljs.core.create_inode_seq.call(null,this__8396.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8398 = this;
var inode__8399 = this;
var bit__8400 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8398.bitmap & bit__8400) === 0))
{return inode__8399;
} else
{var idx__8401 = cljs.core.bitmap_indexed_node_index.call(null,this__8398.bitmap,bit__8400);
var key_or_nil__8402 = (this__8398.arr[(2 * idx__8401)]);
var val_or_node__8403 = (this__8398.arr[((2 * idx__8401) + 1)]);
if((key_or_nil__8402 == null))
{var n__8404 = val_or_node__8403.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8404 === val_or_node__8403))
{return inode__8399;
} else
{if(!((n__8404 == null)))
{return cljs.core.edit_and_set.call(null,inode__8399,edit,((2 * idx__8401) + 1),n__8404);
} else
{if((this__8398.bitmap === bit__8400))
{return null;
} else
{if("\uFDD0'else")
{return inode__8399.edit_and_remove_pair(edit,bit__8400,idx__8401);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8402))
{(removed_leaf_QMARK_[0] = true);
return inode__8399.edit_and_remove_pair(edit,bit__8400,idx__8401);
} else
{if("\uFDD0'else")
{return inode__8399;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8405 = this;
var inode__8406 = this;
if((e === this__8405.edit))
{return inode__8406;
} else
{var n__8407 = cljs.core.bit_count.call(null,this__8405.bitmap);
var new_arr__8408 = cljs.core.make_array.call(null,(((n__8407 < 0))?4:(2 * (n__8407 + 1))));
cljs.core.array_copy.call(null,this__8405.arr,0,new_arr__8408,0,(2 * n__8407));
return (new cljs.core.BitmapIndexedNode(e,this__8405.bitmap,new_arr__8408));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8409 = this;
var inode__8410 = this;
return cljs.core.inode_kv_reduce.call(null,this__8409.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8411 = this;
var inode__8412 = this;
var bit__8413 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8411.bitmap & bit__8413) === 0))
{return not_found;
} else
{var idx__8414 = cljs.core.bitmap_indexed_node_index.call(null,this__8411.bitmap,bit__8413);
var key_or_nil__8415 = (this__8411.arr[(2 * idx__8414)]);
var val_or_node__8416 = (this__8411.arr[((2 * idx__8414) + 1)]);
if((key_or_nil__8415 == null))
{return val_or_node__8416.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8415))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8415,val_or_node__8416], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__8417 = this;
var inode__8418 = this;
var bit__8419 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8417.bitmap & bit__8419) === 0))
{return inode__8418;
} else
{var idx__8420 = cljs.core.bitmap_indexed_node_index.call(null,this__8417.bitmap,bit__8419);
var key_or_nil__8421 = (this__8417.arr[(2 * idx__8420)]);
var val_or_node__8422 = (this__8417.arr[((2 * idx__8420) + 1)]);
if((key_or_nil__8421 == null))
{var n__8423 = val_or_node__8422.inode_without((shift + 5),hash,key);
if((n__8423 === val_or_node__8422))
{return inode__8418;
} else
{if(!((n__8423 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8417.bitmap,cljs.core.clone_and_set.call(null,this__8417.arr,((2 * idx__8420) + 1),n__8423)));
} else
{if((this__8417.bitmap === bit__8419))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8417.bitmap ^ bit__8419),cljs.core.remove_pair.call(null,this__8417.arr,idx__8420)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8421))
{return (new cljs.core.BitmapIndexedNode(null,(this__8417.bitmap ^ bit__8419),cljs.core.remove_pair.call(null,this__8417.arr,idx__8420)));
} else
{if("\uFDD0'else")
{return inode__8418;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8424 = this;
var inode__8425 = this;
var bit__8426 = (1 << ((hash >>> shift) & 0x01f));
var idx__8427 = cljs.core.bitmap_indexed_node_index.call(null,this__8424.bitmap,bit__8426);
if(((this__8424.bitmap & bit__8426) === 0))
{var n__8428 = cljs.core.bit_count.call(null,this__8424.bitmap);
if((n__8428 >= 16))
{var nodes__8429 = cljs.core.make_array.call(null,32);
var jdx__8430 = ((hash >>> shift) & 0x01f);
(nodes__8429[jdx__8430] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8431 = 0;
var j__8432 = 0;
while(true){
if((i__8431 < 32))
{if((((this__8424.bitmap >>> i__8431) & 1) === 0))
{{
var G__8447 = (i__8431 + 1);
var G__8448 = j__8432;
i__8431 = G__8447;
j__8432 = G__8448;
continue;
}
} else
{(nodes__8429[i__8431] = ((!(((this__8424.arr[j__8432]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8424.arr[j__8432])),(this__8424.arr[j__8432]),(this__8424.arr[(j__8432 + 1)]),added_leaf_QMARK_):(this__8424.arr[(j__8432 + 1)])));
{
var G__8449 = (i__8431 + 1);
var G__8450 = (j__8432 + 2);
i__8431 = G__8449;
j__8432 = G__8450;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8428 + 1),nodes__8429));
} else
{var new_arr__8433 = cljs.core.make_array.call(null,(2 * (n__8428 + 1)));
cljs.core.array_copy.call(null,this__8424.arr,0,new_arr__8433,0,(2 * idx__8427));
(new_arr__8433[(2 * idx__8427)] = key);
(new_arr__8433[((2 * idx__8427) + 1)] = val);
cljs.core.array_copy.call(null,this__8424.arr,(2 * idx__8427),new_arr__8433,(2 * (idx__8427 + 1)),(2 * (n__8428 - idx__8427)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8424.bitmap | bit__8426),new_arr__8433));
}
} else
{var key_or_nil__8434 = (this__8424.arr[(2 * idx__8427)]);
var val_or_node__8435 = (this__8424.arr[((2 * idx__8427) + 1)]);
if((key_or_nil__8434 == null))
{var n__8436 = val_or_node__8435.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8436 === val_or_node__8435))
{return inode__8425;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8424.bitmap,cljs.core.clone_and_set.call(null,this__8424.arr,((2 * idx__8427) + 1),n__8436)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8434))
{if((val === val_or_node__8435))
{return inode__8425;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8424.bitmap,cljs.core.clone_and_set.call(null,this__8424.arr,((2 * idx__8427) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8424.bitmap,cljs.core.clone_and_set.call(null,this__8424.arr,(2 * idx__8427),null,((2 * idx__8427) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8434,val_or_node__8435,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8437 = this;
var inode__8438 = this;
var bit__8439 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8437.bitmap & bit__8439) === 0))
{return not_found;
} else
{var idx__8440 = cljs.core.bitmap_indexed_node_index.call(null,this__8437.bitmap,bit__8439);
var key_or_nil__8441 = (this__8437.arr[(2 * idx__8440)]);
var val_or_node__8442 = (this__8437.arr[((2 * idx__8440) + 1)]);
if((key_or_nil__8441 == null))
{return val_or_node__8442.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8441))
{return val_or_node__8442;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__8458 = array_node.arr;
var len__8459 = (2 * (array_node.cnt - 1));
var new_arr__8460 = cljs.core.make_array.call(null,len__8459);
var i__8461 = 0;
var j__8462 = 1;
var bitmap__8463 = 0;
while(true){
if((i__8461 < len__8459))
{if((function (){var and__3822__auto____8464 = !((i__8461 === idx));
if(and__3822__auto____8464)
{return !(((arr__8458[i__8461]) == null));
} else
{return and__3822__auto____8464;
}
})())
{(new_arr__8460[j__8462] = (arr__8458[i__8461]));
{
var G__8465 = (i__8461 + 1);
var G__8466 = (j__8462 + 2);
var G__8467 = (bitmap__8463 | (1 << i__8461));
i__8461 = G__8465;
j__8462 = G__8466;
bitmap__8463 = G__8467;
continue;
}
} else
{{
var G__8468 = (i__8461 + 1);
var G__8469 = j__8462;
var G__8470 = bitmap__8463;
i__8461 = G__8468;
j__8462 = G__8469;
bitmap__8463 = G__8470;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8463,new_arr__8460));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8471 = this;
var inode__8472 = this;
var idx__8473 = ((hash >>> shift) & 0x01f);
var node__8474 = (this__8471.arr[idx__8473]);
if((node__8474 == null))
{var editable__8475 = cljs.core.edit_and_set.call(null,inode__8472,edit,idx__8473,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8475.cnt = (editable__8475.cnt + 1);
return editable__8475;
} else
{var n__8476 = node__8474.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8476 === node__8474))
{return inode__8472;
} else
{return cljs.core.edit_and_set.call(null,inode__8472,edit,idx__8473,n__8476);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8477 = this;
var inode__8478 = this;
return cljs.core.create_array_node_seq.call(null,this__8477.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8479 = this;
var inode__8480 = this;
var idx__8481 = ((hash >>> shift) & 0x01f);
var node__8482 = (this__8479.arr[idx__8481]);
if((node__8482 == null))
{return inode__8480;
} else
{var n__8483 = node__8482.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8483 === node__8482))
{return inode__8480;
} else
{if((n__8483 == null))
{if((this__8479.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8480,edit,idx__8481);
} else
{var editable__8484 = cljs.core.edit_and_set.call(null,inode__8480,edit,idx__8481,n__8483);
editable__8484.cnt = (editable__8484.cnt - 1);
return editable__8484;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8480,edit,idx__8481,n__8483);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8485 = this;
var inode__8486 = this;
if((e === this__8485.edit))
{return inode__8486;
} else
{return (new cljs.core.ArrayNode(e,this__8485.cnt,this__8485.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8487 = this;
var inode__8488 = this;
var len__8489 = this__8487.arr.length;
var i__8490 = 0;
var init__8491 = init;
while(true){
if((i__8490 < len__8489))
{var node__8492 = (this__8487.arr[i__8490]);
if(!((node__8492 == null)))
{var init__8493 = node__8492.kv_reduce(f,init__8491);
if(cljs.core.reduced_QMARK_.call(null,init__8493))
{return cljs.core.deref.call(null,init__8493);
} else
{{
var G__8512 = (i__8490 + 1);
var G__8513 = init__8493;
i__8490 = G__8512;
init__8491 = G__8513;
continue;
}
}
} else
{return null;
}
} else
{return init__8491;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8494 = this;
var inode__8495 = this;
var idx__8496 = ((hash >>> shift) & 0x01f);
var node__8497 = (this__8494.arr[idx__8496]);
if(!((node__8497 == null)))
{return node__8497.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8498 = this;
var inode__8499 = this;
var idx__8500 = ((hash >>> shift) & 0x01f);
var node__8501 = (this__8498.arr[idx__8500]);
if(!((node__8501 == null)))
{var n__8502 = node__8501.inode_without((shift + 5),hash,key);
if((n__8502 === node__8501))
{return inode__8499;
} else
{if((n__8502 == null))
{if((this__8498.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8499,null,idx__8500);
} else
{return (new cljs.core.ArrayNode(null,(this__8498.cnt - 1),cljs.core.clone_and_set.call(null,this__8498.arr,idx__8500,n__8502)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8498.cnt,cljs.core.clone_and_set.call(null,this__8498.arr,idx__8500,n__8502)));
} else
{return null;
}
}
}
} else
{return inode__8499;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8503 = this;
var inode__8504 = this;
var idx__8505 = ((hash >>> shift) & 0x01f);
var node__8506 = (this__8503.arr[idx__8505]);
if((node__8506 == null))
{return (new cljs.core.ArrayNode(null,(this__8503.cnt + 1),cljs.core.clone_and_set.call(null,this__8503.arr,idx__8505,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8507 = node__8506.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8507 === node__8506))
{return inode__8504;
} else
{return (new cljs.core.ArrayNode(null,this__8503.cnt,cljs.core.clone_and_set.call(null,this__8503.arr,idx__8505,n__8507)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8508 = this;
var inode__8509 = this;
var idx__8510 = ((hash >>> shift) & 0x01f);
var node__8511 = (this__8508.arr[idx__8510]);
if(!((node__8511 == null)))
{return node__8511.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8516 = (2 * cnt);
var i__8517 = 0;
while(true){
if((i__8517 < lim__8516))
{if(cljs.core.key_test.call(null,key,(arr[i__8517])))
{return i__8517;
} else
{{
var G__8518 = (i__8517 + 2);
i__8517 = G__8518;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8519 = this;
var inode__8520 = this;
if((hash === this__8519.collision_hash))
{var idx__8521 = cljs.core.hash_collision_node_find_index.call(null,this__8519.arr,this__8519.cnt,key);
if((idx__8521 === -1))
{if((this__8519.arr.length > (2 * this__8519.cnt)))
{var editable__8522 = cljs.core.edit_and_set.call(null,inode__8520,edit,(2 * this__8519.cnt),key,((2 * this__8519.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__8522.cnt = (editable__8522.cnt + 1);
return editable__8522;
} else
{var len__8523 = this__8519.arr.length;
var new_arr__8524 = cljs.core.make_array.call(null,(len__8523 + 2));
cljs.core.array_copy.call(null,this__8519.arr,0,new_arr__8524,0,len__8523);
(new_arr__8524[len__8523] = key);
(new_arr__8524[(len__8523 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__8520.ensure_editable_array(edit,(this__8519.cnt + 1),new_arr__8524);
}
} else
{if(((this__8519.arr[(idx__8521 + 1)]) === val))
{return inode__8520;
} else
{return cljs.core.edit_and_set.call(null,inode__8520,edit,(idx__8521 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8519.collision_hash >>> shift) & 0x01f)),[null,inode__8520,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8525 = this;
var inode__8526 = this;
return cljs.core.create_inode_seq.call(null,this__8525.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8527 = this;
var inode__8528 = this;
var idx__8529 = cljs.core.hash_collision_node_find_index.call(null,this__8527.arr,this__8527.cnt,key);
if((idx__8529 === -1))
{return inode__8528;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8527.cnt === 1))
{return null;
} else
{var editable__8530 = inode__8528.ensure_editable(edit);
var earr__8531 = editable__8530.arr;
(earr__8531[idx__8529] = (earr__8531[((2 * this__8527.cnt) - 2)]));
(earr__8531[(idx__8529 + 1)] = (earr__8531[((2 * this__8527.cnt) - 1)]));
(earr__8531[((2 * this__8527.cnt) - 1)] = null);
(earr__8531[((2 * this__8527.cnt) - 2)] = null);
editable__8530.cnt = (editable__8530.cnt - 1);
return editable__8530;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__8532 = this;
var inode__8533 = this;
if((e === this__8532.edit))
{return inode__8533;
} else
{var new_arr__8534 = cljs.core.make_array.call(null,(2 * (this__8532.cnt + 1)));
cljs.core.array_copy.call(null,this__8532.arr,0,new_arr__8534,0,(2 * this__8532.cnt));
return (new cljs.core.HashCollisionNode(e,this__8532.collision_hash,this__8532.cnt,new_arr__8534));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8535 = this;
var inode__8536 = this;
return cljs.core.inode_kv_reduce.call(null,this__8535.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8537 = this;
var inode__8538 = this;
var idx__8539 = cljs.core.hash_collision_node_find_index.call(null,this__8537.arr,this__8537.cnt,key);
if((idx__8539 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8537.arr[idx__8539])))
{return cljs.core.PersistentVector.fromArray([(this__8537.arr[idx__8539]),(this__8537.arr[(idx__8539 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__8540 = this;
var inode__8541 = this;
var idx__8542 = cljs.core.hash_collision_node_find_index.call(null,this__8540.arr,this__8540.cnt,key);
if((idx__8542 === -1))
{return inode__8541;
} else
{if((this__8540.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8540.collision_hash,(this__8540.cnt - 1),cljs.core.remove_pair.call(null,this__8540.arr,cljs.core.quot.call(null,idx__8542,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8543 = this;
var inode__8544 = this;
if((hash === this__8543.collision_hash))
{var idx__8545 = cljs.core.hash_collision_node_find_index.call(null,this__8543.arr,this__8543.cnt,key);
if((idx__8545 === -1))
{var len__8546 = this__8543.arr.length;
var new_arr__8547 = cljs.core.make_array.call(null,(len__8546 + 2));
cljs.core.array_copy.call(null,this__8543.arr,0,new_arr__8547,0,len__8546);
(new_arr__8547[len__8546] = key);
(new_arr__8547[(len__8546 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__8543.collision_hash,(this__8543.cnt + 1),new_arr__8547));
} else
{if(cljs.core._EQ_.call(null,(this__8543.arr[idx__8545]),val))
{return inode__8544;
} else
{return (new cljs.core.HashCollisionNode(null,this__8543.collision_hash,this__8543.cnt,cljs.core.clone_and_set.call(null,this__8543.arr,(idx__8545 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8543.collision_hash >>> shift) & 0x01f)),[null,inode__8544])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8548 = this;
var inode__8549 = this;
var idx__8550 = cljs.core.hash_collision_node_find_index.call(null,this__8548.arr,this__8548.cnt,key);
if((idx__8550 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8548.arr[idx__8550])))
{return (this__8548.arr[(idx__8550 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__8551 = this;
var inode__8552 = this;
if((e === this__8551.edit))
{this__8551.arr = array;
this__8551.cnt = count;
return inode__8552;
} else
{return (new cljs.core.HashCollisionNode(this__8551.edit,this__8551.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8557 = cljs.core.hash.call(null,key1);
if((key1hash__8557 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8557,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8558 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8557,key1,val1,added_leaf_QMARK___8558).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8558);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8559 = cljs.core.hash.call(null,key1);
if((key1hash__8559 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8559,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8560 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8559,key1,val1,added_leaf_QMARK___8560).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8560);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8561 = this;
var h__2057__auto____8562 = this__8561.__hash;
if(!((h__2057__auto____8562 == null)))
{return h__2057__auto____8562;
} else
{var h__2057__auto____8563 = cljs.core.hash_coll.call(null,coll);
this__8561.__hash = h__2057__auto____8563;
return h__2057__auto____8563;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8564 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8565 = this;
var this__8566 = this;
return cljs.core.pr_str.call(null,this__8566);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8567 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8568 = this;
if((this__8568.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8568.nodes[this__8568.i]),(this__8568.nodes[(this__8568.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__8568.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8569 = this;
if((this__8569.s == null))
{return cljs.core.create_inode_seq.call(null,this__8569.nodes,(this__8569.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8569.nodes,this__8569.i,cljs.core.next.call(null,this__8569.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8570 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8571 = this;
return (new cljs.core.NodeSeq(meta,this__8571.nodes,this__8571.i,this__8571.s,this__8571.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8572 = this;
return this__8572.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8573 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8573.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8580 = nodes.length;
var j__8581 = i;
while(true){
if((j__8581 < len__8580))
{if(!(((nodes[j__8581]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__8581,null,null));
} else
{var temp__3971__auto____8582 = (nodes[(j__8581 + 1)]);
if(cljs.core.truth_(temp__3971__auto____8582))
{var node__8583 = temp__3971__auto____8582;
var temp__3971__auto____8584 = node__8583.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8584))
{var node_seq__8585 = temp__3971__auto____8584;
return (new cljs.core.NodeSeq(null,nodes,(j__8581 + 2),node_seq__8585,null));
} else
{{
var G__8586 = (j__8581 + 2);
j__8581 = G__8586;
continue;
}
}
} else
{{
var G__8587 = (j__8581 + 2);
j__8581 = G__8587;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8588 = this;
var h__2057__auto____8589 = this__8588.__hash;
if(!((h__2057__auto____8589 == null)))
{return h__2057__auto____8589;
} else
{var h__2057__auto____8590 = cljs.core.hash_coll.call(null,coll);
this__8588.__hash = h__2057__auto____8590;
return h__2057__auto____8590;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8591 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8592 = this;
var this__8593 = this;
return cljs.core.pr_str.call(null,this__8593);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8594 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8595 = this;
return cljs.core.first.call(null,this__8595.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8596 = this;
return cljs.core.create_array_node_seq.call(null,null,this__8596.nodes,this__8596.i,cljs.core.next.call(null,this__8596.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8597 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8598 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8598.nodes,this__8598.i,this__8598.s,this__8598.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8599 = this;
return this__8599.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8600 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8600.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8607 = nodes.length;
var j__8608 = i;
while(true){
if((j__8608 < len__8607))
{var temp__3971__auto____8609 = (nodes[j__8608]);
if(cljs.core.truth_(temp__3971__auto____8609))
{var nj__8610 = temp__3971__auto____8609;
var temp__3971__auto____8611 = nj__8610.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8611))
{var ns__8612 = temp__3971__auto____8611;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8608 + 1),ns__8612,null));
} else
{{
var G__8613 = (j__8608 + 1);
j__8608 = G__8613;
continue;
}
}
} else
{{
var G__8614 = (j__8608 + 1);
j__8608 = G__8614;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8617 = this;
return (new cljs.core.TransientHashMap({},this__8617.root,this__8617.cnt,this__8617.has_nil_QMARK_,this__8617.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8618 = this;
var h__2057__auto____8619 = this__8618.__hash;
if(!((h__2057__auto____8619 == null)))
{return h__2057__auto____8619;
} else
{var h__2057__auto____8620 = cljs.core.hash_imap.call(null,coll);
this__8618.__hash = h__2057__auto____8620;
return h__2057__auto____8620;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8621 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8622 = this;
if((k == null))
{if(this__8622.has_nil_QMARK_)
{return this__8622.nil_val;
} else
{return not_found;
}
} else
{if((this__8622.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__8622.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8623 = this;
if((k == null))
{if((function (){var and__3822__auto____8624 = this__8623.has_nil_QMARK_;
if(and__3822__auto____8624)
{return (v === this__8623.nil_val);
} else
{return and__3822__auto____8624;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8623.meta,((this__8623.has_nil_QMARK_)?this__8623.cnt:(this__8623.cnt + 1)),this__8623.root,true,v,null));
}
} else
{var added_leaf_QMARK___8625 = (new cljs.core.Box(false));
var new_root__8626 = (((this__8623.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8623.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8625);
if((new_root__8626 === this__8623.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8623.meta,((added_leaf_QMARK___8625.val)?(this__8623.cnt + 1):this__8623.cnt),new_root__8626,this__8623.has_nil_QMARK_,this__8623.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8627 = this;
if((k == null))
{return this__8627.has_nil_QMARK_;
} else
{if((this__8627.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__8627.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8650 = null;
var G__8650__2 = (function (this_sym8628,k){
var this__8630 = this;
var this_sym8628__8631 = this;
var coll__8632 = this_sym8628__8631;
return coll__8632.cljs$core$ILookup$_lookup$arity$2(coll__8632,k);
});
var G__8650__3 = (function (this_sym8629,k,not_found){
var this__8630 = this;
var this_sym8629__8633 = this;
var coll__8634 = this_sym8629__8633;
return coll__8634.cljs$core$ILookup$_lookup$arity$3(coll__8634,k,not_found);
});
G__8650 = function(this_sym8629,k,not_found){
switch(arguments.length){
case 2:
return G__8650__2.call(this,this_sym8629,k);
case 3:
return G__8650__3.call(this,this_sym8629,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8650;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym8615,args8616){
var this__8635 = this;
return this_sym8615.call.apply(this_sym8615,[this_sym8615].concat(args8616.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8636 = this;
var init__8637 = ((this__8636.has_nil_QMARK_)?f.call(null,init,null,this__8636.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__8637))
{return cljs.core.deref.call(null,init__8637);
} else
{if(!((this__8636.root == null)))
{return this__8636.root.kv_reduce(f,init__8637);
} else
{if("\uFDD0'else")
{return init__8637;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8638 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__8639 = this;
var this__8640 = this;
return cljs.core.pr_str.call(null,this__8640);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8641 = this;
if((this__8641.cnt > 0))
{var s__8642 = ((!((this__8641.root == null)))?this__8641.root.inode_seq():null);
if(this__8641.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__8641.nil_val], true),s__8642);
} else
{return s__8642;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8643 = this;
return this__8643.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8644 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8645 = this;
return (new cljs.core.PersistentHashMap(meta,this__8645.cnt,this__8645.root,this__8645.has_nil_QMARK_,this__8645.nil_val,this__8645.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8646 = this;
return this__8646.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8647 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__8647.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8648 = this;
if((k == null))
{if(this__8648.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__8648.meta,(this__8648.cnt - 1),this__8648.root,false,null,null));
} else
{return coll;
}
} else
{if((this__8648.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__8649 = this__8648.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__8649 === this__8648.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8648.meta,(this__8648.cnt - 1),new_root__8649,this__8648.has_nil_QMARK_,this__8648.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__8651 = ks.length;
var i__8652 = 0;
var out__8653 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__8652 < len__8651))
{{
var G__8654 = (i__8652 + 1);
var G__8655 = cljs.core.assoc_BANG_.call(null,out__8653,(ks[i__8652]),(vs[i__8652]));
i__8652 = G__8654;
out__8653 = G__8655;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8653);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8656 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8657 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__8658 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8659 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8660 = this;
if((k == null))
{if(this__8660.has_nil_QMARK_)
{return this__8660.nil_val;
} else
{return null;
}
} else
{if((this__8660.root == null))
{return null;
} else
{return this__8660.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8661 = this;
if((k == null))
{if(this__8661.has_nil_QMARK_)
{return this__8661.nil_val;
} else
{return not_found;
}
} else
{if((this__8661.root == null))
{return not_found;
} else
{return this__8661.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8662 = this;
if(this__8662.edit)
{return this__8662.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__8663 = this;
var tcoll__8664 = this;
if(this__8663.edit)
{if((function (){var G__8665__8666 = o;
if(G__8665__8666)
{if((function (){var or__3824__auto____8667 = (G__8665__8666.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8667)
{return or__3824__auto____8667;
} else
{return G__8665__8666.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8665__8666.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8665__8666);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8665__8666);
}
})())
{return tcoll__8664.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8668 = cljs.core.seq.call(null,o);
var tcoll__8669 = tcoll__8664;
while(true){
var temp__3971__auto____8670 = cljs.core.first.call(null,es__8668);
if(cljs.core.truth_(temp__3971__auto____8670))
{var e__8671 = temp__3971__auto____8670;
{
var G__8682 = cljs.core.next.call(null,es__8668);
var G__8683 = tcoll__8669.assoc_BANG_(cljs.core.key.call(null,e__8671),cljs.core.val.call(null,e__8671));
es__8668 = G__8682;
tcoll__8669 = G__8683;
continue;
}
} else
{return tcoll__8669;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__8672 = this;
var tcoll__8673 = this;
if(this__8672.edit)
{if((k == null))
{if((this__8672.nil_val === v))
{} else
{this__8672.nil_val = v;
}
if(this__8672.has_nil_QMARK_)
{} else
{this__8672.count = (this__8672.count + 1);
this__8672.has_nil_QMARK_ = true;
}
return tcoll__8673;
} else
{var added_leaf_QMARK___8674 = (new cljs.core.Box(false));
var node__8675 = (((this__8672.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8672.root).inode_assoc_BANG_(this__8672.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8674);
if((node__8675 === this__8672.root))
{} else
{this__8672.root = node__8675;
}
if(added_leaf_QMARK___8674.val)
{this__8672.count = (this__8672.count + 1);
} else
{}
return tcoll__8673;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__8676 = this;
var tcoll__8677 = this;
if(this__8676.edit)
{if((k == null))
{if(this__8676.has_nil_QMARK_)
{this__8676.has_nil_QMARK_ = false;
this__8676.nil_val = null;
this__8676.count = (this__8676.count - 1);
return tcoll__8677;
} else
{return tcoll__8677;
}
} else
{if((this__8676.root == null))
{return tcoll__8677;
} else
{var removed_leaf_QMARK___8678 = (new cljs.core.Box(false));
var node__8679 = this__8676.root.inode_without_BANG_(this__8676.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___8678);
if((node__8679 === this__8676.root))
{} else
{this__8676.root = node__8679;
}
if(cljs.core.truth_((removed_leaf_QMARK___8678[0])))
{this__8676.count = (this__8676.count - 1);
} else
{}
return tcoll__8677;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__8680 = this;
var tcoll__8681 = this;
if(this__8680.edit)
{this__8680.edit = null;
return (new cljs.core.PersistentHashMap(null,this__8680.count,this__8680.root,this__8680.has_nil_QMARK_,this__8680.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__8686 = node;
var stack__8687 = stack;
while(true){
if(!((t__8686 == null)))
{{
var G__8688 = ((ascending_QMARK_)?t__8686.left:t__8686.right);
var G__8689 = cljs.core.conj.call(null,stack__8687,t__8686);
t__8686 = G__8688;
stack__8687 = G__8689;
continue;
}
} else
{return stack__8687;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8690 = this;
var h__2057__auto____8691 = this__8690.__hash;
if(!((h__2057__auto____8691 == null)))
{return h__2057__auto____8691;
} else
{var h__2057__auto____8692 = cljs.core.hash_coll.call(null,coll);
this__8690.__hash = h__2057__auto____8692;
return h__2057__auto____8692;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8693 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__8694 = this;
var this__8695 = this;
return cljs.core.pr_str.call(null,this__8695);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8696 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8697 = this;
if((this__8697.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__8697.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__8698 = this;
return cljs.core.peek.call(null,this__8698.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__8699 = this;
var t__8700 = cljs.core.first.call(null,this__8699.stack);
var next_stack__8701 = cljs.core.tree_map_seq_push.call(null,((this__8699.ascending_QMARK_)?t__8700.right:t__8700.left),cljs.core.next.call(null,this__8699.stack),this__8699.ascending_QMARK_);
if(!((next_stack__8701 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__8701,this__8699.ascending_QMARK_,(this__8699.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8702 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8703 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__8703.stack,this__8703.ascending_QMARK_,this__8703.cnt,this__8703.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8704 = this;
return this__8704.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____8706 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____8706)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____8706;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____8708 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____8708)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____8708;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__8712 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__8712))
{return cljs.core.deref.call(null,init__8712);
} else
{var init__8713 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__8712):init__8712);
if(cljs.core.reduced_QMARK_.call(null,init__8713))
{return cljs.core.deref.call(null,init__8713);
} else
{var init__8714 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__8713):init__8713);
if(cljs.core.reduced_QMARK_.call(null,init__8714))
{return cljs.core.deref.call(null,init__8714);
} else
{return init__8714;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8717 = this;
var h__2057__auto____8718 = this__8717.__hash;
if(!((h__2057__auto____8718 == null)))
{return h__2057__auto____8718;
} else
{var h__2057__auto____8719 = cljs.core.hash_coll.call(null,coll);
this__8717.__hash = h__2057__auto____8719;
return h__2057__auto____8719;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8720 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8721 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8722 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8722.key,this__8722.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__8770 = null;
var G__8770__2 = (function (this_sym8723,k){
var this__8725 = this;
var this_sym8723__8726 = this;
var node__8727 = this_sym8723__8726;
return node__8727.cljs$core$ILookup$_lookup$arity$2(node__8727,k);
});
var G__8770__3 = (function (this_sym8724,k,not_found){
var this__8725 = this;
var this_sym8724__8728 = this;
var node__8729 = this_sym8724__8728;
return node__8729.cljs$core$ILookup$_lookup$arity$3(node__8729,k,not_found);
});
G__8770 = function(this_sym8724,k,not_found){
switch(arguments.length){
case 2:
return G__8770__2.call(this,this_sym8724,k);
case 3:
return G__8770__3.call(this,this_sym8724,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8770;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym8715,args8716){
var this__8730 = this;
return this_sym8715.call.apply(this_sym8715,[this_sym8715].concat(args8716.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8731 = this;
return cljs.core.PersistentVector.fromArray([this__8731.key,this__8731.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8732 = this;
return this__8732.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8733 = this;
return this__8733.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__8734 = this;
var node__8735 = this;
return ins.balance_right(node__8735);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__8736 = this;
var node__8737 = this;
return (new cljs.core.RedNode(this__8736.key,this__8736.val,this__8736.left,this__8736.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__8738 = this;
var node__8739 = this;
return cljs.core.balance_right_del.call(null,this__8738.key,this__8738.val,this__8738.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__8740 = this;
var node__8741 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__8742 = this;
var node__8743 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8743,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__8744 = this;
var node__8745 = this;
return cljs.core.balance_left_del.call(null,this__8744.key,this__8744.val,del,this__8744.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__8746 = this;
var node__8747 = this;
return ins.balance_left(node__8747);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__8748 = this;
var node__8749 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__8749,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__8771 = null;
var G__8771__0 = (function (){
var this__8750 = this;
var this__8752 = this;
return cljs.core.pr_str.call(null,this__8752);
});
G__8771 = function(){
switch(arguments.length){
case 0:
return G__8771__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8771;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__8753 = this;
var node__8754 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8754,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__8755 = this;
var node__8756 = this;
return node__8756;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8757 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8758 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8759 = this;
return cljs.core.list.call(null,this__8759.key,this__8759.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8760 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8761 = this;
return this__8761.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8762 = this;
return cljs.core.PersistentVector.fromArray([this__8762.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8763 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8763.key,this__8763.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8764 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8765 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8765.key,this__8765.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8766 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8767 = this;
if((n === 0))
{return this__8767.key;
} else
{if((n === 1))
{return this__8767.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8768 = this;
if((n === 0))
{return this__8768.key;
} else
{if((n === 1))
{return this__8768.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8769 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8774 = this;
var h__2057__auto____8775 = this__8774.__hash;
if(!((h__2057__auto____8775 == null)))
{return h__2057__auto____8775;
} else
{var h__2057__auto____8776 = cljs.core.hash_coll.call(null,coll);
this__8774.__hash = h__2057__auto____8776;
return h__2057__auto____8776;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8777 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8778 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8779 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8779.key,this__8779.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__8827 = null;
var G__8827__2 = (function (this_sym8780,k){
var this__8782 = this;
var this_sym8780__8783 = this;
var node__8784 = this_sym8780__8783;
return node__8784.cljs$core$ILookup$_lookup$arity$2(node__8784,k);
});
var G__8827__3 = (function (this_sym8781,k,not_found){
var this__8782 = this;
var this_sym8781__8785 = this;
var node__8786 = this_sym8781__8785;
return node__8786.cljs$core$ILookup$_lookup$arity$3(node__8786,k,not_found);
});
G__8827 = function(this_sym8781,k,not_found){
switch(arguments.length){
case 2:
return G__8827__2.call(this,this_sym8781,k);
case 3:
return G__8827__3.call(this,this_sym8781,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8827;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym8772,args8773){
var this__8787 = this;
return this_sym8772.call.apply(this_sym8772,[this_sym8772].concat(args8773.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8788 = this;
return cljs.core.PersistentVector.fromArray([this__8788.key,this__8788.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8789 = this;
return this__8789.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8790 = this;
return this__8790.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__8791 = this;
var node__8792 = this;
return (new cljs.core.RedNode(this__8791.key,this__8791.val,this__8791.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__8793 = this;
var node__8794 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__8795 = this;
var node__8796 = this;
return (new cljs.core.RedNode(this__8795.key,this__8795.val,this__8795.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__8797 = this;
var node__8798 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__8799 = this;
var node__8800 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8800,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__8801 = this;
var node__8802 = this;
return (new cljs.core.RedNode(this__8801.key,this__8801.val,del,this__8801.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__8803 = this;
var node__8804 = this;
return (new cljs.core.RedNode(this__8803.key,this__8803.val,ins,this__8803.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__8805 = this;
var node__8806 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8805.left))
{return (new cljs.core.RedNode(this__8805.key,this__8805.val,this__8805.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__8805.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8805.right))
{return (new cljs.core.RedNode(this__8805.right.key,this__8805.right.val,(new cljs.core.BlackNode(this__8805.key,this__8805.val,this__8805.left,this__8805.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__8805.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__8806,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__8828 = null;
var G__8828__0 = (function (){
var this__8807 = this;
var this__8809 = this;
return cljs.core.pr_str.call(null,this__8809);
});
G__8828 = function(){
switch(arguments.length){
case 0:
return G__8828__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8828;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__8810 = this;
var node__8811 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8810.right))
{return (new cljs.core.RedNode(this__8810.key,this__8810.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8810.left,null)),this__8810.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8810.left))
{return (new cljs.core.RedNode(this__8810.left.key,this__8810.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8810.left.left,null)),(new cljs.core.BlackNode(this__8810.key,this__8810.val,this__8810.left.right,this__8810.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8811,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__8812 = this;
var node__8813 = this;
return (new cljs.core.BlackNode(this__8812.key,this__8812.val,this__8812.left,this__8812.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8814 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8815 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8816 = this;
return cljs.core.list.call(null,this__8816.key,this__8816.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8817 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8818 = this;
return this__8818.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8819 = this;
return cljs.core.PersistentVector.fromArray([this__8819.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8820 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8820.key,this__8820.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8821 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8822 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8822.key,this__8822.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8823 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8824 = this;
if((n === 0))
{return this__8824.key;
} else
{if((n === 1))
{return this__8824.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8825 = this;
if((n === 0))
{return this__8825.key;
} else
{if((n === 1))
{return this__8825.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8826 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__8832 = comp.call(null,k,tree.key);
if((c__8832 === 0))
{(found[0] = tree);
return null;
} else
{if((c__8832 < 0))
{var ins__8833 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__8833 == null)))
{return tree.add_left(ins__8833);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__8834 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__8834 == null)))
{return tree.add_right(ins__8834);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__8837 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8837))
{return (new cljs.core.RedNode(app__8837.key,app__8837.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__8837.left,null)),(new cljs.core.RedNode(right.key,right.val,app__8837.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__8837,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__8838 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8838))
{return (new cljs.core.RedNode(app__8838.key,app__8838.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__8838.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__8838.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__8838,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__8844 = comp.call(null,k,tree.key);
if((c__8844 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__8844 < 0))
{var del__8845 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____8846 = !((del__8845 == null));
if(or__3824__auto____8846)
{return or__3824__auto____8846;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__8845,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__8845,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__8847 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____8848 = !((del__8847 == null));
if(or__3824__auto____8848)
{return or__3824__auto____8848;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__8847);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__8847,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__8851 = tree.key;
var c__8852 = comp.call(null,k,tk__8851);
if((c__8852 === 0))
{return tree.replace(tk__8851,v,tree.left,tree.right);
} else
{if((c__8852 < 0))
{return tree.replace(tk__8851,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__8851,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8855 = this;
var h__2057__auto____8856 = this__8855.__hash;
if(!((h__2057__auto____8856 == null)))
{return h__2057__auto____8856;
} else
{var h__2057__auto____8857 = cljs.core.hash_imap.call(null,coll);
this__8855.__hash = h__2057__auto____8857;
return h__2057__auto____8857;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8858 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8859 = this;
var n__8860 = coll.entry_at(k);
if(!((n__8860 == null)))
{return n__8860.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8861 = this;
var found__8862 = [null];
var t__8863 = cljs.core.tree_map_add.call(null,this__8861.comp,this__8861.tree,k,v,found__8862);
if((t__8863 == null))
{var found_node__8864 = cljs.core.nth.call(null,found__8862,0);
if(cljs.core._EQ_.call(null,v,found_node__8864.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8861.comp,cljs.core.tree_map_replace.call(null,this__8861.comp,this__8861.tree,k,v),this__8861.cnt,this__8861.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8861.comp,t__8863.blacken(),(this__8861.cnt + 1),this__8861.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8865 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__8899 = null;
var G__8899__2 = (function (this_sym8866,k){
var this__8868 = this;
var this_sym8866__8869 = this;
var coll__8870 = this_sym8866__8869;
return coll__8870.cljs$core$ILookup$_lookup$arity$2(coll__8870,k);
});
var G__8899__3 = (function (this_sym8867,k,not_found){
var this__8868 = this;
var this_sym8867__8871 = this;
var coll__8872 = this_sym8867__8871;
return coll__8872.cljs$core$ILookup$_lookup$arity$3(coll__8872,k,not_found);
});
G__8899 = function(this_sym8867,k,not_found){
switch(arguments.length){
case 2:
return G__8899__2.call(this,this_sym8867,k);
case 3:
return G__8899__3.call(this,this_sym8867,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8899;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym8853,args8854){
var this__8873 = this;
return this_sym8853.call.apply(this_sym8853,[this_sym8853].concat(args8854.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8874 = this;
if(!((this__8874.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__8874.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8875 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8876 = this;
if((this__8876.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8876.tree,false,this__8876.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__8877 = this;
var this__8878 = this;
return cljs.core.pr_str.call(null,this__8878);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__8879 = this;
var coll__8880 = this;
var t__8881 = this__8879.tree;
while(true){
if(!((t__8881 == null)))
{var c__8882 = this__8879.comp.call(null,k,t__8881.key);
if((c__8882 === 0))
{return t__8881;
} else
{if((c__8882 < 0))
{{
var G__8900 = t__8881.left;
t__8881 = G__8900;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__8901 = t__8881.right;
t__8881 = G__8901;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__8883 = this;
if((this__8883.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8883.tree,ascending_QMARK_,this__8883.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__8884 = this;
if((this__8884.cnt > 0))
{var stack__8885 = null;
var t__8886 = this__8884.tree;
while(true){
if(!((t__8886 == null)))
{var c__8887 = this__8884.comp.call(null,k,t__8886.key);
if((c__8887 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__8885,t__8886),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__8887 < 0))
{{
var G__8902 = cljs.core.conj.call(null,stack__8885,t__8886);
var G__8903 = t__8886.left;
stack__8885 = G__8902;
t__8886 = G__8903;
continue;
}
} else
{{
var G__8904 = stack__8885;
var G__8905 = t__8886.right;
stack__8885 = G__8904;
t__8886 = G__8905;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__8887 > 0))
{{
var G__8906 = cljs.core.conj.call(null,stack__8885,t__8886);
var G__8907 = t__8886.right;
stack__8885 = G__8906;
t__8886 = G__8907;
continue;
}
} else
{{
var G__8908 = stack__8885;
var G__8909 = t__8886.left;
stack__8885 = G__8908;
t__8886 = G__8909;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__8885 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__8885,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__8888 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__8889 = this;
return this__8889.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8890 = this;
if((this__8890.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8890.tree,true,this__8890.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8891 = this;
return this__8891.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8892 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8893 = this;
return (new cljs.core.PersistentTreeMap(this__8893.comp,this__8893.tree,this__8893.cnt,meta,this__8893.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8894 = this;
return this__8894.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8895 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__8895.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8896 = this;
var found__8897 = [null];
var t__8898 = cljs.core.tree_map_remove.call(null,this__8896.comp,this__8896.tree,k,found__8897);
if((t__8898 == null))
{if((cljs.core.nth.call(null,found__8897,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8896.comp,null,0,this__8896.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8896.comp,t__8898.blacken(),(this__8896.cnt - 1),this__8896.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__8912 = cljs.core.seq.call(null,keyvals);
var out__8913 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__8912)
{{
var G__8914 = cljs.core.nnext.call(null,in__8912);
var G__8915 = cljs.core.assoc_BANG_.call(null,out__8913,cljs.core.first.call(null,in__8912),cljs.core.second.call(null,in__8912));
in__8912 = G__8914;
out__8913 = G__8915;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8913);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__8916){
var keyvals = cljs.core.seq(arglist__8916);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__8917){
var keyvals = cljs.core.seq(arglist__8917);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__8920 = cljs.core.seq.call(null,keyvals);
var out__8921 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__8920)
{{
var G__8922 = cljs.core.nnext.call(null,in__8920);
var G__8923 = cljs.core.assoc.call(null,out__8921,cljs.core.first.call(null,in__8920),cljs.core.second.call(null,in__8920));
in__8920 = G__8922;
out__8921 = G__8923;
continue;
}
} else
{return out__8921;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__8924){
var keyvals = cljs.core.seq(arglist__8924);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__8927 = cljs.core.seq.call(null,keyvals);
var out__8928 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__8927)
{{
var G__8929 = cljs.core.nnext.call(null,in__8927);
var G__8930 = cljs.core.assoc.call(null,out__8928,cljs.core.first.call(null,in__8927),cljs.core.second.call(null,in__8927));
in__8927 = G__8929;
out__8928 = G__8930;
continue;
}
} else
{return out__8928;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__8931){
var comparator = cljs.core.first(arglist__8931);
var keyvals = cljs.core.rest(arglist__8931);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__8932_SHARP_,p2__8933_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____8935 = p1__8932_SHARP_;
if(cljs.core.truth_(or__3824__auto____8935))
{return or__3824__auto____8935;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__8933_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__8936){
var maps = cljs.core.seq(arglist__8936);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__8944 = (function (m,e){
var k__8942 = cljs.core.first.call(null,e);
var v__8943 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__8942))
{return cljs.core.assoc.call(null,m,k__8942,f.call(null,cljs.core._lookup.call(null,m,k__8942,null),v__8943));
} else
{return cljs.core.assoc.call(null,m,k__8942,v__8943);
}
});
var merge2__8946 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8944,(function (){var or__3824__auto____8945 = m1;
if(cljs.core.truth_(or__3824__auto____8945))
{return or__3824__auto____8945;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__8946,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__8947){
var f = cljs.core.first(arglist__8947);
var maps = cljs.core.rest(arglist__8947);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8952 = cljs.core.ObjMap.EMPTY;
var keys__8953 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__8953)
{var key__8954 = cljs.core.first.call(null,keys__8953);
var entry__8955 = cljs.core._lookup.call(null,map,key__8954,"\uFDD0'user/not-found");
{
var G__8956 = ((cljs.core.not_EQ_.call(null,entry__8955,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8952,key__8954,entry__8955):ret__8952);
var G__8957 = cljs.core.next.call(null,keys__8953);
ret__8952 = G__8956;
keys__8953 = G__8957;
continue;
}
} else
{return ret__8952;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8961 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__8961.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8962 = this;
var h__2057__auto____8963 = this__8962.__hash;
if(!((h__2057__auto____8963 == null)))
{return h__2057__auto____8963;
} else
{var h__2057__auto____8964 = cljs.core.hash_iset.call(null,coll);
this__8962.__hash = h__2057__auto____8964;
return h__2057__auto____8964;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__8965 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__8966 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8966.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__8987 = null;
var G__8987__2 = (function (this_sym8967,k){
var this__8969 = this;
var this_sym8967__8970 = this;
var coll__8971 = this_sym8967__8970;
return coll__8971.cljs$core$ILookup$_lookup$arity$2(coll__8971,k);
});
var G__8987__3 = (function (this_sym8968,k,not_found){
var this__8969 = this;
var this_sym8968__8972 = this;
var coll__8973 = this_sym8968__8972;
return coll__8973.cljs$core$ILookup$_lookup$arity$3(coll__8973,k,not_found);
});
G__8987 = function(this_sym8968,k,not_found){
switch(arguments.length){
case 2:
return G__8987__2.call(this,this_sym8968,k);
case 3:
return G__8987__3.call(this,this_sym8968,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8987;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym8959,args8960){
var this__8974 = this;
return this_sym8959.call.apply(this_sym8959,[this_sym8959].concat(args8960.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8975 = this;
return (new cljs.core.PersistentHashSet(this__8975.meta,cljs.core.assoc.call(null,this__8975.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__8976 = this;
var this__8977 = this;
return cljs.core.pr_str.call(null,this__8977);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8978 = this;
return cljs.core.keys.call(null,this__8978.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__8979 = this;
return (new cljs.core.PersistentHashSet(this__8979.meta,cljs.core.dissoc.call(null,this__8979.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8980 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8981 = this;
var and__3822__auto____8982 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____8982)
{var and__3822__auto____8983 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____8983)
{return cljs.core.every_QMARK_.call(null,(function (p1__8958_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8958_SHARP_);
}),other);
} else
{return and__3822__auto____8983;
}
} else
{return and__3822__auto____8982;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8984 = this;
return (new cljs.core.PersistentHashSet(meta,this__8984.hash_map,this__8984.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8985 = this;
return this__8985.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8986 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__8986.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9005 = null;
var G__9005__2 = (function (this_sym8991,k){
var this__8993 = this;
var this_sym8991__8994 = this;
var tcoll__8995 = this_sym8991__8994;
if((cljs.core._lookup.call(null,this__8993.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9005__3 = (function (this_sym8992,k,not_found){
var this__8993 = this;
var this_sym8992__8996 = this;
var tcoll__8997 = this_sym8992__8996;
if((cljs.core._lookup.call(null,this__8993.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9005 = function(this_sym8992,k,not_found){
switch(arguments.length){
case 2:
return G__9005__2.call(this,this_sym8992,k);
case 3:
return G__9005__3.call(this,this_sym8992,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9005;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym8989,args8990){
var this__8998 = this;
return this_sym8989.call.apply(this_sym8989,[this_sym8989].concat(args8990.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__8999 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9000 = this;
if((cljs.core._lookup.call(null,this__9000.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9001 = this;
return cljs.core.count.call(null,this__9001.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9002 = this;
this__9002.transient_map = cljs.core.dissoc_BANG_.call(null,this__9002.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9003 = this;
this__9003.transient_map = cljs.core.assoc_BANG_.call(null,this__9003.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9004 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9004.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9008 = this;
var h__2057__auto____9009 = this__9008.__hash;
if(!((h__2057__auto____9009 == null)))
{return h__2057__auto____9009;
} else
{var h__2057__auto____9010 = cljs.core.hash_iset.call(null,coll);
this__9008.__hash = h__2057__auto____9010;
return h__2057__auto____9010;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9011 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9012 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9012.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9038 = null;
var G__9038__2 = (function (this_sym9013,k){
var this__9015 = this;
var this_sym9013__9016 = this;
var coll__9017 = this_sym9013__9016;
return coll__9017.cljs$core$ILookup$_lookup$arity$2(coll__9017,k);
});
var G__9038__3 = (function (this_sym9014,k,not_found){
var this__9015 = this;
var this_sym9014__9018 = this;
var coll__9019 = this_sym9014__9018;
return coll__9019.cljs$core$ILookup$_lookup$arity$3(coll__9019,k,not_found);
});
G__9038 = function(this_sym9014,k,not_found){
switch(arguments.length){
case 2:
return G__9038__2.call(this,this_sym9014,k);
case 3:
return G__9038__3.call(this,this_sym9014,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9038;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9006,args9007){
var this__9020 = this;
return this_sym9006.call.apply(this_sym9006,[this_sym9006].concat(args9007.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9021 = this;
return (new cljs.core.PersistentTreeSet(this__9021.meta,cljs.core.assoc.call(null,this__9021.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9022 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9022.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9023 = this;
var this__9024 = this;
return cljs.core.pr_str.call(null,this__9024);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9025 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9025.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9026 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9026.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9027 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9028 = this;
return cljs.core._comparator.call(null,this__9028.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9029 = this;
return cljs.core.keys.call(null,this__9029.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9030 = this;
return (new cljs.core.PersistentTreeSet(this__9030.meta,cljs.core.dissoc.call(null,this__9030.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9031 = this;
return cljs.core.count.call(null,this__9031.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9032 = this;
var and__3822__auto____9033 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9033)
{var and__3822__auto____9034 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9034)
{return cljs.core.every_QMARK_.call(null,(function (p1__8988_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8988_SHARP_);
}),other);
} else
{return and__3822__auto____9034;
}
} else
{return and__3822__auto____9033;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9035 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9035.tree_map,this__9035.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9036 = this;
return this__9036.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9037 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9037.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__9041 = cljs.core.seq.call(null,coll);
var out__9042 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9041))
{{
var G__9043 = cljs.core.next.call(null,in__9041);
var G__9044 = cljs.core.conj_BANG_.call(null,out__9042,cljs.core.first.call(null,in__9041));
in__9041 = G__9043;
out__9042 = G__9044;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9042);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9045){
var keys = cljs.core.seq(arglist__9045);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9047){
var comparator = cljs.core.first(arglist__9047);
var keys = cljs.core.rest(arglist__9047);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9053 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9054 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9054))
{var e__9055 = temp__3971__auto____9054;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9055));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9053,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9046_SHARP_){
var temp__3971__auto____9056 = cljs.core.find.call(null,smap,p1__9046_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9056))
{var e__9057 = temp__3971__auto____9056;
return cljs.core.second.call(null,e__9057);
} else
{return p1__9046_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9087 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9080,seen){
while(true){
var vec__9081__9082 = p__9080;
var f__9083 = cljs.core.nth.call(null,vec__9081__9082,0,null);
var xs__9084 = vec__9081__9082;
var temp__3974__auto____9085 = cljs.core.seq.call(null,xs__9084);
if(temp__3974__auto____9085)
{var s__9086 = temp__3974__auto____9085;
if(cljs.core.contains_QMARK_.call(null,seen,f__9083))
{{
var G__9088 = cljs.core.rest.call(null,s__9086);
var G__9089 = seen;
p__9080 = G__9088;
seen = G__9089;
continue;
}
} else
{return cljs.core.cons.call(null,f__9083,step.call(null,cljs.core.rest.call(null,s__9086),cljs.core.conj.call(null,seen,f__9083)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9087.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9092 = cljs.core.PersistentVector.EMPTY;
var s__9093 = s;
while(true){
if(cljs.core.next.call(null,s__9093))
{{
var G__9094 = cljs.core.conj.call(null,ret__9092,cljs.core.first.call(null,s__9093));
var G__9095 = cljs.core.next.call(null,s__9093);
ret__9092 = G__9094;
s__9093 = G__9095;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9092);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9098 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9098)
{return or__3824__auto____9098;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9099 = x.lastIndexOf("/");
if((i__9099 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9099 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9102 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9102)
{return or__3824__auto____9102;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9103 = x.lastIndexOf("/");
if((i__9103 > -1))
{return cljs.core.subs.call(null,x,2,i__9103);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9110 = cljs.core.ObjMap.EMPTY;
var ks__9111 = cljs.core.seq.call(null,keys);
var vs__9112 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9113 = ks__9111;
if(and__3822__auto____9113)
{return vs__9112;
} else
{return and__3822__auto____9113;
}
})())
{{
var G__9114 = cljs.core.assoc.call(null,map__9110,cljs.core.first.call(null,ks__9111),cljs.core.first.call(null,vs__9112));
var G__9115 = cljs.core.next.call(null,ks__9111);
var G__9116 = cljs.core.next.call(null,vs__9112);
map__9110 = G__9114;
ks__9111 = G__9115;
vs__9112 = G__9116;
continue;
}
} else
{return map__9110;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9119__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9104_SHARP_,p2__9105_SHARP_){
return max_key.call(null,k,p1__9104_SHARP_,p2__9105_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9119 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9119__delegate.call(this, k, x, y, more);
};
G__9119.cljs$lang$maxFixedArity = 3;
G__9119.cljs$lang$applyTo = (function (arglist__9120){
var k = cljs.core.first(arglist__9120);
var x = cljs.core.first(cljs.core.next(arglist__9120));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9120)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9120)));
return G__9119__delegate(k, x, y, more);
});
G__9119.cljs$lang$arity$variadic = G__9119__delegate;
return G__9119;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9121__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9117_SHARP_,p2__9118_SHARP_){
return min_key.call(null,k,p1__9117_SHARP_,p2__9118_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9121 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9121__delegate.call(this, k, x, y, more);
};
G__9121.cljs$lang$maxFixedArity = 3;
G__9121.cljs$lang$applyTo = (function (arglist__9122){
var k = cljs.core.first(arglist__9122);
var x = cljs.core.first(cljs.core.next(arglist__9122));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9122)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9122)));
return G__9121__delegate(k, x, y, more);
});
G__9121.cljs$lang$arity$variadic = G__9121__delegate;
return G__9121;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9125 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9125)
{var s__9126 = temp__3974__auto____9125;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9126),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9126)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9129 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9129)
{var s__9130 = temp__3974__auto____9129;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9130))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9130),take_while.call(null,pred,cljs.core.rest.call(null,s__9130)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9132 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9132.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9144 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9145 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9145))
{var vec__9146__9147 = temp__3974__auto____9145;
var e__9148 = cljs.core.nth.call(null,vec__9146__9147,0,null);
var s__9149 = vec__9146__9147;
if(cljs.core.truth_(include__9144.call(null,e__9148)))
{return s__9149;
} else
{return cljs.core.next.call(null,s__9149);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9144,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9150 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9150))
{var vec__9151__9152 = temp__3974__auto____9150;
var e__9153 = cljs.core.nth.call(null,vec__9151__9152,0,null);
var s__9154 = vec__9151__9152;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9153))?s__9154:cljs.core.next.call(null,s__9154)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9166 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9167 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9167))
{var vec__9168__9169 = temp__3974__auto____9167;
var e__9170 = cljs.core.nth.call(null,vec__9168__9169,0,null);
var s__9171 = vec__9168__9169;
if(cljs.core.truth_(include__9166.call(null,e__9170)))
{return s__9171;
} else
{return cljs.core.next.call(null,s__9171);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9166,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9172 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9172))
{var vec__9173__9174 = temp__3974__auto____9172;
var e__9175 = cljs.core.nth.call(null,vec__9173__9174,0,null);
var s__9176 = vec__9173__9174;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9175))?s__9176:cljs.core.next.call(null,s__9176)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9177 = this;
var h__2057__auto____9178 = this__9177.__hash;
if(!((h__2057__auto____9178 == null)))
{return h__2057__auto____9178;
} else
{var h__2057__auto____9179 = cljs.core.hash_coll.call(null,rng);
this__9177.__hash = h__2057__auto____9179;
return h__2057__auto____9179;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9180 = this;
if((this__9180.step > 0))
{if(((this__9180.start + this__9180.step) < this__9180.end))
{return (new cljs.core.Range(this__9180.meta,(this__9180.start + this__9180.step),this__9180.end,this__9180.step,null));
} else
{return null;
}
} else
{if(((this__9180.start + this__9180.step) > this__9180.end))
{return (new cljs.core.Range(this__9180.meta,(this__9180.start + this__9180.step),this__9180.end,this__9180.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9181 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9182 = this;
var this__9183 = this;
return cljs.core.pr_str.call(null,this__9183);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9184 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9185 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9186 = this;
if((this__9186.step > 0))
{if((this__9186.start < this__9186.end))
{return rng;
} else
{return null;
}
} else
{if((this__9186.start > this__9186.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9187 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9187.end - this__9187.start) / this__9187.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9188 = this;
return this__9188.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9189 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9189.meta,(this__9189.start + this__9189.step),this__9189.end,this__9189.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9190 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9191 = this;
return (new cljs.core.Range(meta,this__9191.start,this__9191.end,this__9191.step,this__9191.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9192 = this;
return this__9192.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9193 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9193.start + (n * this__9193.step));
} else
{if((function (){var and__3822__auto____9194 = (this__9193.start > this__9193.end);
if(and__3822__auto____9194)
{return (this__9193.step === 0);
} else
{return and__3822__auto____9194;
}
})())
{return this__9193.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9195 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9195.start + (n * this__9195.step));
} else
{if((function (){var and__3822__auto____9196 = (this__9195.start > this__9195.end);
if(and__3822__auto____9196)
{return (this__9195.step === 0);
} else
{return and__3822__auto____9196;
}
})())
{return this__9195.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9197 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9197.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9200 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9200)
{var s__9201 = temp__3974__auto____9200;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9201),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9201)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9208 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9208)
{var s__9209 = temp__3974__auto____9208;
var fst__9210 = cljs.core.first.call(null,s__9209);
var fv__9211 = f.call(null,fst__9210);
var run__9212 = cljs.core.cons.call(null,fst__9210,cljs.core.take_while.call(null,(function (p1__9202_SHARP_){
return cljs.core._EQ_.call(null,fv__9211,f.call(null,p1__9202_SHARP_));
}),cljs.core.next.call(null,s__9209)));
return cljs.core.cons.call(null,run__9212,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9212),s__9209))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9227 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9227)
{var s__9228 = temp__3971__auto____9227;
return reductions.call(null,f,cljs.core.first.call(null,s__9228),cljs.core.rest.call(null,s__9228));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9229 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9229)
{var s__9230 = temp__3974__auto____9229;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9230)),cljs.core.rest.call(null,s__9230));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9233 = null;
var G__9233__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9233__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9233__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9233__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9233__4 = (function() { 
var G__9234__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9234 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9234__delegate.call(this, x, y, z, args);
};
G__9234.cljs$lang$maxFixedArity = 3;
G__9234.cljs$lang$applyTo = (function (arglist__9235){
var x = cljs.core.first(arglist__9235);
var y = cljs.core.first(cljs.core.next(arglist__9235));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9235)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9235)));
return G__9234__delegate(x, y, z, args);
});
G__9234.cljs$lang$arity$variadic = G__9234__delegate;
return G__9234;
})()
;
G__9233 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9233__0.call(this);
case 1:
return G__9233__1.call(this,x);
case 2:
return G__9233__2.call(this,x,y);
case 3:
return G__9233__3.call(this,x,y,z);
default:
return G__9233__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9233.cljs$lang$maxFixedArity = 3;
G__9233.cljs$lang$applyTo = G__9233__4.cljs$lang$applyTo;
return G__9233;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9236 = null;
var G__9236__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9236__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9236__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9236__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9236__4 = (function() { 
var G__9237__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9237 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9237__delegate.call(this, x, y, z, args);
};
G__9237.cljs$lang$maxFixedArity = 3;
G__9237.cljs$lang$applyTo = (function (arglist__9238){
var x = cljs.core.first(arglist__9238);
var y = cljs.core.first(cljs.core.next(arglist__9238));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9238)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9238)));
return G__9237__delegate(x, y, z, args);
});
G__9237.cljs$lang$arity$variadic = G__9237__delegate;
return G__9237;
})()
;
G__9236 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9236__0.call(this);
case 1:
return G__9236__1.call(this,x);
case 2:
return G__9236__2.call(this,x,y);
case 3:
return G__9236__3.call(this,x,y,z);
default:
return G__9236__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9236.cljs$lang$maxFixedArity = 3;
G__9236.cljs$lang$applyTo = G__9236__4.cljs$lang$applyTo;
return G__9236;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9239 = null;
var G__9239__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9239__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9239__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9239__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9239__4 = (function() { 
var G__9240__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9240 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9240__delegate.call(this, x, y, z, args);
};
G__9240.cljs$lang$maxFixedArity = 3;
G__9240.cljs$lang$applyTo = (function (arglist__9241){
var x = cljs.core.first(arglist__9241);
var y = cljs.core.first(cljs.core.next(arglist__9241));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9241)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9241)));
return G__9240__delegate(x, y, z, args);
});
G__9240.cljs$lang$arity$variadic = G__9240__delegate;
return G__9240;
})()
;
G__9239 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9239__0.call(this);
case 1:
return G__9239__1.call(this,x);
case 2:
return G__9239__2.call(this,x,y);
case 3:
return G__9239__3.call(this,x,y,z);
default:
return G__9239__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9239.cljs$lang$maxFixedArity = 3;
G__9239.cljs$lang$applyTo = G__9239__4.cljs$lang$applyTo;
return G__9239;
})()
});
var juxt__4 = (function() { 
var G__9242__delegate = function (f,g,h,fs){
var fs__9232 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9243 = null;
var G__9243__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9213_SHARP_,p2__9214_SHARP_){
return cljs.core.conj.call(null,p1__9213_SHARP_,p2__9214_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9232);
});
var G__9243__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9215_SHARP_,p2__9216_SHARP_){
return cljs.core.conj.call(null,p1__9215_SHARP_,p2__9216_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9232);
});
var G__9243__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9217_SHARP_,p2__9218_SHARP_){
return cljs.core.conj.call(null,p1__9217_SHARP_,p2__9218_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9232);
});
var G__9243__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9219_SHARP_,p2__9220_SHARP_){
return cljs.core.conj.call(null,p1__9219_SHARP_,p2__9220_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9232);
});
var G__9243__4 = (function() { 
var G__9244__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9221_SHARP_,p2__9222_SHARP_){
return cljs.core.conj.call(null,p1__9221_SHARP_,cljs.core.apply.call(null,p2__9222_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9232);
};
var G__9244 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9244__delegate.call(this, x, y, z, args);
};
G__9244.cljs$lang$maxFixedArity = 3;
G__9244.cljs$lang$applyTo = (function (arglist__9245){
var x = cljs.core.first(arglist__9245);
var y = cljs.core.first(cljs.core.next(arglist__9245));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9245)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9245)));
return G__9244__delegate(x, y, z, args);
});
G__9244.cljs$lang$arity$variadic = G__9244__delegate;
return G__9244;
})()
;
G__9243 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9243__0.call(this);
case 1:
return G__9243__1.call(this,x);
case 2:
return G__9243__2.call(this,x,y);
case 3:
return G__9243__3.call(this,x,y,z);
default:
return G__9243__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9243.cljs$lang$maxFixedArity = 3;
G__9243.cljs$lang$applyTo = G__9243__4.cljs$lang$applyTo;
return G__9243;
})()
};
var G__9242 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9242__delegate.call(this, f, g, h, fs);
};
G__9242.cljs$lang$maxFixedArity = 3;
G__9242.cljs$lang$applyTo = (function (arglist__9246){
var f = cljs.core.first(arglist__9246);
var g = cljs.core.first(cljs.core.next(arglist__9246));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9246)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9246)));
return G__9242__delegate(f, g, h, fs);
});
G__9242.cljs$lang$arity$variadic = G__9242__delegate;
return G__9242;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__9249 = cljs.core.next.call(null,coll);
coll = G__9249;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9248 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9248)
{return (n > 0);
} else
{return and__3822__auto____9248;
}
})()))
{{
var G__9250 = (n - 1);
var G__9251 = cljs.core.next.call(null,coll);
n = G__9250;
coll = G__9251;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9253 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9253),s))
{if((cljs.core.count.call(null,matches__9253) === 1))
{return cljs.core.first.call(null,matches__9253);
} else
{return cljs.core.vec.call(null,matches__9253);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9255 = re.exec(s);
if((matches__9255 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9255) === 1))
{return cljs.core.first.call(null,matches__9255);
} else
{return cljs.core.vec.call(null,matches__9255);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9260 = cljs.core.re_find.call(null,re,s);
var match_idx__9261 = s.search(re);
var match_str__9262 = ((cljs.core.coll_QMARK_.call(null,match_data__9260))?cljs.core.first.call(null,match_data__9260):match_data__9260);
var post_match__9263 = cljs.core.subs.call(null,s,(match_idx__9261 + cljs.core.count.call(null,match_str__9262)));
if(cljs.core.truth_(match_data__9260))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9260,re_seq.call(null,re,post_match__9263));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9270__9271 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9272 = cljs.core.nth.call(null,vec__9270__9271,0,null);
var flags__9273 = cljs.core.nth.call(null,vec__9270__9271,1,null);
var pattern__9274 = cljs.core.nth.call(null,vec__9270__9271,2,null);
return (new RegExp(pattern__9274,flags__9273));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9264_SHARP_){
return print_one.call(null,p1__9264_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9284 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9284))
{var and__3822__auto____9288 = (function (){var G__9285__9286 = obj;
if(G__9285__9286)
{if((function (){var or__3824__auto____9287 = (G__9285__9286.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9287)
{return or__3824__auto____9287;
} else
{return G__9285__9286.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9285__9286.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9285__9286);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9285__9286);
}
})();
if(cljs.core.truth_(and__3822__auto____9288))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9288;
}
} else
{return and__3822__auto____9284;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9289 = !((obj == null));
if(and__3822__auto____9289)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9289;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9290__9291 = obj;
if(G__9290__9291)
{if((function (){var or__3824__auto____9292 = (G__9290__9291.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9292)
{return or__3824__auto____9292;
} else
{return G__9290__9291.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9290__9291.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9290__9291);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9290__9291);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9307 = cljs.core.first.call(null,objs);
var sb__9308 = (new goog.string.StringBuffer());
var G__9309__9310 = cljs.core.seq.call(null,objs);
if(G__9309__9310)
{var obj__9311 = cljs.core.first.call(null,G__9309__9310);
var G__9309__9312 = G__9309__9310;
while(true){
if((obj__9311 === first_obj__9307))
{} else
{sb__9308.append(" ");
}
var G__9313__9314 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9311,opts));
if(G__9313__9314)
{var string__9315 = cljs.core.first.call(null,G__9313__9314);
var G__9313__9316 = G__9313__9314;
while(true){
sb__9308.append(string__9315);
var temp__3974__auto____9317 = cljs.core.next.call(null,G__9313__9316);
if(temp__3974__auto____9317)
{var G__9313__9318 = temp__3974__auto____9317;
{
var G__9321 = cljs.core.first.call(null,G__9313__9318);
var G__9322 = G__9313__9318;
string__9315 = G__9321;
G__9313__9316 = G__9322;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9319 = cljs.core.next.call(null,G__9309__9312);
if(temp__3974__auto____9319)
{var G__9309__9320 = temp__3974__auto____9319;
{
var G__9323 = cljs.core.first.call(null,G__9309__9320);
var G__9324 = G__9309__9320;
obj__9311 = G__9323;
G__9309__9312 = G__9324;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9308;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9326 = cljs.core.pr_sb.call(null,objs,opts);
sb__9326.append("\n");
return [cljs.core.str(sb__9326)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9340 = cljs.core.first.call(null,objs);
var G__9341__9342 = cljs.core.seq.call(null,objs);
if(G__9341__9342)
{var obj__9343 = cljs.core.first.call(null,G__9341__9342);
var G__9341__9344 = G__9341__9342;
while(true){
if((obj__9343 === first_obj__9340))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9345__9346 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9343,opts));
if(G__9345__9346)
{var string__9347 = cljs.core.first.call(null,G__9345__9346);
var G__9345__9348 = G__9345__9346;
while(true){
cljs.core.string_print.call(null,string__9347);
var temp__3974__auto____9349 = cljs.core.next.call(null,G__9345__9348);
if(temp__3974__auto____9349)
{var G__9345__9350 = temp__3974__auto____9349;
{
var G__9353 = cljs.core.first.call(null,G__9345__9350);
var G__9354 = G__9345__9350;
string__9347 = G__9353;
G__9345__9348 = G__9354;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9351 = cljs.core.next.call(null,G__9341__9344);
if(temp__3974__auto____9351)
{var G__9341__9352 = temp__3974__auto____9351;
{
var G__9355 = cljs.core.first.call(null,G__9341__9352);
var G__9356 = G__9341__9352;
obj__9343 = G__9355;
G__9341__9344 = G__9356;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9357){
var objs = cljs.core.seq(arglist__9357);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9358){
var objs = cljs.core.seq(arglist__9358);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9359){
var objs = cljs.core.seq(arglist__9359);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9360){
var objs = cljs.core.seq(arglist__9360);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9361){
var objs = cljs.core.seq(arglist__9361);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9362){
var objs = cljs.core.seq(arglist__9362);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9363){
var objs = cljs.core.seq(arglist__9363);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9364){
var objs = cljs.core.seq(arglist__9364);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9365 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9365,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9366 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9366,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9367 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9367,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____9368 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9368))
{var nspc__9369 = temp__3974__auto____9368;
return [cljs.core.str(nspc__9369),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____9370 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9370))
{var nspc__9371 = temp__3974__auto____9370;
return [cljs.core.str(nspc__9371),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9372 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9372,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__9374 = (function (n,len){
var ns__9373 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__9373) < len))
{{
var G__9376 = [cljs.core.str("0"),cljs.core.str(ns__9373)].join('');
ns__9373 = G__9376;
continue;
}
} else
{return ns__9373;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__9374.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__9374.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__9374.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__9374.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__9374.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__9374.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9375 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9375,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9377 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9378 = this;
var G__9379__9380 = cljs.core.seq.call(null,this__9378.watches);
if(G__9379__9380)
{var G__9382__9384 = cljs.core.first.call(null,G__9379__9380);
var vec__9383__9385 = G__9382__9384;
var key__9386 = cljs.core.nth.call(null,vec__9383__9385,0,null);
var f__9387 = cljs.core.nth.call(null,vec__9383__9385,1,null);
var G__9379__9388 = G__9379__9380;
var G__9382__9389 = G__9382__9384;
var G__9379__9390 = G__9379__9388;
while(true){
var vec__9391__9392 = G__9382__9389;
var key__9393 = cljs.core.nth.call(null,vec__9391__9392,0,null);
var f__9394 = cljs.core.nth.call(null,vec__9391__9392,1,null);
var G__9379__9395 = G__9379__9390;
f__9394.call(null,key__9393,this$,oldval,newval);
var temp__3974__auto____9396 = cljs.core.next.call(null,G__9379__9395);
if(temp__3974__auto____9396)
{var G__9379__9397 = temp__3974__auto____9396;
{
var G__9404 = cljs.core.first.call(null,G__9379__9397);
var G__9405 = G__9379__9397;
G__9382__9389 = G__9404;
G__9379__9390 = G__9405;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__9398 = this;
return this$.watches = cljs.core.assoc.call(null,this__9398.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9399 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9399.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9400 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__9400.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9401 = this;
return this__9401.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9402 = this;
return this__9402.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9403 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9417__delegate = function (x,p__9406){
var map__9412__9413 = p__9406;
var map__9412__9414 = ((cljs.core.seq_QMARK_.call(null,map__9412__9413))?cljs.core.apply.call(null,cljs.core.hash_map,map__9412__9413):map__9412__9413);
var validator__9415 = cljs.core._lookup.call(null,map__9412__9414,"\uFDD0'validator",null);
var meta__9416 = cljs.core._lookup.call(null,map__9412__9414,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9416,validator__9415,null));
};
var G__9417 = function (x,var_args){
var p__9406 = null;
if (goog.isDef(var_args)) {
  p__9406 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9417__delegate.call(this, x, p__9406);
};
G__9417.cljs$lang$maxFixedArity = 1;
G__9417.cljs$lang$applyTo = (function (arglist__9418){
var x = cljs.core.first(arglist__9418);
var p__9406 = cljs.core.rest(arglist__9418);
return G__9417__delegate(x, p__9406);
});
G__9417.cljs$lang$arity$variadic = G__9417__delegate;
return G__9417;
})()
;
atom = function(x,var_args){
var p__9406 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____9422 = a.validator;
if(cljs.core.truth_(temp__3974__auto____9422))
{var validate__9423 = temp__3974__auto____9422;
if(cljs.core.truth_(validate__9423.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__9424 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9424,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__9425__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9425 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9425__delegate.call(this, a, f, x, y, z, more);
};
G__9425.cljs$lang$maxFixedArity = 5;
G__9425.cljs$lang$applyTo = (function (arglist__9426){
var a = cljs.core.first(arglist__9426);
var f = cljs.core.first(cljs.core.next(arglist__9426));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9426)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9426))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9426)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9426)))));
return G__9425__delegate(a, f, x, y, z, more);
});
G__9425.cljs$lang$arity$variadic = G__9425__delegate;
return G__9425;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9427){
var iref = cljs.core.first(arglist__9427);
var f = cljs.core.first(cljs.core.next(arglist__9427));
var args = cljs.core.rest(cljs.core.next(arglist__9427));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9428 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__9428.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9429 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__9429.state,(function (p__9430){
var curr_state__9431 = p__9430;
var curr_state__9432 = ((cljs.core.seq_QMARK_.call(null,curr_state__9431))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9431):curr_state__9431);
var done__9433 = cljs.core._lookup.call(null,curr_state__9432,"\uFDD0'done",null);
if(cljs.core.truth_(done__9433))
{return curr_state__9432;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9429.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__9454__9455 = options;
var map__9454__9456 = ((cljs.core.seq_QMARK_.call(null,map__9454__9455))?cljs.core.apply.call(null,cljs.core.hash_map,map__9454__9455):map__9454__9455);
var keywordize_keys__9457 = cljs.core._lookup.call(null,map__9454__9456,"\uFDD0'keywordize-keys",null);
var keyfn__9458 = (cljs.core.truth_(keywordize_keys__9457)?cljs.core.keyword:cljs.core.str);
var f__9473 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2331__auto____9472 = (function iter__9466(s__9467){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9467__9470 = s__9467;
while(true){
if(cljs.core.seq.call(null,s__9467__9470))
{var k__9471 = cljs.core.first.call(null,s__9467__9470);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9458.call(null,k__9471),thisfn.call(null,(x[k__9471]))], true),iter__9466.call(null,cljs.core.rest.call(null,s__9467__9470)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2331__auto____9472.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__9473.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9474){
var x = cljs.core.first(arglist__9474);
var options = cljs.core.rest(arglist__9474);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__9479 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__9483__delegate = function (args){
var temp__3971__auto____9480 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__9479),args,null);
if(cljs.core.truth_(temp__3971__auto____9480))
{var v__9481 = temp__3971__auto____9480;
return v__9481;
} else
{var ret__9482 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9479,cljs.core.assoc,args,ret__9482);
return ret__9482;
}
};
var G__9483 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9483__delegate.call(this, args);
};
G__9483.cljs$lang$maxFixedArity = 0;
G__9483.cljs$lang$applyTo = (function (arglist__9484){
var args = cljs.core.seq(arglist__9484);;
return G__9483__delegate(args);
});
G__9483.cljs$lang$arity$variadic = G__9483__delegate;
return G__9483;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__9486 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9486))
{{
var G__9487 = ret__9486;
f = G__9487;
continue;
}
} else
{return ret__9486;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9488__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9488 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9488__delegate.call(this, f, args);
};
G__9488.cljs$lang$maxFixedArity = 1;
G__9488.cljs$lang$applyTo = (function (arglist__9489){
var f = cljs.core.first(arglist__9489);
var args = cljs.core.rest(arglist__9489);
return G__9488__delegate(f, args);
});
G__9488.cljs$lang$arity$variadic = G__9488__delegate;
return G__9488;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__9491 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9491,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__9491,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____9500 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____9500)
{return or__3824__auto____9500;
} else
{var or__3824__auto____9501 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____9501)
{return or__3824__auto____9501;
} else
{var and__3822__auto____9502 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____9502)
{var and__3822__auto____9503 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____9503)
{var and__3822__auto____9504 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____9504)
{var ret__9505 = true;
var i__9506 = 0;
while(true){
if((function (){var or__3824__auto____9507 = cljs.core.not.call(null,ret__9505);
if(or__3824__auto____9507)
{return or__3824__auto____9507;
} else
{return (i__9506 === cljs.core.count.call(null,parent));
}
})())
{return ret__9505;
} else
{{
var G__9508 = isa_QMARK_.call(null,h,child.call(null,i__9506),parent.call(null,i__9506));
var G__9509 = (i__9506 + 1);
ret__9505 = G__9508;
i__9506 = G__9509;
continue;
}
}
break;
}
} else
{return and__3822__auto____9504;
}
} else
{return and__3822__auto____9503;
}
} else
{return and__3822__auto____9502;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6678))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6682))))].join('')));
}
var tp__9518 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__9519 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__9520 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__9521 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____9522 = ((cljs.core.contains_QMARK_.call(null,tp__9518.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9520.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9520.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__9518,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9521.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9519,parent,ta__9520),"\uFDD0'descendants":tf__9521.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9520,tag,td__9519)});
})());
if(cljs.core.truth_(or__3824__auto____9522))
{return or__3824__auto____9522;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__9527 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__9528 = (cljs.core.truth_(parentMap__9527.call(null,tag))?cljs.core.disj.call(null,parentMap__9527.call(null,tag),parent):cljs.core.set([]));
var newParents__9529 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9528))?cljs.core.assoc.call(null,parentMap__9527,tag,childsParents__9528):cljs.core.dissoc.call(null,parentMap__9527,tag));
var deriv_seq__9530 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9510_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9510_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9510_SHARP_),cljs.core.second.call(null,p1__9510_SHARP_)));
}),cljs.core.seq.call(null,newParents__9529)));
if(cljs.core.contains_QMARK_.call(null,parentMap__9527.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9511_SHARP_,p2__9512_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9511_SHARP_,p2__9512_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9530));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__9538 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____9540 = (cljs.core.truth_((function (){var and__3822__auto____9539 = xprefs__9538;
if(cljs.core.truth_(and__3822__auto____9539))
{return xprefs__9538.call(null,y);
} else
{return and__3822__auto____9539;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____9540))
{return or__3824__auto____9540;
} else
{var or__3824__auto____9542 = (function (){var ps__9541 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__9541) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9541),prefer_table)))
{} else
{}
{
var G__9545 = cljs.core.rest.call(null,ps__9541);
ps__9541 = G__9545;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9542))
{return or__3824__auto____9542;
} else
{var or__3824__auto____9544 = (function (){var ps__9543 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__9543) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9543),y,prefer_table)))
{} else
{}
{
var G__9546 = cljs.core.rest.call(null,ps__9543);
ps__9543 = G__9546;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9544))
{return or__3824__auto____9544;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____9548 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____9548))
{return or__3824__auto____9548;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9566 = cljs.core.reduce.call(null,(function (be,p__9558){
var vec__9559__9560 = p__9558;
var k__9561 = cljs.core.nth.call(null,vec__9559__9560,0,null);
var ___9562 = cljs.core.nth.call(null,vec__9559__9560,1,null);
var e__9563 = vec__9559__9560;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9561))
{var be2__9565 = (cljs.core.truth_((function (){var or__3824__auto____9564 = (be == null);
if(or__3824__auto____9564)
{return or__3824__auto____9564;
} else
{return cljs.core.dominates.call(null,k__9561,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9563:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9565),k__9561,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9561),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__9565)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9565;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__9566))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9566));
return cljs.core.second.call(null,best_entry__9566);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____9570 = mf;
if(and__3822__auto____9570)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____9570;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____9571 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____9571)
{return or__3824__auto____9571;
} else
{var or__3824__auto____9572 = (cljs.core._reset["_"]);
if(or__3824__auto____9572)
{return or__3824__auto____9572;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____9576 = mf;
if(and__3822__auto____9576)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____9576;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____9577 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____9577)
{return or__3824__auto____9577;
} else
{var or__3824__auto____9578 = (cljs.core._add_method["_"]);
if(or__3824__auto____9578)
{return or__3824__auto____9578;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____9582 = mf;
if(and__3822__auto____9582)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____9582;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9583 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____9583)
{return or__3824__auto____9583;
} else
{var or__3824__auto____9584 = (cljs.core._remove_method["_"]);
if(or__3824__auto____9584)
{return or__3824__auto____9584;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____9588 = mf;
if(and__3822__auto____9588)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____9588;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____9589 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____9589)
{return or__3824__auto____9589;
} else
{var or__3824__auto____9590 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____9590)
{return or__3824__auto____9590;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____9594 = mf;
if(and__3822__auto____9594)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____9594;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9595 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____9595)
{return or__3824__auto____9595;
} else
{var or__3824__auto____9596 = (cljs.core._get_method["_"]);
if(or__3824__auto____9596)
{return or__3824__auto____9596;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____9600 = mf;
if(and__3822__auto____9600)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____9600;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____9601 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____9601)
{return or__3824__auto____9601;
} else
{var or__3824__auto____9602 = (cljs.core._methods["_"]);
if(or__3824__auto____9602)
{return or__3824__auto____9602;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____9606 = mf;
if(and__3822__auto____9606)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____9606;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____9607 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____9607)
{return or__3824__auto____9607;
} else
{var or__3824__auto____9608 = (cljs.core._prefers["_"]);
if(or__3824__auto____9608)
{return or__3824__auto____9608;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____9612 = mf;
if(and__3822__auto____9612)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____9612;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____9613 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____9613)
{return or__3824__auto____9613;
} else
{var or__3824__auto____9614 = (cljs.core._dispatch["_"]);
if(or__3824__auto____9614)
{return or__3824__auto____9614;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9617 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9618 = cljs.core._get_method.call(null,mf,dispatch_val__9617);
if(cljs.core.truth_(target_fn__9618))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__9617)].join('')));
}
return cljs.core.apply.call(null,target_fn__9618,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9619 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__9620 = this;
cljs.core.swap_BANG_.call(null,this__9620.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9620.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9620.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9620.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__9621 = this;
cljs.core.swap_BANG_.call(null,this__9621.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9621.method_cache,this__9621.method_table,this__9621.cached_hierarchy,this__9621.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__9622 = this;
cljs.core.swap_BANG_.call(null,this__9622.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9622.method_cache,this__9622.method_table,this__9622.cached_hierarchy,this__9622.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__9623 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9623.cached_hierarchy),cljs.core.deref.call(null,this__9623.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__9623.method_cache,this__9623.method_table,this__9623.cached_hierarchy,this__9623.hierarchy);
}
var temp__3971__auto____9624 = cljs.core.deref.call(null,this__9623.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____9624))
{var target_fn__9625 = temp__3971__auto____9624;
return target_fn__9625;
} else
{var temp__3971__auto____9626 = cljs.core.find_and_cache_best_method.call(null,this__9623.name,dispatch_val,this__9623.hierarchy,this__9623.method_table,this__9623.prefer_table,this__9623.method_cache,this__9623.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____9626))
{var target_fn__9627 = temp__3971__auto____9626;
return target_fn__9627;
} else
{return cljs.core.deref.call(null,this__9623.method_table).call(null,this__9623.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9628 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9628.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__9628.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__9628.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9628.method_cache,this__9628.method_table,this__9628.cached_hierarchy,this__9628.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__9629 = this;
return cljs.core.deref.call(null,this__9629.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__9630 = this;
return cljs.core.deref.call(null,this__9630.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__9631 = this;
return cljs.core.do_dispatch.call(null,mf,this__9631.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9633__delegate = function (_,args){
var self__9632 = this;
return cljs.core._dispatch.call(null,self__9632,args);
};
var G__9633 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9633__delegate.call(this, _, args);
};
G__9633.cljs$lang$maxFixedArity = 1;
G__9633.cljs$lang$applyTo = (function (arglist__9634){
var _ = cljs.core.first(arglist__9634);
var args = cljs.core.rest(arglist__9634);
return G__9633__delegate(_, args);
});
G__9633.cljs$lang$arity$variadic = G__9633__delegate;
return G__9633;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__9635 = this;
return cljs.core._dispatch.call(null,self__9635,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2174__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9636 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_9638,_){
var this__9637 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__9637.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__9639 = this;
return (this__9639.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__9640 = this;
var this__9641 = this;
return cljs.core.pr_str.call(null,this__9641);
});
cljs.core.UUID;
