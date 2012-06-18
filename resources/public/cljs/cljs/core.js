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
var G__5510__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__5510 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5510__delegate.call(this, array, i, idxs);
};
G__5510.cljs$lang$maxFixedArity = 2;
G__5510.cljs$lang$applyTo = (function (arglist__5511){
var array = cljs.core.first(arglist__5511);
var i = cljs.core.first(cljs.core.next(arglist__5511));
var idxs = cljs.core.rest(cljs.core.next(arglist__5511));
return G__5510__delegate(array, i, idxs);
});
G__5510.cljs$lang$arity$variadic = G__5510__delegate;
return G__5510;
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
if((function (){var and__3822__auto____5575 = this$;
if(and__3822__auto____5575)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____5575;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____5576 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5576)
{return or__3824__auto____5576;
} else
{var or__3824__auto____5577 = (cljs.core._invoke["_"]);
if(or__3824__auto____5577)
{return or__3824__auto____5577;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____5578 = this$;
if(and__3822__auto____5578)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____5578;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____5579 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5579)
{return or__3824__auto____5579;
} else
{var or__3824__auto____5580 = (cljs.core._invoke["_"]);
if(or__3824__auto____5580)
{return or__3824__auto____5580;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____5581 = this$;
if(and__3822__auto____5581)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____5581;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____5582 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5582)
{return or__3824__auto____5582;
} else
{var or__3824__auto____5583 = (cljs.core._invoke["_"]);
if(or__3824__auto____5583)
{return or__3824__auto____5583;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____5584 = this$;
if(and__3822__auto____5584)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____5584;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____5585 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5585)
{return or__3824__auto____5585;
} else
{var or__3824__auto____5586 = (cljs.core._invoke["_"]);
if(or__3824__auto____5586)
{return or__3824__auto____5586;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____5587 = this$;
if(and__3822__auto____5587)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____5587;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____5588 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5588)
{return or__3824__auto____5588;
} else
{var or__3824__auto____5589 = (cljs.core._invoke["_"]);
if(or__3824__auto____5589)
{return or__3824__auto____5589;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____5590 = this$;
if(and__3822__auto____5590)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____5590;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____5591 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5591)
{return or__3824__auto____5591;
} else
{var or__3824__auto____5592 = (cljs.core._invoke["_"]);
if(or__3824__auto____5592)
{return or__3824__auto____5592;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____5593 = this$;
if(and__3822__auto____5593)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____5593;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____5594 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5594)
{return or__3824__auto____5594;
} else
{var or__3824__auto____5595 = (cljs.core._invoke["_"]);
if(or__3824__auto____5595)
{return or__3824__auto____5595;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____5596 = this$;
if(and__3822__auto____5596)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____5596;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____5597 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5597)
{return or__3824__auto____5597;
} else
{var or__3824__auto____5598 = (cljs.core._invoke["_"]);
if(or__3824__auto____5598)
{return or__3824__auto____5598;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____5599 = this$;
if(and__3822__auto____5599)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____5599;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____5600 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5600)
{return or__3824__auto____5600;
} else
{var or__3824__auto____5601 = (cljs.core._invoke["_"]);
if(or__3824__auto____5601)
{return or__3824__auto____5601;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____5602 = this$;
if(and__3822__auto____5602)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____5602;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____5603 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5603)
{return or__3824__auto____5603;
} else
{var or__3824__auto____5604 = (cljs.core._invoke["_"]);
if(or__3824__auto____5604)
{return or__3824__auto____5604;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____5605 = this$;
if(and__3822__auto____5605)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____5605;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____5606 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5606)
{return or__3824__auto____5606;
} else
{var or__3824__auto____5607 = (cljs.core._invoke["_"]);
if(or__3824__auto____5607)
{return or__3824__auto____5607;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____5608 = this$;
if(and__3822__auto____5608)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____5608;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____5609 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5609)
{return or__3824__auto____5609;
} else
{var or__3824__auto____5610 = (cljs.core._invoke["_"]);
if(or__3824__auto____5610)
{return or__3824__auto____5610;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____5611 = this$;
if(and__3822__auto____5611)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____5611;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____5612 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5612)
{return or__3824__auto____5612;
} else
{var or__3824__auto____5613 = (cljs.core._invoke["_"]);
if(or__3824__auto____5613)
{return or__3824__auto____5613;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____5614 = this$;
if(and__3822__auto____5614)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____5614;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____5615 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5615)
{return or__3824__auto____5615;
} else
{var or__3824__auto____5616 = (cljs.core._invoke["_"]);
if(or__3824__auto____5616)
{return or__3824__auto____5616;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____5617 = this$;
if(and__3822__auto____5617)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____5617;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____5618 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5618)
{return or__3824__auto____5618;
} else
{var or__3824__auto____5619 = (cljs.core._invoke["_"]);
if(or__3824__auto____5619)
{return or__3824__auto____5619;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____5620 = this$;
if(and__3822__auto____5620)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____5620;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____5621 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5621)
{return or__3824__auto____5621;
} else
{var or__3824__auto____5622 = (cljs.core._invoke["_"]);
if(or__3824__auto____5622)
{return or__3824__auto____5622;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____5623 = this$;
if(and__3822__auto____5623)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____5623;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____5624 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5624)
{return or__3824__auto____5624;
} else
{var or__3824__auto____5625 = (cljs.core._invoke["_"]);
if(or__3824__auto____5625)
{return or__3824__auto____5625;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____5626 = this$;
if(and__3822__auto____5626)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____5626;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____5627 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5627)
{return or__3824__auto____5627;
} else
{var or__3824__auto____5628 = (cljs.core._invoke["_"]);
if(or__3824__auto____5628)
{return or__3824__auto____5628;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____5629 = this$;
if(and__3822__auto____5629)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____5629;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____5630 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5630)
{return or__3824__auto____5630;
} else
{var or__3824__auto____5631 = (cljs.core._invoke["_"]);
if(or__3824__auto____5631)
{return or__3824__auto____5631;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____5632 = this$;
if(and__3822__auto____5632)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____5632;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____5633 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5633)
{return or__3824__auto____5633;
} else
{var or__3824__auto____5634 = (cljs.core._invoke["_"]);
if(or__3824__auto____5634)
{return or__3824__auto____5634;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____5635 = this$;
if(and__3822__auto____5635)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____5635;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____5636 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5636)
{return or__3824__auto____5636;
} else
{var or__3824__auto____5637 = (cljs.core._invoke["_"]);
if(or__3824__auto____5637)
{return or__3824__auto____5637;
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
if((function (){var and__3822__auto____5641 = coll;
if(and__3822__auto____5641)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____5641;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____5642 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____5642)
{return or__3824__auto____5642;
} else
{var or__3824__auto____5643 = (cljs.core._count["_"]);
if(or__3824__auto____5643)
{return or__3824__auto____5643;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____5647 = coll;
if(and__3822__auto____5647)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____5647;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____5648 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____5648)
{return or__3824__auto____5648;
} else
{var or__3824__auto____5649 = (cljs.core._empty["_"]);
if(or__3824__auto____5649)
{return or__3824__auto____5649;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____5653 = coll;
if(and__3822__auto____5653)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____5653;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____5654 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____5654)
{return or__3824__auto____5654;
} else
{var or__3824__auto____5655 = (cljs.core._conj["_"]);
if(or__3824__auto____5655)
{return or__3824__auto____5655;
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
if((function (){var and__3822__auto____5662 = coll;
if(and__3822__auto____5662)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____5662;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____5663 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____5663)
{return or__3824__auto____5663;
} else
{var or__3824__auto____5664 = (cljs.core._nth["_"]);
if(or__3824__auto____5664)
{return or__3824__auto____5664;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____5665 = coll;
if(and__3822__auto____5665)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____5665;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____5666 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____5666)
{return or__3824__auto____5666;
} else
{var or__3824__auto____5667 = (cljs.core._nth["_"]);
if(or__3824__auto____5667)
{return or__3824__auto____5667;
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
if((function (){var and__3822__auto____5671 = coll;
if(and__3822__auto____5671)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____5671;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____5672 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____5672)
{return or__3824__auto____5672;
} else
{var or__3824__auto____5673 = (cljs.core._first["_"]);
if(or__3824__auto____5673)
{return or__3824__auto____5673;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____5677 = coll;
if(and__3822__auto____5677)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____5677;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____5678 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____5678)
{return or__3824__auto____5678;
} else
{var or__3824__auto____5679 = (cljs.core._rest["_"]);
if(or__3824__auto____5679)
{return or__3824__auto____5679;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____5683 = coll;
if(and__3822__auto____5683)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____5683;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____5684 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____5684)
{return or__3824__auto____5684;
} else
{var or__3824__auto____5685 = (cljs.core._next["_"]);
if(or__3824__auto____5685)
{return or__3824__auto____5685;
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
if((function (){var and__3822__auto____5692 = o;
if(and__3822__auto____5692)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____5692;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____5693 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____5693)
{return or__3824__auto____5693;
} else
{var or__3824__auto____5694 = (cljs.core._lookup["_"]);
if(or__3824__auto____5694)
{return or__3824__auto____5694;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____5695 = o;
if(and__3822__auto____5695)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____5695;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____5696 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____5696)
{return or__3824__auto____5696;
} else
{var or__3824__auto____5697 = (cljs.core._lookup["_"]);
if(or__3824__auto____5697)
{return or__3824__auto____5697;
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
if((function (){var and__3822__auto____5701 = coll;
if(and__3822__auto____5701)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____5701;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____5702 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____5702)
{return or__3824__auto____5702;
} else
{var or__3824__auto____5703 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____5703)
{return or__3824__auto____5703;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____5707 = coll;
if(and__3822__auto____5707)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____5707;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____5708 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____5708)
{return or__3824__auto____5708;
} else
{var or__3824__auto____5709 = (cljs.core._assoc["_"]);
if(or__3824__auto____5709)
{return or__3824__auto____5709;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____5713 = coll;
if(and__3822__auto____5713)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____5713;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____5714 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____5714)
{return or__3824__auto____5714;
} else
{var or__3824__auto____5715 = (cljs.core._dissoc["_"]);
if(or__3824__auto____5715)
{return or__3824__auto____5715;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____5719 = coll;
if(and__3822__auto____5719)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____5719;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____5720 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____5720)
{return or__3824__auto____5720;
} else
{var or__3824__auto____5721 = (cljs.core._key["_"]);
if(or__3824__auto____5721)
{return or__3824__auto____5721;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____5725 = coll;
if(and__3822__auto____5725)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____5725;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____5726 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____5726)
{return or__3824__auto____5726;
} else
{var or__3824__auto____5727 = (cljs.core._val["_"]);
if(or__3824__auto____5727)
{return or__3824__auto____5727;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____5731 = coll;
if(and__3822__auto____5731)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____5731;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____5732 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____5732)
{return or__3824__auto____5732;
} else
{var or__3824__auto____5733 = (cljs.core._disjoin["_"]);
if(or__3824__auto____5733)
{return or__3824__auto____5733;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____5737 = coll;
if(and__3822__auto____5737)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____5737;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____5738 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____5738)
{return or__3824__auto____5738;
} else
{var or__3824__auto____5739 = (cljs.core._peek["_"]);
if(or__3824__auto____5739)
{return or__3824__auto____5739;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____5743 = coll;
if(and__3822__auto____5743)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____5743;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____5744 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____5744)
{return or__3824__auto____5744;
} else
{var or__3824__auto____5745 = (cljs.core._pop["_"]);
if(or__3824__auto____5745)
{return or__3824__auto____5745;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____5749 = coll;
if(and__3822__auto____5749)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____5749;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____5750 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____5750)
{return or__3824__auto____5750;
} else
{var or__3824__auto____5751 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____5751)
{return or__3824__auto____5751;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____5755 = o;
if(and__3822__auto____5755)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____5755;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____5756 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____5756)
{return or__3824__auto____5756;
} else
{var or__3824__auto____5757 = (cljs.core._deref["_"]);
if(or__3824__auto____5757)
{return or__3824__auto____5757;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____5761 = o;
if(and__3822__auto____5761)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____5761;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____5762 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____5762)
{return or__3824__auto____5762;
} else
{var or__3824__auto____5763 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____5763)
{return or__3824__auto____5763;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____5767 = o;
if(and__3822__auto____5767)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____5767;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____5768 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____5768)
{return or__3824__auto____5768;
} else
{var or__3824__auto____5769 = (cljs.core._meta["_"]);
if(or__3824__auto____5769)
{return or__3824__auto____5769;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____5773 = o;
if(and__3822__auto____5773)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____5773;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____5774 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____5774)
{return or__3824__auto____5774;
} else
{var or__3824__auto____5775 = (cljs.core._with_meta["_"]);
if(or__3824__auto____5775)
{return or__3824__auto____5775;
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
if((function (){var and__3822__auto____5782 = coll;
if(and__3822__auto____5782)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____5782;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____5783 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____5783)
{return or__3824__auto____5783;
} else
{var or__3824__auto____5784 = (cljs.core._reduce["_"]);
if(or__3824__auto____5784)
{return or__3824__auto____5784;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____5785 = coll;
if(and__3822__auto____5785)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____5785;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____5786 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____5786)
{return or__3824__auto____5786;
} else
{var or__3824__auto____5787 = (cljs.core._reduce["_"]);
if(or__3824__auto____5787)
{return or__3824__auto____5787;
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
if((function (){var and__3822__auto____5791 = coll;
if(and__3822__auto____5791)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____5791;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____5792 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____5792)
{return or__3824__auto____5792;
} else
{var or__3824__auto____5793 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____5793)
{return or__3824__auto____5793;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____5797 = o;
if(and__3822__auto____5797)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____5797;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____5798 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____5798)
{return or__3824__auto____5798;
} else
{var or__3824__auto____5799 = (cljs.core._equiv["_"]);
if(or__3824__auto____5799)
{return or__3824__auto____5799;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____5803 = o;
if(and__3822__auto____5803)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____5803;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____5804 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____5804)
{return or__3824__auto____5804;
} else
{var or__3824__auto____5805 = (cljs.core._hash["_"]);
if(or__3824__auto____5805)
{return or__3824__auto____5805;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____5809 = o;
if(and__3822__auto____5809)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____5809;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____5810 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____5810)
{return or__3824__auto____5810;
} else
{var or__3824__auto____5811 = (cljs.core._seq["_"]);
if(or__3824__auto____5811)
{return or__3824__auto____5811;
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
if((function (){var and__3822__auto____5815 = coll;
if(and__3822__auto____5815)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____5815;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____5816 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____5816)
{return or__3824__auto____5816;
} else
{var or__3824__auto____5817 = (cljs.core._rseq["_"]);
if(or__3824__auto____5817)
{return or__3824__auto____5817;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____5821 = coll;
if(and__3822__auto____5821)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____5821;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____5822 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____5822)
{return or__3824__auto____5822;
} else
{var or__3824__auto____5823 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____5823)
{return or__3824__auto____5823;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____5827 = coll;
if(and__3822__auto____5827)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____5827;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____5828 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____5828)
{return or__3824__auto____5828;
} else
{var or__3824__auto____5829 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____5829)
{return or__3824__auto____5829;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____5833 = coll;
if(and__3822__auto____5833)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____5833;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____5834 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____5834)
{return or__3824__auto____5834;
} else
{var or__3824__auto____5835 = (cljs.core._entry_key["_"]);
if(or__3824__auto____5835)
{return or__3824__auto____5835;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____5839 = coll;
if(and__3822__auto____5839)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____5839;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____5840 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____5840)
{return or__3824__auto____5840;
} else
{var or__3824__auto____5841 = (cljs.core._comparator["_"]);
if(or__3824__auto____5841)
{return or__3824__auto____5841;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____5845 = o;
if(and__3822__auto____5845)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____5845;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____5846 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____5846)
{return or__3824__auto____5846;
} else
{var or__3824__auto____5847 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____5847)
{return or__3824__auto____5847;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____5851 = d;
if(and__3822__auto____5851)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____5851;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____5852 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____5852)
{return or__3824__auto____5852;
} else
{var or__3824__auto____5853 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____5853)
{return or__3824__auto____5853;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____5857 = this$;
if(and__3822__auto____5857)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____5857;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____5858 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____5858)
{return or__3824__auto____5858;
} else
{var or__3824__auto____5859 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____5859)
{return or__3824__auto____5859;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____5863 = this$;
if(and__3822__auto____5863)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____5863;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____5864 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____5864)
{return or__3824__auto____5864;
} else
{var or__3824__auto____5865 = (cljs.core._add_watch["_"]);
if(or__3824__auto____5865)
{return or__3824__auto____5865;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____5869 = this$;
if(and__3822__auto____5869)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____5869;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____5870 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____5870)
{return or__3824__auto____5870;
} else
{var or__3824__auto____5871 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____5871)
{return or__3824__auto____5871;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____5875 = coll;
if(and__3822__auto____5875)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____5875;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____5876 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____5876)
{return or__3824__auto____5876;
} else
{var or__3824__auto____5877 = (cljs.core._as_transient["_"]);
if(or__3824__auto____5877)
{return or__3824__auto____5877;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____5881 = tcoll;
if(and__3822__auto____5881)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____5881;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____5882 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____5882)
{return or__3824__auto____5882;
} else
{var or__3824__auto____5883 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____5883)
{return or__3824__auto____5883;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____5887 = tcoll;
if(and__3822__auto____5887)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____5887;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____5888 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____5888)
{return or__3824__auto____5888;
} else
{var or__3824__auto____5889 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____5889)
{return or__3824__auto____5889;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____5893 = tcoll;
if(and__3822__auto____5893)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____5893;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____5894 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____5894)
{return or__3824__auto____5894;
} else
{var or__3824__auto____5895 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____5895)
{return or__3824__auto____5895;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____5899 = tcoll;
if(and__3822__auto____5899)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____5899;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____5900 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____5900)
{return or__3824__auto____5900;
} else
{var or__3824__auto____5901 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____5901)
{return or__3824__auto____5901;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____5905 = tcoll;
if(and__3822__auto____5905)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____5905;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____5906 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____5906)
{return or__3824__auto____5906;
} else
{var or__3824__auto____5907 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____5907)
{return or__3824__auto____5907;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____5911 = tcoll;
if(and__3822__auto____5911)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____5911;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____5912 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____5912)
{return or__3824__auto____5912;
} else
{var or__3824__auto____5913 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____5913)
{return or__3824__auto____5913;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____5917 = tcoll;
if(and__3822__auto____5917)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____5917;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____5918 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____5918)
{return or__3824__auto____5918;
} else
{var or__3824__auto____5919 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____5919)
{return or__3824__auto____5919;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____5923 = x;
if(and__3822__auto____5923)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____5923;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____5924 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____5924)
{return or__3824__auto____5924;
} else
{var or__3824__auto____5925 = (cljs.core._compare["_"]);
if(or__3824__auto____5925)
{return or__3824__auto____5925;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____5929 = coll;
if(and__3822__auto____5929)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____5929;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____5930 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____5930)
{return or__3824__auto____5930;
} else
{var or__3824__auto____5931 = (cljs.core._drop_first["_"]);
if(or__3824__auto____5931)
{return or__3824__auto____5931;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____5935 = coll;
if(and__3822__auto____5935)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____5935;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____5936 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____5936)
{return or__3824__auto____5936;
} else
{var or__3824__auto____5937 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____5937)
{return or__3824__auto____5937;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____5941 = coll;
if(and__3822__auto____5941)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____5941;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____5942 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____5942)
{return or__3824__auto____5942;
} else
{var or__3824__auto____5943 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____5943)
{return or__3824__auto____5943;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____5947 = coll;
if(and__3822__auto____5947)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____5947;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____5948 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____5948)
{return or__3824__auto____5948;
} else
{var or__3824__auto____5949 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____5949)
{return or__3824__auto____5949;
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
var or__3824__auto____5951 = (x === y);
if(or__3824__auto____5951)
{return or__3824__auto____5951;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__5952__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__5953 = y;
var G__5954 = cljs.core.first.call(null,more);
var G__5955 = cljs.core.next.call(null,more);
x = G__5953;
y = G__5954;
more = G__5955;
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
var G__5952 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5952__delegate.call(this, x, y, more);
};
G__5952.cljs$lang$maxFixedArity = 2;
G__5952.cljs$lang$applyTo = (function (arglist__5956){
var x = cljs.core.first(arglist__5956);
var y = cljs.core.first(cljs.core.next(arglist__5956));
var more = cljs.core.rest(cljs.core.next(arglist__5956));
return G__5952__delegate(x, y, more);
});
G__5952.cljs$lang$arity$variadic = G__5952__delegate;
return G__5952;
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
var G__5957 = null;
var G__5957__2 = (function (o,k){
return null;
});
var G__5957__3 = (function (o,k,not_found){
return not_found;
});
G__5957 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__5957__2.call(this,o,k);
case 3:
return G__5957__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5957;
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
var G__5958 = null;
var G__5958__2 = (function (_,f){
return f.call(null);
});
var G__5958__3 = (function (_,f,start){
return start;
});
G__5958 = function(_,f,start){
switch(arguments.length){
case 2:
return G__5958__2.call(this,_,f);
case 3:
return G__5958__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5958;
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
var G__5959 = null;
var G__5959__2 = (function (_,n){
return null;
});
var G__5959__3 = (function (_,n,not_found){
return not_found;
});
G__5959 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__5959__2.call(this,_,n);
case 3:
return G__5959__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5959;
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
var cnt__5972 = cljs.core._count.call(null,cicoll);
if((cnt__5972 === 0))
{return f.call(null);
} else
{var val__5973 = cljs.core._nth.call(null,cicoll,0);
var n__5974 = 1;
while(true){
if((n__5974 < cnt__5972))
{var nval__5975 = f.call(null,val__5973,cljs.core._nth.call(null,cicoll,n__5974));
if(cljs.core.reduced_QMARK_.call(null,nval__5975))
{return cljs.core.deref.call(null,nval__5975);
} else
{{
var G__5984 = nval__5975;
var G__5985 = (n__5974 + 1);
val__5973 = G__5984;
n__5974 = G__5985;
continue;
}
}
} else
{return val__5973;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__5976 = cljs.core._count.call(null,cicoll);
var val__5977 = val;
var n__5978 = 0;
while(true){
if((n__5978 < cnt__5976))
{var nval__5979 = f.call(null,val__5977,cljs.core._nth.call(null,cicoll,n__5978));
if(cljs.core.reduced_QMARK_.call(null,nval__5979))
{return cljs.core.deref.call(null,nval__5979);
} else
{{
var G__5986 = nval__5979;
var G__5987 = (n__5978 + 1);
val__5977 = G__5986;
n__5978 = G__5987;
continue;
}
}
} else
{return val__5977;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__5980 = cljs.core._count.call(null,cicoll);
var val__5981 = val;
var n__5982 = idx;
while(true){
if((n__5982 < cnt__5980))
{var nval__5983 = f.call(null,val__5981,cljs.core._nth.call(null,cicoll,n__5982));
if(cljs.core.reduced_QMARK_.call(null,nval__5983))
{return cljs.core.deref.call(null,nval__5983);
} else
{{
var G__5988 = nval__5983;
var G__5989 = (n__5982 + 1);
val__5981 = G__5988;
n__5982 = G__5989;
continue;
}
}
} else
{return val__5981;
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
var cnt__6002 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__6003 = (arr[0]);
var n__6004 = 1;
while(true){
if((n__6004 < cnt__6002))
{var nval__6005 = f.call(null,val__6003,(arr[n__6004]));
if(cljs.core.reduced_QMARK_.call(null,nval__6005))
{return cljs.core.deref.call(null,nval__6005);
} else
{{
var G__6014 = nval__6005;
var G__6015 = (n__6004 + 1);
val__6003 = G__6014;
n__6004 = G__6015;
continue;
}
}
} else
{return val__6003;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6006 = arr.length;
var val__6007 = val;
var n__6008 = 0;
while(true){
if((n__6008 < cnt__6006))
{var nval__6009 = f.call(null,val__6007,(arr[n__6008]));
if(cljs.core.reduced_QMARK_.call(null,nval__6009))
{return cljs.core.deref.call(null,nval__6009);
} else
{{
var G__6016 = nval__6009;
var G__6017 = (n__6008 + 1);
val__6007 = G__6016;
n__6008 = G__6017;
continue;
}
}
} else
{return val__6007;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6010 = arr.length;
var val__6011 = val;
var n__6012 = idx;
while(true){
if((n__6012 < cnt__6010))
{var nval__6013 = f.call(null,val__6011,(arr[n__6012]));
if(cljs.core.reduced_QMARK_.call(null,nval__6013))
{return cljs.core.deref.call(null,nval__6013);
} else
{{
var G__6018 = nval__6013;
var G__6019 = (n__6012 + 1);
val__6011 = G__6018;
n__6012 = G__6019;
continue;
}
}
} else
{return val__6011;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6020 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6021 = this;
if(((this__6021.i + 1) < this__6021.a.length))
{return (new cljs.core.IndexedSeq(this__6021.a,(this__6021.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6022 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6023 = this;
var c__6024 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6024 > 0))
{return (new cljs.core.RSeq(coll,(c__6024 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6025 = this;
var this__6026 = this;
return cljs.core.pr_str.call(null,this__6026);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6027 = this;
if(cljs.core.counted_QMARK_.call(null,this__6027.a))
{return cljs.core.ci_reduce.call(null,this__6027.a,f,(this__6027.a[this__6027.i]),(this__6027.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6027.a[this__6027.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6028 = this;
if(cljs.core.counted_QMARK_.call(null,this__6028.a))
{return cljs.core.ci_reduce.call(null,this__6028.a,f,start,this__6028.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6029 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6030 = this;
return (this__6030.a.length - this__6030.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6031 = this;
return (this__6031.a[this__6031.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6032 = this;
if(((this__6032.i + 1) < this__6032.a.length))
{return (new cljs.core.IndexedSeq(this__6032.a,(this__6032.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6033 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6034 = this;
var i__6035 = (n + this__6034.i);
if((i__6035 < this__6034.a.length))
{return (this__6034.a[i__6035]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6036 = this;
var i__6037 = (n + this__6036.i);
if((i__6037 < this__6036.a.length))
{return (this__6036.a[i__6037]);
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
var G__6038 = null;
var G__6038__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6038__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6038 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6038__2.call(this,array,f);
case 3:
return G__6038__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6038;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6039 = null;
var G__6039__2 = (function (array,k){
return (array[k]);
});
var G__6039__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6039 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6039__2.call(this,array,k);
case 3:
return G__6039__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6039;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6040 = null;
var G__6040__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6040__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6040 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6040__2.call(this,array,n);
case 3:
return G__6040__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6040;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6041 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6042 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6043 = this;
var this__6044 = this;
return cljs.core.pr_str.call(null,this__6044);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6045 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6046 = this;
return (this__6046.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6047 = this;
return cljs.core._nth.call(null,this__6047.ci,this__6047.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6048 = this;
if((this__6048.i > 0))
{return (new cljs.core.RSeq(this__6048.ci,(this__6048.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6049 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6050 = this;
return (new cljs.core.RSeq(this__6050.ci,this__6050.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6051 = this;
return this__6051.meta;
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
{if((function (){var G__6055__6056 = coll;
if(G__6055__6056)
{if((function (){var or__3824__auto____6057 = (G__6055__6056.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6057)
{return or__3824__auto____6057;
} else
{return G__6055__6056.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6055__6056.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6055__6056);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6055__6056);
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
{if((function (){var G__6062__6063 = coll;
if(G__6062__6063)
{if((function (){var or__3824__auto____6064 = (G__6062__6063.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6064)
{return or__3824__auto____6064;
} else
{return G__6062__6063.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6062__6063.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6062__6063);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6062__6063);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6065 = cljs.core.seq.call(null,coll);
if((s__6065 == null))
{return null;
} else
{return cljs.core._first.call(null,s__6065);
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
{if((function (){var G__6070__6071 = coll;
if(G__6070__6071)
{if((function (){var or__3824__auto____6072 = (G__6070__6071.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6072)
{return or__3824__auto____6072;
} else
{return G__6070__6071.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6070__6071.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6070__6071);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6070__6071);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6073 = cljs.core.seq.call(null,coll);
if(!((s__6073 == null)))
{return cljs.core._rest.call(null,s__6073);
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
{if((function (){var G__6077__6078 = coll;
if(G__6077__6078)
{if((function (){var or__3824__auto____6079 = (G__6077__6078.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____6079)
{return or__3824__auto____6079;
} else
{return G__6077__6078.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6077__6078.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6077__6078);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6077__6078);
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
var sn__6081 = cljs.core.next.call(null,s);
if(!((sn__6081 == null)))
{{
var G__6082 = sn__6081;
s = G__6082;
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
var G__6083__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6084 = conj.call(null,coll,x);
var G__6085 = cljs.core.first.call(null,xs);
var G__6086 = cljs.core.next.call(null,xs);
coll = G__6084;
x = G__6085;
xs = G__6086;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6083 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6083__delegate.call(this, coll, x, xs);
};
G__6083.cljs$lang$maxFixedArity = 2;
G__6083.cljs$lang$applyTo = (function (arglist__6087){
var coll = cljs.core.first(arglist__6087);
var x = cljs.core.first(cljs.core.next(arglist__6087));
var xs = cljs.core.rest(cljs.core.next(arglist__6087));
return G__6083__delegate(coll, x, xs);
});
G__6083.cljs$lang$arity$variadic = G__6083__delegate;
return G__6083;
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
var s__6090 = cljs.core.seq.call(null,coll);
var acc__6091 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6090))
{return (acc__6091 + cljs.core._count.call(null,s__6090));
} else
{{
var G__6092 = cljs.core.next.call(null,s__6090);
var G__6093 = (acc__6091 + 1);
s__6090 = G__6092;
acc__6091 = G__6093;
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
{if((function (){var G__6100__6101 = coll;
if(G__6100__6101)
{if((function (){var or__3824__auto____6102 = (G__6100__6101.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6102)
{return or__3824__auto____6102;
} else
{return G__6100__6101.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6100__6101.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6100__6101);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6100__6101);
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
{if((function (){var G__6103__6104 = coll;
if(G__6103__6104)
{if((function (){var or__3824__auto____6105 = (G__6103__6104.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6105)
{return or__3824__auto____6105;
} else
{return G__6103__6104.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6103__6104.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6103__6104);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6103__6104);
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
var G__6108__delegate = function (coll,k,v,kvs){
while(true){
var ret__6107 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6109 = ret__6107;
var G__6110 = cljs.core.first.call(null,kvs);
var G__6111 = cljs.core.second.call(null,kvs);
var G__6112 = cljs.core.nnext.call(null,kvs);
coll = G__6109;
k = G__6110;
v = G__6111;
kvs = G__6112;
continue;
}
} else
{return ret__6107;
}
break;
}
};
var G__6108 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6108__delegate.call(this, coll, k, v, kvs);
};
G__6108.cljs$lang$maxFixedArity = 3;
G__6108.cljs$lang$applyTo = (function (arglist__6113){
var coll = cljs.core.first(arglist__6113);
var k = cljs.core.first(cljs.core.next(arglist__6113));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6113)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6113)));
return G__6108__delegate(coll, k, v, kvs);
});
G__6108.cljs$lang$arity$variadic = G__6108__delegate;
return G__6108;
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
var G__6116__delegate = function (coll,k,ks){
while(true){
var ret__6115 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6117 = ret__6115;
var G__6118 = cljs.core.first.call(null,ks);
var G__6119 = cljs.core.next.call(null,ks);
coll = G__6117;
k = G__6118;
ks = G__6119;
continue;
}
} else
{return ret__6115;
}
break;
}
};
var G__6116 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6116__delegate.call(this, coll, k, ks);
};
G__6116.cljs$lang$maxFixedArity = 2;
G__6116.cljs$lang$applyTo = (function (arglist__6120){
var coll = cljs.core.first(arglist__6120);
var k = cljs.core.first(cljs.core.next(arglist__6120));
var ks = cljs.core.rest(cljs.core.next(arglist__6120));
return G__6116__delegate(coll, k, ks);
});
G__6116.cljs$lang$arity$variadic = G__6116__delegate;
return G__6116;
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
if((function (){var G__6124__6125 = o;
if(G__6124__6125)
{if((function (){var or__3824__auto____6126 = (G__6124__6125.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____6126)
{return or__3824__auto____6126;
} else
{return G__6124__6125.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6124__6125.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6124__6125);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6124__6125);
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
var G__6129__delegate = function (coll,k,ks){
while(true){
var ret__6128 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6130 = ret__6128;
var G__6131 = cljs.core.first.call(null,ks);
var G__6132 = cljs.core.next.call(null,ks);
coll = G__6130;
k = G__6131;
ks = G__6132;
continue;
}
} else
{return ret__6128;
}
break;
}
};
var G__6129 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6129__delegate.call(this, coll, k, ks);
};
G__6129.cljs$lang$maxFixedArity = 2;
G__6129.cljs$lang$applyTo = (function (arglist__6133){
var coll = cljs.core.first(arglist__6133);
var k = cljs.core.first(cljs.core.next(arglist__6133));
var ks = cljs.core.rest(cljs.core.next(arglist__6133));
return G__6129__delegate(coll, k, ks);
});
G__6129.cljs$lang$arity$variadic = G__6129__delegate;
return G__6129;
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
var h__6135 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__6135);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__6135;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__6137 = (cljs.core.string_hash_cache[k]);
if(!((h__6137 == null)))
{return h__6137;
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
if((function (){var and__3822__auto____6139 = goog.isString(o);
if(and__3822__auto____6139)
{return check_cache;
} else
{return and__3822__auto____6139;
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
{var G__6143__6144 = x;
if(G__6143__6144)
{if((function (){var or__3824__auto____6145 = (G__6143__6144.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____6145)
{return or__3824__auto____6145;
} else
{return G__6143__6144.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6143__6144.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6143__6144);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6143__6144);
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
{var G__6149__6150 = x;
if(G__6149__6150)
{if((function (){var or__3824__auto____6151 = (G__6149__6150.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____6151)
{return or__3824__auto____6151;
} else
{return G__6149__6150.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6149__6150.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6149__6150);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6149__6150);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6155__6156 = x;
if(G__6155__6156)
{if((function (){var or__3824__auto____6157 = (G__6155__6156.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____6157)
{return or__3824__auto____6157;
} else
{return G__6155__6156.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6155__6156.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6155__6156);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6155__6156);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6161__6162 = x;
if(G__6161__6162)
{if((function (){var or__3824__auto____6163 = (G__6161__6162.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____6163)
{return or__3824__auto____6163;
} else
{return G__6161__6162.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6161__6162.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6161__6162);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6161__6162);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6167__6168 = x;
if(G__6167__6168)
{if((function (){var or__3824__auto____6169 = (G__6167__6168.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____6169)
{return or__3824__auto____6169;
} else
{return G__6167__6168.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6167__6168.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6167__6168);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6167__6168);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6173__6174 = x;
if(G__6173__6174)
{if((function (){var or__3824__auto____6175 = (G__6173__6174.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6175)
{return or__3824__auto____6175;
} else
{return G__6173__6174.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6173__6174.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6173__6174);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6173__6174);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6179__6180 = x;
if(G__6179__6180)
{if((function (){var or__3824__auto____6181 = (G__6179__6180.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6181)
{return or__3824__auto____6181;
} else
{return G__6179__6180.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6179__6180.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6179__6180);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6179__6180);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6185__6186 = x;
if(G__6185__6186)
{if((function (){var or__3824__auto____6187 = (G__6185__6186.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6187)
{return or__3824__auto____6187;
} else
{return G__6185__6186.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__6185__6186.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6185__6186);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6185__6186);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__6191__6192 = x;
if(G__6191__6192)
{if((function (){var or__3824__auto____6193 = (G__6191__6192.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____6193)
{return or__3824__auto____6193;
} else
{return G__6191__6192.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__6191__6192.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6191__6192);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6191__6192);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__6197__6198 = x;
if(G__6197__6198)
{if(cljs.core.truth_((function (){var or__3824__auto____6199 = null;
if(cljs.core.truth_(or__3824__auto____6199))
{return or__3824__auto____6199;
} else
{return G__6197__6198.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__6197__6198.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6197__6198);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6197__6198);
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
var G__6200__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__6200 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6200__delegate.call(this, keyvals);
};
G__6200.cljs$lang$maxFixedArity = 0;
G__6200.cljs$lang$applyTo = (function (arglist__6201){
var keyvals = cljs.core.seq(arglist__6201);;
return G__6200__delegate(keyvals);
});
G__6200.cljs$lang$arity$variadic = G__6200__delegate;
return G__6200;
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
var keys__6203 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__6203.push(key);
}));
return keys__6203;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__6207 = i;
var j__6208 = j;
var len__6209 = len;
while(true){
if((len__6209 === 0))
{return to;
} else
{(to[j__6208] = (from[i__6207]));
{
var G__6210 = (i__6207 + 1);
var G__6211 = (j__6208 + 1);
var G__6212 = (len__6209 - 1);
i__6207 = G__6210;
j__6208 = G__6211;
len__6209 = G__6212;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__6216 = (i + (len - 1));
var j__6217 = (j + (len - 1));
var len__6218 = len;
while(true){
if((len__6218 === 0))
{return to;
} else
{(to[j__6217] = (from[i__6216]));
{
var G__6219 = (i__6216 - 1);
var G__6220 = (j__6217 - 1);
var G__6221 = (len__6218 - 1);
i__6216 = G__6219;
j__6217 = G__6220;
len__6218 = G__6221;
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
{var G__6225__6226 = s;
if(G__6225__6226)
{if((function (){var or__3824__auto____6227 = (G__6225__6226.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6227)
{return or__3824__auto____6227;
} else
{return G__6225__6226.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6225__6226.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6225__6226);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6225__6226);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__6231__6232 = s;
if(G__6231__6232)
{if((function (){var or__3824__auto____6233 = (G__6231__6232.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6233)
{return or__3824__auto____6233;
} else
{return G__6231__6232.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6231__6232.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6231__6232);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6231__6232);
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
var and__3822__auto____6236 = goog.isString(x);
if(and__3822__auto____6236)
{return !((function (){var or__3824__auto____6237 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____6237)
{return or__3824__auto____6237;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____6236;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____6239 = goog.isString(x);
if(and__3822__auto____6239)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____6239;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____6241 = goog.isString(x);
if(and__3822__auto____6241)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____6241;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____6246 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____6246)
{return or__3824__auto____6246;
} else
{var G__6247__6248 = f;
if(G__6247__6248)
{if((function (){var or__3824__auto____6249 = (G__6247__6248.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____6249)
{return or__3824__auto____6249;
} else
{return G__6247__6248.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__6247__6248.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6247__6248);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6247__6248);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____6251 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____6251)
{return (n == n.toFixed());
} else
{return and__3822__auto____6251;
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
if(cljs.core.truth_((function (){var and__3822__auto____6254 = coll;
if(cljs.core.truth_(and__3822__auto____6254))
{var and__3822__auto____6255 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____6255)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____6255;
}
} else
{return and__3822__auto____6254;
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
var G__6264__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__6260 = cljs.core.set([y,x]);
var xs__6261 = more;
while(true){
var x__6262 = cljs.core.first.call(null,xs__6261);
var etc__6263 = cljs.core.next.call(null,xs__6261);
if(cljs.core.truth_(xs__6261))
{if(cljs.core.contains_QMARK_.call(null,s__6260,x__6262))
{return false;
} else
{{
var G__6265 = cljs.core.conj.call(null,s__6260,x__6262);
var G__6266 = etc__6263;
s__6260 = G__6265;
xs__6261 = G__6266;
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
var G__6264 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6264__delegate.call(this, x, y, more);
};
G__6264.cljs$lang$maxFixedArity = 2;
G__6264.cljs$lang$applyTo = (function (arglist__6267){
var x = cljs.core.first(arglist__6267);
var y = cljs.core.first(cljs.core.next(arglist__6267));
var more = cljs.core.rest(cljs.core.next(arglist__6267));
return G__6264__delegate(x, y, more);
});
G__6264.cljs$lang$arity$variadic = G__6264__delegate;
return G__6264;
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
{if((function (){var G__6271__6272 = x;
if(G__6271__6272)
{if(cljs.core.truth_((function (){var or__3824__auto____6273 = null;
if(cljs.core.truth_(or__3824__auto____6273))
{return or__3824__auto____6273;
} else
{return G__6271__6272.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__6271__6272.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6271__6272);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6271__6272);
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
var xl__6278 = cljs.core.count.call(null,xs);
var yl__6279 = cljs.core.count.call(null,ys);
if((xl__6278 < yl__6279))
{return -1;
} else
{if((xl__6278 > yl__6279))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__6278,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__6280 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____6281 = (d__6280 === 0);
if(and__3822__auto____6281)
{return ((n + 1) < len);
} else
{return and__3822__auto____6281;
}
})())
{{
var G__6282 = xs;
var G__6283 = ys;
var G__6284 = len;
var G__6285 = (n + 1);
xs = G__6282;
ys = G__6283;
len = G__6284;
n = G__6285;
continue;
}
} else
{return d__6280;
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
var r__6287 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__6287))
{return r__6287;
} else
{if(cljs.core.truth_(r__6287))
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
{var a__6289 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__6289,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__6289);
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
var temp__3971__auto____6295 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____6295)
{var s__6296 = temp__3971__auto____6295;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__6296),cljs.core.next.call(null,s__6296));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__6297 = val;
var coll__6298 = cljs.core.seq.call(null,coll);
while(true){
if(coll__6298)
{var nval__6299 = f.call(null,val__6297,cljs.core.first.call(null,coll__6298));
if(cljs.core.reduced_QMARK_.call(null,nval__6299))
{return cljs.core.deref.call(null,nval__6299);
} else
{{
var G__6300 = nval__6299;
var G__6301 = cljs.core.next.call(null,coll__6298);
val__6297 = G__6300;
coll__6298 = G__6301;
continue;
}
}
} else
{return val__6297;
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
var a__6303 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__6303);
return cljs.core.vec.call(null,a__6303);
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
if((function (){var G__6310__6311 = coll;
if(G__6310__6311)
{if((function (){var or__3824__auto____6312 = (G__6310__6311.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6312)
{return or__3824__auto____6312;
} else
{return G__6310__6311.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6310__6311.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6310__6311);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6310__6311);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__6313__6314 = coll;
if(G__6313__6314)
{if((function (){var or__3824__auto____6315 = (G__6313__6314.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6315)
{return or__3824__auto____6315;
} else
{return G__6313__6314.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6313__6314.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6313__6314);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6313__6314);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__6316 = this;
return this__6316.val;
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
var G__6317__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__6317 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6317__delegate.call(this, x, y, more);
};
G__6317.cljs$lang$maxFixedArity = 2;
G__6317.cljs$lang$applyTo = (function (arglist__6318){
var x = cljs.core.first(arglist__6318);
var y = cljs.core.first(cljs.core.next(arglist__6318));
var more = cljs.core.rest(cljs.core.next(arglist__6318));
return G__6317__delegate(x, y, more);
});
G__6317.cljs$lang$arity$variadic = G__6317__delegate;
return G__6317;
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
var G__6319__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__6319 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6319__delegate.call(this, x, y, more);
};
G__6319.cljs$lang$maxFixedArity = 2;
G__6319.cljs$lang$applyTo = (function (arglist__6320){
var x = cljs.core.first(arglist__6320);
var y = cljs.core.first(cljs.core.next(arglist__6320));
var more = cljs.core.rest(cljs.core.next(arglist__6320));
return G__6319__delegate(x, y, more);
});
G__6319.cljs$lang$arity$variadic = G__6319__delegate;
return G__6319;
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
var G__6321__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__6321 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6321__delegate.call(this, x, y, more);
};
G__6321.cljs$lang$maxFixedArity = 2;
G__6321.cljs$lang$applyTo = (function (arglist__6322){
var x = cljs.core.first(arglist__6322);
var y = cljs.core.first(cljs.core.next(arglist__6322));
var more = cljs.core.rest(cljs.core.next(arglist__6322));
return G__6321__delegate(x, y, more);
});
G__6321.cljs$lang$arity$variadic = G__6321__delegate;
return G__6321;
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
var G__6323__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__6323 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6323__delegate.call(this, x, y, more);
};
G__6323.cljs$lang$maxFixedArity = 2;
G__6323.cljs$lang$applyTo = (function (arglist__6324){
var x = cljs.core.first(arglist__6324);
var y = cljs.core.first(cljs.core.next(arglist__6324));
var more = cljs.core.rest(cljs.core.next(arglist__6324));
return G__6323__delegate(x, y, more);
});
G__6323.cljs$lang$arity$variadic = G__6323__delegate;
return G__6323;
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
var G__6325__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__6326 = y;
var G__6327 = cljs.core.first.call(null,more);
var G__6328 = cljs.core.next.call(null,more);
x = G__6326;
y = G__6327;
more = G__6328;
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
var G__6325 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6325__delegate.call(this, x, y, more);
};
G__6325.cljs$lang$maxFixedArity = 2;
G__6325.cljs$lang$applyTo = (function (arglist__6329){
var x = cljs.core.first(arglist__6329);
var y = cljs.core.first(cljs.core.next(arglist__6329));
var more = cljs.core.rest(cljs.core.next(arglist__6329));
return G__6325__delegate(x, y, more);
});
G__6325.cljs$lang$arity$variadic = G__6325__delegate;
return G__6325;
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
var G__6330__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__6331 = y;
var G__6332 = cljs.core.first.call(null,more);
var G__6333 = cljs.core.next.call(null,more);
x = G__6331;
y = G__6332;
more = G__6333;
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
var G__6330 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6330__delegate.call(this, x, y, more);
};
G__6330.cljs$lang$maxFixedArity = 2;
G__6330.cljs$lang$applyTo = (function (arglist__6334){
var x = cljs.core.first(arglist__6334);
var y = cljs.core.first(cljs.core.next(arglist__6334));
var more = cljs.core.rest(cljs.core.next(arglist__6334));
return G__6330__delegate(x, y, more);
});
G__6330.cljs$lang$arity$variadic = G__6330__delegate;
return G__6330;
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
var G__6335__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__6336 = y;
var G__6337 = cljs.core.first.call(null,more);
var G__6338 = cljs.core.next.call(null,more);
x = G__6336;
y = G__6337;
more = G__6338;
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
var G__6335 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6335__delegate.call(this, x, y, more);
};
G__6335.cljs$lang$maxFixedArity = 2;
G__6335.cljs$lang$applyTo = (function (arglist__6339){
var x = cljs.core.first(arglist__6339);
var y = cljs.core.first(cljs.core.next(arglist__6339));
var more = cljs.core.rest(cljs.core.next(arglist__6339));
return G__6335__delegate(x, y, more);
});
G__6335.cljs$lang$arity$variadic = G__6335__delegate;
return G__6335;
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
var G__6340__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__6341 = y;
var G__6342 = cljs.core.first.call(null,more);
var G__6343 = cljs.core.next.call(null,more);
x = G__6341;
y = G__6342;
more = G__6343;
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
var G__6340 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6340__delegate.call(this, x, y, more);
};
G__6340.cljs$lang$maxFixedArity = 2;
G__6340.cljs$lang$applyTo = (function (arglist__6344){
var x = cljs.core.first(arglist__6344);
var y = cljs.core.first(cljs.core.next(arglist__6344));
var more = cljs.core.rest(cljs.core.next(arglist__6344));
return G__6340__delegate(x, y, more);
});
G__6340.cljs$lang$arity$variadic = G__6340__delegate;
return G__6340;
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
var G__6345__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__6345 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6345__delegate.call(this, x, y, more);
};
G__6345.cljs$lang$maxFixedArity = 2;
G__6345.cljs$lang$applyTo = (function (arglist__6346){
var x = cljs.core.first(arglist__6346);
var y = cljs.core.first(cljs.core.next(arglist__6346));
var more = cljs.core.rest(cljs.core.next(arglist__6346));
return G__6345__delegate(x, y, more);
});
G__6345.cljs$lang$arity$variadic = G__6345__delegate;
return G__6345;
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
var G__6347__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__6347 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6347__delegate.call(this, x, y, more);
};
G__6347.cljs$lang$maxFixedArity = 2;
G__6347.cljs$lang$applyTo = (function (arglist__6348){
var x = cljs.core.first(arglist__6348);
var y = cljs.core.first(cljs.core.next(arglist__6348));
var more = cljs.core.rest(cljs.core.next(arglist__6348));
return G__6347__delegate(x, y, more);
});
G__6347.cljs$lang$arity$variadic = G__6347__delegate;
return G__6347;
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
var rem__6350 = (n % d);
return cljs.core.fix.call(null,((n - rem__6350) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__6352 = cljs.core.quot.call(null,n,d);
return (n - (d * q__6352));
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
var v__6355 = (v - ((v >> 1) & 1431655765));
var v__6356 = ((v__6355 & 858993459) + ((v__6355 >> 2) & 858993459));
return ((((v__6356 + (v__6356 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__6357__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
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
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
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
var n__6365 = n;
var xs__6366 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6367 = xs__6366;
if(and__3822__auto____6367)
{return (n__6365 > 0);
} else
{return and__3822__auto____6367;
}
})()))
{{
var G__6368 = (n__6365 - 1);
var G__6369 = cljs.core.next.call(null,xs__6366);
n__6365 = G__6368;
xs__6366 = G__6369;
continue;
}
} else
{return xs__6366;
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
var G__6370__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6371 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__6372 = cljs.core.next.call(null,more);
sb = G__6371;
more = G__6372;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__6370 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6370__delegate.call(this, x, ys);
};
G__6370.cljs$lang$maxFixedArity = 1;
G__6370.cljs$lang$applyTo = (function (arglist__6373){
var x = cljs.core.first(arglist__6373);
var ys = cljs.core.rest(arglist__6373);
return G__6370__delegate(x, ys);
});
G__6370.cljs$lang$arity$variadic = G__6370__delegate;
return G__6370;
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
var G__6374__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6375 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__6376 = cljs.core.next.call(null,more);
sb = G__6375;
more = G__6376;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__6374 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6374__delegate.call(this, x, ys);
};
G__6374.cljs$lang$maxFixedArity = 1;
G__6374.cljs$lang$applyTo = (function (arglist__6377){
var x = cljs.core.first(arglist__6377);
var ys = cljs.core.rest(arglist__6377);
return G__6374__delegate(x, ys);
});
G__6374.cljs$lang$arity$variadic = G__6374__delegate;
return G__6374;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__6380 = cljs.core.seq.call(null,x);
var ys__6381 = cljs.core.seq.call(null,y);
while(true){
if((xs__6380 == null))
{return (ys__6381 == null);
} else
{if((ys__6381 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__6380),cljs.core.first.call(null,ys__6381)))
{{
var G__6382 = cljs.core.next.call(null,xs__6380);
var G__6383 = cljs.core.next.call(null,ys__6381);
xs__6380 = G__6382;
ys__6381 = G__6383;
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
return cljs.core.reduce.call(null,(function (p1__6384_SHARP_,p2__6385_SHARP_){
return cljs.core.hash_combine.call(null,p1__6384_SHARP_,cljs.core.hash.call(null,p2__6385_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__6389 = 0;
var s__6390 = cljs.core.seq.call(null,m);
while(true){
if(s__6390)
{var e__6391 = cljs.core.first.call(null,s__6390);
{
var G__6392 = ((h__6389 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__6391)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__6391)))) % 4503599627370496);
var G__6393 = cljs.core.next.call(null,s__6390);
h__6389 = G__6392;
s__6390 = G__6393;
continue;
}
} else
{return h__6389;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__6397 = 0;
var s__6398 = cljs.core.seq.call(null,s);
while(true){
if(s__6398)
{var e__6399 = cljs.core.first.call(null,s__6398);
{
var G__6400 = ((h__6397 + cljs.core.hash.call(null,e__6399)) % 4503599627370496);
var G__6401 = cljs.core.next.call(null,s__6398);
h__6397 = G__6400;
s__6398 = G__6401;
continue;
}
} else
{return h__6397;
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
var G__6422__6423 = cljs.core.seq.call(null,fn_map);
if(G__6422__6423)
{var G__6425__6427 = cljs.core.first.call(null,G__6422__6423);
var vec__6426__6428 = G__6425__6427;
var key_name__6429 = cljs.core.nth.call(null,vec__6426__6428,0,null);
var f__6430 = cljs.core.nth.call(null,vec__6426__6428,1,null);
var G__6422__6431 = G__6422__6423;
var G__6425__6432 = G__6425__6427;
var G__6422__6433 = G__6422__6431;
while(true){
var vec__6434__6435 = G__6425__6432;
var key_name__6436 = cljs.core.nth.call(null,vec__6434__6435,0,null);
var f__6437 = cljs.core.nth.call(null,vec__6434__6435,1,null);
var G__6422__6438 = G__6422__6433;
var str_name__6439 = cljs.core.name.call(null,key_name__6436);
(obj[str_name__6439] = f__6437);
var temp__3974__auto____6440 = cljs.core.next.call(null,G__6422__6438);
if(temp__3974__auto____6440)
{var G__6422__6441 = temp__3974__auto____6440;
{
var G__6442 = cljs.core.first.call(null,G__6422__6441);
var G__6443 = G__6422__6441;
G__6425__6432 = G__6442;
G__6422__6433 = G__6443;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6444 = this;
var h__1796__auto____6445 = this__6444.__hash;
if(!((h__1796__auto____6445 == null)))
{return h__1796__auto____6445;
} else
{var h__1796__auto____6446 = cljs.core.hash_coll.call(null,coll);
this__6444.__hash = h__1796__auto____6446;
return h__1796__auto____6446;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6447 = this;
if((this__6447.count === 1))
{return null;
} else
{return this__6447.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6448 = this;
return (new cljs.core.List(this__6448.meta,o,coll,(this__6448.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__6449 = this;
var this__6450 = this;
return cljs.core.pr_str.call(null,this__6450);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6451 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6452 = this;
return this__6452.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6453 = this;
return this__6453.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6454 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6455 = this;
return this__6455.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6456 = this;
if((this__6456.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__6456.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6457 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6458 = this;
return (new cljs.core.List(meta,this__6458.first,this__6458.rest,this__6458.count,this__6458.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6459 = this;
return this__6459.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6460 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6461 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6462 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6463 = this;
return (new cljs.core.List(this__6463.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__6464 = this;
var this__6465 = this;
return cljs.core.pr_str.call(null,this__6465);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6466 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6467 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6468 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6469 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6470 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6471 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6472 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6473 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6474 = this;
return this__6474.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6475 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__6479__6480 = coll;
if(G__6479__6480)
{if((function (){var or__3824__auto____6481 = (G__6479__6480.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____6481)
{return or__3824__auto____6481;
} else
{return G__6479__6480.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__6479__6480.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__6479__6480);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__6479__6480);
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
var G__6482__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__6482 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6482__delegate.call(this, x, y, z, items);
};
G__6482.cljs$lang$maxFixedArity = 3;
G__6482.cljs$lang$applyTo = (function (arglist__6483){
var x = cljs.core.first(arglist__6483);
var y = cljs.core.first(cljs.core.next(arglist__6483));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6483)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6483)));
return G__6482__delegate(x, y, z, items);
});
G__6482.cljs$lang$arity$variadic = G__6482__delegate;
return G__6482;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6484 = this;
var h__1796__auto____6485 = this__6484.__hash;
if(!((h__1796__auto____6485 == null)))
{return h__1796__auto____6485;
} else
{var h__1796__auto____6486 = cljs.core.hash_coll.call(null,coll);
this__6484.__hash = h__1796__auto____6486;
return h__1796__auto____6486;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6487 = this;
if((this__6487.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__6487.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6488 = this;
return (new cljs.core.Cons(null,o,coll,this__6488.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__6489 = this;
var this__6490 = this;
return cljs.core.pr_str.call(null,this__6490);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6491 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6492 = this;
return this__6492.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6493 = this;
if((this__6493.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__6493.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6494 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6495 = this;
return (new cljs.core.Cons(meta,this__6495.first,this__6495.rest,this__6495.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6496 = this;
return this__6496.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6497 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6497.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____6502 = (coll == null);
if(or__3824__auto____6502)
{return or__3824__auto____6502;
} else
{var G__6503__6504 = coll;
if(G__6503__6504)
{if((function (){var or__3824__auto____6505 = (G__6503__6504.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6505)
{return or__3824__auto____6505;
} else
{return G__6503__6504.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6503__6504.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6503__6504);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6503__6504);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__6509__6510 = x;
if(G__6509__6510)
{if((function (){var or__3824__auto____6511 = (G__6509__6510.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____6511)
{return or__3824__auto____6511;
} else
{return G__6509__6510.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__6509__6510.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__6509__6510);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__6509__6510);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__6512 = null;
var G__6512__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__6512__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__6512 = function(string,f,start){
switch(arguments.length){
case 2:
return G__6512__2.call(this,string,f);
case 3:
return G__6512__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6512;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__6513 = null;
var G__6513__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__6513__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__6513 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__6513__2.call(this,string,k);
case 3:
return G__6513__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6513;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__6514 = null;
var G__6514__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__6514__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__6514 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__6514__2.call(this,string,n);
case 3:
return G__6514__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6514;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function (this_sym6517,coll){
var this__6518 = this;
var this_sym6517__6519 = this;
var ___6520 = this_sym6517__6519;
if((coll == null))
{return null;
} else
{var strobj__6521 = coll.strobj;
if((strobj__6521 == null))
{return cljs.core._lookup.call(null,coll,this__6518.k,null);
} else
{return (strobj__6521[this__6518.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym6515,args6516){
var this__6522 = this;
return this_sym6515.call.apply(this_sym6515,[this_sym6515].concat(args6516.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__6531 = null;
var G__6531__2 = (function (this_sym6525,coll){
var this_sym6525__6527 = this;
var this__6528 = this_sym6525__6527;
return cljs.core._lookup.call(null,coll,this__6528.toString(),null);
});
var G__6531__3 = (function (this_sym6526,coll,not_found){
var this_sym6526__6529 = this;
var this__6530 = this_sym6526__6529;
return cljs.core._lookup.call(null,coll,this__6530.toString(),not_found);
});
G__6531 = function(this_sym6526,coll,not_found){
switch(arguments.length){
case 2:
return G__6531__2.call(this,this_sym6526,coll);
case 3:
return G__6531__3.call(this,this_sym6526,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6531;
})()
;
String.prototype.apply = (function (this_sym6523,args6524){
return this_sym6523.call.apply(this_sym6523,[this_sym6523].concat(args6524.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__6533 = lazy_seq.x;
if(lazy_seq.realized)
{return x__6533;
} else
{lazy_seq.x = x__6533.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6534 = this;
var h__1796__auto____6535 = this__6534.__hash;
if(!((h__1796__auto____6535 == null)))
{return h__1796__auto____6535;
} else
{var h__1796__auto____6536 = cljs.core.hash_coll.call(null,coll);
this__6534.__hash = h__1796__auto____6536;
return h__1796__auto____6536;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6537 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6538 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__6539 = this;
var this__6540 = this;
return cljs.core.pr_str.call(null,this__6540);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6541 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6542 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6543 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6544 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6545 = this;
return (new cljs.core.LazySeq(meta,this__6545.realized,this__6545.x,this__6545.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6546 = this;
return this__6546.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6547 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6547.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6548 = this;
return this__6548.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__6549 = this;
var ___6550 = this;
(this__6549.buf[this__6549.end] = o);
return this__6549.end = (this__6549.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__6551 = this;
var ___6552 = this;
var ret__6553 = (new cljs.core.ArrayChunk(this__6551.buf,0,this__6551.end));
this__6551.buf = null;
return ret__6553;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6554 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__6554.arr[this__6554.off]),(this__6554.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6555 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__6555.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__6556 = this;
if((this__6556.off === this__6556.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__6556.arr,(this__6556.off + 1),this__6556.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__6557 = this;
return (this__6557.arr[(this__6557.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__6558 = this;
if((function (){var and__3822__auto____6559 = (i >= 0);
if(and__3822__auto____6559)
{return (i < (this__6558.end - this__6558.off));
} else
{return and__3822__auto____6559;
}
})())
{return (this__6558.arr[(this__6558.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6560 = this;
return (this__6560.end - this__6560.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__6561 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6562 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6563 = this;
return cljs.core._nth.call(null,this__6563.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6564 = this;
if((cljs.core._count.call(null,this__6564.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__6564.chunk),this__6564.more,this__6564.meta));
} else
{if((this__6564.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__6564.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__6565 = this;
if((this__6565.more == null))
{return null;
} else
{return this__6565.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6566 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__6567 = this;
return (new cljs.core.ChunkedCons(this__6567.chunk,this__6567.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6568 = this;
return this__6568.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__6569 = this;
return this__6569.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__6570 = this;
if((this__6570.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__6570.more;
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
if((function (){var G__6574__6575 = s;
if(G__6574__6575)
{if(cljs.core.truth_((function (){var or__3824__auto____6576 = null;
if(cljs.core.truth_(or__3824__auto____6576))
{return or__3824__auto____6576;
} else
{return G__6574__6575.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__6574__6575.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__6574__6575);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__6574__6575);
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
var ary__6579 = [];
var s__6580 = s;
while(true){
if(cljs.core.seq.call(null,s__6580))
{ary__6579.push(cljs.core.first.call(null,s__6580));
{
var G__6581 = cljs.core.next.call(null,s__6580);
s__6580 = G__6581;
continue;
}
} else
{return ary__6579;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__6585 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__6586 = 0;
var xs__6587 = cljs.core.seq.call(null,coll);
while(true){
if(xs__6587)
{(ret__6585[i__6586] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__6587)));
{
var G__6588 = (i__6586 + 1);
var G__6589 = cljs.core.next.call(null,xs__6587);
i__6586 = G__6588;
xs__6587 = G__6589;
continue;
}
} else
{}
break;
}
return ret__6585;
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
var a__6597 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__6598 = cljs.core.seq.call(null,init_val_or_seq);
var i__6599 = 0;
var s__6600 = s__6598;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6601 = s__6600;
if(and__3822__auto____6601)
{return (i__6599 < size);
} else
{return and__3822__auto____6601;
}
})()))
{(a__6597[i__6599] = cljs.core.first.call(null,s__6600));
{
var G__6604 = (i__6599 + 1);
var G__6605 = cljs.core.next.call(null,s__6600);
i__6599 = G__6604;
s__6600 = G__6605;
continue;
}
} else
{return a__6597;
}
break;
}
} else
{var n__2135__auto____6602 = size;
var i__6603 = 0;
while(true){
if((i__6603 < n__2135__auto____6602))
{(a__6597[i__6603] = init_val_or_seq);
{
var G__6606 = (i__6603 + 1);
i__6603 = G__6606;
continue;
}
} else
{}
break;
}
return a__6597;
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
var a__6614 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__6615 = cljs.core.seq.call(null,init_val_or_seq);
var i__6616 = 0;
var s__6617 = s__6615;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6618 = s__6617;
if(and__3822__auto____6618)
{return (i__6616 < size);
} else
{return and__3822__auto____6618;
}
})()))
{(a__6614[i__6616] = cljs.core.first.call(null,s__6617));
{
var G__6621 = (i__6616 + 1);
var G__6622 = cljs.core.next.call(null,s__6617);
i__6616 = G__6621;
s__6617 = G__6622;
continue;
}
} else
{return a__6614;
}
break;
}
} else
{var n__2135__auto____6619 = size;
var i__6620 = 0;
while(true){
if((i__6620 < n__2135__auto____6619))
{(a__6614[i__6620] = init_val_or_seq);
{
var G__6623 = (i__6620 + 1);
i__6620 = G__6623;
continue;
}
} else
{}
break;
}
return a__6614;
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
var a__6631 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__6632 = cljs.core.seq.call(null,init_val_or_seq);
var i__6633 = 0;
var s__6634 = s__6632;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6635 = s__6634;
if(and__3822__auto____6635)
{return (i__6633 < size);
} else
{return and__3822__auto____6635;
}
})()))
{(a__6631[i__6633] = cljs.core.first.call(null,s__6634));
{
var G__6638 = (i__6633 + 1);
var G__6639 = cljs.core.next.call(null,s__6634);
i__6633 = G__6638;
s__6634 = G__6639;
continue;
}
} else
{return a__6631;
}
break;
}
} else
{var n__2135__auto____6636 = size;
var i__6637 = 0;
while(true){
if((i__6637 < n__2135__auto____6636))
{(a__6631[i__6637] = init_val_or_seq);
{
var G__6640 = (i__6637 + 1);
i__6637 = G__6640;
continue;
}
} else
{}
break;
}
return a__6631;
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
{var s__6645 = s;
var i__6646 = n;
var sum__6647 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6648 = (i__6646 > 0);
if(and__3822__auto____6648)
{return cljs.core.seq.call(null,s__6645);
} else
{return and__3822__auto____6648;
}
})()))
{{
var G__6649 = cljs.core.next.call(null,s__6645);
var G__6650 = (i__6646 - 1);
var G__6651 = (sum__6647 + 1);
s__6645 = G__6649;
i__6646 = G__6650;
sum__6647 = G__6651;
continue;
}
} else
{return sum__6647;
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
var s__6656 = cljs.core.seq.call(null,x);
if(s__6656)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__6656))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__6656),concat.call(null,cljs.core.chunk_rest.call(null,s__6656),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6656),concat.call(null,cljs.core.rest.call(null,s__6656),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__6660__delegate = function (x,y,zs){
var cat__6659 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__6658 = cljs.core.seq.call(null,xys);
if(xys__6658)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__6658))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__6658),cat.call(null,cljs.core.chunk_rest.call(null,xys__6658),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__6658),cat.call(null,cljs.core.rest.call(null,xys__6658),zs));
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
return cat__6659.call(null,concat.call(null,x,y),zs);
};
var G__6660 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6660__delegate.call(this, x, y, zs);
};
G__6660.cljs$lang$maxFixedArity = 2;
G__6660.cljs$lang$applyTo = (function (arglist__6661){
var x = cljs.core.first(arglist__6661);
var y = cljs.core.first(cljs.core.next(arglist__6661));
var zs = cljs.core.rest(cljs.core.next(arglist__6661));
return G__6660__delegate(x, y, zs);
});
G__6660.cljs$lang$arity$variadic = G__6660__delegate;
return G__6660;
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
var G__6662__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__6662 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6662__delegate.call(this, a, b, c, d, more);
};
G__6662.cljs$lang$maxFixedArity = 4;
G__6662.cljs$lang$applyTo = (function (arglist__6663){
var a = cljs.core.first(arglist__6663);
var b = cljs.core.first(cljs.core.next(arglist__6663));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6663)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6663))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6663))));
return G__6662__delegate(a, b, c, d, more);
});
G__6662.cljs$lang$arity$variadic = G__6662__delegate;
return G__6662;
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
var args__6705 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__6706 = cljs.core._first.call(null,args__6705);
var args__6707 = cljs.core._rest.call(null,args__6705);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__6706);
} else
{return f.call(null,a__6706);
}
} else
{var b__6708 = cljs.core._first.call(null,args__6707);
var args__6709 = cljs.core._rest.call(null,args__6707);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__6706,b__6708);
} else
{return f.call(null,a__6706,b__6708);
}
} else
{var c__6710 = cljs.core._first.call(null,args__6709);
var args__6711 = cljs.core._rest.call(null,args__6709);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__6706,b__6708,c__6710);
} else
{return f.call(null,a__6706,b__6708,c__6710);
}
} else
{var d__6712 = cljs.core._first.call(null,args__6711);
var args__6713 = cljs.core._rest.call(null,args__6711);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__6706,b__6708,c__6710,d__6712);
} else
{return f.call(null,a__6706,b__6708,c__6710,d__6712);
}
} else
{var e__6714 = cljs.core._first.call(null,args__6713);
var args__6715 = cljs.core._rest.call(null,args__6713);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__6706,b__6708,c__6710,d__6712,e__6714);
} else
{return f.call(null,a__6706,b__6708,c__6710,d__6712,e__6714);
}
} else
{var f__6716 = cljs.core._first.call(null,args__6715);
var args__6717 = cljs.core._rest.call(null,args__6715);
if((argc === 6))
{if(f__6716.cljs$lang$arity$6)
{return f__6716.cljs$lang$arity$6(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716);
}
} else
{var g__6718 = cljs.core._first.call(null,args__6717);
var args__6719 = cljs.core._rest.call(null,args__6717);
if((argc === 7))
{if(f__6716.cljs$lang$arity$7)
{return f__6716.cljs$lang$arity$7(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718);
}
} else
{var h__6720 = cljs.core._first.call(null,args__6719);
var args__6721 = cljs.core._rest.call(null,args__6719);
if((argc === 8))
{if(f__6716.cljs$lang$arity$8)
{return f__6716.cljs$lang$arity$8(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720);
}
} else
{var i__6722 = cljs.core._first.call(null,args__6721);
var args__6723 = cljs.core._rest.call(null,args__6721);
if((argc === 9))
{if(f__6716.cljs$lang$arity$9)
{return f__6716.cljs$lang$arity$9(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722);
}
} else
{var j__6724 = cljs.core._first.call(null,args__6723);
var args__6725 = cljs.core._rest.call(null,args__6723);
if((argc === 10))
{if(f__6716.cljs$lang$arity$10)
{return f__6716.cljs$lang$arity$10(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724);
}
} else
{var k__6726 = cljs.core._first.call(null,args__6725);
var args__6727 = cljs.core._rest.call(null,args__6725);
if((argc === 11))
{if(f__6716.cljs$lang$arity$11)
{return f__6716.cljs$lang$arity$11(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726);
}
} else
{var l__6728 = cljs.core._first.call(null,args__6727);
var args__6729 = cljs.core._rest.call(null,args__6727);
if((argc === 12))
{if(f__6716.cljs$lang$arity$12)
{return f__6716.cljs$lang$arity$12(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728);
}
} else
{var m__6730 = cljs.core._first.call(null,args__6729);
var args__6731 = cljs.core._rest.call(null,args__6729);
if((argc === 13))
{if(f__6716.cljs$lang$arity$13)
{return f__6716.cljs$lang$arity$13(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730);
}
} else
{var n__6732 = cljs.core._first.call(null,args__6731);
var args__6733 = cljs.core._rest.call(null,args__6731);
if((argc === 14))
{if(f__6716.cljs$lang$arity$14)
{return f__6716.cljs$lang$arity$14(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732);
}
} else
{var o__6734 = cljs.core._first.call(null,args__6733);
var args__6735 = cljs.core._rest.call(null,args__6733);
if((argc === 15))
{if(f__6716.cljs$lang$arity$15)
{return f__6716.cljs$lang$arity$15(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734);
}
} else
{var p__6736 = cljs.core._first.call(null,args__6735);
var args__6737 = cljs.core._rest.call(null,args__6735);
if((argc === 16))
{if(f__6716.cljs$lang$arity$16)
{return f__6716.cljs$lang$arity$16(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734,p__6736);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734,p__6736);
}
} else
{var q__6738 = cljs.core._first.call(null,args__6737);
var args__6739 = cljs.core._rest.call(null,args__6737);
if((argc === 17))
{if(f__6716.cljs$lang$arity$17)
{return f__6716.cljs$lang$arity$17(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734,p__6736,q__6738);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734,p__6736,q__6738);
}
} else
{var r__6740 = cljs.core._first.call(null,args__6739);
var args__6741 = cljs.core._rest.call(null,args__6739);
if((argc === 18))
{if(f__6716.cljs$lang$arity$18)
{return f__6716.cljs$lang$arity$18(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734,p__6736,q__6738,r__6740);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734,p__6736,q__6738,r__6740);
}
} else
{var s__6742 = cljs.core._first.call(null,args__6741);
var args__6743 = cljs.core._rest.call(null,args__6741);
if((argc === 19))
{if(f__6716.cljs$lang$arity$19)
{return f__6716.cljs$lang$arity$19(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734,p__6736,q__6738,r__6740,s__6742);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734,p__6736,q__6738,r__6740,s__6742);
}
} else
{var t__6744 = cljs.core._first.call(null,args__6743);
var args__6745 = cljs.core._rest.call(null,args__6743);
if((argc === 20))
{if(f__6716.cljs$lang$arity$20)
{return f__6716.cljs$lang$arity$20(a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734,p__6736,q__6738,r__6740,s__6742,t__6744);
} else
{return f__6716.call(null,a__6706,b__6708,c__6710,d__6712,e__6714,f__6716,g__6718,h__6720,i__6722,j__6724,k__6726,l__6728,m__6730,n__6732,o__6734,p__6736,q__6738,r__6740,s__6742,t__6744);
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
var fixed_arity__6760 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__6761 = cljs.core.bounded_count.call(null,args,(fixed_arity__6760 + 1));
if((bc__6761 <= fixed_arity__6760))
{return cljs.core.apply_to.call(null,f,bc__6761,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__6762 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__6763 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__6764 = cljs.core.bounded_count.call(null,arglist__6762,(fixed_arity__6763 + 1));
if((bc__6764 <= fixed_arity__6763))
{return cljs.core.apply_to.call(null,f,bc__6764,arglist__6762);
} else
{return f.cljs$lang$applyTo(arglist__6762);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6762));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__6765 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__6766 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__6767 = cljs.core.bounded_count.call(null,arglist__6765,(fixed_arity__6766 + 1));
if((bc__6767 <= fixed_arity__6766))
{return cljs.core.apply_to.call(null,f,bc__6767,arglist__6765);
} else
{return f.cljs$lang$applyTo(arglist__6765);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6765));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__6768 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__6769 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__6770 = cljs.core.bounded_count.call(null,arglist__6768,(fixed_arity__6769 + 1));
if((bc__6770 <= fixed_arity__6769))
{return cljs.core.apply_to.call(null,f,bc__6770,arglist__6768);
} else
{return f.cljs$lang$applyTo(arglist__6768);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6768));
}
});
var apply__6 = (function() { 
var G__6774__delegate = function (f,a,b,c,d,args){
var arglist__6771 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__6772 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__6773 = cljs.core.bounded_count.call(null,arglist__6771,(fixed_arity__6772 + 1));
if((bc__6773 <= fixed_arity__6772))
{return cljs.core.apply_to.call(null,f,bc__6773,arglist__6771);
} else
{return f.cljs$lang$applyTo(arglist__6771);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6771));
}
};
var G__6774 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6774__delegate.call(this, f, a, b, c, d, args);
};
G__6774.cljs$lang$maxFixedArity = 5;
G__6774.cljs$lang$applyTo = (function (arglist__6775){
var f = cljs.core.first(arglist__6775);
var a = cljs.core.first(cljs.core.next(arglist__6775));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6775)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6775))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6775)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6775)))));
return G__6774__delegate(f, a, b, c, d, args);
});
G__6774.cljs$lang$arity$variadic = G__6774__delegate;
return G__6774;
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
vary_meta.cljs$lang$applyTo = (function (arglist__6776){
var obj = cljs.core.first(arglist__6776);
var f = cljs.core.first(cljs.core.next(arglist__6776));
var args = cljs.core.rest(cljs.core.next(arglist__6776));
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
var G__6777__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__6777 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6777__delegate.call(this, x, y, more);
};
G__6777.cljs$lang$maxFixedArity = 2;
G__6777.cljs$lang$applyTo = (function (arglist__6778){
var x = cljs.core.first(arglist__6778);
var y = cljs.core.first(cljs.core.next(arglist__6778));
var more = cljs.core.rest(cljs.core.next(arglist__6778));
return G__6777__delegate(x, y, more);
});
G__6777.cljs$lang$arity$variadic = G__6777__delegate;
return G__6777;
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
var G__6779 = pred;
var G__6780 = cljs.core.next.call(null,coll);
pred = G__6779;
coll = G__6780;
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
{var or__3824__auto____6782 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____6782))
{return or__3824__auto____6782;
} else
{{
var G__6783 = pred;
var G__6784 = cljs.core.next.call(null,coll);
pred = G__6783;
coll = G__6784;
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
var G__6785 = null;
var G__6785__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__6785__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__6785__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__6785__3 = (function() { 
var G__6786__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__6786 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6786__delegate.call(this, x, y, zs);
};
G__6786.cljs$lang$maxFixedArity = 2;
G__6786.cljs$lang$applyTo = (function (arglist__6787){
var x = cljs.core.first(arglist__6787);
var y = cljs.core.first(cljs.core.next(arglist__6787));
var zs = cljs.core.rest(cljs.core.next(arglist__6787));
return G__6786__delegate(x, y, zs);
});
G__6786.cljs$lang$arity$variadic = G__6786__delegate;
return G__6786;
})()
;
G__6785 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__6785__0.call(this);
case 1:
return G__6785__1.call(this,x);
case 2:
return G__6785__2.call(this,x,y);
default:
return G__6785__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__6785.cljs$lang$maxFixedArity = 2;
G__6785.cljs$lang$applyTo = G__6785__3.cljs$lang$applyTo;
return G__6785;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__6788__delegate = function (args){
return x;
};
var G__6788 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6788__delegate.call(this, args);
};
G__6788.cljs$lang$maxFixedArity = 0;
G__6788.cljs$lang$applyTo = (function (arglist__6789){
var args = cljs.core.seq(arglist__6789);;
return G__6788__delegate(args);
});
G__6788.cljs$lang$arity$variadic = G__6788__delegate;
return G__6788;
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
var G__6796 = null;
var G__6796__0 = (function (){
return f.call(null,g.call(null));
});
var G__6796__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__6796__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__6796__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__6796__4 = (function() { 
var G__6797__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6797 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6797__delegate.call(this, x, y, z, args);
};
G__6797.cljs$lang$maxFixedArity = 3;
G__6797.cljs$lang$applyTo = (function (arglist__6798){
var x = cljs.core.first(arglist__6798);
var y = cljs.core.first(cljs.core.next(arglist__6798));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6798)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6798)));
return G__6797__delegate(x, y, z, args);
});
G__6797.cljs$lang$arity$variadic = G__6797__delegate;
return G__6797;
})()
;
G__6796 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__6796__0.call(this);
case 1:
return G__6796__1.call(this,x);
case 2:
return G__6796__2.call(this,x,y);
case 3:
return G__6796__3.call(this,x,y,z);
default:
return G__6796__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6796.cljs$lang$maxFixedArity = 3;
G__6796.cljs$lang$applyTo = G__6796__4.cljs$lang$applyTo;
return G__6796;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__6799 = null;
var G__6799__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__6799__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__6799__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__6799__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__6799__4 = (function() { 
var G__6800__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__6800 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6800__delegate.call(this, x, y, z, args);
};
G__6800.cljs$lang$maxFixedArity = 3;
G__6800.cljs$lang$applyTo = (function (arglist__6801){
var x = cljs.core.first(arglist__6801);
var y = cljs.core.first(cljs.core.next(arglist__6801));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6801)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6801)));
return G__6800__delegate(x, y, z, args);
});
G__6800.cljs$lang$arity$variadic = G__6800__delegate;
return G__6800;
})()
;
G__6799 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__6799__0.call(this);
case 1:
return G__6799__1.call(this,x);
case 2:
return G__6799__2.call(this,x,y);
case 3:
return G__6799__3.call(this,x,y,z);
default:
return G__6799__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6799.cljs$lang$maxFixedArity = 3;
G__6799.cljs$lang$applyTo = G__6799__4.cljs$lang$applyTo;
return G__6799;
})()
});
var comp__4 = (function() { 
var G__6802__delegate = function (f1,f2,f3,fs){
var fs__6793 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__6803__delegate = function (args){
var ret__6794 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__6793),args);
var fs__6795 = cljs.core.next.call(null,fs__6793);
while(true){
if(fs__6795)
{{
var G__6804 = cljs.core.first.call(null,fs__6795).call(null,ret__6794);
var G__6805 = cljs.core.next.call(null,fs__6795);
ret__6794 = G__6804;
fs__6795 = G__6805;
continue;
}
} else
{return ret__6794;
}
break;
}
};
var G__6803 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6803__delegate.call(this, args);
};
G__6803.cljs$lang$maxFixedArity = 0;
G__6803.cljs$lang$applyTo = (function (arglist__6806){
var args = cljs.core.seq(arglist__6806);;
return G__6803__delegate(args);
});
G__6803.cljs$lang$arity$variadic = G__6803__delegate;
return G__6803;
})()
;
};
var G__6802 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6802__delegate.call(this, f1, f2, f3, fs);
};
G__6802.cljs$lang$maxFixedArity = 3;
G__6802.cljs$lang$applyTo = (function (arglist__6807){
var f1 = cljs.core.first(arglist__6807);
var f2 = cljs.core.first(cljs.core.next(arglist__6807));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6807)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6807)));
return G__6802__delegate(f1, f2, f3, fs);
});
G__6802.cljs$lang$arity$variadic = G__6802__delegate;
return G__6802;
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
var G__6808__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__6808 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6808__delegate.call(this, args);
};
G__6808.cljs$lang$maxFixedArity = 0;
G__6808.cljs$lang$applyTo = (function (arglist__6809){
var args = cljs.core.seq(arglist__6809);;
return G__6808__delegate(args);
});
G__6808.cljs$lang$arity$variadic = G__6808__delegate;
return G__6808;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__6810__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__6810 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6810__delegate.call(this, args);
};
G__6810.cljs$lang$maxFixedArity = 0;
G__6810.cljs$lang$applyTo = (function (arglist__6811){
var args = cljs.core.seq(arglist__6811);;
return G__6810__delegate(args);
});
G__6810.cljs$lang$arity$variadic = G__6810__delegate;
return G__6810;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__6812__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__6812 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6812__delegate.call(this, args);
};
G__6812.cljs$lang$maxFixedArity = 0;
G__6812.cljs$lang$applyTo = (function (arglist__6813){
var args = cljs.core.seq(arglist__6813);;
return G__6812__delegate(args);
});
G__6812.cljs$lang$arity$variadic = G__6812__delegate;
return G__6812;
})()
;
});
var partial__5 = (function() { 
var G__6814__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__6815__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__6815 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6815__delegate.call(this, args);
};
G__6815.cljs$lang$maxFixedArity = 0;
G__6815.cljs$lang$applyTo = (function (arglist__6816){
var args = cljs.core.seq(arglist__6816);;
return G__6815__delegate(args);
});
G__6815.cljs$lang$arity$variadic = G__6815__delegate;
return G__6815;
})()
;
};
var G__6814 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6814__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__6814.cljs$lang$maxFixedArity = 4;
G__6814.cljs$lang$applyTo = (function (arglist__6817){
var f = cljs.core.first(arglist__6817);
var arg1 = cljs.core.first(cljs.core.next(arglist__6817));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6817)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6817))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6817))));
return G__6814__delegate(f, arg1, arg2, arg3, more);
});
G__6814.cljs$lang$arity$variadic = G__6814__delegate;
return G__6814;
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
var G__6818 = null;
var G__6818__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__6818__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__6818__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__6818__4 = (function() { 
var G__6819__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__6819 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6819__delegate.call(this, a, b, c, ds);
};
G__6819.cljs$lang$maxFixedArity = 3;
G__6819.cljs$lang$applyTo = (function (arglist__6820){
var a = cljs.core.first(arglist__6820);
var b = cljs.core.first(cljs.core.next(arglist__6820));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6820)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6820)));
return G__6819__delegate(a, b, c, ds);
});
G__6819.cljs$lang$arity$variadic = G__6819__delegate;
return G__6819;
})()
;
G__6818 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__6818__1.call(this,a);
case 2:
return G__6818__2.call(this,a,b);
case 3:
return G__6818__3.call(this,a,b,c);
default:
return G__6818__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6818.cljs$lang$maxFixedArity = 3;
G__6818.cljs$lang$applyTo = G__6818__4.cljs$lang$applyTo;
return G__6818;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__6821 = null;
var G__6821__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__6821__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__6821__4 = (function() { 
var G__6822__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__6822 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6822__delegate.call(this, a, b, c, ds);
};
G__6822.cljs$lang$maxFixedArity = 3;
G__6822.cljs$lang$applyTo = (function (arglist__6823){
var a = cljs.core.first(arglist__6823);
var b = cljs.core.first(cljs.core.next(arglist__6823));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6823)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6823)));
return G__6822__delegate(a, b, c, ds);
});
G__6822.cljs$lang$arity$variadic = G__6822__delegate;
return G__6822;
})()
;
G__6821 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__6821__2.call(this,a,b);
case 3:
return G__6821__3.call(this,a,b,c);
default:
return G__6821__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6821.cljs$lang$maxFixedArity = 3;
G__6821.cljs$lang$applyTo = G__6821__4.cljs$lang$applyTo;
return G__6821;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__6824 = null;
var G__6824__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__6824__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__6824__4 = (function() { 
var G__6825__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__6825 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6825__delegate.call(this, a, b, c, ds);
};
G__6825.cljs$lang$maxFixedArity = 3;
G__6825.cljs$lang$applyTo = (function (arglist__6826){
var a = cljs.core.first(arglist__6826);
var b = cljs.core.first(cljs.core.next(arglist__6826));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6826)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6826)));
return G__6825__delegate(a, b, c, ds);
});
G__6825.cljs$lang$arity$variadic = G__6825__delegate;
return G__6825;
})()
;
G__6824 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__6824__2.call(this,a,b);
case 3:
return G__6824__3.call(this,a,b,c);
default:
return G__6824__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__6824.cljs$lang$maxFixedArity = 3;
G__6824.cljs$lang$applyTo = G__6824__4.cljs$lang$applyTo;
return G__6824;
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
var mapi__6842 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____6850 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____6850)
{var s__6851 = temp__3974__auto____6850;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6851))
{var c__6852 = cljs.core.chunk_first.call(null,s__6851);
var size__6853 = cljs.core.count.call(null,c__6852);
var b__6854 = cljs.core.chunk_buffer.call(null,size__6853);
var n__2135__auto____6855 = size__6853;
var i__6856 = 0;
while(true){
if((i__6856 < n__2135__auto____6855))
{cljs.core.chunk_append.call(null,b__6854,f.call(null,(idx + i__6856),cljs.core._nth.call(null,c__6852,i__6856)));
{
var G__6857 = (i__6856 + 1);
i__6856 = G__6857;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6854),mapi.call(null,(idx + size__6853),cljs.core.chunk_rest.call(null,s__6851)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__6851)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__6851)));
}
} else
{return null;
}
}),null));
});
return mapi__6842.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____6867 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____6867)
{var s__6868 = temp__3974__auto____6867;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6868))
{var c__6869 = cljs.core.chunk_first.call(null,s__6868);
var size__6870 = cljs.core.count.call(null,c__6869);
var b__6871 = cljs.core.chunk_buffer.call(null,size__6870);
var n__2135__auto____6872 = size__6870;
var i__6873 = 0;
while(true){
if((i__6873 < n__2135__auto____6872))
{var x__6874 = f.call(null,cljs.core._nth.call(null,c__6869,i__6873));
if((x__6874 == null))
{} else
{cljs.core.chunk_append.call(null,b__6871,x__6874);
}
{
var G__6876 = (i__6873 + 1);
i__6873 = G__6876;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6871),keep.call(null,f,cljs.core.chunk_rest.call(null,s__6868)));
} else
{var x__6875 = f.call(null,cljs.core.first.call(null,s__6868));
if((x__6875 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__6868));
} else
{return cljs.core.cons.call(null,x__6875,keep.call(null,f,cljs.core.rest.call(null,s__6868)));
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
var keepi__6902 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____6912 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____6912)
{var s__6913 = temp__3974__auto____6912;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6913))
{var c__6914 = cljs.core.chunk_first.call(null,s__6913);
var size__6915 = cljs.core.count.call(null,c__6914);
var b__6916 = cljs.core.chunk_buffer.call(null,size__6915);
var n__2135__auto____6917 = size__6915;
var i__6918 = 0;
while(true){
if((i__6918 < n__2135__auto____6917))
{var x__6919 = f.call(null,(idx + i__6918),cljs.core._nth.call(null,c__6914,i__6918));
if((x__6919 == null))
{} else
{cljs.core.chunk_append.call(null,b__6916,x__6919);
}
{
var G__6921 = (i__6918 + 1);
i__6918 = G__6921;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6916),keepi.call(null,(idx + size__6915),cljs.core.chunk_rest.call(null,s__6913)));
} else
{var x__6920 = f.call(null,idx,cljs.core.first.call(null,s__6913));
if((x__6920 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__6913));
} else
{return cljs.core.cons.call(null,x__6920,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__6913)));
}
}
} else
{return null;
}
}),null));
});
return keepi__6902.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7007 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7007))
{return p.call(null,y);
} else
{return and__3822__auto____7007;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7008 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7008))
{var and__3822__auto____7009 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____7009))
{return p.call(null,z);
} else
{return and__3822__auto____7009;
}
} else
{return and__3822__auto____7008;
}
})());
});
var ep1__4 = (function() { 
var G__7078__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7010 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7010))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____7010;
}
})());
};
var G__7078 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7078__delegate.call(this, x, y, z, args);
};
G__7078.cljs$lang$maxFixedArity = 3;
G__7078.cljs$lang$applyTo = (function (arglist__7079){
var x = cljs.core.first(arglist__7079);
var y = cljs.core.first(cljs.core.next(arglist__7079));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7079)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7079)));
return G__7078__delegate(x, y, z, args);
});
G__7078.cljs$lang$arity$variadic = G__7078__delegate;
return G__7078;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7022 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7022))
{return p2.call(null,x);
} else
{return and__3822__auto____7022;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7023 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7023))
{var and__3822__auto____7024 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7024))
{var and__3822__auto____7025 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7025))
{return p2.call(null,y);
} else
{return and__3822__auto____7025;
}
} else
{return and__3822__auto____7024;
}
} else
{return and__3822__auto____7023;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7026 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7026))
{var and__3822__auto____7027 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7027))
{var and__3822__auto____7028 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7028))
{var and__3822__auto____7029 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7029))
{var and__3822__auto____7030 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7030))
{return p2.call(null,z);
} else
{return and__3822__auto____7030;
}
} else
{return and__3822__auto____7029;
}
} else
{return and__3822__auto____7028;
}
} else
{return and__3822__auto____7027;
}
} else
{return and__3822__auto____7026;
}
})());
});
var ep2__4 = (function() { 
var G__7080__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7031 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7031))
{return cljs.core.every_QMARK_.call(null,(function (p1__6877_SHARP_){
var and__3822__auto____7032 = p1.call(null,p1__6877_SHARP_);
if(cljs.core.truth_(and__3822__auto____7032))
{return p2.call(null,p1__6877_SHARP_);
} else
{return and__3822__auto____7032;
}
}),args);
} else
{return and__3822__auto____7031;
}
})());
};
var G__7080 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7080__delegate.call(this, x, y, z, args);
};
G__7080.cljs$lang$maxFixedArity = 3;
G__7080.cljs$lang$applyTo = (function (arglist__7081){
var x = cljs.core.first(arglist__7081);
var y = cljs.core.first(cljs.core.next(arglist__7081));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7081)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7081)));
return G__7080__delegate(x, y, z, args);
});
G__7080.cljs$lang$arity$variadic = G__7080__delegate;
return G__7080;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7051 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7051))
{var and__3822__auto____7052 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7052))
{return p3.call(null,x);
} else
{return and__3822__auto____7052;
}
} else
{return and__3822__auto____7051;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7053 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7053))
{var and__3822__auto____7054 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7054))
{var and__3822__auto____7055 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7055))
{var and__3822__auto____7056 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7056))
{var and__3822__auto____7057 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7057))
{return p3.call(null,y);
} else
{return and__3822__auto____7057;
}
} else
{return and__3822__auto____7056;
}
} else
{return and__3822__auto____7055;
}
} else
{return and__3822__auto____7054;
}
} else
{return and__3822__auto____7053;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7058 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7058))
{var and__3822__auto____7059 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7059))
{var and__3822__auto____7060 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7060))
{var and__3822__auto____7061 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7061))
{var and__3822__auto____7062 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7062))
{var and__3822__auto____7063 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____7063))
{var and__3822__auto____7064 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7064))
{var and__3822__auto____7065 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____7065))
{return p3.call(null,z);
} else
{return and__3822__auto____7065;
}
} else
{return and__3822__auto____7064;
}
} else
{return and__3822__auto____7063;
}
} else
{return and__3822__auto____7062;
}
} else
{return and__3822__auto____7061;
}
} else
{return and__3822__auto____7060;
}
} else
{return and__3822__auto____7059;
}
} else
{return and__3822__auto____7058;
}
})());
});
var ep3__4 = (function() { 
var G__7082__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7066 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7066))
{return cljs.core.every_QMARK_.call(null,(function (p1__6878_SHARP_){
var and__3822__auto____7067 = p1.call(null,p1__6878_SHARP_);
if(cljs.core.truth_(and__3822__auto____7067))
{var and__3822__auto____7068 = p2.call(null,p1__6878_SHARP_);
if(cljs.core.truth_(and__3822__auto____7068))
{return p3.call(null,p1__6878_SHARP_);
} else
{return and__3822__auto____7068;
}
} else
{return and__3822__auto____7067;
}
}),args);
} else
{return and__3822__auto____7066;
}
})());
};
var G__7082 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7082__delegate.call(this, x, y, z, args);
};
G__7082.cljs$lang$maxFixedArity = 3;
G__7082.cljs$lang$applyTo = (function (arglist__7083){
var x = cljs.core.first(arglist__7083);
var y = cljs.core.first(cljs.core.next(arglist__7083));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7083)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7083)));
return G__7082__delegate(x, y, z, args);
});
G__7082.cljs$lang$arity$variadic = G__7082__delegate;
return G__7082;
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
var G__7084__delegate = function (p1,p2,p3,ps){
var ps__7069 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__6879_SHARP_){
return p1__6879_SHARP_.call(null,x);
}),ps__7069);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__6880_SHARP_){
var and__3822__auto____7074 = p1__6880_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7074))
{return p1__6880_SHARP_.call(null,y);
} else
{return and__3822__auto____7074;
}
}),ps__7069);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__6881_SHARP_){
var and__3822__auto____7075 = p1__6881_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7075))
{var and__3822__auto____7076 = p1__6881_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____7076))
{return p1__6881_SHARP_.call(null,z);
} else
{return and__3822__auto____7076;
}
} else
{return and__3822__auto____7075;
}
}),ps__7069);
});
var epn__4 = (function() { 
var G__7085__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7077 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7077))
{return cljs.core.every_QMARK_.call(null,(function (p1__6882_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__6882_SHARP_,args);
}),ps__7069);
} else
{return and__3822__auto____7077;
}
})());
};
var G__7085 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7085__delegate.call(this, x, y, z, args);
};
G__7085.cljs$lang$maxFixedArity = 3;
G__7085.cljs$lang$applyTo = (function (arglist__7086){
var x = cljs.core.first(arglist__7086);
var y = cljs.core.first(cljs.core.next(arglist__7086));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7086)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7086)));
return G__7085__delegate(x, y, z, args);
});
G__7085.cljs$lang$arity$variadic = G__7085__delegate;
return G__7085;
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
var G__7084 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7084__delegate.call(this, p1, p2, p3, ps);
};
G__7084.cljs$lang$maxFixedArity = 3;
G__7084.cljs$lang$applyTo = (function (arglist__7087){
var p1 = cljs.core.first(arglist__7087);
var p2 = cljs.core.first(cljs.core.next(arglist__7087));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7087)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7087)));
return G__7084__delegate(p1, p2, p3, ps);
});
G__7084.cljs$lang$arity$variadic = G__7084__delegate;
return G__7084;
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
var or__3824__auto____7168 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7168))
{return or__3824__auto____7168;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____7169 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7169))
{return or__3824__auto____7169;
} else
{var or__3824__auto____7170 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____7170))
{return or__3824__auto____7170;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__7239__delegate = function (x,y,z,args){
var or__3824__auto____7171 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7171))
{return or__3824__auto____7171;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7239 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7239__delegate.call(this, x, y, z, args);
};
G__7239.cljs$lang$maxFixedArity = 3;
G__7239.cljs$lang$applyTo = (function (arglist__7240){
var x = cljs.core.first(arglist__7240);
var y = cljs.core.first(cljs.core.next(arglist__7240));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7240)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7240)));
return G__7239__delegate(x, y, z, args);
});
G__7239.cljs$lang$arity$variadic = G__7239__delegate;
return G__7239;
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
var or__3824__auto____7183 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7183))
{return or__3824__auto____7183;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____7184 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7184))
{return or__3824__auto____7184;
} else
{var or__3824__auto____7185 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7185))
{return or__3824__auto____7185;
} else
{var or__3824__auto____7186 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7186))
{return or__3824__auto____7186;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____7187 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7187))
{return or__3824__auto____7187;
} else
{var or__3824__auto____7188 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7188))
{return or__3824__auto____7188;
} else
{var or__3824__auto____7189 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7189))
{return or__3824__auto____7189;
} else
{var or__3824__auto____7190 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7190))
{return or__3824__auto____7190;
} else
{var or__3824__auto____7191 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7191))
{return or__3824__auto____7191;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__7241__delegate = function (x,y,z,args){
var or__3824__auto____7192 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7192))
{return or__3824__auto____7192;
} else
{return cljs.core.some.call(null,(function (p1__6922_SHARP_){
var or__3824__auto____7193 = p1.call(null,p1__6922_SHARP_);
if(cljs.core.truth_(or__3824__auto____7193))
{return or__3824__auto____7193;
} else
{return p2.call(null,p1__6922_SHARP_);
}
}),args);
}
};
var G__7241 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7241__delegate.call(this, x, y, z, args);
};
G__7241.cljs$lang$maxFixedArity = 3;
G__7241.cljs$lang$applyTo = (function (arglist__7242){
var x = cljs.core.first(arglist__7242);
var y = cljs.core.first(cljs.core.next(arglist__7242));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7242)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7242)));
return G__7241__delegate(x, y, z, args);
});
G__7241.cljs$lang$arity$variadic = G__7241__delegate;
return G__7241;
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
var or__3824__auto____7212 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7212))
{return or__3824__auto____7212;
} else
{var or__3824__auto____7213 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7213))
{return or__3824__auto____7213;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____7214 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7214))
{return or__3824__auto____7214;
} else
{var or__3824__auto____7215 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7215))
{return or__3824__auto____7215;
} else
{var or__3824__auto____7216 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7216))
{return or__3824__auto____7216;
} else
{var or__3824__auto____7217 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7217))
{return or__3824__auto____7217;
} else
{var or__3824__auto____7218 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7218))
{return or__3824__auto____7218;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____7219 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7219))
{return or__3824__auto____7219;
} else
{var or__3824__auto____7220 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7220))
{return or__3824__auto____7220;
} else
{var or__3824__auto____7221 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7221))
{return or__3824__auto____7221;
} else
{var or__3824__auto____7222 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7222))
{return or__3824__auto____7222;
} else
{var or__3824__auto____7223 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7223))
{return or__3824__auto____7223;
} else
{var or__3824__auto____7224 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____7224))
{return or__3824__auto____7224;
} else
{var or__3824__auto____7225 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7225))
{return or__3824__auto____7225;
} else
{var or__3824__auto____7226 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____7226))
{return or__3824__auto____7226;
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
var G__7243__delegate = function (x,y,z,args){
var or__3824__auto____7227 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7227))
{return or__3824__auto____7227;
} else
{return cljs.core.some.call(null,(function (p1__6923_SHARP_){
var or__3824__auto____7228 = p1.call(null,p1__6923_SHARP_);
if(cljs.core.truth_(or__3824__auto____7228))
{return or__3824__auto____7228;
} else
{var or__3824__auto____7229 = p2.call(null,p1__6923_SHARP_);
if(cljs.core.truth_(or__3824__auto____7229))
{return or__3824__auto____7229;
} else
{return p3.call(null,p1__6923_SHARP_);
}
}
}),args);
}
};
var G__7243 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7243__delegate.call(this, x, y, z, args);
};
G__7243.cljs$lang$maxFixedArity = 3;
G__7243.cljs$lang$applyTo = (function (arglist__7244){
var x = cljs.core.first(arglist__7244);
var y = cljs.core.first(cljs.core.next(arglist__7244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7244)));
return G__7243__delegate(x, y, z, args);
});
G__7243.cljs$lang$arity$variadic = G__7243__delegate;
return G__7243;
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
var G__7245__delegate = function (p1,p2,p3,ps){
var ps__7230 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__6924_SHARP_){
return p1__6924_SHARP_.call(null,x);
}),ps__7230);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__6925_SHARP_){
var or__3824__auto____7235 = p1__6925_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7235))
{return or__3824__auto____7235;
} else
{return p1__6925_SHARP_.call(null,y);
}
}),ps__7230);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__6926_SHARP_){
var or__3824__auto____7236 = p1__6926_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7236))
{return or__3824__auto____7236;
} else
{var or__3824__auto____7237 = p1__6926_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____7237))
{return or__3824__auto____7237;
} else
{return p1__6926_SHARP_.call(null,z);
}
}
}),ps__7230);
});
var spn__4 = (function() { 
var G__7246__delegate = function (x,y,z,args){
var or__3824__auto____7238 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7238))
{return or__3824__auto____7238;
} else
{return cljs.core.some.call(null,(function (p1__6927_SHARP_){
return cljs.core.some.call(null,p1__6927_SHARP_,args);
}),ps__7230);
}
};
var G__7246 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7246__delegate.call(this, x, y, z, args);
};
G__7246.cljs$lang$maxFixedArity = 3;
G__7246.cljs$lang$applyTo = (function (arglist__7247){
var x = cljs.core.first(arglist__7247);
var y = cljs.core.first(cljs.core.next(arglist__7247));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7247)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7247)));
return G__7246__delegate(x, y, z, args);
});
G__7246.cljs$lang$arity$variadic = G__7246__delegate;
return G__7246;
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
var G__7245 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7245__delegate.call(this, p1, p2, p3, ps);
};
G__7245.cljs$lang$maxFixedArity = 3;
G__7245.cljs$lang$applyTo = (function (arglist__7248){
var p1 = cljs.core.first(arglist__7248);
var p2 = cljs.core.first(cljs.core.next(arglist__7248));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7248)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7248)));
return G__7245__delegate(p1, p2, p3, ps);
});
G__7245.cljs$lang$arity$variadic = G__7245__delegate;
return G__7245;
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
var temp__3974__auto____7267 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7267)
{var s__7268 = temp__3974__auto____7267;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7268))
{var c__7269 = cljs.core.chunk_first.call(null,s__7268);
var size__7270 = cljs.core.count.call(null,c__7269);
var b__7271 = cljs.core.chunk_buffer.call(null,size__7270);
var n__2135__auto____7272 = size__7270;
var i__7273 = 0;
while(true){
if((i__7273 < n__2135__auto____7272))
{cljs.core.chunk_append.call(null,b__7271,f.call(null,cljs.core._nth.call(null,c__7269,i__7273)));
{
var G__7285 = (i__7273 + 1);
i__7273 = G__7285;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7271),map.call(null,f,cljs.core.chunk_rest.call(null,s__7268)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7268)),map.call(null,f,cljs.core.rest.call(null,s__7268)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7274 = cljs.core.seq.call(null,c1);
var s2__7275 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7276 = s1__7274;
if(and__3822__auto____7276)
{return s2__7275;
} else
{return and__3822__auto____7276;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7274),cljs.core.first.call(null,s2__7275)),map.call(null,f,cljs.core.rest.call(null,s1__7274),cljs.core.rest.call(null,s2__7275)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7277 = cljs.core.seq.call(null,c1);
var s2__7278 = cljs.core.seq.call(null,c2);
var s3__7279 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____7280 = s1__7277;
if(and__3822__auto____7280)
{var and__3822__auto____7281 = s2__7278;
if(and__3822__auto____7281)
{return s3__7279;
} else
{return and__3822__auto____7281;
}
} else
{return and__3822__auto____7280;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7277),cljs.core.first.call(null,s2__7278),cljs.core.first.call(null,s3__7279)),map.call(null,f,cljs.core.rest.call(null,s1__7277),cljs.core.rest.call(null,s2__7278),cljs.core.rest.call(null,s3__7279)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__7286__delegate = function (f,c1,c2,c3,colls){
var step__7284 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7283 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7283))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7283),step.call(null,map.call(null,cljs.core.rest,ss__7283)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__7088_SHARP_){
return cljs.core.apply.call(null,f,p1__7088_SHARP_);
}),step__7284.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7286 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7286__delegate.call(this, f, c1, c2, c3, colls);
};
G__7286.cljs$lang$maxFixedArity = 4;
G__7286.cljs$lang$applyTo = (function (arglist__7287){
var f = cljs.core.first(arglist__7287);
var c1 = cljs.core.first(cljs.core.next(arglist__7287));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7287)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7287))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7287))));
return G__7286__delegate(f, c1, c2, c3, colls);
});
G__7286.cljs$lang$arity$variadic = G__7286__delegate;
return G__7286;
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
{var temp__3974__auto____7290 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7290)
{var s__7291 = temp__3974__auto____7290;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__7291),take.call(null,(n - 1),cljs.core.rest.call(null,s__7291)));
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
var step__7297 = (function (n,coll){
while(true){
var s__7295 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7296 = (n > 0);
if(and__3822__auto____7296)
{return s__7295;
} else
{return and__3822__auto____7296;
}
})()))
{{
var G__7298 = (n - 1);
var G__7299 = cljs.core.rest.call(null,s__7295);
n = G__7298;
coll = G__7299;
continue;
}
} else
{return s__7295;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7297.call(null,n,coll);
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
var s__7302 = cljs.core.seq.call(null,coll);
var lead__7303 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__7303)
{{
var G__7304 = cljs.core.next.call(null,s__7302);
var G__7305 = cljs.core.next.call(null,lead__7303);
s__7302 = G__7304;
lead__7303 = G__7305;
continue;
}
} else
{return s__7302;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7311 = (function (pred,coll){
while(true){
var s__7309 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7310 = s__7309;
if(and__3822__auto____7310)
{return pred.call(null,cljs.core.first.call(null,s__7309));
} else
{return and__3822__auto____7310;
}
})()))
{{
var G__7312 = pred;
var G__7313 = cljs.core.rest.call(null,s__7309);
pred = G__7312;
coll = G__7313;
continue;
}
} else
{return s__7309;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7311.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7316 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7316)
{var s__7317 = temp__3974__auto____7316;
return cljs.core.concat.call(null,s__7317,cycle.call(null,s__7317));
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
var s1__7322 = cljs.core.seq.call(null,c1);
var s2__7323 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7324 = s1__7322;
if(and__3822__auto____7324)
{return s2__7323;
} else
{return and__3822__auto____7324;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7322),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7323),interleave.call(null,cljs.core.rest.call(null,s1__7322),cljs.core.rest.call(null,s2__7323))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__7326__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7325 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7325))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7325),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7325)));
} else
{return null;
}
}),null));
};
var G__7326 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7326__delegate.call(this, c1, c2, colls);
};
G__7326.cljs$lang$maxFixedArity = 2;
G__7326.cljs$lang$applyTo = (function (arglist__7327){
var c1 = cljs.core.first(arglist__7327);
var c2 = cljs.core.first(cljs.core.next(arglist__7327));
var colls = cljs.core.rest(cljs.core.next(arglist__7327));
return G__7326__delegate(c1, c2, colls);
});
G__7326.cljs$lang$arity$variadic = G__7326__delegate;
return G__7326;
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
var cat__7337 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____7335 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7335)
{var coll__7336 = temp__3971__auto____7335;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7336),cat.call(null,cljs.core.rest.call(null,coll__7336),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__7337.call(null,null,colls);
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
var G__7338__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7338 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7338__delegate.call(this, f, coll, colls);
};
G__7338.cljs$lang$maxFixedArity = 2;
G__7338.cljs$lang$applyTo = (function (arglist__7339){
var f = cljs.core.first(arglist__7339);
var coll = cljs.core.first(cljs.core.next(arglist__7339));
var colls = cljs.core.rest(cljs.core.next(arglist__7339));
return G__7338__delegate(f, coll, colls);
});
G__7338.cljs$lang$arity$variadic = G__7338__delegate;
return G__7338;
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
var temp__3974__auto____7349 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7349)
{var s__7350 = temp__3974__auto____7349;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7350))
{var c__7351 = cljs.core.chunk_first.call(null,s__7350);
var size__7352 = cljs.core.count.call(null,c__7351);
var b__7353 = cljs.core.chunk_buffer.call(null,size__7352);
var n__2135__auto____7354 = size__7352;
var i__7355 = 0;
while(true){
if((i__7355 < n__2135__auto____7354))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__7351,i__7355))))
{cljs.core.chunk_append.call(null,b__7353,cljs.core._nth.call(null,c__7351,i__7355));
} else
{}
{
var G__7358 = (i__7355 + 1);
i__7355 = G__7358;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7353),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__7350)));
} else
{var f__7356 = cljs.core.first.call(null,s__7350);
var r__7357 = cljs.core.rest.call(null,s__7350);
if(cljs.core.truth_(pred.call(null,f__7356)))
{return cljs.core.cons.call(null,f__7356,filter.call(null,pred,r__7357));
} else
{return filter.call(null,pred,r__7357);
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
var walk__7361 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__7361.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7359_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__7359_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__7365__7366 = to;
if(G__7365__7366)
{if((function (){var or__3824__auto____7367 = (G__7365__7366.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____7367)
{return or__3824__auto____7367;
} else
{return G__7365__7366.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__7365__7366.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7365__7366);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7365__7366);
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
var G__7368__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__7368 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7368__delegate.call(this, f, c1, c2, c3, colls);
};
G__7368.cljs$lang$maxFixedArity = 4;
G__7368.cljs$lang$applyTo = (function (arglist__7369){
var f = cljs.core.first(arglist__7369);
var c1 = cljs.core.first(cljs.core.next(arglist__7369));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7369)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7369))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7369))));
return G__7368__delegate(f, c1, c2, c3, colls);
});
G__7368.cljs$lang$arity$variadic = G__7368__delegate;
return G__7368;
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
var temp__3974__auto____7376 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7376)
{var s__7377 = temp__3974__auto____7376;
var p__7378 = cljs.core.take.call(null,n,s__7377);
if((n === cljs.core.count.call(null,p__7378)))
{return cljs.core.cons.call(null,p__7378,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7377)));
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
var temp__3974__auto____7379 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7379)
{var s__7380 = temp__3974__auto____7379;
var p__7381 = cljs.core.take.call(null,n,s__7380);
if((n === cljs.core.count.call(null,p__7381)))
{return cljs.core.cons.call(null,p__7381,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7380)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7381,pad)));
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
var sentinel__7386 = cljs.core.lookup_sentinel;
var m__7387 = m;
var ks__7388 = cljs.core.seq.call(null,ks);
while(true){
if(ks__7388)
{var m__7389 = cljs.core._lookup.call(null,m__7387,cljs.core.first.call(null,ks__7388),sentinel__7386);
if((sentinel__7386 === m__7389))
{return not_found;
} else
{{
var G__7390 = sentinel__7386;
var G__7391 = m__7389;
var G__7392 = cljs.core.next.call(null,ks__7388);
sentinel__7386 = G__7390;
m__7387 = G__7391;
ks__7388 = G__7392;
continue;
}
}
} else
{return m__7387;
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
cljs.core.assoc_in = (function assoc_in(m,p__7393,v){
var vec__7398__7399 = p__7393;
var k__7400 = cljs.core.nth.call(null,vec__7398__7399,0,null);
var ks__7401 = cljs.core.nthnext.call(null,vec__7398__7399,1);
if(cljs.core.truth_(ks__7401))
{return cljs.core.assoc.call(null,m,k__7400,assoc_in.call(null,cljs.core._lookup.call(null,m,k__7400,null),ks__7401,v));
} else
{return cljs.core.assoc.call(null,m,k__7400,v);
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
var update_in__delegate = function (m,p__7402,f,args){
var vec__7407__7408 = p__7402;
var k__7409 = cljs.core.nth.call(null,vec__7407__7408,0,null);
var ks__7410 = cljs.core.nthnext.call(null,vec__7407__7408,1);
if(cljs.core.truth_(ks__7410))
{return cljs.core.assoc.call(null,m,k__7409,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__7409,null),ks__7410,f,args));
} else
{return cljs.core.assoc.call(null,m,k__7409,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__7409,null),args));
}
};
var update_in = function (m,p__7402,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7402, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7411){
var m = cljs.core.first(arglist__7411);
var p__7402 = cljs.core.first(cljs.core.next(arglist__7411));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7411)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7411)));
return update_in__delegate(m, p__7402, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7414 = this;
var h__1796__auto____7415 = this__7414.__hash;
if(!((h__1796__auto____7415 == null)))
{return h__1796__auto____7415;
} else
{var h__1796__auto____7416 = cljs.core.hash_coll.call(null,coll);
this__7414.__hash = h__1796__auto____7416;
return h__1796__auto____7416;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7417 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7418 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7419 = this;
var new_array__7420 = this__7419.array.slice();
(new_array__7420[k] = v);
return (new cljs.core.Vector(this__7419.meta,new_array__7420,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__7451 = null;
var G__7451__2 = (function (this_sym7421,k){
var this__7423 = this;
var this_sym7421__7424 = this;
var coll__7425 = this_sym7421__7424;
return coll__7425.cljs$core$ILookup$_lookup$arity$2(coll__7425,k);
});
var G__7451__3 = (function (this_sym7422,k,not_found){
var this__7423 = this;
var this_sym7422__7426 = this;
var coll__7427 = this_sym7422__7426;
return coll__7427.cljs$core$ILookup$_lookup$arity$3(coll__7427,k,not_found);
});
G__7451 = function(this_sym7422,k,not_found){
switch(arguments.length){
case 2:
return G__7451__2.call(this,this_sym7422,k);
case 3:
return G__7451__3.call(this,this_sym7422,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7451;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym7412,args7413){
var this__7428 = this;
return this_sym7412.call.apply(this_sym7412,[this_sym7412].concat(args7413.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7429 = this;
var new_array__7430 = this__7429.array.slice();
new_array__7430.push(o);
return (new cljs.core.Vector(this__7429.meta,new_array__7430,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__7431 = this;
var this__7432 = this;
return cljs.core.pr_str.call(null,this__7432);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7433 = this;
return cljs.core.ci_reduce.call(null,this__7433.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7434 = this;
return cljs.core.ci_reduce.call(null,this__7434.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7435 = this;
if((this__7435.array.length > 0))
{var vector_seq__7436 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__7435.array.length))
{return cljs.core.cons.call(null,(this__7435.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__7436.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7437 = this;
return this__7437.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7438 = this;
var count__7439 = this__7438.array.length;
if((count__7439 > 0))
{return (this__7438.array[(count__7439 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7440 = this;
if((this__7440.array.length > 0))
{var new_array__7441 = this__7440.array.slice();
new_array__7441.pop();
return (new cljs.core.Vector(this__7440.meta,new_array__7441,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7442 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7443 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7444 = this;
return (new cljs.core.Vector(meta,this__7444.array,this__7444.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7445 = this;
return this__7445.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7446 = this;
if((function (){var and__3822__auto____7447 = (0 <= n);
if(and__3822__auto____7447)
{return (n < this__7446.array.length);
} else
{return and__3822__auto____7447;
}
})())
{return (this__7446.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7448 = this;
if((function (){var and__3822__auto____7449 = (0 <= n);
if(and__3822__auto____7449)
{return (n < this__7448.array.length);
} else
{return and__3822__auto____7449;
}
})())
{return (this__7448.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7450 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7450.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__1914__auto__){
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
var cnt__7453 = pv.cnt;
if((cnt__7453 < 32))
{return 0;
} else
{return (((cnt__7453 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__7459 = level;
var ret__7460 = node;
while(true){
if((ll__7459 === 0))
{return ret__7460;
} else
{var embed__7461 = ret__7460;
var r__7462 = cljs.core.pv_fresh_node.call(null,edit);
var ___7463 = cljs.core.pv_aset.call(null,r__7462,0,embed__7461);
{
var G__7464 = (ll__7459 - 5);
var G__7465 = r__7462;
ll__7459 = G__7464;
ret__7460 = G__7465;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__7471 = cljs.core.pv_clone_node.call(null,parent);
var subidx__7472 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__7471,subidx__7472,tailnode);
return ret__7471;
} else
{var child__7473 = cljs.core.pv_aget.call(null,parent,subidx__7472);
if(!((child__7473 == null)))
{var node_to_insert__7474 = push_tail.call(null,pv,(level - 5),child__7473,tailnode);
cljs.core.pv_aset.call(null,ret__7471,subidx__7472,node_to_insert__7474);
return ret__7471;
} else
{var node_to_insert__7475 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__7471,subidx__7472,node_to_insert__7475);
return ret__7471;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____7479 = (0 <= i);
if(and__3822__auto____7479)
{return (i < pv.cnt);
} else
{return and__3822__auto____7479;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__7480 = pv.root;
var level__7481 = pv.shift;
while(true){
if((level__7481 > 0))
{{
var G__7482 = cljs.core.pv_aget.call(null,node__7480,((i >>> level__7481) & 31));
var G__7483 = (level__7481 - 5);
node__7480 = G__7482;
level__7481 = G__7483;
continue;
}
} else
{return node__7480.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__7486 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__7486,(i & 31),val);
return ret__7486;
} else
{var subidx__7487 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__7486,subidx__7487,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7487),i,val));
return ret__7486;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__7493 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__7494 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7493));
if((function (){var and__3822__auto____7495 = (new_child__7494 == null);
if(and__3822__auto____7495)
{return (subidx__7493 === 0);
} else
{return and__3822__auto____7495;
}
})())
{return null;
} else
{var ret__7496 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7496,subidx__7493,new_child__7494);
return ret__7496;
}
} else
{if((subidx__7493 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__7497 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7497,subidx__7493,null);
return ret__7497;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__7500 = this;
return (new cljs.core.TransientVector(this__7500.cnt,this__7500.shift,cljs.core.tv_editable_root.call(null,this__7500.root),cljs.core.tv_editable_tail.call(null,this__7500.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7501 = this;
var h__1796__auto____7502 = this__7501.__hash;
if(!((h__1796__auto____7502 == null)))
{return h__1796__auto____7502;
} else
{var h__1796__auto____7503 = cljs.core.hash_coll.call(null,coll);
this__7501.__hash = h__1796__auto____7503;
return h__1796__auto____7503;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7504 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7505 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7506 = this;
if((function (){var and__3822__auto____7507 = (0 <= k);
if(and__3822__auto____7507)
{return (k < this__7506.cnt);
} else
{return and__3822__auto____7507;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__7508 = this__7506.tail.slice();
(new_tail__7508[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__7506.meta,this__7506.cnt,this__7506.shift,this__7506.root,new_tail__7508,null));
} else
{return (new cljs.core.PersistentVector(this__7506.meta,this__7506.cnt,this__7506.shift,cljs.core.do_assoc.call(null,coll,this__7506.shift,this__7506.root,k,v),this__7506.tail,null));
}
} else
{if((k === this__7506.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__7506.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__7556 = null;
var G__7556__2 = (function (this_sym7509,k){
var this__7511 = this;
var this_sym7509__7512 = this;
var coll__7513 = this_sym7509__7512;
return coll__7513.cljs$core$ILookup$_lookup$arity$2(coll__7513,k);
});
var G__7556__3 = (function (this_sym7510,k,not_found){
var this__7511 = this;
var this_sym7510__7514 = this;
var coll__7515 = this_sym7510__7514;
return coll__7515.cljs$core$ILookup$_lookup$arity$3(coll__7515,k,not_found);
});
G__7556 = function(this_sym7510,k,not_found){
switch(arguments.length){
case 2:
return G__7556__2.call(this,this_sym7510,k);
case 3:
return G__7556__3.call(this,this_sym7510,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7556;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym7498,args7499){
var this__7516 = this;
return this_sym7498.call.apply(this_sym7498,[this_sym7498].concat(args7499.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__7517 = this;
var step_init__7518 = [0,init];
var i__7519 = 0;
while(true){
if((i__7519 < this__7517.cnt))
{var arr__7520 = cljs.core.array_for.call(null,v,i__7519);
var len__7521 = arr__7520.length;
var init__7525 = (function (){var j__7522 = 0;
var init__7523 = (step_init__7518[1]);
while(true){
if((j__7522 < len__7521))
{var init__7524 = f.call(null,init__7523,(j__7522 + i__7519),(arr__7520[j__7522]));
if(cljs.core.reduced_QMARK_.call(null,init__7524))
{return init__7524;
} else
{{
var G__7557 = (j__7522 + 1);
var G__7558 = init__7524;
j__7522 = G__7557;
init__7523 = G__7558;
continue;
}
}
} else
{(step_init__7518[0] = len__7521);
(step_init__7518[1] = init__7523);
return init__7523;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__7525))
{return cljs.core.deref.call(null,init__7525);
} else
{{
var G__7559 = (i__7519 + (step_init__7518[0]));
i__7519 = G__7559;
continue;
}
}
} else
{return (step_init__7518[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7526 = this;
if(((this__7526.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__7527 = this__7526.tail.slice();
new_tail__7527.push(o);
return (new cljs.core.PersistentVector(this__7526.meta,(this__7526.cnt + 1),this__7526.shift,this__7526.root,new_tail__7527,null));
} else
{var root_overflow_QMARK___7528 = ((this__7526.cnt >>> 5) > (1 << this__7526.shift));
var new_shift__7529 = ((root_overflow_QMARK___7528)?(this__7526.shift + 5):this__7526.shift);
var new_root__7531 = ((root_overflow_QMARK___7528)?(function (){var n_r__7530 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__7530,0,this__7526.root);
cljs.core.pv_aset.call(null,n_r__7530,1,cljs.core.new_path.call(null,null,this__7526.shift,(new cljs.core.VectorNode(null,this__7526.tail))));
return n_r__7530;
})():cljs.core.push_tail.call(null,coll,this__7526.shift,this__7526.root,(new cljs.core.VectorNode(null,this__7526.tail))));
return (new cljs.core.PersistentVector(this__7526.meta,(this__7526.cnt + 1),new_shift__7529,new_root__7531,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7532 = this;
if((this__7532.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__7532.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__7533 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__7534 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__7535 = this;
var this__7536 = this;
return cljs.core.pr_str.call(null,this__7536);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7537 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7538 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7539 = this;
if((this__7539.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7540 = this;
return this__7540.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7541 = this;
if((this__7541.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__7541.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7542 = this;
if((this__7542.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__7542.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7542.meta);
} else
{if((1 < (this__7542.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__7542.meta,(this__7542.cnt - 1),this__7542.shift,this__7542.root,this__7542.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__7543 = cljs.core.array_for.call(null,coll,(this__7542.cnt - 2));
var nr__7544 = cljs.core.pop_tail.call(null,coll,this__7542.shift,this__7542.root);
var new_root__7545 = (((nr__7544 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__7544);
var cnt_1__7546 = (this__7542.cnt - 1);
if((function (){var and__3822__auto____7547 = (5 < this__7542.shift);
if(and__3822__auto____7547)
{return (cljs.core.pv_aget.call(null,new_root__7545,1) == null);
} else
{return and__3822__auto____7547;
}
})())
{return (new cljs.core.PersistentVector(this__7542.meta,cnt_1__7546,(this__7542.shift - 5),cljs.core.pv_aget.call(null,new_root__7545,0),new_tail__7543,null));
} else
{return (new cljs.core.PersistentVector(this__7542.meta,cnt_1__7546,this__7542.shift,new_root__7545,new_tail__7543,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7548 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7549 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7550 = this;
return (new cljs.core.PersistentVector(meta,this__7550.cnt,this__7550.shift,this__7550.root,this__7550.tail,this__7550.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7551 = this;
return this__7551.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7552 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7553 = this;
if((function (){var and__3822__auto____7554 = (0 <= n);
if(and__3822__auto____7554)
{return (n < this__7553.cnt);
} else
{return and__3822__auto____7554;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7555 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7555.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__7560 = xs.length;
var xs__7561 = (((no_clone === true))?xs:xs.slice());
if((l__7560 < 32))
{return (new cljs.core.PersistentVector(null,l__7560,5,cljs.core.PersistentVector.EMPTY_NODE,xs__7561,null));
} else
{var node__7562 = xs__7561.slice(0,32);
var v__7563 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__7562,null));
var i__7564 = 32;
var out__7565 = cljs.core._as_transient.call(null,v__7563);
while(true){
if((i__7564 < l__7560))
{{
var G__7566 = (i__7564 + 1);
var G__7567 = cljs.core.conj_BANG_.call(null,out__7565,(xs__7561[i__7564]));
i__7564 = G__7566;
out__7565 = G__7567;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__7565);
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
vector.cljs$lang$applyTo = (function (arglist__7568){
var args = cljs.core.seq(arglist__7568);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7569 = this;
if(((this__7569.off + 1) < this__7569.node.length))
{var s__7570 = cljs.core.chunked_seq.call(null,this__7569.vec,this__7569.node,this__7569.i,(this__7569.off + 1));
if((s__7570 == null))
{return null;
} else
{return s__7570;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7571 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7572 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7573 = this;
return (this__7573.node[this__7573.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7574 = this;
if(((this__7574.off + 1) < this__7574.node.length))
{var s__7575 = cljs.core.chunked_seq.call(null,this__7574.vec,this__7574.node,this__7574.i,(this__7574.off + 1));
if((s__7575 == null))
{return cljs.core.List.EMPTY;
} else
{return s__7575;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7576 = this;
var l__7577 = this__7576.node.length;
var s__7578 = ((((this__7576.i + l__7577) < cljs.core._count.call(null,this__7576.vec)))?cljs.core.chunked_seq.call(null,this__7576.vec,(this__7576.i + l__7577),0):null);
if((s__7578 == null))
{return null;
} else
{return s__7578;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7579 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7580 = this;
return cljs.core.chunked_seq.call(null,this__7580.vec,this__7580.node,this__7580.i,this__7580.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__7581 = this;
return this__7581.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7582 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7582.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7583 = this;
return cljs.core.array_chunk.call(null,this__7583.node,this__7583.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7584 = this;
var l__7585 = this__7584.node.length;
var s__7586 = ((((this__7584.i + l__7585) < cljs.core._count.call(null,this__7584.vec)))?cljs.core.chunked_seq.call(null,this__7584.vec,(this__7584.i + l__7585),0):null);
if((s__7586 == null))
{return cljs.core.List.EMPTY;
} else
{return s__7586;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7589 = this;
var h__1796__auto____7590 = this__7589.__hash;
if(!((h__1796__auto____7590 == null)))
{return h__1796__auto____7590;
} else
{var h__1796__auto____7591 = cljs.core.hash_coll.call(null,coll);
this__7589.__hash = h__1796__auto____7591;
return h__1796__auto____7591;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7592 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7593 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__7594 = this;
var v_pos__7595 = (this__7594.start + key);
return (new cljs.core.Subvec(this__7594.meta,cljs.core._assoc.call(null,this__7594.v,v_pos__7595,val),this__7594.start,((this__7594.end > (v_pos__7595 + 1)) ? this__7594.end : (v_pos__7595 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__7621 = null;
var G__7621__2 = (function (this_sym7596,k){
var this__7598 = this;
var this_sym7596__7599 = this;
var coll__7600 = this_sym7596__7599;
return coll__7600.cljs$core$ILookup$_lookup$arity$2(coll__7600,k);
});
var G__7621__3 = (function (this_sym7597,k,not_found){
var this__7598 = this;
var this_sym7597__7601 = this;
var coll__7602 = this_sym7597__7601;
return coll__7602.cljs$core$ILookup$_lookup$arity$3(coll__7602,k,not_found);
});
G__7621 = function(this_sym7597,k,not_found){
switch(arguments.length){
case 2:
return G__7621__2.call(this,this_sym7597,k);
case 3:
return G__7621__3.call(this,this_sym7597,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7621;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym7587,args7588){
var this__7603 = this;
return this_sym7587.call.apply(this_sym7587,[this_sym7587].concat(args7588.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7604 = this;
return (new cljs.core.Subvec(this__7604.meta,cljs.core._assoc_n.call(null,this__7604.v,this__7604.end,o),this__7604.start,(this__7604.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__7605 = this;
var this__7606 = this;
return cljs.core.pr_str.call(null,this__7606);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7607 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7608 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7609 = this;
var subvec_seq__7610 = (function subvec_seq(i){
if((i === this__7609.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__7609.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__7610.call(null,this__7609.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7611 = this;
return (this__7611.end - this__7611.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7612 = this;
return cljs.core._nth.call(null,this__7612.v,(this__7612.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7613 = this;
if((this__7613.start === this__7613.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__7613.meta,this__7613.v,this__7613.start,(this__7613.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7614 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7615 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7616 = this;
return (new cljs.core.Subvec(meta,this__7616.v,this__7616.start,this__7616.end,this__7616.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7617 = this;
return this__7617.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7618 = this;
return cljs.core._nth.call(null,this__7618.v,(this__7618.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7619 = this;
return cljs.core._nth.call(null,this__7619.v,(this__7619.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7620 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7620.meta);
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
var ret__7623 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__7623,0,tl.length);
return ret__7623;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__7627 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__7628 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__7627,subidx__7628,(((level === 5))?tail_node:(function (){var child__7629 = cljs.core.pv_aget.call(null,ret__7627,subidx__7628);
if(!((child__7629 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__7629,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__7627;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__7634 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__7635 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__7636 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__7634,subidx__7635));
if((function (){var and__3822__auto____7637 = (new_child__7636 == null);
if(and__3822__auto____7637)
{return (subidx__7635 === 0);
} else
{return and__3822__auto____7637;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__7634,subidx__7635,new_child__7636);
return node__7634;
}
} else
{if((subidx__7635 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__7634,subidx__7635,null);
return node__7634;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____7642 = (0 <= i);
if(and__3822__auto____7642)
{return (i < tv.cnt);
} else
{return and__3822__auto____7642;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__7643 = tv.root;
var node__7644 = root__7643;
var level__7645 = tv.shift;
while(true){
if((level__7645 > 0))
{{
var G__7646 = cljs.core.tv_ensure_editable.call(null,root__7643.edit,cljs.core.pv_aget.call(null,node__7644,((i >>> level__7645) & 31)));
var G__7647 = (level__7645 - 5);
node__7644 = G__7646;
level__7645 = G__7647;
continue;
}
} else
{return node__7644.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__7687 = null;
var G__7687__2 = (function (this_sym7650,k){
var this__7652 = this;
var this_sym7650__7653 = this;
var coll__7654 = this_sym7650__7653;
return coll__7654.cljs$core$ILookup$_lookup$arity$2(coll__7654,k);
});
var G__7687__3 = (function (this_sym7651,k,not_found){
var this__7652 = this;
var this_sym7651__7655 = this;
var coll__7656 = this_sym7651__7655;
return coll__7656.cljs$core$ILookup$_lookup$arity$3(coll__7656,k,not_found);
});
G__7687 = function(this_sym7651,k,not_found){
switch(arguments.length){
case 2:
return G__7687__2.call(this,this_sym7651,k);
case 3:
return G__7687__3.call(this,this_sym7651,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7687;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym7648,args7649){
var this__7657 = this;
return this_sym7648.call.apply(this_sym7648,[this_sym7648].concat(args7649.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7658 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7659 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7660 = this;
if(this__7660.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7661 = this;
if((function (){var and__3822__auto____7662 = (0 <= n);
if(and__3822__auto____7662)
{return (n < this__7661.cnt);
} else
{return and__3822__auto____7662;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7663 = this;
if(this__7663.root.edit)
{return this__7663.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__7664 = this;
if(this__7664.root.edit)
{if((function (){var and__3822__auto____7665 = (0 <= n);
if(and__3822__auto____7665)
{return (n < this__7664.cnt);
} else
{return and__3822__auto____7665;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__7664.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__7670 = (function go(level,node){
var node__7668 = cljs.core.tv_ensure_editable.call(null,this__7664.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__7668,(n & 31),val);
return node__7668;
} else
{var subidx__7669 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__7668,subidx__7669,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__7668,subidx__7669)));
return node__7668;
}
}).call(null,this__7664.shift,this__7664.root);
this__7664.root = new_root__7670;
return tcoll;
}
} else
{if((n === this__7664.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__7664.cnt)].join('')));
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
var this__7671 = this;
if(this__7671.root.edit)
{if((this__7671.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__7671.cnt))
{this__7671.cnt = 0;
return tcoll;
} else
{if((((this__7671.cnt - 1) & 31) > 0))
{this__7671.cnt = (this__7671.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__7672 = cljs.core.editable_array_for.call(null,tcoll,(this__7671.cnt - 2));
var new_root__7674 = (function (){var nr__7673 = cljs.core.tv_pop_tail.call(null,tcoll,this__7671.shift,this__7671.root);
if(!((nr__7673 == null)))
{return nr__7673;
} else
{return (new cljs.core.VectorNode(this__7671.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____7675 = (5 < this__7671.shift);
if(and__3822__auto____7675)
{return (cljs.core.pv_aget.call(null,new_root__7674,1) == null);
} else
{return and__3822__auto____7675;
}
})())
{var new_root__7676 = cljs.core.tv_ensure_editable.call(null,this__7671.root.edit,cljs.core.pv_aget.call(null,new_root__7674,0));
this__7671.root = new_root__7676;
this__7671.shift = (this__7671.shift - 5);
this__7671.cnt = (this__7671.cnt - 1);
this__7671.tail = new_tail__7672;
return tcoll;
} else
{this__7671.root = new_root__7674;
this__7671.cnt = (this__7671.cnt - 1);
this__7671.tail = new_tail__7672;
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
var this__7677 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__7678 = this;
if(this__7678.root.edit)
{if(((this__7678.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__7678.tail[(this__7678.cnt & 31)] = o);
this__7678.cnt = (this__7678.cnt + 1);
return tcoll;
} else
{var tail_node__7679 = (new cljs.core.VectorNode(this__7678.root.edit,this__7678.tail));
var new_tail__7680 = cljs.core.make_array.call(null,32);
(new_tail__7680[0] = o);
this__7678.tail = new_tail__7680;
if(((this__7678.cnt >>> 5) > (1 << this__7678.shift)))
{var new_root_array__7681 = cljs.core.make_array.call(null,32);
var new_shift__7682 = (this__7678.shift + 5);
(new_root_array__7681[0] = this__7678.root);
(new_root_array__7681[1] = cljs.core.new_path.call(null,this__7678.root.edit,this__7678.shift,tail_node__7679));
this__7678.root = (new cljs.core.VectorNode(this__7678.root.edit,new_root_array__7681));
this__7678.shift = new_shift__7682;
this__7678.cnt = (this__7678.cnt + 1);
return tcoll;
} else
{var new_root__7683 = cljs.core.tv_push_tail.call(null,tcoll,this__7678.shift,this__7678.root,tail_node__7679);
this__7678.root = new_root__7683;
this__7678.cnt = (this__7678.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__7684 = this;
if(this__7684.root.edit)
{this__7684.root.edit = null;
var len__7685 = (this__7684.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__7686 = cljs.core.make_array.call(null,len__7685);
cljs.core.array_copy.call(null,this__7684.tail,0,trimmed_tail__7686,0,len__7685);
return (new cljs.core.PersistentVector(null,this__7684.cnt,this__7684.shift,this__7684.root,trimmed_tail__7686,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7688 = this;
var h__1796__auto____7689 = this__7688.__hash;
if(!((h__1796__auto____7689 == null)))
{return h__1796__auto____7689;
} else
{var h__1796__auto____7690 = cljs.core.hash_coll.call(null,coll);
this__7688.__hash = h__1796__auto____7690;
return h__1796__auto____7690;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7691 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__7692 = this;
var this__7693 = this;
return cljs.core.pr_str.call(null,this__7693);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7694 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7695 = this;
return cljs.core._first.call(null,this__7695.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7696 = this;
var temp__3971__auto____7697 = cljs.core.next.call(null,this__7696.front);
if(temp__3971__auto____7697)
{var f1__7698 = temp__3971__auto____7697;
return (new cljs.core.PersistentQueueSeq(this__7696.meta,f1__7698,this__7696.rear,null));
} else
{if((this__7696.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__7696.meta,this__7696.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7699 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7700 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__7700.front,this__7700.rear,this__7700.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7701 = this;
return this__7701.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7702 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7702.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7703 = this;
var h__1796__auto____7704 = this__7703.__hash;
if(!((h__1796__auto____7704 == null)))
{return h__1796__auto____7704;
} else
{var h__1796__auto____7705 = cljs.core.hash_coll.call(null,coll);
this__7703.__hash = h__1796__auto____7705;
return h__1796__auto____7705;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7706 = this;
if(cljs.core.truth_(this__7706.front))
{return (new cljs.core.PersistentQueue(this__7706.meta,(this__7706.count + 1),this__7706.front,cljs.core.conj.call(null,(function (){var or__3824__auto____7707 = this__7706.rear;
if(cljs.core.truth_(or__3824__auto____7707))
{return or__3824__auto____7707;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__7706.meta,(this__7706.count + 1),cljs.core.conj.call(null,this__7706.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__7708 = this;
var this__7709 = this;
return cljs.core.pr_str.call(null,this__7709);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7710 = this;
var rear__7711 = cljs.core.seq.call(null,this__7710.rear);
if(cljs.core.truth_((function (){var or__3824__auto____7712 = this__7710.front;
if(cljs.core.truth_(or__3824__auto____7712))
{return or__3824__auto____7712;
} else
{return rear__7711;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__7710.front,cljs.core.seq.call(null,rear__7711),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7713 = this;
return this__7713.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7714 = this;
return cljs.core._first.call(null,this__7714.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7715 = this;
if(cljs.core.truth_(this__7715.front))
{var temp__3971__auto____7716 = cljs.core.next.call(null,this__7715.front);
if(temp__3971__auto____7716)
{var f1__7717 = temp__3971__auto____7716;
return (new cljs.core.PersistentQueue(this__7715.meta,(this__7715.count - 1),f1__7717,this__7715.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__7715.meta,(this__7715.count - 1),cljs.core.seq.call(null,this__7715.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7718 = this;
return cljs.core.first.call(null,this__7718.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7719 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7720 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7721 = this;
return (new cljs.core.PersistentQueue(meta,this__7721.count,this__7721.front,this__7721.rear,this__7721.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7722 = this;
return this__7722.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7723 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__7724 = this;
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
var len__7727 = array.length;
var i__7728 = 0;
while(true){
if((i__7728 < len__7727))
{if((k === (array[i__7728])))
{return i__7728;
} else
{{
var G__7729 = (i__7728 + incr);
i__7728 = G__7729;
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
var a__7732 = cljs.core.hash.call(null,a);
var b__7733 = cljs.core.hash.call(null,b);
if((a__7732 < b__7733))
{return -1;
} else
{if((a__7732 > b__7733))
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
var ks__7741 = m.keys;
var len__7742 = ks__7741.length;
var so__7743 = m.strobj;
var out__7744 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__7745 = 0;
var out__7746 = cljs.core.transient$.call(null,out__7744);
while(true){
if((i__7745 < len__7742))
{var k__7747 = (ks__7741[i__7745]);
{
var G__7748 = (i__7745 + 1);
var G__7749 = cljs.core.assoc_BANG_.call(null,out__7746,k__7747,(so__7743[k__7747]));
i__7745 = G__7748;
out__7746 = G__7749;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__7746,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__7755 = {};
var l__7756 = ks.length;
var i__7757 = 0;
while(true){
if((i__7757 < l__7756))
{var k__7758 = (ks[i__7757]);
(new_obj__7755[k__7758] = (obj[k__7758]));
{
var G__7759 = (i__7757 + 1);
i__7757 = G__7759;
continue;
}
} else
{}
break;
}
return new_obj__7755;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__7762 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7763 = this;
var h__1796__auto____7764 = this__7763.__hash;
if(!((h__1796__auto____7764 == null)))
{return h__1796__auto____7764;
} else
{var h__1796__auto____7765 = cljs.core.hash_imap.call(null,coll);
this__7763.__hash = h__1796__auto____7765;
return h__1796__auto____7765;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7766 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7767 = this;
if((function (){var and__3822__auto____7768 = goog.isString(k);
if(and__3822__auto____7768)
{return !((cljs.core.scan_array.call(null,1,k,this__7767.keys) == null));
} else
{return and__3822__auto____7768;
}
})())
{return (this__7767.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7769 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____7770 = (this__7769.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____7770)
{return or__3824__auto____7770;
} else
{return (this__7769.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__7769.keys) == null)))
{var new_strobj__7771 = cljs.core.obj_clone.call(null,this__7769.strobj,this__7769.keys);
(new_strobj__7771[k] = v);
return (new cljs.core.ObjMap(this__7769.meta,this__7769.keys,new_strobj__7771,(this__7769.update_count + 1),null));
} else
{var new_strobj__7772 = cljs.core.obj_clone.call(null,this__7769.strobj,this__7769.keys);
var new_keys__7773 = this__7769.keys.slice();
(new_strobj__7772[k] = v);
new_keys__7773.push(k);
return (new cljs.core.ObjMap(this__7769.meta,new_keys__7773,new_strobj__7772,(this__7769.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__7774 = this;
if((function (){var and__3822__auto____7775 = goog.isString(k);
if(and__3822__auto____7775)
{return !((cljs.core.scan_array.call(null,1,k,this__7774.keys) == null));
} else
{return and__3822__auto____7775;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__7797 = null;
var G__7797__2 = (function (this_sym7776,k){
var this__7778 = this;
var this_sym7776__7779 = this;
var coll__7780 = this_sym7776__7779;
return coll__7780.cljs$core$ILookup$_lookup$arity$2(coll__7780,k);
});
var G__7797__3 = (function (this_sym7777,k,not_found){
var this__7778 = this;
var this_sym7777__7781 = this;
var coll__7782 = this_sym7777__7781;
return coll__7782.cljs$core$ILookup$_lookup$arity$3(coll__7782,k,not_found);
});
G__7797 = function(this_sym7777,k,not_found){
switch(arguments.length){
case 2:
return G__7797__2.call(this,this_sym7777,k);
case 3:
return G__7797__3.call(this,this_sym7777,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7797;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym7760,args7761){
var this__7783 = this;
return this_sym7760.call.apply(this_sym7760,[this_sym7760].concat(args7761.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__7784 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__7785 = this;
var this__7786 = this;
return cljs.core.pr_str.call(null,this__7786);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7787 = this;
if((this__7787.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__7750_SHARP_){
return cljs.core.vector.call(null,p1__7750_SHARP_,(this__7787.strobj[p1__7750_SHARP_]));
}),this__7787.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7788 = this;
return this__7788.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7789 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7790 = this;
return (new cljs.core.ObjMap(meta,this__7790.keys,this__7790.strobj,this__7790.update_count,this__7790.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7791 = this;
return this__7791.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7792 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__7792.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__7793 = this;
if((function (){var and__3822__auto____7794 = goog.isString(k);
if(and__3822__auto____7794)
{return !((cljs.core.scan_array.call(null,1,k,this__7793.keys) == null));
} else
{return and__3822__auto____7794;
}
})())
{var new_keys__7795 = this__7793.keys.slice();
var new_strobj__7796 = cljs.core.obj_clone.call(null,this__7793.strobj,this__7793.keys);
new_keys__7795.splice(cljs.core.scan_array.call(null,1,k,new_keys__7795),1);
cljs.core.js_delete.call(null,new_strobj__7796,k);
return (new cljs.core.ObjMap(this__7793.meta,new_keys__7795,new_strobj__7796,(this__7793.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7801 = this;
var h__1796__auto____7802 = this__7801.__hash;
if(!((h__1796__auto____7802 == null)))
{return h__1796__auto____7802;
} else
{var h__1796__auto____7803 = cljs.core.hash_imap.call(null,coll);
this__7801.__hash = h__1796__auto____7803;
return h__1796__auto____7803;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7804 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7805 = this;
var bucket__7806 = (this__7805.hashobj[cljs.core.hash.call(null,k)]);
var i__7807 = (cljs.core.truth_(bucket__7806)?cljs.core.scan_array.call(null,2,k,bucket__7806):null);
if(cljs.core.truth_(i__7807))
{return (bucket__7806[(i__7807 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7808 = this;
var h__7809 = cljs.core.hash.call(null,k);
var bucket__7810 = (this__7808.hashobj[h__7809]);
if(cljs.core.truth_(bucket__7810))
{var new_bucket__7811 = bucket__7810.slice();
var new_hashobj__7812 = goog.object.clone(this__7808.hashobj);
(new_hashobj__7812[h__7809] = new_bucket__7811);
var temp__3971__auto____7813 = cljs.core.scan_array.call(null,2,k,new_bucket__7811);
if(cljs.core.truth_(temp__3971__auto____7813))
{var i__7814 = temp__3971__auto____7813;
(new_bucket__7811[(i__7814 + 1)] = v);
return (new cljs.core.HashMap(this__7808.meta,this__7808.count,new_hashobj__7812,null));
} else
{new_bucket__7811.push(k,v);
return (new cljs.core.HashMap(this__7808.meta,(this__7808.count + 1),new_hashobj__7812,null));
}
} else
{var new_hashobj__7815 = goog.object.clone(this__7808.hashobj);
(new_hashobj__7815[h__7809] = [k,v]);
return (new cljs.core.HashMap(this__7808.meta,(this__7808.count + 1),new_hashobj__7815,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__7816 = this;
var bucket__7817 = (this__7816.hashobj[cljs.core.hash.call(null,k)]);
var i__7818 = (cljs.core.truth_(bucket__7817)?cljs.core.scan_array.call(null,2,k,bucket__7817):null);
if(cljs.core.truth_(i__7818))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__7843 = null;
var G__7843__2 = (function (this_sym7819,k){
var this__7821 = this;
var this_sym7819__7822 = this;
var coll__7823 = this_sym7819__7822;
return coll__7823.cljs$core$ILookup$_lookup$arity$2(coll__7823,k);
});
var G__7843__3 = (function (this_sym7820,k,not_found){
var this__7821 = this;
var this_sym7820__7824 = this;
var coll__7825 = this_sym7820__7824;
return coll__7825.cljs$core$ILookup$_lookup$arity$3(coll__7825,k,not_found);
});
G__7843 = function(this_sym7820,k,not_found){
switch(arguments.length){
case 2:
return G__7843__2.call(this,this_sym7820,k);
case 3:
return G__7843__3.call(this,this_sym7820,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7843;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym7799,args7800){
var this__7826 = this;
return this_sym7799.call.apply(this_sym7799,[this_sym7799].concat(args7800.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__7827 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__7828 = this;
var this__7829 = this;
return cljs.core.pr_str.call(null,this__7829);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7830 = this;
if((this__7830.count > 0))
{var hashes__7831 = cljs.core.js_keys.call(null,this__7830.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__7798_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__7830.hashobj[p1__7798_SHARP_])));
}),hashes__7831);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7832 = this;
return this__7832.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7833 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7834 = this;
return (new cljs.core.HashMap(meta,this__7834.count,this__7834.hashobj,this__7834.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7835 = this;
return this__7835.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7836 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__7836.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__7837 = this;
var h__7838 = cljs.core.hash.call(null,k);
var bucket__7839 = (this__7837.hashobj[h__7838]);
var i__7840 = (cljs.core.truth_(bucket__7839)?cljs.core.scan_array.call(null,2,k,bucket__7839):null);
if(cljs.core.not.call(null,i__7840))
{return coll;
} else
{var new_hashobj__7841 = goog.object.clone(this__7837.hashobj);
if((3 > bucket__7839.length))
{cljs.core.js_delete.call(null,new_hashobj__7841,h__7838);
} else
{var new_bucket__7842 = bucket__7839.slice();
new_bucket__7842.splice(i__7840,2);
(new_hashobj__7841[h__7838] = new_bucket__7842);
}
return (new cljs.core.HashMap(this__7837.meta,(this__7837.count - 1),new_hashobj__7841,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__7844 = ks.length;
var i__7845 = 0;
var out__7846 = cljs.core.HashMap.EMPTY;
while(true){
if((i__7845 < len__7844))
{{
var G__7847 = (i__7845 + 1);
var G__7848 = cljs.core.assoc.call(null,out__7846,(ks[i__7845]),(vs[i__7845]));
i__7845 = G__7847;
out__7846 = G__7848;
continue;
}
} else
{return out__7846;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__7852 = m.arr;
var len__7853 = arr__7852.length;
var i__7854 = 0;
while(true){
if((len__7853 <= i__7854))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__7852[i__7854]),k))
{return i__7854;
} else
{if("\uFDD0'else")
{{
var G__7855 = (i__7854 + 2);
i__7854 = G__7855;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__7858 = this;
return (new cljs.core.TransientArrayMap({},this__7858.arr.length,this__7858.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7859 = this;
var h__1796__auto____7860 = this__7859.__hash;
if(!((h__1796__auto____7860 == null)))
{return h__1796__auto____7860;
} else
{var h__1796__auto____7861 = cljs.core.hash_imap.call(null,coll);
this__7859.__hash = h__1796__auto____7861;
return h__1796__auto____7861;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7862 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7863 = this;
var idx__7864 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__7864 === -1))
{return not_found;
} else
{return (this__7863.arr[(idx__7864 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7865 = this;
var idx__7866 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__7866 === -1))
{if((this__7865.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__7865.meta,(this__7865.cnt + 1),(function (){var G__7867__7868 = this__7865.arr.slice();
G__7867__7868.push(k);
G__7867__7868.push(v);
return G__7867__7868;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__7865.arr[(idx__7866 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__7865.meta,this__7865.cnt,(function (){var G__7869__7870 = this__7865.arr.slice();
(G__7869__7870[(idx__7866 + 1)] = v);
return G__7869__7870;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__7871 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__7903 = null;
var G__7903__2 = (function (this_sym7872,k){
var this__7874 = this;
var this_sym7872__7875 = this;
var coll__7876 = this_sym7872__7875;
return coll__7876.cljs$core$ILookup$_lookup$arity$2(coll__7876,k);
});
var G__7903__3 = (function (this_sym7873,k,not_found){
var this__7874 = this;
var this_sym7873__7877 = this;
var coll__7878 = this_sym7873__7877;
return coll__7878.cljs$core$ILookup$_lookup$arity$3(coll__7878,k,not_found);
});
G__7903 = function(this_sym7873,k,not_found){
switch(arguments.length){
case 2:
return G__7903__2.call(this,this_sym7873,k);
case 3:
return G__7903__3.call(this,this_sym7873,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7903;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym7856,args7857){
var this__7879 = this;
return this_sym7856.call.apply(this_sym7856,[this_sym7856].concat(args7857.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__7880 = this;
var len__7881 = this__7880.arr.length;
var i__7882 = 0;
var init__7883 = init;
while(true){
if((i__7882 < len__7881))
{var init__7884 = f.call(null,init__7883,(this__7880.arr[i__7882]),(this__7880.arr[(i__7882 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__7884))
{return cljs.core.deref.call(null,init__7884);
} else
{{
var G__7904 = (i__7882 + 2);
var G__7905 = init__7884;
i__7882 = G__7904;
init__7883 = G__7905;
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
var this__7885 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__7886 = this;
var this__7887 = this;
return cljs.core.pr_str.call(null,this__7887);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7888 = this;
if((this__7888.cnt > 0))
{var len__7889 = this__7888.arr.length;
var array_map_seq__7890 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__7889))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__7888.arr[i]),(this__7888.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__7890.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7891 = this;
return this__7891.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7892 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7893 = this;
return (new cljs.core.PersistentArrayMap(meta,this__7893.cnt,this__7893.arr,this__7893.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7894 = this;
return this__7894.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7895 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7895.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__7896 = this;
var idx__7897 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__7897 >= 0))
{var len__7898 = this__7896.arr.length;
var new_len__7899 = (len__7898 - 2);
if((new_len__7899 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__7900 = cljs.core.make_array.call(null,new_len__7899);
var s__7901 = 0;
var d__7902 = 0;
while(true){
if((s__7901 >= len__7898))
{return (new cljs.core.PersistentArrayMap(this__7896.meta,(this__7896.cnt - 1),new_arr__7900,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__7896.arr[s__7901])))
{{
var G__7906 = (s__7901 + 2);
var G__7907 = d__7902;
s__7901 = G__7906;
d__7902 = G__7907;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__7900[d__7902] = (this__7896.arr[s__7901]));
(new_arr__7900[(d__7902 + 1)] = (this__7896.arr[(s__7901 + 1)]));
{
var G__7908 = (s__7901 + 2);
var G__7909 = (d__7902 + 2);
s__7901 = G__7908;
d__7902 = G__7909;
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
var len__7910 = cljs.core.count.call(null,ks);
var i__7911 = 0;
var out__7912 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__7911 < len__7910))
{{
var G__7913 = (i__7911 + 1);
var G__7914 = cljs.core.assoc_BANG_.call(null,out__7912,(ks[i__7911]),(vs[i__7911]));
i__7911 = G__7913;
out__7912 = G__7914;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__7912);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__7915 = this;
if(cljs.core.truth_(this__7915.editable_QMARK_))
{var idx__7916 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__7916 >= 0))
{(this__7915.arr[idx__7916] = (this__7915.arr[(this__7915.len - 2)]));
(this__7915.arr[(idx__7916 + 1)] = (this__7915.arr[(this__7915.len - 1)]));
var G__7917__7918 = this__7915.arr;
G__7917__7918.pop();
G__7917__7918.pop();
G__7917__7918;
this__7915.len = (this__7915.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__7919 = this;
if(cljs.core.truth_(this__7919.editable_QMARK_))
{var idx__7920 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__7920 === -1))
{if(((this__7919.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__7919.len = (this__7919.len + 2);
this__7919.arr.push(key);
this__7919.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__7919.len,this__7919.arr),key,val);
}
} else
{if((val === (this__7919.arr[(idx__7920 + 1)])))
{return tcoll;
} else
{(this__7919.arr[(idx__7920 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__7921 = this;
if(cljs.core.truth_(this__7921.editable_QMARK_))
{if((function (){var G__7922__7923 = o;
if(G__7922__7923)
{if((function (){var or__3824__auto____7924 = (G__7922__7923.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____7924)
{return or__3824__auto____7924;
} else
{return G__7922__7923.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__7922__7923.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__7922__7923);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__7922__7923);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__7925 = cljs.core.seq.call(null,o);
var tcoll__7926 = tcoll;
while(true){
var temp__3971__auto____7927 = cljs.core.first.call(null,es__7925);
if(cljs.core.truth_(temp__3971__auto____7927))
{var e__7928 = temp__3971__auto____7927;
{
var G__7934 = cljs.core.next.call(null,es__7925);
var G__7935 = tcoll__7926.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__7926,cljs.core.key.call(null,e__7928),cljs.core.val.call(null,e__7928));
es__7925 = G__7934;
tcoll__7926 = G__7935;
continue;
}
} else
{return tcoll__7926;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__7929 = this;
if(cljs.core.truth_(this__7929.editable_QMARK_))
{this__7929.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__7929.len,2),this__7929.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__7930 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__7931 = this;
if(cljs.core.truth_(this__7931.editable_QMARK_))
{var idx__7932 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__7932 === -1))
{return not_found;
} else
{return (this__7931.arr[(idx__7932 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__7933 = this;
if(cljs.core.truth_(this__7933.editable_QMARK_))
{return cljs.core.quot.call(null,this__7933.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__7938 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__7939 = 0;
while(true){
if((i__7939 < len))
{{
var G__7940 = cljs.core.assoc_BANG_.call(null,out__7938,(arr[i__7939]),(arr[(i__7939 + 1)]));
var G__7941 = (i__7939 + 2);
out__7938 = G__7940;
i__7939 = G__7941;
continue;
}
} else
{return out__7938;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__1914__auto__){
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
var G__7946__7947 = arr.slice();
(G__7946__7947[i] = a);
return G__7946__7947;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__7948__7949 = arr.slice();
(G__7948__7949[i] = a);
(G__7948__7949[j] = b);
return G__7948__7949;
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
var new_arr__7951 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__7951,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__7951,(2 * i),(new_arr__7951.length - (2 * i)));
return new_arr__7951;
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
var editable__7954 = inode.ensure_editable(edit);
(editable__7954.arr[i] = a);
return editable__7954;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__7955 = inode.ensure_editable(edit);
(editable__7955.arr[i] = a);
(editable__7955.arr[j] = b);
return editable__7955;
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
var len__7962 = arr.length;
var i__7963 = 0;
var init__7964 = init;
while(true){
if((i__7963 < len__7962))
{var init__7967 = (function (){var k__7965 = (arr[i__7963]);
if(!((k__7965 == null)))
{return f.call(null,init__7964,k__7965,(arr[(i__7963 + 1)]));
} else
{var node__7966 = (arr[(i__7963 + 1)]);
if(!((node__7966 == null)))
{return node__7966.kv_reduce(f,init__7964);
} else
{return init__7964;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__7967))
{return cljs.core.deref.call(null,init__7967);
} else
{{
var G__7968 = (i__7963 + 2);
var G__7969 = init__7967;
i__7963 = G__7968;
init__7964 = G__7969;
continue;
}
}
} else
{return init__7964;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__7970 = this;
var inode__7971 = this;
if((this__7970.bitmap === bit))
{return null;
} else
{var editable__7972 = inode__7971.ensure_editable(e);
var earr__7973 = editable__7972.arr;
var len__7974 = earr__7973.length;
editable__7972.bitmap = (bit ^ editable__7972.bitmap);
cljs.core.array_copy.call(null,earr__7973,(2 * (i + 1)),earr__7973,(2 * i),(len__7974 - (2 * (i + 1))));
(earr__7973[(len__7974 - 2)] = null);
(earr__7973[(len__7974 - 1)] = null);
return editable__7972;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__7975 = this;
var inode__7976 = this;
var bit__7977 = (1 << ((hash >>> shift) & 0x01f));
var idx__7978 = cljs.core.bitmap_indexed_node_index.call(null,this__7975.bitmap,bit__7977);
if(((this__7975.bitmap & bit__7977) === 0))
{var n__7979 = cljs.core.bit_count.call(null,this__7975.bitmap);
if(((2 * n__7979) < this__7975.arr.length))
{var editable__7980 = inode__7976.ensure_editable(edit);
var earr__7981 = editable__7980.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__7981,(2 * idx__7978),earr__7981,(2 * (idx__7978 + 1)),(2 * (n__7979 - idx__7978)));
(earr__7981[(2 * idx__7978)] = key);
(earr__7981[((2 * idx__7978) + 1)] = val);
editable__7980.bitmap = (editable__7980.bitmap | bit__7977);
return editable__7980;
} else
{if((n__7979 >= 16))
{var nodes__7982 = cljs.core.make_array.call(null,32);
var jdx__7983 = ((hash >>> shift) & 0x01f);
(nodes__7982[jdx__7983] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__7984 = 0;
var j__7985 = 0;
while(true){
if((i__7984 < 32))
{if((((this__7975.bitmap >>> i__7984) & 1) === 0))
{{
var G__8038 = (i__7984 + 1);
var G__8039 = j__7985;
i__7984 = G__8038;
j__7985 = G__8039;
continue;
}
} else
{(nodes__7982[i__7984] = ((!(((this__7975.arr[j__7985]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__7975.arr[j__7985])),(this__7975.arr[j__7985]),(this__7975.arr[(j__7985 + 1)]),added_leaf_QMARK_):(this__7975.arr[(j__7985 + 1)])));
{
var G__8040 = (i__7984 + 1);
var G__8041 = (j__7985 + 2);
i__7984 = G__8040;
j__7985 = G__8041;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__7979 + 1),nodes__7982));
} else
{if("\uFDD0'else")
{var new_arr__7986 = cljs.core.make_array.call(null,(2 * (n__7979 + 4)));
cljs.core.array_copy.call(null,this__7975.arr,0,new_arr__7986,0,(2 * idx__7978));
(new_arr__7986[(2 * idx__7978)] = key);
(new_arr__7986[((2 * idx__7978) + 1)] = val);
cljs.core.array_copy.call(null,this__7975.arr,(2 * idx__7978),new_arr__7986,(2 * (idx__7978 + 1)),(2 * (n__7979 - idx__7978)));
added_leaf_QMARK_.val = true;
var editable__7987 = inode__7976.ensure_editable(edit);
editable__7987.arr = new_arr__7986;
editable__7987.bitmap = (editable__7987.bitmap | bit__7977);
return editable__7987;
} else
{return null;
}
}
}
} else
{var key_or_nil__7988 = (this__7975.arr[(2 * idx__7978)]);
var val_or_node__7989 = (this__7975.arr[((2 * idx__7978) + 1)]);
if((key_or_nil__7988 == null))
{var n__7990 = val_or_node__7989.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__7990 === val_or_node__7989))
{return inode__7976;
} else
{return cljs.core.edit_and_set.call(null,inode__7976,edit,((2 * idx__7978) + 1),n__7990);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__7988))
{if((val === val_or_node__7989))
{return inode__7976;
} else
{return cljs.core.edit_and_set.call(null,inode__7976,edit,((2 * idx__7978) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__7976,edit,(2 * idx__7978),null,((2 * idx__7978) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__7988,val_or_node__7989,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__7991 = this;
var inode__7992 = this;
return cljs.core.create_inode_seq.call(null,this__7991.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__7993 = this;
var inode__7994 = this;
var bit__7995 = (1 << ((hash >>> shift) & 0x01f));
if(((this__7993.bitmap & bit__7995) === 0))
{return inode__7994;
} else
{var idx__7996 = cljs.core.bitmap_indexed_node_index.call(null,this__7993.bitmap,bit__7995);
var key_or_nil__7997 = (this__7993.arr[(2 * idx__7996)]);
var val_or_node__7998 = (this__7993.arr[((2 * idx__7996) + 1)]);
if((key_or_nil__7997 == null))
{var n__7999 = val_or_node__7998.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__7999 === val_or_node__7998))
{return inode__7994;
} else
{if(!((n__7999 == null)))
{return cljs.core.edit_and_set.call(null,inode__7994,edit,((2 * idx__7996) + 1),n__7999);
} else
{if((this__7993.bitmap === bit__7995))
{return null;
} else
{if("\uFDD0'else")
{return inode__7994.edit_and_remove_pair(edit,bit__7995,idx__7996);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__7997))
{(removed_leaf_QMARK_[0] = true);
return inode__7994.edit_and_remove_pair(edit,bit__7995,idx__7996);
} else
{if("\uFDD0'else")
{return inode__7994;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8000 = this;
var inode__8001 = this;
if((e === this__8000.edit))
{return inode__8001;
} else
{var n__8002 = cljs.core.bit_count.call(null,this__8000.bitmap);
var new_arr__8003 = cljs.core.make_array.call(null,(((n__8002 < 0))?4:(2 * (n__8002 + 1))));
cljs.core.array_copy.call(null,this__8000.arr,0,new_arr__8003,0,(2 * n__8002));
return (new cljs.core.BitmapIndexedNode(e,this__8000.bitmap,new_arr__8003));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8004 = this;
var inode__8005 = this;
return cljs.core.inode_kv_reduce.call(null,this__8004.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8006 = this;
var inode__8007 = this;
var bit__8008 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8006.bitmap & bit__8008) === 0))
{return not_found;
} else
{var idx__8009 = cljs.core.bitmap_indexed_node_index.call(null,this__8006.bitmap,bit__8008);
var key_or_nil__8010 = (this__8006.arr[(2 * idx__8009)]);
var val_or_node__8011 = (this__8006.arr[((2 * idx__8009) + 1)]);
if((key_or_nil__8010 == null))
{return val_or_node__8011.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8010))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8010,val_or_node__8011], true);
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
var this__8012 = this;
var inode__8013 = this;
var bit__8014 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8012.bitmap & bit__8014) === 0))
{return inode__8013;
} else
{var idx__8015 = cljs.core.bitmap_indexed_node_index.call(null,this__8012.bitmap,bit__8014);
var key_or_nil__8016 = (this__8012.arr[(2 * idx__8015)]);
var val_or_node__8017 = (this__8012.arr[((2 * idx__8015) + 1)]);
if((key_or_nil__8016 == null))
{var n__8018 = val_or_node__8017.inode_without((shift + 5),hash,key);
if((n__8018 === val_or_node__8017))
{return inode__8013;
} else
{if(!((n__8018 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8012.bitmap,cljs.core.clone_and_set.call(null,this__8012.arr,((2 * idx__8015) + 1),n__8018)));
} else
{if((this__8012.bitmap === bit__8014))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8012.bitmap ^ bit__8014),cljs.core.remove_pair.call(null,this__8012.arr,idx__8015)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8016))
{return (new cljs.core.BitmapIndexedNode(null,(this__8012.bitmap ^ bit__8014),cljs.core.remove_pair.call(null,this__8012.arr,idx__8015)));
} else
{if("\uFDD0'else")
{return inode__8013;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8019 = this;
var inode__8020 = this;
var bit__8021 = (1 << ((hash >>> shift) & 0x01f));
var idx__8022 = cljs.core.bitmap_indexed_node_index.call(null,this__8019.bitmap,bit__8021);
if(((this__8019.bitmap & bit__8021) === 0))
{var n__8023 = cljs.core.bit_count.call(null,this__8019.bitmap);
if((n__8023 >= 16))
{var nodes__8024 = cljs.core.make_array.call(null,32);
var jdx__8025 = ((hash >>> shift) & 0x01f);
(nodes__8024[jdx__8025] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8026 = 0;
var j__8027 = 0;
while(true){
if((i__8026 < 32))
{if((((this__8019.bitmap >>> i__8026) & 1) === 0))
{{
var G__8042 = (i__8026 + 1);
var G__8043 = j__8027;
i__8026 = G__8042;
j__8027 = G__8043;
continue;
}
} else
{(nodes__8024[i__8026] = ((!(((this__8019.arr[j__8027]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8019.arr[j__8027])),(this__8019.arr[j__8027]),(this__8019.arr[(j__8027 + 1)]),added_leaf_QMARK_):(this__8019.arr[(j__8027 + 1)])));
{
var G__8044 = (i__8026 + 1);
var G__8045 = (j__8027 + 2);
i__8026 = G__8044;
j__8027 = G__8045;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8023 + 1),nodes__8024));
} else
{var new_arr__8028 = cljs.core.make_array.call(null,(2 * (n__8023 + 1)));
cljs.core.array_copy.call(null,this__8019.arr,0,new_arr__8028,0,(2 * idx__8022));
(new_arr__8028[(2 * idx__8022)] = key);
(new_arr__8028[((2 * idx__8022) + 1)] = val);
cljs.core.array_copy.call(null,this__8019.arr,(2 * idx__8022),new_arr__8028,(2 * (idx__8022 + 1)),(2 * (n__8023 - idx__8022)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8019.bitmap | bit__8021),new_arr__8028));
}
} else
{var key_or_nil__8029 = (this__8019.arr[(2 * idx__8022)]);
var val_or_node__8030 = (this__8019.arr[((2 * idx__8022) + 1)]);
if((key_or_nil__8029 == null))
{var n__8031 = val_or_node__8030.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8031 === val_or_node__8030))
{return inode__8020;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8019.bitmap,cljs.core.clone_and_set.call(null,this__8019.arr,((2 * idx__8022) + 1),n__8031)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8029))
{if((val === val_or_node__8030))
{return inode__8020;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8019.bitmap,cljs.core.clone_and_set.call(null,this__8019.arr,((2 * idx__8022) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8019.bitmap,cljs.core.clone_and_set.call(null,this__8019.arr,(2 * idx__8022),null,((2 * idx__8022) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8029,val_or_node__8030,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8032 = this;
var inode__8033 = this;
var bit__8034 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8032.bitmap & bit__8034) === 0))
{return not_found;
} else
{var idx__8035 = cljs.core.bitmap_indexed_node_index.call(null,this__8032.bitmap,bit__8034);
var key_or_nil__8036 = (this__8032.arr[(2 * idx__8035)]);
var val_or_node__8037 = (this__8032.arr[((2 * idx__8035) + 1)]);
if((key_or_nil__8036 == null))
{return val_or_node__8037.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8036))
{return val_or_node__8037;
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
var arr__8053 = array_node.arr;
var len__8054 = (2 * (array_node.cnt - 1));
var new_arr__8055 = cljs.core.make_array.call(null,len__8054);
var i__8056 = 0;
var j__8057 = 1;
var bitmap__8058 = 0;
while(true){
if((i__8056 < len__8054))
{if((function (){var and__3822__auto____8059 = !((i__8056 === idx));
if(and__3822__auto____8059)
{return !(((arr__8053[i__8056]) == null));
} else
{return and__3822__auto____8059;
}
})())
{(new_arr__8055[j__8057] = (arr__8053[i__8056]));
{
var G__8060 = (i__8056 + 1);
var G__8061 = (j__8057 + 2);
var G__8062 = (bitmap__8058 | (1 << i__8056));
i__8056 = G__8060;
j__8057 = G__8061;
bitmap__8058 = G__8062;
continue;
}
} else
{{
var G__8063 = (i__8056 + 1);
var G__8064 = j__8057;
var G__8065 = bitmap__8058;
i__8056 = G__8063;
j__8057 = G__8064;
bitmap__8058 = G__8065;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8058,new_arr__8055));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8066 = this;
var inode__8067 = this;
var idx__8068 = ((hash >>> shift) & 0x01f);
var node__8069 = (this__8066.arr[idx__8068]);
if((node__8069 == null))
{var editable__8070 = cljs.core.edit_and_set.call(null,inode__8067,edit,idx__8068,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8070.cnt = (editable__8070.cnt + 1);
return editable__8070;
} else
{var n__8071 = node__8069.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8071 === node__8069))
{return inode__8067;
} else
{return cljs.core.edit_and_set.call(null,inode__8067,edit,idx__8068,n__8071);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8072 = this;
var inode__8073 = this;
return cljs.core.create_array_node_seq.call(null,this__8072.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8074 = this;
var inode__8075 = this;
var idx__8076 = ((hash >>> shift) & 0x01f);
var node__8077 = (this__8074.arr[idx__8076]);
if((node__8077 == null))
{return inode__8075;
} else
{var n__8078 = node__8077.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8078 === node__8077))
{return inode__8075;
} else
{if((n__8078 == null))
{if((this__8074.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8075,edit,idx__8076);
} else
{var editable__8079 = cljs.core.edit_and_set.call(null,inode__8075,edit,idx__8076,n__8078);
editable__8079.cnt = (editable__8079.cnt - 1);
return editable__8079;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8075,edit,idx__8076,n__8078);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8080 = this;
var inode__8081 = this;
if((e === this__8080.edit))
{return inode__8081;
} else
{return (new cljs.core.ArrayNode(e,this__8080.cnt,this__8080.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8082 = this;
var inode__8083 = this;
var len__8084 = this__8082.arr.length;
var i__8085 = 0;
var init__8086 = init;
while(true){
if((i__8085 < len__8084))
{var node__8087 = (this__8082.arr[i__8085]);
if(!((node__8087 == null)))
{var init__8088 = node__8087.kv_reduce(f,init__8086);
if(cljs.core.reduced_QMARK_.call(null,init__8088))
{return cljs.core.deref.call(null,init__8088);
} else
{{
var G__8107 = (i__8085 + 1);
var G__8108 = init__8088;
i__8085 = G__8107;
init__8086 = G__8108;
continue;
}
}
} else
{return null;
}
} else
{return init__8086;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8089 = this;
var inode__8090 = this;
var idx__8091 = ((hash >>> shift) & 0x01f);
var node__8092 = (this__8089.arr[idx__8091]);
if(!((node__8092 == null)))
{return node__8092.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8093 = this;
var inode__8094 = this;
var idx__8095 = ((hash >>> shift) & 0x01f);
var node__8096 = (this__8093.arr[idx__8095]);
if(!((node__8096 == null)))
{var n__8097 = node__8096.inode_without((shift + 5),hash,key);
if((n__8097 === node__8096))
{return inode__8094;
} else
{if((n__8097 == null))
{if((this__8093.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8094,null,idx__8095);
} else
{return (new cljs.core.ArrayNode(null,(this__8093.cnt - 1),cljs.core.clone_and_set.call(null,this__8093.arr,idx__8095,n__8097)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8093.cnt,cljs.core.clone_and_set.call(null,this__8093.arr,idx__8095,n__8097)));
} else
{return null;
}
}
}
} else
{return inode__8094;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8098 = this;
var inode__8099 = this;
var idx__8100 = ((hash >>> shift) & 0x01f);
var node__8101 = (this__8098.arr[idx__8100]);
if((node__8101 == null))
{return (new cljs.core.ArrayNode(null,(this__8098.cnt + 1),cljs.core.clone_and_set.call(null,this__8098.arr,idx__8100,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8102 = node__8101.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8102 === node__8101))
{return inode__8099;
} else
{return (new cljs.core.ArrayNode(null,this__8098.cnt,cljs.core.clone_and_set.call(null,this__8098.arr,idx__8100,n__8102)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8103 = this;
var inode__8104 = this;
var idx__8105 = ((hash >>> shift) & 0x01f);
var node__8106 = (this__8103.arr[idx__8105]);
if(!((node__8106 == null)))
{return node__8106.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8111 = (2 * cnt);
var i__8112 = 0;
while(true){
if((i__8112 < lim__8111))
{if(cljs.core.key_test.call(null,key,(arr[i__8112])))
{return i__8112;
} else
{{
var G__8113 = (i__8112 + 2);
i__8112 = G__8113;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8114 = this;
var inode__8115 = this;
if((hash === this__8114.collision_hash))
{var idx__8116 = cljs.core.hash_collision_node_find_index.call(null,this__8114.arr,this__8114.cnt,key);
if((idx__8116 === -1))
{if((this__8114.arr.length > (2 * this__8114.cnt)))
{var editable__8117 = cljs.core.edit_and_set.call(null,inode__8115,edit,(2 * this__8114.cnt),key,((2 * this__8114.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__8117.cnt = (editable__8117.cnt + 1);
return editable__8117;
} else
{var len__8118 = this__8114.arr.length;
var new_arr__8119 = cljs.core.make_array.call(null,(len__8118 + 2));
cljs.core.array_copy.call(null,this__8114.arr,0,new_arr__8119,0,len__8118);
(new_arr__8119[len__8118] = key);
(new_arr__8119[(len__8118 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__8115.ensure_editable_array(edit,(this__8114.cnt + 1),new_arr__8119);
}
} else
{if(((this__8114.arr[(idx__8116 + 1)]) === val))
{return inode__8115;
} else
{return cljs.core.edit_and_set.call(null,inode__8115,edit,(idx__8116 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8114.collision_hash >>> shift) & 0x01f)),[null,inode__8115,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8120 = this;
var inode__8121 = this;
return cljs.core.create_inode_seq.call(null,this__8120.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8122 = this;
var inode__8123 = this;
var idx__8124 = cljs.core.hash_collision_node_find_index.call(null,this__8122.arr,this__8122.cnt,key);
if((idx__8124 === -1))
{return inode__8123;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8122.cnt === 1))
{return null;
} else
{var editable__8125 = inode__8123.ensure_editable(edit);
var earr__8126 = editable__8125.arr;
(earr__8126[idx__8124] = (earr__8126[((2 * this__8122.cnt) - 2)]));
(earr__8126[(idx__8124 + 1)] = (earr__8126[((2 * this__8122.cnt) - 1)]));
(earr__8126[((2 * this__8122.cnt) - 1)] = null);
(earr__8126[((2 * this__8122.cnt) - 2)] = null);
editable__8125.cnt = (editable__8125.cnt - 1);
return editable__8125;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__8127 = this;
var inode__8128 = this;
if((e === this__8127.edit))
{return inode__8128;
} else
{var new_arr__8129 = cljs.core.make_array.call(null,(2 * (this__8127.cnt + 1)));
cljs.core.array_copy.call(null,this__8127.arr,0,new_arr__8129,0,(2 * this__8127.cnt));
return (new cljs.core.HashCollisionNode(e,this__8127.collision_hash,this__8127.cnt,new_arr__8129));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8130 = this;
var inode__8131 = this;
return cljs.core.inode_kv_reduce.call(null,this__8130.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8132 = this;
var inode__8133 = this;
var idx__8134 = cljs.core.hash_collision_node_find_index.call(null,this__8132.arr,this__8132.cnt,key);
if((idx__8134 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8132.arr[idx__8134])))
{return cljs.core.PersistentVector.fromArray([(this__8132.arr[idx__8134]),(this__8132.arr[(idx__8134 + 1)])], true);
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
var this__8135 = this;
var inode__8136 = this;
var idx__8137 = cljs.core.hash_collision_node_find_index.call(null,this__8135.arr,this__8135.cnt,key);
if((idx__8137 === -1))
{return inode__8136;
} else
{if((this__8135.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8135.collision_hash,(this__8135.cnt - 1),cljs.core.remove_pair.call(null,this__8135.arr,cljs.core.quot.call(null,idx__8137,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8138 = this;
var inode__8139 = this;
if((hash === this__8138.collision_hash))
{var idx__8140 = cljs.core.hash_collision_node_find_index.call(null,this__8138.arr,this__8138.cnt,key);
if((idx__8140 === -1))
{var len__8141 = this__8138.arr.length;
var new_arr__8142 = cljs.core.make_array.call(null,(len__8141 + 2));
cljs.core.array_copy.call(null,this__8138.arr,0,new_arr__8142,0,len__8141);
(new_arr__8142[len__8141] = key);
(new_arr__8142[(len__8141 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__8138.collision_hash,(this__8138.cnt + 1),new_arr__8142));
} else
{if(cljs.core._EQ_.call(null,(this__8138.arr[idx__8140]),val))
{return inode__8139;
} else
{return (new cljs.core.HashCollisionNode(null,this__8138.collision_hash,this__8138.cnt,cljs.core.clone_and_set.call(null,this__8138.arr,(idx__8140 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8138.collision_hash >>> shift) & 0x01f)),[null,inode__8139])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8143 = this;
var inode__8144 = this;
var idx__8145 = cljs.core.hash_collision_node_find_index.call(null,this__8143.arr,this__8143.cnt,key);
if((idx__8145 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8143.arr[idx__8145])))
{return (this__8143.arr[(idx__8145 + 1)]);
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
var this__8146 = this;
var inode__8147 = this;
if((e === this__8146.edit))
{this__8146.arr = array;
this__8146.cnt = count;
return inode__8147;
} else
{return (new cljs.core.HashCollisionNode(this__8146.edit,this__8146.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8152 = cljs.core.hash.call(null,key1);
if((key1hash__8152 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8152,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8153 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8152,key1,val1,added_leaf_QMARK___8153).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8153);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8154 = cljs.core.hash.call(null,key1);
if((key1hash__8154 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8154,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8155 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8154,key1,val1,added_leaf_QMARK___8155).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8155);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8156 = this;
var h__1796__auto____8157 = this__8156.__hash;
if(!((h__1796__auto____8157 == null)))
{return h__1796__auto____8157;
} else
{var h__1796__auto____8158 = cljs.core.hash_coll.call(null,coll);
this__8156.__hash = h__1796__auto____8158;
return h__1796__auto____8158;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8159 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8160 = this;
var this__8161 = this;
return cljs.core.pr_str.call(null,this__8161);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8162 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8163 = this;
if((this__8163.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8163.nodes[this__8163.i]),(this__8163.nodes[(this__8163.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__8163.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8164 = this;
if((this__8164.s == null))
{return cljs.core.create_inode_seq.call(null,this__8164.nodes,(this__8164.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8164.nodes,this__8164.i,cljs.core.next.call(null,this__8164.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8165 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8166 = this;
return (new cljs.core.NodeSeq(meta,this__8166.nodes,this__8166.i,this__8166.s,this__8166.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8167 = this;
return this__8167.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8168 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8168.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8175 = nodes.length;
var j__8176 = i;
while(true){
if((j__8176 < len__8175))
{if(!(((nodes[j__8176]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__8176,null,null));
} else
{var temp__3971__auto____8177 = (nodes[(j__8176 + 1)]);
if(cljs.core.truth_(temp__3971__auto____8177))
{var node__8178 = temp__3971__auto____8177;
var temp__3971__auto____8179 = node__8178.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8179))
{var node_seq__8180 = temp__3971__auto____8179;
return (new cljs.core.NodeSeq(null,nodes,(j__8176 + 2),node_seq__8180,null));
} else
{{
var G__8181 = (j__8176 + 2);
j__8176 = G__8181;
continue;
}
}
} else
{{
var G__8182 = (j__8176 + 2);
j__8176 = G__8182;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8183 = this;
var h__1796__auto____8184 = this__8183.__hash;
if(!((h__1796__auto____8184 == null)))
{return h__1796__auto____8184;
} else
{var h__1796__auto____8185 = cljs.core.hash_coll.call(null,coll);
this__8183.__hash = h__1796__auto____8185;
return h__1796__auto____8185;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8186 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8187 = this;
var this__8188 = this;
return cljs.core.pr_str.call(null,this__8188);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8189 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8190 = this;
return cljs.core.first.call(null,this__8190.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8191 = this;
return cljs.core.create_array_node_seq.call(null,null,this__8191.nodes,this__8191.i,cljs.core.next.call(null,this__8191.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8192 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8193 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8193.nodes,this__8193.i,this__8193.s,this__8193.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8194 = this;
return this__8194.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8195 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8195.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8202 = nodes.length;
var j__8203 = i;
while(true){
if((j__8203 < len__8202))
{var temp__3971__auto____8204 = (nodes[j__8203]);
if(cljs.core.truth_(temp__3971__auto____8204))
{var nj__8205 = temp__3971__auto____8204;
var temp__3971__auto____8206 = nj__8205.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8206))
{var ns__8207 = temp__3971__auto____8206;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8203 + 1),ns__8207,null));
} else
{{
var G__8208 = (j__8203 + 1);
j__8203 = G__8208;
continue;
}
}
} else
{{
var G__8209 = (j__8203 + 1);
j__8203 = G__8209;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8212 = this;
return (new cljs.core.TransientHashMap({},this__8212.root,this__8212.cnt,this__8212.has_nil_QMARK_,this__8212.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8213 = this;
var h__1796__auto____8214 = this__8213.__hash;
if(!((h__1796__auto____8214 == null)))
{return h__1796__auto____8214;
} else
{var h__1796__auto____8215 = cljs.core.hash_imap.call(null,coll);
this__8213.__hash = h__1796__auto____8215;
return h__1796__auto____8215;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8216 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8217 = this;
if((k == null))
{if(this__8217.has_nil_QMARK_)
{return this__8217.nil_val;
} else
{return not_found;
}
} else
{if((this__8217.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__8217.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8218 = this;
if((k == null))
{if((function (){var and__3822__auto____8219 = this__8218.has_nil_QMARK_;
if(and__3822__auto____8219)
{return (v === this__8218.nil_val);
} else
{return and__3822__auto____8219;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8218.meta,((this__8218.has_nil_QMARK_)?this__8218.cnt:(this__8218.cnt + 1)),this__8218.root,true,v,null));
}
} else
{var added_leaf_QMARK___8220 = (new cljs.core.Box(false));
var new_root__8221 = (((this__8218.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8218.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8220);
if((new_root__8221 === this__8218.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8218.meta,((added_leaf_QMARK___8220.val)?(this__8218.cnt + 1):this__8218.cnt),new_root__8221,this__8218.has_nil_QMARK_,this__8218.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8222 = this;
if((k == null))
{return this__8222.has_nil_QMARK_;
} else
{if((this__8222.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__8222.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8245 = null;
var G__8245__2 = (function (this_sym8223,k){
var this__8225 = this;
var this_sym8223__8226 = this;
var coll__8227 = this_sym8223__8226;
return coll__8227.cljs$core$ILookup$_lookup$arity$2(coll__8227,k);
});
var G__8245__3 = (function (this_sym8224,k,not_found){
var this__8225 = this;
var this_sym8224__8228 = this;
var coll__8229 = this_sym8224__8228;
return coll__8229.cljs$core$ILookup$_lookup$arity$3(coll__8229,k,not_found);
});
G__8245 = function(this_sym8224,k,not_found){
switch(arguments.length){
case 2:
return G__8245__2.call(this,this_sym8224,k);
case 3:
return G__8245__3.call(this,this_sym8224,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8245;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym8210,args8211){
var this__8230 = this;
return this_sym8210.call.apply(this_sym8210,[this_sym8210].concat(args8211.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8231 = this;
var init__8232 = ((this__8231.has_nil_QMARK_)?f.call(null,init,null,this__8231.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__8232))
{return cljs.core.deref.call(null,init__8232);
} else
{if(!((this__8231.root == null)))
{return this__8231.root.kv_reduce(f,init__8232);
} else
{if("\uFDD0'else")
{return init__8232;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8233 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__8234 = this;
var this__8235 = this;
return cljs.core.pr_str.call(null,this__8235);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8236 = this;
if((this__8236.cnt > 0))
{var s__8237 = ((!((this__8236.root == null)))?this__8236.root.inode_seq():null);
if(this__8236.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__8236.nil_val], true),s__8237);
} else
{return s__8237;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8238 = this;
return this__8238.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8239 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8240 = this;
return (new cljs.core.PersistentHashMap(meta,this__8240.cnt,this__8240.root,this__8240.has_nil_QMARK_,this__8240.nil_val,this__8240.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8241 = this;
return this__8241.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8242 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__8242.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8243 = this;
if((k == null))
{if(this__8243.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__8243.meta,(this__8243.cnt - 1),this__8243.root,false,null,null));
} else
{return coll;
}
} else
{if((this__8243.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__8244 = this__8243.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__8244 === this__8243.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8243.meta,(this__8243.cnt - 1),new_root__8244,this__8243.has_nil_QMARK_,this__8243.nil_val,null));
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
var len__8246 = ks.length;
var i__8247 = 0;
var out__8248 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__8247 < len__8246))
{{
var G__8249 = (i__8247 + 1);
var G__8250 = cljs.core.assoc_BANG_.call(null,out__8248,(ks[i__8247]),(vs[i__8247]));
i__8247 = G__8249;
out__8248 = G__8250;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8248);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8251 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8252 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__8253 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8254 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8255 = this;
if((k == null))
{if(this__8255.has_nil_QMARK_)
{return this__8255.nil_val;
} else
{return null;
}
} else
{if((this__8255.root == null))
{return null;
} else
{return this__8255.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8256 = this;
if((k == null))
{if(this__8256.has_nil_QMARK_)
{return this__8256.nil_val;
} else
{return not_found;
}
} else
{if((this__8256.root == null))
{return not_found;
} else
{return this__8256.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8257 = this;
if(this__8257.edit)
{return this__8257.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__8258 = this;
var tcoll__8259 = this;
if(this__8258.edit)
{if((function (){var G__8260__8261 = o;
if(G__8260__8261)
{if((function (){var or__3824__auto____8262 = (G__8260__8261.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8262)
{return or__3824__auto____8262;
} else
{return G__8260__8261.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8260__8261.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8260__8261);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8260__8261);
}
})())
{return tcoll__8259.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8263 = cljs.core.seq.call(null,o);
var tcoll__8264 = tcoll__8259;
while(true){
var temp__3971__auto____8265 = cljs.core.first.call(null,es__8263);
if(cljs.core.truth_(temp__3971__auto____8265))
{var e__8266 = temp__3971__auto____8265;
{
var G__8277 = cljs.core.next.call(null,es__8263);
var G__8278 = tcoll__8264.assoc_BANG_(cljs.core.key.call(null,e__8266),cljs.core.val.call(null,e__8266));
es__8263 = G__8277;
tcoll__8264 = G__8278;
continue;
}
} else
{return tcoll__8264;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__8267 = this;
var tcoll__8268 = this;
if(this__8267.edit)
{if((k == null))
{if((this__8267.nil_val === v))
{} else
{this__8267.nil_val = v;
}
if(this__8267.has_nil_QMARK_)
{} else
{this__8267.count = (this__8267.count + 1);
this__8267.has_nil_QMARK_ = true;
}
return tcoll__8268;
} else
{var added_leaf_QMARK___8269 = (new cljs.core.Box(false));
var node__8270 = (((this__8267.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8267.root).inode_assoc_BANG_(this__8267.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8269);
if((node__8270 === this__8267.root))
{} else
{this__8267.root = node__8270;
}
if(added_leaf_QMARK___8269.val)
{this__8267.count = (this__8267.count + 1);
} else
{}
return tcoll__8268;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__8271 = this;
var tcoll__8272 = this;
if(this__8271.edit)
{if((k == null))
{if(this__8271.has_nil_QMARK_)
{this__8271.has_nil_QMARK_ = false;
this__8271.nil_val = null;
this__8271.count = (this__8271.count - 1);
return tcoll__8272;
} else
{return tcoll__8272;
}
} else
{if((this__8271.root == null))
{return tcoll__8272;
} else
{var removed_leaf_QMARK___8273 = (new cljs.core.Box(false));
var node__8274 = this__8271.root.inode_without_BANG_(this__8271.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___8273);
if((node__8274 === this__8271.root))
{} else
{this__8271.root = node__8274;
}
if(cljs.core.truth_((removed_leaf_QMARK___8273[0])))
{this__8271.count = (this__8271.count - 1);
} else
{}
return tcoll__8272;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__8275 = this;
var tcoll__8276 = this;
if(this__8275.edit)
{this__8275.edit = null;
return (new cljs.core.PersistentHashMap(null,this__8275.count,this__8275.root,this__8275.has_nil_QMARK_,this__8275.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__8281 = node;
var stack__8282 = stack;
while(true){
if(!((t__8281 == null)))
{{
var G__8283 = ((ascending_QMARK_)?t__8281.left:t__8281.right);
var G__8284 = cljs.core.conj.call(null,stack__8282,t__8281);
t__8281 = G__8283;
stack__8282 = G__8284;
continue;
}
} else
{return stack__8282;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8285 = this;
var h__1796__auto____8286 = this__8285.__hash;
if(!((h__1796__auto____8286 == null)))
{return h__1796__auto____8286;
} else
{var h__1796__auto____8287 = cljs.core.hash_coll.call(null,coll);
this__8285.__hash = h__1796__auto____8287;
return h__1796__auto____8287;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8288 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__8289 = this;
var this__8290 = this;
return cljs.core.pr_str.call(null,this__8290);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8291 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8292 = this;
if((this__8292.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__8292.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__8293 = this;
return cljs.core.peek.call(null,this__8293.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__8294 = this;
var t__8295 = cljs.core.first.call(null,this__8294.stack);
var next_stack__8296 = cljs.core.tree_map_seq_push.call(null,((this__8294.ascending_QMARK_)?t__8295.right:t__8295.left),cljs.core.next.call(null,this__8294.stack),this__8294.ascending_QMARK_);
if(!((next_stack__8296 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__8296,this__8294.ascending_QMARK_,(this__8294.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8297 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8298 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__8298.stack,this__8298.ascending_QMARK_,this__8298.cnt,this__8298.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8299 = this;
return this__8299.meta;
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
{if((function (){var and__3822__auto____8301 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____8301)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____8301;
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
{if((function (){var and__3822__auto____8303 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____8303)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____8303;
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
var init__8307 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__8307))
{return cljs.core.deref.call(null,init__8307);
} else
{var init__8308 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__8307):init__8307);
if(cljs.core.reduced_QMARK_.call(null,init__8308))
{return cljs.core.deref.call(null,init__8308);
} else
{var init__8309 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__8308):init__8308);
if(cljs.core.reduced_QMARK_.call(null,init__8309))
{return cljs.core.deref.call(null,init__8309);
} else
{return init__8309;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8312 = this;
var h__1796__auto____8313 = this__8312.__hash;
if(!((h__1796__auto____8313 == null)))
{return h__1796__auto____8313;
} else
{var h__1796__auto____8314 = cljs.core.hash_coll.call(null,coll);
this__8312.__hash = h__1796__auto____8314;
return h__1796__auto____8314;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8315 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8316 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8317 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8317.key,this__8317.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__8365 = null;
var G__8365__2 = (function (this_sym8318,k){
var this__8320 = this;
var this_sym8318__8321 = this;
var node__8322 = this_sym8318__8321;
return node__8322.cljs$core$ILookup$_lookup$arity$2(node__8322,k);
});
var G__8365__3 = (function (this_sym8319,k,not_found){
var this__8320 = this;
var this_sym8319__8323 = this;
var node__8324 = this_sym8319__8323;
return node__8324.cljs$core$ILookup$_lookup$arity$3(node__8324,k,not_found);
});
G__8365 = function(this_sym8319,k,not_found){
switch(arguments.length){
case 2:
return G__8365__2.call(this,this_sym8319,k);
case 3:
return G__8365__3.call(this,this_sym8319,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8365;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym8310,args8311){
var this__8325 = this;
return this_sym8310.call.apply(this_sym8310,[this_sym8310].concat(args8311.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8326 = this;
return cljs.core.PersistentVector.fromArray([this__8326.key,this__8326.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8327 = this;
return this__8327.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8328 = this;
return this__8328.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__8329 = this;
var node__8330 = this;
return ins.balance_right(node__8330);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__8331 = this;
var node__8332 = this;
return (new cljs.core.RedNode(this__8331.key,this__8331.val,this__8331.left,this__8331.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__8333 = this;
var node__8334 = this;
return cljs.core.balance_right_del.call(null,this__8333.key,this__8333.val,this__8333.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__8335 = this;
var node__8336 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__8337 = this;
var node__8338 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8338,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__8339 = this;
var node__8340 = this;
return cljs.core.balance_left_del.call(null,this__8339.key,this__8339.val,del,this__8339.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__8341 = this;
var node__8342 = this;
return ins.balance_left(node__8342);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__8343 = this;
var node__8344 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__8344,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__8366 = null;
var G__8366__0 = (function (){
var this__8345 = this;
var this__8347 = this;
return cljs.core.pr_str.call(null,this__8347);
});
G__8366 = function(){
switch(arguments.length){
case 0:
return G__8366__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8366;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__8348 = this;
var node__8349 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8349,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__8350 = this;
var node__8351 = this;
return node__8351;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8352 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8353 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8354 = this;
return cljs.core.list.call(null,this__8354.key,this__8354.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8355 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8356 = this;
return this__8356.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8357 = this;
return cljs.core.PersistentVector.fromArray([this__8357.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8358 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8358.key,this__8358.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8359 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8360 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8360.key,this__8360.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8361 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8362 = this;
if((n === 0))
{return this__8362.key;
} else
{if((n === 1))
{return this__8362.val;
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
var this__8363 = this;
if((n === 0))
{return this__8363.key;
} else
{if((n === 1))
{return this__8363.val;
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
var this__8364 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8369 = this;
var h__1796__auto____8370 = this__8369.__hash;
if(!((h__1796__auto____8370 == null)))
{return h__1796__auto____8370;
} else
{var h__1796__auto____8371 = cljs.core.hash_coll.call(null,coll);
this__8369.__hash = h__1796__auto____8371;
return h__1796__auto____8371;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8372 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8373 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8374 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8374.key,this__8374.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__8422 = null;
var G__8422__2 = (function (this_sym8375,k){
var this__8377 = this;
var this_sym8375__8378 = this;
var node__8379 = this_sym8375__8378;
return node__8379.cljs$core$ILookup$_lookup$arity$2(node__8379,k);
});
var G__8422__3 = (function (this_sym8376,k,not_found){
var this__8377 = this;
var this_sym8376__8380 = this;
var node__8381 = this_sym8376__8380;
return node__8381.cljs$core$ILookup$_lookup$arity$3(node__8381,k,not_found);
});
G__8422 = function(this_sym8376,k,not_found){
switch(arguments.length){
case 2:
return G__8422__2.call(this,this_sym8376,k);
case 3:
return G__8422__3.call(this,this_sym8376,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8422;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym8367,args8368){
var this__8382 = this;
return this_sym8367.call.apply(this_sym8367,[this_sym8367].concat(args8368.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8383 = this;
return cljs.core.PersistentVector.fromArray([this__8383.key,this__8383.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8384 = this;
return this__8384.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8385 = this;
return this__8385.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__8386 = this;
var node__8387 = this;
return (new cljs.core.RedNode(this__8386.key,this__8386.val,this__8386.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__8388 = this;
var node__8389 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__8390 = this;
var node__8391 = this;
return (new cljs.core.RedNode(this__8390.key,this__8390.val,this__8390.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__8392 = this;
var node__8393 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__8394 = this;
var node__8395 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8395,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__8396 = this;
var node__8397 = this;
return (new cljs.core.RedNode(this__8396.key,this__8396.val,del,this__8396.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__8398 = this;
var node__8399 = this;
return (new cljs.core.RedNode(this__8398.key,this__8398.val,ins,this__8398.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__8400 = this;
var node__8401 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8400.left))
{return (new cljs.core.RedNode(this__8400.key,this__8400.val,this__8400.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__8400.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8400.right))
{return (new cljs.core.RedNode(this__8400.right.key,this__8400.right.val,(new cljs.core.BlackNode(this__8400.key,this__8400.val,this__8400.left,this__8400.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__8400.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__8401,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__8423 = null;
var G__8423__0 = (function (){
var this__8402 = this;
var this__8404 = this;
return cljs.core.pr_str.call(null,this__8404);
});
G__8423 = function(){
switch(arguments.length){
case 0:
return G__8423__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8423;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__8405 = this;
var node__8406 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8405.right))
{return (new cljs.core.RedNode(this__8405.key,this__8405.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8405.left,null)),this__8405.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8405.left))
{return (new cljs.core.RedNode(this__8405.left.key,this__8405.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8405.left.left,null)),(new cljs.core.BlackNode(this__8405.key,this__8405.val,this__8405.left.right,this__8405.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8406,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__8407 = this;
var node__8408 = this;
return (new cljs.core.BlackNode(this__8407.key,this__8407.val,this__8407.left,this__8407.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8409 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8410 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8411 = this;
return cljs.core.list.call(null,this__8411.key,this__8411.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8412 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8413 = this;
return this__8413.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8414 = this;
return cljs.core.PersistentVector.fromArray([this__8414.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8415 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8415.key,this__8415.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8416 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8417 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8417.key,this__8417.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8418 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8419 = this;
if((n === 0))
{return this__8419.key;
} else
{if((n === 1))
{return this__8419.val;
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
var this__8420 = this;
if((n === 0))
{return this__8420.key;
} else
{if((n === 1))
{return this__8420.val;
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
var this__8421 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__8427 = comp.call(null,k,tree.key);
if((c__8427 === 0))
{(found[0] = tree);
return null;
} else
{if((c__8427 < 0))
{var ins__8428 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__8428 == null)))
{return tree.add_left(ins__8428);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__8429 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__8429 == null)))
{return tree.add_right(ins__8429);
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
{var app__8432 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8432))
{return (new cljs.core.RedNode(app__8432.key,app__8432.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__8432.left,null)),(new cljs.core.RedNode(right.key,right.val,app__8432.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__8432,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__8433 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8433))
{return (new cljs.core.RedNode(app__8433.key,app__8433.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__8433.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__8433.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__8433,right.right,null)));
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
{var c__8439 = comp.call(null,k,tree.key);
if((c__8439 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__8439 < 0))
{var del__8440 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____8441 = !((del__8440 == null));
if(or__3824__auto____8441)
{return or__3824__auto____8441;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__8440,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__8440,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__8442 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____8443 = !((del__8442 == null));
if(or__3824__auto____8443)
{return or__3824__auto____8443;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__8442);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__8442,null));
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
var tk__8446 = tree.key;
var c__8447 = comp.call(null,k,tk__8446);
if((c__8447 === 0))
{return tree.replace(tk__8446,v,tree.left,tree.right);
} else
{if((c__8447 < 0))
{return tree.replace(tk__8446,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__8446,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8450 = this;
var h__1796__auto____8451 = this__8450.__hash;
if(!((h__1796__auto____8451 == null)))
{return h__1796__auto____8451;
} else
{var h__1796__auto____8452 = cljs.core.hash_imap.call(null,coll);
this__8450.__hash = h__1796__auto____8452;
return h__1796__auto____8452;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8453 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8454 = this;
var n__8455 = coll.entry_at(k);
if(!((n__8455 == null)))
{return n__8455.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8456 = this;
var found__8457 = [null];
var t__8458 = cljs.core.tree_map_add.call(null,this__8456.comp,this__8456.tree,k,v,found__8457);
if((t__8458 == null))
{var found_node__8459 = cljs.core.nth.call(null,found__8457,0);
if(cljs.core._EQ_.call(null,v,found_node__8459.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8456.comp,cljs.core.tree_map_replace.call(null,this__8456.comp,this__8456.tree,k,v),this__8456.cnt,this__8456.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8456.comp,t__8458.blacken(),(this__8456.cnt + 1),this__8456.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8460 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__8494 = null;
var G__8494__2 = (function (this_sym8461,k){
var this__8463 = this;
var this_sym8461__8464 = this;
var coll__8465 = this_sym8461__8464;
return coll__8465.cljs$core$ILookup$_lookup$arity$2(coll__8465,k);
});
var G__8494__3 = (function (this_sym8462,k,not_found){
var this__8463 = this;
var this_sym8462__8466 = this;
var coll__8467 = this_sym8462__8466;
return coll__8467.cljs$core$ILookup$_lookup$arity$3(coll__8467,k,not_found);
});
G__8494 = function(this_sym8462,k,not_found){
switch(arguments.length){
case 2:
return G__8494__2.call(this,this_sym8462,k);
case 3:
return G__8494__3.call(this,this_sym8462,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8494;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym8448,args8449){
var this__8468 = this;
return this_sym8448.call.apply(this_sym8448,[this_sym8448].concat(args8449.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8469 = this;
if(!((this__8469.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__8469.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8470 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8471 = this;
if((this__8471.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8471.tree,false,this__8471.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__8472 = this;
var this__8473 = this;
return cljs.core.pr_str.call(null,this__8473);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__8474 = this;
var coll__8475 = this;
var t__8476 = this__8474.tree;
while(true){
if(!((t__8476 == null)))
{var c__8477 = this__8474.comp.call(null,k,t__8476.key);
if((c__8477 === 0))
{return t__8476;
} else
{if((c__8477 < 0))
{{
var G__8495 = t__8476.left;
t__8476 = G__8495;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__8496 = t__8476.right;
t__8476 = G__8496;
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
var this__8478 = this;
if((this__8478.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8478.tree,ascending_QMARK_,this__8478.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__8479 = this;
if((this__8479.cnt > 0))
{var stack__8480 = null;
var t__8481 = this__8479.tree;
while(true){
if(!((t__8481 == null)))
{var c__8482 = this__8479.comp.call(null,k,t__8481.key);
if((c__8482 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__8480,t__8481),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__8482 < 0))
{{
var G__8497 = cljs.core.conj.call(null,stack__8480,t__8481);
var G__8498 = t__8481.left;
stack__8480 = G__8497;
t__8481 = G__8498;
continue;
}
} else
{{
var G__8499 = stack__8480;
var G__8500 = t__8481.right;
stack__8480 = G__8499;
t__8481 = G__8500;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__8482 > 0))
{{
var G__8501 = cljs.core.conj.call(null,stack__8480,t__8481);
var G__8502 = t__8481.right;
stack__8480 = G__8501;
t__8481 = G__8502;
continue;
}
} else
{{
var G__8503 = stack__8480;
var G__8504 = t__8481.left;
stack__8480 = G__8503;
t__8481 = G__8504;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__8480 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__8480,ascending_QMARK_,-1,null));
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
var this__8483 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__8484 = this;
return this__8484.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8485 = this;
if((this__8485.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8485.tree,true,this__8485.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8486 = this;
return this__8486.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8487 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8488 = this;
return (new cljs.core.PersistentTreeMap(this__8488.comp,this__8488.tree,this__8488.cnt,meta,this__8488.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8489 = this;
return this__8489.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8490 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__8490.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8491 = this;
var found__8492 = [null];
var t__8493 = cljs.core.tree_map_remove.call(null,this__8491.comp,this__8491.tree,k,found__8492);
if((t__8493 == null))
{if((cljs.core.nth.call(null,found__8492,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8491.comp,null,0,this__8491.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8491.comp,t__8493.blacken(),(this__8491.cnt - 1),this__8491.meta,null));
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
var in__8507 = cljs.core.seq.call(null,keyvals);
var out__8508 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__8507)
{{
var G__8509 = cljs.core.nnext.call(null,in__8507);
var G__8510 = cljs.core.assoc_BANG_.call(null,out__8508,cljs.core.first.call(null,in__8507),cljs.core.second.call(null,in__8507));
in__8507 = G__8509;
out__8508 = G__8510;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8508);
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
hash_map.cljs$lang$applyTo = (function (arglist__8511){
var keyvals = cljs.core.seq(arglist__8511);;
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
array_map.cljs$lang$applyTo = (function (arglist__8512){
var keyvals = cljs.core.seq(arglist__8512);;
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
var in__8515 = cljs.core.seq.call(null,keyvals);
var out__8516 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__8515)
{{
var G__8517 = cljs.core.nnext.call(null,in__8515);
var G__8518 = cljs.core.assoc.call(null,out__8516,cljs.core.first.call(null,in__8515),cljs.core.second.call(null,in__8515));
in__8515 = G__8517;
out__8516 = G__8518;
continue;
}
} else
{return out__8516;
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
sorted_map.cljs$lang$applyTo = (function (arglist__8519){
var keyvals = cljs.core.seq(arglist__8519);;
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
var in__8522 = cljs.core.seq.call(null,keyvals);
var out__8523 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__8522)
{{
var G__8524 = cljs.core.nnext.call(null,in__8522);
var G__8525 = cljs.core.assoc.call(null,out__8523,cljs.core.first.call(null,in__8522),cljs.core.second.call(null,in__8522));
in__8522 = G__8524;
out__8523 = G__8525;
continue;
}
} else
{return out__8523;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__8526){
var comparator = cljs.core.first(arglist__8526);
var keyvals = cljs.core.rest(arglist__8526);
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
{return cljs.core.reduce.call(null,(function (p1__8527_SHARP_,p2__8528_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____8530 = p1__8527_SHARP_;
if(cljs.core.truth_(or__3824__auto____8530))
{return or__3824__auto____8530;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__8528_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__8531){
var maps = cljs.core.seq(arglist__8531);;
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
{var merge_entry__8539 = (function (m,e){
var k__8537 = cljs.core.first.call(null,e);
var v__8538 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__8537))
{return cljs.core.assoc.call(null,m,k__8537,f.call(null,cljs.core._lookup.call(null,m,k__8537,null),v__8538));
} else
{return cljs.core.assoc.call(null,m,k__8537,v__8538);
}
});
var merge2__8541 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8539,(function (){var or__3824__auto____8540 = m1;
if(cljs.core.truth_(or__3824__auto____8540))
{return or__3824__auto____8540;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__8541,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__8542){
var f = cljs.core.first(arglist__8542);
var maps = cljs.core.rest(arglist__8542);
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
var ret__8547 = cljs.core.ObjMap.EMPTY;
var keys__8548 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__8548)
{var key__8549 = cljs.core.first.call(null,keys__8548);
var entry__8550 = cljs.core._lookup.call(null,map,key__8549,"\uFDD0'user/not-found");
{
var G__8551 = ((cljs.core.not_EQ_.call(null,entry__8550,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8547,key__8549,entry__8550):ret__8547);
var G__8552 = cljs.core.next.call(null,keys__8548);
ret__8547 = G__8551;
keys__8548 = G__8552;
continue;
}
} else
{return ret__8547;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8556 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__8556.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8557 = this;
var h__1796__auto____8558 = this__8557.__hash;
if(!((h__1796__auto____8558 == null)))
{return h__1796__auto____8558;
} else
{var h__1796__auto____8559 = cljs.core.hash_iset.call(null,coll);
this__8557.__hash = h__1796__auto____8559;
return h__1796__auto____8559;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__8560 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__8561 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8561.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__8582 = null;
var G__8582__2 = (function (this_sym8562,k){
var this__8564 = this;
var this_sym8562__8565 = this;
var coll__8566 = this_sym8562__8565;
return coll__8566.cljs$core$ILookup$_lookup$arity$2(coll__8566,k);
});
var G__8582__3 = (function (this_sym8563,k,not_found){
var this__8564 = this;
var this_sym8563__8567 = this;
var coll__8568 = this_sym8563__8567;
return coll__8568.cljs$core$ILookup$_lookup$arity$3(coll__8568,k,not_found);
});
G__8582 = function(this_sym8563,k,not_found){
switch(arguments.length){
case 2:
return G__8582__2.call(this,this_sym8563,k);
case 3:
return G__8582__3.call(this,this_sym8563,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8582;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym8554,args8555){
var this__8569 = this;
return this_sym8554.call.apply(this_sym8554,[this_sym8554].concat(args8555.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8570 = this;
return (new cljs.core.PersistentHashSet(this__8570.meta,cljs.core.assoc.call(null,this__8570.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__8571 = this;
var this__8572 = this;
return cljs.core.pr_str.call(null,this__8572);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8573 = this;
return cljs.core.keys.call(null,this__8573.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__8574 = this;
return (new cljs.core.PersistentHashSet(this__8574.meta,cljs.core.dissoc.call(null,this__8574.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8575 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8576 = this;
var and__3822__auto____8577 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____8577)
{var and__3822__auto____8578 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____8578)
{return cljs.core.every_QMARK_.call(null,(function (p1__8553_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8553_SHARP_);
}),other);
} else
{return and__3822__auto____8578;
}
} else
{return and__3822__auto____8577;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8579 = this;
return (new cljs.core.PersistentHashSet(meta,this__8579.hash_map,this__8579.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8580 = this;
return this__8580.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8581 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__8581.meta);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__8600 = null;
var G__8600__2 = (function (this_sym8586,k){
var this__8588 = this;
var this_sym8586__8589 = this;
var tcoll__8590 = this_sym8586__8589;
if((cljs.core._lookup.call(null,this__8588.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__8600__3 = (function (this_sym8587,k,not_found){
var this__8588 = this;
var this_sym8587__8591 = this;
var tcoll__8592 = this_sym8587__8591;
if((cljs.core._lookup.call(null,this__8588.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__8600 = function(this_sym8587,k,not_found){
switch(arguments.length){
case 2:
return G__8600__2.call(this,this_sym8587,k);
case 3:
return G__8600__3.call(this,this_sym8587,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8600;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym8584,args8585){
var this__8593 = this;
return this_sym8584.call.apply(this_sym8584,[this_sym8584].concat(args8585.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__8594 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__8595 = this;
if((cljs.core._lookup.call(null,this__8595.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8596 = this;
return cljs.core.count.call(null,this__8596.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__8597 = this;
this__8597.transient_map = cljs.core.dissoc_BANG_.call(null,this__8597.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8598 = this;
this__8598.transient_map = cljs.core.assoc_BANG_.call(null,this__8598.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8599 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__8599.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8603 = this;
var h__1796__auto____8604 = this__8603.__hash;
if(!((h__1796__auto____8604 == null)))
{return h__1796__auto____8604;
} else
{var h__1796__auto____8605 = cljs.core.hash_iset.call(null,coll);
this__8603.__hash = h__1796__auto____8605;
return h__1796__auto____8605;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__8606 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__8607 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8607.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__8633 = null;
var G__8633__2 = (function (this_sym8608,k){
var this__8610 = this;
var this_sym8608__8611 = this;
var coll__8612 = this_sym8608__8611;
return coll__8612.cljs$core$ILookup$_lookup$arity$2(coll__8612,k);
});
var G__8633__3 = (function (this_sym8609,k,not_found){
var this__8610 = this;
var this_sym8609__8613 = this;
var coll__8614 = this_sym8609__8613;
return coll__8614.cljs$core$ILookup$_lookup$arity$3(coll__8614,k,not_found);
});
G__8633 = function(this_sym8609,k,not_found){
switch(arguments.length){
case 2:
return G__8633__2.call(this,this_sym8609,k);
case 3:
return G__8633__3.call(this,this_sym8609,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8633;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym8601,args8602){
var this__8615 = this;
return this_sym8601.call.apply(this_sym8601,[this_sym8601].concat(args8602.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8616 = this;
return (new cljs.core.PersistentTreeSet(this__8616.meta,cljs.core.assoc.call(null,this__8616.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8617 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__8617.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__8618 = this;
var this__8619 = this;
return cljs.core.pr_str.call(null,this__8619);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__8620 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__8620.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__8621 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__8621.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__8622 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__8623 = this;
return cljs.core._comparator.call(null,this__8623.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8624 = this;
return cljs.core.keys.call(null,this__8624.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__8625 = this;
return (new cljs.core.PersistentTreeSet(this__8625.meta,cljs.core.dissoc.call(null,this__8625.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8626 = this;
return cljs.core.count.call(null,this__8626.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8627 = this;
var and__3822__auto____8628 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____8628)
{var and__3822__auto____8629 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____8629)
{return cljs.core.every_QMARK_.call(null,(function (p1__8583_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8583_SHARP_);
}),other);
} else
{return and__3822__auto____8629;
}
} else
{return and__3822__auto____8628;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8630 = this;
return (new cljs.core.PersistentTreeSet(meta,this__8630.tree_map,this__8630.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8631 = this;
return this__8631.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8632 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__8632.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__8636 = cljs.core.seq.call(null,coll);
var out__8637 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__8636))
{{
var G__8638 = cljs.core.next.call(null,in__8636);
var G__8639 = cljs.core.conj_BANG_.call(null,out__8637,cljs.core.first.call(null,in__8636));
in__8636 = G__8638;
out__8637 = G__8639;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8637);
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
sorted_set.cljs$lang$applyTo = (function (arglist__8640){
var keys = cljs.core.seq(arglist__8640);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__8642){
var comparator = cljs.core.first(arglist__8642);
var keys = cljs.core.rest(arglist__8642);
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
{var n__8648 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____8649 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____8649))
{var e__8650 = temp__3971__auto____8649;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__8650));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__8648,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__8641_SHARP_){
var temp__3971__auto____8651 = cljs.core.find.call(null,smap,p1__8641_SHARP_);
if(cljs.core.truth_(temp__3971__auto____8651))
{var e__8652 = temp__3971__auto____8651;
return cljs.core.second.call(null,e__8652);
} else
{return p1__8641_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__8682 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__8675,seen){
while(true){
var vec__8676__8677 = p__8675;
var f__8678 = cljs.core.nth.call(null,vec__8676__8677,0,null);
var xs__8679 = vec__8676__8677;
var temp__3974__auto____8680 = cljs.core.seq.call(null,xs__8679);
if(temp__3974__auto____8680)
{var s__8681 = temp__3974__auto____8680;
if(cljs.core.contains_QMARK_.call(null,seen,f__8678))
{{
var G__8683 = cljs.core.rest.call(null,s__8681);
var G__8684 = seen;
p__8675 = G__8683;
seen = G__8684;
continue;
}
} else
{return cljs.core.cons.call(null,f__8678,step.call(null,cljs.core.rest.call(null,s__8681),cljs.core.conj.call(null,seen,f__8678)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__8682.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__8687 = cljs.core.PersistentVector.EMPTY;
var s__8688 = s;
while(true){
if(cljs.core.next.call(null,s__8688))
{{
var G__8689 = cljs.core.conj.call(null,ret__8687,cljs.core.first.call(null,s__8688));
var G__8690 = cljs.core.next.call(null,s__8688);
ret__8687 = G__8689;
s__8688 = G__8690;
continue;
}
} else
{return cljs.core.seq.call(null,ret__8687);
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
{if((function (){var or__3824__auto____8693 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____8693)
{return or__3824__auto____8693;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__8694 = x.lastIndexOf("/");
if((i__8694 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__8694 + 1));
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
if((function (){var or__3824__auto____8697 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____8697)
{return or__3824__auto____8697;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__8698 = x.lastIndexOf("/");
if((i__8698 > -1))
{return cljs.core.subs.call(null,x,2,i__8698);
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
var map__8705 = cljs.core.ObjMap.EMPTY;
var ks__8706 = cljs.core.seq.call(null,keys);
var vs__8707 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____8708 = ks__8706;
if(and__3822__auto____8708)
{return vs__8707;
} else
{return and__3822__auto____8708;
}
})())
{{
var G__8709 = cljs.core.assoc.call(null,map__8705,cljs.core.first.call(null,ks__8706),cljs.core.first.call(null,vs__8707));
var G__8710 = cljs.core.next.call(null,ks__8706);
var G__8711 = cljs.core.next.call(null,vs__8707);
map__8705 = G__8709;
ks__8706 = G__8710;
vs__8707 = G__8711;
continue;
}
} else
{return map__8705;
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
var G__8714__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8699_SHARP_,p2__8700_SHARP_){
return max_key.call(null,k,p1__8699_SHARP_,p2__8700_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__8714 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8714__delegate.call(this, k, x, y, more);
};
G__8714.cljs$lang$maxFixedArity = 3;
G__8714.cljs$lang$applyTo = (function (arglist__8715){
var k = cljs.core.first(arglist__8715);
var x = cljs.core.first(cljs.core.next(arglist__8715));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8715)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8715)));
return G__8714__delegate(k, x, y, more);
});
G__8714.cljs$lang$arity$variadic = G__8714__delegate;
return G__8714;
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
var G__8716__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8712_SHARP_,p2__8713_SHARP_){
return min_key.call(null,k,p1__8712_SHARP_,p2__8713_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__8716 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8716__delegate.call(this, k, x, y, more);
};
G__8716.cljs$lang$maxFixedArity = 3;
G__8716.cljs$lang$applyTo = (function (arglist__8717){
var k = cljs.core.first(arglist__8717);
var x = cljs.core.first(cljs.core.next(arglist__8717));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8717)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8717)));
return G__8716__delegate(k, x, y, more);
});
G__8716.cljs$lang$arity$variadic = G__8716__delegate;
return G__8716;
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
var temp__3974__auto____8720 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8720)
{var s__8721 = temp__3974__auto____8720;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__8721),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__8721)));
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
var temp__3974__auto____8724 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8724)
{var s__8725 = temp__3974__auto____8724;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8725))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8725),take_while.call(null,pred,cljs.core.rest.call(null,s__8725)));
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
var comp__8727 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__8727.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__8739 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____8740 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____8740))
{var vec__8741__8742 = temp__3974__auto____8740;
var e__8743 = cljs.core.nth.call(null,vec__8741__8742,0,null);
var s__8744 = vec__8741__8742;
if(cljs.core.truth_(include__8739.call(null,e__8743)))
{return s__8744;
} else
{return cljs.core.next.call(null,s__8744);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__8739,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____8745 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____8745))
{var vec__8746__8747 = temp__3974__auto____8745;
var e__8748 = cljs.core.nth.call(null,vec__8746__8747,0,null);
var s__8749 = vec__8746__8747;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__8748))?s__8749:cljs.core.next.call(null,s__8749)));
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
var include__8761 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____8762 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____8762))
{var vec__8763__8764 = temp__3974__auto____8762;
var e__8765 = cljs.core.nth.call(null,vec__8763__8764,0,null);
var s__8766 = vec__8763__8764;
if(cljs.core.truth_(include__8761.call(null,e__8765)))
{return s__8766;
} else
{return cljs.core.next.call(null,s__8766);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__8761,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____8767 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____8767))
{var vec__8768__8769 = temp__3974__auto____8767;
var e__8770 = cljs.core.nth.call(null,vec__8768__8769,0,null);
var s__8771 = vec__8768__8769;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__8770))?s__8771:cljs.core.next.call(null,s__8771)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__8772 = this;
var h__1796__auto____8773 = this__8772.__hash;
if(!((h__1796__auto____8773 == null)))
{return h__1796__auto____8773;
} else
{var h__1796__auto____8774 = cljs.core.hash_coll.call(null,rng);
this__8772.__hash = h__1796__auto____8774;
return h__1796__auto____8774;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__8775 = this;
if((this__8775.step > 0))
{if(((this__8775.start + this__8775.step) < this__8775.end))
{return (new cljs.core.Range(this__8775.meta,(this__8775.start + this__8775.step),this__8775.end,this__8775.step,null));
} else
{return null;
}
} else
{if(((this__8775.start + this__8775.step) > this__8775.end))
{return (new cljs.core.Range(this__8775.meta,(this__8775.start + this__8775.step),this__8775.end,this__8775.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__8776 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__8777 = this;
var this__8778 = this;
return cljs.core.pr_str.call(null,this__8778);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__8779 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__8780 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__8781 = this;
if((this__8781.step > 0))
{if((this__8781.start < this__8781.end))
{return rng;
} else
{return null;
}
} else
{if((this__8781.start > this__8781.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__8782 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__8782.end - this__8782.start) / this__8782.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__8783 = this;
return this__8783.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__8784 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__8784.meta,(this__8784.start + this__8784.step),this__8784.end,this__8784.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__8785 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__8786 = this;
return (new cljs.core.Range(meta,this__8786.start,this__8786.end,this__8786.step,this__8786.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__8787 = this;
return this__8787.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__8788 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__8788.start + (n * this__8788.step));
} else
{if((function (){var and__3822__auto____8789 = (this__8788.start > this__8788.end);
if(and__3822__auto____8789)
{return (this__8788.step === 0);
} else
{return and__3822__auto____8789;
}
})())
{return this__8788.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__8790 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__8790.start + (n * this__8790.step));
} else
{if((function (){var and__3822__auto____8791 = (this__8790.start > this__8790.end);
if(and__3822__auto____8791)
{return (this__8790.step === 0);
} else
{return and__3822__auto____8791;
}
})())
{return this__8790.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__8792 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8792.meta);
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
var temp__3974__auto____8795 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8795)
{var s__8796 = temp__3974__auto____8795;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8796),take_nth.call(null,n,cljs.core.drop.call(null,n,s__8796)));
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
var temp__3974__auto____8803 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8803)
{var s__8804 = temp__3974__auto____8803;
var fst__8805 = cljs.core.first.call(null,s__8804);
var fv__8806 = f.call(null,fst__8805);
var run__8807 = cljs.core.cons.call(null,fst__8805,cljs.core.take_while.call(null,(function (p1__8797_SHARP_){
return cljs.core._EQ_.call(null,fv__8806,f.call(null,p1__8797_SHARP_));
}),cljs.core.next.call(null,s__8804)));
return cljs.core.cons.call(null,run__8807,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__8807),s__8804))));
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
var temp__3971__auto____8822 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8822)
{var s__8823 = temp__3971__auto____8822;
return reductions.call(null,f,cljs.core.first.call(null,s__8823),cljs.core.rest.call(null,s__8823));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8824 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8824)
{var s__8825 = temp__3974__auto____8824;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__8825)),cljs.core.rest.call(null,s__8825));
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
var G__8828 = null;
var G__8828__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__8828__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__8828__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__8828__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__8828__4 = (function() { 
var G__8829__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__8829 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8829__delegate.call(this, x, y, z, args);
};
G__8829.cljs$lang$maxFixedArity = 3;
G__8829.cljs$lang$applyTo = (function (arglist__8830){
var x = cljs.core.first(arglist__8830);
var y = cljs.core.first(cljs.core.next(arglist__8830));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8830)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8830)));
return G__8829__delegate(x, y, z, args);
});
G__8829.cljs$lang$arity$variadic = G__8829__delegate;
return G__8829;
})()
;
G__8828 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8828__0.call(this);
case 1:
return G__8828__1.call(this,x);
case 2:
return G__8828__2.call(this,x,y);
case 3:
return G__8828__3.call(this,x,y,z);
default:
return G__8828__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8828.cljs$lang$maxFixedArity = 3;
G__8828.cljs$lang$applyTo = G__8828__4.cljs$lang$applyTo;
return G__8828;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__8831 = null;
var G__8831__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__8831__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__8831__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__8831__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__8831__4 = (function() { 
var G__8832__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8832 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8832__delegate.call(this, x, y, z, args);
};
G__8832.cljs$lang$maxFixedArity = 3;
G__8832.cljs$lang$applyTo = (function (arglist__8833){
var x = cljs.core.first(arglist__8833);
var y = cljs.core.first(cljs.core.next(arglist__8833));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8833)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8833)));
return G__8832__delegate(x, y, z, args);
});
G__8832.cljs$lang$arity$variadic = G__8832__delegate;
return G__8832;
})()
;
G__8831 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8831__0.call(this);
case 1:
return G__8831__1.call(this,x);
case 2:
return G__8831__2.call(this,x,y);
case 3:
return G__8831__3.call(this,x,y,z);
default:
return G__8831__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8831.cljs$lang$maxFixedArity = 3;
G__8831.cljs$lang$applyTo = G__8831__4.cljs$lang$applyTo;
return G__8831;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__8834 = null;
var G__8834__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__8834__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__8834__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__8834__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__8834__4 = (function() { 
var G__8835__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__8835 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8835__delegate.call(this, x, y, z, args);
};
G__8835.cljs$lang$maxFixedArity = 3;
G__8835.cljs$lang$applyTo = (function (arglist__8836){
var x = cljs.core.first(arglist__8836);
var y = cljs.core.first(cljs.core.next(arglist__8836));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8836)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8836)));
return G__8835__delegate(x, y, z, args);
});
G__8835.cljs$lang$arity$variadic = G__8835__delegate;
return G__8835;
})()
;
G__8834 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8834__0.call(this);
case 1:
return G__8834__1.call(this,x);
case 2:
return G__8834__2.call(this,x,y);
case 3:
return G__8834__3.call(this,x,y,z);
default:
return G__8834__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8834.cljs$lang$maxFixedArity = 3;
G__8834.cljs$lang$applyTo = G__8834__4.cljs$lang$applyTo;
return G__8834;
})()
});
var juxt__4 = (function() { 
var G__8837__delegate = function (f,g,h,fs){
var fs__8827 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__8838 = null;
var G__8838__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__8808_SHARP_,p2__8809_SHARP_){
return cljs.core.conj.call(null,p1__8808_SHARP_,p2__8809_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__8827);
});
var G__8838__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__8810_SHARP_,p2__8811_SHARP_){
return cljs.core.conj.call(null,p1__8810_SHARP_,p2__8811_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__8827);
});
var G__8838__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__8812_SHARP_,p2__8813_SHARP_){
return cljs.core.conj.call(null,p1__8812_SHARP_,p2__8813_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__8827);
});
var G__8838__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__8814_SHARP_,p2__8815_SHARP_){
return cljs.core.conj.call(null,p1__8814_SHARP_,p2__8815_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__8827);
});
var G__8838__4 = (function() { 
var G__8839__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__8816_SHARP_,p2__8817_SHARP_){
return cljs.core.conj.call(null,p1__8816_SHARP_,cljs.core.apply.call(null,p2__8817_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__8827);
};
var G__8839 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8839__delegate.call(this, x, y, z, args);
};
G__8839.cljs$lang$maxFixedArity = 3;
G__8839.cljs$lang$applyTo = (function (arglist__8840){
var x = cljs.core.first(arglist__8840);
var y = cljs.core.first(cljs.core.next(arglist__8840));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8840)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8840)));
return G__8839__delegate(x, y, z, args);
});
G__8839.cljs$lang$arity$variadic = G__8839__delegate;
return G__8839;
})()
;
G__8838 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8838__0.call(this);
case 1:
return G__8838__1.call(this,x);
case 2:
return G__8838__2.call(this,x,y);
case 3:
return G__8838__3.call(this,x,y,z);
default:
return G__8838__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8838.cljs$lang$maxFixedArity = 3;
G__8838.cljs$lang$applyTo = G__8838__4.cljs$lang$applyTo;
return G__8838;
})()
};
var G__8837 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8837__delegate.call(this, f, g, h, fs);
};
G__8837.cljs$lang$maxFixedArity = 3;
G__8837.cljs$lang$applyTo = (function (arglist__8841){
var f = cljs.core.first(arglist__8841);
var g = cljs.core.first(cljs.core.next(arglist__8841));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8841)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8841)));
return G__8837__delegate(f, g, h, fs);
});
G__8837.cljs$lang$arity$variadic = G__8837__delegate;
return G__8837;
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
var G__8844 = cljs.core.next.call(null,coll);
coll = G__8844;
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
if(cljs.core.truth_((function (){var and__3822__auto____8843 = cljs.core.seq.call(null,coll);
if(and__3822__auto____8843)
{return (n > 0);
} else
{return and__3822__auto____8843;
}
})()))
{{
var G__8845 = (n - 1);
var G__8846 = cljs.core.next.call(null,coll);
n = G__8845;
coll = G__8846;
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
var matches__8848 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__8848),s))
{if((cljs.core.count.call(null,matches__8848) === 1))
{return cljs.core.first.call(null,matches__8848);
} else
{return cljs.core.vec.call(null,matches__8848);
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
var matches__8850 = re.exec(s);
if((matches__8850 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__8850) === 1))
{return cljs.core.first.call(null,matches__8850);
} else
{return cljs.core.vec.call(null,matches__8850);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__8855 = cljs.core.re_find.call(null,re,s);
var match_idx__8856 = s.search(re);
var match_str__8857 = ((cljs.core.coll_QMARK_.call(null,match_data__8855))?cljs.core.first.call(null,match_data__8855):match_data__8855);
var post_match__8858 = cljs.core.subs.call(null,s,(match_idx__8856 + cljs.core.count.call(null,match_str__8857)));
if(cljs.core.truth_(match_data__8855))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__8855,re_seq.call(null,re,post_match__8858));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__8865__8866 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___8867 = cljs.core.nth.call(null,vec__8865__8866,0,null);
var flags__8868 = cljs.core.nth.call(null,vec__8865__8866,1,null);
var pattern__8869 = cljs.core.nth.call(null,vec__8865__8866,2,null);
return (new RegExp(pattern__8869,flags__8868));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__8859_SHARP_){
return print_one.call(null,p1__8859_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____8879 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____8879))
{var and__3822__auto____8883 = (function (){var G__8880__8881 = obj;
if(G__8880__8881)
{if((function (){var or__3824__auto____8882 = (G__8880__8881.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____8882)
{return or__3824__auto____8882;
} else
{return G__8880__8881.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__8880__8881.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8880__8881);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8880__8881);
}
})();
if(cljs.core.truth_(and__3822__auto____8883))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____8883;
}
} else
{return and__3822__auto____8879;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____8884 = !((obj == null));
if(and__3822__auto____8884)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____8884;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__8885__8886 = obj;
if(G__8885__8886)
{if((function (){var or__3824__auto____8887 = (G__8885__8886.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____8887)
{return or__3824__auto____8887;
} else
{return G__8885__8886.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__8885__8886.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__8885__8886);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__8885__8886);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__8902 = cljs.core.first.call(null,objs);
var sb__8903 = (new goog.string.StringBuffer());
var G__8904__8905 = cljs.core.seq.call(null,objs);
if(G__8904__8905)
{var obj__8906 = cljs.core.first.call(null,G__8904__8905);
var G__8904__8907 = G__8904__8905;
while(true){
if((obj__8906 === first_obj__8902))
{} else
{sb__8903.append(" ");
}
var G__8908__8909 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8906,opts));
if(G__8908__8909)
{var string__8910 = cljs.core.first.call(null,G__8908__8909);
var G__8908__8911 = G__8908__8909;
while(true){
sb__8903.append(string__8910);
var temp__3974__auto____8912 = cljs.core.next.call(null,G__8908__8911);
if(temp__3974__auto____8912)
{var G__8908__8913 = temp__3974__auto____8912;
{
var G__8916 = cljs.core.first.call(null,G__8908__8913);
var G__8917 = G__8908__8913;
string__8910 = G__8916;
G__8908__8911 = G__8917;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____8914 = cljs.core.next.call(null,G__8904__8907);
if(temp__3974__auto____8914)
{var G__8904__8915 = temp__3974__auto____8914;
{
var G__8918 = cljs.core.first.call(null,G__8904__8915);
var G__8919 = G__8904__8915;
obj__8906 = G__8918;
G__8904__8907 = G__8919;
continue;
}
} else
{}
break;
}
} else
{}
return sb__8903;
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
var sb__8921 = cljs.core.pr_sb.call(null,objs,opts);
sb__8921.append("\n");
return [cljs.core.str(sb__8921)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__8935 = cljs.core.first.call(null,objs);
var G__8936__8937 = cljs.core.seq.call(null,objs);
if(G__8936__8937)
{var obj__8938 = cljs.core.first.call(null,G__8936__8937);
var G__8936__8939 = G__8936__8937;
while(true){
if((obj__8938 === first_obj__8935))
{} else
{cljs.core.string_print.call(null," ");
}
var G__8940__8941 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8938,opts));
if(G__8940__8941)
{var string__8942 = cljs.core.first.call(null,G__8940__8941);
var G__8940__8943 = G__8940__8941;
while(true){
cljs.core.string_print.call(null,string__8942);
var temp__3974__auto____8944 = cljs.core.next.call(null,G__8940__8943);
if(temp__3974__auto____8944)
{var G__8940__8945 = temp__3974__auto____8944;
{
var G__8948 = cljs.core.first.call(null,G__8940__8945);
var G__8949 = G__8940__8945;
string__8942 = G__8948;
G__8940__8943 = G__8949;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____8946 = cljs.core.next.call(null,G__8936__8939);
if(temp__3974__auto____8946)
{var G__8936__8947 = temp__3974__auto____8946;
{
var G__8950 = cljs.core.first.call(null,G__8936__8947);
var G__8951 = G__8936__8947;
obj__8938 = G__8950;
G__8936__8939 = G__8951;
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
pr_str.cljs$lang$applyTo = (function (arglist__8952){
var objs = cljs.core.seq(arglist__8952);;
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
prn_str.cljs$lang$applyTo = (function (arglist__8953){
var objs = cljs.core.seq(arglist__8953);;
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
pr.cljs$lang$applyTo = (function (arglist__8954){
var objs = cljs.core.seq(arglist__8954);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__8955){
var objs = cljs.core.seq(arglist__8955);;
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
print_str.cljs$lang$applyTo = (function (arglist__8956){
var objs = cljs.core.seq(arglist__8956);;
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
println.cljs$lang$applyTo = (function (arglist__8957){
var objs = cljs.core.seq(arglist__8957);;
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
println_str.cljs$lang$applyTo = (function (arglist__8958){
var objs = cljs.core.seq(arglist__8958);;
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
prn.cljs$lang$applyTo = (function (arglist__8959){
var objs = cljs.core.seq(arglist__8959);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__8960 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__8960,"{",", ","}",opts,coll);
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
var pr_pair__8961 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__8961,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__8962 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__8962,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____8963 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____8963))
{var nspc__8964 = temp__3974__auto____8963;
return [cljs.core.str(nspc__8964),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____8965 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____8965))
{var nspc__8966 = temp__3974__auto____8965;
return [cljs.core.str(nspc__8966),cljs.core.str("/")].join('');
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
var pr_pair__8967 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__8967,"{",", ","}",opts,coll);
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
var normalize__8969 = (function (n,len){
var ns__8968 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__8968) < len))
{{
var G__8971 = [cljs.core.str("0"),cljs.core.str(ns__8968)].join('');
ns__8968 = G__8971;
continue;
}
} else
{return ns__8968;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__8969.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__8969.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__8969.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__8969.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__8969.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__8969.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__8970 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__8970,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__8972 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__8973 = this;
var G__8974__8975 = cljs.core.seq.call(null,this__8973.watches);
if(G__8974__8975)
{var G__8977__8979 = cljs.core.first.call(null,G__8974__8975);
var vec__8978__8980 = G__8977__8979;
var key__8981 = cljs.core.nth.call(null,vec__8978__8980,0,null);
var f__8982 = cljs.core.nth.call(null,vec__8978__8980,1,null);
var G__8974__8983 = G__8974__8975;
var G__8977__8984 = G__8977__8979;
var G__8974__8985 = G__8974__8983;
while(true){
var vec__8986__8987 = G__8977__8984;
var key__8988 = cljs.core.nth.call(null,vec__8986__8987,0,null);
var f__8989 = cljs.core.nth.call(null,vec__8986__8987,1,null);
var G__8974__8990 = G__8974__8985;
f__8989.call(null,key__8988,this$,oldval,newval);
var temp__3974__auto____8991 = cljs.core.next.call(null,G__8974__8990);
if(temp__3974__auto____8991)
{var G__8974__8992 = temp__3974__auto____8991;
{
var G__8999 = cljs.core.first.call(null,G__8974__8992);
var G__9000 = G__8974__8992;
G__8977__8984 = G__8999;
G__8974__8985 = G__9000;
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
var this__8993 = this;
return this$.watches = cljs.core.assoc.call(null,this__8993.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__8994 = this;
return this$.watches = cljs.core.dissoc.call(null,this__8994.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__8995 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__8995.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__8996 = this;
return this__8996.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__8997 = this;
return this__8997.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8998 = this;
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
var G__9012__delegate = function (x,p__9001){
var map__9007__9008 = p__9001;
var map__9007__9009 = ((cljs.core.seq_QMARK_.call(null,map__9007__9008))?cljs.core.apply.call(null,cljs.core.hash_map,map__9007__9008):map__9007__9008);
var validator__9010 = cljs.core._lookup.call(null,map__9007__9009,"\uFDD0'validator",null);
var meta__9011 = cljs.core._lookup.call(null,map__9007__9009,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9011,validator__9010,null));
};
var G__9012 = function (x,var_args){
var p__9001 = null;
if (goog.isDef(var_args)) {
  p__9001 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9012__delegate.call(this, x, p__9001);
};
G__9012.cljs$lang$maxFixedArity = 1;
G__9012.cljs$lang$applyTo = (function (arglist__9013){
var x = cljs.core.first(arglist__9013);
var p__9001 = cljs.core.rest(arglist__9013);
return G__9012__delegate(x, p__9001);
});
G__9012.cljs$lang$arity$variadic = G__9012__delegate;
return G__9012;
})()
;
atom = function(x,var_args){
var p__9001 = var_args;
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
var temp__3974__auto____9017 = a.validator;
if(cljs.core.truth_(temp__3974__auto____9017))
{var validate__9018 = temp__3974__auto____9017;
if(cljs.core.truth_(validate__9018.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__9019 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9019,new_value);
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
var G__9020__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9020 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9020__delegate.call(this, a, f, x, y, z, more);
};
G__9020.cljs$lang$maxFixedArity = 5;
G__9020.cljs$lang$applyTo = (function (arglist__9021){
var a = cljs.core.first(arglist__9021);
var f = cljs.core.first(cljs.core.next(arglist__9021));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9021)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9021))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9021)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9021)))));
return G__9020__delegate(a, f, x, y, z, more);
});
G__9020.cljs$lang$arity$variadic = G__9020__delegate;
return G__9020;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9022){
var iref = cljs.core.first(arglist__9022);
var f = cljs.core.first(cljs.core.next(arglist__9022));
var args = cljs.core.rest(cljs.core.next(arglist__9022));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9023 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__9023.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9024 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__9024.state,(function (p__9025){
var curr_state__9026 = p__9025;
var curr_state__9027 = ((cljs.core.seq_QMARK_.call(null,curr_state__9026))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9026):curr_state__9026);
var done__9028 = cljs.core._lookup.call(null,curr_state__9027,"\uFDD0'done",null);
if(cljs.core.truth_(done__9028))
{return curr_state__9027;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9024.f.call(null)});
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
var map__9049__9050 = options;
var map__9049__9051 = ((cljs.core.seq_QMARK_.call(null,map__9049__9050))?cljs.core.apply.call(null,cljs.core.hash_map,map__9049__9050):map__9049__9050);
var keywordize_keys__9052 = cljs.core._lookup.call(null,map__9049__9051,"\uFDD0'keywordize-keys",null);
var keyfn__9053 = (cljs.core.truth_(keywordize_keys__9052)?cljs.core.keyword:cljs.core.str);
var f__9068 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2070__auto____9067 = (function iter__9061(s__9062){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9062__9065 = s__9062;
while(true){
if(cljs.core.seq.call(null,s__9062__9065))
{var k__9066 = cljs.core.first.call(null,s__9062__9065);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9053.call(null,k__9066),thisfn.call(null,(x[k__9066]))], true),iter__9061.call(null,cljs.core.rest.call(null,s__9062__9065)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2070__auto____9067.call(null,cljs.core.js_keys.call(null,x));
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
return f__9068.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9069){
var x = cljs.core.first(arglist__9069);
var options = cljs.core.rest(arglist__9069);
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
var mem__9074 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__9078__delegate = function (args){
var temp__3971__auto____9075 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__9074),args,null);
if(cljs.core.truth_(temp__3971__auto____9075))
{var v__9076 = temp__3971__auto____9075;
return v__9076;
} else
{var ret__9077 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9074,cljs.core.assoc,args,ret__9077);
return ret__9077;
}
};
var G__9078 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9078__delegate.call(this, args);
};
G__9078.cljs$lang$maxFixedArity = 0;
G__9078.cljs$lang$applyTo = (function (arglist__9079){
var args = cljs.core.seq(arglist__9079);;
return G__9078__delegate(args);
});
G__9078.cljs$lang$arity$variadic = G__9078__delegate;
return G__9078;
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
var ret__9081 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9081))
{{
var G__9082 = ret__9081;
f = G__9082;
continue;
}
} else
{return ret__9081;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9083__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9083 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9083__delegate.call(this, f, args);
};
G__9083.cljs$lang$maxFixedArity = 1;
G__9083.cljs$lang$applyTo = (function (arglist__9084){
var f = cljs.core.first(arglist__9084);
var args = cljs.core.rest(arglist__9084);
return G__9083__delegate(f, args);
});
G__9083.cljs$lang$arity$variadic = G__9083__delegate;
return G__9083;
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
var k__9086 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9086,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__9086,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____9095 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____9095)
{return or__3824__auto____9095;
} else
{var or__3824__auto____9096 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____9096)
{return or__3824__auto____9096;
} else
{var and__3822__auto____9097 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____9097)
{var and__3822__auto____9098 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____9098)
{var and__3822__auto____9099 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____9099)
{var ret__9100 = true;
var i__9101 = 0;
while(true){
if((function (){var or__3824__auto____9102 = cljs.core.not.call(null,ret__9100);
if(or__3824__auto____9102)
{return or__3824__auto____9102;
} else
{return (i__9101 === cljs.core.count.call(null,parent));
}
})())
{return ret__9100;
} else
{{
var G__9103 = isa_QMARK_.call(null,h,child.call(null,i__9101),parent.call(null,i__9101));
var G__9104 = (i__9101 + 1);
ret__9100 = G__9103;
i__9101 = G__9104;
continue;
}
}
break;
}
} else
{return and__3822__auto____9099;
}
} else
{return and__3822__auto____9098;
}
} else
{return and__3822__auto____9097;
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
var tp__9113 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__9114 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__9115 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__9116 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____9117 = ((cljs.core.contains_QMARK_.call(null,tp__9113.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9115.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9115.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__9113,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9116.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9114,parent,ta__9115),"\uFDD0'descendants":tf__9116.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9115,tag,td__9114)});
})());
if(cljs.core.truth_(or__3824__auto____9117))
{return or__3824__auto____9117;
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
var parentMap__9122 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__9123 = (cljs.core.truth_(parentMap__9122.call(null,tag))?cljs.core.disj.call(null,parentMap__9122.call(null,tag),parent):cljs.core.set([]));
var newParents__9124 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9123))?cljs.core.assoc.call(null,parentMap__9122,tag,childsParents__9123):cljs.core.dissoc.call(null,parentMap__9122,tag));
var deriv_seq__9125 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9105_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9105_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9105_SHARP_),cljs.core.second.call(null,p1__9105_SHARP_)));
}),cljs.core.seq.call(null,newParents__9124)));
if(cljs.core.contains_QMARK_.call(null,parentMap__9122.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9106_SHARP_,p2__9107_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9106_SHARP_,p2__9107_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9125));
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
var xprefs__9133 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____9135 = (cljs.core.truth_((function (){var and__3822__auto____9134 = xprefs__9133;
if(cljs.core.truth_(and__3822__auto____9134))
{return xprefs__9133.call(null,y);
} else
{return and__3822__auto____9134;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____9135))
{return or__3824__auto____9135;
} else
{var or__3824__auto____9137 = (function (){var ps__9136 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__9136) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9136),prefer_table)))
{} else
{}
{
var G__9140 = cljs.core.rest.call(null,ps__9136);
ps__9136 = G__9140;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9137))
{return or__3824__auto____9137;
} else
{var or__3824__auto____9139 = (function (){var ps__9138 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__9138) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9138),y,prefer_table)))
{} else
{}
{
var G__9141 = cljs.core.rest.call(null,ps__9138);
ps__9138 = G__9141;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9139))
{return or__3824__auto____9139;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____9143 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____9143))
{return or__3824__auto____9143;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9161 = cljs.core.reduce.call(null,(function (be,p__9153){
var vec__9154__9155 = p__9153;
var k__9156 = cljs.core.nth.call(null,vec__9154__9155,0,null);
var ___9157 = cljs.core.nth.call(null,vec__9154__9155,1,null);
var e__9158 = vec__9154__9155;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9156))
{var be2__9160 = (cljs.core.truth_((function (){var or__3824__auto____9159 = (be == null);
if(or__3824__auto____9159)
{return or__3824__auto____9159;
} else
{return cljs.core.dominates.call(null,k__9156,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9158:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9160),k__9156,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9156),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__9160)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9160;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__9161))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9161));
return cljs.core.second.call(null,best_entry__9161);
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
if((function (){var and__3822__auto____9165 = mf;
if(and__3822__auto____9165)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____9165;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____9166 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____9166)
{return or__3824__auto____9166;
} else
{var or__3824__auto____9167 = (cljs.core._reset["_"]);
if(or__3824__auto____9167)
{return or__3824__auto____9167;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____9171 = mf;
if(and__3822__auto____9171)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____9171;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____9172 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____9172)
{return or__3824__auto____9172;
} else
{var or__3824__auto____9173 = (cljs.core._add_method["_"]);
if(or__3824__auto____9173)
{return or__3824__auto____9173;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____9177 = mf;
if(and__3822__auto____9177)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____9177;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9178 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____9178)
{return or__3824__auto____9178;
} else
{var or__3824__auto____9179 = (cljs.core._remove_method["_"]);
if(or__3824__auto____9179)
{return or__3824__auto____9179;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____9183 = mf;
if(and__3822__auto____9183)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____9183;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____9184 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____9184)
{return or__3824__auto____9184;
} else
{var or__3824__auto____9185 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____9185)
{return or__3824__auto____9185;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____9189 = mf;
if(and__3822__auto____9189)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____9189;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9190 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____9190)
{return or__3824__auto____9190;
} else
{var or__3824__auto____9191 = (cljs.core._get_method["_"]);
if(or__3824__auto____9191)
{return or__3824__auto____9191;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____9195 = mf;
if(and__3822__auto____9195)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____9195;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____9196 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____9196)
{return or__3824__auto____9196;
} else
{var or__3824__auto____9197 = (cljs.core._methods["_"]);
if(or__3824__auto____9197)
{return or__3824__auto____9197;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____9201 = mf;
if(and__3822__auto____9201)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____9201;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____9202 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____9202)
{return or__3824__auto____9202;
} else
{var or__3824__auto____9203 = (cljs.core._prefers["_"]);
if(or__3824__auto____9203)
{return or__3824__auto____9203;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____9207 = mf;
if(and__3822__auto____9207)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____9207;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____9208 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____9208)
{return or__3824__auto____9208;
} else
{var or__3824__auto____9209 = (cljs.core._dispatch["_"]);
if(or__3824__auto____9209)
{return or__3824__auto____9209;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9212 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9213 = cljs.core._get_method.call(null,mf,dispatch_val__9212);
if(cljs.core.truth_(target_fn__9213))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__9212)].join('')));
}
return cljs.core.apply.call(null,target_fn__9213,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9214 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__9215 = this;
cljs.core.swap_BANG_.call(null,this__9215.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9215.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9215.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9215.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__9216 = this;
cljs.core.swap_BANG_.call(null,this__9216.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9216.method_cache,this__9216.method_table,this__9216.cached_hierarchy,this__9216.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__9217 = this;
cljs.core.swap_BANG_.call(null,this__9217.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9217.method_cache,this__9217.method_table,this__9217.cached_hierarchy,this__9217.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__9218 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9218.cached_hierarchy),cljs.core.deref.call(null,this__9218.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__9218.method_cache,this__9218.method_table,this__9218.cached_hierarchy,this__9218.hierarchy);
}
var temp__3971__auto____9219 = cljs.core.deref.call(null,this__9218.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____9219))
{var target_fn__9220 = temp__3971__auto____9219;
return target_fn__9220;
} else
{var temp__3971__auto____9221 = cljs.core.find_and_cache_best_method.call(null,this__9218.name,dispatch_val,this__9218.hierarchy,this__9218.method_table,this__9218.prefer_table,this__9218.method_cache,this__9218.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____9221))
{var target_fn__9222 = temp__3971__auto____9221;
return target_fn__9222;
} else
{return cljs.core.deref.call(null,this__9218.method_table).call(null,this__9218.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9223 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9223.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__9223.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__9223.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9223.method_cache,this__9223.method_table,this__9223.cached_hierarchy,this__9223.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__9224 = this;
return cljs.core.deref.call(null,this__9224.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__9225 = this;
return cljs.core.deref.call(null,this__9225.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__9226 = this;
return cljs.core.do_dispatch.call(null,mf,this__9226.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9228__delegate = function (_,args){
var self__9227 = this;
return cljs.core._dispatch.call(null,self__9227,args);
};
var G__9228 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9228__delegate.call(this, _, args);
};
G__9228.cljs$lang$maxFixedArity = 1;
G__9228.cljs$lang$applyTo = (function (arglist__9229){
var _ = cljs.core.first(arglist__9229);
var args = cljs.core.rest(arglist__9229);
return G__9228__delegate(_, args);
});
G__9228.cljs$lang$arity$variadic = G__9228__delegate;
return G__9228;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__9230 = this;
return cljs.core._dispatch.call(null,self__9230,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__1913__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9231 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_9233,_){
var this__9232 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__9232.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__9234 = this;
return (this__9234.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__9235 = this;
var this__9236 = this;
return cljs.core.pr_str.call(null,this__9236);
});
cljs.core.UUID;
