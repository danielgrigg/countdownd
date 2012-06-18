goog.provide('clojure.browser.dom');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('goog.dom');
/**
* @param {...*} var_args
*/
clojure.browser.dom.append = (function() { 
var append__delegate = function (parent,children){
cljs.core.apply.call(null,goog.dom.append,parent,children);
return parent;
};
var append = function (parent,var_args){
var children = null;
if (goog.isDef(var_args)) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return append__delegate.call(this, parent, children);
};
append.cljs$lang$maxFixedArity = 1;
append.cljs$lang$applyTo = (function (arglist__12200){
var parent = cljs.core.first(arglist__12200);
var children = cljs.core.rest(arglist__12200);
return append__delegate(parent, children);
});
append.cljs$lang$arity$variadic = append__delegate;
return append;
})()
;
void 0;clojure.browser.dom.DOMBuilder = {};
clojure.browser.dom._element = (function() {
var _element = null;
var _element__1 = (function (this$){
if((function (){var and__3822__auto____12210 = this$;
if(and__3822__auto____12210)
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$1;
} else
{return and__3822__auto____12210;
}
})())
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$1(this$);
} else
{return (function (){var or__3824__auto____12211 = (clojure.browser.dom._element[goog.typeOf(this$)]);
if(or__3824__auto____12211)
{return or__3824__auto____12211;
} else
{var or__3824__auto____12212 = (clojure.browser.dom._element["_"]);
if(or__3824__auto____12212)
{return or__3824__auto____12212;
} else
{throw cljs.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
})().call(null,this$);
}
});
var _element__2 = (function (this$,attrs_or_children){
if((function (){var and__3822__auto____12213 = this$;
if(and__3822__auto____12213)
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$2;
} else
{return and__3822__auto____12213;
}
})())
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$2(this$,attrs_or_children);
} else
{return (function (){var or__3824__auto____12214 = (clojure.browser.dom._element[goog.typeOf(this$)]);
if(or__3824__auto____12214)
{return or__3824__auto____12214;
} else
{var or__3824__auto____12215 = (clojure.browser.dom._element["_"]);
if(or__3824__auto____12215)
{return or__3824__auto____12215;
} else
{throw cljs.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
})().call(null,this$,attrs_or_children);
}
});
var _element__3 = (function (this$,attrs,children){
if((function (){var and__3822__auto____12216 = this$;
if(and__3822__auto____12216)
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$3;
} else
{return and__3822__auto____12216;
}
})())
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$3(this$,attrs,children);
} else
{return (function (){var or__3824__auto____12217 = (clojure.browser.dom._element[goog.typeOf(this$)]);
if(or__3824__auto____12217)
{return or__3824__auto____12217;
} else
{var or__3824__auto____12218 = (clojure.browser.dom._element["_"]);
if(or__3824__auto____12218)
{return or__3824__auto____12218;
} else
{throw cljs.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
})().call(null,this$,attrs,children);
}
});
_element = function(this$,attrs,children){
switch(arguments.length){
case 1:
return _element__1.call(this,this$);
case 2:
return _element__2.call(this,this$,attrs);
case 3:
return _element__3.call(this,this$,attrs,children);
}
throw('Invalid arity: ' + arguments.length);
};
_element.cljs$lang$arity$1 = _element__1;
_element.cljs$lang$arity$2 = _element__2;
_element.cljs$lang$arity$3 = _element__3;
return _element;
})()
;
void 0;/**
* @param {...*} var_args
*/
clojure.browser.dom.log = (function() { 
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
log.cljs$lang$applyTo = (function (arglist__12219){
var args = cljs.core.seq(arglist__12219);;
return log__delegate(args);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
clojure.browser.dom.log_obj = (function log_obj(obj){
return console.log(obj);
});
Element.prototype.clojure$browser$dom$DOMBuilder$ = true;
Element.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = (function (this$){
clojure.browser.dom.log.call(null,"js/Element (-element ",this$,")");
return this$;
});
cljs.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$ = true;
cljs.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = (function (this$){
clojure.browser.dom.log.call(null,"PersistentVector (-element ",this$,")");
var tag__12220 = cljs.core.first.call(null,this$);
var attrs__12221 = cljs.core.second.call(null,this$);
var children__12222 = cljs.core.drop.call(null,2,this$);
if(cljs.core.map_QMARK_.call(null,attrs__12221))
{return clojure.browser.dom._element.call(null,tag__12220,attrs__12221,children__12222);
} else
{return clojure.browser.dom._element.call(null,tag__12220,null,cljs.core.rest.call(null,this$));
}
});
(clojure.browser.dom.DOMBuilder["string"] = true);
(clojure.browser.dom._element["string"] = (function() {
var G__12235 = null;
var G__12235__1 = (function (this$){
clojure.browser.dom.log.call(null,"string (-element ",this$,")");
if(cljs.core.keyword_QMARK_.call(null,this$))
{return goog.dom.createElement(cljs.core.name.call(null,this$));
} else
{if("\uFDD0'else")
{return goog.dom.createTextNode(cljs.core.name.call(null,this$));
} else
{return null;
}
}
});
var G__12235__2 = (function (this$,attrs_or_children){
clojure.browser.dom.log.call(null,"string (-element ",this$," ",attrs_or_children,")");
var attrs__12223 = cljs.core.first.call(null,attrs_or_children);
if(cljs.core.map_QMARK_.call(null,attrs__12223))
{return clojure.browser.dom._element.call(null,this$,attrs__12223,cljs.core.rest.call(null,attrs_or_children));
} else
{return clojure.browser.dom._element.call(null,this$,null,attrs_or_children);
}
});
var G__12235__3 = (function (this$,attrs,children){
clojure.browser.dom.log.call(null,"string (-element ",this$," ",attrs," ",children,")");
var str_attrs__12234 = (cljs.core.truth_((function (){var and__3822__auto____12224 = cljs.core.map_QMARK_.call(null,attrs);
if(and__3822__auto____12224)
{return cljs.core.seq.call(null,attrs);
} else
{return and__3822__auto____12224;
}
})())?cljs.core.reduce.call(null,(function (o,p__12225){
var vec__12226__12227 = p__12225;
var k__12228 = cljs.core.nth.call(null,vec__12226__12227,0,null);
var v__12229 = cljs.core.nth.call(null,vec__12226__12227,1,null);
var o__12230 = (((o == null))?{}:o);
clojure.browser.dom.log.call(null,"o = ",o__12230);
clojure.browser.dom.log.call(null,"k = ",k__12228);
clojure.browser.dom.log.call(null,"v = ",v__12229);
if((function (){var or__3824__auto____12231 = cljs.core.keyword_QMARK_.call(null,k__12228);
if(or__3824__auto____12231)
{return or__3824__auto____12231;
} else
{return cljs.core.string_QMARK_.call(null,k__12228);
}
})())
{var G__12232__12233 = o__12230;
(G__12232__12233[cljs.core.name.call(null,k__12228)] = v__12229);
return G__12232__12233;
} else
{return null;
}
}),{},attrs):null);
clojure.browser.dom.log_obj.call(null,str_attrs__12234);
if(cljs.core.seq.call(null,children))
{return cljs.core.apply.call(null,goog.dom.createDom,cljs.core.name.call(null,this$),str_attrs__12234,cljs.core.map.call(null,clojure.browser.dom._element,children));
} else
{return goog.dom.createDom(cljs.core.name.call(null,this$),str_attrs__12234);
}
});
G__12235 = function(this$,attrs,children){
switch(arguments.length){
case 1:
return G__12235__1.call(this,this$);
case 2:
return G__12235__2.call(this,this$,attrs);
case 3:
return G__12235__3.call(this,this$,attrs,children);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12235;
})()
);
/**
* @param {...*} var_args
*/
clojure.browser.dom.element = (function() {
var element = null;
var element__1 = (function (tag_or_text){
clojure.browser.dom.log.call(null,"(element ",tag_or_text,")");
return clojure.browser.dom._element.call(null,tag_or_text);
});
var element__2 = (function() { 
var G__12238__delegate = function (tag,children){
clojure.browser.dom.log.call(null,"(element ",tag," ",children,")");
var attrs__12237 = cljs.core.first.call(null,children);
if(cljs.core.map_QMARK_.call(null,attrs__12237))
{return clojure.browser.dom._element.call(null,tag,attrs__12237,cljs.core.rest.call(null,children));
} else
{return clojure.browser.dom._element.call(null,tag,null,children);
}
};
var G__12238 = function (tag,var_args){
var children = null;
if (goog.isDef(var_args)) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12238__delegate.call(this, tag, children);
};
G__12238.cljs$lang$maxFixedArity = 1;
G__12238.cljs$lang$applyTo = (function (arglist__12239){
var tag = cljs.core.first(arglist__12239);
var children = cljs.core.rest(arglist__12239);
return G__12238__delegate(tag, children);
});
G__12238.cljs$lang$arity$variadic = G__12238__delegate;
return G__12238;
})()
;
element = function(tag,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return element__1.call(this,tag);
default:
return element__2.cljs$lang$arity$variadic(tag, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
element.cljs$lang$maxFixedArity = 1;
element.cljs$lang$applyTo = element__2.cljs$lang$applyTo;
element.cljs$lang$arity$1 = element__1;
element.cljs$lang$arity$variadic = element__2.cljs$lang$arity$variadic;
return element;
})()
;
/**
* Remove all children from the element with the passed id.
*/
clojure.browser.dom.remove_children = (function remove_children(id){
var parent__12241 = goog.dom.getElement(cljs.core.name.call(null,id));
return goog.dom.removeChildren(parent__12241);
});
clojure.browser.dom.get_element = (function get_element(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
clojure.browser.dom.html__GT_dom = (function html__GT_dom(s){
return goog.dom.htmlToDocumentFragment(s);
});
clojure.browser.dom.insert_at = (function insert_at(parent,child,index){
return goog.dom.insertChildAt(parent,child,index);
});
/**
* Coerce the argument to a dom element if possible.
*/
clojure.browser.dom.ensure_element = (function ensure_element(e){
if(cljs.core.keyword_QMARK_.call(null,e))
{return clojure.browser.dom.get_element.call(null,e);
} else
{if(cljs.core.string_QMARK_.call(null,e))
{return clojure.browser.dom.html__GT_dom.call(null,e);
} else
{if("\uFDD0'else")
{return e;
} else
{return null;
}
}
}
});
/**
* Replace old-node with new-node. old-node can be an element or a
* keyword which is the id of the node to replace.  new-node can be an
* element or an html string.
*/
clojure.browser.dom.replace_node = (function replace_node(old_node,new_node){
var old_node__12244 = clojure.browser.dom.ensure_element.call(null,old_node);
var new_node__12245 = clojure.browser.dom.ensure_element.call(null,new_node);
goog.dom.replaceNode(new_node__12245,old_node__12244);
return new_node__12245;
});
/**
* Set the text content for the passed element returning the
* element. If a keyword is passed in the place of e, the element with
* that id will be used and returned.
*/
clojure.browser.dom.set_text = (function set_text(e,s){
return goog.dom.setTextContent(clojure.browser.dom.ensure_element.call(null,e),s);
});
/**
* Get the value of an element.
*/
clojure.browser.dom.get_value = (function get_value(e){
return clojure.browser.dom.ensure_element.call(null,e).value;
});
/**
* Set properties on an element
*/
clojure.browser.dom.set_properties = (function set_properties(e,m){
return goog.dom.setProperties(clojure.browser.dom.ensure_element.call(null,e),cljs.core.apply.call(null,goog.object.create,cljs.core.interleave.call(null,cljs.core.keys.call(null,m),cljs.core.vals.call(null,m))));
});
/**
* Set the value property for an element.
*/
clojure.browser.dom.set_value = (function set_value(e,v){
return clojure.browser.dom.set_properties.call(null,e,cljs.core.ObjMap.fromObject(["value"],{"value":v}));
});
clojure.browser.dom.click_element = (function click_element(e){
return clojure.browser.dom.ensure_element.call(null,e).click(cljs.core.List.EMPTY);
});
