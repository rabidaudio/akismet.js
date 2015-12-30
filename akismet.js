!function t(e,r,n){function s(i,a){if(!r[i]){if(!e[i]){var h="function"==typeof require&&require;if(!a&&h)return h(i,!0);if(o)return o(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[i]={exports:{}};e[i][0].call(c.exports,function(t){var r=e[i][1][t];return s(r?r:t)},c,c.exports,t,e,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(t,e,r){"use strict";var n=t("./lib/client"),s=t("./lib/comment"),o={Author:s.Author,Blog:n.Blog,Client:n.Client,Comment:s.Comment,CommentType:s.CommentType};e.exports=o,"undefined"!=typeof window&&(window.akismet=o)},{"./lib/client":2,"./lib/comment":3}],2:[function(t,e,r){(function(r){"use strict";function n(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=t("./enums"),a=t("superagent"),h=t("url"),u=function(){function t(e,r){if(s(this,t),this.charset=null,this.language=null,this.url="string"==typeof e?e:null,"object"==("undefined"==typeof r?"undefined":n(r))&&r)for(var o in r){var i=r[o];this.hasOwnProperty(o)&&"undefined"!=typeof i&&(this[o]=i)}}return o(t,[{key:"toJSON",value:function(t){var e={};return"string"==typeof this.url&&(e.blog=this.url),"string"==typeof this.charset&&(e.blog_charset=this.charset),"string"==typeof this.language&&(e.blog_lang=this.language),JSON.stringify(e,null,t)}},{key:"toString",value:function(){return this.constructor.name+" "+this.toJSON(2)}}],[{key:"fromJSON",value:function(e){var r=void 0;if("string"!=typeof e)r=e;else try{r=JSON.parse(e)}catch(s){return null}return r&&"object"==("undefined"==typeof r?"undefined":n(r))?new t(r.blog,{charset:r.blog_charset,language:r.blog_lang}):null}}]),t}(),c=function(){function e(o,i,a){if(s(this,e),this.apiKey=String(o),this.blog=i instanceof u?i:new u(i),this.isTest=!1,this.serviceUrl="https://"+e.DEFAULT_SERVICE,this.userAgent="Node.js/"+(r.version.length?r.version:"0.0.0")+" | Akismet.js/"+t("../package.json").version,"object"==("undefined"==typeof a?"undefined":n(a))&&a)for(var h in a){var c=a[h];this.hasOwnProperty(h)&&"undefined"!=typeof c&&(this[h]=c)}}return o(e,[{key:"checkComment",value:function(t){var r=h.parse(this.serviceUrl),n=r.host!=e.DEFAULT_SERVICE?h.resolve(this.serviceUrl,i.EndPoints.CHECK_COMMENT):r.protocol+"//"+this.apiKey+"."+r.host+i.EndPoints.CHECK_COMMENT,s=JSON.parse(t.toJSON());return this._queryService(n,s).then(function(t){return"true"==t})}},{key:"submitHam",value:function(t){var r=h.parse(this.serviceUrl),n=r.host!=e.DEFAULT_SERVICE?h.resolve(this.serviceUrl,i.EndPoints.SUBMIT_HAM):r.protocol+"//"+this.apiKey+"."+r.host+i.EndPoints.SUBMIT_HAM;return this._queryService(n,JSON.parse(t.toJSON()))}},{key:"submitSpam",value:function(t){var r=h.parse(this.serviceUrl),n=r.host!=e.DEFAULT_SERVICE?h.resolve(this.serviceUrl,i.EndPoints.SUBMIT_SPAM):r.protocol+"//"+this.apiKey+"."+r.host+i.EndPoints.SUBMIT_SPAM;return this._queryService(n,JSON.parse(t.toJSON()))}},{key:"toString",value:function(){return this.constructor.name+" "+JSON.stringify(this,null,2)}},{key:"verifyKey",value:function(){var t=h.resolve(this.serviceUrl,i.EndPoints.VERIFY_KEY);return this._queryService(t,{}).then(function(t){return"valid"==t})}},{key:"_queryService",value:function(t,e){var r=this;return e.key=this.apiKey,e.blog=this.blog.url,this.blog.charset&&(e.blog_charset=this.blog.charset),this.blog.lang&&(e.blog_lang=this.blog.lang),this.isTest&&(e.is_test="true"),new Promise(function(n,s){return a.post(t).type("form").send(e).set("undefined"!=typeof window?i.HTTPHeaders.X_USER_AGENT:"user-agent",r.userAgent).end(function(t,e){if(t||!e.ok)s(new Error(t?t.status:e.status));else{var r=i.HTTPHeaders.X_AKISMET_DEBUG_HELP;r in e.header?s(new Error(e.header[r])):n(e.text)}})})}}]),e}();c.DEFAULT_SERVICE="rest.akismet.com",e.exports={Blog:u,Client:c}}).call(this,t("_process"))},{"../package.json":15,"./enums":4,_process:6,superagent:12,url:13}],3:[function(t,e,r){"use strict";function n(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=Object.freeze({COMMENT:"comment",PINGBACK:"pingback",TRACKBACK:"trackback"}),a=function(){function t(e){if(s(this,t),this.email=null,this.ipAddress=null,this.name=null,this.role=null,this.url=null,this.userAgent=null,"object"==("undefined"==typeof e?"undefined":n(e))&&e)for(var r in e){var o=e[r];this.hasOwnProperty(r)&&"undefined"!=typeof o&&(this[r]=o)}}return o(t,[{key:"toJSON",value:function(t){var e={};return"string"==typeof this.name&&(e.comment_author=this.name),"string"==typeof this.email&&(e.comment_author_email=this.email),"string"==typeof this.url&&(e.comment_author_url=this.url),"string"==typeof this.userAgent&&(e.user_agent=this.userAgent),"string"==typeof this.ipAddress&&(e.user_ip=this.ipAddress),"string"==typeof this.role&&(e.user_role=this.role),JSON.stringify(e,null,t)}},{key:"toString",value:function(){return this.constructor.name+" "+this.toJSON(2)}}],[{key:"fromJSON",value:function(e){var r=void 0;if("string"!=typeof e)r=e;else try{r=JSON.parse(e)}catch(s){return null}return r&&"object"==("undefined"==typeof r?"undefined":n(r))?new t({name:r.comment_author,email:r.comment_author_email,url:r.comment_author_url,userAgent:r.user_agent,ipAddress:r.user_ip,role:r.user_role}):null}}]),t}(),h=function(){function t(e){if(s(this,t),this.author=null,this.content=null,this.date=null,this.permalink=null,this.postModified=null,this.referrer=null,this.type=null,"object"==("undefined"==typeof e?"undefined":n(e))&&e)for(var r in e){var o=e[r];this.hasOwnProperty(r)&&"undefined"!=typeof o&&(this[r]=o)}}return o(t,[{key:"toJSON",value:function(t){var e={};return this.author instanceof a&&Object.assign(e,JSON.parse(this.author.toJSON())),"string"==typeof this.content&&(e.comment_content=this.content),this.date instanceof Date&&(e.comment_date_gmt=this.date.toISOString()),this.postModified instanceof Date&&(e.comment_post_modified_gmt=this.postModified.toISOString()),"string"==typeof this.type&&(e.comment_type=this.type),"string"==typeof this.permalink&&(e.permalink=this.permalink),"string"==typeof this.referrer&&(e.referrer=this.referrer),JSON.stringify(e,null,t)}},{key:"toString",value:function(){return this.constructor.name+" "+this.toJSON(2)}}],[{key:"fromJSON",value:function(e){var r=void 0;if("string"!=typeof e)r=e;else try{r=JSON.parse(e)}catch(s){return null}if(!r||"object"!=("undefined"==typeof r?"undefined":n(r)))return null;var o=!1;for(var i in r)if("comment_author"==i.substr(0,"comment_author".length)||"user"==i.substr(0,"user".length)){o=!0;break}return new t({author:o?a.fromJSON(r):null,content:r.comment_content,date:"string"==typeof r.comment_date_gmt?new Date(r.comment_date_gmt):null,postModified:"string"==typeof r.comment_post_modified_gmt?new Date(r.comment_post_modified_gmt):null,type:r.comment_type,permalink:r.permalink,referrer:r.referrer})}}]),t}();e.exports={Author:a,Comment:h,CommentType:i}},{}],4:[function(t,e,r){"use strict";var n=Object.freeze({CHECK_COMMENT:"/1.1/comment-check",SUBMIT_HAM:"/1.1/submit-ham",SUBMIT_SPAM:"/1.1/submit-spam",VERIFY_KEY:"/1.1/verify-key"}),s=Object.freeze({X_AKISMET_DEBUG_HELP:"x-akismet-debug-help",X_REQUESTED_WITH:"x-requested-with",X_USER_AGENT:"x-user-agent"});e.exports={EndPoints:n,HTTPHeaders:s}},{}],5:[function(t,e,r){function n(t){return t?s(t):void 0}function s(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}e.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){n.off(t,r),e.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===e||n.fn===e){r.splice(s,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks[t];if(r){r=r.slice(0);for(var n=0,s=r.length;s>n;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],6:[function(t,e,r){function n(){c=!1,a.length?u=a.concat(u):l=-1,u.length&&s()}function s(){if(!c){var t=setTimeout(n);c=!0;for(var e=u.length;e;){for(a=u,u=[];++l<e;)a&&a[l].run();l=-1,e=u.length}a=null,c=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var a,h=e.exports={},u=[],c=!1,l=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new o(t,e)),1!==u.length||c||setTimeout(s,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=i,h.addListener=i,h.once=i,h.off=i,h.removeListener=i,h.removeAllListeners=i,h.emit=i,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],7:[function(t,e,r){(function(t){!function(n){function s(t){throw new RangeError(N[t])}function o(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function i(t,e){var r=t.split("@"),n="";r.length>1&&(n=r[0]+"@",t=r[1]),t=t.replace(U,".");var s=t.split("."),i=o(s,e).join(".");return n+i}function a(t){for(var e,r,n=[],s=0,o=t.length;o>s;)e=t.charCodeAt(s++),e>=55296&&56319>=e&&o>s?(r=t.charCodeAt(s++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),s--)):n.push(e);return n}function h(t){return o(t,function(t){var e="";return t>65535&&(t-=65536,e+=H(t>>>10&1023|55296),t=56320|1023&t),e+=H(t)}).join("")}function u(t){return 10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:x}function c(t,e){return t+22+75*(26>t)-((0!=e)<<5)}function l(t,e,r){var n=0;for(t=r?P(t/k):t>>1,t+=P(t/e);t>I*j>>1;n+=x)t=P(t/I);return P(n+(I+1)*t/(t+E))}function p(t){var e,r,n,o,i,a,c,p,f,d,m=[],y=t.length,v=0,g=T,b=S;for(r=t.lastIndexOf(A),0>r&&(r=0),n=0;r>n;++n)t.charCodeAt(n)>=128&&s("not-basic"),m.push(t.charCodeAt(n));for(o=r>0?r+1:0;y>o;){for(i=v,a=1,c=x;o>=y&&s("invalid-input"),p=u(t.charCodeAt(o++)),(p>=x||p>P((w-v)/a))&&s("overflow"),v+=p*a,f=b>=c?O:c>=b+j?j:c-b,!(f>p);c+=x)d=x-f,a>P(w/d)&&s("overflow"),a*=d;e=m.length+1,b=l(v-i,e,0==i),P(v/e)>w-g&&s("overflow"),g+=P(v/e),v%=e,m.splice(v++,0,g)}return h(m)}function f(t){var e,r,n,o,i,h,u,p,f,d,m,y,v,g,b,_=[];for(t=a(t),y=t.length,e=T,r=0,i=S,h=0;y>h;++h)m=t[h],128>m&&_.push(H(m));for(n=o=_.length,o&&_.push(A);y>n;){for(u=w,h=0;y>h;++h)m=t[h],m>=e&&u>m&&(u=m);for(v=n+1,u-e>P((w-r)/v)&&s("overflow"),r+=(u-e)*v,e=u,h=0;y>h;++h)if(m=t[h],e>m&&++r>w&&s("overflow"),m==e){for(p=r,f=x;d=i>=f?O:f>=i+j?j:f-i,!(d>p);f+=x)b=p-d,g=x-d,_.push(H(c(d+b%g,0))),p=P(b/g);_.push(H(c(p,0))),i=l(r,v,n==o),r=0,++n}++r,++e}return _.join("")}function d(t){return i(t,function(t){return C.test(t)?p(t.slice(4).toLowerCase()):t})}function m(t){return i(t,function(t){return q.test(t)?"xn--"+f(t):t})}var y="object"==typeof r&&r&&!r.nodeType&&r,v="object"==typeof e&&e&&!e.nodeType&&e,g="object"==typeof t&&t;(g.global===g||g.window===g||g.self===g)&&(n=g);var b,_,w=2147483647,x=36,O=1,j=26,E=38,k=700,S=72,T=128,A="-",C=/^xn--/,q=/[^\x20-\x7E]/,U=/[\x2E\u3002\uFF0E\uFF61]/g,N={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},I=x-O,P=Math.floor,H=String.fromCharCode;if(b={version:"1.3.2",ucs2:{decode:a,encode:h},decode:p,encode:f,toASCII:m,toUnicode:d},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return b});else if(y&&v)if(e.exports==y)v.exports=b;else for(_ in b)b.hasOwnProperty(_)&&(y[_]=b[_]);else n.punycode=b}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,r,o){e=e||"&",r=r||"=";var i={};if("string"!=typeof t||0===t.length)return i;var a=/\+/g;t=t.split(e);var h=1e3;o&&"number"==typeof o.maxKeys&&(h=o.maxKeys);var u=t.length;h>0&&u>h&&(u=h);for(var c=0;u>c;++c){var l,p,f,d,m=t[c].replace(a,"%20"),y=m.indexOf(r);y>=0?(l=m.substr(0,y),p=m.substr(y+1)):(l=m,p=""),f=decodeURIComponent(l),d=decodeURIComponent(p),n(i,f)?s(i[f])?i[f].push(d):i[f]=[i[f],d]:i[f]=d}return i};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],9:[function(t,e,r){"use strict";function n(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var s=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};e.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?n(i(t),function(i){var a=encodeURIComponent(s(i))+r;return o(t[i])?n(t[i],function(t){return a+encodeURIComponent(s(t))}).join(e):a+encodeURIComponent(s(t[i]))}).join(e):a?encodeURIComponent(s(a))+r+encodeURIComponent(s(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},{}],10:[function(t,e,r){"use strict";r.decode=r.parse=t("./decode"),r.encode=r.stringify=t("./encode")},{"./decode":8,"./encode":9}],11:[function(t,e,r){e.exports=function(t,e,r){for(var n=0,s=t.length,o=3==arguments.length?r:t[n++];s>n;)o=e.call(null,o,t[n],++n,t);return o}},{}],12:[function(t,e,r){function n(){}function s(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function o(t){return t===Object(t)}function i(t){if(!o(t))return t;var e=[];for(var r in t)null!=t[r]&&a(e,r,t[r]);return e.join("&")}function a(t,e,r){return Array.isArray(r)?r.forEach(function(r){a(t,e,r)}):void t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}function h(t){for(var e,r,n={},s=t.split("&"),o=0,i=s.length;i>o;++o)r=s[o],e=r.split("="),n[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return n}function u(t){var e,r,n,s,o=t.split(/\r?\n/),i={};o.pop();for(var a=0,h=o.length;h>a;++a)r=o[a],e=r.indexOf(":"),n=r.slice(0,e).toLowerCase(),s=_(r.slice(e+1)),i[n]=s;return i}function c(t){return/[\/+]json\b/.test(t)}function l(t){return t.split(/ *; */).shift()}function p(t){return b(t.split(/ *; */),function(t,e){var r=e.split(/ *= */),n=r.shift(),s=r.shift();return n&&s&&(t[n]=s),t},{})}function f(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this.setStatusProperties(this.xhr.status),this.header=this.headers=u(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text?this.text:this.xhr.response):null}function d(t,e){var r=this;g.call(this),this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new f(r)}catch(n){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=n,t.rawResponse=r.xhr&&r.xhr.responseText?r.xhr.responseText:null,r.callback(t)}if(r.emit("response",e),t)return r.callback(t,e);if(e.status>=200&&e.status<300)return r.callback(t,e);var s=new Error(e.statusText||"Unsuccessful HTTP response");s.original=t,s.response=e,s.status=e.status,r.callback(s,e)})}function m(t,e){return"function"==typeof e?new d("GET",t).end(e):1==arguments.length?new d("GET",t):new d(t,e)}function y(t,e){var r=m("DELETE",t);return e&&r.end(e),r}var v,g=t("emitter"),b=t("reduce");v="undefined"!=typeof window?window:"undefined"!=typeof self?self:this,m.getXHR=function(){if(!(!v.XMLHttpRequest||v.location&&"file:"==v.location.protocol&&v.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var _="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};m.serializeObject=i,m.parseString=h,m.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},m.serialize={"application/x-www-form-urlencoded":i,"application/json":JSON.stringify},m.parse={"application/x-www-form-urlencoded":h,"application/json":JSON.parse},f.prototype.get=function(t){return this.header[t.toLowerCase()]},f.prototype.setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=l(e);var r=p(e);for(var n in r)this[n]=r[n]},f.prototype.parseBody=function(t){var e=m.parse[this.type];return e&&t&&(t.length||t instanceof Object)?e(t):null},f.prototype.setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},f.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot "+e+" "+r+" ("+this.status+")",s=new Error(n);return s.status=this.status,s.method=e,s.url=r,s},m.Response=f,g(d.prototype),d.prototype.use=function(t){return t(this),this},d.prototype.timeout=function(t){return this._timeout=t,this},d.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},d.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},d.prototype.set=function(t,e){if(o(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},d.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},d.prototype.getHeader=function(t){return this._header[t.toLowerCase()]},d.prototype.type=function(t){return this.set("Content-Type",m.types[t]||t),this},d.prototype.parse=function(t){return this._parser=t,this},d.prototype.accept=function(t){return this.set("Accept",m.types[t]||t),this},d.prototype.auth=function(t,e){var r=btoa(t+":"+e);return this.set("Authorization","Basic "+r),this},d.prototype.query=function(t){return"string"!=typeof t&&(t=i(t)),t&&this._query.push(t),this},d.prototype.field=function(t,e){return this._formData||(this._formData=new v.FormData),this._formData.append(t,e),this},d.prototype.attach=function(t,e,r){return this._formData||(this._formData=new v.FormData),this._formData.append(t,e,r),this},d.prototype.send=function(t){var e=o(t),r=this.getHeader("Content-Type");if(e&&o(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this.getHeader("Content-Type"),"application/x-www-form-urlencoded"==r?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||s(t)?this:(r||this.type("json"),this)},d.prototype.callback=function(t,e){var r=this._callback;this.clearTimeout(),r(t,e)},d.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},d.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},d.prototype.withCredentials=function(){return this._withCredentials=!0,this},d.prototype.end=function(t){var e=this,r=this.xhr=m.getXHR(),o=this._query.join("&"),i=this._timeout,a=this._formData||this._data;this._callback=t||n,r.onreadystatechange=function(){if(4==r.readyState){var t;try{t=r.status}catch(n){t=0}if(0==t){if(e.timedout)return e.timeoutError();if(e.aborted)return;return e.crossDomainError()}e.emit("end")}};var h=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.emit("progress",t)};this.hasListeners("progress")&&(r.onprogress=h);try{r.upload&&this.hasListeners("progress")&&(r.upload.onprogress=h)}catch(u){}if(i&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},i)),o&&(o=m.serializeObject(o),this.url+=~this.url.indexOf("?")?"&"+o:"?"+o),r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof a&&!s(a)){var l=this.getHeader("Content-Type"),p=this._parser||m.serialize[l?l.split(";")[0]:""];!p&&c(l)&&(p=m.serialize["application/json"]),p&&(a=p(a))}for(var f in this.header)null!=this.header[f]&&r.setRequestHeader(f,this.header[f]);return this.emit("request",this),r.send("undefined"!=typeof a?a:null),this},d.prototype.then=function(t,e){return this.end(function(r,n){r?e(r):t(n)})},m.Request=d,m.get=function(t,e,r){var n=m("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},m.head=function(t,e,r){var n=m("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},m.del=y,m["delete"]=y,m.patch=function(t,e,r){var n=m("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},m.post=function(t,e,r){var n=m("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},m.put=function(t,e,r){var n=m("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},e.exports=m},{emitter:5,reduce:11}],13:[function(t,e,r){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function s(t,e,r){if(t&&u.isObject(t)&&t instanceof n)return t;var s=new n;return s.parse(t,e,r),s}function o(t){return u.isString(t)&&(t=s(t)),t instanceof n?t.format():n.prototype.format.call(t)}function i(t,e){return s(t,!1,!0).resolve(e)}function a(t,e){return t?s(t,!1,!0).resolveObject(e):e}var h=t("punycode"),u=t("./util");r.parse=s,r.resolve=i,r.resolveObject=a,r.format=o,r.Url=n;var c=/^([a-z0-9.+-]+:)/i,l=/:[0-9]*$/,p=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,f=["<",">",'"',"`"," ","\r","\n","	"],d=["{","}","|","\\","^","`"].concat(f),m=["'"].concat(d),y=["%","/","?",";","#"].concat(m),v=["/","?","#"],g=255,b=/^[+a-z0-9A-Z_-]{0,63}$/,_=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,w={javascript:!0,"javascript:":!0},x={javascript:!0,"javascript:":!0},O={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},j=t("querystring");n.prototype.parse=function(t,e,r){if(!u.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t.indexOf("?"),s=-1!==n&&n<t.indexOf("#")?"?":"#",o=t.split(s),i=/\\/g;o[0]=o[0].replace(i,"/"),t=o.join(s);var a=t;if(a=a.trim(),!r&&1===t.split("#").length){var l=p.exec(a);if(l)return this.path=a,this.href=a,this.pathname=l[1],l[2]?(this.search=l[2],e?this.query=j.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var f=c.exec(a);if(f){f=f[0];var d=f.toLowerCase();this.protocol=d,a=a.substr(f.length)}if(r||f||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var E="//"===a.substr(0,2);!E||f&&x[f]||(a=a.substr(2),this.slashes=!0)}if(!x[f]&&(E||f&&!O[f])){for(var k=-1,S=0;S<v.length;S++){var T=a.indexOf(v[S]);-1!==T&&(-1===k||k>T)&&(k=T)}var A,C;C=-1===k?a.lastIndexOf("@"):a.lastIndexOf("@",k),-1!==C&&(A=a.slice(0,C),a=a.slice(C+1),this.auth=decodeURIComponent(A)),k=-1;for(var S=0;S<y.length;S++){var T=a.indexOf(y[S]);-1!==T&&(-1===k||k>T)&&(k=T)}-1===k&&(k=a.length),this.host=a.slice(0,k),a=a.slice(k),this.parseHost(),this.hostname=this.hostname||"";var q="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!q)for(var U=this.hostname.split(/\./),S=0,N=U.length;N>S;S++){var I=U[S];if(I&&!I.match(b)){for(var P="",H=0,R=I.length;R>H;H++)P+=I.charCodeAt(H)>127?"x":I[H];if(!P.match(b)){var M=U.slice(0,S),D=U.slice(S+1),L=I.match(_);L&&(M.push(L[1]),D.unshift(L[2])),D.length&&(a="/"+D.join(".")+a),this.hostname=M.join(".");break}}}this.hostname.length>g?this.hostname="":this.hostname=this.hostname.toLowerCase(),q||(this.hostname=h.toASCII(this.hostname));var J=this.port?":"+this.port:"",B=this.hostname||"";this.host=B+J,this.href+=this.host,q&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0]&&(a="/"+a))}if(!w[d])for(var S=0,N=m.length;N>S;S++){var F=m[S];if(-1!==a.indexOf(F)){var K=encodeURIComponent(F);K===F&&(K=escape(F)),a=a.split(F).join(K)}}var X=a.indexOf("#");-1!==X&&(this.hash=a.substr(X),a=a.slice(0,X));var z=a.indexOf("?");if(-1!==z?(this.search=a.substr(z),this.query=a.substr(z+1),e&&(this.query=j.parse(this.query)),a=a.slice(0,z)):e&&(this.search="",this.query={}),a&&(this.pathname=a),O[d]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var J=this.pathname||"",G=this.search||"";this.path=J+G}return this.href=this.format(),this},n.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",s=!1,o="";this.host?s=t+this.host:this.hostname&&(s=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&u.isObject(this.query)&&Object.keys(this.query).length&&(o=j.stringify(this.query));var i=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||O[e])&&s!==!1?(s="//"+(s||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):s||(s=""),n&&"#"!==n.charAt(0)&&(n="#"+n),i&&"?"!==i.charAt(0)&&(i="?"+i),r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),i=i.replace("#","%23"),e+s+r+i+n},n.prototype.resolve=function(t){return this.resolveObject(s(t,!1,!0)).format()},n.prototype.resolveObject=function(t){if(u.isString(t)){var e=new n;e.parse(t,!1,!0),t=e}for(var r=new n,s=Object.keys(this),o=0;o<s.length;o++){var i=s[o];r[i]=this[i]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var a=Object.keys(t),h=0;h<a.length;h++){var c=a[h];"protocol"!==c&&(r[c]=t[c])}return O[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!O[t.protocol]){for(var l=Object.keys(t),p=0;p<l.length;p++){var f=l[p];r[f]=t[f]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||x[t.protocol])r.pathname=t.pathname;else{for(var d=(t.pathname||"").split("/");d.length&&!(t.host=d.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),r.pathname=d.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var m=r.pathname||"",y=r.search||"";r.path=m+y}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var v=r.pathname&&"/"===r.pathname.charAt(0),g=t.host||t.pathname&&"/"===t.pathname.charAt(0),b=g||v||r.host&&t.pathname,_=b,w=r.pathname&&r.pathname.split("/")||[],d=t.pathname&&t.pathname.split("/")||[],j=r.protocol&&!O[r.protocol];if(j&&(r.hostname="",r.port=null,r.host&&(""===w[0]?w[0]=r.host:w.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===d[0]?d[0]=t.host:d.unshift(t.host)),t.host=null),b=b&&(""===d[0]||""===w[0])),g)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,w=d;else if(d.length)w||(w=[]),w.pop(),w=w.concat(d),r.search=t.search,r.query=t.query;else if(!u.isNullOrUndefined(t.search)){if(j){r.hostname=r.host=w.shift();var E=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;E&&(r.auth=E.shift(),r.host=r.hostname=E.shift())}return r.search=t.search,r.query=t.query,u.isNull(r.pathname)&&u.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!w.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var k=w.slice(-1)[0],S=(r.host||t.host||w.length>1)&&("."===k||".."===k)||""===k,T=0,A=w.length;A>=0;A--)k=w[A],"."===k?w.splice(A,1):".."===k?(w.splice(A,1),T++):T&&(w.splice(A,1),T--);if(!b&&!_)for(;T--;T)w.unshift("..");!b||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),S&&"/"!==w.join("/").substr(-1)&&w.push("");var C=""===w[0]||w[0]&&"/"===w[0].charAt(0);if(j){r.hostname=r.host=C?"":w.length?w.shift():"";var E=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;E&&(r.auth=E.shift(),r.host=r.hostname=E.shift())}return b=b||r.host&&w.length,b&&!C&&w.unshift(""),w.length?r.pathname=w.join("/"):(r.pathname=null,r.path=null),u.isNull(r.pathname)&&u.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var t=this.host,e=l.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},{"./util":14,punycode:7,querystring:10}],14:[function(t,e,r){"use strict";e.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},{}],15:[function(t,e,r){e.exports={author:"Cédric Belin <cedric@belin.io>",bugs:"https://github.com/cedx/akismet.js/issues",description:"Prevent comment spam using Akismet service.",homepage:"https://github.com/cedx/akismet.js",license:"Apache-2.0",main:"./index",name:"akismet-js",repository:"cedx/akismet.js",version:"0.7.1",bin:{akismet:"./bin/cli.js"},dependencies:{"body-parser":"^1.14.2",commander:"^2.9.0",cors:"^2.7.1",express:"^4.13.3",forever:"^0.15.1",superagent:"^1.6.1"},devDependencies:{"babel-preset-es2015":"^6.3.13",babelify:"^7.2.0",browserify:"^12.0.1",del:"^2.1.0",gulp:"^3.9.0","gulp-david":"^0.3.4","gulp-istanbul":"^0.10.3","gulp-jshint":"^2.0.0","gulp-load-plugins":"^1.1.0","gulp-mocha":"^2.2.0","gulp-rename":"^1.2.2","gulp-sourcemaps":"^1.6.0","gulp-uglify":"^1.5.1","gulp-zip":"^3.0.2",jsdoc:"^3.4.0",jshint:"^2.8.0",mocha:"^2.3.4","mocha-sonar-reporter":"^0.1.4","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0"},engines:{node:">=4.2.0"},jshintConfig:{browser:!0,esnext:!0,freeze:!0,futurehostile:!0,jquery:!0,latedef:"nofunc",loopfunc:!0,mocha:!0,nocomma:!0,
node:!0,nonbsp:!0,nonew:!0,strict:!0,undef:!0,unused:!0,varstmt:!0,globals:{mocha:!1}},keywords:["akismet","comment","spam","validation"],scripts:{start:"forever start -c node -e var/stderr.log -o var/stdout.log -l var/forever.log --append --minUptime 30000 --spinSleepTime 30000 --uid akismet bin/cli.js",stop:"forever stop akismet",test:"gulp test"}}},{}]},{},[1]);