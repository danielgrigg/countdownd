goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__9642){
var vec__9643__9644 = p__9642;
var k__9645 = cljs.core.nth.call(null,vec__9643__9644,0,null);
var v__9646 = cljs.core.nth.call(null,vec__9643__9644,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9645.toLowerCase()),v__9646], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
void 0;clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3822__auto____9659 = this$;
if(and__3822__auto____9659)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3822__auto____9659;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{return (function (){var or__3824__auto____9660 = (clojure.browser.net.connect[goog.typeOf(this$)]);
if(or__3824__auto____9660)
{return or__3824__auto____9660;
} else
{var or__3824__auto____9661 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____9661)
{return or__3824__auto____9661;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3822__auto____9662 = this$;
if(and__3822__auto____9662)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3822__auto____9662;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{return (function (){var or__3824__auto____9663 = (clojure.browser.net.connect[goog.typeOf(this$)]);
if(or__3824__auto____9663)
{return or__3824__auto____9663;
} else
{var or__3824__auto____9664 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____9664)
{return or__3824__auto____9664;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3822__auto____9665 = this$;
if(and__3822__auto____9665)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3822__auto____9665;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{return (function (){var or__3824__auto____9666 = (clojure.browser.net.connect[goog.typeOf(this$)]);
if(or__3824__auto____9666)
{return or__3824__auto____9666;
} else
{var or__3824__auto____9667 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____9667)
{return or__3824__auto____9667;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3822__auto____9668 = this$;
if(and__3822__auto____9668)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3822__auto____9668;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3824__auto____9669 = (clojure.browser.net.connect[goog.typeOf(this$)]);
if(or__3824__auto____9669)
{return or__3824__auto____9669;
} else
{var or__3824__auto____9670 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____9670)
{return or__3824__auto____9670;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return connect__1.call(this,this$);
case 2:
return connect__2.call(this,this$,opt1);
case 3:
return connect__3.call(this,this$,opt1,opt2);
case 4:
return connect__4.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
connect.cljs$lang$arity$1 = connect__1;
connect.cljs$lang$arity$2 = connect__2;
connect.cljs$lang$arity$3 = connect__3;
connect.cljs$lang$arity$4 = connect__4;
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__2 = (function (this$,opt){
if((function (){var and__3822__auto____9686 = this$;
if(and__3822__auto____9686)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3822__auto____9686;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{return (function (){var or__3824__auto____9687 = (clojure.browser.net.transmit[goog.typeOf(this$)]);
if(or__3824__auto____9687)
{return or__3824__auto____9687;
} else
{var or__3824__auto____9688 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____9688)
{return or__3824__auto____9688;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3822__auto____9689 = this$;
if(and__3822__auto____9689)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3822__auto____9689;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{return (function (){var or__3824__auto____9690 = (clojure.browser.net.transmit[goog.typeOf(this$)]);
if(or__3824__auto____9690)
{return or__3824__auto____9690;
} else
{var or__3824__auto____9691 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____9691)
{return or__3824__auto____9691;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3822__auto____9692 = this$;
if(and__3822__auto____9692)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3822__auto____9692;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{return (function (){var or__3824__auto____9693 = (clojure.browser.net.transmit[goog.typeOf(this$)]);
if(or__3824__auto____9693)
{return or__3824__auto____9693;
} else
{var or__3824__auto____9694 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____9694)
{return or__3824__auto____9694;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3822__auto____9695 = this$;
if(and__3822__auto____9695)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3822__auto____9695;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3824__auto____9696 = (clojure.browser.net.transmit[goog.typeOf(this$)]);
if(or__3824__auto____9696)
{return or__3824__auto____9696;
} else
{var or__3824__auto____9697 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____9697)
{return or__3824__auto____9697;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3822__auto____9698 = this$;
if(and__3822__auto____9698)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3822__auto____9698;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3824__auto____9699 = (clojure.browser.net.transmit[goog.typeOf(this$)]);
if(or__3824__auto____9699)
{return or__3824__auto____9699;
} else
{var or__3824__auto____9700 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____9700)
{return or__3824__auto____9700;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return transmit__2.call(this,this$,opt);
case 3:
return transmit__3.call(this,this$,opt,opt2);
case 4:
return transmit__4.call(this,this$,opt,opt2,opt3);
case 5:
return transmit__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return transmit__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
transmit.cljs$lang$arity$2 = transmit__2;
transmit.cljs$lang$arity$3 = transmit__3;
transmit.cljs$lang$arity$4 = transmit__4;
transmit.cljs$lang$arity$5 = transmit__5;
transmit.cljs$lang$arity$6 = transmit__6;
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if((function (){var and__3822__auto____9704 = this$;
if(and__3822__auto____9704)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3822__auto____9704;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{return (function (){var or__3824__auto____9705 = (clojure.browser.net.close[goog.typeOf(this$)]);
if(or__3824__auto____9705)
{return or__3824__auto____9705;
} else
{var or__3824__auto____9706 = (clojure.browser.net.close["_"]);
if(or__3824__auto____9706)
{return or__3824__auto____9706;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
void 0;goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__9707){
var vec__9708__9709 = p__9707;
var k__9710 = cljs.core.nth.call(null,vec__9708__9709,0,null);
var v__9711 = cljs.core.nth.call(null,vec__9708__9709,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9710.toLowerCase()),v__9711], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__9712){
var vec__9713__9714 = p__9712;
var k__9715 = cljs.core.nth.call(null,vec__9713__9714,0,null);
var v__9716 = cljs.core.nth.call(null,vec__9713__9714,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9715.toLowerCase()),v__9716], true);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
void 0;clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__3 = (function (this$,service_name,fn){
if((function (){var and__3822__auto____9723 = this$;
if(and__3822__auto____9723)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3822__auto____9723;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{return (function (){var or__3824__auto____9724 = (clojure.browser.net.register_service[goog.typeOf(this$)]);
if(or__3824__auto____9724)
{return or__3824__auto____9724;
} else
{var or__3824__auto____9725 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____9725)
{return or__3824__auto____9725;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3822__auto____9726 = this$;
if(and__3822__auto____9726)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3822__auto____9726;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3824__auto____9727 = (clojure.browser.net.register_service[goog.typeOf(this$)]);
if(or__3824__auto____9727)
{return or__3824__auto____9727;
} else
{var or__3824__auto____9728 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____9728)
{return or__3824__auto____9728;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return register_service__3.call(this,this$,service_name,fn);
case 4:
return register_service__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
register_service.cljs$lang$arity$3 = register_service__3;
register_service.cljs$lang$arity$4 = register_service__4;
return register_service;
})()
;
void 0;goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__0 = (function (){
var temp__3974__auto____9740 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__3974__auto____9740))
{var config__9741 = temp__3974__auto____9740;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__9741)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__9742){
var vec__9743__9744 = p__9742;
var k__9745 = cljs.core.nth.call(null,vec__9743__9744,0,null);
var v__9746 = cljs.core.nth.call(null,vec__9743__9744,1,null);
var temp__3971__auto____9747 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__9745,null);
if(cljs.core.truth_(temp__3971__auto____9747))
{var field__9748 = temp__3971__auto____9747;
var G__9749__9750 = sum;
(G__9749__9750[field__9748] = v__9746);
return G__9749__9750;
} else
{return sum;
}
}),{},config)));
});
xpc_connection = function(config){
switch(arguments.length){
case 0:
return xpc_connection__0.call(this);
case 1:
return xpc_connection__1.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
xpc_connection.cljs$lang$arity$0 = xpc_connection__0;
xpc_connection.cljs$lang$arity$1 = xpc_connection__1;
return xpc_connection;
})()
;
