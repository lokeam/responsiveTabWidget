/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.cssanimations=function(){return F("animationName")},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
(function( $ ){
	// on lazy-loading images (DIMS: dynamic image resizing)
	// 1. get viewport height/width
	// 2. set image params on img ref:
	// ex: http://screencrush.com/442/files/2015/07/Spotlight.jpg?w=630&h=300&a=c&zc=1w
	// change width and heigh based on viewport size

	//
	// on lazy-loading youtube videos
	// load content based on active tab
	// remove node on non active tab


	$.easytabs = function( container, options ){
		// Attach to plugin anything that should be available via
		// the $container.data('easytabs') object
		var plugin = this, $container = $( container ),

			defaults = {
				animate: true,
				panelActiveClass: "active",
				tabActiveClass: "active",
				defaultTab: "li:first-child",
				animationSpeed: "normal",
				tabs: "> ul > li",
				updateHash: true,
				cycle: false,
				collapsible: false,
				collapsedClass: "collapsed",
				collapsedByDefault: true,
				uiTabs: false,
				transitionIn: 'fadeIn',
				transitionOut: 'fadeOut',
				transitionInEasing: 'swing',
				transitionOutEasing: 'swing',
				transitionCollapse: 'slideUp',
				transitionUncollapse: 'slideDown',
				transitionCollapseEasing: 'swing',
				transitionUncollapseEasing: 'swing',
				containerClass: "",
				tabsClass: "",
				tabClass: "",
				panelClass: "",
				cache: true,
				event: 'click',
				panelContext: $container
			},

		// Internal instance variables
		// (not available via easytabs object)
			$defaultTab, $defaultTabLink, transitions, lastHash, skipUpdateToHash, animationSpeeds = {
				fast: 200,
				normal: 400,
				slow: 600
			},

		// Shorthand variable so that we don't need to call
		// plugin.settings throughout the plugin code
			settings;

		// =============================================================
		// Functions available via easytabs object
		// =============================================================

		plugin.init = function(){
			plugin.settings = settings = $.extend( {}, defaults, options );
			settings.bind_str = settings.event + ".easytabs";

			// Add jQuery UI's crazy class names to markup,
			// so that markup will match theme CSS
			if( settings.uiTabs ){
				settings.tabActiveClass = 'ui-tabs-selected';
				settings.containerClass = 'ui-tabs ui-widget ui-widget-content ui-corner-all';
				settings.tabsClass = 'ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all';
				settings.tabClass = 'ui-state-default ui-corner-top';
				settings.panelClass = 'ui-tabs-panel ui-widget-content ui-corner-bottom';
			}

			// If collapsible is true and defaultTab specified, assume user wants defaultTab showing (not collapsed)
			if( settings.collapsible && options.defaultTab !== undefined && options.collpasedByDefault === undefined ){
				settings.collapsedByDefault = false;
			}

			// Convert 'normal', 'fast', and 'slow' animation speed settings to their respective speed in milliseconds
			if( typeof(settings.animationSpeed) === 'string' ){
				settings.animationSpeed = animationSpeeds[settings.animationSpeed];
			}

			$( 'a.anchor' ).remove().prependTo( 'body' );

			// Store easytabs object on container so we can easily set
			// properties throughout
			$container.data( 'easytabs', {} );

			plugin.setTransitions();

			plugin.getTabs();

			addClasses();

			setDefaultTab();

			bindToTabClicks();

			initHashChange();

			initCycle();

			// Append data-easytabs HTML attribute to make easy to query for
			// easytabs instances via CSS pseudo-selector
			$container.attr( 'data-easytabs', true );
		};

		// Set transitions for switching between tabs based on options.
		// Could be used to update transitions if settings are changes.
		plugin.setTransitions = function(){
			transitions = ( settings.animate ) ? {
				show: settings.transitionIn,
				hide: settings.transitionOut,
				speed: settings.animationSpeed,
				collapse: settings.transitionCollapse,
				uncollapse: settings.transitionUncollapse,
				halfSpeed: settings.animationSpeed / 2
			} : {
				show: "show",
				hide: "hide",
				speed: 0,
				collapse: "hide",
				uncollapse: "show",
				halfSpeed: 0
			};
		};

		// Find and instantiate tabs and panels.
		// Could be used to reset tab and panel collection if markup is
		// modified.
		plugin.getTabs = function(){
			var $matchingPanel;

			// Find the initial set of elements matching the setting.tabs
			// CSS selector within the container
			plugin.tabs = $container.find( settings.tabs ),

				// Instantiate panels as empty jquery object
				plugin.panels = $(),

				plugin.tabs.each( function(){
					var $tab = $( this ), $a = $tab.children( 'a' ),

					// targetId is the ID of the panel, which is either the
					// `href` attribute for non-ajax tabs, or in the
					// `data-target` attribute for ajax tabs since the `href` is
					// the ajax URL
						targetId = $tab.children( 'a' ).data( 'target' );

					$tab.data( 'easytabs', {} );

					// If the tab has a `data-target` attribute, and is thus an ajax tab
					if( targetId !== undefined && targetId !== null ){
						$tab.data( 'easytabs' ).ajax = $a.attr( 'href' );
					}else{
						targetId = $a.attr( 'href' );
					}
					targetId = targetId.match( /#([^\?]+)/ )[1];
					targetId = targetId.replace( /\//g, '\\/' );

					$matchingPanel = settings.panelContext.find( "#" + targetId );

					// If tab has a matching panel, add it to panels
					if( $matchingPanel.length ){

						// Store panel height before hiding
						$matchingPanel.data( 'easytabs', {
							position: $matchingPanel.css( 'position' ),
							visibility: $matchingPanel.css( 'visibility' )
						} );

						// Don't hide panel if it's active (allows `getTabs` to be called manually to re-instantiate tab collection)
						$matchingPanel.not( settings.panelActiveClass ).hide();

						plugin.panels = plugin.panels.add( $matchingPanel );

						$tab.data( 'easytabs' ).panel = $matchingPanel;

						// Otherwise, remove tab from tabs collection
					}else{
						plugin.tabs = plugin.tabs.not( $tab );
						if( 'console' in window ){
							console.warn( 'Warning: tab without matching panel for selector \'#' + targetId + '\' removed from set' );
						}
					}
				} );
		};

		// Select tab and fire callback
		plugin.selectTab = function( $clicked, callback ){
			var url = window.location, hash = url.hash.match( /^[^\?]*/ )[0], $targetPanel = $clicked.parent().data( 'easytabs' ).panel, ajaxUrl = $clicked.parent().data( 'easytabs' ).ajax;

			// Tab is collapsible and active => toggle collapsed state
			if( settings.collapsible && !skipUpdateToHash && ($clicked.hasClass( settings.tabActiveClass ) || $clicked.hasClass( settings.collapsedClass )) ){
				plugin.toggleTabCollapse( $clicked, $targetPanel, ajaxUrl, callback );

				// Tab is not active and panel is not active => select tab
			}else if( !$clicked.hasClass( settings.tabActiveClass ) || !$targetPanel.hasClass( settings.panelActiveClass ) ){
				activateTab( $clicked, $targetPanel, ajaxUrl, callback );

				// Cache is disabled => reload (e.g reload an ajax tab).
			}else if( !settings.cache ){
				activateTab( $clicked, $targetPanel, ajaxUrl, callback );
			}

		};

		// Toggle tab collapsed state and fire callback
		plugin.toggleTabCollapse = function( $clicked, $targetPanel, ajaxUrl, callback ){
			plugin.panels.stop( true, true );

			if( fire( $container, "easytabs:before", [$clicked, $targetPanel, settings] ) ){
				plugin.tabs.filter( "." + settings.tabActiveClass ).removeClass( settings.tabActiveClass ).children().removeClass( settings.tabActiveClass );

				// If panel is collapsed, uncollapse it
				if( $clicked.hasClass( settings.collapsedClass ) ){

					// If ajax panel and not already cached
					if( ajaxUrl && (!settings.cache || !$clicked.parent().data( 'easytabs' ).cached) ){
						$container.trigger( 'easytabs:ajax:beforeSend', [$clicked, $targetPanel] );

						$targetPanel.load( ajaxUrl, function( response, status, xhr ){
							$clicked.parent().data( 'easytabs' ).cached = true;
							$container.trigger( 'easytabs:ajax:complete', [$clicked, $targetPanel, response, status, xhr] );
						} );
					}

					// Update CSS classes of tab and panel
					$clicked.parent().removeClass( settings.collapsedClass ).addClass( settings.tabActiveClass ).children().removeClass( settings.collapsedClass ).addClass( settings.tabActiveClass );

					$targetPanel.addClass( settings.panelActiveClass )
						[transitions.uncollapse]( transitions.speed, settings.transitionUncollapseEasing, function(){
						$container.trigger( 'easytabs:midTransition', [$clicked, $targetPanel, settings] );
						if( typeof callback == 'function' ) callback();
					} );

					// Otherwise, collapse it
				}else{

					// Update CSS classes of tab and panel
					$clicked.addClass( settings.collapsedClass ).parent().addClass( settings.collapsedClass );

					$targetPanel.removeClass( settings.panelActiveClass )
						[transitions.collapse]( transitions.speed, settings.transitionCollapseEasing, function(){
						$container.trigger( "easytabs:midTransition", [$clicked, $targetPanel, settings] );
						if( typeof callback == 'function' ) callback();
					} );
				}
			}
		};


		// Find tab with target panel matching value
		plugin.matchTab = function( hash ){
			return plugin.tabs.find( "[href='" + hash + "'],[data-target='" + hash + "']" ).first();
		};

		// Find panel with `id` matching value
		plugin.matchInPanel = function( hash ){
			return ( hash && plugin.validId( hash ) ? plugin.panels.filter( ':has(' + hash + ')' ).first() : [] );
		};

		// Make sure hash is a valid id value (admittedly strict in that HTML5 allows almost anything without a space)
		// but jQuery has issues with such id values anyway, so we can afford to be strict here.
		plugin.validId = function( id ){
			return id.substr( 1 ).match( /^[A-Za-z\/]+[A-Za-z0-9\-_:\.]+.$/ );

			//return id.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/);
		};

		// Select matching tab when URL hash changes
		plugin.selectTabFromHashChange = function(){
			var hash = window.location.hash.match( /^[^\?]*/ )[0], $tab = plugin.matchTab( hash ), $panel;

			if( settings.updateHash ){

				// If hash directly matches tab
				if( $tab.length ){
					skipUpdateToHash = true;
					plugin.selectTab( $tab );

				}else{
					$panel = plugin.matchInPanel( hash );

					// If panel contains element matching hash
					if( $panel.length ){
						hash = '#' + $panel.attr( 'id' );
						$tab = plugin.matchTab( hash );
						skipUpdateToHash = true;
						plugin.selectTab( $tab );

						// If default tab is not active...
					}else if( !$defaultTab.hasClass( settings.tabActiveClass ) && !settings.cycle ){

						// ...and hash is blank or matches a parent of the tab container or
						// if the last tab (before the hash updated) was one of the other tabs in this container.
						if( hash === '' || plugin.matchTab( lastHash ).length || $container.closest( hash ).length ){
							skipUpdateToHash = true;
							plugin.selectTab( $defaultTabLink );
						}
					}
				}
			}
		};

		// Cycle through tabs
		plugin.cycleTabs = function( tabNumber ){
			if( settings.cycle ){
				tabNumber = tabNumber % plugin.tabs.length;
				$tab = $( plugin.tabs[tabNumber] ).children( "a" ).first();
				skipUpdateToHash = true;
				plugin.selectTab( $tab, function(){
					setTimeout( function(){
						plugin.cycleTabs( tabNumber + 1 );
					}, settings.cycle );
				} );
			}
		};

		// Convenient public methods
		plugin.publicMethods = {
			select: function( tabSelector ){
				var $tab;

				// Find tab container that matches selector (like 'li#tab-one' which contains tab link)
				if( ($tab = plugin.tabs.filter( tabSelector )).length === 0 ){

					// Find direct tab link that matches href (like 'a[href="#panel-1"]')
					if( ($tab = plugin.tabs.find( "a[href='" + tabSelector + "']" )).length === 0 ){

						// Find direct tab link that matches selector (like 'a#tab-1')
						if( ($tab = plugin.tabs.find( "a" + tabSelector )).length === 0 ){

							// Find direct tab link that matches data-target (lik 'a[data-target="#panel-1"]')
							if( ($tab = plugin.tabs.find( "[data-target='" + tabSelector + "']" )).length === 0 ){

								// Find direct tab link that ends in the matching href (like 'a[href$="#panel-1"]', which would also match http://example.com/currentpage/#panel-1)
								if( ($tab = plugin.tabs.find( "a[href$='" + tabSelector + "']" )).length === 0 ){

									$.error( 'Tab \'' + tabSelector + '\' does not exist in tab set' );
								}
							}
						}
					}
				}else{
					// Select the child tab link, since the first option finds the tab container (like <li>)
					$tab = $tab.children( "a" ).first();
				}
				plugin.selectTab( $tab );
			}
		};

		// =============================================================
		// Private functions
		// =============================================================

		// Triggers an event on an element and returns the event result
		var fire = function( obj, name, data ){
			var event = $.Event( name );
			obj.trigger( event, data );
			return event.result !== false;
		}

		// Add CSS classes to markup (if specified), called by init
		var addClasses = function(){
			$container.addClass( settings.containerClass );
			plugin.tabs.parent().addClass( settings.tabsClass );
			plugin.tabs.addClass( settings.tabClass );
			plugin.panels.addClass( settings.panelClass );
		};

		// Set the default tab, whether from hash (bookmarked) or option,
		// called by init
		var setDefaultTab = function(){
			var hash = window.location.hash.match( /^[^\?]*/ )[0], $selectedTab = plugin.matchTab( hash ).parent(), $panel;

			// If hash directly matches one of the tabs, active on page-load
			if( $selectedTab.length === 1 ){
				$defaultTab = $selectedTab;
				settings.cycle = false;

			}else{
				$panel = plugin.matchInPanel( hash );

				// If one of the panels contains the element matching the hash,
				// make it active on page-load
				if( $panel.length ){
					hash = '#' + $panel.attr( 'id' );
					$defaultTab = plugin.matchTab( hash ).parent();

					// Otherwise, make the default tab the one that's active on page-load
				}else{
					$defaultTab = plugin.tabs.parent().find( settings.defaultTab );
					if( $defaultTab.length === 0 ){
						$.error( "The specified default tab ('" + settings.defaultTab + "') could not be found in the tab set ('" + settings.tabs + "') out of " + plugin.tabs.length + " tabs." );
					}
				}
			}

			$defaultTabLink = $defaultTab.children( "a" ).first();

			activateDefaultTab( $selectedTab );
		};

		// Activate defaultTab (or collapse by default), called by setDefaultTab
		var activateDefaultTab = function( $selectedTab ){
			var defaultPanel, defaultAjaxUrl;

			if( settings.collapsible && $selectedTab.length === 0 && settings.collapsedByDefault ){
				$defaultTab.addClass( settings.collapsedClass ).children().addClass( settings.collapsedClass );

			}else{

				defaultPanel = $( $defaultTab.data( 'easytabs' ).panel );
				defaultAjaxUrl = $defaultTab.data( 'easytabs' ).ajax;

				if( defaultAjaxUrl && (!settings.cache || !$defaultTab.data( 'easytabs' ).cached) ){
					$container.trigger( 'easytabs:ajax:beforeSend', [$defaultTabLink, defaultPanel] );
					defaultPanel.load( defaultAjaxUrl, function( response, status, xhr ){
						$defaultTab.data( 'easytabs' ).cached = true;
						$container.trigger( 'easytabs:ajax:complete', [$defaultTabLink, defaultPanel, response, status, xhr] );
					} );
				}

				$defaultTab.data( 'easytabs' ).panel.show().addClass( settings.panelActiveClass );

				$defaultTab.addClass( settings.tabActiveClass ).children().addClass( settings.tabActiveClass );
			}

			// Fire event when the plugin is initialised
			$container.trigger( "easytabs:initialised", [$defaultTabLink, defaultPanel] );
		};

		// Bind tab-select funtionality to namespaced click event, called by
		// init
		var bindToTabClicks = function(){
			plugin.tabs.children( "a" ).bind( settings.bind_str, function( e ){

				// Stop cycling when a tab is clicked
				settings.cycle = false;

				// Hash will be updated when tab is clicked,
				// don't cause tab to re-select when hash-change event is fired
				skipUpdateToHash = false;

				// Select the panel for the clicked tab
				plugin.selectTab( $( this ) );

				// Don't follow the link to the anchor
				//e.preventDefault ? e.preventDefault() : e.returnValue = false;
				e.preventDefault();
			} );
		};

		// Activate a given tab/panel, called from plugin.selectTab:
		//
		//   * fire `easytabs:before` hook
		//   * get ajax if new tab is an uncached ajax tab
		//   * animate out previously-active panel
		//   * fire `easytabs:midTransition` hook
		//   * update URL hash
		//   * animate in newly-active panel
		//   * update CSS classes for inactive and active tabs/panels
		//
		// TODO: This could probably be broken out into many more modular
		// functions
		var activateTab = function( $clicked, $targetPanel, ajaxUrl, callback ){
			plugin.panels.stop( true, true );

			if( fire( $container, "easytabs:before", [$clicked, $targetPanel, settings] ) ){
				var $visiblePanel = plugin.panels.filter( ":visible" ), $panelContainer = $targetPanel.parent(), targetHeight, visibleHeight, heightDifference, showPanel, hash = window.top.location.hash.match( /^[^\?]*/ )[0];

				if( settings.animate ){
					targetHeight = getHeightForHidden( $targetPanel );
					visibleHeight = $visiblePanel.length ? setAndReturnHeight( $visiblePanel ) : 0;
					heightDifference = targetHeight - visibleHeight;
				}

				// Set lastHash to help indicate if defaultTab should be
				// activated across multiple tab instances.
				lastHash = hash;

				// TODO: Move this function elsewhere
				showPanel = function(){
					// At this point, the previous panel is hidden, and the new one will be selected
					$container.trigger( "easytabs:midTransition", [$clicked, $targetPanel, settings] );

					// Gracefully animate between panels of differing heights, start height change animation *after* panel change if panel needs to contract,
					// so that there is no chance of making the visible panel overflowing the height of the target panel
					if( settings.animate && settings.transitionIn == 'fadeIn' ){
						if( heightDifference < 0 )
							$panelContainer.animate( {
								height: $panelContainer.height() + heightDifference
							}, transitions.halfSpeed ).css( { 'min-height': '' } );
					}

					if( settings.updateHash && !skipUpdateToHash ){
						//window.location = url.toString().replace((url.pathname + hash), (url.pathname + $clicked.attr("href")));
						// Not sure why this behaves so differently, but it's more straight forward and seems to have less side-effects
						window.location.hash = '#' + $targetPanel.attr( 'id' );
					}else{
						skipUpdateToHash = false;
					}

					$targetPanel
						[transitions.show]( transitions.speed, settings.transitionInEasing, function(){
						$panelContainer.css( {height: '', 'min-height': ''} ); // After the transition, unset the height
						$container.trigger( "easytabs:after", [$clicked, $targetPanel, settings] );
						// callback only gets called if selectTab actually does something, since it's inside the if block
						if( typeof callback == 'function' ){
							callback();
						}
					} );
				};

				if( ajaxUrl && (!settings.cache || !$clicked.parent().data( 'easytabs' ).cached) ){
					$container.trigger( 'easytabs:ajax:beforeSend', [$clicked, $targetPanel] );
					$targetPanel.load( ajaxUrl, function( response, status, xhr ){
						$clicked.parent().data( 'easytabs' ).cached = true;
						$container.trigger( 'easytabs:ajax:complete', [$clicked, $targetPanel, response, status, xhr] );
					} );
				}

				// Gracefully animate between panels of differing heights, start height change animation *before* panel change if panel needs to expand,
				// so that there is no chance of making the target panel overflowing the height of the visible panel
				if( settings.animate && settings.transitionOut == 'fadeOut' ){
					if( heightDifference > 0 ){
						$panelContainer.animate( {
							height: ( $panelContainer.height() + heightDifference )
						}, transitions.halfSpeed );
					}else{
						// Prevent height jumping before height transition is triggered at midTransition
						$panelContainer.css( { 'min-height': $panelContainer.height() } );
					}
				}

				// Change the active tab *first* to provide immediate feedback when the user clicks
				plugin.tabs.filter( "." + settings.tabActiveClass ).removeClass( settings.tabActiveClass ).children().removeClass( settings.tabActiveClass );
				plugin.tabs.filter( "." + settings.collapsedClass ).removeClass( settings.collapsedClass ).children().removeClass( settings.collapsedClass );
				$clicked.parent().addClass( settings.tabActiveClass ).children().addClass( settings.tabActiveClass );

				plugin.panels.filter( "." + settings.panelActiveClass ).removeClass( settings.panelActiveClass );
				$targetPanel.addClass( settings.panelActiveClass );

				if( $visiblePanel.length ){
					$visiblePanel
						[transitions.hide]( transitions.speed, settings.transitionOutEasing, showPanel );
				}else{
					$targetPanel
						[transitions.uncollapse]( transitions.speed, settings.transitionUncollapseEasing, showPanel );
				}
			}
		};

		// Get heights of panels to enable animation between panels of
		// differing heights, called by activateTab
		var getHeightForHidden = function( $targetPanel ){

			if( $targetPanel.data( 'easytabs' ) && $targetPanel.data( 'easytabs' ).lastHeight ){
				return $targetPanel.data( 'easytabs' ).lastHeight;
			}

			// this is the only property easytabs changes, so we need to grab its value on each tab change
			var display = $targetPanel.css( 'display' ), outerCloak, height;

			// Workaround with wrapping height, because firefox returns wrong
			// height if element itself has absolute positioning.
			// but try/catch block needed for IE7 and IE8 because they throw
			// an "Unspecified error" when trying to create an element
			// with the css position set.
			try{
				outerCloak = $( '<div></div>', {'position': 'absolute', 'visibility': 'hidden', 'overflow': 'hidden'} );
			}catch( e ){
				outerCloak = $( '<div></div>', {'visibility': 'hidden', 'overflow': 'hidden'} );
			}
			height = $targetPanel.wrap( outerCloak ).css( {'position': 'relative', 'visibility': 'hidden', 'display': 'block'} ).outerHeight();

			$targetPanel.unwrap();

			// Return element to previous state
			$targetPanel.css( {
				position: $targetPanel.data( 'easytabs' ).position,
				visibility: $targetPanel.data( 'easytabs' ).visibility,
				display: display
			} );

			// Cache height
			$targetPanel.data( 'easytabs' ).lastHeight = height;

			return height;
		};

		// Since the height of the visible panel may have been manipulated due to interaction,
		// we want to re-cache the visible height on each tab change, called
		// by activateTab
		var setAndReturnHeight = function( $visiblePanel ){
			var height = $visiblePanel.outerHeight();

			if( $visiblePanel.data( 'easytabs' ) ){
				$visiblePanel.data( 'easytabs' ).lastHeight = height;
			}else{
				$visiblePanel.data( 'easytabs', {lastHeight: height} );
			}
			return height;
		};

		// Setup hash-change callback for forward- and back-button
		// functionality, called by init
		var initHashChange = function(){

			// enabling back-button with jquery.hashchange plugin
			// http://benalman.com/projects/jquery-hashchange-plugin/
			if( typeof $( window ).hashchange === 'function' ){
				$( window ).hashchange( function(){
					plugin.selectTabFromHashChange();
				} );
			}else if( $.address && typeof $.address.change === 'function' ){ // back-button with jquery.address plugin http://www.asual.com/jquery/address/docs/
				$.address.change( function(){
					plugin.selectTabFromHashChange();
				} );
			}
		};

		// Begin cycling if set in options, called by init
		var initCycle = function(){
			var tabNumber;
			if( settings.cycle ){
				tabNumber = plugin.tabs.index( $defaultTab );
				setTimeout( function(){
					plugin.cycleTabs( tabNumber + 1 );
				}, settings.cycle );
			}
		};


		plugin.init();

	};

	$.fn.easytabs = function( options ){
		var args = arguments;

		return this.each( function(){
			var $this = $( this ), plugin = $this.data( 'easytabs' );

			// Initialization was called with $(el).easytabs( { options } );
			if( undefined === plugin ){
				plugin = new $.easytabs( this, options );
				$this.data( 'easytabs', plugin );
			}

			// User called public method
			if( plugin.publicMethods[options] ){
				return plugin.publicMethods[options]( Array.prototype.slice.call( args, 1 ) );
			}
		} );
	};

})( jQuery );
(function( $, window ){

	'use strict';

	// global
	var Modernizr = window.Modernizr, $body = $( 'body' ),
		hashCheckedOnLoad = 0;
	$.DLMenu = function( options, element ){
		this.$el = $( element );
		this._init( options );
	};

	// the options
	$.DLMenu.defaults = {
		// classes for the animation effects
		animationClasses: {
			classin: 'dl-animate-in-2',
			classout: 'dl-animate-out-2'
		},
		// callback: click a link that has a sub menu
		// el is the link element (li); name is the level name
		onLevelClick: function( el, name ){
			return false;
		},
		// callback: click a link that does not have a sub menu
		// el is the link element (li); ev is the event obj
		onLinkClick: function( el, ev ){
			return false;
		},
		backLabel: 'Back',
		// Change to "true" to use the active item as back link label.
		useActiveItemAsBackLabel: true,
		// Change to "true" to add a navigable link to the active item to its child
		// menu.
		useActiveItemAsLink: false,
		// On close reset the menu to root
		resetOnClose: true
	};

	$.DLMenu.prototype = {
		_init: function( options ){
			// options
			this.options = $.extend( true, {}, $.DLMenu.defaults, options );
			// cache some elements and initialize some variables
			this._config();

			var animEndEventNames = {
				'WebkitAnimation': 'webkitAnimationEnd',
				'OAnimation': 'oAnimationEnd',
				'msAnimation': 'MSAnimationEnd',
				'animation': 'animationend'
			}, transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			};
			// animation end event name
			this.animEndEventName = animEndEventNames[Modernizr.prefixed( 'animation' )] + '.dlmenu';
			// transition end event name
			this.transEndEventName = transEndEventNames[Modernizr.prefixed( 'transition' )] + '.dlmenu';
			// support for css animations and css transitions
			this.supportAnimations = Modernizr.cssanimations;
			this.supportTransitions = Modernizr.csstransitions;

			this._initEvents();

		},
		_config: function(){
			this.open = false;
			this.$trigger = this.$el.children( '.dl-trigger' );

			/*

			 2/24/2016
			 change root $menu from ul.artists to #tabs
			 */
			// this.$menu = this.$el.children( 'ul.artists' );
			this.$menu = this.$el.children( 'ul.artists' );
			this.$menutop = $( '#tabs' );
			this.$menuitems = this.$menu.find( 'li:not(.dl-back)' );
			this.$el.find( 'ul.dl-submenu' ).prepend( '<li class="dl-back top"><i class="fa fa-angle-left fa-2x"></i><a id="dl-back-a" href="javascript:void(0)">' + this.options.backLabel + '</a></li>' );
			this.$back = this.$menu.find( 'li.dl-back' );
			// Set the label text for the back link.
			if( this.options.useActiveItemAsBackLabel ){
				this.$back.each( function(){
					var $this = $( this ), parentLabel = $this.parents( 'li:first' ).find( 'a:first' ).find( '.artistInfo' ).find( 'p:first' ).text();
					$this.find( 'a' ).html( parentLabel );
				} );
			}
			// If the active item should also be a clickable link, create one and put
			// it at the top of our menu.
			if( this.options.useActiveItemAsLink ){
				this.$el.find( 'ul.dl-submenu' ).prepend( function(){
					var parentli = $( this ).parents( 'li:not(.dl-back):first' ).find( 'a:first' );
					var hideLast = $( '.dl-menu li' ).last().toggleClass( 'hideme' );
					return '<li class="dl-parent"><a href="' + parentli.attr( 'href' ) + '">' + parentli.text() + '</a></li>';
				} );
			}

		},
		_initEvents: function(){
			var self = this;

			var
				triggerHashFlyin = function( target ){
					var $item = target, $everything = $item.children( 'div.tab-container' ), $submenu = $item.children( 'ul.dl-submenu' ), $parent = $( 'ul.dl-menu' ), $lastchild = $( 'ul.dl-menu' ).children().last(), $customButton = $( '.customArtistButtonTextRoot' ), $widgetMessage = $( '.widgetMessage' ), $places = $( '.places' ), $month = $( '.month' ), $days = $( '.days' ), $announce = $( '.announcements' ), $menutop = $( '#outer-container' ), $wrapper = $( '.wrapper' );

					$lastchild.addClass( 'hideme' );
					$customButton.addClass( 'hide' );
					$announce.addClass( 'hide' );
					//console.log( event, event.currentTarget );
					if( ($submenu.length > 0) ){//} && !($( event.currentTarget ).hasClass( 'dl-subviewopen' )) ){	//rishi - commenting this shit out - 1: event.currentTarget not being used anywhere. 2: its always window on the browsers it work... so i doubt $(window).hasClass will return any shit ever

						var $flyin = $submenu.clone().css( 'opacity', 0 ).insertAfter( self.$menu );
						var onAnimationEndFn = function(){
							self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classout ).addClass( 'dl-subview' );
							$widgetMessage.addClass( 'hide' );
							$places.addClass( 'hide' );
							$month.addClass( 'hide' );
							$days.addClass( 'hide' );
							$item.find( '.tab-container' ).addClass( 'top' );
							$item.addClass( 'dl-subviewopen' ).parents( '.dl-subviewopen:first' ).removeClass( 'dl-subviewopen' ).addClass( 'dl-subview' );
							$flyin.remove();
						};

						setTimeout( function(){
							$flyin.addClass( self.options.animationClasses.classin );
							self.$menu.addClass( self.options.animationClasses.classout );
							if( self.supportAnimations ){
								self.$menu.on( self.animEndEventName, onAnimationEndFn );

							}else{
								onAnimationEndFn.call();
							}

							self.options.onLevelClick( $item, $item.children( 'a:first' ).text() );
						} );
						return false;

					}else{
						self.options.onLinkClick( $item, event );
					}
				},
				hashCheck = function(){
					var artistDeeplink = true, afterHash = window.top.location.hash.slice( 1 );

					if( (new RegExp( 'artists' )).test( afterHash ) ){

						var artistId = afterHash.match( /\d+/g );
						if( artistId != null ){

							var numbersOnly = afterHash.replace( /\D/g, '' );
							var elementToOpen = $( 'li#' + numbersOnly );

							if( typeof elementToOpen[0] !== 'undefined' ){


								triggerHashFlyin( elementToOpen );
							}
						}
					}
				};


			if( window.top.location.hash ){
				if( !hashCheckedOnLoad ){
					hashCheckedOnLoad = 1;
					hashCheck();
				}
			}

			this.$menuitems.on( 'click.dlmenu', function( event ){
				//event.stopPropagation();
				if( !$( event.currentTarget ).hasClass( 'dl-subviewopen' ) ){
					var elem = window.top.document.querySelector( '#lineupwidget-iframe' ), rect = elem.getBoundingClientRect(),
						padding = 0;
					if( window.lineupSettings && window.lineupSettings.topSnapPadding !== undefined && window.lineupSettings.topSnapPadding !== '' ){
						padding = parseInt( window.lineupSettings.topSnapPadding, 10 );
					}

					//window.top.scrollTo( 0, window.top.document.body.scrollTop + rect.top - padding );	//rishi - firefox was returns 0 on document.body.scrollTop on sites, but not on dev environment(for some weird reason). $(window.top).scrollTop() does all the browser checks. so switching to that shit.
					window.top.scrollTo( 0, $( window.top ).scrollTop() + rect.top - padding );
				}
				var $item = $( this ), $everything = $item.children( 'div.tab-container' ), $submenu = $item.children( 'ul.dl-submenu' ), $parent = $( 'ul.dl-menu' ), $lastchild = $( 'ul.dl-menu' ).children().last(), $customButton = $( '.customArtistButtonTextRoot' ), $widgetMessage = $( '.widgetMessage' ), $places = $( '.places' ), $month = $( '.month' ), $days = $( '.days' ), $announce = $( '.announcements' ), $menutop = $( '#outer-container' ), $wrapper = $( '.wrapper' );

				$lastchild.addClass( 'hideme' );
				$customButton.addClass( 'hide' );
				$announce.addClass( 'hide' );

				// Only go to the next menu level if one exists AND the link isn't the
				// one we added specifically for navigating to parent item pages.
				if( ($submenu.length > 0) && !($( event.currentTarget ).hasClass( 'dl-subviewopen' )) ){

					var $flyin = $submenu.clone().css( 'opacity', 0 ).insertAfter( self.$menu );
					//var $flyin = $everything.clone().css( 'opacity', 0 ).insertAfter( $menutop ),
					var onAnimationEndFn = function(){
						self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classout ).addClass( 'dl-subview' );
						$widgetMessage.addClass( 'hide' );
						$places.addClass( 'hide' );
						$month.addClass( 'hide' );
						$days.addClass( 'hide' );
						$item.find( '.tab-container' ).addClass( 'top' );
						$item.addClass( 'dl-subviewopen' ).parents( '.dl-subviewopen:first' ).removeClass( 'dl-subviewopen' ).addClass( 'dl-subview' );

						$flyin.remove();
					};

					setTimeout( function(){
						$flyin.addClass( self.options.animationClasses.classin );
						self.$menu.addClass( self.options.animationClasses.classout );
						if( self.supportAnimations ){
							self.$menu.on( self.animEndEventName, onAnimationEndFn );

						}else{
							onAnimationEndFn.call();
						}

						self.options.onLevelClick( $item, $item.children( 'a:first' ).text() );
					} );
					return false;

				}else{
					self.options.onLinkClick( $item, event );
				}

			} );

			this.$back.on( 'click.dlmenu', function( event ){
				var $this = $( this );

				// if ( artistDeeplink ) {
				//     $this = elementToOpen;
				// }

				var $submenu = $this.parents( 'ul.dl-submenu:first' ), $item = $submenu.parent(), $flyin = $submenu.clone().insertAfter( self.$menu ), $lastchild = $( 'ul.dl-menu' ).children().last(), $customButton = $( '.customArtistButtonTextRoot' ), $widgetMessage = $( '.widgetMessage' ), $places = $( '.places' ), $month = $( '.month' ), $days = $( '.days' ), $announce = $( '.announcements' );

				$widgetMessage.removeClass( 'hide' );
				$places.removeClass( 'hide' );
				$month.removeClass( 'hide' );
				$days.removeClass( 'hide' );

				var onAnimationEndFn = function(){
					self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classin );
					$flyin.remove();
					$lastchild.removeClass( 'hide' );
					$customButton.removeClass( 'hide' );

				};

				setTimeout( function(){
					$flyin.addClass( self.options.animationClasses.classout );
					self.$menu.addClass( self.options.animationClasses.classin );
					if( self.supportAnimations ){
						self.$menu.on( self.animEndEventName, onAnimationEndFn );
					}else{
						onAnimationEndFn.call();
					}

					$announce.removeClass( 'hide' );
					$item.removeClass( 'dl-subviewopen' );

					var $subview = $this.parents( '.dl-subview:first' );
					if( $subview.is( 'li' ) ){
						$subview.addClass( 'dl-subviewopen' );
					}
					$subview.removeClass( 'dl-subview' );
				} );
			} );

		},
		closeMenu: function(){
			if( this.open ){
				this._closeMenu();
			}
		},
		_closeMenu: function(){
			var self = this, onTransitionEndFn = function(){
				self.$menu.off( self.transEndEventName );
				if( self.options.resetOnClose ){
					self._resetMenu();
				}
			};

			this.$menu.removeClass( 'dl-menuopen' );
			this.$menu.addClass( 'dl-menu-toggle' );
			this.$trigger.removeClass( 'dl-active' );

			if( this.supportTransitions ){
				this.$menu.on( this.transEndEventName, onTransitionEndFn );
			}else{
				onTransitionEndFn.call();
			}

			this.open = false;
		},
		openMenu: function(){
			if( !this.open ){
				this._openMenu();
			}
		},
		_openMenu: function(){
			var self = this;
			// clicking somewhere else makes the menu close
			$body.off( 'click' ).on( 'click.dlmenu', function(){
				self._closeMenu();
			} );
			this.$menu.addClass( 'dl-menuopen dl-menu-toggle' ).on( this.transEndEventName, function(){
				$( this ).removeClass( 'dl-menu-toggle' );
			} );
			this.$trigger.addClass( 'dl-active' );
			this.open = true;
		},
		// resets the menu to its original state (first level of options)
		_resetMenu: function(){
			this.$menu.removeClass( 'dl-subview' );
			this.$menuitems.removeClass( 'dl-subview dl-subviewopen' );
		}
	};

	var logError = function( message ){
		if( window.console ){
			window.console.error( message );
		}
	};

	$.fn.dlmenu = function( options ){
		if( typeof options === 'string' ){
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each( function(){
				var instance = $.data( this, 'dlmenu' );
				if( !instance ){
					logError( "cannot call methods on dlmenu prior to initialization; " + "attempted to call method '" + options + "'" );
					return;
				}
				if( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ){
					logError( "no such method '" + options + "' for dlmenu instance" );
					return;
				}
				instance[options].apply( instance, args );
			} );
		}else{
			this.each( function(){
				var instance = $.data( this, 'dlmenu' );
				if( instance ){
					instance._init();
				}else{
					instance = $.data( this, 'dlmenu', new $.DLMenu( options, this ) );
				}
			} );
		}
		return this;
	};

})( jQuery, window );
(function(w,d,$){

	var lineupwWidget = {
		params:{
			defaultHeight:2000,
			festivalName:'',
			eventId:'',
			useProxy:0,
			useRelease:0,
			css:'',
			showTBAStage:0,
			openCurrentSchedule:0
		},

		/*
			METHOD ORDER OF OPERATIONS
			1.  init
			2.  fetchParams
			3.  setEmdedStyles
			4.  preloader (disco ball)
			5.  lazyLoad (used within initglobalEvents)
			6.  ajax
				 A. processJSON
					a. prepWhenTab
					b. prepWhereTab
					c. prepArtistTab
					d. _sortByKey
			7.  makeIndexedObjects
			8.  handlebarInit
			9.  initTabs
			10. buildTab
				 A. _renderArtists
				 B. _renderWhenWhere
			11. resizeIframe
		 */

		init : function() {
			var self = this;
			self.fetchParams();
			if( self.params.festivalName !== '' && self.params.eventId !== '' ){
				self.setEmbedStyles( self.params );
				self.preloader();
				self.lazyLoad();
				self.ajax();
				self.initGlobalEvents();
			}
		},
		fetchParams: function(){
			this.params = $.extend( true, this.params, w.lineupSettings||{} );
		},
		setEmbedStyles: function( embedSettings ) {
			var self = this;
			var customStyles =
			".tab-container {background-color: "+embedSettings.bodyBGColor+"}"+
			".artists .artistSlot .artistInfo p.artist-title, .customArtistButtonTextRoot, .customArtistButtonText, .widgetMessage {color: "+embedSettings.artistCopyColor+"}"+
			"#nested-tab-1 .artists .artistSlot .artistInfo p:last-child, .dl-submenu .artistTime, .artists li a div p span.artistTime {color: "+embedSettings.artistCTAColor+"}"+
			".customArtistButtonText a, .customArtistButtonTextRoot, ul.days li.active i, .places a:hover, .places li.active a, .customArtistButtonTextRoot, .dl-submenu li.dl-back > a, .ribbon span{background-color: "+embedSettings.artistCTABGColor+"}"+
			".artist-row-separator {background-color:"+embedSettings.artistModuleBorderColor+";}";
			if( embedSettings.css !== '' ){
				customStyles += embedSettings.css;
			}
			$( [ "<style id='embedCodeStyles' type='text/css'>", customStyles, "</style>" ].join( '' ) ).appendTo('head');
		},

		// ## Preloader and Error Screens
		preloader: function() {
			var self = this,
				body = $('body');
				overlay = "<div id='overlay'><div class='forceaspectratio'></div><div class='img-container'><img src='http://tsm-festival-lineup-widget.s3.amazonaws.com/img/Preloader.gif' /></div><div id='progress'></div></div>";
				$(overlay).appendTo(body);
		},
		buildErrorScreen: function() {
			var self = this,
				body = $('body'),
				errorView ="<div id='overlay'><div class='forceaspectratio'></div><div class='errormsg'><p>we're sorry, there is some sort of error.</p><p>we're working to fix the issue, please try again later.</p></div><div class='img-container'><img src='http://tsm-festival-lineup-widget.s3.amazonaws.com/img/Preloader.gif' /></div></div>";
				$(errorView).appendTo(body);
		},

		// ## Processing and Sorting JSON
		// ### descr: manual ajax fn. set proxy url, endpoint, endpoint for release
		ajax : function() {
			var self = this,
				proxyurl = 'http://wac.450f.edgecastcdn.net/80450F/townsquaredigital.com/lineup-widget/lineupproxy.php',
				endpoint = [ 'http://tsmfestivalapps.com/festivals/', self.params.festivalName, '/event/', self.params.eventId, '/data' ].join( '' ),
				endpointRelease = ['http://release12.tsmfestivalapps.com/festivals/', self.params.festivalName, '/event/', self.params.eventId, '/data' ].join( '' ),
				scr = document.createElement( 'script' );

			if( self.params.useRelease ){
				endpoint = endpointRelease;
			}
			if( self.params.useProxy ){
				var cacheBusterTime = parseInt( new Date().getTime()/900000, 10 ) * 1000; //updates only every 15 minutes. example: 15mins = 15*60*1000ms = 900000ms
				endpoint = [ proxyurl, '?v=', cacheBusterTime, '&callback=lineupCallback&url=', endpoint ].join( '' );
			} else {
				endpoint += '?callback=lineupCallback';
			}
			var _isEmptyObj = function(obj) {
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						return false;
					}
					return true && JSON.stringify(obj) === JSON.stringify({});
				}
			}
			scr.id = "eventJSON";
			scr.src = endpoint;

			document.head.appendChild( scr );

				window.lineupCallback = function(json) {
					if ( !navigator.onLine || _isEmptyObj(json) ) {
						self.buildErrorScreen();
					}

					self.processJSON( json );
				}
		},
		processJSON : function( json ){
			var self = this,
				artists = json.artists.data,
				venues = json.venues,
				shows = json.shows,
				iframeContainer = $( window.top.document.querySelector( '#lineupwidget-iframe' ) ),
				iframeWrapper = $( window.top.document.querySelector( '#lineupwidget-iframe' ) );

			self.compositeJson = self.makeIndexedObjects( json );
			iframeContainer.css({height:self.params.defaultHeight + 'px'});

			// change yyyy-mm-dd to string month day
			var _convertDateFinal = function(shows, showsIndex) {
				var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
					months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					startDateStr,
					startDateObj,
					formattedStartDay,
					formattedStartMonth;

				Date.prototype.getDayName = function() {
					return days[ this.getDay() ];
				};
				Date.prototype.getMonthName = function() {
					return months[ this.getMonth() ];
				};

				if ( showsIndex === undefined ) {
					var formattedDayofMonth,
						slen = shows.length,
						dateconvertedComposite = {},
						compositeDays = [],
						compositeDateArr = [],
						compositeShowtimeDates = [],
						compositeHBWhen = {};

					for ( var i = 0; i < slen; i++ ) {
						compositeShowtimeDates.push(shows[i]);
						startDateStr = shows[i];
						startDateStr = startDateStr.replace(/\-/g,'/');
						startDateObj = new Date( startDateStr);
						formattedStartDay = startDateObj.getDayName();
						formattedDayofMonth = startDateObj.getDate();
						compositeDays.push(formattedStartDay);
						compositeDateArr.push(formattedDayofMonth);

						if (i < 1) {
							formattedStartMonth = startDateObj.getMonthName();
							dateconvertedComposite.month = formattedStartMonth;
						}

						compositeHBWhen[shows[i]] = {};
						compositeHBWhen[shows[i]].day = formattedStartDay;
						compositeHBWhen[shows[i]].dayOfMonth = formattedDayofMonth;
						compositeHBWhen[shows[i]].showTimeDate = shows[i];
						compositeHBWhen[shows[i]].shows = [];

					}
					dateconvertedComposite.days = compositeDays;
					dateconvertedComposite.daysOfMonth = compositeDateArr;
					dateconvertedComposite.showtimeDates = compositeShowtimeDates;
					dateconvertedComposite.compositeHBWhen = compositeHBWhen;

					return dateconvertedComposite;
				} else {
					var endDateObj,
						startDateDayOnly,
						formattedEndDay;

					startDateStr = shows[showsIndex].originalDateStart;
					startDateStr = startDateStr.replace(/\-/g,'/');
					startDateObj = new Date(startDateStr);
					endDateObj = new Date( shows[showsIndex].dateEnd.replace( /\-/g, '/' ) );
					formattedStartDay = startDateObj.getDayName();
					formattedStartMonth = startDateObj.getMonthName();
					startDateDayOnly = startDateObj.getDate();
					formattedEndDay = endDateObj.getDayName();

					shows[showsIndex].formattedStartDay = formattedStartDay;
					shows[showsIndex].formattedEndDay = formattedEndDay;
					shows[showsIndex].originalFormattedStartDay = shows[showsIndex].formattedStartDay;
					shows[showsIndex].formattedStartMonth = formattedStartMonth;
					shows[showsIndex].startDateDayOnly = startDateDayOnly;
				}
			}

			var _sortByKey = function (array, key1, key2) {
				var featureSorted = {};
				return array.sort(function(a, b){
					var x = a[key1],
						y = b[key1],
						key2optional;
					if ( typeof key2 !== 'undefined' ) {
						var x2 = a[key2],
							y2 = b[key2],
							key2optional = true;
					}
					if ( x < y ) {
						return -1;
					}
					else if ( x > y ) {
						return 1;
					}
					if ( x2 < y2 ) {
						return -1;
					}
					else if ( x2 > y2 ) {
						return 1;
					}
					else if ( a.sortOrder > b.sortOrder ) {
						return 1;
					}
					else if ( a.sortOrder < b.sortOrder ) {
						return -1;
					}
					else if ( a.title > b.title ) {
						return 1;
					}
					else if ( a.title < b.title ) {
						return -1;
					}
					else {
						return 0;
					}
				});
			}

			// build Artist Module
			var _prepArtistModule = function(artists, aIndex) {
				var headlinerClasses = {
					li: 'headline',
					a: 'headliner',
					img: 'featured'
				},
				nonheadlinerClasses = {
					li: 'mediaObj',
					a: 'mediaObj',
					img: 'media'
				};

				artists[aIndex].sanitizedName = artists[aIndex].title.replace(/\s+/g, '-').replace(/[^a-zA-Z-]/g, '').toLowerCase();
				artists[aIndex].sanitizedName = artists[aIndex].sanitizedName.replace( /-+/g, '-' );
				artists[aIndex].flyin.sanitizedName = artists[aIndex].sanitizedName;

				/* associate correct classes to artist object if featured */
				if ( artists[aIndex].featuredArtist && artists[aIndex].featuredArtist == 1 ) {
					artists[aIndex].artistObjLi = headlinerClasses.li;
					artists[aIndex].artistObjA = headlinerClasses.a;
					artists[aIndex].artistObjImg = headlinerClasses.img;
					artists[aIndex].headliner = 1;
				} else {
					artists[aIndex].mediaObj = 1;
					artists[aIndex].artistObjLi = nonheadlinerClasses.li;
					artists[aIndex].artistObjA = nonheadlinerClasses.a;
					artists[aIndex].artistObjImg = nonheadlinerClasses.img;
				}
				return artists;
			};
			// build Artist Tab
			var prepArtistTab = function(venues, shows, artists) {
				var artistsWithShows = self.compositeJson.artistsWithShows.data,
					vlen = venues.length;
				var date_sort_asc = function (a, b) {
					var d1 = new Date( a.originalDateStart + " " + a.timeStart ),
						t1 = d1.getTime(),
						d2 = new Date( b.originalDateStart + " " + b.timeStart ),
						t2 = d2.getTime();
					if( t1 > t2 ){
						return 1;
					}else if( t2 > t1 ){
						return -1;
					}
					return 0;
				};

				// associate shows name with show id
				if( !vlen ){
					for ( var j = 0, slen = shows.length; j < slen ; j++ ) {
						_convertDateFinal(shows, j);
					}
				}else{
					for ( var j = 0, slen = shows.length; j < slen ; j++ ) {	//rishi - this look to check missing venues if any and mark them TBA if missing.
						var foundVenue = 0;
						for ( var i = 0; i < vlen; i++) {
							if( shows[j].venueId === venues[i].id ){
								foundVenue++;
							}
						}
						if( !foundVenue ){
							shows[j].venueId = 'TBA';
						}
					}

					for ( var i = 0; i < vlen; i++) {
						for ( var j = 0, slen = shows.length; j < slen ; j++ ) {
							// add class flags
							_convertDateFinal(shows, j);
							if( shows[j].venueId === venues[i].id ){
								shows[j].venueId = venues[i].title;
							}
						}
					};
				}
				// place shows object within artist
				for ( var i = 0, alen = artists.length; i < alen; i++ ) {
					// convert sort order from string to number
					artists[i].sortOrder = Number(artists[i].sortOrder);
					_prepArtistModule( artists, i );
					var aShows = [];
					for (var j = 0, slen = shows.length; j < slen; j++) {
						if ( artists[i].id === shows[j].objectId ) {
							aShows.push(shows[j]);

							// add artistInfo and flyin key vals to shows
							shows[j].artistInfo = artists[i];
						}

					}
					artists[i].venues = aShows;
					if ( artists[i].venues && artists[i].venues.length > 1 ) {
						artists[i].venues.sort(date_sort_asc);

					}
					if( artists[i].venues ){
						var venueByName = {};
						for (var j = 0, avlen = artists[i].venues.length; j < avlen; j++) {


							// 6/30/2017 replacing in-render uppercase fn
							if (artists[i].venues[j].formattedTimeEnd !== null) {
								artists[i].venues[j].formattedTimeEnd = artists[i].venues[j].formattedTimeEnd.toUpperCase();
							}
							if (artists[i].venues[j].formattedTimeStart !== null) {
								artists[i].venues[j].formattedTimeStart = artists[i].venues[j].formattedTimeStart.toUpperCase();
							}


							if( !venueByName[ artists[i].venues[j].venueId ] ){
								venueByName[ artists[i].venues[j].venueId ] = [];
							}
							venueByName[ artists[i].venues[j].venueId ].push( j );
						}
						artists[i].venuesByName = venueByName;
					}
				}

				// show/hide tabs
				for ( var i = 0, alen = artists.length; i < alen; i++ ) {
					/* schedule */
					if ( artists[i].venues && artists[i].venues.length == 0 ) {
						artists[i].scheduleTab = 'hide';
						artists[i].flyin.scheduleTab = 'hide';
					}
					/* about */
					if ( artists[i].artistDetail.main.description == "" ) {
						artists[i].aboutTab = 'hide';
						artists[i].flyin.aboutTab = 'hide';
					}
					/* embedvideos */
					if ( !artists[i].hasOwnProperty('embedvideos') ) {
						artists[i].videoTab = 'hide';
						artists[i].flyin.videoTab = 'hide';
					}
					/* social */
					if ( (!artists[i].hasOwnProperty('facebook')) && (!artists[i].hasOwnProperty('twitter')) && (!artists[i].hasOwnProperty('web')) && (!artists[i].hasOwnProperty('youtube_channel')) && (!artists[i].hasOwnProperty('instagram'))) {
						artists[i].socialTab = 'hide';
						artists[i].flyin.socialTab = 'hide';
					}
					if ( artists[i].facebook == '' ) {
						artists[i].fbToggle = 'hide';
						artists[i].flyin.fbToggle = 'hide';
					}
					if ( artists[i].twitter == '' ) {
						artists[i].twToggle = 'hide';
						artists[i].flyin.twToggle = 'hide';
					}
					if ( artists[i].youtube_channel == '' ) {
						artists[i].ycToggle = 'hide';
						artists[i].flyin.ycToggle = 'hide';
					}
					if ( artists[i].instagram == '' ) {
						artists[i].inToggle = 'hide';
						artists[i].flyin.inToggle = 'hide';
					}
					if ( artists[i].web == '' ) {
						artists[i].wsToggle = 'hide';
						artists[i].flyin.wsToggle = 'hide';
					}
					artists[i].flyin.venues = artists[i].venues;
				}
				return artists;
			}

			// buildWhenTab
			var prepWhenTab = function( artists ) {
				var showsByDate = self.compositeJson.showsByDate,
					showtimes = []
					shlen = showtimes.length,
					showtimeComposite = {};


				for (var i in showsByDate) {
					_sortByKey( showsByDate[i], 'dateStart', 'timeStart');
					var k = 0,l = showsByDate[i].length;
					for( var j = 0 ; j<l ; j++ ){
						if( showsByDate[i][j].sortBottom ){
							showsByDate[i] = [].concat( showsByDate[i].slice(0,j), showsByDate[i].slice( j+1 ), showsByDate[i][j] );
							j--;
							l--;
						}
					}
				}
				for (var i in showsByDate) {
					showtimes.push(i);
				}
				showtimes.sort();

				var rootTemplate = _convertDateFinal(showtimes);
				showtimeComposite.rootTemplate = rootTemplate;
				showtimeComposite.showsByDate = showsByDate;

				for (var i in showtimeComposite.showsByDate ) {

					// builds individual shows array
					for (var j = 0, slen = showtimeComposite.showsByDate[i].length; j < slen; j++ ) {

						if ( (showtimeComposite.showsByDate[i][j].dateStart !== 'undefined') && ( showtimeComposite.showsByDate[i][j].dateStart === i ) ) {
							var nonrepeatArtistShow = showtimeComposite.showsByDate[i][j];
							showtimeComposite.rootTemplate.compositeHBWhen[i].shows.push(nonrepeatArtistShow);
						}

						for ( var k in self.compositeJson.artistsById ) {
							if (showtimeComposite.showsByDate[i][j].objectId == self.compositeJson.artistsById[k].id ) {
								showtimeComposite.showsByDate[i][j] = self.compositeJson.artistsById[k];
							}
						}
					}
				}

				// ahn - billing order edit - sort according to line up sort order
				if (self.compositeJson.sortMethod != 'default') {
					for (var i in showtimeComposite.showsByDate ) {
						showtimeComposite.showsByDate[i].sort(function( a, b ){
							if ( a.sortOrder > b.sortOrder ) {
								return 1;
							}
							else if ( a.sortOrder < b.sortOrder ) {
								return -1;
							}
						});

					}
				}


				return showtimeComposite;
			}
			// buildWhereTab
			var prepWhereTab = function(){

				if( !self.compositeJson.isVenue ){
					return {
						rootTemplate:[],
						showsByVenueName:[],
						sanitizedVenueNames: []
					};
				}
				var venueTab = {},
					venueTabNames = [],
					venueTabComposite = {},
					sanitized = [],
					toSanitize,
					venuesById = self.compositeJson.venuesById,
					showsById = self.compositeJson.showsById,
					showsByVenueId = self.compositeJson.showsByVenueId,
					l = self.compositeJson.sortedVenues.length,
					compositeHBWhere = {};

				for ( var key in venueTab ){
					venueTabNames.push(key);
				}
				venueTabNames.sort();

				venueTabComposite.rootTemplate = venueTabNames;
				venueTabComposite.rootTemplate = [];
				for( i = 0; i<l; i++ ){
					if( self.compositeJson.showsByVenueId[ self.compositeJson.sortedVenues[i].id ] ){
						venueTabComposite.rootTemplate.push( self.compositeJson.sortedVenues[i].title );

						compositeHBWhere[self.compositeJson.sortedVenues[i].title] = [];
						compositeHBWhere[self.compositeJson.sortedVenues[i].title].venueName = self.compositeJson.sortedVenues[i].title;
					}
				}

				// index variable for handlebars wheretab loop
				//var compositeHBWhereIndex = 0;
				for ( var i in showsByVenueId ) {
					_sortByKey( showsByVenueId[i], 'originalDateStart', 'timeStart');

					if( venuesById[ i ] ){

						venueTab[ venuesById[ i ].title ] = showsByVenueId[i];

						for ( var j in compositeHBWhere ) {
							if ( (j !== undefined) && ( j == venuesById[ i ].title ) ) {
								compositeHBWhere[j].shows = [];
								compositeHBWhere[j].venueId = i;
							}
						}

					}else{
						if( self.params.showTBAStage ){
							venueTab[ 'TBA' ] = showsByVenueId[ i ];
						}
					}

				}

				for (var i = 0, rlen = venueTabComposite.rootTemplate.length; i < rlen; i++) {
					toSanitize = venueTabComposite.rootTemplate[i].replace(/\s+/g, '-').replace(/[^a-zA-Z-]/g, '').toLowerCase();
					compositeHBWhere[self.compositeJson.sortedVenues[i].title].sanitizedName = toSanitize;
					sanitized.push(toSanitize);
				}

				for ( var i in showsById  ) {
					for ( var j in compositeHBWhere ) {

						if ( showsById[i].venueId == compositeHBWhere[j].venueId) {
							compositeHBWhere[j].shows.push(showsById[i]);
						}
					}
				}

				venueTabComposite.sanitizedVenueNames = sanitized;
				venueTabComposite.showsByVenueName = venueTab;
				venueTabComposite.compositeHBWhere = compositeHBWhere;
				for (var i in venueTabComposite.showsByVenueName ) {
					for (var j = 0, vlen = venueTabComposite.showsByVenueName[i].length; j < vlen; j++ ) {

						for ( var k in self.compositeJson.artistsById ) {

							if (venueTabComposite.showsByVenueName[i][j].objectId == self.compositeJson.artistsById[k].id ) {

								venueTabComposite.showsByVenueName[i][j] = self.compositeJson.artistsById[k];
							}
						}
					}
				}
				// ahn - billing order edit - sort according to line up sort order
				if (self.compositeJson.sortMethod != 'default') {
					for (var i in venueTabComposite.showsByVenueName ) {
						venueTabComposite.showsByVenueName[i].sort(function( a, b ){
							if ( a.sortOrder > b.sortOrder ) {
								return 1;
							}
							else if ( a.sortOrder < b.sortOrder ) {
								return -1;
							}
						});
					}
				}

				return venueTabComposite;
			}
			/*-- end all private process JSON methods --*/

			var whenRender = prepWhenTab(artists),
				whereRender = prepWhereTab(artists),
				artistRender = prepArtistTab(venues, shows, artists),
				allRender = {};

				/* Bug testing for JSON issues: set shows.flyin AFTER everything is prepped, directly before handlebar render init */
				for ( var i = 0, alen = artistRender.length; i < alen; i++ ) {
					// convert sort order from string to number
					for (var j = 0, slen = shows.length; j < slen; j++) {
						if ( artistRender[i].id === shows[j].objectId ) {
							/* attempting a standard object copy*/
							shows[j].flyin = artists[i].flyin;
						}
					}
				}

			artistRender = _sortByKey(artistRender, 'artistObjImg');
			allRender.artists = artistRender;
			allRender.when = whenRender;
			allRender.where = whereRender;
			allRender.settings = self.params;
			allRender.baseURL = self.compositeJson.baseURL;
			allRender.compFestivalName = self.compositeJson.festivalName;

			if ( self.compositeJson.isSchedule ) {
				allRender.hasDates = 1;
				if ( self.compositeJson.isSchedule ) {
					allRender.hasVenues = 1;
				}
			}

			self.handlebarInit( allRender );
		},
		makeIndexedObjects: function( json ){
			var self = this,
				baseURL = location.protocol + '//' + location.host + location.pathname,
				artists = json.artists.data,
				venues = json.venues,
				shows = json.shows,
				lineupSort = json.eventData.lineupSort,
				vlen = venues.length,
				slen = shows.length,
				composite = {
					artistsById: {},
					artistsWithShows: {},
					showsByDate: {},
					baseURL: baseURL,
					showsByDateWithArtists: {},
					showsById: {},
					showsByTitle: {},
					showsByVenueId: {},
					showDays: {},
					venuesById: {},
					venuesByName: {},
					venuesByShowId: {},
					festivalName:json.name,
					sortMethod:lineupSort,
					isVenue:vlen,
					isSchedule:slen,
					sortedVenues:self.sortVenues( JSON.parse( JSON.stringify( json.venues ) ) )
				},
				artistsWithVideos = {};

			for (var j = 0, slen = shows.length; j < slen; j++) {
				var
					timeStart = shows[ j ].timeStart,
					dateStart = shows[ j ].dateStart,
					d = new Date( [ dateStart.replace(/\-/g,'/'), timeStart ].join( ' ' ) ),
					hh = d.getHours();

				shows[ j ].originalDateStart = shows[ j ].dateStart;
				shows[ j ].originalFormattedStartDay = shows[ j ].formattedStartDay;
				if( hh >= 0 && hh <=4 && timeStart ){
					var mm = d.getMonth() + 1,
						dd = d.getDate() - 1,
						mins = d.getMinutes();
					if( mm < 10 ){
						mm = "0" + mm;
					}
					if( dd < 10 ){
						dd = "0" + dd;
					}
					shows[ j ].dateStart = [ d.getFullYear(), mm, dd ].join( '-' );
					//sorting is done on timeStart. we change it to .

					shows[ j ].sortBottom = 1;
				}
			}
			for ( var i = 0, alen = artists.length; i < alen; i++ ) {
				composite.artistsById[ artists[i].id ] = artists[i];
				artists[i].flyin = {};
				artists[i].objectId = artists[i].id;
				artists[i].scheduleTab = '',
				artists[i].aboutTab = '',
				artists[i].videoTab = '',
				artists[i].mediaTab = '',
				artists[i].fbToggle = '',
				artists[i].twToggle = '',
				artists[i].ycToggle = '',
				artists[i].inToggle = '',
				artists[i].facebook = '',
				artists[i].twitter = '',
				artists[i].youtube_channel = '',
				artists[i].instagram = '',
				artists[i].web = '';
				artists[i].sortOrder = Number(artists[i].sortOrder);

				// reorganizing data for flyin
				artists[i].flyin.id = artists[i].id;
				artists[i].flyin.objectId = artists[i].id;
				artists[i].flyin.customArtistLink = artists[i].customArtistLink;
				artists[i].flyin.customArtistButtonText = artists[i].customArtistButtonText;
				artists[i].flyin.title = artists[i].title;
				artists[i].flyin.subtitle = artists[i].subtitle;
				artists[i].flyin.artistDetail = artists[i].artistDetail;
				artists[i].flyin.imageURL = artists[i].imageURL;
				artists[i].flyin.scheduleTab = '',
				artists[i].flyin.aboutTab = '',
				artists[i].flyin.videoTab = '',
				artists[i].flyin.mediaTab = '',
				artists[i].flyin.fbToggle = '',
				artists[i].flyin.twToggle = '',
				artists[i].flyin.ycToggle = '',
				artists[i].flyin.inToggle = '',
				artists[i].flyin.facebook = '',
				artists[i].flyin.twitter = '',
				artists[i].flyin.youtube_channel = '',
				artists[i].flyin.instagram = '',
				artists[i].flyin.web = '';



				var aShows = [],
					aSocial = [],
					links = artists[i].artistDetail.links,
					hideIcons = [];

				for ( var j = 0, llen = links.length; j < llen; j++ ) {
					if ( links[j].info.type === 'youtube' ) {
						if ( typeof artists[i].embedvideos !== 'undefined' ) {
							artists[i].embedvideos.push(links[j].info.embed);
							artists[i].flyin.embedvideos.push(links[j].info.embed);
							artistsWithVideos[ artists[i].id ].push(links[j].info.embed);
						} else {
							artists[i].embedvideos = [];
							artists[i].flyin.embedvideos = [];
							artists[i].embedvideos.push(links[j].info.embed);
							artists[i].flyin.embedvideos.push(links[j].info.embed);
							artistsWithVideos[ artists[i].id ] = [];
							artistsWithVideos[ artists[i].id ].push(links[j].info.embed);
						}
					}
					if ( links[j].info.type === 'facebook' ) {
						artists[i].facebook = links[j].link;
						artists[i].hasfb = 1;
						artists[i].flyin.facebook = links[j].link;
						artists[i].flyin.hasfb = 1;
					}
					if ( links[j].info.type === 'twitter' ) {
						artists[i].twitter = links[j].link;
						artists[i].hastw = 1;
						artists[i].flyin.twitter = links[j].link;
						artists[i].flyin.hastw = 1;
					}
					if ( links[j].info.type === 'youtube_channel' ) {
						artists[i].youtube_channel = links[j].link;
						artists[i].hasyt = 1;
						artists[i].flyin.youtube_channel = links[j].link;
						artists[i].flyin.hasyt = 1;
					}
					if ( links[j].info.type === 'instagram' ) {
						artists[i].instagram = links[j].link;
						artists[i].hasig = 1;
						artists[i].flyin.instagram = links[j].link;
						artists[i].flyin.hasig = 1;
					}
					if ( links[j].info.type === 'web' ) {
						artists[i].web = links[j].link;
						artists[i].hasweb = 1;
						artists[i].flyin.web = links[j].link;
						artists[i].flyin.hasweb = 1;
					}
				}

				for (var j = 0, slen = shows.length; j < slen; j++) {
					if ( artists[i].id === shows[j].objectId ) {
						aShows.push(shows[j]);
					}
					artists[i].venues = aShows;
				}
			}

			composite.artistsWithShows.data = artists;

			for( i = 0; i < slen; i++ ){
				composite.showsById[ shows[i].id ] = shows[i];
				composite.showsByTitle[ shows[i].title ] = shows[i];
				if ( composite.showsByVenueId[ shows[i].venueId ] === undefined ){
					composite.showsByVenueId[ shows[i].venueId ] = [];
				}
				composite.showsByVenueId[ shows[i].venueId ].push( shows[i] );
				var showTime = shows[i].dateStart;

				if ( !composite.showsByDate.hasOwnProperty(shows[i].dateStart) ) {
					composite.showsByDate[showTime] = [];
					composite.showsByDateWithArtists[ showTime ] = [];
				}
				composite.showsByDate[showTime].push(shows[i]);
				composite.showsByDateWithArtists[ showTime ].push( shows[i].objectId );
			}

			for ( var i = 0; i < vlen; i++ ) {
				composite.venuesById[ venues[i].id ] = venues[i];
				composite.venuesByName[ venues[i].title ] = venues[i];
			}

			for ( var i in composite.showsById ){
				var venueId = composite.showsById[ i ].venueId;
				composite.venuesByShowId[ i ] = composite.venuesById[ venueId ];
			}
			self.onWindowLoadEvent(artistsWithVideos);
			return composite;
		},
		sortVenues:function( venues ){
			var l = venues.length,
				i=0;
			for( i=0;i<l;i++ ){
				if( venues[i].sortOrder === undefined ){
					var temp = venues[i];
					venues = [].concat( venues.slice(0,i), venues.splice(i+1, venues.length ), temp );
					l--;
					i--;
				}
			}

			venues.sort(function( a, b ){
				if( a.sortOrder === undefined && b.sortOrder === undefined ){
					return a.title.localeCompare( b.title );
				}
				return a.sortOrder > b.sortOrder;
			});
			return venues;
		},

		// ## Rendering: Root Template and Tabs
		handlebarInit: function( allRender ) {
			var self = this;
			Handlebars.partials = Handlebars.templates;
			/*// Register all partials
			document.querySelectorAll( "#all-partials script" ).forEach(function( scriptTag ){
				var id = scriptTag.id;
				Handlebars.registerPartial( id, $( "#" + id ).html() );
			});

			// Compile HB
			var hbTemplate = Handlebars.templates[ "hbinit" ],//$('#hbinit').html(),
				hbContent = allRender,
				hbTemplateScript = Handlebars.compile(hbTemplate),
				hbHTML = hbTemplateScript(hbContent);*/
			var
				hbHTML = Handlebars.templates.hbinit( allRender );
			$('#content-wrap').html(hbHTML);

			/*var removehb = document.getElementById('hbinit');
			removehb.remove();*/


			self.resizeIframe();
			// !Important: init tabs MUST be called after iFrame resized
			self.initTabs();

			// Garbage collection
			allRender = null;
			self.compositeJson = null;

		},
		// ## User Interface
		// findViewportSize method deleted: not in use
		lazyLoad: function() {
				var self = this,
					root = window,
					echo = {},
					offset, poll, delay, useDebounce, unload;

				var _callback = function() {};

				var _isHidden = function(element) {
					return (element.offsetParent === null);
				};

				var _inView = function(element, view) {
					if (_isHidden(element)) {
						return true;
					}

					var box = element.getBoundingClientRect();
					return (box.right >= view.l && box.bottom >= view.t && box.left <= view.r && box.top <= view.b);
				};

				var _debounceOrThrottle = function() {
					if (!useDebounce && !!poll) {
						return;
					}
					clearTimeout(poll);
					poll = setTimeout(function() {
						_render();
						poll = null;
					}, delay);
				};

				var _init = function() {
					opts = {
						offset: 400,
						throttle: 50,
						debounce: false,
						unload: false,
						callback: function (element, op) {

						}
					};
					var offsetAll = opts.offset || 0;
					var offsetVertical = opts.offsetVertical || offsetAll;
					var offsetHorizontal = opts.offsetHorizontal || offsetAll;
					var optionToInt = function(opt, fallback) {
						return parseInt(opt || fallback, 10);
					};
					offset = {
						t: optionToInt(opts.offsetTop, offsetVertical),
						b: optionToInt(opts.offsetBottom, offsetVertical),
						l: optionToInt(opts.offsetLeft, offsetHorizontal),
						r: optionToInt(opts.offsetRight, offsetHorizontal)
					};
					delay = optionToInt(opts.throttle, 250);
					useDebounce = opts.debounce !== false;
					unload = !!opts.unload;
					callback = opts.callback || callback;
					_render();
					if (document.addEventListener) {
						window.top.addEventListener('scroll', _debounceOrThrottle, false);
						root.addEventListener('scroll', _debounceOrThrottle, false);
						root.addEventListener('load', _debounceOrThrottle, false);
					} else {
						window.top.attachEvent('onscroll', _debounceOrThrottle);
						root.attachEvent('onscroll', _debounceOrThrottle);
						root.attachEvent('onload', _debounceOrThrottle);
					}
				};

				var _render = function() {
					var nodes = document.querySelectorAll('img[data-echo], [data-echo-background]');
					var length = nodes.length;
					var src, elem;
					var view = {
						l: 0 - offset.l,
						t: 0 - offset.t,
						b: (root.innerHeight || document.documentElement.clientHeight) + offset.b,
						r: (root.innerWidth || document.documentElement.clientWidth) + offset.r
					};
					for (var i = 0; i < length; i++) {
						elem = nodes[i];
						if (_inView(elem, view)) {
							if (unload) {
								elem.setAttribute('data-echo-placeholder', elem.src);
							}

							if (elem.getAttribute('data-echo-background') !== null) {
								elem.style.backgroundImage = "url(" + elem.getAttribute('data-echo-background') + ")";
							} else {
								elem.src = elem.getAttribute('data-echo');
							}

							if (!unload) {
								elem.removeAttribute('data-echo');
								elem.removeAttribute('data-echo-background');
							}

							_callback(elem, 'load');
						} else if (unload && !!(src = elem.getAttribute('data-echo-placeholder'))) {

							if (elem.getAttribute('data-echo-background') !== null) {
								elem.style.backgroundImage = "url(" + src + ")";
							} else {
								elem.src = src;
							}

							elem.removeAttribute('data-echo-placeholder');
							_callback(elem, 'unload');
						}
					}
					if (!length) {
						_detach();
					}
				};

				var _detach = function() {
					if (document.removeEventListener) {
						root.removeEventListener('scroll', _debounceOrThrottle);
					} else {
						root.detachEvent('onscroll', _debounceOrThrottle);
					}
					clearTimeout(poll);
				};
			_init();
		},
		initTabs: function() {
			var self = this,
				tabArray = [ '#main-outer-container', '#artist-inner-container' ],
				whenwhereTabs = [ '#where-outer-container', '#when-outer-container' ],
				tabOptions = {},
				today = new Date(),
				dd = today.getDate(),
				mm = today.getMonth()+1,
				yy = today.getFullYear();

			if ( mm < 10 ){
				mm = "0" + mm;
			}
			if ( dd < 10 ){
				dd = "0" + dd;
			}
			var d = [ yy, mm, dd ].join( '-' );

			for( var i = 0; i < whenwhereTabs.length;i++ ){
				var tab = $( whenwhereTabs[i] ),
					hash = w.top.location.hash;
				if( tab.length && tab.find( '.tab' ).length ){
					tabArray.push( whenwhereTabs[i] );
					if ( !(hash && hash.match( /#schedule\// ) ) ) {
						if( whenwhereTabs[ i ] === '#when-outer-container' ){
							var container = $( '#when-outer-container' ),
								dateMatchedElement = container.find( 'a[href="#schedule/'+d+'"]' );

							if( dateMatchedElement.length ){
								if( self.params.openCurrentSchedule ){
									tabOptions[ tabArray[ 0 ] ] = {
										defaultTab:$( "#main-outer-container #navtabs a[href='#nested-tab-2']" ).parent()
									};
								}

								tabOptions[ whenwhereTabs[ i ] ] = {
									defaultTab:dateMatchedElement.parent()
								};

							}
						}
					}
				}
			}
			for ( var i = 0; i < tabArray.length;i++ ) {
				var tab = $( tabArray[i] );
				tab.easytabs( tabOptions[ tabArray[i] ] || {} );
			}
		},
		initFlyin: function() {
			var self = this;
			//flyin module and animations
			$( '#nested-tab-1, .tab-0, .tab-1, .tab-2, .tab-3, .tab-4' ).dlmenu();
		},
		renderYTiFrame: function( vidlisting, event ) {

			var self = this,
				vidlisting = vidlisting,
				ytURL,
				youtubeEmbed,
				artistID = event.target.className,
				iframeArr = [];


			artistID = artistID.replace(/\D+/g, '');

			var artistVids = vidlisting[artistID],
				getID = document.getElementById('artist-tab-c');

			if ( vidlisting.hasOwnProperty(artistID) ) {
				for ( var i = 0, alen = artistVids.length; i < alen; i++ ) {
					var videoembedID = 'videoembed-'+i+'-'+artistID;
					var getiframe = document.getElementsByClassName(videoembedID);
					ytURL = artistVids[i];
					iframeArr.push(getiframe);
				}

				if ( event.target.id === 'video') {

					for ( var i = 0, alen = artistVids.length; i < alen; i++ ) {
						videoembedID = 'videoembed-'+i+'-'+artistID;
						ytURL = artistVids[i];
						getiframe = document.getElementsByClassName(videoembedID);

						for (var j = 0, ilen = getiframe.length; j < ilen; j++) {
							if ( ytURL === '' ){
								if ( getiframe[j] && getiframe[j].parentNode && getiframe[j].parentNode.parentNode ){
									getiframe[j].parentNode.parentNode.removeChild( getiframe[j].parentNode );
								}
							} else {
								getiframe[j].src = 'https:' + ytURL;
							}
						}

					}

				} else if ( event.target.id !== 'video') {

					for ( var i = 0, ilen = iframeArr[0].length; i < ilen; i++ ) {
						iframeArr[0][i].src = '';
					}
				}

			}
		},
		fancyHorizontalScroll: function( obj ){
			//so fancy :|
			var
				self = this,
				el = $( obj.menuSelector ),
				leftNav = $( '<div class="' + obj.namespace + '-nav horizontal-subnav-nav left-nav fa"></div>' ),
				rightNav = $( '<div class="' + obj.namespace + '-nav horizontal-subnav-nav right-nav fa"></div>' ),
				elContainer = $( '.' + obj.namespace + '-container' );

			var checkScroll = function( e ){
					var
						w = el.width(),
						sw = el[0].scrollWidth,
						sl = el[0].scrollLeft;

					if( w < sw ){
						if( sl === 0 ){
							leftNav.removeClass( 'on' );
						}else{
							leftNav.addClass( 'on' );
						}
						if( sl + w + 40 === sw ){
							rightNav.removeClass( 'on' );
						}else{
							rightNav.addClass( 'on' );
						}
					}
				},
				moveNav = function( dir ){
					if( dir ){
						el[0].scrollLeft += 100;
					}else{
						el[0].scrollLeft -= 100;
					}
				},
				init = function(){
					el.wrap( '<div class="' + obj.namespace + '-container subnav-container"></div>' );
					elContainer = $( '.' + obj.namespace + '-container' );
					elContainer.append( leftNav, rightNav );
					$( obj.outerContainer ).on( 'easytabs:after', checkScroll );
					el.on( 'scroll', checkScroll );
					leftNav.on( 'click', function(){
						moveNav( 0 );
					});
					rightNav.on( 'click', function(){
						moveNav( 1 );
					});
				};

			self.init = init;
			return self;
		},

		// ## Global Events
		onWindowLoadEvent : function( vidlisting ) {
			var self = this,
				vidlisting = vidlisting;
			$(window).load(function() {
				self.onNavTabClickEvent(vidlisting);
				self.initFlyin();
				$( '#main-outer-container #artist-inner-container' ).easytabs({});
				$('#overlay').remove();
			});
		},
		onNavTabClickEvent : function( vidlisting ) {

			var self = this,
				vidlisting = vidlisting,
				videoTab = $('.dl-subviewopen li.active'),
				navTabs = $('#navtabs.etabs li' );

			$('#navtabs, .panel-container, .artistSlot').on('click', function(){
					self.lazyLoad();
					self.resizeIframe();
			});
			$('#artist-inner-container .etabs li a').on('click', function( event ){
				self.renderYTiFrame(vidlisting, event);
			});
			$('#artist-inner-container' ).on( 'easytabs:before', function( e, $clicked, $targetPanel, settings ){
				var allClasses = [ 'globalabout-active', 'globalschedule-active', 'globalvideo-active', 'globalshare-active' ],
					target = $( e.target ),
					newClass = $targetPanel.attr( 'data-containername' ) + '-active',
					nonFirstActiveClass = 'nonfirst-active',
					allPanels = target.find(
						allClasses.map(function(cls){
							return 'div.' + cls.replace( '-active' ,'' )
						}).join( ',' )
					);

				if( allPanels[0] == $targetPanel[0] ){
					target.removeClass( nonFirstActiveClass );
				}else{
					target.addClass( nonFirstActiveClass );
				}
				target.removeClass( allClasses.join( ' ' ) );
				target.addClass( newClass );
			});
		},
		initGlobalEvents: function() {
			var self = this;
			$( 'body' ).on( 'click', '.artistShare', function(e){
				e.preventDefault();
				var elem = $( e.currentTarget );
				if( elem.find( '.fb' ).length ){
					self.popFbShare( elem.children( 'a' )[0] );
				}else if( elem.find( '.tw' ).length ){
					self.popTwitterShare( elem.children( 'a' )[0] );
				}
			}).on( 'click', '.dl-back', function( e ){
				self.resizeIframe();
			});
		},
		resizeIframe: function() {
			var self = this,
				iframeH = self.params.defaultHeight,
				body = $( 'body' ),
				ctr = 0,
				timer;
			timer = window.setInterval(function(){
				var newHeight = body.height();
				if( newHeight !== iframeH ){
					iframeH = newHeight;
					$( window.top.document.querySelector( '#lineupwidget-iframe' ) ).css({'min-height':100+'vh'});
					$( window.top.document.querySelector( '#lineupwidget-iframe' ) ).css({height:iframeH+'px'});
				}
				ctr++;
				if( ctr === 20 ){
					clearTimeout( timer );
				}
			}, 250 );
		},

		// ## Social Media
		FBShare: function() {
			var parentURL = document.referrer;
			FB.ui({
				method: 'share',
				href: parentURL,
				caption:'See artist at festival',
				picture:'http://popcrush.com/files/2016/04/glamour1.jpg?w=1020&h=495&zc=1&s=0&a=t&q=89',
				description:'See ',
				message:'See ',
				display:'popup'
			}, function(response){});
		},
		popFbShare: function( elem ){
			//use this when deeplinking is functional. will also need proper app id on the FB.init function then. that lives in the launch file.
			/*FB.ui({
				method: 'share',
				href: elem.href,
				caption: 'caption shows here',
				picture:elem.getAttribute( "data-shareimage" ),
				description:'description shows here',
				message:'message shows here',
				display:'popup'
			}, function(response){});*/
			w.open( [ 'https://www.facebook.com/sharer/sharer.php?u=', elem.getAttribute( 'data-shareurl' ).replace( '#', '%23' ) ].join( '' ), 'sharer', 'toolbar=0,status=0,width=548,height=325' );
		},
		popTwitterShare: function( elem ){
			w.open( [
				'https://twitter.com/intent/tweet?url=',
				elem.getAttribute( 'data-shareurl' ).replace( '#', '%23' ),
				'&text=See ',
				elem.getAttribute( 'data-artistname' ),
				' at ',
				elem.getAttribute( 'data-festivalname' ),
				'.'
			].join( '' ), 'sharer', 'toolbar=0,status=0,width=548,height=325' );
		}
	}
	lineupwWidget.init();

})(window,document,jQuery);