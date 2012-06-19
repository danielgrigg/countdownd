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
var G__16563__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__16563 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16563__delegate.call(this, array, i, idxs);
};
G__16563.cljs$lang$maxFixedArity = 2;
G__16563.cljs$lang$applyTo = (function (arglist__16564){
var array = cljs.core.first(arglist__16564);
var i = cljs.core.first(cljs.core.next(arglist__16564));
var idxs = cljs.core.rest(cljs.core.next(arglist__16564));
return G__16563__delegate(array, i, idxs);
});
G__16563.cljs$lang$arity$variadic = G__16563__delegate;
return G__16563;
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
if((function (){var and__3822__auto____16628 = this$;
if(and__3822__auto____16628)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____16628;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____16629 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16629)
{return or__3824__auto____16629;
} else
{var or__3824__auto____16630 = (cljs.core._invoke["_"]);
if(or__3824__auto____16630)
{return or__3824__auto____16630;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____16631 = this$;
if(and__3822__auto____16631)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____16631;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____16632 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16632)
{return or__3824__auto____16632;
} else
{var or__3824__auto____16633 = (cljs.core._invoke["_"]);
if(or__3824__auto____16633)
{return or__3824__auto____16633;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____16634 = this$;
if(and__3822__auto____16634)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____16634;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____16635 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16635)
{return or__3824__auto____16635;
} else
{var or__3824__auto____16636 = (cljs.core._invoke["_"]);
if(or__3824__auto____16636)
{return or__3824__auto____16636;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____16637 = this$;
if(and__3822__auto____16637)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____16637;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____16638 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16638)
{return or__3824__auto____16638;
} else
{var or__3824__auto____16639 = (cljs.core._invoke["_"]);
if(or__3824__auto____16639)
{return or__3824__auto____16639;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____16640 = this$;
if(and__3822__auto____16640)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____16640;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____16641 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16641)
{return or__3824__auto____16641;
} else
{var or__3824__auto____16642 = (cljs.core._invoke["_"]);
if(or__3824__auto____16642)
{return or__3824__auto____16642;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____16643 = this$;
if(and__3822__auto____16643)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____16643;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____16644 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16644)
{return or__3824__auto____16644;
} else
{var or__3824__auto____16645 = (cljs.core._invoke["_"]);
if(or__3824__auto____16645)
{return or__3824__auto____16645;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____16646 = this$;
if(and__3822__auto____16646)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____16646;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____16647 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16647)
{return or__3824__auto____16647;
} else
{var or__3824__auto____16648 = (cljs.core._invoke["_"]);
if(or__3824__auto____16648)
{return or__3824__auto____16648;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____16649 = this$;
if(and__3822__auto____16649)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____16649;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____16650 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16650)
{return or__3824__auto____16650;
} else
{var or__3824__auto____16651 = (cljs.core._invoke["_"]);
if(or__3824__auto____16651)
{return or__3824__auto____16651;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____16652 = this$;
if(and__3822__auto____16652)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____16652;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____16653 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16653)
{return or__3824__auto____16653;
} else
{var or__3824__auto____16654 = (cljs.core._invoke["_"]);
if(or__3824__auto____16654)
{return or__3824__auto____16654;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____16655 = this$;
if(and__3822__auto____16655)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____16655;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____16656 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16656)
{return or__3824__auto____16656;
} else
{var or__3824__auto____16657 = (cljs.core._invoke["_"]);
if(or__3824__auto____16657)
{return or__3824__auto____16657;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____16658 = this$;
if(and__3822__auto____16658)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____16658;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____16659 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16659)
{return or__3824__auto____16659;
} else
{var or__3824__auto____16660 = (cljs.core._invoke["_"]);
if(or__3824__auto____16660)
{return or__3824__auto____16660;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____16661 = this$;
if(and__3822__auto____16661)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____16661;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____16662 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16662)
{return or__3824__auto____16662;
} else
{var or__3824__auto____16663 = (cljs.core._invoke["_"]);
if(or__3824__auto____16663)
{return or__3824__auto____16663;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____16664 = this$;
if(and__3822__auto____16664)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____16664;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____16665 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16665)
{return or__3824__auto____16665;
} else
{var or__3824__auto____16666 = (cljs.core._invoke["_"]);
if(or__3824__auto____16666)
{return or__3824__auto____16666;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____16667 = this$;
if(and__3822__auto____16667)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____16667;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____16668 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16668)
{return or__3824__auto____16668;
} else
{var or__3824__auto____16669 = (cljs.core._invoke["_"]);
if(or__3824__auto____16669)
{return or__3824__auto____16669;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____16670 = this$;
if(and__3822__auto____16670)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____16670;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____16671 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16671)
{return or__3824__auto____16671;
} else
{var or__3824__auto____16672 = (cljs.core._invoke["_"]);
if(or__3824__auto____16672)
{return or__3824__auto____16672;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____16673 = this$;
if(and__3822__auto____16673)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____16673;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____16674 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16674)
{return or__3824__auto____16674;
} else
{var or__3824__auto____16675 = (cljs.core._invoke["_"]);
if(or__3824__auto____16675)
{return or__3824__auto____16675;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____16676 = this$;
if(and__3822__auto____16676)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____16676;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____16677 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16677)
{return or__3824__auto____16677;
} else
{var or__3824__auto____16678 = (cljs.core._invoke["_"]);
if(or__3824__auto____16678)
{return or__3824__auto____16678;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____16679 = this$;
if(and__3822__auto____16679)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____16679;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____16680 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16680)
{return or__3824__auto____16680;
} else
{var or__3824__auto____16681 = (cljs.core._invoke["_"]);
if(or__3824__auto____16681)
{return or__3824__auto____16681;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____16682 = this$;
if(and__3822__auto____16682)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____16682;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____16683 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16683)
{return or__3824__auto____16683;
} else
{var or__3824__auto____16684 = (cljs.core._invoke["_"]);
if(or__3824__auto____16684)
{return or__3824__auto____16684;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____16685 = this$;
if(and__3822__auto____16685)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____16685;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____16686 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16686)
{return or__3824__auto____16686;
} else
{var or__3824__auto____16687 = (cljs.core._invoke["_"]);
if(or__3824__auto____16687)
{return or__3824__auto____16687;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____16688 = this$;
if(and__3822__auto____16688)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____16688;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____16689 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____16689)
{return or__3824__auto____16689;
} else
{var or__3824__auto____16690 = (cljs.core._invoke["_"]);
if(or__3824__auto____16690)
{return or__3824__auto____16690;
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
if((function (){var and__3822__auto____16694 = coll;
if(and__3822__auto____16694)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____16694;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____16695 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____16695)
{return or__3824__auto____16695;
} else
{var or__3824__auto____16696 = (cljs.core._count["_"]);
if(or__3824__auto____16696)
{return or__3824__auto____16696;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____16700 = coll;
if(and__3822__auto____16700)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____16700;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____16701 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____16701)
{return or__3824__auto____16701;
} else
{var or__3824__auto____16702 = (cljs.core._empty["_"]);
if(or__3824__auto____16702)
{return or__3824__auto____16702;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____16706 = coll;
if(and__3822__auto____16706)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____16706;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____16707 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____16707)
{return or__3824__auto____16707;
} else
{var or__3824__auto____16708 = (cljs.core._conj["_"]);
if(or__3824__auto____16708)
{return or__3824__auto____16708;
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
if((function (){var and__3822__auto____16715 = coll;
if(and__3822__auto____16715)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____16715;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____16716 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____16716)
{return or__3824__auto____16716;
} else
{var or__3824__auto____16717 = (cljs.core._nth["_"]);
if(or__3824__auto____16717)
{return or__3824__auto____16717;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____16718 = coll;
if(and__3822__auto____16718)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____16718;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____16719 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____16719)
{return or__3824__auto____16719;
} else
{var or__3824__auto____16720 = (cljs.core._nth["_"]);
if(or__3824__auto____16720)
{return or__3824__auto____16720;
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
if((function (){var and__3822__auto____16724 = coll;
if(and__3822__auto____16724)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____16724;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____16725 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____16725)
{return or__3824__auto____16725;
} else
{var or__3824__auto____16726 = (cljs.core._first["_"]);
if(or__3824__auto____16726)
{return or__3824__auto____16726;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____16730 = coll;
if(and__3822__auto____16730)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____16730;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____16731 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____16731)
{return or__3824__auto____16731;
} else
{var or__3824__auto____16732 = (cljs.core._rest["_"]);
if(or__3824__auto____16732)
{return or__3824__auto____16732;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____16736 = coll;
if(and__3822__auto____16736)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____16736;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____16737 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____16737)
{return or__3824__auto____16737;
} else
{var or__3824__auto____16738 = (cljs.core._next["_"]);
if(or__3824__auto____16738)
{return or__3824__auto____16738;
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
if((function (){var and__3822__auto____16745 = o;
if(and__3822__auto____16745)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____16745;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____16746 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____16746)
{return or__3824__auto____16746;
} else
{var or__3824__auto____16747 = (cljs.core._lookup["_"]);
if(or__3824__auto____16747)
{return or__3824__auto____16747;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____16748 = o;
if(and__3822__auto____16748)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____16748;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____16749 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____16749)
{return or__3824__auto____16749;
} else
{var or__3824__auto____16750 = (cljs.core._lookup["_"]);
if(or__3824__auto____16750)
{return or__3824__auto____16750;
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
if((function (){var and__3822__auto____16754 = coll;
if(and__3822__auto____16754)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____16754;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____16755 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____16755)
{return or__3824__auto____16755;
} else
{var or__3824__auto____16756 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____16756)
{return or__3824__auto____16756;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____16760 = coll;
if(and__3822__auto____16760)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____16760;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____16761 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____16761)
{return or__3824__auto____16761;
} else
{var or__3824__auto____16762 = (cljs.core._assoc["_"]);
if(or__3824__auto____16762)
{return or__3824__auto____16762;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____16766 = coll;
if(and__3822__auto____16766)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____16766;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____16767 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____16767)
{return or__3824__auto____16767;
} else
{var or__3824__auto____16768 = (cljs.core._dissoc["_"]);
if(or__3824__auto____16768)
{return or__3824__auto____16768;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____16772 = coll;
if(and__3822__auto____16772)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____16772;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____16773 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____16773)
{return or__3824__auto____16773;
} else
{var or__3824__auto____16774 = (cljs.core._key["_"]);
if(or__3824__auto____16774)
{return or__3824__auto____16774;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____16778 = coll;
if(and__3822__auto____16778)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____16778;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____16779 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____16779)
{return or__3824__auto____16779;
} else
{var or__3824__auto____16780 = (cljs.core._val["_"]);
if(or__3824__auto____16780)
{return or__3824__auto____16780;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____16784 = coll;
if(and__3822__auto____16784)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____16784;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____16785 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____16785)
{return or__3824__auto____16785;
} else
{var or__3824__auto____16786 = (cljs.core._disjoin["_"]);
if(or__3824__auto____16786)
{return or__3824__auto____16786;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____16790 = coll;
if(and__3822__auto____16790)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____16790;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____16791 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____16791)
{return or__3824__auto____16791;
} else
{var or__3824__auto____16792 = (cljs.core._peek["_"]);
if(or__3824__auto____16792)
{return or__3824__auto____16792;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____16796 = coll;
if(and__3822__auto____16796)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____16796;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____16797 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____16797)
{return or__3824__auto____16797;
} else
{var or__3824__auto____16798 = (cljs.core._pop["_"]);
if(or__3824__auto____16798)
{return or__3824__auto____16798;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____16802 = coll;
if(and__3822__auto____16802)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____16802;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____16803 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____16803)
{return or__3824__auto____16803;
} else
{var or__3824__auto____16804 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____16804)
{return or__3824__auto____16804;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____16808 = o;
if(and__3822__auto____16808)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____16808;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____16809 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____16809)
{return or__3824__auto____16809;
} else
{var or__3824__auto____16810 = (cljs.core._deref["_"]);
if(or__3824__auto____16810)
{return or__3824__auto____16810;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____16814 = o;
if(and__3822__auto____16814)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____16814;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____16815 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____16815)
{return or__3824__auto____16815;
} else
{var or__3824__auto____16816 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____16816)
{return or__3824__auto____16816;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____16820 = o;
if(and__3822__auto____16820)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____16820;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____16821 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____16821)
{return or__3824__auto____16821;
} else
{var or__3824__auto____16822 = (cljs.core._meta["_"]);
if(or__3824__auto____16822)
{return or__3824__auto____16822;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____16826 = o;
if(and__3822__auto____16826)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____16826;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____16827 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____16827)
{return or__3824__auto____16827;
} else
{var or__3824__auto____16828 = (cljs.core._with_meta["_"]);
if(or__3824__auto____16828)
{return or__3824__auto____16828;
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
if((function (){var and__3822__auto____16835 = coll;
if(and__3822__auto____16835)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____16835;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____16836 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____16836)
{return or__3824__auto____16836;
} else
{var or__3824__auto____16837 = (cljs.core._reduce["_"]);
if(or__3824__auto____16837)
{return or__3824__auto____16837;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____16838 = coll;
if(and__3822__auto____16838)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____16838;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____16839 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____16839)
{return or__3824__auto____16839;
} else
{var or__3824__auto____16840 = (cljs.core._reduce["_"]);
if(or__3824__auto____16840)
{return or__3824__auto____16840;
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
if((function (){var and__3822__auto____16844 = coll;
if(and__3822__auto____16844)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____16844;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____16845 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____16845)
{return or__3824__auto____16845;
} else
{var or__3824__auto____16846 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____16846)
{return or__3824__auto____16846;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____16850 = o;
if(and__3822__auto____16850)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____16850;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____16851 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____16851)
{return or__3824__auto____16851;
} else
{var or__3824__auto____16852 = (cljs.core._equiv["_"]);
if(or__3824__auto____16852)
{return or__3824__auto____16852;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____16856 = o;
if(and__3822__auto____16856)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____16856;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____16857 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____16857)
{return or__3824__auto____16857;
} else
{var or__3824__auto____16858 = (cljs.core._hash["_"]);
if(or__3824__auto____16858)
{return or__3824__auto____16858;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____16862 = o;
if(and__3822__auto____16862)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____16862;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____16863 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____16863)
{return or__3824__auto____16863;
} else
{var or__3824__auto____16864 = (cljs.core._seq["_"]);
if(or__3824__auto____16864)
{return or__3824__auto____16864;
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
if((function (){var and__3822__auto____16868 = coll;
if(and__3822__auto____16868)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____16868;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____16869 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____16869)
{return or__3824__auto____16869;
} else
{var or__3824__auto____16870 = (cljs.core._rseq["_"]);
if(or__3824__auto____16870)
{return or__3824__auto____16870;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____16874 = coll;
if(and__3822__auto____16874)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____16874;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____16875 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____16875)
{return or__3824__auto____16875;
} else
{var or__3824__auto____16876 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____16876)
{return or__3824__auto____16876;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____16880 = coll;
if(and__3822__auto____16880)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____16880;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____16881 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____16881)
{return or__3824__auto____16881;
} else
{var or__3824__auto____16882 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____16882)
{return or__3824__auto____16882;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____16886 = coll;
if(and__3822__auto____16886)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____16886;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____16887 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____16887)
{return or__3824__auto____16887;
} else
{var or__3824__auto____16888 = (cljs.core._entry_key["_"]);
if(or__3824__auto____16888)
{return or__3824__auto____16888;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____16892 = coll;
if(and__3822__auto____16892)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____16892;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____16893 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____16893)
{return or__3824__auto____16893;
} else
{var or__3824__auto____16894 = (cljs.core._comparator["_"]);
if(or__3824__auto____16894)
{return or__3824__auto____16894;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____16898 = o;
if(and__3822__auto____16898)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____16898;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____16899 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____16899)
{return or__3824__auto____16899;
} else
{var or__3824__auto____16900 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____16900)
{return or__3824__auto____16900;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____16904 = d;
if(and__3822__auto____16904)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____16904;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____16905 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____16905)
{return or__3824__auto____16905;
} else
{var or__3824__auto____16906 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____16906)
{return or__3824__auto____16906;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____16910 = this$;
if(and__3822__auto____16910)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____16910;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____16911 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____16911)
{return or__3824__auto____16911;
} else
{var or__3824__auto____16912 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____16912)
{return or__3824__auto____16912;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____16916 = this$;
if(and__3822__auto____16916)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____16916;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____16917 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____16917)
{return or__3824__auto____16917;
} else
{var or__3824__auto____16918 = (cljs.core._add_watch["_"]);
if(or__3824__auto____16918)
{return or__3824__auto____16918;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____16922 = this$;
if(and__3822__auto____16922)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____16922;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____16923 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____16923)
{return or__3824__auto____16923;
} else
{var or__3824__auto____16924 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____16924)
{return or__3824__auto____16924;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____16928 = coll;
if(and__3822__auto____16928)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____16928;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____16929 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____16929)
{return or__3824__auto____16929;
} else
{var or__3824__auto____16930 = (cljs.core._as_transient["_"]);
if(or__3824__auto____16930)
{return or__3824__auto____16930;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____16934 = tcoll;
if(and__3822__auto____16934)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____16934;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____16935 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____16935)
{return or__3824__auto____16935;
} else
{var or__3824__auto____16936 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____16936)
{return or__3824__auto____16936;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____16940 = tcoll;
if(and__3822__auto____16940)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____16940;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____16941 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____16941)
{return or__3824__auto____16941;
} else
{var or__3824__auto____16942 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____16942)
{return or__3824__auto____16942;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____16946 = tcoll;
if(and__3822__auto____16946)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____16946;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____16947 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____16947)
{return or__3824__auto____16947;
} else
{var or__3824__auto____16948 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____16948)
{return or__3824__auto____16948;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____16952 = tcoll;
if(and__3822__auto____16952)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____16952;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____16953 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____16953)
{return or__3824__auto____16953;
} else
{var or__3824__auto____16954 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____16954)
{return or__3824__auto____16954;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____16958 = tcoll;
if(and__3822__auto____16958)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____16958;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____16959 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____16959)
{return or__3824__auto____16959;
} else
{var or__3824__auto____16960 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____16960)
{return or__3824__auto____16960;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____16964 = tcoll;
if(and__3822__auto____16964)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____16964;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____16965 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____16965)
{return or__3824__auto____16965;
} else
{var or__3824__auto____16966 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____16966)
{return or__3824__auto____16966;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____16970 = tcoll;
if(and__3822__auto____16970)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____16970;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____16971 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____16971)
{return or__3824__auto____16971;
} else
{var or__3824__auto____16972 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____16972)
{return or__3824__auto____16972;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____16976 = x;
if(and__3822__auto____16976)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____16976;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____16977 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____16977)
{return or__3824__auto____16977;
} else
{var or__3824__auto____16978 = (cljs.core._compare["_"]);
if(or__3824__auto____16978)
{return or__3824__auto____16978;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____16982 = coll;
if(and__3822__auto____16982)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____16982;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____16983 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____16983)
{return or__3824__auto____16983;
} else
{var or__3824__auto____16984 = (cljs.core._drop_first["_"]);
if(or__3824__auto____16984)
{return or__3824__auto____16984;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____16988 = coll;
if(and__3822__auto____16988)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____16988;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____16989 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____16989)
{return or__3824__auto____16989;
} else
{var or__3824__auto____16990 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____16990)
{return or__3824__auto____16990;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____16994 = coll;
if(and__3822__auto____16994)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____16994;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____16995 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____16995)
{return or__3824__auto____16995;
} else
{var or__3824__auto____16996 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____16996)
{return or__3824__auto____16996;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____17000 = coll;
if(and__3822__auto____17000)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____17000;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____17001 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____17001)
{return or__3824__auto____17001;
} else
{var or__3824__auto____17002 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____17002)
{return or__3824__auto____17002;
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
var or__3824__auto____17004 = (x === y);
if(or__3824__auto____17004)
{return or__3824__auto____17004;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__17005__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__17006 = y;
var G__17007 = cljs.core.first.call(null,more);
var G__17008 = cljs.core.next.call(null,more);
x = G__17006;
y = G__17007;
more = G__17008;
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
var G__17005 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17005__delegate.call(this, x, y, more);
};
G__17005.cljs$lang$maxFixedArity = 2;
G__17005.cljs$lang$applyTo = (function (arglist__17009){
var x = cljs.core.first(arglist__17009);
var y = cljs.core.first(cljs.core.next(arglist__17009));
var more = cljs.core.rest(cljs.core.next(arglist__17009));
return G__17005__delegate(x, y, more);
});
G__17005.cljs$lang$arity$variadic = G__17005__delegate;
return G__17005;
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
var G__17010 = null;
var G__17010__2 = (function (o,k){
return null;
});
var G__17010__3 = (function (o,k,not_found){
return not_found;
});
G__17010 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__17010__2.call(this,o,k);
case 3:
return G__17010__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17010;
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
var G__17011 = null;
var G__17011__2 = (function (_,f){
return f.call(null);
});
var G__17011__3 = (function (_,f,start){
return start;
});
G__17011 = function(_,f,start){
switch(arguments.length){
case 2:
return G__17011__2.call(this,_,f);
case 3:
return G__17011__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17011;
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
var G__17012 = null;
var G__17012__2 = (function (_,n){
return null;
});
var G__17012__3 = (function (_,n,not_found){
return not_found;
});
G__17012 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__17012__2.call(this,_,n);
case 3:
return G__17012__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17012;
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
var cnt__17025 = cljs.core._count.call(null,cicoll);
if((cnt__17025 === 0))
{return f.call(null);
} else
{var val__17026 = cljs.core._nth.call(null,cicoll,0);
var n__17027 = 1;
while(true){
if((n__17027 < cnt__17025))
{var nval__17028 = f.call(null,val__17026,cljs.core._nth.call(null,cicoll,n__17027));
if(cljs.core.reduced_QMARK_.call(null,nval__17028))
{return cljs.core.deref.call(null,nval__17028);
} else
{{
var G__17037 = nval__17028;
var G__17038 = (n__17027 + 1);
val__17026 = G__17037;
n__17027 = G__17038;
continue;
}
}
} else
{return val__17026;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__17029 = cljs.core._count.call(null,cicoll);
var val__17030 = val;
var n__17031 = 0;
while(true){
if((n__17031 < cnt__17029))
{var nval__17032 = f.call(null,val__17030,cljs.core._nth.call(null,cicoll,n__17031));
if(cljs.core.reduced_QMARK_.call(null,nval__17032))
{return cljs.core.deref.call(null,nval__17032);
} else
{{
var G__17039 = nval__17032;
var G__17040 = (n__17031 + 1);
val__17030 = G__17039;
n__17031 = G__17040;
continue;
}
}
} else
{return val__17030;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__17033 = cljs.core._count.call(null,cicoll);
var val__17034 = val;
var n__17035 = idx;
while(true){
if((n__17035 < cnt__17033))
{var nval__17036 = f.call(null,val__17034,cljs.core._nth.call(null,cicoll,n__17035));
if(cljs.core.reduced_QMARK_.call(null,nval__17036))
{return cljs.core.deref.call(null,nval__17036);
} else
{{
var G__17041 = nval__17036;
var G__17042 = (n__17035 + 1);
val__17034 = G__17041;
n__17035 = G__17042;
continue;
}
}
} else
{return val__17034;
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
var cnt__17055 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__17056 = (arr[0]);
var n__17057 = 1;
while(true){
if((n__17057 < cnt__17055))
{var nval__17058 = f.call(null,val__17056,(arr[n__17057]));
if(cljs.core.reduced_QMARK_.call(null,nval__17058))
{return cljs.core.deref.call(null,nval__17058);
} else
{{
var G__17067 = nval__17058;
var G__17068 = (n__17057 + 1);
val__17056 = G__17067;
n__17057 = G__17068;
continue;
}
}
} else
{return val__17056;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__17059 = arr.length;
var val__17060 = val;
var n__17061 = 0;
while(true){
if((n__17061 < cnt__17059))
{var nval__17062 = f.call(null,val__17060,(arr[n__17061]));
if(cljs.core.reduced_QMARK_.call(null,nval__17062))
{return cljs.core.deref.call(null,nval__17062);
} else
{{
var G__17069 = nval__17062;
var G__17070 = (n__17061 + 1);
val__17060 = G__17069;
n__17061 = G__17070;
continue;
}
}
} else
{return val__17060;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__17063 = arr.length;
var val__17064 = val;
var n__17065 = idx;
while(true){
if((n__17065 < cnt__17063))
{var nval__17066 = f.call(null,val__17064,(arr[n__17065]));
if(cljs.core.reduced_QMARK_.call(null,nval__17066))
{return cljs.core.deref.call(null,nval__17066);
} else
{{
var G__17071 = nval__17066;
var G__17072 = (n__17065 + 1);
val__17064 = G__17071;
n__17065 = G__17072;
continue;
}
}
} else
{return val__17064;
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
var this__17073 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__17074 = this;
if(((this__17074.i + 1) < this__17074.a.length))
{return (new cljs.core.IndexedSeq(this__17074.a,(this__17074.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17075 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__17076 = this;
var c__17077 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__17077 > 0))
{return (new cljs.core.RSeq(coll,(c__17077 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__17078 = this;
var this__17079 = this;
return cljs.core.pr_str.call(null,this__17079);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__17080 = this;
if(cljs.core.counted_QMARK_.call(null,this__17080.a))
{return cljs.core.ci_reduce.call(null,this__17080.a,f,(this__17080.a[this__17080.i]),(this__17080.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__17080.a[this__17080.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__17081 = this;
if(cljs.core.counted_QMARK_.call(null,this__17081.a))
{return cljs.core.ci_reduce.call(null,this__17081.a,f,start,this__17081.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__17082 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__17083 = this;
return (this__17083.a.length - this__17083.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__17084 = this;
return (this__17084.a[this__17084.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__17085 = this;
if(((this__17085.i + 1) < this__17085.a.length))
{return (new cljs.core.IndexedSeq(this__17085.a,(this__17085.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17086 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__17087 = this;
var i__17088 = (n + this__17087.i);
if((i__17088 < this__17087.a.length))
{return (this__17087.a[i__17088]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__17089 = this;
var i__17090 = (n + this__17089.i);
if((i__17090 < this__17089.a.length))
{return (this__17089.a[i__17090]);
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
var G__17091 = null;
var G__17091__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__17091__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__17091 = function(array,f,start){
switch(arguments.length){
case 2:
return G__17091__2.call(this,array,f);
case 3:
return G__17091__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17091;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__17092 = null;
var G__17092__2 = (function (array,k){
return (array[k]);
});
var G__17092__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__17092 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__17092__2.call(this,array,k);
case 3:
return G__17092__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17092;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__17093 = null;
var G__17093__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__17093__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__17093 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__17093__2.call(this,array,n);
case 3:
return G__17093__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17093;
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
var this__17094 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17095 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__17096 = this;
var this__17097 = this;
return cljs.core.pr_str.call(null,this__17097);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17098 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17099 = this;
return (this__17099.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17100 = this;
return cljs.core._nth.call(null,this__17100.ci,this__17100.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17101 = this;
if((this__17101.i > 0))
{return (new cljs.core.RSeq(this__17101.ci,(this__17101.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17102 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__17103 = this;
return (new cljs.core.RSeq(this__17103.ci,this__17103.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17104 = this;
return this__17104.meta;
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
{if((function (){var G__17108__17109 = coll;
if(G__17108__17109)
{if((function (){var or__3824__auto____17110 = (G__17108__17109.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____17110)
{return or__3824__auto____17110;
} else
{return G__17108__17109.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__17108__17109.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__17108__17109);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__17108__17109);
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
{if((function (){var G__17115__17116 = coll;
if(G__17115__17116)
{if((function (){var or__3824__auto____17117 = (G__17115__17116.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____17117)
{return or__3824__auto____17117;
} else
{return G__17115__17116.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__17115__17116.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17115__17116);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17115__17116);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__17118 = cljs.core.seq.call(null,coll);
if((s__17118 == null))
{return null;
} else
{return cljs.core._first.call(null,s__17118);
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
{if((function (){var G__17123__17124 = coll;
if(G__17123__17124)
{if((function (){var or__3824__auto____17125 = (G__17123__17124.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____17125)
{return or__3824__auto____17125;
} else
{return G__17123__17124.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__17123__17124.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17123__17124);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17123__17124);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__17126 = cljs.core.seq.call(null,coll);
if(!((s__17126 == null)))
{return cljs.core._rest.call(null,s__17126);
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
{if((function (){var G__17130__17131 = coll;
if(G__17130__17131)
{if((function (){var or__3824__auto____17132 = (G__17130__17131.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____17132)
{return or__3824__auto____17132;
} else
{return G__17130__17131.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__17130__17131.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__17130__17131);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__17130__17131);
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
var sn__17134 = cljs.core.next.call(null,s);
if(!((sn__17134 == null)))
{{
var G__17135 = sn__17134;
s = G__17135;
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
var G__17136__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__17137 = conj.call(null,coll,x);
var G__17138 = cljs.core.first.call(null,xs);
var G__17139 = cljs.core.next.call(null,xs);
coll = G__17137;
x = G__17138;
xs = G__17139;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__17136 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17136__delegate.call(this, coll, x, xs);
};
G__17136.cljs$lang$maxFixedArity = 2;
G__17136.cljs$lang$applyTo = (function (arglist__17140){
var coll = cljs.core.first(arglist__17140);
var x = cljs.core.first(cljs.core.next(arglist__17140));
var xs = cljs.core.rest(cljs.core.next(arglist__17140));
return G__17136__delegate(coll, x, xs);
});
G__17136.cljs$lang$arity$variadic = G__17136__delegate;
return G__17136;
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
var s__17143 = cljs.core.seq.call(null,coll);
var acc__17144 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__17143))
{return (acc__17144 + cljs.core._count.call(null,s__17143));
} else
{{
var G__17145 = cljs.core.next.call(null,s__17143);
var G__17146 = (acc__17144 + 1);
s__17143 = G__17145;
acc__17144 = G__17146;
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
{if((function (){var G__17153__17154 = coll;
if(G__17153__17154)
{if((function (){var or__3824__auto____17155 = (G__17153__17154.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____17155)
{return or__3824__auto____17155;
} else
{return G__17153__17154.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__17153__17154.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17153__17154);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17153__17154);
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
{if((function (){var G__17156__17157 = coll;
if(G__17156__17157)
{if((function (){var or__3824__auto____17158 = (G__17156__17157.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____17158)
{return or__3824__auto____17158;
} else
{return G__17156__17157.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__17156__17157.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17156__17157);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17156__17157);
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
var G__17161__delegate = function (coll,k,v,kvs){
while(true){
var ret__17160 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__17162 = ret__17160;
var G__17163 = cljs.core.first.call(null,kvs);
var G__17164 = cljs.core.second.call(null,kvs);
var G__17165 = cljs.core.nnext.call(null,kvs);
coll = G__17162;
k = G__17163;
v = G__17164;
kvs = G__17165;
continue;
}
} else
{return ret__17160;
}
break;
}
};
var G__17161 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17161__delegate.call(this, coll, k, v, kvs);
};
G__17161.cljs$lang$maxFixedArity = 3;
G__17161.cljs$lang$applyTo = (function (arglist__17166){
var coll = cljs.core.first(arglist__17166);
var k = cljs.core.first(cljs.core.next(arglist__17166));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17166)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17166)));
return G__17161__delegate(coll, k, v, kvs);
});
G__17161.cljs$lang$arity$variadic = G__17161__delegate;
return G__17161;
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
var G__17169__delegate = function (coll,k,ks){
while(true){
var ret__17168 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__17170 = ret__17168;
var G__17171 = cljs.core.first.call(null,ks);
var G__17172 = cljs.core.next.call(null,ks);
coll = G__17170;
k = G__17171;
ks = G__17172;
continue;
}
} else
{return ret__17168;
}
break;
}
};
var G__17169 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17169__delegate.call(this, coll, k, ks);
};
G__17169.cljs$lang$maxFixedArity = 2;
G__17169.cljs$lang$applyTo = (function (arglist__17173){
var coll = cljs.core.first(arglist__17173);
var k = cljs.core.first(cljs.core.next(arglist__17173));
var ks = cljs.core.rest(cljs.core.next(arglist__17173));
return G__17169__delegate(coll, k, ks);
});
G__17169.cljs$lang$arity$variadic = G__17169__delegate;
return G__17169;
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
if((function (){var G__17177__17178 = o;
if(G__17177__17178)
{if((function (){var or__3824__auto____17179 = (G__17177__17178.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____17179)
{return or__3824__auto____17179;
} else
{return G__17177__17178.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__17177__17178.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17177__17178);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17177__17178);
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
var G__17182__delegate = function (coll,k,ks){
while(true){
var ret__17181 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__17183 = ret__17181;
var G__17184 = cljs.core.first.call(null,ks);
var G__17185 = cljs.core.next.call(null,ks);
coll = G__17183;
k = G__17184;
ks = G__17185;
continue;
}
} else
{return ret__17181;
}
break;
}
};
var G__17182 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17182__delegate.call(this, coll, k, ks);
};
G__17182.cljs$lang$maxFixedArity = 2;
G__17182.cljs$lang$applyTo = (function (arglist__17186){
var coll = cljs.core.first(arglist__17186);
var k = cljs.core.first(cljs.core.next(arglist__17186));
var ks = cljs.core.rest(cljs.core.next(arglist__17186));
return G__17182__delegate(coll, k, ks);
});
G__17182.cljs$lang$arity$variadic = G__17182__delegate;
return G__17182;
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
var h__17188 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__17188);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__17188;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__17190 = (cljs.core.string_hash_cache[k]);
if(!((h__17190 == null)))
{return h__17190;
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
if((function (){var and__3822__auto____17192 = goog.isString(o);
if(and__3822__auto____17192)
{return check_cache;
} else
{return and__3822__auto____17192;
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
{var G__17196__17197 = x;
if(G__17196__17197)
{if((function (){var or__3824__auto____17198 = (G__17196__17197.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____17198)
{return or__3824__auto____17198;
} else
{return G__17196__17197.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__17196__17197.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__17196__17197);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__17196__17197);
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
{var G__17202__17203 = x;
if(G__17202__17203)
{if((function (){var or__3824__auto____17204 = (G__17202__17203.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____17204)
{return or__3824__auto____17204;
} else
{return G__17202__17203.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__17202__17203.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__17202__17203);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__17202__17203);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__17208__17209 = x;
if(G__17208__17209)
{if((function (){var or__3824__auto____17210 = (G__17208__17209.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____17210)
{return or__3824__auto____17210;
} else
{return G__17208__17209.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__17208__17209.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__17208__17209);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__17208__17209);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__17214__17215 = x;
if(G__17214__17215)
{if((function (){var or__3824__auto____17216 = (G__17214__17215.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____17216)
{return or__3824__auto____17216;
} else
{return G__17214__17215.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__17214__17215.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__17214__17215);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__17214__17215);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__17220__17221 = x;
if(G__17220__17221)
{if((function (){var or__3824__auto____17222 = (G__17220__17221.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____17222)
{return or__3824__auto____17222;
} else
{return G__17220__17221.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__17220__17221.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__17220__17221);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__17220__17221);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__17226__17227 = x;
if(G__17226__17227)
{if((function (){var or__3824__auto____17228 = (G__17226__17227.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____17228)
{return or__3824__auto____17228;
} else
{return G__17226__17227.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__17226__17227.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17226__17227);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__17226__17227);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__17232__17233 = x;
if(G__17232__17233)
{if((function (){var or__3824__auto____17234 = (G__17232__17233.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____17234)
{return or__3824__auto____17234;
} else
{return G__17232__17233.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__17232__17233.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17232__17233);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17232__17233);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__17238__17239 = x;
if(G__17238__17239)
{if((function (){var or__3824__auto____17240 = (G__17238__17239.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____17240)
{return or__3824__auto____17240;
} else
{return G__17238__17239.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__17238__17239.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__17238__17239);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__17238__17239);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__17244__17245 = x;
if(G__17244__17245)
{if((function (){var or__3824__auto____17246 = (G__17244__17245.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____17246)
{return or__3824__auto____17246;
} else
{return G__17244__17245.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__17244__17245.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__17244__17245);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__17244__17245);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__17250__17251 = x;
if(G__17250__17251)
{if(cljs.core.truth_((function (){var or__3824__auto____17252 = null;
if(cljs.core.truth_(or__3824__auto____17252))
{return or__3824__auto____17252;
} else
{return G__17250__17251.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__17250__17251.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__17250__17251);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__17250__17251);
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
var G__17253__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__17253 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17253__delegate.call(this, keyvals);
};
G__17253.cljs$lang$maxFixedArity = 0;
G__17253.cljs$lang$applyTo = (function (arglist__17254){
var keyvals = cljs.core.seq(arglist__17254);;
return G__17253__delegate(keyvals);
});
G__17253.cljs$lang$arity$variadic = G__17253__delegate;
return G__17253;
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
var keys__17256 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__17256.push(key);
}));
return keys__17256;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__17260 = i;
var j__17261 = j;
var len__17262 = len;
while(true){
if((len__17262 === 0))
{return to;
} else
{(to[j__17261] = (from[i__17260]));
{
var G__17263 = (i__17260 + 1);
var G__17264 = (j__17261 + 1);
var G__17265 = (len__17262 - 1);
i__17260 = G__17263;
j__17261 = G__17264;
len__17262 = G__17265;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__17269 = (i + (len - 1));
var j__17270 = (j + (len - 1));
var len__17271 = len;
while(true){
if((len__17271 === 0))
{return to;
} else
{(to[j__17270] = (from[i__17269]));
{
var G__17272 = (i__17269 - 1);
var G__17273 = (j__17270 - 1);
var G__17274 = (len__17271 - 1);
i__17269 = G__17272;
j__17270 = G__17273;
len__17271 = G__17274;
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
{var G__17278__17279 = s;
if(G__17278__17279)
{if((function (){var or__3824__auto____17280 = (G__17278__17279.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____17280)
{return or__3824__auto____17280;
} else
{return G__17278__17279.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__17278__17279.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17278__17279);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17278__17279);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__17284__17285 = s;
if(G__17284__17285)
{if((function (){var or__3824__auto____17286 = (G__17284__17285.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____17286)
{return or__3824__auto____17286;
} else
{return G__17284__17285.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__17284__17285.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__17284__17285);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__17284__17285);
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
var and__3822__auto____17289 = goog.isString(x);
if(and__3822__auto____17289)
{return !((function (){var or__3824__auto____17290 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____17290)
{return or__3824__auto____17290;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____17289;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____17292 = goog.isString(x);
if(and__3822__auto____17292)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____17292;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____17294 = goog.isString(x);
if(and__3822__auto____17294)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____17294;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____17299 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____17299)
{return or__3824__auto____17299;
} else
{var G__17300__17301 = f;
if(G__17300__17301)
{if((function (){var or__3824__auto____17302 = (G__17300__17301.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____17302)
{return or__3824__auto____17302;
} else
{return G__17300__17301.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__17300__17301.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__17300__17301);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__17300__17301);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____17304 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____17304)
{return (n == n.toFixed());
} else
{return and__3822__auto____17304;
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
if(cljs.core.truth_((function (){var and__3822__auto____17307 = coll;
if(cljs.core.truth_(and__3822__auto____17307))
{var and__3822__auto____17308 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____17308)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____17308;
}
} else
{return and__3822__auto____17307;
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
var G__17317__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__17313 = cljs.core.set([y,x]);
var xs__17314 = more;
while(true){
var x__17315 = cljs.core.first.call(null,xs__17314);
var etc__17316 = cljs.core.next.call(null,xs__17314);
if(cljs.core.truth_(xs__17314))
{if(cljs.core.contains_QMARK_.call(null,s__17313,x__17315))
{return false;
} else
{{
var G__17318 = cljs.core.conj.call(null,s__17313,x__17315);
var G__17319 = etc__17316;
s__17313 = G__17318;
xs__17314 = G__17319;
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
var G__17317 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17317__delegate.call(this, x, y, more);
};
G__17317.cljs$lang$maxFixedArity = 2;
G__17317.cljs$lang$applyTo = (function (arglist__17320){
var x = cljs.core.first(arglist__17320);
var y = cljs.core.first(cljs.core.next(arglist__17320));
var more = cljs.core.rest(cljs.core.next(arglist__17320));
return G__17317__delegate(x, y, more);
});
G__17317.cljs$lang$arity$variadic = G__17317__delegate;
return G__17317;
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
{if((function (){var G__17324__17325 = x;
if(G__17324__17325)
{if(cljs.core.truth_((function (){var or__3824__auto____17326 = null;
if(cljs.core.truth_(or__3824__auto____17326))
{return or__3824__auto____17326;
} else
{return G__17324__17325.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__17324__17325.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__17324__17325);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__17324__17325);
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
var xl__17331 = cljs.core.count.call(null,xs);
var yl__17332 = cljs.core.count.call(null,ys);
if((xl__17331 < yl__17332))
{return -1;
} else
{if((xl__17331 > yl__17332))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__17331,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__17333 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____17334 = (d__17333 === 0);
if(and__3822__auto____17334)
{return ((n + 1) < len);
} else
{return and__3822__auto____17334;
}
})())
{{
var G__17335 = xs;
var G__17336 = ys;
var G__17337 = len;
var G__17338 = (n + 1);
xs = G__17335;
ys = G__17336;
len = G__17337;
n = G__17338;
continue;
}
} else
{return d__17333;
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
var r__17340 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__17340))
{return r__17340;
} else
{if(cljs.core.truth_(r__17340))
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
{var a__17342 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__17342,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__17342);
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
var temp__3971__auto____17348 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____17348)
{var s__17349 = temp__3971__auto____17348;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__17349),cljs.core.next.call(null,s__17349));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__17350 = val;
var coll__17351 = cljs.core.seq.call(null,coll);
while(true){
if(coll__17351)
{var nval__17352 = f.call(null,val__17350,cljs.core.first.call(null,coll__17351));
if(cljs.core.reduced_QMARK_.call(null,nval__17352))
{return cljs.core.deref.call(null,nval__17352);
} else
{{
var G__17353 = nval__17352;
var G__17354 = cljs.core.next.call(null,coll__17351);
val__17350 = G__17353;
coll__17351 = G__17354;
continue;
}
}
} else
{return val__17350;
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
var a__17356 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__17356);
return cljs.core.vec.call(null,a__17356);
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
if((function (){var G__17363__17364 = coll;
if(G__17363__17364)
{if((function (){var or__3824__auto____17365 = (G__17363__17364.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____17365)
{return or__3824__auto____17365;
} else
{return G__17363__17364.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__17363__17364.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17363__17364);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17363__17364);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__17366__17367 = coll;
if(G__17366__17367)
{if((function (){var or__3824__auto____17368 = (G__17366__17367.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____17368)
{return or__3824__auto____17368;
} else
{return G__17366__17367.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__17366__17367.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17366__17367);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__17366__17367);
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
var this__17369 = this;
return this__17369.val;
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
var G__17370__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__17370 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17370__delegate.call(this, x, y, more);
};
G__17370.cljs$lang$maxFixedArity = 2;
G__17370.cljs$lang$applyTo = (function (arglist__17371){
var x = cljs.core.first(arglist__17371);
var y = cljs.core.first(cljs.core.next(arglist__17371));
var more = cljs.core.rest(cljs.core.next(arglist__17371));
return G__17370__delegate(x, y, more);
});
G__17370.cljs$lang$arity$variadic = G__17370__delegate;
return G__17370;
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
var G__17372__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__17372 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17372__delegate.call(this, x, y, more);
};
G__17372.cljs$lang$maxFixedArity = 2;
G__17372.cljs$lang$applyTo = (function (arglist__17373){
var x = cljs.core.first(arglist__17373);
var y = cljs.core.first(cljs.core.next(arglist__17373));
var more = cljs.core.rest(cljs.core.next(arglist__17373));
return G__17372__delegate(x, y, more);
});
G__17372.cljs$lang$arity$variadic = G__17372__delegate;
return G__17372;
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
var G__17374__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__17374 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17374__delegate.call(this, x, y, more);
};
G__17374.cljs$lang$maxFixedArity = 2;
G__17374.cljs$lang$applyTo = (function (arglist__17375){
var x = cljs.core.first(arglist__17375);
var y = cljs.core.first(cljs.core.next(arglist__17375));
var more = cljs.core.rest(cljs.core.next(arglist__17375));
return G__17374__delegate(x, y, more);
});
G__17374.cljs$lang$arity$variadic = G__17374__delegate;
return G__17374;
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
var G__17376__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__17376 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17376__delegate.call(this, x, y, more);
};
G__17376.cljs$lang$maxFixedArity = 2;
G__17376.cljs$lang$applyTo = (function (arglist__17377){
var x = cljs.core.first(arglist__17377);
var y = cljs.core.first(cljs.core.next(arglist__17377));
var more = cljs.core.rest(cljs.core.next(arglist__17377));
return G__17376__delegate(x, y, more);
});
G__17376.cljs$lang$arity$variadic = G__17376__delegate;
return G__17376;
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
var G__17378__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__17379 = y;
var G__17380 = cljs.core.first.call(null,more);
var G__17381 = cljs.core.next.call(null,more);
x = G__17379;
y = G__17380;
more = G__17381;
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
var G__17378 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17378__delegate.call(this, x, y, more);
};
G__17378.cljs$lang$maxFixedArity = 2;
G__17378.cljs$lang$applyTo = (function (arglist__17382){
var x = cljs.core.first(arglist__17382);
var y = cljs.core.first(cljs.core.next(arglist__17382));
var more = cljs.core.rest(cljs.core.next(arglist__17382));
return G__17378__delegate(x, y, more);
});
G__17378.cljs$lang$arity$variadic = G__17378__delegate;
return G__17378;
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
var G__17383__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__17384 = y;
var G__17385 = cljs.core.first.call(null,more);
var G__17386 = cljs.core.next.call(null,more);
x = G__17384;
y = G__17385;
more = G__17386;
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
var G__17383 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17383__delegate.call(this, x, y, more);
};
G__17383.cljs$lang$maxFixedArity = 2;
G__17383.cljs$lang$applyTo = (function (arglist__17387){
var x = cljs.core.first(arglist__17387);
var y = cljs.core.first(cljs.core.next(arglist__17387));
var more = cljs.core.rest(cljs.core.next(arglist__17387));
return G__17383__delegate(x, y, more);
});
G__17383.cljs$lang$arity$variadic = G__17383__delegate;
return G__17383;
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
var G__17388__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__17389 = y;
var G__17390 = cljs.core.first.call(null,more);
var G__17391 = cljs.core.next.call(null,more);
x = G__17389;
y = G__17390;
more = G__17391;
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
var G__17388 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17388__delegate.call(this, x, y, more);
};
G__17388.cljs$lang$maxFixedArity = 2;
G__17388.cljs$lang$applyTo = (function (arglist__17392){
var x = cljs.core.first(arglist__17392);
var y = cljs.core.first(cljs.core.next(arglist__17392));
var more = cljs.core.rest(cljs.core.next(arglist__17392));
return G__17388__delegate(x, y, more);
});
G__17388.cljs$lang$arity$variadic = G__17388__delegate;
return G__17388;
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
var G__17393__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__17394 = y;
var G__17395 = cljs.core.first.call(null,more);
var G__17396 = cljs.core.next.call(null,more);
x = G__17394;
y = G__17395;
more = G__17396;
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
var G__17393 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17393__delegate.call(this, x, y, more);
};
G__17393.cljs$lang$maxFixedArity = 2;
G__17393.cljs$lang$applyTo = (function (arglist__17397){
var x = cljs.core.first(arglist__17397);
var y = cljs.core.first(cljs.core.next(arglist__17397));
var more = cljs.core.rest(cljs.core.next(arglist__17397));
return G__17393__delegate(x, y, more);
});
G__17393.cljs$lang$arity$variadic = G__17393__delegate;
return G__17393;
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
var G__17398__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__17398 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17398__delegate.call(this, x, y, more);
};
G__17398.cljs$lang$maxFixedArity = 2;
G__17398.cljs$lang$applyTo = (function (arglist__17399){
var x = cljs.core.first(arglist__17399);
var y = cljs.core.first(cljs.core.next(arglist__17399));
var more = cljs.core.rest(cljs.core.next(arglist__17399));
return G__17398__delegate(x, y, more);
});
G__17398.cljs$lang$arity$variadic = G__17398__delegate;
return G__17398;
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
var G__17400__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__17400 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17400__delegate.call(this, x, y, more);
};
G__17400.cljs$lang$maxFixedArity = 2;
G__17400.cljs$lang$applyTo = (function (arglist__17401){
var x = cljs.core.first(arglist__17401);
var y = cljs.core.first(cljs.core.next(arglist__17401));
var more = cljs.core.rest(cljs.core.next(arglist__17401));
return G__17400__delegate(x, y, more);
});
G__17400.cljs$lang$arity$variadic = G__17400__delegate;
return G__17400;
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
var rem__17403 = (n % d);
return cljs.core.fix.call(null,((n - rem__17403) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__17405 = cljs.core.quot.call(null,n,d);
return (n - (d * q__17405));
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
var v__17408 = (v - ((v >> 1) & 1431655765));
var v__17409 = ((v__17408 & 858993459) + ((v__17408 >> 2) & 858993459));
return ((((v__17409 + (v__17409 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__17410__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__17411 = y;
var G__17412 = cljs.core.first.call(null,more);
var G__17413 = cljs.core.next.call(null,more);
x = G__17411;
y = G__17412;
more = G__17413;
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
var G__17410 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17410__delegate.call(this, x, y, more);
};
G__17410.cljs$lang$maxFixedArity = 2;
G__17410.cljs$lang$applyTo = (function (arglist__17414){
var x = cljs.core.first(arglist__17414);
var y = cljs.core.first(cljs.core.next(arglist__17414));
var more = cljs.core.rest(cljs.core.next(arglist__17414));
return G__17410__delegate(x, y, more);
});
G__17410.cljs$lang$arity$variadic = G__17410__delegate;
return G__17410;
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
var n__17418 = n;
var xs__17419 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____17420 = xs__17419;
if(and__3822__auto____17420)
{return (n__17418 > 0);
} else
{return and__3822__auto____17420;
}
})()))
{{
var G__17421 = (n__17418 - 1);
var G__17422 = cljs.core.next.call(null,xs__17419);
n__17418 = G__17421;
xs__17419 = G__17422;
continue;
}
} else
{return xs__17419;
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
var G__17423__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__17424 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__17425 = cljs.core.next.call(null,more);
sb = G__17424;
more = G__17425;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__17423 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17423__delegate.call(this, x, ys);
};
G__17423.cljs$lang$maxFixedArity = 1;
G__17423.cljs$lang$applyTo = (function (arglist__17426){
var x = cljs.core.first(arglist__17426);
var ys = cljs.core.rest(arglist__17426);
return G__17423__delegate(x, ys);
});
G__17423.cljs$lang$arity$variadic = G__17423__delegate;
return G__17423;
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
var G__17427__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__17428 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__17429 = cljs.core.next.call(null,more);
sb = G__17428;
more = G__17429;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__17427 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17427__delegate.call(this, x, ys);
};
G__17427.cljs$lang$maxFixedArity = 1;
G__17427.cljs$lang$applyTo = (function (arglist__17430){
var x = cljs.core.first(arglist__17430);
var ys = cljs.core.rest(arglist__17430);
return G__17427__delegate(x, ys);
});
G__17427.cljs$lang$arity$variadic = G__17427__delegate;
return G__17427;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__17433 = cljs.core.seq.call(null,x);
var ys__17434 = cljs.core.seq.call(null,y);
while(true){
if((xs__17433 == null))
{return (ys__17434 == null);
} else
{if((ys__17434 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__17433),cljs.core.first.call(null,ys__17434)))
{{
var G__17435 = cljs.core.next.call(null,xs__17433);
var G__17436 = cljs.core.next.call(null,ys__17434);
xs__17433 = G__17435;
ys__17434 = G__17436;
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
return cljs.core.reduce.call(null,(function (p1__17437_SHARP_,p2__17438_SHARP_){
return cljs.core.hash_combine.call(null,p1__17437_SHARP_,cljs.core.hash.call(null,p2__17438_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__17442 = 0;
var s__17443 = cljs.core.seq.call(null,m);
while(true){
if(s__17443)
{var e__17444 = cljs.core.first.call(null,s__17443);
{
var G__17445 = ((h__17442 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__17444)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__17444)))) % 4503599627370496);
var G__17446 = cljs.core.next.call(null,s__17443);
h__17442 = G__17445;
s__17443 = G__17446;
continue;
}
} else
{return h__17442;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__17450 = 0;
var s__17451 = cljs.core.seq.call(null,s);
while(true){
if(s__17451)
{var e__17452 = cljs.core.first.call(null,s__17451);
{
var G__17453 = ((h__17450 + cljs.core.hash.call(null,e__17452)) % 4503599627370496);
var G__17454 = cljs.core.next.call(null,s__17451);
h__17450 = G__17453;
s__17451 = G__17454;
continue;
}
} else
{return h__17450;
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
var G__17475__17476 = cljs.core.seq.call(null,fn_map);
if(G__17475__17476)
{var G__17478__17480 = cljs.core.first.call(null,G__17475__17476);
var vec__17479__17481 = G__17478__17480;
var key_name__17482 = cljs.core.nth.call(null,vec__17479__17481,0,null);
var f__17483 = cljs.core.nth.call(null,vec__17479__17481,1,null);
var G__17475__17484 = G__17475__17476;
var G__17478__17485 = G__17478__17480;
var G__17475__17486 = G__17475__17484;
while(true){
var vec__17487__17488 = G__17478__17485;
var key_name__17489 = cljs.core.nth.call(null,vec__17487__17488,0,null);
var f__17490 = cljs.core.nth.call(null,vec__17487__17488,1,null);
var G__17475__17491 = G__17475__17486;
var str_name__17492 = cljs.core.name.call(null,key_name__17489);
(obj[str_name__17492] = f__17490);
var temp__3974__auto____17493 = cljs.core.next.call(null,G__17475__17491);
if(temp__3974__auto____17493)
{var G__17475__17494 = temp__3974__auto____17493;
{
var G__17495 = cljs.core.first.call(null,G__17475__17494);
var G__17496 = G__17475__17494;
G__17478__17485 = G__17495;
G__17475__17486 = G__17496;
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
var this__17497 = this;
var h__2057__auto____17498 = this__17497.__hash;
if(!((h__2057__auto____17498 == null)))
{return h__2057__auto____17498;
} else
{var h__2057__auto____17499 = cljs.core.hash_coll.call(null,coll);
this__17497.__hash = h__2057__auto____17499;
return h__2057__auto____17499;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__17500 = this;
if((this__17500.count === 1))
{return null;
} else
{return this__17500.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17501 = this;
return (new cljs.core.List(this__17501.meta,o,coll,(this__17501.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__17502 = this;
var this__17503 = this;
return cljs.core.pr_str.call(null,this__17503);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17504 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17505 = this;
return this__17505.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__17506 = this;
return this__17506.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__17507 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17508 = this;
return this__17508.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17509 = this;
if((this__17509.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__17509.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17510 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17511 = this;
return (new cljs.core.List(meta,this__17511.first,this__17511.rest,this__17511.count,this__17511.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17512 = this;
return this__17512.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17513 = this;
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
var this__17514 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__17515 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17516 = this;
return (new cljs.core.List(this__17516.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__17517 = this;
var this__17518 = this;
return cljs.core.pr_str.call(null,this__17518);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17519 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17520 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__17521 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__17522 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17523 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17524 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17525 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17526 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17527 = this;
return this__17527.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17528 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__17532__17533 = coll;
if(G__17532__17533)
{if((function (){var or__3824__auto____17534 = (G__17532__17533.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____17534)
{return or__3824__auto____17534;
} else
{return G__17532__17533.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__17532__17533.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__17532__17533);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__17532__17533);
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
var G__17535__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__17535 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17535__delegate.call(this, x, y, z, items);
};
G__17535.cljs$lang$maxFixedArity = 3;
G__17535.cljs$lang$applyTo = (function (arglist__17536){
var x = cljs.core.first(arglist__17536);
var y = cljs.core.first(cljs.core.next(arglist__17536));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17536)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17536)));
return G__17535__delegate(x, y, z, items);
});
G__17535.cljs$lang$arity$variadic = G__17535__delegate;
return G__17535;
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
var this__17537 = this;
var h__2057__auto____17538 = this__17537.__hash;
if(!((h__2057__auto____17538 == null)))
{return h__2057__auto____17538;
} else
{var h__2057__auto____17539 = cljs.core.hash_coll.call(null,coll);
this__17537.__hash = h__2057__auto____17539;
return h__2057__auto____17539;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__17540 = this;
if((this__17540.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__17540.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17541 = this;
return (new cljs.core.Cons(null,o,coll,this__17541.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__17542 = this;
var this__17543 = this;
return cljs.core.pr_str.call(null,this__17543);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17544 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17545 = this;
return this__17545.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17546 = this;
if((this__17546.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__17546.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17547 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17548 = this;
return (new cljs.core.Cons(meta,this__17548.first,this__17548.rest,this__17548.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17549 = this;
return this__17549.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17550 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17550.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____17555 = (coll == null);
if(or__3824__auto____17555)
{return or__3824__auto____17555;
} else
{var G__17556__17557 = coll;
if(G__17556__17557)
{if((function (){var or__3824__auto____17558 = (G__17556__17557.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____17558)
{return or__3824__auto____17558;
} else
{return G__17556__17557.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__17556__17557.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17556__17557);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__17556__17557);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__17562__17563 = x;
if(G__17562__17563)
{if((function (){var or__3824__auto____17564 = (G__17562__17563.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____17564)
{return or__3824__auto____17564;
} else
{return G__17562__17563.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__17562__17563.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__17562__17563);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__17562__17563);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__17565 = null;
var G__17565__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__17565__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__17565 = function(string,f,start){
switch(arguments.length){
case 2:
return G__17565__2.call(this,string,f);
case 3:
return G__17565__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17565;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__17566 = null;
var G__17566__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__17566__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__17566 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__17566__2.call(this,string,k);
case 3:
return G__17566__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17566;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__17567 = null;
var G__17567__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__17567__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__17567 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__17567__2.call(this,string,n);
case 3:
return G__17567__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17567;
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
cljs.core.Keyword.prototype.call = (function (this_sym17570,coll){
var this__17571 = this;
var this_sym17570__17572 = this;
var ___17573 = this_sym17570__17572;
if((coll == null))
{return null;
} else
{var strobj__17574 = coll.strobj;
if((strobj__17574 == null))
{return cljs.core._lookup.call(null,coll,this__17571.k,null);
} else
{return (strobj__17574[this__17571.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym17568,args17569){
var this__17575 = this;
return this_sym17568.call.apply(this_sym17568,[this_sym17568].concat(args17569.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__17584 = null;
var G__17584__2 = (function (this_sym17578,coll){
var this_sym17578__17580 = this;
var this__17581 = this_sym17578__17580;
return cljs.core._lookup.call(null,coll,this__17581.toString(),null);
});
var G__17584__3 = (function (this_sym17579,coll,not_found){
var this_sym17579__17582 = this;
var this__17583 = this_sym17579__17582;
return cljs.core._lookup.call(null,coll,this__17583.toString(),not_found);
});
G__17584 = function(this_sym17579,coll,not_found){
switch(arguments.length){
case 2:
return G__17584__2.call(this,this_sym17579,coll);
case 3:
return G__17584__3.call(this,this_sym17579,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17584;
})()
;
String.prototype.apply = (function (this_sym17576,args17577){
return this_sym17576.call.apply(this_sym17576,[this_sym17576].concat(args17577.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__17586 = lazy_seq.x;
if(lazy_seq.realized)
{return x__17586;
} else
{lazy_seq.x = x__17586.call(null);
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
var this__17587 = this;
var h__2057__auto____17588 = this__17587.__hash;
if(!((h__2057__auto____17588 == null)))
{return h__2057__auto____17588;
} else
{var h__2057__auto____17589 = cljs.core.hash_coll.call(null,coll);
this__17587.__hash = h__2057__auto____17589;
return h__2057__auto____17589;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__17590 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17591 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__17592 = this;
var this__17593 = this;
return cljs.core.pr_str.call(null,this__17593);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17594 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17595 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17596 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17597 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17598 = this;
return (new cljs.core.LazySeq(meta,this__17598.realized,this__17598.x,this__17598.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17599 = this;
return this__17599.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17600 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17600.meta);
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
var this__17601 = this;
return this__17601.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__17602 = this;
var ___17603 = this;
(this__17602.buf[this__17602.end] = o);
return this__17602.end = (this__17602.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__17604 = this;
var ___17605 = this;
var ret__17606 = (new cljs.core.ArrayChunk(this__17604.buf,0,this__17604.end));
this__17604.buf = null;
return ret__17606;
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
var this__17607 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__17607.arr[this__17607.off]),(this__17607.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__17608 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__17608.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__17609 = this;
if((this__17609.off === this__17609.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__17609.arr,(this__17609.off + 1),this__17609.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__17610 = this;
return (this__17610.arr[(this__17610.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__17611 = this;
if((function (){var and__3822__auto____17612 = (i >= 0);
if(and__3822__auto____17612)
{return (i < (this__17611.end - this__17611.off));
} else
{return and__3822__auto____17612;
}
})())
{return (this__17611.arr[(this__17611.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__17613 = this;
return (this__17613.end - this__17613.off);
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
var this__17614 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17615 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17616 = this;
return cljs.core._nth.call(null,this__17616.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17617 = this;
if((cljs.core._count.call(null,this__17617.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__17617.chunk),this__17617.more,this__17617.meta));
} else
{if((this__17617.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__17617.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__17618 = this;
if((this__17618.more == null))
{return null;
} else
{return this__17618.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17619 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__17620 = this;
return (new cljs.core.ChunkedCons(this__17620.chunk,this__17620.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17621 = this;
return this__17621.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__17622 = this;
return this__17622.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__17623 = this;
if((this__17623.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__17623.more;
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
if((function (){var G__17627__17628 = s;
if(G__17627__17628)
{if(cljs.core.truth_((function (){var or__3824__auto____17629 = null;
if(cljs.core.truth_(or__3824__auto____17629))
{return or__3824__auto____17629;
} else
{return G__17627__17628.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__17627__17628.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__17627__17628);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__17627__17628);
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
var ary__17632 = [];
var s__17633 = s;
while(true){
if(cljs.core.seq.call(null,s__17633))
{ary__17632.push(cljs.core.first.call(null,s__17633));
{
var G__17634 = cljs.core.next.call(null,s__17633);
s__17633 = G__17634;
continue;
}
} else
{return ary__17632;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__17638 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__17639 = 0;
var xs__17640 = cljs.core.seq.call(null,coll);
while(true){
if(xs__17640)
{(ret__17638[i__17639] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__17640)));
{
var G__17641 = (i__17639 + 1);
var G__17642 = cljs.core.next.call(null,xs__17640);
i__17639 = G__17641;
xs__17640 = G__17642;
continue;
}
} else
{}
break;
}
return ret__17638;
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
var a__17650 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__17651 = cljs.core.seq.call(null,init_val_or_seq);
var i__17652 = 0;
var s__17653 = s__17651;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____17654 = s__17653;
if(and__3822__auto____17654)
{return (i__17652 < size);
} else
{return and__3822__auto____17654;
}
})()))
{(a__17650[i__17652] = cljs.core.first.call(null,s__17653));
{
var G__17657 = (i__17652 + 1);
var G__17658 = cljs.core.next.call(null,s__17653);
i__17652 = G__17657;
s__17653 = G__17658;
continue;
}
} else
{return a__17650;
}
break;
}
} else
{var n__2396__auto____17655 = size;
var i__17656 = 0;
while(true){
if((i__17656 < n__2396__auto____17655))
{(a__17650[i__17656] = init_val_or_seq);
{
var G__17659 = (i__17656 + 1);
i__17656 = G__17659;
continue;
}
} else
{}
break;
}
return a__17650;
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
var a__17667 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__17668 = cljs.core.seq.call(null,init_val_or_seq);
var i__17669 = 0;
var s__17670 = s__17668;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____17671 = s__17670;
if(and__3822__auto____17671)
{return (i__17669 < size);
} else
{return and__3822__auto____17671;
}
})()))
{(a__17667[i__17669] = cljs.core.first.call(null,s__17670));
{
var G__17674 = (i__17669 + 1);
var G__17675 = cljs.core.next.call(null,s__17670);
i__17669 = G__17674;
s__17670 = G__17675;
continue;
}
} else
{return a__17667;
}
break;
}
} else
{var n__2396__auto____17672 = size;
var i__17673 = 0;
while(true){
if((i__17673 < n__2396__auto____17672))
{(a__17667[i__17673] = init_val_or_seq);
{
var G__17676 = (i__17673 + 1);
i__17673 = G__17676;
continue;
}
} else
{}
break;
}
return a__17667;
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
var a__17684 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__17685 = cljs.core.seq.call(null,init_val_or_seq);
var i__17686 = 0;
var s__17687 = s__17685;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____17688 = s__17687;
if(and__3822__auto____17688)
{return (i__17686 < size);
} else
{return and__3822__auto____17688;
}
})()))
{(a__17684[i__17686] = cljs.core.first.call(null,s__17687));
{
var G__17691 = (i__17686 + 1);
var G__17692 = cljs.core.next.call(null,s__17687);
i__17686 = G__17691;
s__17687 = G__17692;
continue;
}
} else
{return a__17684;
}
break;
}
} else
{var n__2396__auto____17689 = size;
var i__17690 = 0;
while(true){
if((i__17690 < n__2396__auto____17689))
{(a__17684[i__17690] = init_val_or_seq);
{
var G__17693 = (i__17690 + 1);
i__17690 = G__17693;
continue;
}
} else
{}
break;
}
return a__17684;
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
{var s__17698 = s;
var i__17699 = n;
var sum__17700 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____17701 = (i__17699 > 0);
if(and__3822__auto____17701)
{return cljs.core.seq.call(null,s__17698);
} else
{return and__3822__auto____17701;
}
})()))
{{
var G__17702 = cljs.core.next.call(null,s__17698);
var G__17703 = (i__17699 - 1);
var G__17704 = (sum__17700 + 1);
s__17698 = G__17702;
i__17699 = G__17703;
sum__17700 = G__17704;
continue;
}
} else
{return sum__17700;
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
var s__17709 = cljs.core.seq.call(null,x);
if(s__17709)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__17709))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__17709),concat.call(null,cljs.core.chunk_rest.call(null,s__17709),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__17709),concat.call(null,cljs.core.rest.call(null,s__17709),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__17713__delegate = function (x,y,zs){
var cat__17712 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__17711 = cljs.core.seq.call(null,xys);
if(xys__17711)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__17711))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__17711),cat.call(null,cljs.core.chunk_rest.call(null,xys__17711),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__17711),cat.call(null,cljs.core.rest.call(null,xys__17711),zs));
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
return cat__17712.call(null,concat.call(null,x,y),zs);
};
var G__17713 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17713__delegate.call(this, x, y, zs);
};
G__17713.cljs$lang$maxFixedArity = 2;
G__17713.cljs$lang$applyTo = (function (arglist__17714){
var x = cljs.core.first(arglist__17714);
var y = cljs.core.first(cljs.core.next(arglist__17714));
var zs = cljs.core.rest(cljs.core.next(arglist__17714));
return G__17713__delegate(x, y, zs);
});
G__17713.cljs$lang$arity$variadic = G__17713__delegate;
return G__17713;
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
var G__17715__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__17715 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__17715__delegate.call(this, a, b, c, d, more);
};
G__17715.cljs$lang$maxFixedArity = 4;
G__17715.cljs$lang$applyTo = (function (arglist__17716){
var a = cljs.core.first(arglist__17716);
var b = cljs.core.first(cljs.core.next(arglist__17716));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17716)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17716))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17716))));
return G__17715__delegate(a, b, c, d, more);
});
G__17715.cljs$lang$arity$variadic = G__17715__delegate;
return G__17715;
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
var args__17758 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__17759 = cljs.core._first.call(null,args__17758);
var args__17760 = cljs.core._rest.call(null,args__17758);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__17759);
} else
{return f.call(null,a__17759);
}
} else
{var b__17761 = cljs.core._first.call(null,args__17760);
var args__17762 = cljs.core._rest.call(null,args__17760);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__17759,b__17761);
} else
{return f.call(null,a__17759,b__17761);
}
} else
{var c__17763 = cljs.core._first.call(null,args__17762);
var args__17764 = cljs.core._rest.call(null,args__17762);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__17759,b__17761,c__17763);
} else
{return f.call(null,a__17759,b__17761,c__17763);
}
} else
{var d__17765 = cljs.core._first.call(null,args__17764);
var args__17766 = cljs.core._rest.call(null,args__17764);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__17759,b__17761,c__17763,d__17765);
} else
{return f.call(null,a__17759,b__17761,c__17763,d__17765);
}
} else
{var e__17767 = cljs.core._first.call(null,args__17766);
var args__17768 = cljs.core._rest.call(null,args__17766);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__17759,b__17761,c__17763,d__17765,e__17767);
} else
{return f.call(null,a__17759,b__17761,c__17763,d__17765,e__17767);
}
} else
{var f__17769 = cljs.core._first.call(null,args__17768);
var args__17770 = cljs.core._rest.call(null,args__17768);
if((argc === 6))
{if(f__17769.cljs$lang$arity$6)
{return f__17769.cljs$lang$arity$6(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769);
}
} else
{var g__17771 = cljs.core._first.call(null,args__17770);
var args__17772 = cljs.core._rest.call(null,args__17770);
if((argc === 7))
{if(f__17769.cljs$lang$arity$7)
{return f__17769.cljs$lang$arity$7(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771);
}
} else
{var h__17773 = cljs.core._first.call(null,args__17772);
var args__17774 = cljs.core._rest.call(null,args__17772);
if((argc === 8))
{if(f__17769.cljs$lang$arity$8)
{return f__17769.cljs$lang$arity$8(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773);
}
} else
{var i__17775 = cljs.core._first.call(null,args__17774);
var args__17776 = cljs.core._rest.call(null,args__17774);
if((argc === 9))
{if(f__17769.cljs$lang$arity$9)
{return f__17769.cljs$lang$arity$9(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775);
}
} else
{var j__17777 = cljs.core._first.call(null,args__17776);
var args__17778 = cljs.core._rest.call(null,args__17776);
if((argc === 10))
{if(f__17769.cljs$lang$arity$10)
{return f__17769.cljs$lang$arity$10(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777);
}
} else
{var k__17779 = cljs.core._first.call(null,args__17778);
var args__17780 = cljs.core._rest.call(null,args__17778);
if((argc === 11))
{if(f__17769.cljs$lang$arity$11)
{return f__17769.cljs$lang$arity$11(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779);
}
} else
{var l__17781 = cljs.core._first.call(null,args__17780);
var args__17782 = cljs.core._rest.call(null,args__17780);
if((argc === 12))
{if(f__17769.cljs$lang$arity$12)
{return f__17769.cljs$lang$arity$12(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781);
}
} else
{var m__17783 = cljs.core._first.call(null,args__17782);
var args__17784 = cljs.core._rest.call(null,args__17782);
if((argc === 13))
{if(f__17769.cljs$lang$arity$13)
{return f__17769.cljs$lang$arity$13(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783);
}
} else
{var n__17785 = cljs.core._first.call(null,args__17784);
var args__17786 = cljs.core._rest.call(null,args__17784);
if((argc === 14))
{if(f__17769.cljs$lang$arity$14)
{return f__17769.cljs$lang$arity$14(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785);
}
} else
{var o__17787 = cljs.core._first.call(null,args__17786);
var args__17788 = cljs.core._rest.call(null,args__17786);
if((argc === 15))
{if(f__17769.cljs$lang$arity$15)
{return f__17769.cljs$lang$arity$15(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787);
}
} else
{var p__17789 = cljs.core._first.call(null,args__17788);
var args__17790 = cljs.core._rest.call(null,args__17788);
if((argc === 16))
{if(f__17769.cljs$lang$arity$16)
{return f__17769.cljs$lang$arity$16(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787,p__17789);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787,p__17789);
}
} else
{var q__17791 = cljs.core._first.call(null,args__17790);
var args__17792 = cljs.core._rest.call(null,args__17790);
if((argc === 17))
{if(f__17769.cljs$lang$arity$17)
{return f__17769.cljs$lang$arity$17(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787,p__17789,q__17791);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787,p__17789,q__17791);
}
} else
{var r__17793 = cljs.core._first.call(null,args__17792);
var args__17794 = cljs.core._rest.call(null,args__17792);
if((argc === 18))
{if(f__17769.cljs$lang$arity$18)
{return f__17769.cljs$lang$arity$18(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787,p__17789,q__17791,r__17793);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787,p__17789,q__17791,r__17793);
}
} else
{var s__17795 = cljs.core._first.call(null,args__17794);
var args__17796 = cljs.core._rest.call(null,args__17794);
if((argc === 19))
{if(f__17769.cljs$lang$arity$19)
{return f__17769.cljs$lang$arity$19(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787,p__17789,q__17791,r__17793,s__17795);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787,p__17789,q__17791,r__17793,s__17795);
}
} else
{var t__17797 = cljs.core._first.call(null,args__17796);
var args__17798 = cljs.core._rest.call(null,args__17796);
if((argc === 20))
{if(f__17769.cljs$lang$arity$20)
{return f__17769.cljs$lang$arity$20(a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787,p__17789,q__17791,r__17793,s__17795,t__17797);
} else
{return f__17769.call(null,a__17759,b__17761,c__17763,d__17765,e__17767,f__17769,g__17771,h__17773,i__17775,j__17777,k__17779,l__17781,m__17783,n__17785,o__17787,p__17789,q__17791,r__17793,s__17795,t__17797);
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
var fixed_arity__17813 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__17814 = cljs.core.bounded_count.call(null,args,(fixed_arity__17813 + 1));
if((bc__17814 <= fixed_arity__17813))
{return cljs.core.apply_to.call(null,f,bc__17814,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__17815 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__17816 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__17817 = cljs.core.bounded_count.call(null,arglist__17815,(fixed_arity__17816 + 1));
if((bc__17817 <= fixed_arity__17816))
{return cljs.core.apply_to.call(null,f,bc__17817,arglist__17815);
} else
{return f.cljs$lang$applyTo(arglist__17815);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__17815));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__17818 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__17819 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__17820 = cljs.core.bounded_count.call(null,arglist__17818,(fixed_arity__17819 + 1));
if((bc__17820 <= fixed_arity__17819))
{return cljs.core.apply_to.call(null,f,bc__17820,arglist__17818);
} else
{return f.cljs$lang$applyTo(arglist__17818);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__17818));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__17821 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__17822 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__17823 = cljs.core.bounded_count.call(null,arglist__17821,(fixed_arity__17822 + 1));
if((bc__17823 <= fixed_arity__17822))
{return cljs.core.apply_to.call(null,f,bc__17823,arglist__17821);
} else
{return f.cljs$lang$applyTo(arglist__17821);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__17821));
}
});
var apply__6 = (function() { 
var G__17827__delegate = function (f,a,b,c,d,args){
var arglist__17824 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__17825 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__17826 = cljs.core.bounded_count.call(null,arglist__17824,(fixed_arity__17825 + 1));
if((bc__17826 <= fixed_arity__17825))
{return cljs.core.apply_to.call(null,f,bc__17826,arglist__17824);
} else
{return f.cljs$lang$applyTo(arglist__17824);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__17824));
}
};
var G__17827 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__17827__delegate.call(this, f, a, b, c, d, args);
};
G__17827.cljs$lang$maxFixedArity = 5;
G__17827.cljs$lang$applyTo = (function (arglist__17828){
var f = cljs.core.first(arglist__17828);
var a = cljs.core.first(cljs.core.next(arglist__17828));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17828)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17828))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17828)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17828)))));
return G__17827__delegate(f, a, b, c, d, args);
});
G__17827.cljs$lang$arity$variadic = G__17827__delegate;
return G__17827;
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
vary_meta.cljs$lang$applyTo = (function (arglist__17829){
var obj = cljs.core.first(arglist__17829);
var f = cljs.core.first(cljs.core.next(arglist__17829));
var args = cljs.core.rest(cljs.core.next(arglist__17829));
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
var G__17830__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__17830 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17830__delegate.call(this, x, y, more);
};
G__17830.cljs$lang$maxFixedArity = 2;
G__17830.cljs$lang$applyTo = (function (arglist__17831){
var x = cljs.core.first(arglist__17831);
var y = cljs.core.first(cljs.core.next(arglist__17831));
var more = cljs.core.rest(cljs.core.next(arglist__17831));
return G__17830__delegate(x, y, more);
});
G__17830.cljs$lang$arity$variadic = G__17830__delegate;
return G__17830;
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
var G__17832 = pred;
var G__17833 = cljs.core.next.call(null,coll);
pred = G__17832;
coll = G__17833;
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
{var or__3824__auto____17835 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____17835))
{return or__3824__auto____17835;
} else
{{
var G__17836 = pred;
var G__17837 = cljs.core.next.call(null,coll);
pred = G__17836;
coll = G__17837;
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
var G__17838 = null;
var G__17838__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__17838__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__17838__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__17838__3 = (function() { 
var G__17839__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__17839 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17839__delegate.call(this, x, y, zs);
};
G__17839.cljs$lang$maxFixedArity = 2;
G__17839.cljs$lang$applyTo = (function (arglist__17840){
var x = cljs.core.first(arglist__17840);
var y = cljs.core.first(cljs.core.next(arglist__17840));
var zs = cljs.core.rest(cljs.core.next(arglist__17840));
return G__17839__delegate(x, y, zs);
});
G__17839.cljs$lang$arity$variadic = G__17839__delegate;
return G__17839;
})()
;
G__17838 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__17838__0.call(this);
case 1:
return G__17838__1.call(this,x);
case 2:
return G__17838__2.call(this,x,y);
default:
return G__17838__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__17838.cljs$lang$maxFixedArity = 2;
G__17838.cljs$lang$applyTo = G__17838__3.cljs$lang$applyTo;
return G__17838;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__17841__delegate = function (args){
return x;
};
var G__17841 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17841__delegate.call(this, args);
};
G__17841.cljs$lang$maxFixedArity = 0;
G__17841.cljs$lang$applyTo = (function (arglist__17842){
var args = cljs.core.seq(arglist__17842);;
return G__17841__delegate(args);
});
G__17841.cljs$lang$arity$variadic = G__17841__delegate;
return G__17841;
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
var G__17849 = null;
var G__17849__0 = (function (){
return f.call(null,g.call(null));
});
var G__17849__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__17849__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__17849__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__17849__4 = (function() { 
var G__17850__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__17850 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17850__delegate.call(this, x, y, z, args);
};
G__17850.cljs$lang$maxFixedArity = 3;
G__17850.cljs$lang$applyTo = (function (arglist__17851){
var x = cljs.core.first(arglist__17851);
var y = cljs.core.first(cljs.core.next(arglist__17851));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17851)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17851)));
return G__17850__delegate(x, y, z, args);
});
G__17850.cljs$lang$arity$variadic = G__17850__delegate;
return G__17850;
})()
;
G__17849 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17849__0.call(this);
case 1:
return G__17849__1.call(this,x);
case 2:
return G__17849__2.call(this,x,y);
case 3:
return G__17849__3.call(this,x,y,z);
default:
return G__17849__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17849.cljs$lang$maxFixedArity = 3;
G__17849.cljs$lang$applyTo = G__17849__4.cljs$lang$applyTo;
return G__17849;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__17852 = null;
var G__17852__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__17852__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__17852__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__17852__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__17852__4 = (function() { 
var G__17853__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__17853 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17853__delegate.call(this, x, y, z, args);
};
G__17853.cljs$lang$maxFixedArity = 3;
G__17853.cljs$lang$applyTo = (function (arglist__17854){
var x = cljs.core.first(arglist__17854);
var y = cljs.core.first(cljs.core.next(arglist__17854));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17854)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17854)));
return G__17853__delegate(x, y, z, args);
});
G__17853.cljs$lang$arity$variadic = G__17853__delegate;
return G__17853;
})()
;
G__17852 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17852__0.call(this);
case 1:
return G__17852__1.call(this,x);
case 2:
return G__17852__2.call(this,x,y);
case 3:
return G__17852__3.call(this,x,y,z);
default:
return G__17852__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17852.cljs$lang$maxFixedArity = 3;
G__17852.cljs$lang$applyTo = G__17852__4.cljs$lang$applyTo;
return G__17852;
})()
});
var comp__4 = (function() { 
var G__17855__delegate = function (f1,f2,f3,fs){
var fs__17846 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__17856__delegate = function (args){
var ret__17847 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__17846),args);
var fs__17848 = cljs.core.next.call(null,fs__17846);
while(true){
if(fs__17848)
{{
var G__17857 = cljs.core.first.call(null,fs__17848).call(null,ret__17847);
var G__17858 = cljs.core.next.call(null,fs__17848);
ret__17847 = G__17857;
fs__17848 = G__17858;
continue;
}
} else
{return ret__17847;
}
break;
}
};
var G__17856 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17856__delegate.call(this, args);
};
G__17856.cljs$lang$maxFixedArity = 0;
G__17856.cljs$lang$applyTo = (function (arglist__17859){
var args = cljs.core.seq(arglist__17859);;
return G__17856__delegate(args);
});
G__17856.cljs$lang$arity$variadic = G__17856__delegate;
return G__17856;
})()
;
};
var G__17855 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17855__delegate.call(this, f1, f2, f3, fs);
};
G__17855.cljs$lang$maxFixedArity = 3;
G__17855.cljs$lang$applyTo = (function (arglist__17860){
var f1 = cljs.core.first(arglist__17860);
var f2 = cljs.core.first(cljs.core.next(arglist__17860));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17860)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17860)));
return G__17855__delegate(f1, f2, f3, fs);
});
G__17855.cljs$lang$arity$variadic = G__17855__delegate;
return G__17855;
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
var G__17861__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__17861 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17861__delegate.call(this, args);
};
G__17861.cljs$lang$maxFixedArity = 0;
G__17861.cljs$lang$applyTo = (function (arglist__17862){
var args = cljs.core.seq(arglist__17862);;
return G__17861__delegate(args);
});
G__17861.cljs$lang$arity$variadic = G__17861__delegate;
return G__17861;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__17863__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__17863 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17863__delegate.call(this, args);
};
G__17863.cljs$lang$maxFixedArity = 0;
G__17863.cljs$lang$applyTo = (function (arglist__17864){
var args = cljs.core.seq(arglist__17864);;
return G__17863__delegate(args);
});
G__17863.cljs$lang$arity$variadic = G__17863__delegate;
return G__17863;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__17865__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__17865 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17865__delegate.call(this, args);
};
G__17865.cljs$lang$maxFixedArity = 0;
G__17865.cljs$lang$applyTo = (function (arglist__17866){
var args = cljs.core.seq(arglist__17866);;
return G__17865__delegate(args);
});
G__17865.cljs$lang$arity$variadic = G__17865__delegate;
return G__17865;
})()
;
});
var partial__5 = (function() { 
var G__17867__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__17868__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__17868 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17868__delegate.call(this, args);
};
G__17868.cljs$lang$maxFixedArity = 0;
G__17868.cljs$lang$applyTo = (function (arglist__17869){
var args = cljs.core.seq(arglist__17869);;
return G__17868__delegate(args);
});
G__17868.cljs$lang$arity$variadic = G__17868__delegate;
return G__17868;
})()
;
};
var G__17867 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__17867__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__17867.cljs$lang$maxFixedArity = 4;
G__17867.cljs$lang$applyTo = (function (arglist__17870){
var f = cljs.core.first(arglist__17870);
var arg1 = cljs.core.first(cljs.core.next(arglist__17870));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17870)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17870))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17870))));
return G__17867__delegate(f, arg1, arg2, arg3, more);
});
G__17867.cljs$lang$arity$variadic = G__17867__delegate;
return G__17867;
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
var G__17871 = null;
var G__17871__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__17871__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__17871__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__17871__4 = (function() { 
var G__17872__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__17872 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17872__delegate.call(this, a, b, c, ds);
};
G__17872.cljs$lang$maxFixedArity = 3;
G__17872.cljs$lang$applyTo = (function (arglist__17873){
var a = cljs.core.first(arglist__17873);
var b = cljs.core.first(cljs.core.next(arglist__17873));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17873)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17873)));
return G__17872__delegate(a, b, c, ds);
});
G__17872.cljs$lang$arity$variadic = G__17872__delegate;
return G__17872;
})()
;
G__17871 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__17871__1.call(this,a);
case 2:
return G__17871__2.call(this,a,b);
case 3:
return G__17871__3.call(this,a,b,c);
default:
return G__17871__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17871.cljs$lang$maxFixedArity = 3;
G__17871.cljs$lang$applyTo = G__17871__4.cljs$lang$applyTo;
return G__17871;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__17874 = null;
var G__17874__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__17874__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__17874__4 = (function() { 
var G__17875__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__17875 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17875__delegate.call(this, a, b, c, ds);
};
G__17875.cljs$lang$maxFixedArity = 3;
G__17875.cljs$lang$applyTo = (function (arglist__17876){
var a = cljs.core.first(arglist__17876);
var b = cljs.core.first(cljs.core.next(arglist__17876));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17876)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17876)));
return G__17875__delegate(a, b, c, ds);
});
G__17875.cljs$lang$arity$variadic = G__17875__delegate;
return G__17875;
})()
;
G__17874 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__17874__2.call(this,a,b);
case 3:
return G__17874__3.call(this,a,b,c);
default:
return G__17874__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17874.cljs$lang$maxFixedArity = 3;
G__17874.cljs$lang$applyTo = G__17874__4.cljs$lang$applyTo;
return G__17874;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__17877 = null;
var G__17877__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__17877__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__17877__4 = (function() { 
var G__17878__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__17878 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17878__delegate.call(this, a, b, c, ds);
};
G__17878.cljs$lang$maxFixedArity = 3;
G__17878.cljs$lang$applyTo = (function (arglist__17879){
var a = cljs.core.first(arglist__17879);
var b = cljs.core.first(cljs.core.next(arglist__17879));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17879)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17879)));
return G__17878__delegate(a, b, c, ds);
});
G__17878.cljs$lang$arity$variadic = G__17878__delegate;
return G__17878;
})()
;
G__17877 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__17877__2.call(this,a,b);
case 3:
return G__17877__3.call(this,a,b,c);
default:
return G__17877__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17877.cljs$lang$maxFixedArity = 3;
G__17877.cljs$lang$applyTo = G__17877__4.cljs$lang$applyTo;
return G__17877;
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
var mapi__17895 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____17903 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17903)
{var s__17904 = temp__3974__auto____17903;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17904))
{var c__17905 = cljs.core.chunk_first.call(null,s__17904);
var size__17906 = cljs.core.count.call(null,c__17905);
var b__17907 = cljs.core.chunk_buffer.call(null,size__17906);
var n__2396__auto____17908 = size__17906;
var i__17909 = 0;
while(true){
if((i__17909 < n__2396__auto____17908))
{cljs.core.chunk_append.call(null,b__17907,f.call(null,(idx + i__17909),cljs.core._nth.call(null,c__17905,i__17909)));
{
var G__17910 = (i__17909 + 1);
i__17909 = G__17910;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17907),mapi.call(null,(idx + size__17906),cljs.core.chunk_rest.call(null,s__17904)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__17904)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__17904)));
}
} else
{return null;
}
}),null));
});
return mapi__17895.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____17920 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17920)
{var s__17921 = temp__3974__auto____17920;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17921))
{var c__17922 = cljs.core.chunk_first.call(null,s__17921);
var size__17923 = cljs.core.count.call(null,c__17922);
var b__17924 = cljs.core.chunk_buffer.call(null,size__17923);
var n__2396__auto____17925 = size__17923;
var i__17926 = 0;
while(true){
if((i__17926 < n__2396__auto____17925))
{var x__17927 = f.call(null,cljs.core._nth.call(null,c__17922,i__17926));
if((x__17927 == null))
{} else
{cljs.core.chunk_append.call(null,b__17924,x__17927);
}
{
var G__17929 = (i__17926 + 1);
i__17926 = G__17929;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17924),keep.call(null,f,cljs.core.chunk_rest.call(null,s__17921)));
} else
{var x__17928 = f.call(null,cljs.core.first.call(null,s__17921));
if((x__17928 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__17921));
} else
{return cljs.core.cons.call(null,x__17928,keep.call(null,f,cljs.core.rest.call(null,s__17921)));
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
var keepi__17955 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____17965 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17965)
{var s__17966 = temp__3974__auto____17965;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17966))
{var c__17967 = cljs.core.chunk_first.call(null,s__17966);
var size__17968 = cljs.core.count.call(null,c__17967);
var b__17969 = cljs.core.chunk_buffer.call(null,size__17968);
var n__2396__auto____17970 = size__17968;
var i__17971 = 0;
while(true){
if((i__17971 < n__2396__auto____17970))
{var x__17972 = f.call(null,(idx + i__17971),cljs.core._nth.call(null,c__17967,i__17971));
if((x__17972 == null))
{} else
{cljs.core.chunk_append.call(null,b__17969,x__17972);
}
{
var G__17974 = (i__17971 + 1);
i__17971 = G__17974;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17969),keepi.call(null,(idx + size__17968),cljs.core.chunk_rest.call(null,s__17966)));
} else
{var x__17973 = f.call(null,idx,cljs.core.first.call(null,s__17966));
if((x__17973 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__17966));
} else
{return cljs.core.cons.call(null,x__17973,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__17966)));
}
}
} else
{return null;
}
}),null));
});
return keepi__17955.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18060 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____18060))
{return p.call(null,y);
} else
{return and__3822__auto____18060;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18061 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____18061))
{var and__3822__auto____18062 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____18062))
{return p.call(null,z);
} else
{return and__3822__auto____18062;
}
} else
{return and__3822__auto____18061;
}
})());
});
var ep1__4 = (function() { 
var G__18131__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18063 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____18063))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____18063;
}
})());
};
var G__18131 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18131__delegate.call(this, x, y, z, args);
};
G__18131.cljs$lang$maxFixedArity = 3;
G__18131.cljs$lang$applyTo = (function (arglist__18132){
var x = cljs.core.first(arglist__18132);
var y = cljs.core.first(cljs.core.next(arglist__18132));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18132)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18132)));
return G__18131__delegate(x, y, z, args);
});
G__18131.cljs$lang$arity$variadic = G__18131__delegate;
return G__18131;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18075 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18075))
{return p2.call(null,x);
} else
{return and__3822__auto____18075;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18076 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18076))
{var and__3822__auto____18077 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____18077))
{var and__3822__auto____18078 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____18078))
{return p2.call(null,y);
} else
{return and__3822__auto____18078;
}
} else
{return and__3822__auto____18077;
}
} else
{return and__3822__auto____18076;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18079 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18079))
{var and__3822__auto____18080 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____18080))
{var and__3822__auto____18081 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____18081))
{var and__3822__auto____18082 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____18082))
{var and__3822__auto____18083 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____18083))
{return p2.call(null,z);
} else
{return and__3822__auto____18083;
}
} else
{return and__3822__auto____18082;
}
} else
{return and__3822__auto____18081;
}
} else
{return and__3822__auto____18080;
}
} else
{return and__3822__auto____18079;
}
})());
});
var ep2__4 = (function() { 
var G__18133__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18084 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____18084))
{return cljs.core.every_QMARK_.call(null,(function (p1__17930_SHARP_){
var and__3822__auto____18085 = p1.call(null,p1__17930_SHARP_);
if(cljs.core.truth_(and__3822__auto____18085))
{return p2.call(null,p1__17930_SHARP_);
} else
{return and__3822__auto____18085;
}
}),args);
} else
{return and__3822__auto____18084;
}
})());
};
var G__18133 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18133__delegate.call(this, x, y, z, args);
};
G__18133.cljs$lang$maxFixedArity = 3;
G__18133.cljs$lang$applyTo = (function (arglist__18134){
var x = cljs.core.first(arglist__18134);
var y = cljs.core.first(cljs.core.next(arglist__18134));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18134)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18134)));
return G__18133__delegate(x, y, z, args);
});
G__18133.cljs$lang$arity$variadic = G__18133__delegate;
return G__18133;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18104 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18104))
{var and__3822__auto____18105 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____18105))
{return p3.call(null,x);
} else
{return and__3822__auto____18105;
}
} else
{return and__3822__auto____18104;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18106 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18106))
{var and__3822__auto____18107 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____18107))
{var and__3822__auto____18108 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____18108))
{var and__3822__auto____18109 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____18109))
{var and__3822__auto____18110 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____18110))
{return p3.call(null,y);
} else
{return and__3822__auto____18110;
}
} else
{return and__3822__auto____18109;
}
} else
{return and__3822__auto____18108;
}
} else
{return and__3822__auto____18107;
}
} else
{return and__3822__auto____18106;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18111 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____18111))
{var and__3822__auto____18112 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____18112))
{var and__3822__auto____18113 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____18113))
{var and__3822__auto____18114 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____18114))
{var and__3822__auto____18115 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____18115))
{var and__3822__auto____18116 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____18116))
{var and__3822__auto____18117 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____18117))
{var and__3822__auto____18118 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____18118))
{return p3.call(null,z);
} else
{return and__3822__auto____18118;
}
} else
{return and__3822__auto____18117;
}
} else
{return and__3822__auto____18116;
}
} else
{return and__3822__auto____18115;
}
} else
{return and__3822__auto____18114;
}
} else
{return and__3822__auto____18113;
}
} else
{return and__3822__auto____18112;
}
} else
{return and__3822__auto____18111;
}
})());
});
var ep3__4 = (function() { 
var G__18135__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18119 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____18119))
{return cljs.core.every_QMARK_.call(null,(function (p1__17931_SHARP_){
var and__3822__auto____18120 = p1.call(null,p1__17931_SHARP_);
if(cljs.core.truth_(and__3822__auto____18120))
{var and__3822__auto____18121 = p2.call(null,p1__17931_SHARP_);
if(cljs.core.truth_(and__3822__auto____18121))
{return p3.call(null,p1__17931_SHARP_);
} else
{return and__3822__auto____18121;
}
} else
{return and__3822__auto____18120;
}
}),args);
} else
{return and__3822__auto____18119;
}
})());
};
var G__18135 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18135__delegate.call(this, x, y, z, args);
};
G__18135.cljs$lang$maxFixedArity = 3;
G__18135.cljs$lang$applyTo = (function (arglist__18136){
var x = cljs.core.first(arglist__18136);
var y = cljs.core.first(cljs.core.next(arglist__18136));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18136)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18136)));
return G__18135__delegate(x, y, z, args);
});
G__18135.cljs$lang$arity$variadic = G__18135__delegate;
return G__18135;
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
var G__18137__delegate = function (p1,p2,p3,ps){
var ps__18122 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__17932_SHARP_){
return p1__17932_SHARP_.call(null,x);
}),ps__18122);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__17933_SHARP_){
var and__3822__auto____18127 = p1__17933_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____18127))
{return p1__17933_SHARP_.call(null,y);
} else
{return and__3822__auto____18127;
}
}),ps__18122);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__17934_SHARP_){
var and__3822__auto____18128 = p1__17934_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____18128))
{var and__3822__auto____18129 = p1__17934_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____18129))
{return p1__17934_SHARP_.call(null,z);
} else
{return and__3822__auto____18129;
}
} else
{return and__3822__auto____18128;
}
}),ps__18122);
});
var epn__4 = (function() { 
var G__18138__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____18130 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____18130))
{return cljs.core.every_QMARK_.call(null,(function (p1__17935_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__17935_SHARP_,args);
}),ps__18122);
} else
{return and__3822__auto____18130;
}
})());
};
var G__18138 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18138__delegate.call(this, x, y, z, args);
};
G__18138.cljs$lang$maxFixedArity = 3;
G__18138.cljs$lang$applyTo = (function (arglist__18139){
var x = cljs.core.first(arglist__18139);
var y = cljs.core.first(cljs.core.next(arglist__18139));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18139)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18139)));
return G__18138__delegate(x, y, z, args);
});
G__18138.cljs$lang$arity$variadic = G__18138__delegate;
return G__18138;
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
var G__18137 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18137__delegate.call(this, p1, p2, p3, ps);
};
G__18137.cljs$lang$maxFixedArity = 3;
G__18137.cljs$lang$applyTo = (function (arglist__18140){
var p1 = cljs.core.first(arglist__18140);
var p2 = cljs.core.first(cljs.core.next(arglist__18140));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18140)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18140)));
return G__18137__delegate(p1, p2, p3, ps);
});
G__18137.cljs$lang$arity$variadic = G__18137__delegate;
return G__18137;
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
var or__3824__auto____18221 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____18221))
{return or__3824__auto____18221;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____18222 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____18222))
{return or__3824__auto____18222;
} else
{var or__3824__auto____18223 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____18223))
{return or__3824__auto____18223;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__18292__delegate = function (x,y,z,args){
var or__3824__auto____18224 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____18224))
{return or__3824__auto____18224;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__18292 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18292__delegate.call(this, x, y, z, args);
};
G__18292.cljs$lang$maxFixedArity = 3;
G__18292.cljs$lang$applyTo = (function (arglist__18293){
var x = cljs.core.first(arglist__18293);
var y = cljs.core.first(cljs.core.next(arglist__18293));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18293)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18293)));
return G__18292__delegate(x, y, z, args);
});
G__18292.cljs$lang$arity$variadic = G__18292__delegate;
return G__18292;
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
var or__3824__auto____18236 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18236))
{return or__3824__auto____18236;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____18237 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18237))
{return or__3824__auto____18237;
} else
{var or__3824__auto____18238 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____18238))
{return or__3824__auto____18238;
} else
{var or__3824__auto____18239 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____18239))
{return or__3824__auto____18239;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____18240 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18240))
{return or__3824__auto____18240;
} else
{var or__3824__auto____18241 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____18241))
{return or__3824__auto____18241;
} else
{var or__3824__auto____18242 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____18242))
{return or__3824__auto____18242;
} else
{var or__3824__auto____18243 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____18243))
{return or__3824__auto____18243;
} else
{var or__3824__auto____18244 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____18244))
{return or__3824__auto____18244;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__18294__delegate = function (x,y,z,args){
var or__3824__auto____18245 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____18245))
{return or__3824__auto____18245;
} else
{return cljs.core.some.call(null,(function (p1__17975_SHARP_){
var or__3824__auto____18246 = p1.call(null,p1__17975_SHARP_);
if(cljs.core.truth_(or__3824__auto____18246))
{return or__3824__auto____18246;
} else
{return p2.call(null,p1__17975_SHARP_);
}
}),args);
}
};
var G__18294 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18294__delegate.call(this, x, y, z, args);
};
G__18294.cljs$lang$maxFixedArity = 3;
G__18294.cljs$lang$applyTo = (function (arglist__18295){
var x = cljs.core.first(arglist__18295);
var y = cljs.core.first(cljs.core.next(arglist__18295));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18295)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18295)));
return G__18294__delegate(x, y, z, args);
});
G__18294.cljs$lang$arity$variadic = G__18294__delegate;
return G__18294;
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
var or__3824__auto____18265 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18265))
{return or__3824__auto____18265;
} else
{var or__3824__auto____18266 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____18266))
{return or__3824__auto____18266;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____18267 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18267))
{return or__3824__auto____18267;
} else
{var or__3824__auto____18268 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____18268))
{return or__3824__auto____18268;
} else
{var or__3824__auto____18269 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____18269))
{return or__3824__auto____18269;
} else
{var or__3824__auto____18270 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____18270))
{return or__3824__auto____18270;
} else
{var or__3824__auto____18271 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____18271))
{return or__3824__auto____18271;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____18272 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____18272))
{return or__3824__auto____18272;
} else
{var or__3824__auto____18273 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____18273))
{return or__3824__auto____18273;
} else
{var or__3824__auto____18274 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____18274))
{return or__3824__auto____18274;
} else
{var or__3824__auto____18275 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____18275))
{return or__3824__auto____18275;
} else
{var or__3824__auto____18276 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____18276))
{return or__3824__auto____18276;
} else
{var or__3824__auto____18277 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____18277))
{return or__3824__auto____18277;
} else
{var or__3824__auto____18278 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____18278))
{return or__3824__auto____18278;
} else
{var or__3824__auto____18279 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____18279))
{return or__3824__auto____18279;
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
var G__18296__delegate = function (x,y,z,args){
var or__3824__auto____18280 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____18280))
{return or__3824__auto____18280;
} else
{return cljs.core.some.call(null,(function (p1__17976_SHARP_){
var or__3824__auto____18281 = p1.call(null,p1__17976_SHARP_);
if(cljs.core.truth_(or__3824__auto____18281))
{return or__3824__auto____18281;
} else
{var or__3824__auto____18282 = p2.call(null,p1__17976_SHARP_);
if(cljs.core.truth_(or__3824__auto____18282))
{return or__3824__auto____18282;
} else
{return p3.call(null,p1__17976_SHARP_);
}
}
}),args);
}
};
var G__18296 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18296__delegate.call(this, x, y, z, args);
};
G__18296.cljs$lang$maxFixedArity = 3;
G__18296.cljs$lang$applyTo = (function (arglist__18297){
var x = cljs.core.first(arglist__18297);
var y = cljs.core.first(cljs.core.next(arglist__18297));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18297)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18297)));
return G__18296__delegate(x, y, z, args);
});
G__18296.cljs$lang$arity$variadic = G__18296__delegate;
return G__18296;
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
var G__18298__delegate = function (p1,p2,p3,ps){
var ps__18283 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__17977_SHARP_){
return p1__17977_SHARP_.call(null,x);
}),ps__18283);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__17978_SHARP_){
var or__3824__auto____18288 = p1__17978_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____18288))
{return or__3824__auto____18288;
} else
{return p1__17978_SHARP_.call(null,y);
}
}),ps__18283);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__17979_SHARP_){
var or__3824__auto____18289 = p1__17979_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____18289))
{return or__3824__auto____18289;
} else
{var or__3824__auto____18290 = p1__17979_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____18290))
{return or__3824__auto____18290;
} else
{return p1__17979_SHARP_.call(null,z);
}
}
}),ps__18283);
});
var spn__4 = (function() { 
var G__18299__delegate = function (x,y,z,args){
var or__3824__auto____18291 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____18291))
{return or__3824__auto____18291;
} else
{return cljs.core.some.call(null,(function (p1__17980_SHARP_){
return cljs.core.some.call(null,p1__17980_SHARP_,args);
}),ps__18283);
}
};
var G__18299 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18299__delegate.call(this, x, y, z, args);
};
G__18299.cljs$lang$maxFixedArity = 3;
G__18299.cljs$lang$applyTo = (function (arglist__18300){
var x = cljs.core.first(arglist__18300);
var y = cljs.core.first(cljs.core.next(arglist__18300));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18300)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18300)));
return G__18299__delegate(x, y, z, args);
});
G__18299.cljs$lang$arity$variadic = G__18299__delegate;
return G__18299;
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
var G__18298 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18298__delegate.call(this, p1, p2, p3, ps);
};
G__18298.cljs$lang$maxFixedArity = 3;
G__18298.cljs$lang$applyTo = (function (arglist__18301){
var p1 = cljs.core.first(arglist__18301);
var p2 = cljs.core.first(cljs.core.next(arglist__18301));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18301)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18301)));
return G__18298__delegate(p1, p2, p3, ps);
});
G__18298.cljs$lang$arity$variadic = G__18298__delegate;
return G__18298;
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
var temp__3974__auto____18320 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18320)
{var s__18321 = temp__3974__auto____18320;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18321))
{var c__18322 = cljs.core.chunk_first.call(null,s__18321);
var size__18323 = cljs.core.count.call(null,c__18322);
var b__18324 = cljs.core.chunk_buffer.call(null,size__18323);
var n__2396__auto____18325 = size__18323;
var i__18326 = 0;
while(true){
if((i__18326 < n__2396__auto____18325))
{cljs.core.chunk_append.call(null,b__18324,f.call(null,cljs.core._nth.call(null,c__18322,i__18326)));
{
var G__18338 = (i__18326 + 1);
i__18326 = G__18338;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18324),map.call(null,f,cljs.core.chunk_rest.call(null,s__18321)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__18321)),map.call(null,f,cljs.core.rest.call(null,s__18321)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__18327 = cljs.core.seq.call(null,c1);
var s2__18328 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____18329 = s1__18327;
if(and__3822__auto____18329)
{return s2__18328;
} else
{return and__3822__auto____18329;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__18327),cljs.core.first.call(null,s2__18328)),map.call(null,f,cljs.core.rest.call(null,s1__18327),cljs.core.rest.call(null,s2__18328)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__18330 = cljs.core.seq.call(null,c1);
var s2__18331 = cljs.core.seq.call(null,c2);
var s3__18332 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____18333 = s1__18330;
if(and__3822__auto____18333)
{var and__3822__auto____18334 = s2__18331;
if(and__3822__auto____18334)
{return s3__18332;
} else
{return and__3822__auto____18334;
}
} else
{return and__3822__auto____18333;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__18330),cljs.core.first.call(null,s2__18331),cljs.core.first.call(null,s3__18332)),map.call(null,f,cljs.core.rest.call(null,s1__18330),cljs.core.rest.call(null,s2__18331),cljs.core.rest.call(null,s3__18332)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__18339__delegate = function (f,c1,c2,c3,colls){
var step__18337 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__18336 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__18336))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__18336),step.call(null,map.call(null,cljs.core.rest,ss__18336)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__18141_SHARP_){
return cljs.core.apply.call(null,f,p1__18141_SHARP_);
}),step__18337.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__18339 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__18339__delegate.call(this, f, c1, c2, c3, colls);
};
G__18339.cljs$lang$maxFixedArity = 4;
G__18339.cljs$lang$applyTo = (function (arglist__18340){
var f = cljs.core.first(arglist__18340);
var c1 = cljs.core.first(cljs.core.next(arglist__18340));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18340)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18340))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18340))));
return G__18339__delegate(f, c1, c2, c3, colls);
});
G__18339.cljs$lang$arity$variadic = G__18339__delegate;
return G__18339;
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
{var temp__3974__auto____18343 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18343)
{var s__18344 = temp__3974__auto____18343;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__18344),take.call(null,(n - 1),cljs.core.rest.call(null,s__18344)));
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
var step__18350 = (function (n,coll){
while(true){
var s__18348 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____18349 = (n > 0);
if(and__3822__auto____18349)
{return s__18348;
} else
{return and__3822__auto____18349;
}
})()))
{{
var G__18351 = (n - 1);
var G__18352 = cljs.core.rest.call(null,s__18348);
n = G__18351;
coll = G__18352;
continue;
}
} else
{return s__18348;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__18350.call(null,n,coll);
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
var s__18355 = cljs.core.seq.call(null,coll);
var lead__18356 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__18356)
{{
var G__18357 = cljs.core.next.call(null,s__18355);
var G__18358 = cljs.core.next.call(null,lead__18356);
s__18355 = G__18357;
lead__18356 = G__18358;
continue;
}
} else
{return s__18355;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__18364 = (function (pred,coll){
while(true){
var s__18362 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____18363 = s__18362;
if(and__3822__auto____18363)
{return pred.call(null,cljs.core.first.call(null,s__18362));
} else
{return and__3822__auto____18363;
}
})()))
{{
var G__18365 = pred;
var G__18366 = cljs.core.rest.call(null,s__18362);
pred = G__18365;
coll = G__18366;
continue;
}
} else
{return s__18362;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__18364.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____18369 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18369)
{var s__18370 = temp__3974__auto____18369;
return cljs.core.concat.call(null,s__18370,cycle.call(null,s__18370));
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
var s1__18375 = cljs.core.seq.call(null,c1);
var s2__18376 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____18377 = s1__18375;
if(and__3822__auto____18377)
{return s2__18376;
} else
{return and__3822__auto____18377;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__18375),cljs.core.cons.call(null,cljs.core.first.call(null,s2__18376),interleave.call(null,cljs.core.rest.call(null,s1__18375),cljs.core.rest.call(null,s2__18376))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__18379__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__18378 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__18378))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__18378),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__18378)));
} else
{return null;
}
}),null));
};
var G__18379 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18379__delegate.call(this, c1, c2, colls);
};
G__18379.cljs$lang$maxFixedArity = 2;
G__18379.cljs$lang$applyTo = (function (arglist__18380){
var c1 = cljs.core.first(arglist__18380);
var c2 = cljs.core.first(cljs.core.next(arglist__18380));
var colls = cljs.core.rest(cljs.core.next(arglist__18380));
return G__18379__delegate(c1, c2, colls);
});
G__18379.cljs$lang$arity$variadic = G__18379__delegate;
return G__18379;
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
var cat__18390 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____18388 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____18388)
{var coll__18389 = temp__3971__auto____18388;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__18389),cat.call(null,cljs.core.rest.call(null,coll__18389),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__18390.call(null,null,colls);
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
var G__18391__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__18391 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18391__delegate.call(this, f, coll, colls);
};
G__18391.cljs$lang$maxFixedArity = 2;
G__18391.cljs$lang$applyTo = (function (arglist__18392){
var f = cljs.core.first(arglist__18392);
var coll = cljs.core.first(cljs.core.next(arglist__18392));
var colls = cljs.core.rest(cljs.core.next(arglist__18392));
return G__18391__delegate(f, coll, colls);
});
G__18391.cljs$lang$arity$variadic = G__18391__delegate;
return G__18391;
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
var temp__3974__auto____18402 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18402)
{var s__18403 = temp__3974__auto____18402;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18403))
{var c__18404 = cljs.core.chunk_first.call(null,s__18403);
var size__18405 = cljs.core.count.call(null,c__18404);
var b__18406 = cljs.core.chunk_buffer.call(null,size__18405);
var n__2396__auto____18407 = size__18405;
var i__18408 = 0;
while(true){
if((i__18408 < n__2396__auto____18407))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__18404,i__18408))))
{cljs.core.chunk_append.call(null,b__18406,cljs.core._nth.call(null,c__18404,i__18408));
} else
{}
{
var G__18411 = (i__18408 + 1);
i__18408 = G__18411;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18406),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__18403)));
} else
{var f__18409 = cljs.core.first.call(null,s__18403);
var r__18410 = cljs.core.rest.call(null,s__18403);
if(cljs.core.truth_(pred.call(null,f__18409)))
{return cljs.core.cons.call(null,f__18409,filter.call(null,pred,r__18410));
} else
{return filter.call(null,pred,r__18410);
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
var walk__18414 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__18414.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__18412_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__18412_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__18418__18419 = to;
if(G__18418__18419)
{if((function (){var or__3824__auto____18420 = (G__18418__18419.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____18420)
{return or__3824__auto____18420;
} else
{return G__18418__18419.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__18418__18419.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__18418__18419);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__18418__18419);
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
var G__18421__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__18421 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__18421__delegate.call(this, f, c1, c2, c3, colls);
};
G__18421.cljs$lang$maxFixedArity = 4;
G__18421.cljs$lang$applyTo = (function (arglist__18422){
var f = cljs.core.first(arglist__18422);
var c1 = cljs.core.first(cljs.core.next(arglist__18422));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18422)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18422))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18422))));
return G__18421__delegate(f, c1, c2, c3, colls);
});
G__18421.cljs$lang$arity$variadic = G__18421__delegate;
return G__18421;
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
var temp__3974__auto____18429 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18429)
{var s__18430 = temp__3974__auto____18429;
var p__18431 = cljs.core.take.call(null,n,s__18430);
if((n === cljs.core.count.call(null,p__18431)))
{return cljs.core.cons.call(null,p__18431,partition.call(null,n,step,cljs.core.drop.call(null,step,s__18430)));
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
var temp__3974__auto____18432 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____18432)
{var s__18433 = temp__3974__auto____18432;
var p__18434 = cljs.core.take.call(null,n,s__18433);
if((n === cljs.core.count.call(null,p__18434)))
{return cljs.core.cons.call(null,p__18434,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__18433)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__18434,pad)));
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
var sentinel__18439 = cljs.core.lookup_sentinel;
var m__18440 = m;
var ks__18441 = cljs.core.seq.call(null,ks);
while(true){
if(ks__18441)
{var m__18442 = cljs.core._lookup.call(null,m__18440,cljs.core.first.call(null,ks__18441),sentinel__18439);
if((sentinel__18439 === m__18442))
{return not_found;
} else
{{
var G__18443 = sentinel__18439;
var G__18444 = m__18442;
var G__18445 = cljs.core.next.call(null,ks__18441);
sentinel__18439 = G__18443;
m__18440 = G__18444;
ks__18441 = G__18445;
continue;
}
}
} else
{return m__18440;
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
cljs.core.assoc_in = (function assoc_in(m,p__18446,v){
var vec__18451__18452 = p__18446;
var k__18453 = cljs.core.nth.call(null,vec__18451__18452,0,null);
var ks__18454 = cljs.core.nthnext.call(null,vec__18451__18452,1);
if(cljs.core.truth_(ks__18454))
{return cljs.core.assoc.call(null,m,k__18453,assoc_in.call(null,cljs.core._lookup.call(null,m,k__18453,null),ks__18454,v));
} else
{return cljs.core.assoc.call(null,m,k__18453,v);
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
var update_in__delegate = function (m,p__18455,f,args){
var vec__18460__18461 = p__18455;
var k__18462 = cljs.core.nth.call(null,vec__18460__18461,0,null);
var ks__18463 = cljs.core.nthnext.call(null,vec__18460__18461,1);
if(cljs.core.truth_(ks__18463))
{return cljs.core.assoc.call(null,m,k__18462,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__18462,null),ks__18463,f,args));
} else
{return cljs.core.assoc.call(null,m,k__18462,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__18462,null),args));
}
};
var update_in = function (m,p__18455,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__18455, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__18464){
var m = cljs.core.first(arglist__18464);
var p__18455 = cljs.core.first(cljs.core.next(arglist__18464));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18464)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18464)));
return update_in__delegate(m, p__18455, f, args);
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
var this__18467 = this;
var h__2057__auto____18468 = this__18467.__hash;
if(!((h__2057__auto____18468 == null)))
{return h__2057__auto____18468;
} else
{var h__2057__auto____18469 = cljs.core.hash_coll.call(null,coll);
this__18467.__hash = h__2057__auto____18469;
return h__2057__auto____18469;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18470 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18471 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__18472 = this;
var new_array__18473 = this__18472.array.slice();
(new_array__18473[k] = v);
return (new cljs.core.Vector(this__18472.meta,new_array__18473,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__18504 = null;
var G__18504__2 = (function (this_sym18474,k){
var this__18476 = this;
var this_sym18474__18477 = this;
var coll__18478 = this_sym18474__18477;
return coll__18478.cljs$core$ILookup$_lookup$arity$2(coll__18478,k);
});
var G__18504__3 = (function (this_sym18475,k,not_found){
var this__18476 = this;
var this_sym18475__18479 = this;
var coll__18480 = this_sym18475__18479;
return coll__18480.cljs$core$ILookup$_lookup$arity$3(coll__18480,k,not_found);
});
G__18504 = function(this_sym18475,k,not_found){
switch(arguments.length){
case 2:
return G__18504__2.call(this,this_sym18475,k);
case 3:
return G__18504__3.call(this,this_sym18475,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18504;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym18465,args18466){
var this__18481 = this;
return this_sym18465.call.apply(this_sym18465,[this_sym18465].concat(args18466.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18482 = this;
var new_array__18483 = this__18482.array.slice();
new_array__18483.push(o);
return (new cljs.core.Vector(this__18482.meta,new_array__18483,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__18484 = this;
var this__18485 = this;
return cljs.core.pr_str.call(null,this__18485);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__18486 = this;
return cljs.core.ci_reduce.call(null,this__18486.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__18487 = this;
return cljs.core.ci_reduce.call(null,this__18487.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18488 = this;
if((this__18488.array.length > 0))
{var vector_seq__18489 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__18488.array.length))
{return cljs.core.cons.call(null,(this__18488.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__18489.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18490 = this;
return this__18490.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18491 = this;
var count__18492 = this__18491.array.length;
if((count__18492 > 0))
{return (this__18491.array[(count__18492 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18493 = this;
if((this__18493.array.length > 0))
{var new_array__18494 = this__18493.array.slice();
new_array__18494.pop();
return (new cljs.core.Vector(this__18493.meta,new_array__18494,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__18495 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18496 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18497 = this;
return (new cljs.core.Vector(meta,this__18497.array,this__18497.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18498 = this;
return this__18498.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__18499 = this;
if((function (){var and__3822__auto____18500 = (0 <= n);
if(and__3822__auto____18500)
{return (n < this__18499.array.length);
} else
{return and__3822__auto____18500;
}
})())
{return (this__18499.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__18501 = this;
if((function (){var and__3822__auto____18502 = (0 <= n);
if(and__3822__auto____18502)
{return (n < this__18501.array.length);
} else
{return and__3822__auto____18502;
}
})())
{return (this__18501.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18503 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__18503.meta);
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
var cnt__18506 = pv.cnt;
if((cnt__18506 < 32))
{return 0;
} else
{return (((cnt__18506 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__18512 = level;
var ret__18513 = node;
while(true){
if((ll__18512 === 0))
{return ret__18513;
} else
{var embed__18514 = ret__18513;
var r__18515 = cljs.core.pv_fresh_node.call(null,edit);
var ___18516 = cljs.core.pv_aset.call(null,r__18515,0,embed__18514);
{
var G__18517 = (ll__18512 - 5);
var G__18518 = r__18515;
ll__18512 = G__18517;
ret__18513 = G__18518;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__18524 = cljs.core.pv_clone_node.call(null,parent);
var subidx__18525 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__18524,subidx__18525,tailnode);
return ret__18524;
} else
{var child__18526 = cljs.core.pv_aget.call(null,parent,subidx__18525);
if(!((child__18526 == null)))
{var node_to_insert__18527 = push_tail.call(null,pv,(level - 5),child__18526,tailnode);
cljs.core.pv_aset.call(null,ret__18524,subidx__18525,node_to_insert__18527);
return ret__18524;
} else
{var node_to_insert__18528 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__18524,subidx__18525,node_to_insert__18528);
return ret__18524;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____18532 = (0 <= i);
if(and__3822__auto____18532)
{return (i < pv.cnt);
} else
{return and__3822__auto____18532;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__18533 = pv.root;
var level__18534 = pv.shift;
while(true){
if((level__18534 > 0))
{{
var G__18535 = cljs.core.pv_aget.call(null,node__18533,((i >>> level__18534) & 31));
var G__18536 = (level__18534 - 5);
node__18533 = G__18535;
level__18534 = G__18536;
continue;
}
} else
{return node__18533.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__18539 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__18539,(i & 31),val);
return ret__18539;
} else
{var subidx__18540 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__18539,subidx__18540,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__18540),i,val));
return ret__18539;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__18546 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__18547 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__18546));
if((function (){var and__3822__auto____18548 = (new_child__18547 == null);
if(and__3822__auto____18548)
{return (subidx__18546 === 0);
} else
{return and__3822__auto____18548;
}
})())
{return null;
} else
{var ret__18549 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__18549,subidx__18546,new_child__18547);
return ret__18549;
}
} else
{if((subidx__18546 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__18550 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__18550,subidx__18546,null);
return ret__18550;
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
var this__18553 = this;
return (new cljs.core.TransientVector(this__18553.cnt,this__18553.shift,cljs.core.tv_editable_root.call(null,this__18553.root),cljs.core.tv_editable_tail.call(null,this__18553.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18554 = this;
var h__2057__auto____18555 = this__18554.__hash;
if(!((h__2057__auto____18555 == null)))
{return h__2057__auto____18555;
} else
{var h__2057__auto____18556 = cljs.core.hash_coll.call(null,coll);
this__18554.__hash = h__2057__auto____18556;
return h__2057__auto____18556;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18557 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18558 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__18559 = this;
if((function (){var and__3822__auto____18560 = (0 <= k);
if(and__3822__auto____18560)
{return (k < this__18559.cnt);
} else
{return and__3822__auto____18560;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__18561 = this__18559.tail.slice();
(new_tail__18561[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__18559.meta,this__18559.cnt,this__18559.shift,this__18559.root,new_tail__18561,null));
} else
{return (new cljs.core.PersistentVector(this__18559.meta,this__18559.cnt,this__18559.shift,cljs.core.do_assoc.call(null,coll,this__18559.shift,this__18559.root,k,v),this__18559.tail,null));
}
} else
{if((k === this__18559.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__18559.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__18609 = null;
var G__18609__2 = (function (this_sym18562,k){
var this__18564 = this;
var this_sym18562__18565 = this;
var coll__18566 = this_sym18562__18565;
return coll__18566.cljs$core$ILookup$_lookup$arity$2(coll__18566,k);
});
var G__18609__3 = (function (this_sym18563,k,not_found){
var this__18564 = this;
var this_sym18563__18567 = this;
var coll__18568 = this_sym18563__18567;
return coll__18568.cljs$core$ILookup$_lookup$arity$3(coll__18568,k,not_found);
});
G__18609 = function(this_sym18563,k,not_found){
switch(arguments.length){
case 2:
return G__18609__2.call(this,this_sym18563,k);
case 3:
return G__18609__3.call(this,this_sym18563,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18609;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym18551,args18552){
var this__18569 = this;
return this_sym18551.call.apply(this_sym18551,[this_sym18551].concat(args18552.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__18570 = this;
var step_init__18571 = [0,init];
var i__18572 = 0;
while(true){
if((i__18572 < this__18570.cnt))
{var arr__18573 = cljs.core.array_for.call(null,v,i__18572);
var len__18574 = arr__18573.length;
var init__18578 = (function (){var j__18575 = 0;
var init__18576 = (step_init__18571[1]);
while(true){
if((j__18575 < len__18574))
{var init__18577 = f.call(null,init__18576,(j__18575 + i__18572),(arr__18573[j__18575]));
if(cljs.core.reduced_QMARK_.call(null,init__18577))
{return init__18577;
} else
{{
var G__18610 = (j__18575 + 1);
var G__18611 = init__18577;
j__18575 = G__18610;
init__18576 = G__18611;
continue;
}
}
} else
{(step_init__18571[0] = len__18574);
(step_init__18571[1] = init__18576);
return init__18576;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__18578))
{return cljs.core.deref.call(null,init__18578);
} else
{{
var G__18612 = (i__18572 + (step_init__18571[0]));
i__18572 = G__18612;
continue;
}
}
} else
{return (step_init__18571[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18579 = this;
if(((this__18579.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__18580 = this__18579.tail.slice();
new_tail__18580.push(o);
return (new cljs.core.PersistentVector(this__18579.meta,(this__18579.cnt + 1),this__18579.shift,this__18579.root,new_tail__18580,null));
} else
{var root_overflow_QMARK___18581 = ((this__18579.cnt >>> 5) > (1 << this__18579.shift));
var new_shift__18582 = ((root_overflow_QMARK___18581)?(this__18579.shift + 5):this__18579.shift);
var new_root__18584 = ((root_overflow_QMARK___18581)?(function (){var n_r__18583 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__18583,0,this__18579.root);
cljs.core.pv_aset.call(null,n_r__18583,1,cljs.core.new_path.call(null,null,this__18579.shift,(new cljs.core.VectorNode(null,this__18579.tail))));
return n_r__18583;
})():cljs.core.push_tail.call(null,coll,this__18579.shift,this__18579.root,(new cljs.core.VectorNode(null,this__18579.tail))));
return (new cljs.core.PersistentVector(this__18579.meta,(this__18579.cnt + 1),new_shift__18582,new_root__18584,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__18585 = this;
if((this__18585.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__18585.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__18586 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__18587 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__18588 = this;
var this__18589 = this;
return cljs.core.pr_str.call(null,this__18589);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__18590 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__18591 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18592 = this;
if((this__18592.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18593 = this;
return this__18593.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18594 = this;
if((this__18594.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__18594.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18595 = this;
if((this__18595.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__18595.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__18595.meta);
} else
{if((1 < (this__18595.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__18595.meta,(this__18595.cnt - 1),this__18595.shift,this__18595.root,this__18595.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__18596 = cljs.core.array_for.call(null,coll,(this__18595.cnt - 2));
var nr__18597 = cljs.core.pop_tail.call(null,coll,this__18595.shift,this__18595.root);
var new_root__18598 = (((nr__18597 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__18597);
var cnt_1__18599 = (this__18595.cnt - 1);
if((function (){var and__3822__auto____18600 = (5 < this__18595.shift);
if(and__3822__auto____18600)
{return (cljs.core.pv_aget.call(null,new_root__18598,1) == null);
} else
{return and__3822__auto____18600;
}
})())
{return (new cljs.core.PersistentVector(this__18595.meta,cnt_1__18599,(this__18595.shift - 5),cljs.core.pv_aget.call(null,new_root__18598,0),new_tail__18596,null));
} else
{return (new cljs.core.PersistentVector(this__18595.meta,cnt_1__18599,this__18595.shift,new_root__18598,new_tail__18596,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__18601 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18602 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18603 = this;
return (new cljs.core.PersistentVector(meta,this__18603.cnt,this__18603.shift,this__18603.root,this__18603.tail,this__18603.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18604 = this;
return this__18604.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__18605 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__18606 = this;
if((function (){var and__3822__auto____18607 = (0 <= n);
if(and__3822__auto____18607)
{return (n < this__18606.cnt);
} else
{return and__3822__auto____18607;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18608 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__18608.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__18613 = xs.length;
var xs__18614 = (((no_clone === true))?xs:xs.slice());
if((l__18613 < 32))
{return (new cljs.core.PersistentVector(null,l__18613,5,cljs.core.PersistentVector.EMPTY_NODE,xs__18614,null));
} else
{var node__18615 = xs__18614.slice(0,32);
var v__18616 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__18615,null));
var i__18617 = 32;
var out__18618 = cljs.core._as_transient.call(null,v__18616);
while(true){
if((i__18617 < l__18613))
{{
var G__18619 = (i__18617 + 1);
var G__18620 = cljs.core.conj_BANG_.call(null,out__18618,(xs__18614[i__18617]));
i__18617 = G__18619;
out__18618 = G__18620;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__18618);
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
vector.cljs$lang$applyTo = (function (arglist__18621){
var args = cljs.core.seq(arglist__18621);;
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
var this__18622 = this;
if(((this__18622.off + 1) < this__18622.node.length))
{var s__18623 = cljs.core.chunked_seq.call(null,this__18622.vec,this__18622.node,this__18622.i,(this__18622.off + 1));
if((s__18623 == null))
{return null;
} else
{return s__18623;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18624 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18625 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18626 = this;
return (this__18626.node[this__18626.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18627 = this;
if(((this__18627.off + 1) < this__18627.node.length))
{var s__18628 = cljs.core.chunked_seq.call(null,this__18627.vec,this__18627.node,this__18627.i,(this__18627.off + 1));
if((s__18628 == null))
{return cljs.core.List.EMPTY;
} else
{return s__18628;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__18629 = this;
var l__18630 = this__18629.node.length;
var s__18631 = ((((this__18629.i + l__18630) < cljs.core._count.call(null,this__18629.vec)))?cljs.core.chunked_seq.call(null,this__18629.vec,(this__18629.i + l__18630),0):null);
if((s__18631 == null))
{return null;
} else
{return s__18631;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18632 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__18633 = this;
return cljs.core.chunked_seq.call(null,this__18633.vec,this__18633.node,this__18633.i,this__18633.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__18634 = this;
return this__18634.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18635 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__18635.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__18636 = this;
return cljs.core.array_chunk.call(null,this__18636.node,this__18636.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__18637 = this;
var l__18638 = this__18637.node.length;
var s__18639 = ((((this__18637.i + l__18638) < cljs.core._count.call(null,this__18637.vec)))?cljs.core.chunked_seq.call(null,this__18637.vec,(this__18637.i + l__18638),0):null);
if((s__18639 == null))
{return cljs.core.List.EMPTY;
} else
{return s__18639;
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
var this__18642 = this;
var h__2057__auto____18643 = this__18642.__hash;
if(!((h__2057__auto____18643 == null)))
{return h__2057__auto____18643;
} else
{var h__2057__auto____18644 = cljs.core.hash_coll.call(null,coll);
this__18642.__hash = h__2057__auto____18644;
return h__2057__auto____18644;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18645 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18646 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__18647 = this;
var v_pos__18648 = (this__18647.start + key);
return (new cljs.core.Subvec(this__18647.meta,cljs.core._assoc.call(null,this__18647.v,v_pos__18648,val),this__18647.start,((this__18647.end > (v_pos__18648 + 1)) ? this__18647.end : (v_pos__18648 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__18674 = null;
var G__18674__2 = (function (this_sym18649,k){
var this__18651 = this;
var this_sym18649__18652 = this;
var coll__18653 = this_sym18649__18652;
return coll__18653.cljs$core$ILookup$_lookup$arity$2(coll__18653,k);
});
var G__18674__3 = (function (this_sym18650,k,not_found){
var this__18651 = this;
var this_sym18650__18654 = this;
var coll__18655 = this_sym18650__18654;
return coll__18655.cljs$core$ILookup$_lookup$arity$3(coll__18655,k,not_found);
});
G__18674 = function(this_sym18650,k,not_found){
switch(arguments.length){
case 2:
return G__18674__2.call(this,this_sym18650,k);
case 3:
return G__18674__3.call(this,this_sym18650,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18674;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym18640,args18641){
var this__18656 = this;
return this_sym18640.call.apply(this_sym18640,[this_sym18640].concat(args18641.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18657 = this;
return (new cljs.core.Subvec(this__18657.meta,cljs.core._assoc_n.call(null,this__18657.v,this__18657.end,o),this__18657.start,(this__18657.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__18658 = this;
var this__18659 = this;
return cljs.core.pr_str.call(null,this__18659);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__18660 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__18661 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18662 = this;
var subvec_seq__18663 = (function subvec_seq(i){
if((i === this__18662.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__18662.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__18663.call(null,this__18662.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18664 = this;
return (this__18664.end - this__18664.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18665 = this;
return cljs.core._nth.call(null,this__18665.v,(this__18665.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18666 = this;
if((this__18666.start === this__18666.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__18666.meta,this__18666.v,this__18666.start,(this__18666.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__18667 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18668 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18669 = this;
return (new cljs.core.Subvec(meta,this__18669.v,this__18669.start,this__18669.end,this__18669.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18670 = this;
return this__18670.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__18671 = this;
return cljs.core._nth.call(null,this__18671.v,(this__18671.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__18672 = this;
return cljs.core._nth.call(null,this__18672.v,(this__18672.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18673 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__18673.meta);
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
var ret__18676 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__18676,0,tl.length);
return ret__18676;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__18680 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__18681 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__18680,subidx__18681,(((level === 5))?tail_node:(function (){var child__18682 = cljs.core.pv_aget.call(null,ret__18680,subidx__18681);
if(!((child__18682 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__18682,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__18680;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__18687 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__18688 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__18689 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__18687,subidx__18688));
if((function (){var and__3822__auto____18690 = (new_child__18689 == null);
if(and__3822__auto____18690)
{return (subidx__18688 === 0);
} else
{return and__3822__auto____18690;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__18687,subidx__18688,new_child__18689);
return node__18687;
}
} else
{if((subidx__18688 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__18687,subidx__18688,null);
return node__18687;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____18695 = (0 <= i);
if(and__3822__auto____18695)
{return (i < tv.cnt);
} else
{return and__3822__auto____18695;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__18696 = tv.root;
var node__18697 = root__18696;
var level__18698 = tv.shift;
while(true){
if((level__18698 > 0))
{{
var G__18699 = cljs.core.tv_ensure_editable.call(null,root__18696.edit,cljs.core.pv_aget.call(null,node__18697,((i >>> level__18698) & 31)));
var G__18700 = (level__18698 - 5);
node__18697 = G__18699;
level__18698 = G__18700;
continue;
}
} else
{return node__18697.arr;
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
var G__18740 = null;
var G__18740__2 = (function (this_sym18703,k){
var this__18705 = this;
var this_sym18703__18706 = this;
var coll__18707 = this_sym18703__18706;
return coll__18707.cljs$core$ILookup$_lookup$arity$2(coll__18707,k);
});
var G__18740__3 = (function (this_sym18704,k,not_found){
var this__18705 = this;
var this_sym18704__18708 = this;
var coll__18709 = this_sym18704__18708;
return coll__18709.cljs$core$ILookup$_lookup$arity$3(coll__18709,k,not_found);
});
G__18740 = function(this_sym18704,k,not_found){
switch(arguments.length){
case 2:
return G__18740__2.call(this,this_sym18704,k);
case 3:
return G__18740__3.call(this,this_sym18704,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18740;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym18701,args18702){
var this__18710 = this;
return this_sym18701.call.apply(this_sym18701,[this_sym18701].concat(args18702.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18711 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18712 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__18713 = this;
if(this__18713.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__18714 = this;
if((function (){var and__3822__auto____18715 = (0 <= n);
if(and__3822__auto____18715)
{return (n < this__18714.cnt);
} else
{return and__3822__auto____18715;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18716 = this;
if(this__18716.root.edit)
{return this__18716.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__18717 = this;
if(this__18717.root.edit)
{if((function (){var and__3822__auto____18718 = (0 <= n);
if(and__3822__auto____18718)
{return (n < this__18717.cnt);
} else
{return and__3822__auto____18718;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__18717.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__18723 = (function go(level,node){
var node__18721 = cljs.core.tv_ensure_editable.call(null,this__18717.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__18721,(n & 31),val);
return node__18721;
} else
{var subidx__18722 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__18721,subidx__18722,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__18721,subidx__18722)));
return node__18721;
}
}).call(null,this__18717.shift,this__18717.root);
this__18717.root = new_root__18723;
return tcoll;
}
} else
{if((n === this__18717.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__18717.cnt)].join('')));
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
var this__18724 = this;
if(this__18724.root.edit)
{if((this__18724.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__18724.cnt))
{this__18724.cnt = 0;
return tcoll;
} else
{if((((this__18724.cnt - 1) & 31) > 0))
{this__18724.cnt = (this__18724.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__18725 = cljs.core.editable_array_for.call(null,tcoll,(this__18724.cnt - 2));
var new_root__18727 = (function (){var nr__18726 = cljs.core.tv_pop_tail.call(null,tcoll,this__18724.shift,this__18724.root);
if(!((nr__18726 == null)))
{return nr__18726;
} else
{return (new cljs.core.VectorNode(this__18724.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____18728 = (5 < this__18724.shift);
if(and__3822__auto____18728)
{return (cljs.core.pv_aget.call(null,new_root__18727,1) == null);
} else
{return and__3822__auto____18728;
}
})())
{var new_root__18729 = cljs.core.tv_ensure_editable.call(null,this__18724.root.edit,cljs.core.pv_aget.call(null,new_root__18727,0));
this__18724.root = new_root__18729;
this__18724.shift = (this__18724.shift - 5);
this__18724.cnt = (this__18724.cnt - 1);
this__18724.tail = new_tail__18725;
return tcoll;
} else
{this__18724.root = new_root__18727;
this__18724.cnt = (this__18724.cnt - 1);
this__18724.tail = new_tail__18725;
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
var this__18730 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__18731 = this;
if(this__18731.root.edit)
{if(((this__18731.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__18731.tail[(this__18731.cnt & 31)] = o);
this__18731.cnt = (this__18731.cnt + 1);
return tcoll;
} else
{var tail_node__18732 = (new cljs.core.VectorNode(this__18731.root.edit,this__18731.tail));
var new_tail__18733 = cljs.core.make_array.call(null,32);
(new_tail__18733[0] = o);
this__18731.tail = new_tail__18733;
if(((this__18731.cnt >>> 5) > (1 << this__18731.shift)))
{var new_root_array__18734 = cljs.core.make_array.call(null,32);
var new_shift__18735 = (this__18731.shift + 5);
(new_root_array__18734[0] = this__18731.root);
(new_root_array__18734[1] = cljs.core.new_path.call(null,this__18731.root.edit,this__18731.shift,tail_node__18732));
this__18731.root = (new cljs.core.VectorNode(this__18731.root.edit,new_root_array__18734));
this__18731.shift = new_shift__18735;
this__18731.cnt = (this__18731.cnt + 1);
return tcoll;
} else
{var new_root__18736 = cljs.core.tv_push_tail.call(null,tcoll,this__18731.shift,this__18731.root,tail_node__18732);
this__18731.root = new_root__18736;
this__18731.cnt = (this__18731.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__18737 = this;
if(this__18737.root.edit)
{this__18737.root.edit = null;
var len__18738 = (this__18737.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__18739 = cljs.core.make_array.call(null,len__18738);
cljs.core.array_copy.call(null,this__18737.tail,0,trimmed_tail__18739,0,len__18738);
return (new cljs.core.PersistentVector(null,this__18737.cnt,this__18737.shift,this__18737.root,trimmed_tail__18739,null));
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
var this__18741 = this;
var h__2057__auto____18742 = this__18741.__hash;
if(!((h__2057__auto____18742 == null)))
{return h__2057__auto____18742;
} else
{var h__2057__auto____18743 = cljs.core.hash_coll.call(null,coll);
this__18741.__hash = h__2057__auto____18743;
return h__2057__auto____18743;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18744 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__18745 = this;
var this__18746 = this;
return cljs.core.pr_str.call(null,this__18746);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18747 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18748 = this;
return cljs.core._first.call(null,this__18748.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18749 = this;
var temp__3971__auto____18750 = cljs.core.next.call(null,this__18749.front);
if(temp__3971__auto____18750)
{var f1__18751 = temp__3971__auto____18750;
return (new cljs.core.PersistentQueueSeq(this__18749.meta,f1__18751,this__18749.rear,null));
} else
{if((this__18749.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__18749.meta,this__18749.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18752 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18753 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__18753.front,this__18753.rear,this__18753.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18754 = this;
return this__18754.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18755 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__18755.meta);
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
var this__18756 = this;
var h__2057__auto____18757 = this__18756.__hash;
if(!((h__2057__auto____18757 == null)))
{return h__2057__auto____18757;
} else
{var h__2057__auto____18758 = cljs.core.hash_coll.call(null,coll);
this__18756.__hash = h__2057__auto____18758;
return h__2057__auto____18758;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18759 = this;
if(cljs.core.truth_(this__18759.front))
{return (new cljs.core.PersistentQueue(this__18759.meta,(this__18759.count + 1),this__18759.front,cljs.core.conj.call(null,(function (){var or__3824__auto____18760 = this__18759.rear;
if(cljs.core.truth_(or__3824__auto____18760))
{return or__3824__auto____18760;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__18759.meta,(this__18759.count + 1),cljs.core.conj.call(null,this__18759.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__18761 = this;
var this__18762 = this;
return cljs.core.pr_str.call(null,this__18762);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18763 = this;
var rear__18764 = cljs.core.seq.call(null,this__18763.rear);
if(cljs.core.truth_((function (){var or__3824__auto____18765 = this__18763.front;
if(cljs.core.truth_(or__3824__auto____18765))
{return or__3824__auto____18765;
} else
{return rear__18764;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__18763.front,cljs.core.seq.call(null,rear__18764),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18766 = this;
return this__18766.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18767 = this;
return cljs.core._first.call(null,this__18767.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18768 = this;
if(cljs.core.truth_(this__18768.front))
{var temp__3971__auto____18769 = cljs.core.next.call(null,this__18768.front);
if(temp__3971__auto____18769)
{var f1__18770 = temp__3971__auto____18769;
return (new cljs.core.PersistentQueue(this__18768.meta,(this__18768.count - 1),f1__18770,this__18768.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__18768.meta,(this__18768.count - 1),cljs.core.seq.call(null,this__18768.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18771 = this;
return cljs.core.first.call(null,this__18771.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18772 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18773 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18774 = this;
return (new cljs.core.PersistentQueue(meta,this__18774.count,this__18774.front,this__18774.rear,this__18774.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18775 = this;
return this__18775.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18776 = this;
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
var this__18777 = this;
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
var len__18780 = array.length;
var i__18781 = 0;
while(true){
if((i__18781 < len__18780))
{if((k === (array[i__18781])))
{return i__18781;
} else
{{
var G__18782 = (i__18781 + incr);
i__18781 = G__18782;
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
var a__18785 = cljs.core.hash.call(null,a);
var b__18786 = cljs.core.hash.call(null,b);
if((a__18785 < b__18786))
{return -1;
} else
{if((a__18785 > b__18786))
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
var ks__18794 = m.keys;
var len__18795 = ks__18794.length;
var so__18796 = m.strobj;
var out__18797 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__18798 = 0;
var out__18799 = cljs.core.transient$.call(null,out__18797);
while(true){
if((i__18798 < len__18795))
{var k__18800 = (ks__18794[i__18798]);
{
var G__18801 = (i__18798 + 1);
var G__18802 = cljs.core.assoc_BANG_.call(null,out__18799,k__18800,(so__18796[k__18800]));
i__18798 = G__18801;
out__18799 = G__18802;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__18799,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__18808 = {};
var l__18809 = ks.length;
var i__18810 = 0;
while(true){
if((i__18810 < l__18809))
{var k__18811 = (ks[i__18810]);
(new_obj__18808[k__18811] = (obj[k__18811]));
{
var G__18812 = (i__18810 + 1);
i__18810 = G__18812;
continue;
}
} else
{}
break;
}
return new_obj__18808;
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
var this__18815 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18816 = this;
var h__2057__auto____18817 = this__18816.__hash;
if(!((h__2057__auto____18817 == null)))
{return h__2057__auto____18817;
} else
{var h__2057__auto____18818 = cljs.core.hash_imap.call(null,coll);
this__18816.__hash = h__2057__auto____18818;
return h__2057__auto____18818;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18819 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18820 = this;
if((function (){var and__3822__auto____18821 = goog.isString(k);
if(and__3822__auto____18821)
{return !((cljs.core.scan_array.call(null,1,k,this__18820.keys) == null));
} else
{return and__3822__auto____18821;
}
})())
{return (this__18820.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__18822 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____18823 = (this__18822.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____18823)
{return or__3824__auto____18823;
} else
{return (this__18822.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__18822.keys) == null)))
{var new_strobj__18824 = cljs.core.obj_clone.call(null,this__18822.strobj,this__18822.keys);
(new_strobj__18824[k] = v);
return (new cljs.core.ObjMap(this__18822.meta,this__18822.keys,new_strobj__18824,(this__18822.update_count + 1),null));
} else
{var new_strobj__18825 = cljs.core.obj_clone.call(null,this__18822.strobj,this__18822.keys);
var new_keys__18826 = this__18822.keys.slice();
(new_strobj__18825[k] = v);
new_keys__18826.push(k);
return (new cljs.core.ObjMap(this__18822.meta,new_keys__18826,new_strobj__18825,(this__18822.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__18827 = this;
if((function (){var and__3822__auto____18828 = goog.isString(k);
if(and__3822__auto____18828)
{return !((cljs.core.scan_array.call(null,1,k,this__18827.keys) == null));
} else
{return and__3822__auto____18828;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__18850 = null;
var G__18850__2 = (function (this_sym18829,k){
var this__18831 = this;
var this_sym18829__18832 = this;
var coll__18833 = this_sym18829__18832;
return coll__18833.cljs$core$ILookup$_lookup$arity$2(coll__18833,k);
});
var G__18850__3 = (function (this_sym18830,k,not_found){
var this__18831 = this;
var this_sym18830__18834 = this;
var coll__18835 = this_sym18830__18834;
return coll__18835.cljs$core$ILookup$_lookup$arity$3(coll__18835,k,not_found);
});
G__18850 = function(this_sym18830,k,not_found){
switch(arguments.length){
case 2:
return G__18850__2.call(this,this_sym18830,k);
case 3:
return G__18850__3.call(this,this_sym18830,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18850;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym18813,args18814){
var this__18836 = this;
return this_sym18813.call.apply(this_sym18813,[this_sym18813].concat(args18814.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__18837 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__18838 = this;
var this__18839 = this;
return cljs.core.pr_str.call(null,this__18839);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18840 = this;
if((this__18840.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__18803_SHARP_){
return cljs.core.vector.call(null,p1__18803_SHARP_,(this__18840.strobj[p1__18803_SHARP_]));
}),this__18840.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18841 = this;
return this__18841.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18842 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18843 = this;
return (new cljs.core.ObjMap(meta,this__18843.keys,this__18843.strobj,this__18843.update_count,this__18843.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18844 = this;
return this__18844.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18845 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__18845.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__18846 = this;
if((function (){var and__3822__auto____18847 = goog.isString(k);
if(and__3822__auto____18847)
{return !((cljs.core.scan_array.call(null,1,k,this__18846.keys) == null));
} else
{return and__3822__auto____18847;
}
})())
{var new_keys__18848 = this__18846.keys.slice();
var new_strobj__18849 = cljs.core.obj_clone.call(null,this__18846.strobj,this__18846.keys);
new_keys__18848.splice(cljs.core.scan_array.call(null,1,k,new_keys__18848),1);
cljs.core.js_delete.call(null,new_strobj__18849,k);
return (new cljs.core.ObjMap(this__18846.meta,new_keys__18848,new_strobj__18849,(this__18846.update_count + 1),null));
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
var this__18854 = this;
var h__2057__auto____18855 = this__18854.__hash;
if(!((h__2057__auto____18855 == null)))
{return h__2057__auto____18855;
} else
{var h__2057__auto____18856 = cljs.core.hash_imap.call(null,coll);
this__18854.__hash = h__2057__auto____18856;
return h__2057__auto____18856;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18857 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18858 = this;
var bucket__18859 = (this__18858.hashobj[cljs.core.hash.call(null,k)]);
var i__18860 = (cljs.core.truth_(bucket__18859)?cljs.core.scan_array.call(null,2,k,bucket__18859):null);
if(cljs.core.truth_(i__18860))
{return (bucket__18859[(i__18860 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__18861 = this;
var h__18862 = cljs.core.hash.call(null,k);
var bucket__18863 = (this__18861.hashobj[h__18862]);
if(cljs.core.truth_(bucket__18863))
{var new_bucket__18864 = bucket__18863.slice();
var new_hashobj__18865 = goog.object.clone(this__18861.hashobj);
(new_hashobj__18865[h__18862] = new_bucket__18864);
var temp__3971__auto____18866 = cljs.core.scan_array.call(null,2,k,new_bucket__18864);
if(cljs.core.truth_(temp__3971__auto____18866))
{var i__18867 = temp__3971__auto____18866;
(new_bucket__18864[(i__18867 + 1)] = v);
return (new cljs.core.HashMap(this__18861.meta,this__18861.count,new_hashobj__18865,null));
} else
{new_bucket__18864.push(k,v);
return (new cljs.core.HashMap(this__18861.meta,(this__18861.count + 1),new_hashobj__18865,null));
}
} else
{var new_hashobj__18868 = goog.object.clone(this__18861.hashobj);
(new_hashobj__18868[h__18862] = [k,v]);
return (new cljs.core.HashMap(this__18861.meta,(this__18861.count + 1),new_hashobj__18868,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__18869 = this;
var bucket__18870 = (this__18869.hashobj[cljs.core.hash.call(null,k)]);
var i__18871 = (cljs.core.truth_(bucket__18870)?cljs.core.scan_array.call(null,2,k,bucket__18870):null);
if(cljs.core.truth_(i__18871))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__18896 = null;
var G__18896__2 = (function (this_sym18872,k){
var this__18874 = this;
var this_sym18872__18875 = this;
var coll__18876 = this_sym18872__18875;
return coll__18876.cljs$core$ILookup$_lookup$arity$2(coll__18876,k);
});
var G__18896__3 = (function (this_sym18873,k,not_found){
var this__18874 = this;
var this_sym18873__18877 = this;
var coll__18878 = this_sym18873__18877;
return coll__18878.cljs$core$ILookup$_lookup$arity$3(coll__18878,k,not_found);
});
G__18896 = function(this_sym18873,k,not_found){
switch(arguments.length){
case 2:
return G__18896__2.call(this,this_sym18873,k);
case 3:
return G__18896__3.call(this,this_sym18873,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18896;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym18852,args18853){
var this__18879 = this;
return this_sym18852.call.apply(this_sym18852,[this_sym18852].concat(args18853.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__18880 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__18881 = this;
var this__18882 = this;
return cljs.core.pr_str.call(null,this__18882);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18883 = this;
if((this__18883.count > 0))
{var hashes__18884 = cljs.core.js_keys.call(null,this__18883.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__18851_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__18883.hashobj[p1__18851_SHARP_])));
}),hashes__18884);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18885 = this;
return this__18885.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18886 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18887 = this;
return (new cljs.core.HashMap(meta,this__18887.count,this__18887.hashobj,this__18887.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18888 = this;
return this__18888.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18889 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__18889.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__18890 = this;
var h__18891 = cljs.core.hash.call(null,k);
var bucket__18892 = (this__18890.hashobj[h__18891]);
var i__18893 = (cljs.core.truth_(bucket__18892)?cljs.core.scan_array.call(null,2,k,bucket__18892):null);
if(cljs.core.not.call(null,i__18893))
{return coll;
} else
{var new_hashobj__18894 = goog.object.clone(this__18890.hashobj);
if((3 > bucket__18892.length))
{cljs.core.js_delete.call(null,new_hashobj__18894,h__18891);
} else
{var new_bucket__18895 = bucket__18892.slice();
new_bucket__18895.splice(i__18893,2);
(new_hashobj__18894[h__18891] = new_bucket__18895);
}
return (new cljs.core.HashMap(this__18890.meta,(this__18890.count - 1),new_hashobj__18894,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__18897 = ks.length;
var i__18898 = 0;
var out__18899 = cljs.core.HashMap.EMPTY;
while(true){
if((i__18898 < len__18897))
{{
var G__18900 = (i__18898 + 1);
var G__18901 = cljs.core.assoc.call(null,out__18899,(ks[i__18898]),(vs[i__18898]));
i__18898 = G__18900;
out__18899 = G__18901;
continue;
}
} else
{return out__18899;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__18905 = m.arr;
var len__18906 = arr__18905.length;
var i__18907 = 0;
while(true){
if((len__18906 <= i__18907))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__18905[i__18907]),k))
{return i__18907;
} else
{if("\uFDD0'else")
{{
var G__18908 = (i__18907 + 2);
i__18907 = G__18908;
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
var this__18911 = this;
return (new cljs.core.TransientArrayMap({},this__18911.arr.length,this__18911.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18912 = this;
var h__2057__auto____18913 = this__18912.__hash;
if(!((h__2057__auto____18913 == null)))
{return h__2057__auto____18913;
} else
{var h__2057__auto____18914 = cljs.core.hash_imap.call(null,coll);
this__18912.__hash = h__2057__auto____18914;
return h__2057__auto____18914;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__18915 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__18916 = this;
var idx__18917 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__18917 === -1))
{return not_found;
} else
{return (this__18916.arr[(idx__18917 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__18918 = this;
var idx__18919 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__18919 === -1))
{if((this__18918.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__18918.meta,(this__18918.cnt + 1),(function (){var G__18920__18921 = this__18918.arr.slice();
G__18920__18921.push(k);
G__18920__18921.push(v);
return G__18920__18921;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__18918.arr[(idx__18919 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__18918.meta,this__18918.cnt,(function (){var G__18922__18923 = this__18918.arr.slice();
(G__18922__18923[(idx__18919 + 1)] = v);
return G__18922__18923;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__18924 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__18956 = null;
var G__18956__2 = (function (this_sym18925,k){
var this__18927 = this;
var this_sym18925__18928 = this;
var coll__18929 = this_sym18925__18928;
return coll__18929.cljs$core$ILookup$_lookup$arity$2(coll__18929,k);
});
var G__18956__3 = (function (this_sym18926,k,not_found){
var this__18927 = this;
var this_sym18926__18930 = this;
var coll__18931 = this_sym18926__18930;
return coll__18931.cljs$core$ILookup$_lookup$arity$3(coll__18931,k,not_found);
});
G__18956 = function(this_sym18926,k,not_found){
switch(arguments.length){
case 2:
return G__18956__2.call(this,this_sym18926,k);
case 3:
return G__18956__3.call(this,this_sym18926,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18956;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym18909,args18910){
var this__18932 = this;
return this_sym18909.call.apply(this_sym18909,[this_sym18909].concat(args18910.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__18933 = this;
var len__18934 = this__18933.arr.length;
var i__18935 = 0;
var init__18936 = init;
while(true){
if((i__18935 < len__18934))
{var init__18937 = f.call(null,init__18936,(this__18933.arr[i__18935]),(this__18933.arr[(i__18935 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__18937))
{return cljs.core.deref.call(null,init__18937);
} else
{{
var G__18957 = (i__18935 + 2);
var G__18958 = init__18937;
i__18935 = G__18957;
init__18936 = G__18958;
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
var this__18938 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__18939 = this;
var this__18940 = this;
return cljs.core.pr_str.call(null,this__18940);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18941 = this;
if((this__18941.cnt > 0))
{var len__18942 = this__18941.arr.length;
var array_map_seq__18943 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__18942))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__18941.arr[i]),(this__18941.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__18943.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18944 = this;
return this__18944.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18945 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18946 = this;
return (new cljs.core.PersistentArrayMap(meta,this__18946.cnt,this__18946.arr,this__18946.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18947 = this;
return this__18947.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18948 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18948.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__18949 = this;
var idx__18950 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__18950 >= 0))
{var len__18951 = this__18949.arr.length;
var new_len__18952 = (len__18951 - 2);
if((new_len__18952 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__18953 = cljs.core.make_array.call(null,new_len__18952);
var s__18954 = 0;
var d__18955 = 0;
while(true){
if((s__18954 >= len__18951))
{return (new cljs.core.PersistentArrayMap(this__18949.meta,(this__18949.cnt - 1),new_arr__18953,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__18949.arr[s__18954])))
{{
var G__18959 = (s__18954 + 2);
var G__18960 = d__18955;
s__18954 = G__18959;
d__18955 = G__18960;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__18953[d__18955] = (this__18949.arr[s__18954]));
(new_arr__18953[(d__18955 + 1)] = (this__18949.arr[(s__18954 + 1)]));
{
var G__18961 = (s__18954 + 2);
var G__18962 = (d__18955 + 2);
s__18954 = G__18961;
d__18955 = G__18962;
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
var len__18963 = cljs.core.count.call(null,ks);
var i__18964 = 0;
var out__18965 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__18964 < len__18963))
{{
var G__18966 = (i__18964 + 1);
var G__18967 = cljs.core.assoc_BANG_.call(null,out__18965,(ks[i__18964]),(vs[i__18964]));
i__18964 = G__18966;
out__18965 = G__18967;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__18965);
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
var this__18968 = this;
if(cljs.core.truth_(this__18968.editable_QMARK_))
{var idx__18969 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__18969 >= 0))
{(this__18968.arr[idx__18969] = (this__18968.arr[(this__18968.len - 2)]));
(this__18968.arr[(idx__18969 + 1)] = (this__18968.arr[(this__18968.len - 1)]));
var G__18970__18971 = this__18968.arr;
G__18970__18971.pop();
G__18970__18971.pop();
G__18970__18971;
this__18968.len = (this__18968.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__18972 = this;
if(cljs.core.truth_(this__18972.editable_QMARK_))
{var idx__18973 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__18973 === -1))
{if(((this__18972.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__18972.len = (this__18972.len + 2);
this__18972.arr.push(key);
this__18972.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__18972.len,this__18972.arr),key,val);
}
} else
{if((val === (this__18972.arr[(idx__18973 + 1)])))
{return tcoll;
} else
{(this__18972.arr[(idx__18973 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__18974 = this;
if(cljs.core.truth_(this__18974.editable_QMARK_))
{if((function (){var G__18975__18976 = o;
if(G__18975__18976)
{if((function (){var or__3824__auto____18977 = (G__18975__18976.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____18977)
{return or__3824__auto____18977;
} else
{return G__18975__18976.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__18975__18976.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__18975__18976);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__18975__18976);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__18978 = cljs.core.seq.call(null,o);
var tcoll__18979 = tcoll;
while(true){
var temp__3971__auto____18980 = cljs.core.first.call(null,es__18978);
if(cljs.core.truth_(temp__3971__auto____18980))
{var e__18981 = temp__3971__auto____18980;
{
var G__18987 = cljs.core.next.call(null,es__18978);
var G__18988 = tcoll__18979.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__18979,cljs.core.key.call(null,e__18981),cljs.core.val.call(null,e__18981));
es__18978 = G__18987;
tcoll__18979 = G__18988;
continue;
}
} else
{return tcoll__18979;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__18982 = this;
if(cljs.core.truth_(this__18982.editable_QMARK_))
{this__18982.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__18982.len,2),this__18982.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__18983 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__18984 = this;
if(cljs.core.truth_(this__18984.editable_QMARK_))
{var idx__18985 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__18985 === -1))
{return not_found;
} else
{return (this__18984.arr[(idx__18985 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__18986 = this;
if(cljs.core.truth_(this__18986.editable_QMARK_))
{return cljs.core.quot.call(null,this__18986.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__18991 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__18992 = 0;
while(true){
if((i__18992 < len))
{{
var G__18993 = cljs.core.assoc_BANG_.call(null,out__18991,(arr[i__18992]),(arr[(i__18992 + 1)]));
var G__18994 = (i__18992 + 2);
out__18991 = G__18993;
i__18992 = G__18994;
continue;
}
} else
{return out__18991;
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
var G__18999__19000 = arr.slice();
(G__18999__19000[i] = a);
return G__18999__19000;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__19001__19002 = arr.slice();
(G__19001__19002[i] = a);
(G__19001__19002[j] = b);
return G__19001__19002;
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
var new_arr__19004 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__19004,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__19004,(2 * i),(new_arr__19004.length - (2 * i)));
return new_arr__19004;
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
var editable__19007 = inode.ensure_editable(edit);
(editable__19007.arr[i] = a);
return editable__19007;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__19008 = inode.ensure_editable(edit);
(editable__19008.arr[i] = a);
(editable__19008.arr[j] = b);
return editable__19008;
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
var len__19015 = arr.length;
var i__19016 = 0;
var init__19017 = init;
while(true){
if((i__19016 < len__19015))
{var init__19020 = (function (){var k__19018 = (arr[i__19016]);
if(!((k__19018 == null)))
{return f.call(null,init__19017,k__19018,(arr[(i__19016 + 1)]));
} else
{var node__19019 = (arr[(i__19016 + 1)]);
if(!((node__19019 == null)))
{return node__19019.kv_reduce(f,init__19017);
} else
{return init__19017;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__19020))
{return cljs.core.deref.call(null,init__19020);
} else
{{
var G__19021 = (i__19016 + 2);
var G__19022 = init__19020;
i__19016 = G__19021;
init__19017 = G__19022;
continue;
}
}
} else
{return init__19017;
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
var this__19023 = this;
var inode__19024 = this;
if((this__19023.bitmap === bit))
{return null;
} else
{var editable__19025 = inode__19024.ensure_editable(e);
var earr__19026 = editable__19025.arr;
var len__19027 = earr__19026.length;
editable__19025.bitmap = (bit ^ editable__19025.bitmap);
cljs.core.array_copy.call(null,earr__19026,(2 * (i + 1)),earr__19026,(2 * i),(len__19027 - (2 * (i + 1))));
(earr__19026[(len__19027 - 2)] = null);
(earr__19026[(len__19027 - 1)] = null);
return editable__19025;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__19028 = this;
var inode__19029 = this;
var bit__19030 = (1 << ((hash >>> shift) & 0x01f));
var idx__19031 = cljs.core.bitmap_indexed_node_index.call(null,this__19028.bitmap,bit__19030);
if(((this__19028.bitmap & bit__19030) === 0))
{var n__19032 = cljs.core.bit_count.call(null,this__19028.bitmap);
if(((2 * n__19032) < this__19028.arr.length))
{var editable__19033 = inode__19029.ensure_editable(edit);
var earr__19034 = editable__19033.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__19034,(2 * idx__19031),earr__19034,(2 * (idx__19031 + 1)),(2 * (n__19032 - idx__19031)));
(earr__19034[(2 * idx__19031)] = key);
(earr__19034[((2 * idx__19031) + 1)] = val);
editable__19033.bitmap = (editable__19033.bitmap | bit__19030);
return editable__19033;
} else
{if((n__19032 >= 16))
{var nodes__19035 = cljs.core.make_array.call(null,32);
var jdx__19036 = ((hash >>> shift) & 0x01f);
(nodes__19035[jdx__19036] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__19037 = 0;
var j__19038 = 0;
while(true){
if((i__19037 < 32))
{if((((this__19028.bitmap >>> i__19037) & 1) === 0))
{{
var G__19091 = (i__19037 + 1);
var G__19092 = j__19038;
i__19037 = G__19091;
j__19038 = G__19092;
continue;
}
} else
{(nodes__19035[i__19037] = ((!(((this__19028.arr[j__19038]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__19028.arr[j__19038])),(this__19028.arr[j__19038]),(this__19028.arr[(j__19038 + 1)]),added_leaf_QMARK_):(this__19028.arr[(j__19038 + 1)])));
{
var G__19093 = (i__19037 + 1);
var G__19094 = (j__19038 + 2);
i__19037 = G__19093;
j__19038 = G__19094;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__19032 + 1),nodes__19035));
} else
{if("\uFDD0'else")
{var new_arr__19039 = cljs.core.make_array.call(null,(2 * (n__19032 + 4)));
cljs.core.array_copy.call(null,this__19028.arr,0,new_arr__19039,0,(2 * idx__19031));
(new_arr__19039[(2 * idx__19031)] = key);
(new_arr__19039[((2 * idx__19031) + 1)] = val);
cljs.core.array_copy.call(null,this__19028.arr,(2 * idx__19031),new_arr__19039,(2 * (idx__19031 + 1)),(2 * (n__19032 - idx__19031)));
added_leaf_QMARK_.val = true;
var editable__19040 = inode__19029.ensure_editable(edit);
editable__19040.arr = new_arr__19039;
editable__19040.bitmap = (editable__19040.bitmap | bit__19030);
return editable__19040;
} else
{return null;
}
}
}
} else
{var key_or_nil__19041 = (this__19028.arr[(2 * idx__19031)]);
var val_or_node__19042 = (this__19028.arr[((2 * idx__19031) + 1)]);
if((key_or_nil__19041 == null))
{var n__19043 = val_or_node__19042.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__19043 === val_or_node__19042))
{return inode__19029;
} else
{return cljs.core.edit_and_set.call(null,inode__19029,edit,((2 * idx__19031) + 1),n__19043);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19041))
{if((val === val_or_node__19042))
{return inode__19029;
} else
{return cljs.core.edit_and_set.call(null,inode__19029,edit,((2 * idx__19031) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__19029,edit,(2 * idx__19031),null,((2 * idx__19031) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__19041,val_or_node__19042,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__19044 = this;
var inode__19045 = this;
return cljs.core.create_inode_seq.call(null,this__19044.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__19046 = this;
var inode__19047 = this;
var bit__19048 = (1 << ((hash >>> shift) & 0x01f));
if(((this__19046.bitmap & bit__19048) === 0))
{return inode__19047;
} else
{var idx__19049 = cljs.core.bitmap_indexed_node_index.call(null,this__19046.bitmap,bit__19048);
var key_or_nil__19050 = (this__19046.arr[(2 * idx__19049)]);
var val_or_node__19051 = (this__19046.arr[((2 * idx__19049) + 1)]);
if((key_or_nil__19050 == null))
{var n__19052 = val_or_node__19051.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__19052 === val_or_node__19051))
{return inode__19047;
} else
{if(!((n__19052 == null)))
{return cljs.core.edit_and_set.call(null,inode__19047,edit,((2 * idx__19049) + 1),n__19052);
} else
{if((this__19046.bitmap === bit__19048))
{return null;
} else
{if("\uFDD0'else")
{return inode__19047.edit_and_remove_pair(edit,bit__19048,idx__19049);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19050))
{(removed_leaf_QMARK_[0] = true);
return inode__19047.edit_and_remove_pair(edit,bit__19048,idx__19049);
} else
{if("\uFDD0'else")
{return inode__19047;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__19053 = this;
var inode__19054 = this;
if((e === this__19053.edit))
{return inode__19054;
} else
{var n__19055 = cljs.core.bit_count.call(null,this__19053.bitmap);
var new_arr__19056 = cljs.core.make_array.call(null,(((n__19055 < 0))?4:(2 * (n__19055 + 1))));
cljs.core.array_copy.call(null,this__19053.arr,0,new_arr__19056,0,(2 * n__19055));
return (new cljs.core.BitmapIndexedNode(e,this__19053.bitmap,new_arr__19056));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__19057 = this;
var inode__19058 = this;
return cljs.core.inode_kv_reduce.call(null,this__19057.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__19059 = this;
var inode__19060 = this;
var bit__19061 = (1 << ((hash >>> shift) & 0x01f));
if(((this__19059.bitmap & bit__19061) === 0))
{return not_found;
} else
{var idx__19062 = cljs.core.bitmap_indexed_node_index.call(null,this__19059.bitmap,bit__19061);
var key_or_nil__19063 = (this__19059.arr[(2 * idx__19062)]);
var val_or_node__19064 = (this__19059.arr[((2 * idx__19062) + 1)]);
if((key_or_nil__19063 == null))
{return val_or_node__19064.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19063))
{return cljs.core.PersistentVector.fromArray([key_or_nil__19063,val_or_node__19064], true);
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
var this__19065 = this;
var inode__19066 = this;
var bit__19067 = (1 << ((hash >>> shift) & 0x01f));
if(((this__19065.bitmap & bit__19067) === 0))
{return inode__19066;
} else
{var idx__19068 = cljs.core.bitmap_indexed_node_index.call(null,this__19065.bitmap,bit__19067);
var key_or_nil__19069 = (this__19065.arr[(2 * idx__19068)]);
var val_or_node__19070 = (this__19065.arr[((2 * idx__19068) + 1)]);
if((key_or_nil__19069 == null))
{var n__19071 = val_or_node__19070.inode_without((shift + 5),hash,key);
if((n__19071 === val_or_node__19070))
{return inode__19066;
} else
{if(!((n__19071 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__19065.bitmap,cljs.core.clone_and_set.call(null,this__19065.arr,((2 * idx__19068) + 1),n__19071)));
} else
{if((this__19065.bitmap === bit__19067))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__19065.bitmap ^ bit__19067),cljs.core.remove_pair.call(null,this__19065.arr,idx__19068)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19069))
{return (new cljs.core.BitmapIndexedNode(null,(this__19065.bitmap ^ bit__19067),cljs.core.remove_pair.call(null,this__19065.arr,idx__19068)));
} else
{if("\uFDD0'else")
{return inode__19066;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__19072 = this;
var inode__19073 = this;
var bit__19074 = (1 << ((hash >>> shift) & 0x01f));
var idx__19075 = cljs.core.bitmap_indexed_node_index.call(null,this__19072.bitmap,bit__19074);
if(((this__19072.bitmap & bit__19074) === 0))
{var n__19076 = cljs.core.bit_count.call(null,this__19072.bitmap);
if((n__19076 >= 16))
{var nodes__19077 = cljs.core.make_array.call(null,32);
var jdx__19078 = ((hash >>> shift) & 0x01f);
(nodes__19077[jdx__19078] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__19079 = 0;
var j__19080 = 0;
while(true){
if((i__19079 < 32))
{if((((this__19072.bitmap >>> i__19079) & 1) === 0))
{{
var G__19095 = (i__19079 + 1);
var G__19096 = j__19080;
i__19079 = G__19095;
j__19080 = G__19096;
continue;
}
} else
{(nodes__19077[i__19079] = ((!(((this__19072.arr[j__19080]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__19072.arr[j__19080])),(this__19072.arr[j__19080]),(this__19072.arr[(j__19080 + 1)]),added_leaf_QMARK_):(this__19072.arr[(j__19080 + 1)])));
{
var G__19097 = (i__19079 + 1);
var G__19098 = (j__19080 + 2);
i__19079 = G__19097;
j__19080 = G__19098;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__19076 + 1),nodes__19077));
} else
{var new_arr__19081 = cljs.core.make_array.call(null,(2 * (n__19076 + 1)));
cljs.core.array_copy.call(null,this__19072.arr,0,new_arr__19081,0,(2 * idx__19075));
(new_arr__19081[(2 * idx__19075)] = key);
(new_arr__19081[((2 * idx__19075) + 1)] = val);
cljs.core.array_copy.call(null,this__19072.arr,(2 * idx__19075),new_arr__19081,(2 * (idx__19075 + 1)),(2 * (n__19076 - idx__19075)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__19072.bitmap | bit__19074),new_arr__19081));
}
} else
{var key_or_nil__19082 = (this__19072.arr[(2 * idx__19075)]);
var val_or_node__19083 = (this__19072.arr[((2 * idx__19075) + 1)]);
if((key_or_nil__19082 == null))
{var n__19084 = val_or_node__19083.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__19084 === val_or_node__19083))
{return inode__19073;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__19072.bitmap,cljs.core.clone_and_set.call(null,this__19072.arr,((2 * idx__19075) + 1),n__19084)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19082))
{if((val === val_or_node__19083))
{return inode__19073;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__19072.bitmap,cljs.core.clone_and_set.call(null,this__19072.arr,((2 * idx__19075) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__19072.bitmap,cljs.core.clone_and_set.call(null,this__19072.arr,(2 * idx__19075),null,((2 * idx__19075) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__19082,val_or_node__19083,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__19085 = this;
var inode__19086 = this;
var bit__19087 = (1 << ((hash >>> shift) & 0x01f));
if(((this__19085.bitmap & bit__19087) === 0))
{return not_found;
} else
{var idx__19088 = cljs.core.bitmap_indexed_node_index.call(null,this__19085.bitmap,bit__19087);
var key_or_nil__19089 = (this__19085.arr[(2 * idx__19088)]);
var val_or_node__19090 = (this__19085.arr[((2 * idx__19088) + 1)]);
if((key_or_nil__19089 == null))
{return val_or_node__19090.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__19089))
{return val_or_node__19090;
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
var arr__19106 = array_node.arr;
var len__19107 = (2 * (array_node.cnt - 1));
var new_arr__19108 = cljs.core.make_array.call(null,len__19107);
var i__19109 = 0;
var j__19110 = 1;
var bitmap__19111 = 0;
while(true){
if((i__19109 < len__19107))
{if((function (){var and__3822__auto____19112 = !((i__19109 === idx));
if(and__3822__auto____19112)
{return !(((arr__19106[i__19109]) == null));
} else
{return and__3822__auto____19112;
}
})())
{(new_arr__19108[j__19110] = (arr__19106[i__19109]));
{
var G__19113 = (i__19109 + 1);
var G__19114 = (j__19110 + 2);
var G__19115 = (bitmap__19111 | (1 << i__19109));
i__19109 = G__19113;
j__19110 = G__19114;
bitmap__19111 = G__19115;
continue;
}
} else
{{
var G__19116 = (i__19109 + 1);
var G__19117 = j__19110;
var G__19118 = bitmap__19111;
i__19109 = G__19116;
j__19110 = G__19117;
bitmap__19111 = G__19118;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__19111,new_arr__19108));
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
var this__19119 = this;
var inode__19120 = this;
var idx__19121 = ((hash >>> shift) & 0x01f);
var node__19122 = (this__19119.arr[idx__19121]);
if((node__19122 == null))
{var editable__19123 = cljs.core.edit_and_set.call(null,inode__19120,edit,idx__19121,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__19123.cnt = (editable__19123.cnt + 1);
return editable__19123;
} else
{var n__19124 = node__19122.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__19124 === node__19122))
{return inode__19120;
} else
{return cljs.core.edit_and_set.call(null,inode__19120,edit,idx__19121,n__19124);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__19125 = this;
var inode__19126 = this;
return cljs.core.create_array_node_seq.call(null,this__19125.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__19127 = this;
var inode__19128 = this;
var idx__19129 = ((hash >>> shift) & 0x01f);
var node__19130 = (this__19127.arr[idx__19129]);
if((node__19130 == null))
{return inode__19128;
} else
{var n__19131 = node__19130.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__19131 === node__19130))
{return inode__19128;
} else
{if((n__19131 == null))
{if((this__19127.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__19128,edit,idx__19129);
} else
{var editable__19132 = cljs.core.edit_and_set.call(null,inode__19128,edit,idx__19129,n__19131);
editable__19132.cnt = (editable__19132.cnt - 1);
return editable__19132;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__19128,edit,idx__19129,n__19131);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__19133 = this;
var inode__19134 = this;
if((e === this__19133.edit))
{return inode__19134;
} else
{return (new cljs.core.ArrayNode(e,this__19133.cnt,this__19133.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__19135 = this;
var inode__19136 = this;
var len__19137 = this__19135.arr.length;
var i__19138 = 0;
var init__19139 = init;
while(true){
if((i__19138 < len__19137))
{var node__19140 = (this__19135.arr[i__19138]);
if(!((node__19140 == null)))
{var init__19141 = node__19140.kv_reduce(f,init__19139);
if(cljs.core.reduced_QMARK_.call(null,init__19141))
{return cljs.core.deref.call(null,init__19141);
} else
{{
var G__19160 = (i__19138 + 1);
var G__19161 = init__19141;
i__19138 = G__19160;
init__19139 = G__19161;
continue;
}
}
} else
{return null;
}
} else
{return init__19139;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__19142 = this;
var inode__19143 = this;
var idx__19144 = ((hash >>> shift) & 0x01f);
var node__19145 = (this__19142.arr[idx__19144]);
if(!((node__19145 == null)))
{return node__19145.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__19146 = this;
var inode__19147 = this;
var idx__19148 = ((hash >>> shift) & 0x01f);
var node__19149 = (this__19146.arr[idx__19148]);
if(!((node__19149 == null)))
{var n__19150 = node__19149.inode_without((shift + 5),hash,key);
if((n__19150 === node__19149))
{return inode__19147;
} else
{if((n__19150 == null))
{if((this__19146.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__19147,null,idx__19148);
} else
{return (new cljs.core.ArrayNode(null,(this__19146.cnt - 1),cljs.core.clone_and_set.call(null,this__19146.arr,idx__19148,n__19150)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__19146.cnt,cljs.core.clone_and_set.call(null,this__19146.arr,idx__19148,n__19150)));
} else
{return null;
}
}
}
} else
{return inode__19147;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__19151 = this;
var inode__19152 = this;
var idx__19153 = ((hash >>> shift) & 0x01f);
var node__19154 = (this__19151.arr[idx__19153]);
if((node__19154 == null))
{return (new cljs.core.ArrayNode(null,(this__19151.cnt + 1),cljs.core.clone_and_set.call(null,this__19151.arr,idx__19153,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__19155 = node__19154.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__19155 === node__19154))
{return inode__19152;
} else
{return (new cljs.core.ArrayNode(null,this__19151.cnt,cljs.core.clone_and_set.call(null,this__19151.arr,idx__19153,n__19155)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__19156 = this;
var inode__19157 = this;
var idx__19158 = ((hash >>> shift) & 0x01f);
var node__19159 = (this__19156.arr[idx__19158]);
if(!((node__19159 == null)))
{return node__19159.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__19164 = (2 * cnt);
var i__19165 = 0;
while(true){
if((i__19165 < lim__19164))
{if(cljs.core.key_test.call(null,key,(arr[i__19165])))
{return i__19165;
} else
{{
var G__19166 = (i__19165 + 2);
i__19165 = G__19166;
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
var this__19167 = this;
var inode__19168 = this;
if((hash === this__19167.collision_hash))
{var idx__19169 = cljs.core.hash_collision_node_find_index.call(null,this__19167.arr,this__19167.cnt,key);
if((idx__19169 === -1))
{if((this__19167.arr.length > (2 * this__19167.cnt)))
{var editable__19170 = cljs.core.edit_and_set.call(null,inode__19168,edit,(2 * this__19167.cnt),key,((2 * this__19167.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__19170.cnt = (editable__19170.cnt + 1);
return editable__19170;
} else
{var len__19171 = this__19167.arr.length;
var new_arr__19172 = cljs.core.make_array.call(null,(len__19171 + 2));
cljs.core.array_copy.call(null,this__19167.arr,0,new_arr__19172,0,len__19171);
(new_arr__19172[len__19171] = key);
(new_arr__19172[(len__19171 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__19168.ensure_editable_array(edit,(this__19167.cnt + 1),new_arr__19172);
}
} else
{if(((this__19167.arr[(idx__19169 + 1)]) === val))
{return inode__19168;
} else
{return cljs.core.edit_and_set.call(null,inode__19168,edit,(idx__19169 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__19167.collision_hash >>> shift) & 0x01f)),[null,inode__19168,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__19173 = this;
var inode__19174 = this;
return cljs.core.create_inode_seq.call(null,this__19173.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__19175 = this;
var inode__19176 = this;
var idx__19177 = cljs.core.hash_collision_node_find_index.call(null,this__19175.arr,this__19175.cnt,key);
if((idx__19177 === -1))
{return inode__19176;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__19175.cnt === 1))
{return null;
} else
{var editable__19178 = inode__19176.ensure_editable(edit);
var earr__19179 = editable__19178.arr;
(earr__19179[idx__19177] = (earr__19179[((2 * this__19175.cnt) - 2)]));
(earr__19179[(idx__19177 + 1)] = (earr__19179[((2 * this__19175.cnt) - 1)]));
(earr__19179[((2 * this__19175.cnt) - 1)] = null);
(earr__19179[((2 * this__19175.cnt) - 2)] = null);
editable__19178.cnt = (editable__19178.cnt - 1);
return editable__19178;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__19180 = this;
var inode__19181 = this;
if((e === this__19180.edit))
{return inode__19181;
} else
{var new_arr__19182 = cljs.core.make_array.call(null,(2 * (this__19180.cnt + 1)));
cljs.core.array_copy.call(null,this__19180.arr,0,new_arr__19182,0,(2 * this__19180.cnt));
return (new cljs.core.HashCollisionNode(e,this__19180.collision_hash,this__19180.cnt,new_arr__19182));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__19183 = this;
var inode__19184 = this;
return cljs.core.inode_kv_reduce.call(null,this__19183.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__19185 = this;
var inode__19186 = this;
var idx__19187 = cljs.core.hash_collision_node_find_index.call(null,this__19185.arr,this__19185.cnt,key);
if((idx__19187 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__19185.arr[idx__19187])))
{return cljs.core.PersistentVector.fromArray([(this__19185.arr[idx__19187]),(this__19185.arr[(idx__19187 + 1)])], true);
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
var this__19188 = this;
var inode__19189 = this;
var idx__19190 = cljs.core.hash_collision_node_find_index.call(null,this__19188.arr,this__19188.cnt,key);
if((idx__19190 === -1))
{return inode__19189;
} else
{if((this__19188.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__19188.collision_hash,(this__19188.cnt - 1),cljs.core.remove_pair.call(null,this__19188.arr,cljs.core.quot.call(null,idx__19190,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__19191 = this;
var inode__19192 = this;
if((hash === this__19191.collision_hash))
{var idx__19193 = cljs.core.hash_collision_node_find_index.call(null,this__19191.arr,this__19191.cnt,key);
if((idx__19193 === -1))
{var len__19194 = this__19191.arr.length;
var new_arr__19195 = cljs.core.make_array.call(null,(len__19194 + 2));
cljs.core.array_copy.call(null,this__19191.arr,0,new_arr__19195,0,len__19194);
(new_arr__19195[len__19194] = key);
(new_arr__19195[(len__19194 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__19191.collision_hash,(this__19191.cnt + 1),new_arr__19195));
} else
{if(cljs.core._EQ_.call(null,(this__19191.arr[idx__19193]),val))
{return inode__19192;
} else
{return (new cljs.core.HashCollisionNode(null,this__19191.collision_hash,this__19191.cnt,cljs.core.clone_and_set.call(null,this__19191.arr,(idx__19193 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__19191.collision_hash >>> shift) & 0x01f)),[null,inode__19192])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__19196 = this;
var inode__19197 = this;
var idx__19198 = cljs.core.hash_collision_node_find_index.call(null,this__19196.arr,this__19196.cnt,key);
if((idx__19198 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__19196.arr[idx__19198])))
{return (this__19196.arr[(idx__19198 + 1)]);
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
var this__19199 = this;
var inode__19200 = this;
if((e === this__19199.edit))
{this__19199.arr = array;
this__19199.cnt = count;
return inode__19200;
} else
{return (new cljs.core.HashCollisionNode(this__19199.edit,this__19199.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__19205 = cljs.core.hash.call(null,key1);
if((key1hash__19205 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__19205,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___19206 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__19205,key1,val1,added_leaf_QMARK___19206).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___19206);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__19207 = cljs.core.hash.call(null,key1);
if((key1hash__19207 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__19207,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___19208 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__19207,key1,val1,added_leaf_QMARK___19208).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___19208);
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
var this__19209 = this;
var h__2057__auto____19210 = this__19209.__hash;
if(!((h__2057__auto____19210 == null)))
{return h__2057__auto____19210;
} else
{var h__2057__auto____19211 = cljs.core.hash_coll.call(null,coll);
this__19209.__hash = h__2057__auto____19211;
return h__2057__auto____19211;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19212 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__19213 = this;
var this__19214 = this;
return cljs.core.pr_str.call(null,this__19214);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__19215 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__19216 = this;
if((this__19216.s == null))
{return cljs.core.PersistentVector.fromArray([(this__19216.nodes[this__19216.i]),(this__19216.nodes[(this__19216.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__19216.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__19217 = this;
if((this__19217.s == null))
{return cljs.core.create_inode_seq.call(null,this__19217.nodes,(this__19217.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__19217.nodes,this__19217.i,cljs.core.next.call(null,this__19217.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19218 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19219 = this;
return (new cljs.core.NodeSeq(meta,this__19219.nodes,this__19219.i,this__19219.s,this__19219.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19220 = this;
return this__19220.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19221 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__19221.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__19228 = nodes.length;
var j__19229 = i;
while(true){
if((j__19229 < len__19228))
{if(!(((nodes[j__19229]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__19229,null,null));
} else
{var temp__3971__auto____19230 = (nodes[(j__19229 + 1)]);
if(cljs.core.truth_(temp__3971__auto____19230))
{var node__19231 = temp__3971__auto____19230;
var temp__3971__auto____19232 = node__19231.inode_seq();
if(cljs.core.truth_(temp__3971__auto____19232))
{var node_seq__19233 = temp__3971__auto____19232;
return (new cljs.core.NodeSeq(null,nodes,(j__19229 + 2),node_seq__19233,null));
} else
{{
var G__19234 = (j__19229 + 2);
j__19229 = G__19234;
continue;
}
}
} else
{{
var G__19235 = (j__19229 + 2);
j__19229 = G__19235;
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
var this__19236 = this;
var h__2057__auto____19237 = this__19236.__hash;
if(!((h__2057__auto____19237 == null)))
{return h__2057__auto____19237;
} else
{var h__2057__auto____19238 = cljs.core.hash_coll.call(null,coll);
this__19236.__hash = h__2057__auto____19238;
return h__2057__auto____19238;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19239 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__19240 = this;
var this__19241 = this;
return cljs.core.pr_str.call(null,this__19241);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__19242 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__19243 = this;
return cljs.core.first.call(null,this__19243.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__19244 = this;
return cljs.core.create_array_node_seq.call(null,null,this__19244.nodes,this__19244.i,cljs.core.next.call(null,this__19244.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19245 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19246 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__19246.nodes,this__19246.i,this__19246.s,this__19246.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19247 = this;
return this__19247.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19248 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__19248.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__19255 = nodes.length;
var j__19256 = i;
while(true){
if((j__19256 < len__19255))
{var temp__3971__auto____19257 = (nodes[j__19256]);
if(cljs.core.truth_(temp__3971__auto____19257))
{var nj__19258 = temp__3971__auto____19257;
var temp__3971__auto____19259 = nj__19258.inode_seq();
if(cljs.core.truth_(temp__3971__auto____19259))
{var ns__19260 = temp__3971__auto____19259;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__19256 + 1),ns__19260,null));
} else
{{
var G__19261 = (j__19256 + 1);
j__19256 = G__19261;
continue;
}
}
} else
{{
var G__19262 = (j__19256 + 1);
j__19256 = G__19262;
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
var this__19265 = this;
return (new cljs.core.TransientHashMap({},this__19265.root,this__19265.cnt,this__19265.has_nil_QMARK_,this__19265.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__19266 = this;
var h__2057__auto____19267 = this__19266.__hash;
if(!((h__2057__auto____19267 == null)))
{return h__2057__auto____19267;
} else
{var h__2057__auto____19268 = cljs.core.hash_imap.call(null,coll);
this__19266.__hash = h__2057__auto____19268;
return h__2057__auto____19268;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19269 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19270 = this;
if((k == null))
{if(this__19270.has_nil_QMARK_)
{return this__19270.nil_val;
} else
{return not_found;
}
} else
{if((this__19270.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__19270.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__19271 = this;
if((k == null))
{if((function (){var and__3822__auto____19272 = this__19271.has_nil_QMARK_;
if(and__3822__auto____19272)
{return (v === this__19271.nil_val);
} else
{return and__3822__auto____19272;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__19271.meta,((this__19271.has_nil_QMARK_)?this__19271.cnt:(this__19271.cnt + 1)),this__19271.root,true,v,null));
}
} else
{var added_leaf_QMARK___19273 = (new cljs.core.Box(false));
var new_root__19274 = (((this__19271.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__19271.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___19273);
if((new_root__19274 === this__19271.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__19271.meta,((added_leaf_QMARK___19273.val)?(this__19271.cnt + 1):this__19271.cnt),new_root__19274,this__19271.has_nil_QMARK_,this__19271.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__19275 = this;
if((k == null))
{return this__19275.has_nil_QMARK_;
} else
{if((this__19275.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__19275.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__19298 = null;
var G__19298__2 = (function (this_sym19276,k){
var this__19278 = this;
var this_sym19276__19279 = this;
var coll__19280 = this_sym19276__19279;
return coll__19280.cljs$core$ILookup$_lookup$arity$2(coll__19280,k);
});
var G__19298__3 = (function (this_sym19277,k,not_found){
var this__19278 = this;
var this_sym19277__19281 = this;
var coll__19282 = this_sym19277__19281;
return coll__19282.cljs$core$ILookup$_lookup$arity$3(coll__19282,k,not_found);
});
G__19298 = function(this_sym19277,k,not_found){
switch(arguments.length){
case 2:
return G__19298__2.call(this,this_sym19277,k);
case 3:
return G__19298__3.call(this,this_sym19277,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19298;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym19263,args19264){
var this__19283 = this;
return this_sym19263.call.apply(this_sym19263,[this_sym19263].concat(args19264.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__19284 = this;
var init__19285 = ((this__19284.has_nil_QMARK_)?f.call(null,init,null,this__19284.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__19285))
{return cljs.core.deref.call(null,init__19285);
} else
{if(!((this__19284.root == null)))
{return this__19284.root.kv_reduce(f,init__19285);
} else
{if("\uFDD0'else")
{return init__19285;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__19286 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__19287 = this;
var this__19288 = this;
return cljs.core.pr_str.call(null,this__19288);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19289 = this;
if((this__19289.cnt > 0))
{var s__19290 = ((!((this__19289.root == null)))?this__19289.root.inode_seq():null);
if(this__19289.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__19289.nil_val], true),s__19290);
} else
{return s__19290;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19291 = this;
return this__19291.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19292 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19293 = this;
return (new cljs.core.PersistentHashMap(meta,this__19293.cnt,this__19293.root,this__19293.has_nil_QMARK_,this__19293.nil_val,this__19293.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19294 = this;
return this__19294.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19295 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__19295.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__19296 = this;
if((k == null))
{if(this__19296.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__19296.meta,(this__19296.cnt - 1),this__19296.root,false,null,null));
} else
{return coll;
}
} else
{if((this__19296.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__19297 = this__19296.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__19297 === this__19296.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__19296.meta,(this__19296.cnt - 1),new_root__19297,this__19296.has_nil_QMARK_,this__19296.nil_val,null));
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
var len__19299 = ks.length;
var i__19300 = 0;
var out__19301 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__19300 < len__19299))
{{
var G__19302 = (i__19300 + 1);
var G__19303 = cljs.core.assoc_BANG_.call(null,out__19301,(ks[i__19300]),(vs[i__19300]));
i__19300 = G__19302;
out__19301 = G__19303;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__19301);
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
var this__19304 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__19305 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__19306 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__19307 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__19308 = this;
if((k == null))
{if(this__19308.has_nil_QMARK_)
{return this__19308.nil_val;
} else
{return null;
}
} else
{if((this__19308.root == null))
{return null;
} else
{return this__19308.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__19309 = this;
if((k == null))
{if(this__19309.has_nil_QMARK_)
{return this__19309.nil_val;
} else
{return not_found;
}
} else
{if((this__19309.root == null))
{return not_found;
} else
{return this__19309.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19310 = this;
if(this__19310.edit)
{return this__19310.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__19311 = this;
var tcoll__19312 = this;
if(this__19311.edit)
{if((function (){var G__19313__19314 = o;
if(G__19313__19314)
{if((function (){var or__3824__auto____19315 = (G__19313__19314.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____19315)
{return or__3824__auto____19315;
} else
{return G__19313__19314.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__19313__19314.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__19313__19314);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__19313__19314);
}
})())
{return tcoll__19312.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__19316 = cljs.core.seq.call(null,o);
var tcoll__19317 = tcoll__19312;
while(true){
var temp__3971__auto____19318 = cljs.core.first.call(null,es__19316);
if(cljs.core.truth_(temp__3971__auto____19318))
{var e__19319 = temp__3971__auto____19318;
{
var G__19330 = cljs.core.next.call(null,es__19316);
var G__19331 = tcoll__19317.assoc_BANG_(cljs.core.key.call(null,e__19319),cljs.core.val.call(null,e__19319));
es__19316 = G__19330;
tcoll__19317 = G__19331;
continue;
}
} else
{return tcoll__19317;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__19320 = this;
var tcoll__19321 = this;
if(this__19320.edit)
{if((k == null))
{if((this__19320.nil_val === v))
{} else
{this__19320.nil_val = v;
}
if(this__19320.has_nil_QMARK_)
{} else
{this__19320.count = (this__19320.count + 1);
this__19320.has_nil_QMARK_ = true;
}
return tcoll__19321;
} else
{var added_leaf_QMARK___19322 = (new cljs.core.Box(false));
var node__19323 = (((this__19320.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__19320.root).inode_assoc_BANG_(this__19320.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___19322);
if((node__19323 === this__19320.root))
{} else
{this__19320.root = node__19323;
}
if(added_leaf_QMARK___19322.val)
{this__19320.count = (this__19320.count + 1);
} else
{}
return tcoll__19321;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__19324 = this;
var tcoll__19325 = this;
if(this__19324.edit)
{if((k == null))
{if(this__19324.has_nil_QMARK_)
{this__19324.has_nil_QMARK_ = false;
this__19324.nil_val = null;
this__19324.count = (this__19324.count - 1);
return tcoll__19325;
} else
{return tcoll__19325;
}
} else
{if((this__19324.root == null))
{return tcoll__19325;
} else
{var removed_leaf_QMARK___19326 = (new cljs.core.Box(false));
var node__19327 = this__19324.root.inode_without_BANG_(this__19324.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___19326);
if((node__19327 === this__19324.root))
{} else
{this__19324.root = node__19327;
}
if(cljs.core.truth_((removed_leaf_QMARK___19326[0])))
{this__19324.count = (this__19324.count - 1);
} else
{}
return tcoll__19325;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__19328 = this;
var tcoll__19329 = this;
if(this__19328.edit)
{this__19328.edit = null;
return (new cljs.core.PersistentHashMap(null,this__19328.count,this__19328.root,this__19328.has_nil_QMARK_,this__19328.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__19334 = node;
var stack__19335 = stack;
while(true){
if(!((t__19334 == null)))
{{
var G__19336 = ((ascending_QMARK_)?t__19334.left:t__19334.right);
var G__19337 = cljs.core.conj.call(null,stack__19335,t__19334);
t__19334 = G__19336;
stack__19335 = G__19337;
continue;
}
} else
{return stack__19335;
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
var this__19338 = this;
var h__2057__auto____19339 = this__19338.__hash;
if(!((h__2057__auto____19339 == null)))
{return h__2057__auto____19339;
} else
{var h__2057__auto____19340 = cljs.core.hash_coll.call(null,coll);
this__19338.__hash = h__2057__auto____19340;
return h__2057__auto____19340;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19341 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__19342 = this;
var this__19343 = this;
return cljs.core.pr_str.call(null,this__19343);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__19344 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19345 = this;
if((this__19345.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__19345.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__19346 = this;
return cljs.core.peek.call(null,this__19346.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__19347 = this;
var t__19348 = cljs.core.first.call(null,this__19347.stack);
var next_stack__19349 = cljs.core.tree_map_seq_push.call(null,((this__19347.ascending_QMARK_)?t__19348.right:t__19348.left),cljs.core.next.call(null,this__19347.stack),this__19347.ascending_QMARK_);
if(!((next_stack__19349 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__19349,this__19347.ascending_QMARK_,(this__19347.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19350 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19351 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__19351.stack,this__19351.ascending_QMARK_,this__19351.cnt,this__19351.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19352 = this;
return this__19352.meta;
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
{if((function (){var and__3822__auto____19354 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____19354)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____19354;
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
{if((function (){var and__3822__auto____19356 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____19356)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____19356;
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
var init__19360 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__19360))
{return cljs.core.deref.call(null,init__19360);
} else
{var init__19361 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__19360):init__19360);
if(cljs.core.reduced_QMARK_.call(null,init__19361))
{return cljs.core.deref.call(null,init__19361);
} else
{var init__19362 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__19361):init__19361);
if(cljs.core.reduced_QMARK_.call(null,init__19362))
{return cljs.core.deref.call(null,init__19362);
} else
{return init__19362;
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
var this__19365 = this;
var h__2057__auto____19366 = this__19365.__hash;
if(!((h__2057__auto____19366 == null)))
{return h__2057__auto____19366;
} else
{var h__2057__auto____19367 = cljs.core.hash_coll.call(null,coll);
this__19365.__hash = h__2057__auto____19367;
return h__2057__auto____19367;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__19368 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__19369 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__19370 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__19370.key,this__19370.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__19418 = null;
var G__19418__2 = (function (this_sym19371,k){
var this__19373 = this;
var this_sym19371__19374 = this;
var node__19375 = this_sym19371__19374;
return node__19375.cljs$core$ILookup$_lookup$arity$2(node__19375,k);
});
var G__19418__3 = (function (this_sym19372,k,not_found){
var this__19373 = this;
var this_sym19372__19376 = this;
var node__19377 = this_sym19372__19376;
return node__19377.cljs$core$ILookup$_lookup$arity$3(node__19377,k,not_found);
});
G__19418 = function(this_sym19372,k,not_found){
switch(arguments.length){
case 2:
return G__19418__2.call(this,this_sym19372,k);
case 3:
return G__19418__3.call(this,this_sym19372,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19418;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym19363,args19364){
var this__19378 = this;
return this_sym19363.call.apply(this_sym19363,[this_sym19363].concat(args19364.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__19379 = this;
return cljs.core.PersistentVector.fromArray([this__19379.key,this__19379.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__19380 = this;
return this__19380.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__19381 = this;
return this__19381.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__19382 = this;
var node__19383 = this;
return ins.balance_right(node__19383);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__19384 = this;
var node__19385 = this;
return (new cljs.core.RedNode(this__19384.key,this__19384.val,this__19384.left,this__19384.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__19386 = this;
var node__19387 = this;
return cljs.core.balance_right_del.call(null,this__19386.key,this__19386.val,this__19386.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__19388 = this;
var node__19389 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__19390 = this;
var node__19391 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__19391,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__19392 = this;
var node__19393 = this;
return cljs.core.balance_left_del.call(null,this__19392.key,this__19392.val,del,this__19392.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__19394 = this;
var node__19395 = this;
return ins.balance_left(node__19395);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__19396 = this;
var node__19397 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__19397,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__19419 = null;
var G__19419__0 = (function (){
var this__19398 = this;
var this__19400 = this;
return cljs.core.pr_str.call(null,this__19400);
});
G__19419 = function(){
switch(arguments.length){
case 0:
return G__19419__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19419;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__19401 = this;
var node__19402 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__19402,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__19403 = this;
var node__19404 = this;
return node__19404;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__19405 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__19406 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__19407 = this;
return cljs.core.list.call(null,this__19407.key,this__19407.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__19408 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__19409 = this;
return this__19409.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__19410 = this;
return cljs.core.PersistentVector.fromArray([this__19410.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__19411 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__19411.key,this__19411.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19412 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__19413 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__19413.key,this__19413.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__19414 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__19415 = this;
if((n === 0))
{return this__19415.key;
} else
{if((n === 1))
{return this__19415.val;
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
var this__19416 = this;
if((n === 0))
{return this__19416.key;
} else
{if((n === 1))
{return this__19416.val;
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
var this__19417 = this;
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
var this__19422 = this;
var h__2057__auto____19423 = this__19422.__hash;
if(!((h__2057__auto____19423 == null)))
{return h__2057__auto____19423;
} else
{var h__2057__auto____19424 = cljs.core.hash_coll.call(null,coll);
this__19422.__hash = h__2057__auto____19424;
return h__2057__auto____19424;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__19425 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__19426 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__19427 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__19427.key,this__19427.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__19475 = null;
var G__19475__2 = (function (this_sym19428,k){
var this__19430 = this;
var this_sym19428__19431 = this;
var node__19432 = this_sym19428__19431;
return node__19432.cljs$core$ILookup$_lookup$arity$2(node__19432,k);
});
var G__19475__3 = (function (this_sym19429,k,not_found){
var this__19430 = this;
var this_sym19429__19433 = this;
var node__19434 = this_sym19429__19433;
return node__19434.cljs$core$ILookup$_lookup$arity$3(node__19434,k,not_found);
});
G__19475 = function(this_sym19429,k,not_found){
switch(arguments.length){
case 2:
return G__19475__2.call(this,this_sym19429,k);
case 3:
return G__19475__3.call(this,this_sym19429,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19475;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym19420,args19421){
var this__19435 = this;
return this_sym19420.call.apply(this_sym19420,[this_sym19420].concat(args19421.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__19436 = this;
return cljs.core.PersistentVector.fromArray([this__19436.key,this__19436.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__19437 = this;
return this__19437.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__19438 = this;
return this__19438.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__19439 = this;
var node__19440 = this;
return (new cljs.core.RedNode(this__19439.key,this__19439.val,this__19439.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__19441 = this;
var node__19442 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__19443 = this;
var node__19444 = this;
return (new cljs.core.RedNode(this__19443.key,this__19443.val,this__19443.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__19445 = this;
var node__19446 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__19447 = this;
var node__19448 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__19448,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__19449 = this;
var node__19450 = this;
return (new cljs.core.RedNode(this__19449.key,this__19449.val,del,this__19449.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__19451 = this;
var node__19452 = this;
return (new cljs.core.RedNode(this__19451.key,this__19451.val,ins,this__19451.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__19453 = this;
var node__19454 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__19453.left))
{return (new cljs.core.RedNode(this__19453.key,this__19453.val,this__19453.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__19453.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__19453.right))
{return (new cljs.core.RedNode(this__19453.right.key,this__19453.right.val,(new cljs.core.BlackNode(this__19453.key,this__19453.val,this__19453.left,this__19453.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__19453.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__19454,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__19476 = null;
var G__19476__0 = (function (){
var this__19455 = this;
var this__19457 = this;
return cljs.core.pr_str.call(null,this__19457);
});
G__19476 = function(){
switch(arguments.length){
case 0:
return G__19476__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19476;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__19458 = this;
var node__19459 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__19458.right))
{return (new cljs.core.RedNode(this__19458.key,this__19458.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__19458.left,null)),this__19458.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__19458.left))
{return (new cljs.core.RedNode(this__19458.left.key,this__19458.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__19458.left.left,null)),(new cljs.core.BlackNode(this__19458.key,this__19458.val,this__19458.left.right,this__19458.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__19459,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__19460 = this;
var node__19461 = this;
return (new cljs.core.BlackNode(this__19460.key,this__19460.val,this__19460.left,this__19460.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__19462 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__19463 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__19464 = this;
return cljs.core.list.call(null,this__19464.key,this__19464.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__19465 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__19466 = this;
return this__19466.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__19467 = this;
return cljs.core.PersistentVector.fromArray([this__19467.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__19468 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__19468.key,this__19468.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19469 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__19470 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__19470.key,this__19470.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__19471 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__19472 = this;
if((n === 0))
{return this__19472.key;
} else
{if((n === 1))
{return this__19472.val;
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
var this__19473 = this;
if((n === 0))
{return this__19473.key;
} else
{if((n === 1))
{return this__19473.val;
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
var this__19474 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__19480 = comp.call(null,k,tree.key);
if((c__19480 === 0))
{(found[0] = tree);
return null;
} else
{if((c__19480 < 0))
{var ins__19481 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__19481 == null)))
{return tree.add_left(ins__19481);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__19482 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__19482 == null)))
{return tree.add_right(ins__19482);
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
{var app__19485 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__19485))
{return (new cljs.core.RedNode(app__19485.key,app__19485.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__19485.left,null)),(new cljs.core.RedNode(right.key,right.val,app__19485.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__19485,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__19486 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__19486))
{return (new cljs.core.RedNode(app__19486.key,app__19486.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__19486.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__19486.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__19486,right.right,null)));
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
{var c__19492 = comp.call(null,k,tree.key);
if((c__19492 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__19492 < 0))
{var del__19493 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____19494 = !((del__19493 == null));
if(or__3824__auto____19494)
{return or__3824__auto____19494;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__19493,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__19493,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__19495 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____19496 = !((del__19495 == null));
if(or__3824__auto____19496)
{return or__3824__auto____19496;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__19495);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__19495,null));
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
var tk__19499 = tree.key;
var c__19500 = comp.call(null,k,tk__19499);
if((c__19500 === 0))
{return tree.replace(tk__19499,v,tree.left,tree.right);
} else
{if((c__19500 < 0))
{return tree.replace(tk__19499,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__19499,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__19503 = this;
var h__2057__auto____19504 = this__19503.__hash;
if(!((h__2057__auto____19504 == null)))
{return h__2057__auto____19504;
} else
{var h__2057__auto____19505 = cljs.core.hash_imap.call(null,coll);
this__19503.__hash = h__2057__auto____19505;
return h__2057__auto____19505;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19506 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19507 = this;
var n__19508 = coll.entry_at(k);
if(!((n__19508 == null)))
{return n__19508.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__19509 = this;
var found__19510 = [null];
var t__19511 = cljs.core.tree_map_add.call(null,this__19509.comp,this__19509.tree,k,v,found__19510);
if((t__19511 == null))
{var found_node__19512 = cljs.core.nth.call(null,found__19510,0);
if(cljs.core._EQ_.call(null,v,found_node__19512.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__19509.comp,cljs.core.tree_map_replace.call(null,this__19509.comp,this__19509.tree,k,v),this__19509.cnt,this__19509.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__19509.comp,t__19511.blacken(),(this__19509.cnt + 1),this__19509.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__19513 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__19547 = null;
var G__19547__2 = (function (this_sym19514,k){
var this__19516 = this;
var this_sym19514__19517 = this;
var coll__19518 = this_sym19514__19517;
return coll__19518.cljs$core$ILookup$_lookup$arity$2(coll__19518,k);
});
var G__19547__3 = (function (this_sym19515,k,not_found){
var this__19516 = this;
var this_sym19515__19519 = this;
var coll__19520 = this_sym19515__19519;
return coll__19520.cljs$core$ILookup$_lookup$arity$3(coll__19520,k,not_found);
});
G__19547 = function(this_sym19515,k,not_found){
switch(arguments.length){
case 2:
return G__19547__2.call(this,this_sym19515,k);
case 3:
return G__19547__3.call(this,this_sym19515,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19547;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym19501,args19502){
var this__19521 = this;
return this_sym19501.call.apply(this_sym19501,[this_sym19501].concat(args19502.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__19522 = this;
if(!((this__19522.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__19522.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__19523 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__19524 = this;
if((this__19524.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__19524.tree,false,this__19524.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__19525 = this;
var this__19526 = this;
return cljs.core.pr_str.call(null,this__19526);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__19527 = this;
var coll__19528 = this;
var t__19529 = this__19527.tree;
while(true){
if(!((t__19529 == null)))
{var c__19530 = this__19527.comp.call(null,k,t__19529.key);
if((c__19530 === 0))
{return t__19529;
} else
{if((c__19530 < 0))
{{
var G__19548 = t__19529.left;
t__19529 = G__19548;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__19549 = t__19529.right;
t__19529 = G__19549;
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
var this__19531 = this;
if((this__19531.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__19531.tree,ascending_QMARK_,this__19531.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__19532 = this;
if((this__19532.cnt > 0))
{var stack__19533 = null;
var t__19534 = this__19532.tree;
while(true){
if(!((t__19534 == null)))
{var c__19535 = this__19532.comp.call(null,k,t__19534.key);
if((c__19535 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__19533,t__19534),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__19535 < 0))
{{
var G__19550 = cljs.core.conj.call(null,stack__19533,t__19534);
var G__19551 = t__19534.left;
stack__19533 = G__19550;
t__19534 = G__19551;
continue;
}
} else
{{
var G__19552 = stack__19533;
var G__19553 = t__19534.right;
stack__19533 = G__19552;
t__19534 = G__19553;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__19535 > 0))
{{
var G__19554 = cljs.core.conj.call(null,stack__19533,t__19534);
var G__19555 = t__19534.right;
stack__19533 = G__19554;
t__19534 = G__19555;
continue;
}
} else
{{
var G__19556 = stack__19533;
var G__19557 = t__19534.left;
stack__19533 = G__19556;
t__19534 = G__19557;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__19533 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__19533,ascending_QMARK_,-1,null));
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
var this__19536 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__19537 = this;
return this__19537.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19538 = this;
if((this__19538.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__19538.tree,true,this__19538.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19539 = this;
return this__19539.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19540 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19541 = this;
return (new cljs.core.PersistentTreeMap(this__19541.comp,this__19541.tree,this__19541.cnt,meta,this__19541.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19542 = this;
return this__19542.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19543 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__19543.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__19544 = this;
var found__19545 = [null];
var t__19546 = cljs.core.tree_map_remove.call(null,this__19544.comp,this__19544.tree,k,found__19545);
if((t__19546 == null))
{if((cljs.core.nth.call(null,found__19545,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__19544.comp,null,0,this__19544.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__19544.comp,t__19546.blacken(),(this__19544.cnt - 1),this__19544.meta,null));
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
var in__19560 = cljs.core.seq.call(null,keyvals);
var out__19561 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__19560)
{{
var G__19562 = cljs.core.nnext.call(null,in__19560);
var G__19563 = cljs.core.assoc_BANG_.call(null,out__19561,cljs.core.first.call(null,in__19560),cljs.core.second.call(null,in__19560));
in__19560 = G__19562;
out__19561 = G__19563;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__19561);
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
hash_map.cljs$lang$applyTo = (function (arglist__19564){
var keyvals = cljs.core.seq(arglist__19564);;
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
array_map.cljs$lang$applyTo = (function (arglist__19565){
var keyvals = cljs.core.seq(arglist__19565);;
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
var in__19568 = cljs.core.seq.call(null,keyvals);
var out__19569 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__19568)
{{
var G__19570 = cljs.core.nnext.call(null,in__19568);
var G__19571 = cljs.core.assoc.call(null,out__19569,cljs.core.first.call(null,in__19568),cljs.core.second.call(null,in__19568));
in__19568 = G__19570;
out__19569 = G__19571;
continue;
}
} else
{return out__19569;
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
sorted_map.cljs$lang$applyTo = (function (arglist__19572){
var keyvals = cljs.core.seq(arglist__19572);;
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
var in__19575 = cljs.core.seq.call(null,keyvals);
var out__19576 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__19575)
{{
var G__19577 = cljs.core.nnext.call(null,in__19575);
var G__19578 = cljs.core.assoc.call(null,out__19576,cljs.core.first.call(null,in__19575),cljs.core.second.call(null,in__19575));
in__19575 = G__19577;
out__19576 = G__19578;
continue;
}
} else
{return out__19576;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__19579){
var comparator = cljs.core.first(arglist__19579);
var keyvals = cljs.core.rest(arglist__19579);
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
{return cljs.core.reduce.call(null,(function (p1__19580_SHARP_,p2__19581_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____19583 = p1__19580_SHARP_;
if(cljs.core.truth_(or__3824__auto____19583))
{return or__3824__auto____19583;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__19581_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__19584){
var maps = cljs.core.seq(arglist__19584);;
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
{var merge_entry__19592 = (function (m,e){
var k__19590 = cljs.core.first.call(null,e);
var v__19591 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__19590))
{return cljs.core.assoc.call(null,m,k__19590,f.call(null,cljs.core._lookup.call(null,m,k__19590,null),v__19591));
} else
{return cljs.core.assoc.call(null,m,k__19590,v__19591);
}
});
var merge2__19594 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__19592,(function (){var or__3824__auto____19593 = m1;
if(cljs.core.truth_(or__3824__auto____19593))
{return or__3824__auto____19593;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__19594,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__19595){
var f = cljs.core.first(arglist__19595);
var maps = cljs.core.rest(arglist__19595);
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
var ret__19600 = cljs.core.ObjMap.EMPTY;
var keys__19601 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__19601)
{var key__19602 = cljs.core.first.call(null,keys__19601);
var entry__19603 = cljs.core._lookup.call(null,map,key__19602,"\uFDD0'user/not-found");
{
var G__19604 = ((cljs.core.not_EQ_.call(null,entry__19603,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__19600,key__19602,entry__19603):ret__19600);
var G__19605 = cljs.core.next.call(null,keys__19601);
ret__19600 = G__19604;
keys__19601 = G__19605;
continue;
}
} else
{return ret__19600;
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
var this__19609 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__19609.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__19610 = this;
var h__2057__auto____19611 = this__19610.__hash;
if(!((h__2057__auto____19611 == null)))
{return h__2057__auto____19611;
} else
{var h__2057__auto____19612 = cljs.core.hash_iset.call(null,coll);
this__19610.__hash = h__2057__auto____19612;
return h__2057__auto____19612;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__19613 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__19614 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__19614.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__19635 = null;
var G__19635__2 = (function (this_sym19615,k){
var this__19617 = this;
var this_sym19615__19618 = this;
var coll__19619 = this_sym19615__19618;
return coll__19619.cljs$core$ILookup$_lookup$arity$2(coll__19619,k);
});
var G__19635__3 = (function (this_sym19616,k,not_found){
var this__19617 = this;
var this_sym19616__19620 = this;
var coll__19621 = this_sym19616__19620;
return coll__19621.cljs$core$ILookup$_lookup$arity$3(coll__19621,k,not_found);
});
G__19635 = function(this_sym19616,k,not_found){
switch(arguments.length){
case 2:
return G__19635__2.call(this,this_sym19616,k);
case 3:
return G__19635__3.call(this,this_sym19616,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19635;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym19607,args19608){
var this__19622 = this;
return this_sym19607.call.apply(this_sym19607,[this_sym19607].concat(args19608.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19623 = this;
return (new cljs.core.PersistentHashSet(this__19623.meta,cljs.core.assoc.call(null,this__19623.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__19624 = this;
var this__19625 = this;
return cljs.core.pr_str.call(null,this__19625);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19626 = this;
return cljs.core.keys.call(null,this__19626.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__19627 = this;
return (new cljs.core.PersistentHashSet(this__19627.meta,cljs.core.dissoc.call(null,this__19627.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19628 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19629 = this;
var and__3822__auto____19630 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____19630)
{var and__3822__auto____19631 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____19631)
{return cljs.core.every_QMARK_.call(null,(function (p1__19606_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__19606_SHARP_);
}),other);
} else
{return and__3822__auto____19631;
}
} else
{return and__3822__auto____19630;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19632 = this;
return (new cljs.core.PersistentHashSet(meta,this__19632.hash_map,this__19632.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19633 = this;
return this__19633.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19634 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__19634.meta);
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
var G__19653 = null;
var G__19653__2 = (function (this_sym19639,k){
var this__19641 = this;
var this_sym19639__19642 = this;
var tcoll__19643 = this_sym19639__19642;
if((cljs.core._lookup.call(null,this__19641.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__19653__3 = (function (this_sym19640,k,not_found){
var this__19641 = this;
var this_sym19640__19644 = this;
var tcoll__19645 = this_sym19640__19644;
if((cljs.core._lookup.call(null,this__19641.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__19653 = function(this_sym19640,k,not_found){
switch(arguments.length){
case 2:
return G__19653__2.call(this,this_sym19640,k);
case 3:
return G__19653__3.call(this,this_sym19640,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19653;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym19637,args19638){
var this__19646 = this;
return this_sym19637.call.apply(this_sym19637,[this_sym19637].concat(args19638.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__19647 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__19648 = this;
if((cljs.core._lookup.call(null,this__19648.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__19649 = this;
return cljs.core.count.call(null,this__19649.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__19650 = this;
this__19650.transient_map = cljs.core.dissoc_BANG_.call(null,this__19650.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__19651 = this;
this__19651.transient_map = cljs.core.assoc_BANG_.call(null,this__19651.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__19652 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__19652.transient_map),null));
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
var this__19656 = this;
var h__2057__auto____19657 = this__19656.__hash;
if(!((h__2057__auto____19657 == null)))
{return h__2057__auto____19657;
} else
{var h__2057__auto____19658 = cljs.core.hash_iset.call(null,coll);
this__19656.__hash = h__2057__auto____19658;
return h__2057__auto____19658;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__19659 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__19660 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__19660.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__19686 = null;
var G__19686__2 = (function (this_sym19661,k){
var this__19663 = this;
var this_sym19661__19664 = this;
var coll__19665 = this_sym19661__19664;
return coll__19665.cljs$core$ILookup$_lookup$arity$2(coll__19665,k);
});
var G__19686__3 = (function (this_sym19662,k,not_found){
var this__19663 = this;
var this_sym19662__19666 = this;
var coll__19667 = this_sym19662__19666;
return coll__19667.cljs$core$ILookup$_lookup$arity$3(coll__19667,k,not_found);
});
G__19686 = function(this_sym19662,k,not_found){
switch(arguments.length){
case 2:
return G__19686__2.call(this,this_sym19662,k);
case 3:
return G__19686__3.call(this,this_sym19662,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19686;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym19654,args19655){
var this__19668 = this;
return this_sym19654.call.apply(this_sym19654,[this_sym19654].concat(args19655.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19669 = this;
return (new cljs.core.PersistentTreeSet(this__19669.meta,cljs.core.assoc.call(null,this__19669.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__19670 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__19670.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__19671 = this;
var this__19672 = this;
return cljs.core.pr_str.call(null,this__19672);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__19673 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__19673.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__19674 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__19674.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__19675 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__19676 = this;
return cljs.core._comparator.call(null,this__19676.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19677 = this;
return cljs.core.keys.call(null,this__19677.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__19678 = this;
return (new cljs.core.PersistentTreeSet(this__19678.meta,cljs.core.dissoc.call(null,this__19678.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19679 = this;
return cljs.core.count.call(null,this__19679.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19680 = this;
var and__3822__auto____19681 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____19681)
{var and__3822__auto____19682 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____19682)
{return cljs.core.every_QMARK_.call(null,(function (p1__19636_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__19636_SHARP_);
}),other);
} else
{return and__3822__auto____19682;
}
} else
{return and__3822__auto____19681;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19683 = this;
return (new cljs.core.PersistentTreeSet(meta,this__19683.tree_map,this__19683.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19684 = this;
return this__19684.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19685 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__19685.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__19689 = cljs.core.seq.call(null,coll);
var out__19690 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__19689))
{{
var G__19691 = cljs.core.next.call(null,in__19689);
var G__19692 = cljs.core.conj_BANG_.call(null,out__19690,cljs.core.first.call(null,in__19689));
in__19689 = G__19691;
out__19690 = G__19692;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__19690);
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
sorted_set.cljs$lang$applyTo = (function (arglist__19693){
var keys = cljs.core.seq(arglist__19693);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__19695){
var comparator = cljs.core.first(arglist__19695);
var keys = cljs.core.rest(arglist__19695);
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
{var n__19701 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____19702 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____19702))
{var e__19703 = temp__3971__auto____19702;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__19703));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__19701,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__19694_SHARP_){
var temp__3971__auto____19704 = cljs.core.find.call(null,smap,p1__19694_SHARP_);
if(cljs.core.truth_(temp__3971__auto____19704))
{var e__19705 = temp__3971__auto____19704;
return cljs.core.second.call(null,e__19705);
} else
{return p1__19694_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__19735 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__19728,seen){
while(true){
var vec__19729__19730 = p__19728;
var f__19731 = cljs.core.nth.call(null,vec__19729__19730,0,null);
var xs__19732 = vec__19729__19730;
var temp__3974__auto____19733 = cljs.core.seq.call(null,xs__19732);
if(temp__3974__auto____19733)
{var s__19734 = temp__3974__auto____19733;
if(cljs.core.contains_QMARK_.call(null,seen,f__19731))
{{
var G__19736 = cljs.core.rest.call(null,s__19734);
var G__19737 = seen;
p__19728 = G__19736;
seen = G__19737;
continue;
}
} else
{return cljs.core.cons.call(null,f__19731,step.call(null,cljs.core.rest.call(null,s__19734),cljs.core.conj.call(null,seen,f__19731)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__19735.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__19740 = cljs.core.PersistentVector.EMPTY;
var s__19741 = s;
while(true){
if(cljs.core.next.call(null,s__19741))
{{
var G__19742 = cljs.core.conj.call(null,ret__19740,cljs.core.first.call(null,s__19741));
var G__19743 = cljs.core.next.call(null,s__19741);
ret__19740 = G__19742;
s__19741 = G__19743;
continue;
}
} else
{return cljs.core.seq.call(null,ret__19740);
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
{if((function (){var or__3824__auto____19746 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____19746)
{return or__3824__auto____19746;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__19747 = x.lastIndexOf("/");
if((i__19747 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__19747 + 1));
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
if((function (){var or__3824__auto____19750 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____19750)
{return or__3824__auto____19750;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__19751 = x.lastIndexOf("/");
if((i__19751 > -1))
{return cljs.core.subs.call(null,x,2,i__19751);
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
var map__19758 = cljs.core.ObjMap.EMPTY;
var ks__19759 = cljs.core.seq.call(null,keys);
var vs__19760 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____19761 = ks__19759;
if(and__3822__auto____19761)
{return vs__19760;
} else
{return and__3822__auto____19761;
}
})())
{{
var G__19762 = cljs.core.assoc.call(null,map__19758,cljs.core.first.call(null,ks__19759),cljs.core.first.call(null,vs__19760));
var G__19763 = cljs.core.next.call(null,ks__19759);
var G__19764 = cljs.core.next.call(null,vs__19760);
map__19758 = G__19762;
ks__19759 = G__19763;
vs__19760 = G__19764;
continue;
}
} else
{return map__19758;
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
var G__19767__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__19752_SHARP_,p2__19753_SHARP_){
return max_key.call(null,k,p1__19752_SHARP_,p2__19753_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__19767 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19767__delegate.call(this, k, x, y, more);
};
G__19767.cljs$lang$maxFixedArity = 3;
G__19767.cljs$lang$applyTo = (function (arglist__19768){
var k = cljs.core.first(arglist__19768);
var x = cljs.core.first(cljs.core.next(arglist__19768));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19768)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19768)));
return G__19767__delegate(k, x, y, more);
});
G__19767.cljs$lang$arity$variadic = G__19767__delegate;
return G__19767;
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
var G__19769__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__19765_SHARP_,p2__19766_SHARP_){
return min_key.call(null,k,p1__19765_SHARP_,p2__19766_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__19769 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19769__delegate.call(this, k, x, y, more);
};
G__19769.cljs$lang$maxFixedArity = 3;
G__19769.cljs$lang$applyTo = (function (arglist__19770){
var k = cljs.core.first(arglist__19770);
var x = cljs.core.first(cljs.core.next(arglist__19770));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19770)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19770)));
return G__19769__delegate(k, x, y, more);
});
G__19769.cljs$lang$arity$variadic = G__19769__delegate;
return G__19769;
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
var temp__3974__auto____19773 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19773)
{var s__19774 = temp__3974__auto____19773;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__19774),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__19774)));
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
var temp__3974__auto____19777 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19777)
{var s__19778 = temp__3974__auto____19777;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__19778))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__19778),take_while.call(null,pred,cljs.core.rest.call(null,s__19778)));
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
var comp__19780 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__19780.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__19792 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____19793 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____19793))
{var vec__19794__19795 = temp__3974__auto____19793;
var e__19796 = cljs.core.nth.call(null,vec__19794__19795,0,null);
var s__19797 = vec__19794__19795;
if(cljs.core.truth_(include__19792.call(null,e__19796)))
{return s__19797;
} else
{return cljs.core.next.call(null,s__19797);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__19792,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____19798 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____19798))
{var vec__19799__19800 = temp__3974__auto____19798;
var e__19801 = cljs.core.nth.call(null,vec__19799__19800,0,null);
var s__19802 = vec__19799__19800;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__19801))?s__19802:cljs.core.next.call(null,s__19802)));
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
var include__19814 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____19815 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____19815))
{var vec__19816__19817 = temp__3974__auto____19815;
var e__19818 = cljs.core.nth.call(null,vec__19816__19817,0,null);
var s__19819 = vec__19816__19817;
if(cljs.core.truth_(include__19814.call(null,e__19818)))
{return s__19819;
} else
{return cljs.core.next.call(null,s__19819);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__19814,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____19820 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____19820))
{var vec__19821__19822 = temp__3974__auto____19820;
var e__19823 = cljs.core.nth.call(null,vec__19821__19822,0,null);
var s__19824 = vec__19821__19822;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__19823))?s__19824:cljs.core.next.call(null,s__19824)));
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
var this__19825 = this;
var h__2057__auto____19826 = this__19825.__hash;
if(!((h__2057__auto____19826 == null)))
{return h__2057__auto____19826;
} else
{var h__2057__auto____19827 = cljs.core.hash_coll.call(null,rng);
this__19825.__hash = h__2057__auto____19827;
return h__2057__auto____19827;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__19828 = this;
if((this__19828.step > 0))
{if(((this__19828.start + this__19828.step) < this__19828.end))
{return (new cljs.core.Range(this__19828.meta,(this__19828.start + this__19828.step),this__19828.end,this__19828.step,null));
} else
{return null;
}
} else
{if(((this__19828.start + this__19828.step) > this__19828.end))
{return (new cljs.core.Range(this__19828.meta,(this__19828.start + this__19828.step),this__19828.end,this__19828.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__19829 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__19830 = this;
var this__19831 = this;
return cljs.core.pr_str.call(null,this__19831);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__19832 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__19833 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__19834 = this;
if((this__19834.step > 0))
{if((this__19834.start < this__19834.end))
{return rng;
} else
{return null;
}
} else
{if((this__19834.start > this__19834.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__19835 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__19835.end - this__19835.start) / this__19835.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__19836 = this;
return this__19836.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__19837 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__19837.meta,(this__19837.start + this__19837.step),this__19837.end,this__19837.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__19838 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__19839 = this;
return (new cljs.core.Range(meta,this__19839.start,this__19839.end,this__19839.step,this__19839.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__19840 = this;
return this__19840.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__19841 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__19841.start + (n * this__19841.step));
} else
{if((function (){var and__3822__auto____19842 = (this__19841.start > this__19841.end);
if(and__3822__auto____19842)
{return (this__19841.step === 0);
} else
{return and__3822__auto____19842;
}
})())
{return this__19841.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__19843 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__19843.start + (n * this__19843.step));
} else
{if((function (){var and__3822__auto____19844 = (this__19843.start > this__19843.end);
if(and__3822__auto____19844)
{return (this__19843.step === 0);
} else
{return and__3822__auto____19844;
}
})())
{return this__19843.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__19845 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__19845.meta);
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
var temp__3974__auto____19848 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19848)
{var s__19849 = temp__3974__auto____19848;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__19849),take_nth.call(null,n,cljs.core.drop.call(null,n,s__19849)));
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
var temp__3974__auto____19856 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19856)
{var s__19857 = temp__3974__auto____19856;
var fst__19858 = cljs.core.first.call(null,s__19857);
var fv__19859 = f.call(null,fst__19858);
var run__19860 = cljs.core.cons.call(null,fst__19858,cljs.core.take_while.call(null,(function (p1__19850_SHARP_){
return cljs.core._EQ_.call(null,fv__19859,f.call(null,p1__19850_SHARP_));
}),cljs.core.next.call(null,s__19857)));
return cljs.core.cons.call(null,run__19860,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__19860),s__19857))));
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
var temp__3971__auto____19875 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____19875)
{var s__19876 = temp__3971__auto____19875;
return reductions.call(null,f,cljs.core.first.call(null,s__19876),cljs.core.rest.call(null,s__19876));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19877 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19877)
{var s__19878 = temp__3974__auto____19877;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__19878)),cljs.core.rest.call(null,s__19878));
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
var G__19881 = null;
var G__19881__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__19881__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__19881__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__19881__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__19881__4 = (function() { 
var G__19882__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__19882 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19882__delegate.call(this, x, y, z, args);
};
G__19882.cljs$lang$maxFixedArity = 3;
G__19882.cljs$lang$applyTo = (function (arglist__19883){
var x = cljs.core.first(arglist__19883);
var y = cljs.core.first(cljs.core.next(arglist__19883));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19883)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19883)));
return G__19882__delegate(x, y, z, args);
});
G__19882.cljs$lang$arity$variadic = G__19882__delegate;
return G__19882;
})()
;
G__19881 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19881__0.call(this);
case 1:
return G__19881__1.call(this,x);
case 2:
return G__19881__2.call(this,x,y);
case 3:
return G__19881__3.call(this,x,y,z);
default:
return G__19881__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19881.cljs$lang$maxFixedArity = 3;
G__19881.cljs$lang$applyTo = G__19881__4.cljs$lang$applyTo;
return G__19881;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__19884 = null;
var G__19884__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__19884__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__19884__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__19884__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__19884__4 = (function() { 
var G__19885__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__19885 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19885__delegate.call(this, x, y, z, args);
};
G__19885.cljs$lang$maxFixedArity = 3;
G__19885.cljs$lang$applyTo = (function (arglist__19886){
var x = cljs.core.first(arglist__19886);
var y = cljs.core.first(cljs.core.next(arglist__19886));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19886)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19886)));
return G__19885__delegate(x, y, z, args);
});
G__19885.cljs$lang$arity$variadic = G__19885__delegate;
return G__19885;
})()
;
G__19884 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19884__0.call(this);
case 1:
return G__19884__1.call(this,x);
case 2:
return G__19884__2.call(this,x,y);
case 3:
return G__19884__3.call(this,x,y,z);
default:
return G__19884__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19884.cljs$lang$maxFixedArity = 3;
G__19884.cljs$lang$applyTo = G__19884__4.cljs$lang$applyTo;
return G__19884;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__19887 = null;
var G__19887__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__19887__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__19887__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__19887__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__19887__4 = (function() { 
var G__19888__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__19888 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19888__delegate.call(this, x, y, z, args);
};
G__19888.cljs$lang$maxFixedArity = 3;
G__19888.cljs$lang$applyTo = (function (arglist__19889){
var x = cljs.core.first(arglist__19889);
var y = cljs.core.first(cljs.core.next(arglist__19889));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19889)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19889)));
return G__19888__delegate(x, y, z, args);
});
G__19888.cljs$lang$arity$variadic = G__19888__delegate;
return G__19888;
})()
;
G__19887 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19887__0.call(this);
case 1:
return G__19887__1.call(this,x);
case 2:
return G__19887__2.call(this,x,y);
case 3:
return G__19887__3.call(this,x,y,z);
default:
return G__19887__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19887.cljs$lang$maxFixedArity = 3;
G__19887.cljs$lang$applyTo = G__19887__4.cljs$lang$applyTo;
return G__19887;
})()
});
var juxt__4 = (function() { 
var G__19890__delegate = function (f,g,h,fs){
var fs__19880 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__19891 = null;
var G__19891__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__19861_SHARP_,p2__19862_SHARP_){
return cljs.core.conj.call(null,p1__19861_SHARP_,p2__19862_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__19880);
});
var G__19891__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__19863_SHARP_,p2__19864_SHARP_){
return cljs.core.conj.call(null,p1__19863_SHARP_,p2__19864_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__19880);
});
var G__19891__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__19865_SHARP_,p2__19866_SHARP_){
return cljs.core.conj.call(null,p1__19865_SHARP_,p2__19866_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__19880);
});
var G__19891__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__19867_SHARP_,p2__19868_SHARP_){
return cljs.core.conj.call(null,p1__19867_SHARP_,p2__19868_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__19880);
});
var G__19891__4 = (function() { 
var G__19892__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__19869_SHARP_,p2__19870_SHARP_){
return cljs.core.conj.call(null,p1__19869_SHARP_,cljs.core.apply.call(null,p2__19870_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__19880);
};
var G__19892 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19892__delegate.call(this, x, y, z, args);
};
G__19892.cljs$lang$maxFixedArity = 3;
G__19892.cljs$lang$applyTo = (function (arglist__19893){
var x = cljs.core.first(arglist__19893);
var y = cljs.core.first(cljs.core.next(arglist__19893));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19893)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19893)));
return G__19892__delegate(x, y, z, args);
});
G__19892.cljs$lang$arity$variadic = G__19892__delegate;
return G__19892;
})()
;
G__19891 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19891__0.call(this);
case 1:
return G__19891__1.call(this,x);
case 2:
return G__19891__2.call(this,x,y);
case 3:
return G__19891__3.call(this,x,y,z);
default:
return G__19891__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19891.cljs$lang$maxFixedArity = 3;
G__19891.cljs$lang$applyTo = G__19891__4.cljs$lang$applyTo;
return G__19891;
})()
};
var G__19890 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19890__delegate.call(this, f, g, h, fs);
};
G__19890.cljs$lang$maxFixedArity = 3;
G__19890.cljs$lang$applyTo = (function (arglist__19894){
var f = cljs.core.first(arglist__19894);
var g = cljs.core.first(cljs.core.next(arglist__19894));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19894)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19894)));
return G__19890__delegate(f, g, h, fs);
});
G__19890.cljs$lang$arity$variadic = G__19890__delegate;
return G__19890;
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
var G__19897 = cljs.core.next.call(null,coll);
coll = G__19897;
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
if(cljs.core.truth_((function (){var and__3822__auto____19896 = cljs.core.seq.call(null,coll);
if(and__3822__auto____19896)
{return (n > 0);
} else
{return and__3822__auto____19896;
}
})()))
{{
var G__19898 = (n - 1);
var G__19899 = cljs.core.next.call(null,coll);
n = G__19898;
coll = G__19899;
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
var matches__19901 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__19901),s))
{if((cljs.core.count.call(null,matches__19901) === 1))
{return cljs.core.first.call(null,matches__19901);
} else
{return cljs.core.vec.call(null,matches__19901);
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
var matches__19903 = re.exec(s);
if((matches__19903 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__19903) === 1))
{return cljs.core.first.call(null,matches__19903);
} else
{return cljs.core.vec.call(null,matches__19903);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__19908 = cljs.core.re_find.call(null,re,s);
var match_idx__19909 = s.search(re);
var match_str__19910 = ((cljs.core.coll_QMARK_.call(null,match_data__19908))?cljs.core.first.call(null,match_data__19908):match_data__19908);
var post_match__19911 = cljs.core.subs.call(null,s,(match_idx__19909 + cljs.core.count.call(null,match_str__19910)));
if(cljs.core.truth_(match_data__19908))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__19908,re_seq.call(null,re,post_match__19911));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__19918__19919 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___19920 = cljs.core.nth.call(null,vec__19918__19919,0,null);
var flags__19921 = cljs.core.nth.call(null,vec__19918__19919,1,null);
var pattern__19922 = cljs.core.nth.call(null,vec__19918__19919,2,null);
return (new RegExp(pattern__19922,flags__19921));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__19912_SHARP_){
return print_one.call(null,p1__19912_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____19932 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____19932))
{var and__3822__auto____19936 = (function (){var G__19933__19934 = obj;
if(G__19933__19934)
{if((function (){var or__3824__auto____19935 = (G__19933__19934.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____19935)
{return or__3824__auto____19935;
} else
{return G__19933__19934.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__19933__19934.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__19933__19934);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__19933__19934);
}
})();
if(cljs.core.truth_(and__3822__auto____19936))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____19936;
}
} else
{return and__3822__auto____19932;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____19937 = !((obj == null));
if(and__3822__auto____19937)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____19937;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__19938__19939 = obj;
if(G__19938__19939)
{if((function (){var or__3824__auto____19940 = (G__19938__19939.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____19940)
{return or__3824__auto____19940;
} else
{return G__19938__19939.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__19938__19939.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__19938__19939);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__19938__19939);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__19955 = cljs.core.first.call(null,objs);
var sb__19956 = (new goog.string.StringBuffer());
var G__19957__19958 = cljs.core.seq.call(null,objs);
if(G__19957__19958)
{var obj__19959 = cljs.core.first.call(null,G__19957__19958);
var G__19957__19960 = G__19957__19958;
while(true){
if((obj__19959 === first_obj__19955))
{} else
{sb__19956.append(" ");
}
var G__19961__19962 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__19959,opts));
if(G__19961__19962)
{var string__19963 = cljs.core.first.call(null,G__19961__19962);
var G__19961__19964 = G__19961__19962;
while(true){
sb__19956.append(string__19963);
var temp__3974__auto____19965 = cljs.core.next.call(null,G__19961__19964);
if(temp__3974__auto____19965)
{var G__19961__19966 = temp__3974__auto____19965;
{
var G__19969 = cljs.core.first.call(null,G__19961__19966);
var G__19970 = G__19961__19966;
string__19963 = G__19969;
G__19961__19964 = G__19970;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____19967 = cljs.core.next.call(null,G__19957__19960);
if(temp__3974__auto____19967)
{var G__19957__19968 = temp__3974__auto____19967;
{
var G__19971 = cljs.core.first.call(null,G__19957__19968);
var G__19972 = G__19957__19968;
obj__19959 = G__19971;
G__19957__19960 = G__19972;
continue;
}
} else
{}
break;
}
} else
{}
return sb__19956;
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
var sb__19974 = cljs.core.pr_sb.call(null,objs,opts);
sb__19974.append("\n");
return [cljs.core.str(sb__19974)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__19988 = cljs.core.first.call(null,objs);
var G__19989__19990 = cljs.core.seq.call(null,objs);
if(G__19989__19990)
{var obj__19991 = cljs.core.first.call(null,G__19989__19990);
var G__19989__19992 = G__19989__19990;
while(true){
if((obj__19991 === first_obj__19988))
{} else
{cljs.core.string_print.call(null," ");
}
var G__19993__19994 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__19991,opts));
if(G__19993__19994)
{var string__19995 = cljs.core.first.call(null,G__19993__19994);
var G__19993__19996 = G__19993__19994;
while(true){
cljs.core.string_print.call(null,string__19995);
var temp__3974__auto____19997 = cljs.core.next.call(null,G__19993__19996);
if(temp__3974__auto____19997)
{var G__19993__19998 = temp__3974__auto____19997;
{
var G__20001 = cljs.core.first.call(null,G__19993__19998);
var G__20002 = G__19993__19998;
string__19995 = G__20001;
G__19993__19996 = G__20002;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____19999 = cljs.core.next.call(null,G__19989__19992);
if(temp__3974__auto____19999)
{var G__19989__20000 = temp__3974__auto____19999;
{
var G__20003 = cljs.core.first.call(null,G__19989__20000);
var G__20004 = G__19989__20000;
obj__19991 = G__20003;
G__19989__19992 = G__20004;
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
pr_str.cljs$lang$applyTo = (function (arglist__20005){
var objs = cljs.core.seq(arglist__20005);;
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
prn_str.cljs$lang$applyTo = (function (arglist__20006){
var objs = cljs.core.seq(arglist__20006);;
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
pr.cljs$lang$applyTo = (function (arglist__20007){
var objs = cljs.core.seq(arglist__20007);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__20008){
var objs = cljs.core.seq(arglist__20008);;
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
print_str.cljs$lang$applyTo = (function (arglist__20009){
var objs = cljs.core.seq(arglist__20009);;
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
println.cljs$lang$applyTo = (function (arglist__20010){
var objs = cljs.core.seq(arglist__20010);;
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
println_str.cljs$lang$applyTo = (function (arglist__20011){
var objs = cljs.core.seq(arglist__20011);;
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
prn.cljs$lang$applyTo = (function (arglist__20012){
var objs = cljs.core.seq(arglist__20012);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__20013 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__20013,"{",", ","}",opts,coll);
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
var pr_pair__20014 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__20014,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__20015 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__20015,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____20016 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____20016))
{var nspc__20017 = temp__3974__auto____20016;
return [cljs.core.str(nspc__20017),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____20018 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____20018))
{var nspc__20019 = temp__3974__auto____20018;
return [cljs.core.str(nspc__20019),cljs.core.str("/")].join('');
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
var pr_pair__20020 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__20020,"{",", ","}",opts,coll);
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
var normalize__20022 = (function (n,len){
var ns__20021 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__20021) < len))
{{
var G__20024 = [cljs.core.str("0"),cljs.core.str(ns__20021)].join('');
ns__20021 = G__20024;
continue;
}
} else
{return ns__20021;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__20022.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__20022.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__20022.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__20022.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__20022.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__20022.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__20023 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__20023,"{",", ","}",opts,coll);
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
var this__20025 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__20026 = this;
var G__20027__20028 = cljs.core.seq.call(null,this__20026.watches);
if(G__20027__20028)
{var G__20030__20032 = cljs.core.first.call(null,G__20027__20028);
var vec__20031__20033 = G__20030__20032;
var key__20034 = cljs.core.nth.call(null,vec__20031__20033,0,null);
var f__20035 = cljs.core.nth.call(null,vec__20031__20033,1,null);
var G__20027__20036 = G__20027__20028;
var G__20030__20037 = G__20030__20032;
var G__20027__20038 = G__20027__20036;
while(true){
var vec__20039__20040 = G__20030__20037;
var key__20041 = cljs.core.nth.call(null,vec__20039__20040,0,null);
var f__20042 = cljs.core.nth.call(null,vec__20039__20040,1,null);
var G__20027__20043 = G__20027__20038;
f__20042.call(null,key__20041,this$,oldval,newval);
var temp__3974__auto____20044 = cljs.core.next.call(null,G__20027__20043);
if(temp__3974__auto____20044)
{var G__20027__20045 = temp__3974__auto____20044;
{
var G__20052 = cljs.core.first.call(null,G__20027__20045);
var G__20053 = G__20027__20045;
G__20030__20037 = G__20052;
G__20027__20038 = G__20053;
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
var this__20046 = this;
return this$.watches = cljs.core.assoc.call(null,this__20046.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__20047 = this;
return this$.watches = cljs.core.dissoc.call(null,this__20047.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__20048 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__20048.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__20049 = this;
return this__20049.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__20050 = this;
return this__20050.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__20051 = this;
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
var G__20065__delegate = function (x,p__20054){
var map__20060__20061 = p__20054;
var map__20060__20062 = ((cljs.core.seq_QMARK_.call(null,map__20060__20061))?cljs.core.apply.call(null,cljs.core.hash_map,map__20060__20061):map__20060__20061);
var validator__20063 = cljs.core._lookup.call(null,map__20060__20062,"\uFDD0'validator",null);
var meta__20064 = cljs.core._lookup.call(null,map__20060__20062,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__20064,validator__20063,null));
};
var G__20065 = function (x,var_args){
var p__20054 = null;
if (goog.isDef(var_args)) {
  p__20054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20065__delegate.call(this, x, p__20054);
};
G__20065.cljs$lang$maxFixedArity = 1;
G__20065.cljs$lang$applyTo = (function (arglist__20066){
var x = cljs.core.first(arglist__20066);
var p__20054 = cljs.core.rest(arglist__20066);
return G__20065__delegate(x, p__20054);
});
G__20065.cljs$lang$arity$variadic = G__20065__delegate;
return G__20065;
})()
;
atom = function(x,var_args){
var p__20054 = var_args;
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
var temp__3974__auto____20070 = a.validator;
if(cljs.core.truth_(temp__3974__auto____20070))
{var validate__20071 = temp__3974__auto____20070;
if(cljs.core.truth_(validate__20071.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__20072 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__20072,new_value);
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
var G__20073__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__20073 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__20073__delegate.call(this, a, f, x, y, z, more);
};
G__20073.cljs$lang$maxFixedArity = 5;
G__20073.cljs$lang$applyTo = (function (arglist__20074){
var a = cljs.core.first(arglist__20074);
var f = cljs.core.first(cljs.core.next(arglist__20074));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20074)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20074))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20074)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20074)))));
return G__20073__delegate(a, f, x, y, z, more);
});
G__20073.cljs$lang$arity$variadic = G__20073__delegate;
return G__20073;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__20075){
var iref = cljs.core.first(arglist__20075);
var f = cljs.core.first(cljs.core.next(arglist__20075));
var args = cljs.core.rest(cljs.core.next(arglist__20075));
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
var this__20076 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__20076.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__20077 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__20077.state,(function (p__20078){
var curr_state__20079 = p__20078;
var curr_state__20080 = ((cljs.core.seq_QMARK_.call(null,curr_state__20079))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__20079):curr_state__20079);
var done__20081 = cljs.core._lookup.call(null,curr_state__20080,"\uFDD0'done",null);
if(cljs.core.truth_(done__20081))
{return curr_state__20080;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__20077.f.call(null)});
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
var map__20102__20103 = options;
var map__20102__20104 = ((cljs.core.seq_QMARK_.call(null,map__20102__20103))?cljs.core.apply.call(null,cljs.core.hash_map,map__20102__20103):map__20102__20103);
var keywordize_keys__20105 = cljs.core._lookup.call(null,map__20102__20104,"\uFDD0'keywordize-keys",null);
var keyfn__20106 = (cljs.core.truth_(keywordize_keys__20105)?cljs.core.keyword:cljs.core.str);
var f__20121 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2331__auto____20120 = (function iter__20114(s__20115){
return (new cljs.core.LazySeq(null,false,(function (){
var s__20115__20118 = s__20115;
while(true){
if(cljs.core.seq.call(null,s__20115__20118))
{var k__20119 = cljs.core.first.call(null,s__20115__20118);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__20106.call(null,k__20119),thisfn.call(null,(x[k__20119]))], true),iter__20114.call(null,cljs.core.rest.call(null,s__20115__20118)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2331__auto____20120.call(null,cljs.core.js_keys.call(null,x));
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
return f__20121.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__20122){
var x = cljs.core.first(arglist__20122);
var options = cljs.core.rest(arglist__20122);
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
var mem__20127 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__20131__delegate = function (args){
var temp__3971__auto____20128 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__20127),args,null);
if(cljs.core.truth_(temp__3971__auto____20128))
{var v__20129 = temp__3971__auto____20128;
return v__20129;
} else
{var ret__20130 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__20127,cljs.core.assoc,args,ret__20130);
return ret__20130;
}
};
var G__20131 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__20131__delegate.call(this, args);
};
G__20131.cljs$lang$maxFixedArity = 0;
G__20131.cljs$lang$applyTo = (function (arglist__20132){
var args = cljs.core.seq(arglist__20132);;
return G__20131__delegate(args);
});
G__20131.cljs$lang$arity$variadic = G__20131__delegate;
return G__20131;
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
var ret__20134 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__20134))
{{
var G__20135 = ret__20134;
f = G__20135;
continue;
}
} else
{return ret__20134;
}
break;
}
});
var trampoline__2 = (function() { 
var G__20136__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__20136 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20136__delegate.call(this, f, args);
};
G__20136.cljs$lang$maxFixedArity = 1;
G__20136.cljs$lang$applyTo = (function (arglist__20137){
var f = cljs.core.first(arglist__20137);
var args = cljs.core.rest(arglist__20137);
return G__20136__delegate(f, args);
});
G__20136.cljs$lang$arity$variadic = G__20136__delegate;
return G__20136;
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
var k__20139 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__20139,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__20139,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____20148 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____20148)
{return or__3824__auto____20148;
} else
{var or__3824__auto____20149 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____20149)
{return or__3824__auto____20149;
} else
{var and__3822__auto____20150 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____20150)
{var and__3822__auto____20151 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____20151)
{var and__3822__auto____20152 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____20152)
{var ret__20153 = true;
var i__20154 = 0;
while(true){
if((function (){var or__3824__auto____20155 = cljs.core.not.call(null,ret__20153);
if(or__3824__auto____20155)
{return or__3824__auto____20155;
} else
{return (i__20154 === cljs.core.count.call(null,parent));
}
})())
{return ret__20153;
} else
{{
var G__20156 = isa_QMARK_.call(null,h,child.call(null,i__20154),parent.call(null,i__20154));
var G__20157 = (i__20154 + 1);
ret__20153 = G__20156;
i__20154 = G__20157;
continue;
}
}
break;
}
} else
{return and__3822__auto____20152;
}
} else
{return and__3822__auto____20151;
}
} else
{return and__3822__auto____20150;
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
var tp__20166 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__20167 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__20168 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__20169 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____20170 = ((cljs.core.contains_QMARK_.call(null,tp__20166.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__20168.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__20168.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__20166,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__20169.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__20167,parent,ta__20168),"\uFDD0'descendants":tf__20169.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__20168,tag,td__20167)});
})());
if(cljs.core.truth_(or__3824__auto____20170))
{return or__3824__auto____20170;
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
var parentMap__20175 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__20176 = (cljs.core.truth_(parentMap__20175.call(null,tag))?cljs.core.disj.call(null,parentMap__20175.call(null,tag),parent):cljs.core.set([]));
var newParents__20177 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__20176))?cljs.core.assoc.call(null,parentMap__20175,tag,childsParents__20176):cljs.core.dissoc.call(null,parentMap__20175,tag));
var deriv_seq__20178 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__20158_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__20158_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__20158_SHARP_),cljs.core.second.call(null,p1__20158_SHARP_)));
}),cljs.core.seq.call(null,newParents__20177)));
if(cljs.core.contains_QMARK_.call(null,parentMap__20175.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__20159_SHARP_,p2__20160_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__20159_SHARP_,p2__20160_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__20178));
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
var xprefs__20186 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____20188 = (cljs.core.truth_((function (){var and__3822__auto____20187 = xprefs__20186;
if(cljs.core.truth_(and__3822__auto____20187))
{return xprefs__20186.call(null,y);
} else
{return and__3822__auto____20187;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____20188))
{return or__3824__auto____20188;
} else
{var or__3824__auto____20190 = (function (){var ps__20189 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__20189) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__20189),prefer_table)))
{} else
{}
{
var G__20193 = cljs.core.rest.call(null,ps__20189);
ps__20189 = G__20193;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____20190))
{return or__3824__auto____20190;
} else
{var or__3824__auto____20192 = (function (){var ps__20191 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__20191) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__20191),y,prefer_table)))
{} else
{}
{
var G__20194 = cljs.core.rest.call(null,ps__20191);
ps__20191 = G__20194;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____20192))
{return or__3824__auto____20192;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____20196 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____20196))
{return or__3824__auto____20196;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__20214 = cljs.core.reduce.call(null,(function (be,p__20206){
var vec__20207__20208 = p__20206;
var k__20209 = cljs.core.nth.call(null,vec__20207__20208,0,null);
var ___20210 = cljs.core.nth.call(null,vec__20207__20208,1,null);
var e__20211 = vec__20207__20208;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__20209))
{var be2__20213 = (cljs.core.truth_((function (){var or__3824__auto____20212 = (be == null);
if(or__3824__auto____20212)
{return or__3824__auto____20212;
} else
{return cljs.core.dominates.call(null,k__20209,cljs.core.first.call(null,be),prefer_table);
}
})())?e__20211:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__20213),k__20209,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__20209),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__20213)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__20213;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__20214))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__20214));
return cljs.core.second.call(null,best_entry__20214);
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
if((function (){var and__3822__auto____20218 = mf;
if(and__3822__auto____20218)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____20218;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____20219 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____20219)
{return or__3824__auto____20219;
} else
{var or__3824__auto____20220 = (cljs.core._reset["_"]);
if(or__3824__auto____20220)
{return or__3824__auto____20220;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____20224 = mf;
if(and__3822__auto____20224)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____20224;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____20225 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____20225)
{return or__3824__auto____20225;
} else
{var or__3824__auto____20226 = (cljs.core._add_method["_"]);
if(or__3824__auto____20226)
{return or__3824__auto____20226;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____20230 = mf;
if(and__3822__auto____20230)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____20230;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____20231 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____20231)
{return or__3824__auto____20231;
} else
{var or__3824__auto____20232 = (cljs.core._remove_method["_"]);
if(or__3824__auto____20232)
{return or__3824__auto____20232;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____20236 = mf;
if(and__3822__auto____20236)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____20236;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____20237 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____20237)
{return or__3824__auto____20237;
} else
{var or__3824__auto____20238 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____20238)
{return or__3824__auto____20238;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____20242 = mf;
if(and__3822__auto____20242)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____20242;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____20243 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____20243)
{return or__3824__auto____20243;
} else
{var or__3824__auto____20244 = (cljs.core._get_method["_"]);
if(or__3824__auto____20244)
{return or__3824__auto____20244;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____20248 = mf;
if(and__3822__auto____20248)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____20248;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____20249 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____20249)
{return or__3824__auto____20249;
} else
{var or__3824__auto____20250 = (cljs.core._methods["_"]);
if(or__3824__auto____20250)
{return or__3824__auto____20250;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____20254 = mf;
if(and__3822__auto____20254)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____20254;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____20255 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____20255)
{return or__3824__auto____20255;
} else
{var or__3824__auto____20256 = (cljs.core._prefers["_"]);
if(or__3824__auto____20256)
{return or__3824__auto____20256;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____20260 = mf;
if(and__3822__auto____20260)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____20260;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____20261 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____20261)
{return or__3824__auto____20261;
} else
{var or__3824__auto____20262 = (cljs.core._dispatch["_"]);
if(or__3824__auto____20262)
{return or__3824__auto____20262;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__20265 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__20266 = cljs.core._get_method.call(null,mf,dispatch_val__20265);
if(cljs.core.truth_(target_fn__20266))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__20265)].join('')));
}
return cljs.core.apply.call(null,target_fn__20266,args);
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
var this__20267 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__20268 = this;
cljs.core.swap_BANG_.call(null,this__20268.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__20268.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__20268.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__20268.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__20269 = this;
cljs.core.swap_BANG_.call(null,this__20269.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__20269.method_cache,this__20269.method_table,this__20269.cached_hierarchy,this__20269.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__20270 = this;
cljs.core.swap_BANG_.call(null,this__20270.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__20270.method_cache,this__20270.method_table,this__20270.cached_hierarchy,this__20270.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__20271 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__20271.cached_hierarchy),cljs.core.deref.call(null,this__20271.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__20271.method_cache,this__20271.method_table,this__20271.cached_hierarchy,this__20271.hierarchy);
}
var temp__3971__auto____20272 = cljs.core.deref.call(null,this__20271.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____20272))
{var target_fn__20273 = temp__3971__auto____20272;
return target_fn__20273;
} else
{var temp__3971__auto____20274 = cljs.core.find_and_cache_best_method.call(null,this__20271.name,dispatch_val,this__20271.hierarchy,this__20271.method_table,this__20271.prefer_table,this__20271.method_cache,this__20271.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____20274))
{var target_fn__20275 = temp__3971__auto____20274;
return target_fn__20275;
} else
{return cljs.core.deref.call(null,this__20271.method_table).call(null,this__20271.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__20276 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__20276.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__20276.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__20276.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__20276.method_cache,this__20276.method_table,this__20276.cached_hierarchy,this__20276.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__20277 = this;
return cljs.core.deref.call(null,this__20277.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__20278 = this;
return cljs.core.deref.call(null,this__20278.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__20279 = this;
return cljs.core.do_dispatch.call(null,mf,this__20279.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__20281__delegate = function (_,args){
var self__20280 = this;
return cljs.core._dispatch.call(null,self__20280,args);
};
var G__20281 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20281__delegate.call(this, _, args);
};
G__20281.cljs$lang$maxFixedArity = 1;
G__20281.cljs$lang$applyTo = (function (arglist__20282){
var _ = cljs.core.first(arglist__20282);
var args = cljs.core.rest(arglist__20282);
return G__20281__delegate(_, args);
});
G__20281.cljs$lang$arity$variadic = G__20281__delegate;
return G__20281;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__20283 = this;
return cljs.core._dispatch.call(null,self__20283,args);
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
var this__20284 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_20286,_){
var this__20285 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__20285.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__20287 = this;
return (this__20287.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__20288 = this;
var this__20289 = this;
return cljs.core.pr_str.call(null,this__20289);
});
cljs.core.UUID;
