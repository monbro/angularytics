"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,i,o,r,s,a=gap,l=t[e];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(e)),"function"==typeof rep&&(l=rep.call(t,e,l)),typeof l){case"string":return quote(l);case"number":return isFinite(l)?l+"":"null";case"boolean":case"null":return l+"";case"object":if(!l)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(l)){for(r=l.length,n=0;r>n;n+=1)s[n]=str(n,l)||"null";return o=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+a+"]":"["+s.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(r=rep.length,n=0;r>n;n+=1)"string"==typeof rep[n]&&(i=rep[n],o=str(i,l),o&&s.push(quote(i)+(gap?": ":":")+o));else for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(o=str(i,l),o&&s.push(quote(i)+(gap?": ":":")+o));return o=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+a+"}":"{"+s.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","    ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,n){var i;if(gap="",indent="","number"==typeof n)for(i=0;n>i;i+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,i,o=e[t];if(o&&"object"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(i=walk(o,n),void 0!==i?o[n]=i:delete o[n]);return reviver.call(e,t,o)}var j;if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define("spinner",t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,i=document.createElement(e||"div");for(n in t)i[n]=t[n];return i}function t(e){for(var t=1,n=arguments.length;n>t;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,i){var o=["opacity",t,~~(100*e),n,i].join("-"),r=.01+100*(n/i),s=Math.max(1-(1-e)/t*(100-r),e),a=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";return c[o]||(d.insertRule("@"+l+"keyframes "+o+"{"+"0%{opacity:"+s+"}"+r+"%{opacity:"+e+"}"+(r+.01)+"%{opacity:1}"+(r+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+s+"}"+"}",d.cssRules.length),c[o]=1),o}function i(e,t){var n,i,o=e.style;if(void 0!==o[t])return t;for(t=t.charAt(0).toUpperCase()+t.slice(1),i=0;h.length>i;i++)if(n=h[i]+t,void 0!==o[n])return n}function o(e,t){for(var n in t)e.style[i(e,n)||n]=t[n];return e}function r(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var i in n)void 0===e[i]&&(e[i]=n[i])}return e}function s(e){for(var t={x:e.offsetLeft,y:e.offsetTop};e=e.offsetParent;)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}function a(e){return this===void 0?new a(e):(this.opts=r(e||{},a.defaults,f),void 0)}function l(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}d.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(e,i){function r(){return o(n("group",{coordsize:u+" "+u,coordorigin:-l+" "+-l}),{width:u,height:u})}function s(e,s,a){t(c,t(o(r(),{rotation:360/i.lines*e+"deg",left:~~s}),t(o(n("roundrect",{arcsize:i.corners}),{width:l,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),n("fill",{color:i.color,opacity:i.opacity}),n("stroke",{opacity:0}))))}var a,l=i.length+i.width,u=2*l,h=2*-(i.width+i.length)+"px",c=o(r(),{position:"absolute",top:h,left:h});if(i.shadow)for(a=1;i.lines>=a;a++)s(a,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(a=1;i.lines>=a;a++)s(a);return t(e,c)},a.prototype.opacity=function(e,t,n,i){var o=e.firstChild;i=i.shadow&&i.lines||0,o&&o.childNodes.length>t+i&&(o=o.childNodes[t+i],o=o&&o.firstChild,o=o&&o.firstChild,o&&(o.opacity=n))}}var u,h=["webkit","Moz","ms","O"],c={},d=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}(),f={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};a.defaults={},r(a.prototype,{spin:function(t){this.stop();var n,i,r=this,a=r.opts,l=r.el=o(e(0,{className:a.className}),{position:a.position,width:0,zIndex:a.zIndex}),h=a.radius+a.length+a.width;if(t&&(t.insertBefore(l,t.firstChild||null),i=s(t),n=s(l),o(l,{left:("auto"==a.left?i.x-n.x+(t.offsetWidth>>1):parseInt(a.left,10)+h)+"px",top:("auto"==a.top?i.y-n.y+(t.offsetHeight>>1):parseInt(a.top,10)+h)+"px"})),l.setAttribute("role","progressbar"),r.lines(l,r.opts),!u){var c,d=0,f=(a.lines-1)*(1-a.direction)/2,p=a.fps,g=p/a.speed,y=(1-a.opacity)/(g*a.trail/100),m=g/a.lines;(function v(){d++;for(var e=0;a.lines>e;e++)c=Math.max(1-(d+(a.lines-e)*m)%g*y,a.opacity),r.opacity(l,e*a.direction+f,c,a);r.timeout=r.el&&setTimeout(v,~~(1e3/p))})()}return r},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(i,r){function s(t,n){return o(e(),{position:"absolute",width:r.length+r.width+"px",height:r.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*l+r.rotate)+"deg) translate("+r.radius+"px"+",0)",borderRadius:(r.corners*r.width>>1)+"px"})}for(var a,l=0,h=(r.lines-1)*(1-r.direction)/2;r.lines>l;l++)a=o(e(),{position:"absolute",top:1+~(r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:u&&n(r.opacity,r.trail,h+l*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&t(a,o(s("#000","0 0 4px #000"),{top:"2px"})),t(i,t(a,s(r.color,"0 0 1px rgba(0,0,0,.1)")));return i},opacity:function(e,t,n){e.childNodes.length>t&&(e.childNodes[t].style.opacity=n)}});var p=o(e("group"),{behavior:"url(#default#VML)"});return!i(p,"transform")&&p.adj?l():u=i(p,"animation"),a}),window.Keen=window.Keen||{},function(){function e(){return"undefined"==typeof XMLHttpRequest?!1:"withCredentials"in new XMLHttpRequest}function t(e,t,n,i,o,r,s){var a=new XMLHttpRequest;if(a.onreadystatechange=function(){if(4==a.readyState)if(a.status>=200&&300>a.status){var e;try{e=JSON.parse(a.responseText)}catch(t){console.log("Could not JSON parse HTTP response: "+a.responseText),s&&s(a,t)}e&&r&&r(e)}else console.log("HTTP request failed."),s&&s(a,null)},a.open(e,t,!0),o&&a.setRequestHeader("Authorization",o),i&&a.setRequestHeader("Content-Type","application/json"),n)for(var l in n)n.hasOwnProperty(l)&&a.setRequestHeader(l,n[l]);var u=i?JSON.stringify(i):null;a.send(u)}function n(e,t,n,i){if(t&&0>e.indexOf("api_key")){var o=e.indexOf("?")>0?"&":"?";e=e+o+"api_key="+t}for(var r="keenJSONPCallback"+(new Date).getTime();r in window;)r+="a";var s=!1;window[r]=function(e){s=!0,n&&e&&n(e),window[r]=void 0},e=e+"&jsonp="+r;var a=document.createElement("script");a.id="keen-jsonp",a.src=e,document.getElementsByTagName("head")[0].appendChild(a),a.onreadystatechange=function(){s===!1&&"loaded"===this.readyState&&(s=!0,i&&i())},a.onerror=function(){s===!1&&(s=!0,i&&i())}}function i(e,t,n,i,r){var s=null,a="object"==typeof n.attributes.timeframe;if("string"==typeof n.attributes.timezone){var l=i.result[0].timeframe.start,u=parseInt(l.slice(l.length-6,l.length).slice(1,3)),h=parseInt(l.slice(l.length-6,l.length).slice(4,6)),c=l.slice(l.length-6,l.length).slice(0,1),d=60*u+h;"-"===c&&(d=-d),s=d}else s=n.attributes.timezone/60;var f="";if(void 0!=n&&void 0!=n.attributes&&void 0!=n.attributes.timezone&&e.setMinutes(e.getMinutes()+e.getTimezoneOffset()+s),"daily"==t||-1!=t.indexOf("day")){if(a&&i.result.length>1&&0==r){var p=o(i.result[1].timeframe.start);p.getDate()==e.getDate()&&e.setDate(e.getDate()-1)}f+=1+e.getMonth(),f+="/",f+=e.getDate()}else"weekly"==t||-1!=t.indexOf("week")?(f+=1+e.getMonth(),f+="/",f+=e.getDate()):"hourly"==t||-1!=t.indexOf("hours")?(f+=e.getHours(),f+=":",f+="00"):"monthly"==t||-1!=t.indexOf("month")?(f+=1+e.getMonth(),f+="/",f+=(e.getFullYear()+"").slice(-2)):"minutely"==t||-1!=t.indexOf("minute")?(f+=e.getHours(),f+=":",f+=("0"+e.getMinutes()).slice(-2)):console.log("Invalid interval: "+t);return f}function o(e){var t,n,i=[1,4,5,6,7,10,11],o=0;if(n=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(e)){for(var r,s=0;r=i[s];++s)n[r]=+n[r]||0;n[2]=(+n[2]||1)-1,n[3]=+n[3]||1,"Z"!==n[8]&&void 0!==n[9]&&(o=60*n[10]+n[11],"+"===n[9]&&(o=0-o)),t=Date.UTC(n[1],n[2],n[3],n[4],n[5]+o,n[6],n[7])}else t=Date.parse?Date.parse(e):0/0;return new Date(t)}function r(){return-60*(new Date).getTimezoneOffset()}function s(e){return _.each(e,function(t,n){_.isUndefined(t)&&delete e[n]}),_.map(e,function(e,t){return _.isString(e)||(e=JSON.stringify(e)),e=encodeURIComponent(e),t+"="+e}).join("&")}var a=!1;("undefined"==typeof console||console.log===void 0)&&(console={},console.log=a?function(e){alert(e)}:function(){});var l=function(){};if(l.extend=function(e,t){var n=l.prototype.extend;l._prototyping=!0;var i=new this;n.call(i,e),i.base=function(){},delete l._prototyping;var o=i.constructor,r=i.constructor=function(){if(!l._prototyping)if(this._constructing||this.constructor==r)this._constructing=!0,o.apply(this,arguments),delete this._constructing;else if(null!=arguments[0])return(arguments[0].extend||n).call(arguments[0],i)};return r.ancestor=this,r.extend=this.extend,r.forEach=this.forEach,r.implement=this.implement,r.prototype=i,r.toString=this.toString,r.valueOf=function(e){return"object"==e?r:o.valueOf()},n.call(r,t),"function"==typeof r.init&&r.init(),r},l.prototype={extend:function(e,t){if(arguments.length>1){var n=this[e];if(n&&"function"==typeof t&&(!n.valueOf||n.valueOf()!=t.valueOf())&&/\bbase\b/.test(t)){var i=t.valueOf();t=function(){var e=this.base||l.prototype.base;this.base=n;var t=i.apply(this,arguments);return this.base=e,t},t.valueOf=function(e){return"object"==e?t:i},t.toString=l.toString}this[e]=t}else if(e){var o=l.prototype.extend;l._prototyping||"function"==typeof this||(o=this.extend||o);for(var r={toSource:null},s=["constructor","toString","valueOf"],a=l._prototyping?0:1;u=s[a++];)e[u]!=r[u]&&o.call(this,u,e[u]);for(var u in e)r[u]||o.call(this,u,e[u])}return this}},l=l.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(e,t,n){for(var i in e)void 0===this.prototype[i]&&t.call(n,e[i],i,e)},implement:function(){for(var e=0;arguments.length>e;e++)"function"==typeof arguments[e]?arguments[e](this.prototype):this.prototype.extend(arguments[e]);return this},toString:function(){return this.valueOf()+""}}),Keen.configure=function(e){return this.client=new Keen.Client(e),this.client},Keen.addEvent=function(e,t,n,i){this.client&&this.client.uploadEvent(e,t,n,i)},Keen.trackExternalLink=function(e,t,n,i,o){void 0===i&&(i=500);var r=!1,s=function(){};return"A"===e.nodeName?s=function(){r||(r=!0,window.location=e.href)}:"FORM"===e.nodeName&&(s=function(){r||(r=!0,e.submit())}),o&&(s=function(){r||(r=!0,o())}),Keen.addEvent(t,n,s,s),setTimeout(function(){s()},i),!1},Keen.getEventCollections=function(e,t){var n=this.client.getKeenUrl("/events");this.client.getJSON(n,e,t)},Keen.getEventCollectionProperties=function(e,t,n){var i=this.client.getKeenUrl("/events/"+e);this.client.getJSON(i,t,n)},Keen.setGlobalProperties=function(e){if(this.client){if(!e||"function"!=typeof e)throw Error("Invalid value for global properties: "+e);this.client.globalProperties=e}},Keen.addChartsReadyHandler=function(e){this.chartsReadyHandlers===void 0&&(this.chartsReadyHandlers=[]),this.chartsReadyHandlers.push(e),this.chartsReady&&this.runChartsReadyHandlers()},Keen.onChartsReady=function(e){this.chartsReady?e():(this.addChartsReadyHandler(e),this.loadChartsDependencies())},Keen.runChartsReadyHandlers=function(){_.each(this.chartsReadyHandlers,function(e){e()},this)},Keen.loadChartsDependencies=function(){if(!this.startedLoadingChartsDependencies){this.startedLoadingChartsDependencies=!0;var e=function(e,t){var n,i=document,o=i.head||i.getElementsByTagName("head");setTimeout(function(){if("item"in o){if(!o[0])return setTimeout(arguments.callee,25),void 0;o=o[0]}var n=i.createElement("script"),r=!1;n.onload=n.onreadystatechange=function(){return n.readyState&&"complete"!==n.readyState&&"loaded"!==n.readyState||r?!1:(n.onload=n.onreadystatechange=null,r=!0,t(),void 0)},n.src=e,o.insertBefore(n,o.firstChild)},0),null==i.readyState&&i.addEventListener&&(i.readyState="loading",i.addEventListener("DOMContentLoaded",n=function(){i.removeEventListener("DOMContentLoaded",n,!1),i.readyState="complete"},!1))},t=this,n=function(){t.chartsReady=!0,t.runChartsReadyHandlers()},i=function(){"undefined"==typeof google?console.log("Problem loading visualizations.  Please contact us!"):google.load("visualization","1.0",{packages:["corechart"],callback:n})};e("https://www.google.com/jsapi",function(){"undefined"==typeof _?e("https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min.js",i):i()})}},Keen.Client=function(e){this.projectId=e.projectId,this.writeKey=e.writeKey,this.readKey=e.readKey,this.globalProperties=null,this.keenUrl="https://api.keen.io",void 0!==e&&void 0!==e.keenUrl&&(this.keenUrl=e.keenUrl)},Keen.Client.prototype.uploadEvent=function(i,o,r,s){var a=this.getKeenUrl("/events/"+i),l={};this.globalProperties&&(l=this.globalProperties(i));for(var u in o)o.hasOwnProperty(u)&&(l[u]=o[u]);if(e())t("POST",a,null,l,this.writeKey,r,s);else{var h=JSON.stringify(l),c=Keen.Base64.encode(h);a=a+"?api_key="+this.writeKey,a=a+"&data="+c,a=a+"&modified="+(new Date).getTime(),n(a,null,r,s)}},Keen.Client.prototype.getKeenUrl=function(e){return this.keenUrl+"/3.0/projects/"+this.projectId+e},Keen.Client.prototype.getJSON=function(i,o,r){e()?t("GET",i,null,null,this.readKey,o,r):n(i,this.readKey,o,r)},Keen.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,n,i,o,r,s,a,l="",u=0;for(e=Keen.Base64._utf8_encode(e);e.length>u;)t=e.charCodeAt(u++),n=e.charCodeAt(u++),i=e.charCodeAt(u++),o=t>>2,r=(3&t)<<4|n>>4,s=(15&n)<<2|i>>6,a=63&i,isNaN(n)?s=a=64:isNaN(i)&&(a=64),l=l+Keen.Base64._keyStr.charAt(o)+Keen.Base64._keyStr.charAt(r)+Keen.Base64._keyStr.charAt(s)+Keen.Base64._keyStr.charAt(a);return l},decode:function(e){var t,n,i,o,r,s,a,l="",u=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");e.length>u;)o=Keen.Base64._keyStr.indexOf(e.charAt(u++)),r=Keen.Base64._keyStr.indexOf(e.charAt(u++)),s=Keen.Base64._keyStr.indexOf(e.charAt(u++)),a=Keen.Base64._keyStr.indexOf(e.charAt(u++)),t=o<<2|r>>4,n=(15&r)<<4|s>>2,i=(3&s)<<6|a,l+=String.fromCharCode(t),64!=s&&(l+=String.fromCharCode(n)),64!=a&&(l+=String.fromCharCode(i));return l=Keen.Base64._utf8_decode(l)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;e.length>n;n++){var i=e.charCodeAt(n);128>i?t+=String.fromCharCode(i):i>127&&2048>i?(t+=String.fromCharCode(192|i>>6),t+=String.fromCharCode(128|63&i)):(t+=String.fromCharCode(224|i>>12),t+=String.fromCharCode(128|63&i>>6),t+=String.fromCharCode(128|63&i))}return t},_utf8_decode:function(e){for(var t="",n=0,i=c1=c2=0;e.length>n;)i=e.charCodeAt(n),128>i?(t+=String.fromCharCode(i),n++):i>191&&224>i?(c2=e.charCodeAt(n+1),t+=String.fromCharCode((31&i)<<6|63&c2),n+=2):(c2=e.charCodeAt(n+1),c3=e.charCodeAt(n+2),t+=String.fromCharCode((15&i)<<12|(63&c2)<<6|63&c3),n+=3);return t}},Keen._cf&&(Keen.configure(Keen._cf),Keen._cf=null),Keen._gp&&(Keen.setGlobalProperties(Keen._gp),Keen._gp=null),Keen._eq&&Keen._eq.length>0){for(var u=0;Keen._eq.length>u;u++){var h=Keen._eq[u].shift(),c=Keen._eq[u].shift(),d=Keen._eq[u].shift(),f=Keen._eq[u].shift();Keen.addEvent(h,c,d,f)}Keen._eq=null}if(Keen._ocrq&&Keen._ocrq.length>0){for(var u=0;Keen._ocrq.length>u;u++){var p=Keen._ocrq[u];Keen.onChartsReady(p)}Keen._ocrq=null}Keen.BaseVisualization=l.extend({}),Keen.BaseVisualization.prototype.getLabel=function(){if(_.isUndefined(this.options.label)||null==this.options.label){if(_.isUndefined(this.query.queryName)){var e="";return e+=this.query.attributes.analysisType,e+=" - ",e+=this.query.attributes.eventCollection}return this.query.queryName}return this.options.label},Keen.Number=Keen.BaseVisualization.extend({constructor:function(e,t){this.query=e,this.options={height:"150px",width:"300px","font-family":"'Helvetica Neue', Helvetica, Arial, sans-serif",color:"white","border-radius":"0px","number-background-color":"#7dcc77","label-background-color":"#9CD898",prefix:"",suffix:""},this.options=_.extend(this.options,t)}}),Keen.Number.prototype.draw=function(e,t){var n=function(e){return+e.replace(/[^\d.-]+/gi,"")},i=function(e){return e.replace(/[^A-Za-z%]+/gi,"")};e.innerHTML="";var o=document.createElement("div");e.appendChild(o),o.style.width=this.options.width,o.style.height=this.options.height,o.style.display="block",o.style.textAlign="center",o.style.backgroundColor=this.options["number-background-color"],o.style.borderRadius=this.options["border-radius"];var r=document.createElement("h1");o.appendChild(r);var s=document.createTextNode("Loading...");r.style.fontSize=.5*(8*n(this.options.height)/15)+i(this.options.height),r.appendChild(s),r.style.height=2*n(this.options.height)/3+i(this.options.height),r.style.lineHeight=r.style.height,r.style.color=this.options.color,r.style.fontWeight="bold",r.style.fontFamily=this.options["font-family"],r.style.margin=0,r.style.padding=0,r.style.textShadow="none";var a=document.createElement("h2");a.appendChild(document.createTextNode(this.getLabel())),o.appendChild(a),a.style.height=n(this.options.height)/3+i(this.options.height),a.style.lineHeight=a.style.height,a.style.fontSize=.32*(n(this.options.height)/3)+i(this.options.height),a.style.color=r.style.color,a.style.textTransform="uppercase",a.style.fontWeight="normal",a.style.fontFamily=r.style.fontFamily,a.style.margin=0,a.style.padding=0,a.style.borderTop="1px solid",a.style.borderTopColor=this.options.color,a.style.backgroundColor=this.options["label-background-color"],a.style.textShadow="none";var l=_.bind(function(e){this.data=e.result,null==this.data&&(this.data=0),r.replaceChild(document.createTextNode(this.options.prefix+Keen.prettyNumber(this.data)+this.options.suffix),s),r.style.fontSize=8*n(this.options.height)/15+i(this.options.height),null==this.data&&(this.data=0)},this);_.isUndefined(t)?this.query.getResponse(l):l(t)},Keen.LineChart=Keen.BaseVisualization.extend({constructor:function(e,t){this.query=e,this.options={chartAreaHeight:null,chartAreaWidth:null,chartAreaLeft:null,chartAreaTop:null,height:300,width:600,lineWidth:5,color:"#00afd7",backgroundColor:"white",title:null,label:null,xAxisLabel:null,yAxisLabel:null,yAxisMin:0,yAxisMax:null,viewMode:null,showLegend:!0,xAxisLabelAngle:null,font:"Arial",override:{}},this.options=_.extend(this.options,t),this.client=_.isUndefined(this.options.client)?Keen.client:this.options.client}}),Keen.LineChart.prototype.draw=function(e,t){e.innerHTML="",e.style.width=this.options.width+"px",e.style.height=this.options.height+"px",e.style.display="block",Keen.showLoading(e);var n=function(e){var t={};return t.height=e.height,t.width=e.width,t.lineWidth=e.lineWidth,t.colors=[e.color],t.backgroundColor=e.backgroundColor,t.title=e.title,t.fontName=e.font,t.hAxis={title:e.xAxisLabel,viewWindow:{}},t.vAxis={title:e.yAxisLabel,viewWindow:{}},null!=e.yAxisMin&&(t.vAxis.viewWindow.min=e.yAxisMin),null!=e.yAxisMax&&(t.vAxis.viewWindow.max=e.yAxisMax),e.showLegend||(t.legend={position:"none"}),null!=e.xAxisLabelAngle&&(t.hAxis.slantedText=!0,t.hAxis.slantedTextAngle=e.xAxisLabelAngle),t.chartArea={left:e.chartAreaLeft,top:e.chartAreaTop,height:e.chartAreaHeight,width:e.chartAreaWidth},null!=e.override&&(t=_.extend(t,e.override)),t},r=_.bind(function(t){this.data=t.result;var r=new google.visualization.DataTable;r.addColumn("string","Date"),r.addColumn("number",this.getLabel());var s=0;if(r.addRows(_.map(this.data,function(e){var n=o(e.timeframe.start),r=i(n,this.query.attributes.interval,this.query,t,s);return s++,null==e.value&&(e.value=0),[r,e.value]},this)),google){var a=new google.visualization.AreaChart(e),l=n(this.options);a.draw(r,l)}else console.log("Charting is not yet ready.  Are you waiting for onChartsReady?")},this);_.isUndefined(t)?this.query.getResponse(r):r(t)},Keen.MultiLineChart=Keen.BaseVisualization.extend({constructor:function(e,t){this.query=e,this.options={height:300,width:600,chartAreaHeight:null,chartAreaWidth:null,chartAreaLeft:null,chartAreaTop:null,title:null,showLegend:!0,colors:null,lineWidth:5,backgroundColor:"white",fontColor:"black",font:null,xAxisLabel:null,yAxisLabel:null,xAxisLabelAngle:null,labelMapping:{}},this.options=_.extend(this.options,t),this.client=_.isUndefined(this.options.client)?Keen.client:this.options.client}}),Keen.MultiLineChart.prototype.draw=function(e,t){e.innerHTML="",e.style.width=this.options.width+"px",e.style.height=this.options.height+"px",e.style.display="block",Keen.showLoading(e);var n=[],r=function(e){var t={};return t.height=e.height,t.width=e.width,t.lineWidth=e.lineWidth,t.colors=e.colors,t.backgroundColor=e.backgroundColor,t.title=e.title,t.fontName=e.font,t.hAxis={title:e.xAxisLabel},t.vAxis={title:e.yAxisLabel,viewWindow:{min:0}},e.showLegend||(t.legend={position:"none"}),null!=e.xAxisLabelAngle&&(t.hAxis.slantedText=!0,t.hAxis.slantedTextAngle=e.xAxisLabelAngle),t.chartArea={left:e.chartAreaLeft,top:e.chartAreaTop,height:e.chartAreaHeight,width:e.chartAreaWidth},t.series=n,t},s=_.bind(function(t){this.data=t.result;var s=[];_.each(this.data[0].value,function(e){null!=this.options.labelMapping[e[this.query.attributes.groupBy]]?s.push(this.options.labelMapping[e[this.query.attributes.groupBy]]+""):s.push(e[this.query.attributes.groupBy]+"");var t={};this.options.colorMapping&&this.options.colorMapping[e[this.query.attributes.groupBy]]&&(t.color=this.options.colorMapping[e[this.query.attributes.groupBy]]),n.push(t)},this),0==s.length&&(s.push(""),this.options.showLegend=!1);var a=new google.visualization.DataTable;if(a.addColumn("string","Date"),_.each(s,function(e){a.addColumn("number",e)}),_.each(this.data,function(e){var n=[],r=o(e.timeframe.start),s=i(r,this.query.attributes.interval,this.query,t);n.push(s),_.each(e.value,function(e){null==e.result&&(e.result=0),n.push(e.result)},this),1==n.length&&n.push(null),a.addRow(n)},this),google){var l=new google.visualization.LineChart(e),u=r(this.options);l.draw(a,u)}else console.log("Charting is not yet ready.  Are you waiting for onChartsReady?")},this);_.isUndefined(t)?this.query.getResponse(s):s(t)},Keen.PieChart=Keen.BaseVisualization.extend({constructor:function(e,t){this.query=e,this.options={height:300,width:600,chartAreaHeight:null,chartAreaWidth:null,chartAreaLeft:null,chartAreaTop:null,minimumSlicePercentage:"1",title:null,showLegend:!0,colors:null,backgroundColor:"white",font:null,fontColor:"black",labelMapping:{},colorMapping:{}},this.options=_.extend(this.options,t),this.client=_.isUndefined(this.options.client)?Keen.client:this.options.client}}),Keen.PieChart.prototype.draw=function(e,t){e.innerHTML="",e.style.width=this.options.width+"px",e.style.height=this.options.height+"px",e.style.display="block",Keen.showLoading(e);var n=[],i=function(e){var t={};return t.legend={},t.height=e.height,t.width=e.width,t.title=e.title,t.sliceVisibilityThreshold=.01*e.minimumSlicePercentage,t.colors=e.colors,t.backgroundColor=e.backgroundColor,e.showLegend||(t.legend.position="none"),t.fontName=e.font,t.titleTextStyle={color:e.fontColor},t.legend.textStyle={color:e.fontColor},t.chartArea={left:e.chartAreaLeft,top:e.chartAreaTop,height:e.chartAreaHeight,width:e.chartAreaWidth},t.slices=n,t},o=_.bind(function(t){this.data=t.result;var o=new google.visualization.DataTable;if(o.addColumn("string","Group By"),o.addColumn("number",this.getLabel()),_.each(this.data,function(e){var t="";t=null!=this.options.labelMapping[e[this.query.attributes.groupBy]]?this.options.labelMapping[e[this.query.attributes.groupBy]]:e[this.query.attributes.groupBy]+"";var i=e.result,r={};this.options.colorMapping&&this.options.colorMapping[t]&&(r.color=this.options.colorMapping[t]),n.push(r),o.addRow([t,i])},this),google){var r=new google.visualization.PieChart(e);r.draw(o,i(this.options))}else console.log("Charting is not yet ready.  Are you waiting for onChartsReady?")},this);_.isUndefined(t)?this.query.getResponse(o):o(t)},Keen.FunnelChart=Keen.BaseVisualization.extend({constructor:function(e,t){this.query=e,this.options={height:300,width:600,chartAreaHeight:null,chartAreaWidth:null,chartAreaLeft:null,chartAreaTop:null,title:null,showLegend:!1,color:"#f35757",backgroundColor:"white",fontColor:"black",font:"Arial"},this.options=_.extend(this.options,t),this.client=_.isUndefined(this.options.client)?Keen.client:this.options.client}}),Keen.FunnelChart.prototype.draw=function(e,t){e.innerHTML="",e.style.width=this.options.width+"px",e.style.height=this.options.height+"px",e.style.display="block",Keen.showLoading(e);var n=function(e){var t={};return t.legend={},t.height=e.height,t.width=e.width,t.title=e.title,t.colors=[e.color],t.fontName=e.font,t.backgroundColor=e.backgroundColor,e.showLegend||(t.legend.position="none"),t.titleTextStyle={color:e.fontColor},t.legend.textStyle={color:e.fontColor},t.chartArea={left:e.chartAreaLeft,top:e.chartAreaTop,height:e.chartAreaHeight,width:e.chartAreaWidth},t.vAxis={viewWindow:{min:0},format:"#"},t.bar={groupWidth:"90%"},t},i=_.bind(function(t){this.numbers=t.result,this.steps=t.steps;var i=new google.visualization.DataTable;i.addColumn("string","Action"),i.addColumn("number","Count");for(var o=null,r=0;this.numbers.length>r;r++){null==o&&(o=this.numbers[r]);var s=0===o?0:Math.round(100*(this.numbers[r]/o)),a=this.steps[r].event_collection;_.isUndefined(this.query.steps[r].name)||(a=this.query.steps[r].name),i.addRow([a+" ("+s+"%)",this.numbers[r]])}if(google){var l=new google.visualization.ColumnChart(e);l.draw(i,n(this.options))}else console.log("Charting is not yet ready.  Are you waiting for onChartsReady?")},this);_.isUndefined(t)?this.query.getResponse(i):i(t)},Keen.BaseQuery=l.extend({getResponse:function(e){function t(t){return e(t)}function n(e,t){console.log("got an error:"),console.log(e),console.log(t)}if(_.isUndefined(this.client.readKey))console.log("Error: Please add a readKey to Keen.configure() to perform analysis.");else{var i=this.getPath(),o=this.buildParams();i+="?",i+=s(o);var r=this.client.getKeenUrl(i);this.client.getJSON(r,t,n)}},getPath:function(){console.log("getPath() must be overridden")},buildParams:function(){console.log("buildParams() must be overridden")}}),Keen.SavedQuery=Keen.BaseQuery.extend({constructor:function(e,t){this.queryName=e,this.client=t?t:Keen.client},getPath:function(){return"/saved_queries/"+encodeURIComponent(this.queryName)+"/result"},buildParams:function(){return{api_key:this.client.readKey}}}),Keen.AdHocQuery=Keen.BaseQuery.extend({constructor:function(e,t,n){_.isUndefined(t)&&(t={}),this.attributes=_.defaults(t,{filters:[]}),this.attributes.eventCollection=e,_.isUndefined(this.attributes.timezone)&&(this.attributes.timezone=r()),this.client=n?n:Keen.client},getPath:function(){return"/queries/"+this.attributes.analysisType},buildParams:function(){return{api_key:this.client.readKey,event_collection:this.attributes.eventCollection,filters:this.attributes.filters,timeframe:this.attributes.timeframe,timezone:this.attributes.timezone,target_property:this.attributes.targetProperty,group_by:this.attributes.groupBy,latest:this.attributes.latest}}}),Keen.AdHocQuery.prototype.addFilter=function(e,t,n){return this.attributes.filters.push({property_name:e,operator:t,property_value:n}),this},Keen.AdHocQuery.prototype.timeframe=function(e){return this.attributes.timeframe=e,this},Keen.AdHocQuery.prototype.latest=function(e){return this.attributes.latest=e,this},Keen.AdHocQuery.prototype.timezone=function(e){return this.attributes.timezone=e,this},Keen.AdHocQuery.prototype.analysisType=function(e){return this.attributes.analysisType=e,this},Keen.AdHocQuery.prototype.targetProperty=function(e){return this.attributes.targetProperty=e,this},Keen.AdHocQuery.prototype.groupBy=function(e){return this.attributes.groupBy=e,this},Keen.Funnel=Keen.BaseQuery.extend({constructor:function(e,t,n){_.isUndefined(t)&&(t={}),this.attributes=t,_.isUndefined(e)&&(e=[]),this.steps=e;for(var i=0;this.steps.length>i;i++)this.steps[i]=this.steps[i].buildParams();_.isUndefined(this.attributes.timezone)&&(this.attributes.timezone=r()),this.client=n?n:Keen.client},getPath:function(){return"/queries/funnel"},buildParams:function(){if(!_.isUndefined(this.attributes.actorProperty))for(var e=0;this.steps.length>e;e++)_.isUndefined(this.steps[e].actor_property)&&(this.steps[e].actor_property=this.attributes.actorProperty);return{api_key:this.client.readKey,steps:this.steps,timeframe:this.attributes.timeframe,timezone:this.attributes.timezone,actor_property:this.attributes.actorProperty}},draw:function(e,t){var n=new Keen.FunnelChart(this,t);n.draw(e)}}),Keen.Funnel.prototype.timeframe=function(e){return this.attributes.timeframe=e,this},Keen.Funnel.prototype.actorProperty=function(e){return this.attributes.actorProperty=e,this},Keen.Funnel.prototype.timezone=function(e){return this.attributes.timezone=e,this},Keen.Funnel.prototype.addStep=function(e){return this.steps.push(e.buildParams()),this},Keen.Step=Keen.AdHocQuery.extend({constructor:function(e,t){_.isUndefined(t)&&(t={}),this.attributes=_.defaults(t,{filters:[]}),this.attributes.eventCollection=e,_.isUndefined(this.attributes.timezone)&&(this.attributes.timezone=r())},buildParams:function(){return{event_collection:this.attributes.eventCollection,actor_property:this.attributes.actorProperty,filters:this.attributes.filters,timeframe:this.attributes.timeframe,timezone:this.attributes.timezone,name:this.attributes.name}}}),Keen.Step.prototype.name=function(e){return this.attributes.name=e,this},Keen.Step.prototype.actorProperty=function(e){return this.attributes.actorProperty=e,this},Keen.Metric=Keen.AdHocQuery.extend({}),Keen.Metric.prototype.draw=function(e,t){if(_.isUndefined(this.attributes.groupBy)){var n=new Keen.Number(this,t);n.draw(e)}else{var i=new Keen.PieChart(this,t);i.draw(e)}},Keen.Series=Keen.AdHocQuery.extend({buildParams:function(){var e=this.base();return e.interval=this.attributes.interval,e},draw:function(e,t){if(_.isUndefined(this.attributes.groupBy)){var n=new Keen.LineChart(this,t);n.draw(e)}else{var i=new Keen.MultiLineChart(this,t);
i.draw(e)}}}),Keen.Series.prototype.interval=function(e){return this.attributes.interval=e,this},Keen.showLoading=function(e){(new Spinner).spin(e)},Keen.prettyNumber=function(e){function t(e,n){var e=e+"",i=e.split(".");if(i.length>1){e=i[0];var r=i[1];2==e.length&&r.length>0?r.length>0?e=e+"."+r.charAt(0):e+="0":1==e.length&&r.length>0&&(e=e+"."+r.charAt(0),e+=r.length>1?r.charAt(1):"0")}var s=e.length;return e.split(".").length>1&&s--,3>=s?e+""+o[n]:t(Number(e)/1e3,n+1)}var n=e.toPrecision(3);if(Number(n)==e&&4>=(e+"").length)return e+"";if(e>=1||-1>=e){var i="";0>e&&(e=-e,i="-");var o=["","k","M","B","T"];return i+t(e,0)}return e.toPrecision(3)},Date.prototype.stdTimezoneOffset=function(){var e=new Date(this.getFullYear(),-1,1),t=new Date(this.getFullYear(),6,1);return Math.max(e.getTimezoneOffset(),t.getTimezoneOffset())},Date.prototype.dst=function(){return this.getTimezoneOffset()<this.stdTimezoneOffset()},Keen.loadedCallback&&"function"==typeof Keen.loadedCallback&&Keen.loadedCallback()}();