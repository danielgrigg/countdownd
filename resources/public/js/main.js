var COMPILED = false;
var goog = goog || {};
goog.global = this;
goog.DEBUG = true;
goog.LOCALE = "en";
goog.provide = function(name) {
  if(!COMPILED) {
    if(goog.isProvided_(name)) {
      throw Error('Namespace "' + name + '" already declared.');
    }
    delete goog.implicitNamespaces_[name];
    var namespace = name;
    while(namespace = namespace.substring(0, namespace.lastIndexOf("."))) {
      if(goog.getObjectByName(namespace)) {
        break
      }
      goog.implicitNamespaces_[namespace] = true
    }
  }
  goog.exportPath_(name)
};
goog.setTestOnly = function(opt_message) {
  if(COMPILED && !goog.DEBUG) {
    opt_message = opt_message || "";
    throw Error("Importing test-only code into non-debug environment" + opt_message ? ": " + opt_message : ".");
  }
};
if(!COMPILED) {
  goog.isProvided_ = function(name) {
    return!goog.implicitNamespaces_[name] && !!goog.getObjectByName(name)
  };
  goog.implicitNamespaces_ = {}
}
goog.exportPath_ = function(name, opt_object, opt_objectToExportTo) {
  var parts = name.split(".");
  var cur = opt_objectToExportTo || goog.global;
  if(!(parts[0] in cur) && cur.execScript) {
    cur.execScript("var " + parts[0])
  }
  for(var part;parts.length && (part = parts.shift());) {
    if(!parts.length && goog.isDef(opt_object)) {
      cur[part] = opt_object
    }else {
      if(cur[part]) {
        cur = cur[part]
      }else {
        cur = cur[part] = {}
      }
    }
  }
};
goog.getObjectByName = function(name, opt_obj) {
  var parts = name.split(".");
  var cur = opt_obj || goog.global;
  for(var part;part = parts.shift();) {
    if(goog.isDefAndNotNull(cur[part])) {
      cur = cur[part]
    }else {
      return null
    }
  }
  return cur
};
goog.globalize = function(obj, opt_global) {
  var global = opt_global || goog.global;
  for(var x in obj) {
    global[x] = obj[x]
  }
};
goog.addDependency = function(relPath, provides, requires) {
  if(!COMPILED) {
    var provide, require;
    var path = relPath.replace(/\\/g, "/");
    var deps = goog.dependencies_;
    for(var i = 0;provide = provides[i];i++) {
      deps.nameToPath[provide] = path;
      if(!(path in deps.pathToNames)) {
        deps.pathToNames[path] = {}
      }
      deps.pathToNames[path][provide] = true
    }
    for(var j = 0;require = requires[j];j++) {
      if(!(path in deps.requires)) {
        deps.requires[path] = {}
      }
      deps.requires[path][require] = true
    }
  }
};
goog.ENABLE_DEBUG_LOADER = true;
goog.require = function(name) {
  if(!COMPILED) {
    if(goog.isProvided_(name)) {
      return
    }
    if(goog.ENABLE_DEBUG_LOADER) {
      var path = goog.getPathFromDeps_(name);
      if(path) {
        goog.included_[path] = true;
        goog.writeScripts_();
        return
      }
    }
    var errorMessage = "goog.require could not find: " + name;
    if(goog.global.console) {
      goog.global.console["error"](errorMessage)
    }
    throw Error(errorMessage);
  }
};
goog.basePath = "";
goog.global.CLOSURE_BASE_PATH;
goog.global.CLOSURE_NO_DEPS;
goog.global.CLOSURE_IMPORT_SCRIPT;
goog.nullFunction = function() {
};
goog.identityFunction = function(var_args) {
  return arguments[0]
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(ctor) {
  ctor.getInstance = function() {
    return ctor.instance_ || (ctor.instance_ = new ctor)
  }
};
if(!COMPILED && goog.ENABLE_DEBUG_LOADER) {
  goog.included_ = {};
  goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}};
  goog.inHtmlDocument_ = function() {
    var doc = goog.global.document;
    return typeof doc != "undefined" && "write" in doc
  };
  goog.findBasePath_ = function() {
    if(goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH;
      return
    }else {
      if(!goog.inHtmlDocument_()) {
        return
      }
    }
    var doc = goog.global.document;
    var scripts = doc.getElementsByTagName("script");
    for(var i = scripts.length - 1;i >= 0;--i) {
      var src = scripts[i].src;
      var qmark = src.lastIndexOf("?");
      var l = qmark == -1 ? src.length : qmark;
      if(src.substr(l - 7, 7) == "base.js") {
        goog.basePath = src.substr(0, l - 7);
        return
      }
    }
  };
  goog.importScript_ = function(src) {
    var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    if(!goog.dependencies_.written[src] && importScript(src)) {
      goog.dependencies_.written[src] = true
    }
  };
  goog.writeScriptTag_ = function(src) {
    if(goog.inHtmlDocument_()) {
      var doc = goog.global.document;
      doc.write('<script type="text/javascript" src="' + src + '"></' + "script>");
      return true
    }else {
      return false
    }
  };
  goog.writeScripts_ = function() {
    var scripts = [];
    var seenScript = {};
    var deps = goog.dependencies_;
    function visitNode(path) {
      if(path in deps.written) {
        return
      }
      if(path in deps.visited) {
        if(!(path in seenScript)) {
          seenScript[path] = true;
          scripts.push(path)
        }
        return
      }
      deps.visited[path] = true;
      if(path in deps.requires) {
        for(var requireName in deps.requires[path]) {
          if(!goog.isProvided_(requireName)) {
            if(requireName in deps.nameToPath) {
              visitNode(deps.nameToPath[requireName])
            }else {
              throw Error("Undefined nameToPath for " + requireName);
            }
          }
        }
      }
      if(!(path in seenScript)) {
        seenScript[path] = true;
        scripts.push(path)
      }
    }
    for(var path in goog.included_) {
      if(!deps.written[path]) {
        visitNode(path)
      }
    }
    for(var i = 0;i < scripts.length;i++) {
      if(scripts[i]) {
        goog.importScript_(goog.basePath + scripts[i])
      }else {
        throw Error("Undefined script input");
      }
    }
  };
  goog.getPathFromDeps_ = function(rule) {
    if(rule in goog.dependencies_.nameToPath) {
      return goog.dependencies_.nameToPath[rule]
    }else {
      return null
    }
  };
  goog.findBasePath_();
  if(!goog.global.CLOSURE_NO_DEPS) {
    goog.importScript_(goog.basePath + "deps.js")
  }
}
goog.typeOf = function(value) {
  var s = typeof value;
  if(s == "object") {
    if(value) {
      if(value instanceof Array) {
        return"array"
      }else {
        if(value instanceof Object) {
          return s
        }
      }
      var className = Object.prototype.toString.call(value);
      if(className == "[object Window]") {
        return"object"
      }
      if(className == "[object Array]" || typeof value.length == "number" && typeof value.splice != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(className == "[object Function]" || typeof value.call != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(s == "function" && typeof value.call == "undefined") {
      return"object"
    }
  }
  return s
};
goog.propertyIsEnumerableCustom_ = function(object, propName) {
  if(propName in object) {
    for(var key in object) {
      if(key == propName && Object.prototype.hasOwnProperty.call(object, propName)) {
        return true
      }
    }
  }
  return false
};
goog.propertyIsEnumerable_ = function(object, propName) {
  if(object instanceof Object) {
    return Object.prototype.propertyIsEnumerable.call(object, propName)
  }else {
    return goog.propertyIsEnumerableCustom_(object, propName)
  }
};
goog.isDef = function(val) {
  return val !== undefined
};
goog.isNull = function(val) {
  return val === null
};
goog.isDefAndNotNull = function(val) {
  return val != null
};
goog.isArray = function(val) {
  return goog.typeOf(val) == "array"
};
goog.isArrayLike = function(val) {
  var type = goog.typeOf(val);
  return type == "array" || type == "object" && typeof val.length == "number"
};
goog.isDateLike = function(val) {
  return goog.isObject(val) && typeof val.getFullYear == "function"
};
goog.isString = function(val) {
  return typeof val == "string"
};
goog.isBoolean = function(val) {
  return typeof val == "boolean"
};
goog.isNumber = function(val) {
  return typeof val == "number"
};
goog.isFunction = function(val) {
  return goog.typeOf(val) == "function"
};
goog.isObject = function(val) {
  var type = goog.typeOf(val);
  return type == "object" || type == "array" || type == "function"
};
goog.getUid = function(obj) {
  return obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function(obj) {
  if("removeAttribute" in obj) {
    obj.removeAttribute(goog.UID_PROPERTY_)
  }
  try {
    delete obj[goog.UID_PROPERTY_]
  }catch(ex) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(obj) {
  var type = goog.typeOf(obj);
  if(type == "object" || type == "array") {
    if(obj.clone) {
      return obj.clone()
    }
    var clone = type == "array" ? [] : {};
    for(var key in obj) {
      clone[key] = goog.cloneObject(obj[key])
    }
    return clone
  }
  return obj
};
Object.prototype.clone;
goog.bindNative_ = function(fn, selfObj, var_args) {
  return fn.call.apply(fn.bind, arguments)
};
goog.bindJs_ = function(fn, selfObj, var_args) {
  if(!fn) {
    throw new Error;
  }
  if(arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(selfObj, newArgs)
    }
  }else {
    return function() {
      return fn.apply(selfObj, arguments)
    }
  }
};
goog.bind = function(fn, selfObj, var_args) {
  if(Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1) {
    goog.bind = goog.bindNative_
  }else {
    goog.bind = goog.bindJs_
  }
  return goog.bind.apply(null, arguments)
};
goog.partial = function(fn, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = Array.prototype.slice.call(arguments);
    newArgs.unshift.apply(newArgs, args);
    return fn.apply(this, newArgs)
  }
};
goog.mixin = function(target, source) {
  for(var x in source) {
    target[x] = source[x]
  }
};
goog.now = Date.now || function() {
  return+new Date
};
goog.globalEval = function(script) {
  if(goog.global.execScript) {
    goog.global.execScript(script, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(goog.evalWorksForGlobals_ == null) {
        goog.global.eval("var _et_ = 1;");
        if(typeof goog.global["_et_"] != "undefined") {
          delete goog.global["_et_"];
          goog.evalWorksForGlobals_ = true
        }else {
          goog.evalWorksForGlobals_ = false
        }
      }
      if(goog.evalWorksForGlobals_) {
        goog.global.eval(script)
      }else {
        var doc = goog.global.document;
        var scriptElt = doc.createElement("script");
        scriptElt.type = "text/javascript";
        scriptElt.defer = false;
        scriptElt.appendChild(doc.createTextNode(script));
        doc.body.appendChild(scriptElt);
        doc.body.removeChild(scriptElt)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.cssNameMapping_;
goog.cssNameMappingStyle_;
goog.getCssName = function(className, opt_modifier) {
  var getMapping = function(cssName) {
    return goog.cssNameMapping_[cssName] || cssName
  };
  var renameByParts = function(cssName) {
    var parts = cssName.split("-");
    var mapped = [];
    for(var i = 0;i < parts.length;i++) {
      mapped.push(getMapping(parts[i]))
    }
    return mapped.join("-")
  };
  var rename;
  if(goog.cssNameMapping_) {
    rename = goog.cssNameMappingStyle_ == "BY_WHOLE" ? getMapping : renameByParts
  }else {
    rename = function(a) {
      return a
    }
  }
  if(opt_modifier) {
    return className + "-" + rename(opt_modifier)
  }else {
    return rename(className)
  }
};
goog.setCssNameMapping = function(mapping, opt_style) {
  goog.cssNameMapping_ = mapping;
  goog.cssNameMappingStyle_ = opt_style
};
goog.global.CLOSURE_CSS_NAME_MAPPING;
if(!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING) {
  goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING
}
goog.getMsg = function(str, opt_values) {
  var values = opt_values || {};
  for(var key in values) {
    var value = ("" + values[key]).replace(/\$/g, "$$$$");
    str = str.replace(new RegExp("\\{\\$" + key + "\\}", "gi"), value)
  }
  return str
};
goog.exportSymbol = function(publicPath, object, opt_objectToExportTo) {
  goog.exportPath_(publicPath, object, opt_objectToExportTo)
};
goog.exportProperty = function(object, publicName, symbol) {
  object[publicName] = symbol
};
goog.inherits = function(childCtor, parentCtor) {
  function tempCtor() {
  }
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor;
  childCtor.prototype.constructor = childCtor
};
goog.base = function(me, opt_methodName, var_args) {
  var caller = arguments.callee.caller;
  if(caller.superClass_) {
    return caller.superClass_.constructor.apply(me, Array.prototype.slice.call(arguments, 1))
  }
  var args = Array.prototype.slice.call(arguments, 2);
  var foundCaller = false;
  for(var ctor = me.constructor;ctor;ctor = ctor.superClass_ && ctor.superClass_.constructor) {
    if(ctor.prototype[opt_methodName] === caller) {
      foundCaller = true
    }else {
      if(foundCaller) {
        return ctor.prototype[opt_methodName].apply(me, args)
      }
    }
  }
  if(me[opt_methodName] === caller) {
    return me.constructor.prototype[opt_methodName].apply(me, args)
  }else {
    throw Error("goog.base called from a method of one name " + "to a method of a different name");
  }
};
goog.scope = function(fn) {
  fn.call(goog.global)
};
goog.provide("goog.string");
goog.provide("goog.string.Unicode");
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function(str, prefix) {
  return str.lastIndexOf(prefix, 0) == 0
};
goog.string.endsWith = function(str, suffix) {
  var l = str.length - suffix.length;
  return l >= 0 && str.indexOf(suffix, l) == l
};
goog.string.caseInsensitiveStartsWith = function(str, prefix) {
  return goog.string.caseInsensitiveCompare(prefix, str.substr(0, prefix.length)) == 0
};
goog.string.caseInsensitiveEndsWith = function(str, suffix) {
  return goog.string.caseInsensitiveCompare(suffix, str.substr(str.length - suffix.length, suffix.length)) == 0
};
goog.string.subs = function(str, var_args) {
  for(var i = 1;i < arguments.length;i++) {
    var replacement = String(arguments[i]).replace(/\$/g, "$$$$");
    str = str.replace(/\%s/, replacement)
  }
  return str
};
goog.string.collapseWhitespace = function(str) {
  return str.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
};
goog.string.isEmpty = function(str) {
  return/^[\s\xa0]*$/.test(str)
};
goog.string.isEmptySafe = function(str) {
  return goog.string.isEmpty(goog.string.makeSafe(str))
};
goog.string.isBreakingWhitespace = function(str) {
  return!/[^\t\n\r ]/.test(str)
};
goog.string.isAlpha = function(str) {
  return!/[^a-zA-Z]/.test(str)
};
goog.string.isNumeric = function(str) {
  return!/[^0-9]/.test(str)
};
goog.string.isAlphaNumeric = function(str) {
  return!/[^a-zA-Z0-9]/.test(str)
};
goog.string.isSpace = function(ch) {
  return ch == " "
};
goog.string.isUnicodeChar = function(ch) {
  return ch.length == 1 && ch >= " " && ch <= "~" || ch >= "\u0080" && ch <= "\ufffd"
};
goog.string.stripNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)+/g, " ")
};
goog.string.canonicalizeNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)/g, "\n")
};
goog.string.normalizeWhitespace = function(str) {
  return str.replace(/\xa0|\s/g, " ")
};
goog.string.normalizeSpaces = function(str) {
  return str.replace(/\xa0|[ \t]+/g, " ")
};
goog.string.collapseBreakingSpaces = function(str) {
  return str.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
goog.string.trim = function(str) {
  return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
goog.string.trimLeft = function(str) {
  return str.replace(/^[\s\xa0]+/, "")
};
goog.string.trimRight = function(str) {
  return str.replace(/[\s\xa0]+$/, "")
};
goog.string.caseInsensitiveCompare = function(str1, str2) {
  var test1 = String(str1).toLowerCase();
  var test2 = String(str2).toLowerCase();
  if(test1 < test2) {
    return-1
  }else {
    if(test1 == test2) {
      return 0
    }else {
      return 1
    }
  }
};
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare = function(str1, str2) {
  if(str1 == str2) {
    return 0
  }
  if(!str1) {
    return-1
  }
  if(!str2) {
    return 1
  }
  var tokens1 = str1.toLowerCase().match(goog.string.numerateCompareRegExp_);
  var tokens2 = str2.toLowerCase().match(goog.string.numerateCompareRegExp_);
  var count = Math.min(tokens1.length, tokens2.length);
  for(var i = 0;i < count;i++) {
    var a = tokens1[i];
    var b = tokens2[i];
    if(a != b) {
      var num1 = parseInt(a, 10);
      if(!isNaN(num1)) {
        var num2 = parseInt(b, 10);
        if(!isNaN(num2) && num1 - num2) {
          return num1 - num2
        }
      }
      return a < b ? -1 : 1
    }
  }
  if(tokens1.length != tokens2.length) {
    return tokens1.length - tokens2.length
  }
  return str1 < str2 ? -1 : 1
};
goog.string.encodeUriRegExp_ = /^[a-zA-Z0-9\-_.!~*'()]*$/;
goog.string.urlEncode = function(str) {
  str = String(str);
  if(!goog.string.encodeUriRegExp_.test(str)) {
    return encodeURIComponent(str)
  }
  return str
};
goog.string.urlDecode = function(str) {
  return decodeURIComponent(str.replace(/\+/g, " "))
};
goog.string.newLineToBr = function(str, opt_xml) {
  return str.replace(/(\r\n|\r|\n)/g, opt_xml ? "<br />" : "<br>")
};
goog.string.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {
  if(opt_isLikelyToContainHtmlChars) {
    return str.replace(goog.string.amperRe_, "&amp;").replace(goog.string.ltRe_, "&lt;").replace(goog.string.gtRe_, "&gt;").replace(goog.string.quotRe_, "&quot;")
  }else {
    if(!goog.string.allRe_.test(str)) {
      return str
    }
    if(str.indexOf("&") != -1) {
      str = str.replace(goog.string.amperRe_, "&amp;")
    }
    if(str.indexOf("<") != -1) {
      str = str.replace(goog.string.ltRe_, "&lt;")
    }
    if(str.indexOf(">") != -1) {
      str = str.replace(goog.string.gtRe_, "&gt;")
    }
    if(str.indexOf('"') != -1) {
      str = str.replace(goog.string.quotRe_, "&quot;")
    }
    return str
  }
};
goog.string.amperRe_ = /&/g;
goog.string.ltRe_ = /</g;
goog.string.gtRe_ = />/g;
goog.string.quotRe_ = /\"/g;
goog.string.allRe_ = /[&<>\"]/;
goog.string.unescapeEntities = function(str) {
  if(goog.string.contains(str, "&")) {
    if("document" in goog.global) {
      return goog.string.unescapeEntitiesUsingDom_(str)
    }else {
      return goog.string.unescapePureXmlEntities_(str)
    }
  }
  return str
};
goog.string.unescapeEntitiesUsingDom_ = function(str) {
  var seen = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
  var div = document.createElement("div");
  return str.replace(goog.string.HTML_ENTITY_PATTERN_, function(s, entity) {
    var value = seen[s];
    if(value) {
      return value
    }
    if(entity.charAt(0) == "#") {
      var n = Number("0" + entity.substr(1));
      if(!isNaN(n)) {
        value = String.fromCharCode(n)
      }
    }
    if(!value) {
      div.innerHTML = s + " ";
      value = div.firstChild.nodeValue.slice(0, -1)
    }
    return seen[s] = value
  })
};
goog.string.unescapePureXmlEntities_ = function(str) {
  return str.replace(/&([^;]+);/g, function(s, entity) {
    switch(entity) {
      case "amp":
        return"&";
      case "lt":
        return"<";
      case "gt":
        return">";
      case "quot":
        return'"';
      default:
        if(entity.charAt(0) == "#") {
          var n = Number("0" + entity.substr(1));
          if(!isNaN(n)) {
            return String.fromCharCode(n)
          }
        }
        return s
    }
  })
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function(str, opt_xml) {
  return goog.string.newLineToBr(str.replace(/  /g, " &#160;"), opt_xml)
};
goog.string.stripQuotes = function(str, quoteChars) {
  var length = quoteChars.length;
  for(var i = 0;i < length;i++) {
    var quoteChar = length == 1 ? quoteChars : quoteChars.charAt(i);
    if(str.charAt(0) == quoteChar && str.charAt(str.length - 1) == quoteChar) {
      return str.substring(1, str.length - 1)
    }
  }
  return str
};
goog.string.truncate = function(str, chars, opt_protectEscapedCharacters) {
  if(opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str)
  }
  if(str.length > chars) {
    str = str.substring(0, chars - 3) + "..."
  }
  if(opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str)
  }
  return str
};
goog.string.truncateMiddle = function(str, chars, opt_protectEscapedCharacters, opt_trailingChars) {
  if(opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str)
  }
  if(opt_trailingChars && str.length > chars) {
    if(opt_trailingChars > chars) {
      opt_trailingChars = chars
    }
    var endPoint = str.length - opt_trailingChars;
    var startPoint = chars - opt_trailingChars;
    str = str.substring(0, startPoint) + "..." + str.substring(endPoint)
  }else {
    if(str.length > chars) {
      var half = Math.floor(chars / 2);
      var endPos = str.length - half;
      half += chars % 2;
      str = str.substring(0, half) + "..." + str.substring(endPos)
    }
  }
  if(opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str)
  }
  return str
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(s) {
  s = String(s);
  if(s.quote) {
    return s.quote()
  }else {
    var sb = ['"'];
    for(var i = 0;i < s.length;i++) {
      var ch = s.charAt(i);
      var cc = ch.charCodeAt(0);
      sb[i + 1] = goog.string.specialEscapeChars_[ch] || (cc > 31 && cc < 127 ? ch : goog.string.escapeChar(ch))
    }
    sb.push('"');
    return sb.join("")
  }
};
goog.string.escapeString = function(str) {
  var sb = [];
  for(var i = 0;i < str.length;i++) {
    sb[i] = goog.string.escapeChar(str.charAt(i))
  }
  return sb.join("")
};
goog.string.escapeChar = function(c) {
  if(c in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[c]
  }
  if(c in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[c] = goog.string.specialEscapeChars_[c]
  }
  var rv = c;
  var cc = c.charCodeAt(0);
  if(cc > 31 && cc < 127) {
    rv = c
  }else {
    if(cc < 256) {
      rv = "\\x";
      if(cc < 16 || cc > 256) {
        rv += "0"
      }
    }else {
      rv = "\\u";
      if(cc < 4096) {
        rv += "0"
      }
    }
    rv += cc.toString(16).toUpperCase()
  }
  return goog.string.jsEscapeCache_[c] = rv
};
goog.string.toMap = function(s) {
  var rv = {};
  for(var i = 0;i < s.length;i++) {
    rv[s.charAt(i)] = true
  }
  return rv
};
goog.string.contains = function(s, ss) {
  return s.indexOf(ss) != -1
};
goog.string.removeAt = function(s, index, stringLength) {
  var resultStr = s;
  if(index >= 0 && index < s.length && stringLength > 0) {
    resultStr = s.substr(0, index) + s.substr(index + stringLength, s.length - index - stringLength)
  }
  return resultStr
};
goog.string.remove = function(s, ss) {
  var re = new RegExp(goog.string.regExpEscape(ss), "");
  return s.replace(re, "")
};
goog.string.removeAll = function(s, ss) {
  var re = new RegExp(goog.string.regExpEscape(ss), "g");
  return s.replace(re, "")
};
goog.string.regExpEscape = function(s) {
  return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
goog.string.repeat = function(string, length) {
  return(new Array(length + 1)).join(string)
};
goog.string.padNumber = function(num, length, opt_precision) {
  var s = goog.isDef(opt_precision) ? num.toFixed(opt_precision) : String(num);
  var index = s.indexOf(".");
  if(index == -1) {
    index = s.length
  }
  return goog.string.repeat("0", Math.max(0, length - index)) + s
};
goog.string.makeSafe = function(obj) {
  return obj == null ? "" : String(obj)
};
goog.string.buildString = function(var_args) {
  return Array.prototype.join.call(arguments, "")
};
goog.string.getRandomString = function() {
  var x = 2147483648;
  return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ goog.now()).toString(36)
};
goog.string.compareVersions = function(version1, version2) {
  var order = 0;
  var v1Subs = goog.string.trim(String(version1)).split(".");
  var v2Subs = goog.string.trim(String(version2)).split(".");
  var subCount = Math.max(v1Subs.length, v2Subs.length);
  for(var subIdx = 0;order == 0 && subIdx < subCount;subIdx++) {
    var v1Sub = v1Subs[subIdx] || "";
    var v2Sub = v2Subs[subIdx] || "";
    var v1CompParser = new RegExp("(\\d*)(\\D*)", "g");
    var v2CompParser = new RegExp("(\\d*)(\\D*)", "g");
    do {
      var v1Comp = v1CompParser.exec(v1Sub) || ["", "", ""];
      var v2Comp = v2CompParser.exec(v2Sub) || ["", "", ""];
      if(v1Comp[0].length == 0 && v2Comp[0].length == 0) {
        break
      }
      var v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);
      var v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);
      order = goog.string.compareElements_(v1CompNum, v2CompNum) || goog.string.compareElements_(v1Comp[2].length == 0, v2Comp[2].length == 0) || goog.string.compareElements_(v1Comp[2], v2Comp[2])
    }while(order == 0)
  }
  return order
};
goog.string.compareElements_ = function(left, right) {
  if(left < right) {
    return-1
  }else {
    if(left > right) {
      return 1
    }
  }
  return 0
};
goog.string.HASHCODE_MAX_ = 4294967296;
goog.string.hashCode = function(str) {
  var result = 0;
  for(var i = 0;i < str.length;++i) {
    result = 31 * result + str.charCodeAt(i);
    result %= goog.string.HASHCODE_MAX_
  }
  return result
};
goog.string.uniqueStringCounter_ = Math.random() * 2147483648 | 0;
goog.string.createUniqueString = function() {
  return"goog_" + goog.string.uniqueStringCounter_++
};
goog.string.toNumber = function(str) {
  var num = Number(str);
  if(num == 0 && goog.string.isEmpty(str)) {
    return NaN
  }
  return num
};
goog.string.toCamelCaseCache_ = {};
goog.string.toCamelCase = function(str) {
  return goog.string.toCamelCaseCache_[str] || (goog.string.toCamelCaseCache_[str] = String(str).replace(/\-([a-z])/g, function(all, match) {
    return match.toUpperCase()
  }))
};
goog.string.toSelectorCaseCache_ = {};
goog.string.toSelectorCase = function(str) {
  return goog.string.toSelectorCaseCache_[str] || (goog.string.toSelectorCaseCache_[str] = String(str).replace(/([A-Z])/g, "-$1").toLowerCase())
};
goog.provide("goog.userAgent.jscript");
goog.require("goog.string");
goog.userAgent.jscript.ASSUME_NO_JSCRIPT = false;
goog.userAgent.jscript.init_ = function() {
  var hasScriptEngine = "ScriptEngine" in goog.global;
  goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ = hasScriptEngine && goog.global["ScriptEngine"]() == "JScript";
  goog.userAgent.jscript.DETECTED_VERSION_ = goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ ? goog.global["ScriptEngineMajorVersion"]() + "." + goog.global["ScriptEngineMinorVersion"]() + "." + goog.global["ScriptEngineBuildVersion"]() : "0"
};
if(!goog.userAgent.jscript.ASSUME_NO_JSCRIPT) {
  goog.userAgent.jscript.init_()
}
goog.userAgent.jscript.HAS_JSCRIPT = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? false : goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_;
goog.userAgent.jscript.VERSION = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? "0" : goog.userAgent.jscript.DETECTED_VERSION_;
goog.userAgent.jscript.isVersion = function(version) {
  return goog.string.compareVersions(goog.userAgent.jscript.VERSION, version) >= 0
};
goog.provide("goog.string.StringBuffer");
goog.require("goog.userAgent.jscript");
goog.string.StringBuffer = function(opt_a1, var_args) {
  this.buffer_ = goog.userAgent.jscript.HAS_JSCRIPT ? [] : "";
  if(opt_a1 != null) {
    this.append.apply(this, arguments)
  }
};
goog.string.StringBuffer.prototype.set = function(s) {
  this.clear();
  this.append(s)
};
if(goog.userAgent.jscript.HAS_JSCRIPT) {
  goog.string.StringBuffer.prototype.bufferLength_ = 0;
  goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
    if(opt_a2 == null) {
      this.buffer_[this.bufferLength_++] = a1
    }else {
      this.buffer_.push.apply(this.buffer_, arguments);
      this.bufferLength_ = this.buffer_.length
    }
    return this
  }
}else {
  goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
    this.buffer_ += a1;
    if(opt_a2 != null) {
      for(var i = 1;i < arguments.length;i++) {
        this.buffer_ += arguments[i]
      }
    }
    return this
  }
}
goog.string.StringBuffer.prototype.clear = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    this.buffer_.length = 0;
    this.bufferLength_ = 0
  }else {
    this.buffer_ = ""
  }
};
goog.string.StringBuffer.prototype.getLength = function() {
  return this.toString().length
};
goog.string.StringBuffer.prototype.toString = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    var str = this.buffer_.join("");
    this.clear();
    if(str) {
      this.append(str)
    }
    return str
  }else {
    return this.buffer_
  }
};
goog.provide("goog.object");
goog.object.forEach = function(obj, f, opt_obj) {
  for(var key in obj) {
    f.call(opt_obj, obj[key], key, obj)
  }
};
goog.object.filter = function(obj, f, opt_obj) {
  var res = {};
  for(var key in obj) {
    if(f.call(opt_obj, obj[key], key, obj)) {
      res[key] = obj[key]
    }
  }
  return res
};
goog.object.map = function(obj, f, opt_obj) {
  var res = {};
  for(var key in obj) {
    res[key] = f.call(opt_obj, obj[key], key, obj)
  }
  return res
};
goog.object.some = function(obj, f, opt_obj) {
  for(var key in obj) {
    if(f.call(opt_obj, obj[key], key, obj)) {
      return true
    }
  }
  return false
};
goog.object.every = function(obj, f, opt_obj) {
  for(var key in obj) {
    if(!f.call(opt_obj, obj[key], key, obj)) {
      return false
    }
  }
  return true
};
goog.object.getCount = function(obj) {
  var rv = 0;
  for(var key in obj) {
    rv++
  }
  return rv
};
goog.object.getAnyKey = function(obj) {
  for(var key in obj) {
    return key
  }
};
goog.object.getAnyValue = function(obj) {
  for(var key in obj) {
    return obj[key]
  }
};
goog.object.contains = function(obj, val) {
  return goog.object.containsValue(obj, val)
};
goog.object.getValues = function(obj) {
  var res = [];
  var i = 0;
  for(var key in obj) {
    res[i++] = obj[key]
  }
  return res
};
goog.object.getKeys = function(obj) {
  var res = [];
  var i = 0;
  for(var key in obj) {
    res[i++] = key
  }
  return res
};
goog.object.getValueByKeys = function(obj, var_args) {
  var isArrayLike = goog.isArrayLike(var_args);
  var keys = isArrayLike ? var_args : arguments;
  for(var i = isArrayLike ? 0 : 1;i < keys.length;i++) {
    obj = obj[keys[i]];
    if(!goog.isDef(obj)) {
      break
    }
  }
  return obj
};
goog.object.containsKey = function(obj, key) {
  return key in obj
};
goog.object.containsValue = function(obj, val) {
  for(var key in obj) {
    if(obj[key] == val) {
      return true
    }
  }
  return false
};
goog.object.findKey = function(obj, f, opt_this) {
  for(var key in obj) {
    if(f.call(opt_this, obj[key], key, obj)) {
      return key
    }
  }
  return undefined
};
goog.object.findValue = function(obj, f, opt_this) {
  var key = goog.object.findKey(obj, f, opt_this);
  return key && obj[key]
};
goog.object.isEmpty = function(obj) {
  for(var key in obj) {
    return false
  }
  return true
};
goog.object.clear = function(obj) {
  for(var i in obj) {
    delete obj[i]
  }
};
goog.object.remove = function(obj, key) {
  var rv;
  if(rv = key in obj) {
    delete obj[key]
  }
  return rv
};
goog.object.add = function(obj, key, val) {
  if(key in obj) {
    throw Error('The object already contains the key "' + key + '"');
  }
  goog.object.set(obj, key, val)
};
goog.object.get = function(obj, key, opt_val) {
  if(key in obj) {
    return obj[key]
  }
  return opt_val
};
goog.object.set = function(obj, key, value) {
  obj[key] = value
};
goog.object.setIfUndefined = function(obj, key, value) {
  return key in obj ? obj[key] : obj[key] = value
};
goog.object.clone = function(obj) {
  var res = {};
  for(var key in obj) {
    res[key] = obj[key]
  }
  return res
};
goog.object.unsafeClone = function(obj) {
  var type = goog.typeOf(obj);
  if(type == "object" || type == "array") {
    if(obj.clone) {
      return obj.clone()
    }
    var clone = type == "array" ? [] : {};
    for(var key in obj) {
      clone[key] = goog.object.unsafeClone(obj[key])
    }
    return clone
  }
  return obj
};
goog.object.transpose = function(obj) {
  var transposed = {};
  for(var key in obj) {
    transposed[obj[key]] = key
  }
  return transposed
};
goog.object.PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
goog.object.extend = function(target, var_args) {
  var key, source;
  for(var i = 1;i < arguments.length;i++) {
    source = arguments[i];
    for(key in source) {
      target[key] = source[key]
    }
    for(var j = 0;j < goog.object.PROTOTYPE_FIELDS_.length;j++) {
      key = goog.object.PROTOTYPE_FIELDS_[j];
      if(Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }
    }
  }
};
goog.object.create = function(var_args) {
  var argLength = arguments.length;
  if(argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0])
  }
  if(argLength % 2) {
    throw Error("Uneven number of arguments");
  }
  var rv = {};
  for(var i = 0;i < argLength;i += 2) {
    rv[arguments[i]] = arguments[i + 1]
  }
  return rv
};
goog.object.createSet = function(var_args) {
  var argLength = arguments.length;
  if(argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0])
  }
  var rv = {};
  for(var i = 0;i < argLength;i++) {
    rv[arguments[i]] = true
  }
  return rv
};
goog.provide("goog.debug.Error");
goog.debug.Error = function(opt_msg) {
  this.stack = (new Error).stack || "";
  if(opt_msg) {
    this.message = String(opt_msg)
  }
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.provide("goog.asserts");
goog.provide("goog.asserts.AssertionError");
goog.require("goog.debug.Error");
goog.require("goog.string");
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(messagePattern, messageArgs) {
  messageArgs.unshift(messagePattern);
  goog.debug.Error.call(this, goog.string.subs.apply(null, messageArgs));
  messageArgs.shift();
  this.messagePattern = messagePattern
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.doAssertFailure_ = function(defaultMessage, defaultArgs, givenMessage, givenArgs) {
  var message = "Assertion failed";
  if(givenMessage) {
    message += ": " + givenMessage;
    var args = givenArgs
  }else {
    if(defaultMessage) {
      message += ": " + defaultMessage;
      args = defaultArgs
    }
  }
  throw new goog.asserts.AssertionError("" + message, args || []);
};
goog.asserts.assert = function(condition, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !condition) {
    goog.asserts.doAssertFailure_("", null, opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return condition
};
goog.asserts.fail = function(opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS) {
    throw new goog.asserts.AssertionError("Failure" + (opt_message ? ": " + opt_message : ""), Array.prototype.slice.call(arguments, 1));
  }
};
goog.asserts.assertNumber = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isNumber(value)) {
    goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertString = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isString(value)) {
    goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertFunction = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isFunction(value)) {
    goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertObject = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) {
    goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertArray = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isArray(value)) {
    goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertBoolean = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(value)) {
    goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertInstanceof = function(value, type, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {
    goog.asserts.doAssertFailure_("instanceof check failed.", null, opt_message, Array.prototype.slice.call(arguments, 3))
  }
};
goog.provide("goog.array");
goog.provide("goog.array.ArrayLike");
goog.require("goog.asserts");
goog.NATIVE_ARRAY_PROTOTYPES = true;
goog.array.ArrayLike;
goog.array.peek = function(array) {
  return array[array.length - 1]
};
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.indexOf ? function(arr, obj, opt_fromIndex) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call(arr, obj, opt_fromIndex)
} : function(arr, obj, opt_fromIndex) {
  var fromIndex = opt_fromIndex == null ? 0 : opt_fromIndex < 0 ? Math.max(0, arr.length + opt_fromIndex) : opt_fromIndex;
  if(goog.isString(arr)) {
    if(!goog.isString(obj) || obj.length != 1) {
      return-1
    }
    return arr.indexOf(obj, fromIndex)
  }
  for(var i = fromIndex;i < arr.length;i++) {
    if(i in arr && arr[i] === obj) {
      return i
    }
  }
  return-1
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.lastIndexOf ? function(arr, obj, opt_fromIndex) {
  goog.asserts.assert(arr.length != null);
  var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(arr, obj, fromIndex)
} : function(arr, obj, opt_fromIndex) {
  var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
  if(fromIndex < 0) {
    fromIndex = Math.max(0, arr.length + fromIndex)
  }
  if(goog.isString(arr)) {
    if(!goog.isString(obj) || obj.length != 1) {
      return-1
    }
    return arr.lastIndexOf(obj, fromIndex)
  }
  for(var i = fromIndex;i >= 0;i--) {
    if(i in arr && arr[i] === obj) {
      return i
    }
  }
  return-1
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.forEach ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  goog.array.ARRAY_PROTOTYPE_.forEach.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      f.call(opt_obj, arr2[i], i, arr)
    }
  }
};
goog.array.forEachRight = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = l - 1;i >= 0;--i) {
    if(i in arr2) {
      f.call(opt_obj, arr2[i], i, arr)
    }
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.filter ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.filter.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var res = [];
  var resLength = 0;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      var val = arr2[i];
      if(f.call(opt_obj, val, i, arr)) {
        res[resLength++] = val
      }
    }
  }
  return res
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.map ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.map.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var res = new Array(l);
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      res[i] = f.call(opt_obj, arr2[i], i, arr)
    }
  }
  return res
};
goog.array.reduce = function(arr, f, val, opt_obj) {
  if(arr.reduce) {
    if(opt_obj) {
      return arr.reduce(goog.bind(f, opt_obj), val)
    }else {
      return arr.reduce(f, val)
    }
  }
  var rval = val;
  goog.array.forEach(arr, function(val, index) {
    rval = f.call(opt_obj, rval, val, index, arr)
  });
  return rval
};
goog.array.reduceRight = function(arr, f, val, opt_obj) {
  if(arr.reduceRight) {
    if(opt_obj) {
      return arr.reduceRight(goog.bind(f, opt_obj), val)
    }else {
      return arr.reduceRight(f, val)
    }
  }
  var rval = val;
  goog.array.forEachRight(arr, function(val, index) {
    rval = f.call(opt_obj, rval, val, index, arr)
  });
  return rval
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.some ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.some.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return true
    }
  }
  return false
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.every ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.every.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && !f.call(opt_obj, arr2[i], i, arr)) {
      return false
    }
  }
  return true
};
goog.array.find = function(arr, f, opt_obj) {
  var i = goog.array.findIndex(arr, f, opt_obj);
  return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i]
};
goog.array.findIndex = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return i
    }
  }
  return-1
};
goog.array.findRight = function(arr, f, opt_obj) {
  var i = goog.array.findIndexRight(arr, f, opt_obj);
  return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i]
};
goog.array.findIndexRight = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = l - 1;i >= 0;i--) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return i
    }
  }
  return-1
};
goog.array.contains = function(arr, obj) {
  return goog.array.indexOf(arr, obj) >= 0
};
goog.array.isEmpty = function(arr) {
  return arr.length == 0
};
goog.array.clear = function(arr) {
  if(!goog.isArray(arr)) {
    for(var i = arr.length - 1;i >= 0;i--) {
      delete arr[i]
    }
  }
  arr.length = 0
};
goog.array.insert = function(arr, obj) {
  if(!goog.array.contains(arr, obj)) {
    arr.push(obj)
  }
};
goog.array.insertAt = function(arr, obj, opt_i) {
  goog.array.splice(arr, opt_i, 0, obj)
};
goog.array.insertArrayAt = function(arr, elementsToAdd, opt_i) {
  goog.partial(goog.array.splice, arr, opt_i, 0).apply(null, elementsToAdd)
};
goog.array.insertBefore = function(arr, obj, opt_obj2) {
  var i;
  if(arguments.length == 2 || (i = goog.array.indexOf(arr, opt_obj2)) < 0) {
    arr.push(obj)
  }else {
    goog.array.insertAt(arr, obj, i)
  }
};
goog.array.remove = function(arr, obj) {
  var i = goog.array.indexOf(arr, obj);
  var rv;
  if(rv = i >= 0) {
    goog.array.removeAt(arr, i)
  }
  return rv
};
goog.array.removeAt = function(arr, i) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.splice.call(arr, i, 1).length == 1
};
goog.array.removeIf = function(arr, f, opt_obj) {
  var i = goog.array.findIndex(arr, f, opt_obj);
  if(i >= 0) {
    goog.array.removeAt(arr, i);
    return true
  }
  return false
};
goog.array.concat = function(var_args) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
};
goog.array.clone = function(arr) {
  if(goog.isArray(arr)) {
    return goog.array.concat(arr)
  }else {
    var rv = [];
    for(var i = 0, len = arr.length;i < len;i++) {
      rv[i] = arr[i]
    }
    return rv
  }
};
goog.array.toArray = function(object) {
  if(goog.isArray(object)) {
    return goog.array.concat(object)
  }
  return goog.array.clone(object)
};
goog.array.extend = function(arr1, var_args) {
  for(var i = 1;i < arguments.length;i++) {
    var arr2 = arguments[i];
    var isArrayLike;
    if(goog.isArray(arr2) || (isArrayLike = goog.isArrayLike(arr2)) && arr2.hasOwnProperty("callee")) {
      arr1.push.apply(arr1, arr2)
    }else {
      if(isArrayLike) {
        var len1 = arr1.length;
        var len2 = arr2.length;
        for(var j = 0;j < len2;j++) {
          arr1[len1 + j] = arr2[j]
        }
      }else {
        arr1.push(arr2)
      }
    }
  }
};
goog.array.splice = function(arr, index, howMany, var_args) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply(arr, goog.array.slice(arguments, 1))
};
goog.array.slice = function(arr, start, opt_end) {
  goog.asserts.assert(arr.length != null);
  if(arguments.length <= 2) {
    return goog.array.ARRAY_PROTOTYPE_.slice.call(arr, start)
  }else {
    return goog.array.ARRAY_PROTOTYPE_.slice.call(arr, start, opt_end)
  }
};
goog.array.removeDuplicates = function(arr, opt_rv) {
  var returnArray = opt_rv || arr;
  var seen = {}, cursorInsert = 0, cursorRead = 0;
  while(cursorRead < arr.length) {
    var current = arr[cursorRead++];
    var key = goog.isObject(current) ? "o" + goog.getUid(current) : (typeof current).charAt(0) + current;
    if(!Object.prototype.hasOwnProperty.call(seen, key)) {
      seen[key] = true;
      returnArray[cursorInsert++] = current
    }
  }
  returnArray.length = cursorInsert
};
goog.array.binarySearch = function(arr, target, opt_compareFn) {
  return goog.array.binarySearch_(arr, opt_compareFn || goog.array.defaultCompare, false, target)
};
goog.array.binarySelect = function(arr, evaluator, opt_obj) {
  return goog.array.binarySearch_(arr, evaluator, true, undefined, opt_obj)
};
goog.array.binarySearch_ = function(arr, compareFn, isEvaluator, opt_target, opt_selfObj) {
  var left = 0;
  var right = arr.length;
  var found;
  while(left < right) {
    var middle = left + right >> 1;
    var compareResult;
    if(isEvaluator) {
      compareResult = compareFn.call(opt_selfObj, arr[middle], middle, arr)
    }else {
      compareResult = compareFn(opt_target, arr[middle])
    }
    if(compareResult > 0) {
      left = middle + 1
    }else {
      right = middle;
      found = !compareResult
    }
  }
  return found ? left : ~left
};
goog.array.sort = function(arr, opt_compareFn) {
  goog.asserts.assert(arr.length != null);
  goog.array.ARRAY_PROTOTYPE_.sort.call(arr, opt_compareFn || goog.array.defaultCompare)
};
goog.array.stableSort = function(arr, opt_compareFn) {
  for(var i = 0;i < arr.length;i++) {
    arr[i] = {index:i, value:arr[i]}
  }
  var valueCompareFn = opt_compareFn || goog.array.defaultCompare;
  function stableCompareFn(obj1, obj2) {
    return valueCompareFn(obj1.value, obj2.value) || obj1.index - obj2.index
  }
  goog.array.sort(arr, stableCompareFn);
  for(var i = 0;i < arr.length;i++) {
    arr[i] = arr[i].value
  }
};
goog.array.sortObjectsByKey = function(arr, key, opt_compareFn) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  goog.array.sort(arr, function(a, b) {
    return compare(a[key], b[key])
  })
};
goog.array.isSorted = function(arr, opt_compareFn, opt_strict) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  for(var i = 1;i < arr.length;i++) {
    var compareResult = compare(arr[i - 1], arr[i]);
    if(compareResult > 0 || compareResult == 0 && opt_strict) {
      return false
    }
  }
  return true
};
goog.array.equals = function(arr1, arr2, opt_equalsFn) {
  if(!goog.isArrayLike(arr1) || !goog.isArrayLike(arr2) || arr1.length != arr2.length) {
    return false
  }
  var l = arr1.length;
  var equalsFn = opt_equalsFn || goog.array.defaultCompareEquality;
  for(var i = 0;i < l;i++) {
    if(!equalsFn(arr1[i], arr2[i])) {
      return false
    }
  }
  return true
};
goog.array.compare = function(arr1, arr2, opt_equalsFn) {
  return goog.array.equals(arr1, arr2, opt_equalsFn)
};
goog.array.compare3 = function(arr1, arr2, opt_compareFn) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  var l = Math.min(arr1.length, arr2.length);
  for(var i = 0;i < l;i++) {
    var result = compare(arr1[i], arr2[i]);
    if(result != 0) {
      return result
    }
  }
  return goog.array.defaultCompare(arr1.length, arr2.length)
};
goog.array.defaultCompare = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
};
goog.array.defaultCompareEquality = function(a, b) {
  return a === b
};
goog.array.binaryInsert = function(array, value, opt_compareFn) {
  var index = goog.array.binarySearch(array, value, opt_compareFn);
  if(index < 0) {
    goog.array.insertAt(array, value, -(index + 1));
    return true
  }
  return false
};
goog.array.binaryRemove = function(array, value, opt_compareFn) {
  var index = goog.array.binarySearch(array, value, opt_compareFn);
  return index >= 0 ? goog.array.removeAt(array, index) : false
};
goog.array.bucket = function(array, sorter) {
  var buckets = {};
  for(var i = 0;i < array.length;i++) {
    var value = array[i];
    var key = sorter(value, i, array);
    if(goog.isDef(key)) {
      var bucket = buckets[key] || (buckets[key] = []);
      bucket.push(value)
    }
  }
  return buckets
};
goog.array.repeat = function(value, n) {
  var array = [];
  for(var i = 0;i < n;i++) {
    array[i] = value
  }
  return array
};
goog.array.flatten = function(var_args) {
  var result = [];
  for(var i = 0;i < arguments.length;i++) {
    var element = arguments[i];
    if(goog.isArray(element)) {
      result.push.apply(result, goog.array.flatten.apply(null, element))
    }else {
      result.push(element)
    }
  }
  return result
};
goog.array.rotate = function(array, n) {
  goog.asserts.assert(array.length != null);
  if(array.length) {
    n %= array.length;
    if(n > 0) {
      goog.array.ARRAY_PROTOTYPE_.unshift.apply(array, array.splice(-n, n))
    }else {
      if(n < 0) {
        goog.array.ARRAY_PROTOTYPE_.push.apply(array, array.splice(0, -n))
      }
    }
  }
  return array
};
goog.array.zip = function(var_args) {
  if(!arguments.length) {
    return[]
  }
  var result = [];
  for(var i = 0;true;i++) {
    var value = [];
    for(var j = 0;j < arguments.length;j++) {
      var arr = arguments[j];
      if(i >= arr.length) {
        return result
      }
      value.push(arr[i])
    }
    result.push(value)
  }
};
goog.array.shuffle = function(arr, opt_randFn) {
  var randFn = opt_randFn || Math.random;
  for(var i = arr.length - 1;i > 0;i--) {
    var j = Math.floor(randFn() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp
  }
};
goog.provide("cljs.core");
goog.require("goog.string");
goog.require("goog.string.StringBuffer");
goog.require("goog.object");
goog.require("goog.array");
cljs.core._STAR_unchecked_if_STAR_ = false;
cljs.core._STAR_print_fn_STAR_ = function _STAR_print_fn_STAR_(_) {
  throw new Error("No *print-fn* fn set for evaluation environment");
};
void 0;
void 0;
void 0;
cljs.core.truth_ = function truth_(x) {
  return x != null && x !== false
};
void 0;
cljs.core.type_satisfies_ = function type_satisfies_(p, x) {
  if(p[goog.typeOf.call(null, x)]) {
    return true
  }else {
    if(p["_"]) {
      return true
    }else {
      if("\ufdd0'else") {
        return false
      }else {
        return null
      }
    }
  }
};
void 0;
cljs.core.is_proto_ = function is_proto_(x) {
  return x.constructor.prototype === x
};
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = function missing_protocol(proto, obj) {
  return Error("No protocol method " + proto + " defined for type " + goog.typeOf.call(null, obj) + ": " + obj)
};
cljs.core.aclone = function aclone(array_like) {
  return Array.prototype.slice.call(array_like)
};
cljs.core.array = function array(var_args) {
  return Array.prototype.slice.call(arguments)
};
cljs.core.make_array = function() {
  var make_array = null;
  var make_array__1 = function(size) {
    return new Array(size)
  };
  var make_array__2 = function(type, size) {
    return make_array.call(null, size)
  };
  make_array = function(type, size) {
    switch(arguments.length) {
      case 1:
        return make_array__1.call(this, type);
      case 2:
        return make_array__2.call(this, type, size)
    }
    throw"Invalid arity: " + arguments.length;
  };
  make_array.cljs$lang$arity$1 = make_array__1;
  make_array.cljs$lang$arity$2 = make_array__2;
  return make_array
}();
void 0;
cljs.core.aget = function() {
  var aget = null;
  var aget__2 = function(array, i) {
    return array[i]
  };
  var aget__3 = function() {
    var G__4475__delegate = function(array, i, idxs) {
      return cljs.core.apply.call(null, aget, aget.call(null, array, i), idxs)
    };
    var G__4475 = function(array, i, var_args) {
      var idxs = null;
      if(goog.isDef(var_args)) {
        idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4475__delegate.call(this, array, i, idxs)
    };
    G__4475.cljs$lang$maxFixedArity = 2;
    G__4475.cljs$lang$applyTo = function(arglist__4476) {
      var array = cljs.core.first(arglist__4476);
      var i = cljs.core.first(cljs.core.next(arglist__4476));
      var idxs = cljs.core.rest(cljs.core.next(arglist__4476));
      return G__4475__delegate(array, i, idxs)
    };
    G__4475.cljs$lang$arity$variadic = G__4475__delegate;
    return G__4475
  }();
  aget = function(array, i, var_args) {
    var idxs = var_args;
    switch(arguments.length) {
      case 2:
        return aget__2.call(this, array, i);
      default:
        return aget__3.cljs$lang$arity$variadic(array, i, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  aget.cljs$lang$maxFixedArity = 2;
  aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
  aget.cljs$lang$arity$2 = aget__2;
  aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
  return aget
}();
cljs.core.aset = function aset(array, i, val) {
  return array[i] = val
};
cljs.core.alength = function alength(array) {
  return array.length
};
void 0;
cljs.core.into_array = function() {
  var into_array = null;
  var into_array__1 = function(aseq) {
    return into_array.call(null, null, aseq)
  };
  var into_array__2 = function(type, aseq) {
    return cljs.core.reduce.call(null, function(a, x) {
      a.push(x);
      return a
    }, [], aseq)
  };
  into_array = function(type, aseq) {
    switch(arguments.length) {
      case 1:
        return into_array__1.call(this, type);
      case 2:
        return into_array__2.call(this, type, aseq)
    }
    throw"Invalid arity: " + arguments.length;
  };
  into_array.cljs$lang$arity$1 = into_array__1;
  into_array.cljs$lang$arity$2 = into_array__2;
  return into_array
}();
void 0;
cljs.core.IFn = {};
cljs.core._invoke = function() {
  var _invoke = null;
  var _invoke__1 = function(this$) {
    if(function() {
      var and__3822__auto____4477 = this$;
      if(and__3822__auto____4477) {
        return this$.cljs$core$IFn$_invoke$arity$1
      }else {
        return and__3822__auto____4477
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$1(this$)
    }else {
      return function() {
        var or__3824__auto____4478 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4478) {
          return or__3824__auto____4478
        }else {
          var or__3824__auto____4479 = cljs.core._invoke["_"];
          if(or__3824__auto____4479) {
            return or__3824__auto____4479
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$)
    }
  };
  var _invoke__2 = function(this$, a) {
    if(function() {
      var and__3822__auto____4480 = this$;
      if(and__3822__auto____4480) {
        return this$.cljs$core$IFn$_invoke$arity$2
      }else {
        return and__3822__auto____4480
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$2(this$, a)
    }else {
      return function() {
        var or__3824__auto____4481 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4481) {
          return or__3824__auto____4481
        }else {
          var or__3824__auto____4482 = cljs.core._invoke["_"];
          if(or__3824__auto____4482) {
            return or__3824__auto____4482
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a)
    }
  };
  var _invoke__3 = function(this$, a, b) {
    if(function() {
      var and__3822__auto____4483 = this$;
      if(and__3822__auto____4483) {
        return this$.cljs$core$IFn$_invoke$arity$3
      }else {
        return and__3822__auto____4483
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$3(this$, a, b)
    }else {
      return function() {
        var or__3824__auto____4484 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4484) {
          return or__3824__auto____4484
        }else {
          var or__3824__auto____4485 = cljs.core._invoke["_"];
          if(or__3824__auto____4485) {
            return or__3824__auto____4485
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b)
    }
  };
  var _invoke__4 = function(this$, a, b, c) {
    if(function() {
      var and__3822__auto____4486 = this$;
      if(and__3822__auto____4486) {
        return this$.cljs$core$IFn$_invoke$arity$4
      }else {
        return and__3822__auto____4486
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$4(this$, a, b, c)
    }else {
      return function() {
        var or__3824__auto____4487 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4487) {
          return or__3824__auto____4487
        }else {
          var or__3824__auto____4488 = cljs.core._invoke["_"];
          if(or__3824__auto____4488) {
            return or__3824__auto____4488
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c)
    }
  };
  var _invoke__5 = function(this$, a, b, c, d) {
    if(function() {
      var and__3822__auto____4489 = this$;
      if(and__3822__auto____4489) {
        return this$.cljs$core$IFn$_invoke$arity$5
      }else {
        return and__3822__auto____4489
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$5(this$, a, b, c, d)
    }else {
      return function() {
        var or__3824__auto____4490 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4490) {
          return or__3824__auto____4490
        }else {
          var or__3824__auto____4491 = cljs.core._invoke["_"];
          if(or__3824__auto____4491) {
            return or__3824__auto____4491
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d)
    }
  };
  var _invoke__6 = function(this$, a, b, c, d, e) {
    if(function() {
      var and__3822__auto____4492 = this$;
      if(and__3822__auto____4492) {
        return this$.cljs$core$IFn$_invoke$arity$6
      }else {
        return and__3822__auto____4492
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$6(this$, a, b, c, d, e)
    }else {
      return function() {
        var or__3824__auto____4493 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4493) {
          return or__3824__auto____4493
        }else {
          var or__3824__auto____4494 = cljs.core._invoke["_"];
          if(or__3824__auto____4494) {
            return or__3824__auto____4494
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e)
    }
  };
  var _invoke__7 = function(this$, a, b, c, d, e, f) {
    if(function() {
      var and__3822__auto____4495 = this$;
      if(and__3822__auto____4495) {
        return this$.cljs$core$IFn$_invoke$arity$7
      }else {
        return and__3822__auto____4495
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$7(this$, a, b, c, d, e, f)
    }else {
      return function() {
        var or__3824__auto____4496 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4496) {
          return or__3824__auto____4496
        }else {
          var or__3824__auto____4497 = cljs.core._invoke["_"];
          if(or__3824__auto____4497) {
            return or__3824__auto____4497
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f)
    }
  };
  var _invoke__8 = function(this$, a, b, c, d, e, f, g) {
    if(function() {
      var and__3822__auto____4498 = this$;
      if(and__3822__auto____4498) {
        return this$.cljs$core$IFn$_invoke$arity$8
      }else {
        return and__3822__auto____4498
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$8(this$, a, b, c, d, e, f, g)
    }else {
      return function() {
        var or__3824__auto____4499 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4499) {
          return or__3824__auto____4499
        }else {
          var or__3824__auto____4500 = cljs.core._invoke["_"];
          if(or__3824__auto____4500) {
            return or__3824__auto____4500
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g)
    }
  };
  var _invoke__9 = function(this$, a, b, c, d, e, f, g, h) {
    if(function() {
      var and__3822__auto____4501 = this$;
      if(and__3822__auto____4501) {
        return this$.cljs$core$IFn$_invoke$arity$9
      }else {
        return and__3822__auto____4501
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$9(this$, a, b, c, d, e, f, g, h)
    }else {
      return function() {
        var or__3824__auto____4502 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4502) {
          return or__3824__auto____4502
        }else {
          var or__3824__auto____4503 = cljs.core._invoke["_"];
          if(or__3824__auto____4503) {
            return or__3824__auto____4503
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h)
    }
  };
  var _invoke__10 = function(this$, a, b, c, d, e, f, g, h, i) {
    if(function() {
      var and__3822__auto____4504 = this$;
      if(and__3822__auto____4504) {
        return this$.cljs$core$IFn$_invoke$arity$10
      }else {
        return and__3822__auto____4504
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$10(this$, a, b, c, d, e, f, g, h, i)
    }else {
      return function() {
        var or__3824__auto____4505 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4505) {
          return or__3824__auto____4505
        }else {
          var or__3824__auto____4506 = cljs.core._invoke["_"];
          if(or__3824__auto____4506) {
            return or__3824__auto____4506
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i)
    }
  };
  var _invoke__11 = function(this$, a, b, c, d, e, f, g, h, i, j) {
    if(function() {
      var and__3822__auto____4507 = this$;
      if(and__3822__auto____4507) {
        return this$.cljs$core$IFn$_invoke$arity$11
      }else {
        return and__3822__auto____4507
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$11(this$, a, b, c, d, e, f, g, h, i, j)
    }else {
      return function() {
        var or__3824__auto____4508 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4508) {
          return or__3824__auto____4508
        }else {
          var or__3824__auto____4509 = cljs.core._invoke["_"];
          if(or__3824__auto____4509) {
            return or__3824__auto____4509
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j)
    }
  };
  var _invoke__12 = function(this$, a, b, c, d, e, f, g, h, i, j, k) {
    if(function() {
      var and__3822__auto____4510 = this$;
      if(and__3822__auto____4510) {
        return this$.cljs$core$IFn$_invoke$arity$12
      }else {
        return and__3822__auto____4510
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$12(this$, a, b, c, d, e, f, g, h, i, j, k)
    }else {
      return function() {
        var or__3824__auto____4511 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4511) {
          return or__3824__auto____4511
        }else {
          var or__3824__auto____4512 = cljs.core._invoke["_"];
          if(or__3824__auto____4512) {
            return or__3824__auto____4512
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k)
    }
  };
  var _invoke__13 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l) {
    if(function() {
      var and__3822__auto____4513 = this$;
      if(and__3822__auto____4513) {
        return this$.cljs$core$IFn$_invoke$arity$13
      }else {
        return and__3822__auto____4513
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$13(this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }else {
      return function() {
        var or__3824__auto____4514 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4514) {
          return or__3824__auto____4514
        }else {
          var or__3824__auto____4515 = cljs.core._invoke["_"];
          if(or__3824__auto____4515) {
            return or__3824__auto____4515
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }
  };
  var _invoke__14 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m) {
    if(function() {
      var and__3822__auto____4516 = this$;
      if(and__3822__auto____4516) {
        return this$.cljs$core$IFn$_invoke$arity$14
      }else {
        return and__3822__auto____4516
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$14(this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }else {
      return function() {
        var or__3824__auto____4517 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4517) {
          return or__3824__auto____4517
        }else {
          var or__3824__auto____4518 = cljs.core._invoke["_"];
          if(or__3824__auto____4518) {
            return or__3824__auto____4518
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }
  };
  var _invoke__15 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    if(function() {
      var and__3822__auto____4519 = this$;
      if(and__3822__auto____4519) {
        return this$.cljs$core$IFn$_invoke$arity$15
      }else {
        return and__3822__auto____4519
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$15(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }else {
      return function() {
        var or__3824__auto____4520 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4520) {
          return or__3824__auto____4520
        }else {
          var or__3824__auto____4521 = cljs.core._invoke["_"];
          if(or__3824__auto____4521) {
            return or__3824__auto____4521
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }
  };
  var _invoke__16 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    if(function() {
      var and__3822__auto____4522 = this$;
      if(and__3822__auto____4522) {
        return this$.cljs$core$IFn$_invoke$arity$16
      }else {
        return and__3822__auto____4522
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$16(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }else {
      return function() {
        var or__3824__auto____4523 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4523) {
          return or__3824__auto____4523
        }else {
          var or__3824__auto____4524 = cljs.core._invoke["_"];
          if(or__3824__auto____4524) {
            return or__3824__auto____4524
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }
  };
  var _invoke__17 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    if(function() {
      var and__3822__auto____4525 = this$;
      if(and__3822__auto____4525) {
        return this$.cljs$core$IFn$_invoke$arity$17
      }else {
        return and__3822__auto____4525
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$17(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }else {
      return function() {
        var or__3824__auto____4526 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4526) {
          return or__3824__auto____4526
        }else {
          var or__3824__auto____4527 = cljs.core._invoke["_"];
          if(or__3824__auto____4527) {
            return or__3824__auto____4527
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }
  };
  var _invoke__18 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    if(function() {
      var and__3822__auto____4528 = this$;
      if(and__3822__auto____4528) {
        return this$.cljs$core$IFn$_invoke$arity$18
      }else {
        return and__3822__auto____4528
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$18(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }else {
      return function() {
        var or__3824__auto____4529 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4529) {
          return or__3824__auto____4529
        }else {
          var or__3824__auto____4530 = cljs.core._invoke["_"];
          if(or__3824__auto____4530) {
            return or__3824__auto____4530
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }
  };
  var _invoke__19 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s) {
    if(function() {
      var and__3822__auto____4531 = this$;
      if(and__3822__auto____4531) {
        return this$.cljs$core$IFn$_invoke$arity$19
      }else {
        return and__3822__auto____4531
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$19(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }else {
      return function() {
        var or__3824__auto____4532 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4532) {
          return or__3824__auto____4532
        }else {
          var or__3824__auto____4533 = cljs.core._invoke["_"];
          if(or__3824__auto____4533) {
            return or__3824__auto____4533
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }
  };
  var _invoke__20 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t) {
    if(function() {
      var and__3822__auto____4534 = this$;
      if(and__3822__auto____4534) {
        return this$.cljs$core$IFn$_invoke$arity$20
      }else {
        return and__3822__auto____4534
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$20(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }else {
      return function() {
        var or__3824__auto____4535 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4535) {
          return or__3824__auto____4535
        }else {
          var or__3824__auto____4536 = cljs.core._invoke["_"];
          if(or__3824__auto____4536) {
            return or__3824__auto____4536
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }
  };
  var _invoke__21 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest) {
    if(function() {
      var and__3822__auto____4537 = this$;
      if(and__3822__auto____4537) {
        return this$.cljs$core$IFn$_invoke$arity$21
      }else {
        return and__3822__auto____4537
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$21(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }else {
      return function() {
        var or__3824__auto____4538 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(or__3824__auto____4538) {
          return or__3824__auto____4538
        }else {
          var or__3824__auto____4539 = cljs.core._invoke["_"];
          if(or__3824__auto____4539) {
            return or__3824__auto____4539
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }
  };
  _invoke = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest) {
    switch(arguments.length) {
      case 1:
        return _invoke__1.call(this, this$);
      case 2:
        return _invoke__2.call(this, this$, a);
      case 3:
        return _invoke__3.call(this, this$, a, b);
      case 4:
        return _invoke__4.call(this, this$, a, b, c);
      case 5:
        return _invoke__5.call(this, this$, a, b, c, d);
      case 6:
        return _invoke__6.call(this, this$, a, b, c, d, e);
      case 7:
        return _invoke__7.call(this, this$, a, b, c, d, e, f);
      case 8:
        return _invoke__8.call(this, this$, a, b, c, d, e, f, g);
      case 9:
        return _invoke__9.call(this, this$, a, b, c, d, e, f, g, h);
      case 10:
        return _invoke__10.call(this, this$, a, b, c, d, e, f, g, h, i);
      case 11:
        return _invoke__11.call(this, this$, a, b, c, d, e, f, g, h, i, j);
      case 12:
        return _invoke__12.call(this, this$, a, b, c, d, e, f, g, h, i, j, k);
      case 13:
        return _invoke__13.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l);
      case 14:
        return _invoke__14.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m);
      case 15:
        return _invoke__15.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n);
      case 16:
        return _invoke__16.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
      case 17:
        return _invoke__17.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p);
      case 18:
        return _invoke__18.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q);
      case 19:
        return _invoke__19.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s);
      case 20:
        return _invoke__20.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t);
      case 21:
        return _invoke__21.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }
    throw"Invalid arity: " + arguments.length;
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
  return _invoke
}();
void 0;
void 0;
cljs.core.ICounted = {};
cljs.core._count = function _count(coll) {
  if(function() {
    var and__3822__auto____4540 = coll;
    if(and__3822__auto____4540) {
      return coll.cljs$core$ICounted$_count$arity$1
    }else {
      return and__3822__auto____4540
    }
  }()) {
    return coll.cljs$core$ICounted$_count$arity$1(coll)
  }else {
    return function() {
      var or__3824__auto____4541 = cljs.core._count[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4541) {
        return or__3824__auto____4541
      }else {
        var or__3824__auto____4542 = cljs.core._count["_"];
        if(or__3824__auto____4542) {
          return or__3824__auto____4542
        }else {
          throw cljs.core.missing_protocol.call(null, "ICounted.-count", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.IEmptyableCollection = {};
cljs.core._empty = function _empty(coll) {
  if(function() {
    var and__3822__auto____4543 = coll;
    if(and__3822__auto____4543) {
      return coll.cljs$core$IEmptyableCollection$_empty$arity$1
    }else {
      return and__3822__auto____4543
    }
  }()) {
    return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll)
  }else {
    return function() {
      var or__3824__auto____4544 = cljs.core._empty[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4544) {
        return or__3824__auto____4544
      }else {
        var or__3824__auto____4545 = cljs.core._empty["_"];
        if(or__3824__auto____4545) {
          return or__3824__auto____4545
        }else {
          throw cljs.core.missing_protocol.call(null, "IEmptyableCollection.-empty", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.ICollection = {};
cljs.core._conj = function _conj(coll, o) {
  if(function() {
    var and__3822__auto____4546 = coll;
    if(and__3822__auto____4546) {
      return coll.cljs$core$ICollection$_conj$arity$2
    }else {
      return and__3822__auto____4546
    }
  }()) {
    return coll.cljs$core$ICollection$_conj$arity$2(coll, o)
  }else {
    return function() {
      var or__3824__auto____4547 = cljs.core._conj[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4547) {
        return or__3824__auto____4547
      }else {
        var or__3824__auto____4548 = cljs.core._conj["_"];
        if(or__3824__auto____4548) {
          return or__3824__auto____4548
        }else {
          throw cljs.core.missing_protocol.call(null, "ICollection.-conj", coll);
        }
      }
    }().call(null, coll, o)
  }
};
void 0;
void 0;
cljs.core.IIndexed = {};
cljs.core._nth = function() {
  var _nth = null;
  var _nth__2 = function(coll, n) {
    if(function() {
      var and__3822__auto____4549 = coll;
      if(and__3822__auto____4549) {
        return coll.cljs$core$IIndexed$_nth$arity$2
      }else {
        return and__3822__auto____4549
      }
    }()) {
      return coll.cljs$core$IIndexed$_nth$arity$2(coll, n)
    }else {
      return function() {
        var or__3824__auto____4550 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(or__3824__auto____4550) {
          return or__3824__auto____4550
        }else {
          var or__3824__auto____4551 = cljs.core._nth["_"];
          if(or__3824__auto____4551) {
            return or__3824__auto____4551
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n)
    }
  };
  var _nth__3 = function(coll, n, not_found) {
    if(function() {
      var and__3822__auto____4552 = coll;
      if(and__3822__auto____4552) {
        return coll.cljs$core$IIndexed$_nth$arity$3
      }else {
        return and__3822__auto____4552
      }
    }()) {
      return coll.cljs$core$IIndexed$_nth$arity$3(coll, n, not_found)
    }else {
      return function() {
        var or__3824__auto____4553 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(or__3824__auto____4553) {
          return or__3824__auto____4553
        }else {
          var or__3824__auto____4554 = cljs.core._nth["_"];
          if(or__3824__auto____4554) {
            return or__3824__auto____4554
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n, not_found)
    }
  };
  _nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return _nth__2.call(this, coll, n);
      case 3:
        return _nth__3.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _nth.cljs$lang$arity$2 = _nth__2;
  _nth.cljs$lang$arity$3 = _nth__3;
  return _nth
}();
void 0;
void 0;
cljs.core.ASeq = {};
void 0;
void 0;
cljs.core.ISeq = {};
cljs.core._first = function _first(coll) {
  if(function() {
    var and__3822__auto____4555 = coll;
    if(and__3822__auto____4555) {
      return coll.cljs$core$ISeq$_first$arity$1
    }else {
      return and__3822__auto____4555
    }
  }()) {
    return coll.cljs$core$ISeq$_first$arity$1(coll)
  }else {
    return function() {
      var or__3824__auto____4556 = cljs.core._first[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4556) {
        return or__3824__auto____4556
      }else {
        var or__3824__auto____4557 = cljs.core._first["_"];
        if(or__3824__auto____4557) {
          return or__3824__auto____4557
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-first", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._rest = function _rest(coll) {
  if(function() {
    var and__3822__auto____4558 = coll;
    if(and__3822__auto____4558) {
      return coll.cljs$core$ISeq$_rest$arity$1
    }else {
      return and__3822__auto____4558
    }
  }()) {
    return coll.cljs$core$ISeq$_rest$arity$1(coll)
  }else {
    return function() {
      var or__3824__auto____4559 = cljs.core._rest[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4559) {
        return or__3824__auto____4559
      }else {
        var or__3824__auto____4560 = cljs.core._rest["_"];
        if(or__3824__auto____4560) {
          return or__3824__auto____4560
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-rest", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.ILookup = {};
cljs.core._lookup = function() {
  var _lookup = null;
  var _lookup__2 = function(o, k) {
    if(function() {
      var and__3822__auto____4561 = o;
      if(and__3822__auto____4561) {
        return o.cljs$core$ILookup$_lookup$arity$2
      }else {
        return and__3822__auto____4561
      }
    }()) {
      return o.cljs$core$ILookup$_lookup$arity$2(o, k)
    }else {
      return function() {
        var or__3824__auto____4562 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(or__3824__auto____4562) {
          return or__3824__auto____4562
        }else {
          var or__3824__auto____4563 = cljs.core._lookup["_"];
          if(or__3824__auto____4563) {
            return or__3824__auto____4563
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k)
    }
  };
  var _lookup__3 = function(o, k, not_found) {
    if(function() {
      var and__3822__auto____4564 = o;
      if(and__3822__auto____4564) {
        return o.cljs$core$ILookup$_lookup$arity$3
      }else {
        return and__3822__auto____4564
      }
    }()) {
      return o.cljs$core$ILookup$_lookup$arity$3(o, k, not_found)
    }else {
      return function() {
        var or__3824__auto____4565 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(or__3824__auto____4565) {
          return or__3824__auto____4565
        }else {
          var or__3824__auto____4566 = cljs.core._lookup["_"];
          if(or__3824__auto____4566) {
            return or__3824__auto____4566
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k, not_found)
    }
  };
  _lookup = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return _lookup__2.call(this, o, k);
      case 3:
        return _lookup__3.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _lookup.cljs$lang$arity$2 = _lookup__2;
  _lookup.cljs$lang$arity$3 = _lookup__3;
  return _lookup
}();
void 0;
void 0;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function _contains_key_QMARK_(coll, k) {
  if(function() {
    var and__3822__auto____4567 = coll;
    if(and__3822__auto____4567) {
      return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2
    }else {
      return and__3822__auto____4567
    }
  }()) {
    return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll, k)
  }else {
    return function() {
      var or__3824__auto____4568 = cljs.core._contains_key_QMARK_[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4568) {
        return or__3824__auto____4568
      }else {
        var or__3824__auto____4569 = cljs.core._contains_key_QMARK_["_"];
        if(or__3824__auto____4569) {
          return or__3824__auto____4569
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-contains-key?", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core._assoc = function _assoc(coll, k, v) {
  if(function() {
    var and__3822__auto____4570 = coll;
    if(and__3822__auto____4570) {
      return coll.cljs$core$IAssociative$_assoc$arity$3
    }else {
      return and__3822__auto____4570
    }
  }()) {
    return coll.cljs$core$IAssociative$_assoc$arity$3(coll, k, v)
  }else {
    return function() {
      var or__3824__auto____4571 = cljs.core._assoc[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4571) {
        return or__3824__auto____4571
      }else {
        var or__3824__auto____4572 = cljs.core._assoc["_"];
        if(or__3824__auto____4572) {
          return or__3824__auto____4572
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-assoc", coll);
        }
      }
    }().call(null, coll, k, v)
  }
};
void 0;
void 0;
cljs.core.IMap = {};
cljs.core._dissoc = function _dissoc(coll, k) {
  if(function() {
    var and__3822__auto____4573 = coll;
    if(and__3822__auto____4573) {
      return coll.cljs$core$IMap$_dissoc$arity$2
    }else {
      return and__3822__auto____4573
    }
  }()) {
    return coll.cljs$core$IMap$_dissoc$arity$2(coll, k)
  }else {
    return function() {
      var or__3824__auto____4574 = cljs.core._dissoc[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4574) {
        return or__3824__auto____4574
      }else {
        var or__3824__auto____4575 = cljs.core._dissoc["_"];
        if(or__3824__auto____4575) {
          return or__3824__auto____4575
        }else {
          throw cljs.core.missing_protocol.call(null, "IMap.-dissoc", coll);
        }
      }
    }().call(null, coll, k)
  }
};
void 0;
void 0;
cljs.core.IMapEntry = {};
cljs.core._key = function _key(coll) {
  if(function() {
    var and__3822__auto____4576 = coll;
    if(and__3822__auto____4576) {
      return coll.cljs$core$IMapEntry$_key$arity$1
    }else {
      return and__3822__auto____4576
    }
  }()) {
    return coll.cljs$core$IMapEntry$_key$arity$1(coll)
  }else {
    return function() {
      var or__3824__auto____4577 = cljs.core._key[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4577) {
        return or__3824__auto____4577
      }else {
        var or__3824__auto____4578 = cljs.core._key["_"];
        if(or__3824__auto____4578) {
          return or__3824__auto____4578
        }else {
          throw cljs.core.missing_protocol.call(null, "IMapEntry.-key", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._val = function _val(coll) {
  if(function() {
    var and__3822__auto____4579 = coll;
    if(and__3822__auto____4579) {
      return coll.cljs$core$IMapEntry$_val$arity$1
    }else {
      return and__3822__auto____4579
    }
  }()) {
    return coll.cljs$core$IMapEntry$_val$arity$1(coll)
  }else {
    return function() {
      var or__3824__auto____4580 = cljs.core._val[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4580) {
        return or__3824__auto____4580
      }else {
        var or__3824__auto____4581 = cljs.core._val["_"];
        if(or__3824__auto____4581) {
          return or__3824__auto____4581
        }else {
          throw cljs.core.missing_protocol.call(null, "IMapEntry.-val", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.ISet = {};
cljs.core._disjoin = function _disjoin(coll, v) {
  if(function() {
    var and__3822__auto____4582 = coll;
    if(and__3822__auto____4582) {
      return coll.cljs$core$ISet$_disjoin$arity$2
    }else {
      return and__3822__auto____4582
    }
  }()) {
    return coll.cljs$core$ISet$_disjoin$arity$2(coll, v)
  }else {
    return function() {
      var or__3824__auto____4583 = cljs.core._disjoin[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4583) {
        return or__3824__auto____4583
      }else {
        var or__3824__auto____4584 = cljs.core._disjoin["_"];
        if(or__3824__auto____4584) {
          return or__3824__auto____4584
        }else {
          throw cljs.core.missing_protocol.call(null, "ISet.-disjoin", coll);
        }
      }
    }().call(null, coll, v)
  }
};
void 0;
void 0;
cljs.core.IStack = {};
cljs.core._peek = function _peek(coll) {
  if(function() {
    var and__3822__auto____4585 = coll;
    if(and__3822__auto____4585) {
      return coll.cljs$core$IStack$_peek$arity$1
    }else {
      return and__3822__auto____4585
    }
  }()) {
    return coll.cljs$core$IStack$_peek$arity$1(coll)
  }else {
    return function() {
      var or__3824__auto____4586 = cljs.core._peek[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4586) {
        return or__3824__auto____4586
      }else {
        var or__3824__auto____4587 = cljs.core._peek["_"];
        if(or__3824__auto____4587) {
          return or__3824__auto____4587
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-peek", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._pop = function _pop(coll) {
  if(function() {
    var and__3822__auto____4588 = coll;
    if(and__3822__auto____4588) {
      return coll.cljs$core$IStack$_pop$arity$1
    }else {
      return and__3822__auto____4588
    }
  }()) {
    return coll.cljs$core$IStack$_pop$arity$1(coll)
  }else {
    return function() {
      var or__3824__auto____4589 = cljs.core._pop[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4589) {
        return or__3824__auto____4589
      }else {
        var or__3824__auto____4590 = cljs.core._pop["_"];
        if(or__3824__auto____4590) {
          return or__3824__auto____4590
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-pop", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.IVector = {};
cljs.core._assoc_n = function _assoc_n(coll, n, val) {
  if(function() {
    var and__3822__auto____4591 = coll;
    if(and__3822__auto____4591) {
      return coll.cljs$core$IVector$_assoc_n$arity$3
    }else {
      return and__3822__auto____4591
    }
  }()) {
    return coll.cljs$core$IVector$_assoc_n$arity$3(coll, n, val)
  }else {
    return function() {
      var or__3824__auto____4592 = cljs.core._assoc_n[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4592) {
        return or__3824__auto____4592
      }else {
        var or__3824__auto____4593 = cljs.core._assoc_n["_"];
        if(or__3824__auto____4593) {
          return or__3824__auto____4593
        }else {
          throw cljs.core.missing_protocol.call(null, "IVector.-assoc-n", coll);
        }
      }
    }().call(null, coll, n, val)
  }
};
void 0;
void 0;
cljs.core.IDeref = {};
cljs.core._deref = function _deref(o) {
  if(function() {
    var and__3822__auto____4594 = o;
    if(and__3822__auto____4594) {
      return o.cljs$core$IDeref$_deref$arity$1
    }else {
      return and__3822__auto____4594
    }
  }()) {
    return o.cljs$core$IDeref$_deref$arity$1(o)
  }else {
    return function() {
      var or__3824__auto____4595 = cljs.core._deref[goog.typeOf.call(null, o)];
      if(or__3824__auto____4595) {
        return or__3824__auto____4595
      }else {
        var or__3824__auto____4596 = cljs.core._deref["_"];
        if(or__3824__auto____4596) {
          return or__3824__auto____4596
        }else {
          throw cljs.core.missing_protocol.call(null, "IDeref.-deref", o);
        }
      }
    }().call(null, o)
  }
};
void 0;
void 0;
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = function _deref_with_timeout(o, msec, timeout_val) {
  if(function() {
    var and__3822__auto____4597 = o;
    if(and__3822__auto____4597) {
      return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3
    }else {
      return and__3822__auto____4597
    }
  }()) {
    return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o, msec, timeout_val)
  }else {
    return function() {
      var or__3824__auto____4598 = cljs.core._deref_with_timeout[goog.typeOf.call(null, o)];
      if(or__3824__auto____4598) {
        return or__3824__auto____4598
      }else {
        var or__3824__auto____4599 = cljs.core._deref_with_timeout["_"];
        if(or__3824__auto____4599) {
          return or__3824__auto____4599
        }else {
          throw cljs.core.missing_protocol.call(null, "IDerefWithTimeout.-deref-with-timeout", o);
        }
      }
    }().call(null, o, msec, timeout_val)
  }
};
void 0;
void 0;
cljs.core.IMeta = {};
cljs.core._meta = function _meta(o) {
  if(function() {
    var and__3822__auto____4600 = o;
    if(and__3822__auto____4600) {
      return o.cljs$core$IMeta$_meta$arity$1
    }else {
      return and__3822__auto____4600
    }
  }()) {
    return o.cljs$core$IMeta$_meta$arity$1(o)
  }else {
    return function() {
      var or__3824__auto____4601 = cljs.core._meta[goog.typeOf.call(null, o)];
      if(or__3824__auto____4601) {
        return or__3824__auto____4601
      }else {
        var or__3824__auto____4602 = cljs.core._meta["_"];
        if(or__3824__auto____4602) {
          return or__3824__auto____4602
        }else {
          throw cljs.core.missing_protocol.call(null, "IMeta.-meta", o);
        }
      }
    }().call(null, o)
  }
};
void 0;
void 0;
cljs.core.IWithMeta = {};
cljs.core._with_meta = function _with_meta(o, meta) {
  if(function() {
    var and__3822__auto____4603 = o;
    if(and__3822__auto____4603) {
      return o.cljs$core$IWithMeta$_with_meta$arity$2
    }else {
      return and__3822__auto____4603
    }
  }()) {
    return o.cljs$core$IWithMeta$_with_meta$arity$2(o, meta)
  }else {
    return function() {
      var or__3824__auto____4604 = cljs.core._with_meta[goog.typeOf.call(null, o)];
      if(or__3824__auto____4604) {
        return or__3824__auto____4604
      }else {
        var or__3824__auto____4605 = cljs.core._with_meta["_"];
        if(or__3824__auto____4605) {
          return or__3824__auto____4605
        }else {
          throw cljs.core.missing_protocol.call(null, "IWithMeta.-with-meta", o);
        }
      }
    }().call(null, o, meta)
  }
};
void 0;
void 0;
cljs.core.IReduce = {};
cljs.core._reduce = function() {
  var _reduce = null;
  var _reduce__2 = function(coll, f) {
    if(function() {
      var and__3822__auto____4606 = coll;
      if(and__3822__auto____4606) {
        return coll.cljs$core$IReduce$_reduce$arity$2
      }else {
        return and__3822__auto____4606
      }
    }()) {
      return coll.cljs$core$IReduce$_reduce$arity$2(coll, f)
    }else {
      return function() {
        var or__3824__auto____4607 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(or__3824__auto____4607) {
          return or__3824__auto____4607
        }else {
          var or__3824__auto____4608 = cljs.core._reduce["_"];
          if(or__3824__auto____4608) {
            return or__3824__auto____4608
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f)
    }
  };
  var _reduce__3 = function(coll, f, start) {
    if(function() {
      var and__3822__auto____4609 = coll;
      if(and__3822__auto____4609) {
        return coll.cljs$core$IReduce$_reduce$arity$3
      }else {
        return and__3822__auto____4609
      }
    }()) {
      return coll.cljs$core$IReduce$_reduce$arity$3(coll, f, start)
    }else {
      return function() {
        var or__3824__auto____4610 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(or__3824__auto____4610) {
          return or__3824__auto____4610
        }else {
          var or__3824__auto____4611 = cljs.core._reduce["_"];
          if(or__3824__auto____4611) {
            return or__3824__auto____4611
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f, start)
    }
  };
  _reduce = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return _reduce__2.call(this, coll, f);
      case 3:
        return _reduce__3.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _reduce.cljs$lang$arity$2 = _reduce__2;
  _reduce.cljs$lang$arity$3 = _reduce__3;
  return _reduce
}();
void 0;
void 0;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = function _kv_reduce(coll, f, init) {
  if(function() {
    var and__3822__auto____4612 = coll;
    if(and__3822__auto____4612) {
      return coll.cljs$core$IKVReduce$_kv_reduce$arity$3
    }else {
      return and__3822__auto____4612
    }
  }()) {
    return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll, f, init)
  }else {
    return function() {
      var or__3824__auto____4613 = cljs.core._kv_reduce[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4613) {
        return or__3824__auto____4613
      }else {
        var or__3824__auto____4614 = cljs.core._kv_reduce["_"];
        if(or__3824__auto____4614) {
          return or__3824__auto____4614
        }else {
          throw cljs.core.missing_protocol.call(null, "IKVReduce.-kv-reduce", coll);
        }
      }
    }().call(null, coll, f, init)
  }
};
void 0;
void 0;
cljs.core.IEquiv = {};
cljs.core._equiv = function _equiv(o, other) {
  if(function() {
    var and__3822__auto____4615 = o;
    if(and__3822__auto____4615) {
      return o.cljs$core$IEquiv$_equiv$arity$2
    }else {
      return and__3822__auto____4615
    }
  }()) {
    return o.cljs$core$IEquiv$_equiv$arity$2(o, other)
  }else {
    return function() {
      var or__3824__auto____4616 = cljs.core._equiv[goog.typeOf.call(null, o)];
      if(or__3824__auto____4616) {
        return or__3824__auto____4616
      }else {
        var or__3824__auto____4617 = cljs.core._equiv["_"];
        if(or__3824__auto____4617) {
          return or__3824__auto____4617
        }else {
          throw cljs.core.missing_protocol.call(null, "IEquiv.-equiv", o);
        }
      }
    }().call(null, o, other)
  }
};
void 0;
void 0;
cljs.core.IHash = {};
cljs.core._hash = function _hash(o) {
  if(function() {
    var and__3822__auto____4618 = o;
    if(and__3822__auto____4618) {
      return o.cljs$core$IHash$_hash$arity$1
    }else {
      return and__3822__auto____4618
    }
  }()) {
    return o.cljs$core$IHash$_hash$arity$1(o)
  }else {
    return function() {
      var or__3824__auto____4619 = cljs.core._hash[goog.typeOf.call(null, o)];
      if(or__3824__auto____4619) {
        return or__3824__auto____4619
      }else {
        var or__3824__auto____4620 = cljs.core._hash["_"];
        if(or__3824__auto____4620) {
          return or__3824__auto____4620
        }else {
          throw cljs.core.missing_protocol.call(null, "IHash.-hash", o);
        }
      }
    }().call(null, o)
  }
};
void 0;
void 0;
cljs.core.ISeqable = {};
cljs.core._seq = function _seq(o) {
  if(function() {
    var and__3822__auto____4621 = o;
    if(and__3822__auto____4621) {
      return o.cljs$core$ISeqable$_seq$arity$1
    }else {
      return and__3822__auto____4621
    }
  }()) {
    return o.cljs$core$ISeqable$_seq$arity$1(o)
  }else {
    return function() {
      var or__3824__auto____4622 = cljs.core._seq[goog.typeOf.call(null, o)];
      if(or__3824__auto____4622) {
        return or__3824__auto____4622
      }else {
        var or__3824__auto____4623 = cljs.core._seq["_"];
        if(or__3824__auto____4623) {
          return or__3824__auto____4623
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeqable.-seq", o);
        }
      }
    }().call(null, o)
  }
};
void 0;
void 0;
cljs.core.ISequential = {};
void 0;
void 0;
cljs.core.IList = {};
void 0;
void 0;
cljs.core.IRecord = {};
void 0;
void 0;
cljs.core.IReversible = {};
cljs.core._rseq = function _rseq(coll) {
  if(function() {
    var and__3822__auto____4624 = coll;
    if(and__3822__auto____4624) {
      return coll.cljs$core$IReversible$_rseq$arity$1
    }else {
      return and__3822__auto____4624
    }
  }()) {
    return coll.cljs$core$IReversible$_rseq$arity$1(coll)
  }else {
    return function() {
      var or__3824__auto____4625 = cljs.core._rseq[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4625) {
        return or__3824__auto____4625
      }else {
        var or__3824__auto____4626 = cljs.core._rseq["_"];
        if(or__3824__auto____4626) {
          return or__3824__auto____4626
        }else {
          throw cljs.core.missing_protocol.call(null, "IReversible.-rseq", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.ISorted = {};
cljs.core._sorted_seq = function _sorted_seq(coll, ascending_QMARK_) {
  if(function() {
    var and__3822__auto____4627 = coll;
    if(and__3822__auto____4627) {
      return coll.cljs$core$ISorted$_sorted_seq$arity$2
    }else {
      return and__3822__auto____4627
    }
  }()) {
    return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll, ascending_QMARK_)
  }else {
    return function() {
      var or__3824__auto____4628 = cljs.core._sorted_seq[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4628) {
        return or__3824__auto____4628
      }else {
        var or__3824__auto____4629 = cljs.core._sorted_seq["_"];
        if(or__3824__auto____4629) {
          return or__3824__auto____4629
        }else {
          throw cljs.core.missing_protocol.call(null, "ISorted.-sorted-seq", coll);
        }
      }
    }().call(null, coll, ascending_QMARK_)
  }
};
cljs.core._sorted_seq_from = function _sorted_seq_from(coll, k, ascending_QMARK_) {
  if(function() {
    var and__3822__auto____4630 = coll;
    if(and__3822__auto____4630) {
      return coll.cljs$core$ISorted$_sorted_seq_from$arity$3
    }else {
      return and__3822__auto____4630
    }
  }()) {
    return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll, k, ascending_QMARK_)
  }else {
    return function() {
      var or__3824__auto____4631 = cljs.core._sorted_seq_from[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4631) {
        return or__3824__auto____4631
      }else {
        var or__3824__auto____4632 = cljs.core._sorted_seq_from["_"];
        if(or__3824__auto____4632) {
          return or__3824__auto____4632
        }else {
          throw cljs.core.missing_protocol.call(null, "ISorted.-sorted-seq-from", coll);
        }
      }
    }().call(null, coll, k, ascending_QMARK_)
  }
};
cljs.core._entry_key = function _entry_key(coll, entry) {
  if(function() {
    var and__3822__auto____4633 = coll;
    if(and__3822__auto____4633) {
      return coll.cljs$core$ISorted$_entry_key$arity$2
    }else {
      return and__3822__auto____4633
    }
  }()) {
    return coll.cljs$core$ISorted$_entry_key$arity$2(coll, entry)
  }else {
    return function() {
      var or__3824__auto____4634 = cljs.core._entry_key[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4634) {
        return or__3824__auto____4634
      }else {
        var or__3824__auto____4635 = cljs.core._entry_key["_"];
        if(or__3824__auto____4635) {
          return or__3824__auto____4635
        }else {
          throw cljs.core.missing_protocol.call(null, "ISorted.-entry-key", coll);
        }
      }
    }().call(null, coll, entry)
  }
};
cljs.core._comparator = function _comparator(coll) {
  if(function() {
    var and__3822__auto____4636 = coll;
    if(and__3822__auto____4636) {
      return coll.cljs$core$ISorted$_comparator$arity$1
    }else {
      return and__3822__auto____4636
    }
  }()) {
    return coll.cljs$core$ISorted$_comparator$arity$1(coll)
  }else {
    return function() {
      var or__3824__auto____4637 = cljs.core._comparator[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4637) {
        return or__3824__auto____4637
      }else {
        var or__3824__auto____4638 = cljs.core._comparator["_"];
        if(or__3824__auto____4638) {
          return or__3824__auto____4638
        }else {
          throw cljs.core.missing_protocol.call(null, "ISorted.-comparator", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.IPrintable = {};
cljs.core._pr_seq = function _pr_seq(o, opts) {
  if(function() {
    var and__3822__auto____4639 = o;
    if(and__3822__auto____4639) {
      return o.cljs$core$IPrintable$_pr_seq$arity$2
    }else {
      return and__3822__auto____4639
    }
  }()) {
    return o.cljs$core$IPrintable$_pr_seq$arity$2(o, opts)
  }else {
    return function() {
      var or__3824__auto____4640 = cljs.core._pr_seq[goog.typeOf.call(null, o)];
      if(or__3824__auto____4640) {
        return or__3824__auto____4640
      }else {
        var or__3824__auto____4641 = cljs.core._pr_seq["_"];
        if(or__3824__auto____4641) {
          return or__3824__auto____4641
        }else {
          throw cljs.core.missing_protocol.call(null, "IPrintable.-pr-seq", o);
        }
      }
    }().call(null, o, opts)
  }
};
void 0;
void 0;
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = function _realized_QMARK_(d) {
  if(function() {
    var and__3822__auto____4642 = d;
    if(and__3822__auto____4642) {
      return d.cljs$core$IPending$_realized_QMARK_$arity$1
    }else {
      return and__3822__auto____4642
    }
  }()) {
    return d.cljs$core$IPending$_realized_QMARK_$arity$1(d)
  }else {
    return function() {
      var or__3824__auto____4643 = cljs.core._realized_QMARK_[goog.typeOf.call(null, d)];
      if(or__3824__auto____4643) {
        return or__3824__auto____4643
      }else {
        var or__3824__auto____4644 = cljs.core._realized_QMARK_["_"];
        if(or__3824__auto____4644) {
          return or__3824__auto____4644
        }else {
          throw cljs.core.missing_protocol.call(null, "IPending.-realized?", d);
        }
      }
    }().call(null, d)
  }
};
void 0;
void 0;
cljs.core.IWatchable = {};
cljs.core._notify_watches = function _notify_watches(this$, oldval, newval) {
  if(function() {
    var and__3822__auto____4645 = this$;
    if(and__3822__auto____4645) {
      return this$.cljs$core$IWatchable$_notify_watches$arity$3
    }else {
      return and__3822__auto____4645
    }
  }()) {
    return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$, oldval, newval)
  }else {
    return function() {
      var or__3824__auto____4646 = cljs.core._notify_watches[goog.typeOf.call(null, this$)];
      if(or__3824__auto____4646) {
        return or__3824__auto____4646
      }else {
        var or__3824__auto____4647 = cljs.core._notify_watches["_"];
        if(or__3824__auto____4647) {
          return or__3824__auto____4647
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-notify-watches", this$);
        }
      }
    }().call(null, this$, oldval, newval)
  }
};
cljs.core._add_watch = function _add_watch(this$, key, f) {
  if(function() {
    var and__3822__auto____4648 = this$;
    if(and__3822__auto____4648) {
      return this$.cljs$core$IWatchable$_add_watch$arity$3
    }else {
      return and__3822__auto____4648
    }
  }()) {
    return this$.cljs$core$IWatchable$_add_watch$arity$3(this$, key, f)
  }else {
    return function() {
      var or__3824__auto____4649 = cljs.core._add_watch[goog.typeOf.call(null, this$)];
      if(or__3824__auto____4649) {
        return or__3824__auto____4649
      }else {
        var or__3824__auto____4650 = cljs.core._add_watch["_"];
        if(or__3824__auto____4650) {
          return or__3824__auto____4650
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-add-watch", this$);
        }
      }
    }().call(null, this$, key, f)
  }
};
cljs.core._remove_watch = function _remove_watch(this$, key) {
  if(function() {
    var and__3822__auto____4651 = this$;
    if(and__3822__auto____4651) {
      return this$.cljs$core$IWatchable$_remove_watch$arity$2
    }else {
      return and__3822__auto____4651
    }
  }()) {
    return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$, key)
  }else {
    return function() {
      var or__3824__auto____4652 = cljs.core._remove_watch[goog.typeOf.call(null, this$)];
      if(or__3824__auto____4652) {
        return or__3824__auto____4652
      }else {
        var or__3824__auto____4653 = cljs.core._remove_watch["_"];
        if(or__3824__auto____4653) {
          return or__3824__auto____4653
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-remove-watch", this$);
        }
      }
    }().call(null, this$, key)
  }
};
void 0;
void 0;
cljs.core.IEditableCollection = {};
cljs.core._as_transient = function _as_transient(coll) {
  if(function() {
    var and__3822__auto____4654 = coll;
    if(and__3822__auto____4654) {
      return coll.cljs$core$IEditableCollection$_as_transient$arity$1
    }else {
      return and__3822__auto____4654
    }
  }()) {
    return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll)
  }else {
    return function() {
      var or__3824__auto____4655 = cljs.core._as_transient[goog.typeOf.call(null, coll)];
      if(or__3824__auto____4655) {
        return or__3824__auto____4655
      }else {
        var or__3824__auto____4656 = cljs.core._as_transient["_"];
        if(or__3824__auto____4656) {
          return or__3824__auto____4656
        }else {
          throw cljs.core.missing_protocol.call(null, "IEditableCollection.-as-transient", coll);
        }
      }
    }().call(null, coll)
  }
};
void 0;
void 0;
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = function _conj_BANG_(tcoll, val) {
  if(function() {
    var and__3822__auto____4657 = tcoll;
    if(and__3822__auto____4657) {
      return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2
    }else {
      return and__3822__auto____4657
    }
  }()) {
    return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll, val)
  }else {
    return function() {
      var or__3824__auto____4658 = cljs.core._conj_BANG_[goog.typeOf.call(null, tcoll)];
      if(or__3824__auto____4658) {
        return or__3824__auto____4658
      }else {
        var or__3824__auto____4659 = cljs.core._conj_BANG_["_"];
        if(or__3824__auto____4659) {
          return or__3824__auto____4659
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientCollection.-conj!", tcoll);
        }
      }
    }().call(null, tcoll, val)
  }
};
cljs.core._persistent_BANG_ = function _persistent_BANG_(tcoll) {
  if(function() {
    var and__3822__auto____4660 = tcoll;
    if(and__3822__auto____4660) {
      return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1
    }else {
      return and__3822__auto____4660
    }
  }()) {
    return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll)
  }else {
    return function() {
      var or__3824__auto____4661 = cljs.core._persistent_BANG_[goog.typeOf.call(null, tcoll)];
      if(or__3824__auto____4661) {
        return or__3824__auto____4661
      }else {
        var or__3824__auto____4662 = cljs.core._persistent_BANG_["_"];
        if(or__3824__auto____4662) {
          return or__3824__auto____4662
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientCollection.-persistent!", tcoll);
        }
      }
    }().call(null, tcoll)
  }
};
void 0;
void 0;
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = function _assoc_BANG_(tcoll, key, val) {
  if(function() {
    var and__3822__auto____4663 = tcoll;
    if(and__3822__auto____4663) {
      return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3
    }else {
      return and__3822__auto____4663
    }
  }()) {
    return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll, key, val)
  }else {
    return function() {
      var or__3824__auto____4664 = cljs.core._assoc_BANG_[goog.typeOf.call(null, tcoll)];
      if(or__3824__auto____4664) {
        return or__3824__auto____4664
      }else {
        var or__3824__auto____4665 = cljs.core._assoc_BANG_["_"];
        if(or__3824__auto____4665) {
          return or__3824__auto____4665
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientAssociative.-assoc!", tcoll);
        }
      }
    }().call(null, tcoll, key, val)
  }
};
void 0;
void 0;
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = function _dissoc_BANG_(tcoll, key) {
  if(function() {
    var and__3822__auto____4666 = tcoll;
    if(and__3822__auto____4666) {
      return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2
    }else {
      return and__3822__auto____4666
    }
  }()) {
    return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll, key)
  }else {
    return function() {
      var or__3824__auto____4667 = cljs.core._dissoc_BANG_[goog.typeOf.call(null, tcoll)];
      if(or__3824__auto____4667) {
        return or__3824__auto____4667
      }else {
        var or__3824__auto____4668 = cljs.core._dissoc_BANG_["_"];
        if(or__3824__auto____4668) {
          return or__3824__auto____4668
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientMap.-dissoc!", tcoll);
        }
      }
    }().call(null, tcoll, key)
  }
};
void 0;
void 0;
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = function _assoc_n_BANG_(tcoll, n, val) {
  if(function() {
    var and__3822__auto____4669 = tcoll;
    if(and__3822__auto____4669) {
      return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3
    }else {
      return and__3822__auto____4669
    }
  }()) {
    return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll, n, val)
  }else {
    return function() {
      var or__3824__auto____4670 = cljs.core._assoc_n_BANG_[goog.typeOf.call(null, tcoll)];
      if(or__3824__auto____4670) {
        return or__3824__auto____4670
      }else {
        var or__3824__auto____4671 = cljs.core._assoc_n_BANG_["_"];
        if(or__3824__auto____4671) {
          return or__3824__auto____4671
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientVector.-assoc-n!", tcoll);
        }
      }
    }().call(null, tcoll, n, val)
  }
};
cljs.core._pop_BANG_ = function _pop_BANG_(tcoll) {
  if(function() {
    var and__3822__auto____4672 = tcoll;
    if(and__3822__auto____4672) {
      return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1
    }else {
      return and__3822__auto____4672
    }
  }()) {
    return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll)
  }else {
    return function() {
      var or__3824__auto____4673 = cljs.core._pop_BANG_[goog.typeOf.call(null, tcoll)];
      if(or__3824__auto____4673) {
        return or__3824__auto____4673
      }else {
        var or__3824__auto____4674 = cljs.core._pop_BANG_["_"];
        if(or__3824__auto____4674) {
          return or__3824__auto____4674
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientVector.-pop!", tcoll);
        }
      }
    }().call(null, tcoll)
  }
};
void 0;
void 0;
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = function _disjoin_BANG_(tcoll, v) {
  if(function() {
    var and__3822__auto____4675 = tcoll;
    if(and__3822__auto____4675) {
      return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2
    }else {
      return and__3822__auto____4675
    }
  }()) {
    return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll, v)
  }else {
    return function() {
      var or__3824__auto____4676 = cljs.core._disjoin_BANG_[goog.typeOf.call(null, tcoll)];
      if(or__3824__auto____4676) {
        return or__3824__auto____4676
      }else {
        var or__3824__auto____4677 = cljs.core._disjoin_BANG_["_"];
        if(or__3824__auto____4677) {
          return or__3824__auto____4677
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientSet.-disjoin!", tcoll);
        }
      }
    }().call(null, tcoll, v)
  }
};
void 0;
cljs.core.identical_QMARK_ = function identical_QMARK_(x, y) {
  return x === y
};
void 0;
void 0;
cljs.core._EQ_ = function() {
  var _EQ_ = null;
  var _EQ___1 = function(x) {
    return true
  };
  var _EQ___2 = function(x, y) {
    var or__3824__auto____4678 = x === y;
    if(or__3824__auto____4678) {
      return or__3824__auto____4678
    }else {
      return cljs.core._equiv.call(null, x, y)
    }
  };
  var _EQ___3 = function() {
    var G__4679__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__4680 = y;
            var G__4681 = cljs.core.first.call(null, more);
            var G__4682 = cljs.core.next.call(null, more);
            x = G__4680;
            y = G__4681;
            more = G__4682;
            continue
          }else {
            return _EQ_.call(null, y, cljs.core.first.call(null, more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__4679 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4679__delegate.call(this, x, y, more)
    };
    G__4679.cljs$lang$maxFixedArity = 2;
    G__4679.cljs$lang$applyTo = function(arglist__4683) {
      var x = cljs.core.first(arglist__4683);
      var y = cljs.core.first(cljs.core.next(arglist__4683));
      var more = cljs.core.rest(cljs.core.next(arglist__4683));
      return G__4679__delegate(x, y, more)
    };
    G__4679.cljs$lang$arity$variadic = G__4679__delegate;
    return G__4679
  }();
  _EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ___1.call(this, x);
      case 2:
        return _EQ___2.call(this, x, y);
      default:
        return _EQ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ_.cljs$lang$maxFixedArity = 2;
  _EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
  _EQ_.cljs$lang$arity$1 = _EQ___1;
  _EQ_.cljs$lang$arity$2 = _EQ___2;
  _EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
  return _EQ_
}();
cljs.core.nil_QMARK_ = function nil_QMARK_(x) {
  return x == null
};
cljs.core.type = function type(x) {
  if(function() {
    var or__3824__auto____4684 = x == null;
    if(or__3824__auto____4684) {
      return or__3824__auto____4684
    }else {
      return void 0 === x
    }
  }()) {
    return null
  }else {
    return x.constructor
  }
};
void 0;
void 0;
void 0;
cljs.core.IHash["null"] = true;
cljs.core._hash["null"] = function(o) {
  return 0
};
cljs.core.ILookup["null"] = true;
cljs.core._lookup["null"] = function() {
  var G__4685 = null;
  var G__4685__2 = function(o, k) {
    return null
  };
  var G__4685__3 = function(o, k, not_found) {
    return not_found
  };
  G__4685 = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4685__2.call(this, o, k);
      case 3:
        return G__4685__3.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4685
}();
cljs.core.IAssociative["null"] = true;
cljs.core._assoc["null"] = function(_, k, v) {
  return cljs.core.hash_map.call(null, k, v)
};
cljs.core.ICollection["null"] = true;
cljs.core._conj["null"] = function(_, o) {
  return cljs.core.list.call(null, o)
};
cljs.core.IReduce["null"] = true;
cljs.core._reduce["null"] = function() {
  var G__4686 = null;
  var G__4686__2 = function(_, f) {
    return f.call(null)
  };
  var G__4686__3 = function(_, f, start) {
    return start
  };
  G__4686 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__4686__2.call(this, _, f);
      case 3:
        return G__4686__3.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4686
}();
cljs.core.IPrintable["null"] = true;
cljs.core._pr_seq["null"] = function(o) {
  return cljs.core.list.call(null, "nil")
};
cljs.core.ISet["null"] = true;
cljs.core._disjoin["null"] = function(_, v) {
  return null
};
cljs.core.ICounted["null"] = true;
cljs.core._count["null"] = function(_) {
  return 0
};
cljs.core.IStack["null"] = true;
cljs.core._peek["null"] = function(_) {
  return null
};
cljs.core._pop["null"] = function(_) {
  return null
};
cljs.core.ISeq["null"] = true;
cljs.core._first["null"] = function(_) {
  return null
};
cljs.core._rest["null"] = function(_) {
  return cljs.core.list.call(null)
};
cljs.core.IEquiv["null"] = true;
cljs.core._equiv["null"] = function(_, o) {
  return o == null
};
cljs.core.IWithMeta["null"] = true;
cljs.core._with_meta["null"] = function(_, meta) {
  return null
};
cljs.core.IMeta["null"] = true;
cljs.core._meta["null"] = function(_) {
  return null
};
cljs.core.IIndexed["null"] = true;
cljs.core._nth["null"] = function() {
  var G__4687 = null;
  var G__4687__2 = function(_, n) {
    return null
  };
  var G__4687__3 = function(_, n, not_found) {
    return not_found
  };
  G__4687 = function(_, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4687__2.call(this, _, n);
      case 3:
        return G__4687__3.call(this, _, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4687
}();
cljs.core.IEmptyableCollection["null"] = true;
cljs.core._empty["null"] = function(_) {
  return null
};
cljs.core.IMap["null"] = true;
cljs.core._dissoc["null"] = function(_, k) {
  return null
};
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(o, other) {
  return o.toString() === other.toString()
};
cljs.core.IHash["number"] = true;
cljs.core._hash["number"] = function(o) {
  return o
};
cljs.core.IEquiv["number"] = true;
cljs.core._equiv["number"] = function(x, o) {
  return x === o
};
cljs.core.IHash["boolean"] = true;
cljs.core._hash["boolean"] = function(o) {
  return o === true ? 1 : 0
};
cljs.core.IHash["function"] = true;
cljs.core._hash["function"] = function(o) {
  return goog.getUid.call(null, o)
};
cljs.core.inc = function inc(x) {
  return x + 1
};
void 0;
void 0;
cljs.core.ci_reduce = function() {
  var ci_reduce = null;
  var ci_reduce__2 = function(cicoll, f) {
    if(cljs.core._count.call(null, cicoll) === 0) {
      return f.call(null)
    }else {
      var val__4688 = cljs.core._nth.call(null, cicoll, 0);
      var n__4689 = 1;
      while(true) {
        if(n__4689 < cljs.core._count.call(null, cicoll)) {
          var nval__4690 = f.call(null, val__4688, cljs.core._nth.call(null, cicoll, n__4689));
          if(cljs.core.reduced_QMARK_.call(null, nval__4690)) {
            return cljs.core.deref.call(null, nval__4690)
          }else {
            var G__4697 = nval__4690;
            var G__4698 = n__4689 + 1;
            val__4688 = G__4697;
            n__4689 = G__4698;
            continue
          }
        }else {
          return val__4688
        }
        break
      }
    }
  };
  var ci_reduce__3 = function(cicoll, f, val) {
    var val__4691 = val;
    var n__4692 = 0;
    while(true) {
      if(n__4692 < cljs.core._count.call(null, cicoll)) {
        var nval__4693 = f.call(null, val__4691, cljs.core._nth.call(null, cicoll, n__4692));
        if(cljs.core.reduced_QMARK_.call(null, nval__4693)) {
          return cljs.core.deref.call(null, nval__4693)
        }else {
          var G__4699 = nval__4693;
          var G__4700 = n__4692 + 1;
          val__4691 = G__4699;
          n__4692 = G__4700;
          continue
        }
      }else {
        return val__4691
      }
      break
    }
  };
  var ci_reduce__4 = function(cicoll, f, val, idx) {
    var val__4694 = val;
    var n__4695 = idx;
    while(true) {
      if(n__4695 < cljs.core._count.call(null, cicoll)) {
        var nval__4696 = f.call(null, val__4694, cljs.core._nth.call(null, cicoll, n__4695));
        if(cljs.core.reduced_QMARK_.call(null, nval__4696)) {
          return cljs.core.deref.call(null, nval__4696)
        }else {
          var G__4701 = nval__4696;
          var G__4702 = n__4695 + 1;
          val__4694 = G__4701;
          n__4695 = G__4702;
          continue
        }
      }else {
        return val__4694
      }
      break
    }
  };
  ci_reduce = function(cicoll, f, val, idx) {
    switch(arguments.length) {
      case 2:
        return ci_reduce__2.call(this, cicoll, f);
      case 3:
        return ci_reduce__3.call(this, cicoll, f, val);
      case 4:
        return ci_reduce__4.call(this, cicoll, f, val, idx)
    }
    throw"Invalid arity: " + arguments.length;
  };
  ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
  ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
  ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
  return ci_reduce
}();
void 0;
void 0;
void 0;
void 0;
cljs.core.IndexedSeq = function(a, i) {
  this.a = a;
  this.i = i;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 15990906
};
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.IndexedSeq")
};
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__4703 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__4704 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$ASeq$ = true;
cljs.core.IndexedSeq.prototype.toString = function() {
  var this__4705 = this;
  var this$__4706 = this;
  return cljs.core.pr_str.call(null, this$__4706)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(coll, f) {
  var this__4707 = this;
  if(cljs.core.counted_QMARK_.call(null, this__4707.a)) {
    return cljs.core.ci_reduce.call(null, this__4707.a, f, this__4707.a[this__4707.i], this__4707.i + 1)
  }else {
    return cljs.core.ci_reduce.call(null, coll, f, this__4707.a[this__4707.i], 0)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(coll, f, start) {
  var this__4708 = this;
  if(cljs.core.counted_QMARK_.call(null, this__4708.a)) {
    return cljs.core.ci_reduce.call(null, this__4708.a, f, start, this__4708.i)
  }else {
    return cljs.core.ci_reduce.call(null, coll, f, start, 0)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(this$) {
  var this__4709 = this;
  return this$
};
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = function(_) {
  var this__4710 = this;
  return this__4710.a.length - this__4710.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(_) {
  var this__4711 = this;
  return this__4711.a[this__4711.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(_) {
  var this__4712 = this;
  if(this__4712.i + 1 < this__4712.a.length) {
    return new cljs.core.IndexedSeq(this__4712.a, this__4712.i + 1)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__4713 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, n) {
  var this__4714 = this;
  var i__4715 = n + this__4714.i;
  if(i__4715 < this__4714.a.length) {
    return this__4714.a[i__4715]
  }else {
    return null
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, n, not_found) {
  var this__4716 = this;
  var i__4717 = n + this__4716.i;
  if(i__4717 < this__4716.a.length) {
    return this__4716.a[i__4717]
  }else {
    return not_found
  }
};
cljs.core.IndexedSeq;
cljs.core.prim_seq = function() {
  var prim_seq = null;
  var prim_seq__1 = function(prim) {
    return prim_seq.call(null, prim, 0)
  };
  var prim_seq__2 = function(prim, i) {
    if(prim.length === 0) {
      return null
    }else {
      return new cljs.core.IndexedSeq(prim, i)
    }
  };
  prim_seq = function(prim, i) {
    switch(arguments.length) {
      case 1:
        return prim_seq__1.call(this, prim);
      case 2:
        return prim_seq__2.call(this, prim, i)
    }
    throw"Invalid arity: " + arguments.length;
  };
  prim_seq.cljs$lang$arity$1 = prim_seq__1;
  prim_seq.cljs$lang$arity$2 = prim_seq__2;
  return prim_seq
}();
cljs.core.array_seq = function() {
  var array_seq = null;
  var array_seq__1 = function(array) {
    return cljs.core.prim_seq.call(null, array, 0)
  };
  var array_seq__2 = function(array, i) {
    return cljs.core.prim_seq.call(null, array, i)
  };
  array_seq = function(array, i) {
    switch(arguments.length) {
      case 1:
        return array_seq__1.call(this, array);
      case 2:
        return array_seq__2.call(this, array, i)
    }
    throw"Invalid arity: " + arguments.length;
  };
  array_seq.cljs$lang$arity$1 = array_seq__1;
  array_seq.cljs$lang$arity$2 = array_seq__2;
  return array_seq
}();
cljs.core.IReduce["array"] = true;
cljs.core._reduce["array"] = function() {
  var G__4718 = null;
  var G__4718__2 = function(array, f) {
    return cljs.core.ci_reduce.call(null, array, f)
  };
  var G__4718__3 = function(array, f, start) {
    return cljs.core.ci_reduce.call(null, array, f, start)
  };
  G__4718 = function(array, f, start) {
    switch(arguments.length) {
      case 2:
        return G__4718__2.call(this, array, f);
      case 3:
        return G__4718__3.call(this, array, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4718
}();
cljs.core.ILookup["array"] = true;
cljs.core._lookup["array"] = function() {
  var G__4719 = null;
  var G__4719__2 = function(array, k) {
    return array[k]
  };
  var G__4719__3 = function(array, k, not_found) {
    return cljs.core._nth.call(null, array, k, not_found)
  };
  G__4719 = function(array, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4719__2.call(this, array, k);
      case 3:
        return G__4719__3.call(this, array, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4719
}();
cljs.core.IIndexed["array"] = true;
cljs.core._nth["array"] = function() {
  var G__4720 = null;
  var G__4720__2 = function(array, n) {
    if(n < array.length) {
      return array[n]
    }else {
      return null
    }
  };
  var G__4720__3 = function(array, n, not_found) {
    if(n < array.length) {
      return array[n]
    }else {
      return not_found
    }
  };
  G__4720 = function(array, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__4720__2.call(this, array, n);
      case 3:
        return G__4720__3.call(this, array, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__4720
}();
cljs.core.ICounted["array"] = true;
cljs.core._count["array"] = function(a) {
  return a.length
};
cljs.core.ISeqable["array"] = true;
cljs.core._seq["array"] = function(array) {
  return cljs.core.array_seq.call(null, array, 0)
};
cljs.core.seq = function seq(coll) {
  if(coll != null) {
    if(function() {
      var G__4721__4722 = coll;
      if(G__4721__4722 != null) {
        if(function() {
          var or__3824__auto____4723 = G__4721__4722.cljs$lang$protocol_mask$partition0$ & 32;
          if(or__3824__auto____4723) {
            return or__3824__auto____4723
          }else {
            return G__4721__4722.cljs$core$ASeq$
          }
        }()) {
          return true
        }else {
          if(!G__4721__4722.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ASeq, G__4721__4722)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ASeq, G__4721__4722)
      }
    }()) {
      return coll
    }else {
      return cljs.core._seq.call(null, coll)
    }
  }else {
    return null
  }
};
cljs.core.first = function first(coll) {
  if(coll != null) {
    if(function() {
      var G__4724__4725 = coll;
      if(G__4724__4725 != null) {
        if(function() {
          var or__3824__auto____4726 = G__4724__4725.cljs$lang$protocol_mask$partition0$ & 64;
          if(or__3824__auto____4726) {
            return or__3824__auto____4726
          }else {
            return G__4724__4725.cljs$core$ISeq$
          }
        }()) {
          return true
        }else {
          if(!G__4724__4725.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__4724__4725)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__4724__4725)
      }
    }()) {
      return cljs.core._first.call(null, coll)
    }else {
      var s__4727 = cljs.core.seq.call(null, coll);
      if(s__4727 != null) {
        return cljs.core._first.call(null, s__4727)
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
cljs.core.rest = function rest(coll) {
  if(coll != null) {
    if(function() {
      var G__4728__4729 = coll;
      if(G__4728__4729 != null) {
        if(function() {
          var or__3824__auto____4730 = G__4728__4729.cljs$lang$protocol_mask$partition0$ & 64;
          if(or__3824__auto____4730) {
            return or__3824__auto____4730
          }else {
            return G__4728__4729.cljs$core$ISeq$
          }
        }()) {
          return true
        }else {
          if(!G__4728__4729.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__4728__4729)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__4728__4729)
      }
    }()) {
      return cljs.core._rest.call(null, coll)
    }else {
      var s__4731 = cljs.core.seq.call(null, coll);
      if(s__4731 != null) {
        return cljs.core._rest.call(null, s__4731)
      }else {
        return cljs.core.List.EMPTY
      }
    }
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.next = function next(coll) {
  if(coll != null) {
    if(function() {
      var G__4732__4733 = coll;
      if(G__4732__4733 != null) {
        if(function() {
          var or__3824__auto____4734 = G__4732__4733.cljs$lang$protocol_mask$partition0$ & 64;
          if(or__3824__auto____4734) {
            return or__3824__auto____4734
          }else {
            return G__4732__4733.cljs$core$ISeq$
          }
        }()) {
          return true
        }else {
          if(!G__4732__4733.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__4732__4733)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__4732__4733)
      }
    }()) {
      var coll__4735 = cljs.core._rest.call(null, coll);
      if(coll__4735 != null) {
        if(function() {
          var G__4736__4737 = coll__4735;
          if(G__4736__4737 != null) {
            if(function() {
              var or__3824__auto____4738 = G__4736__4737.cljs$lang$protocol_mask$partition0$ & 32;
              if(or__3824__auto____4738) {
                return or__3824__auto____4738
              }else {
                return G__4736__4737.cljs$core$ASeq$
              }
            }()) {
              return true
            }else {
              if(!G__4736__4737.cljs$lang$protocol_mask$partition0$) {
                return cljs.core.type_satisfies_.call(null, cljs.core.ASeq, G__4736__4737)
              }else {
                return false
              }
            }
          }else {
            return cljs.core.type_satisfies_.call(null, cljs.core.ASeq, G__4736__4737)
          }
        }()) {
          return coll__4735
        }else {
          return cljs.core._seq.call(null, coll__4735)
        }
      }else {
        return null
      }
    }else {
      return cljs.core.seq.call(null, cljs.core.rest.call(null, coll))
    }
  }else {
    return null
  }
};
cljs.core.second = function second(coll) {
  return cljs.core.first.call(null, cljs.core.next.call(null, coll))
};
cljs.core.ffirst = function ffirst(coll) {
  return cljs.core.first.call(null, cljs.core.first.call(null, coll))
};
cljs.core.nfirst = function nfirst(coll) {
  return cljs.core.next.call(null, cljs.core.first.call(null, coll))
};
cljs.core.fnext = function fnext(coll) {
  return cljs.core.first.call(null, cljs.core.next.call(null, coll))
};
cljs.core.nnext = function nnext(coll) {
  return cljs.core.next.call(null, cljs.core.next.call(null, coll))
};
cljs.core.last = function last(s) {
  while(true) {
    if(cljs.core.truth_(cljs.core.next.call(null, s))) {
      var G__4739 = cljs.core.next.call(null, s);
      s = G__4739;
      continue
    }else {
      return cljs.core.first.call(null, s)
    }
    break
  }
};
cljs.core.IEquiv["_"] = true;
cljs.core._equiv["_"] = function(x, o) {
  return x === o
};
cljs.core.not = function not(x) {
  if(cljs.core.truth_(x)) {
    return false
  }else {
    return true
  }
};
cljs.core.conj = function() {
  var conj = null;
  var conj__2 = function(coll, x) {
    return cljs.core._conj.call(null, coll, x)
  };
  var conj__3 = function() {
    var G__4740__delegate = function(coll, x, xs) {
      while(true) {
        if(cljs.core.truth_(xs)) {
          var G__4741 = conj.call(null, coll, x);
          var G__4742 = cljs.core.first.call(null, xs);
          var G__4743 = cljs.core.next.call(null, xs);
          coll = G__4741;
          x = G__4742;
          xs = G__4743;
          continue
        }else {
          return conj.call(null, coll, x)
        }
        break
      }
    };
    var G__4740 = function(coll, x, var_args) {
      var xs = null;
      if(goog.isDef(var_args)) {
        xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4740__delegate.call(this, coll, x, xs)
    };
    G__4740.cljs$lang$maxFixedArity = 2;
    G__4740.cljs$lang$applyTo = function(arglist__4744) {
      var coll = cljs.core.first(arglist__4744);
      var x = cljs.core.first(cljs.core.next(arglist__4744));
      var xs = cljs.core.rest(cljs.core.next(arglist__4744));
      return G__4740__delegate(coll, x, xs)
    };
    G__4740.cljs$lang$arity$variadic = G__4740__delegate;
    return G__4740
  }();
  conj = function(coll, x, var_args) {
    var xs = var_args;
    switch(arguments.length) {
      case 2:
        return conj__2.call(this, coll, x);
      default:
        return conj__3.cljs$lang$arity$variadic(coll, x, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  conj.cljs$lang$maxFixedArity = 2;
  conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
  conj.cljs$lang$arity$2 = conj__2;
  conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
  return conj
}();
cljs.core.empty = function empty(coll) {
  return cljs.core._empty.call(null, coll)
};
void 0;
cljs.core.accumulating_seq_count = function accumulating_seq_count(coll) {
  var s__4745 = cljs.core.seq.call(null, coll);
  var acc__4746 = 0;
  while(true) {
    if(cljs.core.counted_QMARK_.call(null, s__4745)) {
      return acc__4746 + cljs.core._count.call(null, s__4745)
    }else {
      var G__4747 = cljs.core.next.call(null, s__4745);
      var G__4748 = acc__4746 + 1;
      s__4745 = G__4747;
      acc__4746 = G__4748;
      continue
    }
    break
  }
};
cljs.core.count = function count(coll) {
  if(cljs.core.counted_QMARK_.call(null, coll)) {
    return cljs.core._count.call(null, coll)
  }else {
    return cljs.core.accumulating_seq_count.call(null, coll)
  }
};
void 0;
cljs.core.linear_traversal_nth = function() {
  var linear_traversal_nth = null;
  var linear_traversal_nth__2 = function(coll, n) {
    if(coll == null) {
      throw new Error("Index out of bounds");
    }else {
      if(n === 0) {
        if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
          return cljs.core.first.call(null, coll)
        }else {
          throw new Error("Index out of bounds");
        }
      }else {
        if(cljs.core.indexed_QMARK_.call(null, coll)) {
          return cljs.core._nth.call(null, coll, n)
        }else {
          if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
            return linear_traversal_nth.call(null, cljs.core.next.call(null, coll), n - 1)
          }else {
            if("\ufdd0'else") {
              throw new Error("Index out of bounds");
            }else {
              return null
            }
          }
        }
      }
    }
  };
  var linear_traversal_nth__3 = function(coll, n, not_found) {
    if(coll == null) {
      return not_found
    }else {
      if(n === 0) {
        if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
          return cljs.core.first.call(null, coll)
        }else {
          return not_found
        }
      }else {
        if(cljs.core.indexed_QMARK_.call(null, coll)) {
          return cljs.core._nth.call(null, coll, n, not_found)
        }else {
          if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
            return linear_traversal_nth.call(null, cljs.core.next.call(null, coll), n - 1, not_found)
          }else {
            if("\ufdd0'else") {
              return not_found
            }else {
              return null
            }
          }
        }
      }
    }
  };
  linear_traversal_nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return linear_traversal_nth__2.call(this, coll, n);
      case 3:
        return linear_traversal_nth__3.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
  linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
  return linear_traversal_nth
}();
cljs.core.nth = function() {
  var nth = null;
  var nth__2 = function(coll, n) {
    if(coll != null) {
      if(function() {
        var G__4749__4750 = coll;
        if(G__4749__4750 != null) {
          if(function() {
            var or__3824__auto____4751 = G__4749__4750.cljs$lang$protocol_mask$partition0$ & 16;
            if(or__3824__auto____4751) {
              return or__3824__auto____4751
            }else {
              return G__4749__4750.cljs$core$IIndexed$
            }
          }()) {
            return true
          }else {
            if(!G__4749__4750.cljs$lang$protocol_mask$partition0$) {
              return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__4749__4750)
            }else {
              return false
            }
          }
        }else {
          return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__4749__4750)
        }
      }()) {
        return cljs.core._nth.call(null, coll, Math.floor(n))
      }else {
        return cljs.core.linear_traversal_nth.call(null, coll, Math.floor(n))
      }
    }else {
      return null
    }
  };
  var nth__3 = function(coll, n, not_found) {
    if(coll != null) {
      if(function() {
        var G__4752__4753 = coll;
        if(G__4752__4753 != null) {
          if(function() {
            var or__3824__auto____4754 = G__4752__4753.cljs$lang$protocol_mask$partition0$ & 16;
            if(or__3824__auto____4754) {
              return or__3824__auto____4754
            }else {
              return G__4752__4753.cljs$core$IIndexed$
            }
          }()) {
            return true
          }else {
            if(!G__4752__4753.cljs$lang$protocol_mask$partition0$) {
              return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__4752__4753)
            }else {
              return false
            }
          }
        }else {
          return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__4752__4753)
        }
      }()) {
        return cljs.core._nth.call(null, coll, Math.floor(n), not_found)
      }else {
        return cljs.core.linear_traversal_nth.call(null, coll, Math.floor(n), not_found)
      }
    }else {
      return not_found
    }
  };
  nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return nth__2.call(this, coll, n);
      case 3:
        return nth__3.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  nth.cljs$lang$arity$2 = nth__2;
  nth.cljs$lang$arity$3 = nth__3;
  return nth
}();
cljs.core.get = function() {
  var get = null;
  var get__2 = function(o, k) {
    return cljs.core._lookup.call(null, o, k)
  };
  var get__3 = function(o, k, not_found) {
    return cljs.core._lookup.call(null, o, k, not_found)
  };
  get = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return get__2.call(this, o, k);
      case 3:
        return get__3.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  get.cljs$lang$arity$2 = get__2;
  get.cljs$lang$arity$3 = get__3;
  return get
}();
cljs.core.assoc = function() {
  var assoc = null;
  var assoc__3 = function(coll, k, v) {
    return cljs.core._assoc.call(null, coll, k, v)
  };
  var assoc__4 = function() {
    var G__4756__delegate = function(coll, k, v, kvs) {
      while(true) {
        var ret__4755 = assoc.call(null, coll, k, v);
        if(cljs.core.truth_(kvs)) {
          var G__4757 = ret__4755;
          var G__4758 = cljs.core.first.call(null, kvs);
          var G__4759 = cljs.core.second.call(null, kvs);
          var G__4760 = cljs.core.nnext.call(null, kvs);
          coll = G__4757;
          k = G__4758;
          v = G__4759;
          kvs = G__4760;
          continue
        }else {
          return ret__4755
        }
        break
      }
    };
    var G__4756 = function(coll, k, v, var_args) {
      var kvs = null;
      if(goog.isDef(var_args)) {
        kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__4756__delegate.call(this, coll, k, v, kvs)
    };
    G__4756.cljs$lang$maxFixedArity = 3;
    G__4756.cljs$lang$applyTo = function(arglist__4761) {
      var coll = cljs.core.first(arglist__4761);
      var k = cljs.core.first(cljs.core.next(arglist__4761));
      var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4761)));
      var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4761)));
      return G__4756__delegate(coll, k, v, kvs)
    };
    G__4756.cljs$lang$arity$variadic = G__4756__delegate;
    return G__4756
  }();
  assoc = function(coll, k, v, var_args) {
    var kvs = var_args;
    switch(arguments.length) {
      case 3:
        return assoc__3.call(this, coll, k, v);
      default:
        return assoc__4.cljs$lang$arity$variadic(coll, k, v, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  assoc.cljs$lang$maxFixedArity = 3;
  assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
  assoc.cljs$lang$arity$3 = assoc__3;
  assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
  return assoc
}();
cljs.core.dissoc = function() {
  var dissoc = null;
  var dissoc__1 = function(coll) {
    return coll
  };
  var dissoc__2 = function(coll, k) {
    return cljs.core._dissoc.call(null, coll, k)
  };
  var dissoc__3 = function() {
    var G__4763__delegate = function(coll, k, ks) {
      while(true) {
        var ret__4762 = dissoc.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__4764 = ret__4762;
          var G__4765 = cljs.core.first.call(null, ks);
          var G__4766 = cljs.core.next.call(null, ks);
          coll = G__4764;
          k = G__4765;
          ks = G__4766;
          continue
        }else {
          return ret__4762
        }
        break
      }
    };
    var G__4763 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4763__delegate.call(this, coll, k, ks)
    };
    G__4763.cljs$lang$maxFixedArity = 2;
    G__4763.cljs$lang$applyTo = function(arglist__4767) {
      var coll = cljs.core.first(arglist__4767);
      var k = cljs.core.first(cljs.core.next(arglist__4767));
      var ks = cljs.core.rest(cljs.core.next(arglist__4767));
      return G__4763__delegate(coll, k, ks)
    };
    G__4763.cljs$lang$arity$variadic = G__4763__delegate;
    return G__4763
  }();
  dissoc = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return dissoc__1.call(this, coll);
      case 2:
        return dissoc__2.call(this, coll, k);
      default:
        return dissoc__3.cljs$lang$arity$variadic(coll, k, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  dissoc.cljs$lang$maxFixedArity = 2;
  dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
  dissoc.cljs$lang$arity$1 = dissoc__1;
  dissoc.cljs$lang$arity$2 = dissoc__2;
  dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
  return dissoc
}();
cljs.core.with_meta = function with_meta(o, meta) {
  return cljs.core._with_meta.call(null, o, meta)
};
cljs.core.meta = function meta(o) {
  if(function() {
    var G__4768__4769 = o;
    if(G__4768__4769 != null) {
      if(function() {
        var or__3824__auto____4770 = G__4768__4769.cljs$lang$protocol_mask$partition0$ & 65536;
        if(or__3824__auto____4770) {
          return or__3824__auto____4770
        }else {
          return G__4768__4769.cljs$core$IMeta$
        }
      }()) {
        return true
      }else {
        if(!G__4768__4769.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, G__4768__4769)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, G__4768__4769)
    }
  }()) {
    return cljs.core._meta.call(null, o)
  }else {
    return null
  }
};
cljs.core.peek = function peek(coll) {
  return cljs.core._peek.call(null, coll)
};
cljs.core.pop = function pop(coll) {
  return cljs.core._pop.call(null, coll)
};
cljs.core.disj = function() {
  var disj = null;
  var disj__1 = function(coll) {
    return coll
  };
  var disj__2 = function(coll, k) {
    return cljs.core._disjoin.call(null, coll, k)
  };
  var disj__3 = function() {
    var G__4772__delegate = function(coll, k, ks) {
      while(true) {
        var ret__4771 = disj.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__4773 = ret__4771;
          var G__4774 = cljs.core.first.call(null, ks);
          var G__4775 = cljs.core.next.call(null, ks);
          coll = G__4773;
          k = G__4774;
          ks = G__4775;
          continue
        }else {
          return ret__4771
        }
        break
      }
    };
    var G__4772 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4772__delegate.call(this, coll, k, ks)
    };
    G__4772.cljs$lang$maxFixedArity = 2;
    G__4772.cljs$lang$applyTo = function(arglist__4776) {
      var coll = cljs.core.first(arglist__4776);
      var k = cljs.core.first(cljs.core.next(arglist__4776));
      var ks = cljs.core.rest(cljs.core.next(arglist__4776));
      return G__4772__delegate(coll, k, ks)
    };
    G__4772.cljs$lang$arity$variadic = G__4772__delegate;
    return G__4772
  }();
  disj = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return disj__1.call(this, coll);
      case 2:
        return disj__2.call(this, coll, k);
      default:
        return disj__3.cljs$lang$arity$variadic(coll, k, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  disj.cljs$lang$maxFixedArity = 2;
  disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
  disj.cljs$lang$arity$1 = disj__1;
  disj.cljs$lang$arity$2 = disj__2;
  disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
  return disj
}();
cljs.core.hash = function hash(o) {
  return cljs.core._hash.call(null, o)
};
cljs.core.empty_QMARK_ = function empty_QMARK_(coll) {
  return cljs.core.not.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.coll_QMARK_ = function coll_QMARK_(x) {
  if(x == null) {
    return false
  }else {
    var G__4777__4778 = x;
    if(G__4777__4778 != null) {
      if(function() {
        var or__3824__auto____4779 = G__4777__4778.cljs$lang$protocol_mask$partition0$ & 8;
        if(or__3824__auto____4779) {
          return or__3824__auto____4779
        }else {
          return G__4777__4778.cljs$core$ICollection$
        }
      }()) {
        return true
      }else {
        if(!G__4777__4778.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.ICollection, G__4777__4778)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ICollection, G__4777__4778)
    }
  }
};
cljs.core.set_QMARK_ = function set_QMARK_(x) {
  if(x == null) {
    return false
  }else {
    var G__4780__4781 = x;
    if(G__4780__4781 != null) {
      if(function() {
        var or__3824__auto____4782 = G__4780__4781.cljs$lang$protocol_mask$partition0$ & 2048;
        if(or__3824__auto____4782) {
          return or__3824__auto____4782
        }else {
          return G__4780__4781.cljs$core$ISet$
        }
      }()) {
        return true
      }else {
        if(!G__4780__4781.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.ISet, G__4780__4781)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISet, G__4780__4781)
    }
  }
};
cljs.core.associative_QMARK_ = function associative_QMARK_(x) {
  var G__4783__4784 = x;
  if(G__4783__4784 != null) {
    if(function() {
      var or__3824__auto____4785 = G__4783__4784.cljs$lang$protocol_mask$partition0$ & 256;
      if(or__3824__auto____4785) {
        return or__3824__auto____4785
      }else {
        return G__4783__4784.cljs$core$IAssociative$
      }
    }()) {
      return true
    }else {
      if(!G__4783__4784.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, G__4783__4784)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, G__4783__4784)
  }
};
cljs.core.sequential_QMARK_ = function sequential_QMARK_(x) {
  var G__4786__4787 = x;
  if(G__4786__4787 != null) {
    if(function() {
      var or__3824__auto____4788 = G__4786__4787.cljs$lang$protocol_mask$partition0$ & 8388608;
      if(or__3824__auto____4788) {
        return or__3824__auto____4788
      }else {
        return G__4786__4787.cljs$core$ISequential$
      }
    }()) {
      return true
    }else {
      if(!G__4786__4787.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISequential, G__4786__4787)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ISequential, G__4786__4787)
  }
};
cljs.core.counted_QMARK_ = function counted_QMARK_(x) {
  var G__4789__4790 = x;
  if(G__4789__4790 != null) {
    if(function() {
      var or__3824__auto____4791 = G__4789__4790.cljs$lang$protocol_mask$partition0$ & 2;
      if(or__3824__auto____4791) {
        return or__3824__auto____4791
      }else {
        return G__4789__4790.cljs$core$ICounted$
      }
    }()) {
      return true
    }else {
      if(!G__4789__4790.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.ICounted, G__4789__4790)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ICounted, G__4789__4790)
  }
};
cljs.core.indexed_QMARK_ = function indexed_QMARK_(x) {
  var G__4792__4793 = x;
  if(G__4792__4793 != null) {
    if(function() {
      var or__3824__auto____4794 = G__4792__4793.cljs$lang$protocol_mask$partition0$ & 16;
      if(or__3824__auto____4794) {
        return or__3824__auto____4794
      }else {
        return G__4792__4793.cljs$core$IIndexed$
      }
    }()) {
      return true
    }else {
      if(!G__4792__4793.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__4792__4793)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__4792__4793)
  }
};
cljs.core.reduceable_QMARK_ = function reduceable_QMARK_(x) {
  var G__4795__4796 = x;
  if(G__4795__4796 != null) {
    if(function() {
      var or__3824__auto____4797 = G__4795__4796.cljs$lang$protocol_mask$partition0$ & 262144;
      if(or__3824__auto____4797) {
        return or__3824__auto____4797
      }else {
        return G__4795__4796.cljs$core$IReduce$
      }
    }()) {
      return true
    }else {
      if(!G__4795__4796.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__4795__4796)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__4795__4796)
  }
};
cljs.core.map_QMARK_ = function map_QMARK_(x) {
  if(x == null) {
    return false
  }else {
    var G__4798__4799 = x;
    if(G__4798__4799 != null) {
      if(function() {
        var or__3824__auto____4800 = G__4798__4799.cljs$lang$protocol_mask$partition0$ & 512;
        if(or__3824__auto____4800) {
          return or__3824__auto____4800
        }else {
          return G__4798__4799.cljs$core$IMap$
        }
      }()) {
        return true
      }else {
        if(!G__4798__4799.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.IMap, G__4798__4799)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMap, G__4798__4799)
    }
  }
};
cljs.core.vector_QMARK_ = function vector_QMARK_(x) {
  var G__4801__4802 = x;
  if(G__4801__4802 != null) {
    if(function() {
      var or__3824__auto____4803 = G__4801__4802.cljs$lang$protocol_mask$partition0$ & 8192;
      if(or__3824__auto____4803) {
        return or__3824__auto____4803
      }else {
        return G__4801__4802.cljs$core$IVector$
      }
    }()) {
      return true
    }else {
      if(!G__4801__4802.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IVector, G__4801__4802)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IVector, G__4801__4802)
  }
};
cljs.core.js_obj = function() {
  var js_obj = null;
  var js_obj__0 = function() {
    return{}
  };
  var js_obj__1 = function() {
    var G__4804__delegate = function(keyvals) {
      return cljs.core.apply.call(null, goog.object.create, keyvals)
    };
    var G__4804 = function(var_args) {
      var keyvals = null;
      if(goog.isDef(var_args)) {
        keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__4804__delegate.call(this, keyvals)
    };
    G__4804.cljs$lang$maxFixedArity = 0;
    G__4804.cljs$lang$applyTo = function(arglist__4805) {
      var keyvals = cljs.core.seq(arglist__4805);
      return G__4804__delegate(keyvals)
    };
    G__4804.cljs$lang$arity$variadic = G__4804__delegate;
    return G__4804
  }();
  js_obj = function(var_args) {
    var keyvals = var_args;
    switch(arguments.length) {
      case 0:
        return js_obj__0.call(this);
      default:
        return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0))
    }
    throw"Invalid arity: " + arguments.length;
  };
  js_obj.cljs$lang$maxFixedArity = 0;
  js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
  js_obj.cljs$lang$arity$0 = js_obj__0;
  js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
  return js_obj
}();
cljs.core.js_keys = function js_keys(obj) {
  var keys__4806 = [];
  goog.object.forEach.call(null, obj, function(val, key, obj) {
    return keys__4806.push(key)
  });
  return keys__4806
};
cljs.core.js_delete = function js_delete(obj, key) {
  return delete obj[key]
};
cljs.core.array_copy = function array_copy(from, i, to, j, len) {
  var i__4807 = i;
  var j__4808 = j;
  var len__4809 = len;
  while(true) {
    if(len__4809 === 0) {
      return to
    }else {
      to[j__4808] = from[i__4807];
      var G__4810 = i__4807 + 1;
      var G__4811 = j__4808 + 1;
      var G__4812 = len__4809 - 1;
      i__4807 = G__4810;
      j__4808 = G__4811;
      len__4809 = G__4812;
      continue
    }
    break
  }
};
cljs.core.array_copy_downward = function array_copy_downward(from, i, to, j, len) {
  var i__4813 = i + (len - 1);
  var j__4814 = j + (len - 1);
  var len__4815 = len;
  while(true) {
    if(len__4815 === 0) {
      return to
    }else {
      to[j__4814] = from[i__4813];
      var G__4816 = i__4813 - 1;
      var G__4817 = j__4814 - 1;
      var G__4818 = len__4815 - 1;
      i__4813 = G__4816;
      j__4814 = G__4817;
      len__4815 = G__4818;
      continue
    }
    break
  }
};
cljs.core.lookup_sentinel = {};
cljs.core.false_QMARK_ = function false_QMARK_(x) {
  return x === false
};
cljs.core.true_QMARK_ = function true_QMARK_(x) {
  return x === true
};
cljs.core.undefined_QMARK_ = function undefined_QMARK_(x) {
  return void 0 === x
};
cljs.core.instance_QMARK_ = function instance_QMARK_(t, o) {
  return o != null && (o instanceof t || o.constructor === t || t === Object)
};
cljs.core.seq_QMARK_ = function seq_QMARK_(s) {
  if(s == null) {
    return false
  }else {
    var G__4819__4820 = s;
    if(G__4819__4820 != null) {
      if(function() {
        var or__3824__auto____4821 = G__4819__4820.cljs$lang$protocol_mask$partition0$ & 64;
        if(or__3824__auto____4821) {
          return or__3824__auto____4821
        }else {
          return G__4819__4820.cljs$core$ISeq$
        }
      }()) {
        return true
      }else {
        if(!G__4819__4820.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__4819__4820)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__4819__4820)
    }
  }
};
cljs.core.seqable_QMARK_ = function seqable_QMARK_(s) {
  var G__4822__4823 = s;
  if(G__4822__4823 != null) {
    if(function() {
      var or__3824__auto____4824 = G__4822__4823.cljs$lang$protocol_mask$partition0$ & 4194304;
      if(or__3824__auto____4824) {
        return or__3824__auto____4824
      }else {
        return G__4822__4823.cljs$core$ISeqable$
      }
    }()) {
      return true
    }else {
      if(!G__4822__4823.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, G__4822__4823)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, G__4822__4823)
  }
};
cljs.core.boolean$ = function boolean$(x) {
  if(cljs.core.truth_(x)) {
    return true
  }else {
    return false
  }
};
cljs.core.string_QMARK_ = function string_QMARK_(x) {
  var and__3822__auto____4825 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3822__auto____4825)) {
    return cljs.core.not.call(null, function() {
      var or__3824__auto____4826 = x.charAt(0) === "\ufdd0";
      if(or__3824__auto____4826) {
        return or__3824__auto____4826
      }else {
        return x.charAt(0) === "\ufdd1"
      }
    }())
  }else {
    return and__3822__auto____4825
  }
};
cljs.core.keyword_QMARK_ = function keyword_QMARK_(x) {
  var and__3822__auto____4827 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3822__auto____4827)) {
    return x.charAt(0) === "\ufdd0"
  }else {
    return and__3822__auto____4827
  }
};
cljs.core.symbol_QMARK_ = function symbol_QMARK_(x) {
  var and__3822__auto____4828 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3822__auto____4828)) {
    return x.charAt(0) === "\ufdd1"
  }else {
    return and__3822__auto____4828
  }
};
cljs.core.number_QMARK_ = function number_QMARK_(n) {
  return goog.isNumber.call(null, n)
};
cljs.core.fn_QMARK_ = function fn_QMARK_(f) {
  return goog.isFunction.call(null, f)
};
cljs.core.ifn_QMARK_ = function ifn_QMARK_(f) {
  var or__3824__auto____4829 = cljs.core.fn_QMARK_.call(null, f);
  if(or__3824__auto____4829) {
    return or__3824__auto____4829
  }else {
    var G__4830__4831 = f;
    if(G__4830__4831 != null) {
      if(function() {
        var or__3824__auto____4832 = G__4830__4831.cljs$lang$protocol_mask$partition0$ & 1;
        if(or__3824__auto____4832) {
          return or__3824__auto____4832
        }else {
          return G__4830__4831.cljs$core$IFn$
        }
      }()) {
        return true
      }else {
        if(!G__4830__4831.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.IFn, G__4830__4831)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IFn, G__4830__4831)
    }
  }
};
cljs.core.integer_QMARK_ = function integer_QMARK_(n) {
  var and__3822__auto____4833 = cljs.core.number_QMARK_.call(null, n);
  if(and__3822__auto____4833) {
    return n == n.toFixed()
  }else {
    return and__3822__auto____4833
  }
};
cljs.core.contains_QMARK_ = function contains_QMARK_(coll, v) {
  if(cljs.core._lookup.call(null, coll, v, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel) {
    return false
  }else {
    return true
  }
};
cljs.core.find = function find(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3822__auto____4834 = coll;
    if(cljs.core.truth_(and__3822__auto____4834)) {
      var and__3822__auto____4835 = cljs.core.associative_QMARK_.call(null, coll);
      if(and__3822__auto____4835) {
        return cljs.core.contains_QMARK_.call(null, coll, k)
      }else {
        return and__3822__auto____4835
      }
    }else {
      return and__3822__auto____4834
    }
  }())) {
    return cljs.core.PersistentVector.fromArray([k, cljs.core._lookup.call(null, coll, k)])
  }else {
    return null
  }
};
cljs.core.distinct_QMARK_ = function() {
  var distinct_QMARK_ = null;
  var distinct_QMARK___1 = function(x) {
    return true
  };
  var distinct_QMARK___2 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var distinct_QMARK___3 = function() {
    var G__4840__delegate = function(x, y, more) {
      if(cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))) {
        var s__4836 = cljs.core.set([y, x]);
        var xs__4837 = more;
        while(true) {
          var x__4838 = cljs.core.first.call(null, xs__4837);
          var etc__4839 = cljs.core.next.call(null, xs__4837);
          if(cljs.core.truth_(xs__4837)) {
            if(cljs.core.contains_QMARK_.call(null, s__4836, x__4838)) {
              return false
            }else {
              var G__4841 = cljs.core.conj.call(null, s__4836, x__4838);
              var G__4842 = etc__4839;
              s__4836 = G__4841;
              xs__4837 = G__4842;
              continue
            }
          }else {
            return true
          }
          break
        }
      }else {
        return false
      }
    };
    var G__4840 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4840__delegate.call(this, x, y, more)
    };
    G__4840.cljs$lang$maxFixedArity = 2;
    G__4840.cljs$lang$applyTo = function(arglist__4843) {
      var x = cljs.core.first(arglist__4843);
      var y = cljs.core.first(cljs.core.next(arglist__4843));
      var more = cljs.core.rest(cljs.core.next(arglist__4843));
      return G__4840__delegate(x, y, more)
    };
    G__4840.cljs$lang$arity$variadic = G__4840__delegate;
    return G__4840
  }();
  distinct_QMARK_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return distinct_QMARK___1.call(this, x);
      case 2:
        return distinct_QMARK___2.call(this, x, y);
      default:
        return distinct_QMARK___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  distinct_QMARK_.cljs$lang$maxFixedArity = 2;
  distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
  distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
  distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
  distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
  return distinct_QMARK_
}();
cljs.core.compare = function compare(x, y) {
  if(cljs.core.type.call(null, x) === cljs.core.type.call(null, y)) {
    return goog.array.defaultCompare.call(null, x, y)
  }else {
    if(x == null) {
      return-1
    }else {
      if(y == null) {
        return 1
      }else {
        if("\ufdd0'else") {
          throw new Error("compare on non-nil objects of different types");
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.fn__GT_comparator = function fn__GT_comparator(f) {
  if(cljs.core._EQ_.call(null, f, cljs.core.compare)) {
    return cljs.core.compare
  }else {
    return function(x, y) {
      var r__4844 = f.call(null, x, y);
      if(cljs.core.number_QMARK_.call(null, r__4844)) {
        return r__4844
      }else {
        if(cljs.core.truth_(r__4844)) {
          return-1
        }else {
          if(cljs.core.truth_(f.call(null, y, x))) {
            return 1
          }else {
            return 0
          }
        }
      }
    }
  }
};
void 0;
cljs.core.sort = function() {
  var sort = null;
  var sort__1 = function(coll) {
    return sort.call(null, cljs.core.compare, coll)
  };
  var sort__2 = function(comp, coll) {
    if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
      var a__4845 = cljs.core.to_array.call(null, coll);
      goog.array.stableSort.call(null, a__4845, cljs.core.fn__GT_comparator.call(null, comp));
      return cljs.core.seq.call(null, a__4845)
    }else {
      return cljs.core.List.EMPTY
    }
  };
  sort = function(comp, coll) {
    switch(arguments.length) {
      case 1:
        return sort__1.call(this, comp);
      case 2:
        return sort__2.call(this, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  sort.cljs$lang$arity$1 = sort__1;
  sort.cljs$lang$arity$2 = sort__2;
  return sort
}();
cljs.core.sort_by = function() {
  var sort_by = null;
  var sort_by__2 = function(keyfn, coll) {
    return sort_by.call(null, keyfn, cljs.core.compare, coll)
  };
  var sort_by__3 = function(keyfn, comp, coll) {
    return cljs.core.sort.call(null, function(x, y) {
      return cljs.core.fn__GT_comparator.call(null, comp).call(null, keyfn.call(null, x), keyfn.call(null, y))
    }, coll)
  };
  sort_by = function(keyfn, comp, coll) {
    switch(arguments.length) {
      case 2:
        return sort_by__2.call(this, keyfn, comp);
      case 3:
        return sort_by__3.call(this, keyfn, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  sort_by.cljs$lang$arity$2 = sort_by__2;
  sort_by.cljs$lang$arity$3 = sort_by__3;
  return sort_by
}();
cljs.core.seq_reduce = function() {
  var seq_reduce = null;
  var seq_reduce__2 = function(f, coll) {
    var temp__3971__auto____4846 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3971__auto____4846)) {
      var s__4847 = temp__3971__auto____4846;
      return cljs.core.reduce.call(null, f, cljs.core.first.call(null, s__4847), cljs.core.next.call(null, s__4847))
    }else {
      return f.call(null)
    }
  };
  var seq_reduce__3 = function(f, val, coll) {
    var val__4848 = val;
    var coll__4849 = cljs.core.seq.call(null, coll);
    while(true) {
      if(cljs.core.truth_(coll__4849)) {
        var nval__4850 = f.call(null, val__4848, cljs.core.first.call(null, coll__4849));
        if(cljs.core.reduced_QMARK_.call(null, nval__4850)) {
          return cljs.core.deref.call(null, nval__4850)
        }else {
          var G__4851 = nval__4850;
          var G__4852 = cljs.core.next.call(null, coll__4849);
          val__4848 = G__4851;
          coll__4849 = G__4852;
          continue
        }
      }else {
        return val__4848
      }
      break
    }
  };
  seq_reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return seq_reduce__2.call(this, f, val);
      case 3:
        return seq_reduce__3.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
  seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
  return seq_reduce
}();
cljs.core.reduce = function() {
  var reduce = null;
  var reduce__2 = function(f, coll) {
    if(function() {
      var G__4853__4854 = coll;
      if(G__4853__4854 != null) {
        if(function() {
          var or__3824__auto____4855 = G__4853__4854.cljs$lang$protocol_mask$partition0$ & 262144;
          if(or__3824__auto____4855) {
            return or__3824__auto____4855
          }else {
            return G__4853__4854.cljs$core$IReduce$
          }
        }()) {
          return true
        }else {
          if(!G__4853__4854.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__4853__4854)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__4853__4854)
      }
    }()) {
      return cljs.core._reduce.call(null, coll, f)
    }else {
      return cljs.core.seq_reduce.call(null, f, coll)
    }
  };
  var reduce__3 = function(f, val, coll) {
    if(function() {
      var G__4856__4857 = coll;
      if(G__4856__4857 != null) {
        if(function() {
          var or__3824__auto____4858 = G__4856__4857.cljs$lang$protocol_mask$partition0$ & 262144;
          if(or__3824__auto____4858) {
            return or__3824__auto____4858
          }else {
            return G__4856__4857.cljs$core$IReduce$
          }
        }()) {
          return true
        }else {
          if(!G__4856__4857.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__4856__4857)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__4856__4857)
      }
    }()) {
      return cljs.core._reduce.call(null, coll, f, val)
    }else {
      return cljs.core.seq_reduce.call(null, f, val, coll)
    }
  };
  reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return reduce__2.call(this, f, val);
      case 3:
        return reduce__3.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  reduce.cljs$lang$arity$2 = reduce__2;
  reduce.cljs$lang$arity$3 = reduce__3;
  return reduce
}();
cljs.core.reduce_kv = function reduce_kv(f, init, coll) {
  return cljs.core._kv_reduce.call(null, coll, f, init)
};
cljs.core.Reduced = function(val) {
  this.val = val;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 16384
};
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.Reduced")
};
cljs.core.Reduced.prototype.cljs$core$IDeref$ = true;
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = function(o) {
  var this__4859 = this;
  return this__4859.val
};
cljs.core.Reduced;
cljs.core.reduced_QMARK_ = function reduced_QMARK_(r) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.Reduced, r)
};
cljs.core.reduced = function reduced(x) {
  return new cljs.core.Reduced(x)
};
cljs.core._PLUS_ = function() {
  var _PLUS_ = null;
  var _PLUS___0 = function() {
    return 0
  };
  var _PLUS___1 = function(x) {
    return x
  };
  var _PLUS___2 = function(x, y) {
    return x + y
  };
  var _PLUS___3 = function() {
    var G__4860__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _PLUS_, x + y, more)
    };
    var G__4860 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4860__delegate.call(this, x, y, more)
    };
    G__4860.cljs$lang$maxFixedArity = 2;
    G__4860.cljs$lang$applyTo = function(arglist__4861) {
      var x = cljs.core.first(arglist__4861);
      var y = cljs.core.first(cljs.core.next(arglist__4861));
      var more = cljs.core.rest(cljs.core.next(arglist__4861));
      return G__4860__delegate(x, y, more)
    };
    G__4860.cljs$lang$arity$variadic = G__4860__delegate;
    return G__4860
  }();
  _PLUS_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _PLUS___0.call(this);
      case 1:
        return _PLUS___1.call(this, x);
      case 2:
        return _PLUS___2.call(this, x, y);
      default:
        return _PLUS___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _PLUS_.cljs$lang$maxFixedArity = 2;
  _PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
  _PLUS_.cljs$lang$arity$0 = _PLUS___0;
  _PLUS_.cljs$lang$arity$1 = _PLUS___1;
  _PLUS_.cljs$lang$arity$2 = _PLUS___2;
  _PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
  return _PLUS_
}();
cljs.core._ = function() {
  var _ = null;
  var ___1 = function(x) {
    return-x
  };
  var ___2 = function(x, y) {
    return x - y
  };
  var ___3 = function() {
    var G__4862__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _, x - y, more)
    };
    var G__4862 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4862__delegate.call(this, x, y, more)
    };
    G__4862.cljs$lang$maxFixedArity = 2;
    G__4862.cljs$lang$applyTo = function(arglist__4863) {
      var x = cljs.core.first(arglist__4863);
      var y = cljs.core.first(cljs.core.next(arglist__4863));
      var more = cljs.core.rest(cljs.core.next(arglist__4863));
      return G__4862__delegate(x, y, more)
    };
    G__4862.cljs$lang$arity$variadic = G__4862__delegate;
    return G__4862
  }();
  _ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return ___1.call(this, x);
      case 2:
        return ___2.call(this, x, y);
      default:
        return ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _.cljs$lang$maxFixedArity = 2;
  _.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
  _.cljs$lang$arity$1 = ___1;
  _.cljs$lang$arity$2 = ___2;
  _.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
  return _
}();
cljs.core._STAR_ = function() {
  var _STAR_ = null;
  var _STAR___0 = function() {
    return 1
  };
  var _STAR___1 = function(x) {
    return x
  };
  var _STAR___2 = function(x, y) {
    return x * y
  };
  var _STAR___3 = function() {
    var G__4864__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _STAR_, x * y, more)
    };
    var G__4864 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4864__delegate.call(this, x, y, more)
    };
    G__4864.cljs$lang$maxFixedArity = 2;
    G__4864.cljs$lang$applyTo = function(arglist__4865) {
      var x = cljs.core.first(arglist__4865);
      var y = cljs.core.first(cljs.core.next(arglist__4865));
      var more = cljs.core.rest(cljs.core.next(arglist__4865));
      return G__4864__delegate(x, y, more)
    };
    G__4864.cljs$lang$arity$variadic = G__4864__delegate;
    return G__4864
  }();
  _STAR_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _STAR___0.call(this);
      case 1:
        return _STAR___1.call(this, x);
      case 2:
        return _STAR___2.call(this, x, y);
      default:
        return _STAR___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _STAR_.cljs$lang$maxFixedArity = 2;
  _STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
  _STAR_.cljs$lang$arity$0 = _STAR___0;
  _STAR_.cljs$lang$arity$1 = _STAR___1;
  _STAR_.cljs$lang$arity$2 = _STAR___2;
  _STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
  return _STAR_
}();
cljs.core._SLASH_ = function() {
  var _SLASH_ = null;
  var _SLASH___1 = function(x) {
    return _SLASH_.call(null, 1, x)
  };
  var _SLASH___2 = function(x, y) {
    return x / y
  };
  var _SLASH___3 = function() {
    var G__4866__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _SLASH_, _SLASH_.call(null, x, y), more)
    };
    var G__4866 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4866__delegate.call(this, x, y, more)
    };
    G__4866.cljs$lang$maxFixedArity = 2;
    G__4866.cljs$lang$applyTo = function(arglist__4867) {
      var x = cljs.core.first(arglist__4867);
      var y = cljs.core.first(cljs.core.next(arglist__4867));
      var more = cljs.core.rest(cljs.core.next(arglist__4867));
      return G__4866__delegate(x, y, more)
    };
    G__4866.cljs$lang$arity$variadic = G__4866__delegate;
    return G__4866
  }();
  _SLASH_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _SLASH___1.call(this, x);
      case 2:
        return _SLASH___2.call(this, x, y);
      default:
        return _SLASH___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _SLASH_.cljs$lang$maxFixedArity = 2;
  _SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
  _SLASH_.cljs$lang$arity$1 = _SLASH___1;
  _SLASH_.cljs$lang$arity$2 = _SLASH___2;
  _SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
  return _SLASH_
}();
cljs.core._LT_ = function() {
  var _LT_ = null;
  var _LT___1 = function(x) {
    return true
  };
  var _LT___2 = function(x, y) {
    return x < y
  };
  var _LT___3 = function() {
    var G__4868__delegate = function(x, y, more) {
      while(true) {
        if(x < y) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__4869 = y;
            var G__4870 = cljs.core.first.call(null, more);
            var G__4871 = cljs.core.next.call(null, more);
            x = G__4869;
            y = G__4870;
            more = G__4871;
            continue
          }else {
            return y < cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__4868 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4868__delegate.call(this, x, y, more)
    };
    G__4868.cljs$lang$maxFixedArity = 2;
    G__4868.cljs$lang$applyTo = function(arglist__4872) {
      var x = cljs.core.first(arglist__4872);
      var y = cljs.core.first(cljs.core.next(arglist__4872));
      var more = cljs.core.rest(cljs.core.next(arglist__4872));
      return G__4868__delegate(x, y, more)
    };
    G__4868.cljs$lang$arity$variadic = G__4868__delegate;
    return G__4868
  }();
  _LT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT___1.call(this, x);
      case 2:
        return _LT___2.call(this, x, y);
      default:
        return _LT___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT_.cljs$lang$maxFixedArity = 2;
  _LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
  _LT_.cljs$lang$arity$1 = _LT___1;
  _LT_.cljs$lang$arity$2 = _LT___2;
  _LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
  return _LT_
}();
cljs.core._LT__EQ_ = function() {
  var _LT__EQ_ = null;
  var _LT__EQ___1 = function(x) {
    return true
  };
  var _LT__EQ___2 = function(x, y) {
    return x <= y
  };
  var _LT__EQ___3 = function() {
    var G__4873__delegate = function(x, y, more) {
      while(true) {
        if(x <= y) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__4874 = y;
            var G__4875 = cljs.core.first.call(null, more);
            var G__4876 = cljs.core.next.call(null, more);
            x = G__4874;
            y = G__4875;
            more = G__4876;
            continue
          }else {
            return y <= cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__4873 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4873__delegate.call(this, x, y, more)
    };
    G__4873.cljs$lang$maxFixedArity = 2;
    G__4873.cljs$lang$applyTo = function(arglist__4877) {
      var x = cljs.core.first(arglist__4877);
      var y = cljs.core.first(cljs.core.next(arglist__4877));
      var more = cljs.core.rest(cljs.core.next(arglist__4877));
      return G__4873__delegate(x, y, more)
    };
    G__4873.cljs$lang$arity$variadic = G__4873__delegate;
    return G__4873
  }();
  _LT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT__EQ___1.call(this, x);
      case 2:
        return _LT__EQ___2.call(this, x, y);
      default:
        return _LT__EQ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT__EQ_.cljs$lang$maxFixedArity = 2;
  _LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
  _LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
  _LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
  _LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
  return _LT__EQ_
}();
cljs.core._GT_ = function() {
  var _GT_ = null;
  var _GT___1 = function(x) {
    return true
  };
  var _GT___2 = function(x, y) {
    return x > y
  };
  var _GT___3 = function() {
    var G__4878__delegate = function(x, y, more) {
      while(true) {
        if(x > y) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__4879 = y;
            var G__4880 = cljs.core.first.call(null, more);
            var G__4881 = cljs.core.next.call(null, more);
            x = G__4879;
            y = G__4880;
            more = G__4881;
            continue
          }else {
            return y > cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__4878 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4878__delegate.call(this, x, y, more)
    };
    G__4878.cljs$lang$maxFixedArity = 2;
    G__4878.cljs$lang$applyTo = function(arglist__4882) {
      var x = cljs.core.first(arglist__4882);
      var y = cljs.core.first(cljs.core.next(arglist__4882));
      var more = cljs.core.rest(cljs.core.next(arglist__4882));
      return G__4878__delegate(x, y, more)
    };
    G__4878.cljs$lang$arity$variadic = G__4878__delegate;
    return G__4878
  }();
  _GT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT___1.call(this, x);
      case 2:
        return _GT___2.call(this, x, y);
      default:
        return _GT___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT_.cljs$lang$maxFixedArity = 2;
  _GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
  _GT_.cljs$lang$arity$1 = _GT___1;
  _GT_.cljs$lang$arity$2 = _GT___2;
  _GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
  return _GT_
}();
cljs.core._GT__EQ_ = function() {
  var _GT__EQ_ = null;
  var _GT__EQ___1 = function(x) {
    return true
  };
  var _GT__EQ___2 = function(x, y) {
    return x >= y
  };
  var _GT__EQ___3 = function() {
    var G__4883__delegate = function(x, y, more) {
      while(true) {
        if(x >= y) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__4884 = y;
            var G__4885 = cljs.core.first.call(null, more);
            var G__4886 = cljs.core.next.call(null, more);
            x = G__4884;
            y = G__4885;
            more = G__4886;
            continue
          }else {
            return y >= cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__4883 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4883__delegate.call(this, x, y, more)
    };
    G__4883.cljs$lang$maxFixedArity = 2;
    G__4883.cljs$lang$applyTo = function(arglist__4887) {
      var x = cljs.core.first(arglist__4887);
      var y = cljs.core.first(cljs.core.next(arglist__4887));
      var more = cljs.core.rest(cljs.core.next(arglist__4887));
      return G__4883__delegate(x, y, more)
    };
    G__4883.cljs$lang$arity$variadic = G__4883__delegate;
    return G__4883
  }();
  _GT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT__EQ___1.call(this, x);
      case 2:
        return _GT__EQ___2.call(this, x, y);
      default:
        return _GT__EQ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT__EQ_.cljs$lang$maxFixedArity = 2;
  _GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
  _GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
  _GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
  _GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
  return _GT__EQ_
}();
cljs.core.dec = function dec(x) {
  return x - 1
};
cljs.core.max = function() {
  var max = null;
  var max__1 = function(x) {
    return x
  };
  var max__2 = function(x, y) {
    return x > y ? x : y
  };
  var max__3 = function() {
    var G__4888__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, max, x > y ? x : y, more)
    };
    var G__4888 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4888__delegate.call(this, x, y, more)
    };
    G__4888.cljs$lang$maxFixedArity = 2;
    G__4888.cljs$lang$applyTo = function(arglist__4889) {
      var x = cljs.core.first(arglist__4889);
      var y = cljs.core.first(cljs.core.next(arglist__4889));
      var more = cljs.core.rest(cljs.core.next(arglist__4889));
      return G__4888__delegate(x, y, more)
    };
    G__4888.cljs$lang$arity$variadic = G__4888__delegate;
    return G__4888
  }();
  max = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return max__1.call(this, x);
      case 2:
        return max__2.call(this, x, y);
      default:
        return max__3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  max.cljs$lang$maxFixedArity = 2;
  max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
  max.cljs$lang$arity$1 = max__1;
  max.cljs$lang$arity$2 = max__2;
  max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
  return max
}();
cljs.core.min = function() {
  var min = null;
  var min__1 = function(x) {
    return x
  };
  var min__2 = function(x, y) {
    return x < y ? x : y
  };
  var min__3 = function() {
    var G__4890__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, min, x < y ? x : y, more)
    };
    var G__4890 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4890__delegate.call(this, x, y, more)
    };
    G__4890.cljs$lang$maxFixedArity = 2;
    G__4890.cljs$lang$applyTo = function(arglist__4891) {
      var x = cljs.core.first(arglist__4891);
      var y = cljs.core.first(cljs.core.next(arglist__4891));
      var more = cljs.core.rest(cljs.core.next(arglist__4891));
      return G__4890__delegate(x, y, more)
    };
    G__4890.cljs$lang$arity$variadic = G__4890__delegate;
    return G__4890
  }();
  min = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return min__1.call(this, x);
      case 2:
        return min__2.call(this, x, y);
      default:
        return min__3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  min.cljs$lang$maxFixedArity = 2;
  min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
  min.cljs$lang$arity$1 = min__1;
  min.cljs$lang$arity$2 = min__2;
  min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
  return min
}();
cljs.core.fix = function fix(q) {
  if(q >= 0) {
    return Math.floor.call(null, q)
  }else {
    return Math.ceil.call(null, q)
  }
};
cljs.core.int$ = function int$(x) {
  return cljs.core.fix.call(null, x)
};
cljs.core.long$ = function long$(x) {
  return cljs.core.fix.call(null, x)
};
cljs.core.mod = function mod(n, d) {
  return n % d
};
cljs.core.quot = function quot(n, d) {
  var rem__4892 = n % d;
  return cljs.core.fix.call(null, (n - rem__4892) / d)
};
cljs.core.rem = function rem(n, d) {
  var q__4893 = cljs.core.quot.call(null, n, d);
  return n - d * q__4893
};
cljs.core.rand = function() {
  var rand = null;
  var rand__0 = function() {
    return Math.random.call(null)
  };
  var rand__1 = function(n) {
    return n * rand.call(null)
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__0.call(this);
      case 1:
        return rand__1.call(this, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  rand.cljs$lang$arity$0 = rand__0;
  rand.cljs$lang$arity$1 = rand__1;
  return rand
}();
cljs.core.rand_int = function rand_int(n) {
  return cljs.core.fix.call(null, cljs.core.rand.call(null, n))
};
cljs.core.bit_xor = function bit_xor(x, y) {
  return x ^ y
};
cljs.core.bit_and = function bit_and(x, y) {
  return x & y
};
cljs.core.bit_or = function bit_or(x, y) {
  return x | y
};
cljs.core.bit_and_not = function bit_and_not(x, y) {
  return x & ~y
};
cljs.core.bit_clear = function bit_clear(x, n) {
  return x & ~(1 << n)
};
cljs.core.bit_flip = function bit_flip(x, n) {
  return x ^ 1 << n
};
cljs.core.bit_not = function bit_not(x) {
  return~x
};
cljs.core.bit_set = function bit_set(x, n) {
  return x | 1 << n
};
cljs.core.bit_test = function bit_test(x, n) {
  return(x & 1 << n) != 0
};
cljs.core.bit_shift_left = function bit_shift_left(x, n) {
  return x << n
};
cljs.core.bit_shift_right = function bit_shift_right(x, n) {
  return x >> n
};
cljs.core.bit_shift_right_zero_fill = function bit_shift_right_zero_fill(x, n) {
  return x >>> n
};
cljs.core.bit_count = function bit_count(n) {
  var c__4894 = 0;
  var n__4895 = n;
  while(true) {
    if(n__4895 === 0) {
      return c__4894
    }else {
      var G__4896 = c__4894 + 1;
      var G__4897 = n__4895 & n__4895 - 1;
      c__4894 = G__4896;
      n__4895 = G__4897;
      continue
    }
    break
  }
};
cljs.core._EQ__EQ_ = function() {
  var _EQ__EQ_ = null;
  var _EQ__EQ___1 = function(x) {
    return true
  };
  var _EQ__EQ___2 = function(x, y) {
    return cljs.core._equiv.call(null, x, y)
  };
  var _EQ__EQ___3 = function() {
    var G__4898__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_EQ__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__4899 = y;
            var G__4900 = cljs.core.first.call(null, more);
            var G__4901 = cljs.core.next.call(null, more);
            x = G__4899;
            y = G__4900;
            more = G__4901;
            continue
          }else {
            return _EQ__EQ_.call(null, y, cljs.core.first.call(null, more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__4898 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__4898__delegate.call(this, x, y, more)
    };
    G__4898.cljs$lang$maxFixedArity = 2;
    G__4898.cljs$lang$applyTo = function(arglist__4902) {
      var x = cljs.core.first(arglist__4902);
      var y = cljs.core.first(cljs.core.next(arglist__4902));
      var more = cljs.core.rest(cljs.core.next(arglist__4902));
      return G__4898__delegate(x, y, more)
    };
    G__4898.cljs$lang$arity$variadic = G__4898__delegate;
    return G__4898
  }();
  _EQ__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ__EQ___1.call(this, x);
      case 2:
        return _EQ__EQ___2.call(this, x, y);
      default:
        return _EQ__EQ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ__EQ_.cljs$lang$maxFixedArity = 2;
  _EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
  _EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
  _EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
  _EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
  return _EQ__EQ_
}();
cljs.core.pos_QMARK_ = function pos_QMARK_(n) {
  return n > 0
};
cljs.core.zero_QMARK_ = function zero_QMARK_(n) {
  return n === 0
};
cljs.core.neg_QMARK_ = function neg_QMARK_(x) {
  return x < 0
};
cljs.core.nthnext = function nthnext(coll, n) {
  var n__4903 = n;
  var xs__4904 = cljs.core.seq.call(null, coll);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3822__auto____4905 = xs__4904;
      if(cljs.core.truth_(and__3822__auto____4905)) {
        return n__4903 > 0
      }else {
        return and__3822__auto____4905
      }
    }())) {
      var G__4906 = n__4903 - 1;
      var G__4907 = cljs.core.next.call(null, xs__4904);
      n__4903 = G__4906;
      xs__4904 = G__4907;
      continue
    }else {
      return xs__4904
    }
    break
  }
};
cljs.core.str_STAR_ = function() {
  var str_STAR_ = null;
  var str_STAR___0 = function() {
    return""
  };
  var str_STAR___1 = function(x) {
    if(x == null) {
      return""
    }else {
      if("\ufdd0'else") {
        return x.toString()
      }else {
        return null
      }
    }
  };
  var str_STAR___2 = function() {
    var G__4908__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__4909 = sb.append(str_STAR_.call(null, cljs.core.first.call(null, more)));
            var G__4910 = cljs.core.next.call(null, more);
            sb = G__4909;
            more = G__4910;
            continue
          }else {
            return str_STAR_.call(null, sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str_STAR_.call(null, x)), ys)
    };
    var G__4908 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__4908__delegate.call(this, x, ys)
    };
    G__4908.cljs$lang$maxFixedArity = 1;
    G__4908.cljs$lang$applyTo = function(arglist__4911) {
      var x = cljs.core.first(arglist__4911);
      var ys = cljs.core.rest(arglist__4911);
      return G__4908__delegate(x, ys)
    };
    G__4908.cljs$lang$arity$variadic = G__4908__delegate;
    return G__4908
  }();
  str_STAR_ = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str_STAR___0.call(this);
      case 1:
        return str_STAR___1.call(this, x);
      default:
        return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  str_STAR_.cljs$lang$maxFixedArity = 1;
  str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
  str_STAR_.cljs$lang$arity$0 = str_STAR___0;
  str_STAR_.cljs$lang$arity$1 = str_STAR___1;
  str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
  return str_STAR_
}();
cljs.core.str = function() {
  var str = null;
  var str__0 = function() {
    return""
  };
  var str__1 = function(x) {
    if(cljs.core.symbol_QMARK_.call(null, x)) {
      return x.substring(2, x.length)
    }else {
      if(cljs.core.keyword_QMARK_.call(null, x)) {
        return cljs.core.str_STAR_.call(null, ":", x.substring(2, x.length))
      }else {
        if(x == null) {
          return""
        }else {
          if("\ufdd0'else") {
            return x.toString()
          }else {
            return null
          }
        }
      }
    }
  };
  var str__2 = function() {
    var G__4912__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__4913 = sb.append(str.call(null, cljs.core.first.call(null, more)));
            var G__4914 = cljs.core.next.call(null, more);
            sb = G__4913;
            more = G__4914;
            continue
          }else {
            return cljs.core.str_STAR_.call(null, sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str.call(null, x)), ys)
    };
    var G__4912 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__4912__delegate.call(this, x, ys)
    };
    G__4912.cljs$lang$maxFixedArity = 1;
    G__4912.cljs$lang$applyTo = function(arglist__4915) {
      var x = cljs.core.first(arglist__4915);
      var ys = cljs.core.rest(arglist__4915);
      return G__4912__delegate(x, ys)
    };
    G__4912.cljs$lang$arity$variadic = G__4912__delegate;
    return G__4912
  }();
  str = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str__0.call(this);
      case 1:
        return str__1.call(this, x);
      default:
        return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  str.cljs$lang$maxFixedArity = 1;
  str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
  str.cljs$lang$arity$0 = str__0;
  str.cljs$lang$arity$1 = str__1;
  str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
  return str
}();
cljs.core.subs = function() {
  var subs = null;
  var subs__2 = function(s, start) {
    return s.substring(start)
  };
  var subs__3 = function(s, start, end) {
    return s.substring(start, end)
  };
  subs = function(s, start, end) {
    switch(arguments.length) {
      case 2:
        return subs__2.call(this, s, start);
      case 3:
        return subs__3.call(this, s, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  subs.cljs$lang$arity$2 = subs__2;
  subs.cljs$lang$arity$3 = subs__3;
  return subs
}();
cljs.core.symbol = function() {
  var symbol = null;
  var symbol__1 = function(name) {
    if(cljs.core.symbol_QMARK_.call(null, name)) {
      name
    }else {
      if(cljs.core.keyword_QMARK_.call(null, name)) {
        cljs.core.str_STAR_.call(null, "\ufdd1", "'", cljs.core.subs.call(null, name, 2))
      }else {
      }
    }
    return cljs.core.str_STAR_.call(null, "\ufdd1", "'", name)
  };
  var symbol__2 = function(ns, name) {
    return symbol.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  symbol = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return symbol__1.call(this, ns);
      case 2:
        return symbol__2.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  symbol.cljs$lang$arity$1 = symbol__1;
  symbol.cljs$lang$arity$2 = symbol__2;
  return symbol
}();
cljs.core.keyword = function() {
  var keyword = null;
  var keyword__1 = function(name) {
    if(cljs.core.keyword_QMARK_.call(null, name)) {
      return name
    }else {
      if(cljs.core.symbol_QMARK_.call(null, name)) {
        return cljs.core.str_STAR_.call(null, "\ufdd0", "'", cljs.core.subs.call(null, name, 2))
      }else {
        if("\ufdd0'else") {
          return cljs.core.str_STAR_.call(null, "\ufdd0", "'", name)
        }else {
          return null
        }
      }
    }
  };
  var keyword__2 = function(ns, name) {
    return keyword.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  keyword = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return keyword__1.call(this, ns);
      case 2:
        return keyword__2.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  keyword.cljs$lang$arity$1 = keyword__1;
  keyword.cljs$lang$arity$2 = keyword__2;
  return keyword
}();
cljs.core.equiv_sequential = function equiv_sequential(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.sequential_QMARK_.call(null, y) ? function() {
    var xs__4916 = cljs.core.seq.call(null, x);
    var ys__4917 = cljs.core.seq.call(null, y);
    while(true) {
      if(xs__4916 == null) {
        return ys__4917 == null
      }else {
        if(ys__4917 == null) {
          return false
        }else {
          if(cljs.core._EQ_.call(null, cljs.core.first.call(null, xs__4916), cljs.core.first.call(null, ys__4917))) {
            var G__4918 = cljs.core.next.call(null, xs__4916);
            var G__4919 = cljs.core.next.call(null, ys__4917);
            xs__4916 = G__4918;
            ys__4917 = G__4919;
            continue
          }else {
            if("\ufdd0'else") {
              return false
            }else {
              return null
            }
          }
        }
      }
      break
    }
  }() : null)
};
cljs.core.hash_combine = function hash_combine(seed, hash) {
  return seed ^ hash + 2654435769 + (seed << 6) + (seed >> 2)
};
cljs.core.hash_coll = function hash_coll(coll) {
  return cljs.core.reduce.call(null, function(p1__4920_SHARP_, p2__4921_SHARP_) {
    return cljs.core.hash_combine.call(null, p1__4920_SHARP_, cljs.core.hash.call(null, p2__4921_SHARP_))
  }, cljs.core.hash.call(null, cljs.core.first.call(null, coll)), cljs.core.next.call(null, coll))
};
void 0;
void 0;
cljs.core.hash_imap = function hash_imap(m) {
  var h__4922 = 0;
  var s__4923 = cljs.core.seq.call(null, m);
  while(true) {
    if(cljs.core.truth_(s__4923)) {
      var e__4924 = cljs.core.first.call(null, s__4923);
      var G__4925 = (h__4922 + (cljs.core.hash.call(null, cljs.core.key.call(null, e__4924)) ^ cljs.core.hash.call(null, cljs.core.val.call(null, e__4924)))) % 4503599627370496;
      var G__4926 = cljs.core.next.call(null, s__4923);
      h__4922 = G__4925;
      s__4923 = G__4926;
      continue
    }else {
      return h__4922
    }
    break
  }
};
cljs.core.hash_iset = function hash_iset(s) {
  var h__4927 = 0;
  var s__4928 = cljs.core.seq.call(null, s);
  while(true) {
    if(cljs.core.truth_(s__4928)) {
      var e__4929 = cljs.core.first.call(null, s__4928);
      var G__4930 = (h__4927 + cljs.core.hash.call(null, e__4929)) % 4503599627370496;
      var G__4931 = cljs.core.next.call(null, s__4928);
      h__4927 = G__4930;
      s__4928 = G__4931;
      continue
    }else {
      return h__4927
    }
    break
  }
};
void 0;
cljs.core.extend_object_BANG_ = function extend_object_BANG_(obj, fn_map) {
  var G__4932__4933 = cljs.core.seq.call(null, fn_map);
  if(cljs.core.truth_(G__4932__4933)) {
    var G__4935__4937 = cljs.core.first.call(null, G__4932__4933);
    var vec__4936__4938 = G__4935__4937;
    var key_name__4939 = cljs.core.nth.call(null, vec__4936__4938, 0, null);
    var f__4940 = cljs.core.nth.call(null, vec__4936__4938, 1, null);
    var G__4932__4941 = G__4932__4933;
    var G__4935__4942 = G__4935__4937;
    var G__4932__4943 = G__4932__4941;
    while(true) {
      var vec__4944__4945 = G__4935__4942;
      var key_name__4946 = cljs.core.nth.call(null, vec__4944__4945, 0, null);
      var f__4947 = cljs.core.nth.call(null, vec__4944__4945, 1, null);
      var G__4932__4948 = G__4932__4943;
      var str_name__4949 = cljs.core.name.call(null, key_name__4946);
      obj[str_name__4949] = f__4947;
      var temp__3974__auto____4950 = cljs.core.next.call(null, G__4932__4948);
      if(cljs.core.truth_(temp__3974__auto____4950)) {
        var G__4932__4951 = temp__3974__auto____4950;
        var G__4952 = cljs.core.first.call(null, G__4932__4951);
        var G__4953 = G__4932__4951;
        G__4935__4942 = G__4952;
        G__4932__4943 = G__4953;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return obj
};
cljs.core.List = function(meta, first, rest, count, __hash) {
  this.meta = meta;
  this.first = first;
  this.rest = rest;
  this.count = count;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32706670
};
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.List")
};
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__4954 = this;
  var h__364__auto____4955 = this__4954.__hash;
  if(h__364__auto____4955 != null) {
    return h__364__auto____4955
  }else {
    var h__364__auto____4956 = cljs.core.hash_coll.call(null, coll);
    this__4954.__hash = h__364__auto____4956;
    return h__364__auto____4956
  }
};
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__4957 = this;
  return new cljs.core.List(this__4957.meta, o, coll, this__4957.count + 1, null)
};
cljs.core.List.prototype.cljs$core$ASeq$ = true;
cljs.core.List.prototype.toString = function() {
  var this__4958 = this;
  var this$__4959 = this;
  return cljs.core.pr_str.call(null, this$__4959)
};
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__4960 = this;
  return coll
};
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__4961 = this;
  return this__4961.count
};
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__4962 = this;
  return this__4962.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__4963 = this;
  return cljs.core._rest.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__4964 = this;
  return this__4964.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__4965 = this;
  return this__4965.rest
};
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__4966 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__4967 = this;
  return new cljs.core.List(meta, this__4967.first, this__4967.rest, this__4967.count, this__4967.__hash)
};
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__4968 = this;
  return this__4968.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__4969 = this;
  return cljs.core.List.EMPTY
};
cljs.core.List.prototype.cljs$core$IList$ = true;
cljs.core.List;
cljs.core.EmptyList = function(meta) {
  this.meta = meta;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32706638
};
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.EmptyList")
};
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__4970 = this;
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__4971 = this;
  return new cljs.core.List(this__4971.meta, o, null, 1, null)
};
cljs.core.EmptyList.prototype.toString = function() {
  var this__4972 = this;
  var this$__4973 = this;
  return cljs.core.pr_str.call(null, this$__4973)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__4974 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__4975 = this;
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__4976 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__4977 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__4978 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__4979 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__4980 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__4981 = this;
  return new cljs.core.EmptyList(meta)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__4982 = this;
  return this__4982.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__4983 = this;
  return coll
};
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = new cljs.core.EmptyList(null);
cljs.core.reversible_QMARK_ = function reversible_QMARK_(coll) {
  var G__4984__4985 = coll;
  if(G__4984__4985 != null) {
    if(function() {
      var or__3824__auto____4986 = G__4984__4985.cljs$lang$protocol_mask$partition0$ & 67108864;
      if(or__3824__auto____4986) {
        return or__3824__auto____4986
      }else {
        return G__4984__4985.cljs$core$IReversible$
      }
    }()) {
      return true
    }else {
      if(!G__4984__4985.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IReversible, G__4984__4985)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IReversible, G__4984__4985)
  }
};
cljs.core.rseq = function rseq(coll) {
  return cljs.core._rseq.call(null, coll)
};
cljs.core.reverse = function reverse(coll) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, coll)
};
cljs.core.list = function() {
  var list__delegate = function(items) {
    return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, cljs.core.reverse.call(null, items))
  };
  var list = function(var_args) {
    var items = null;
    if(goog.isDef(var_args)) {
      items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return list__delegate.call(this, items)
  };
  list.cljs$lang$maxFixedArity = 0;
  list.cljs$lang$applyTo = function(arglist__4987) {
    var items = cljs.core.seq(arglist__4987);
    return list__delegate(items)
  };
  list.cljs$lang$arity$variadic = list__delegate;
  return list
}();
cljs.core.Cons = function(meta, first, rest, __hash) {
  this.meta = meta;
  this.first = first;
  this.rest = rest;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32702572
};
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.Cons")
};
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__4988 = this;
  var h__364__auto____4989 = this__4988.__hash;
  if(h__364__auto____4989 != null) {
    return h__364__auto____4989
  }else {
    var h__364__auto____4990 = cljs.core.hash_coll.call(null, coll);
    this__4988.__hash = h__364__auto____4990;
    return h__364__auto____4990
  }
};
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__4991 = this;
  return new cljs.core.Cons(null, o, coll, this__4991.__hash)
};
cljs.core.Cons.prototype.cljs$core$ASeq$ = true;
cljs.core.Cons.prototype.toString = function() {
  var this__4992 = this;
  var this$__4993 = this;
  return cljs.core.pr_str.call(null, this$__4993)
};
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__4994 = this;
  return coll
};
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__4995 = this;
  return this__4995.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__4996 = this;
  if(this__4996.rest == null) {
    return cljs.core.List.EMPTY
  }else {
    return this__4996.rest
  }
};
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__4997 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__4998 = this;
  return new cljs.core.Cons(meta, this__4998.first, this__4998.rest, this__4998.__hash)
};
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__4999 = this;
  return this__4999.meta
};
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__5000 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__5000.meta)
};
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
cljs.core.cons = function cons(x, coll) {
  if(function() {
    var or__3824__auto____5001 = coll == null;
    if(or__3824__auto____5001) {
      return or__3824__auto____5001
    }else {
      var G__5002__5003 = coll;
      if(G__5002__5003 != null) {
        if(function() {
          var or__3824__auto____5004 = G__5002__5003.cljs$lang$protocol_mask$partition0$ & 64;
          if(or__3824__auto____5004) {
            return or__3824__auto____5004
          }else {
            return G__5002__5003.cljs$core$ISeq$
          }
        }()) {
          return true
        }else {
          if(!G__5002__5003.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__5002__5003)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__5002__5003)
      }
    }
  }()) {
    return new cljs.core.Cons(null, x, coll, null)
  }else {
    return new cljs.core.Cons(null, x, cljs.core.seq.call(null, coll), null)
  }
};
cljs.core.list_QMARK_ = function list_QMARK_(x) {
  var G__5005__5006 = x;
  if(G__5005__5006 != null) {
    if(function() {
      var or__3824__auto____5007 = G__5005__5006.cljs$lang$protocol_mask$partition0$ & 16777216;
      if(or__3824__auto____5007) {
        return or__3824__auto____5007
      }else {
        return G__5005__5006.cljs$core$IList$
      }
    }()) {
      return true
    }else {
      if(!G__5005__5006.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IList, G__5005__5006)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IList, G__5005__5006)
  }
};
cljs.core.IReduce["string"] = true;
cljs.core._reduce["string"] = function() {
  var G__5008 = null;
  var G__5008__2 = function(string, f) {
    return cljs.core.ci_reduce.call(null, string, f)
  };
  var G__5008__3 = function(string, f, start) {
    return cljs.core.ci_reduce.call(null, string, f, start)
  };
  G__5008 = function(string, f, start) {
    switch(arguments.length) {
      case 2:
        return G__5008__2.call(this, string, f);
      case 3:
        return G__5008__3.call(this, string, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5008
}();
cljs.core.ILookup["string"] = true;
cljs.core._lookup["string"] = function() {
  var G__5009 = null;
  var G__5009__2 = function(string, k) {
    return cljs.core._nth.call(null, string, k)
  };
  var G__5009__3 = function(string, k, not_found) {
    return cljs.core._nth.call(null, string, k, not_found)
  };
  G__5009 = function(string, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5009__2.call(this, string, k);
      case 3:
        return G__5009__3.call(this, string, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5009
}();
cljs.core.IIndexed["string"] = true;
cljs.core._nth["string"] = function() {
  var G__5010 = null;
  var G__5010__2 = function(string, n) {
    if(n < cljs.core._count.call(null, string)) {
      return string.charAt(n)
    }else {
      return null
    }
  };
  var G__5010__3 = function(string, n, not_found) {
    if(n < cljs.core._count.call(null, string)) {
      return string.charAt(n)
    }else {
      return not_found
    }
  };
  G__5010 = function(string, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5010__2.call(this, string, n);
      case 3:
        return G__5010__3.call(this, string, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5010
}();
cljs.core.ICounted["string"] = true;
cljs.core._count["string"] = function(s) {
  return s.length
};
cljs.core.ISeqable["string"] = true;
cljs.core._seq["string"] = function(string) {
  return cljs.core.prim_seq.call(null, string, 0)
};
cljs.core.IHash["string"] = true;
cljs.core._hash["string"] = function(o) {
  return goog.string.hashCode.call(null, o)
};
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = function() {
  var G__5019 = null;
  var G__5019__2 = function(tsym5013, coll) {
    var tsym5013__5015 = this;
    var this$__5016 = tsym5013__5015;
    return cljs.core.get.call(null, coll, this$__5016.toString())
  };
  var G__5019__3 = function(tsym5014, coll, not_found) {
    var tsym5014__5017 = this;
    var this$__5018 = tsym5014__5017;
    return cljs.core.get.call(null, coll, this$__5018.toString(), not_found)
  };
  G__5019 = function(tsym5014, coll, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5019__2.call(this, tsym5014, coll);
      case 3:
        return G__5019__3.call(this, tsym5014, coll, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5019
}();
String.prototype.apply = function(tsym5011, args5012) {
  return tsym5011.call.apply(tsym5011, [tsym5011].concat(cljs.core.aclone.call(null, args5012)))
};
String["prototype"]["apply"] = function(s, args) {
  if(cljs.core.count.call(null, args) < 2) {
    return cljs.core.get.call(null, args[0], s)
  }else {
    return cljs.core.get.call(null, args[0], s, args[1])
  }
};
cljs.core.lazy_seq_value = function lazy_seq_value(lazy_seq) {
  var x__5020 = lazy_seq.x;
  if(cljs.core.truth_(lazy_seq.realized)) {
    return x__5020
  }else {
    lazy_seq.x = x__5020.call(null);
    lazy_seq.realized = true;
    return lazy_seq.x
  }
};
cljs.core.LazySeq = function(meta, realized, x, __hash) {
  this.meta = meta;
  this.realized = realized;
  this.x = x;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 15925324
};
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.LazySeq")
};
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__5021 = this;
  var h__364__auto____5022 = this__5021.__hash;
  if(h__364__auto____5022 != null) {
    return h__364__auto____5022
  }else {
    var h__364__auto____5023 = cljs.core.hash_coll.call(null, coll);
    this__5021.__hash = h__364__auto____5023;
    return h__364__auto____5023
  }
};
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__5024 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.LazySeq.prototype.toString = function() {
  var this__5025 = this;
  var this$__5026 = this;
  return cljs.core.pr_str.call(null, this$__5026)
};
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__5027 = this;
  return cljs.core.seq.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__5028 = this;
  return cljs.core.first.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__5029 = this;
  return cljs.core.rest.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__5030 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__5031 = this;
  return new cljs.core.LazySeq(meta, this__5031.realized, this__5031.x, this__5031.__hash)
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__5032 = this;
  return this__5032.meta
};
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__5033 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__5033.meta)
};
cljs.core.LazySeq;
cljs.core.to_array = function to_array(s) {
  var ary__5034 = [];
  var s__5035 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.seq.call(null, s__5035))) {
      ary__5034.push(cljs.core.first.call(null, s__5035));
      var G__5036 = cljs.core.next.call(null, s__5035);
      s__5035 = G__5036;
      continue
    }else {
      return ary__5034
    }
    break
  }
};
cljs.core.to_array_2d = function to_array_2d(coll) {
  var ret__5037 = cljs.core.make_array.call(null, cljs.core.count.call(null, coll));
  var i__5038 = 0;
  var xs__5039 = cljs.core.seq.call(null, coll);
  while(true) {
    if(cljs.core.truth_(xs__5039)) {
      ret__5037[i__5038] = cljs.core.to_array.call(null, cljs.core.first.call(null, xs__5039));
      var G__5040 = i__5038 + 1;
      var G__5041 = cljs.core.next.call(null, xs__5039);
      i__5038 = G__5040;
      xs__5039 = G__5041;
      continue
    }else {
    }
    break
  }
  return ret__5037
};
cljs.core.long_array = function() {
  var long_array = null;
  var long_array__1 = function(size_or_seq) {
    if(cljs.core.number_QMARK_.call(null, size_or_seq)) {
      return long_array.call(null, size_or_seq, null)
    }else {
      if(cljs.core.seq_QMARK_.call(null, size_or_seq)) {
        return cljs.core.into_array.call(null, size_or_seq)
      }else {
        if("\ufdd0'else") {
          throw new Error("long-array called with something other than size or ISeq");
        }else {
          return null
        }
      }
    }
  };
  var long_array__2 = function(size, init_val_or_seq) {
    var a__5042 = cljs.core.make_array.call(null, size);
    if(cljs.core.seq_QMARK_.call(null, init_val_or_seq)) {
      var s__5043 = cljs.core.seq.call(null, init_val_or_seq);
      var i__5044 = 0;
      var s__5045 = s__5043;
      while(true) {
        if(cljs.core.truth_(function() {
          var and__3822__auto____5046 = s__5045;
          if(cljs.core.truth_(and__3822__auto____5046)) {
            return i__5044 < size
          }else {
            return and__3822__auto____5046
          }
        }())) {
          a__5042[i__5044] = cljs.core.first.call(null, s__5045);
          var G__5049 = i__5044 + 1;
          var G__5050 = cljs.core.next.call(null, s__5045);
          i__5044 = G__5049;
          s__5045 = G__5050;
          continue
        }else {
          return a__5042
        }
        break
      }
    }else {
      var n__685__auto____5047 = size;
      var i__5048 = 0;
      while(true) {
        if(i__5048 < n__685__auto____5047) {
          a__5042[i__5048] = init_val_or_seq;
          var G__5051 = i__5048 + 1;
          i__5048 = G__5051;
          continue
        }else {
        }
        break
      }
      return a__5042
    }
  };
  long_array = function(size, init_val_or_seq) {
    switch(arguments.length) {
      case 1:
        return long_array__1.call(this, size);
      case 2:
        return long_array__2.call(this, size, init_val_or_seq)
    }
    throw"Invalid arity: " + arguments.length;
  };
  long_array.cljs$lang$arity$1 = long_array__1;
  long_array.cljs$lang$arity$2 = long_array__2;
  return long_array
}();
cljs.core.double_array = function() {
  var double_array = null;
  var double_array__1 = function(size_or_seq) {
    if(cljs.core.number_QMARK_.call(null, size_or_seq)) {
      return double_array.call(null, size_or_seq, null)
    }else {
      if(cljs.core.seq_QMARK_.call(null, size_or_seq)) {
        return cljs.core.into_array.call(null, size_or_seq)
      }else {
        if("\ufdd0'else") {
          throw new Error("double-array called with something other than size or ISeq");
        }else {
          return null
        }
      }
    }
  };
  var double_array__2 = function(size, init_val_or_seq) {
    var a__5052 = cljs.core.make_array.call(null, size);
    if(cljs.core.seq_QMARK_.call(null, init_val_or_seq)) {
      var s__5053 = cljs.core.seq.call(null, init_val_or_seq);
      var i__5054 = 0;
      var s__5055 = s__5053;
      while(true) {
        if(cljs.core.truth_(function() {
          var and__3822__auto____5056 = s__5055;
          if(cljs.core.truth_(and__3822__auto____5056)) {
            return i__5054 < size
          }else {
            return and__3822__auto____5056
          }
        }())) {
          a__5052[i__5054] = cljs.core.first.call(null, s__5055);
          var G__5059 = i__5054 + 1;
          var G__5060 = cljs.core.next.call(null, s__5055);
          i__5054 = G__5059;
          s__5055 = G__5060;
          continue
        }else {
          return a__5052
        }
        break
      }
    }else {
      var n__685__auto____5057 = size;
      var i__5058 = 0;
      while(true) {
        if(i__5058 < n__685__auto____5057) {
          a__5052[i__5058] = init_val_or_seq;
          var G__5061 = i__5058 + 1;
          i__5058 = G__5061;
          continue
        }else {
        }
        break
      }
      return a__5052
    }
  };
  double_array = function(size, init_val_or_seq) {
    switch(arguments.length) {
      case 1:
        return double_array__1.call(this, size);
      case 2:
        return double_array__2.call(this, size, init_val_or_seq)
    }
    throw"Invalid arity: " + arguments.length;
  };
  double_array.cljs$lang$arity$1 = double_array__1;
  double_array.cljs$lang$arity$2 = double_array__2;
  return double_array
}();
cljs.core.object_array = function() {
  var object_array = null;
  var object_array__1 = function(size_or_seq) {
    if(cljs.core.number_QMARK_.call(null, size_or_seq)) {
      return object_array.call(null, size_or_seq, null)
    }else {
      if(cljs.core.seq_QMARK_.call(null, size_or_seq)) {
        return cljs.core.into_array.call(null, size_or_seq)
      }else {
        if("\ufdd0'else") {
          throw new Error("object-array called with something other than size or ISeq");
        }else {
          return null
        }
      }
    }
  };
  var object_array__2 = function(size, init_val_or_seq) {
    var a__5062 = cljs.core.make_array.call(null, size);
    if(cljs.core.seq_QMARK_.call(null, init_val_or_seq)) {
      var s__5063 = cljs.core.seq.call(null, init_val_or_seq);
      var i__5064 = 0;
      var s__5065 = s__5063;
      while(true) {
        if(cljs.core.truth_(function() {
          var and__3822__auto____5066 = s__5065;
          if(cljs.core.truth_(and__3822__auto____5066)) {
            return i__5064 < size
          }else {
            return and__3822__auto____5066
          }
        }())) {
          a__5062[i__5064] = cljs.core.first.call(null, s__5065);
          var G__5069 = i__5064 + 1;
          var G__5070 = cljs.core.next.call(null, s__5065);
          i__5064 = G__5069;
          s__5065 = G__5070;
          continue
        }else {
          return a__5062
        }
        break
      }
    }else {
      var n__685__auto____5067 = size;
      var i__5068 = 0;
      while(true) {
        if(i__5068 < n__685__auto____5067) {
          a__5062[i__5068] = init_val_or_seq;
          var G__5071 = i__5068 + 1;
          i__5068 = G__5071;
          continue
        }else {
        }
        break
      }
      return a__5062
    }
  };
  object_array = function(size, init_val_or_seq) {
    switch(arguments.length) {
      case 1:
        return object_array__1.call(this, size);
      case 2:
        return object_array__2.call(this, size, init_val_or_seq)
    }
    throw"Invalid arity: " + arguments.length;
  };
  object_array.cljs$lang$arity$1 = object_array__1;
  object_array.cljs$lang$arity$2 = object_array__2;
  return object_array
}();
cljs.core.bounded_count = function bounded_count(s, n) {
  if(cljs.core.counted_QMARK_.call(null, s)) {
    return cljs.core.count.call(null, s)
  }else {
    var s__5072 = s;
    var i__5073 = n;
    var sum__5074 = 0;
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3822__auto____5075 = i__5073 > 0;
        if(and__3822__auto____5075) {
          return cljs.core.seq.call(null, s__5072)
        }else {
          return and__3822__auto____5075
        }
      }())) {
        var G__5076 = cljs.core.next.call(null, s__5072);
        var G__5077 = i__5073 - 1;
        var G__5078 = sum__5074 + 1;
        s__5072 = G__5076;
        i__5073 = G__5077;
        sum__5074 = G__5078;
        continue
      }else {
        return sum__5074
      }
      break
    }
  }
};
cljs.core.spread = function spread(arglist) {
  if(arglist == null) {
    return null
  }else {
    if(cljs.core.next.call(null, arglist) == null) {
      return cljs.core.seq.call(null, cljs.core.first.call(null, arglist))
    }else {
      if("\ufdd0'else") {
        return cljs.core.cons.call(null, cljs.core.first.call(null, arglist), spread.call(null, cljs.core.next.call(null, arglist)))
      }else {
        return null
      }
    }
  }
};
cljs.core.concat = function() {
  var concat = null;
  var concat__0 = function() {
    return new cljs.core.LazySeq(null, false, function() {
      return null
    })
  };
  var concat__1 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return x
    })
  };
  var concat__2 = function(x, y) {
    return new cljs.core.LazySeq(null, false, function() {
      var s__5079 = cljs.core.seq.call(null, x);
      if(cljs.core.truth_(s__5079)) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__5079), concat.call(null, cljs.core.rest.call(null, s__5079), y))
      }else {
        return y
      }
    })
  };
  var concat__3 = function() {
    var G__5082__delegate = function(x, y, zs) {
      var cat__5081 = function cat(xys, zs) {
        return new cljs.core.LazySeq(null, false, function() {
          var xys__5080 = cljs.core.seq.call(null, xys);
          if(cljs.core.truth_(xys__5080)) {
            return cljs.core.cons.call(null, cljs.core.first.call(null, xys__5080), cat.call(null, cljs.core.rest.call(null, xys__5080), zs))
          }else {
            if(cljs.core.truth_(zs)) {
              return cat.call(null, cljs.core.first.call(null, zs), cljs.core.next.call(null, zs))
            }else {
              return null
            }
          }
        })
      };
      return cat__5081.call(null, concat.call(null, x, y), zs)
    };
    var G__5082 = function(x, y, var_args) {
      var zs = null;
      if(goog.isDef(var_args)) {
        zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__5082__delegate.call(this, x, y, zs)
    };
    G__5082.cljs$lang$maxFixedArity = 2;
    G__5082.cljs$lang$applyTo = function(arglist__5083) {
      var x = cljs.core.first(arglist__5083);
      var y = cljs.core.first(cljs.core.next(arglist__5083));
      var zs = cljs.core.rest(cljs.core.next(arglist__5083));
      return G__5082__delegate(x, y, zs)
    };
    G__5082.cljs$lang$arity$variadic = G__5082__delegate;
    return G__5082
  }();
  concat = function(x, y, var_args) {
    var zs = var_args;
    switch(arguments.length) {
      case 0:
        return concat__0.call(this);
      case 1:
        return concat__1.call(this, x);
      case 2:
        return concat__2.call(this, x, y);
      default:
        return concat__3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  concat.cljs$lang$maxFixedArity = 2;
  concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
  concat.cljs$lang$arity$0 = concat__0;
  concat.cljs$lang$arity$1 = concat__1;
  concat.cljs$lang$arity$2 = concat__2;
  concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
  return concat
}();
cljs.core.list_STAR_ = function() {
  var list_STAR_ = null;
  var list_STAR___1 = function(args) {
    return cljs.core.seq.call(null, args)
  };
  var list_STAR___2 = function(a, args) {
    return cljs.core.cons.call(null, a, args)
  };
  var list_STAR___3 = function(a, b, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, args))
  };
  var list_STAR___4 = function(a, b, c, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, args)))
  };
  var list_STAR___5 = function() {
    var G__5084__delegate = function(a, b, c, d, more) {
      return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, more)))))
    };
    var G__5084 = function(a, b, c, d, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__5084__delegate.call(this, a, b, c, d, more)
    };
    G__5084.cljs$lang$maxFixedArity = 4;
    G__5084.cljs$lang$applyTo = function(arglist__5085) {
      var a = cljs.core.first(arglist__5085);
      var b = cljs.core.first(cljs.core.next(arglist__5085));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5085)));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5085))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5085))));
      return G__5084__delegate(a, b, c, d, more)
    };
    G__5084.cljs$lang$arity$variadic = G__5084__delegate;
    return G__5084
  }();
  list_STAR_ = function(a, b, c, d, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return list_STAR___1.call(this, a);
      case 2:
        return list_STAR___2.call(this, a, b);
      case 3:
        return list_STAR___3.call(this, a, b, c);
      case 4:
        return list_STAR___4.call(this, a, b, c, d);
      default:
        return list_STAR___5.cljs$lang$arity$variadic(a, b, c, d, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  list_STAR_.cljs$lang$maxFixedArity = 4;
  list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
  list_STAR_.cljs$lang$arity$1 = list_STAR___1;
  list_STAR_.cljs$lang$arity$2 = list_STAR___2;
  list_STAR_.cljs$lang$arity$3 = list_STAR___3;
  list_STAR_.cljs$lang$arity$4 = list_STAR___4;
  list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
  return list_STAR_
}();
cljs.core.transient$ = function transient$(coll) {
  return cljs.core._as_transient.call(null, coll)
};
cljs.core.persistent_BANG_ = function persistent_BANG_(tcoll) {
  return cljs.core._persistent_BANG_.call(null, tcoll)
};
cljs.core.conj_BANG_ = function conj_BANG_(tcoll, val) {
  return cljs.core._conj_BANG_.call(null, tcoll, val)
};
cljs.core.assoc_BANG_ = function assoc_BANG_(tcoll, key, val) {
  return cljs.core._assoc_BANG_.call(null, tcoll, key, val)
};
cljs.core.dissoc_BANG_ = function dissoc_BANG_(tcoll, key) {
  return cljs.core._dissoc_BANG_.call(null, tcoll, key)
};
cljs.core.pop_BANG_ = function pop_BANG_(tcoll) {
  return cljs.core._pop_BANG_.call(null, tcoll)
};
cljs.core.disj_BANG_ = function disj_BANG_(tcoll, val) {
  return cljs.core._disjoin_BANG_.call(null, tcoll, val)
};
void 0;
cljs.core.apply_to = function apply_to(f, argc, args) {
  var args__5086 = cljs.core.seq.call(null, args);
  if(argc === 0) {
    return f.call(null)
  }else {
    var a__5087 = cljs.core._first.call(null, args__5086);
    var args__5088 = cljs.core._rest.call(null, args__5086);
    if(argc === 1) {
      if(f.cljs$lang$arity$1) {
        return f.cljs$lang$arity$1(a__5087)
      }else {
        return f.call(null, a__5087)
      }
    }else {
      var b__5089 = cljs.core._first.call(null, args__5088);
      var args__5090 = cljs.core._rest.call(null, args__5088);
      if(argc === 2) {
        if(f.cljs$lang$arity$2) {
          return f.cljs$lang$arity$2(a__5087, b__5089)
        }else {
          return f.call(null, a__5087, b__5089)
        }
      }else {
        var c__5091 = cljs.core._first.call(null, args__5090);
        var args__5092 = cljs.core._rest.call(null, args__5090);
        if(argc === 3) {
          if(f.cljs$lang$arity$3) {
            return f.cljs$lang$arity$3(a__5087, b__5089, c__5091)
          }else {
            return f.call(null, a__5087, b__5089, c__5091)
          }
        }else {
          var d__5093 = cljs.core._first.call(null, args__5092);
          var args__5094 = cljs.core._rest.call(null, args__5092);
          if(argc === 4) {
            if(f.cljs$lang$arity$4) {
              return f.cljs$lang$arity$4(a__5087, b__5089, c__5091, d__5093)
            }else {
              return f.call(null, a__5087, b__5089, c__5091, d__5093)
            }
          }else {
            var e__5095 = cljs.core._first.call(null, args__5094);
            var args__5096 = cljs.core._rest.call(null, args__5094);
            if(argc === 5) {
              if(f.cljs$lang$arity$5) {
                return f.cljs$lang$arity$5(a__5087, b__5089, c__5091, d__5093, e__5095)
              }else {
                return f.call(null, a__5087, b__5089, c__5091, d__5093, e__5095)
              }
            }else {
              var f__5097 = cljs.core._first.call(null, args__5096);
              var args__5098 = cljs.core._rest.call(null, args__5096);
              if(argc === 6) {
                if(f__5097.cljs$lang$arity$6) {
                  return f__5097.cljs$lang$arity$6(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097)
                }else {
                  return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097)
                }
              }else {
                var g__5099 = cljs.core._first.call(null, args__5098);
                var args__5100 = cljs.core._rest.call(null, args__5098);
                if(argc === 7) {
                  if(f__5097.cljs$lang$arity$7) {
                    return f__5097.cljs$lang$arity$7(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099)
                  }else {
                    return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099)
                  }
                }else {
                  var h__5101 = cljs.core._first.call(null, args__5100);
                  var args__5102 = cljs.core._rest.call(null, args__5100);
                  if(argc === 8) {
                    if(f__5097.cljs$lang$arity$8) {
                      return f__5097.cljs$lang$arity$8(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101)
                    }else {
                      return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101)
                    }
                  }else {
                    var i__5103 = cljs.core._first.call(null, args__5102);
                    var args__5104 = cljs.core._rest.call(null, args__5102);
                    if(argc === 9) {
                      if(f__5097.cljs$lang$arity$9) {
                        return f__5097.cljs$lang$arity$9(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103)
                      }else {
                        return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103)
                      }
                    }else {
                      var j__5105 = cljs.core._first.call(null, args__5104);
                      var args__5106 = cljs.core._rest.call(null, args__5104);
                      if(argc === 10) {
                        if(f__5097.cljs$lang$arity$10) {
                          return f__5097.cljs$lang$arity$10(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105)
                        }else {
                          return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105)
                        }
                      }else {
                        var k__5107 = cljs.core._first.call(null, args__5106);
                        var args__5108 = cljs.core._rest.call(null, args__5106);
                        if(argc === 11) {
                          if(f__5097.cljs$lang$arity$11) {
                            return f__5097.cljs$lang$arity$11(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107)
                          }else {
                            return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107)
                          }
                        }else {
                          var l__5109 = cljs.core._first.call(null, args__5108);
                          var args__5110 = cljs.core._rest.call(null, args__5108);
                          if(argc === 12) {
                            if(f__5097.cljs$lang$arity$12) {
                              return f__5097.cljs$lang$arity$12(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109)
                            }else {
                              return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109)
                            }
                          }else {
                            var m__5111 = cljs.core._first.call(null, args__5110);
                            var args__5112 = cljs.core._rest.call(null, args__5110);
                            if(argc === 13) {
                              if(f__5097.cljs$lang$arity$13) {
                                return f__5097.cljs$lang$arity$13(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111)
                              }else {
                                return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111)
                              }
                            }else {
                              var n__5113 = cljs.core._first.call(null, args__5112);
                              var args__5114 = cljs.core._rest.call(null, args__5112);
                              if(argc === 14) {
                                if(f__5097.cljs$lang$arity$14) {
                                  return f__5097.cljs$lang$arity$14(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113)
                                }else {
                                  return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113)
                                }
                              }else {
                                var o__5115 = cljs.core._first.call(null, args__5114);
                                var args__5116 = cljs.core._rest.call(null, args__5114);
                                if(argc === 15) {
                                  if(f__5097.cljs$lang$arity$15) {
                                    return f__5097.cljs$lang$arity$15(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115)
                                  }else {
                                    return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115)
                                  }
                                }else {
                                  var p__5117 = cljs.core._first.call(null, args__5116);
                                  var args__5118 = cljs.core._rest.call(null, args__5116);
                                  if(argc === 16) {
                                    if(f__5097.cljs$lang$arity$16) {
                                      return f__5097.cljs$lang$arity$16(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115, p__5117)
                                    }else {
                                      return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115, p__5117)
                                    }
                                  }else {
                                    var q__5119 = cljs.core._first.call(null, args__5118);
                                    var args__5120 = cljs.core._rest.call(null, args__5118);
                                    if(argc === 17) {
                                      if(f__5097.cljs$lang$arity$17) {
                                        return f__5097.cljs$lang$arity$17(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115, p__5117, q__5119)
                                      }else {
                                        return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115, p__5117, q__5119)
                                      }
                                    }else {
                                      var r__5121 = cljs.core._first.call(null, args__5120);
                                      var args__5122 = cljs.core._rest.call(null, args__5120);
                                      if(argc === 18) {
                                        if(f__5097.cljs$lang$arity$18) {
                                          return f__5097.cljs$lang$arity$18(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115, p__5117, q__5119, r__5121)
                                        }else {
                                          return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115, p__5117, q__5119, r__5121)
                                        }
                                      }else {
                                        var s__5123 = cljs.core._first.call(null, args__5122);
                                        var args__5124 = cljs.core._rest.call(null, args__5122);
                                        if(argc === 19) {
                                          if(f__5097.cljs$lang$arity$19) {
                                            return f__5097.cljs$lang$arity$19(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115, p__5117, q__5119, r__5121, s__5123)
                                          }else {
                                            return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115, p__5117, q__5119, r__5121, s__5123)
                                          }
                                        }else {
                                          var t__5125 = cljs.core._first.call(null, args__5124);
                                          var args__5126 = cljs.core._rest.call(null, args__5124);
                                          if(argc === 20) {
                                            if(f__5097.cljs$lang$arity$20) {
                                              return f__5097.cljs$lang$arity$20(a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115, p__5117, q__5119, r__5121, s__5123, t__5125)
                                            }else {
                                              return f__5097.call(null, a__5087, b__5089, c__5091, d__5093, e__5095, f__5097, g__5099, h__5101, i__5103, j__5105, k__5107, l__5109, m__5111, n__5113, o__5115, p__5117, q__5119, r__5121, s__5123, t__5125)
                                            }
                                          }else {
                                            throw new Error("Only up to 20 arguments supported on functions");
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
};
void 0;
cljs.core.apply = function() {
  var apply = null;
  var apply__2 = function(f, args) {
    var fixed_arity__5127 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      var bc__5128 = cljs.core.bounded_count.call(null, args, fixed_arity__5127 + 1);
      if(bc__5128 <= fixed_arity__5127) {
        return cljs.core.apply_to.call(null, f, bc__5128, args)
      }else {
        return f.cljs$lang$applyTo(args)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, args))
    }
  };
  var apply__3 = function(f, x, args) {
    var arglist__5129 = cljs.core.list_STAR_.call(null, x, args);
    var fixed_arity__5130 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      var bc__5131 = cljs.core.bounded_count.call(null, arglist__5129, fixed_arity__5130 + 1);
      if(bc__5131 <= fixed_arity__5130) {
        return cljs.core.apply_to.call(null, f, bc__5131, arglist__5129)
      }else {
        return f.cljs$lang$applyTo(arglist__5129)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__5129))
    }
  };
  var apply__4 = function(f, x, y, args) {
    var arglist__5132 = cljs.core.list_STAR_.call(null, x, y, args);
    var fixed_arity__5133 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      var bc__5134 = cljs.core.bounded_count.call(null, arglist__5132, fixed_arity__5133 + 1);
      if(bc__5134 <= fixed_arity__5133) {
        return cljs.core.apply_to.call(null, f, bc__5134, arglist__5132)
      }else {
        return f.cljs$lang$applyTo(arglist__5132)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__5132))
    }
  };
  var apply__5 = function(f, x, y, z, args) {
    var arglist__5135 = cljs.core.list_STAR_.call(null, x, y, z, args);
    var fixed_arity__5136 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      var bc__5137 = cljs.core.bounded_count.call(null, arglist__5135, fixed_arity__5136 + 1);
      if(bc__5137 <= fixed_arity__5136) {
        return cljs.core.apply_to.call(null, f, bc__5137, arglist__5135)
      }else {
        return f.cljs$lang$applyTo(arglist__5135)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__5135))
    }
  };
  var apply__6 = function() {
    var G__5141__delegate = function(f, a, b, c, d, args) {
      var arglist__5138 = cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, args)))));
      var fixed_arity__5139 = f.cljs$lang$maxFixedArity;
      if(cljs.core.truth_(f.cljs$lang$applyTo)) {
        var bc__5140 = cljs.core.bounded_count.call(null, arglist__5138, fixed_arity__5139 + 1);
        if(bc__5140 <= fixed_arity__5139) {
          return cljs.core.apply_to.call(null, f, bc__5140, arglist__5138)
        }else {
          return f.cljs$lang$applyTo(arglist__5138)
        }
      }else {
        return f.apply(f, cljs.core.to_array.call(null, arglist__5138))
      }
    };
    var G__5141 = function(f, a, b, c, d, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__5141__delegate.call(this, f, a, b, c, d, args)
    };
    G__5141.cljs$lang$maxFixedArity = 5;
    G__5141.cljs$lang$applyTo = function(arglist__5142) {
      var f = cljs.core.first(arglist__5142);
      var a = cljs.core.first(cljs.core.next(arglist__5142));
      var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5142)));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5142))));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5142)))));
      var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5142)))));
      return G__5141__delegate(f, a, b, c, d, args)
    };
    G__5141.cljs$lang$arity$variadic = G__5141__delegate;
    return G__5141
  }();
  apply = function(f, a, b, c, d, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 2:
        return apply__2.call(this, f, a);
      case 3:
        return apply__3.call(this, f, a, b);
      case 4:
        return apply__4.call(this, f, a, b, c);
      case 5:
        return apply__5.call(this, f, a, b, c, d);
      default:
        return apply__6.cljs$lang$arity$variadic(f, a, b, c, d, cljs.core.array_seq(arguments, 5))
    }
    throw"Invalid arity: " + arguments.length;
  };
  apply.cljs$lang$maxFixedArity = 5;
  apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
  apply.cljs$lang$arity$2 = apply__2;
  apply.cljs$lang$arity$3 = apply__3;
  apply.cljs$lang$arity$4 = apply__4;
  apply.cljs$lang$arity$5 = apply__5;
  apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
  return apply
}();
cljs.core.vary_meta = function() {
  var vary_meta__delegate = function(obj, f, args) {
    return cljs.core.with_meta.call(null, obj, cljs.core.apply.call(null, f, cljs.core.meta.call(null, obj), args))
  };
  var vary_meta = function(obj, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return vary_meta__delegate.call(this, obj, f, args)
  };
  vary_meta.cljs$lang$maxFixedArity = 2;
  vary_meta.cljs$lang$applyTo = function(arglist__5143) {
    var obj = cljs.core.first(arglist__5143);
    var f = cljs.core.first(cljs.core.next(arglist__5143));
    var args = cljs.core.rest(cljs.core.next(arglist__5143));
    return vary_meta__delegate(obj, f, args)
  };
  vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
  return vary_meta
}();
cljs.core.not_EQ_ = function() {
  var not_EQ_ = null;
  var not_EQ___1 = function(x) {
    return false
  };
  var not_EQ___2 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var not_EQ___3 = function() {
    var G__5144__delegate = function(x, y, more) {
      return cljs.core.not.call(null, cljs.core.apply.call(null, cljs.core._EQ_, x, y, more))
    };
    var G__5144 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__5144__delegate.call(this, x, y, more)
    };
    G__5144.cljs$lang$maxFixedArity = 2;
    G__5144.cljs$lang$applyTo = function(arglist__5145) {
      var x = cljs.core.first(arglist__5145);
      var y = cljs.core.first(cljs.core.next(arglist__5145));
      var more = cljs.core.rest(cljs.core.next(arglist__5145));
      return G__5144__delegate(x, y, more)
    };
    G__5144.cljs$lang$arity$variadic = G__5144__delegate;
    return G__5144
  }();
  not_EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return not_EQ___1.call(this, x);
      case 2:
        return not_EQ___2.call(this, x, y);
      default:
        return not_EQ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  not_EQ_.cljs$lang$maxFixedArity = 2;
  not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
  not_EQ_.cljs$lang$arity$1 = not_EQ___1;
  not_EQ_.cljs$lang$arity$2 = not_EQ___2;
  not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
  return not_EQ_
}();
cljs.core.not_empty = function not_empty(coll) {
  if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
    return coll
  }else {
    return null
  }
};
cljs.core.every_QMARK_ = function every_QMARK_(pred, coll) {
  while(true) {
    if(cljs.core.seq.call(null, coll) == null) {
      return true
    }else {
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, coll)))) {
        var G__5146 = pred;
        var G__5147 = cljs.core.next.call(null, coll);
        pred = G__5146;
        coll = G__5147;
        continue
      }else {
        if("\ufdd0'else") {
          return false
        }else {
          return null
        }
      }
    }
    break
  }
};
cljs.core.not_every_QMARK_ = function not_every_QMARK_(pred, coll) {
  return cljs.core.not.call(null, cljs.core.every_QMARK_.call(null, pred, coll))
};
cljs.core.some = function some(pred, coll) {
  while(true) {
    if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
      var or__3824__auto____5148 = pred.call(null, cljs.core.first.call(null, coll));
      if(cljs.core.truth_(or__3824__auto____5148)) {
        return or__3824__auto____5148
      }else {
        var G__5149 = pred;
        var G__5150 = cljs.core.next.call(null, coll);
        pred = G__5149;
        coll = G__5150;
        continue
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.not_any_QMARK_ = function not_any_QMARK_(pred, coll) {
  return cljs.core.not.call(null, cljs.core.some.call(null, pred, coll))
};
cljs.core.even_QMARK_ = function even_QMARK_(n) {
  if(cljs.core.integer_QMARK_.call(null, n)) {
    return(n & 1) === 0
  }else {
    throw new Error([cljs.core.str("Argument must be an integer: "), cljs.core.str(n)].join(""));
  }
};
cljs.core.odd_QMARK_ = function odd_QMARK_(n) {
  return cljs.core.not.call(null, cljs.core.even_QMARK_.call(null, n))
};
cljs.core.identity = function identity(x) {
  return x
};
cljs.core.complement = function complement(f) {
  return function() {
    var G__5151 = null;
    var G__5151__0 = function() {
      return cljs.core.not.call(null, f.call(null))
    };
    var G__5151__1 = function(x) {
      return cljs.core.not.call(null, f.call(null, x))
    };
    var G__5151__2 = function(x, y) {
      return cljs.core.not.call(null, f.call(null, x, y))
    };
    var G__5151__3 = function() {
      var G__5152__delegate = function(x, y, zs) {
        return cljs.core.not.call(null, cljs.core.apply.call(null, f, x, y, zs))
      };
      var G__5152 = function(x, y, var_args) {
        var zs = null;
        if(goog.isDef(var_args)) {
          zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
        }
        return G__5152__delegate.call(this, x, y, zs)
      };
      G__5152.cljs$lang$maxFixedArity = 2;
      G__5152.cljs$lang$applyTo = function(arglist__5153) {
        var x = cljs.core.first(arglist__5153);
        var y = cljs.core.first(cljs.core.next(arglist__5153));
        var zs = cljs.core.rest(cljs.core.next(arglist__5153));
        return G__5152__delegate(x, y, zs)
      };
      G__5152.cljs$lang$arity$variadic = G__5152__delegate;
      return G__5152
    }();
    G__5151 = function(x, y, var_args) {
      var zs = var_args;
      switch(arguments.length) {
        case 0:
          return G__5151__0.call(this);
        case 1:
          return G__5151__1.call(this, x);
        case 2:
          return G__5151__2.call(this, x, y);
        default:
          return G__5151__3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
      }
      throw"Invalid arity: " + arguments.length;
    };
    G__5151.cljs$lang$maxFixedArity = 2;
    G__5151.cljs$lang$applyTo = G__5151__3.cljs$lang$applyTo;
    return G__5151
  }()
};
cljs.core.constantly = function constantly(x) {
  return function() {
    var G__5154__delegate = function(args) {
      return x
    };
    var G__5154 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__5154__delegate.call(this, args)
    };
    G__5154.cljs$lang$maxFixedArity = 0;
    G__5154.cljs$lang$applyTo = function(arglist__5155) {
      var args = cljs.core.seq(arglist__5155);
      return G__5154__delegate(args)
    };
    G__5154.cljs$lang$arity$variadic = G__5154__delegate;
    return G__5154
  }()
};
cljs.core.comp = function() {
  var comp = null;
  var comp__0 = function() {
    return cljs.core.identity
  };
  var comp__1 = function(f) {
    return f
  };
  var comp__2 = function(f, g) {
    return function() {
      var G__5159 = null;
      var G__5159__0 = function() {
        return f.call(null, g.call(null))
      };
      var G__5159__1 = function(x) {
        return f.call(null, g.call(null, x))
      };
      var G__5159__2 = function(x, y) {
        return f.call(null, g.call(null, x, y))
      };
      var G__5159__3 = function(x, y, z) {
        return f.call(null, g.call(null, x, y, z))
      };
      var G__5159__4 = function() {
        var G__5160__delegate = function(x, y, z, args) {
          return f.call(null, cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__5160 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5160__delegate.call(this, x, y, z, args)
        };
        G__5160.cljs$lang$maxFixedArity = 3;
        G__5160.cljs$lang$applyTo = function(arglist__5161) {
          var x = cljs.core.first(arglist__5161);
          var y = cljs.core.first(cljs.core.next(arglist__5161));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5161)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5161)));
          return G__5160__delegate(x, y, z, args)
        };
        G__5160.cljs$lang$arity$variadic = G__5160__delegate;
        return G__5160
      }();
      G__5159 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__5159__0.call(this);
          case 1:
            return G__5159__1.call(this, x);
          case 2:
            return G__5159__2.call(this, x, y);
          case 3:
            return G__5159__3.call(this, x, y, z);
          default:
            return G__5159__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__5159.cljs$lang$maxFixedArity = 3;
      G__5159.cljs$lang$applyTo = G__5159__4.cljs$lang$applyTo;
      return G__5159
    }()
  };
  var comp__3 = function(f, g, h) {
    return function() {
      var G__5162 = null;
      var G__5162__0 = function() {
        return f.call(null, g.call(null, h.call(null)))
      };
      var G__5162__1 = function(x) {
        return f.call(null, g.call(null, h.call(null, x)))
      };
      var G__5162__2 = function(x, y) {
        return f.call(null, g.call(null, h.call(null, x, y)))
      };
      var G__5162__3 = function(x, y, z) {
        return f.call(null, g.call(null, h.call(null, x, y, z)))
      };
      var G__5162__4 = function() {
        var G__5163__delegate = function(x, y, z, args) {
          return f.call(null, g.call(null, cljs.core.apply.call(null, h, x, y, z, args)))
        };
        var G__5163 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5163__delegate.call(this, x, y, z, args)
        };
        G__5163.cljs$lang$maxFixedArity = 3;
        G__5163.cljs$lang$applyTo = function(arglist__5164) {
          var x = cljs.core.first(arglist__5164);
          var y = cljs.core.first(cljs.core.next(arglist__5164));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5164)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5164)));
          return G__5163__delegate(x, y, z, args)
        };
        G__5163.cljs$lang$arity$variadic = G__5163__delegate;
        return G__5163
      }();
      G__5162 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__5162__0.call(this);
          case 1:
            return G__5162__1.call(this, x);
          case 2:
            return G__5162__2.call(this, x, y);
          case 3:
            return G__5162__3.call(this, x, y, z);
          default:
            return G__5162__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__5162.cljs$lang$maxFixedArity = 3;
      G__5162.cljs$lang$applyTo = G__5162__4.cljs$lang$applyTo;
      return G__5162
    }()
  };
  var comp__4 = function() {
    var G__5165__delegate = function(f1, f2, f3, fs) {
      var fs__5156 = cljs.core.reverse.call(null, cljs.core.list_STAR_.call(null, f1, f2, f3, fs));
      return function() {
        var G__5166__delegate = function(args) {
          var ret__5157 = cljs.core.apply.call(null, cljs.core.first.call(null, fs__5156), args);
          var fs__5158 = cljs.core.next.call(null, fs__5156);
          while(true) {
            if(cljs.core.truth_(fs__5158)) {
              var G__5167 = cljs.core.first.call(null, fs__5158).call(null, ret__5157);
              var G__5168 = cljs.core.next.call(null, fs__5158);
              ret__5157 = G__5167;
              fs__5158 = G__5168;
              continue
            }else {
              return ret__5157
            }
            break
          }
        };
        var G__5166 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__5166__delegate.call(this, args)
        };
        G__5166.cljs$lang$maxFixedArity = 0;
        G__5166.cljs$lang$applyTo = function(arglist__5169) {
          var args = cljs.core.seq(arglist__5169);
          return G__5166__delegate(args)
        };
        G__5166.cljs$lang$arity$variadic = G__5166__delegate;
        return G__5166
      }()
    };
    var G__5165 = function(f1, f2, f3, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__5165__delegate.call(this, f1, f2, f3, fs)
    };
    G__5165.cljs$lang$maxFixedArity = 3;
    G__5165.cljs$lang$applyTo = function(arglist__5170) {
      var f1 = cljs.core.first(arglist__5170);
      var f2 = cljs.core.first(cljs.core.next(arglist__5170));
      var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5170)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5170)));
      return G__5165__delegate(f1, f2, f3, fs)
    };
    G__5165.cljs$lang$arity$variadic = G__5165__delegate;
    return G__5165
  }();
  comp = function(f1, f2, f3, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 0:
        return comp__0.call(this);
      case 1:
        return comp__1.call(this, f1);
      case 2:
        return comp__2.call(this, f1, f2);
      case 3:
        return comp__3.call(this, f1, f2, f3);
      default:
        return comp__4.cljs$lang$arity$variadic(f1, f2, f3, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  comp.cljs$lang$maxFixedArity = 3;
  comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
  comp.cljs$lang$arity$0 = comp__0;
  comp.cljs$lang$arity$1 = comp__1;
  comp.cljs$lang$arity$2 = comp__2;
  comp.cljs$lang$arity$3 = comp__3;
  comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
  return comp
}();
cljs.core.partial = function() {
  var partial = null;
  var partial__2 = function(f, arg1) {
    return function() {
      var G__5171__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, args)
      };
      var G__5171 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__5171__delegate.call(this, args)
      };
      G__5171.cljs$lang$maxFixedArity = 0;
      G__5171.cljs$lang$applyTo = function(arglist__5172) {
        var args = cljs.core.seq(arglist__5172);
        return G__5171__delegate(args)
      };
      G__5171.cljs$lang$arity$variadic = G__5171__delegate;
      return G__5171
    }()
  };
  var partial__3 = function(f, arg1, arg2) {
    return function() {
      var G__5173__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, args)
      };
      var G__5173 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__5173__delegate.call(this, args)
      };
      G__5173.cljs$lang$maxFixedArity = 0;
      G__5173.cljs$lang$applyTo = function(arglist__5174) {
        var args = cljs.core.seq(arglist__5174);
        return G__5173__delegate(args)
      };
      G__5173.cljs$lang$arity$variadic = G__5173__delegate;
      return G__5173
    }()
  };
  var partial__4 = function(f, arg1, arg2, arg3) {
    return function() {
      var G__5175__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, arg3, args)
      };
      var G__5175 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__5175__delegate.call(this, args)
      };
      G__5175.cljs$lang$maxFixedArity = 0;
      G__5175.cljs$lang$applyTo = function(arglist__5176) {
        var args = cljs.core.seq(arglist__5176);
        return G__5175__delegate(args)
      };
      G__5175.cljs$lang$arity$variadic = G__5175__delegate;
      return G__5175
    }()
  };
  var partial__5 = function() {
    var G__5177__delegate = function(f, arg1, arg2, arg3, more) {
      return function() {
        var G__5178__delegate = function(args) {
          return cljs.core.apply.call(null, f, arg1, arg2, arg3, cljs.core.concat.call(null, more, args))
        };
        var G__5178 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__5178__delegate.call(this, args)
        };
        G__5178.cljs$lang$maxFixedArity = 0;
        G__5178.cljs$lang$applyTo = function(arglist__5179) {
          var args = cljs.core.seq(arglist__5179);
          return G__5178__delegate(args)
        };
        G__5178.cljs$lang$arity$variadic = G__5178__delegate;
        return G__5178
      }()
    };
    var G__5177 = function(f, arg1, arg2, arg3, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__5177__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    G__5177.cljs$lang$maxFixedArity = 4;
    G__5177.cljs$lang$applyTo = function(arglist__5180) {
      var f = cljs.core.first(arglist__5180);
      var arg1 = cljs.core.first(cljs.core.next(arglist__5180));
      var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5180)));
      var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5180))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5180))));
      return G__5177__delegate(f, arg1, arg2, arg3, more)
    };
    G__5177.cljs$lang$arity$variadic = G__5177__delegate;
    return G__5177
  }();
  partial = function(f, arg1, arg2, arg3, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return partial__2.call(this, f, arg1);
      case 3:
        return partial__3.call(this, f, arg1, arg2);
      case 4:
        return partial__4.call(this, f, arg1, arg2, arg3);
      default:
        return partial__5.cljs$lang$arity$variadic(f, arg1, arg2, arg3, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  partial.cljs$lang$maxFixedArity = 4;
  partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
  partial.cljs$lang$arity$2 = partial__2;
  partial.cljs$lang$arity$3 = partial__3;
  partial.cljs$lang$arity$4 = partial__4;
  partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
  return partial
}();
cljs.core.fnil = function() {
  var fnil = null;
  var fnil__2 = function(f, x) {
    return function() {
      var G__5181 = null;
      var G__5181__1 = function(a) {
        return f.call(null, a == null ? x : a)
      };
      var G__5181__2 = function(a, b) {
        return f.call(null, a == null ? x : a, b)
      };
      var G__5181__3 = function(a, b, c) {
        return f.call(null, a == null ? x : a, b, c)
      };
      var G__5181__4 = function() {
        var G__5182__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, a == null ? x : a, b, c, ds)
        };
        var G__5182 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5182__delegate.call(this, a, b, c, ds)
        };
        G__5182.cljs$lang$maxFixedArity = 3;
        G__5182.cljs$lang$applyTo = function(arglist__5183) {
          var a = cljs.core.first(arglist__5183);
          var b = cljs.core.first(cljs.core.next(arglist__5183));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5183)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5183)));
          return G__5182__delegate(a, b, c, ds)
        };
        G__5182.cljs$lang$arity$variadic = G__5182__delegate;
        return G__5182
      }();
      G__5181 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 1:
            return G__5181__1.call(this, a);
          case 2:
            return G__5181__2.call(this, a, b);
          case 3:
            return G__5181__3.call(this, a, b, c);
          default:
            return G__5181__4.cljs$lang$arity$variadic(a, b, c, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__5181.cljs$lang$maxFixedArity = 3;
      G__5181.cljs$lang$applyTo = G__5181__4.cljs$lang$applyTo;
      return G__5181
    }()
  };
  var fnil__3 = function(f, x, y) {
    return function() {
      var G__5184 = null;
      var G__5184__2 = function(a, b) {
        return f.call(null, a == null ? x : a, b == null ? y : b)
      };
      var G__5184__3 = function(a, b, c) {
        return f.call(null, a == null ? x : a, b == null ? y : b, c)
      };
      var G__5184__4 = function() {
        var G__5185__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, a == null ? x : a, b == null ? y : b, c, ds)
        };
        var G__5185 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5185__delegate.call(this, a, b, c, ds)
        };
        G__5185.cljs$lang$maxFixedArity = 3;
        G__5185.cljs$lang$applyTo = function(arglist__5186) {
          var a = cljs.core.first(arglist__5186);
          var b = cljs.core.first(cljs.core.next(arglist__5186));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5186)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5186)));
          return G__5185__delegate(a, b, c, ds)
        };
        G__5185.cljs$lang$arity$variadic = G__5185__delegate;
        return G__5185
      }();
      G__5184 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__5184__2.call(this, a, b);
          case 3:
            return G__5184__3.call(this, a, b, c);
          default:
            return G__5184__4.cljs$lang$arity$variadic(a, b, c, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__5184.cljs$lang$maxFixedArity = 3;
      G__5184.cljs$lang$applyTo = G__5184__4.cljs$lang$applyTo;
      return G__5184
    }()
  };
  var fnil__4 = function(f, x, y, z) {
    return function() {
      var G__5187 = null;
      var G__5187__2 = function(a, b) {
        return f.call(null, a == null ? x : a, b == null ? y : b)
      };
      var G__5187__3 = function(a, b, c) {
        return f.call(null, a == null ? x : a, b == null ? y : b, c == null ? z : c)
      };
      var G__5187__4 = function() {
        var G__5188__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, a == null ? x : a, b == null ? y : b, c == null ? z : c, ds)
        };
        var G__5188 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5188__delegate.call(this, a, b, c, ds)
        };
        G__5188.cljs$lang$maxFixedArity = 3;
        G__5188.cljs$lang$applyTo = function(arglist__5189) {
          var a = cljs.core.first(arglist__5189);
          var b = cljs.core.first(cljs.core.next(arglist__5189));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5189)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5189)));
          return G__5188__delegate(a, b, c, ds)
        };
        G__5188.cljs$lang$arity$variadic = G__5188__delegate;
        return G__5188
      }();
      G__5187 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__5187__2.call(this, a, b);
          case 3:
            return G__5187__3.call(this, a, b, c);
          default:
            return G__5187__4.cljs$lang$arity$variadic(a, b, c, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__5187.cljs$lang$maxFixedArity = 3;
      G__5187.cljs$lang$applyTo = G__5187__4.cljs$lang$applyTo;
      return G__5187
    }()
  };
  fnil = function(f, x, y, z) {
    switch(arguments.length) {
      case 2:
        return fnil__2.call(this, f, x);
      case 3:
        return fnil__3.call(this, f, x, y);
      case 4:
        return fnil__4.call(this, f, x, y, z)
    }
    throw"Invalid arity: " + arguments.length;
  };
  fnil.cljs$lang$arity$2 = fnil__2;
  fnil.cljs$lang$arity$3 = fnil__3;
  fnil.cljs$lang$arity$4 = fnil__4;
  return fnil
}();
cljs.core.map_indexed = function map_indexed(f, coll) {
  var mapi__5192 = function mpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____5190 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3974__auto____5190)) {
        var s__5191 = temp__3974__auto____5190;
        return cljs.core.cons.call(null, f.call(null, idx, cljs.core.first.call(null, s__5191)), mpi.call(null, idx + 1, cljs.core.rest.call(null, s__5191)))
      }else {
        return null
      }
    })
  };
  return mapi__5192.call(null, 0, coll)
};
cljs.core.keep = function keep(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____5193 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3974__auto____5193)) {
      var s__5194 = temp__3974__auto____5193;
      var x__5195 = f.call(null, cljs.core.first.call(null, s__5194));
      if(x__5195 == null) {
        return keep.call(null, f, cljs.core.rest.call(null, s__5194))
      }else {
        return cljs.core.cons.call(null, x__5195, keep.call(null, f, cljs.core.rest.call(null, s__5194)))
      }
    }else {
      return null
    }
  })
};
cljs.core.keep_indexed = function keep_indexed(f, coll) {
  var keepi__5205 = function kpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____5202 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3974__auto____5202)) {
        var s__5203 = temp__3974__auto____5202;
        var x__5204 = f.call(null, idx, cljs.core.first.call(null, s__5203));
        if(x__5204 == null) {
          return kpi.call(null, idx + 1, cljs.core.rest.call(null, s__5203))
        }else {
          return cljs.core.cons.call(null, x__5204, kpi.call(null, idx + 1, cljs.core.rest.call(null, s__5203)))
        }
      }else {
        return null
      }
    })
  };
  return keepi__5205.call(null, 0, coll)
};
cljs.core.every_pred = function() {
  var every_pred = null;
  var every_pred__1 = function(p) {
    return function() {
      var ep1 = null;
      var ep1__0 = function() {
        return true
      };
      var ep1__1 = function(x) {
        return cljs.core.boolean$.call(null, p.call(null, x))
      };
      var ep1__2 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____5212 = p.call(null, x);
          if(cljs.core.truth_(and__3822__auto____5212)) {
            return p.call(null, y)
          }else {
            return and__3822__auto____5212
          }
        }())
      };
      var ep1__3 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____5213 = p.call(null, x);
          if(cljs.core.truth_(and__3822__auto____5213)) {
            var and__3822__auto____5214 = p.call(null, y);
            if(cljs.core.truth_(and__3822__auto____5214)) {
              return p.call(null, z)
            }else {
              return and__3822__auto____5214
            }
          }else {
            return and__3822__auto____5213
          }
        }())
      };
      var ep1__4 = function() {
        var G__5250__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3822__auto____5215 = ep1.call(null, x, y, z);
            if(cljs.core.truth_(and__3822__auto____5215)) {
              return cljs.core.every_QMARK_.call(null, p, args)
            }else {
              return and__3822__auto____5215
            }
          }())
        };
        var G__5250 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5250__delegate.call(this, x, y, z, args)
        };
        G__5250.cljs$lang$maxFixedArity = 3;
        G__5250.cljs$lang$applyTo = function(arglist__5251) {
          var x = cljs.core.first(arglist__5251);
          var y = cljs.core.first(cljs.core.next(arglist__5251));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5251)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5251)));
          return G__5250__delegate(x, y, z, args)
        };
        G__5250.cljs$lang$arity$variadic = G__5250__delegate;
        return G__5250
      }();
      ep1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep1__0.call(this);
          case 1:
            return ep1__1.call(this, x);
          case 2:
            return ep1__2.call(this, x, y);
          case 3:
            return ep1__3.call(this, x, y, z);
          default:
            return ep1__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep1.cljs$lang$maxFixedArity = 3;
      ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
      ep1.cljs$lang$arity$0 = ep1__0;
      ep1.cljs$lang$arity$1 = ep1__1;
      ep1.cljs$lang$arity$2 = ep1__2;
      ep1.cljs$lang$arity$3 = ep1__3;
      ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
      return ep1
    }()
  };
  var every_pred__2 = function(p1, p2) {
    return function() {
      var ep2 = null;
      var ep2__0 = function() {
        return true
      };
      var ep2__1 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____5216 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____5216)) {
            return p2.call(null, x)
          }else {
            return and__3822__auto____5216
          }
        }())
      };
      var ep2__2 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____5217 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____5217)) {
            var and__3822__auto____5218 = p1.call(null, y);
            if(cljs.core.truth_(and__3822__auto____5218)) {
              var and__3822__auto____5219 = p2.call(null, x);
              if(cljs.core.truth_(and__3822__auto____5219)) {
                return p2.call(null, y)
              }else {
                return and__3822__auto____5219
              }
            }else {
              return and__3822__auto____5218
            }
          }else {
            return and__3822__auto____5217
          }
        }())
      };
      var ep2__3 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____5220 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____5220)) {
            var and__3822__auto____5221 = p1.call(null, y);
            if(cljs.core.truth_(and__3822__auto____5221)) {
              var and__3822__auto____5222 = p1.call(null, z);
              if(cljs.core.truth_(and__3822__auto____5222)) {
                var and__3822__auto____5223 = p2.call(null, x);
                if(cljs.core.truth_(and__3822__auto____5223)) {
                  var and__3822__auto____5224 = p2.call(null, y);
                  if(cljs.core.truth_(and__3822__auto____5224)) {
                    return p2.call(null, z)
                  }else {
                    return and__3822__auto____5224
                  }
                }else {
                  return and__3822__auto____5223
                }
              }else {
                return and__3822__auto____5222
              }
            }else {
              return and__3822__auto____5221
            }
          }else {
            return and__3822__auto____5220
          }
        }())
      };
      var ep2__4 = function() {
        var G__5252__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3822__auto____5225 = ep2.call(null, x, y, z);
            if(cljs.core.truth_(and__3822__auto____5225)) {
              return cljs.core.every_QMARK_.call(null, function(p1__5196_SHARP_) {
                var and__3822__auto____5226 = p1.call(null, p1__5196_SHARP_);
                if(cljs.core.truth_(and__3822__auto____5226)) {
                  return p2.call(null, p1__5196_SHARP_)
                }else {
                  return and__3822__auto____5226
                }
              }, args)
            }else {
              return and__3822__auto____5225
            }
          }())
        };
        var G__5252 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5252__delegate.call(this, x, y, z, args)
        };
        G__5252.cljs$lang$maxFixedArity = 3;
        G__5252.cljs$lang$applyTo = function(arglist__5253) {
          var x = cljs.core.first(arglist__5253);
          var y = cljs.core.first(cljs.core.next(arglist__5253));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5253)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5253)));
          return G__5252__delegate(x, y, z, args)
        };
        G__5252.cljs$lang$arity$variadic = G__5252__delegate;
        return G__5252
      }();
      ep2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep2__0.call(this);
          case 1:
            return ep2__1.call(this, x);
          case 2:
            return ep2__2.call(this, x, y);
          case 3:
            return ep2__3.call(this, x, y, z);
          default:
            return ep2__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep2.cljs$lang$maxFixedArity = 3;
      ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
      ep2.cljs$lang$arity$0 = ep2__0;
      ep2.cljs$lang$arity$1 = ep2__1;
      ep2.cljs$lang$arity$2 = ep2__2;
      ep2.cljs$lang$arity$3 = ep2__3;
      ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
      return ep2
    }()
  };
  var every_pred__3 = function(p1, p2, p3) {
    return function() {
      var ep3 = null;
      var ep3__0 = function() {
        return true
      };
      var ep3__1 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____5227 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____5227)) {
            var and__3822__auto____5228 = p2.call(null, x);
            if(cljs.core.truth_(and__3822__auto____5228)) {
              return p3.call(null, x)
            }else {
              return and__3822__auto____5228
            }
          }else {
            return and__3822__auto____5227
          }
        }())
      };
      var ep3__2 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____5229 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____5229)) {
            var and__3822__auto____5230 = p2.call(null, x);
            if(cljs.core.truth_(and__3822__auto____5230)) {
              var and__3822__auto____5231 = p3.call(null, x);
              if(cljs.core.truth_(and__3822__auto____5231)) {
                var and__3822__auto____5232 = p1.call(null, y);
                if(cljs.core.truth_(and__3822__auto____5232)) {
                  var and__3822__auto____5233 = p2.call(null, y);
                  if(cljs.core.truth_(and__3822__auto____5233)) {
                    return p3.call(null, y)
                  }else {
                    return and__3822__auto____5233
                  }
                }else {
                  return and__3822__auto____5232
                }
              }else {
                return and__3822__auto____5231
              }
            }else {
              return and__3822__auto____5230
            }
          }else {
            return and__3822__auto____5229
          }
        }())
      };
      var ep3__3 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____5234 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____5234)) {
            var and__3822__auto____5235 = p2.call(null, x);
            if(cljs.core.truth_(and__3822__auto____5235)) {
              var and__3822__auto____5236 = p3.call(null, x);
              if(cljs.core.truth_(and__3822__auto____5236)) {
                var and__3822__auto____5237 = p1.call(null, y);
                if(cljs.core.truth_(and__3822__auto____5237)) {
                  var and__3822__auto____5238 = p2.call(null, y);
                  if(cljs.core.truth_(and__3822__auto____5238)) {
                    var and__3822__auto____5239 = p3.call(null, y);
                    if(cljs.core.truth_(and__3822__auto____5239)) {
                      var and__3822__auto____5240 = p1.call(null, z);
                      if(cljs.core.truth_(and__3822__auto____5240)) {
                        var and__3822__auto____5241 = p2.call(null, z);
                        if(cljs.core.truth_(and__3822__auto____5241)) {
                          return p3.call(null, z)
                        }else {
                          return and__3822__auto____5241
                        }
                      }else {
                        return and__3822__auto____5240
                      }
                    }else {
                      return and__3822__auto____5239
                    }
                  }else {
                    return and__3822__auto____5238
                  }
                }else {
                  return and__3822__auto____5237
                }
              }else {
                return and__3822__auto____5236
              }
            }else {
              return and__3822__auto____5235
            }
          }else {
            return and__3822__auto____5234
          }
        }())
      };
      var ep3__4 = function() {
        var G__5254__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3822__auto____5242 = ep3.call(null, x, y, z);
            if(cljs.core.truth_(and__3822__auto____5242)) {
              return cljs.core.every_QMARK_.call(null, function(p1__5197_SHARP_) {
                var and__3822__auto____5243 = p1.call(null, p1__5197_SHARP_);
                if(cljs.core.truth_(and__3822__auto____5243)) {
                  var and__3822__auto____5244 = p2.call(null, p1__5197_SHARP_);
                  if(cljs.core.truth_(and__3822__auto____5244)) {
                    return p3.call(null, p1__5197_SHARP_)
                  }else {
                    return and__3822__auto____5244
                  }
                }else {
                  return and__3822__auto____5243
                }
              }, args)
            }else {
              return and__3822__auto____5242
            }
          }())
        };
        var G__5254 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5254__delegate.call(this, x, y, z, args)
        };
        G__5254.cljs$lang$maxFixedArity = 3;
        G__5254.cljs$lang$applyTo = function(arglist__5255) {
          var x = cljs.core.first(arglist__5255);
          var y = cljs.core.first(cljs.core.next(arglist__5255));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5255)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5255)));
          return G__5254__delegate(x, y, z, args)
        };
        G__5254.cljs$lang$arity$variadic = G__5254__delegate;
        return G__5254
      }();
      ep3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep3__0.call(this);
          case 1:
            return ep3__1.call(this, x);
          case 2:
            return ep3__2.call(this, x, y);
          case 3:
            return ep3__3.call(this, x, y, z);
          default:
            return ep3__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep3.cljs$lang$maxFixedArity = 3;
      ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
      ep3.cljs$lang$arity$0 = ep3__0;
      ep3.cljs$lang$arity$1 = ep3__1;
      ep3.cljs$lang$arity$2 = ep3__2;
      ep3.cljs$lang$arity$3 = ep3__3;
      ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
      return ep3
    }()
  };
  var every_pred__4 = function() {
    var G__5256__delegate = function(p1, p2, p3, ps) {
      var ps__5245 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var epn = null;
        var epn__0 = function() {
          return true
        };
        var epn__1 = function(x) {
          return cljs.core.every_QMARK_.call(null, function(p1__5198_SHARP_) {
            return p1__5198_SHARP_.call(null, x)
          }, ps__5245)
        };
        var epn__2 = function(x, y) {
          return cljs.core.every_QMARK_.call(null, function(p1__5199_SHARP_) {
            var and__3822__auto____5246 = p1__5199_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3822__auto____5246)) {
              return p1__5199_SHARP_.call(null, y)
            }else {
              return and__3822__auto____5246
            }
          }, ps__5245)
        };
        var epn__3 = function(x, y, z) {
          return cljs.core.every_QMARK_.call(null, function(p1__5200_SHARP_) {
            var and__3822__auto____5247 = p1__5200_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3822__auto____5247)) {
              var and__3822__auto____5248 = p1__5200_SHARP_.call(null, y);
              if(cljs.core.truth_(and__3822__auto____5248)) {
                return p1__5200_SHARP_.call(null, z)
              }else {
                return and__3822__auto____5248
              }
            }else {
              return and__3822__auto____5247
            }
          }, ps__5245)
        };
        var epn__4 = function() {
          var G__5257__delegate = function(x, y, z, args) {
            return cljs.core.boolean$.call(null, function() {
              var and__3822__auto____5249 = epn.call(null, x, y, z);
              if(cljs.core.truth_(and__3822__auto____5249)) {
                return cljs.core.every_QMARK_.call(null, function(p1__5201_SHARP_) {
                  return cljs.core.every_QMARK_.call(null, p1__5201_SHARP_, args)
                }, ps__5245)
              }else {
                return and__3822__auto____5249
              }
            }())
          };
          var G__5257 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__5257__delegate.call(this, x, y, z, args)
          };
          G__5257.cljs$lang$maxFixedArity = 3;
          G__5257.cljs$lang$applyTo = function(arglist__5258) {
            var x = cljs.core.first(arglist__5258);
            var y = cljs.core.first(cljs.core.next(arglist__5258));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5258)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5258)));
            return G__5257__delegate(x, y, z, args)
          };
          G__5257.cljs$lang$arity$variadic = G__5257__delegate;
          return G__5257
        }();
        epn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return epn__0.call(this);
            case 1:
              return epn__1.call(this, x);
            case 2:
              return epn__2.call(this, x, y);
            case 3:
              return epn__3.call(this, x, y, z);
            default:
              return epn__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
          }
          throw"Invalid arity: " + arguments.length;
        };
        epn.cljs$lang$maxFixedArity = 3;
        epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
        epn.cljs$lang$arity$0 = epn__0;
        epn.cljs$lang$arity$1 = epn__1;
        epn.cljs$lang$arity$2 = epn__2;
        epn.cljs$lang$arity$3 = epn__3;
        epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
        return epn
      }()
    };
    var G__5256 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__5256__delegate.call(this, p1, p2, p3, ps)
    };
    G__5256.cljs$lang$maxFixedArity = 3;
    G__5256.cljs$lang$applyTo = function(arglist__5259) {
      var p1 = cljs.core.first(arglist__5259);
      var p2 = cljs.core.first(cljs.core.next(arglist__5259));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5259)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5259)));
      return G__5256__delegate(p1, p2, p3, ps)
    };
    G__5256.cljs$lang$arity$variadic = G__5256__delegate;
    return G__5256
  }();
  every_pred = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return every_pred__1.call(this, p1);
      case 2:
        return every_pred__2.call(this, p1, p2);
      case 3:
        return every_pred__3.call(this, p1, p2, p3);
      default:
        return every_pred__4.cljs$lang$arity$variadic(p1, p2, p3, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  every_pred.cljs$lang$maxFixedArity = 3;
  every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
  every_pred.cljs$lang$arity$1 = every_pred__1;
  every_pred.cljs$lang$arity$2 = every_pred__2;
  every_pred.cljs$lang$arity$3 = every_pred__3;
  every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
  return every_pred
}();
cljs.core.some_fn = function() {
  var some_fn = null;
  var some_fn__1 = function(p) {
    return function() {
      var sp1 = null;
      var sp1__0 = function() {
        return null
      };
      var sp1__1 = function(x) {
        return p.call(null, x)
      };
      var sp1__2 = function(x, y) {
        var or__3824__auto____5261 = p.call(null, x);
        if(cljs.core.truth_(or__3824__auto____5261)) {
          return or__3824__auto____5261
        }else {
          return p.call(null, y)
        }
      };
      var sp1__3 = function(x, y, z) {
        var or__3824__auto____5262 = p.call(null, x);
        if(cljs.core.truth_(or__3824__auto____5262)) {
          return or__3824__auto____5262
        }else {
          var or__3824__auto____5263 = p.call(null, y);
          if(cljs.core.truth_(or__3824__auto____5263)) {
            return or__3824__auto____5263
          }else {
            return p.call(null, z)
          }
        }
      };
      var sp1__4 = function() {
        var G__5299__delegate = function(x, y, z, args) {
          var or__3824__auto____5264 = sp1.call(null, x, y, z);
          if(cljs.core.truth_(or__3824__auto____5264)) {
            return or__3824__auto____5264
          }else {
            return cljs.core.some.call(null, p, args)
          }
        };
        var G__5299 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5299__delegate.call(this, x, y, z, args)
        };
        G__5299.cljs$lang$maxFixedArity = 3;
        G__5299.cljs$lang$applyTo = function(arglist__5300) {
          var x = cljs.core.first(arglist__5300);
          var y = cljs.core.first(cljs.core.next(arglist__5300));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5300)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5300)));
          return G__5299__delegate(x, y, z, args)
        };
        G__5299.cljs$lang$arity$variadic = G__5299__delegate;
        return G__5299
      }();
      sp1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp1__0.call(this);
          case 1:
            return sp1__1.call(this, x);
          case 2:
            return sp1__2.call(this, x, y);
          case 3:
            return sp1__3.call(this, x, y, z);
          default:
            return sp1__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp1.cljs$lang$maxFixedArity = 3;
      sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
      sp1.cljs$lang$arity$0 = sp1__0;
      sp1.cljs$lang$arity$1 = sp1__1;
      sp1.cljs$lang$arity$2 = sp1__2;
      sp1.cljs$lang$arity$3 = sp1__3;
      sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
      return sp1
    }()
  };
  var some_fn__2 = function(p1, p2) {
    return function() {
      var sp2 = null;
      var sp2__0 = function() {
        return null
      };
      var sp2__1 = function(x) {
        var or__3824__auto____5265 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____5265)) {
          return or__3824__auto____5265
        }else {
          return p2.call(null, x)
        }
      };
      var sp2__2 = function(x, y) {
        var or__3824__auto____5266 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____5266)) {
          return or__3824__auto____5266
        }else {
          var or__3824__auto____5267 = p1.call(null, y);
          if(cljs.core.truth_(or__3824__auto____5267)) {
            return or__3824__auto____5267
          }else {
            var or__3824__auto____5268 = p2.call(null, x);
            if(cljs.core.truth_(or__3824__auto____5268)) {
              return or__3824__auto____5268
            }else {
              return p2.call(null, y)
            }
          }
        }
      };
      var sp2__3 = function(x, y, z) {
        var or__3824__auto____5269 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____5269)) {
          return or__3824__auto____5269
        }else {
          var or__3824__auto____5270 = p1.call(null, y);
          if(cljs.core.truth_(or__3824__auto____5270)) {
            return or__3824__auto____5270
          }else {
            var or__3824__auto____5271 = p1.call(null, z);
            if(cljs.core.truth_(or__3824__auto____5271)) {
              return or__3824__auto____5271
            }else {
              var or__3824__auto____5272 = p2.call(null, x);
              if(cljs.core.truth_(or__3824__auto____5272)) {
                return or__3824__auto____5272
              }else {
                var or__3824__auto____5273 = p2.call(null, y);
                if(cljs.core.truth_(or__3824__auto____5273)) {
                  return or__3824__auto____5273
                }else {
                  return p2.call(null, z)
                }
              }
            }
          }
        }
      };
      var sp2__4 = function() {
        var G__5301__delegate = function(x, y, z, args) {
          var or__3824__auto____5274 = sp2.call(null, x, y, z);
          if(cljs.core.truth_(or__3824__auto____5274)) {
            return or__3824__auto____5274
          }else {
            return cljs.core.some.call(null, function(p1__5206_SHARP_) {
              var or__3824__auto____5275 = p1.call(null, p1__5206_SHARP_);
              if(cljs.core.truth_(or__3824__auto____5275)) {
                return or__3824__auto____5275
              }else {
                return p2.call(null, p1__5206_SHARP_)
              }
            }, args)
          }
        };
        var G__5301 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5301__delegate.call(this, x, y, z, args)
        };
        G__5301.cljs$lang$maxFixedArity = 3;
        G__5301.cljs$lang$applyTo = function(arglist__5302) {
          var x = cljs.core.first(arglist__5302);
          var y = cljs.core.first(cljs.core.next(arglist__5302));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5302)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5302)));
          return G__5301__delegate(x, y, z, args)
        };
        G__5301.cljs$lang$arity$variadic = G__5301__delegate;
        return G__5301
      }();
      sp2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp2__0.call(this);
          case 1:
            return sp2__1.call(this, x);
          case 2:
            return sp2__2.call(this, x, y);
          case 3:
            return sp2__3.call(this, x, y, z);
          default:
            return sp2__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp2.cljs$lang$maxFixedArity = 3;
      sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
      sp2.cljs$lang$arity$0 = sp2__0;
      sp2.cljs$lang$arity$1 = sp2__1;
      sp2.cljs$lang$arity$2 = sp2__2;
      sp2.cljs$lang$arity$3 = sp2__3;
      sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
      return sp2
    }()
  };
  var some_fn__3 = function(p1, p2, p3) {
    return function() {
      var sp3 = null;
      var sp3__0 = function() {
        return null
      };
      var sp3__1 = function(x) {
        var or__3824__auto____5276 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____5276)) {
          return or__3824__auto____5276
        }else {
          var or__3824__auto____5277 = p2.call(null, x);
          if(cljs.core.truth_(or__3824__auto____5277)) {
            return or__3824__auto____5277
          }else {
            return p3.call(null, x)
          }
        }
      };
      var sp3__2 = function(x, y) {
        var or__3824__auto____5278 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____5278)) {
          return or__3824__auto____5278
        }else {
          var or__3824__auto____5279 = p2.call(null, x);
          if(cljs.core.truth_(or__3824__auto____5279)) {
            return or__3824__auto____5279
          }else {
            var or__3824__auto____5280 = p3.call(null, x);
            if(cljs.core.truth_(or__3824__auto____5280)) {
              return or__3824__auto____5280
            }else {
              var or__3824__auto____5281 = p1.call(null, y);
              if(cljs.core.truth_(or__3824__auto____5281)) {
                return or__3824__auto____5281
              }else {
                var or__3824__auto____5282 = p2.call(null, y);
                if(cljs.core.truth_(or__3824__auto____5282)) {
                  return or__3824__auto____5282
                }else {
                  return p3.call(null, y)
                }
              }
            }
          }
        }
      };
      var sp3__3 = function(x, y, z) {
        var or__3824__auto____5283 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____5283)) {
          return or__3824__auto____5283
        }else {
          var or__3824__auto____5284 = p2.call(null, x);
          if(cljs.core.truth_(or__3824__auto____5284)) {
            return or__3824__auto____5284
          }else {
            var or__3824__auto____5285 = p3.call(null, x);
            if(cljs.core.truth_(or__3824__auto____5285)) {
              return or__3824__auto____5285
            }else {
              var or__3824__auto____5286 = p1.call(null, y);
              if(cljs.core.truth_(or__3824__auto____5286)) {
                return or__3824__auto____5286
              }else {
                var or__3824__auto____5287 = p2.call(null, y);
                if(cljs.core.truth_(or__3824__auto____5287)) {
                  return or__3824__auto____5287
                }else {
                  var or__3824__auto____5288 = p3.call(null, y);
                  if(cljs.core.truth_(or__3824__auto____5288)) {
                    return or__3824__auto____5288
                  }else {
                    var or__3824__auto____5289 = p1.call(null, z);
                    if(cljs.core.truth_(or__3824__auto____5289)) {
                      return or__3824__auto____5289
                    }else {
                      var or__3824__auto____5290 = p2.call(null, z);
                      if(cljs.core.truth_(or__3824__auto____5290)) {
                        return or__3824__auto____5290
                      }else {
                        return p3.call(null, z)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
      var sp3__4 = function() {
        var G__5303__delegate = function(x, y, z, args) {
          var or__3824__auto____5291 = sp3.call(null, x, y, z);
          if(cljs.core.truth_(or__3824__auto____5291)) {
            return or__3824__auto____5291
          }else {
            return cljs.core.some.call(null, function(p1__5207_SHARP_) {
              var or__3824__auto____5292 = p1.call(null, p1__5207_SHARP_);
              if(cljs.core.truth_(or__3824__auto____5292)) {
                return or__3824__auto____5292
              }else {
                var or__3824__auto____5293 = p2.call(null, p1__5207_SHARP_);
                if(cljs.core.truth_(or__3824__auto____5293)) {
                  return or__3824__auto____5293
                }else {
                  return p3.call(null, p1__5207_SHARP_)
                }
              }
            }, args)
          }
        };
        var G__5303 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__5303__delegate.call(this, x, y, z, args)
        };
        G__5303.cljs$lang$maxFixedArity = 3;
        G__5303.cljs$lang$applyTo = function(arglist__5304) {
          var x = cljs.core.first(arglist__5304);
          var y = cljs.core.first(cljs.core.next(arglist__5304));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5304)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5304)));
          return G__5303__delegate(x, y, z, args)
        };
        G__5303.cljs$lang$arity$variadic = G__5303__delegate;
        return G__5303
      }();
      sp3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp3__0.call(this);
          case 1:
            return sp3__1.call(this, x);
          case 2:
            return sp3__2.call(this, x, y);
          case 3:
            return sp3__3.call(this, x, y, z);
          default:
            return sp3__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp3.cljs$lang$maxFixedArity = 3;
      sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
      sp3.cljs$lang$arity$0 = sp3__0;
      sp3.cljs$lang$arity$1 = sp3__1;
      sp3.cljs$lang$arity$2 = sp3__2;
      sp3.cljs$lang$arity$3 = sp3__3;
      sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
      return sp3
    }()
  };
  var some_fn__4 = function() {
    var G__5305__delegate = function(p1, p2, p3, ps) {
      var ps__5294 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var spn = null;
        var spn__0 = function() {
          return null
        };
        var spn__1 = function(x) {
          return cljs.core.some.call(null, function(p1__5208_SHARP_) {
            return p1__5208_SHARP_.call(null, x)
          }, ps__5294)
        };
        var spn__2 = function(x, y) {
          return cljs.core.some.call(null, function(p1__5209_SHARP_) {
            var or__3824__auto____5295 = p1__5209_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3824__auto____5295)) {
              return or__3824__auto____5295
            }else {
              return p1__5209_SHARP_.call(null, y)
            }
          }, ps__5294)
        };
        var spn__3 = function(x, y, z) {
          return cljs.core.some.call(null, function(p1__5210_SHARP_) {
            var or__3824__auto____5296 = p1__5210_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3824__auto____5296)) {
              return or__3824__auto____5296
            }else {
              var or__3824__auto____5297 = p1__5210_SHARP_.call(null, y);
              if(cljs.core.truth_(or__3824__auto____5297)) {
                return or__3824__auto____5297
              }else {
                return p1__5210_SHARP_.call(null, z)
              }
            }
          }, ps__5294)
        };
        var spn__4 = function() {
          var G__5306__delegate = function(x, y, z, args) {
            var or__3824__auto____5298 = spn.call(null, x, y, z);
            if(cljs.core.truth_(or__3824__auto____5298)) {
              return or__3824__auto____5298
            }else {
              return cljs.core.some.call(null, function(p1__5211_SHARP_) {
                return cljs.core.some.call(null, p1__5211_SHARP_, args)
              }, ps__5294)
            }
          };
          var G__5306 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__5306__delegate.call(this, x, y, z, args)
          };
          G__5306.cljs$lang$maxFixedArity = 3;
          G__5306.cljs$lang$applyTo = function(arglist__5307) {
            var x = cljs.core.first(arglist__5307);
            var y = cljs.core.first(cljs.core.next(arglist__5307));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5307)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5307)));
            return G__5306__delegate(x, y, z, args)
          };
          G__5306.cljs$lang$arity$variadic = G__5306__delegate;
          return G__5306
        }();
        spn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return spn__0.call(this);
            case 1:
              return spn__1.call(this, x);
            case 2:
              return spn__2.call(this, x, y);
            case 3:
              return spn__3.call(this, x, y, z);
            default:
              return spn__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
          }
          throw"Invalid arity: " + arguments.length;
        };
        spn.cljs$lang$maxFixedArity = 3;
        spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
        spn.cljs$lang$arity$0 = spn__0;
        spn.cljs$lang$arity$1 = spn__1;
        spn.cljs$lang$arity$2 = spn__2;
        spn.cljs$lang$arity$3 = spn__3;
        spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
        return spn
      }()
    };
    var G__5305 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__5305__delegate.call(this, p1, p2, p3, ps)
    };
    G__5305.cljs$lang$maxFixedArity = 3;
    G__5305.cljs$lang$applyTo = function(arglist__5308) {
      var p1 = cljs.core.first(arglist__5308);
      var p2 = cljs.core.first(cljs.core.next(arglist__5308));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5308)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5308)));
      return G__5305__delegate(p1, p2, p3, ps)
    };
    G__5305.cljs$lang$arity$variadic = G__5305__delegate;
    return G__5305
  }();
  some_fn = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return some_fn__1.call(this, p1);
      case 2:
        return some_fn__2.call(this, p1, p2);
      case 3:
        return some_fn__3.call(this, p1, p2, p3);
      default:
        return some_fn__4.cljs$lang$arity$variadic(p1, p2, p3, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  some_fn.cljs$lang$maxFixedArity = 3;
  some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
  some_fn.cljs$lang$arity$1 = some_fn__1;
  some_fn.cljs$lang$arity$2 = some_fn__2;
  some_fn.cljs$lang$arity$3 = some_fn__3;
  some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
  return some_fn
}();
cljs.core.map = function() {
  var map = null;
  var map__2 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____5309 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3974__auto____5309)) {
        var s__5310 = temp__3974__auto____5309;
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s__5310)), map.call(null, f, cljs.core.rest.call(null, s__5310)))
      }else {
        return null
      }
    })
  };
  var map__3 = function(f, c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__5311 = cljs.core.seq.call(null, c1);
      var s2__5312 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3822__auto____5313 = s1__5311;
        if(cljs.core.truth_(and__3822__auto____5313)) {
          return s2__5312
        }else {
          return and__3822__auto____5313
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__5311), cljs.core.first.call(null, s2__5312)), map.call(null, f, cljs.core.rest.call(null, s1__5311), cljs.core.rest.call(null, s2__5312)))
      }else {
        return null
      }
    })
  };
  var map__4 = function(f, c1, c2, c3) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__5314 = cljs.core.seq.call(null, c1);
      var s2__5315 = cljs.core.seq.call(null, c2);
      var s3__5316 = cljs.core.seq.call(null, c3);
      if(cljs.core.truth_(function() {
        var and__3822__auto____5317 = s1__5314;
        if(cljs.core.truth_(and__3822__auto____5317)) {
          var and__3822__auto____5318 = s2__5315;
          if(cljs.core.truth_(and__3822__auto____5318)) {
            return s3__5316
          }else {
            return and__3822__auto____5318
          }
        }else {
          return and__3822__auto____5317
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__5314), cljs.core.first.call(null, s2__5315), cljs.core.first.call(null, s3__5316)), map.call(null, f, cljs.core.rest.call(null, s1__5314), cljs.core.rest.call(null, s2__5315), cljs.core.rest.call(null, s3__5316)))
      }else {
        return null
      }
    })
  };
  var map__5 = function() {
    var G__5321__delegate = function(f, c1, c2, c3, colls) {
      var step__5320 = function step(cs) {
        return new cljs.core.LazySeq(null, false, function() {
          var ss__5319 = map.call(null, cljs.core.seq, cs);
          if(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__5319)) {
            return cljs.core.cons.call(null, map.call(null, cljs.core.first, ss__5319), step.call(null, map.call(null, cljs.core.rest, ss__5319)))
          }else {
            return null
          }
        })
      };
      return map.call(null, function(p1__5260_SHARP_) {
        return cljs.core.apply.call(null, f, p1__5260_SHARP_)
      }, step__5320.call(null, cljs.core.conj.call(null, colls, c3, c2, c1)))
    };
    var G__5321 = function(f, c1, c2, c3, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__5321__delegate.call(this, f, c1, c2, c3, colls)
    };
    G__5321.cljs$lang$maxFixedArity = 4;
    G__5321.cljs$lang$applyTo = function(arglist__5322) {
      var f = cljs.core.first(arglist__5322);
      var c1 = cljs.core.first(cljs.core.next(arglist__5322));
      var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5322)));
      var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5322))));
      var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5322))));
      return G__5321__delegate(f, c1, c2, c3, colls)
    };
    G__5321.cljs$lang$arity$variadic = G__5321__delegate;
    return G__5321
  }();
  map = function(f, c1, c2, c3, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return map__2.call(this, f, c1);
      case 3:
        return map__3.call(this, f, c1, c2);
      case 4:
        return map__4.call(this, f, c1, c2, c3);
      default:
        return map__5.cljs$lang$arity$variadic(f, c1, c2, c3, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  map.cljs$lang$maxFixedArity = 4;
  map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
  map.cljs$lang$arity$2 = map__2;
  map.cljs$lang$arity$3 = map__3;
  map.cljs$lang$arity$4 = map__4;
  map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
  return map
}();
cljs.core.take = function take(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    if(n > 0) {
      var temp__3974__auto____5323 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3974__auto____5323)) {
        var s__5324 = temp__3974__auto____5323;
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__5324), take.call(null, n - 1, cljs.core.rest.call(null, s__5324)))
      }else {
        return null
      }
    }else {
      return null
    }
  })
};
cljs.core.drop = function drop(n, coll) {
  var step__5327 = function(n, coll) {
    while(true) {
      var s__5325 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3822__auto____5326 = n > 0;
        if(and__3822__auto____5326) {
          return s__5325
        }else {
          return and__3822__auto____5326
        }
      }())) {
        var G__5328 = n - 1;
        var G__5329 = cljs.core.rest.call(null, s__5325);
        n = G__5328;
        coll = G__5329;
        continue
      }else {
        return s__5325
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__5327.call(null, n, coll)
  })
};
cljs.core.drop_last = function() {
  var drop_last = null;
  var drop_last__1 = function(s) {
    return drop_last.call(null, 1, s)
  };
  var drop_last__2 = function(n, s) {
    return cljs.core.map.call(null, function(x, _) {
      return x
    }, s, cljs.core.drop.call(null, n, s))
  };
  drop_last = function(n, s) {
    switch(arguments.length) {
      case 1:
        return drop_last__1.call(this, n);
      case 2:
        return drop_last__2.call(this, n, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  drop_last.cljs$lang$arity$1 = drop_last__1;
  drop_last.cljs$lang$arity$2 = drop_last__2;
  return drop_last
}();
cljs.core.take_last = function take_last(n, coll) {
  var s__5330 = cljs.core.seq.call(null, coll);
  var lead__5331 = cljs.core.seq.call(null, cljs.core.drop.call(null, n, coll));
  while(true) {
    if(cljs.core.truth_(lead__5331)) {
      var G__5332 = cljs.core.next.call(null, s__5330);
      var G__5333 = cljs.core.next.call(null, lead__5331);
      s__5330 = G__5332;
      lead__5331 = G__5333;
      continue
    }else {
      return s__5330
    }
    break
  }
};
cljs.core.drop_while = function drop_while(pred, coll) {
  var step__5336 = function(pred, coll) {
    while(true) {
      var s__5334 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3822__auto____5335 = s__5334;
        if(cljs.core.truth_(and__3822__auto____5335)) {
          return pred.call(null, cljs.core.first.call(null, s__5334))
        }else {
          return and__3822__auto____5335
        }
      }())) {
        var G__5337 = pred;
        var G__5338 = cljs.core.rest.call(null, s__5334);
        pred = G__5337;
        coll = G__5338;
        continue
      }else {
        return s__5334
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__5336.call(null, pred, coll)
  })
};
cljs.core.cycle = function cycle(coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____5339 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3974__auto____5339)) {
      var s__5340 = temp__3974__auto____5339;
      return cljs.core.concat.call(null, s__5340, cycle.call(null, s__5340))
    }else {
      return null
    }
  })
};
cljs.core.split_at = function split_at(n, coll) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null, n, coll), cljs.core.drop.call(null, n, coll)])
};
cljs.core.repeat = function() {
  var repeat = null;
  var repeat__1 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, x, repeat.call(null, x))
    })
  };
  var repeat__2 = function(n, x) {
    return cljs.core.take.call(null, n, repeat.call(null, x))
  };
  repeat = function(n, x) {
    switch(arguments.length) {
      case 1:
        return repeat__1.call(this, n);
      case 2:
        return repeat__2.call(this, n, x)
    }
    throw"Invalid arity: " + arguments.length;
  };
  repeat.cljs$lang$arity$1 = repeat__1;
  repeat.cljs$lang$arity$2 = repeat__2;
  return repeat
}();
cljs.core.replicate = function replicate(n, x) {
  return cljs.core.take.call(null, n, cljs.core.repeat.call(null, x))
};
cljs.core.repeatedly = function() {
  var repeatedly = null;
  var repeatedly__1 = function(f) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, f.call(null), repeatedly.call(null, f))
    })
  };
  var repeatedly__2 = function(n, f) {
    return cljs.core.take.call(null, n, repeatedly.call(null, f))
  };
  repeatedly = function(n, f) {
    switch(arguments.length) {
      case 1:
        return repeatedly__1.call(this, n);
      case 2:
        return repeatedly__2.call(this, n, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  repeatedly.cljs$lang$arity$1 = repeatedly__1;
  repeatedly.cljs$lang$arity$2 = repeatedly__2;
  return repeatedly
}();
cljs.core.iterate = function iterate(f, x) {
  return cljs.core.cons.call(null, x, new cljs.core.LazySeq(null, false, function() {
    return iterate.call(null, f, f.call(null, x))
  }))
};
cljs.core.interleave = function() {
  var interleave = null;
  var interleave__2 = function(c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__5341 = cljs.core.seq.call(null, c1);
      var s2__5342 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3822__auto____5343 = s1__5341;
        if(cljs.core.truth_(and__3822__auto____5343)) {
          return s2__5342
        }else {
          return and__3822__auto____5343
        }
      }())) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s1__5341), cljs.core.cons.call(null, cljs.core.first.call(null, s2__5342), interleave.call(null, cljs.core.rest.call(null, s1__5341), cljs.core.rest.call(null, s2__5342))))
      }else {
        return null
      }
    })
  };
  var interleave__3 = function() {
    var G__5345__delegate = function(c1, c2, colls) {
      return new cljs.core.LazySeq(null, false, function() {
        var ss__5344 = cljs.core.map.call(null, cljs.core.seq, cljs.core.conj.call(null, colls, c2, c1));
        if(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__5344)) {
          return cljs.core.concat.call(null, cljs.core.map.call(null, cljs.core.first, ss__5344), cljs.core.apply.call(null, interleave, cljs.core.map.call(null, cljs.core.rest, ss__5344)))
        }else {
          return null
        }
      })
    };
    var G__5345 = function(c1, c2, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__5345__delegate.call(this, c1, c2, colls)
    };
    G__5345.cljs$lang$maxFixedArity = 2;
    G__5345.cljs$lang$applyTo = function(arglist__5346) {
      var c1 = cljs.core.first(arglist__5346);
      var c2 = cljs.core.first(cljs.core.next(arglist__5346));
      var colls = cljs.core.rest(cljs.core.next(arglist__5346));
      return G__5345__delegate(c1, c2, colls)
    };
    G__5345.cljs$lang$arity$variadic = G__5345__delegate;
    return G__5345
  }();
  interleave = function(c1, c2, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return interleave__2.call(this, c1, c2);
      default:
        return interleave__3.cljs$lang$arity$variadic(c1, c2, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  interleave.cljs$lang$maxFixedArity = 2;
  interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
  interleave.cljs$lang$arity$2 = interleave__2;
  interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
  return interleave
}();
cljs.core.interpose = function interpose(sep, coll) {
  return cljs.core.drop.call(null, 1, cljs.core.interleave.call(null, cljs.core.repeat.call(null, sep), coll))
};
cljs.core.flatten1 = function flatten1(colls) {
  var cat__5349 = function cat(coll, colls) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3971__auto____5347 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3971__auto____5347)) {
        var coll__5348 = temp__3971__auto____5347;
        return cljs.core.cons.call(null, cljs.core.first.call(null, coll__5348), cat.call(null, cljs.core.rest.call(null, coll__5348), colls))
      }else {
        if(cljs.core.truth_(cljs.core.seq.call(null, colls))) {
          return cat.call(null, cljs.core.first.call(null, colls), cljs.core.rest.call(null, colls))
        }else {
          return null
        }
      }
    })
  };
  return cat__5349.call(null, null, colls)
};
cljs.core.mapcat = function() {
  var mapcat = null;
  var mapcat__2 = function(f, coll) {
    return cljs.core.flatten1.call(null, cljs.core.map.call(null, f, coll))
  };
  var mapcat__3 = function() {
    var G__5350__delegate = function(f, coll, colls) {
      return cljs.core.flatten1.call(null, cljs.core.apply.call(null, cljs.core.map, f, coll, colls))
    };
    var G__5350 = function(f, coll, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__5350__delegate.call(this, f, coll, colls)
    };
    G__5350.cljs$lang$maxFixedArity = 2;
    G__5350.cljs$lang$applyTo = function(arglist__5351) {
      var f = cljs.core.first(arglist__5351);
      var coll = cljs.core.first(cljs.core.next(arglist__5351));
      var colls = cljs.core.rest(cljs.core.next(arglist__5351));
      return G__5350__delegate(f, coll, colls)
    };
    G__5350.cljs$lang$arity$variadic = G__5350__delegate;
    return G__5350
  }();
  mapcat = function(f, coll, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return mapcat__2.call(this, f, coll);
      default:
        return mapcat__3.cljs$lang$arity$variadic(f, coll, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  mapcat.cljs$lang$maxFixedArity = 2;
  mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
  mapcat.cljs$lang$arity$2 = mapcat__2;
  mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
  return mapcat
}();
cljs.core.filter = function filter(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____5352 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3974__auto____5352)) {
      var s__5353 = temp__3974__auto____5352;
      var f__5354 = cljs.core.first.call(null, s__5353);
      var r__5355 = cljs.core.rest.call(null, s__5353);
      if(cljs.core.truth_(pred.call(null, f__5354))) {
        return cljs.core.cons.call(null, f__5354, filter.call(null, pred, r__5355))
      }else {
        return filter.call(null, pred, r__5355)
      }
    }else {
      return null
    }
  })
};
cljs.core.remove = function remove(pred, coll) {
  return cljs.core.filter.call(null, cljs.core.complement.call(null, pred), coll)
};
cljs.core.tree_seq = function tree_seq(branch_QMARK_, children, root) {
  var walk__5357 = function walk(node) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, node, cljs.core.truth_(branch_QMARK_.call(null, node)) ? cljs.core.mapcat.call(null, walk, children.call(null, node)) : null)
    })
  };
  return walk__5357.call(null, root)
};
cljs.core.flatten = function flatten(x) {
  return cljs.core.filter.call(null, function(p1__5356_SHARP_) {
    return cljs.core.not.call(null, cljs.core.sequential_QMARK_.call(null, p1__5356_SHARP_))
  }, cljs.core.rest.call(null, cljs.core.tree_seq.call(null, cljs.core.sequential_QMARK_, cljs.core.seq, x)))
};
cljs.core.into = function into(to, from) {
  if(function() {
    var G__5358__5359 = to;
    if(G__5358__5359 != null) {
      if(function() {
        var or__3824__auto____5360 = G__5358__5359.cljs$lang$protocol_mask$partition0$ & 2147483648;
        if(or__3824__auto____5360) {
          return or__3824__auto____5360
        }else {
          return G__5358__5359.cljs$core$IEditableCollection$
        }
      }()) {
        return true
      }else {
        if(!G__5358__5359.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.IEditableCollection, G__5358__5359)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IEditableCollection, G__5358__5359)
    }
  }()) {
    return cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, cljs.core._conj_BANG_, cljs.core.transient$.call(null, to), from))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, to, from)
  }
};
cljs.core.mapv = function() {
  var mapv = null;
  var mapv__2 = function(f, coll) {
    return cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, function(v, o) {
      return cljs.core.conj_BANG_.call(null, v, f.call(null, o))
    }, cljs.core.transient$.call(null, cljs.core.PersistentVector.fromArray([])), coll))
  };
  var mapv__3 = function(f, c1, c2) {
    return cljs.core.into.call(null, cljs.core.PersistentVector.fromArray([]), cljs.core.map.call(null, f, c1, c2))
  };
  var mapv__4 = function(f, c1, c2, c3) {
    return cljs.core.into.call(null, cljs.core.PersistentVector.fromArray([]), cljs.core.map.call(null, f, c1, c2, c3))
  };
  var mapv__5 = function() {
    var G__5361__delegate = function(f, c1, c2, c3, colls) {
      return cljs.core.into.call(null, cljs.core.PersistentVector.fromArray([]), cljs.core.apply.call(null, cljs.core.map, f, c1, c2, c3, colls))
    };
    var G__5361 = function(f, c1, c2, c3, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__5361__delegate.call(this, f, c1, c2, c3, colls)
    };
    G__5361.cljs$lang$maxFixedArity = 4;
    G__5361.cljs$lang$applyTo = function(arglist__5362) {
      var f = cljs.core.first(arglist__5362);
      var c1 = cljs.core.first(cljs.core.next(arglist__5362));
      var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5362)));
      var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5362))));
      var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5362))));
      return G__5361__delegate(f, c1, c2, c3, colls)
    };
    G__5361.cljs$lang$arity$variadic = G__5361__delegate;
    return G__5361
  }();
  mapv = function(f, c1, c2, c3, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return mapv__2.call(this, f, c1);
      case 3:
        return mapv__3.call(this, f, c1, c2);
      case 4:
        return mapv__4.call(this, f, c1, c2, c3);
      default:
        return mapv__5.cljs$lang$arity$variadic(f, c1, c2, c3, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  mapv.cljs$lang$maxFixedArity = 4;
  mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
  mapv.cljs$lang$arity$2 = mapv__2;
  mapv.cljs$lang$arity$3 = mapv__3;
  mapv.cljs$lang$arity$4 = mapv__4;
  mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
  return mapv
}();
cljs.core.filterv = function filterv(pred, coll) {
  return cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, function(v, o) {
    if(cljs.core.truth_(pred.call(null, o))) {
      return cljs.core.conj_BANG_.call(null, v, o)
    }else {
      return v
    }
  }, cljs.core.transient$.call(null, cljs.core.PersistentVector.fromArray([])), coll))
};
cljs.core.partition = function() {
  var partition = null;
  var partition__2 = function(n, coll) {
    return partition.call(null, n, n, coll)
  };
  var partition__3 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____5363 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3974__auto____5363)) {
        var s__5364 = temp__3974__auto____5363;
        var p__5365 = cljs.core.take.call(null, n, s__5364);
        if(n === cljs.core.count.call(null, p__5365)) {
          return cljs.core.cons.call(null, p__5365, partition.call(null, n, step, cljs.core.drop.call(null, step, s__5364)))
        }else {
          return null
        }
      }else {
        return null
      }
    })
  };
  var partition__4 = function(n, step, pad, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____5366 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3974__auto____5366)) {
        var s__5367 = temp__3974__auto____5366;
        var p__5368 = cljs.core.take.call(null, n, s__5367);
        if(n === cljs.core.count.call(null, p__5368)) {
          return cljs.core.cons.call(null, p__5368, partition.call(null, n, step, pad, cljs.core.drop.call(null, step, s__5367)))
        }else {
          return cljs.core.list.call(null, cljs.core.take.call(null, n, cljs.core.concat.call(null, p__5368, pad)))
        }
      }else {
        return null
      }
    })
  };
  partition = function(n, step, pad, coll) {
    switch(arguments.length) {
      case 2:
        return partition__2.call(this, n, step);
      case 3:
        return partition__3.call(this, n, step, pad);
      case 4:
        return partition__4.call(this, n, step, pad, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partition.cljs$lang$arity$2 = partition__2;
  partition.cljs$lang$arity$3 = partition__3;
  partition.cljs$lang$arity$4 = partition__4;
  return partition
}();
cljs.core.get_in = function() {
  var get_in = null;
  var get_in__2 = function(m, ks) {
    return cljs.core.reduce.call(null, cljs.core.get, m, ks)
  };
  var get_in__3 = function(m, ks, not_found) {
    var sentinel__5369 = cljs.core.lookup_sentinel;
    var m__5370 = m;
    var ks__5371 = cljs.core.seq.call(null, ks);
    while(true) {
      if(cljs.core.truth_(ks__5371)) {
        var m__5372 = cljs.core.get.call(null, m__5370, cljs.core.first.call(null, ks__5371), sentinel__5369);
        if(sentinel__5369 === m__5372) {
          return not_found
        }else {
          var G__5373 = sentinel__5369;
          var G__5374 = m__5372;
          var G__5375 = cljs.core.next.call(null, ks__5371);
          sentinel__5369 = G__5373;
          m__5370 = G__5374;
          ks__5371 = G__5375;
          continue
        }
      }else {
        return m__5370
      }
      break
    }
  };
  get_in = function(m, ks, not_found) {
    switch(arguments.length) {
      case 2:
        return get_in__2.call(this, m, ks);
      case 3:
        return get_in__3.call(this, m, ks, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  get_in.cljs$lang$arity$2 = get_in__2;
  get_in.cljs$lang$arity$3 = get_in__3;
  return get_in
}();
cljs.core.assoc_in = function assoc_in(m, p__5376, v) {
  var vec__5377__5378 = p__5376;
  var k__5379 = cljs.core.nth.call(null, vec__5377__5378, 0, null);
  var ks__5380 = cljs.core.nthnext.call(null, vec__5377__5378, 1);
  if(cljs.core.truth_(ks__5380)) {
    return cljs.core.assoc.call(null, m, k__5379, assoc_in.call(null, cljs.core.get.call(null, m, k__5379), ks__5380, v))
  }else {
    return cljs.core.assoc.call(null, m, k__5379, v)
  }
};
cljs.core.update_in = function() {
  var update_in__delegate = function(m, p__5381, f, args) {
    var vec__5382__5383 = p__5381;
    var k__5384 = cljs.core.nth.call(null, vec__5382__5383, 0, null);
    var ks__5385 = cljs.core.nthnext.call(null, vec__5382__5383, 1);
    if(cljs.core.truth_(ks__5385)) {
      return cljs.core.assoc.call(null, m, k__5384, cljs.core.apply.call(null, update_in, cljs.core.get.call(null, m, k__5384), ks__5385, f, args))
    }else {
      return cljs.core.assoc.call(null, m, k__5384, cljs.core.apply.call(null, f, cljs.core.get.call(null, m, k__5384), args))
    }
  };
  var update_in = function(m, p__5381, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
    }
    return update_in__delegate.call(this, m, p__5381, f, args)
  };
  update_in.cljs$lang$maxFixedArity = 3;
  update_in.cljs$lang$applyTo = function(arglist__5386) {
    var m = cljs.core.first(arglist__5386);
    var p__5381 = cljs.core.first(cljs.core.next(arglist__5386));
    var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5386)));
    var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5386)));
    return update_in__delegate(m, p__5381, f, args)
  };
  update_in.cljs$lang$arity$variadic = update_in__delegate;
  return update_in
}();
cljs.core.Vector = function(meta, array, __hash) {
  this.meta = meta;
  this.array = array;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 16200095
};
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.Vector")
};
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__5391 = this;
  var h__364__auto____5392 = this__5391.__hash;
  if(h__364__auto____5392 != null) {
    return h__364__auto____5392
  }else {
    var h__364__auto____5393 = cljs.core.hash_coll.call(null, coll);
    this__5391.__hash = h__364__auto____5393;
    return h__364__auto____5393
  }
};
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__5394 = this;
  return cljs.core._nth.call(null, coll, k, null)
};
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__5395 = this;
  return cljs.core._nth.call(null, coll, k, not_found)
};
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__5396 = this;
  var new_array__5397 = cljs.core.aclone.call(null, this__5396.array);
  new_array__5397[k] = v;
  return new cljs.core.Vector(this__5396.meta, new_array__5397, null)
};
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = function() {
  var G__5426 = null;
  var G__5426__2 = function(tsym5389, k) {
    var this__5398 = this;
    var tsym5389__5399 = this;
    var coll__5400 = tsym5389__5399;
    return cljs.core._lookup.call(null, coll__5400, k)
  };
  var G__5426__3 = function(tsym5390, k, not_found) {
    var this__5401 = this;
    var tsym5390__5402 = this;
    var coll__5403 = tsym5390__5402;
    return cljs.core._lookup.call(null, coll__5403, k, not_found)
  };
  G__5426 = function(tsym5390, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5426__2.call(this, tsym5390, k);
      case 3:
        return G__5426__3.call(this, tsym5390, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5426
}();
cljs.core.Vector.prototype.apply = function(tsym5387, args5388) {
  return tsym5387.call.apply(tsym5387, [tsym5387].concat(cljs.core.aclone.call(null, args5388)))
};
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__5404 = this;
  var new_array__5405 = cljs.core.aclone.call(null, this__5404.array);
  new_array__5405.push(o);
  return new cljs.core.Vector(this__5404.meta, new_array__5405, null)
};
cljs.core.Vector.prototype.toString = function() {
  var this__5406 = this;
  var this$__5407 = this;
  return cljs.core.pr_str.call(null, this$__5407)
};
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = function(v, f) {
  var this__5408 = this;
  return cljs.core.ci_reduce.call(null, this__5408.array, f)
};
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = function(v, f, start) {
  var this__5409 = this;
  return cljs.core.ci_reduce.call(null, this__5409.array, f, start)
};
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__5410 = this;
  if(this__5410.array.length > 0) {
    var vector_seq__5411 = function vector_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(i < this__5410.array.length) {
          return cljs.core.cons.call(null, this__5410.array[i], vector_seq.call(null, i + 1))
        }else {
          return null
        }
      })
    };
    return vector_seq__5411.call(null, 0)
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__5412 = this;
  return this__5412.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__5413 = this;
  var count__5414 = this__5413.array.length;
  if(count__5414 > 0) {
    return this__5413.array[count__5414 - 1]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__5415 = this;
  if(this__5415.array.length > 0) {
    var new_array__5416 = cljs.core.aclone.call(null, this__5415.array);
    new_array__5416.pop();
    return new cljs.core.Vector(this__5415.meta, new_array__5416, null)
  }else {
    throw new Error("Can't pop empty vector");
  }
};
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(coll, n, val) {
  var this__5417 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__5418 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__5419 = this;
  return new cljs.core.Vector(meta, this__5419.array, this__5419.__hash)
};
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__5420 = this;
  return this__5420.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, n) {
  var this__5422 = this;
  if(function() {
    var and__3822__auto____5423 = 0 <= n;
    if(and__3822__auto____5423) {
      return n < this__5422.array.length
    }else {
      return and__3822__auto____5423
    }
  }()) {
    return this__5422.array[n]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, n, not_found) {
  var this__5424 = this;
  if(function() {
    var and__3822__auto____5425 = 0 <= n;
    if(and__3822__auto____5425) {
      return n < this__5424.array.length
    }else {
      return and__3822__auto____5425
    }
  }()) {
    return this__5424.array[n]
  }else {
    return not_found
  }
};
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__5421 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__5421.meta)
};
cljs.core.Vector;
cljs.core.Vector.EMPTY = new cljs.core.Vector(null, [], 0);
cljs.core.Vector.fromArray = function(xs) {
  return new cljs.core.Vector(null, xs, null)
};
cljs.core.VectorNode = function(edit, arr) {
  this.edit = edit;
  this.arr = arr
};
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = function(this__455__auto__) {
  return cljs.core.list.call(null, "cljs.core.VectorNode")
};
cljs.core.VectorNode;
cljs.core.pv_fresh_node = function pv_fresh_node(edit) {
  return new cljs.core.VectorNode(edit, cljs.core.make_array.call(null, 32))
};
cljs.core.pv_aget = function pv_aget(node, idx) {
  return node.arr[idx]
};
cljs.core.pv_aset = function pv_aset(node, idx, val) {
  return node.arr[idx] = val
};
cljs.core.pv_clone_node = function pv_clone_node(node) {
  return new cljs.core.VectorNode(node.edit, cljs.core.aclone.call(null, node.arr))
};
cljs.core.tail_off = function tail_off(pv) {
  var cnt__5427 = pv.cnt;
  if(cnt__5427 < 32) {
    return 0
  }else {
    return cnt__5427 - 1 >>> 5 << 5
  }
};
cljs.core.new_path = function new_path(edit, level, node) {
  var ll__5428 = level;
  var ret__5429 = node;
  while(true) {
    if(ll__5428 === 0) {
      return ret__5429
    }else {
      var embed__5430 = ret__5429;
      var r__5431 = cljs.core.pv_fresh_node.call(null, edit);
      var ___5432 = cljs.core.pv_aset.call(null, r__5431, 0, embed__5430);
      var G__5433 = ll__5428 - 5;
      var G__5434 = r__5431;
      ll__5428 = G__5433;
      ret__5429 = G__5434;
      continue
    }
    break
  }
};
cljs.core.push_tail = function push_tail(pv, level, parent, tailnode) {
  var ret__5435 = cljs.core.pv_clone_node.call(null, parent);
  var subidx__5436 = pv.cnt - 1 >>> level & 31;
  if(5 === level) {
    cljs.core.pv_aset.call(null, ret__5435, subidx__5436, tailnode);
    return ret__5435
  }else {
    var temp__3971__auto____5437 = cljs.core.pv_aget.call(null, parent, subidx__5436);
    if(cljs.core.truth_(temp__3971__auto____5437)) {
      var child__5438 = temp__3971__auto____5437;
      var node_to_insert__5439 = push_tail.call(null, pv, level - 5, child__5438, tailnode);
      cljs.core.pv_aset.call(null, ret__5435, subidx__5436, node_to_insert__5439);
      return ret__5435
    }else {
      var node_to_insert__5440 = cljs.core.new_path.call(null, null, level - 5, tailnode);
      cljs.core.pv_aset.call(null, ret__5435, subidx__5436, node_to_insert__5440);
      return ret__5435
    }
  }
};
cljs.core.array_for = function array_for(pv, i) {
  if(function() {
    var and__3822__auto____5441 = 0 <= i;
    if(and__3822__auto____5441) {
      return i < pv.cnt
    }else {
      return and__3822__auto____5441
    }
  }()) {
    if(i >= cljs.core.tail_off.call(null, pv)) {
      return pv.tail
    }else {
      var node__5442 = pv.root;
      var level__5443 = pv.shift;
      while(true) {
        if(level__5443 > 0) {
          var G__5444 = cljs.core.pv_aget.call(null, node__5442, i >>> level__5443 & 31);
          var G__5445 = level__5443 - 5;
          node__5442 = G__5444;
          level__5443 = G__5445;
          continue
        }else {
          return node__5442.arr
        }
        break
      }
    }
  }else {
    throw new Error([cljs.core.str("No item "), cljs.core.str(i), cljs.core.str(" in vector of length "), cljs.core.str(pv.cnt)].join(""));
  }
};
cljs.core.do_assoc = function do_assoc(pv, level, node, i, val) {
  var ret__5446 = cljs.core.pv_clone_node.call(null, node);
  if(level === 0) {
    cljs.core.pv_aset.call(null, ret__5446, i & 31, val);
    return ret__5446
  }else {
    var subidx__5447 = i >>> level & 31;
    cljs.core.pv_aset.call(null, ret__5446, subidx__5447, do_assoc.call(null, pv, level - 5, cljs.core.pv_aget.call(null, node, subidx__5447), i, val));
    return ret__5446
  }
};
cljs.core.pop_tail = function pop_tail(pv, level, node) {
  var subidx__5448 = pv.cnt - 2 >>> level & 31;
  if(level > 5) {
    var new_child__5449 = pop_tail.call(null, pv, level - 5, cljs.core.pv_aget.call(null, node, subidx__5448));
    if(function() {
      var and__3822__auto____5450 = new_child__5449 == null;
      if(and__3822__auto____5450) {
        return subidx__5448 === 0
      }else {
        return and__3822__auto____5450
      }
    }()) {
      return null
    }else {
      var ret__5451 = cljs.core.pv_clone_node.call(null, node);
      cljs.core.pv_aset.call(null, ret__5451, subidx__5448, new_child__5449);
      return ret__5451
    }
  }else {
    if(subidx__5448 === 0) {
      return null
    }else {
      if("\ufdd0'else") {
        var ret__5452 = cljs.core.pv_clone_node.call(null, node);
        cljs.core.pv_aset.call(null, ret__5452, subidx__5448, null);
        return ret__5452
      }else {
        return null
      }
    }
  }
};
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.vector_seq = function vector_seq(v, offset) {
  var c__5453 = cljs.core._count.call(null, v);
  if(c__5453 > 0) {
    if(void 0 === cljs.core.t5454) {
      cljs.core.t5454 = function(c, offset, v, vector_seq, __meta__389__auto__) {
        this.c = c;
        this.offset = offset;
        this.v = v;
        this.vector_seq = vector_seq;
        this.__meta__389__auto__ = __meta__389__auto__;
        this.cljs$lang$protocol_mask$partition1$ = 0;
        this.cljs$lang$protocol_mask$partition0$ = 282263648
      };
      cljs.core.t5454.cljs$lang$type = true;
      cljs.core.t5454.cljs$lang$ctorPrSeq = function(this__454__auto__) {
        return cljs.core.list.call(null, "cljs.core.t5454")
      };
      cljs.core.t5454.prototype.cljs$core$ISeqable$ = true;
      cljs.core.t5454.prototype.cljs$core$ISeqable$_seq$arity$1 = function(vseq) {
        var this__5455 = this;
        return vseq
      };
      cljs.core.t5454.prototype.cljs$core$ISeq$ = true;
      cljs.core.t5454.prototype.cljs$core$ISeq$_first$arity$1 = function(_) {
        var this__5456 = this;
        return cljs.core._nth.call(null, this__5456.v, this__5456.offset)
      };
      cljs.core.t5454.prototype.cljs$core$ISeq$_rest$arity$1 = function(_) {
        var this__5457 = this;
        var offset__5458 = this__5457.offset + 1;
        if(offset__5458 < this__5457.c) {
          return this__5457.vector_seq.call(null, this__5457.v, offset__5458)
        }else {
          return cljs.core.List.EMPTY
        }
      };
      cljs.core.t5454.prototype.cljs$core$ASeq$ = true;
      cljs.core.t5454.prototype.cljs$core$IEquiv$ = true;
      cljs.core.t5454.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(vseq, other) {
        var this__5459 = this;
        return cljs.core.equiv_sequential.call(null, vseq, other)
      };
      cljs.core.t5454.prototype.cljs$core$ISequential$ = true;
      cljs.core.t5454.prototype.cljs$core$IPrintable$ = true;
      cljs.core.t5454.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(vseq, opts) {
        var this__5460 = this;
        return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, vseq)
      };
      cljs.core.t5454.prototype.cljs$core$IMeta$ = true;
      cljs.core.t5454.prototype.cljs$core$IMeta$_meta$arity$1 = function(___390__auto__) {
        var this__5461 = this;
        return this__5461.__meta__389__auto__
      };
      cljs.core.t5454.prototype.cljs$core$IWithMeta$ = true;
      cljs.core.t5454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(___390__auto__, __meta__389__auto__) {
        var this__5462 = this;
        return new cljs.core.t5454(this__5462.c, this__5462.offset, this__5462.v, this__5462.vector_seq, __meta__389__auto__)
      };
      cljs.core.t5454
    }else {
    }
    return new cljs.core.t5454(c__5453, offset, v, vector_seq, null)
  }else {
    return null
  }
};
cljs.core.PersistentVector = function(meta, cnt, shift, root, tail, __hash) {
  this.meta = meta;
  this.cnt = cnt;
  this.shift = shift;
  this.root = root;
  this.tail = tail;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 2164209055
};
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentVector")
};
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(coll) {
  var this__5467 = this;
  return new cljs.core.TransientVector(this__5467.cnt, this__5467.shift, cljs.core.tv_editable_root.call(null, this__5467.root), cljs.core.tv_editable_tail.call(null, this__5467.tail))
};
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__5468 = this;
  var h__364__auto____5469 = this__5468.__hash;
  if(h__364__auto____5469 != null) {
    return h__364__auto____5469
  }else {
    var h__364__auto____5470 = cljs.core.hash_coll.call(null, coll);
    this__5468.__hash = h__364__auto____5470;
    return h__364__auto____5470
  }
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__5471 = this;
  return cljs.core._nth.call(null, coll, k, null)
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__5472 = this;
  return cljs.core._nth.call(null, coll, k, not_found)
};
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__5473 = this;
  if(function() {
    var and__3822__auto____5474 = 0 <= k;
    if(and__3822__auto____5474) {
      return k < this__5473.cnt
    }else {
      return and__3822__auto____5474
    }
  }()) {
    if(cljs.core.tail_off.call(null, coll) <= k) {
      var new_tail__5475 = cljs.core.aclone.call(null, this__5473.tail);
      new_tail__5475[k & 31] = v;
      return new cljs.core.PersistentVector(this__5473.meta, this__5473.cnt, this__5473.shift, this__5473.root, new_tail__5475, null)
    }else {
      return new cljs.core.PersistentVector(this__5473.meta, this__5473.cnt, this__5473.shift, cljs.core.do_assoc.call(null, coll, this__5473.shift, this__5473.root, k, v), this__5473.tail, null)
    }
  }else {
    if(k === this__5473.cnt) {
      return cljs.core._conj.call(null, coll, v)
    }else {
      if("\ufdd0'else") {
        throw new Error([cljs.core.str("Index "), cljs.core.str(k), cljs.core.str(" out of bounds  [0,"), cljs.core.str(this__5473.cnt), cljs.core.str("]")].join(""));
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = function() {
  var G__5520 = null;
  var G__5520__2 = function(tsym5465, k) {
    var this__5476 = this;
    var tsym5465__5477 = this;
    var coll__5478 = tsym5465__5477;
    return cljs.core._lookup.call(null, coll__5478, k)
  };
  var G__5520__3 = function(tsym5466, k, not_found) {
    var this__5479 = this;
    var tsym5466__5480 = this;
    var coll__5481 = tsym5466__5480;
    return cljs.core._lookup.call(null, coll__5481, k, not_found)
  };
  G__5520 = function(tsym5466, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5520__2.call(this, tsym5466, k);
      case 3:
        return G__5520__3.call(this, tsym5466, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5520
}();
cljs.core.PersistentVector.prototype.apply = function(tsym5463, args5464) {
  return tsym5463.call.apply(tsym5463, [tsym5463].concat(cljs.core.aclone.call(null, args5464)))
};
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(v, f, init) {
  var this__5482 = this;
  var step_init__5483 = [0, init];
  var i__5484 = 0;
  while(true) {
    if(i__5484 < this__5482.cnt) {
      var arr__5485 = cljs.core.array_for.call(null, v, i__5484);
      var len__5486 = arr__5485.length;
      var init__5490 = function() {
        var j__5487 = 0;
        var init__5488 = step_init__5483[1];
        while(true) {
          if(j__5487 < len__5486) {
            var init__5489 = f.call(null, init__5488, j__5487 + i__5484, arr__5485[j__5487]);
            if(cljs.core.reduced_QMARK_.call(null, init__5489)) {
              return init__5489
            }else {
              var G__5521 = j__5487 + 1;
              var G__5522 = init__5489;
              j__5487 = G__5521;
              init__5488 = G__5522;
              continue
            }
          }else {
            step_init__5483[0] = len__5486;
            step_init__5483[1] = init__5488;
            return init__5488
          }
          break
        }
      }();
      if(cljs.core.reduced_QMARK_.call(null, init__5490)) {
        return cljs.core.deref.call(null, init__5490)
      }else {
        var G__5523 = i__5484 + step_init__5483[0];
        i__5484 = G__5523;
        continue
      }
    }else {
      return step_init__5483[1]
    }
    break
  }
};
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__5491 = this;
  if(this__5491.cnt - cljs.core.tail_off.call(null, coll) < 32) {
    var new_tail__5492 = cljs.core.aclone.call(null, this__5491.tail);
    new_tail__5492.push(o);
    return new cljs.core.PersistentVector(this__5491.meta, this__5491.cnt + 1, this__5491.shift, this__5491.root, new_tail__5492, null)
  }else {
    var root_overflow_QMARK___5493 = this__5491.cnt >>> 5 > 1 << this__5491.shift;
    var new_shift__5494 = root_overflow_QMARK___5493 ? this__5491.shift + 5 : this__5491.shift;
    var new_root__5496 = root_overflow_QMARK___5493 ? function() {
      var n_r__5495 = cljs.core.pv_fresh_node.call(null, null);
      cljs.core.pv_aset.call(null, n_r__5495, 0, this__5491.root);
      cljs.core.pv_aset.call(null, n_r__5495, 1, cljs.core.new_path.call(null, null, this__5491.shift, new cljs.core.VectorNode(null, this__5491.tail)));
      return n_r__5495
    }() : cljs.core.push_tail.call(null, coll, this__5491.shift, this__5491.root, new cljs.core.VectorNode(null, this__5491.tail));
    return new cljs.core.PersistentVector(this__5491.meta, this__5491.cnt + 1, new_shift__5494, new_root__5496, [o], null)
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = function(coll) {
  var this__5497 = this;
  return cljs.core._nth.call(null, coll, 0)
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = function(coll) {
  var this__5498 = this;
  return cljs.core._nth.call(null, coll, 1)
};
cljs.core.PersistentVector.prototype.toString = function() {
  var this__5499 = this;
  var this$__5500 = this;
  return cljs.core.pr_str.call(null, this$__5500)
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = function(v, f) {
  var this__5501 = this;
  return cljs.core.ci_reduce.call(null, v, f)
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = function(v, f, start) {
  var this__5502 = this;
  return cljs.core.ci_reduce.call(null, v, f, start)
};
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__5503 = this;
  return cljs.core.vector_seq.call(null, coll, 0)
};
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__5504 = this;
  return this__5504.cnt
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__5505 = this;
  if(this__5505.cnt > 0) {
    return cljs.core._nth.call(null, coll, this__5505.cnt - 1)
  }else {
    return null
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__5506 = this;
  if(this__5506.cnt === 0) {
    throw new Error("Can't pop empty vector");
  }else {
    if(1 === this__5506.cnt) {
      return cljs.core._with_meta.call(null, cljs.core.PersistentVector.EMPTY, this__5506.meta)
    }else {
      if(1 < this__5506.cnt - cljs.core.tail_off.call(null, coll)) {
        return new cljs.core.PersistentVector(this__5506.meta, this__5506.cnt - 1, this__5506.shift, this__5506.root, this__5506.tail.slice(0, -1), null)
      }else {
        if("\ufdd0'else") {
          var new_tail__5507 = cljs.core.array_for.call(null, coll, this__5506.cnt - 2);
          var nr__5508 = cljs.core.pop_tail.call(null, coll, this__5506.shift, this__5506.root);
          var new_root__5509 = nr__5508 == null ? cljs.core.PersistentVector.EMPTY_NODE : nr__5508;
          var cnt_1__5510 = this__5506.cnt - 1;
          if(function() {
            var and__3822__auto____5511 = 5 < this__5506.shift;
            if(and__3822__auto____5511) {
              return cljs.core.pv_aget.call(null, new_root__5509, 1) == null
            }else {
              return and__3822__auto____5511
            }
          }()) {
            return new cljs.core.PersistentVector(this__5506.meta, cnt_1__5510, this__5506.shift - 5, cljs.core.pv_aget.call(null, new_root__5509, 0), new_tail__5507, null)
          }else {
            return new cljs.core.PersistentVector(this__5506.meta, cnt_1__5510, this__5506.shift, new_root__5509, new_tail__5507, null)
          }
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(coll, n, val) {
  var this__5513 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__5514 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__5515 = this;
  return new cljs.core.PersistentVector(meta, this__5515.cnt, this__5515.shift, this__5515.root, this__5515.tail, this__5515.__hash)
};
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__5516 = this;
  return this__5516.meta
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, n) {
  var this__5517 = this;
  return cljs.core.array_for.call(null, coll, n)[n & 31]
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, n, not_found) {
  var this__5518 = this;
  if(function() {
    var and__3822__auto____5519 = 0 <= n;
    if(and__3822__auto____5519) {
      return n < this__5518.cnt
    }else {
      return and__3822__auto____5519
    }
  }()) {
    return cljs.core._nth.call(null, coll, n)
  }else {
    return not_found
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__5512 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.EMPTY, this__5512.meta)
};
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null, null);
cljs.core.PersistentVector.EMPTY = new cljs.core.PersistentVector(null, 0, 5, cljs.core.PersistentVector.EMPTY_NODE, [], 0);
cljs.core.PersistentVector.fromArray = function(xs) {
  var xs__5524 = cljs.core.seq.call(null, xs);
  var out__5525 = cljs.core.transient$.call(null, cljs.core.PersistentVector.EMPTY);
  while(true) {
    if(cljs.core.truth_(xs__5524)) {
      var G__5526 = cljs.core.next.call(null, xs__5524);
      var G__5527 = cljs.core.conj_BANG_.call(null, out__5525, cljs.core.first.call(null, xs__5524));
      xs__5524 = G__5526;
      out__5525 = G__5527;
      continue
    }else {
      return cljs.core.persistent_BANG_.call(null, out__5525)
    }
    break
  }
};
cljs.core.vec = function vec(coll) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.PersistentVector.EMPTY, coll)
};
cljs.core.vector = function() {
  var vector__delegate = function(args) {
    return cljs.core.vec.call(null, args)
  };
  var vector = function(var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return vector__delegate.call(this, args)
  };
  vector.cljs$lang$maxFixedArity = 0;
  vector.cljs$lang$applyTo = function(arglist__5528) {
    var args = cljs.core.seq(arglist__5528);
    return vector__delegate(args)
  };
  vector.cljs$lang$arity$variadic = vector__delegate;
  return vector
}();
cljs.core.Subvec = function(meta, v, start, end, __hash) {
  this.meta = meta;
  this.v = v;
  this.start = start;
  this.end = end;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 16200095
};
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.Subvec")
};
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__5533 = this;
  var h__364__auto____5534 = this__5533.__hash;
  if(h__364__auto____5534 != null) {
    return h__364__auto____5534
  }else {
    var h__364__auto____5535 = cljs.core.hash_coll.call(null, coll);
    this__5533.__hash = h__364__auto____5535;
    return h__364__auto____5535
  }
};
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__5536 = this;
  return cljs.core._nth.call(null, coll, k, null)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__5537 = this;
  return cljs.core._nth.call(null, coll, k, not_found)
};
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, key, val) {
  var this__5538 = this;
  var v_pos__5539 = this__5538.start + key;
  return new cljs.core.Subvec(this__5538.meta, cljs.core._assoc.call(null, this__5538.v, v_pos__5539, val), this__5538.start, this__5538.end > v_pos__5539 + 1 ? this__5538.end : v_pos__5539 + 1, null)
};
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = function() {
  var G__5563 = null;
  var G__5563__2 = function(tsym5531, k) {
    var this__5540 = this;
    var tsym5531__5541 = this;
    var coll__5542 = tsym5531__5541;
    return cljs.core._lookup.call(null, coll__5542, k)
  };
  var G__5563__3 = function(tsym5532, k, not_found) {
    var this__5543 = this;
    var tsym5532__5544 = this;
    var coll__5545 = tsym5532__5544;
    return cljs.core._lookup.call(null, coll__5545, k, not_found)
  };
  G__5563 = function(tsym5532, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5563__2.call(this, tsym5532, k);
      case 3:
        return G__5563__3.call(this, tsym5532, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5563
}();
cljs.core.Subvec.prototype.apply = function(tsym5529, args5530) {
  return tsym5529.call.apply(tsym5529, [tsym5529].concat(cljs.core.aclone.call(null, args5530)))
};
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__5546 = this;
  return new cljs.core.Subvec(this__5546.meta, cljs.core._assoc_n.call(null, this__5546.v, this__5546.end, o), this__5546.start, this__5546.end + 1, null)
};
cljs.core.Subvec.prototype.toString = function() {
  var this__5547 = this;
  var this$__5548 = this;
  return cljs.core.pr_str.call(null, this$__5548)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = function(coll, f) {
  var this__5549 = this;
  return cljs.core.ci_reduce.call(null, coll, f)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = function(coll, f, start) {
  var this__5550 = this;
  return cljs.core.ci_reduce.call(null, coll, f, start)
};
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__5551 = this;
  var subvec_seq__5552 = function subvec_seq(i) {
    if(i === this__5551.end) {
      return null
    }else {
      return cljs.core.cons.call(null, cljs.core._nth.call(null, this__5551.v, i), new cljs.core.LazySeq(null, false, function() {
        return subvec_seq.call(null, i + 1)
      }))
    }
  };
  return subvec_seq__5552.call(null, this__5551.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__5553 = this;
  return this__5553.end - this__5553.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__5554 = this;
  return cljs.core._nth.call(null, this__5554.v, this__5554.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__5555 = this;
  if(this__5555.start === this__5555.end) {
    throw new Error("Can't pop empty vector");
  }else {
    return new cljs.core.Subvec(this__5555.meta, this__5555.v, this__5555.start, this__5555.end - 1, null)
  }
};
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(coll, n, val) {
  var this__5556 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__5557 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__5558 = this;
  return new cljs.core.Subvec(meta, this__5558.v, this__5558.start, this__5558.end, this__5558.__hash)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__5559 = this;
  return this__5559.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, n) {
  var this__5561 = this;
  return cljs.core._nth.call(null, this__5561.v, this__5561.start + n)
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, n, not_found) {
  var this__5562 = this;
  return cljs.core._nth.call(null, this__5562.v, this__5562.start + n, not_found)
};
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__5560 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__5560.meta)
};
cljs.core.Subvec;
cljs.core.subvec = function() {
  var subvec = null;
  var subvec__2 = function(v, start) {
    return subvec.call(null, v, start, cljs.core.count.call(null, v))
  };
  var subvec__3 = function(v, start, end) {
    return new cljs.core.Subvec(null, v, start, end, null)
  };
  subvec = function(v, start, end) {
    switch(arguments.length) {
      case 2:
        return subvec__2.call(this, v, start);
      case 3:
        return subvec__3.call(this, v, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  subvec.cljs$lang$arity$2 = subvec__2;
  subvec.cljs$lang$arity$3 = subvec__3;
  return subvec
}();
cljs.core.tv_ensure_editable = function tv_ensure_editable(edit, node) {
  if(edit === node.edit) {
    return node
  }else {
    return new cljs.core.VectorNode(edit, cljs.core.aclone.call(null, node.arr))
  }
};
cljs.core.tv_editable_root = function tv_editable_root(node) {
  return new cljs.core.VectorNode({}, cljs.core.aclone.call(null, node.arr))
};
cljs.core.tv_editable_tail = function tv_editable_tail(tl) {
  var ret__5564 = cljs.core.make_array.call(null, 32);
  cljs.core.array_copy.call(null, tl, 0, ret__5564, 0, tl.length);
  return ret__5564
};
cljs.core.tv_push_tail = function tv_push_tail(tv, level, parent, tail_node) {
  var ret__5565 = cljs.core.tv_ensure_editable.call(null, tv.root.edit, parent);
  var subidx__5566 = tv.cnt - 1 >>> level & 31;
  cljs.core.pv_aset.call(null, ret__5565, subidx__5566, level === 5 ? tail_node : function() {
    var child__5567 = cljs.core.pv_aget.call(null, ret__5565, subidx__5566);
    if(child__5567 != null) {
      return tv_push_tail.call(null, tv, level - 5, child__5567, tail_node)
    }else {
      return cljs.core.new_path.call(null, tv.root.edit, level - 5, tail_node)
    }
  }());
  return ret__5565
};
cljs.core.tv_pop_tail = function tv_pop_tail(tv, level, node) {
  var node__5568 = cljs.core.tv_ensure_editable.call(null, tv.root.edit, node);
  var subidx__5569 = tv.cnt - 2 >>> level & 31;
  if(level > 5) {
    var new_child__5570 = tv_pop_tail.call(null, tv, level - 5, cljs.core.pv_aget.call(null, node__5568, subidx__5569));
    if(function() {
      var and__3822__auto____5571 = new_child__5570 == null;
      if(and__3822__auto____5571) {
        return subidx__5569 === 0
      }else {
        return and__3822__auto____5571
      }
    }()) {
      return null
    }else {
      cljs.core.pv_aset.call(null, node__5568, subidx__5569, new_child__5570);
      return node__5568
    }
  }else {
    if(subidx__5569 === 0) {
      return null
    }else {
      if("\ufdd0'else") {
        cljs.core.pv_aset.call(null, node__5568, subidx__5569, null);
        return node__5568
      }else {
        return null
      }
    }
  }
};
cljs.core.editable_array_for = function editable_array_for(tv, i) {
  if(function() {
    var and__3822__auto____5572 = 0 <= i;
    if(and__3822__auto____5572) {
      return i < tv.cnt
    }else {
      return and__3822__auto____5572
    }
  }()) {
    if(i >= cljs.core.tail_off.call(null, tv)) {
      return tv.tail
    }else {
      var root__5573 = tv.root;
      var node__5574 = root__5573;
      var level__5575 = tv.shift;
      while(true) {
        if(level__5575 > 0) {
          var G__5576 = cljs.core.tv_ensure_editable.call(null, root__5573.edit, cljs.core.pv_aget.call(null, node__5574, i >>> level__5575 & 31));
          var G__5577 = level__5575 - 5;
          node__5574 = G__5576;
          level__5575 = G__5577;
          continue
        }else {
          return node__5574.arr
        }
        break
      }
    }
  }else {
    throw new Error([cljs.core.str("No item "), cljs.core.str(i), cljs.core.str(" in transient vector of length "), cljs.core.str(tv.cnt)].join(""));
  }
};
cljs.core.TransientVector = function(cnt, shift, root, tail) {
  this.cnt = cnt;
  this.shift = shift;
  this.root = root;
  this.tail = tail;
  this.cljs$lang$protocol_mask$partition0$ = 147;
  this.cljs$lang$protocol_mask$partition1$ = 11
};
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.TransientVector")
};
cljs.core.TransientVector.prototype.cljs$core$IFn$ = true;
cljs.core.TransientVector.prototype.call = function() {
  var G__5615 = null;
  var G__5615__2 = function(tsym5580, k) {
    var this__5582 = this;
    var tsym5580__5583 = this;
    var coll__5584 = tsym5580__5583;
    return cljs.core._lookup.call(null, coll__5584, k)
  };
  var G__5615__3 = function(tsym5581, k, not_found) {
    var this__5585 = this;
    var tsym5581__5586 = this;
    var coll__5587 = tsym5581__5586;
    return cljs.core._lookup.call(null, coll__5587, k, not_found)
  };
  G__5615 = function(tsym5581, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5615__2.call(this, tsym5581, k);
      case 3:
        return G__5615__3.call(this, tsym5581, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5615
}();
cljs.core.TransientVector.prototype.apply = function(tsym5578, args5579) {
  return tsym5578.call.apply(tsym5578, [tsym5578].concat(cljs.core.aclone.call(null, args5579)))
};
cljs.core.TransientVector.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__5588 = this;
  return cljs.core._nth.call(null, coll, k, null)
};
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__5589 = this;
  return cljs.core._nth.call(null, coll, k, not_found)
};
cljs.core.TransientVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, n) {
  var this__5590 = this;
  if(cljs.core.truth_(this__5590.root.edit)) {
    return cljs.core.array_for.call(null, coll, n)[n & 31]
  }else {
    throw new Error("nth after persistent!");
  }
};
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, n, not_found) {
  var this__5591 = this;
  if(function() {
    var and__3822__auto____5592 = 0 <= n;
    if(and__3822__auto____5592) {
      return n < this__5591.cnt
    }else {
      return and__3822__auto____5592
    }
  }()) {
    return cljs.core._nth.call(null, coll, n)
  }else {
    return not_found
  }
};
cljs.core.TransientVector.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__5593 = this;
  if(cljs.core.truth_(this__5593.root.edit)) {
    return this__5593.cnt
  }else {
    throw new Error("count after persistent!");
  }
};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = function(tcoll, n, val) {
  var this__5594 = this;
  if(cljs.core.truth_(this__5594.root.edit)) {
    if(function() {
      var and__3822__auto____5595 = 0 <= n;
      if(and__3822__auto____5595) {
        return n < this__5594.cnt
      }else {
        return and__3822__auto____5595
      }
    }()) {
      if(cljs.core.tail_off.call(null, tcoll) <= n) {
        this__5594.tail[n & 31] = val;
        return tcoll
      }else {
        var new_root__5598 = function go(level, node) {
          var node__5596 = cljs.core.tv_ensure_editable.call(null, this__5594.root.edit, node);
          if(level === 0) {
            cljs.core.pv_aset.call(null, node__5596, n & 31, val);
            return node__5596
          }else {
            var subidx__5597 = n >>> level & 31;
            cljs.core.pv_aset.call(null, node__5596, subidx__5597, go.call(null, level - 5, cljs.core.pv_aget.call(null, node__5596, subidx__5597)));
            return node__5596
          }
        }.call(null, this__5594.shift, this__5594.root);
        this__5594.root = new_root__5598;
        return tcoll
      }
    }else {
      if(n === this__5594.cnt) {
        return cljs.core._conj_BANG_.call(null, tcoll, val)
      }else {
        if("\ufdd0'else") {
          throw new Error([cljs.core.str("Index "), cljs.core.str(n), cljs.core.str(" out of bounds for TransientVector of length"), cljs.core.str(this__5594.cnt)].join(""));
        }else {
          return null
        }
      }
    }
  }else {
    throw new Error("assoc! after persistent!");
  }
};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = function(tcoll) {
  var this__5599 = this;
  if(cljs.core.truth_(this__5599.root.edit)) {
    if(this__5599.cnt === 0) {
      throw new Error("Can't pop empty vector");
    }else {
      if(1 === this__5599.cnt) {
        this__5599.cnt = 0;
        return tcoll
      }else {
        if((this__5599.cnt - 1 & 31) > 0) {
          this__5599.cnt = this__5599.cnt - 1;
          return tcoll
        }else {
          if("\ufdd0'else") {
            var new_tail__5600 = cljs.core.editable_array_for.call(null, tcoll, this__5599.cnt - 2);
            var new_root__5602 = function() {
              var nr__5601 = cljs.core.tv_pop_tail.call(null, tcoll, this__5599.shift, this__5599.root);
              if(nr__5601 != null) {
                return nr__5601
              }else {
                return new cljs.core.VectorNode(this__5599.root.edit, cljs.core.make_array.call(null, 32))
              }
            }();
            if(function() {
              var and__3822__auto____5603 = 5 < this__5599.shift;
              if(and__3822__auto____5603) {
                return cljs.core.pv_aget.call(null, new_root__5602, 1) == null
              }else {
                return and__3822__auto____5603
              }
            }()) {
              var new_root__5604 = cljs.core.tv_ensure_editable.call(null, this__5599.root.edit, cljs.core.pv_aget.call(null, new_root__5602, 0));
              this__5599.root = new_root__5604;
              this__5599.shift = this__5599.shift - 5;
              this__5599.cnt = this__5599.cnt - 1;
              this__5599.tail = new_tail__5600;
              return tcoll
            }else {
              this__5599.root = new_root__5602;
              this__5599.cnt = this__5599.cnt - 1;
              this__5599.tail = new_tail__5600;
              return tcoll
            }
          }else {
            return null
          }
        }
      }
    }
  }else {
    throw new Error("pop! after persistent!");
  }
};
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(tcoll, key, val) {
  var this__5605 = this;
  return cljs.core._assoc_n_BANG_.call(null, tcoll, key, val)
};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(tcoll, o) {
  var this__5606 = this;
  if(cljs.core.truth_(this__5606.root.edit)) {
    if(this__5606.cnt - cljs.core.tail_off.call(null, tcoll) < 32) {
      this__5606.tail[this__5606.cnt & 31] = o;
      this__5606.cnt = this__5606.cnt + 1;
      return tcoll
    }else {
      var tail_node__5607 = new cljs.core.VectorNode(this__5606.root.edit, this__5606.tail);
      var new_tail__5608 = cljs.core.make_array.call(null, 32);
      new_tail__5608[0] = o;
      this__5606.tail = new_tail__5608;
      if(this__5606.cnt >>> 5 > 1 << this__5606.shift) {
        var new_root_array__5609 = cljs.core.make_array.call(null, 32);
        var new_shift__5610 = this__5606.shift + 5;
        new_root_array__5609[0] = this__5606.root;
        new_root_array__5609[1] = cljs.core.new_path.call(null, this__5606.root.edit, this__5606.shift, tail_node__5607);
        this__5606.root = new cljs.core.VectorNode(this__5606.root.edit, new_root_array__5609);
        this__5606.shift = new_shift__5610;
        this__5606.cnt = this__5606.cnt + 1;
        return tcoll
      }else {
        var new_root__5611 = cljs.core.tv_push_tail.call(null, tcoll, this__5606.shift, this__5606.root, tail_node__5607);
        this__5606.root = new_root__5611;
        this__5606.cnt = this__5606.cnt + 1;
        return tcoll
      }
    }
  }else {
    throw new Error("conj! after persistent!");
  }
};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(tcoll) {
  var this__5612 = this;
  if(cljs.core.truth_(this__5612.root.edit)) {
    this__5612.root.edit = null;
    var len__5613 = this__5612.cnt - cljs.core.tail_off.call(null, tcoll);
    var trimmed_tail__5614 = cljs.core.make_array.call(null, len__5613);
    cljs.core.array_copy.call(null, this__5612.tail, 0, trimmed_tail__5614, 0, len__5613);
    return new cljs.core.PersistentVector(null, this__5612.cnt, this__5612.shift, this__5612.root, trimmed_tail__5614, null)
  }else {
    throw new Error("persistent! called twice");
  }
};
cljs.core.TransientVector;
cljs.core.PersistentQueueSeq = function(meta, front, rear, __hash) {
  this.meta = meta;
  this.front = front;
  this.rear = rear;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 15925324
};
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentQueueSeq")
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__5616 = this;
  var h__364__auto____5617 = this__5616.__hash;
  if(h__364__auto____5617 != null) {
    return h__364__auto____5617
  }else {
    var h__364__auto____5618 = cljs.core.hash_coll.call(null, coll);
    this__5616.__hash = h__364__auto____5618;
    return h__364__auto____5618
  }
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__5619 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.PersistentQueueSeq.prototype.toString = function() {
  var this__5620 = this;
  var this$__5621 = this;
  return cljs.core.pr_str.call(null, this$__5621)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__5622 = this;
  return coll
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__5623 = this;
  return cljs.core._first.call(null, this__5623.front)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__5624 = this;
  var temp__3971__auto____5625 = cljs.core.next.call(null, this__5624.front);
  if(cljs.core.truth_(temp__3971__auto____5625)) {
    var f1__5626 = temp__3971__auto____5625;
    return new cljs.core.PersistentQueueSeq(this__5624.meta, f1__5626, this__5624.rear, null)
  }else {
    if(this__5624.rear == null) {
      return cljs.core._empty.call(null, coll)
    }else {
      return new cljs.core.PersistentQueueSeq(this__5624.meta, this__5624.rear, null, null)
    }
  }
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__5627 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__5628 = this;
  return new cljs.core.PersistentQueueSeq(meta, this__5628.front, this__5628.rear, this__5628.__hash)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__5629 = this;
  return this__5629.meta
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__5630 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__5630.meta)
};
cljs.core.PersistentQueueSeq;
cljs.core.PersistentQueue = function(meta, count, front, rear, __hash) {
  this.meta = meta;
  this.count = count;
  this.front = front;
  this.rear = rear;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 15929422
};
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentQueue")
};
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__5631 = this;
  var h__364__auto____5632 = this__5631.__hash;
  if(h__364__auto____5632 != null) {
    return h__364__auto____5632
  }else {
    var h__364__auto____5633 = cljs.core.hash_coll.call(null, coll);
    this__5631.__hash = h__364__auto____5633;
    return h__364__auto____5633
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__5634 = this;
  if(cljs.core.truth_(this__5634.front)) {
    return new cljs.core.PersistentQueue(this__5634.meta, this__5634.count + 1, this__5634.front, cljs.core.conj.call(null, function() {
      var or__3824__auto____5635 = this__5634.rear;
      if(cljs.core.truth_(or__3824__auto____5635)) {
        return or__3824__auto____5635
      }else {
        return cljs.core.PersistentVector.fromArray([])
      }
    }(), o), null)
  }else {
    return new cljs.core.PersistentQueue(this__5634.meta, this__5634.count + 1, cljs.core.conj.call(null, this__5634.front, o), cljs.core.PersistentVector.fromArray([]), null)
  }
};
cljs.core.PersistentQueue.prototype.toString = function() {
  var this__5636 = this;
  var this$__5637 = this;
  return cljs.core.pr_str.call(null, this$__5637)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__5638 = this;
  var rear__5639 = cljs.core.seq.call(null, this__5638.rear);
  if(cljs.core.truth_(function() {
    var or__3824__auto____5640 = this__5638.front;
    if(cljs.core.truth_(or__3824__auto____5640)) {
      return or__3824__auto____5640
    }else {
      return rear__5639
    }
  }())) {
    return new cljs.core.PersistentQueueSeq(null, this__5638.front, cljs.core.seq.call(null, rear__5639), null, null)
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__5641 = this;
  return this__5641.count
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__5642 = this;
  return cljs.core._first.call(null, this__5642.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__5643 = this;
  if(cljs.core.truth_(this__5643.front)) {
    var temp__3971__auto____5644 = cljs.core.next.call(null, this__5643.front);
    if(cljs.core.truth_(temp__3971__auto____5644)) {
      var f1__5645 = temp__3971__auto____5644;
      return new cljs.core.PersistentQueue(this__5643.meta, this__5643.count - 1, f1__5645, this__5643.rear, null)
    }else {
      return new cljs.core.PersistentQueue(this__5643.meta, this__5643.count - 1, cljs.core.seq.call(null, this__5643.rear), cljs.core.PersistentVector.fromArray([]), null)
    }
  }else {
    return coll
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__5646 = this;
  return cljs.core.first.call(null, this__5646.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__5647 = this;
  return cljs.core.rest.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__5648 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__5649 = this;
  return new cljs.core.PersistentQueue(meta, this__5649.count, this__5649.front, this__5649.rear, this__5649.__hash)
};
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__5650 = this;
  return this__5650.meta
};
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__5651 = this;
  return cljs.core.PersistentQueue.EMPTY
};
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = new cljs.core.PersistentQueue(null, 0, null, cljs.core.PersistentVector.fromArray([]), 0);
cljs.core.NeverEquiv = function() {
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 1048576
};
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.NeverEquiv")
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(o, other) {
  var this__5652 = this;
  return false
};
cljs.core.NeverEquiv;
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function equiv_map(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.map_QMARK_.call(null, y) ? cljs.core.count.call(null, x) === cljs.core.count.call(null, y) ? cljs.core.every_QMARK_.call(null, cljs.core.identity, cljs.core.map.call(null, function(xkv) {
    return cljs.core._EQ_.call(null, cljs.core.get.call(null, y, cljs.core.first.call(null, xkv), cljs.core.never_equiv), cljs.core.second.call(null, xkv))
  }, x)) : null : null)
};
cljs.core.scan_array = function scan_array(incr, k, array) {
  var len__5653 = array.length;
  var i__5654 = 0;
  while(true) {
    if(i__5654 < len__5653) {
      if(cljs.core._EQ_.call(null, k, array[i__5654])) {
        return i__5654
      }else {
        var G__5655 = i__5654 + incr;
        i__5654 = G__5655;
        continue
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.obj_map_contains_key_QMARK_ = function() {
  var obj_map_contains_key_QMARK_ = null;
  var obj_map_contains_key_QMARK___2 = function(k, strobj) {
    return obj_map_contains_key_QMARK_.call(null, k, strobj, true, false)
  };
  var obj_map_contains_key_QMARK___4 = function(k, strobj, true_val, false_val) {
    if(cljs.core.truth_(function() {
      var and__3822__auto____5656 = goog.isString.call(null, k);
      if(cljs.core.truth_(and__3822__auto____5656)) {
        return strobj.hasOwnProperty(k)
      }else {
        return and__3822__auto____5656
      }
    }())) {
      return true_val
    }else {
      return false_val
    }
  };
  obj_map_contains_key_QMARK_ = function(k, strobj, true_val, false_val) {
    switch(arguments.length) {
      case 2:
        return obj_map_contains_key_QMARK___2.call(this, k, strobj);
      case 4:
        return obj_map_contains_key_QMARK___4.call(this, k, strobj, true_val, false_val)
    }
    throw"Invalid arity: " + arguments.length;
  };
  obj_map_contains_key_QMARK_.cljs$lang$arity$2 = obj_map_contains_key_QMARK___2;
  obj_map_contains_key_QMARK_.cljs$lang$arity$4 = obj_map_contains_key_QMARK___4;
  return obj_map_contains_key_QMARK_
}();
cljs.core.obj_map_compare_keys = function obj_map_compare_keys(a, b) {
  var a__5657 = cljs.core.hash.call(null, a);
  var b__5658 = cljs.core.hash.call(null, b);
  if(a__5657 < b__5658) {
    return-1
  }else {
    if(a__5657 > b__5658) {
      return 1
    }else {
      if("\ufdd0'else") {
        return 0
      }else {
        return null
      }
    }
  }
};
cljs.core.obj_map__GT_hash_map = function obj_map__GT_hash_map(m, k, v) {
  var ks__5660 = m.keys;
  var len__5661 = ks__5660.length;
  var so__5662 = m.strobj;
  var out__5663 = cljs.core.with_meta.call(null, cljs.core.PersistentHashMap.EMPTY, cljs.core.meta.call(null, m));
  var i__5664 = 0;
  var out__5665 = cljs.core.transient$.call(null, out__5663);
  while(true) {
    if(i__5664 < len__5661) {
      var k__5666 = ks__5660[i__5664];
      var G__5667 = i__5664 + 1;
      var G__5668 = cljs.core.assoc_BANG_.call(null, out__5665, k__5666, so__5662[k__5666]);
      i__5664 = G__5667;
      out__5665 = G__5668;
      continue
    }else {
      return cljs.core.persistent_BANG_.call(null, cljs.core.assoc_BANG_.call(null, out__5665, k, v))
    }
    break
  }
};
cljs.core.ObjMap = function(meta, keys, strobj, update_count, __hash) {
  this.meta = meta;
  this.keys = keys;
  this.strobj = strobj;
  this.update_count = update_count;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 2155021199
};
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.ObjMap")
};
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(coll) {
  var this__5673 = this;
  return cljs.core.transient$.call(null, cljs.core.into.call(null, cljs.core.hash_map.call(null), coll))
};
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__5674 = this;
  var h__364__auto____5675 = this__5674.__hash;
  if(h__364__auto____5675 != null) {
    return h__364__auto____5675
  }else {
    var h__364__auto____5676 = cljs.core.hash_imap.call(null, coll);
    this__5674.__hash = h__364__auto____5676;
    return h__364__auto____5676
  }
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__5677 = this;
  return cljs.core._lookup.call(null, coll, k, null)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__5678 = this;
  return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__5678.strobj, this__5678.strobj[k], not_found)
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__5679 = this;
  if(cljs.core.truth_(goog.isString.call(null, k))) {
    var overwrite_QMARK___5680 = this__5679.strobj.hasOwnProperty(k);
    if(cljs.core.truth_(overwrite_QMARK___5680)) {
      var new_strobj__5681 = goog.object.clone.call(null, this__5679.strobj);
      new_strobj__5681[k] = v;
      return new cljs.core.ObjMap(this__5679.meta, this__5679.keys, new_strobj__5681, this__5679.update_count + 1, null)
    }else {
      if(this__5679.update_count < cljs.core.ObjMap.HASHMAP_THRESHOLD) {
        var new_strobj__5682 = goog.object.clone.call(null, this__5679.strobj);
        var new_keys__5683 = cljs.core.aclone.call(null, this__5679.keys);
        new_strobj__5682[k] = v;
        new_keys__5683.push(k);
        return new cljs.core.ObjMap(this__5679.meta, new_keys__5683, new_strobj__5682, this__5679.update_count + 1, null)
      }else {
        return cljs.core.obj_map__GT_hash_map.call(null, coll, k, v)
      }
    }
  }else {
    return cljs.core.obj_map__GT_hash_map.call(null, coll, k, v)
  }
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(coll, k) {
  var this__5684 = this;
  return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__5684.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = function() {
  var G__5704 = null;
  var G__5704__2 = function(tsym5671, k) {
    var this__5685 = this;
    var tsym5671__5686 = this;
    var coll__5687 = tsym5671__5686;
    return cljs.core._lookup.call(null, coll__5687, k)
  };
  var G__5704__3 = function(tsym5672, k, not_found) {
    var this__5688 = this;
    var tsym5672__5689 = this;
    var coll__5690 = tsym5672__5689;
    return cljs.core._lookup.call(null, coll__5690, k, not_found)
  };
  G__5704 = function(tsym5672, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5704__2.call(this, tsym5672, k);
      case 3:
        return G__5704__3.call(this, tsym5672, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5704
}();
cljs.core.ObjMap.prototype.apply = function(tsym5669, args5670) {
  return tsym5669.call.apply(tsym5669, [tsym5669].concat(cljs.core.aclone.call(null, args5670)))
};
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, entry) {
  var this__5691 = this;
  if(cljs.core.vector_QMARK_.call(null, entry)) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.ObjMap.prototype.toString = function() {
  var this__5692 = this;
  var this$__5693 = this;
  return cljs.core.pr_str.call(null, this$__5693)
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__5694 = this;
  if(this__5694.keys.length > 0) {
    return cljs.core.map.call(null, function(p1__5659_SHARP_) {
      return cljs.core.vector.call(null, p1__5659_SHARP_, this__5694.strobj[p1__5659_SHARP_])
    }, this__5694.keys.sort(cljs.core.obj_map_compare_keys))
  }else {
    return null
  }
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__5695 = this;
  return this__5695.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__5696 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__5697 = this;
  return new cljs.core.ObjMap(meta, this__5697.keys, this__5697.strobj, this__5697.update_count, this__5697.__hash)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__5698 = this;
  return this__5698.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__5699 = this;
  return cljs.core.with_meta.call(null, cljs.core.ObjMap.EMPTY, this__5699.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(coll, k) {
  var this__5700 = this;
  if(cljs.core.truth_(function() {
    var and__3822__auto____5701 = goog.isString.call(null, k);
    if(cljs.core.truth_(and__3822__auto____5701)) {
      return this__5700.strobj.hasOwnProperty(k)
    }else {
      return and__3822__auto____5701
    }
  }())) {
    var new_keys__5702 = cljs.core.aclone.call(null, this__5700.keys);
    var new_strobj__5703 = goog.object.clone.call(null, this__5700.strobj);
    new_keys__5702.splice(cljs.core.scan_array.call(null, 1, k, new_keys__5702), 1);
    cljs.core.js_delete.call(null, new_strobj__5703, k);
    return new cljs.core.ObjMap(this__5700.meta, new_keys__5702, new_strobj__5703, this__5700.update_count + 1, null)
  }else {
    return coll
  }
};
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, [], {}, 0, 0);
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = function(ks, obj) {
  return new cljs.core.ObjMap(null, ks, obj, 0, null)
};
cljs.core.HashMap = function(meta, count, hashobj, __hash) {
  this.meta = meta;
  this.count = count;
  this.hashobj = hashobj;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 7537551
};
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.HashMap")
};
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__5710 = this;
  var h__364__auto____5711 = this__5710.__hash;
  if(h__364__auto____5711 != null) {
    return h__364__auto____5711
  }else {
    var h__364__auto____5712 = cljs.core.hash_imap.call(null, coll);
    this__5710.__hash = h__364__auto____5712;
    return h__364__auto____5712
  }
};
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__5713 = this;
  return cljs.core._lookup.call(null, coll, k, null)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__5714 = this;
  var bucket__5715 = this__5714.hashobj[cljs.core.hash.call(null, k)];
  var i__5716 = cljs.core.truth_(bucket__5715) ? cljs.core.scan_array.call(null, 2, k, bucket__5715) : null;
  if(cljs.core.truth_(i__5716)) {
    return bucket__5715[i__5716 + 1]
  }else {
    return not_found
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__5717 = this;
  var h__5718 = cljs.core.hash.call(null, k);
  var bucket__5719 = this__5717.hashobj[h__5718];
  if(cljs.core.truth_(bucket__5719)) {
    var new_bucket__5720 = cljs.core.aclone.call(null, bucket__5719);
    var new_hashobj__5721 = goog.object.clone.call(null, this__5717.hashobj);
    new_hashobj__5721[h__5718] = new_bucket__5720;
    var temp__3971__auto____5722 = cljs.core.scan_array.call(null, 2, k, new_bucket__5720);
    if(cljs.core.truth_(temp__3971__auto____5722)) {
      var i__5723 = temp__3971__auto____5722;
      new_bucket__5720[i__5723 + 1] = v;
      return new cljs.core.HashMap(this__5717.meta, this__5717.count, new_hashobj__5721, null)
    }else {
      new_bucket__5720.push(k, v);
      return new cljs.core.HashMap(this__5717.meta, this__5717.count + 1, new_hashobj__5721, null)
    }
  }else {
    var new_hashobj__5724 = goog.object.clone.call(null, this__5717.hashobj);
    new_hashobj__5724[h__5718] = [k, v];
    return new cljs.core.HashMap(this__5717.meta, this__5717.count + 1, new_hashobj__5724, null)
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(coll, k) {
  var this__5725 = this;
  var bucket__5726 = this__5725.hashobj[cljs.core.hash.call(null, k)];
  var i__5727 = cljs.core.truth_(bucket__5726) ? cljs.core.scan_array.call(null, 2, k, bucket__5726) : null;
  if(cljs.core.truth_(i__5727)) {
    return true
  }else {
    return false
  }
};
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = function() {
  var G__5750 = null;
  var G__5750__2 = function(tsym5708, k) {
    var this__5728 = this;
    var tsym5708__5729 = this;
    var coll__5730 = tsym5708__5729;
    return cljs.core._lookup.call(null, coll__5730, k)
  };
  var G__5750__3 = function(tsym5709, k, not_found) {
    var this__5731 = this;
    var tsym5709__5732 = this;
    var coll__5733 = tsym5709__5732;
    return cljs.core._lookup.call(null, coll__5733, k, not_found)
  };
  G__5750 = function(tsym5709, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5750__2.call(this, tsym5709, k);
      case 3:
        return G__5750__3.call(this, tsym5709, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5750
}();
cljs.core.HashMap.prototype.apply = function(tsym5706, args5707) {
  return tsym5706.call.apply(tsym5706, [tsym5706].concat(cljs.core.aclone.call(null, args5707)))
};
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, entry) {
  var this__5734 = this;
  if(cljs.core.vector_QMARK_.call(null, entry)) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.HashMap.prototype.toString = function() {
  var this__5735 = this;
  var this$__5736 = this;
  return cljs.core.pr_str.call(null, this$__5736)
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__5737 = this;
  if(this__5737.count > 0) {
    var hashes__5738 = cljs.core.js_keys.call(null, this__5737.hashobj).sort();
    return cljs.core.mapcat.call(null, function(p1__5705_SHARP_) {
      return cljs.core.map.call(null, cljs.core.vec, cljs.core.partition.call(null, 2, this__5737.hashobj[p1__5705_SHARP_]))
    }, hashes__5738)
  }else {
    return null
  }
};
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__5739 = this;
  return this__5739.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__5740 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__5741 = this;
  return new cljs.core.HashMap(meta, this__5741.count, this__5741.hashobj, this__5741.__hash)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__5742 = this;
  return this__5742.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__5743 = this;
  return cljs.core.with_meta.call(null, cljs.core.HashMap.EMPTY, this__5743.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(coll, k) {
  var this__5744 = this;
  var h__5745 = cljs.core.hash.call(null, k);
  var bucket__5746 = this__5744.hashobj[h__5745];
  var i__5747 = cljs.core.truth_(bucket__5746) ? cljs.core.scan_array.call(null, 2, k, bucket__5746) : null;
  if(cljs.core.not.call(null, i__5747)) {
    return coll
  }else {
    var new_hashobj__5748 = goog.object.clone.call(null, this__5744.hashobj);
    if(3 > bucket__5746.length) {
      cljs.core.js_delete.call(null, new_hashobj__5748, h__5745)
    }else {
      var new_bucket__5749 = cljs.core.aclone.call(null, bucket__5746);
      new_bucket__5749.splice(i__5747, 2);
      new_hashobj__5748[h__5745] = new_bucket__5749
    }
    return new cljs.core.HashMap(this__5744.meta, this__5744.count - 1, new_hashobj__5748, null)
  }
};
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, {}, 0);
cljs.core.HashMap.fromArrays = function(ks, vs) {
  var len__5751 = ks.length;
  var i__5752 = 0;
  var out__5753 = cljs.core.HashMap.EMPTY;
  while(true) {
    if(i__5752 < len__5751) {
      var G__5754 = i__5752 + 1;
      var G__5755 = cljs.core.assoc.call(null, out__5753, ks[i__5752], vs[i__5752]);
      i__5752 = G__5754;
      out__5753 = G__5755;
      continue
    }else {
      return out__5753
    }
    break
  }
};
cljs.core.array_map_index_of = function array_map_index_of(m, k) {
  var arr__5756 = m.arr;
  var len__5757 = arr__5756.length;
  var i__5758 = 0;
  while(true) {
    if(len__5757 <= i__5758) {
      return-1
    }else {
      if(cljs.core._EQ_.call(null, arr__5756[i__5758], k)) {
        return i__5758
      }else {
        if("\ufdd0'else") {
          var G__5759 = i__5758 + 2;
          i__5758 = G__5759;
          continue
        }else {
          return null
        }
      }
    }
    break
  }
};
void 0;
cljs.core.PersistentArrayMap = function(meta, cnt, arr, __hash) {
  this.meta = meta;
  this.cnt = cnt;
  this.arr = arr;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 2155545487
};
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentArrayMap")
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(coll) {
  var this__5764 = this;
  return new cljs.core.TransientArrayMap({}, this__5764.arr.length, cljs.core.aclone.call(null, this__5764.arr))
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__5765 = this;
  var h__364__auto____5766 = this__5765.__hash;
  if(h__364__auto____5766 != null) {
    return h__364__auto____5766
  }else {
    var h__364__auto____5767 = cljs.core.hash_imap.call(null, coll);
    this__5765.__hash = h__364__auto____5767;
    return h__364__auto____5767
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__5768 = this;
  return cljs.core._lookup.call(null, coll, k, null)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__5769 = this;
  var idx__5770 = cljs.core.array_map_index_of.call(null, coll, k);
  if(idx__5770 === -1) {
    return not_found
  }else {
    return this__5769.arr[idx__5770 + 1]
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__5771 = this;
  var idx__5772 = cljs.core.array_map_index_of.call(null, coll, k);
  if(idx__5772 === -1) {
    if(this__5771.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD) {
      return new cljs.core.PersistentArrayMap(this__5771.meta, this__5771.cnt + 1, function() {
        var G__5773__5774 = cljs.core.aclone.call(null, this__5771.arr);
        G__5773__5774.push(k);
        G__5773__5774.push(v);
        return G__5773__5774
      }(), null)
    }else {
      return cljs.core.persistent_BANG_.call(null, cljs.core.assoc_BANG_.call(null, cljs.core.transient$.call(null, cljs.core.into.call(null, cljs.core.PersistentHashMap.EMPTY, coll)), k, v))
    }
  }else {
    if(v === this__5771.arr[idx__5772 + 1]) {
      return coll
    }else {
      if("\ufdd0'else") {
        return new cljs.core.PersistentArrayMap(this__5771.meta, this__5771.cnt, function() {
          var G__5775__5776 = cljs.core.aclone.call(null, this__5771.arr);
          G__5775__5776[idx__5772 + 1] = v;
          return G__5775__5776
        }(), null)
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(coll, k) {
  var this__5777 = this;
  return cljs.core.array_map_index_of.call(null, coll, k) != -1
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentArrayMap.prototype.call = function() {
  var G__5807 = null;
  var G__5807__2 = function(tsym5762, k) {
    var this__5778 = this;
    var tsym5762__5779 = this;
    var coll__5780 = tsym5762__5779;
    return cljs.core._lookup.call(null, coll__5780, k)
  };
  var G__5807__3 = function(tsym5763, k, not_found) {
    var this__5781 = this;
    var tsym5763__5782 = this;
    var coll__5783 = tsym5763__5782;
    return cljs.core._lookup.call(null, coll__5783, k, not_found)
  };
  G__5807 = function(tsym5763, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__5807__2.call(this, tsym5763, k);
      case 3:
        return G__5807__3.call(this, tsym5763, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5807
}();
cljs.core.PersistentArrayMap.prototype.apply = function(tsym5760, args5761) {
  return tsym5760.call.apply(tsym5760, [tsym5760].concat(cljs.core.aclone.call(null, args5761)))
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(coll, f, init) {
  var this__5784 = this;
  var len__5785 = this__5784.arr.length;
  var i__5786 = 0;
  var init__5787 = init;
  while(true) {
    if(i__5786 < len__5785) {
      var init__5788 = f.call(null, init__5787, this__5784.arr[i__5786], this__5784.arr[i__5786 + 1]);
      if(cljs.core.reduced_QMARK_.call(null, init__5788)) {
        return cljs.core.deref.call(null, init__5788)
      }else {
        var G__5808 = i__5786 + 2;
        var G__5809 = init__5788;
        i__5786 = G__5808;
        init__5787 = G__5809;
        continue
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, entry) {
  var this__5789 = this;
  if(cljs.core.vector_QMARK_.call(null, entry)) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.PersistentArrayMap.prototype.toString = function() {
  var this__5790 = this;
  var this$__5791 = this;
  return cljs.core.pr_str.call(null, this$__5791)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__5792 = this;
  if(this__5792.cnt > 0) {
    var len__5793 = this__5792.arr.length;
    var array_map_seq__5794 = function array_map_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(i < len__5793) {
          return cljs.core.cons.call(null, cljs.core.PersistentVector.fromArray([this__5792.arr[i], this__5792.arr[i + 1]]), array_map_seq.call(null, i + 2))
        }else {
          return null
        }
      })
    };
    return array_map_seq__5794.call(null, 0)
  }else {
    return null
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__5795 = this;
  return this__5795.cnt
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__5796 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__5797 = this;
  return new cljs.core.PersistentArrayMap(meta, this__5797.cnt, this__5797.arr, this__5797.__hash)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__5798 = this;
  return this__5798.meta
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__5799 = this;
  return cljs.core._with_meta.call(null, cljs.core.PersistentArrayMap.EMPTY, this__5799.meta)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(coll, k) {
  var this__5800 = this;
  var idx__5801 = cljs.core.array_map_index_of.call(null, coll, k);
  if(idx__5801 >= 0) {
    var len__5802 = this__5800.arr.length;
    var new_len__5803 = len__5802 - 2;
    if(new_len__5803 === 0) {
      return cljs.core._empty.call(null, coll)
    }else {
      var new_arr__5804 = cljs.core.make_array.call(null, new_len__5803);
      var s__5805 = 0;
      var d__5806 = 0;
      while(true) {
        if(s__5805 >= len__5802) {
          return new cljs.core.PersistentArrayMap(this__5800.meta, this__5800.cnt - 1, new_arr__5804, null)
        }else {
          if(cljs.core._EQ_.call(null, k, this__5800.arr[s__5805])) {
            var G__5810 = s__5805 + 2;
            var G__5811 = d__5806;
            s__5805 = G__5810;
            d__5806 = G__5811;
            continue
          }else {
            if("\ufdd0'else") {
              new_arr__5804[d__5806] = this__5800.arr[s__5805];
              new_arr__5804[d__5806 + 1] = this__5800.arr[s__5805 + 1];
              var G__5812 = s__5805 + 2;
              var G__5813 = d__5806 + 2;
              s__5805 = G__5812;
              d__5806 = G__5813;
              continue
            }else {
              return null
            }
          }
        }
        break
      }
    }
  }else {
    return coll
  }
};
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = new cljs.core.PersistentArrayMap(null, 0, [], null);
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = function(ks, vs) {
  var len__5814 = cljs.core.count.call(null, ks);
  var i__5815 = 0;
  var out__5816 = cljs.core.transient$.call(null, cljs.core.PersistentArrayMap.EMPTY);
  while(true) {
    if(i__5815 < len__5814) {
      var G__5817 = i__5815 + 1;
      var G__5818 = cljs.core.assoc_BANG_.call(null, out__5816, ks[i__5815], vs[i__5815]);
      i__5815 = G__5817;
      out__5816 = G__5818;
      continue
    }else {
      return cljs.core.persistent_BANG_.call(null, out__5816)
    }
    break
  }
};
void 0;
cljs.core.TransientArrayMap = function(editable_QMARK_, len, arr) {
  this.editable_QMARK_ = editable_QMARK_;
  this.len = len;
  this.arr = arr;
  this.cljs$lang$protocol_mask$partition1$ = 7;
  this.cljs$lang$protocol_mask$partition0$ = 130
};
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.TransientArrayMap")
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = function(tcoll, key) {
  var this__5819 = this;
  if(cljs.core.truth_(this__5819.editable_QMARK_)) {
    var idx__5820 = cljs.core.array_map_index_of.call(null, tcoll, key);
    if(idx__5820 >= 0) {
      this__5819.arr[idx__5820] = this__5819.arr[this__5819.len - 2];
      this__5819.arr[idx__5820 + 1] = this__5819.arr[this__5819.len - 1];
      var G__5821__5822 = this__5819.arr;
      G__5821__5822.pop();
      G__5821__5822.pop();
      G__5821__5822;
      this__5819.len = this__5819.len - 2
    }else {
    }
    return tcoll
  }else {
    throw new Error("dissoc! after persistent!");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(tcoll, key, val) {
  var this__5823 = this;
  if(cljs.core.truth_(this__5823.editable_QMARK_)) {
    var idx__5824 = cljs.core.array_map_index_of.call(null, tcoll, key);
    if(idx__5824 === -1) {
      if(this__5823.len + 2 <= 2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD) {
        this__5823.len = this__5823.len + 2;
        this__5823.arr.push(key);
        this__5823.arr.push(val);
        return tcoll
      }else {
        return cljs.core.assoc_BANG_.call(null, cljs.core.array__GT_transient_hash_map.call(null, this__5823.len, this__5823.arr), key, val)
      }
    }else {
      if(val === this__5823.arr[idx__5824 + 1]) {
        return tcoll
      }else {
        this__5823.arr[idx__5824 + 1] = val;
        return tcoll
      }
    }
  }else {
    throw new Error("assoc! after persistent!");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(tcoll, o) {
  var this__5825 = this;
  if(cljs.core.truth_(this__5825.editable_QMARK_)) {
    if(function() {
      var G__5826__5827 = o;
      if(G__5826__5827 != null) {
        if(function() {
          var or__3824__auto____5828 = G__5826__5827.cljs$lang$protocol_mask$partition0$ & 1024;
          if(or__3824__auto____5828) {
            return or__3824__auto____5828
          }else {
            return G__5826__5827.cljs$core$IMapEntry$
          }
        }()) {
          return true
        }else {
          if(!G__5826__5827.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, G__5826__5827)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, G__5826__5827)
      }
    }()) {
      return cljs.core._assoc_BANG_.call(null, tcoll, cljs.core.key.call(null, o), cljs.core.val.call(null, o))
    }else {
      var es__5829 = cljs.core.seq.call(null, o);
      var tcoll__5830 = tcoll;
      while(true) {
        var temp__3971__auto____5831 = cljs.core.first.call(null, es__5829);
        if(cljs.core.truth_(temp__3971__auto____5831)) {
          var e__5832 = temp__3971__auto____5831;
          var G__5838 = cljs.core.next.call(null, es__5829);
          var G__5839 = cljs.core._assoc_BANG_.call(null, tcoll__5830, cljs.core.key.call(null, e__5832), cljs.core.val.call(null, e__5832));
          es__5829 = G__5838;
          tcoll__5830 = G__5839;
          continue
        }else {
          return tcoll__5830
        }
        break
      }
    }
  }else {
    throw new Error("conj! after persistent!");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(tcoll) {
  var this__5833 = this;
  if(cljs.core.truth_(this__5833.editable_QMARK_)) {
    this__5833.editable_QMARK_ = false;
    return new cljs.core.PersistentArrayMap(null, cljs.core.quot.call(null, this__5833.len, 2), this__5833.arr, null)
  }else {
    throw new Error("persistent! called twice");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(tcoll, k) {
  var this__5834 = this;
  return cljs.core._lookup.call(null, tcoll, k, null)
};
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(tcoll, k, not_found) {
  var this__5835 = this;
  if(cljs.core.truth_(this__5835.editable_QMARK_)) {
    var idx__5836 = cljs.core.array_map_index_of.call(null, tcoll, k);
    if(idx__5836 === -1) {
      return not_found
    }else {
      return this__5835.arr[idx__5836 + 1]
    }
  }else {
    throw new Error("lookup after persistent!");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = function(tcoll) {
  var this__5837 = this;
  if(cljs.core.truth_(this__5837.editable_QMARK_)) {
    return cljs.core.quot.call(null, this__5837.len, 2)
  }else {
    throw new Error("count after persistent!");
  }
};
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = function array__GT_transient_hash_map(len, arr) {
  var out__5840 = cljs.core.transient$.call(null, cljs.core.ObjMap.fromObject([], {}));
  var i__5841 = 0;
  while(true) {
    if(i__5841 < len) {
      var G__5842 = cljs.core.assoc_BANG_.call(null, out__5840, arr[i__5841], arr[i__5841 + 1]);
      var G__5843 = i__5841 + 2;
      out__5840 = G__5842;
      i__5841 = G__5843;
      continue
    }else {
      return out__5840
    }
    break
  }
};
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.mask = function mask(hash, shift) {
  return hash >>> shift & 31
};
cljs.core.clone_and_set = function() {
  var clone_and_set = null;
  var clone_and_set__3 = function(arr, i, a) {
    var G__5844__5845 = cljs.core.aclone.call(null, arr);
    G__5844__5845[i] = a;
    return G__5844__5845
  };
  var clone_and_set__5 = function(arr, i, a, j, b) {
    var G__5846__5847 = cljs.core.aclone.call(null, arr);
    G__5846__5847[i] = a;
    G__5846__5847[j] = b;
    return G__5846__5847
  };
  clone_and_set = function(arr, i, a, j, b) {
    switch(arguments.length) {
      case 3:
        return clone_and_set__3.call(this, arr, i, a);
      case 5:
        return clone_and_set__5.call(this, arr, i, a, j, b)
    }
    throw"Invalid arity: " + arguments.length;
  };
  clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
  clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
  return clone_and_set
}();
cljs.core.remove_pair = function remove_pair(arr, i) {
  var new_arr__5848 = cljs.core.make_array.call(null, arr.length - 2);
  cljs.core.array_copy.call(null, arr, 0, new_arr__5848, 0, 2 * i);
  cljs.core.array_copy.call(null, arr, 2 * (i + 1), new_arr__5848, 2 * i, new_arr__5848.length - 2 * i);
  return new_arr__5848
};
cljs.core.bitmap_indexed_node_index = function bitmap_indexed_node_index(bitmap, bit) {
  return cljs.core.bit_count.call(null, bitmap & bit - 1)
};
cljs.core.bitpos = function bitpos(hash, shift) {
  return 1 << (hash >>> shift & 31)
};
cljs.core.edit_and_set = function() {
  var edit_and_set = null;
  var edit_and_set__4 = function(inode, edit, i, a) {
    var editable__5849 = inode.ensure_editable(edit);
    editable__5849.arr[i] = a;
    return editable__5849
  };
  var edit_and_set__6 = function(inode, edit, i, a, j, b) {
    var editable__5850 = inode.ensure_editable(edit);
    editable__5850.arr[i] = a;
    editable__5850.arr[j] = b;
    return editable__5850
  };
  edit_and_set = function(inode, edit, i, a, j, b) {
    switch(arguments.length) {
      case 4:
        return edit_and_set__4.call(this, inode, edit, i, a);
      case 6:
        return edit_and_set__6.call(this, inode, edit, i, a, j, b)
    }
    throw"Invalid arity: " + arguments.length;
  };
  edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
  edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
  return edit_and_set
}();
cljs.core.inode_kv_reduce = function inode_kv_reduce(arr, f, init) {
  var len__5851 = arr.length;
  var i__5852 = 0;
  var init__5853 = init;
  while(true) {
    if(i__5852 < len__5851) {
      var init__5856 = function() {
        var k__5854 = arr[i__5852];
        if(k__5854 != null) {
          return f.call(null, init__5853, k__5854, arr[i__5852 + 1])
        }else {
          var node__5855 = arr[i__5852 + 1];
          if(node__5855 != null) {
            return node__5855.kv_reduce(f, init__5853)
          }else {
            return init__5853
          }
        }
      }();
      if(cljs.core.reduced_QMARK_.call(null, init__5856)) {
        return cljs.core.deref.call(null, init__5856)
      }else {
        var G__5857 = i__5852 + 2;
        var G__5858 = init__5856;
        i__5852 = G__5857;
        init__5853 = G__5858;
        continue
      }
    }else {
      return init__5853
    }
    break
  }
};
void 0;
cljs.core.BitmapIndexedNode = function(edit, bitmap, arr) {
  this.edit = edit;
  this.bitmap = bitmap;
  this.arr = arr
};
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.BitmapIndexedNode")
};
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = function(e, bit, i) {
  var this__5859 = this;
  var inode__5860 = this;
  if(this__5859.bitmap === bit) {
    return null
  }else {
    var editable__5861 = inode__5860.ensure_editable(e);
    var earr__5862 = editable__5861.arr;
    var len__5863 = earr__5862.length;
    editable__5861.bitmap = bit ^ editable__5861.bitmap;
    cljs.core.array_copy.call(null, earr__5862, 2 * (i + 1), earr__5862, 2 * i, len__5863 - 2 * (i + 1));
    earr__5862[len__5863 - 2] = null;
    earr__5862[len__5863 - 1] = null;
    return editable__5861
  }
};
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = function(edit, shift, hash, key, val, added_leaf_QMARK_) {
  var this__5864 = this;
  var inode__5865 = this;
  var bit__5866 = 1 << (hash >>> shift & 31);
  var idx__5867 = cljs.core.bitmap_indexed_node_index.call(null, this__5864.bitmap, bit__5866);
  if((this__5864.bitmap & bit__5866) === 0) {
    var n__5868 = cljs.core.bit_count.call(null, this__5864.bitmap);
    if(2 * n__5868 < this__5864.arr.length) {
      var editable__5869 = inode__5865.ensure_editable(edit);
      var earr__5870 = editable__5869.arr;
      added_leaf_QMARK_[0] = true;
      cljs.core.array_copy_downward.call(null, earr__5870, 2 * idx__5867, earr__5870, 2 * (idx__5867 + 1), 2 * (n__5868 - idx__5867));
      earr__5870[2 * idx__5867] = key;
      earr__5870[2 * idx__5867 + 1] = val;
      editable__5869.bitmap = editable__5869.bitmap | bit__5866;
      return editable__5869
    }else {
      if(n__5868 >= 16) {
        var nodes__5871 = cljs.core.make_array.call(null, 32);
        var jdx__5872 = hash >>> shift & 31;
        nodes__5871[jdx__5872] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit, shift + 5, hash, key, val, added_leaf_QMARK_);
        var i__5873 = 0;
        var j__5874 = 0;
        while(true) {
          if(i__5873 < 32) {
            if((this__5864.bitmap >>> i__5873 & 1) === 0) {
              var G__5927 = i__5873 + 1;
              var G__5928 = j__5874;
              i__5873 = G__5927;
              j__5874 = G__5928;
              continue
            }else {
              nodes__5871[i__5873] = null != this__5864.arr[j__5874] ? cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit, shift + 5, cljs.core.hash.call(null, this__5864.arr[j__5874]), this__5864.arr[j__5874], this__5864.arr[j__5874 + 1], added_leaf_QMARK_) : this__5864.arr[j__5874 + 1];
              var G__5929 = i__5873 + 1;
              var G__5930 = j__5874 + 2;
              i__5873 = G__5929;
              j__5874 = G__5930;
              continue
            }
          }else {
          }
          break
        }
        return new cljs.core.ArrayNode(edit, n__5868 + 1, nodes__5871)
      }else {
        if("\ufdd0'else") {
          var new_arr__5875 = cljs.core.make_array.call(null, 2 * (n__5868 + 4));
          cljs.core.array_copy.call(null, this__5864.arr, 0, new_arr__5875, 0, 2 * idx__5867);
          new_arr__5875[2 * idx__5867] = key;
          added_leaf_QMARK_[0] = true;
          new_arr__5875[2 * idx__5867 + 1] = val;
          cljs.core.array_copy.call(null, this__5864.arr, 2 * idx__5867, new_arr__5875, 2 * (idx__5867 + 1), 2 * (n__5868 - idx__5867));
          var editable__5876 = inode__5865.ensure_editable(edit);
          editable__5876.arr = new_arr__5875;
          editable__5876.bitmap = editable__5876.bitmap | bit__5866;
          return editable__5876
        }else {
          return null
        }
      }
    }
  }else {
    var key_or_nil__5877 = this__5864.arr[2 * idx__5867];
    var val_or_node__5878 = this__5864.arr[2 * idx__5867 + 1];
    if(null == key_or_nil__5877) {
      var n__5879 = val_or_node__5878.inode_assoc_BANG_(edit, shift + 5, hash, key, val, added_leaf_QMARK_);
      if(n__5879 === val_or_node__5878) {
        return inode__5865
      }else {
        return cljs.core.edit_and_set.call(null, inode__5865, edit, 2 * idx__5867 + 1, n__5879)
      }
    }else {
      if(cljs.core._EQ_.call(null, key, key_or_nil__5877)) {
        if(val === val_or_node__5878) {
          return inode__5865
        }else {
          return cljs.core.edit_and_set.call(null, inode__5865, edit, 2 * idx__5867 + 1, val)
        }
      }else {
        if("\ufdd0'else") {
          added_leaf_QMARK_[0] = true;
          return cljs.core.edit_and_set.call(null, inode__5865, edit, 2 * idx__5867, null, 2 * idx__5867 + 1, cljs.core.create_node.call(null, edit, shift + 5, key_or_nil__5877, val_or_node__5878, hash, key, val))
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.BitmapIndexedNode.prototype.inode_seq = function() {
  var this__5880 = this;
  var inode__5881 = this;
  return cljs.core.create_inode_seq.call(null, this__5880.arr)
};
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = function(edit, shift, hash, key, removed_leaf_QMARK_) {
  var this__5882 = this;
  var inode__5883 = this;
  var bit__5884 = 1 << (hash >>> shift & 31);
  if((this__5882.bitmap & bit__5884) === 0) {
    return inode__5883
  }else {
    var idx__5885 = cljs.core.bitmap_indexed_node_index.call(null, this__5882.bitmap, bit__5884);
    var key_or_nil__5886 = this__5882.arr[2 * idx__5885];
    var val_or_node__5887 = this__5882.arr[2 * idx__5885 + 1];
    if(null == key_or_nil__5886) {
      var n__5888 = val_or_node__5887.inode_without_BANG_(edit, shift + 5, hash, key, removed_leaf_QMARK_);
      if(n__5888 === val_or_node__5887) {
        return inode__5883
      }else {
        if(null != n__5888) {
          return cljs.core.edit_and_set.call(null, inode__5883, edit, 2 * idx__5885 + 1, n__5888)
        }else {
          if(this__5882.bitmap === bit__5884) {
            return null
          }else {
            if("\ufdd0'else") {
              return inode__5883.edit_and_remove_pair(edit, bit__5884, idx__5885)
            }else {
              return null
            }
          }
        }
      }
    }else {
      if(cljs.core._EQ_.call(null, key, key_or_nil__5886)) {
        removed_leaf_QMARK_[0] = true;
        return inode__5883.edit_and_remove_pair(edit, bit__5884, idx__5885)
      }else {
        if("\ufdd0'else") {
          return inode__5883
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.BitmapIndexedNode.prototype.ensure_editable = function(e) {
  var this__5889 = this;
  var inode__5890 = this;
  if(e === this__5889.edit) {
    return inode__5890
  }else {
    var n__5891 = cljs.core.bit_count.call(null, this__5889.bitmap);
    var new_arr__5892 = cljs.core.make_array.call(null, n__5891 < 0 ? 4 : 2 * (n__5891 + 1));
    cljs.core.array_copy.call(null, this__5889.arr, 0, new_arr__5892, 0, 2 * n__5891);
    return new cljs.core.BitmapIndexedNode(e, this__5889.bitmap, new_arr__5892)
  }
};
cljs.core.BitmapIndexedNode.prototype.kv_reduce = function(f, init) {
  var this__5893 = this;
  var inode__5894 = this;
  return cljs.core.inode_kv_reduce.call(null, this__5893.arr, f, init)
};
cljs.core.BitmapIndexedNode.prototype.inode_find = function() {
  var G__5931 = null;
  var G__5931__3 = function(shift, hash, key) {
    var this__5895 = this;
    var inode__5896 = this;
    var bit__5897 = 1 << (hash >>> shift & 31);
    if((this__5895.bitmap & bit__5897) === 0) {
      return null
    }else {
      var idx__5898 = cljs.core.bitmap_indexed_node_index.call(null, this__5895.bitmap, bit__5897);
      var key_or_nil__5899 = this__5895.arr[2 * idx__5898];
      var val_or_node__5900 = this__5895.arr[2 * idx__5898 + 1];
      if(null == key_or_nil__5899) {
        return val_or_node__5900.inode_find(shift + 5, hash, key)
      }else {
        if(cljs.core._EQ_.call(null, key, key_or_nil__5899)) {
          return cljs.core.PersistentVector.fromArray([key_or_nil__5899, val_or_node__5900])
        }else {
          if("\ufdd0'else") {
            return null
          }else {
            return null
          }
        }
      }
    }
  };
  var G__5931__4 = function(shift, hash, key, not_found) {
    var this__5901 = this;
    var inode__5902 = this;
    var bit__5903 = 1 << (hash >>> shift & 31);
    if((this__5901.bitmap & bit__5903) === 0) {
      return not_found
    }else {
      var idx__5904 = cljs.core.bitmap_indexed_node_index.call(null, this__5901.bitmap, bit__5903);
      var key_or_nil__5905 = this__5901.arr[2 * idx__5904];
      var val_or_node__5906 = this__5901.arr[2 * idx__5904 + 1];
      if(null == key_or_nil__5905) {
        return val_or_node__5906.inode_find(shift + 5, hash, key, not_found)
      }else {
        if(cljs.core._EQ_.call(null, key, key_or_nil__5905)) {
          return cljs.core.PersistentVector.fromArray([key_or_nil__5905, val_or_node__5906])
        }else {
          if("\ufdd0'else") {
            return not_found
          }else {
            return null
          }
        }
      }
    }
  };
  G__5931 = function(shift, hash, key, not_found) {
    switch(arguments.length) {
      case 3:
        return G__5931__3.call(this, shift, hash, key);
      case 4:
        return G__5931__4.call(this, shift, hash, key, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5931
}();
cljs.core.BitmapIndexedNode.prototype.inode_without = function(shift, hash, key) {
  var this__5907 = this;
  var inode__5908 = this;
  var bit__5909 = 1 << (hash >>> shift & 31);
  if((this__5907.bitmap & bit__5909) === 0) {
    return inode__5908
  }else {
    var idx__5910 = cljs.core.bitmap_indexed_node_index.call(null, this__5907.bitmap, bit__5909);
    var key_or_nil__5911 = this__5907.arr[2 * idx__5910];
    var val_or_node__5912 = this__5907.arr[2 * idx__5910 + 1];
    if(null == key_or_nil__5911) {
      var n__5913 = val_or_node__5912.inode_without(shift + 5, hash, key);
      if(n__5913 === val_or_node__5912) {
        return inode__5908
      }else {
        if(null != n__5913) {
          return new cljs.core.BitmapIndexedNode(null, this__5907.bitmap, cljs.core.clone_and_set.call(null, this__5907.arr, 2 * idx__5910 + 1, n__5913))
        }else {
          if(this__5907.bitmap === bit__5909) {
            return null
          }else {
            if("\ufdd0'else") {
              return new cljs.core.BitmapIndexedNode(null, this__5907.bitmap ^ bit__5909, cljs.core.remove_pair.call(null, this__5907.arr, idx__5910))
            }else {
              return null
            }
          }
        }
      }
    }else {
      if(cljs.core._EQ_.call(null, key, key_or_nil__5911)) {
        return new cljs.core.BitmapIndexedNode(null, this__5907.bitmap ^ bit__5909, cljs.core.remove_pair.call(null, this__5907.arr, idx__5910))
      }else {
        if("\ufdd0'else") {
          return inode__5908
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.BitmapIndexedNode.prototype.inode_assoc = function(shift, hash, key, val, added_leaf_QMARK_) {
  var this__5914 = this;
  var inode__5915 = this;
  var bit__5916 = 1 << (hash >>> shift & 31);
  var idx__5917 = cljs.core.bitmap_indexed_node_index.call(null, this__5914.bitmap, bit__5916);
  if((this__5914.bitmap & bit__5916) === 0) {
    var n__5918 = cljs.core.bit_count.call(null, this__5914.bitmap);
    if(n__5918 >= 16) {
      var nodes__5919 = cljs.core.make_array.call(null, 32);
      var jdx__5920 = hash >>> shift & 31;
      nodes__5919[jdx__5920] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift + 5, hash, key, val, added_leaf_QMARK_);
      var i__5921 = 0;
      var j__5922 = 0;
      while(true) {
        if(i__5921 < 32) {
          if((this__5914.bitmap >>> i__5921 & 1) === 0) {
            var G__5932 = i__5921 + 1;
            var G__5933 = j__5922;
            i__5921 = G__5932;
            j__5922 = G__5933;
            continue
          }else {
            nodes__5919[i__5921] = null != this__5914.arr[j__5922] ? cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift + 5, cljs.core.hash.call(null, this__5914.arr[j__5922]), this__5914.arr[j__5922], this__5914.arr[j__5922 + 1], added_leaf_QMARK_) : this__5914.arr[j__5922 + 1];
            var G__5934 = i__5921 + 1;
            var G__5935 = j__5922 + 2;
            i__5921 = G__5934;
            j__5922 = G__5935;
            continue
          }
        }else {
        }
        break
      }
      return new cljs.core.ArrayNode(null, n__5918 + 1, nodes__5919)
    }else {
      var new_arr__5923 = cljs.core.make_array.call(null, 2 * (n__5918 + 1));
      cljs.core.array_copy.call(null, this__5914.arr, 0, new_arr__5923, 0, 2 * idx__5917);
      new_arr__5923[2 * idx__5917] = key;
      added_leaf_QMARK_[0] = true;
      new_arr__5923[2 * idx__5917 + 1] = val;
      cljs.core.array_copy.call(null, this__5914.arr, 2 * idx__5917, new_arr__5923, 2 * (idx__5917 + 1), 2 * (n__5918 - idx__5917));
      return new cljs.core.BitmapIndexedNode(null, this__5914.bitmap | bit__5916, new_arr__5923)
    }
  }else {
    var key_or_nil__5924 = this__5914.arr[2 * idx__5917];
    var val_or_node__5925 = this__5914.arr[2 * idx__5917 + 1];
    if(null == key_or_nil__5924) {
      var n__5926 = val_or_node__5925.inode_assoc(shift + 5, hash, key, val, added_leaf_QMARK_);
      if(n__5926 === val_or_node__5925) {
        return inode__5915
      }else {
        return new cljs.core.BitmapIndexedNode(null, this__5914.bitmap, cljs.core.clone_and_set.call(null, this__5914.arr, 2 * idx__5917 + 1, n__5926))
      }
    }else {
      if(cljs.core._EQ_.call(null, key, key_or_nil__5924)) {
        if(val === val_or_node__5925) {
          return inode__5915
        }else {
          return new cljs.core.BitmapIndexedNode(null, this__5914.bitmap, cljs.core.clone_and_set.call(null, this__5914.arr, 2 * idx__5917 + 1, val))
        }
      }else {
        if("\ufdd0'else") {
          added_leaf_QMARK_[0] = true;
          return new cljs.core.BitmapIndexedNode(null, this__5914.bitmap, cljs.core.clone_and_set.call(null, this__5914.arr, 2 * idx__5917, null, 2 * idx__5917 + 1, cljs.core.create_node.call(null, shift + 5, key_or_nil__5924, val_or_node__5925, hash, key, val)))
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = new cljs.core.BitmapIndexedNode(null, 0, cljs.core.make_array.call(null, 0));
cljs.core.pack_array_node = function pack_array_node(array_node, edit, idx) {
  var arr__5936 = array_node.arr;
  var len__5937 = 2 * (array_node.cnt - 1);
  var new_arr__5938 = cljs.core.make_array.call(null, len__5937);
  var i__5939 = 0;
  var j__5940 = 1;
  var bitmap__5941 = 0;
  while(true) {
    if(i__5939 < len__5937) {
      if(function() {
        var and__3822__auto____5942 = i__5939 != idx;
        if(and__3822__auto____5942) {
          return null != arr__5936[i__5939]
        }else {
          return and__3822__auto____5942
        }
      }()) {
        new_arr__5938[j__5940] = arr__5936[i__5939];
        var G__5943 = i__5939 + 1;
        var G__5944 = j__5940 + 2;
        var G__5945 = bitmap__5941 | 1 << i__5939;
        i__5939 = G__5943;
        j__5940 = G__5944;
        bitmap__5941 = G__5945;
        continue
      }else {
        var G__5946 = i__5939 + 1;
        var G__5947 = j__5940;
        var G__5948 = bitmap__5941;
        i__5939 = G__5946;
        j__5940 = G__5947;
        bitmap__5941 = G__5948;
        continue
      }
    }else {
      return new cljs.core.BitmapIndexedNode(edit, bitmap__5941, new_arr__5938)
    }
    break
  }
};
cljs.core.ArrayNode = function(edit, cnt, arr) {
  this.edit = edit;
  this.cnt = cnt;
  this.arr = arr
};
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.ArrayNode")
};
cljs.core.ArrayNode.prototype.inode_assoc = function(shift, hash, key, val, added_leaf_QMARK_) {
  var this__5949 = this;
  var inode__5950 = this;
  var idx__5951 = hash >>> shift & 31;
  var node__5952 = this__5949.arr[idx__5951];
  if(null == node__5952) {
    return new cljs.core.ArrayNode(null, this__5949.cnt + 1, cljs.core.clone_and_set.call(null, this__5949.arr, idx__5951, cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift + 5, hash, key, val, added_leaf_QMARK_)))
  }else {
    var n__5953 = node__5952.inode_assoc(shift + 5, hash, key, val, added_leaf_QMARK_);
    if(n__5953 === node__5952) {
      return inode__5950
    }else {
      return new cljs.core.ArrayNode(null, this__5949.cnt, cljs.core.clone_and_set.call(null, this__5949.arr, idx__5951, n__5953))
    }
  }
};
cljs.core.ArrayNode.prototype.inode_without = function(shift, hash, key) {
  var this__5954 = this;
  var inode__5955 = this;
  var idx__5956 = hash >>> shift & 31;
  var node__5957 = this__5954.arr[idx__5956];
  if(null != node__5957) {
    var n__5958 = node__5957.inode_without(shift + 5, hash, key);
    if(n__5958 === node__5957) {
      return inode__5955
    }else {
      if(n__5958 == null) {
        if(this__5954.cnt <= 8) {
          return cljs.core.pack_array_node.call(null, inode__5955, null, idx__5956)
        }else {
          return new cljs.core.ArrayNode(null, this__5954.cnt - 1, cljs.core.clone_and_set.call(null, this__5954.arr, idx__5956, n__5958))
        }
      }else {
        if("\ufdd0'else") {
          return new cljs.core.ArrayNode(null, this__5954.cnt, cljs.core.clone_and_set.call(null, this__5954.arr, idx__5956, n__5958))
        }else {
          return null
        }
      }
    }
  }else {
    return inode__5955
  }
};
cljs.core.ArrayNode.prototype.inode_find = function() {
  var G__5990 = null;
  var G__5990__3 = function(shift, hash, key) {
    var this__5959 = this;
    var inode__5960 = this;
    var idx__5961 = hash >>> shift & 31;
    var node__5962 = this__5959.arr[idx__5961];
    if(null != node__5962) {
      return node__5962.inode_find(shift + 5, hash, key)
    }else {
      return null
    }
  };
  var G__5990__4 = function(shift, hash, key, not_found) {
    var this__5963 = this;
    var inode__5964 = this;
    var idx__5965 = hash >>> shift & 31;
    var node__5966 = this__5963.arr[idx__5965];
    if(null != node__5966) {
      return node__5966.inode_find(shift + 5, hash, key, not_found)
    }else {
      return not_found
    }
  };
  G__5990 = function(shift, hash, key, not_found) {
    switch(arguments.length) {
      case 3:
        return G__5990__3.call(this, shift, hash, key);
      case 4:
        return G__5990__4.call(this, shift, hash, key, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__5990
}();
cljs.core.ArrayNode.prototype.inode_seq = function() {
  var this__5967 = this;
  var inode__5968 = this;
  return cljs.core.create_array_node_seq.call(null, this__5967.arr)
};
cljs.core.ArrayNode.prototype.ensure_editable = function(e) {
  var this__5969 = this;
  var inode__5970 = this;
  if(e === this__5969.edit) {
    return inode__5970
  }else {
    return new cljs.core.ArrayNode(e, this__5969.cnt, cljs.core.aclone.call(null, this__5969.arr))
  }
};
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = function(edit, shift, hash, key, val, added_leaf_QMARK_) {
  var this__5971 = this;
  var inode__5972 = this;
  var idx__5973 = hash >>> shift & 31;
  var node__5974 = this__5971.arr[idx__5973];
  if(null == node__5974) {
    var editable__5975 = cljs.core.edit_and_set.call(null, inode__5972, edit, idx__5973, cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit, shift + 5, hash, key, val, added_leaf_QMARK_));
    editable__5975.cnt = editable__5975.cnt + 1;
    return editable__5975
  }else {
    var n__5976 = node__5974.inode_assoc_BANG_(edit, shift + 5, hash, key, val, added_leaf_QMARK_);
    if(n__5976 === node__5974) {
      return inode__5972
    }else {
      return cljs.core.edit_and_set.call(null, inode__5972, edit, idx__5973, n__5976)
    }
  }
};
cljs.core.ArrayNode.prototype.inode_without_BANG_ = function(edit, shift, hash, key, removed_leaf_QMARK_) {
  var this__5977 = this;
  var inode__5978 = this;
  var idx__5979 = hash >>> shift & 31;
  var node__5980 = this__5977.arr[idx__5979];
  if(null == node__5980) {
    return inode__5978
  }else {
    var n__5981 = node__5980.inode_without_BANG_(edit, shift + 5, hash, key, removed_leaf_QMARK_);
    if(n__5981 === node__5980) {
      return inode__5978
    }else {
      if(null == n__5981) {
        if(this__5977.cnt <= 8) {
          return cljs.core.pack_array_node.call(null, inode__5978, edit, idx__5979)
        }else {
          var editable__5982 = cljs.core.edit_and_set.call(null, inode__5978, edit, idx__5979, n__5981);
          editable__5982.cnt = editable__5982.cnt - 1;
          return editable__5982
        }
      }else {
        if("\ufdd0'else") {
          return cljs.core.edit_and_set.call(null, inode__5978, edit, idx__5979, n__5981)
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.ArrayNode.prototype.kv_reduce = function(f, init) {
  var this__5983 = this;
  var inode__5984 = this;
  var len__5985 = this__5983.arr.length;
  var i__5986 = 0;
  var init__5987 = init;
  while(true) {
    if(i__5986 < len__5985) {
      var node__5988 = this__5983.arr[i__5986];
      if(node__5988 != null) {
        var init__5989 = node__5988.kv_reduce(f, init__5987);
        if(cljs.core.reduced_QMARK_.call(null, init__5989)) {
          return cljs.core.deref.call(null, init__5989)
        }else {
          var G__5991 = i__5986 + 1;
          var G__5992 = init__5989;
          i__5986 = G__5991;
          init__5987 = G__5992;
          continue
        }
      }else {
        return null
      }
    }else {
      return init__5987
    }
    break
  }
};
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = function hash_collision_node_find_index(arr, cnt, key) {
  var lim__5993 = 2 * cnt;
  var i__5994 = 0;
  while(true) {
    if(i__5994 < lim__5993) {
      if(cljs.core._EQ_.call(null, key, arr[i__5994])) {
        return i__5994
      }else {
        var G__5995 = i__5994 + 2;
        i__5994 = G__5995;
        continue
      }
    }else {
      return-1
    }
    break
  }
};
cljs.core.HashCollisionNode = function(edit, collision_hash, cnt, arr) {
  this.edit = edit;
  this.collision_hash = collision_hash;
  this.cnt = cnt;
  this.arr = arr
};
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.HashCollisionNode")
};
cljs.core.HashCollisionNode.prototype.inode_assoc = function(shift, hash, key, val, added_leaf_QMARK_) {
  var this__5996 = this;
  var inode__5997 = this;
  if(hash === this__5996.collision_hash) {
    var idx__5998 = cljs.core.hash_collision_node_find_index.call(null, this__5996.arr, this__5996.cnt, key);
    if(idx__5998 === -1) {
      var len__5999 = this__5996.arr.length;
      var new_arr__6000 = cljs.core.make_array.call(null, len__5999 + 2);
      cljs.core.array_copy.call(null, this__5996.arr, 0, new_arr__6000, 0, len__5999);
      new_arr__6000[len__5999] = key;
      new_arr__6000[len__5999 + 1] = val;
      added_leaf_QMARK_[0] = true;
      return new cljs.core.HashCollisionNode(null, this__5996.collision_hash, this__5996.cnt + 1, new_arr__6000)
    }else {
      if(cljs.core._EQ_.call(null, this__5996.arr[idx__5998], val)) {
        return inode__5997
      }else {
        return new cljs.core.HashCollisionNode(null, this__5996.collision_hash, this__5996.cnt, cljs.core.clone_and_set.call(null, this__5996.arr, idx__5998 + 1, val))
      }
    }
  }else {
    return(new cljs.core.BitmapIndexedNode(null, 1 << (this__5996.collision_hash >>> shift & 31), [null, inode__5997])).inode_assoc(shift, hash, key, val, added_leaf_QMARK_)
  }
};
cljs.core.HashCollisionNode.prototype.inode_without = function(shift, hash, key) {
  var this__6001 = this;
  var inode__6002 = this;
  var idx__6003 = cljs.core.hash_collision_node_find_index.call(null, this__6001.arr, this__6001.cnt, key);
  if(idx__6003 === -1) {
    return inode__6002
  }else {
    if(this__6001.cnt === 1) {
      return null
    }else {
      if("\ufdd0'else") {
        return new cljs.core.HashCollisionNode(null, this__6001.collision_hash, this__6001.cnt - 1, cljs.core.remove_pair.call(null, this__6001.arr, cljs.core.quot.call(null, idx__6003, 2)))
      }else {
        return null
      }
    }
  }
};
cljs.core.HashCollisionNode.prototype.inode_find = function() {
  var G__6030 = null;
  var G__6030__3 = function(shift, hash, key) {
    var this__6004 = this;
    var inode__6005 = this;
    var idx__6006 = cljs.core.hash_collision_node_find_index.call(null, this__6004.arr, this__6004.cnt, key);
    if(idx__6006 < 0) {
      return null
    }else {
      if(cljs.core._EQ_.call(null, key, this__6004.arr[idx__6006])) {
        return cljs.core.PersistentVector.fromArray([this__6004.arr[idx__6006], this__6004.arr[idx__6006 + 1]])
      }else {
        if("\ufdd0'else") {
          return null
        }else {
          return null
        }
      }
    }
  };
  var G__6030__4 = function(shift, hash, key, not_found) {
    var this__6007 = this;
    var inode__6008 = this;
    var idx__6009 = cljs.core.hash_collision_node_find_index.call(null, this__6007.arr, this__6007.cnt, key);
    if(idx__6009 < 0) {
      return not_found
    }else {
      if(cljs.core._EQ_.call(null, key, this__6007.arr[idx__6009])) {
        return cljs.core.PersistentVector.fromArray([this__6007.arr[idx__6009], this__6007.arr[idx__6009 + 1]])
      }else {
        if("\ufdd0'else") {
          return not_found
        }else {
          return null
        }
      }
    }
  };
  G__6030 = function(shift, hash, key, not_found) {
    switch(arguments.length) {
      case 3:
        return G__6030__3.call(this, shift, hash, key);
      case 4:
        return G__6030__4.call(this, shift, hash, key, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6030
}();
cljs.core.HashCollisionNode.prototype.inode_seq = function() {
  var this__6010 = this;
  var inode__6011 = this;
  return cljs.core.create_inode_seq.call(null, this__6010.arr)
};
cljs.core.HashCollisionNode.prototype.ensure_editable = function() {
  var G__6031 = null;
  var G__6031__1 = function(e) {
    var this__6012 = this;
    var inode__6013 = this;
    if(e === this__6012.edit) {
      return inode__6013
    }else {
      var new_arr__6014 = cljs.core.make_array.call(null, 2 * (this__6012.cnt + 1));
      cljs.core.array_copy.call(null, this__6012.arr, 0, new_arr__6014, 0, 2 * this__6012.cnt);
      return new cljs.core.HashCollisionNode(e, this__6012.collision_hash, this__6012.cnt, new_arr__6014)
    }
  };
  var G__6031__3 = function(e, count, array) {
    var this__6015 = this;
    var inode__6016 = this;
    if(e === this__6015.edit) {
      this__6015.arr = array;
      this__6015.cnt = count;
      return inode__6016
    }else {
      return new cljs.core.HashCollisionNode(this__6015.edit, this__6015.collision_hash, count, array)
    }
  };
  G__6031 = function(e, count, array) {
    switch(arguments.length) {
      case 1:
        return G__6031__1.call(this, e);
      case 3:
        return G__6031__3.call(this, e, count, array)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6031
}();
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = function(edit, shift, hash, key, val, added_leaf_QMARK_) {
  var this__6017 = this;
  var inode__6018 = this;
  if(hash === this__6017.collision_hash) {
    var idx__6019 = cljs.core.hash_collision_node_find_index.call(null, this__6017.arr, this__6017.cnt, key);
    if(idx__6019 === -1) {
      if(this__6017.arr.length > 2 * this__6017.cnt) {
        var editable__6020 = cljs.core.edit_and_set.call(null, inode__6018, edit, 2 * this__6017.cnt, key, 2 * this__6017.cnt + 1, val);
        added_leaf_QMARK_[0] = true;
        editable__6020.cnt = editable__6020.cnt + 1;
        return editable__6020
      }else {
        var len__6021 = this__6017.arr.length;
        var new_arr__6022 = cljs.core.make_array.call(null, len__6021 + 2);
        cljs.core.array_copy.call(null, this__6017.arr, 0, new_arr__6022, 0, len__6021);
        new_arr__6022[len__6021] = key;
        new_arr__6022[len__6021 + 1] = val;
        added_leaf_QMARK_[0] = true;
        return inode__6018.ensure_editable(edit, this__6017.cnt + 1, new_arr__6022)
      }
    }else {
      if(this__6017.arr[idx__6019 + 1] === val) {
        return inode__6018
      }else {
        return cljs.core.edit_and_set.call(null, inode__6018, edit, idx__6019 + 1, val)
      }
    }
  }else {
    return(new cljs.core.BitmapIndexedNode(edit, 1 << (this__6017.collision_hash >>> shift & 31), [null, inode__6018, null, null])).inode_assoc_BANG_(edit, shift, hash, key, val, added_leaf_QMARK_)
  }
};
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = function(edit, shift, hash, key, removed_leaf_QMARK_) {
  var this__6023 = this;
  var inode__6024 = this;
  var idx__6025 = cljs.core.hash_collision_node_find_index.call(null, this__6023.arr, this__6023.cnt, key);
  if(idx__6025 === -1) {
    return inode__6024
  }else {
    removed_leaf_QMARK_[0] = true;
    if(this__6023.cnt === 1) {
      return null
    }else {
      var editable__6026 = inode__6024.ensure_editable(edit);
      var earr__6027 = editable__6026.arr;
      earr__6027[idx__6025] = earr__6027[2 * this__6023.cnt - 2];
      earr__6027[idx__6025 + 1] = earr__6027[2 * this__6023.cnt - 1];
      earr__6027[2 * this__6023.cnt - 1] = null;
      earr__6027[2 * this__6023.cnt - 2] = null;
      editable__6026.cnt = editable__6026.cnt - 1;
      return editable__6026
    }
  }
};
cljs.core.HashCollisionNode.prototype.kv_reduce = function(f, init) {
  var this__6028 = this;
  var inode__6029 = this;
  return cljs.core.inode_kv_reduce.call(null, this__6028.arr, f, init)
};
cljs.core.HashCollisionNode;
cljs.core.create_node = function() {
  var create_node = null;
  var create_node__6 = function(shift, key1, val1, key2hash, key2, val2) {
    var key1hash__6032 = cljs.core.hash.call(null, key1);
    if(key1hash__6032 === key2hash) {
      return new cljs.core.HashCollisionNode(null, key1hash__6032, 2, [key1, val1, key2, val2])
    }else {
      var added_leaf_QMARK___6033 = [false];
      return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift, key1hash__6032, key1, val1, added_leaf_QMARK___6033).inode_assoc(shift, key2hash, key2, val2, added_leaf_QMARK___6033)
    }
  };
  var create_node__7 = function(edit, shift, key1, val1, key2hash, key2, val2) {
    var key1hash__6034 = cljs.core.hash.call(null, key1);
    if(key1hash__6034 === key2hash) {
      return new cljs.core.HashCollisionNode(null, key1hash__6034, 2, [key1, val1, key2, val2])
    }else {
      var added_leaf_QMARK___6035 = [false];
      return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit, shift, key1hash__6034, key1, val1, added_leaf_QMARK___6035).inode_assoc_BANG_(edit, shift, key2hash, key2, val2, added_leaf_QMARK___6035)
    }
  };
  create_node = function(edit, shift, key1, val1, key2hash, key2, val2) {
    switch(arguments.length) {
      case 6:
        return create_node__6.call(this, edit, shift, key1, val1, key2hash, key2);
      case 7:
        return create_node__7.call(this, edit, shift, key1, val1, key2hash, key2, val2)
    }
    throw"Invalid arity: " + arguments.length;
  };
  create_node.cljs$lang$arity$6 = create_node__6;
  create_node.cljs$lang$arity$7 = create_node__7;
  return create_node
}();
cljs.core.NodeSeq = function(meta, nodes, i, s, __hash) {
  this.meta = meta;
  this.nodes = nodes;
  this.i = i;
  this.s = s;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 15925324
};
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.NodeSeq")
};
cljs.core.NodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__6036 = this;
  var h__364__auto____6037 = this__6036.__hash;
  if(h__364__auto____6037 != null) {
    return h__364__auto____6037
  }else {
    var h__364__auto____6038 = cljs.core.hash_coll.call(null, coll);
    this__6036.__hash = h__364__auto____6038;
    return h__364__auto____6038
  }
};
cljs.core.NodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__6039 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.NodeSeq.prototype.toString = function() {
  var this__6040 = this;
  var this$__6041 = this;
  return cljs.core.pr_str.call(null, this$__6041)
};
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(this$) {
  var this__6042 = this;
  return this$
};
cljs.core.NodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__6043 = this;
  if(this__6043.s == null) {
    return cljs.core.PersistentVector.fromArray([this__6043.nodes[this__6043.i], this__6043.nodes[this__6043.i + 1]])
  }else {
    return cljs.core.first.call(null, this__6043.s)
  }
};
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__6044 = this;
  if(this__6044.s == null) {
    return cljs.core.create_inode_seq.call(null, this__6044.nodes, this__6044.i + 2, null)
  }else {
    return cljs.core.create_inode_seq.call(null, this__6044.nodes, this__6044.i, cljs.core.next.call(null, this__6044.s))
  }
};
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__6045 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__6046 = this;
  return new cljs.core.NodeSeq(meta, this__6046.nodes, this__6046.i, this__6046.s, this__6046.__hash)
};
cljs.core.NodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__6047 = this;
  return this__6047.meta
};
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__6048 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__6048.meta)
};
cljs.core.NodeSeq;
cljs.core.create_inode_seq = function() {
  var create_inode_seq = null;
  var create_inode_seq__1 = function(nodes) {
    return create_inode_seq.call(null, nodes, 0, null)
  };
  var create_inode_seq__3 = function(nodes, i, s) {
    if(s == null) {
      var len__6049 = nodes.length;
      var j__6050 = i;
      while(true) {
        if(j__6050 < len__6049) {
          if(null != nodes[j__6050]) {
            return new cljs.core.NodeSeq(null, nodes, j__6050, null, null)
          }else {
            var temp__3971__auto____6051 = nodes[j__6050 + 1];
            if(cljs.core.truth_(temp__3971__auto____6051)) {
              var node__6052 = temp__3971__auto____6051;
              var temp__3971__auto____6053 = node__6052.inode_seq();
              if(cljs.core.truth_(temp__3971__auto____6053)) {
                var node_seq__6054 = temp__3971__auto____6053;
                return new cljs.core.NodeSeq(null, nodes, j__6050 + 2, node_seq__6054, null)
              }else {
                var G__6055 = j__6050 + 2;
                j__6050 = G__6055;
                continue
              }
            }else {
              var G__6056 = j__6050 + 2;
              j__6050 = G__6056;
              continue
            }
          }
        }else {
          return null
        }
        break
      }
    }else {
      return new cljs.core.NodeSeq(null, nodes, i, s, null)
    }
  };
  create_inode_seq = function(nodes, i, s) {
    switch(arguments.length) {
      case 1:
        return create_inode_seq__1.call(this, nodes);
      case 3:
        return create_inode_seq__3.call(this, nodes, i, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
  create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
  return create_inode_seq
}();
cljs.core.ArrayNodeSeq = function(meta, nodes, i, s, __hash) {
  this.meta = meta;
  this.nodes = nodes;
  this.i = i;
  this.s = s;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 15925324
};
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.ArrayNodeSeq")
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__6057 = this;
  var h__364__auto____6058 = this__6057.__hash;
  if(h__364__auto____6058 != null) {
    return h__364__auto____6058
  }else {
    var h__364__auto____6059 = cljs.core.hash_coll.call(null, coll);
    this__6057.__hash = h__364__auto____6059;
    return h__364__auto____6059
  }
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__6060 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.ArrayNodeSeq.prototype.toString = function() {
  var this__6061 = this;
  var this$__6062 = this;
  return cljs.core.pr_str.call(null, this$__6062)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(this$) {
  var this__6063 = this;
  return this$
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__6064 = this;
  return cljs.core.first.call(null, this__6064.s)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__6065 = this;
  return cljs.core.create_array_node_seq.call(null, null, this__6065.nodes, this__6065.i, cljs.core.next.call(null, this__6065.s))
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__6066 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__6067 = this;
  return new cljs.core.ArrayNodeSeq(meta, this__6067.nodes, this__6067.i, this__6067.s, this__6067.__hash)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__6068 = this;
  return this__6068.meta
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__6069 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__6069.meta)
};
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = function() {
  var create_array_node_seq = null;
  var create_array_node_seq__1 = function(nodes) {
    return create_array_node_seq.call(null, null, nodes, 0, null)
  };
  var create_array_node_seq__4 = function(meta, nodes, i, s) {
    if(s == null) {
      var len__6070 = nodes.length;
      var j__6071 = i;
      while(true) {
        if(j__6071 < len__6070) {
          var temp__3971__auto____6072 = nodes[j__6071];
          if(cljs.core.truth_(temp__3971__auto____6072)) {
            var nj__6073 = temp__3971__auto____6072;
            var temp__3971__auto____6074 = nj__6073.inode_seq();
            if(cljs.core.truth_(temp__3971__auto____6074)) {
              var ns__6075 = temp__3971__auto____6074;
              return new cljs.core.ArrayNodeSeq(meta, nodes, j__6071 + 1, ns__6075, null)
            }else {
              var G__6076 = j__6071 + 1;
              j__6071 = G__6076;
              continue
            }
          }else {
            var G__6077 = j__6071 + 1;
            j__6071 = G__6077;
            continue
          }
        }else {
          return null
        }
        break
      }
    }else {
      return new cljs.core.ArrayNodeSeq(meta, nodes, i, s, null)
    }
  };
  create_array_node_seq = function(meta, nodes, i, s) {
    switch(arguments.length) {
      case 1:
        return create_array_node_seq__1.call(this, meta);
      case 4:
        return create_array_node_seq__4.call(this, meta, nodes, i, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
  create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
  return create_array_node_seq
}();
void 0;
cljs.core.PersistentHashMap = function(meta, cnt, root, has_nil_QMARK_, nil_val, __hash) {
  this.meta = meta;
  this.cnt = cnt;
  this.root = root;
  this.has_nil_QMARK_ = has_nil_QMARK_;
  this.nil_val = nil_val;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 2155545487
};
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentHashMap")
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(coll) {
  var this__6082 = this;
  return new cljs.core.TransientHashMap({}, this__6082.root, this__6082.cnt, this__6082.has_nil_QMARK_, this__6082.nil_val)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__6083 = this;
  var h__364__auto____6084 = this__6083.__hash;
  if(h__364__auto____6084 != null) {
    return h__364__auto____6084
  }else {
    var h__364__auto____6085 = cljs.core.hash_imap.call(null, coll);
    this__6083.__hash = h__364__auto____6085;
    return h__364__auto____6085
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__6086 = this;
  return cljs.core._lookup.call(null, coll, k, null)
};
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__6087 = this;
  if(k == null) {
    if(cljs.core.truth_(this__6087.has_nil_QMARK_)) {
      return this__6087.nil_val
    }else {
      return not_found
    }
  }else {
    if(this__6087.root == null) {
      return not_found
    }else {
      if("\ufdd0'else") {
        return cljs.core.nth.call(null, this__6087.root.inode_find(0, cljs.core.hash.call(null, k), k, [null, not_found]), 1)
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__6088 = this;
  if(k == null) {
    if(cljs.core.truth_(function() {
      var and__3822__auto____6089 = this__6088.has_nil_QMARK_;
      if(cljs.core.truth_(and__3822__auto____6089)) {
        return v === this__6088.nil_val
      }else {
        return and__3822__auto____6089
      }
    }())) {
      return coll
    }else {
      return new cljs.core.PersistentHashMap(this__6088.meta, cljs.core.truth_(this__6088.has_nil_QMARK_) ? this__6088.cnt : this__6088.cnt + 1, this__6088.root, true, v, null)
    }
  }else {
    var added_leaf_QMARK___6090 = [false];
    var new_root__6091 = (this__6088.root == null ? cljs.core.BitmapIndexedNode.EMPTY : this__6088.root).inode_assoc(0, cljs.core.hash.call(null, k), k, v, added_leaf_QMARK___6090);
    if(new_root__6091 === this__6088.root) {
      return coll
    }else {
      return new cljs.core.PersistentHashMap(this__6088.meta, cljs.core.truth_(added_leaf_QMARK___6090[0]) ? this__6088.cnt + 1 : this__6088.cnt, new_root__6091, this__6088.has_nil_QMARK_, this__6088.nil_val, null)
    }
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(coll, k) {
  var this__6092 = this;
  if(k == null) {
    return this__6092.has_nil_QMARK_
  }else {
    if(this__6092.root == null) {
      return false
    }else {
      if("\ufdd0'else") {
        return cljs.core.not.call(null, this__6092.root.inode_find(0, cljs.core.hash.call(null, k), k, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashMap.prototype.call = function() {
  var G__6113 = null;
  var G__6113__2 = function(tsym6080, k) {
    var this__6093 = this;
    var tsym6080__6094 = this;
    var coll__6095 = tsym6080__6094;
    return cljs.core._lookup.call(null, coll__6095, k)
  };
  var G__6113__3 = function(tsym6081, k, not_found) {
    var this__6096 = this;
    var tsym6081__6097 = this;
    var coll__6098 = tsym6081__6097;
    return cljs.core._lookup.call(null, coll__6098, k, not_found)
  };
  G__6113 = function(tsym6081, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__6113__2.call(this, tsym6081, k);
      case 3:
        return G__6113__3.call(this, tsym6081, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6113
}();
cljs.core.PersistentHashMap.prototype.apply = function(tsym6078, args6079) {
  return tsym6078.call.apply(tsym6078, [tsym6078].concat(cljs.core.aclone.call(null, args6079)))
};
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(coll, f, init) {
  var this__6099 = this;
  var init__6100 = cljs.core.truth_(this__6099.has_nil_QMARK_) ? f.call(null, init, null, this__6099.nil_val) : init;
  if(cljs.core.reduced_QMARK_.call(null, init__6100)) {
    return cljs.core.deref.call(null, init__6100)
  }else {
    if(null != this__6099.root) {
      return this__6099.root.kv_reduce(f, init__6100)
    }else {
      if("\ufdd0'else") {
        return init__6100
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, entry) {
  var this__6101 = this;
  if(cljs.core.vector_QMARK_.call(null, entry)) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.PersistentHashMap.prototype.toString = function() {
  var this__6102 = this;
  var this$__6103 = this;
  return cljs.core.pr_str.call(null, this$__6103)
};
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__6104 = this;
  if(this__6104.cnt > 0) {
    var s__6105 = null != this__6104.root ? this__6104.root.inode_seq() : null;
    if(cljs.core.truth_(this__6104.has_nil_QMARK_)) {
      return cljs.core.cons.call(null, cljs.core.PersistentVector.fromArray([null, this__6104.nil_val]), s__6105)
    }else {
      return s__6105
    }
  }else {
    return null
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__6106 = this;
  return this__6106.cnt
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__6107 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__6108 = this;
  return new cljs.core.PersistentHashMap(meta, this__6108.cnt, this__6108.root, this__6108.has_nil_QMARK_, this__6108.nil_val, this__6108.__hash)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__6109 = this;
  return this__6109.meta
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__6110 = this;
  return cljs.core._with_meta.call(null, cljs.core.PersistentHashMap.EMPTY, this__6110.meta)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(coll, k) {
  var this__6111 = this;
  if(k == null) {
    if(cljs.core.truth_(this__6111.has_nil_QMARK_)) {
      return new cljs.core.PersistentHashMap(this__6111.meta, this__6111.cnt - 1, this__6111.root, false, null, null)
    }else {
      return coll
    }
  }else {
    if(this__6111.root == null) {
      return coll
    }else {
      if("\ufdd0'else") {
        var new_root__6112 = this__6111.root.inode_without(0, cljs.core.hash.call(null, k), k);
        if(new_root__6112 === this__6111.root) {
          return coll
        }else {
          return new cljs.core.PersistentHashMap(this__6111.meta, this__6111.cnt - 1, new_root__6112, this__6111.has_nil_QMARK_, this__6111.nil_val, null)
        }
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = new cljs.core.PersistentHashMap(null, 0, null, false, null, 0);
cljs.core.PersistentHashMap.fromArrays = function(ks, vs) {
  var len__6114 = ks.length;
  var i__6115 = 0;
  var out__6116 = cljs.core.transient$.call(null, cljs.core.PersistentHashMap.EMPTY);
  while(true) {
    if(i__6115 < len__6114) {
      var G__6117 = i__6115 + 1;
      var G__6118 = cljs.core.assoc_BANG_.call(null, out__6116, ks[i__6115], vs[i__6115]);
      i__6115 = G__6117;
      out__6116 = G__6118;
      continue
    }else {
      return cljs.core.persistent_BANG_.call(null, out__6116)
    }
    break
  }
};
cljs.core.TransientHashMap = function(edit, root, count, has_nil_QMARK_, nil_val) {
  this.edit = edit;
  this.root = root;
  this.count = count;
  this.has_nil_QMARK_ = has_nil_QMARK_;
  this.nil_val = nil_val;
  this.cljs$lang$protocol_mask$partition1$ = 7;
  this.cljs$lang$protocol_mask$partition0$ = 130
};
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.TransientHashMap")
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = function(tcoll, key) {
  var this__6119 = this;
  return tcoll.without_BANG_(key)
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(tcoll, key, val) {
  var this__6120 = this;
  return tcoll.assoc_BANG_(key, val)
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(tcoll, val) {
  var this__6121 = this;
  return tcoll.conj_BANG_(val)
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(tcoll) {
  var this__6122 = this;
  return tcoll.persistent_BANG_()
};
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(tcoll, k) {
  var this__6123 = this;
  if(k == null) {
    if(cljs.core.truth_(this__6123.has_nil_QMARK_)) {
      return this__6123.nil_val
    }else {
      return null
    }
  }else {
    if(this__6123.root == null) {
      return null
    }else {
      return cljs.core.nth.call(null, this__6123.root.inode_find(0, cljs.core.hash.call(null, k), k), 1)
    }
  }
};
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(tcoll, k, not_found) {
  var this__6124 = this;
  if(k == null) {
    if(cljs.core.truth_(this__6124.has_nil_QMARK_)) {
      return this__6124.nil_val
    }else {
      return not_found
    }
  }else {
    if(this__6124.root == null) {
      return not_found
    }else {
      return cljs.core.nth.call(null, this__6124.root.inode_find(0, cljs.core.hash.call(null, k), k, [null, not_found]), 1)
    }
  }
};
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__6125 = this;
  if(cljs.core.truth_(this__6125.edit)) {
    return this__6125.count
  }else {
    throw new Error("count after persistent!");
  }
};
cljs.core.TransientHashMap.prototype.conj_BANG_ = function(o) {
  var this__6126 = this;
  var tcoll__6127 = this;
  if(cljs.core.truth_(this__6126.edit)) {
    if(function() {
      var G__6128__6129 = o;
      if(G__6128__6129 != null) {
        if(function() {
          var or__3824__auto____6130 = G__6128__6129.cljs$lang$protocol_mask$partition0$ & 1024;
          if(or__3824__auto____6130) {
            return or__3824__auto____6130
          }else {
            return G__6128__6129.cljs$core$IMapEntry$
          }
        }()) {
          return true
        }else {
          if(!G__6128__6129.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, G__6128__6129)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, G__6128__6129)
      }
    }()) {
      return tcoll__6127.assoc_BANG_(cljs.core.key.call(null, o), cljs.core.val.call(null, o))
    }else {
      var es__6131 = cljs.core.seq.call(null, o);
      var tcoll__6132 = tcoll__6127;
      while(true) {
        var temp__3971__auto____6133 = cljs.core.first.call(null, es__6131);
        if(cljs.core.truth_(temp__3971__auto____6133)) {
          var e__6134 = temp__3971__auto____6133;
          var G__6145 = cljs.core.next.call(null, es__6131);
          var G__6146 = tcoll__6132.assoc_BANG_(cljs.core.key.call(null, e__6134), cljs.core.val.call(null, e__6134));
          es__6131 = G__6145;
          tcoll__6132 = G__6146;
          continue
        }else {
          return tcoll__6132
        }
        break
      }
    }
  }else {
    throw new Error("conj! after persistent");
  }
};
cljs.core.TransientHashMap.prototype.assoc_BANG_ = function(k, v) {
  var this__6135 = this;
  var tcoll__6136 = this;
  if(cljs.core.truth_(this__6135.edit)) {
    if(k == null) {
      if(this__6135.nil_val === v) {
      }else {
        this__6135.nil_val = v
      }
      if(cljs.core.truth_(this__6135.has_nil_QMARK_)) {
      }else {
        this__6135.count = this__6135.count + 1;
        this__6135.has_nil_QMARK_ = true
      }
      return tcoll__6136
    }else {
      var added_leaf_QMARK___6137 = [false];
      var node__6138 = (this__6135.root == null ? cljs.core.BitmapIndexedNode.EMPTY : this__6135.root).inode_assoc_BANG_(this__6135.edit, 0, cljs.core.hash.call(null, k), k, v, added_leaf_QMARK___6137);
      if(node__6138 === this__6135.root) {
      }else {
        this__6135.root = node__6138
      }
      if(cljs.core.truth_(added_leaf_QMARK___6137[0])) {
        this__6135.count = this__6135.count + 1
      }else {
      }
      return tcoll__6136
    }
  }else {
    throw new Error("assoc! after persistent!");
  }
};
cljs.core.TransientHashMap.prototype.without_BANG_ = function(k) {
  var this__6139 = this;
  var tcoll__6140 = this;
  if(cljs.core.truth_(this__6139.edit)) {
    if(k == null) {
      if(cljs.core.truth_(this__6139.has_nil_QMARK_)) {
        this__6139.has_nil_QMARK_ = false;
        this__6139.nil_val = null;
        this__6139.count = this__6139.count - 1;
        return tcoll__6140
      }else {
        return tcoll__6140
      }
    }else {
      if(this__6139.root == null) {
        return tcoll__6140
      }else {
        var removed_leaf_QMARK___6141 = [false];
        var node__6142 = this__6139.root.inode_without_BANG_(this__6139.edit, 0, cljs.core.hash.call(null, k), k, removed_leaf_QMARK___6141);
        if(node__6142 === this__6139.root) {
        }else {
          this__6139.root = node__6142
        }
        if(cljs.core.truth_(removed_leaf_QMARK___6141[0])) {
          this__6139.count = this__6139.count - 1
        }else {
        }
        return tcoll__6140
      }
    }
  }else {
    throw new Error("dissoc! after persistent!");
  }
};
cljs.core.TransientHashMap.prototype.persistent_BANG_ = function() {
  var this__6143 = this;
  var tcoll__6144 = this;
  if(cljs.core.truth_(this__6143.edit)) {
    this__6143.edit = null;
    return new cljs.core.PersistentHashMap(null, this__6143.count, this__6143.root, this__6143.has_nil_QMARK_, this__6143.nil_val, null)
  }else {
    throw new Error("persistent! called twice");
  }
};
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = function tree_map_seq_push(node, stack, ascending_QMARK_) {
  var t__6147 = node;
  var stack__6148 = stack;
  while(true) {
    if(t__6147 != null) {
      var G__6149 = cljs.core.truth_(ascending_QMARK_) ? t__6147.left : t__6147.right;
      var G__6150 = cljs.core.conj.call(null, stack__6148, t__6147);
      t__6147 = G__6149;
      stack__6148 = G__6150;
      continue
    }else {
      return stack__6148
    }
    break
  }
};
cljs.core.PersistentTreeMapSeq = function(meta, stack, ascending_QMARK_, cnt, __hash) {
  this.meta = meta;
  this.stack = stack;
  this.ascending_QMARK_ = ascending_QMARK_;
  this.cnt = cnt;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 15925322
};
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentTreeMapSeq")
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__6151 = this;
  var h__364__auto____6152 = this__6151.__hash;
  if(h__364__auto____6152 != null) {
    return h__364__auto____6152
  }else {
    var h__364__auto____6153 = cljs.core.hash_coll.call(null, coll);
    this__6151.__hash = h__364__auto____6153;
    return h__364__auto____6153
  }
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__6154 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.PersistentTreeMapSeq.prototype.toString = function() {
  var this__6155 = this;
  var this$__6156 = this;
  return cljs.core.pr_str.call(null, this$__6156)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(this$) {
  var this__6157 = this;
  return this$
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__6158 = this;
  if(this__6158.cnt < 0) {
    return cljs.core.count.call(null, cljs.core.next.call(null, coll)) + 1
  }else {
    return this__6158.cnt
  }
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(this$) {
  var this__6159 = this;
  return cljs.core.peek.call(null, this__6159.stack)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(this$) {
  var this__6160 = this;
  var t__6161 = cljs.core.peek.call(null, this__6160.stack);
  var next_stack__6162 = cljs.core.tree_map_seq_push.call(null, cljs.core.truth_(this__6160.ascending_QMARK_) ? t__6161.right : t__6161.left, cljs.core.pop.call(null, this__6160.stack), this__6160.ascending_QMARK_);
  if(next_stack__6162 != null) {
    return new cljs.core.PersistentTreeMapSeq(null, next_stack__6162, this__6160.ascending_QMARK_, this__6160.cnt - 1, null)
  }else {
    return null
  }
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__6163 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__6164 = this;
  return new cljs.core.PersistentTreeMapSeq(meta, this__6164.stack, this__6164.ascending_QMARK_, this__6164.cnt, this__6164.__hash)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__6165 = this;
  return this__6165.meta
};
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = function create_tree_map_seq(tree, ascending_QMARK_, cnt) {
  return new cljs.core.PersistentTreeMapSeq(null, cljs.core.tree_map_seq_push.call(null, tree, null, ascending_QMARK_), ascending_QMARK_, cnt, null)
};
void 0;
void 0;
cljs.core.balance_left = function balance_left(key, val, ins, right) {
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins)) {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins.left)) {
      return new cljs.core.RedNode(ins.key, ins.val, ins.left.blacken(), new cljs.core.BlackNode(key, val, ins.right, right, null), null)
    }else {
      if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins.right)) {
        return new cljs.core.RedNode(ins.right.key, ins.right.val, new cljs.core.BlackNode(ins.key, ins.val, ins.left, ins.right.left, null), new cljs.core.BlackNode(key, val, ins.right.right, right, null), null)
      }else {
        if("\ufdd0'else") {
          return new cljs.core.BlackNode(key, val, ins, right, null)
        }else {
          return null
        }
      }
    }
  }else {
    return new cljs.core.BlackNode(key, val, ins, right, null)
  }
};
cljs.core.balance_right = function balance_right(key, val, left, ins) {
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins)) {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins.right)) {
      return new cljs.core.RedNode(ins.key, ins.val, new cljs.core.BlackNode(key, val, left, ins.left, null), ins.right.blacken(), null)
    }else {
      if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins.left)) {
        return new cljs.core.RedNode(ins.left.key, ins.left.val, new cljs.core.BlackNode(key, val, left, ins.left.left, null), new cljs.core.BlackNode(ins.key, ins.val, ins.left.right, ins.right, null), null)
      }else {
        if("\ufdd0'else") {
          return new cljs.core.BlackNode(key, val, left, ins, null)
        }else {
          return null
        }
      }
    }
  }else {
    return new cljs.core.BlackNode(key, val, left, ins, null)
  }
};
cljs.core.balance_left_del = function balance_left_del(key, val, del, right) {
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, del)) {
    return new cljs.core.RedNode(key, val, del.blacken(), right, null)
  }else {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, right)) {
      return cljs.core.balance_right.call(null, key, val, del, right.redden())
    }else {
      if(function() {
        var and__3822__auto____6166 = cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, right);
        if(and__3822__auto____6166) {
          return cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, right.left)
        }else {
          return and__3822__auto____6166
        }
      }()) {
        return new cljs.core.RedNode(right.left.key, right.left.val, new cljs.core.BlackNode(key, val, del, right.left.left, null), cljs.core.balance_right.call(null, right.key, right.val, right.left.right, right.right.redden()), null)
      }else {
        if("\ufdd0'else") {
          throw new Error("red-black tree invariant violation");
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.balance_right_del = function balance_right_del(key, val, left, del) {
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, del)) {
    return new cljs.core.RedNode(key, val, left, del.blacken(), null)
  }else {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, left)) {
      return cljs.core.balance_left.call(null, key, val, left.redden(), del)
    }else {
      if(function() {
        var and__3822__auto____6167 = cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, left);
        if(and__3822__auto____6167) {
          return cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, left.right)
        }else {
          return and__3822__auto____6167
        }
      }()) {
        return new cljs.core.RedNode(left.right.key, left.right.val, cljs.core.balance_left.call(null, left.key, left.val, left.left.redden(), left.right.left), new cljs.core.BlackNode(key, val, left.right.right, del, null), null)
      }else {
        if("\ufdd0'else") {
          throw new Error("red-black tree invariant violation");
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.tree_map_kv_reduce = function tree_map_kv_reduce(node, f, init) {
  var init__6168 = f.call(null, init, node.key, node.val);
  if(cljs.core.reduced_QMARK_.call(null, init__6168)) {
    return cljs.core.deref.call(null, init__6168)
  }else {
    var init__6169 = node.left != null ? tree_map_kv_reduce.call(null, node.left, f, init__6168) : init__6168;
    if(cljs.core.reduced_QMARK_.call(null, init__6169)) {
      return cljs.core.deref.call(null, init__6169)
    }else {
      var init__6170 = node.right != null ? tree_map_kv_reduce.call(null, node.right, f, init__6169) : init__6169;
      if(cljs.core.reduced_QMARK_.call(null, init__6170)) {
        return cljs.core.deref.call(null, init__6170)
      }else {
        return init__6170
      }
    }
  }
};
cljs.core.BlackNode = function(key, val, left, right, __hash) {
  this.key = key;
  this.val = val;
  this.left = left;
  this.right = right;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 16201119
};
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.BlackNode")
};
cljs.core.BlackNode.prototype.cljs$core$IHash$ = true;
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__6175 = this;
  var h__364__auto____6176 = this__6175.__hash;
  if(h__364__auto____6176 != null) {
    return h__364__auto____6176
  }else {
    var h__364__auto____6177 = cljs.core.hash_coll.call(null, coll);
    this__6175.__hash = h__364__auto____6177;
    return h__364__auto____6177
  }
};
cljs.core.BlackNode.prototype.cljs$core$ILookup$ = true;
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = function(node, k) {
  var this__6178 = this;
  return cljs.core._nth.call(null, node, k, null)
};
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = function(node, k, not_found) {
  var this__6179 = this;
  return cljs.core._nth.call(null, node, k, not_found)
};
cljs.core.BlackNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(node, k, v) {
  var this__6180 = this;
  return cljs.core.assoc.call(null, cljs.core.PersistentVector.fromArray([this__6180.key, this__6180.val]), k, v)
};
cljs.core.BlackNode.prototype.cljs$core$IFn$ = true;
cljs.core.BlackNode.prototype.call = function() {
  var G__6227 = null;
  var G__6227__2 = function(tsym6173, k) {
    var this__6181 = this;
    var tsym6173__6182 = this;
    var node__6183 = tsym6173__6182;
    return cljs.core._lookup.call(null, node__6183, k)
  };
  var G__6227__3 = function(tsym6174, k, not_found) {
    var this__6184 = this;
    var tsym6174__6185 = this;
    var node__6186 = tsym6174__6185;
    return cljs.core._lookup.call(null, node__6186, k, not_found)
  };
  G__6227 = function(tsym6174, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__6227__2.call(this, tsym6174, k);
      case 3:
        return G__6227__3.call(this, tsym6174, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6227
}();
cljs.core.BlackNode.prototype.apply = function(tsym6171, args6172) {
  return tsym6171.call.apply(tsym6171, [tsym6171].concat(cljs.core.aclone.call(null, args6172)))
};
cljs.core.BlackNode.prototype.cljs$core$ISequential$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = function(node, o) {
  var this__6187 = this;
  return cljs.core.PersistentVector.fromArray([this__6187.key, this__6187.val, o])
};
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = function(node) {
  var this__6188 = this;
  return this__6188.key
};
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = function(node) {
  var this__6189 = this;
  return this__6189.val
};
cljs.core.BlackNode.prototype.add_right = function(ins) {
  var this__6190 = this;
  var node__6191 = this;
  return ins.balance_right(node__6191)
};
cljs.core.BlackNode.prototype.redden = function() {
  var this__6192 = this;
  var node__6193 = this;
  return new cljs.core.RedNode(this__6192.key, this__6192.val, this__6192.left, this__6192.right, null)
};
cljs.core.BlackNode.prototype.remove_right = function(del) {
  var this__6194 = this;
  var node__6195 = this;
  return cljs.core.balance_right_del.call(null, this__6194.key, this__6194.val, this__6194.left, del)
};
cljs.core.BlackNode.prototype.replace = function(key, val, left, right) {
  var this__6196 = this;
  var node__6197 = this;
  return new cljs.core.BlackNode(key, val, left, right, null)
};
cljs.core.BlackNode.prototype.kv_reduce = function(f, init) {
  var this__6198 = this;
  var node__6199 = this;
  return cljs.core.tree_map_kv_reduce.call(null, node__6199, f, init)
};
cljs.core.BlackNode.prototype.remove_left = function(del) {
  var this__6200 = this;
  var node__6201 = this;
  return cljs.core.balance_left_del.call(null, this__6200.key, this__6200.val, del, this__6200.right)
};
cljs.core.BlackNode.prototype.add_left = function(ins) {
  var this__6202 = this;
  var node__6203 = this;
  return ins.balance_left(node__6203)
};
cljs.core.BlackNode.prototype.balance_left = function(parent) {
  var this__6204 = this;
  var node__6205 = this;
  return new cljs.core.BlackNode(parent.key, parent.val, node__6205, parent.right, null)
};
cljs.core.BlackNode.prototype.toString = function() {
  var G__6228 = null;
  var G__6228__0 = function() {
    var this__6208 = this;
    var this$__6209 = this;
    return cljs.core.pr_str.call(null, this$__6209)
  };
  G__6228 = function() {
    switch(arguments.length) {
      case 0:
        return G__6228__0.call(this)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6228
}();
cljs.core.BlackNode.prototype.balance_right = function(parent) {
  var this__6210 = this;
  var node__6211 = this;
  return new cljs.core.BlackNode(parent.key, parent.val, parent.left, node__6211, null)
};
cljs.core.BlackNode.prototype.blacken = function() {
  var this__6212 = this;
  var node__6213 = this;
  return node__6213
};
cljs.core.BlackNode.prototype.cljs$core$IReduce$ = true;
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = function(node, f) {
  var this__6214 = this;
  return cljs.core.ci_reduce.call(null, node, f)
};
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = function(node, f, start) {
  var this__6215 = this;
  return cljs.core.ci_reduce.call(null, node, f, start)
};
cljs.core.BlackNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = function(node) {
  var this__6216 = this;
  return cljs.core.list.call(null, this__6216.key, this__6216.val)
};
cljs.core.BlackNode.prototype.cljs$core$ICounted$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = function(node) {
  var this__6218 = this;
  return 2
};
cljs.core.BlackNode.prototype.cljs$core$IStack$ = true;
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = function(node) {
  var this__6219 = this;
  return this__6219.val
};
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = function(node) {
  var this__6220 = this;
  return cljs.core.PersistentVector.fromArray([this__6220.key])
};
cljs.core.BlackNode.prototype.cljs$core$IVector$ = true;
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(node, n, v) {
  var this__6221 = this;
  return cljs.core._assoc_n.call(null, cljs.core.PersistentVector.fromArray([this__6221.key, this__6221.val]), n, v)
};
cljs.core.BlackNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__6222 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(node, meta) {
  var this__6223 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.fromArray([this__6223.key, this__6223.val]), meta)
};
cljs.core.BlackNode.prototype.cljs$core$IMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = function(node) {
  var this__6224 = this;
  return null
};
cljs.core.BlackNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = function(node, n) {
  var this__6225 = this;
  if(n === 0) {
    return this__6225.key
  }else {
    if(n === 1) {
      return this__6225.val
    }else {
      if("\ufdd0'else") {
        return null
      }else {
        return null
      }
    }
  }
};
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = function(node, n, not_found) {
  var this__6226 = this;
  if(n === 0) {
    return this__6226.key
  }else {
    if(n === 1) {
      return this__6226.val
    }else {
      if("\ufdd0'else") {
        return not_found
      }else {
        return null
      }
    }
  }
};
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(node) {
  var this__6217 = this;
  return cljs.core.PersistentVector.fromArray([])
};
cljs.core.BlackNode;
cljs.core.RedNode = function(key, val, left, right, __hash) {
  this.key = key;
  this.val = val;
  this.left = left;
  this.right = right;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 16201119
};
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.RedNode")
};
cljs.core.RedNode.prototype.cljs$core$IHash$ = true;
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__6233 = this;
  var h__364__auto____6234 = this__6233.__hash;
  if(h__364__auto____6234 != null) {
    return h__364__auto____6234
  }else {
    var h__364__auto____6235 = cljs.core.hash_coll.call(null, coll);
    this__6233.__hash = h__364__auto____6235;
    return h__364__auto____6235
  }
};
cljs.core.RedNode.prototype.cljs$core$ILookup$ = true;
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = function(node, k) {
  var this__6236 = this;
  return cljs.core._nth.call(null, node, k, null)
};
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = function(node, k, not_found) {
  var this__6237 = this;
  return cljs.core._nth.call(null, node, k, not_found)
};
cljs.core.RedNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(node, k, v) {
  var this__6238 = this;
  return cljs.core.assoc.call(null, cljs.core.PersistentVector.fromArray([this__6238.key, this__6238.val]), k, v)
};
cljs.core.RedNode.prototype.cljs$core$IFn$ = true;
cljs.core.RedNode.prototype.call = function() {
  var G__6285 = null;
  var G__6285__2 = function(tsym6231, k) {
    var this__6239 = this;
    var tsym6231__6240 = this;
    var node__6241 = tsym6231__6240;
    return cljs.core._lookup.call(null, node__6241, k)
  };
  var G__6285__3 = function(tsym6232, k, not_found) {
    var this__6242 = this;
    var tsym6232__6243 = this;
    var node__6244 = tsym6232__6243;
    return cljs.core._lookup.call(null, node__6244, k, not_found)
  };
  G__6285 = function(tsym6232, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__6285__2.call(this, tsym6232, k);
      case 3:
        return G__6285__3.call(this, tsym6232, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6285
}();
cljs.core.RedNode.prototype.apply = function(tsym6229, args6230) {
  return tsym6229.call.apply(tsym6229, [tsym6229].concat(cljs.core.aclone.call(null, args6230)))
};
cljs.core.RedNode.prototype.cljs$core$ISequential$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = function(node, o) {
  var this__6245 = this;
  return cljs.core.PersistentVector.fromArray([this__6245.key, this__6245.val, o])
};
cljs.core.RedNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = function(node) {
  var this__6246 = this;
  return this__6246.key
};
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = function(node) {
  var this__6247 = this;
  return this__6247.val
};
cljs.core.RedNode.prototype.add_right = function(ins) {
  var this__6248 = this;
  var node__6249 = this;
  return new cljs.core.RedNode(this__6248.key, this__6248.val, this__6248.left, ins, null)
};
cljs.core.RedNode.prototype.redden = function() {
  var this__6250 = this;
  var node__6251 = this;
  throw new Error("red-black tree invariant violation");
};
cljs.core.RedNode.prototype.remove_right = function(del) {
  var this__6252 = this;
  var node__6253 = this;
  return new cljs.core.RedNode(this__6252.key, this__6252.val, this__6252.left, del, null)
};
cljs.core.RedNode.prototype.replace = function(key, val, left, right) {
  var this__6254 = this;
  var node__6255 = this;
  return new cljs.core.RedNode(key, val, left, right, null)
};
cljs.core.RedNode.prototype.kv_reduce = function(f, init) {
  var this__6256 = this;
  var node__6257 = this;
  return cljs.core.tree_map_kv_reduce.call(null, node__6257, f, init)
};
cljs.core.RedNode.prototype.remove_left = function(del) {
  var this__6258 = this;
  var node__6259 = this;
  return new cljs.core.RedNode(this__6258.key, this__6258.val, del, this__6258.right, null)
};
cljs.core.RedNode.prototype.add_left = function(ins) {
  var this__6260 = this;
  var node__6261 = this;
  return new cljs.core.RedNode(this__6260.key, this__6260.val, ins, this__6260.right, null)
};
cljs.core.RedNode.prototype.balance_left = function(parent) {
  var this__6262 = this;
  var node__6263 = this;
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this__6262.left)) {
    return new cljs.core.RedNode(this__6262.key, this__6262.val, this__6262.left.blacken(), new cljs.core.BlackNode(parent.key, parent.val, this__6262.right, parent.right, null), null)
  }else {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this__6262.right)) {
      return new cljs.core.RedNode(this__6262.right.key, this__6262.right.val, new cljs.core.BlackNode(this__6262.key, this__6262.val, this__6262.left, this__6262.right.left, null), new cljs.core.BlackNode(parent.key, parent.val, this__6262.right.right, parent.right, null), null)
    }else {
      if("\ufdd0'else") {
        return new cljs.core.BlackNode(parent.key, parent.val, node__6263, parent.right, null)
      }else {
        return null
      }
    }
  }
};
cljs.core.RedNode.prototype.toString = function() {
  var G__6286 = null;
  var G__6286__0 = function() {
    var this__6266 = this;
    var this$__6267 = this;
    return cljs.core.pr_str.call(null, this$__6267)
  };
  G__6286 = function() {
    switch(arguments.length) {
      case 0:
        return G__6286__0.call(this)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6286
}();
cljs.core.RedNode.prototype.balance_right = function(parent) {
  var this__6268 = this;
  var node__6269 = this;
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this__6268.right)) {
    return new cljs.core.RedNode(this__6268.key, this__6268.val, new cljs.core.BlackNode(parent.key, parent.val, parent.left, this__6268.left, null), this__6268.right.blacken(), null)
  }else {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this__6268.left)) {
      return new cljs.core.RedNode(this__6268.left.key, this__6268.left.val, new cljs.core.BlackNode(parent.key, parent.val, parent.left, this__6268.left.left, null), new cljs.core.BlackNode(this__6268.key, this__6268.val, this__6268.left.right, this__6268.right, null), null)
    }else {
      if("\ufdd0'else") {
        return new cljs.core.BlackNode(parent.key, parent.val, parent.left, node__6269, null)
      }else {
        return null
      }
    }
  }
};
cljs.core.RedNode.prototype.blacken = function() {
  var this__6270 = this;
  var node__6271 = this;
  return new cljs.core.BlackNode(this__6270.key, this__6270.val, this__6270.left, this__6270.right, null)
};
cljs.core.RedNode.prototype.cljs$core$IReduce$ = true;
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = function(node, f) {
  var this__6272 = this;
  return cljs.core.ci_reduce.call(null, node, f)
};
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = function(node, f, start) {
  var this__6273 = this;
  return cljs.core.ci_reduce.call(null, node, f, start)
};
cljs.core.RedNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = function(node) {
  var this__6274 = this;
  return cljs.core.list.call(null, this__6274.key, this__6274.val)
};
cljs.core.RedNode.prototype.cljs$core$ICounted$ = true;
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = function(node) {
  var this__6276 = this;
  return 2
};
cljs.core.RedNode.prototype.cljs$core$IStack$ = true;
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = function(node) {
  var this__6277 = this;
  return this__6277.val
};
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = function(node) {
  var this__6278 = this;
  return cljs.core.PersistentVector.fromArray([this__6278.key])
};
cljs.core.RedNode.prototype.cljs$core$IVector$ = true;
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(node, n, v) {
  var this__6279 = this;
  return cljs.core._assoc_n.call(null, cljs.core.PersistentVector.fromArray([this__6279.key, this__6279.val]), n, v)
};
cljs.core.RedNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__6280 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.RedNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(node, meta) {
  var this__6281 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.fromArray([this__6281.key, this__6281.val]), meta)
};
cljs.core.RedNode.prototype.cljs$core$IMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = function(node) {
  var this__6282 = this;
  return null
};
cljs.core.RedNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = function(node, n) {
  var this__6283 = this;
  if(n === 0) {
    return this__6283.key
  }else {
    if(n === 1) {
      return this__6283.val
    }else {
      if("\ufdd0'else") {
        return null
      }else {
        return null
      }
    }
  }
};
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = function(node, n, not_found) {
  var this__6284 = this;
  if(n === 0) {
    return this__6284.key
  }else {
    if(n === 1) {
      return this__6284.val
    }else {
      if("\ufdd0'else") {
        return not_found
      }else {
        return null
      }
    }
  }
};
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(node) {
  var this__6275 = this;
  return cljs.core.PersistentVector.fromArray([])
};
cljs.core.RedNode;
cljs.core.tree_map_add = function tree_map_add(comp, tree, k, v, found) {
  if(tree == null) {
    return new cljs.core.RedNode(k, v, null, null, null)
  }else {
    var c__6287 = comp.call(null, k, tree.key);
    if(c__6287 === 0) {
      found[0] = tree;
      return null
    }else {
      if(c__6287 < 0) {
        var ins__6288 = tree_map_add.call(null, comp, tree.left, k, v, found);
        if(ins__6288 != null) {
          return tree.add_left(ins__6288)
        }else {
          return null
        }
      }else {
        if("\ufdd0'else") {
          var ins__6289 = tree_map_add.call(null, comp, tree.right, k, v, found);
          if(ins__6289 != null) {
            return tree.add_right(ins__6289)
          }else {
            return null
          }
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.tree_map_append = function tree_map_append(left, right) {
  if(left == null) {
    return right
  }else {
    if(right == null) {
      return left
    }else {
      if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, left)) {
        if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, right)) {
          var app__6290 = tree_map_append.call(null, left.right, right.left);
          if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, app__6290)) {
            return new cljs.core.RedNode(app__6290.key, app__6290.val, new cljs.core.RedNode(left.key, left.val, left.left, app__6290.left), new cljs.core.RedNode(right.key, right.val, app__6290.right, right.right), null)
          }else {
            return new cljs.core.RedNode(left.key, left.val, left.left, new cljs.core.RedNode(right.key, right.val, app__6290, right.right, null), null)
          }
        }else {
          return new cljs.core.RedNode(left.key, left.val, left.left, tree_map_append.call(null, left.right, right), null)
        }
      }else {
        if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, right)) {
          return new cljs.core.RedNode(right.key, right.val, tree_map_append.call(null, left, right.left), right.right, null)
        }else {
          if("\ufdd0'else") {
            var app__6291 = tree_map_append.call(null, left.right, right.left);
            if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, app__6291)) {
              return new cljs.core.RedNode(app__6291.key, app__6291.val, new cljs.core.BlackNode(left.key, left.val, left.left, app__6291.left, null), new cljs.core.BlackNode(right.key, right.val, app__6291.right, right.right, null), null)
            }else {
              return cljs.core.balance_left_del.call(null, left.key, left.val, left.left, new cljs.core.BlackNode(right.key, right.val, app__6291, right.right, null))
            }
          }else {
            return null
          }
        }
      }
    }
  }
};
cljs.core.tree_map_remove = function tree_map_remove(comp, tree, k, found) {
  if(tree != null) {
    var c__6292 = comp.call(null, k, tree.key);
    if(c__6292 === 0) {
      found[0] = tree;
      return cljs.core.tree_map_append.call(null, tree.left, tree.right)
    }else {
      if(c__6292 < 0) {
        var del__6293 = tree_map_remove.call(null, comp, tree.left, k, found);
        if(function() {
          var or__3824__auto____6294 = del__6293 != null;
          if(or__3824__auto____6294) {
            return or__3824__auto____6294
          }else {
            return found[0] != null
          }
        }()) {
          if(cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, tree.left)) {
            return cljs.core.balance_left_del.call(null, tree.key, tree.val, del__6293, tree.right)
          }else {
            return new cljs.core.RedNode(tree.key, tree.val, del__6293, tree.right, null)
          }
        }else {
          return null
        }
      }else {
        if("\ufdd0'else") {
          var del__6295 = tree_map_remove.call(null, comp, tree.right, k, found);
          if(function() {
            var or__3824__auto____6296 = del__6295 != null;
            if(or__3824__auto____6296) {
              return or__3824__auto____6296
            }else {
              return found[0] != null
            }
          }()) {
            if(cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, tree.right)) {
              return cljs.core.balance_right_del.call(null, tree.key, tree.val, tree.left, del__6295)
            }else {
              return new cljs.core.RedNode(tree.key, tree.val, tree.left, del__6295, null)
            }
          }else {
            return null
          }
        }else {
          return null
        }
      }
    }
  }else {
    return null
  }
};
cljs.core.tree_map_replace = function tree_map_replace(comp, tree, k, v) {
  var tk__6297 = tree.key;
  var c__6298 = comp.call(null, k, tk__6297);
  if(c__6298 === 0) {
    return tree.replace(tk__6297, v, tree.left, tree.right)
  }else {
    if(c__6298 < 0) {
      return tree.replace(tk__6297, tree.val, tree_map_replace.call(null, comp, tree.left, k, v), tree.right)
    }else {
      if("\ufdd0'else") {
        return tree.replace(tk__6297, tree.val, tree.left, tree_map_replace.call(null, comp, tree.right, k, v))
      }else {
        return null
      }
    }
  }
};
void 0;
cljs.core.PersistentTreeMap = function(comp, tree, cnt, meta, __hash) {
  this.comp = comp;
  this.tree = tree;
  this.cnt = cnt;
  this.meta = meta;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 209388431
};
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentTreeMap")
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__6303 = this;
  var h__364__auto____6304 = this__6303.__hash;
  if(h__364__auto____6304 != null) {
    return h__364__auto____6304
  }else {
    var h__364__auto____6305 = cljs.core.hash_imap.call(null, coll);
    this__6303.__hash = h__364__auto____6305;
    return h__364__auto____6305
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__6306 = this;
  return cljs.core._lookup.call(null, coll, k, null)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__6307 = this;
  var n__6308 = coll.entry_at(k);
  if(n__6308 != null) {
    return n__6308.val
  }else {
    return not_found
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__6309 = this;
  var found__6310 = [null];
  var t__6311 = cljs.core.tree_map_add.call(null, this__6309.comp, this__6309.tree, k, v, found__6310);
  if(t__6311 == null) {
    var found_node__6312 = cljs.core.nth.call(null, found__6310, 0);
    if(cljs.core._EQ_.call(null, v, found_node__6312.val)) {
      return coll
    }else {
      return new cljs.core.PersistentTreeMap(this__6309.comp, cljs.core.tree_map_replace.call(null, this__6309.comp, this__6309.tree, k, v), this__6309.cnt, this__6309.meta, null)
    }
  }else {
    return new cljs.core.PersistentTreeMap(this__6309.comp, t__6311.blacken(), this__6309.cnt + 1, this__6309.meta, null)
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(coll, k) {
  var this__6313 = this;
  return coll.entry_at(k) != null
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeMap.prototype.call = function() {
  var G__6345 = null;
  var G__6345__2 = function(tsym6301, k) {
    var this__6314 = this;
    var tsym6301__6315 = this;
    var coll__6316 = tsym6301__6315;
    return cljs.core._lookup.call(null, coll__6316, k)
  };
  var G__6345__3 = function(tsym6302, k, not_found) {
    var this__6317 = this;
    var tsym6302__6318 = this;
    var coll__6319 = tsym6302__6318;
    return cljs.core._lookup.call(null, coll__6319, k, not_found)
  };
  G__6345 = function(tsym6302, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__6345__2.call(this, tsym6302, k);
      case 3:
        return G__6345__3.call(this, tsym6302, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6345
}();
cljs.core.PersistentTreeMap.prototype.apply = function(tsym6299, args6300) {
  return tsym6299.call.apply(tsym6299, [tsym6299].concat(cljs.core.aclone.call(null, args6300)))
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(coll, f, init) {
  var this__6320 = this;
  if(this__6320.tree != null) {
    return cljs.core.tree_map_kv_reduce.call(null, this__6320.tree, f, init)
  }else {
    return init
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, entry) {
  var this__6321 = this;
  if(cljs.core.vector_QMARK_.call(null, entry)) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = function(coll) {
  var this__6322 = this;
  if(this__6322.cnt > 0) {
    return cljs.core.create_tree_map_seq.call(null, this__6322.tree, false, this__6322.cnt)
  }else {
    return null
  }
};
cljs.core.PersistentTreeMap.prototype.toString = function() {
  var this__6323 = this;
  var this$__6324 = this;
  return cljs.core.pr_str.call(null, this$__6324)
};
cljs.core.PersistentTreeMap.prototype.entry_at = function(k) {
  var this__6325 = this;
  var coll__6326 = this;
  var t__6327 = this__6325.tree;
  while(true) {
    if(t__6327 != null) {
      var c__6328 = this__6325.comp.call(null, k, t__6327.key);
      if(c__6328 === 0) {
        return t__6327
      }else {
        if(c__6328 < 0) {
          var G__6346 = t__6327.left;
          t__6327 = G__6346;
          continue
        }else {
          if("\ufdd0'else") {
            var G__6347 = t__6327.right;
            t__6327 = G__6347;
            continue
          }else {
            return null
          }
        }
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = function(coll, ascending_QMARK_) {
  var this__6329 = this;
  if(this__6329.cnt > 0) {
    return cljs.core.create_tree_map_seq.call(null, this__6329.tree, ascending_QMARK_, this__6329.cnt)
  }else {
    return null
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = function(coll, k, ascending_QMARK_) {
  var this__6330 = this;
  if(this__6330.cnt > 0) {
    var stack__6331 = null;
    var t__6332 = this__6330.tree;
    while(true) {
      if(t__6332 != null) {
        var c__6333 = this__6330.comp.call(null, k, t__6332.key);
        if(c__6333 === 0) {
          return new cljs.core.PersistentTreeMapSeq(null, cljs.core.conj.call(null, stack__6331, t__6332), ascending_QMARK_, -1)
        }else {
          if(cljs.core.truth_(ascending_QMARK_)) {
            if(c__6333 < 0) {
              var G__6348 = cljs.core.conj.call(null, stack__6331, t__6332);
              var G__6349 = t__6332.left;
              stack__6331 = G__6348;
              t__6332 = G__6349;
              continue
            }else {
              var G__6350 = stack__6331;
              var G__6351 = t__6332.right;
              stack__6331 = G__6350;
              t__6332 = G__6351;
              continue
            }
          }else {
            if("\ufdd0'else") {
              if(c__6333 > 0) {
                var G__6352 = cljs.core.conj.call(null, stack__6331, t__6332);
                var G__6353 = t__6332.right;
                stack__6331 = G__6352;
                t__6332 = G__6353;
                continue
              }else {
                var G__6354 = stack__6331;
                var G__6355 = t__6332.left;
                stack__6331 = G__6354;
                t__6332 = G__6355;
                continue
              }
            }else {
              return null
            }
          }
        }
      }else {
        if(stack__6331 == null) {
          return new cljs.core.PersistentTreeMapSeq(null, stack__6331, ascending_QMARK_, -1)
        }else {
          return null
        }
      }
      break
    }
  }else {
    return null
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = function(coll, entry) {
  var this__6334 = this;
  return cljs.core.key.call(null, entry)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = function(coll) {
  var this__6335 = this;
  return this__6335.comp
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__6336 = this;
  if(this__6336.cnt > 0) {
    return cljs.core.create_tree_map_seq.call(null, this__6336.tree, true, this__6336.cnt)
  }else {
    return null
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__6337 = this;
  return this__6337.cnt
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__6338 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__6339 = this;
  return new cljs.core.PersistentTreeMap(this__6339.comp, this__6339.tree, this__6339.cnt, meta, this__6339.__hash)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__6343 = this;
  return this__6343.meta
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__6344 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentTreeMap.EMPTY, this__6344.meta)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(coll, k) {
  var this__6340 = this;
  var found__6341 = [null];
  var t__6342 = cljs.core.tree_map_remove.call(null, this__6340.comp, this__6340.tree, k, found__6341);
  if(t__6342 == null) {
    if(cljs.core.nth.call(null, found__6341, 0) == null) {
      return coll
    }else {
      return new cljs.core.PersistentTreeMap(this__6340.comp, null, 0, this__6340.meta, null)
    }
  }else {
    return new cljs.core.PersistentTreeMap(this__6340.comp, t__6342.blacken(), this__6340.cnt - 1, this__6340.meta, null)
  }
};
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = new cljs.core.PersistentTreeMap(cljs.core.compare, null, 0, null, 0);
cljs.core.hash_map = function() {
  var hash_map__delegate = function(keyvals) {
    var in$__6356 = cljs.core.seq.call(null, keyvals);
    var out__6357 = cljs.core.transient$.call(null, cljs.core.PersistentHashMap.EMPTY);
    while(true) {
      if(cljs.core.truth_(in$__6356)) {
        var G__6358 = cljs.core.nnext.call(null, in$__6356);
        var G__6359 = cljs.core.assoc_BANG_.call(null, out__6357, cljs.core.first.call(null, in$__6356), cljs.core.second.call(null, in$__6356));
        in$__6356 = G__6358;
        out__6357 = G__6359;
        continue
      }else {
        return cljs.core.persistent_BANG_.call(null, out__6357)
      }
      break
    }
  };
  var hash_map = function(var_args) {
    var keyvals = null;
    if(goog.isDef(var_args)) {
      keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return hash_map__delegate.call(this, keyvals)
  };
  hash_map.cljs$lang$maxFixedArity = 0;
  hash_map.cljs$lang$applyTo = function(arglist__6360) {
    var keyvals = cljs.core.seq(arglist__6360);
    return hash_map__delegate(keyvals)
  };
  hash_map.cljs$lang$arity$variadic = hash_map__delegate;
  return hash_map
}();
cljs.core.array_map = function() {
  var array_map__delegate = function(keyvals) {
    return new cljs.core.PersistentArrayMap(null, cljs.core.quot.call(null, cljs.core.count.call(null, keyvals), 2), cljs.core.apply.call(null, cljs.core.array, keyvals), null)
  };
  var array_map = function(var_args) {
    var keyvals = null;
    if(goog.isDef(var_args)) {
      keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return array_map__delegate.call(this, keyvals)
  };
  array_map.cljs$lang$maxFixedArity = 0;
  array_map.cljs$lang$applyTo = function(arglist__6361) {
    var keyvals = cljs.core.seq(arglist__6361);
    return array_map__delegate(keyvals)
  };
  array_map.cljs$lang$arity$variadic = array_map__delegate;
  return array_map
}();
cljs.core.sorted_map = function() {
  var sorted_map__delegate = function(keyvals) {
    var in$__6362 = cljs.core.seq.call(null, keyvals);
    var out__6363 = cljs.core.PersistentTreeMap.EMPTY;
    while(true) {
      if(cljs.core.truth_(in$__6362)) {
        var G__6364 = cljs.core.nnext.call(null, in$__6362);
        var G__6365 = cljs.core.assoc.call(null, out__6363, cljs.core.first.call(null, in$__6362), cljs.core.second.call(null, in$__6362));
        in$__6362 = G__6364;
        out__6363 = G__6365;
        continue
      }else {
        return out__6363
      }
      break
    }
  };
  var sorted_map = function(var_args) {
    var keyvals = null;
    if(goog.isDef(var_args)) {
      keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return sorted_map__delegate.call(this, keyvals)
  };
  sorted_map.cljs$lang$maxFixedArity = 0;
  sorted_map.cljs$lang$applyTo = function(arglist__6366) {
    var keyvals = cljs.core.seq(arglist__6366);
    return sorted_map__delegate(keyvals)
  };
  sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
  return sorted_map
}();
cljs.core.sorted_map_by = function() {
  var sorted_map_by__delegate = function(comparator, keyvals) {
    var in$__6367 = cljs.core.seq.call(null, keyvals);
    var out__6368 = new cljs.core.PersistentTreeMap(comparator, null, 0, null, 0);
    while(true) {
      if(cljs.core.truth_(in$__6367)) {
        var G__6369 = cljs.core.nnext.call(null, in$__6367);
        var G__6370 = cljs.core.assoc.call(null, out__6368, cljs.core.first.call(null, in$__6367), cljs.core.second.call(null, in$__6367));
        in$__6367 = G__6369;
        out__6368 = G__6370;
        continue
      }else {
        return out__6368
      }
      break
    }
  };
  var sorted_map_by = function(comparator, var_args) {
    var keyvals = null;
    if(goog.isDef(var_args)) {
      keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return sorted_map_by__delegate.call(this, comparator, keyvals)
  };
  sorted_map_by.cljs$lang$maxFixedArity = 1;
  sorted_map_by.cljs$lang$applyTo = function(arglist__6371) {
    var comparator = cljs.core.first(arglist__6371);
    var keyvals = cljs.core.rest(arglist__6371);
    return sorted_map_by__delegate(comparator, keyvals)
  };
  sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
  return sorted_map_by
}();
cljs.core.keys = function keys(hash_map) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.first, hash_map))
};
cljs.core.key = function key(map_entry) {
  return cljs.core._key.call(null, map_entry)
};
cljs.core.vals = function vals(hash_map) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.second, hash_map))
};
cljs.core.val = function val(map_entry) {
  return cljs.core._val.call(null, map_entry)
};
cljs.core.merge = function() {
  var merge__delegate = function(maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      return cljs.core.reduce.call(null, function(p1__6372_SHARP_, p2__6373_SHARP_) {
        return cljs.core.conj.call(null, function() {
          var or__3824__auto____6374 = p1__6372_SHARP_;
          if(cljs.core.truth_(or__3824__auto____6374)) {
            return or__3824__auto____6374
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), p2__6373_SHARP_)
      }, maps)
    }else {
      return null
    }
  };
  var merge = function(var_args) {
    var maps = null;
    if(goog.isDef(var_args)) {
      maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return merge__delegate.call(this, maps)
  };
  merge.cljs$lang$maxFixedArity = 0;
  merge.cljs$lang$applyTo = function(arglist__6375) {
    var maps = cljs.core.seq(arglist__6375);
    return merge__delegate(maps)
  };
  merge.cljs$lang$arity$variadic = merge__delegate;
  return merge
}();
cljs.core.merge_with = function() {
  var merge_with__delegate = function(f, maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      var merge_entry__6378 = function(m, e) {
        var k__6376 = cljs.core.first.call(null, e);
        var v__6377 = cljs.core.second.call(null, e);
        if(cljs.core.contains_QMARK_.call(null, m, k__6376)) {
          return cljs.core.assoc.call(null, m, k__6376, f.call(null, cljs.core.get.call(null, m, k__6376), v__6377))
        }else {
          return cljs.core.assoc.call(null, m, k__6376, v__6377)
        }
      };
      var merge2__6380 = function(m1, m2) {
        return cljs.core.reduce.call(null, merge_entry__6378, function() {
          var or__3824__auto____6379 = m1;
          if(cljs.core.truth_(or__3824__auto____6379)) {
            return or__3824__auto____6379
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), cljs.core.seq.call(null, m2))
      };
      return cljs.core.reduce.call(null, merge2__6380, maps)
    }else {
      return null
    }
  };
  var merge_with = function(f, var_args) {
    var maps = null;
    if(goog.isDef(var_args)) {
      maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return merge_with__delegate.call(this, f, maps)
  };
  merge_with.cljs$lang$maxFixedArity = 1;
  merge_with.cljs$lang$applyTo = function(arglist__6381) {
    var f = cljs.core.first(arglist__6381);
    var maps = cljs.core.rest(arglist__6381);
    return merge_with__delegate(f, maps)
  };
  merge_with.cljs$lang$arity$variadic = merge_with__delegate;
  return merge_with
}();
cljs.core.select_keys = function select_keys(map, keyseq) {
  var ret__6382 = cljs.core.ObjMap.fromObject([], {});
  var keys__6383 = cljs.core.seq.call(null, keyseq);
  while(true) {
    if(cljs.core.truth_(keys__6383)) {
      var key__6384 = cljs.core.first.call(null, keys__6383);
      var entry__6385 = cljs.core.get.call(null, map, key__6384, "\ufdd0'user/not-found");
      var G__6386 = cljs.core.not_EQ_.call(null, entry__6385, "\ufdd0'user/not-found") ? cljs.core.assoc.call(null, ret__6382, key__6384, entry__6385) : ret__6382;
      var G__6387 = cljs.core.next.call(null, keys__6383);
      ret__6382 = G__6386;
      keys__6383 = G__6387;
      continue
    }else {
      return ret__6382
    }
    break
  }
};
void 0;
cljs.core.PersistentHashSet = function(meta, hash_map, __hash) {
  this.meta = meta;
  this.hash_map = hash_map;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 2155022479
};
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentHashSet")
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(coll) {
  var this__6393 = this;
  return new cljs.core.TransientHashSet(cljs.core.transient$.call(null, this__6393.hash_map))
};
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__6394 = this;
  var h__364__auto____6395 = this__6394.__hash;
  if(h__364__auto____6395 != null) {
    return h__364__auto____6395
  }else {
    var h__364__auto____6396 = cljs.core.hash_iset.call(null, coll);
    this__6394.__hash = h__364__auto____6396;
    return h__364__auto____6396
  }
};
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, v) {
  var this__6397 = this;
  return cljs.core._lookup.call(null, coll, v, null)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, v, not_found) {
  var this__6398 = this;
  if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this__6398.hash_map, v))) {
    return v
  }else {
    return not_found
  }
};
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashSet.prototype.call = function() {
  var G__6417 = null;
  var G__6417__2 = function(tsym6391, k) {
    var this__6399 = this;
    var tsym6391__6400 = this;
    var coll__6401 = tsym6391__6400;
    return cljs.core._lookup.call(null, coll__6401, k)
  };
  var G__6417__3 = function(tsym6392, k, not_found) {
    var this__6402 = this;
    var tsym6392__6403 = this;
    var coll__6404 = tsym6392__6403;
    return cljs.core._lookup.call(null, coll__6404, k, not_found)
  };
  G__6417 = function(tsym6392, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__6417__2.call(this, tsym6392, k);
      case 3:
        return G__6417__3.call(this, tsym6392, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6417
}();
cljs.core.PersistentHashSet.prototype.apply = function(tsym6389, args6390) {
  return tsym6389.call.apply(tsym6389, [tsym6389].concat(cljs.core.aclone.call(null, args6390)))
};
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__6405 = this;
  return new cljs.core.PersistentHashSet(this__6405.meta, cljs.core.assoc.call(null, this__6405.hash_map, o, null), null)
};
cljs.core.PersistentHashSet.prototype.toString = function() {
  var this__6406 = this;
  var this$__6407 = this;
  return cljs.core.pr_str.call(null, this$__6407)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__6408 = this;
  return cljs.core.keys.call(null, this__6408.hash_map)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = function(coll, v) {
  var this__6409 = this;
  return new cljs.core.PersistentHashSet(this__6409.meta, cljs.core.dissoc.call(null, this__6409.hash_map, v), null)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__6410 = this;
  return cljs.core.count.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__6411 = this;
  var and__3822__auto____6412 = cljs.core.set_QMARK_.call(null, other);
  if(and__3822__auto____6412) {
    var and__3822__auto____6413 = cljs.core.count.call(null, coll) === cljs.core.count.call(null, other);
    if(and__3822__auto____6413) {
      return cljs.core.every_QMARK_.call(null, function(p1__6388_SHARP_) {
        return cljs.core.contains_QMARK_.call(null, coll, p1__6388_SHARP_)
      }, other)
    }else {
      return and__3822__auto____6413
    }
  }else {
    return and__3822__auto____6412
  }
};
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__6414 = this;
  return new cljs.core.PersistentHashSet(meta, this__6414.hash_map, this__6414.__hash)
};
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__6415 = this;
  return this__6415.meta
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__6416 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentHashSet.EMPTY, this__6416.meta)
};
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = new cljs.core.PersistentHashSet(null, cljs.core.hash_map.call(null), 0);
cljs.core.TransientHashSet = function(transient_map) {
  this.transient_map = transient_map;
  this.cljs$lang$protocol_mask$partition0$ = 131;
  this.cljs$lang$protocol_mask$partition1$ = 17
};
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.TransientHashSet")
};
cljs.core.TransientHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.TransientHashSet.prototype.call = function() {
  var G__6435 = null;
  var G__6435__2 = function(tsym6421, k) {
    var this__6423 = this;
    var tsym6421__6424 = this;
    var tcoll__6425 = tsym6421__6424;
    if(cljs.core._lookup.call(null, this__6423.transient_map, k, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel) {
      return null
    }else {
      return k
    }
  };
  var G__6435__3 = function(tsym6422, k, not_found) {
    var this__6426 = this;
    var tsym6422__6427 = this;
    var tcoll__6428 = tsym6422__6427;
    if(cljs.core._lookup.call(null, this__6426.transient_map, k, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel) {
      return not_found
    }else {
      return k
    }
  };
  G__6435 = function(tsym6422, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__6435__2.call(this, tsym6422, k);
      case 3:
        return G__6435__3.call(this, tsym6422, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6435
}();
cljs.core.TransientHashSet.prototype.apply = function(tsym6419, args6420) {
  return tsym6419.call.apply(tsym6419, [tsym6419].concat(cljs.core.aclone.call(null, args6420)))
};
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(tcoll, v) {
  var this__6429 = this;
  return cljs.core._lookup.call(null, tcoll, v, null)
};
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(tcoll, v, not_found) {
  var this__6430 = this;
  if(cljs.core._lookup.call(null, this__6430.transient_map, v, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel) {
    return not_found
  }else {
    return v
  }
};
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = function(tcoll) {
  var this__6431 = this;
  return cljs.core.count.call(null, this__6431.transient_map)
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = function(tcoll, v) {
  var this__6432 = this;
  this__6432.transient_map = cljs.core.dissoc_BANG_.call(null, this__6432.transient_map, v);
  return tcoll
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(tcoll, o) {
  var this__6433 = this;
  this__6433.transient_map = cljs.core.assoc_BANG_.call(null, this__6433.transient_map, o, null);
  return tcoll
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(tcoll) {
  var this__6434 = this;
  return new cljs.core.PersistentHashSet(null, cljs.core.persistent_BANG_.call(null, this__6434.transient_map), null)
};
cljs.core.TransientHashSet;
cljs.core.PersistentTreeSet = function(meta, tree_map, __hash) {
  this.meta = meta;
  this.tree_map = tree_map;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 208865423
};
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentTreeSet")
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__6440 = this;
  var h__364__auto____6441 = this__6440.__hash;
  if(h__364__auto____6441 != null) {
    return h__364__auto____6441
  }else {
    var h__364__auto____6442 = cljs.core.hash_iset.call(null, coll);
    this__6440.__hash = h__364__auto____6442;
    return h__364__auto____6442
  }
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, v) {
  var this__6443 = this;
  return cljs.core._lookup.call(null, coll, v, null)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, v, not_found) {
  var this__6444 = this;
  if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this__6444.tree_map, v))) {
    return v
  }else {
    return not_found
  }
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeSet.prototype.call = function() {
  var G__6468 = null;
  var G__6468__2 = function(tsym6438, k) {
    var this__6445 = this;
    var tsym6438__6446 = this;
    var coll__6447 = tsym6438__6446;
    return cljs.core._lookup.call(null, coll__6447, k)
  };
  var G__6468__3 = function(tsym6439, k, not_found) {
    var this__6448 = this;
    var tsym6439__6449 = this;
    var coll__6450 = tsym6439__6449;
    return cljs.core._lookup.call(null, coll__6450, k, not_found)
  };
  G__6468 = function(tsym6439, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__6468__2.call(this, tsym6439, k);
      case 3:
        return G__6468__3.call(this, tsym6439, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6468
}();
cljs.core.PersistentTreeSet.prototype.apply = function(tsym6436, args6437) {
  return tsym6436.call.apply(tsym6436, [tsym6436].concat(cljs.core.aclone.call(null, args6437)))
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__6451 = this;
  return new cljs.core.PersistentTreeSet(this__6451.meta, cljs.core.assoc.call(null, this__6451.tree_map, o, null), null)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = function(coll) {
  var this__6452 = this;
  return cljs.core.map.call(null, cljs.core.key, cljs.core.rseq.call(null, this__6452.tree_map))
};
cljs.core.PersistentTreeSet.prototype.toString = function() {
  var this__6453 = this;
  var this$__6454 = this;
  return cljs.core.pr_str.call(null, this$__6454)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = function(coll, ascending_QMARK_) {
  var this__6455 = this;
  return cljs.core.map.call(null, cljs.core.key, cljs.core._sorted_seq.call(null, this__6455.tree_map, ascending_QMARK_))
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = function(coll, k, ascending_QMARK_) {
  var this__6456 = this;
  return cljs.core.map.call(null, cljs.core.key, cljs.core._sorted_seq_from.call(null, this__6456.tree_map, k, ascending_QMARK_))
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = function(coll, entry) {
  var this__6457 = this;
  return entry
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = function(coll) {
  var this__6458 = this;
  return cljs.core._comparator.call(null, this__6458.tree_map)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__6459 = this;
  return cljs.core.keys.call(null, this__6459.tree_map)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = function(coll, v) {
  var this__6460 = this;
  return new cljs.core.PersistentTreeSet(this__6460.meta, cljs.core.dissoc.call(null, this__6460.tree_map, v), null)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__6461 = this;
  return cljs.core.count.call(null, this__6461.tree_map)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__6462 = this;
  var and__3822__auto____6463 = cljs.core.set_QMARK_.call(null, other);
  if(and__3822__auto____6463) {
    var and__3822__auto____6464 = cljs.core.count.call(null, coll) === cljs.core.count.call(null, other);
    if(and__3822__auto____6464) {
      return cljs.core.every_QMARK_.call(null, function(p1__6418_SHARP_) {
        return cljs.core.contains_QMARK_.call(null, coll, p1__6418_SHARP_)
      }, other)
    }else {
      return and__3822__auto____6464
    }
  }else {
    return and__3822__auto____6463
  }
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__6465 = this;
  return new cljs.core.PersistentTreeSet(meta, this__6465.tree_map, this__6465.__hash)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__6466 = this;
  return this__6466.meta
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__6467 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentTreeSet.EMPTY, this__6467.meta)
};
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = new cljs.core.PersistentTreeSet(null, cljs.core.sorted_map.call(null), 0);
cljs.core.set = function set(coll) {
  var in$__6469 = cljs.core.seq.call(null, coll);
  var out__6470 = cljs.core.transient$.call(null, cljs.core.PersistentHashSet.EMPTY);
  while(true) {
    if(cljs.core.truth_(cljs.core.seq.call(null, in$__6469))) {
      var G__6471 = cljs.core.next.call(null, in$__6469);
      var G__6472 = cljs.core.conj_BANG_.call(null, out__6470, cljs.core.first.call(null, in$__6469));
      in$__6469 = G__6471;
      out__6470 = G__6472;
      continue
    }else {
      return cljs.core.persistent_BANG_.call(null, out__6470)
    }
    break
  }
};
cljs.core.sorted_set = function() {
  var sorted_set__delegate = function(keys) {
    return cljs.core.reduce.call(null, cljs.core._conj, cljs.core.PersistentTreeSet.EMPTY, keys)
  };
  var sorted_set = function(var_args) {
    var keys = null;
    if(goog.isDef(var_args)) {
      keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return sorted_set__delegate.call(this, keys)
  };
  sorted_set.cljs$lang$maxFixedArity = 0;
  sorted_set.cljs$lang$applyTo = function(arglist__6473) {
    var keys = cljs.core.seq(arglist__6473);
    return sorted_set__delegate(keys)
  };
  sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
  return sorted_set
}();
cljs.core.sorted_set_by = function() {
  var sorted_set_by__delegate = function(comparator, keys) {
    return cljs.core.reduce.call(null, cljs.core._conj, new cljs.core.PersistentTreeSet(null, cljs.core.sorted_map_by.call(null, comparator), 0), keys)
  };
  var sorted_set_by = function(comparator, var_args) {
    var keys = null;
    if(goog.isDef(var_args)) {
      keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return sorted_set_by__delegate.call(this, comparator, keys)
  };
  sorted_set_by.cljs$lang$maxFixedArity = 1;
  sorted_set_by.cljs$lang$applyTo = function(arglist__6475) {
    var comparator = cljs.core.first(arglist__6475);
    var keys = cljs.core.rest(arglist__6475);
    return sorted_set_by__delegate(comparator, keys)
  };
  sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
  return sorted_set_by
}();
cljs.core.replace = function replace(smap, coll) {
  if(cljs.core.vector_QMARK_.call(null, coll)) {
    var n__6476 = cljs.core.count.call(null, coll);
    return cljs.core.reduce.call(null, function(v, i) {
      var temp__3971__auto____6477 = cljs.core.find.call(null, smap, cljs.core.nth.call(null, v, i));
      if(cljs.core.truth_(temp__3971__auto____6477)) {
        var e__6478 = temp__3971__auto____6477;
        return cljs.core.assoc.call(null, v, i, cljs.core.second.call(null, e__6478))
      }else {
        return v
      }
    }, coll, cljs.core.take.call(null, n__6476, cljs.core.iterate.call(null, cljs.core.inc, 0)))
  }else {
    return cljs.core.map.call(null, function(p1__6474_SHARP_) {
      var temp__3971__auto____6479 = cljs.core.find.call(null, smap, p1__6474_SHARP_);
      if(cljs.core.truth_(temp__3971__auto____6479)) {
        var e__6480 = temp__3971__auto____6479;
        return cljs.core.second.call(null, e__6480)
      }else {
        return p1__6474_SHARP_
      }
    }, coll)
  }
};
cljs.core.distinct = function distinct(coll) {
  var step__6488 = function step(xs, seen) {
    return new cljs.core.LazySeq(null, false, function() {
      return function(p__6481, seen) {
        while(true) {
          var vec__6482__6483 = p__6481;
          var f__6484 = cljs.core.nth.call(null, vec__6482__6483, 0, null);
          var xs__6485 = vec__6482__6483;
          var temp__3974__auto____6486 = cljs.core.seq.call(null, xs__6485);
          if(cljs.core.truth_(temp__3974__auto____6486)) {
            var s__6487 = temp__3974__auto____6486;
            if(cljs.core.contains_QMARK_.call(null, seen, f__6484)) {
              var G__6489 = cljs.core.rest.call(null, s__6487);
              var G__6490 = seen;
              p__6481 = G__6489;
              seen = G__6490;
              continue
            }else {
              return cljs.core.cons.call(null, f__6484, step.call(null, cljs.core.rest.call(null, s__6487), cljs.core.conj.call(null, seen, f__6484)))
            }
          }else {
            return null
          }
          break
        }
      }.call(null, xs, seen)
    })
  };
  return step__6488.call(null, coll, cljs.core.set([]))
};
cljs.core.butlast = function butlast(s) {
  var ret__6491 = cljs.core.PersistentVector.fromArray([]);
  var s__6492 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.next.call(null, s__6492))) {
      var G__6493 = cljs.core.conj.call(null, ret__6491, cljs.core.first.call(null, s__6492));
      var G__6494 = cljs.core.next.call(null, s__6492);
      ret__6491 = G__6493;
      s__6492 = G__6494;
      continue
    }else {
      return cljs.core.seq.call(null, ret__6491)
    }
    break
  }
};
cljs.core.name = function name(x) {
  if(cljs.core.string_QMARK_.call(null, x)) {
    return x
  }else {
    if(function() {
      var or__3824__auto____6495 = cljs.core.keyword_QMARK_.call(null, x);
      if(or__3824__auto____6495) {
        return or__3824__auto____6495
      }else {
        return cljs.core.symbol_QMARK_.call(null, x)
      }
    }()) {
      var i__6496 = x.lastIndexOf("/");
      if(i__6496 < 0) {
        return cljs.core.subs.call(null, x, 2)
      }else {
        return cljs.core.subs.call(null, x, i__6496 + 1)
      }
    }else {
      if("\ufdd0'else") {
        throw new Error([cljs.core.str("Doesn't support name: "), cljs.core.str(x)].join(""));
      }else {
        return null
      }
    }
  }
};
cljs.core.namespace = function namespace(x) {
  if(function() {
    var or__3824__auto____6497 = cljs.core.keyword_QMARK_.call(null, x);
    if(or__3824__auto____6497) {
      return or__3824__auto____6497
    }else {
      return cljs.core.symbol_QMARK_.call(null, x)
    }
  }()) {
    var i__6498 = x.lastIndexOf("/");
    if(i__6498 > -1) {
      return cljs.core.subs.call(null, x, 2, i__6498)
    }else {
      return null
    }
  }else {
    throw new Error([cljs.core.str("Doesn't support namespace: "), cljs.core.str(x)].join(""));
  }
};
cljs.core.zipmap = function zipmap(keys, vals) {
  var map__6501 = cljs.core.ObjMap.fromObject([], {});
  var ks__6502 = cljs.core.seq.call(null, keys);
  var vs__6503 = cljs.core.seq.call(null, vals);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3822__auto____6504 = ks__6502;
      if(cljs.core.truth_(and__3822__auto____6504)) {
        return vs__6503
      }else {
        return and__3822__auto____6504
      }
    }())) {
      var G__6505 = cljs.core.assoc.call(null, map__6501, cljs.core.first.call(null, ks__6502), cljs.core.first.call(null, vs__6503));
      var G__6506 = cljs.core.next.call(null, ks__6502);
      var G__6507 = cljs.core.next.call(null, vs__6503);
      map__6501 = G__6505;
      ks__6502 = G__6506;
      vs__6503 = G__6507;
      continue
    }else {
      return map__6501
    }
    break
  }
};
cljs.core.max_key = function() {
  var max_key = null;
  var max_key__2 = function(k, x) {
    return x
  };
  var max_key__3 = function(k, x, y) {
    if(k.call(null, x) > k.call(null, y)) {
      return x
    }else {
      return y
    }
  };
  var max_key__4 = function() {
    var G__6510__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__6499_SHARP_, p2__6500_SHARP_) {
        return max_key.call(null, k, p1__6499_SHARP_, p2__6500_SHARP_)
      }, max_key.call(null, k, x, y), more)
    };
    var G__6510 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__6510__delegate.call(this, k, x, y, more)
    };
    G__6510.cljs$lang$maxFixedArity = 3;
    G__6510.cljs$lang$applyTo = function(arglist__6511) {
      var k = cljs.core.first(arglist__6511);
      var x = cljs.core.first(cljs.core.next(arglist__6511));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6511)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6511)));
      return G__6510__delegate(k, x, y, more)
    };
    G__6510.cljs$lang$arity$variadic = G__6510__delegate;
    return G__6510
  }();
  max_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return max_key__2.call(this, k, x);
      case 3:
        return max_key__3.call(this, k, x, y);
      default:
        return max_key__4.cljs$lang$arity$variadic(k, x, y, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  max_key.cljs$lang$maxFixedArity = 3;
  max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
  max_key.cljs$lang$arity$2 = max_key__2;
  max_key.cljs$lang$arity$3 = max_key__3;
  max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
  return max_key
}();
cljs.core.min_key = function() {
  var min_key = null;
  var min_key__2 = function(k, x) {
    return x
  };
  var min_key__3 = function(k, x, y) {
    if(k.call(null, x) < k.call(null, y)) {
      return x
    }else {
      return y
    }
  };
  var min_key__4 = function() {
    var G__6512__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__6508_SHARP_, p2__6509_SHARP_) {
        return min_key.call(null, k, p1__6508_SHARP_, p2__6509_SHARP_)
      }, min_key.call(null, k, x, y), more)
    };
    var G__6512 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__6512__delegate.call(this, k, x, y, more)
    };
    G__6512.cljs$lang$maxFixedArity = 3;
    G__6512.cljs$lang$applyTo = function(arglist__6513) {
      var k = cljs.core.first(arglist__6513);
      var x = cljs.core.first(cljs.core.next(arglist__6513));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6513)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6513)));
      return G__6512__delegate(k, x, y, more)
    };
    G__6512.cljs$lang$arity$variadic = G__6512__delegate;
    return G__6512
  }();
  min_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return min_key__2.call(this, k, x);
      case 3:
        return min_key__3.call(this, k, x, y);
      default:
        return min_key__4.cljs$lang$arity$variadic(k, x, y, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  min_key.cljs$lang$maxFixedArity = 3;
  min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
  min_key.cljs$lang$arity$2 = min_key__2;
  min_key.cljs$lang$arity$3 = min_key__3;
  min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
  return min_key
}();
cljs.core.partition_all = function() {
  var partition_all = null;
  var partition_all__2 = function(n, coll) {
    return partition_all.call(null, n, n, coll)
  };
  var partition_all__3 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____6514 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3974__auto____6514)) {
        var s__6515 = temp__3974__auto____6514;
        return cljs.core.cons.call(null, cljs.core.take.call(null, n, s__6515), partition_all.call(null, n, step, cljs.core.drop.call(null, step, s__6515)))
      }else {
        return null
      }
    })
  };
  partition_all = function(n, step, coll) {
    switch(arguments.length) {
      case 2:
        return partition_all__2.call(this, n, step);
      case 3:
        return partition_all__3.call(this, n, step, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partition_all.cljs$lang$arity$2 = partition_all__2;
  partition_all.cljs$lang$arity$3 = partition_all__3;
  return partition_all
}();
cljs.core.take_while = function take_while(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____6516 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3974__auto____6516)) {
      var s__6517 = temp__3974__auto____6516;
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, s__6517)))) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__6517), take_while.call(null, pred, cljs.core.rest.call(null, s__6517)))
      }else {
        return null
      }
    }else {
      return null
    }
  })
};
cljs.core.mk_bound_fn = function mk_bound_fn(sc, test, key) {
  return function(e) {
    var comp__6518 = cljs.core._comparator.call(null, sc);
    return test.call(null, comp__6518.call(null, cljs.core._entry_key.call(null, sc, e), key), 0)
  }
};
cljs.core.subseq = function() {
  var subseq = null;
  var subseq__3 = function(sc, test, key) {
    var include__6519 = cljs.core.mk_bound_fn.call(null, sc, test, key);
    if(cljs.core.truth_(cljs.core.set([cljs.core._GT_, cljs.core._GT__EQ_]).call(null, test))) {
      var temp__3974__auto____6520 = cljs.core._sorted_seq_from.call(null, sc, key, true);
      if(cljs.core.truth_(temp__3974__auto____6520)) {
        var vec__6521__6522 = temp__3974__auto____6520;
        var e__6523 = cljs.core.nth.call(null, vec__6521__6522, 0, null);
        var s__6524 = vec__6521__6522;
        if(cljs.core.truth_(include__6519.call(null, e__6523))) {
          return s__6524
        }else {
          return cljs.core.next.call(null, s__6524)
        }
      }else {
        return null
      }
    }else {
      return cljs.core.take_while.call(null, include__6519, cljs.core._sorted_seq.call(null, sc, true))
    }
  };
  var subseq__5 = function(sc, start_test, start_key, end_test, end_key) {
    var temp__3974__auto____6525 = cljs.core._sorted_seq_from.call(null, sc, start_key, true);
    if(cljs.core.truth_(temp__3974__auto____6525)) {
      var vec__6526__6527 = temp__3974__auto____6525;
      var e__6528 = cljs.core.nth.call(null, vec__6526__6527, 0, null);
      var s__6529 = vec__6526__6527;
      return cljs.core.take_while.call(null, cljs.core.mk_bound_fn.call(null, sc, end_test, end_key), cljs.core.truth_(cljs.core.mk_bound_fn.call(null, sc, start_test, start_key).call(null, e__6528)) ? s__6529 : cljs.core.next.call(null, s__6529))
    }else {
      return null
    }
  };
  subseq = function(sc, start_test, start_key, end_test, end_key) {
    switch(arguments.length) {
      case 3:
        return subseq__3.call(this, sc, start_test, start_key);
      case 5:
        return subseq__5.call(this, sc, start_test, start_key, end_test, end_key)
    }
    throw"Invalid arity: " + arguments.length;
  };
  subseq.cljs$lang$arity$3 = subseq__3;
  subseq.cljs$lang$arity$5 = subseq__5;
  return subseq
}();
cljs.core.rsubseq = function() {
  var rsubseq = null;
  var rsubseq__3 = function(sc, test, key) {
    var include__6530 = cljs.core.mk_bound_fn.call(null, sc, test, key);
    if(cljs.core.truth_(cljs.core.set([cljs.core._LT_, cljs.core._LT__EQ_]).call(null, test))) {
      var temp__3974__auto____6531 = cljs.core._sorted_seq_from.call(null, sc, key, false);
      if(cljs.core.truth_(temp__3974__auto____6531)) {
        var vec__6532__6533 = temp__3974__auto____6531;
        var e__6534 = cljs.core.nth.call(null, vec__6532__6533, 0, null);
        var s__6535 = vec__6532__6533;
        if(cljs.core.truth_(include__6530.call(null, e__6534))) {
          return s__6535
        }else {
          return cljs.core.next.call(null, s__6535)
        }
      }else {
        return null
      }
    }else {
      return cljs.core.take_while.call(null, include__6530, cljs.core._sorted_seq.call(null, sc, false))
    }
  };
  var rsubseq__5 = function(sc, start_test, start_key, end_test, end_key) {
    var temp__3974__auto____6536 = cljs.core._sorted_seq_from.call(null, sc, end_key, false);
    if(cljs.core.truth_(temp__3974__auto____6536)) {
      var vec__6537__6538 = temp__3974__auto____6536;
      var e__6539 = cljs.core.nth.call(null, vec__6537__6538, 0, null);
      var s__6540 = vec__6537__6538;
      return cljs.core.take_while.call(null, cljs.core.mk_bound_fn.call(null, sc, start_test, start_key), cljs.core.truth_(cljs.core.mk_bound_fn.call(null, sc, end_test, end_key).call(null, e__6539)) ? s__6540 : cljs.core.next.call(null, s__6540))
    }else {
      return null
    }
  };
  rsubseq = function(sc, start_test, start_key, end_test, end_key) {
    switch(arguments.length) {
      case 3:
        return rsubseq__3.call(this, sc, start_test, start_key);
      case 5:
        return rsubseq__5.call(this, sc, start_test, start_key, end_test, end_key)
    }
    throw"Invalid arity: " + arguments.length;
  };
  rsubseq.cljs$lang$arity$3 = rsubseq__3;
  rsubseq.cljs$lang$arity$5 = rsubseq__5;
  return rsubseq
}();
cljs.core.Range = function(meta, start, end, step, __hash) {
  this.meta = meta;
  this.start = start;
  this.end = end;
  this.step = step;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 16187486
};
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.Range")
};
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = function(rng) {
  var this__6541 = this;
  var h__364__auto____6542 = this__6541.__hash;
  if(h__364__auto____6542 != null) {
    return h__364__auto____6542
  }else {
    var h__364__auto____6543 = cljs.core.hash_coll.call(null, rng);
    this__6541.__hash = h__364__auto____6543;
    return h__364__auto____6543
  }
};
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = function(rng, o) {
  var this__6544 = this;
  return cljs.core.cons.call(null, o, rng)
};
cljs.core.Range.prototype.toString = function() {
  var this__6545 = this;
  var this$__6546 = this;
  return cljs.core.pr_str.call(null, this$__6546)
};
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = function(rng, f) {
  var this__6547 = this;
  return cljs.core.ci_reduce.call(null, rng, f)
};
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = function(rng, f, s) {
  var this__6548 = this;
  return cljs.core.ci_reduce.call(null, rng, f, s)
};
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = function(rng) {
  var this__6549 = this;
  var comp__6550 = this__6549.step > 0 ? cljs.core._LT_ : cljs.core._GT_;
  if(cljs.core.truth_(comp__6550.call(null, this__6549.start, this__6549.end))) {
    return rng
  }else {
    return null
  }
};
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = function(rng) {
  var this__6551 = this;
  if(cljs.core.not.call(null, cljs.core._seq.call(null, rng))) {
    return 0
  }else {
    return Math["ceil"]((this__6551.end - this__6551.start) / this__6551.step)
  }
};
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = function(rng) {
  var this__6552 = this;
  return this__6552.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = function(rng) {
  var this__6553 = this;
  if(cljs.core.truth_(cljs.core._seq.call(null, rng))) {
    return new cljs.core.Range(this__6553.meta, this__6553.start + this__6553.step, this__6553.end, this__6553.step, null)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(rng, other) {
  var this__6554 = this;
  return cljs.core.equiv_sequential.call(null, rng, other)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(rng, meta) {
  var this__6555 = this;
  return new cljs.core.Range(meta, this__6555.start, this__6555.end, this__6555.step, this__6555.__hash)
};
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = function(rng) {
  var this__6556 = this;
  return this__6556.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = function(rng, n) {
  var this__6557 = this;
  if(n < cljs.core._count.call(null, rng)) {
    return this__6557.start + n * this__6557.step
  }else {
    if(function() {
      var and__3822__auto____6558 = this__6557.start > this__6557.end;
      if(and__3822__auto____6558) {
        return this__6557.step === 0
      }else {
        return and__3822__auto____6558
      }
    }()) {
      return this__6557.start
    }else {
      throw new Error("Index out of bounds");
    }
  }
};
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = function(rng, n, not_found) {
  var this__6559 = this;
  if(n < cljs.core._count.call(null, rng)) {
    return this__6559.start + n * this__6559.step
  }else {
    if(function() {
      var and__3822__auto____6560 = this__6559.start > this__6559.end;
      if(and__3822__auto____6560) {
        return this__6559.step === 0
      }else {
        return and__3822__auto____6560
      }
    }()) {
      return this__6559.start
    }else {
      return not_found
    }
  }
};
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(rng) {
  var this__6561 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__6561.meta)
};
cljs.core.Range;
cljs.core.range = function() {
  var range = null;
  var range__0 = function() {
    return range.call(null, 0, Number["MAX_VALUE"], 1)
  };
  var range__1 = function(end) {
    return range.call(null, 0, end, 1)
  };
  var range__2 = function(start, end) {
    return range.call(null, start, end, 1)
  };
  var range__3 = function(start, end, step) {
    return new cljs.core.Range(null, start, end, step, null)
  };
  range = function(start, end, step) {
    switch(arguments.length) {
      case 0:
        return range__0.call(this);
      case 1:
        return range__1.call(this, start);
      case 2:
        return range__2.call(this, start, end);
      case 3:
        return range__3.call(this, start, end, step)
    }
    throw"Invalid arity: " + arguments.length;
  };
  range.cljs$lang$arity$0 = range__0;
  range.cljs$lang$arity$1 = range__1;
  range.cljs$lang$arity$2 = range__2;
  range.cljs$lang$arity$3 = range__3;
  return range
}();
cljs.core.take_nth = function take_nth(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____6562 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3974__auto____6562)) {
      var s__6563 = temp__3974__auto____6562;
      return cljs.core.cons.call(null, cljs.core.first.call(null, s__6563), take_nth.call(null, n, cljs.core.drop.call(null, n, s__6563)))
    }else {
      return null
    }
  })
};
cljs.core.split_with = function split_with(pred, coll) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null, pred, coll), cljs.core.drop_while.call(null, pred, coll)])
};
cljs.core.partition_by = function partition_by(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____6565 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3974__auto____6565)) {
      var s__6566 = temp__3974__auto____6565;
      var fst__6567 = cljs.core.first.call(null, s__6566);
      var fv__6568 = f.call(null, fst__6567);
      var run__6569 = cljs.core.cons.call(null, fst__6567, cljs.core.take_while.call(null, function(p1__6564_SHARP_) {
        return cljs.core._EQ_.call(null, fv__6568, f.call(null, p1__6564_SHARP_))
      }, cljs.core.next.call(null, s__6566)));
      return cljs.core.cons.call(null, run__6569, partition_by.call(null, f, cljs.core.seq.call(null, cljs.core.drop.call(null, cljs.core.count.call(null, run__6569), s__6566))))
    }else {
      return null
    }
  })
};
cljs.core.frequencies = function frequencies(coll) {
  return cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, function(counts, x) {
    return cljs.core.assoc_BANG_.call(null, counts, x, cljs.core.get.call(null, counts, x, 0) + 1)
  }, cljs.core.transient$.call(null, cljs.core.ObjMap.fromObject([], {})), coll))
};
cljs.core.reductions = function() {
  var reductions = null;
  var reductions__2 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3971__auto____6580 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3971__auto____6580)) {
        var s__6581 = temp__3971__auto____6580;
        return reductions.call(null, f, cljs.core.first.call(null, s__6581), cljs.core.rest.call(null, s__6581))
      }else {
        return cljs.core.list.call(null, f.call(null))
      }
    })
  };
  var reductions__3 = function(f, init, coll) {
    return cljs.core.cons.call(null, init, new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____6582 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3974__auto____6582)) {
        var s__6583 = temp__3974__auto____6582;
        return reductions.call(null, f, f.call(null, init, cljs.core.first.call(null, s__6583)), cljs.core.rest.call(null, s__6583))
      }else {
        return null
      }
    }))
  };
  reductions = function(f, init, coll) {
    switch(arguments.length) {
      case 2:
        return reductions__2.call(this, f, init);
      case 3:
        return reductions__3.call(this, f, init, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  reductions.cljs$lang$arity$2 = reductions__2;
  reductions.cljs$lang$arity$3 = reductions__3;
  return reductions
}();
cljs.core.juxt = function() {
  var juxt = null;
  var juxt__1 = function(f) {
    return function() {
      var G__6585 = null;
      var G__6585__0 = function() {
        return cljs.core.vector.call(null, f.call(null))
      };
      var G__6585__1 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x))
      };
      var G__6585__2 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y))
      };
      var G__6585__3 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z))
      };
      var G__6585__4 = function() {
        var G__6586__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args))
        };
        var G__6586 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__6586__delegate.call(this, x, y, z, args)
        };
        G__6586.cljs$lang$maxFixedArity = 3;
        G__6586.cljs$lang$applyTo = function(arglist__6587) {
          var x = cljs.core.first(arglist__6587);
          var y = cljs.core.first(cljs.core.next(arglist__6587));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6587)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6587)));
          return G__6586__delegate(x, y, z, args)
        };
        G__6586.cljs$lang$arity$variadic = G__6586__delegate;
        return G__6586
      }();
      G__6585 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__6585__0.call(this);
          case 1:
            return G__6585__1.call(this, x);
          case 2:
            return G__6585__2.call(this, x, y);
          case 3:
            return G__6585__3.call(this, x, y, z);
          default:
            return G__6585__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__6585.cljs$lang$maxFixedArity = 3;
      G__6585.cljs$lang$applyTo = G__6585__4.cljs$lang$applyTo;
      return G__6585
    }()
  };
  var juxt__2 = function(f, g) {
    return function() {
      var G__6588 = null;
      var G__6588__0 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null))
      };
      var G__6588__1 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x))
      };
      var G__6588__2 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y))
      };
      var G__6588__3 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z))
      };
      var G__6588__4 = function() {
        var G__6589__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__6589 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__6589__delegate.call(this, x, y, z, args)
        };
        G__6589.cljs$lang$maxFixedArity = 3;
        G__6589.cljs$lang$applyTo = function(arglist__6590) {
          var x = cljs.core.first(arglist__6590);
          var y = cljs.core.first(cljs.core.next(arglist__6590));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6590)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6590)));
          return G__6589__delegate(x, y, z, args)
        };
        G__6589.cljs$lang$arity$variadic = G__6589__delegate;
        return G__6589
      }();
      G__6588 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__6588__0.call(this);
          case 1:
            return G__6588__1.call(this, x);
          case 2:
            return G__6588__2.call(this, x, y);
          case 3:
            return G__6588__3.call(this, x, y, z);
          default:
            return G__6588__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__6588.cljs$lang$maxFixedArity = 3;
      G__6588.cljs$lang$applyTo = G__6588__4.cljs$lang$applyTo;
      return G__6588
    }()
  };
  var juxt__3 = function(f, g, h) {
    return function() {
      var G__6591 = null;
      var G__6591__0 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null), h.call(null))
      };
      var G__6591__1 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x), h.call(null, x))
      };
      var G__6591__2 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y), h.call(null, x, y))
      };
      var G__6591__3 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z), h.call(null, x, y, z))
      };
      var G__6591__4 = function() {
        var G__6592__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args), cljs.core.apply.call(null, h, x, y, z, args))
        };
        var G__6592 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__6592__delegate.call(this, x, y, z, args)
        };
        G__6592.cljs$lang$maxFixedArity = 3;
        G__6592.cljs$lang$applyTo = function(arglist__6593) {
          var x = cljs.core.first(arglist__6593);
          var y = cljs.core.first(cljs.core.next(arglist__6593));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6593)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6593)));
          return G__6592__delegate(x, y, z, args)
        };
        G__6592.cljs$lang$arity$variadic = G__6592__delegate;
        return G__6592
      }();
      G__6591 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__6591__0.call(this);
          case 1:
            return G__6591__1.call(this, x);
          case 2:
            return G__6591__2.call(this, x, y);
          case 3:
            return G__6591__3.call(this, x, y, z);
          default:
            return G__6591__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__6591.cljs$lang$maxFixedArity = 3;
      G__6591.cljs$lang$applyTo = G__6591__4.cljs$lang$applyTo;
      return G__6591
    }()
  };
  var juxt__4 = function() {
    var G__6594__delegate = function(f, g, h, fs) {
      var fs__6584 = cljs.core.list_STAR_.call(null, f, g, h, fs);
      return function() {
        var G__6595 = null;
        var G__6595__0 = function() {
          return cljs.core.reduce.call(null, function(p1__6570_SHARP_, p2__6571_SHARP_) {
            return cljs.core.conj.call(null, p1__6570_SHARP_, p2__6571_SHARP_.call(null))
          }, cljs.core.PersistentVector.fromArray([]), fs__6584)
        };
        var G__6595__1 = function(x) {
          return cljs.core.reduce.call(null, function(p1__6572_SHARP_, p2__6573_SHARP_) {
            return cljs.core.conj.call(null, p1__6572_SHARP_, p2__6573_SHARP_.call(null, x))
          }, cljs.core.PersistentVector.fromArray([]), fs__6584)
        };
        var G__6595__2 = function(x, y) {
          return cljs.core.reduce.call(null, function(p1__6574_SHARP_, p2__6575_SHARP_) {
            return cljs.core.conj.call(null, p1__6574_SHARP_, p2__6575_SHARP_.call(null, x, y))
          }, cljs.core.PersistentVector.fromArray([]), fs__6584)
        };
        var G__6595__3 = function(x, y, z) {
          return cljs.core.reduce.call(null, function(p1__6576_SHARP_, p2__6577_SHARP_) {
            return cljs.core.conj.call(null, p1__6576_SHARP_, p2__6577_SHARP_.call(null, x, y, z))
          }, cljs.core.PersistentVector.fromArray([]), fs__6584)
        };
        var G__6595__4 = function() {
          var G__6596__delegate = function(x, y, z, args) {
            return cljs.core.reduce.call(null, function(p1__6578_SHARP_, p2__6579_SHARP_) {
              return cljs.core.conj.call(null, p1__6578_SHARP_, cljs.core.apply.call(null, p2__6579_SHARP_, x, y, z, args))
            }, cljs.core.PersistentVector.fromArray([]), fs__6584)
          };
          var G__6596 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__6596__delegate.call(this, x, y, z, args)
          };
          G__6596.cljs$lang$maxFixedArity = 3;
          G__6596.cljs$lang$applyTo = function(arglist__6597) {
            var x = cljs.core.first(arglist__6597);
            var y = cljs.core.first(cljs.core.next(arglist__6597));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6597)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6597)));
            return G__6596__delegate(x, y, z, args)
          };
          G__6596.cljs$lang$arity$variadic = G__6596__delegate;
          return G__6596
        }();
        G__6595 = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return G__6595__0.call(this);
            case 1:
              return G__6595__1.call(this, x);
            case 2:
              return G__6595__2.call(this, x, y);
            case 3:
              return G__6595__3.call(this, x, y, z);
            default:
              return G__6595__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
          }
          throw"Invalid arity: " + arguments.length;
        };
        G__6595.cljs$lang$maxFixedArity = 3;
        G__6595.cljs$lang$applyTo = G__6595__4.cljs$lang$applyTo;
        return G__6595
      }()
    };
    var G__6594 = function(f, g, h, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__6594__delegate.call(this, f, g, h, fs)
    };
    G__6594.cljs$lang$maxFixedArity = 3;
    G__6594.cljs$lang$applyTo = function(arglist__6598) {
      var f = cljs.core.first(arglist__6598);
      var g = cljs.core.first(cljs.core.next(arglist__6598));
      var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6598)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6598)));
      return G__6594__delegate(f, g, h, fs)
    };
    G__6594.cljs$lang$arity$variadic = G__6594__delegate;
    return G__6594
  }();
  juxt = function(f, g, h, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 1:
        return juxt__1.call(this, f);
      case 2:
        return juxt__2.call(this, f, g);
      case 3:
        return juxt__3.call(this, f, g, h);
      default:
        return juxt__4.cljs$lang$arity$variadic(f, g, h, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  juxt.cljs$lang$maxFixedArity = 3;
  juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
  juxt.cljs$lang$arity$1 = juxt__1;
  juxt.cljs$lang$arity$2 = juxt__2;
  juxt.cljs$lang$arity$3 = juxt__3;
  juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
  return juxt
}();
cljs.core.dorun = function() {
  var dorun = null;
  var dorun__1 = function(coll) {
    while(true) {
      if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
        var G__6600 = cljs.core.next.call(null, coll);
        coll = G__6600;
        continue
      }else {
        return null
      }
      break
    }
  };
  var dorun__2 = function(n, coll) {
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3822__auto____6599 = cljs.core.seq.call(null, coll);
        if(cljs.core.truth_(and__3822__auto____6599)) {
          return n > 0
        }else {
          return and__3822__auto____6599
        }
      }())) {
        var G__6601 = n - 1;
        var G__6602 = cljs.core.next.call(null, coll);
        n = G__6601;
        coll = G__6602;
        continue
      }else {
        return null
      }
      break
    }
  };
  dorun = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return dorun__1.call(this, n);
      case 2:
        return dorun__2.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  dorun.cljs$lang$arity$1 = dorun__1;
  dorun.cljs$lang$arity$2 = dorun__2;
  return dorun
}();
cljs.core.doall = function() {
  var doall = null;
  var doall__1 = function(coll) {
    cljs.core.dorun.call(null, coll);
    return coll
  };
  var doall__2 = function(n, coll) {
    cljs.core.dorun.call(null, n, coll);
    return coll
  };
  doall = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return doall__1.call(this, n);
      case 2:
        return doall__2.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  doall.cljs$lang$arity$1 = doall__1;
  doall.cljs$lang$arity$2 = doall__2;
  return doall
}();
cljs.core.re_matches = function re_matches(re, s) {
  var matches__6603 = re.exec(s);
  if(cljs.core._EQ_.call(null, cljs.core.first.call(null, matches__6603), s)) {
    if(cljs.core.count.call(null, matches__6603) === 1) {
      return cljs.core.first.call(null, matches__6603)
    }else {
      return cljs.core.vec.call(null, matches__6603)
    }
  }else {
    return null
  }
};
cljs.core.re_find = function re_find(re, s) {
  var matches__6604 = re.exec(s);
  if(matches__6604 == null) {
    return null
  }else {
    if(cljs.core.count.call(null, matches__6604) === 1) {
      return cljs.core.first.call(null, matches__6604)
    }else {
      return cljs.core.vec.call(null, matches__6604)
    }
  }
};
cljs.core.re_seq = function re_seq(re, s) {
  var match_data__6605 = cljs.core.re_find.call(null, re, s);
  var match_idx__6606 = s.search(re);
  var match_str__6607 = cljs.core.coll_QMARK_.call(null, match_data__6605) ? cljs.core.first.call(null, match_data__6605) : match_data__6605;
  var post_match__6608 = cljs.core.subs.call(null, s, match_idx__6606 + cljs.core.count.call(null, match_str__6607));
  if(cljs.core.truth_(match_data__6605)) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, match_data__6605, re_seq.call(null, re, post_match__6608))
    })
  }else {
    return null
  }
};
cljs.core.re_pattern = function re_pattern(s) {
  var vec__6610__6611 = cljs.core.re_find.call(null, /^(?:\(\?([idmsux]*)\))?(.*)/, s);
  var ___6612 = cljs.core.nth.call(null, vec__6610__6611, 0, null);
  var flags__6613 = cljs.core.nth.call(null, vec__6610__6611, 1, null);
  var pattern__6614 = cljs.core.nth.call(null, vec__6610__6611, 2, null);
  return new RegExp(pattern__6614, flags__6613)
};
cljs.core.pr_sequential = function pr_sequential(print_one, begin, sep, end, opts, coll) {
  return cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray([begin]), cljs.core.flatten1.call(null, cljs.core.interpose.call(null, cljs.core.PersistentVector.fromArray([sep]), cljs.core.map.call(null, function(p1__6609_SHARP_) {
    return print_one.call(null, p1__6609_SHARP_, opts)
  }, coll))), cljs.core.PersistentVector.fromArray([end]))
};
cljs.core.string_print = function string_print(x) {
  cljs.core._STAR_print_fn_STAR_.call(null, x);
  return null
};
cljs.core.flush = function flush() {
  return null
};
cljs.core.pr_seq = function pr_seq(obj, opts) {
  if(obj == null) {
    return cljs.core.list.call(null, "nil")
  }else {
    if(void 0 === obj) {
      return cljs.core.list.call(null, "#<undefined>")
    }else {
      if("\ufdd0'else") {
        return cljs.core.concat.call(null, cljs.core.truth_(function() {
          var and__3822__auto____6615 = cljs.core.get.call(null, opts, "\ufdd0'meta");
          if(cljs.core.truth_(and__3822__auto____6615)) {
            var and__3822__auto____6619 = function() {
              var G__6616__6617 = obj;
              if(G__6616__6617 != null) {
                if(function() {
                  var or__3824__auto____6618 = G__6616__6617.cljs$lang$protocol_mask$partition0$ & 65536;
                  if(or__3824__auto____6618) {
                    return or__3824__auto____6618
                  }else {
                    return G__6616__6617.cljs$core$IMeta$
                  }
                }()) {
                  return true
                }else {
                  if(!G__6616__6617.cljs$lang$protocol_mask$partition0$) {
                    return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, G__6616__6617)
                  }else {
                    return false
                  }
                }
              }else {
                return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, G__6616__6617)
              }
            }();
            if(cljs.core.truth_(and__3822__auto____6619)) {
              return cljs.core.meta.call(null, obj)
            }else {
              return and__3822__auto____6619
            }
          }else {
            return and__3822__auto____6615
          }
        }()) ? cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray(["^"]), pr_seq.call(null, cljs.core.meta.call(null, obj), opts), cljs.core.PersistentVector.fromArray([" "])) : null, cljs.core.truth_(function() {
          var and__3822__auto____6620 = obj != null;
          if(and__3822__auto____6620) {
            return obj.cljs$lang$type
          }else {
            return and__3822__auto____6620
          }
        }()) ? obj.cljs$lang$ctorPrSeq(obj) : function() {
          var G__6621__6622 = obj;
          if(G__6621__6622 != null) {
            if(function() {
              var or__3824__auto____6623 = G__6621__6622.cljs$lang$protocol_mask$partition0$ & 268435456;
              if(or__3824__auto____6623) {
                return or__3824__auto____6623
              }else {
                return G__6621__6622.cljs$core$IPrintable$
              }
            }()) {
              return true
            }else {
              if(!G__6621__6622.cljs$lang$protocol_mask$partition0$) {
                return cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, G__6621__6622)
              }else {
                return false
              }
            }
          }else {
            return cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, G__6621__6622)
          }
        }() ? cljs.core._pr_seq.call(null, obj, opts) : "\ufdd0'else" ? cljs.core.list.call(null, "#<", [cljs.core.str(obj)].join(""), ">") : null)
      }else {
        return null
      }
    }
  }
};
cljs.core.pr_sb = function pr_sb(objs, opts) {
  var first_obj__6624 = cljs.core.first.call(null, objs);
  var sb__6625 = new goog.string.StringBuffer;
  var G__6626__6627 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__6626__6627)) {
    var obj__6628 = cljs.core.first.call(null, G__6626__6627);
    var G__6626__6629 = G__6626__6627;
    while(true) {
      if(obj__6628 === first_obj__6624) {
      }else {
        sb__6625.append(" ")
      }
      var G__6630__6631 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__6628, opts));
      if(cljs.core.truth_(G__6630__6631)) {
        var string__6632 = cljs.core.first.call(null, G__6630__6631);
        var G__6630__6633 = G__6630__6631;
        while(true) {
          sb__6625.append(string__6632);
          var temp__3974__auto____6634 = cljs.core.next.call(null, G__6630__6633);
          if(cljs.core.truth_(temp__3974__auto____6634)) {
            var G__6630__6635 = temp__3974__auto____6634;
            var G__6638 = cljs.core.first.call(null, G__6630__6635);
            var G__6639 = G__6630__6635;
            string__6632 = G__6638;
            G__6630__6633 = G__6639;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3974__auto____6636 = cljs.core.next.call(null, G__6626__6629);
      if(cljs.core.truth_(temp__3974__auto____6636)) {
        var G__6626__6637 = temp__3974__auto____6636;
        var G__6640 = cljs.core.first.call(null, G__6626__6637);
        var G__6641 = G__6626__6637;
        obj__6628 = G__6640;
        G__6626__6629 = G__6641;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return sb__6625
};
cljs.core.pr_str_with_opts = function pr_str_with_opts(objs, opts) {
  return[cljs.core.str(cljs.core.pr_sb.call(null, objs, opts))].join("")
};
cljs.core.prn_str_with_opts = function prn_str_with_opts(objs, opts) {
  var sb__6642 = cljs.core.pr_sb.call(null, objs, opts);
  sb__6642.append("\n");
  return[cljs.core.str(sb__6642)].join("")
};
cljs.core.pr_with_opts = function pr_with_opts(objs, opts) {
  var first_obj__6643 = cljs.core.first.call(null, objs);
  var G__6644__6645 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__6644__6645)) {
    var obj__6646 = cljs.core.first.call(null, G__6644__6645);
    var G__6644__6647 = G__6644__6645;
    while(true) {
      if(obj__6646 === first_obj__6643) {
      }else {
        cljs.core.string_print.call(null, " ")
      }
      var G__6648__6649 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__6646, opts));
      if(cljs.core.truth_(G__6648__6649)) {
        var string__6650 = cljs.core.first.call(null, G__6648__6649);
        var G__6648__6651 = G__6648__6649;
        while(true) {
          cljs.core.string_print.call(null, string__6650);
          var temp__3974__auto____6652 = cljs.core.next.call(null, G__6648__6651);
          if(cljs.core.truth_(temp__3974__auto____6652)) {
            var G__6648__6653 = temp__3974__auto____6652;
            var G__6656 = cljs.core.first.call(null, G__6648__6653);
            var G__6657 = G__6648__6653;
            string__6650 = G__6656;
            G__6648__6651 = G__6657;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3974__auto____6654 = cljs.core.next.call(null, G__6644__6647);
      if(cljs.core.truth_(temp__3974__auto____6654)) {
        var G__6644__6655 = temp__3974__auto____6654;
        var G__6658 = cljs.core.first.call(null, G__6644__6655);
        var G__6659 = G__6644__6655;
        obj__6646 = G__6658;
        G__6644__6647 = G__6659;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
cljs.core.newline = function newline(opts) {
  cljs.core.string_print.call(null, "\n");
  if(cljs.core.truth_(cljs.core.get.call(null, opts, "\ufdd0'flush-on-newline"))) {
    return cljs.core.flush.call(null)
  }else {
    return null
  }
};
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = function pr_opts() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_, "\ufdd0'readably":cljs.core._STAR_print_readably_STAR_, "\ufdd0'meta":cljs.core._STAR_print_meta_STAR_, "\ufdd0'dup":cljs.core._STAR_print_dup_STAR_})
};
cljs.core.pr_str = function() {
  var pr_str__delegate = function(objs) {
    return cljs.core.pr_str_with_opts.call(null, objs, cljs.core.pr_opts.call(null))
  };
  var pr_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return pr_str__delegate.call(this, objs)
  };
  pr_str.cljs$lang$maxFixedArity = 0;
  pr_str.cljs$lang$applyTo = function(arglist__6660) {
    var objs = cljs.core.seq(arglist__6660);
    return pr_str__delegate(objs)
  };
  pr_str.cljs$lang$arity$variadic = pr_str__delegate;
  return pr_str
}();
cljs.core.prn_str = function() {
  var prn_str__delegate = function(objs) {
    return cljs.core.prn_str_with_opts.call(null, objs, cljs.core.pr_opts.call(null))
  };
  var prn_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return prn_str__delegate.call(this, objs)
  };
  prn_str.cljs$lang$maxFixedArity = 0;
  prn_str.cljs$lang$applyTo = function(arglist__6661) {
    var objs = cljs.core.seq(arglist__6661);
    return prn_str__delegate(objs)
  };
  prn_str.cljs$lang$arity$variadic = prn_str__delegate;
  return prn_str
}();
cljs.core.pr = function() {
  var pr__delegate = function(objs) {
    return cljs.core.pr_with_opts.call(null, objs, cljs.core.pr_opts.call(null))
  };
  var pr = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return pr__delegate.call(this, objs)
  };
  pr.cljs$lang$maxFixedArity = 0;
  pr.cljs$lang$applyTo = function(arglist__6662) {
    var objs = cljs.core.seq(arglist__6662);
    return pr__delegate(objs)
  };
  pr.cljs$lang$arity$variadic = pr__delegate;
  return pr
}();
cljs.core.print = function() {
  var cljs_core_print__delegate = function(objs) {
    return cljs.core.pr_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false))
  };
  var cljs_core_print = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return cljs_core_print__delegate.call(this, objs)
  };
  cljs_core_print.cljs$lang$maxFixedArity = 0;
  cljs_core_print.cljs$lang$applyTo = function(arglist__6663) {
    var objs = cljs.core.seq(arglist__6663);
    return cljs_core_print__delegate(objs)
  };
  cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
  return cljs_core_print
}();
cljs.core.print_str = function() {
  var print_str__delegate = function(objs) {
    return cljs.core.pr_str_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false))
  };
  var print_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return print_str__delegate.call(this, objs)
  };
  print_str.cljs$lang$maxFixedArity = 0;
  print_str.cljs$lang$applyTo = function(arglist__6664) {
    var objs = cljs.core.seq(arglist__6664);
    return print_str__delegate(objs)
  };
  print_str.cljs$lang$arity$variadic = print_str__delegate;
  return print_str
}();
cljs.core.println = function() {
  var println__delegate = function(objs) {
    cljs.core.pr_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  };
  var println = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return println__delegate.call(this, objs)
  };
  println.cljs$lang$maxFixedArity = 0;
  println.cljs$lang$applyTo = function(arglist__6665) {
    var objs = cljs.core.seq(arglist__6665);
    return println__delegate(objs)
  };
  println.cljs$lang$arity$variadic = println__delegate;
  return println
}();
cljs.core.println_str = function() {
  var println_str__delegate = function(objs) {
    return cljs.core.prn_str_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false))
  };
  var println_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return println_str__delegate.call(this, objs)
  };
  println_str.cljs$lang$maxFixedArity = 0;
  println_str.cljs$lang$applyTo = function(arglist__6666) {
    var objs = cljs.core.seq(arglist__6666);
    return println_str__delegate(objs)
  };
  println_str.cljs$lang$arity$variadic = println_str__delegate;
  return println_str
}();
cljs.core.prn = function() {
  var prn__delegate = function(objs) {
    cljs.core.pr_with_opts.call(null, objs, cljs.core.pr_opts.call(null));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  };
  var prn = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return prn__delegate.call(this, objs)
  };
  prn.cljs$lang$maxFixedArity = 0;
  prn.cljs$lang$applyTo = function(arglist__6667) {
    var objs = cljs.core.seq(arglist__6667);
    return prn__delegate(objs)
  };
  prn.cljs$lang$arity$variadic = prn__delegate;
  return prn
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  var pr_pair__6668 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__6668, "{", ", ", "}", opts, coll)
};
cljs.core.IPrintable["number"] = true;
cljs.core._pr_seq["number"] = function(n, opts) {
  return cljs.core.list.call(null, [cljs.core.str(n)].join(""))
};
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  var pr_pair__6669 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__6669, "{", ", ", "}", opts, coll)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  var pr_pair__6670 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__6670, "{", ", ", "}", opts, coll)
};
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#queue [", " ", "]", opts, cljs.core.seq.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#{", " ", "}", opts, coll)
};
cljs.core.IPrintable["boolean"] = true;
cljs.core._pr_seq["boolean"] = function(bool, opts) {
  return cljs.core.list.call(null, [cljs.core.str(bool)].join(""))
};
cljs.core.IPrintable["string"] = true;
cljs.core._pr_seq["string"] = function(obj, opts) {
  if(cljs.core.keyword_QMARK_.call(null, obj)) {
    return cljs.core.list.call(null, [cljs.core.str(":"), cljs.core.str(function() {
      var temp__3974__auto____6671 = cljs.core.namespace.call(null, obj);
      if(cljs.core.truth_(temp__3974__auto____6671)) {
        var nspc__6672 = temp__3974__auto____6671;
        return[cljs.core.str(nspc__6672), cljs.core.str("/")].join("")
      }else {
        return null
      }
    }()), cljs.core.str(cljs.core.name.call(null, obj))].join(""))
  }else {
    if(cljs.core.symbol_QMARK_.call(null, obj)) {
      return cljs.core.list.call(null, [cljs.core.str(function() {
        var temp__3974__auto____6673 = cljs.core.namespace.call(null, obj);
        if(cljs.core.truth_(temp__3974__auto____6673)) {
          var nspc__6674 = temp__3974__auto____6673;
          return[cljs.core.str(nspc__6674), cljs.core.str("/")].join("")
        }else {
          return null
        }
      }()), cljs.core.str(cljs.core.name.call(null, obj))].join(""))
    }else {
      if("\ufdd0'else") {
        return cljs.core.list.call(null, cljs.core.truth_("\ufdd0'readably".call(null, opts)) ? goog.string.quote.call(null, obj) : obj)
      }else {
        return null
      }
    }
  }
};
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  var pr_pair__6675 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__6675, "{", ", ", "}", opts, coll)
};
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#{", " ", "}", opts, coll)
};
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.IPrintable["array"] = true;
cljs.core._pr_seq["array"] = function(a, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#<Array [", ", ", "]>", opts, a)
};
cljs.core.IPrintable["function"] = true;
cljs.core._pr_seq["function"] = function(this$) {
  return cljs.core.list.call(null, "#<", [cljs.core.str(this$)].join(""), ">")
};
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.list.call(null, "()")
};
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  var pr_pair__6676 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__6676, "{", ", ", "}", opts, coll)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.Atom = function(state, meta, validator, watches) {
  this.state = state;
  this.meta = meta;
  this.validator = validator;
  this.watches = watches;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 1345404928
};
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.Atom")
};
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = function(this$) {
  var this__6677 = this;
  return goog.getUid.call(null, this$)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = function(this$, oldval, newval) {
  var this__6678 = this;
  var G__6679__6680 = cljs.core.seq.call(null, this__6678.watches);
  if(cljs.core.truth_(G__6679__6680)) {
    var G__6682__6684 = cljs.core.first.call(null, G__6679__6680);
    var vec__6683__6685 = G__6682__6684;
    var key__6686 = cljs.core.nth.call(null, vec__6683__6685, 0, null);
    var f__6687 = cljs.core.nth.call(null, vec__6683__6685, 1, null);
    var G__6679__6688 = G__6679__6680;
    var G__6682__6689 = G__6682__6684;
    var G__6679__6690 = G__6679__6688;
    while(true) {
      var vec__6691__6692 = G__6682__6689;
      var key__6693 = cljs.core.nth.call(null, vec__6691__6692, 0, null);
      var f__6694 = cljs.core.nth.call(null, vec__6691__6692, 1, null);
      var G__6679__6695 = G__6679__6690;
      f__6694.call(null, key__6693, this$, oldval, newval);
      var temp__3974__auto____6696 = cljs.core.next.call(null, G__6679__6695);
      if(cljs.core.truth_(temp__3974__auto____6696)) {
        var G__6679__6697 = temp__3974__auto____6696;
        var G__6704 = cljs.core.first.call(null, G__6679__6697);
        var G__6705 = G__6679__6697;
        G__6682__6689 = G__6704;
        G__6679__6690 = G__6705;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = function(this$, key, f) {
  var this__6698 = this;
  return this$.watches = cljs.core.assoc.call(null, this__6698.watches, key, f)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = function(this$, key) {
  var this__6699 = this;
  return this$.watches = cljs.core.dissoc.call(null, this__6699.watches, key)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, opts) {
  var this__6700 = this;
  return cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray(["#<Atom: "]), cljs.core._pr_seq.call(null, this__6700.state, opts), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = function(_) {
  var this__6701 = this;
  return this__6701.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = function(_) {
  var this__6702 = this;
  return this__6702.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(o, other) {
  var this__6703 = this;
  return o === other
};
cljs.core.Atom;
cljs.core.atom = function() {
  var atom = null;
  var atom__1 = function(x) {
    return new cljs.core.Atom(x, null, null, null)
  };
  var atom__2 = function() {
    var G__6712__delegate = function(x, p__6706) {
      var map__6707__6708 = p__6706;
      var map__6707__6709 = cljs.core.seq_QMARK_.call(null, map__6707__6708) ? cljs.core.apply.call(null, cljs.core.hash_map, map__6707__6708) : map__6707__6708;
      var validator__6710 = cljs.core.get.call(null, map__6707__6709, "\ufdd0'validator");
      var meta__6711 = cljs.core.get.call(null, map__6707__6709, "\ufdd0'meta");
      return new cljs.core.Atom(x, meta__6711, validator__6710, null)
    };
    var G__6712 = function(x, var_args) {
      var p__6706 = null;
      if(goog.isDef(var_args)) {
        p__6706 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__6712__delegate.call(this, x, p__6706)
    };
    G__6712.cljs$lang$maxFixedArity = 1;
    G__6712.cljs$lang$applyTo = function(arglist__6713) {
      var x = cljs.core.first(arglist__6713);
      var p__6706 = cljs.core.rest(arglist__6713);
      return G__6712__delegate(x, p__6706)
    };
    G__6712.cljs$lang$arity$variadic = G__6712__delegate;
    return G__6712
  }();
  atom = function(x, var_args) {
    var p__6706 = var_args;
    switch(arguments.length) {
      case 1:
        return atom__1.call(this, x);
      default:
        return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  atom.cljs$lang$maxFixedArity = 1;
  atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
  atom.cljs$lang$arity$1 = atom__1;
  atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
  return atom
}();
cljs.core.reset_BANG_ = function reset_BANG_(a, new_value) {
  var temp__3974__auto____6714 = a.validator;
  if(cljs.core.truth_(temp__3974__auto____6714)) {
    var validate__6715 = temp__3974__auto____6714;
    if(cljs.core.truth_(validate__6715.call(null, new_value))) {
    }else {
      throw new Error([cljs.core.str("Assert failed: "), cljs.core.str("Validator rejected reference state"), cljs.core.str("\n"), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 5917))))].join(""));
    }
  }else {
  }
  var old_value__6716 = a.state;
  a.state = new_value;
  cljs.core._notify_watches.call(null, a, old_value__6716, new_value);
  return new_value
};
cljs.core.swap_BANG_ = function() {
  var swap_BANG_ = null;
  var swap_BANG___2 = function(a, f) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state))
  };
  var swap_BANG___3 = function(a, f, x) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x))
  };
  var swap_BANG___4 = function(a, f, x, y) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y))
  };
  var swap_BANG___5 = function(a, f, x, y, z) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y, z))
  };
  var swap_BANG___6 = function() {
    var G__6717__delegate = function(a, f, x, y, z, more) {
      return cljs.core.reset_BANG_.call(null, a, cljs.core.apply.call(null, f, a.state, x, y, z, more))
    };
    var G__6717 = function(a, f, x, y, z, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__6717__delegate.call(this, a, f, x, y, z, more)
    };
    G__6717.cljs$lang$maxFixedArity = 5;
    G__6717.cljs$lang$applyTo = function(arglist__6718) {
      var a = cljs.core.first(arglist__6718);
      var f = cljs.core.first(cljs.core.next(arglist__6718));
      var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6718)));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6718))));
      var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6718)))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6718)))));
      return G__6717__delegate(a, f, x, y, z, more)
    };
    G__6717.cljs$lang$arity$variadic = G__6717__delegate;
    return G__6717
  }();
  swap_BANG_ = function(a, f, x, y, z, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return swap_BANG___2.call(this, a, f);
      case 3:
        return swap_BANG___3.call(this, a, f, x);
      case 4:
        return swap_BANG___4.call(this, a, f, x, y);
      case 5:
        return swap_BANG___5.call(this, a, f, x, y, z);
      default:
        return swap_BANG___6.cljs$lang$arity$variadic(a, f, x, y, z, cljs.core.array_seq(arguments, 5))
    }
    throw"Invalid arity: " + arguments.length;
  };
  swap_BANG_.cljs$lang$maxFixedArity = 5;
  swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
  swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
  swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
  swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
  swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
  swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
  return swap_BANG_
}();
cljs.core.compare_and_set_BANG_ = function compare_and_set_BANG_(a, oldval, newval) {
  if(cljs.core._EQ_.call(null, a.state, oldval)) {
    cljs.core.reset_BANG_.call(null, a, newval);
    return true
  }else {
    return false
  }
};
cljs.core.deref = function deref(o) {
  return cljs.core._deref.call(null, o)
};
cljs.core.set_validator_BANG_ = function set_validator_BANG_(iref, val) {
  return iref.validator = val
};
cljs.core.get_validator = function get_validator(iref) {
  return iref.validator
};
cljs.core.alter_meta_BANG_ = function() {
  var alter_meta_BANG___delegate = function(iref, f, args) {
    return iref.meta = cljs.core.apply.call(null, f, iref.meta, args)
  };
  var alter_meta_BANG_ = function(iref, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return alter_meta_BANG___delegate.call(this, iref, f, args)
  };
  alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
  alter_meta_BANG_.cljs$lang$applyTo = function(arglist__6719) {
    var iref = cljs.core.first(arglist__6719);
    var f = cljs.core.first(cljs.core.next(arglist__6719));
    var args = cljs.core.rest(cljs.core.next(arglist__6719));
    return alter_meta_BANG___delegate(iref, f, args)
  };
  alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
  return alter_meta_BANG_
}();
cljs.core.reset_meta_BANG_ = function reset_meta_BANG_(iref, m) {
  return iref.meta = m
};
cljs.core.add_watch = function add_watch(iref, key, f) {
  return cljs.core._add_watch.call(null, iref, key, f)
};
cljs.core.remove_watch = function remove_watch(iref, key) {
  return cljs.core._remove_watch.call(null, iref, key)
};
cljs.core.gensym_counter = null;
cljs.core.gensym = function() {
  var gensym = null;
  var gensym__0 = function() {
    return gensym.call(null, "G__")
  };
  var gensym__1 = function(prefix_string) {
    if(cljs.core.gensym_counter == null) {
      cljs.core.gensym_counter = cljs.core.atom.call(null, 0)
    }else {
    }
    return cljs.core.symbol.call(null, [cljs.core.str(prefix_string), cljs.core.str(cljs.core.swap_BANG_.call(null, cljs.core.gensym_counter, cljs.core.inc))].join(""))
  };
  gensym = function(prefix_string) {
    switch(arguments.length) {
      case 0:
        return gensym__0.call(this);
      case 1:
        return gensym__1.call(this, prefix_string)
    }
    throw"Invalid arity: " + arguments.length;
  };
  gensym.cljs$lang$arity$0 = gensym__0;
  gensym.cljs$lang$arity$1 = gensym__1;
  return gensym
}();
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
cljs.core.Delay = function(state, f) {
  this.state = state;
  this.f = f;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 536887296
};
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.Delay")
};
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = function(d) {
  var this__6720 = this;
  return"\ufdd0'done".call(null, cljs.core.deref.call(null, this__6720.state))
};
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = function(_) {
  var this__6721 = this;
  return"\ufdd0'value".call(null, cljs.core.swap_BANG_.call(null, this__6721.state, function(p__6722) {
    var curr_state__6723 = p__6722;
    var curr_state__6724 = cljs.core.seq_QMARK_.call(null, curr_state__6723) ? cljs.core.apply.call(null, cljs.core.hash_map, curr_state__6723) : curr_state__6723;
    var done__6725 = cljs.core.get.call(null, curr_state__6724, "\ufdd0'done");
    if(cljs.core.truth_(done__6725)) {
      return curr_state__6724
    }else {
      return cljs.core.ObjMap.fromObject(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":true, "\ufdd0'value":this__6721.f.call(null)})
    }
  }))
};
cljs.core.Delay;
cljs.core.delay_QMARK_ = function delay_QMARK_(x) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.Delay, x)
};
cljs.core.force = function force(x) {
  if(cljs.core.delay_QMARK_.call(null, x)) {
    return cljs.core.deref.call(null, x)
  }else {
    return x
  }
};
cljs.core.realized_QMARK_ = function realized_QMARK_(d) {
  return cljs.core._realized_QMARK_.call(null, d)
};
cljs.core.js__GT_clj = function() {
  var js__GT_clj__delegate = function(x, options) {
    var map__6726__6727 = options;
    var map__6726__6728 = cljs.core.seq_QMARK_.call(null, map__6726__6727) ? cljs.core.apply.call(null, cljs.core.hash_map, map__6726__6727) : map__6726__6727;
    var keywordize_keys__6729 = cljs.core.get.call(null, map__6726__6728, "\ufdd0'keywordize-keys");
    var keyfn__6730 = cljs.core.truth_(keywordize_keys__6729) ? cljs.core.keyword : cljs.core.str;
    var f__6736 = function thisfn(x) {
      if(cljs.core.seq_QMARK_.call(null, x)) {
        return cljs.core.doall.call(null, cljs.core.map.call(null, thisfn, x))
      }else {
        if(cljs.core.coll_QMARK_.call(null, x)) {
          return cljs.core.into.call(null, cljs.core.empty.call(null, x), cljs.core.map.call(null, thisfn, x))
        }else {
          if(cljs.core.truth_(goog.isArray.call(null, x))) {
            return cljs.core.vec.call(null, cljs.core.map.call(null, thisfn, x))
          }else {
            if(cljs.core.type.call(null, x) === Object) {
              return cljs.core.into.call(null, cljs.core.ObjMap.fromObject([], {}), function() {
                var iter__625__auto____6735 = function iter__6731(s__6732) {
                  return new cljs.core.LazySeq(null, false, function() {
                    var s__6732__6733 = s__6732;
                    while(true) {
                      if(cljs.core.truth_(cljs.core.seq.call(null, s__6732__6733))) {
                        var k__6734 = cljs.core.first.call(null, s__6732__6733);
                        return cljs.core.cons.call(null, cljs.core.PersistentVector.fromArray([keyfn__6730.call(null, k__6734), thisfn.call(null, x[k__6734])]), iter__6731.call(null, cljs.core.rest.call(null, s__6732__6733)))
                      }else {
                        return null
                      }
                      break
                    }
                  })
                };
                return iter__625__auto____6735.call(null, cljs.core.js_keys.call(null, x))
              }())
            }else {
              if("\ufdd0'else") {
                return x
              }else {
                return null
              }
            }
          }
        }
      }
    };
    return f__6736.call(null, x)
  };
  var js__GT_clj = function(x, var_args) {
    var options = null;
    if(goog.isDef(var_args)) {
      options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return js__GT_clj__delegate.call(this, x, options)
  };
  js__GT_clj.cljs$lang$maxFixedArity = 1;
  js__GT_clj.cljs$lang$applyTo = function(arglist__6737) {
    var x = cljs.core.first(arglist__6737);
    var options = cljs.core.rest(arglist__6737);
    return js__GT_clj__delegate(x, options)
  };
  js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
  return js__GT_clj
}();
cljs.core.memoize = function memoize(f) {
  var mem__6738 = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
  return function() {
    var G__6742__delegate = function(args) {
      var temp__3971__auto____6739 = cljs.core.get.call(null, cljs.core.deref.call(null, mem__6738), args);
      if(cljs.core.truth_(temp__3971__auto____6739)) {
        var v__6740 = temp__3971__auto____6739;
        return v__6740
      }else {
        var ret__6741 = cljs.core.apply.call(null, f, args);
        cljs.core.swap_BANG_.call(null, mem__6738, cljs.core.assoc, args, ret__6741);
        return ret__6741
      }
    };
    var G__6742 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__6742__delegate.call(this, args)
    };
    G__6742.cljs$lang$maxFixedArity = 0;
    G__6742.cljs$lang$applyTo = function(arglist__6743) {
      var args = cljs.core.seq(arglist__6743);
      return G__6742__delegate(args)
    };
    G__6742.cljs$lang$arity$variadic = G__6742__delegate;
    return G__6742
  }()
};
cljs.core.trampoline = function() {
  var trampoline = null;
  var trampoline__1 = function(f) {
    while(true) {
      var ret__6744 = f.call(null);
      if(cljs.core.fn_QMARK_.call(null, ret__6744)) {
        var G__6745 = ret__6744;
        f = G__6745;
        continue
      }else {
        return ret__6744
      }
      break
    }
  };
  var trampoline__2 = function() {
    var G__6746__delegate = function(f, args) {
      return trampoline.call(null, function() {
        return cljs.core.apply.call(null, f, args)
      })
    };
    var G__6746 = function(f, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__6746__delegate.call(this, f, args)
    };
    G__6746.cljs$lang$maxFixedArity = 1;
    G__6746.cljs$lang$applyTo = function(arglist__6747) {
      var f = cljs.core.first(arglist__6747);
      var args = cljs.core.rest(arglist__6747);
      return G__6746__delegate(f, args)
    };
    G__6746.cljs$lang$arity$variadic = G__6746__delegate;
    return G__6746
  }();
  trampoline = function(f, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 1:
        return trampoline__1.call(this, f);
      default:
        return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  trampoline.cljs$lang$maxFixedArity = 1;
  trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
  trampoline.cljs$lang$arity$1 = trampoline__1;
  trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
  return trampoline
}();
cljs.core.rand = function() {
  var rand = null;
  var rand__0 = function() {
    return rand.call(null, 1)
  };
  var rand__1 = function(n) {
    return Math.random() * n
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__0.call(this);
      case 1:
        return rand__1.call(this, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  rand.cljs$lang$arity$0 = rand__0;
  rand.cljs$lang$arity$1 = rand__1;
  return rand
}();
cljs.core.rand_int = function rand_int(n) {
  return Math.floor(Math.random() * n)
};
cljs.core.rand_nth = function rand_nth(coll) {
  return cljs.core.nth.call(null, coll, cljs.core.rand_int.call(null, cljs.core.count.call(null, coll)))
};
cljs.core.group_by = function group_by(f, coll) {
  return cljs.core.reduce.call(null, function(ret, x) {
    var k__6748 = f.call(null, x);
    return cljs.core.assoc.call(null, ret, k__6748, cljs.core.conj.call(null, cljs.core.get.call(null, ret, k__6748, cljs.core.PersistentVector.fromArray([])), x))
  }, cljs.core.ObjMap.fromObject([], {}), coll)
};
cljs.core.make_hierarchy = function make_hierarchy() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'descendants":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'ancestors":cljs.core.ObjMap.fromObject([], {})})
};
cljs.core.global_hierarchy = cljs.core.atom.call(null, cljs.core.make_hierarchy.call(null));
cljs.core.isa_QMARK_ = function() {
  var isa_QMARK_ = null;
  var isa_QMARK___2 = function(child, parent) {
    return isa_QMARK_.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), child, parent)
  };
  var isa_QMARK___3 = function(h, child, parent) {
    var or__3824__auto____6749 = cljs.core._EQ_.call(null, child, parent);
    if(or__3824__auto____6749) {
      return or__3824__auto____6749
    }else {
      var or__3824__auto____6750 = cljs.core.contains_QMARK_.call(null, "\ufdd0'ancestors".call(null, h).call(null, child), parent);
      if(or__3824__auto____6750) {
        return or__3824__auto____6750
      }else {
        var and__3822__auto____6751 = cljs.core.vector_QMARK_.call(null, parent);
        if(and__3822__auto____6751) {
          var and__3822__auto____6752 = cljs.core.vector_QMARK_.call(null, child);
          if(and__3822__auto____6752) {
            var and__3822__auto____6753 = cljs.core.count.call(null, parent) === cljs.core.count.call(null, child);
            if(and__3822__auto____6753) {
              var ret__6754 = true;
              var i__6755 = 0;
              while(true) {
                if(function() {
                  var or__3824__auto____6756 = cljs.core.not.call(null, ret__6754);
                  if(or__3824__auto____6756) {
                    return or__3824__auto____6756
                  }else {
                    return i__6755 === cljs.core.count.call(null, parent)
                  }
                }()) {
                  return ret__6754
                }else {
                  var G__6757 = isa_QMARK_.call(null, h, child.call(null, i__6755), parent.call(null, i__6755));
                  var G__6758 = i__6755 + 1;
                  ret__6754 = G__6757;
                  i__6755 = G__6758;
                  continue
                }
                break
              }
            }else {
              return and__3822__auto____6753
            }
          }else {
            return and__3822__auto____6752
          }
        }else {
          return and__3822__auto____6751
        }
      }
    }
  };
  isa_QMARK_ = function(h, child, parent) {
    switch(arguments.length) {
      case 2:
        return isa_QMARK___2.call(this, h, child);
      case 3:
        return isa_QMARK___3.call(this, h, child, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
  isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
  return isa_QMARK_
}();
cljs.core.parents = function() {
  var parents = null;
  var parents__1 = function(tag) {
    return parents.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var parents__2 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'parents".call(null, h), tag))
  };
  parents = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return parents__1.call(this, h);
      case 2:
        return parents__2.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  parents.cljs$lang$arity$1 = parents__1;
  parents.cljs$lang$arity$2 = parents__2;
  return parents
}();
cljs.core.ancestors = function() {
  var ancestors = null;
  var ancestors__1 = function(tag) {
    return ancestors.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var ancestors__2 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'ancestors".call(null, h), tag))
  };
  ancestors = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return ancestors__1.call(this, h);
      case 2:
        return ancestors__2.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  ancestors.cljs$lang$arity$1 = ancestors__1;
  ancestors.cljs$lang$arity$2 = ancestors__2;
  return ancestors
}();
cljs.core.descendants = function() {
  var descendants = null;
  var descendants__1 = function(tag) {
    return descendants.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var descendants__2 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'descendants".call(null, h), tag))
  };
  descendants = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return descendants__1.call(this, h);
      case 2:
        return descendants__2.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  descendants.cljs$lang$arity$1 = descendants__1;
  descendants.cljs$lang$arity$2 = descendants__2;
  return descendants
}();
cljs.core.derive = function() {
  var derive = null;
  var derive__2 = function(tag, parent) {
    if(cljs.core.truth_(cljs.core.namespace.call(null, parent))) {
    }else {
      throw new Error([cljs.core.str("Assert failed: "), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 6201))))].join(""));
    }
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, derive, tag, parent);
    return null
  };
  var derive__3 = function(h, tag, parent) {
    if(cljs.core.not_EQ_.call(null, tag, parent)) {
    }else {
      throw new Error([cljs.core.str("Assert failed: "), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 6205))))].join(""));
    }
    var tp__6762 = "\ufdd0'parents".call(null, h);
    var td__6763 = "\ufdd0'descendants".call(null, h);
    var ta__6764 = "\ufdd0'ancestors".call(null, h);
    var tf__6765 = function(m, source, sources, target, targets) {
      return cljs.core.reduce.call(null, function(ret, k) {
        return cljs.core.assoc.call(null, ret, k, cljs.core.reduce.call(null, cljs.core.conj, cljs.core.get.call(null, targets, k, cljs.core.set([])), cljs.core.cons.call(null, target, targets.call(null, target))))
      }, m, cljs.core.cons.call(null, source, sources.call(null, source)))
    };
    var or__3824__auto____6766 = cljs.core.contains_QMARK_.call(null, tp__6762.call(null, tag), parent) ? null : function() {
      if(cljs.core.contains_QMARK_.call(null, ta__6764.call(null, tag), parent)) {
        throw new Error([cljs.core.str(tag), cljs.core.str("already has"), cljs.core.str(parent), cljs.core.str("as ancestor")].join(""));
      }else {
      }
      if(cljs.core.contains_QMARK_.call(null, ta__6764.call(null, parent), tag)) {
        throw new Error([cljs.core.str("Cyclic derivation:"), cljs.core.str(parent), cljs.core.str("has"), cljs.core.str(tag), cljs.core.str("as ancestor")].join(""));
      }else {
      }
      return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.call(null, "\ufdd0'parents".call(null, h), tag, cljs.core.conj.call(null, cljs.core.get.call(null, tp__6762, tag, cljs.core.set([])), parent)), "\ufdd0'ancestors":tf__6765.call(null, "\ufdd0'ancestors".call(null, h), tag, td__6763, parent, ta__6764), "\ufdd0'descendants":tf__6765.call(null, "\ufdd0'descendants".call(null, h), parent, ta__6764, tag, td__6763)})
    }();
    if(cljs.core.truth_(or__3824__auto____6766)) {
      return or__3824__auto____6766
    }else {
      return h
    }
  };
  derive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return derive__2.call(this, h, tag);
      case 3:
        return derive__3.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  derive.cljs$lang$arity$2 = derive__2;
  derive.cljs$lang$arity$3 = derive__3;
  return derive
}();
cljs.core.underive = function() {
  var underive = null;
  var underive__2 = function(tag, parent) {
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, underive, tag, parent);
    return null
  };
  var underive__3 = function(h, tag, parent) {
    var parentMap__6767 = "\ufdd0'parents".call(null, h);
    var childsParents__6768 = cljs.core.truth_(parentMap__6767.call(null, tag)) ? cljs.core.disj.call(null, parentMap__6767.call(null, tag), parent) : cljs.core.set([]);
    var newParents__6769 = cljs.core.truth_(cljs.core.not_empty.call(null, childsParents__6768)) ? cljs.core.assoc.call(null, parentMap__6767, tag, childsParents__6768) : cljs.core.dissoc.call(null, parentMap__6767, tag);
    var deriv_seq__6770 = cljs.core.flatten.call(null, cljs.core.map.call(null, function(p1__6759_SHARP_) {
      return cljs.core.cons.call(null, cljs.core.first.call(null, p1__6759_SHARP_), cljs.core.interpose.call(null, cljs.core.first.call(null, p1__6759_SHARP_), cljs.core.second.call(null, p1__6759_SHARP_)))
    }, cljs.core.seq.call(null, newParents__6769)));
    if(cljs.core.contains_QMARK_.call(null, parentMap__6767.call(null, tag), parent)) {
      return cljs.core.reduce.call(null, function(p1__6760_SHARP_, p2__6761_SHARP_) {
        return cljs.core.apply.call(null, cljs.core.derive, p1__6760_SHARP_, p2__6761_SHARP_)
      }, cljs.core.make_hierarchy.call(null), cljs.core.partition.call(null, 2, deriv_seq__6770))
    }else {
      return h
    }
  };
  underive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return underive__2.call(this, h, tag);
      case 3:
        return underive__3.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  underive.cljs$lang$arity$2 = underive__2;
  underive.cljs$lang$arity$3 = underive__3;
  return underive
}();
cljs.core.reset_cache = function reset_cache(method_cache, method_table, cached_hierarchy, hierarchy) {
  cljs.core.swap_BANG_.call(null, method_cache, function(_) {
    return cljs.core.deref.call(null, method_table)
  });
  return cljs.core.swap_BANG_.call(null, cached_hierarchy, function(_) {
    return cljs.core.deref.call(null, hierarchy)
  })
};
cljs.core.prefers_STAR_ = function prefers_STAR_(x, y, prefer_table) {
  var xprefs__6771 = cljs.core.deref.call(null, prefer_table).call(null, x);
  var or__3824__auto____6773 = cljs.core.truth_(function() {
    var and__3822__auto____6772 = xprefs__6771;
    if(cljs.core.truth_(and__3822__auto____6772)) {
      return xprefs__6771.call(null, y)
    }else {
      return and__3822__auto____6772
    }
  }()) ? true : null;
  if(cljs.core.truth_(or__3824__auto____6773)) {
    return or__3824__auto____6773
  }else {
    var or__3824__auto____6775 = function() {
      var ps__6774 = cljs.core.parents.call(null, y);
      while(true) {
        if(cljs.core.count.call(null, ps__6774) > 0) {
          if(cljs.core.truth_(prefers_STAR_.call(null, x, cljs.core.first.call(null, ps__6774), prefer_table))) {
          }else {
          }
          var G__6778 = cljs.core.rest.call(null, ps__6774);
          ps__6774 = G__6778;
          continue
        }else {
          return null
        }
        break
      }
    }();
    if(cljs.core.truth_(or__3824__auto____6775)) {
      return or__3824__auto____6775
    }else {
      var or__3824__auto____6777 = function() {
        var ps__6776 = cljs.core.parents.call(null, x);
        while(true) {
          if(cljs.core.count.call(null, ps__6776) > 0) {
            if(cljs.core.truth_(prefers_STAR_.call(null, cljs.core.first.call(null, ps__6776), y, prefer_table))) {
            }else {
            }
            var G__6779 = cljs.core.rest.call(null, ps__6776);
            ps__6776 = G__6779;
            continue
          }else {
            return null
          }
          break
        }
      }();
      if(cljs.core.truth_(or__3824__auto____6777)) {
        return or__3824__auto____6777
      }else {
        return false
      }
    }
  }
};
cljs.core.dominates = function dominates(x, y, prefer_table) {
  var or__3824__auto____6780 = cljs.core.prefers_STAR_.call(null, x, y, prefer_table);
  if(cljs.core.truth_(or__3824__auto____6780)) {
    return or__3824__auto____6780
  }else {
    return cljs.core.isa_QMARK_.call(null, x, y)
  }
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  var best_entry__6789 = cljs.core.reduce.call(null, function(be, p__6781) {
    var vec__6782__6783 = p__6781;
    var k__6784 = cljs.core.nth.call(null, vec__6782__6783, 0, null);
    var ___6785 = cljs.core.nth.call(null, vec__6782__6783, 1, null);
    var e__6786 = vec__6782__6783;
    if(cljs.core.isa_QMARK_.call(null, dispatch_val, k__6784)) {
      var be2__6788 = cljs.core.truth_(function() {
        var or__3824__auto____6787 = be == null;
        if(or__3824__auto____6787) {
          return or__3824__auto____6787
        }else {
          return cljs.core.dominates.call(null, k__6784, cljs.core.first.call(null, be), prefer_table)
        }
      }()) ? e__6786 : be;
      if(cljs.core.truth_(cljs.core.dominates.call(null, cljs.core.first.call(null, be2__6788), k__6784, prefer_table))) {
      }else {
        throw new Error([cljs.core.str("Multiple methods in multimethod '"), cljs.core.str(name), cljs.core.str("' match dispatch value: "), cljs.core.str(dispatch_val), cljs.core.str(" -> "), cljs.core.str(k__6784), cljs.core.str(" and "), cljs.core.str(cljs.core.first.call(null, be2__6788)), cljs.core.str(", and neither is preferred")].join(""));
      }
      return be2__6788
    }else {
      return be
    }
  }, null, cljs.core.deref.call(null, method_table));
  if(cljs.core.truth_(best_entry__6789)) {
    if(cljs.core._EQ_.call(null, cljs.core.deref.call(null, cached_hierarchy), cljs.core.deref.call(null, hierarchy))) {
      cljs.core.swap_BANG_.call(null, method_cache, cljs.core.assoc, dispatch_val, cljs.core.second.call(null, best_entry__6789));
      return cljs.core.second.call(null, best_entry__6789)
    }else {
      cljs.core.reset_cache.call(null, method_cache, method_table, cached_hierarchy, hierarchy);
      return find_and_cache_best_method.call(null, name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy)
    }
  }else {
    return null
  }
};
void 0;
cljs.core.IMultiFn = {};
cljs.core._reset = function _reset(mf) {
  if(function() {
    var and__3822__auto____6790 = mf;
    if(and__3822__auto____6790) {
      return mf.cljs$core$IMultiFn$_reset$arity$1
    }else {
      return and__3822__auto____6790
    }
  }()) {
    return mf.cljs$core$IMultiFn$_reset$arity$1(mf)
  }else {
    return function() {
      var or__3824__auto____6791 = cljs.core._reset[goog.typeOf.call(null, mf)];
      if(or__3824__auto____6791) {
        return or__3824__auto____6791
      }else {
        var or__3824__auto____6792 = cljs.core._reset["_"];
        if(or__3824__auto____6792) {
          return or__3824__auto____6792
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-reset", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._add_method = function _add_method(mf, dispatch_val, method) {
  if(function() {
    var and__3822__auto____6793 = mf;
    if(and__3822__auto____6793) {
      return mf.cljs$core$IMultiFn$_add_method$arity$3
    }else {
      return and__3822__auto____6793
    }
  }()) {
    return mf.cljs$core$IMultiFn$_add_method$arity$3(mf, dispatch_val, method)
  }else {
    return function() {
      var or__3824__auto____6794 = cljs.core._add_method[goog.typeOf.call(null, mf)];
      if(or__3824__auto____6794) {
        return or__3824__auto____6794
      }else {
        var or__3824__auto____6795 = cljs.core._add_method["_"];
        if(or__3824__auto____6795) {
          return or__3824__auto____6795
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-add-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, method)
  }
};
cljs.core._remove_method = function _remove_method(mf, dispatch_val) {
  if(function() {
    var and__3822__auto____6796 = mf;
    if(and__3822__auto____6796) {
      return mf.cljs$core$IMultiFn$_remove_method$arity$2
    }else {
      return and__3822__auto____6796
    }
  }()) {
    return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf, dispatch_val)
  }else {
    return function() {
      var or__3824__auto____6797 = cljs.core._remove_method[goog.typeOf.call(null, mf)];
      if(or__3824__auto____6797) {
        return or__3824__auto____6797
      }else {
        var or__3824__auto____6798 = cljs.core._remove_method["_"];
        if(or__3824__auto____6798) {
          return or__3824__auto____6798
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-remove-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._prefer_method = function _prefer_method(mf, dispatch_val, dispatch_val_y) {
  if(function() {
    var and__3822__auto____6799 = mf;
    if(and__3822__auto____6799) {
      return mf.cljs$core$IMultiFn$_prefer_method$arity$3
    }else {
      return and__3822__auto____6799
    }
  }()) {
    return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf, dispatch_val, dispatch_val_y)
  }else {
    return function() {
      var or__3824__auto____6800 = cljs.core._prefer_method[goog.typeOf.call(null, mf)];
      if(or__3824__auto____6800) {
        return or__3824__auto____6800
      }else {
        var or__3824__auto____6801 = cljs.core._prefer_method["_"];
        if(or__3824__auto____6801) {
          return or__3824__auto____6801
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefer-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, dispatch_val_y)
  }
};
cljs.core._get_method = function _get_method(mf, dispatch_val) {
  if(function() {
    var and__3822__auto____6802 = mf;
    if(and__3822__auto____6802) {
      return mf.cljs$core$IMultiFn$_get_method$arity$2
    }else {
      return and__3822__auto____6802
    }
  }()) {
    return mf.cljs$core$IMultiFn$_get_method$arity$2(mf, dispatch_val)
  }else {
    return function() {
      var or__3824__auto____6803 = cljs.core._get_method[goog.typeOf.call(null, mf)];
      if(or__3824__auto____6803) {
        return or__3824__auto____6803
      }else {
        var or__3824__auto____6804 = cljs.core._get_method["_"];
        if(or__3824__auto____6804) {
          return or__3824__auto____6804
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-get-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._methods = function _methods(mf) {
  if(function() {
    var and__3822__auto____6805 = mf;
    if(and__3822__auto____6805) {
      return mf.cljs$core$IMultiFn$_methods$arity$1
    }else {
      return and__3822__auto____6805
    }
  }()) {
    return mf.cljs$core$IMultiFn$_methods$arity$1(mf)
  }else {
    return function() {
      var or__3824__auto____6806 = cljs.core._methods[goog.typeOf.call(null, mf)];
      if(or__3824__auto____6806) {
        return or__3824__auto____6806
      }else {
        var or__3824__auto____6807 = cljs.core._methods["_"];
        if(or__3824__auto____6807) {
          return or__3824__auto____6807
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-methods", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._prefers = function _prefers(mf) {
  if(function() {
    var and__3822__auto____6808 = mf;
    if(and__3822__auto____6808) {
      return mf.cljs$core$IMultiFn$_prefers$arity$1
    }else {
      return and__3822__auto____6808
    }
  }()) {
    return mf.cljs$core$IMultiFn$_prefers$arity$1(mf)
  }else {
    return function() {
      var or__3824__auto____6809 = cljs.core._prefers[goog.typeOf.call(null, mf)];
      if(or__3824__auto____6809) {
        return or__3824__auto____6809
      }else {
        var or__3824__auto____6810 = cljs.core._prefers["_"];
        if(or__3824__auto____6810) {
          return or__3824__auto____6810
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefers", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._dispatch = function _dispatch(mf, args) {
  if(function() {
    var and__3822__auto____6811 = mf;
    if(and__3822__auto____6811) {
      return mf.cljs$core$IMultiFn$_dispatch$arity$2
    }else {
      return and__3822__auto____6811
    }
  }()) {
    return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf, args)
  }else {
    return function() {
      var or__3824__auto____6812 = cljs.core._dispatch[goog.typeOf.call(null, mf)];
      if(or__3824__auto____6812) {
        return or__3824__auto____6812
      }else {
        var or__3824__auto____6813 = cljs.core._dispatch["_"];
        if(or__3824__auto____6813) {
          return or__3824__auto____6813
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-dispatch", mf);
        }
      }
    }().call(null, mf, args)
  }
};
void 0;
cljs.core.do_dispatch = function do_dispatch(mf, dispatch_fn, args) {
  var dispatch_val__6814 = cljs.core.apply.call(null, dispatch_fn, args);
  var target_fn__6815 = cljs.core._get_method.call(null, mf, dispatch_val__6814);
  if(cljs.core.truth_(target_fn__6815)) {
  }else {
    throw new Error([cljs.core.str("No method in multimethod '"), cljs.core.str(cljs.core.name), cljs.core.str("' for dispatch value: "), cljs.core.str(dispatch_val__6814)].join(""));
  }
  return cljs.core.apply.call(null, target_fn__6815, args)
};
cljs.core.MultiFn = function(name, dispatch_fn, default_dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  this.name = name;
  this.dispatch_fn = dispatch_fn;
  this.default_dispatch_val = default_dispatch_val;
  this.hierarchy = hierarchy;
  this.method_table = method_table;
  this.prefer_table = prefer_table;
  this.method_cache = method_cache;
  this.cached_hierarchy = cached_hierarchy;
  this.cljs$lang$protocol_mask$partition0$ = 2097152;
  this.cljs$lang$protocol_mask$partition1$ = 32
};
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = function(this__454__auto__) {
  return cljs.core.list.call(null, "cljs.core.MultiFn")
};
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = function(this$) {
  var this__6816 = this;
  return goog.getUid.call(null, this$)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = function(mf) {
  var this__6817 = this;
  cljs.core.swap_BANG_.call(null, this__6817.method_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__6817.method_cache, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__6817.prefer_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__6817.cached_hierarchy, function(mf) {
    return null
  });
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = function(mf, dispatch_val, method) {
  var this__6818 = this;
  cljs.core.swap_BANG_.call(null, this__6818.method_table, cljs.core.assoc, dispatch_val, method);
  cljs.core.reset_cache.call(null, this__6818.method_cache, this__6818.method_table, this__6818.cached_hierarchy, this__6818.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = function(mf, dispatch_val) {
  var this__6819 = this;
  cljs.core.swap_BANG_.call(null, this__6819.method_table, cljs.core.dissoc, dispatch_val);
  cljs.core.reset_cache.call(null, this__6819.method_cache, this__6819.method_table, this__6819.cached_hierarchy, this__6819.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = function(mf, dispatch_val) {
  var this__6820 = this;
  if(cljs.core._EQ_.call(null, cljs.core.deref.call(null, this__6820.cached_hierarchy), cljs.core.deref.call(null, this__6820.hierarchy))) {
  }else {
    cljs.core.reset_cache.call(null, this__6820.method_cache, this__6820.method_table, this__6820.cached_hierarchy, this__6820.hierarchy)
  }
  var temp__3971__auto____6821 = cljs.core.deref.call(null, this__6820.method_cache).call(null, dispatch_val);
  if(cljs.core.truth_(temp__3971__auto____6821)) {
    var target_fn__6822 = temp__3971__auto____6821;
    return target_fn__6822
  }else {
    var temp__3971__auto____6823 = cljs.core.find_and_cache_best_method.call(null, this__6820.name, dispatch_val, this__6820.hierarchy, this__6820.method_table, this__6820.prefer_table, this__6820.method_cache, this__6820.cached_hierarchy);
    if(cljs.core.truth_(temp__3971__auto____6823)) {
      var target_fn__6824 = temp__3971__auto____6823;
      return target_fn__6824
    }else {
      return cljs.core.deref.call(null, this__6820.method_table).call(null, this__6820.default_dispatch_val)
    }
  }
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = function(mf, dispatch_val_x, dispatch_val_y) {
  var this__6825 = this;
  if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null, dispatch_val_x, dispatch_val_y, this__6825.prefer_table))) {
    throw new Error([cljs.core.str("Preference conflict in multimethod '"), cljs.core.str(this__6825.name), cljs.core.str("': "), cljs.core.str(dispatch_val_y), cljs.core.str(" is already preferred to "), cljs.core.str(dispatch_val_x)].join(""));
  }else {
  }
  cljs.core.swap_BANG_.call(null, this__6825.prefer_table, function(old) {
    return cljs.core.assoc.call(null, old, dispatch_val_x, cljs.core.conj.call(null, cljs.core.get.call(null, old, dispatch_val_x, cljs.core.set([])), dispatch_val_y))
  });
  return cljs.core.reset_cache.call(null, this__6825.method_cache, this__6825.method_table, this__6825.cached_hierarchy, this__6825.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = function(mf) {
  var this__6826 = this;
  return cljs.core.deref.call(null, this__6826.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = function(mf) {
  var this__6827 = this;
  return cljs.core.deref.call(null, this__6827.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = function(mf, args) {
  var this__6828 = this;
  return cljs.core.do_dispatch.call(null, mf, this__6828.dispatch_fn, args)
};
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = function() {
  var G__6829__delegate = function(_, args) {
    return cljs.core._dispatch.call(null, this, args)
  };
  var G__6829 = function(_, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return G__6829__delegate.call(this, _, args)
  };
  G__6829.cljs$lang$maxFixedArity = 1;
  G__6829.cljs$lang$applyTo = function(arglist__6830) {
    var _ = cljs.core.first(arglist__6830);
    var args = cljs.core.rest(arglist__6830);
    return G__6829__delegate(_, args)
  };
  G__6829.cljs$lang$arity$variadic = G__6829__delegate;
  return G__6829
}();
cljs.core.MultiFn.prototype.apply = function(_, args) {
  return cljs.core._dispatch.call(null, this, args)
};
cljs.core.remove_all_methods = function remove_all_methods(multifn) {
  return cljs.core._reset.call(null, multifn)
};
cljs.core.remove_method = function remove_method(multifn, dispatch_val) {
  return cljs.core._remove_method.call(null, multifn, dispatch_val)
};
cljs.core.prefer_method = function prefer_method(multifn, dispatch_val_x, dispatch_val_y) {
  return cljs.core._prefer_method.call(null, multifn, dispatch_val_x, dispatch_val_y)
};
cljs.core.methods$ = function methods$(multifn) {
  return cljs.core._methods.call(null, multifn)
};
cljs.core.get_method = function get_method(multifn, dispatch_val) {
  return cljs.core._get_method.call(null, multifn, dispatch_val)
};
cljs.core.prefers = function prefers(multifn) {
  return cljs.core._prefers.call(null, multifn)
};
goog.provide("goog.userAgent");
goog.require("goog.string");
goog.userAgent.ASSUME_IE = false;
goog.userAgent.ASSUME_GECKO = false;
goog.userAgent.ASSUME_WEBKIT = false;
goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
goog.userAgent.ASSUME_OPERA = false;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
  return goog.global["navigator"] ? goog.global["navigator"].userAgent : null
};
goog.userAgent.getNavigator = function() {
  return goog.global["navigator"]
};
goog.userAgent.init_ = function() {
  goog.userAgent.detectedOpera_ = false;
  goog.userAgent.detectedIe_ = false;
  goog.userAgent.detectedWebkit_ = false;
  goog.userAgent.detectedMobile_ = false;
  goog.userAgent.detectedGecko_ = false;
  var ua;
  if(!goog.userAgent.BROWSER_KNOWN_ && (ua = goog.userAgent.getUserAgentString())) {
    var navigator = goog.userAgent.getNavigator();
    goog.userAgent.detectedOpera_ = ua.indexOf("Opera") == 0;
    goog.userAgent.detectedIe_ = !goog.userAgent.detectedOpera_ && ua.indexOf("MSIE") != -1;
    goog.userAgent.detectedWebkit_ = !goog.userAgent.detectedOpera_ && ua.indexOf("WebKit") != -1;
    goog.userAgent.detectedMobile_ = goog.userAgent.detectedWebkit_ && ua.indexOf("Mobile") != -1;
    goog.userAgent.detectedGecko_ = !goog.userAgent.detectedOpera_ && !goog.userAgent.detectedWebkit_ && navigator.product == "Gecko"
  }
};
if(!goog.userAgent.BROWSER_KNOWN_) {
  goog.userAgent.init_()
}
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.userAgent.detectedOpera_;
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.userAgent.detectedIe_;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.userAgent.detectedGecko_;
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.userAgent.detectedWebkit_;
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.detectedMobile_;
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
  var navigator = goog.userAgent.getNavigator();
  return navigator && navigator.platform || ""
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = false;
goog.userAgent.ASSUME_WINDOWS = false;
goog.userAgent.ASSUME_LINUX = false;
goog.userAgent.ASSUME_X11 = false;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11;
goog.userAgent.initPlatform_ = function() {
  goog.userAgent.detectedMac_ = goog.string.contains(goog.userAgent.PLATFORM, "Mac");
  goog.userAgent.detectedWindows_ = goog.string.contains(goog.userAgent.PLATFORM, "Win");
  goog.userAgent.detectedLinux_ = goog.string.contains(goog.userAgent.PLATFORM, "Linux");
  goog.userAgent.detectedX11_ = !!goog.userAgent.getNavigator() && goog.string.contains(goog.userAgent.getNavigator()["appVersion"] || "", "X11")
};
if(!goog.userAgent.PLATFORM_KNOWN_) {
  goog.userAgent.initPlatform_()
}
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.userAgent.detectedMac_;
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.userAgent.detectedWindows_;
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.detectedLinux_;
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.detectedX11_;
goog.userAgent.determineVersion_ = function() {
  var version = "", re;
  if(goog.userAgent.OPERA && goog.global["opera"]) {
    var operaVersion = goog.global["opera"].version;
    version = typeof operaVersion == "function" ? operaVersion() : operaVersion
  }else {
    if(goog.userAgent.GECKO) {
      re = /rv\:([^\);]+)(\)|;)/
    }else {
      if(goog.userAgent.IE) {
        re = /MSIE\s+([^\);]+)(\)|;)/
      }else {
        if(goog.userAgent.WEBKIT) {
          re = /WebKit\/(\S+)/
        }
      }
    }
    if(re) {
      var arr = re.exec(goog.userAgent.getUserAgentString());
      version = arr ? arr[1] : ""
    }
  }
  if(goog.userAgent.IE) {
    var docMode = goog.userAgent.getDocumentMode_();
    if(docMode > parseFloat(version)) {
      return String(docMode)
    }
  }
  return version
};
goog.userAgent.getDocumentMode_ = function() {
  var doc = goog.global["document"];
  return doc ? doc["documentMode"] : undefined
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(v1, v2) {
  return goog.string.compareVersions(v1, v2)
};
goog.userAgent.isVersionCache_ = {};
goog.userAgent.isVersion = function(version) {
  return goog.userAgent.isVersionCache_[version] || (goog.userAgent.isVersionCache_[version] = goog.string.compareVersions(goog.userAgent.VERSION, version) >= 0)
};
goog.userAgent.isDocumentModeCache_ = {};
goog.userAgent.isDocumentMode = function(documentMode) {
  return goog.userAgent.isDocumentModeCache_[documentMode] || (goog.userAgent.isDocumentModeCache_[documentMode] = goog.userAgent.IE && document.documentMode && document.documentMode >= documentMode)
};
goog.provide("goog.dom.BrowserFeature");
goog.require("goog.userAgent");
goog.dom.BrowserFeature = {CAN_ADD_NAME_OR_TYPE_ATTRIBUTES:!goog.userAgent.IE || goog.userAgent.isDocumentMode(9), CAN_USE_CHILDREN_ATTRIBUTE:!goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isDocumentMode(9) || goog.userAgent.GECKO && goog.userAgent.isVersion("1.9.1"), CAN_USE_INNER_TEXT:goog.userAgent.IE && !goog.userAgent.isVersion("9"), INNER_HTML_NEEDS_SCOPED_ELEMENT:goog.userAgent.IE};
goog.provide("goog.dom.TagName");
goog.dom.TagName = {A:"A", ABBR:"ABBR", ACRONYM:"ACRONYM", ADDRESS:"ADDRESS", APPLET:"APPLET", AREA:"AREA", B:"B", BASE:"BASE", BASEFONT:"BASEFONT", BDO:"BDO", BIG:"BIG", BLOCKQUOTE:"BLOCKQUOTE", BODY:"BODY", BR:"BR", BUTTON:"BUTTON", CANVAS:"CANVAS", CAPTION:"CAPTION", CENTER:"CENTER", CITE:"CITE", CODE:"CODE", COL:"COL", COLGROUP:"COLGROUP", DD:"DD", DEL:"DEL", DFN:"DFN", DIR:"DIR", DIV:"DIV", DL:"DL", DT:"DT", EM:"EM", FIELDSET:"FIELDSET", FONT:"FONT", FORM:"FORM", FRAME:"FRAME", FRAMESET:"FRAMESET", 
H1:"H1", H2:"H2", H3:"H3", H4:"H4", H5:"H5", H6:"H6", HEAD:"HEAD", HR:"HR", HTML:"HTML", I:"I", IFRAME:"IFRAME", IMG:"IMG", INPUT:"INPUT", INS:"INS", ISINDEX:"ISINDEX", KBD:"KBD", LABEL:"LABEL", LEGEND:"LEGEND", LI:"LI", LINK:"LINK", MAP:"MAP", MENU:"MENU", META:"META", NOFRAMES:"NOFRAMES", NOSCRIPT:"NOSCRIPT", OBJECT:"OBJECT", OL:"OL", OPTGROUP:"OPTGROUP", OPTION:"OPTION", P:"P", PARAM:"PARAM", PRE:"PRE", Q:"Q", S:"S", SAMP:"SAMP", SCRIPT:"SCRIPT", SELECT:"SELECT", SMALL:"SMALL", SPAN:"SPAN", STRIKE:"STRIKE", 
STRONG:"STRONG", STYLE:"STYLE", SUB:"SUB", SUP:"SUP", TABLE:"TABLE", TBODY:"TBODY", TD:"TD", TEXTAREA:"TEXTAREA", TFOOT:"TFOOT", TH:"TH", THEAD:"THEAD", TITLE:"TITLE", TR:"TR", TT:"TT", U:"U", UL:"UL", VAR:"VAR"};
goog.provide("goog.dom.classes");
goog.require("goog.array");
goog.dom.classes.set = function(element, className) {
  element.className = className
};
goog.dom.classes.get = function(element) {
  var className = element.className;
  return className && typeof className.split == "function" ? className.split(/\s+/) : []
};
goog.dom.classes.add = function(element, var_args) {
  var classes = goog.dom.classes.get(element);
  var args = goog.array.slice(arguments, 1);
  var b = goog.dom.classes.add_(classes, args);
  element.className = classes.join(" ");
  return b
};
goog.dom.classes.remove = function(element, var_args) {
  var classes = goog.dom.classes.get(element);
  var args = goog.array.slice(arguments, 1);
  var b = goog.dom.classes.remove_(classes, args);
  element.className = classes.join(" ");
  return b
};
goog.dom.classes.add_ = function(classes, args) {
  var rv = 0;
  for(var i = 0;i < args.length;i++) {
    if(!goog.array.contains(classes, args[i])) {
      classes.push(args[i]);
      rv++
    }
  }
  return rv == args.length
};
goog.dom.classes.remove_ = function(classes, args) {
  var rv = 0;
  for(var i = 0;i < classes.length;i++) {
    if(goog.array.contains(args, classes[i])) {
      goog.array.splice(classes, i--, 1);
      rv++
    }
  }
  return rv == args.length
};
goog.dom.classes.swap = function(element, fromClass, toClass) {
  var classes = goog.dom.classes.get(element);
  var removed = false;
  for(var i = 0;i < classes.length;i++) {
    if(classes[i] == fromClass) {
      goog.array.splice(classes, i--, 1);
      removed = true
    }
  }
  if(removed) {
    classes.push(toClass);
    element.className = classes.join(" ")
  }
  return removed
};
goog.dom.classes.addRemove = function(element, classesToRemove, classesToAdd) {
  var classes = goog.dom.classes.get(element);
  if(goog.isString(classesToRemove)) {
    goog.array.remove(classes, classesToRemove)
  }else {
    if(goog.isArray(classesToRemove)) {
      goog.dom.classes.remove_(classes, classesToRemove)
    }
  }
  if(goog.isString(classesToAdd) && !goog.array.contains(classes, classesToAdd)) {
    classes.push(classesToAdd)
  }else {
    if(goog.isArray(classesToAdd)) {
      goog.dom.classes.add_(classes, classesToAdd)
    }
  }
  element.className = classes.join(" ")
};
goog.dom.classes.has = function(element, className) {
  return goog.array.contains(goog.dom.classes.get(element), className)
};
goog.dom.classes.enable = function(element, className, enabled) {
  if(enabled) {
    goog.dom.classes.add(element, className)
  }else {
    goog.dom.classes.remove(element, className)
  }
};
goog.dom.classes.toggle = function(element, className) {
  var add = !goog.dom.classes.has(element, className);
  goog.dom.classes.enable(element, className, add);
  return add
};
goog.provide("goog.math.Coordinate");
goog.math.Coordinate = function(opt_x, opt_y) {
  this.x = goog.isDef(opt_x) ? opt_x : 0;
  this.y = goog.isDef(opt_y) ? opt_y : 0
};
goog.math.Coordinate.prototype.clone = function() {
  return new goog.math.Coordinate(this.x, this.y)
};
if(goog.DEBUG) {
  goog.math.Coordinate.prototype.toString = function() {
    return"(" + this.x + ", " + this.y + ")"
  }
}
goog.math.Coordinate.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.x == b.x && a.y == b.y
};
goog.math.Coordinate.distance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy)
};
goog.math.Coordinate.squaredDistance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return dx * dx + dy * dy
};
goog.math.Coordinate.difference = function(a, b) {
  return new goog.math.Coordinate(a.x - b.x, a.y - b.y)
};
goog.math.Coordinate.sum = function(a, b) {
  return new goog.math.Coordinate(a.x + b.x, a.y + b.y)
};
goog.provide("goog.math.Size");
goog.math.Size = function(width, height) {
  this.width = width;
  this.height = height
};
goog.math.Size.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.width == b.width && a.height == b.height
};
goog.math.Size.prototype.clone = function() {
  return new goog.math.Size(this.width, this.height)
};
if(goog.DEBUG) {
  goog.math.Size.prototype.toString = function() {
    return"(" + this.width + " x " + this.height + ")"
  }
}
goog.math.Size.prototype.getLongest = function() {
  return Math.max(this.width, this.height)
};
goog.math.Size.prototype.getShortest = function() {
  return Math.min(this.width, this.height)
};
goog.math.Size.prototype.area = function() {
  return this.width * this.height
};
goog.math.Size.prototype.perimeter = function() {
  return(this.width + this.height) * 2
};
goog.math.Size.prototype.aspectRatio = function() {
  return this.width / this.height
};
goog.math.Size.prototype.isEmpty = function() {
  return!this.area()
};
goog.math.Size.prototype.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
goog.math.Size.prototype.fitsInside = function(target) {
  return this.width <= target.width && this.height <= target.height
};
goog.math.Size.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
goog.math.Size.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
goog.math.Size.prototype.scale = function(s) {
  this.width *= s;
  this.height *= s;
  return this
};
goog.math.Size.prototype.scaleToFit = function(target) {
  var s = this.aspectRatio() > target.aspectRatio() ? target.width / this.width : target.height / this.height;
  return this.scale(s)
};
goog.provide("goog.dom");
goog.provide("goog.dom.DomHelper");
goog.provide("goog.dom.NodeType");
goog.require("goog.array");
goog.require("goog.dom.BrowserFeature");
goog.require("goog.dom.TagName");
goog.require("goog.dom.classes");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Size");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.dom.ASSUME_QUIRKS_MODE = false;
goog.dom.ASSUME_STANDARDS_MODE = false;
goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.dom.getDomHelper = function(opt_element) {
  return opt_element ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(opt_element)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper)
};
goog.dom.defaultDomHelper_;
goog.dom.getDocument = function() {
  return document
};
goog.dom.getElement = function(element) {
  return goog.isString(element) ? document.getElementById(element) : element
};
goog.dom.$ = goog.dom.getElement;
goog.dom.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(document, opt_tag, opt_class, opt_el)
};
goog.dom.getElementsByClass = function(className, opt_el) {
  var parent = opt_el || document;
  if(goog.dom.canUseQuerySelector_(parent)) {
    return parent.querySelectorAll("." + className)
  }else {
    if(parent.getElementsByClassName) {
      return parent.getElementsByClassName(className)
    }
  }
  return goog.dom.getElementsByTagNameAndClass_(document, "*", className, opt_el)
};
goog.dom.getElementByClass = function(className, opt_el) {
  var parent = opt_el || document;
  var retVal = null;
  if(goog.dom.canUseQuerySelector_(parent)) {
    retVal = parent.querySelector("." + className)
  }else {
    retVal = goog.dom.getElementsByClass(className, opt_el)[0]
  }
  return retVal || null
};
goog.dom.canUseQuerySelector_ = function(parent) {
  return parent.querySelectorAll && parent.querySelector && (!goog.userAgent.WEBKIT || goog.dom.isCss1CompatMode_(document) || goog.userAgent.isVersion("528"))
};
goog.dom.getElementsByTagNameAndClass_ = function(doc, opt_tag, opt_class, opt_el) {
  var parent = opt_el || doc;
  var tagName = opt_tag && opt_tag != "*" ? opt_tag.toUpperCase() : "";
  if(goog.dom.canUseQuerySelector_(parent) && (tagName || opt_class)) {
    var query = tagName + (opt_class ? "." + opt_class : "");
    return parent.querySelectorAll(query)
  }
  if(opt_class && parent.getElementsByClassName) {
    var els = parent.getElementsByClassName(opt_class);
    if(tagName) {
      var arrayLike = {};
      var len = 0;
      for(var i = 0, el;el = els[i];i++) {
        if(tagName == el.nodeName) {
          arrayLike[len++] = el
        }
      }
      arrayLike.length = len;
      return arrayLike
    }else {
      return els
    }
  }
  var els = parent.getElementsByTagName(tagName || "*");
  if(opt_class) {
    var arrayLike = {};
    var len = 0;
    for(var i = 0, el;el = els[i];i++) {
      var className = el.className;
      if(typeof className.split == "function" && goog.array.contains(className.split(/\s+/), opt_class)) {
        arrayLike[len++] = el
      }
    }
    arrayLike.length = len;
    return arrayLike
  }else {
    return els
  }
};
goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
goog.dom.setProperties = function(element, properties) {
  goog.object.forEach(properties, function(val, key) {
    if(key == "style") {
      element.style.cssText = val
    }else {
      if(key == "class") {
        element.className = val
      }else {
        if(key == "for") {
          element.htmlFor = val
        }else {
          if(key in goog.dom.DIRECT_ATTRIBUTE_MAP_) {
            element.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[key], val)
          }else {
            if(goog.string.startsWith(key, "aria-")) {
              element.setAttribute(key, val)
            }else {
              element[key] = val
            }
          }
        }
      }
    }
  })
};
goog.dom.DIRECT_ATTRIBUTE_MAP_ = {"cellpadding":"cellPadding", "cellspacing":"cellSpacing", "colspan":"colSpan", "rowspan":"rowSpan", "valign":"vAlign", "height":"height", "width":"width", "usemap":"useMap", "frameborder":"frameBorder", "maxlength":"maxLength", "type":"type"};
goog.dom.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize_(opt_window || window)
};
goog.dom.getViewportSize_ = function(win) {
  var doc = win.document;
  if(goog.userAgent.WEBKIT && !goog.userAgent.isVersion("500") && !goog.userAgent.MOBILE) {
    if(typeof win.innerHeight == "undefined") {
      win = window
    }
    var innerHeight = win.innerHeight;
    var scrollHeight = win.document.documentElement.scrollHeight;
    if(win == win.top) {
      if(scrollHeight < innerHeight) {
        innerHeight -= 15
      }
    }
    return new goog.math.Size(win.innerWidth, innerHeight)
  }
  var el = goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body;
  return new goog.math.Size(el.clientWidth, el.clientHeight)
};
goog.dom.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(window)
};
goog.dom.getDocumentHeight_ = function(win) {
  var doc = win.document;
  var height = 0;
  if(doc) {
    var vh = goog.dom.getViewportSize_(win).height;
    var body = doc.body;
    var docEl = doc.documentElement;
    if(goog.dom.isCss1CompatMode_(doc) && docEl.scrollHeight) {
      height = docEl.scrollHeight != vh ? docEl.scrollHeight : docEl.offsetHeight
    }else {
      var sh = docEl.scrollHeight;
      var oh = docEl.offsetHeight;
      if(docEl.clientHeight != oh) {
        sh = body.scrollHeight;
        oh = body.offsetHeight
      }
      if(sh > vh) {
        height = sh > oh ? sh : oh
      }else {
        height = sh < oh ? sh : oh
      }
    }
  }
  return height
};
goog.dom.getPageScroll = function(opt_window) {
  var win = opt_window || goog.global || window;
  return goog.dom.getDomHelper(win.document).getDocumentScroll()
};
goog.dom.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(document)
};
goog.dom.getDocumentScroll_ = function(doc) {
  var el = goog.dom.getDocumentScrollElement_(doc);
  var win = goog.dom.getWindow_(doc);
  return new goog.math.Coordinate(win.pageXOffset || el.scrollLeft, win.pageYOffset || el.scrollTop)
};
goog.dom.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(document)
};
goog.dom.getDocumentScrollElement_ = function(doc) {
  return!goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body
};
goog.dom.getWindow = function(opt_doc) {
  return opt_doc ? goog.dom.getWindow_(opt_doc) : window
};
goog.dom.getWindow_ = function(doc) {
  return doc.parentWindow || doc.defaultView
};
goog.dom.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(document, arguments)
};
goog.dom.createDom_ = function(doc, args) {
  var tagName = args[0];
  var attributes = args[1];
  if(!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && attributes && (attributes.name || attributes.type)) {
    var tagNameArr = ["<", tagName];
    if(attributes.name) {
      tagNameArr.push(' name="', goog.string.htmlEscape(attributes.name), '"')
    }
    if(attributes.type) {
      tagNameArr.push(' type="', goog.string.htmlEscape(attributes.type), '"');
      var clone = {};
      goog.object.extend(clone, attributes);
      attributes = clone;
      delete attributes.type
    }
    tagNameArr.push(">");
    tagName = tagNameArr.join("")
  }
  var element = doc.createElement(tagName);
  if(attributes) {
    if(goog.isString(attributes)) {
      element.className = attributes
    }else {
      if(goog.isArray(attributes)) {
        goog.dom.classes.add.apply(null, [element].concat(attributes))
      }else {
        goog.dom.setProperties(element, attributes)
      }
    }
  }
  if(args.length > 2) {
    goog.dom.append_(doc, element, args, 2)
  }
  return element
};
goog.dom.append_ = function(doc, parent, args, startIndex) {
  function childHandler(child) {
    if(child) {
      parent.appendChild(goog.isString(child) ? doc.createTextNode(child) : child)
    }
  }
  for(var i = startIndex;i < args.length;i++) {
    var arg = args[i];
    if(goog.isArrayLike(arg) && !goog.dom.isNodeLike(arg)) {
      goog.array.forEach(goog.dom.isNodeList(arg) ? goog.array.clone(arg) : arg, childHandler)
    }else {
      childHandler(arg)
    }
  }
};
goog.dom.$dom = goog.dom.createDom;
goog.dom.createElement = function(name) {
  return document.createElement(name)
};
goog.dom.createTextNode = function(content) {
  return document.createTextNode(content)
};
goog.dom.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(document, rows, columns, !!opt_fillWithNbsp)
};
goog.dom.createTable_ = function(doc, rows, columns, fillWithNbsp) {
  var rowHtml = ["<tr>"];
  for(var i = 0;i < columns;i++) {
    rowHtml.push(fillWithNbsp ? "<td>&nbsp;</td>" : "<td></td>")
  }
  rowHtml.push("</tr>");
  rowHtml = rowHtml.join("");
  var totalHtml = ["<table>"];
  for(i = 0;i < rows;i++) {
    totalHtml.push(rowHtml)
  }
  totalHtml.push("</table>");
  var elem = doc.createElement(goog.dom.TagName.DIV);
  elem.innerHTML = totalHtml.join("");
  return elem.removeChild(elem.firstChild)
};
goog.dom.htmlToDocumentFragment = function(htmlString) {
  return goog.dom.htmlToDocumentFragment_(document, htmlString)
};
goog.dom.htmlToDocumentFragment_ = function(doc, htmlString) {
  var tempDiv = doc.createElement("div");
  if(goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT) {
    tempDiv.innerHTML = "<br>" + htmlString;
    tempDiv.removeChild(tempDiv.firstChild)
  }else {
    tempDiv.innerHTML = htmlString
  }
  if(tempDiv.childNodes.length == 1) {
    return tempDiv.removeChild(tempDiv.firstChild)
  }else {
    var fragment = doc.createDocumentFragment();
    while(tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild)
    }
    return fragment
  }
};
goog.dom.getCompatMode = function() {
  return goog.dom.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(document)
};
goog.dom.isCss1CompatMode_ = function(doc) {
  if(goog.dom.COMPAT_MODE_KNOWN_) {
    return goog.dom.ASSUME_STANDARDS_MODE
  }
  return doc.compatMode == "CSS1Compat"
};
goog.dom.canHaveChildren = function(node) {
  if(node.nodeType != goog.dom.NodeType.ELEMENT) {
    return false
  }
  switch(node.tagName) {
    case goog.dom.TagName.APPLET:
    ;
    case goog.dom.TagName.AREA:
    ;
    case goog.dom.TagName.BASE:
    ;
    case goog.dom.TagName.BR:
    ;
    case goog.dom.TagName.COL:
    ;
    case goog.dom.TagName.FRAME:
    ;
    case goog.dom.TagName.HR:
    ;
    case goog.dom.TagName.IMG:
    ;
    case goog.dom.TagName.INPUT:
    ;
    case goog.dom.TagName.IFRAME:
    ;
    case goog.dom.TagName.ISINDEX:
    ;
    case goog.dom.TagName.LINK:
    ;
    case goog.dom.TagName.NOFRAMES:
    ;
    case goog.dom.TagName.NOSCRIPT:
    ;
    case goog.dom.TagName.META:
    ;
    case goog.dom.TagName.OBJECT:
    ;
    case goog.dom.TagName.PARAM:
    ;
    case goog.dom.TagName.SCRIPT:
    ;
    case goog.dom.TagName.STYLE:
      return false
  }
  return true
};
goog.dom.appendChild = function(parent, child) {
  parent.appendChild(child)
};
goog.dom.append = function(parent, var_args) {
  goog.dom.append_(goog.dom.getOwnerDocument(parent), parent, arguments, 1)
};
goog.dom.removeChildren = function(node) {
  var child;
  while(child = node.firstChild) {
    node.removeChild(child)
  }
};
goog.dom.insertSiblingBefore = function(newNode, refNode) {
  if(refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode)
  }
};
goog.dom.insertSiblingAfter = function(newNode, refNode) {
  if(refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling)
  }
};
goog.dom.insertChildAt = function(parent, child, index) {
  parent.insertBefore(child, parent.childNodes[index] || null)
};
goog.dom.removeNode = function(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null
};
goog.dom.replaceNode = function(newNode, oldNode) {
  var parent = oldNode.parentNode;
  if(parent) {
    parent.replaceChild(newNode, oldNode)
  }
};
goog.dom.flattenElement = function(element) {
  var child, parent = element.parentNode;
  if(parent && parent.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
    if(element.removeNode) {
      return element.removeNode(false)
    }else {
      while(child = element.firstChild) {
        parent.insertBefore(child, element)
      }
      return goog.dom.removeNode(element)
    }
  }
};
goog.dom.getChildren = function(element) {
  if(goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && element.children != undefined) {
    return element.children
  }
  return goog.array.filter(element.childNodes, function(node) {
    return node.nodeType == goog.dom.NodeType.ELEMENT
  })
};
goog.dom.getFirstElementChild = function(node) {
  if(node.firstElementChild != undefined) {
    return node.firstElementChild
  }
  return goog.dom.getNextElementNode_(node.firstChild, true)
};
goog.dom.getLastElementChild = function(node) {
  if(node.lastElementChild != undefined) {
    return node.lastElementChild
  }
  return goog.dom.getNextElementNode_(node.lastChild, false)
};
goog.dom.getNextElementSibling = function(node) {
  if(node.nextElementSibling != undefined) {
    return node.nextElementSibling
  }
  return goog.dom.getNextElementNode_(node.nextSibling, true)
};
goog.dom.getPreviousElementSibling = function(node) {
  if(node.previousElementSibling != undefined) {
    return node.previousElementSibling
  }
  return goog.dom.getNextElementNode_(node.previousSibling, false)
};
goog.dom.getNextElementNode_ = function(node, forward) {
  while(node && node.nodeType != goog.dom.NodeType.ELEMENT) {
    node = forward ? node.nextSibling : node.previousSibling
  }
  return node
};
goog.dom.getNextNode = function(node) {
  if(!node) {
    return null
  }
  if(node.firstChild) {
    return node.firstChild
  }
  while(node && !node.nextSibling) {
    node = node.parentNode
  }
  return node ? node.nextSibling : null
};
goog.dom.getPreviousNode = function(node) {
  if(!node) {
    return null
  }
  if(!node.previousSibling) {
    return node.parentNode
  }
  node = node.previousSibling;
  while(node && node.lastChild) {
    node = node.lastChild
  }
  return node
};
goog.dom.isNodeLike = function(obj) {
  return goog.isObject(obj) && obj.nodeType > 0
};
goog.dom.isElement = function(obj) {
  return goog.isObject(obj) && obj.nodeType == goog.dom.NodeType.ELEMENT
};
goog.dom.isWindow = function(obj) {
  return goog.isObject(obj) && obj["window"] == obj
};
goog.dom.contains = function(parent, descendant) {
  if(parent.contains && descendant.nodeType == goog.dom.NodeType.ELEMENT) {
    return parent == descendant || parent.contains(descendant)
  }
  if(typeof parent.compareDocumentPosition != "undefined") {
    return parent == descendant || Boolean(parent.compareDocumentPosition(descendant) & 16)
  }
  while(descendant && parent != descendant) {
    descendant = descendant.parentNode
  }
  return descendant == parent
};
goog.dom.compareNodeOrder = function(node1, node2) {
  if(node1 == node2) {
    return 0
  }
  if(node1.compareDocumentPosition) {
    return node1.compareDocumentPosition(node2) & 2 ? 1 : -1
  }
  if("sourceIndex" in node1 || node1.parentNode && "sourceIndex" in node1.parentNode) {
    var isElement1 = node1.nodeType == goog.dom.NodeType.ELEMENT;
    var isElement2 = node2.nodeType == goog.dom.NodeType.ELEMENT;
    if(isElement1 && isElement2) {
      return node1.sourceIndex - node2.sourceIndex
    }else {
      var parent1 = node1.parentNode;
      var parent2 = node2.parentNode;
      if(parent1 == parent2) {
        return goog.dom.compareSiblingOrder_(node1, node2)
      }
      if(!isElement1 && goog.dom.contains(parent1, node2)) {
        return-1 * goog.dom.compareParentsDescendantNodeIe_(node1, node2)
      }
      if(!isElement2 && goog.dom.contains(parent2, node1)) {
        return goog.dom.compareParentsDescendantNodeIe_(node2, node1)
      }
      return(isElement1 ? node1.sourceIndex : parent1.sourceIndex) - (isElement2 ? node2.sourceIndex : parent2.sourceIndex)
    }
  }
  var doc = goog.dom.getOwnerDocument(node1);
  var range1, range2;
  range1 = doc.createRange();
  range1.selectNode(node1);
  range1.collapse(true);
  range2 = doc.createRange();
  range2.selectNode(node2);
  range2.collapse(true);
  return range1.compareBoundaryPoints(goog.global["Range"].START_TO_END, range2)
};
goog.dom.compareParentsDescendantNodeIe_ = function(textNode, node) {
  var parent = textNode.parentNode;
  if(parent == node) {
    return-1
  }
  var sibling = node;
  while(sibling.parentNode != parent) {
    sibling = sibling.parentNode
  }
  return goog.dom.compareSiblingOrder_(sibling, textNode)
};
goog.dom.compareSiblingOrder_ = function(node1, node2) {
  var s = node2;
  while(s = s.previousSibling) {
    if(s == node1) {
      return-1
    }
  }
  return 1
};
goog.dom.findCommonAncestor = function(var_args) {
  var i, count = arguments.length;
  if(!count) {
    return null
  }else {
    if(count == 1) {
      return arguments[0]
    }
  }
  var paths = [];
  var minLength = Infinity;
  for(i = 0;i < count;i++) {
    var ancestors = [];
    var node = arguments[i];
    while(node) {
      ancestors.unshift(node);
      node = node.parentNode
    }
    paths.push(ancestors);
    minLength = Math.min(minLength, ancestors.length)
  }
  var output = null;
  for(i = 0;i < minLength;i++) {
    var first = paths[0][i];
    for(var j = 1;j < count;j++) {
      if(first != paths[j][i]) {
        return output
      }
    }
    output = first
  }
  return output
};
goog.dom.getOwnerDocument = function(node) {
  return node.nodeType == goog.dom.NodeType.DOCUMENT ? node : node.ownerDocument || node.document
};
goog.dom.getFrameContentDocument = function(frame) {
  var doc = frame.contentDocument || frame.contentWindow.document;
  return doc
};
goog.dom.getFrameContentWindow = function(frame) {
  return frame.contentWindow || goog.dom.getWindow_(goog.dom.getFrameContentDocument(frame))
};
goog.dom.setTextContent = function(element, text) {
  if("textContent" in element) {
    element.textContent = text
  }else {
    if(element.firstChild && element.firstChild.nodeType == goog.dom.NodeType.TEXT) {
      while(element.lastChild != element.firstChild) {
        element.removeChild(element.lastChild)
      }
      element.firstChild.data = text
    }else {
      goog.dom.removeChildren(element);
      var doc = goog.dom.getOwnerDocument(element);
      element.appendChild(doc.createTextNode(text))
    }
  }
};
goog.dom.getOuterHtml = function(element) {
  if("outerHTML" in element) {
    return element.outerHTML
  }else {
    var doc = goog.dom.getOwnerDocument(element);
    var div = doc.createElement("div");
    div.appendChild(element.cloneNode(true));
    return div.innerHTML
  }
};
goog.dom.findNode = function(root, p) {
  var rv = [];
  var found = goog.dom.findNodes_(root, p, rv, true);
  return found ? rv[0] : undefined
};
goog.dom.findNodes = function(root, p) {
  var rv = [];
  goog.dom.findNodes_(root, p, rv, false);
  return rv
};
goog.dom.findNodes_ = function(root, p, rv, findOne) {
  if(root != null) {
    var child = root.firstChild;
    while(child) {
      if(p(child)) {
        rv.push(child);
        if(findOne) {
          return true
        }
      }
      if(goog.dom.findNodes_(child, p, rv, findOne)) {
        return true
      }
      child = child.nextSibling
    }
  }
  return false
};
goog.dom.TAGS_TO_IGNORE_ = {"SCRIPT":1, "STYLE":1, "HEAD":1, "IFRAME":1, "OBJECT":1};
goog.dom.PREDEFINED_TAG_VALUES_ = {"IMG":" ", "BR":"\n"};
goog.dom.isFocusableTabIndex = function(element) {
  var attrNode = element.getAttributeNode("tabindex");
  if(attrNode && attrNode.specified) {
    var index = element.tabIndex;
    return goog.isNumber(index) && index >= 0 && index < 32768
  }
  return false
};
goog.dom.setFocusableTabIndex = function(element, enable) {
  if(enable) {
    element.tabIndex = 0
  }else {
    element.tabIndex = -1;
    element.removeAttribute("tabIndex")
  }
};
goog.dom.getTextContent = function(node) {
  var textContent;
  if(goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && "innerText" in node) {
    textContent = goog.string.canonicalizeNewlines(node.innerText)
  }else {
    var buf = [];
    goog.dom.getTextContent_(node, buf, true);
    textContent = buf.join("")
  }
  textContent = textContent.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  textContent = textContent.replace(/\u200B/g, "");
  if(!goog.dom.BrowserFeature.CAN_USE_INNER_TEXT) {
    textContent = textContent.replace(/ +/g, " ")
  }
  if(textContent != " ") {
    textContent = textContent.replace(/^\s*/, "")
  }
  return textContent
};
goog.dom.getRawTextContent = function(node) {
  var buf = [];
  goog.dom.getTextContent_(node, buf, false);
  return buf.join("")
};
goog.dom.getTextContent_ = function(node, buf, normalizeWhitespace) {
  if(node.nodeName in goog.dom.TAGS_TO_IGNORE_) {
  }else {
    if(node.nodeType == goog.dom.NodeType.TEXT) {
      if(normalizeWhitespace) {
        buf.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
      }else {
        buf.push(node.nodeValue)
      }
    }else {
      if(node.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
        buf.push(goog.dom.PREDEFINED_TAG_VALUES_[node.nodeName])
      }else {
        var child = node.firstChild;
        while(child) {
          goog.dom.getTextContent_(child, buf, normalizeWhitespace);
          child = child.nextSibling
        }
      }
    }
  }
};
goog.dom.getNodeTextLength = function(node) {
  return goog.dom.getTextContent(node).length
};
goog.dom.getNodeTextOffset = function(node, opt_offsetParent) {
  var root = opt_offsetParent || goog.dom.getOwnerDocument(node).body;
  var buf = [];
  while(node && node != root) {
    var cur = node;
    while(cur = cur.previousSibling) {
      buf.unshift(goog.dom.getTextContent(cur))
    }
    node = node.parentNode
  }
  return goog.string.trimLeft(buf.join("")).replace(/ +/g, " ").length
};
goog.dom.getNodeAtOffset = function(parent, offset, opt_result) {
  var stack = [parent], pos = 0, cur;
  while(stack.length > 0 && pos < offset) {
    cur = stack.pop();
    if(cur.nodeName in goog.dom.TAGS_TO_IGNORE_) {
    }else {
      if(cur.nodeType == goog.dom.NodeType.TEXT) {
        var text = cur.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
        pos += text.length
      }else {
        if(cur.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
          pos += goog.dom.PREDEFINED_TAG_VALUES_[cur.nodeName].length
        }else {
          for(var i = cur.childNodes.length - 1;i >= 0;i--) {
            stack.push(cur.childNodes[i])
          }
        }
      }
    }
  }
  if(goog.isObject(opt_result)) {
    opt_result.remainder = cur ? cur.nodeValue.length + offset - pos - 1 : 0;
    opt_result.node = cur
  }
  return cur
};
goog.dom.isNodeList = function(val) {
  if(val && typeof val.length == "number") {
    if(goog.isObject(val)) {
      return typeof val.item == "function" || typeof val.item == "string"
    }else {
      if(goog.isFunction(val)) {
        return typeof val.item == "function"
      }
    }
  }
  return false
};
goog.dom.getAncestorByTagNameAndClass = function(element, opt_tag, opt_class) {
  var tagName = opt_tag ? opt_tag.toUpperCase() : null;
  return goog.dom.getAncestor(element, function(node) {
    return(!tagName || node.nodeName == tagName) && (!opt_class || goog.dom.classes.has(node, opt_class))
  }, true)
};
goog.dom.getAncestorByClass = function(element, opt_class) {
  return goog.dom.getAncestorByTagNameAndClass(element, null, opt_class)
};
goog.dom.getAncestor = function(element, matcher, opt_includeNode, opt_maxSearchSteps) {
  if(!opt_includeNode) {
    element = element.parentNode
  }
  var ignoreSearchSteps = opt_maxSearchSteps == null;
  var steps = 0;
  while(element && (ignoreSearchSteps || steps <= opt_maxSearchSteps)) {
    if(matcher(element)) {
      return element
    }
    element = element.parentNode;
    steps++
  }
  return null
};
goog.dom.getActiveElement = function(doc) {
  try {
    return doc && doc.activeElement
  }catch(e) {
  }
  return null
};
goog.dom.DomHelper = function(opt_document) {
  this.document_ = opt_document || goog.global.document || document
};
goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument = function(document) {
  this.document_ = document
};
goog.dom.DomHelper.prototype.getDocument = function() {
  return this.document_
};
goog.dom.DomHelper.prototype.getElement = function(element) {
  if(goog.isString(element)) {
    return this.document_.getElementById(element)
  }else {
    return element
  }
};
goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(this.document_, opt_tag, opt_class, opt_el)
};
goog.dom.DomHelper.prototype.getElementsByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementsByClass(className, doc)
};
goog.dom.DomHelper.prototype.getElementByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementByClass(className, doc)
};
goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
goog.dom.DomHelper.prototype.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize(opt_window || this.getWindow())
};
goog.dom.DomHelper.prototype.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(this.getWindow())
};
goog.dom.Appendable;
goog.dom.DomHelper.prototype.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(this.document_, arguments)
};
goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
goog.dom.DomHelper.prototype.createElement = function(name) {
  return this.document_.createElement(name)
};
goog.dom.DomHelper.prototype.createTextNode = function(content) {
  return this.document_.createTextNode(content)
};
goog.dom.DomHelper.prototype.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(this.document_, rows, columns, !!opt_fillWithNbsp)
};
goog.dom.DomHelper.prototype.htmlToDocumentFragment = function(htmlString) {
  return goog.dom.htmlToDocumentFragment_(this.document_, htmlString)
};
goog.dom.DomHelper.prototype.getCompatMode = function() {
  return this.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.DomHelper.prototype.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(this.document_)
};
goog.dom.DomHelper.prototype.getWindow = function() {
  return goog.dom.getWindow_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(this.document_)
};
goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
goog.dom.DomHelper.prototype.append = goog.dom.append;
goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
goog.dom.DomHelper.prototype.contains = goog.dom.contains;
goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
goog.dom.DomHelper.prototype.getAncestorByClass = goog.dom.getAncestorByClass;
goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
goog.provide("clojure.browser.dom");
goog.require("cljs.core");
goog.require("goog.dom");
goog.require("goog.object");
clojure.browser.dom.append = function() {
  var append__delegate = function(parent, children) {
    cljs.core.apply.call(null, goog.dom.append, parent, children);
    return parent
  };
  var append = function(parent, var_args) {
    var children = null;
    if(goog.isDef(var_args)) {
      children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return append__delegate.call(this, parent, children)
  };
  append.cljs$lang$maxFixedArity = 1;
  append.cljs$lang$applyTo = function(arglist__6831) {
    var parent = cljs.core.first(arglist__6831);
    var children = cljs.core.rest(arglist__6831);
    return append__delegate(parent, children)
  };
  append.cljs$lang$arity$variadic = append__delegate;
  return append
}();
void 0;
clojure.browser.dom.DOMBuilder = {};
clojure.browser.dom._element = function() {
  var _element = null;
  var _element__1 = function(this$) {
    if(function() {
      var and__3822__auto____6832 = this$;
      if(and__3822__auto____6832) {
        return this$.clojure$browser$dom$DOMBuilder$_element$arity$1
      }else {
        return and__3822__auto____6832
      }
    }()) {
      return this$.clojure$browser$dom$DOMBuilder$_element$arity$1(this$)
    }else {
      return function() {
        var or__3824__auto____6833 = clojure.browser.dom._element[goog.typeOf.call(null, this$)];
        if(or__3824__auto____6833) {
          return or__3824__auto____6833
        }else {
          var or__3824__auto____6834 = clojure.browser.dom._element["_"];
          if(or__3824__auto____6834) {
            return or__3824__auto____6834
          }else {
            throw cljs.core.missing_protocol.call(null, "DOMBuilder.-element", this$);
          }
        }
      }().call(null, this$)
    }
  };
  var _element__2 = function(this$, attrs_or_children) {
    if(function() {
      var and__3822__auto____6835 = this$;
      if(and__3822__auto____6835) {
        return this$.clojure$browser$dom$DOMBuilder$_element$arity$2
      }else {
        return and__3822__auto____6835
      }
    }()) {
      return this$.clojure$browser$dom$DOMBuilder$_element$arity$2(this$, attrs_or_children)
    }else {
      return function() {
        var or__3824__auto____6836 = clojure.browser.dom._element[goog.typeOf.call(null, this$)];
        if(or__3824__auto____6836) {
          return or__3824__auto____6836
        }else {
          var or__3824__auto____6837 = clojure.browser.dom._element["_"];
          if(or__3824__auto____6837) {
            return or__3824__auto____6837
          }else {
            throw cljs.core.missing_protocol.call(null, "DOMBuilder.-element", this$);
          }
        }
      }().call(null, this$, attrs_or_children)
    }
  };
  var _element__3 = function(this$, attrs, children) {
    if(function() {
      var and__3822__auto____6838 = this$;
      if(and__3822__auto____6838) {
        return this$.clojure$browser$dom$DOMBuilder$_element$arity$3
      }else {
        return and__3822__auto____6838
      }
    }()) {
      return this$.clojure$browser$dom$DOMBuilder$_element$arity$3(this$, attrs, children)
    }else {
      return function() {
        var or__3824__auto____6839 = clojure.browser.dom._element[goog.typeOf.call(null, this$)];
        if(or__3824__auto____6839) {
          return or__3824__auto____6839
        }else {
          var or__3824__auto____6840 = clojure.browser.dom._element["_"];
          if(or__3824__auto____6840) {
            return or__3824__auto____6840
          }else {
            throw cljs.core.missing_protocol.call(null, "DOMBuilder.-element", this$);
          }
        }
      }().call(null, this$, attrs, children)
    }
  };
  _element = function(this$, attrs, children) {
    switch(arguments.length) {
      case 1:
        return _element__1.call(this, this$);
      case 2:
        return _element__2.call(this, this$, attrs);
      case 3:
        return _element__3.call(this, this$, attrs, children)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _element.cljs$lang$arity$1 = _element__1;
  _element.cljs$lang$arity$2 = _element__2;
  _element.cljs$lang$arity$3 = _element__3;
  return _element
}();
void 0;
clojure.browser.dom.log = function() {
  var log__delegate = function(args) {
    return console.log(cljs.core.apply.call(null, cljs.core.pr_str, args))
  };
  var log = function(var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return log__delegate.call(this, args)
  };
  log.cljs$lang$maxFixedArity = 0;
  log.cljs$lang$applyTo = function(arglist__6841) {
    var args = cljs.core.seq(arglist__6841);
    return log__delegate(args)
  };
  log.cljs$lang$arity$variadic = log__delegate;
  return log
}();
clojure.browser.dom.log_obj = function log_obj(obj) {
  return console.log(obj)
};
Element.prototype.clojure$browser$dom$DOMBuilder$ = true;
Element.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = function(this$) {
  clojure.browser.dom.log.call(null, "js/Element (-element ", this$, ")");
  return this$
};
cljs.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$ = true;
cljs.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = function(this$) {
  clojure.browser.dom.log.call(null, "PersistentVector (-element ", this$, ")");
  var tag__6842 = cljs.core.first.call(null, this$);
  var attrs__6843 = cljs.core.second.call(null, this$);
  var children__6844 = cljs.core.drop.call(null, 2, this$);
  if(cljs.core.map_QMARK_.call(null, attrs__6843)) {
    return clojure.browser.dom._element.call(null, tag__6842, attrs__6843, children__6844)
  }else {
    return clojure.browser.dom._element.call(null, tag__6842, null, cljs.core.rest.call(null, this$))
  }
};
clojure.browser.dom.DOMBuilder["string"] = true;
clojure.browser.dom._element["string"] = function() {
  var G__6857 = null;
  var G__6857__1 = function(this$) {
    clojure.browser.dom.log.call(null, "string (-element ", this$, ")");
    if(cljs.core.keyword_QMARK_.call(null, this$)) {
      return goog.dom.createElement.call(null, cljs.core.name.call(null, this$))
    }else {
      if("\ufdd0'else") {
        return goog.dom.createTextNode.call(null, cljs.core.name.call(null, this$))
      }else {
        return null
      }
    }
  };
  var G__6857__2 = function(this$, attrs_or_children) {
    clojure.browser.dom.log.call(null, "string (-element ", this$, " ", attrs_or_children, ")");
    var attrs__6845 = cljs.core.first.call(null, attrs_or_children);
    if(cljs.core.map_QMARK_.call(null, attrs__6845)) {
      return clojure.browser.dom._element.call(null, this$, attrs__6845, cljs.core.rest.call(null, attrs_or_children))
    }else {
      return clojure.browser.dom._element.call(null, this$, null, attrs_or_children)
    }
  };
  var G__6857__3 = function(this$, attrs, children) {
    clojure.browser.dom.log.call(null, "string (-element ", this$, " ", attrs, " ", children, ")");
    var str_attrs__6856 = cljs.core.truth_(function() {
      var and__3822__auto____6846 = cljs.core.map_QMARK_.call(null, attrs);
      if(and__3822__auto____6846) {
        return cljs.core.seq.call(null, attrs)
      }else {
        return and__3822__auto____6846
      }
    }()) ? cljs.core.reduce.call(null, function(o, p__6847) {
      var vec__6848__6849 = p__6847;
      var k__6850 = cljs.core.nth.call(null, vec__6848__6849, 0, null);
      var v__6851 = cljs.core.nth.call(null, vec__6848__6849, 1, null);
      var o__6852 = o == null ? {} : o;
      clojure.browser.dom.log.call(null, "o = ", o__6852);
      clojure.browser.dom.log.call(null, "k = ", k__6850);
      clojure.browser.dom.log.call(null, "v = ", v__6851);
      if(function() {
        var or__3824__auto____6853 = cljs.core.keyword_QMARK_.call(null, k__6850);
        if(or__3824__auto____6853) {
          return or__3824__auto____6853
        }else {
          return cljs.core.string_QMARK_.call(null, k__6850)
        }
      }()) {
        var G__6854__6855 = o__6852;
        G__6854__6855[cljs.core.name.call(null, k__6850)] = v__6851;
        return G__6854__6855
      }else {
        return null
      }
    }, {}, attrs) : null;
    clojure.browser.dom.log_obj.call(null, str_attrs__6856);
    if(cljs.core.truth_(cljs.core.seq.call(null, children))) {
      return cljs.core.apply.call(null, goog.dom.createDom, cljs.core.name.call(null, this$), str_attrs__6856, cljs.core.map.call(null, clojure.browser.dom._element, children))
    }else {
      return goog.dom.createDom.call(null, cljs.core.name.call(null, this$), str_attrs__6856)
    }
  };
  G__6857 = function(this$, attrs, children) {
    switch(arguments.length) {
      case 1:
        return G__6857__1.call(this, this$);
      case 2:
        return G__6857__2.call(this, this$, attrs);
      case 3:
        return G__6857__3.call(this, this$, attrs, children)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6857
}();
clojure.browser.dom.element = function() {
  var element = null;
  var element__1 = function(tag_or_text) {
    clojure.browser.dom.log.call(null, "(element ", tag_or_text, ")");
    return clojure.browser.dom._element.call(null, tag_or_text)
  };
  var element__2 = function() {
    var G__6859__delegate = function(tag, children) {
      clojure.browser.dom.log.call(null, "(element ", tag, " ", children, ")");
      var attrs__6858 = cljs.core.first.call(null, children);
      if(cljs.core.map_QMARK_.call(null, attrs__6858)) {
        return clojure.browser.dom._element.call(null, tag, attrs__6858, cljs.core.rest.call(null, children))
      }else {
        return clojure.browser.dom._element.call(null, tag, null, children)
      }
    };
    var G__6859 = function(tag, var_args) {
      var children = null;
      if(goog.isDef(var_args)) {
        children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__6859__delegate.call(this, tag, children)
    };
    G__6859.cljs$lang$maxFixedArity = 1;
    G__6859.cljs$lang$applyTo = function(arglist__6860) {
      var tag = cljs.core.first(arglist__6860);
      var children = cljs.core.rest(arglist__6860);
      return G__6859__delegate(tag, children)
    };
    G__6859.cljs$lang$arity$variadic = G__6859__delegate;
    return G__6859
  }();
  element = function(tag, var_args) {
    var children = var_args;
    switch(arguments.length) {
      case 1:
        return element__1.call(this, tag);
      default:
        return element__2.cljs$lang$arity$variadic(tag, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  element.cljs$lang$maxFixedArity = 1;
  element.cljs$lang$applyTo = element__2.cljs$lang$applyTo;
  element.cljs$lang$arity$1 = element__1;
  element.cljs$lang$arity$variadic = element__2.cljs$lang$arity$variadic;
  return element
}();
clojure.browser.dom.remove_children = function remove_children(id) {
  var parent__6861 = goog.dom.getElement.call(null, cljs.core.name.call(null, id));
  return goog.dom.removeChildren.call(null, parent__6861)
};
clojure.browser.dom.get_element = function get_element(id) {
  return goog.dom.getElement.call(null, cljs.core.name.call(null, id))
};
clojure.browser.dom.html__GT_dom = function html__GT_dom(s) {
  return goog.dom.htmlToDocumentFragment.call(null, s)
};
clojure.browser.dom.insert_at = function insert_at(parent, child, index) {
  return goog.dom.insertChildAt.call(null, parent, child, index)
};
clojure.browser.dom.ensure_element = function ensure_element(e) {
  if(cljs.core.keyword_QMARK_.call(null, e)) {
    return clojure.browser.dom.get_element.call(null, e)
  }else {
    if(cljs.core.string_QMARK_.call(null, e)) {
      return clojure.browser.dom.html__GT_dom.call(null, e)
    }else {
      if("\ufdd0'else") {
        return e
      }else {
        return null
      }
    }
  }
};
clojure.browser.dom.replace_node = function replace_node(old_node, new_node) {
  var old_node__6862 = clojure.browser.dom.ensure_element.call(null, old_node);
  var new_node__6863 = clojure.browser.dom.ensure_element.call(null, new_node);
  goog.dom.replaceNode.call(null, new_node__6863, old_node__6862);
  return new_node__6863
};
clojure.browser.dom.set_text = function set_text(e, s) {
  return goog.dom.setTextContent.call(null, clojure.browser.dom.ensure_element.call(null, e), s)
};
clojure.browser.dom.get_value = function get_value(e) {
  return clojure.browser.dom.ensure_element.call(null, e).value
};
clojure.browser.dom.set_properties = function set_properties(e, m) {
  return goog.dom.setProperties.call(null, clojure.browser.dom.ensure_element.call(null, e), cljs.core.apply.call(null, goog.object.create, cljs.core.interleave.call(null, cljs.core.keys.call(null, m), cljs.core.vals.call(null, m))))
};
clojure.browser.dom.set_value = function set_value(e, v) {
  return clojure.browser.dom.set_properties.call(null, e, cljs.core.ObjMap.fromObject(["value"], {"value":v}))
};
clojure.browser.dom.click_element = function click_element(e) {
  return clojure.browser.dom.ensure_element.call(null, e).click(cljs.core.List.EMPTY)
};
goog.provide("countdownd.manip");
goog.require("cljs.core");
goog.require("clojure.browser.dom");
goog.provide("goog.events.EventWrapper");
goog.events.EventWrapper = function() {
};
goog.events.EventWrapper.prototype.listen = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {
};
goog.events.EventWrapper.prototype.unlisten = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {
};
goog.provide("goog.events.BrowserFeature");
goog.require("goog.userAgent");
goog.events.BrowserFeature = {HAS_W3C_BUTTON:!goog.userAgent.IE || goog.userAgent.isDocumentMode(9), HAS_W3C_EVENT_SUPPORT:!goog.userAgent.IE || goog.userAgent.isDocumentMode(9), SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE && !goog.userAgent.isVersion("8")};
goog.provide("goog.disposable.IDisposable");
goog.disposable.IDisposable = function() {
};
goog.disposable.IDisposable.prototype.dispose;
goog.disposable.IDisposable.prototype.isDisposed;
goog.provide("goog.Disposable");
goog.provide("goog.dispose");
goog.require("goog.disposable.IDisposable");
goog.Disposable = function() {
  if(goog.Disposable.ENABLE_MONITORING) {
    goog.Disposable.instances_[goog.getUid(this)] = this
  }
};
goog.Disposable.ENABLE_MONITORING = false;
goog.Disposable.instances_ = {};
goog.Disposable.getUndisposedObjects = function() {
  var ret = [];
  for(var id in goog.Disposable.instances_) {
    if(goog.Disposable.instances_.hasOwnProperty(id)) {
      ret.push(goog.Disposable.instances_[Number(id)])
    }
  }
  return ret
};
goog.Disposable.clearUndisposedObjects = function() {
  goog.Disposable.instances_ = {}
};
goog.Disposable.prototype.disposed_ = false;
goog.Disposable.prototype.dependentDisposables_;
goog.Disposable.prototype.isDisposed = function() {
  return this.disposed_
};
goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose = function() {
  if(!this.disposed_) {
    this.disposed_ = true;
    this.disposeInternal();
    if(goog.Disposable.ENABLE_MONITORING) {
      var uid = goog.getUid(this);
      if(!goog.Disposable.instances_.hasOwnProperty(uid)) {
        throw Error(this + " did not call the goog.Disposable base " + "constructor or was disposed of after a clearUndisposedObjects " + "call");
      }
      delete goog.Disposable.instances_[uid]
    }
  }
};
goog.Disposable.prototype.registerDisposable = function(disposable) {
  if(!this.dependentDisposables_) {
    this.dependentDisposables_ = []
  }
  this.dependentDisposables_.push(disposable)
};
goog.Disposable.prototype.disposeInternal = function() {
  if(this.dependentDisposables_) {
    goog.disposeAll.apply(null, this.dependentDisposables_)
  }
};
goog.dispose = function(obj) {
  if(obj && typeof obj.dispose == "function") {
    obj.dispose()
  }
};
goog.disposeAll = function(var_args) {
  for(var i = 0, len = arguments.length;i < len;++i) {
    var disposable = arguments[i];
    if(goog.isArrayLike(disposable)) {
      goog.disposeAll.apply(null, disposable)
    }else {
      goog.dispose(disposable)
    }
  }
};
goog.provide("goog.events.Event");
goog.require("goog.Disposable");
goog.events.Event = function(type, opt_target) {
  goog.Disposable.call(this);
  this.type = type;
  this.target = opt_target;
  this.currentTarget = this.target
};
goog.inherits(goog.events.Event, goog.Disposable);
goog.events.Event.prototype.disposeInternal = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
goog.events.Event.prototype.propagationStopped_ = false;
goog.events.Event.prototype.returnValue_ = true;
goog.events.Event.prototype.stopPropagation = function() {
  this.propagationStopped_ = true
};
goog.events.Event.prototype.preventDefault = function() {
  this.returnValue_ = false
};
goog.events.Event.stopPropagation = function(e) {
  e.stopPropagation()
};
goog.events.Event.preventDefault = function(e) {
  e.preventDefault()
};
goog.provide("goog.events.EventType");
goog.require("goog.userAgent");
goog.events.EventType = {CLICK:"click", DBLCLICK:"dblclick", MOUSEDOWN:"mousedown", MOUSEUP:"mouseup", MOUSEOVER:"mouseover", MOUSEOUT:"mouseout", MOUSEMOVE:"mousemove", SELECTSTART:"selectstart", KEYPRESS:"keypress", KEYDOWN:"keydown", KEYUP:"keyup", BLUR:"blur", FOCUS:"focus", DEACTIVATE:"deactivate", FOCUSIN:goog.userAgent.IE ? "focusin" : "DOMFocusIn", FOCUSOUT:goog.userAgent.IE ? "focusout" : "DOMFocusOut", CHANGE:"change", SELECT:"select", SUBMIT:"submit", INPUT:"input", PROPERTYCHANGE:"propertychange", 
DRAGSTART:"dragstart", DRAGENTER:"dragenter", DRAGOVER:"dragover", DRAGLEAVE:"dragleave", DROP:"drop", TOUCHSTART:"touchstart", TOUCHMOVE:"touchmove", TOUCHEND:"touchend", TOUCHCANCEL:"touchcancel", CONTEXTMENU:"contextmenu", ERROR:"error", HELP:"help", LOAD:"load", LOSECAPTURE:"losecapture", READYSTATECHANGE:"readystatechange", RESIZE:"resize", SCROLL:"scroll", UNLOAD:"unload", HASHCHANGE:"hashchange", PAGEHIDE:"pagehide", PAGESHOW:"pageshow", POPSTATE:"popstate", COPY:"copy", PASTE:"paste", CUT:"cut", 
BEFORECOPY:"beforecopy", BEFORECUT:"beforecut", BEFOREPASTE:"beforepaste", MESSAGE:"message", CONNECT:"connect", TRANSITIONEND:goog.userAgent.WEBKIT ? "webkitTransitionEnd" : goog.userAgent.OPERA ? "oTransitionEnd" : "transitionend"};
goog.provide("goog.reflect");
goog.reflect.object = function(type, object) {
  return object
};
goog.reflect.sinkValue = function(x) {
  goog.reflect.sinkValue[" "](x);
  return x
};
goog.reflect.sinkValue[" "] = goog.nullFunction;
goog.reflect.canAccessProperty = function(obj, prop) {
  try {
    goog.reflect.sinkValue(obj[prop]);
    return true
  }catch(e) {
  }
  return false
};
goog.provide("goog.events.BrowserEvent");
goog.provide("goog.events.BrowserEvent.MouseButton");
goog.require("goog.events.BrowserFeature");
goog.require("goog.events.Event");
goog.require("goog.events.EventType");
goog.require("goog.reflect");
goog.require("goog.userAgent");
goog.events.BrowserEvent = function(opt_e, opt_currentTarget) {
  if(opt_e) {
    this.init(opt_e, opt_currentTarget)
  }
};
goog.inherits(goog.events.BrowserEvent, goog.events.Event);
goog.events.BrowserEvent.MouseButton = {LEFT:0, MIDDLE:1, RIGHT:2};
goog.events.BrowserEvent.IEButtonMap = [1, 4, 2];
goog.events.BrowserEvent.prototype.target = null;
goog.events.BrowserEvent.prototype.currentTarget;
goog.events.BrowserEvent.prototype.relatedTarget = null;
goog.events.BrowserEvent.prototype.offsetX = 0;
goog.events.BrowserEvent.prototype.offsetY = 0;
goog.events.BrowserEvent.prototype.clientX = 0;
goog.events.BrowserEvent.prototype.clientY = 0;
goog.events.BrowserEvent.prototype.screenX = 0;
goog.events.BrowserEvent.prototype.screenY = 0;
goog.events.BrowserEvent.prototype.button = 0;
goog.events.BrowserEvent.prototype.keyCode = 0;
goog.events.BrowserEvent.prototype.charCode = 0;
goog.events.BrowserEvent.prototype.ctrlKey = false;
goog.events.BrowserEvent.prototype.altKey = false;
goog.events.BrowserEvent.prototype.shiftKey = false;
goog.events.BrowserEvent.prototype.metaKey = false;
goog.events.BrowserEvent.prototype.state;
goog.events.BrowserEvent.prototype.platformModifierKey = false;
goog.events.BrowserEvent.prototype.event_ = null;
goog.events.BrowserEvent.prototype.init = function(e, opt_currentTarget) {
  var type = this.type = e.type;
  goog.events.Event.call(this, type);
  this.target = e.target || e.srcElement;
  this.currentTarget = opt_currentTarget;
  var relatedTarget = e.relatedTarget;
  if(relatedTarget) {
    if(goog.userAgent.GECKO) {
      if(!goog.reflect.canAccessProperty(relatedTarget, "nodeName")) {
        relatedTarget = null
      }
    }
  }else {
    if(type == goog.events.EventType.MOUSEOVER) {
      relatedTarget = e.fromElement
    }else {
      if(type == goog.events.EventType.MOUSEOUT) {
        relatedTarget = e.toElement
      }
    }
  }
  this.relatedTarget = relatedTarget;
  this.offsetX = e.offsetX !== undefined ? e.offsetX : e.layerX;
  this.offsetY = e.offsetY !== undefined ? e.offsetY : e.layerY;
  this.clientX = e.clientX !== undefined ? e.clientX : e.pageX;
  this.clientY = e.clientY !== undefined ? e.clientY : e.pageY;
  this.screenX = e.screenX || 0;
  this.screenY = e.screenY || 0;
  this.button = e.button;
  this.keyCode = e.keyCode || 0;
  this.charCode = e.charCode || (type == "keypress" ? e.keyCode : 0);
  this.ctrlKey = e.ctrlKey;
  this.altKey = e.altKey;
  this.shiftKey = e.shiftKey;
  this.metaKey = e.metaKey;
  this.platformModifierKey = goog.userAgent.MAC ? e.metaKey : e.ctrlKey;
  this.state = e.state;
  this.event_ = e;
  delete this.returnValue_;
  delete this.propagationStopped_
};
goog.events.BrowserEvent.prototype.isButton = function(button) {
  if(!goog.events.BrowserFeature.HAS_W3C_BUTTON) {
    if(this.type == "click") {
      return button == goog.events.BrowserEvent.MouseButton.LEFT
    }else {
      return!!(this.event_.button & goog.events.BrowserEvent.IEButtonMap[button])
    }
  }else {
    return this.event_.button == button
  }
};
goog.events.BrowserEvent.prototype.isMouseActionButton = function() {
  return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey)
};
goog.events.BrowserEvent.prototype.stopPropagation = function() {
  goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
  if(this.event_.stopPropagation) {
    this.event_.stopPropagation()
  }else {
    this.event_.cancelBubble = true
  }
};
goog.events.BrowserEvent.prototype.preventDefault = function() {
  goog.events.BrowserEvent.superClass_.preventDefault.call(this);
  var be = this.event_;
  if(!be.preventDefault) {
    be.returnValue = false;
    if(goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) {
      try {
        var VK_F1 = 112;
        var VK_F12 = 123;
        if(be.ctrlKey || be.keyCode >= VK_F1 && be.keyCode <= VK_F12) {
          be.keyCode = -1
        }
      }catch(ex) {
      }
    }
  }else {
    be.preventDefault()
  }
};
goog.events.BrowserEvent.prototype.getBrowserEvent = function() {
  return this.event_
};
goog.events.BrowserEvent.prototype.disposeInternal = function() {
  goog.events.BrowserEvent.superClass_.disposeInternal.call(this);
  this.event_ = null;
  this.target = null;
  this.currentTarget = null;
  this.relatedTarget = null
};
goog.provide("goog.debug.EntryPointMonitor");
goog.provide("goog.debug.entryPointRegistry");
goog.require("goog.asserts");
goog.debug.EntryPointMonitor = function() {
};
goog.debug.EntryPointMonitor.prototype.wrap;
goog.debug.EntryPointMonitor.prototype.unwrap;
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.monitors_ = [];
goog.debug.entryPointRegistry.monitorsMayExist_ = false;
goog.debug.entryPointRegistry.register = function(callback) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = callback;
  if(goog.debug.entryPointRegistry.monitorsMayExist_) {
    var monitors = goog.debug.entryPointRegistry.monitors_;
    for(var i = 0;i < monitors.length;i++) {
      callback(goog.bind(monitors[i].wrap, monitors[i]))
    }
  }
};
goog.debug.entryPointRegistry.monitorAll = function(monitor) {
  goog.debug.entryPointRegistry.monitorsMayExist_ = true;
  var transformer = goog.bind(monitor.wrap, monitor);
  for(var i = 0;i < goog.debug.entryPointRegistry.refList_.length;i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer)
  }
  goog.debug.entryPointRegistry.monitors_.push(monitor)
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(monitor) {
  var monitors = goog.debug.entryPointRegistry.monitors_;
  goog.asserts.assert(monitor == monitors[monitors.length - 1], "Only the most recent monitor can be unwrapped.");
  var transformer = goog.bind(monitor.unwrap, monitor);
  for(var i = 0;i < goog.debug.entryPointRegistry.refList_.length;i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer)
  }
  monitors.length--
};
goog.provide("goog.debug.errorHandlerWeakDep");
goog.debug.errorHandlerWeakDep = {protectEntryPoint:function(fn, opt_tracers) {
  return fn
}};
goog.provide("goog.events.Listener");
goog.events.Listener = function() {
};
goog.events.Listener.counter_ = 0;
goog.events.Listener.prototype.isFunctionListener_;
goog.events.Listener.prototype.listener;
goog.events.Listener.prototype.proxy;
goog.events.Listener.prototype.src;
goog.events.Listener.prototype.type;
goog.events.Listener.prototype.capture;
goog.events.Listener.prototype.handler;
goog.events.Listener.prototype.key = 0;
goog.events.Listener.prototype.removed = false;
goog.events.Listener.prototype.callOnce = false;
goog.events.Listener.prototype.init = function(listener, proxy, src, type, capture, opt_handler) {
  if(goog.isFunction(listener)) {
    this.isFunctionListener_ = true
  }else {
    if(listener && listener.handleEvent && goog.isFunction(listener.handleEvent)) {
      this.isFunctionListener_ = false
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.listener = listener;
  this.proxy = proxy;
  this.src = src;
  this.type = type;
  this.capture = !!capture;
  this.handler = opt_handler;
  this.callOnce = false;
  this.key = ++goog.events.Listener.counter_;
  this.removed = false
};
goog.events.Listener.prototype.handleEvent = function(eventObject) {
  if(this.isFunctionListener_) {
    return this.listener.call(this.handler || this.src, eventObject)
  }
  return this.listener.handleEvent.call(this.listener, eventObject)
};
goog.provide("goog.events");
goog.require("goog.array");
goog.require("goog.debug.entryPointRegistry");
goog.require("goog.debug.errorHandlerWeakDep");
goog.require("goog.events.BrowserEvent");
goog.require("goog.events.BrowserFeature");
goog.require("goog.events.Event");
goog.require("goog.events.EventWrapper");
goog.require("goog.events.Listener");
goog.require("goog.object");
goog.require("goog.userAgent");
goog.events.ASSUME_GOOD_GC = false;
goog.events.listeners_ = {};
goog.events.listenerTree_ = {};
goog.events.sources_ = {};
goog.events.onString_ = "on";
goog.events.onStringMap_ = {};
goog.events.keySeparator_ = "_";
goog.events.listen = function(src, type, listener, opt_capt, opt_handler) {
  if(!type) {
    throw Error("Invalid event type");
  }else {
    if(goog.isArray(type)) {
      for(var i = 0;i < type.length;i++) {
        goog.events.listen(src, type[i], listener, opt_capt, opt_handler)
      }
      return null
    }else {
      var capture = !!opt_capt;
      var map = goog.events.listenerTree_;
      if(!(type in map)) {
        map[type] = {count_:0, remaining_:0}
      }
      map = map[type];
      if(!(capture in map)) {
        map[capture] = {count_:0, remaining_:0};
        map.count_++
      }
      map = map[capture];
      var srcUid = goog.getUid(src);
      var listenerArray, listenerObj;
      map.remaining_++;
      if(!map[srcUid]) {
        listenerArray = map[srcUid] = [];
        map.count_++
      }else {
        listenerArray = map[srcUid];
        for(var i = 0;i < listenerArray.length;i++) {
          listenerObj = listenerArray[i];
          if(listenerObj.listener == listener && listenerObj.handler == opt_handler) {
            if(listenerObj.removed) {
              break
            }
            return listenerArray[i].key
          }
        }
      }
      var proxy = goog.events.getProxy();
      proxy.src = src;
      listenerObj = new goog.events.Listener;
      listenerObj.init(listener, proxy, src, type, capture, opt_handler);
      var key = listenerObj.key;
      proxy.key = key;
      listenerArray.push(listenerObj);
      goog.events.listeners_[key] = listenerObj;
      if(!goog.events.sources_[srcUid]) {
        goog.events.sources_[srcUid] = []
      }
      goog.events.sources_[srcUid].push(listenerObj);
      if(src.addEventListener) {
        if(src == goog.global || !src.customEvent_) {
          src.addEventListener(type, proxy, capture)
        }
      }else {
        src.attachEvent(goog.events.getOnString_(type), proxy)
      }
      return key
    }
  }
};
goog.events.getProxy = function() {
  var proxyCallbackFunction = goog.events.handleBrowserEvent_;
  var f = goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function(eventObject) {
    return proxyCallbackFunction.call(f.src, f.key, eventObject)
  } : function(eventObject) {
    var v = proxyCallbackFunction.call(f.src, f.key, eventObject);
    if(!v) {
      return v
    }
  };
  return f
};
goog.events.listenOnce = function(src, type, listener, opt_capt, opt_handler) {
  if(goog.isArray(type)) {
    for(var i = 0;i < type.length;i++) {
      goog.events.listenOnce(src, type[i], listener, opt_capt, opt_handler)
    }
    return null
  }
  var key = goog.events.listen(src, type, listener, opt_capt, opt_handler);
  var listenerObj = goog.events.listeners_[key];
  listenerObj.callOnce = true;
  return key
};
goog.events.listenWithWrapper = function(src, wrapper, listener, opt_capt, opt_handler) {
  wrapper.listen(src, listener, opt_capt, opt_handler)
};
goog.events.unlisten = function(src, type, listener, opt_capt, opt_handler) {
  if(goog.isArray(type)) {
    for(var i = 0;i < type.length;i++) {
      goog.events.unlisten(src, type[i], listener, opt_capt, opt_handler)
    }
    return null
  }
  var capture = !!opt_capt;
  var listenerArray = goog.events.getListeners_(src, type, capture);
  if(!listenerArray) {
    return false
  }
  for(var i = 0;i < listenerArray.length;i++) {
    if(listenerArray[i].listener == listener && listenerArray[i].capture == capture && listenerArray[i].handler == opt_handler) {
      return goog.events.unlistenByKey(listenerArray[i].key)
    }
  }
  return false
};
goog.events.unlistenByKey = function(key) {
  if(!goog.events.listeners_[key]) {
    return false
  }
  var listener = goog.events.listeners_[key];
  if(listener.removed) {
    return false
  }
  var src = listener.src;
  var type = listener.type;
  var proxy = listener.proxy;
  var capture = listener.capture;
  if(src.removeEventListener) {
    if(src == goog.global || !src.customEvent_) {
      src.removeEventListener(type, proxy, capture)
    }
  }else {
    if(src.detachEvent) {
      src.detachEvent(goog.events.getOnString_(type), proxy)
    }
  }
  var srcUid = goog.getUid(src);
  var listenerArray = goog.events.listenerTree_[type][capture][srcUid];
  if(goog.events.sources_[srcUid]) {
    var sourcesArray = goog.events.sources_[srcUid];
    goog.array.remove(sourcesArray, listener);
    if(sourcesArray.length == 0) {
      delete goog.events.sources_[srcUid]
    }
  }
  listener.removed = true;
  listenerArray.needsCleanup_ = true;
  goog.events.cleanUp_(type, capture, srcUid, listenerArray);
  delete goog.events.listeners_[key];
  return true
};
goog.events.unlistenWithWrapper = function(src, wrapper, listener, opt_capt, opt_handler) {
  wrapper.unlisten(src, listener, opt_capt, opt_handler)
};
goog.events.cleanUp_ = function(type, capture, srcUid, listenerArray) {
  if(!listenerArray.locked_) {
    if(listenerArray.needsCleanup_) {
      for(var oldIndex = 0, newIndex = 0;oldIndex < listenerArray.length;oldIndex++) {
        if(listenerArray[oldIndex].removed) {
          var proxy = listenerArray[oldIndex].proxy;
          proxy.src = null;
          continue
        }
        if(oldIndex != newIndex) {
          listenerArray[newIndex] = listenerArray[oldIndex]
        }
        newIndex++
      }
      listenerArray.length = newIndex;
      listenerArray.needsCleanup_ = false;
      if(newIndex == 0) {
        delete goog.events.listenerTree_[type][capture][srcUid];
        goog.events.listenerTree_[type][capture].count_--;
        if(goog.events.listenerTree_[type][capture].count_ == 0) {
          delete goog.events.listenerTree_[type][capture];
          goog.events.listenerTree_[type].count_--
        }
        if(goog.events.listenerTree_[type].count_ == 0) {
          delete goog.events.listenerTree_[type]
        }
      }
    }
  }
};
goog.events.removeAll = function(opt_obj, opt_type, opt_capt) {
  var count = 0;
  var noObj = opt_obj == null;
  var noType = opt_type == null;
  var noCapt = opt_capt == null;
  opt_capt = !!opt_capt;
  if(!noObj) {
    var srcUid = goog.getUid(opt_obj);
    if(goog.events.sources_[srcUid]) {
      var sourcesArray = goog.events.sources_[srcUid];
      for(var i = sourcesArray.length - 1;i >= 0;i--) {
        var listener = sourcesArray[i];
        if((noType || opt_type == listener.type) && (noCapt || opt_capt == listener.capture)) {
          goog.events.unlistenByKey(listener.key);
          count++
        }
      }
    }
  }else {
    goog.object.forEach(goog.events.sources_, function(listeners) {
      for(var i = listeners.length - 1;i >= 0;i--) {
        var listener = listeners[i];
        if((noType || opt_type == listener.type) && (noCapt || opt_capt == listener.capture)) {
          goog.events.unlistenByKey(listener.key);
          count++
        }
      }
    })
  }
  return count
};
goog.events.getListeners = function(obj, type, capture) {
  return goog.events.getListeners_(obj, type, capture) || []
};
goog.events.getListeners_ = function(obj, type, capture) {
  var map = goog.events.listenerTree_;
  if(type in map) {
    map = map[type];
    if(capture in map) {
      map = map[capture];
      var objUid = goog.getUid(obj);
      if(map[objUid]) {
        return map[objUid]
      }
    }
  }
  return null
};
goog.events.getListener = function(src, type, listener, opt_capt, opt_handler) {
  var capture = !!opt_capt;
  var listenerArray = goog.events.getListeners_(src, type, capture);
  if(listenerArray) {
    for(var i = 0;i < listenerArray.length;i++) {
      if(!listenerArray[i].removed && listenerArray[i].listener == listener && listenerArray[i].capture == capture && listenerArray[i].handler == opt_handler) {
        return listenerArray[i]
      }
    }
  }
  return null
};
goog.events.hasListener = function(obj, opt_type, opt_capture) {
  var objUid = goog.getUid(obj);
  var listeners = goog.events.sources_[objUid];
  if(listeners) {
    var hasType = goog.isDef(opt_type);
    var hasCapture = goog.isDef(opt_capture);
    if(hasType && hasCapture) {
      var map = goog.events.listenerTree_[opt_type];
      return!!map && !!map[opt_capture] && objUid in map[opt_capture]
    }else {
      if(!(hasType || hasCapture)) {
        return true
      }else {
        return goog.array.some(listeners, function(listener) {
          return hasType && listener.type == opt_type || hasCapture && listener.capture == opt_capture
        })
      }
    }
  }
  return false
};
goog.events.expose = function(e) {
  var str = [];
  for(var key in e) {
    if(e[key] && e[key].id) {
      str.push(key + " = " + e[key] + " (" + e[key].id + ")")
    }else {
      str.push(key + " = " + e[key])
    }
  }
  return str.join("\n")
};
goog.events.getOnString_ = function(type) {
  if(type in goog.events.onStringMap_) {
    return goog.events.onStringMap_[type]
  }
  return goog.events.onStringMap_[type] = goog.events.onString_ + type
};
goog.events.fireListeners = function(obj, type, capture, eventObject) {
  var map = goog.events.listenerTree_;
  if(type in map) {
    map = map[type];
    if(capture in map) {
      return goog.events.fireListeners_(map[capture], obj, type, capture, eventObject)
    }
  }
  return true
};
goog.events.fireListeners_ = function(map, obj, type, capture, eventObject) {
  var retval = 1;
  var objUid = goog.getUid(obj);
  if(map[objUid]) {
    map.remaining_--;
    var listenerArray = map[objUid];
    if(!listenerArray.locked_) {
      listenerArray.locked_ = 1
    }else {
      listenerArray.locked_++
    }
    try {
      var length = listenerArray.length;
      for(var i = 0;i < length;i++) {
        var listener = listenerArray[i];
        if(listener && !listener.removed) {
          retval &= goog.events.fireListener(listener, eventObject) !== false
        }
      }
    }finally {
      listenerArray.locked_--;
      goog.events.cleanUp_(type, capture, objUid, listenerArray)
    }
  }
  return Boolean(retval)
};
goog.events.fireListener = function(listener, eventObject) {
  var rv = listener.handleEvent(eventObject);
  if(listener.callOnce) {
    goog.events.unlistenByKey(listener.key)
  }
  return rv
};
goog.events.getTotalListenerCount = function() {
  return goog.object.getCount(goog.events.listeners_)
};
goog.events.dispatchEvent = function(src, e) {
  var type = e.type || e;
  var map = goog.events.listenerTree_;
  if(!(type in map)) {
    return true
  }
  if(goog.isString(e)) {
    e = new goog.events.Event(e, src)
  }else {
    if(!(e instanceof goog.events.Event)) {
      var oldEvent = e;
      e = new goog.events.Event(type, src);
      goog.object.extend(e, oldEvent)
    }else {
      e.target = e.target || src
    }
  }
  var rv = 1, ancestors;
  map = map[type];
  var hasCapture = true in map;
  var targetsMap;
  if(hasCapture) {
    ancestors = [];
    for(var parent = src;parent;parent = parent.getParentEventTarget()) {
      ancestors.push(parent)
    }
    targetsMap = map[true];
    targetsMap.remaining_ = targetsMap.count_;
    for(var i = ancestors.length - 1;!e.propagationStopped_ && i >= 0 && targetsMap.remaining_;i--) {
      e.currentTarget = ancestors[i];
      rv &= goog.events.fireListeners_(targetsMap, ancestors[i], e.type, true, e) && e.returnValue_ != false
    }
  }
  var hasBubble = false in map;
  if(hasBubble) {
    targetsMap = map[false];
    targetsMap.remaining_ = targetsMap.count_;
    if(hasCapture) {
      for(var i = 0;!e.propagationStopped_ && i < ancestors.length && targetsMap.remaining_;i++) {
        e.currentTarget = ancestors[i];
        rv &= goog.events.fireListeners_(targetsMap, ancestors[i], e.type, false, e) && e.returnValue_ != false
      }
    }else {
      for(var current = src;!e.propagationStopped_ && current && targetsMap.remaining_;current = current.getParentEventTarget()) {
        e.currentTarget = current;
        rv &= goog.events.fireListeners_(targetsMap, current, e.type, false, e) && e.returnValue_ != false
      }
    }
  }
  return Boolean(rv)
};
goog.events.protectBrowserEventEntryPoint = function(errorHandler) {
  goog.events.handleBrowserEvent_ = errorHandler.protectEntryPoint(goog.events.handleBrowserEvent_)
};
goog.events.handleBrowserEvent_ = function(key, opt_evt) {
  if(!goog.events.listeners_[key]) {
    return true
  }
  var listener = goog.events.listeners_[key];
  var type = listener.type;
  var map = goog.events.listenerTree_;
  if(!(type in map)) {
    return true
  }
  map = map[type];
  var retval, targetsMap;
  if(!goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
    var ieEvent = opt_evt || goog.getObjectByName("window.event");
    var hasCapture = true in map;
    var hasBubble = false in map;
    if(hasCapture) {
      if(goog.events.isMarkedIeEvent_(ieEvent)) {
        return true
      }
      goog.events.markIeEvent_(ieEvent)
    }
    var evt = new goog.events.BrowserEvent;
    evt.init(ieEvent, this);
    retval = true;
    try {
      if(hasCapture) {
        var ancestors = [];
        for(var parent = evt.currentTarget;parent;parent = parent.parentNode) {
          ancestors.push(parent)
        }
        targetsMap = map[true];
        targetsMap.remaining_ = targetsMap.count_;
        for(var i = ancestors.length - 1;!evt.propagationStopped_ && i >= 0 && targetsMap.remaining_;i--) {
          evt.currentTarget = ancestors[i];
          retval &= goog.events.fireListeners_(targetsMap, ancestors[i], type, true, evt)
        }
        if(hasBubble) {
          targetsMap = map[false];
          targetsMap.remaining_ = targetsMap.count_;
          for(var i = 0;!evt.propagationStopped_ && i < ancestors.length && targetsMap.remaining_;i++) {
            evt.currentTarget = ancestors[i];
            retval &= goog.events.fireListeners_(targetsMap, ancestors[i], type, false, evt)
          }
        }
      }else {
        retval = goog.events.fireListener(listener, evt)
      }
    }finally {
      if(ancestors) {
        ancestors.length = 0
      }
      evt.dispose()
    }
    return retval
  }
  var be = new goog.events.BrowserEvent(opt_evt, this);
  try {
    retval = goog.events.fireListener(listener, be)
  }finally {
    be.dispose()
  }
  return retval
};
goog.events.markIeEvent_ = function(e) {
  var useReturnValue = false;
  if(e.keyCode == 0) {
    try {
      e.keyCode = -1;
      return
    }catch(ex) {
      useReturnValue = true
    }
  }
  if(useReturnValue || e.returnValue == undefined) {
    e.returnValue = true
  }
};
goog.events.isMarkedIeEvent_ = function(e) {
  return e.keyCode < 0 || e.returnValue != undefined
};
goog.events.uniqueIdCounter_ = 0;
goog.events.getUniqueId = function(identifier) {
  return identifier + "_" + goog.events.uniqueIdCounter_++
};
goog.debug.entryPointRegistry.register(function(transformer) {
  goog.events.handleBrowserEvent_ = transformer(goog.events.handleBrowserEvent_)
});
goog.provide("goog.events.EventTarget");
goog.require("goog.Disposable");
goog.require("goog.events");
goog.events.EventTarget = function() {
  goog.Disposable.call(this)
};
goog.inherits(goog.events.EventTarget, goog.Disposable);
goog.events.EventTarget.prototype.customEvent_ = true;
goog.events.EventTarget.prototype.parentEventTarget_ = null;
goog.events.EventTarget.prototype.getParentEventTarget = function() {
  return this.parentEventTarget_
};
goog.events.EventTarget.prototype.setParentEventTarget = function(parent) {
  this.parentEventTarget_ = parent
};
goog.events.EventTarget.prototype.addEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  goog.events.listen(this, type, handler, opt_capture, opt_handlerScope)
};
goog.events.EventTarget.prototype.removeEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  goog.events.unlisten(this, type, handler, opt_capture, opt_handlerScope)
};
goog.events.EventTarget.prototype.dispatchEvent = function(e) {
  return goog.events.dispatchEvent(this, e)
};
goog.events.EventTarget.prototype.disposeInternal = function() {
  goog.events.EventTarget.superClass_.disposeInternal.call(this);
  goog.events.removeAll(this);
  this.parentEventTarget_ = null
};
goog.provide("goog.Timer");
goog.require("goog.events.EventTarget");
goog.Timer = function(opt_interval, opt_timerObject) {
  goog.events.EventTarget.call(this);
  this.interval_ = opt_interval || 1;
  this.timerObject_ = opt_timerObject || goog.Timer.defaultTimerObject;
  this.boundTick_ = goog.bind(this.tick_, this);
  this.last_ = goog.now()
};
goog.inherits(goog.Timer, goog.events.EventTarget);
goog.Timer.MAX_TIMEOUT_ = 2147483647;
goog.Timer.prototype.enabled = false;
goog.Timer.defaultTimerObject = goog.global["window"];
goog.Timer.intervalScale = 0.8;
goog.Timer.prototype.timer_ = null;
goog.Timer.prototype.getInterval = function() {
  return this.interval_
};
goog.Timer.prototype.setInterval = function(interval) {
  this.interval_ = interval;
  if(this.timer_ && this.enabled) {
    this.stop();
    this.start()
  }else {
    if(this.timer_) {
      this.stop()
    }
  }
};
goog.Timer.prototype.tick_ = function() {
  if(this.enabled) {
    var elapsed = goog.now() - this.last_;
    if(elapsed > 0 && elapsed < this.interval_ * goog.Timer.intervalScale) {
      this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - elapsed);
      return
    }
    this.dispatchTick();
    if(this.enabled) {
      this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);
      this.last_ = goog.now()
    }
  }
};
goog.Timer.prototype.dispatchTick = function() {
  this.dispatchEvent(goog.Timer.TICK)
};
goog.Timer.prototype.start = function() {
  this.enabled = true;
  if(!this.timer_) {
    this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);
    this.last_ = goog.now()
  }
};
goog.Timer.prototype.stop = function() {
  this.enabled = false;
  if(this.timer_) {
    this.timerObject_.clearTimeout(this.timer_);
    this.timer_ = null
  }
};
goog.Timer.prototype.disposeInternal = function() {
  goog.Timer.superClass_.disposeInternal.call(this);
  this.stop();
  delete this.timerObject_
};
goog.Timer.TICK = "tick";
goog.Timer.callOnce = function(listener, opt_delay, opt_handler) {
  if(goog.isFunction(listener)) {
    if(opt_handler) {
      listener = goog.bind(listener, opt_handler)
    }
  }else {
    if(listener && typeof listener.handleEvent == "function") {
      listener = goog.bind(listener.handleEvent, listener)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  if(opt_delay > goog.Timer.MAX_TIMEOUT_) {
    return-1
  }else {
    return goog.Timer.defaultTimerObject.setTimeout(listener, opt_delay || 0)
  }
};
goog.Timer.clear = function(timerId) {
  goog.Timer.defaultTimerObject.clearTimeout(timerId)
};
goog.provide("hello");
goog.require("cljs.core");
goog.require("clojure.browser.dom");
goog.require("goog.Timer");
goog.require("goog.events");
hello.set_counter = function set_counter(s) {
  return clojure.browser.dom.set_text.call(null, "\ufdd0'countdown", s)
};
goog.exportSymbol("hello.set_counter", hello.set_counter);
hello.append_content = function append_content() {
  return clojure.browser.dom.append.call(null, clojure.browser.dom.get_element.call(null, "content"), clojure.browser.dom.element.call(null, "\ufdd0'div", "divider"))
};
goog.exportSymbol("hello.append_content", hello.append_content);
hello.update_counter = function update_counter() {
  var d__16435 = new Date;
  return clojure.browser.dom.set_text.call(null, "\ufdd0'countdown", d__16435)
};
hello.poll = function poll() {
  var timer__16436 = new goog.Timer(1E3);
  hello.update_counter.call(null);
  timer__16436.start();
  return goog.events.listen.call(null, timer__16436, goog.Timer.TICK, hello.update_counter)
};
goog.exportSymbol("hello.poll", hello.poll);
hello.start_counter = function start_counter() {
  return clojure.browser.dom.set_text.call(null, "\ufdd0'countdown", "starting 2...")
};
