!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(7),n(6),n(10),n(9);var i=n(5),r=n(11),o={$el:$("#pay-detail"),appTemplate:r(i),init:function(){var t=this;t.render({title:"SOFA",desc:"something something something..."}),t.bindEvents(),t.initDidiJsBridge()},bindEvents:function(){},initDidiJsBridge:function(){window.bridge={},document.addEventListener("DidiJSBridgeReady",function(t){bridge=t.bridge,bridge.init(function(t,e){e&&e("Right back atcha!")})},!1)},triggerEvent:function(t){"undefined"!=typeof DidiJSBridge?DidiJSBridge.callHandler(t,{},function(t){}):alert("DidiJSBridge未加载成功！")},render:function(t){var e=this;e.$el.html(e.appTemplate({data:t}))}};o.init()},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=d[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(u(i.parts[o],e))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(u(i.parts[o],e));d[i.id]={id:i.id,refs:1,parts:a}}}}function r(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],o=r[0],a=r[1],s=r[2],c=r[3],u={css:a,media:s,sourceMap:c};n[o]?n[o].parts.push(u):e.push(n[o]={id:o,parts:[u]})}return e}function o(t,e){var n=g(),i=y[y.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function u(t,e){var n,i,r;if(e.singleton){var o=b++;n=v||(v=s(e)),i=l.bind(null,n,o,!1),r=l.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),i=h.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),i=f.bind(null,n),r=function(){a(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function l(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function f(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function h(t,e){var n=e.css,i=e.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var d={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},m=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,b=0,y=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=m()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return i(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,o.push(c)}if(t){var u=r(t);i(u,e)}for(var a=0;a<o.length;a++){var c=o[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,'#pay-detail h3{margin-top:1.28rem;padding:0 2.304rem;font-size:12px;color:#adadad;text-align:center}#pay-detail h3 span{background:#fff;padding:0 6px}#pay-detail h3:after{display:block;margin-top:-7px;content:"";height:1px;background:#e5e5e5}#pay-detail h2{margin-top:1.49333333rem;font-size:50px;color:#333;text-align:center}#pay-detail h2 span{font-size:14px}#pay-detail table{width:100%;margin:1.28rem 0 0}#pay-detail table thead th{color:#666}#pay-detail table tbody th{color:#ff8903}#pay-detail table th{font-size:14px;line-height:2.5}#pay-detail table th:nth-child(odd){text-align:left;padding-left:2.304rem}#pay-detail table th:nth-child(even){text-align:right;padding-right:2.304rem}#pay-detail p{text-align:center}#pay-detail p a{vertical-align:middle;font-size:12px;color:#adadad;transform:scale(.8);-webkit-transform:scale(.8)}#pay-detail p img{vertical-align:middle;transform:scale(.5);-webkit-transform:scale(.5)}',""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"abbr,address,article,aside,audio,b,blockquote,body,caption,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figure,footer,form,h1,h2,h3,h4,h5,h6,header,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,samp,section,small,span,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font-weight:400;vertical-align:baseline;background:transparent}article,aside,details,figure,footer,header,nav,section,summary{display:block}embed,img,object{max-width:100%}html{overflow-y:scroll}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent;text-decoration:none;outline:none}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted #000;cursor:help}table{border-collapse:collapse;border-spacing:0}th{font-weight:700;vertical-align:bottom}td{font-weight:400;vertical-align:top}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}pre{white-space:pre;white-space:pre-wrap;white-space:pre-line;word-wrap:break-word}input[type=radio]{vertical-align:text-bottom}input[type=checkbox]{vertical-align:bottom}.ie7 input[type=checkbox]{vertical-align:baseline}.ie6 input{vertical-align:text-bottom}input,select,textarea{font:99% sans-serif}table{font-size:inherit;font:100%}small{font-size:85%}strong{font-weight:700}td,td img{vertical-align:top}sub,sup{font-size:75%;line-height:0;position:relative}sup{top:-.5em}sub{bottom:-.25em}code,kbd,pre,samp{font-family:monospace,sans-serif}.clickable,button,input[type=button],input[type=file],input[type=submit],label{cursor:pointer}button,input,select,textarea{margin:0;padding:0}button,input[type=button]{width:auto;overflow:visible}.ie7 img{-ms-interpolation-mode:bicubic}.clearfix:after,.clearfix:before{content:\" \";display:block;height:0;overflow:hidden}.clearfix:after{clear:both}.clearfix{zoom:1}.contentblock:after{display:block;height:2rem;content:'.';visibility:hidden}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;outline:0;font-size:100%;font:inherit;vertical-align:baseline;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-user-drag:none}",""])},function(t,e,n){t.exports="<h3><span>支付宝支付</span></h3> <h2>2.0<span>元</span></h2> <table> <thead> <th>一口价</th><th>5元</th> </thead> <tbody> <tr> <th>出行券抵扣</th><th>-2元</th> </tr> <tr> <th>余额抵扣</th><th>-1元</th> </tr> </tbody> </table> <p><a href=http://www.xiaojukeji.com>计价规则详情</a><img src="+n(8)+"></p>"},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.id,i,""]]);n(2)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.id,i,""]]);n(2)(i,{});i.locals&&(t.exports=i.locals)},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzdFMUZDMjc3QUU3MTFFNUJBMzdFMjY1Q0U1OEJDREMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzdFMUZDMjY3QUU3MTFFNUJBMzdFMjY1Q0U1OEJDREMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NzAzMDU2RjdBQzcxMUU1QkEzN0UyNjVDRTU4QkNEQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NzAzMDU3MDdBQzcxMUU1QkEzN0UyNjVDRTU4QkNEQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmUuD1kAAAElSURBVHjadJIxS0JRFMePTwgCabI2w9nRBxqNUhEuzYKDXyBo8ANIn0DwI4hDODkp4tRSw3sNLTk4ZVM1FESBkM/fgTMo794LP8597/3e/55735MoitrwC9dJkoiPQETKsA/dOI5PxTNUbMGHzWfIeacYhuGKGsLKkp+QA1eiIC8pV5BAAcZO0eQJ5dYuL0jtbIsZ3dH2QJhSzi29bgESOPq+BG0lAyNeLDgTLVV3/mqbe9e+XYna7yflDNZwBMNA/OPAltfx51ta+1rAnvVbdO1aH77BoSbBsbbiWvreJO2vZv3uHg9pPUrVLm+QHlMHjtSk9O3+AKmZ+jJIJebPkIUXpFLqWyPlqA8mfUPF9z/e2Zn9wwlpPz5xBl/QQJr7Tn8jwAD+iYJBTlFQHQAAAABJRU5ErkJggg=="},function(t,e){!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,i=Object(this),r=i.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==r&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in i){n=i[o++];break}if(++o>=r)throw new TypeError}for(;r>o;)o in i&&(n=e.call(t,n,i[o],o,i)),o++;return n})}();var n=function(){function t(t){return null==t?String(t):q[$.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&t.__proto__==Object.prototype}function a(t){return t instanceof Array}function s(t){return"number"==typeof t.length}function c(t){return C.call(t,function(t){return null!=t})}function u(t){return t.length>0?j.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in O?O[t]:O[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,e){return"number"!=typeof e||D[l(t)]?e:e+"px"}function d(t){var e,n;return z[t]||(e=U.createElement(t),U.body.appendChild(e),n=R(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),z[t]=n),z[t]}function p(t){return"children"in t?M.call(t.children):j.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function m(t,e,n){for(A in e)n&&(o(e[A])||a(e[A]))?(o(e[A])&&!o(t[A])&&(t[A]={}),a(e[A])&&!a(t[A])&&(t[A]=[]),m(t[A],e[A],n)):e[A]!==E&&(t[A]=e[A])}function g(t,e){return e===E?j(t):j(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function b(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,i=n&&n.baseVal!==E;return e===E?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function x(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?j.parseJSON(t):t:e):t}catch(n){return t}}function w(t,e){e(t);for(var n in t.childNodes)w(t.childNodes[n],e)}var E,A,j,k,S,N,T=[],M=T.slice,C=T.filter,U=window.document,z={},O={},R=U.defaultView.getComputedStyle,D={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},P=/^\s*<(\w+|!)[^>]*>/,L=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z=/^(?:body|html)$/i,I=["val","css","html","text","data","width","height","offset"],B=["after","prepend","before","append"],G=U.createElement("table"),J=U.createElement("tr"),F={tr:U.createElement("tbody"),tbody:G,thead:G,tfoot:G,td:J,th:J,"*":U.createElement("div")},V=/complete|loaded|interactive/,Y=/^\.([\w-]+)$/,H=/^#([\w-]*)$/,W=/^[\w-]+$/,q={},$=q.toString,Q={},_=U.createElement("div");return Q.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=_).appendChild(t),i=~Q.qsa(r,e).indexOf(t),o&&_.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return C.call(t,function(e,n){return t.indexOf(e)==n})},Q.fragment=function(t,e,n){t.replace&&(t=t.replace(L,"<$1></$2>")),e===E&&(e=P.test(t)&&RegExp.$1),e in F||(e="*");var i,r,a=F[e];return a.innerHTML=""+t,r=j.each(M.call(a.childNodes),function(){a.removeChild(this)}),o(n)&&(i=j(r),j.each(n,function(t,e){I.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},Q.Z=function(t,e){return t=t||[],t.__proto__=j.fn,t.selector=e||"",t},Q.isZ=function(t){return t instanceof Q.Z},Q.init=function(t,n){if(!t)return Q.Z();if(e(t))return j(U).ready(t);if(Q.isZ(t))return t;var i;if(a(t))i=c(t);else if(r(t))i=[o(t)?j.extend({},t):t],t=null;else if(P.test(t))i=Q.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return j(n).find(t);i=Q.qsa(U,t)}return Q.Z(i,t)},j=function(t,e){return Q.init(t,e)},j.extend=function(t){var e,n=M.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},Q.qsa=function(t,e){var n;return i(t)&&H.test(e)?(n=t.getElementById(RegExp.$1))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:M.call(Y.test(e)?t.getElementsByClassName(RegExp.$1):W.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},j.contains=function(t,e){return t!==e&&t.contains(e)},j.type=t,j.isFunction=e,j.isWindow=n,j.isArray=a,j.isPlainObject=o,j.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},j.inArray=function(t,e,n){return T.indexOf.call(e,t,n)},j.camelCase=S,j.trim=function(t){return t.trim()},j.uuid=0,j.support={},j.expr={},j.map=function(t,e){var n,i,r,o=[];if(s(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return u(o)},j.each=function(t,e){var n,i;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},j.grep=function(t,e){return C.call(t,e)},window.JSON&&(j.parseJSON=JSON.parse),j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){q["[object "+e+"]"]=e.toLowerCase()}),j.fn={forEach:T.forEach,reduce:T.reduce,push:T.push,sort:T.sort,indexOf:T.indexOf,concat:T.concat,map:function(t){return j(j.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return j(M.apply(this,arguments))},ready:function(t){return V.test(U.readyState)?t(j):U.addEventListener("DOMContentLoaded",function(){t(j)},!1),this},get:function(t){return t===E?M.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return T.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):j(C.call(this,function(e){return Q.matches(e,t)}))},add:function(t,e){return j(N(this.concat(j(t,e))))},is:function(t){return this.length>0&&Q.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):s(t)&&e(t.item)?M.call(t):j(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return j(n)},has:function(t){return this.filter(function(){return r(t)?j.contains(this,t):j(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:j(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:j(t)},find:function(t){var e,n=this;return e="object"==typeof t?j(t).filter(function(){var t=this;return T.some.call(n,function(e){return j.contains(e,t)})}):1==this.length?j(Q.qsa(this[0],t)):this.map(function(){return Q.qsa(this,t)})},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=j(t));n&&!(r?r.indexOf(n)>=0:Q.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return j(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=j.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return g(e,t)},parent:function(t){return g(N(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return M.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return C.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return j.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==R(this,"").getPropertyValue("display")&&(this.style.display=d(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=j(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){j(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){j(this[0]).before(t=j(t));for(var e;(e=t.children()).length;)t=e.first();j(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=j(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){j(this).replaceWith(j(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=j(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return j(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return j(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===E?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;j(this).empty().append(v(this,t,e,n))})},text:function(t){return t===E?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var n;return"string"==typeof t&&e===E?0==this.length||1!==this[0].nodeType?E:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(r(t))for(A in t)b(this,A,t[A]);else b(this,t,v(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&b(this,t)})},prop:function(t,e){return e===E?this[0]&&this[0][t]:this.each(function(n){this[t]=v(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+l(t),e);return null!==n?x(n):E},val:function(t){return t===E?this[0]&&(this[0].multiple?j(this[0]).find("option").filter(function(t){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=j(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2&&"string"==typeof e)return this[0]&&(this[0].style[S(e)]||R(this[0],"").getPropertyValue(e));var i="";if("string"==t(e))n||0===n?i=l(e)+":"+h(e,n):this.each(function(){this.style.removeProperty(l(e))});else for(A in e)e[A]||0===e[A]?i+=l(A)+":"+h(A,e[A])+";":this.each(function(){this.style.removeProperty(l(A))});return this.each(function(){this.style.cssText+=";"+i})},index:function(t){return t?this.indexOf(j(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return T.some.call(this,function(t){return this.test(y(t))},f(t))},addClass:function(t){return this.each(function(e){k=[];var n=y(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){j(this).hasClass(t)||k.push(t)},this),k.length&&y(this,n+(n?" ":"")+k.join(" "))})},removeClass:function(t){return this.each(function(e){return t===E?y(this,""):(k=y(this),v(this,t,e,k).split(/\s+/g).forEach(function(t){k=k.replace(f(t)," ")}),y(this,k.trim()),void 0)})},toggleClass:function(t,e){return this.each(function(n){var i=j(this),r=v(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===E?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=Z.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(j(t).css("margin-top"))||0,n.left-=parseFloat(j(t).css("margin-left"))||0,i.top+=parseFloat(j(e[0]).css("border-top-width"))||0,i.left+=parseFloat(j(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||U.body;t&&!Z.test(t.nodeName)&&"static"==j(t).css("position");)t=t.offsetParent;return t})}},j.fn.detach=j.fn.remove,["width","height"].forEach(function(t){j.fn[t]=function(e){var r,o=this[0],a=t.replace(/./,function(t){return t[0].toUpperCase()});return e===E?n(o)?o["inner"+a]:i(o)?o.documentElement["offset"+a]:(r=this.offset())&&r[t]:this.each(function(n){o=j(this),o.css(t,v(this,e,n,o[t]()))})}}),B.forEach(function(e,n){var i=n%2;j.fn[e]=function(){var e,r,o=j.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Q.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return j(t).remove();w(r.insertBefore(t,e),function(t){null!=t.nodeName&&"SCRIPT"===t.nodeName.toUpperCase()&&(!t.type||"text/javascript"===t.type)&&!t.src&&window.eval.call(window,t.innerHTML)})})})},j.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return j(t)[e](this),this}}),Q.Z.prototype=j.fn,Q.uniq=N,Q.deserializeValue=x,j.zepto=Q,j}();window.Zepto=n,"$"in window||(window.$=n),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/WebKit\/([\d.]+)/),r=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),a=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),s=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),c=s&&t.match(/TouchPad/),u=t.match(/Kindle\/([\d.]+)/),l=t.match(/Silk\/([\d._]+)/),f=t.match(/(BlackBerry).*Version\/([\d.]+)/),h=t.match(/(BB10).*Version\/([\d.]+)/),d=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),p=t.match(/PlayBook/),m=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),g=t.match(/Firefox\/([\d.]+)/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),a&&(e.ios=e.iphone=!0,e.version=a[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),s&&(e.webos=!0,e.version=s[2]),c&&(e.touchpad=!0),f&&(e.blackberry=!0,e.version=f[2]),h&&(e.bb10=!0,e.version=h[2]),d&&(e.rimtabletos=!0,e.version=d[2]),p&&(n.playbook=!0),u&&(e.kindle=!0,e.version=u[1]),l&&(n.silk=!0,n.version=l[1]),!l&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),m&&(n.chrome=!0,n.version=m[1]),g&&(n.firefox=!0,n.version=g[1]),e.tablet=!!(o||p||r&&!t.match(/Mobile/)||g&&t.match(/Tablet/)),e.phone=!e.tablet&&!!(r||a||s||f||h||m&&t.match(/Android/)||m&&t.match(/CriOS\/([\d.]+)/)||g&&t.match(/Mobile/))}e.call(t,navigator.userAgent),t.__detect=e}(n),function(t){function e(t){return t._zid||(t._zid=d++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(h[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(e,n,i){"string"!=t.type(e)?t.each(e,i):e.split(/\s/).forEach(function(t){i(t,n)})}function a(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function s(t){return m[t]||t}function c(n,r,c,u,l,f){var d=e(n),p=h[d]||(h[d]=[]);o(r,c,function(e,r){var o=i(e);o.fn=r,o.sel=u,o.e in m&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=l&&l(r,e);var c=o.del||r;o.proxy=function(t){var e=c.apply(n,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},o.i=p.length,p.push(o),n.addEventListener(s(o.e),o.proxy,a(o,f))})}function u(t,i,r,c,u){var l=e(t);o(i||"",r,function(e,i){n(t,e,i,c).forEach(function(e){delete h[l][e.i],t.removeEventListener(s(e.e),e.proxy,a(e,u))})})}function l(e){var n,i={originalEvent:e};for(n in e)!b.test(n)&&void 0!==e[n]&&(i[n]=e[n]);return t.each(y,function(t,n){i[t]=function(){return this[n]=g,e[t].apply(e,arguments)},i[n]=v}),i}function f(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var h=(t.zepto.qsa,{}),d=1,p={},m={mouseenter:"mouseover",mouseleave:"mouseout"};p.click=p.mousedown=p.mouseup=p.mousemove="MouseEvents",t.event={add:c,remove:u},t.proxy=function(n,i){if(t.isFunction(n)){var r=function(){return n.apply(i,arguments)};return r._zid=e(n),r}if("string"==typeof i)return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){c(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){u(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,i){c(this,t,e,null,function(t,e){return function(){var n=t.apply(i,arguments);return u(i,e,t),n}})})};var g=function(){return!0},v=function(){return!1},b=/^([A-Z]|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,i){return this.each(function(r,o){c(o,n,i,e,function(n){return function(i){var r,a=t(i.target).closest(e,o).get(0);return a?(r=t.extend(l(i),{currentTarget:a,liveFired:o}),n.apply(a,[r].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,n){return this.each(function(){u(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i){return!n||t.isFunction(n)?this.bind(e,n||i):this.delegate(n,e,i)},t.fn.off=function(e,n,i){return!n||t.isFunction(n)?this.unbind(e,n||i):this.undelegate(n,e,i)},t.fn.trigger=function(e,n){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),f(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l("string"==typeof e?t.Event(e):e),r.data=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var n=document.createEvent(p[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(n),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.defaultPrevented}function n(t,n,i,r){return t.global?e(n||b,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i){var r=i.context,o="success";i.success.call(r,t,o,e),n(i,r,"ajaxSuccess",[e,i,t]),c(o,e,i)}function s(t,e,i,r){var o=r.context;r.error.call(o,i,e,t),n(r,o,"ajaxError",[i,r,t]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==A?"html":t==E?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),e.data&&(!e.type||"GET"==e.type.toUpperCase())&&(e.url=f(e.url,e.data))}function d(e,n,i,r){var o=!t.isFunction(n);return{url:e,data:o?n:void 0,success:o?t.isFunction(i)?i:void 0:n,dataType:o?r||i:i}}function p(e,n,i,r){var o,a=t.isArray(n);t.each(n,function(n,s){o=t.type(s),r&&(n=i?r:r+"["+(a?"":n)+"]"),!r&&a?e.add(s.name,s.value):"array"==o||!i&&"object"==o?p(e,s,i,n):e.add(n,s)})}var m,g,v=0,b=window.document,y=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",A="text/html",j=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if("type"in e){var n,i="jsonp"+ ++v,r=b.createElement("script"),c=function(){clearTimeout(n),t(r).remove(),delete window[i]},l=function(t){c(),t&&"timeout"!=t||(window[i]=u),s(null,t||"abort",f,e)},f={abort:l};return o(f,e)===!1?(l("abort"),!1):(window[i]=function(t){c(),a(t,f,e)},r.onerror=function(){l("error")},r.src=e.url.replace(/=\?/,"="+i),t("head").append(r),e.timeout>0&&(n=setTimeout(function(){l("timeout")},e.timeout)),f)}return t.ajax(e)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:E,xml:"application/xml, text/xml",html:A,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{});for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var r=n.dataType,c=/=\?/.test(n.url);if("jsonp"==r||c)return c||(n.url=f(n.url,"callback=?")),t.ajaxJSONP(n);var d,p=n.accepts[r],v={},b=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,y=n.xhr();
n.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),p&&(v.Accept=p,p.indexOf(",")>-1&&(p=p.split(",",2)[0]),y.overrideMimeType&&y.overrideMimeType(p)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(v["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(v,n.headers||{}),y.onreadystatechange=function(){if(4==y.readyState){y.onreadystatechange=u,clearTimeout(d);var e,i=!1;if(y.status>=200&&y.status<300||304==y.status||0==y.status&&"file:"==b){r=r||l(y.getResponseHeader("content-type")),e=y.responseText;try{"script"==r?(0,eval)(e):"xml"==r?e=y.responseXML:"json"==r&&(e=j.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?s(i,"parsererror",y,n):a(e,y,n)}else s(null,y.status?"error":"abort",y,n)}};var x="async"in n?n.async:!0;y.open(n.type,n.url,x);for(g in n.headers)y.setRequestHeader(g,n.headers[g]);return o(y,n)===!1?(y.abort(),!1):(n.timeout>0&&(d=setTimeout(function(){y.onreadystatechange=u,y.abort(),s(null,"timeout",y,n)},n.timeout)),y.send(n.data?n.data:null),y)},t.get=function(e,n,i,r){return t.ajax(d.apply(null,arguments))},t.post=function(e,n,i,r){var o=d.apply(null,arguments);return o.type="POST",t.ajax(o)},t.getJSON=function(e,n,i){var r=d.apply(null,arguments);return r.dataType="json",t.ajax(r)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=d(e,n,i),c=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(y,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(s),this};var k=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(k(t)+"="+k(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(n),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(n),function(t,e){function n(t){return i(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function i(t){return t.toLowerCase()}function r(t){return o?o+t:i(t)}var o,a,s,c,u,l,f,h,d="",p={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},m=window.document,g=m.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,b={};t.each(p,function(t,n){return g.style[t+"TransitionProperty"]!==e?(d="-"+i(t)+"-",o=n,!1):void 0}),a=d+"transform",b[s=d+"transition-property"]=b[c=d+"transition-duration"]=b[u=d+"transition-timing-function"]=b[l=d+"animation-name"]=b[f=d+"animation-duration"]=b[h=d+"animation-timing-function"]="",t.fx={off:o===e&&g.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:r("TransitionEnd"),animationEnd:r("AnimationEnd")},t.fn.animate=function(e,n,i,r){return t.isPlainObject(n)&&(i=n.easing,r=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:t.fx.speeds[n]||t.fx.speeds._default)/1e3),this.anim(e,n,i,r)},t.fn.anim=function(i,r,o,d){var p,m,g,y={},x="",w=this,E=t.fx.transitionEnd;if(r===e&&(r=.4),t.fx.off&&(r=0),"string"==typeof i)y[l]=i,y[f]=r+"s",y[h]=o||"linear",E=t.fx.animationEnd;else{m=[];for(p in i)v.test(p)?x+=p+"("+i[p]+") ":(y[p]=i[p],m.push(n(p)));x&&(y[a]=x,m.push(a)),r>0&&"object"==typeof i&&(y[s]=m.join(", "),y[c]=r+"s",y[u]=o||"linear")}return g=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(E,g)}t(this).css(b),d&&d.call(this)},r>0&&this.bind(E,g),this.size()&&this.get(0).clientLeft,this.css(y),0>=r&&setTimeout(function(){w.each(function(){g.call(this)})},0),this},g=null}(n)},function(t,e){!function(t,e){var n=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",r=function(){var t=n.clientWidth;t&&(n.style.fontSize=20*(t/320)+"px")};t.addEventListener&&(e.addEventListener(i,r,!1),r(),t.addEventListener("DOMContentLoaded",r,!1))}(document,window)},function(t,e){var n={};t.exports=function i(t,e){var r=/\W/.test(t)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):n[t]=n[t]||i(document.getElementById(t).innerHTML);return e?r(e):r}}]);