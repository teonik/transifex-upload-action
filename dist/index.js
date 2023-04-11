import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ({

/***/ 539:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

!function(e,n){ true?module.exports=n():0}(global,(()=>(()=>{var e={717:(e,n,a)=>{var i;global,i=()=>(()=>{var e={9118:(e,n,a)=>{e.exports={parallel:a(9162),serial:a(1357),serialOrdered:a(9087)}},7651:e=>{function n(e){"function"==typeof this.jobs[e]&&this.jobs[e]()}e.exports=function(e){Object.keys(e.jobs).forEach(n.bind(e)),e.jobs={}}},5912:(e,n,a)=>{var i=a(9265);e.exports=function(e){var n=!1;return i((function(){n=!0})),function(a,t){n?e(a,t):i((function(){e(a,t)}))}}},9265:e=>{e.exports=function(e){var n="function"==typeof setImmediate?setImmediate:"object"==typeof process&&"function"==typeof process.nextTick?process.nextTick:null;n?n(e):setTimeout(e,0)}},7594:(e,n,a)=>{var i=a(5912),t=a(7651);e.exports=function(e,n,a,o){var s=a.keyedList?a.keyedList[a.index]:a.index;a.jobs[s]=function(e,n,a,t){return 2==e.length?e(a,i(t)):e(a,n,i(t))}(n,s,e[s],(function(e,n){s in a.jobs&&(delete a.jobs[s],e?t(a):a.results[s]=n,o(e,a.results))}))}},4528:e=>{e.exports=function(e,n){var a=!Array.isArray(e),i={index:0,keyedList:a||n?Object.keys(e):null,jobs:{},results:a?{}:[],size:a?Object.keys(e).length:e.length};return n&&i.keyedList.sort(a?n:function(a,i){return n(e[a],e[i])}),i}},5353:(e,n,a)=>{var i=a(7651),t=a(5912);e.exports=function(e){Object.keys(this.jobs).length&&(this.index=this.size,i(this),t(e)(null,this.results))}},9162:(e,n,a)=>{var i=a(7594),t=a(4528),o=a(5353);e.exports=function(e,n,a){for(var s=t(e);s.index<(s.keyedList||e).length;)i(e,n,s,(function(e,n){e?a(e,n):0!==Object.keys(s.jobs).length||a(null,s.results)})),s.index++;return o.bind(s,a)}},1357:(e,n,a)=>{var i=a(9087);e.exports=function(e,n,a){return i(e,n,null,a)}},9087:(e,n,a)=>{var i=a(7594),t=a(4528),o=a(5353);function s(e,n){return e<n?-1:e>n?1:0}e.exports=function(e,n,a,s){var r=t(e,a);return i(e,n,r,(function a(t,o){t?s(t,o):(r.index++,r.index<(r.keyedList||e).length?i(e,n,r,a):s(null,r.results))})),o.bind(r,s)},e.exports.ascending=s,e.exports.descending=function(e,n){return-1*s(e,n)}},9669:(e,n,a)=>{e.exports=a(1609)},7970:(e,n,a)=>{"use strict";var i=a(4867),t=a(6026),o=a(4097),s=a(5327),r=a(3685),c=a(5687),p=a(938).http,u=a(938).https,l=a(7310),d=a(9796),m=a(7288).version,f=a(7874),x=a(2648),v=a(644),h=/https:?/,b=["http:","https:","file:"];function g(e,n,a){if(e.hostname=n.host,e.host=n.host,e.port=n.port,e.path=a,n.auth){var i=Buffer.from(n.auth.username+":"+n.auth.password,"utf8").toString("base64");e.headers["Proxy-Authorization"]="Basic "+i}e.beforeRedirect=function(e){e.headers.host=e.host,g(e,n,e.href)}}e.exports=function(e){return new Promise((function(n,a){var y;function _(){e.cancelToken&&e.cancelToken.unsubscribe(y),e.signal&&e.signal.removeEventListener("abort",y)}var w=function(e){_(),n(e)},j=!1,k=function(e){_(),j=!0,a(e)},E=e.data,R=e.headers,O={};if(Object.keys(R).forEach((function(e){O[e.toLowerCase()]=e})),"user-agent"in O?R[O["user-agent"]]||delete R[O["user-agent"]]:R["User-Agent"]="axios/"+m,i.isFormData(E)&&i.isFunction(E.getHeaders))Object.assign(R,E.getHeaders());else if(E&&!i.isStream(E)){if(Buffer.isBuffer(E));else if(i.isArrayBuffer(E))E=Buffer.from(new Uint8Array(E));else{if(!i.isString(E))return k(new x("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",x.ERR_BAD_REQUEST,e));E=Buffer.from(E,"utf-8")}if(e.maxBodyLength>-1&&E.length>e.maxBodyLength)return k(new x("Request body larger than maxBodyLength limit",x.ERR_BAD_REQUEST,e));O["content-length"]||(R["Content-Length"]=E.length)}var C=void 0;e.auth&&(C=(e.auth.username||"")+":"+(e.auth.password||""));var A=o(e.baseURL,e.url),T=l.parse(A),z=T.protocol||b[0];if(-1===b.indexOf(z))return k(new x("Unsupported protocol "+z,x.ERR_BAD_REQUEST,e));if(!C&&T.auth){var S=T.auth.split(":");C=(S[0]||"")+":"+(S[1]||"")}C&&O.authorization&&delete R[O.authorization];var P=h.test(z),q=P?e.httpsAgent:e.httpAgent;try{s(T.path,e.params,e.paramsSerializer).replace(/^\?/,"")}catch(n){var I=new Error(n.message);I.config=e,I.url=e.url,I.exists=!0,k(I)}var L={path:s(T.path,e.params,e.paramsSerializer).replace(/^\?/,""),method:e.method.toUpperCase(),headers:R,agent:q,agents:{http:e.httpAgent,https:e.httpsAgent},auth:C};e.socketPath?L.socketPath=e.socketPath:(L.hostname=T.hostname,L.port=T.port);var F,B=e.proxy;if(!B&&!1!==B){var U=z.slice(0,-1)+"_proxy",D=process.env[U]||process.env[U.toUpperCase()];if(D){var N=l.parse(D),M=process.env.no_proxy||process.env.NO_PROXY,$=!0;if(M&&($=!M.split(",").map((function(e){return e.trim()})).some((function(e){return!!e&&("*"===e||"."===e[0]&&T.hostname.substr(T.hostname.length-e.length)===e||T.hostname===e)}))),$&&(B={host:N.hostname,port:N.port,protocol:N.protocol},N.auth)){var W=N.auth.split(":");B.auth={username:W[0],password:W[1]}}}}B&&(L.headers.host=T.hostname+(T.port?":"+T.port:""),g(L,B,z+"//"+T.hostname+(T.port?":"+T.port:"")+L.path));var Y=P&&(!B||h.test(B.protocol));e.transport?F=e.transport:0===e.maxRedirects?F=Y?c:r:(e.maxRedirects&&(L.maxRedirects=e.maxRedirects),e.beforeRedirect&&(L.beforeRedirect=e.beforeRedirect),F=Y?u:p),e.maxBodyLength>-1&&(L.maxBodyLength=e.maxBodyLength),e.insecureHTTPParser&&(L.insecureHTTPParser=e.insecureHTTPParser);var H=F.request(L,(function(n){if(!H.aborted){var a=n,o=n.req||H;if(204!==n.statusCode&&"HEAD"!==o.method&&!1!==e.decompress)switch(n.headers["content-encoding"]){case"gzip":case"compress":case"deflate":a=a.pipe(d.createUnzip()),delete n.headers["content-encoding"]}var s={status:n.statusCode,statusText:n.statusMessage,headers:n.headers,config:e,request:o};if("stream"===e.responseType)s.data=a,t(w,k,s);else{var r=[],c=0;a.on("data",(function(n){r.push(n),c+=n.length,e.maxContentLength>-1&&c>e.maxContentLength&&(j=!0,a.destroy(),k(new x("maxContentLength size of "+e.maxContentLength+" exceeded",x.ERR_BAD_RESPONSE,e,o)))})),a.on("aborted",(function(){j||(a.destroy(),k(new x("maxContentLength size of "+e.maxContentLength+" exceeded",x.ERR_BAD_RESPONSE,e,o)))})),a.on("error",(function(n){H.aborted||k(x.from(n,null,e,o))})),a.on("end",(function(){try{var n=1===r.length?r[0]:Buffer.concat(r);"arraybuffer"!==e.responseType&&(n=n.toString(e.responseEncoding),e.responseEncoding&&"utf8"!==e.responseEncoding||(n=i.stripBOM(n))),s.data=n}catch(n){k(x.from(n,null,e,s.request,s))}t(w,k,s)}))}}}));if(H.on("error",(function(n){k(x.from(n,null,e,H))})),H.on("socket",(function(e){e.setKeepAlive(!0,6e4)})),e.timeout){var J=parseInt(e.timeout,10);if(isNaN(J))return void k(new x("error trying to parse `config.timeout` to int",x.ERR_BAD_OPTION_VALUE,e,H));H.setTimeout(J,(function(){H.abort();var n=e.transitional||f;k(new x("timeout of "+J+"ms exceeded",n.clarifyTimeoutError?x.ETIMEDOUT:x.ECONNABORTED,e,H))}))}(e.cancelToken||e.signal)&&(y=function(e){H.aborted||(H.abort(),k(!e||e&&e.type?new v:e))},e.cancelToken&&e.cancelToken.subscribe(y),e.signal&&(e.signal.aborted?y():e.signal.addEventListener("abort",y))),i.isStream(E)?E.on("error",(function(n){k(x.from(n,e,null,H))})).pipe(H):H.end(E)}))}},5448:(e,n,a)=>{"use strict";var i=a(4867),t=a(6026),o=a(4372),s=a(5327),r=a(4097),c=a(4109),p=a(7985),u=a(7874),l=a(2648),d=a(644),m=a(205);e.exports=function(e){return new Promise((function(n,a){var f,x=e.data,v=e.headers,h=e.responseType;function b(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}i.isFormData(x)&&i.isStandardBrowserEnv()&&delete v["Content-Type"];var g=new XMLHttpRequest;if(e.auth){var y=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";v.Authorization="Basic "+btoa(y+":"+_)}var w=r(e.baseURL,e.url);function j(){if(g){var i="getAllResponseHeaders"in g?c(g.getAllResponseHeaders()):null,o={data:h&&"text"!==h&&"json"!==h?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:i,config:e,request:g};t((function(e){n(e),b()}),(function(e){a(e),b()}),o),g=null}}if(g.open(e.method.toUpperCase(),s(w,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,"onloadend"in g?g.onloadend=j:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(j)},g.onabort=function(){g&&(a(new l("Request aborted",l.ECONNABORTED,e,g)),g=null)},g.onerror=function(){a(new l("Network Error",l.ERR_NETWORK,e,g,g)),g=null},g.ontimeout=function(){var n=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",i=e.transitional||u;e.timeoutErrorMessage&&(n=e.timeoutErrorMessage),a(new l(n,i.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,e,g)),g=null},i.isStandardBrowserEnv()){var k=(e.withCredentials||p(w))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;k&&(v[e.xsrfHeaderName]=k)}"setRequestHeader"in g&&i.forEach(v,(function(e,n){void 0===x&&"content-type"===n.toLowerCase()?delete v[n]:g.setRequestHeader(n,e)})),i.isUndefined(e.withCredentials)||(g.withCredentials=!!e.withCredentials),h&&"json"!==h&&(g.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(e){g&&(a(!e||e&&e.type?new d:e),g.abort(),g=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),x||(x=null);var E=m(w);E&&-1===["http","https","file"].indexOf(E)?a(new l("Unsupported protocol "+E+":",l.ERR_BAD_REQUEST,e)):g.send(x)}))}},1609:(e,n,a)=>{"use strict";var i=a(4867),t=a(1849),o=a(321),s=a(7185),r=function e(n){var a=new o(n),r=t(o.prototype.request,a);return i.extend(r,o.prototype,a),i.extend(r,a),r.create=function(a){return e(s(n,a))},r}(a(5546));r.Axios=o,r.CanceledError=a(644),r.CancelToken=a(4972),r.isCancel=a(6502),r.VERSION=a(7288).version,r.toFormData=a(7675),r.AxiosError=a(2648),r.Cancel=r.CanceledError,r.all=function(e){return Promise.all(e)},r.spread=a(8713),r.isAxiosError=a(6268),e.exports=r,e.exports.default=r},4972:(e,n,a)=>{"use strict";var i=a(644);function t(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var a=this;this.promise.then((function(e){if(a._listeners){var n,i=a._listeners.length;for(n=0;n<i;n++)a._listeners[n](e);a._listeners=null}})),this.promise.then=function(e){var n,i=new Promise((function(e){a.subscribe(e),n=e})).then(e);return i.cancel=function(){a.unsubscribe(n)},i},e((function(e){a.reason||(a.reason=new i(e),n(a.reason))}))}t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},t.prototype.unsubscribe=function(e){if(this._listeners){var n=this._listeners.indexOf(e);-1!==n&&this._listeners.splice(n,1)}},t.source=function(){var e;return{token:new t((function(n){e=n})),cancel:e}},e.exports=t},644:(e,n,a)=>{"use strict";var i=a(2648);function t(e){i.call(this,null==e?"canceled":e,i.ERR_CANCELED),this.name="CanceledError"}a(4867).inherits(t,i,{__CANCEL__:!0}),e.exports=t},6502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,n,a)=>{"use strict";var i=a(4867),t=a(5327),o=a(782),s=a(3572),r=a(7185),c=a(4097),p=a(4875),u=p.validators;function l(e){this.defaults=e,this.interceptors={request:new o,response:new o}}l.prototype.request=function(e,n){"string"==typeof e?(n=n||{}).url=e:n=e||{},(n=r(this.defaults,n)).method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var a=n.transitional;void 0!==a&&p.assertOptions(a,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var i=[],t=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(n)||(t=t&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));var o,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!t){var l=[s,void 0];for(Array.prototype.unshift.apply(l,i),l=l.concat(c),o=Promise.resolve(n);l.length;)o=o.then(l.shift(),l.shift());return o}for(var d=n;i.length;){var m=i.shift(),f=i.shift();try{d=m(d)}catch(e){f(e);break}}try{o=s(d)}catch(e){return Promise.reject(e)}for(;c.length;)o=o.then(c.shift(),c.shift());return o},l.prototype.getUri=function(e){e=r(this.defaults,e);var n=c(e.baseURL,e.url);return t(n,e.params,e.paramsSerializer)},i.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(n,a){return this.request(r(a||{},{method:e,url:n,data:(a||{}).data}))}})),i.forEach(["post","put","patch"],(function(e){function n(n){return function(a,i,t){return this.request(r(t||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:a,data:i}))}}l.prototype[e]=n(),l.prototype[e+"Form"]=n(!0)})),e.exports=l},2648:(e,n,a)=>{"use strict";var i=a(4867);function t(e,n,a,i,t){Error.call(this),this.message=e,this.name="AxiosError",n&&(this.code=n),a&&(this.config=a),i&&(this.request=i),t&&(this.response=t)}i.inherits(t,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var o=t.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(t,s),Object.defineProperty(o,"isAxiosError",{value:!0}),t.from=function(e,n,a,s,r,c){var p=Object.create(o);return i.toFlatObject(e,p,(function(e){return e!==Error.prototype})),t.call(p,e.message,n,a,s,r),p.name=e.name,c&&Object.assign(p,c),p},e.exports=t},782:(e,n,a)=>{"use strict";var i=a(4867);function t(){this.handlers=[]}t.prototype.use=function(e,n,a){return this.handlers.push({fulfilled:e,rejected:n,synchronous:!!a&&a.synchronous,runWhen:a?a.runWhen:null}),this.handlers.length-1},t.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},t.prototype.forEach=function(e){i.forEach(this.handlers,(function(n){null!==n&&e(n)}))},e.exports=t},4097:(e,n,a)=>{"use strict";var i=a(1793),t=a(7303);e.exports=function(e,n){return e&&!i(n)?t(e,n):n}},3572:(e,n,a)=>{"use strict";var i=a(4867),t=a(8527),o=a(6502),s=a(5546),r=a(644);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new r}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=t.call(e,e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),i.forEach(["delete","get","head","post","put","patch","common"],(function(n){delete e.headers[n]})),(e.adapter||s.adapter)(e).then((function(n){return c(e),n.data=t.call(e,n.data,n.headers,e.transformResponse),n}),(function(n){return o(n)||(c(e),n&&n.response&&(n.response.data=t.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)}))}},7185:(e,n,a)=>{"use strict";var i=a(4867);e.exports=function(e,n){n=n||{};var a={};function t(e,n){return i.isPlainObject(e)&&i.isPlainObject(n)?i.merge(e,n):i.isPlainObject(n)?i.merge({},n):i.isArray(n)?n.slice():n}function o(a){return i.isUndefined(n[a])?i.isUndefined(e[a])?void 0:t(void 0,e[a]):t(e[a],n[a])}function s(e){if(!i.isUndefined(n[e]))return t(void 0,n[e])}function r(a){return i.isUndefined(n[a])?i.isUndefined(e[a])?void 0:t(void 0,e[a]):t(void 0,n[a])}function c(a){return a in n?t(e[a],n[a]):a in e?t(void 0,e[a]):void 0}var p={url:s,method:s,data:s,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:c};return i.forEach(Object.keys(e).concat(Object.keys(n)),(function(e){var n=p[e]||o,t=n(e);i.isUndefined(t)&&n!==c||(a[e]=t)})),a}},6026:(e,n,a)=>{"use strict";var i=a(2648);e.exports=function(e,n,a){var t=a.config.validateStatus;a.status&&t&&!t(a.status)?n(new i("Request failed with status code "+a.status,[i.ERR_BAD_REQUEST,i.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a)):e(a)}},8527:(e,n,a)=>{"use strict";var i=a(4867),t=a(5546);e.exports=function(e,n,a){var o=this||t;return i.forEach(a,(function(a){e=a.call(o,e,n)})),e}},3784:(e,n,a)=>{e.exports=a(6882)},5546:(e,n,a)=>{"use strict";var i=a(4867),t=a(6016),o=a(2648),s=a(7874),r=a(7675),c={"Content-Type":"application/x-www-form-urlencoded"};function p(e,n){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}var u,l={transitional:s,adapter:("undefined"!=typeof XMLHttpRequest?u=a(5448):"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(u=a(7970)),u),transformRequest:[function(e,n){if(t(n,"Accept"),t(n,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e))return e;if(i.isArrayBufferView(e))return e.buffer;if(i.isURLSearchParams(e))return p(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var a,o=i.isObject(e),s=n&&n["Content-Type"];if((a=i.isFileList(e))||o&&"multipart/form-data"===s){var c=this.env&&this.env.FormData;return r(a?{"files[]":e}:e,c&&new c)}return o||"application/json"===s?(p(n,"application/json"),function(e,n,a){if(i.isString(e))try{return(0,JSON.parse)(e),i.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var n=this.transitional||l.transitional,a=n&&n.silentJSONParsing,t=n&&n.forcedJSONParsing,s=!a&&"json"===this.responseType;if(s||t&&i.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw o.from(e,o.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:a(3784)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){l.headers[e]=i.merge(c)})),e.exports=l},7874:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:e=>{e.exports={version:"0.27.2"}},1849:e=>{"use strict";e.exports=function(e,n){return function(){for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];return e.apply(n,a)}}},5327:(e,n,a)=>{"use strict";var i=a(4867);function t(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,n,a){if(!n)return e;var o;if(a)o=a(n);else if(i.isURLSearchParams(n))o=n.toString();else{var s=[];i.forEach(n,(function(e,n){null!=e&&(i.isArray(e)?n+="[]":e=[e],i.forEach(e,(function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),s.push(t(n)+"="+t(e))})))})),o=s.join("&")}if(o){var r=e.indexOf("#");-1!==r&&(e=e.slice(0,r)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},7303:e=>{"use strict";e.exports=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}},4372:(e,n,a)=>{"use strict";var i=a(4867);e.exports=i.isStandardBrowserEnv()?{write:function(e,n,a,t,o,s){var r=[];r.push(e+"="+encodeURIComponent(n)),i.isNumber(a)&&r.push("expires="+new Date(a).toGMTString()),i.isString(t)&&r.push("path="+t),i.isString(o)&&r.push("domain="+o),!0===s&&r.push("secure"),document.cookie=r.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6268:(e,n,a)=>{"use strict";var i=a(4867);e.exports=function(e){return i.isObject(e)&&!0===e.isAxiosError}},7985:(e,n,a)=>{"use strict";var i=a(4867);e.exports=i.isStandardBrowserEnv()?function(){var e,n=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");function t(e){var i=e;return n&&(a.setAttribute("href",i),i=a.href),a.setAttribute("href",i),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}return e=t(window.location.href),function(n){var a=i.isString(n)?t(n):n;return a.protocol===e.protocol&&a.host===e.host}}():function(){return!0}},6016:(e,n,a)=>{"use strict";var i=a(4867);e.exports=function(e,n){i.forEach(e,(function(a,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=a,delete e[i])}))}},4109:(e,n,a)=>{"use strict";var i=a(4867),t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var n,a,o,s={};return e?(i.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),n=i.trim(e.substr(0,o)).toLowerCase(),a=i.trim(e.substr(o+1)),n){if(s[n]&&t.indexOf(n)>=0)return;s[n]="set-cookie"===n?(s[n]?s[n]:[]).concat([a]):s[n]?s[n]+", "+a:a}})),s):s}},205:e=>{"use strict";e.exports=function(e){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}},8713:e=>{"use strict";e.exports=function(e){return function(n){return e.apply(null,n)}}},7675:(e,n,a)=>{"use strict";var i=a(4867);e.exports=function(e,n){n=n||new FormData;var a=[];function t(e){return null===e?"":i.isDate(e)?e.toISOString():i.isArrayBuffer(e)||i.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(o,s){if(i.isPlainObject(o)||i.isArray(o)){if(-1!==a.indexOf(o))throw Error("Circular reference detected in "+s);a.push(o),i.forEach(o,(function(a,o){if(!i.isUndefined(a)){var r,c=s?s+"."+o:o;if(a&&!s&&"object"==typeof a)if(i.endsWith(o,"{}"))a=JSON.stringify(a);else if(i.endsWith(o,"[]")&&(r=i.toArray(a)))return void r.forEach((function(e){!i.isUndefined(e)&&n.append(c,t(e))}));e(a,c)}})),a.pop()}else n.append(s,t(o))}(e),n}},4875:(e,n,a)=>{"use strict";var i=a(7288).version,t=a(2648),o={};["object","boolean","number","function","string","symbol"].forEach((function(e,n){o[e]=function(a){return typeof a===e||"a"+(n<1?"n ":" ")+e}}));var s={};o.transitional=function(e,n,a){function o(e,n){return"[Axios v"+i+"] Transitional option '"+e+"'"+n+(a?". "+a:"")}return function(a,i,r){if(!1===e)throw new t(o(i," has been removed"+(n?" in "+n:"")),t.ERR_DEPRECATED);return n&&!s[i]&&(s[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),!e||e(a,i,r)}},e.exports={assertOptions:function(e,n,a){if("object"!=typeof e)throw new t("options must be an object",t.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),o=i.length;o-- >0;){var s=i[o],r=n[s];if(r){var c=e[s],p=void 0===c||r(c,s,e);if(!0!==p)throw new t("option "+s+" must be "+p,t.ERR_BAD_OPTION_VALUE)}else if(!0!==a)throw new t("Unknown option "+s,t.ERR_BAD_OPTION)}},validators:o}},4867:(e,n,a)=>{"use strict";var i,t=a(1849),o=Object.prototype.toString,s=(i=Object.create(null),function(e){var n=o.call(e);return i[n]||(i[n]=n.slice(8,-1).toLowerCase())});function r(e){return e=e.toLowerCase(),function(n){return s(n)===e}}function c(e){return Array.isArray(e)}function p(e){return void 0===e}var u=r("ArrayBuffer");function l(e){return null!==e&&"object"==typeof e}function d(e){if("object"!==s(e))return!1;var n=Object.getPrototypeOf(e);return null===n||n===Object.prototype}var m=r("Date"),f=r("File"),x=r("Blob"),v=r("FileList");function h(e){return"[object Function]"===o.call(e)}var b=r("URLSearchParams");function g(e,n){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var a=0,i=e.length;a<i;a++)n.call(null,e[a],a,e);else for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.call(null,e[t],t,e)}var y,_=(y="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return y&&e instanceof y});e.exports={isArray:c,isArrayBuffer:u,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var n="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||o.call(e)===n||h(e.toString)&&e.toString()===n)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:l,isPlainObject:d,isUndefined:p,isDate:m,isFile:f,isBlob:x,isFunction:h,isStream:function(e){return l(e)&&h(e.pipe)},isURLSearchParams:b,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:g,merge:function e(){var n={};function a(a,i){d(n[i])&&d(a)?n[i]=e(n[i],a):d(a)?n[i]=e({},a):c(a)?n[i]=a.slice():n[i]=a}for(var i=0,t=arguments.length;i<t;i++)g(arguments[i],a);return n},extend:function(e,n,a){return g(n,(function(n,i){e[i]=a&&"function"==typeof n?t(n,a):n})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,n,a,i){e.prototype=Object.create(n.prototype,i),e.prototype.constructor=e,a&&Object.assign(e.prototype,a)},toFlatObject:function(e,n,a){var i,t,o,s={};n=n||{};do{for(t=(i=Object.getOwnPropertyNames(e)).length;t-- >0;)s[o=i[t]]||(n[o]=e[o],s[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!a||a(e,n))&&e!==Object.prototype);return n},kindOf:s,kindOfTest:r,endsWith:function(e,n,a){e=String(e),(void 0===a||a>e.length)&&(a=e.length),a-=n.length;var i=e.indexOf(n,a);return-1!==i&&i===a},toArray:function(e){if(!e)return null;var n=e.length;if(p(n))return null;for(var a=new Array(n);n-- >0;)a[n]=e[n];return a},isTypedArray:_,isFileList:v}},9779:(e,n,a)=>{var i=a(3837),t=a(2781).Stream,o=a(3463);function s(){this.writable=!1,this.readable=!0,this.dataSize=0,this.maxDataSize=2097152,this.pauseStreams=!0,this._released=!1,this._streams=[],this._currentStream=null,this._insideLoop=!1,this._pendingNext=!1}e.exports=s,i.inherits(s,t),s.create=function(e){var n=new this;for(var a in e=e||{})n[a]=e[a];return n},s.isStreamLike=function(e){return"function"!=typeof e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e&&!Buffer.isBuffer(e)},s.prototype.append=function(e){if(s.isStreamLike(e)){if(!(e instanceof o)){var n=o.create(e,{maxDataSize:1/0,pauseStream:this.pauseStreams});e.on("data",this._checkDataSize.bind(this)),e=n}this._handleErrors(e),this.pauseStreams&&e.pause()}return this._streams.push(e),this},s.prototype.pipe=function(e,n){return t.prototype.pipe.call(this,e,n),this.resume(),e},s.prototype._getNext=function(){if(this._currentStream=null,this._insideLoop)this._pendingNext=!0;else{this._insideLoop=!0;try{do{this._pendingNext=!1,this._realGetNext()}while(this._pendingNext)}finally{this._insideLoop=!1}}},s.prototype._realGetNext=function(){var e=this._streams.shift();void 0!==e?"function"==typeof e?e(function(e){s.isStreamLike(e)&&(e.on("data",this._checkDataSize.bind(this)),this._handleErrors(e)),this._pipeNext(e)}.bind(this)):this._pipeNext(e):this.end()},s.prototype._pipeNext=function(e){if(this._currentStream=e,s.isStreamLike(e))return e.on("end",this._getNext.bind(this)),void e.pipe(this,{end:!1});var n=e;this.write(n),this._getNext()},s.prototype._handleErrors=function(e){var n=this;e.on("error",(function(e){n._emitError(e)}))},s.prototype.write=function(e){this.emit("data",e)},s.prototype.pause=function(){this.pauseStreams&&(this.pauseStreams&&this._currentStream&&"function"==typeof this._currentStream.pause&&this._currentStream.pause(),this.emit("pause"))},s.prototype.resume=function(){this._released||(this._released=!0,this.writable=!0,this._getNext()),this.pauseStreams&&this._currentStream&&"function"==typeof this._currentStream.resume&&this._currentStream.resume(),this.emit("resume")},s.prototype.end=function(){this._reset(),this.emit("end")},s.prototype.destroy=function(){this._reset(),this.emit("close")},s.prototype._reset=function(){this.writable=!1,this._streams=[],this._currentStream=null},s.prototype._checkDataSize=function(){if(this._updateDataSize(),!(this.dataSize<=this.maxDataSize)){var e="DelayedStream#maxDataSize of "+this.maxDataSize+" bytes exceeded.";this._emitError(new Error(e))}},s.prototype._updateDataSize=function(){this.dataSize=0;var e=this;this._streams.forEach((function(n){n.dataSize&&(e.dataSize+=n.dataSize)})),this._currentStream&&this._currentStream.dataSize&&(this.dataSize+=this._currentStream.dataSize)},s.prototype._emitError=function(e){this._reset(),this.emit("error",e)}},1227:(e,n,a)=>{n.formatArgs=function(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const a="color: "+this.color;n.splice(1,0,a,"color: inherit");let i=0,t=0;n[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(i++,"%c"===e&&(t=i))})),n.splice(t,0,a)},n.save=function(e){try{e?n.storage.setItem("debug",e):n.storage.removeItem("debug")}catch(e){}},n.load=function(){let e;try{e=n.storage.getItem("debug")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},n.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},n.storage=function(){try{return localStorage}catch(e){}}(),n.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],n.log=console.debug||console.log||(()=>{}),e.exports=a(2447)(n);const{formatters:i}=e.exports;i.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},2447:(e,n,a)=>{e.exports=function(e){function n(e){let a,t,o,s=null;function r(...e){if(!r.enabled)return;const i=r,t=Number(new Date),o=t-(a||t);i.diff=o,i.prev=a,i.curr=t,a=t,e[0]=n.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((a,t)=>{if("%%"===a)return"%";s++;const o=n.formatters[t];if("function"==typeof o){const n=e[s];a=o.call(i,n),e.splice(s,1),s--}return a})),n.formatArgs.call(i,e),(i.log||n.log).apply(i,e)}return r.namespace=e,r.useColors=n.useColors(),r.color=n.selectColor(e),r.extend=i,r.destroy=n.destroy,Object.defineProperty(r,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(t!==n.namespaces&&(t=n.namespaces,o=n.enabled(e)),o),set:e=>{s=e}}),"function"==typeof n.init&&n.init(r),r}function i(e,a){const i=n(this.namespace+(void 0===a?":":a)+e);return i.log=this.log,i}function t(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return n.debug=n,n.default=n,n.coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){const e=[...n.names.map(t),...n.skips.map(t).map((e=>"-"+e))].join(",");return n.enable(""),e},n.enable=function(e){let a;n.save(e),n.namespaces=e,n.names=[],n.skips=[];const i=("string"==typeof e?e:"").split(/[\s,]+/),t=i.length;for(a=0;a<t;a++)i[a]&&("-"===(e=i[a].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.slice(1)+"$")):n.names.push(new RegExp("^"+e+"$")))},n.enabled=function(e){if("*"===e[e.length-1])return!0;let a,i;for(a=0,i=n.skips.length;a<i;a++)if(n.skips[a].test(e))return!1;for(a=0,i=n.names.length;a<i;a++)if(n.names[a].test(e))return!0;return!1},n.humanize=a(7824),n.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((a=>{n[a]=e[a]})),n.names=[],n.skips=[],n.formatters={},n.selectColor=function(e){let a=0;for(let n=0;n<e.length;n++)a=(a<<5)-a+e.charCodeAt(n),a|=0;return n.colors[Math.abs(a)%n.colors.length]},n.enable(n.load()),n}},5158:(e,n,a)=>{"undefined"==typeof process||"renderer"===process.type||!0===process.browser||process.__nwjs?e.exports=a(1227):e.exports=a(39)},39:(e,n,a)=>{const i=a(6224),t=a(3837);n.init=function(e){e.inspectOpts={};const a=Object.keys(n.inspectOpts);for(let i=0;i<a.length;i++)e.inspectOpts[a[i]]=n.inspectOpts[a[i]]},n.log=function(...e){return process.stderr.write(t.format(...e)+"\n")},n.formatArgs=function(a){const{namespace:i,useColors:t}=this;if(t){const n=this.color,t="[3"+(n<8?n:"8;5;"+n),o=`  ${t};1m${i} [0m`;a[0]=o+a[0].split("\n").join("\n"+o),a.push(t+"m+"+e.exports.humanize(this.diff)+"[0m")}else a[0]=(n.inspectOpts.hideDate?"":(new Date).toISOString()+" ")+i+" "+a[0]},n.save=function(e){e?process.env.DEBUG=e:delete process.env.DEBUG},n.load=function(){return process.env.DEBUG},n.useColors=function(){return"colors"in n.inspectOpts?Boolean(n.inspectOpts.colors):i.isatty(process.stderr.fd)},n.destroy=t.deprecate((()=>{}),"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."),n.colors=[6,2,3,4,5,1];try{const e=a(2130);e&&(e.stderr||e).level>=2&&(n.colors=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221])}catch(e){}n.inspectOpts=Object.keys(process.env).filter((e=>/^debug_/i.test(e))).reduce(((e,n)=>{const a=n.substring(6).toLowerCase().replace(/_([a-z])/g,((e,n)=>n.toUpperCase()));let i=process.env[n];return i=!!/^(yes|on|true|enabled)$/i.test(i)||!/^(no|off|false|disabled)$/i.test(i)&&("null"===i?null:Number(i)),e[a]=i,e}),{}),e.exports=a(2447)(n);const{formatters:o}=e.exports;o.o=function(e){return this.inspectOpts.colors=this.useColors,t.inspect(e,this.inspectOpts).split("\n").map((e=>e.trim())).join(" ")},o.O=function(e){return this.inspectOpts.colors=this.useColors,t.inspect(e,this.inspectOpts)}},3463:(e,n,a)=>{var i=a(2781).Stream,t=a(3837);function o(){this.source=null,this.dataSize=0,this.maxDataSize=1048576,this.pauseStream=!0,this._maxDataSizeExceeded=!1,this._released=!1,this._bufferedEvents=[]}e.exports=o,t.inherits(o,i),o.create=function(e,n){var a=new this;for(var i in n=n||{})a[i]=n[i];a.source=e;var t=e.emit;return e.emit=function(){return a._handleEmit(arguments),t.apply(e,arguments)},e.on("error",(function(){})),a.pauseStream&&e.pause(),a},Object.defineProperty(o.prototype,"readable",{configurable:!0,enumerable:!0,get:function(){return this.source.readable}}),o.prototype.setEncoding=function(){return this.source.setEncoding.apply(this.source,arguments)},o.prototype.resume=function(){this._released||this.release(),this.source.resume()},o.prototype.pause=function(){this.source.pause()},o.prototype.release=function(){this._released=!0,this._bufferedEvents.forEach(function(e){this.emit.apply(this,e)}.bind(this)),this._bufferedEvents=[]},o.prototype.pipe=function(){var e=i.prototype.pipe.apply(this,arguments);return this.resume(),e},o.prototype._handleEmit=function(e){this._released?this.emit.apply(this,e):("data"===e[0]&&(this.dataSize+=e[1].length,this._checkIfMaxDataSizeExceeded()),this._bufferedEvents.push(e))},o.prototype._checkIfMaxDataSizeExceeded=function(){if(!(this._maxDataSizeExceeded||this.dataSize<=this.maxDataSize)){this._maxDataSizeExceeded=!0;var e="DelayedStream#maxDataSize of "+this.maxDataSize+" bytes exceeded.";this.emit("error",new Error(e))}}},2261:(e,n,a)=>{var i;e.exports=function(){if(!i){try{i=a(5158)("follow-redirects")}catch(e){}"function"!=typeof i&&(i=function(){})}i.apply(null,arguments)}},938:(e,n,a)=>{var i=a(7310),t=i.URL,o=a(3685),s=a(5687),r=a(2781).Writable,c=a(9491),p=a(2261),u=["abort","aborted","connect","error","socket","timeout"],l=Object.create(null);u.forEach((function(e){l[e]=function(n,a,i){this._redirectable.emit(e,n,a,i)}}));var d=w("ERR_INVALID_URL","Invalid URL",TypeError),m=w("ERR_FR_REDIRECTION_FAILURE","Redirected request failed"),f=w("ERR_FR_TOO_MANY_REDIRECTS","Maximum number of redirects exceeded"),x=w("ERR_FR_MAX_BODY_LENGTH_EXCEEDED","Request body larger than maxBodyLength limit"),v=w("ERR_STREAM_WRITE_AFTER_END","write after end");function h(e,n){r.call(this),this._sanitizeOptions(e),this._options=e,this._ended=!1,this._ending=!1,this._redirectCount=0,this._redirects=[],this._requestBodyLength=0,this._requestBodyBuffers=[],n&&this.on("response",n);var a=this;this._onNativeResponse=function(e){a._processResponse(e)},this._performRequest()}function b(e){var n={maxRedirects:21,maxBodyLength:10485760},a={};return Object.keys(e).forEach((function(o){var s=o+":",r=a[s]=e[o],u=n[o]=Object.create(r);Object.defineProperties(u,{request:{value:function(e,o,r){if(k(e)){var u;try{u=y(new t(e))}catch(n){u=i.parse(e)}if(!k(u.protocol))throw new d({input:e});e=u}else t&&e instanceof t?e=y(e):(r=o,o=e,e={protocol:s});return E(o)&&(r=o,o=null),(o=Object.assign({maxRedirects:n.maxRedirects,maxBodyLength:n.maxBodyLength},e,o)).nativeProtocols=a,k(o.host)||k(o.hostname)||(o.hostname="::1"),c.equal(o.protocol,s,"protocol mismatch"),p("options",o),new h(o,r)},configurable:!0,enumerable:!0,writable:!0},get:{value:function(e,n,a){var i=u.request(e,n,a);return i.end(),i},configurable:!0,enumerable:!0,writable:!0}})})),n}function g(){}function y(e){var n={protocol:e.protocol,hostname:e.hostname.startsWith("[")?e.hostname.slice(1,-1):e.hostname,hash:e.hash,search:e.search,pathname:e.pathname,path:e.pathname+e.search,href:e.href};return""!==e.port&&(n.port=Number(e.port)),n}function _(e,n){var a;for(var i in n)e.test(i)&&(a=n[i],delete n[i]);return null==a?void 0:String(a).trim()}function w(e,n,a){function i(a){Error.captureStackTrace(this,this.constructor),Object.assign(this,a||{}),this.code=e,this.message=this.cause?n+": "+this.cause.message:n}return i.prototype=new(a||Error),i.prototype.constructor=i,i.prototype.name="Error ["+e+"]",i}function j(e){for(var n of u)e.removeListener(n,l[n]);e.on("error",g),e.abort()}function k(e){return"string"==typeof e||e instanceof String}function E(e){return"function"==typeof e}h.prototype=Object.create(r.prototype),h.prototype.abort=function(){j(this._currentRequest),this.emit("abort")},h.prototype.write=function(e,n,a){if(this._ending)throw new v;if(!(k(e)||"object"==typeof(i=e)&&"length"in i))throw new TypeError("data should be a string, Buffer or Uint8Array");var i;E(n)&&(a=n,n=null),0!==e.length?this._requestBodyLength+e.length<=this._options.maxBodyLength?(this._requestBodyLength+=e.length,this._requestBodyBuffers.push({data:e,encoding:n}),this._currentRequest.write(e,n,a)):(this.emit("error",new x),this.abort()):a&&a()},h.prototype.end=function(e,n,a){if(E(e)?(a=e,e=n=null):E(n)&&(a=n,n=null),e){var i=this,t=this._currentRequest;this.write(e,n,(function(){i._ended=!0,t.end(null,null,a)})),this._ending=!0}else this._ended=this._ending=!0,this._currentRequest.end(null,null,a)},h.prototype.setHeader=function(e,n){this._options.headers[e]=n,this._currentRequest.setHeader(e,n)},h.prototype.removeHeader=function(e){delete this._options.headers[e],this._currentRequest.removeHeader(e)},h.prototype.setTimeout=function(e,n){var a=this;function i(n){n.setTimeout(e),n.removeListener("timeout",n.destroy),n.addListener("timeout",n.destroy)}function t(n){a._timeout&&clearTimeout(a._timeout),a._timeout=setTimeout((function(){a.emit("timeout"),o()}),e),i(n)}function o(){a._timeout&&(clearTimeout(a._timeout),a._timeout=null),a.removeListener("abort",o),a.removeListener("error",o),a.removeListener("response",o),n&&a.removeListener("timeout",n),a.socket||a._currentRequest.removeListener("socket",t)}return n&&this.on("timeout",n),this.socket?t(this.socket):this._currentRequest.once("socket",t),this.on("socket",i),this.on("abort",o),this.on("error",o),this.on("response",o),this},["flushHeaders","getHeader","setNoDelay","setSocketKeepAlive"].forEach((function(e){h.prototype[e]=function(n,a){return this._currentRequest[e](n,a)}})),["aborted","connection","socket"].forEach((function(e){Object.defineProperty(h.prototype,e,{get:function(){return this._currentRequest[e]}})})),h.prototype._sanitizeOptions=function(e){if(e.headers||(e.headers={}),e.host&&(e.hostname||(e.hostname=e.host),delete e.host),!e.pathname&&e.path){var n=e.path.indexOf("?");n<0?e.pathname=e.path:(e.pathname=e.path.substring(0,n),e.search=e.path.substring(n))}},h.prototype._performRequest=function(){var e=this._options.protocol,n=this._options.nativeProtocols[e];if(n){if(this._options.agents){var a=e.slice(0,-1);this._options.agent=this._options.agents[a]}var t=this._currentRequest=n.request(this._options,this._onNativeResponse);for(var o of(t._redirectable=this,u))t.on(o,l[o]);if(this._currentUrl=/^\//.test(this._options.path)?i.format(this._options):this._options.path,this._isRedirect){var s=0,r=this,c=this._requestBodyBuffers;!function e(n){if(t===r._currentRequest)if(n)r.emit("error",n);else if(s<c.length){var a=c[s++];t.finished||t.write(a.data,a.encoding,e)}else r._ended&&t.end()}()}}else this.emit("error",new TypeError("Unsupported protocol "+e))},h.prototype._processResponse=function(e){var n=e.statusCode;this._options.trackRedirects&&this._redirects.push({url:this._currentUrl,headers:e.headers,statusCode:n});var a=e.headers.location;if(!a||!1===this._options.followRedirects||n<300||n>=400)return e.responseUrl=this._currentUrl,e.redirects=this._redirects,this.emit("response",e),void(this._requestBodyBuffers=[]);if(j(this._currentRequest),e.destroy(),++this._redirectCount>this._options.maxRedirects)this.emit("error",new f);else{var t,o=this._options.beforeRedirect;o&&(t=Object.assign({Host:e.req.getHeader("host")},this._options.headers));var s=this._options.method;((301===n||302===n)&&"POST"===this._options.method||303===n&&!/^(?:GET|HEAD)$/.test(this._options.method))&&(this._options.method="GET",this._requestBodyBuffers=[],_(/^content-/i,this._options.headers));var r,u=_(/^host$/i,this._options.headers),l=i.parse(this._currentUrl),d=u||l.host,x=/^\w+:/.test(a)?this._currentUrl:i.format(Object.assign(l,{host:d}));try{r=i.resolve(x,a)}catch(e){return void this.emit("error",new m({cause:e}))}p("redirecting to",r),this._isRedirect=!0;var v=i.parse(r);if(Object.assign(this._options,v),(v.protocol!==l.protocol&&"https:"!==v.protocol||v.host!==d&&!function(e,n){c(k(e)&&k(n));var a=e.length-n.length-1;return a>0&&"."===e[a]&&e.endsWith(n)}(v.host,d))&&_(/^(?:authorization|cookie)$/i,this._options.headers),E(o)){var h={headers:e.headers,statusCode:n},b={url:x,method:s,headers:t};try{o(this._options,h,b)}catch(e){return void this.emit("error",e)}this._sanitizeOptions(this._options)}try{this._performRequest()}catch(e){this.emit("error",new m({cause:e}))}}},e.exports=b({http:o,https:s}),e.exports.wrap=b},6882:(e,n,a)=>{var i=a(9779),t=a(3837),o=a(1017),s=a(3685),r=a(5687),c=a(7310).parse,p=a(7147),u=a(2781).Stream,l=a(983),d=a(9118),m=a(2275);function f(e){if(!(this instanceof f))return new f(e);for(var n in this._overheadLength=0,this._valueLength=0,this._valuesToMeasure=[],i.call(this),e=e||{})this[n]=e[n]}e.exports=f,t.inherits(f,i),f.LINE_BREAK="\r\n",f.DEFAULT_CONTENT_TYPE="application/octet-stream",f.prototype.append=function(e,n,a){"string"==typeof(a=a||{})&&(a={filename:a});var o=i.prototype.append.bind(this);if("number"==typeof n&&(n=""+n),t.isArray(n))this._error(new Error("Arrays are not supported."));else{var s=this._multiPartHeader(e,n,a),r=this._multiPartFooter();o(s),o(n),o(r),this._trackLength(s,n,a)}},f.prototype._trackLength=function(e,n,a){var i=0;null!=a.knownLength?i+=+a.knownLength:Buffer.isBuffer(n)?i=n.length:"string"==typeof n&&(i=Buffer.byteLength(n)),this._valueLength+=i,this._overheadLength+=Buffer.byteLength(e)+f.LINE_BREAK.length,n&&(n.path||n.readable&&n.hasOwnProperty("httpVersion")||n instanceof u)&&(a.knownLength||this._valuesToMeasure.push(n))},f.prototype._lengthRetriever=function(e,n){e.hasOwnProperty("fd")?null!=e.end&&e.end!=1/0&&null!=e.start?n(null,e.end+1-(e.start?e.start:0)):p.stat(e.path,(function(a,i){var t;a?n(a):(t=i.size-(e.start?e.start:0),n(null,t))})):e.hasOwnProperty("httpVersion")?n(null,+e.headers["content-length"]):e.hasOwnProperty("httpModule")?(e.on("response",(function(a){e.pause(),n(null,+a.headers["content-length"])})),e.resume()):n("Unknown stream")},f.prototype._multiPartHeader=function(e,n,a){if("string"==typeof a.header)return a.header;var i,t=this._getContentDisposition(n,a),o=this._getContentType(n,a),s="",r={"Content-Disposition":["form-data",'name="'+e+'"'].concat(t||[]),"Content-Type":[].concat(o||[])};for(var c in"object"==typeof a.header&&m(r,a.header),r)r.hasOwnProperty(c)&&null!=(i=r[c])&&(Array.isArray(i)||(i=[i]),i.length&&(s+=c+": "+i.join("; ")+f.LINE_BREAK));return"--"+this.getBoundary()+f.LINE_BREAK+s+f.LINE_BREAK},f.prototype._getContentDisposition=function(e,n){var a,i;return"string"==typeof n.filepath?a=o.normalize(n.filepath).replace(/\\/g,"/"):n.filename||e.name||e.path?a=o.basename(n.filename||e.name||e.path):e.readable&&e.hasOwnProperty("httpVersion")&&(a=o.basename(e.client._httpMessage.path||"")),a&&(i='filename="'+a+'"'),i},f.prototype._getContentType=function(e,n){var a=n.contentType;return!a&&e.name&&(a=l.lookup(e.name)),!a&&e.path&&(a=l.lookup(e.path)),!a&&e.readable&&e.hasOwnProperty("httpVersion")&&(a=e.headers["content-type"]),a||!n.filepath&&!n.filename||(a=l.lookup(n.filepath||n.filename)),a||"object"!=typeof e||(a=f.DEFAULT_CONTENT_TYPE),a},f.prototype._multiPartFooter=function(){return function(e){var n=f.LINE_BREAK;0===this._streams.length&&(n+=this._lastBoundary()),e(n)}.bind(this)},f.prototype._lastBoundary=function(){return"--"+this.getBoundary()+"--"+f.LINE_BREAK},f.prototype.getHeaders=function(e){var n,a={"content-type":"multipart/form-data; boundary="+this.getBoundary()};for(n in e)e.hasOwnProperty(n)&&(a[n.toLowerCase()]=e[n]);return a},f.prototype.setBoundary=function(e){this._boundary=e},f.prototype.getBoundary=function(){return this._boundary||this._generateBoundary(),this._boundary},f.prototype.getBuffer=function(){for(var e=new Buffer.alloc(0),n=this.getBoundary(),a=0,i=this._streams.length;a<i;a++)"function"!=typeof this._streams[a]&&(e=Buffer.isBuffer(this._streams[a])?Buffer.concat([e,this._streams[a]]):Buffer.concat([e,Buffer.from(this._streams[a])]),"string"==typeof this._streams[a]&&this._streams[a].substring(2,n.length+2)===n||(e=Buffer.concat([e,Buffer.from(f.LINE_BREAK)])));return Buffer.concat([e,Buffer.from(this._lastBoundary())])},f.prototype._generateBoundary=function(){for(var e="--------------------------",n=0;n<24;n++)e+=Math.floor(10*Math.random()).toString(16);this._boundary=e},f.prototype.getLengthSync=function(){var e=this._overheadLength+this._valueLength;return this._streams.length&&(e+=this._lastBoundary().length),this.hasKnownLength()||this._error(new Error("Cannot calculate proper length in synchronous way.")),e},f.prototype.hasKnownLength=function(){var e=!0;return this._valuesToMeasure.length&&(e=!1),e},f.prototype.getLength=function(e){var n=this._overheadLength+this._valueLength;this._streams.length&&(n+=this._lastBoundary().length),this._valuesToMeasure.length?d.parallel(this._valuesToMeasure,this._lengthRetriever,(function(a,i){a?e(a):(i.forEach((function(e){n+=e})),e(null,n))})):process.nextTick(e.bind(this,null,n))},f.prototype.submit=function(e,n){var a,i,t={method:"post"};return"string"==typeof e?(e=c(e),i=m({port:e.port,path:e.pathname,host:e.hostname,protocol:e.protocol},t)):(i=m(e,t)).port||(i.port="https:"==i.protocol?443:80),i.headers=this.getHeaders(e.headers),a="https:"==i.protocol?r.request(i):s.request(i),this.getLength(function(e,i){if(e&&"Unknown stream"!==e)this._error(e);else if(i&&a.setHeader("Content-Length",i),this.pipe(a),n){var t,o=function(e,i){return a.removeListener("error",o),a.removeListener("response",t),n.call(this,e,i)};t=o.bind(this,null),a.on("error",o),a.on("response",t)}}.bind(this)),a},f.prototype._error=function(e){this.error||(this.error=e,this.pause(),this.emit("error",e))},f.prototype.toString=function(){return"[object FormData]"}},2275:e=>{e.exports=function(e,n){return Object.keys(n).forEach((function(a){e[a]=e[a]||n[a]})),e}},6560:e=>{"use strict";e.exports=(e,n)=>{n=n||process.argv;const a=e.startsWith("-")?"":1===e.length?"-":"--",i=n.indexOf(a+e),t=n.indexOf("--");return-1!==i&&(-1===t||i<t)}},6486:function(e,n,a){var i;e=a.nmd(e),function(){var t,o="Expected a function",s="__lodash_hash_undefined__",r="__lodash_placeholder__",c=32,p=128,u=1/0,l=9007199254740991,d=NaN,m=4294967295,f=[["ary",p],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",c],["partialRight",64],["rearg",256]],x="[object Arguments]",v="[object Array]",h="[object Boolean]",b="[object Date]",g="[object Error]",y="[object Function]",_="[object GeneratorFunction]",w="[object Map]",j="[object Number]",k="[object Object]",E="[object Promise]",R="[object RegExp]",O="[object Set]",C="[object String]",A="[object Symbol]",T="[object WeakMap]",z="[object ArrayBuffer]",S="[object DataView]",P="[object Float32Array]",q="[object Float64Array]",I="[object Int8Array]",L="[object Int16Array]",F="[object Int32Array]",B="[object Uint8Array]",U="[object Uint8ClampedArray]",D="[object Uint16Array]",N="[object Uint32Array]",M=/\b__p \+= '';/g,$=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,H=/[&<>"']/g,J=RegExp(Y.source),V=RegExp(H.source),K=/<%-([\s\S]+?)%>/g,G=/<%([\s\S]+?)%>/g,Z=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ne=/[\\^$.*+?()[\]{}|]/g,ae=RegExp(ne.source),ie=/^\s+/,te=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,re=/,? & /,ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,pe=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,le=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,de=/\w*$/,me=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,xe=/^\[object .+?Constructor\]$/,ve=/^0o[0-7]+$/i,he=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ge=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,_e="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",je="\\u2700-\\u27bf",ke="a-z\\xdf-\\xf6\\xf8-\\xff",Ee="A-Z\\xc0-\\xd6\\xd8-\\xde",Re="\\ufe0e\\ufe0f",Oe="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ce="["+_e+"]",Ae="["+Oe+"]",Te="["+we+"]",ze="\\d+",Se="["+je+"]",Pe="["+ke+"]",qe="[^"+_e+Oe+ze+je+ke+Ee+"]",Ie="\\ud83c[\\udffb-\\udfff]",Le="[^"+_e+"]",Fe="(?:\\ud83c[\\udde6-\\uddff]){2}",Be="[\\ud800-\\udbff][\\udc00-\\udfff]",Ue="["+Ee+"]",De="\\u200d",Ne="(?:"+Pe+"|"+qe+")",Me="(?:"+Ue+"|"+qe+")",$e="(?:['’](?:d|ll|m|re|s|t|ve))?",We="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ye="(?:"+Te+"|"+Ie+")?",He="["+Re+"]?",Je=He+Ye+"(?:"+De+"(?:"+[Le,Fe,Be].join("|")+")"+He+Ye+")*",Ve="(?:"+[Se,Fe,Be].join("|")+")"+Je,Ke="(?:"+[Le+Te+"?",Te,Fe,Be,Ce].join("|")+")",Ge=RegExp("['’]","g"),Ze=RegExp(Te,"g"),Xe=RegExp(Ie+"(?="+Ie+")|"+Ke+Je,"g"),Qe=RegExp([Ue+"?"+Pe+"+"+$e+"(?="+[Ae,Ue,"$"].join("|")+")",Me+"+"+We+"(?="+[Ae,Ue+Ne,"$"].join("|")+")",Ue+"?"+Ne+"+"+$e,Ue+"+"+We,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ze,Ve].join("|"),"g"),en=RegExp("["+De+_e+we+Re+"]"),nn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,an=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],tn=-1,on={};on[P]=on[q]=on[I]=on[L]=on[F]=on[B]=on[U]=on[D]=on[N]=!0,on[x]=on[v]=on[z]=on[h]=on[S]=on[b]=on[g]=on[y]=on[w]=on[j]=on[k]=on[R]=on[O]=on[C]=on[T]=!1;var sn={};sn[x]=sn[v]=sn[z]=sn[S]=sn[h]=sn[b]=sn[P]=sn[q]=sn[I]=sn[L]=sn[F]=sn[w]=sn[j]=sn[k]=sn[R]=sn[O]=sn[C]=sn[A]=sn[B]=sn[U]=sn[D]=sn[N]=!0,sn[g]=sn[y]=sn[T]=!1;var rn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},cn=parseFloat,pn=parseInt,un="object"==typeof global&&global&&global.Object===Object&&global,ln="object"==typeof self&&self&&self.Object===Object&&self,dn=un||ln||Function("return this")(),mn=n&&!n.nodeType&&n,fn=mn&&e&&!e.nodeType&&e,xn=fn&&fn.exports===mn,vn=xn&&un.process,hn=function(){try{return fn&&fn.require&&fn.require("util").types||vn&&vn.binding&&vn.binding("util")}catch(e){}}(),bn=hn&&hn.isArrayBuffer,gn=hn&&hn.isDate,yn=hn&&hn.isMap,_n=hn&&hn.isRegExp,wn=hn&&hn.isSet,jn=hn&&hn.isTypedArray;function kn(e,n,a){switch(a.length){case 0:return e.call(n);case 1:return e.call(n,a[0]);case 2:return e.call(n,a[0],a[1]);case 3:return e.call(n,a[0],a[1],a[2])}return e.apply(n,a)}function En(e,n,a,i){for(var t=-1,o=null==e?0:e.length;++t<o;){var s=e[t];n(i,s,a(s),e)}return i}function Rn(e,n){for(var a=-1,i=null==e?0:e.length;++a<i&&!1!==n(e[a],a,e););return e}function On(e,n){for(var a=null==e?0:e.length;a--&&!1!==n(e[a],a,e););return e}function Cn(e,n){for(var a=-1,i=null==e?0:e.length;++a<i;)if(!n(e[a],a,e))return!1;return!0}function An(e,n){for(var a=-1,i=null==e?0:e.length,t=0,o=[];++a<i;){var s=e[a];n(s,a,e)&&(o[t++]=s)}return o}function Tn(e,n){return!(null==e||!e.length)&&Dn(e,n,0)>-1}function zn(e,n,a){for(var i=-1,t=null==e?0:e.length;++i<t;)if(a(n,e[i]))return!0;return!1}function Sn(e,n){for(var a=-1,i=null==e?0:e.length,t=Array(i);++a<i;)t[a]=n(e[a],a,e);return t}function Pn(e,n){for(var a=-1,i=n.length,t=e.length;++a<i;)e[t+a]=n[a];return e}function qn(e,n,a,i){var t=-1,o=null==e?0:e.length;for(i&&o&&(a=e[++t]);++t<o;)a=n(a,e[t],t,e);return a}function In(e,n,a,i){var t=null==e?0:e.length;for(i&&t&&(a=e[--t]);t--;)a=n(a,e[t],t,e);return a}function Ln(e,n){for(var a=-1,i=null==e?0:e.length;++a<i;)if(n(e[a],a,e))return!0;return!1}var Fn=Wn("length");function Bn(e,n,a){var i;return a(e,(function(e,a,t){if(n(e,a,t))return i=a,!1})),i}function Un(e,n,a,i){for(var t=e.length,o=a+(i?1:-1);i?o--:++o<t;)if(n(e[o],o,e))return o;return-1}function Dn(e,n,a){return n==n?function(e,n,a){for(var i=a-1,t=e.length;++i<t;)if(e[i]===n)return i;return-1}(e,n,a):Un(e,Mn,a)}function Nn(e,n,a,i){for(var t=a-1,o=e.length;++t<o;)if(i(e[t],n))return t;return-1}function Mn(e){return e!=e}function $n(e,n){var a=null==e?0:e.length;return a?Jn(e,n)/a:d}function Wn(e){return function(n){return null==n?t:n[e]}}function Yn(e){return function(n){return null==e?t:e[n]}}function Hn(e,n,a,i,t){return t(e,(function(e,t,o){a=i?(i=!1,e):n(a,e,t,o)})),a}function Jn(e,n){for(var a,i=-1,o=e.length;++i<o;){var s=n(e[i]);s!==t&&(a=a===t?s:a+s)}return a}function Vn(e,n){for(var a=-1,i=Array(e);++a<e;)i[a]=n(a);return i}function Kn(e){return e?e.slice(0,la(e)+1).replace(ie,""):e}function Gn(e){return function(n){return e(n)}}function Zn(e,n){return Sn(n,(function(n){return e[n]}))}function Xn(e,n){return e.has(n)}function Qn(e,n){for(var a=-1,i=e.length;++a<i&&Dn(n,e[a],0)>-1;);return a}function ea(e,n){for(var a=e.length;a--&&Dn(n,e[a],0)>-1;);return a}var na=Yn({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),aa=Yn({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function ia(e){return"\\"+rn[e]}function ta(e){return en.test(e)}function oa(e){var n=-1,a=Array(e.size);return e.forEach((function(e,i){a[++n]=[i,e]})),a}function sa(e,n){return function(a){return e(n(a))}}function ra(e,n){for(var a=-1,i=e.length,t=0,o=[];++a<i;){var s=e[a];s!==n&&s!==r||(e[a]=r,o[t++]=a)}return o}function ca(e){var n=-1,a=Array(e.size);return e.forEach((function(e){a[++n]=e})),a}function pa(e){return ta(e)?function(e){for(var n=Xe.lastIndex=0;Xe.test(e);)++n;return n}(e):Fn(e)}function ua(e){return ta(e)?function(e){return e.match(Xe)||[]}(e):function(e){return e.split("")}(e)}function la(e){for(var n=e.length;n--&&te.test(e.charAt(n)););return n}var da=Yn({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),ma=function e(n){var a,i=(n=null==n?dn:ma.defaults(dn.Object(),n,ma.pick(dn,an))).Array,te=n.Date,_e=n.Error,we=n.Function,je=n.Math,ke=n.Object,Ee=n.RegExp,Re=n.String,Oe=n.TypeError,Ce=i.prototype,Ae=we.prototype,Te=ke.prototype,ze=n["__core-js_shared__"],Se=Ae.toString,Pe=Te.hasOwnProperty,qe=0,Ie=(a=/[^.]+$/.exec(ze&&ze.keys&&ze.keys.IE_PROTO||""))?"Symbol(src)_1."+a:"",Le=Te.toString,Fe=Se.call(ke),Be=dn._,Ue=Ee("^"+Se.call(Pe).replace(ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),De=xn?n.Buffer:t,Ne=n.Symbol,Me=n.Uint8Array,$e=De?De.allocUnsafe:t,We=sa(ke.getPrototypeOf,ke),Ye=ke.create,He=Te.propertyIsEnumerable,Je=Ce.splice,Ve=Ne?Ne.isConcatSpreadable:t,Ke=Ne?Ne.iterator:t,Xe=Ne?Ne.toStringTag:t,en=function(){try{var e=ro(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),rn=n.clearTimeout!==dn.clearTimeout&&n.clearTimeout,un=te&&te.now!==dn.Date.now&&te.now,ln=n.setTimeout!==dn.setTimeout&&n.setTimeout,mn=je.ceil,fn=je.floor,vn=ke.getOwnPropertySymbols,hn=De?De.isBuffer:t,Fn=n.isFinite,Yn=Ce.join,fa=sa(ke.keys,ke),xa=je.max,va=je.min,ha=te.now,ba=n.parseInt,ga=je.random,ya=Ce.reverse,_a=ro(n,"DataView"),wa=ro(n,"Map"),ja=ro(n,"Promise"),ka=ro(n,"Set"),Ea=ro(n,"WeakMap"),Ra=ro(ke,"create"),Oa=Ea&&new Ea,Ca={},Aa=Lo(_a),Ta=Lo(wa),za=Lo(ja),Sa=Lo(ka),Pa=Lo(Ea),qa=Ne?Ne.prototype:t,Ia=qa?qa.valueOf:t,La=qa?qa.toString:t;function Fa(e){if(Qs(e)&&!Ms(e)&&!(e instanceof Na)){if(e instanceof Da)return e;if(Pe.call(e,"__wrapped__"))return Fo(e)}return new Da(e)}var Ba=function(){function e(){}return function(n){if(!Xs(n))return{};if(Ye)return Ye(n);e.prototype=n;var a=new e;return e.prototype=t,a}}();function Ua(){}function Da(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=t}function Na(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=m,this.__views__=[]}function Ma(e){var n=-1,a=null==e?0:e.length;for(this.clear();++n<a;){var i=e[n];this.set(i[0],i[1])}}function $a(e){var n=-1,a=null==e?0:e.length;for(this.clear();++n<a;){var i=e[n];this.set(i[0],i[1])}}function Wa(e){var n=-1,a=null==e?0:e.length;for(this.clear();++n<a;){var i=e[n];this.set(i[0],i[1])}}function Ya(e){var n=-1,a=null==e?0:e.length;for(this.__data__=new Wa;++n<a;)this.add(e[n])}function Ha(e){var n=this.__data__=new $a(e);this.size=n.size}function Ja(e,n){var a=Ms(e),i=!a&&Ns(e),t=!a&&!i&&Hs(e),o=!a&&!i&&!t&&rr(e),s=a||i||t||o,r=s?Vn(e.length,Re):[],c=r.length;for(var p in e)!n&&!Pe.call(e,p)||s&&("length"==p||t&&("offset"==p||"parent"==p)||o&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||xo(p,c))||r.push(p);return r}function Va(e){var n=e.length;return n?e[Wi(0,n-1)]:t}function Ka(e,n){return zo(Et(e),ti(n,0,e.length))}function Ga(e){return zo(Et(e))}function Za(e,n,a){(a!==t&&!Bs(e[n],a)||a===t&&!(n in e))&&ai(e,n,a)}function Xa(e,n,a){var i=e[n];Pe.call(e,n)&&Bs(i,a)&&(a!==t||n in e)||ai(e,n,a)}function Qa(e,n){for(var a=e.length;a--;)if(Bs(e[a][0],n))return a;return-1}function ei(e,n,a,i){return pi(e,(function(e,t,o){n(i,e,a(e),o)})),i}function ni(e,n){return e&&Rt(n,Ar(n),e)}function ai(e,n,a){"__proto__"==n&&en?en(e,n,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[n]=a}function ii(e,n){for(var a=-1,o=n.length,s=i(o),r=null==e;++a<o;)s[a]=r?t:kr(e,n[a]);return s}function ti(e,n,a){return e==e&&(a!==t&&(e=e<=a?e:a),n!==t&&(e=e>=n?e:n)),e}function oi(e,n,a,i,o,s){var r,c=1&n,p=2&n,u=4&n;if(a&&(r=o?a(e,i,o,s):a(e)),r!==t)return r;if(!Xs(e))return e;var l=Ms(e);if(l){if(r=function(e){var n=e.length,a=new e.constructor(n);return n&&"string"==typeof e[0]&&Pe.call(e,"index")&&(a.index=e.index,a.input=e.input),a}(e),!c)return Et(e,r)}else{var d=uo(e),m=d==y||d==_;if(Hs(e))return gt(e,c);if(d==k||d==x||m&&!o){if(r=p||m?{}:mo(e),!c)return p?function(e,n){return Rt(e,po(e),n)}(e,function(e,n){return e&&Rt(n,Tr(n),e)}(r,e)):function(e,n){return Rt(e,co(e),n)}(e,ni(r,e))}else{if(!sn[d])return o?e:{};r=function(e,n,a){var i,t=e.constructor;switch(n){case z:return yt(e);case h:case b:return new t(+e);case S:return function(e,n){var a=n?yt(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}(e,a);case P:case q:case I:case L:case F:case B:case U:case D:case N:return _t(e,a);case w:return new t;case j:case C:return new t(e);case R:return function(e){var n=new e.constructor(e.source,de.exec(e));return n.lastIndex=e.lastIndex,n}(e);case O:return new t;case A:return i=e,Ia?ke(Ia.call(i)):{}}}(e,d,c)}}s||(s=new Ha);var f=s.get(e);if(f)return f;s.set(e,r),tr(e)?e.forEach((function(i){r.add(oi(i,n,a,i,e,s))})):er(e)&&e.forEach((function(i,t){r.set(t,oi(i,n,a,t,e,s))}));var v=l?t:(u?p?eo:Qt:p?Tr:Ar)(e);return Rn(v||e,(function(i,t){v&&(i=e[t=i]),Xa(r,t,oi(i,n,a,t,e,s))})),r}function si(e,n,a){var i=a.length;if(null==e)return!i;for(e=ke(e);i--;){var o=a[i],s=n[o],r=e[o];if(r===t&&!(o in e)||!s(r))return!1}return!0}function ri(e,n,a){if("function"!=typeof e)throw new Oe(o);return Oo((function(){e.apply(t,a)}),n)}function ci(e,n,a,i){var t=-1,o=Tn,s=!0,r=e.length,c=[],p=n.length;if(!r)return c;a&&(n=Sn(n,Gn(a))),i?(o=zn,s=!1):n.length>=200&&(o=Xn,s=!1,n=new Ya(n));e:for(;++t<r;){var u=e[t],l=null==a?u:a(u);if(u=i||0!==u?u:0,s&&l==l){for(var d=p;d--;)if(n[d]===l)continue e;c.push(u)}else o(n,l,i)||c.push(u)}return c}Fa.templateSettings={escape:K,evaluate:G,interpolate:Z,variable:"",imports:{_:Fa}},Fa.prototype=Ua.prototype,Fa.prototype.constructor=Fa,Da.prototype=Ba(Ua.prototype),Da.prototype.constructor=Da,Na.prototype=Ba(Ua.prototype),Na.prototype.constructor=Na,Ma.prototype.clear=function(){this.__data__=Ra?Ra(null):{},this.size=0},Ma.prototype.delete=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Ma.prototype.get=function(e){var n=this.__data__;if(Ra){var a=n[e];return a===s?t:a}return Pe.call(n,e)?n[e]:t},Ma.prototype.has=function(e){var n=this.__data__;return Ra?n[e]!==t:Pe.call(n,e)},Ma.prototype.set=function(e,n){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=Ra&&n===t?s:n,this},$a.prototype.clear=function(){this.__data__=[],this.size=0},$a.prototype.delete=function(e){var n=this.__data__,a=Qa(n,e);return!(a<0||(a==n.length-1?n.pop():Je.call(n,a,1),--this.size,0))},$a.prototype.get=function(e){var n=this.__data__,a=Qa(n,e);return a<0?t:n[a][1]},$a.prototype.has=function(e){return Qa(this.__data__,e)>-1},$a.prototype.set=function(e,n){var a=this.__data__,i=Qa(a,e);return i<0?(++this.size,a.push([e,n])):a[i][1]=n,this},Wa.prototype.clear=function(){this.size=0,this.__data__={hash:new Ma,map:new(wa||$a),string:new Ma}},Wa.prototype.delete=function(e){var n=oo(this,e).delete(e);return this.size-=n?1:0,n},Wa.prototype.get=function(e){return oo(this,e).get(e)},Wa.prototype.has=function(e){return oo(this,e).has(e)},Wa.prototype.set=function(e,n){var a=oo(this,e),i=a.size;return a.set(e,n),this.size+=a.size==i?0:1,this},Ya.prototype.add=Ya.prototype.push=function(e){return this.__data__.set(e,s),this},Ya.prototype.has=function(e){return this.__data__.has(e)},Ha.prototype.clear=function(){this.__data__=new $a,this.size=0},Ha.prototype.delete=function(e){var n=this.__data__,a=n.delete(e);return this.size=n.size,a},Ha.prototype.get=function(e){return this.__data__.get(e)},Ha.prototype.has=function(e){return this.__data__.has(e)},Ha.prototype.set=function(e,n){var a=this.__data__;if(a instanceof $a){var i=a.__data__;if(!wa||i.length<199)return i.push([e,n]),this.size=++a.size,this;a=this.__data__=new Wa(i)}return a.set(e,n),this.size=a.size,this};var pi=At(hi),ui=At(bi,!0);function li(e,n){var a=!0;return pi(e,(function(e,i,t){return a=!!n(e,i,t)})),a}function di(e,n,a){for(var i=-1,o=e.length;++i<o;){var s=e[i],r=n(s);if(null!=r&&(c===t?r==r&&!sr(r):a(r,c)))var c=r,p=s}return p}function mi(e,n){var a=[];return pi(e,(function(e,i,t){n(e,i,t)&&a.push(e)})),a}function fi(e,n,a,i,t){var o=-1,s=e.length;for(a||(a=fo),t||(t=[]);++o<s;){var r=e[o];n>0&&a(r)?n>1?fi(r,n-1,a,i,t):Pn(t,r):i||(t[t.length]=r)}return t}var xi=Tt(),vi=Tt(!0);function hi(e,n){return e&&xi(e,n,Ar)}function bi(e,n){return e&&vi(e,n,Ar)}function gi(e,n){return An(n,(function(n){return Ks(e[n])}))}function yi(e,n){for(var a=0,i=(n=xt(n,e)).length;null!=e&&a<i;)e=e[Io(n[a++])];return a&&a==i?e:t}function _i(e,n,a){var i=n(e);return Ms(e)?i:Pn(i,a(e))}function wi(e){return null==e?e===t?"[object Undefined]":"[object Null]":Xe&&Xe in ke(e)?function(e){var n=Pe.call(e,Xe),a=e[Xe];try{e[Xe]=t;var i=!0}catch(e){}var o=Le.call(e);return i&&(n?e[Xe]=a:delete e[Xe]),o}(e):function(e){return Le.call(e)}(e)}function ji(e,n){return e>n}function ki(e,n){return null!=e&&Pe.call(e,n)}function Ei(e,n){return null!=e&&n in ke(e)}function Ri(e,n,a){for(var o=a?zn:Tn,s=e[0].length,r=e.length,c=r,p=i(r),u=1/0,l=[];c--;){var d=e[c];c&&n&&(d=Sn(d,Gn(n))),u=va(d.length,u),p[c]=!a&&(n||s>=120&&d.length>=120)?new Ya(c&&d):t}d=e[0];var m=-1,f=p[0];e:for(;++m<s&&l.length<u;){var x=d[m],v=n?n(x):x;if(x=a||0!==x?x:0,!(f?Xn(f,v):o(l,v,a))){for(c=r;--c;){var h=p[c];if(!(h?Xn(h,v):o(e[c],v,a)))continue e}f&&f.push(v),l.push(x)}}return l}function Oi(e,n,a){var i=null==(e=ko(e,n=xt(n,e)))?e:e[Io(Vo(n))];return null==i?t:kn(i,e,a)}function Ci(e){return Qs(e)&&wi(e)==x}function Ai(e,n,a,i,o){return e===n||(null==e||null==n||!Qs(e)&&!Qs(n)?e!=e&&n!=n:function(e,n,a,i,o,s){var r=Ms(e),c=Ms(n),p=r?v:uo(e),u=c?v:uo(n),l=(p=p==x?k:p)==k,d=(u=u==x?k:u)==k,m=p==u;if(m&&Hs(e)){if(!Hs(n))return!1;r=!0,l=!1}if(m&&!l)return s||(s=new Ha),r||rr(e)?Zt(e,n,a,i,o,s):function(e,n,a,i,t,o,s){switch(a){case S:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case z:return!(e.byteLength!=n.byteLength||!o(new Me(e),new Me(n)));case h:case b:case j:return Bs(+e,+n);case g:return e.name==n.name&&e.message==n.message;case R:case C:return e==n+"";case w:var r=oa;case O:var c=1&i;if(r||(r=ca),e.size!=n.size&&!c)return!1;var p=s.get(e);if(p)return p==n;i|=2,s.set(e,n);var u=Zt(r(e),r(n),i,t,o,s);return s.delete(e),u;case A:if(Ia)return Ia.call(e)==Ia.call(n)}return!1}(e,n,p,a,i,o,s);if(!(1&a)){var f=l&&Pe.call(e,"__wrapped__"),y=d&&Pe.call(n,"__wrapped__");if(f||y){var _=f?e.value():e,E=y?n.value():n;return s||(s=new Ha),o(_,E,a,i,s)}}return!!m&&(s||(s=new Ha),function(e,n,a,i,o,s){var r=1&a,c=Qt(e),p=c.length;if(p!=Qt(n).length&&!r)return!1;for(var u=p;u--;){var l=c[u];if(!(r?l in n:Pe.call(n,l)))return!1}var d=s.get(e),m=s.get(n);if(d&&m)return d==n&&m==e;var f=!0;s.set(e,n),s.set(n,e);for(var x=r;++u<p;){var v=e[l=c[u]],h=n[l];if(i)var b=r?i(h,v,l,n,e,s):i(v,h,l,e,n,s);if(!(b===t?v===h||o(v,h,a,i,s):b)){f=!1;break}x||(x="constructor"==l)}if(f&&!x){var g=e.constructor,y=n.constructor;g==y||!("constructor"in e)||!("constructor"in n)||"function"==typeof g&&g instanceof g&&"function"==typeof y&&y instanceof y||(f=!1)}return s.delete(e),s.delete(n),f}(e,n,a,i,o,s))}(e,n,a,i,Ai,o))}function Ti(e,n,a,i){var o=a.length,s=o,r=!i;if(null==e)return!s;for(e=ke(e);o--;){var c=a[o];if(r&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++o<s;){var p=(c=a[o])[0],u=e[p],l=c[1];if(r&&c[2]){if(u===t&&!(p in e))return!1}else{var d=new Ha;if(i)var m=i(u,l,p,e,n,d);if(!(m===t?Ai(l,u,3,i,d):m))return!1}}return!0}function zi(e){return!(!Xs(e)||(n=e,Ie&&Ie in n))&&(Ks(e)?Ue:xe).test(Lo(e));var n}function Si(e){return"function"==typeof e?e:null==e?nc:"object"==typeof e?Ms(e)?Fi(e[0],e[1]):Li(e):uc(e)}function Pi(e){if(!yo(e))return fa(e);var n=[];for(var a in ke(e))Pe.call(e,a)&&"constructor"!=a&&n.push(a);return n}function qi(e,n){return e<n}function Ii(e,n){var a=-1,t=Ws(e)?i(e.length):[];return pi(e,(function(e,i,o){t[++a]=n(e,i,o)})),t}function Li(e){var n=so(e);return 1==n.length&&n[0][2]?wo(n[0][0],n[0][1]):function(a){return a===e||Ti(a,e,n)}}function Fi(e,n){return ho(e)&&_o(n)?wo(Io(e),n):function(a){var i=kr(a,e);return i===t&&i===n?Er(a,e):Ai(n,i,3)}}function Bi(e,n,a,i,o){e!==n&&xi(n,(function(s,r){if(o||(o=new Ha),Xs(s))!function(e,n,a,i,o,s,r){var c=Eo(e,a),p=Eo(n,a),u=r.get(p);if(u)Za(e,a,u);else{var l=s?s(c,p,a+"",e,n,r):t,d=l===t;if(d){var m=Ms(p),f=!m&&Hs(p),x=!m&&!f&&rr(p);l=p,m||f||x?Ms(c)?l=c:Ys(c)?l=Et(c):f?(d=!1,l=gt(p,!0)):x?(d=!1,l=_t(p,!0)):l=[]:ar(p)||Ns(p)?(l=c,Ns(c)?l=xr(c):Xs(c)&&!Ks(c)||(l=mo(p))):d=!1}d&&(r.set(p,l),o(l,p,i,s,r),r.delete(p)),Za(e,a,l)}}(e,n,r,a,Bi,i,o);else{var c=i?i(Eo(e,r),s,r+"",e,n,o):t;c===t&&(c=s),Za(e,r,c)}}),Tr)}function Ui(e,n){var a=e.length;if(a)return xo(n+=n<0?a:0,a)?e[n]:t}function Di(e,n,a){n=n.length?Sn(n,(function(e){return Ms(e)?function(n){return yi(n,1===e.length?e[0]:e)}:e})):[nc];var i=-1;n=Sn(n,Gn(to()));var t=Ii(e,(function(e,a,t){var o=Sn(n,(function(n){return n(e)}));return{criteria:o,index:++i,value:e}}));return function(e,n){var i=e.length;for(e.sort((function(e,n){return function(e,n,a){for(var i=-1,t=e.criteria,o=n.criteria,s=t.length,r=a.length;++i<s;){var c=wt(t[i],o[i]);if(c)return i>=r?c:c*("desc"==a[i]?-1:1)}return e.index-n.index}(e,n,a)}));i--;)e[i]=e[i].value;return e}(t)}function Ni(e,n,a){for(var i=-1,t=n.length,o={};++i<t;){var s=n[i],r=yi(e,s);a(r,s)&&Ki(o,xt(s,e),r)}return o}function Mi(e,n,a,i){var t=i?Nn:Dn,o=-1,s=n.length,r=e;for(e===n&&(n=Et(n)),a&&(r=Sn(e,Gn(a)));++o<s;)for(var c=0,p=n[o],u=a?a(p):p;(c=t(r,u,c,i))>-1;)r!==e&&Je.call(r,c,1),Je.call(e,c,1);return e}function $i(e,n){for(var a=e?n.length:0,i=a-1;a--;){var t=n[a];if(a==i||t!==o){var o=t;xo(t)?Je.call(e,t,1):rt(e,t)}}return e}function Wi(e,n){return e+fn(ga()*(n-e+1))}function Yi(e,n){var a="";if(!e||n<1||n>l)return a;do{n%2&&(a+=e),(n=fn(n/2))&&(e+=e)}while(n);return a}function Hi(e,n){return Co(jo(e,n,nc),e+"")}function Ji(e){return Va(Br(e))}function Vi(e,n){var a=Br(e);return zo(a,ti(n,0,a.length))}function Ki(e,n,a,i){if(!Xs(e))return e;for(var o=-1,s=(n=xt(n,e)).length,r=s-1,c=e;null!=c&&++o<s;){var p=Io(n[o]),u=a;if("__proto__"===p||"constructor"===p||"prototype"===p)return e;if(o!=r){var l=c[p];(u=i?i(l,p,c):t)===t&&(u=Xs(l)?l:xo(n[o+1])?[]:{})}Xa(c,p,u),c=c[p]}return e}var Gi=Oa?function(e,n){return Oa.set(e,n),e}:nc,Zi=en?function(e,n){return en(e,"toString",{configurable:!0,enumerable:!1,value:Xr(n),writable:!0})}:nc;function Xi(e){return zo(Br(e))}function Qi(e,n,a){var t=-1,o=e.length;n<0&&(n=-n>o?0:o+n),(a=a>o?o:a)<0&&(a+=o),o=n>a?0:a-n>>>0,n>>>=0;for(var s=i(o);++t<o;)s[t]=e[t+n];return s}function et(e,n){var a;return pi(e,(function(e,i,t){return!(a=n(e,i,t))})),!!a}function nt(e,n,a){var i=0,t=null==e?i:e.length;if("number"==typeof n&&n==n&&t<=2147483647){for(;i<t;){var o=i+t>>>1,s=e[o];null!==s&&!sr(s)&&(a?s<=n:s<n)?i=o+1:t=o}return t}return at(e,n,nc,a)}function at(e,n,a,i){var o=0,s=null==e?0:e.length;if(0===s)return 0;for(var r=(n=a(n))!=n,c=null===n,p=sr(n),u=n===t;o<s;){var l=fn((o+s)/2),d=a(e[l]),m=d!==t,f=null===d,x=d==d,v=sr(d);if(r)var h=i||x;else h=u?x&&(i||m):c?x&&m&&(i||!f):p?x&&m&&!f&&(i||!v):!f&&!v&&(i?d<=n:d<n);h?o=l+1:s=l}return va(s,4294967294)}function it(e,n){for(var a=-1,i=e.length,t=0,o=[];++a<i;){var s=e[a],r=n?n(s):s;if(!a||!Bs(r,c)){var c=r;o[t++]=0===s?0:s}}return o}function tt(e){return"number"==typeof e?e:sr(e)?d:+e}function ot(e){if("string"==typeof e)return e;if(Ms(e))return Sn(e,ot)+"";if(sr(e))return La?La.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}function st(e,n,a){var i=-1,t=Tn,o=e.length,s=!0,r=[],c=r;if(a)s=!1,t=zn;else if(o>=200){var p=n?null:Yt(e);if(p)return ca(p);s=!1,t=Xn,c=new Ya}else c=n?[]:r;e:for(;++i<o;){var u=e[i],l=n?n(u):u;if(u=a||0!==u?u:0,s&&l==l){for(var d=c.length;d--;)if(c[d]===l)continue e;n&&c.push(l),r.push(u)}else t(c,l,a)||(c!==r&&c.push(l),r.push(u))}return r}function rt(e,n){return null==(e=ko(e,n=xt(n,e)))||delete e[Io(Vo(n))]}function ct(e,n,a,i){return Ki(e,n,a(yi(e,n)),i)}function pt(e,n,a,i){for(var t=e.length,o=i?t:-1;(i?o--:++o<t)&&n(e[o],o,e););return a?Qi(e,i?0:o,i?o+1:t):Qi(e,i?o+1:0,i?t:o)}function ut(e,n){var a=e;return a instanceof Na&&(a=a.value()),qn(n,(function(e,n){return n.func.apply(n.thisArg,Pn([e],n.args))}),a)}function lt(e,n,a){var t=e.length;if(t<2)return t?st(e[0]):[];for(var o=-1,s=i(t);++o<t;)for(var r=e[o],c=-1;++c<t;)c!=o&&(s[o]=ci(s[o]||r,e[c],n,a));return st(fi(s,1),n,a)}function dt(e,n,a){for(var i=-1,o=e.length,s=n.length,r={};++i<o;){var c=i<s?n[i]:t;a(r,e[i],c)}return r}function mt(e){return Ys(e)?e:[]}function ft(e){return"function"==typeof e?e:nc}function xt(e,n){return Ms(e)?e:ho(e,n)?[e]:qo(vr(e))}var vt=Hi;function ht(e,n,a){var i=e.length;return a=a===t?i:a,!n&&a>=i?e:Qi(e,n,a)}var bt=rn||function(e){return dn.clearTimeout(e)};function gt(e,n){if(n)return e.slice();var a=e.length,i=$e?$e(a):new e.constructor(a);return e.copy(i),i}function yt(e){var n=new e.constructor(e.byteLength);return new Me(n).set(new Me(e)),n}function _t(e,n){var a=n?yt(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function wt(e,n){if(e!==n){var a=e!==t,i=null===e,o=e==e,s=sr(e),r=n!==t,c=null===n,p=n==n,u=sr(n);if(!c&&!u&&!s&&e>n||s&&r&&p&&!c&&!u||i&&r&&p||!a&&p||!o)return 1;if(!i&&!s&&!u&&e<n||u&&a&&o&&!i&&!s||c&&a&&o||!r&&o||!p)return-1}return 0}function jt(e,n,a,t){for(var o=-1,s=e.length,r=a.length,c=-1,p=n.length,u=xa(s-r,0),l=i(p+u),d=!t;++c<p;)l[c]=n[c];for(;++o<r;)(d||o<s)&&(l[a[o]]=e[o]);for(;u--;)l[c++]=e[o++];return l}function kt(e,n,a,t){for(var o=-1,s=e.length,r=-1,c=a.length,p=-1,u=n.length,l=xa(s-c,0),d=i(l+u),m=!t;++o<l;)d[o]=e[o];for(var f=o;++p<u;)d[f+p]=n[p];for(;++r<c;)(m||o<s)&&(d[f+a[r]]=e[o++]);return d}function Et(e,n){var a=-1,t=e.length;for(n||(n=i(t));++a<t;)n[a]=e[a];return n}function Rt(e,n,a,i){var o=!a;a||(a={});for(var s=-1,r=n.length;++s<r;){var c=n[s],p=i?i(a[c],e[c],c,a,e):t;p===t&&(p=e[c]),o?ai(a,c,p):Xa(a,c,p)}return a}function Ot(e,n){return function(a,i){var t=Ms(a)?En:ei,o=n?n():{};return t(a,e,to(i,2),o)}}function Ct(e){return Hi((function(n,a){var i=-1,o=a.length,s=o>1?a[o-1]:t,r=o>2?a[2]:t;for(s=e.length>3&&"function"==typeof s?(o--,s):t,r&&vo(a[0],a[1],r)&&(s=o<3?t:s,o=1),n=ke(n);++i<o;){var c=a[i];c&&e(n,c,i,s)}return n}))}function At(e,n){return function(a,i){if(null==a)return a;if(!Ws(a))return e(a,i);for(var t=a.length,o=n?t:-1,s=ke(a);(n?o--:++o<t)&&!1!==i(s[o],o,s););return a}}function Tt(e){return function(n,a,i){for(var t=-1,o=ke(n),s=i(n),r=s.length;r--;){var c=s[e?r:++t];if(!1===a(o[c],c,o))break}return n}}function zt(e){return function(n){var a=ta(n=vr(n))?ua(n):t,i=a?a[0]:n.charAt(0),o=a?ht(a,1).join(""):n.slice(1);return i[e]()+o}}function St(e){return function(n){return qn(Kr(Nr(n).replace(Ge,"")),e,"")}}function Pt(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var a=Ba(e.prototype),i=e.apply(a,n);return Xs(i)?i:a}}function qt(e){return function(n,a,i){var o=ke(n);if(!Ws(n)){var s=to(a,3);n=Ar(n),a=function(e){return s(o[e],e,o)}}var r=e(n,a,i);return r>-1?o[s?n[r]:r]:t}}function It(e){return Xt((function(n){var a=n.length,i=a,s=Da.prototype.thru;for(e&&n.reverse();i--;){var r=n[i];if("function"!=typeof r)throw new Oe(o);if(s&&!c&&"wrapper"==ao(r))var c=new Da([],!0)}for(i=c?i:a;++i<a;){var p=ao(r=n[i]),u="wrapper"==p?no(r):t;c=u&&bo(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?c[ao(u[0])].apply(c,u[3]):1==r.length&&bo(r)?c[p]():c.thru(r)}return function(){var e=arguments,i=e[0];if(c&&1==e.length&&Ms(i))return c.plant(i).value();for(var t=0,o=a?n[t].apply(this,e):i;++t<a;)o=n[t].call(this,o);return o}}))}function Lt(e,n,a,o,s,r,c,u,l,d){var m=n&p,f=1&n,x=2&n,v=24&n,h=512&n,b=x?t:Pt(e);return function p(){for(var g=arguments.length,y=i(g),_=g;_--;)y[_]=arguments[_];if(v)var w=io(p),j=function(e,n){for(var a=e.length,i=0;a--;)e[a]===n&&++i;return i}(y,w);if(o&&(y=jt(y,o,s,v)),r&&(y=kt(y,r,c,v)),g-=j,v&&g<d){var k=ra(y,w);return $t(e,n,Lt,p.placeholder,a,y,k,u,l,d-g)}var E=f?a:this,R=x?E[e]:e;return g=y.length,u?y=function(e,n){for(var a=e.length,i=va(n.length,a),o=Et(e);i--;){var s=n[i];e[i]=xo(s,a)?o[s]:t}return e}(y,u):h&&g>1&&y.reverse(),m&&l<g&&(y.length=l),this&&this!==dn&&this instanceof p&&(R=b||Pt(R)),R.apply(E,y)}}function Ft(e,n){return function(a,i){return function(e,n,a,i){return hi(e,(function(e,t,o){n(i,a(e),t,o)})),i}(a,e,n(i),{})}}function Bt(e,n){return function(a,i){var o;if(a===t&&i===t)return n;if(a!==t&&(o=a),i!==t){if(o===t)return i;"string"==typeof a||"string"==typeof i?(a=ot(a),i=ot(i)):(a=tt(a),i=tt(i)),o=e(a,i)}return o}}function Ut(e){return Xt((function(n){return n=Sn(n,Gn(to())),Hi((function(a){var i=this;return e(n,(function(e){return kn(e,i,a)}))}))}))}function Dt(e,n){var a=(n=n===t?" ":ot(n)).length;if(a<2)return a?Yi(n,e):n;var i=Yi(n,mn(e/pa(n)));return ta(n)?ht(ua(i),0,e).join(""):i.slice(0,e)}function Nt(e){return function(n,a,o){return o&&"number"!=typeof o&&vo(n,a,o)&&(a=o=t),n=lr(n),a===t?(a=n,n=0):a=lr(a),function(e,n,a,t){for(var o=-1,s=xa(mn((n-e)/(a||1)),0),r=i(s);s--;)r[t?s:++o]=e,e+=a;return r}(n,a,o=o===t?n<a?1:-1:lr(o),e)}}function Mt(e){return function(n,a){return"string"==typeof n&&"string"==typeof a||(n=fr(n),a=fr(a)),e(n,a)}}function $t(e,n,a,i,o,s,r,p,u,l){var d=8&n;n|=d?c:64,4&(n&=~(d?64:c))||(n&=-4);var m=[e,n,o,d?s:t,d?r:t,d?t:s,d?t:r,p,u,l],f=a.apply(t,m);return bo(e)&&Ro(f,m),f.placeholder=i,Ao(f,e,n)}function Wt(e){var n=je[e];return function(e,a){if(e=fr(e),(a=null==a?0:va(dr(a),292))&&Fn(e)){var i=(vr(e)+"e").split("e");return+((i=(vr(n(i[0]+"e"+(+i[1]+a)))+"e").split("e"))[0]+"e"+(+i[1]-a))}return n(e)}}var Yt=ka&&1/ca(new ka([,-0]))[1]==u?function(e){return new ka(e)}:sc;function Ht(e){return function(n){var a=uo(n);return a==w?oa(n):a==O?function(e){var n=-1,a=Array(e.size);return e.forEach((function(e){a[++n]=[e,e]})),a}(n):function(e,n){return Sn(n,(function(n){return[n,e[n]]}))}(n,e(n))}}function Jt(e,n,a,s,u,l,d,m){var f=2&n;if(!f&&"function"!=typeof e)throw new Oe(o);var x=s?s.length:0;if(x||(n&=-97,s=u=t),d=d===t?d:xa(dr(d),0),m=m===t?m:dr(m),x-=u?u.length:0,64&n){var v=s,h=u;s=u=t}var b=f?t:no(e),g=[e,n,a,s,u,v,h,l,d,m];if(b&&function(e,n){var a=e[1],i=n[1],t=a|i,o=t<131,s=i==p&&8==a||i==p&&256==a&&e[7].length<=n[8]||384==i&&n[7].length<=n[8]&&8==a;if(!o&&!s)return e;1&i&&(e[2]=n[2],t|=1&a?0:4);var c=n[3];if(c){var u=e[3];e[3]=u?jt(u,c,n[4]):c,e[4]=u?ra(e[3],r):n[4]}(c=n[5])&&(u=e[5],e[5]=u?kt(u,c,n[6]):c,e[6]=u?ra(e[5],r):n[6]),(c=n[7])&&(e[7]=c),i&p&&(e[8]=null==e[8]?n[8]:va(e[8],n[8])),null==e[9]&&(e[9]=n[9]),e[0]=n[0],e[1]=t}(g,b),e=g[0],n=g[1],a=g[2],s=g[3],u=g[4],!(m=g[9]=g[9]===t?f?0:e.length:xa(g[9]-x,0))&&24&n&&(n&=-25),n&&1!=n)y=8==n||16==n?function(e,n,a){var o=Pt(e);return function s(){for(var r=arguments.length,c=i(r),p=r,u=io(s);p--;)c[p]=arguments[p];var l=r<3&&c[0]!==u&&c[r-1]!==u?[]:ra(c,u);return(r-=l.length)<a?$t(e,n,Lt,s.placeholder,t,c,l,t,t,a-r):kn(this&&this!==dn&&this instanceof s?o:e,this,c)}}(e,n,m):n!=c&&33!=n||u.length?Lt.apply(t,g):function(e,n,a,t){var o=1&n,s=Pt(e);return function n(){for(var r=-1,c=arguments.length,p=-1,u=t.length,l=i(u+c),d=this&&this!==dn&&this instanceof n?s:e;++p<u;)l[p]=t[p];for(;c--;)l[p++]=arguments[++r];return kn(d,o?a:this,l)}}(e,n,a,s);else var y=function(e,n,a){var i=1&n,t=Pt(e);return function n(){return(this&&this!==dn&&this instanceof n?t:e).apply(i?a:this,arguments)}}(e,n,a);return Ao((b?Gi:Ro)(y,g),e,n)}function Vt(e,n,a,i){return e===t||Bs(e,Te[a])&&!Pe.call(i,a)?n:e}function Kt(e,n,a,i,o,s){return Xs(e)&&Xs(n)&&(s.set(n,e),Bi(e,n,t,Kt,s),s.delete(n)),e}function Gt(e){return ar(e)?t:e}function Zt(e,n,a,i,o,s){var r=1&a,c=e.length,p=n.length;if(c!=p&&!(r&&p>c))return!1;var u=s.get(e),l=s.get(n);if(u&&l)return u==n&&l==e;var d=-1,m=!0,f=2&a?new Ya:t;for(s.set(e,n),s.set(n,e);++d<c;){var x=e[d],v=n[d];if(i)var h=r?i(v,x,d,n,e,s):i(x,v,d,e,n,s);if(h!==t){if(h)continue;m=!1;break}if(f){if(!Ln(n,(function(e,n){if(!Xn(f,n)&&(x===e||o(x,e,a,i,s)))return f.push(n)}))){m=!1;break}}else if(x!==v&&!o(x,v,a,i,s)){m=!1;break}}return s.delete(e),s.delete(n),m}function Xt(e){return Co(jo(e,t,$o),e+"")}function Qt(e){return _i(e,Ar,co)}function eo(e){return _i(e,Tr,po)}var no=Oa?function(e){return Oa.get(e)}:sc;function ao(e){for(var n=e.name+"",a=Ca[n],i=Pe.call(Ca,n)?a.length:0;i--;){var t=a[i],o=t.func;if(null==o||o==e)return t.name}return n}function io(e){return(Pe.call(Fa,"placeholder")?Fa:e).placeholder}function to(){var e=Fa.iteratee||ac;return e=e===ac?Si:e,arguments.length?e(arguments[0],arguments[1]):e}function oo(e,n){var a,i,t=e.__data__;return("string"==(i=typeof(a=n))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==a:null===a)?t["string"==typeof n?"string":"hash"]:t.map}function so(e){for(var n=Ar(e),a=n.length;a--;){var i=n[a],t=e[i];n[a]=[i,t,_o(t)]}return n}function ro(e,n){var a=function(e,n){return null==e?t:e[n]}(e,n);return zi(a)?a:t}var co=vn?function(e){return null==e?[]:(e=ke(e),An(vn(e),(function(n){return He.call(e,n)})))}:mc,po=vn?function(e){for(var n=[];e;)Pn(n,co(e)),e=We(e);return n}:mc,uo=wi;function lo(e,n,a){for(var i=-1,t=(n=xt(n,e)).length,o=!1;++i<t;){var s=Io(n[i]);if(!(o=null!=e&&a(e,s)))break;e=e[s]}return o||++i!=t?o:!!(t=null==e?0:e.length)&&Zs(t)&&xo(s,t)&&(Ms(e)||Ns(e))}function mo(e){return"function"!=typeof e.constructor||yo(e)?{}:Ba(We(e))}function fo(e){return Ms(e)||Ns(e)||!!(Ve&&e&&e[Ve])}function xo(e,n){var a=typeof e;return!!(n=null==n?l:n)&&("number"==a||"symbol"!=a&&he.test(e))&&e>-1&&e%1==0&&e<n}function vo(e,n,a){if(!Xs(a))return!1;var i=typeof n;return!!("number"==i?Ws(a)&&xo(n,a.length):"string"==i&&n in a)&&Bs(a[n],e)}function ho(e,n){if(Ms(e))return!1;var a=typeof e;return!("number"!=a&&"symbol"!=a&&"boolean"!=a&&null!=e&&!sr(e))||Q.test(e)||!X.test(e)||null!=n&&e in ke(n)}function bo(e){var n=ao(e),a=Fa[n];if("function"!=typeof a||!(n in Na.prototype))return!1;if(e===a)return!0;var i=no(a);return!!i&&e===i[0]}(_a&&uo(new _a(new ArrayBuffer(1)))!=S||wa&&uo(new wa)!=w||ja&&uo(ja.resolve())!=E||ka&&uo(new ka)!=O||Ea&&uo(new Ea)!=T)&&(uo=function(e){var n=wi(e),a=n==k?e.constructor:t,i=a?Lo(a):"";if(i)switch(i){case Aa:return S;case Ta:return w;case za:return E;case Sa:return O;case Pa:return T}return n});var go=ze?Ks:fc;function yo(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Te)}function _o(e){return e==e&&!Xs(e)}function wo(e,n){return function(a){return null!=a&&a[e]===n&&(n!==t||e in ke(a))}}function jo(e,n,a){return n=xa(n===t?e.length-1:n,0),function(){for(var t=arguments,o=-1,s=xa(t.length-n,0),r=i(s);++o<s;)r[o]=t[n+o];o=-1;for(var c=i(n+1);++o<n;)c[o]=t[o];return c[n]=a(r),kn(e,this,c)}}function ko(e,n){return n.length<2?e:yi(e,Qi(n,0,-1))}function Eo(e,n){if(("constructor"!==n||"function"!=typeof e[n])&&"__proto__"!=n)return e[n]}var Ro=To(Gi),Oo=ln||function(e,n){return dn.setTimeout(e,n)},Co=To(Zi);function Ao(e,n,a){var i=n+"";return Co(e,function(e,n){var a=n.length;if(!a)return e;var i=a-1;return n[i]=(a>1?"& ":"")+n[i],n=n.join(a>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+n+"] */\n")}(i,function(e,n){return Rn(f,(function(a){var i="_."+a[0];n&a[1]&&!Tn(e,i)&&e.push(i)})),e.sort()}(function(e){var n=e.match(se);return n?n[1].split(re):[]}(i),a)))}function To(e){var n=0,a=0;return function(){var i=ha(),o=16-(i-a);if(a=i,o>0){if(++n>=800)return arguments[0]}else n=0;return e.apply(t,arguments)}}function zo(e,n){var a=-1,i=e.length,o=i-1;for(n=n===t?i:n;++a<n;){var s=Wi(a,o),r=e[s];e[s]=e[a],e[a]=r}return e.length=n,e}var So,Po,qo=(So=Ss((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(ee,(function(e,a,i,t){n.push(i?t.replace(ue,"$1"):a||e)})),n}),(function(e){return 500===Po.size&&Po.clear(),e})),Po=So.cache,So);function Io(e){if("string"==typeof e||sr(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}function Lo(e){if(null!=e){try{return Se.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Fo(e){if(e instanceof Na)return e.clone();var n=new Da(e.__wrapped__,e.__chain__);return n.__actions__=Et(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}var Bo=Hi((function(e,n){return Ys(e)?ci(e,fi(n,1,Ys,!0)):[]})),Uo=Hi((function(e,n){var a=Vo(n);return Ys(a)&&(a=t),Ys(e)?ci(e,fi(n,1,Ys,!0),to(a,2)):[]})),Do=Hi((function(e,n){var a=Vo(n);return Ys(a)&&(a=t),Ys(e)?ci(e,fi(n,1,Ys,!0),t,a):[]}));function No(e,n,a){var i=null==e?0:e.length;if(!i)return-1;var t=null==a?0:dr(a);return t<0&&(t=xa(i+t,0)),Un(e,to(n,3),t)}function Mo(e,n,a){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return a!==t&&(o=dr(a),o=a<0?xa(i+o,0):va(o,i-1)),Un(e,to(n,3),o,!0)}function $o(e){return null!=e&&e.length?fi(e,1):[]}function Wo(e){return e&&e.length?e[0]:t}var Yo=Hi((function(e){var n=Sn(e,mt);return n.length&&n[0]===e[0]?Ri(n):[]})),Ho=Hi((function(e){var n=Vo(e),a=Sn(e,mt);return n===Vo(a)?n=t:a.pop(),a.length&&a[0]===e[0]?Ri(a,to(n,2)):[]})),Jo=Hi((function(e){var n=Vo(e),a=Sn(e,mt);return(n="function"==typeof n?n:t)&&a.pop(),a.length&&a[0]===e[0]?Ri(a,t,n):[]}));function Vo(e){var n=null==e?0:e.length;return n?e[n-1]:t}var Ko=Hi(Go);function Go(e,n){return e&&e.length&&n&&n.length?Mi(e,n):e}var Zo=Xt((function(e,n){var a=null==e?0:e.length,i=ii(e,n);return $i(e,Sn(n,(function(e){return xo(e,a)?+e:e})).sort(wt)),i}));function Xo(e){return null==e?e:ya.call(e)}var Qo=Hi((function(e){return st(fi(e,1,Ys,!0))})),es=Hi((function(e){var n=Vo(e);return Ys(n)&&(n=t),st(fi(e,1,Ys,!0),to(n,2))})),ns=Hi((function(e){var n=Vo(e);return n="function"==typeof n?n:t,st(fi(e,1,Ys,!0),t,n)}));function as(e){if(!e||!e.length)return[];var n=0;return e=An(e,(function(e){if(Ys(e))return n=xa(e.length,n),!0})),Vn(n,(function(n){return Sn(e,Wn(n))}))}function is(e,n){if(!e||!e.length)return[];var a=as(e);return null==n?a:Sn(a,(function(e){return kn(n,t,e)}))}var ts=Hi((function(e,n){return Ys(e)?ci(e,n):[]})),os=Hi((function(e){return lt(An(e,Ys))})),ss=Hi((function(e){var n=Vo(e);return Ys(n)&&(n=t),lt(An(e,Ys),to(n,2))})),rs=Hi((function(e){var n=Vo(e);return n="function"==typeof n?n:t,lt(An(e,Ys),t,n)})),cs=Hi(as),ps=Hi((function(e){var n=e.length,a=n>1?e[n-1]:t;return a="function"==typeof a?(e.pop(),a):t,is(e,a)}));function us(e){var n=Fa(e);return n.__chain__=!0,n}function ls(e,n){return n(e)}var ds=Xt((function(e){var n=e.length,a=n?e[0]:0,i=this.__wrapped__,o=function(n){return ii(n,e)};return!(n>1||this.__actions__.length)&&i instanceof Na&&xo(a)?((i=i.slice(a,+a+(n?1:0))).__actions__.push({func:ls,args:[o],thisArg:t}),new Da(i,this.__chain__).thru((function(e){return n&&!e.length&&e.push(t),e}))):this.thru(o)})),ms=Ot((function(e,n,a){Pe.call(e,a)?++e[a]:ai(e,a,1)})),fs=qt(No),xs=qt(Mo);function vs(e,n){return(Ms(e)?Rn:pi)(e,to(n,3))}function hs(e,n){return(Ms(e)?On:ui)(e,to(n,3))}var bs=Ot((function(e,n,a){Pe.call(e,a)?e[a].push(n):ai(e,a,[n])})),gs=Hi((function(e,n,a){var t=-1,o="function"==typeof n,s=Ws(e)?i(e.length):[];return pi(e,(function(e){s[++t]=o?kn(n,e,a):Oi(e,n,a)})),s})),ys=Ot((function(e,n,a){ai(e,a,n)}));function _s(e,n){return(Ms(e)?Sn:Ii)(e,to(n,3))}var ws=Ot((function(e,n,a){e[a?0:1].push(n)}),(function(){return[[],[]]})),js=Hi((function(e,n){if(null==e)return[];var a=n.length;return a>1&&vo(e,n[0],n[1])?n=[]:a>2&&vo(n[0],n[1],n[2])&&(n=[n[0]]),Di(e,fi(n,1),[])})),ks=un||function(){return dn.Date.now()};function Es(e,n,a){return n=a?t:n,n=e&&null==n?e.length:n,Jt(e,p,t,t,t,t,n)}function Rs(e,n){var a;if("function"!=typeof n)throw new Oe(o);return e=dr(e),function(){return--e>0&&(a=n.apply(this,arguments)),e<=1&&(n=t),a}}var Os=Hi((function(e,n,a){var i=1;if(a.length){var t=ra(a,io(Os));i|=c}return Jt(e,i,n,a,t)})),Cs=Hi((function(e,n,a){var i=3;if(a.length){var t=ra(a,io(Cs));i|=c}return Jt(n,i,e,a,t)}));function As(e,n,a){var i,s,r,c,p,u,l=0,d=!1,m=!1,f=!0;if("function"!=typeof e)throw new Oe(o);function x(n){var a=i,o=s;return i=s=t,l=n,c=e.apply(o,a)}function v(e){var a=e-u;return u===t||a>=n||a<0||m&&e-l>=r}function h(){var e=ks();if(v(e))return b(e);p=Oo(h,function(e){var a=n-(e-u);return m?va(a,r-(e-l)):a}(e))}function b(e){return p=t,f&&i?x(e):(i=s=t,c)}function g(){var e=ks(),a=v(e);if(i=arguments,s=this,u=e,a){if(p===t)return function(e){return l=e,p=Oo(h,n),d?x(e):c}(u);if(m)return bt(p),p=Oo(h,n),x(u)}return p===t&&(p=Oo(h,n)),c}return n=fr(n)||0,Xs(a)&&(d=!!a.leading,r=(m="maxWait"in a)?xa(fr(a.maxWait)||0,n):r,f="trailing"in a?!!a.trailing:f),g.cancel=function(){p!==t&&bt(p),l=0,i=u=s=p=t},g.flush=function(){return p===t?c:b(ks())},g}var Ts=Hi((function(e,n){return ri(e,1,n)})),zs=Hi((function(e,n,a){return ri(e,fr(n)||0,a)}));function Ss(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new Oe(o);var a=function(){var i=arguments,t=n?n.apply(this,i):i[0],o=a.cache;if(o.has(t))return o.get(t);var s=e.apply(this,i);return a.cache=o.set(t,s)||o,s};return a.cache=new(Ss.Cache||Wa),a}function Ps(e){if("function"!=typeof e)throw new Oe(o);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}Ss.Cache=Wa;var qs=vt((function(e,n){var a=(n=1==n.length&&Ms(n[0])?Sn(n[0],Gn(to())):Sn(fi(n,1),Gn(to()))).length;return Hi((function(i){for(var t=-1,o=va(i.length,a);++t<o;)i[t]=n[t].call(this,i[t]);return kn(e,this,i)}))})),Is=Hi((function(e,n){var a=ra(n,io(Is));return Jt(e,c,t,n,a)})),Ls=Hi((function(e,n){var a=ra(n,io(Ls));return Jt(e,64,t,n,a)})),Fs=Xt((function(e,n){return Jt(e,256,t,t,t,n)}));function Bs(e,n){return e===n||e!=e&&n!=n}var Us=Mt(ji),Ds=Mt((function(e,n){return e>=n})),Ns=Ci(function(){return arguments}())?Ci:function(e){return Qs(e)&&Pe.call(e,"callee")&&!He.call(e,"callee")},Ms=i.isArray,$s=bn?Gn(bn):function(e){return Qs(e)&&wi(e)==z};function Ws(e){return null!=e&&Zs(e.length)&&!Ks(e)}function Ys(e){return Qs(e)&&Ws(e)}var Hs=hn||fc,Js=gn?Gn(gn):function(e){return Qs(e)&&wi(e)==b};function Vs(e){if(!Qs(e))return!1;var n=wi(e);return n==g||"[object DOMException]"==n||"string"==typeof e.message&&"string"==typeof e.name&&!ar(e)}function Ks(e){if(!Xs(e))return!1;var n=wi(e);return n==y||n==_||"[object AsyncFunction]"==n||"[object Proxy]"==n}function Gs(e){return"number"==typeof e&&e==dr(e)}function Zs(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=l}function Xs(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}function Qs(e){return null!=e&&"object"==typeof e}var er=yn?Gn(yn):function(e){return Qs(e)&&uo(e)==w};function nr(e){return"number"==typeof e||Qs(e)&&wi(e)==j}function ar(e){if(!Qs(e)||wi(e)!=k)return!1;var n=We(e);if(null===n)return!0;var a=Pe.call(n,"constructor")&&n.constructor;return"function"==typeof a&&a instanceof a&&Se.call(a)==Fe}var ir=_n?Gn(_n):function(e){return Qs(e)&&wi(e)==R},tr=wn?Gn(wn):function(e){return Qs(e)&&uo(e)==O};function or(e){return"string"==typeof e||!Ms(e)&&Qs(e)&&wi(e)==C}function sr(e){return"symbol"==typeof e||Qs(e)&&wi(e)==A}var rr=jn?Gn(jn):function(e){return Qs(e)&&Zs(e.length)&&!!on[wi(e)]},cr=Mt(qi),pr=Mt((function(e,n){return e<=n}));function ur(e){if(!e)return[];if(Ws(e))return or(e)?ua(e):Et(e);if(Ke&&e[Ke])return function(e){for(var n,a=[];!(n=e.next()).done;)a.push(n.value);return a}(e[Ke]());var n=uo(e);return(n==w?oa:n==O?ca:Br)(e)}function lr(e){return e?(e=fr(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function dr(e){var n=lr(e),a=n%1;return n==n?a?n-a:n:0}function mr(e){return e?ti(dr(e),0,m):0}function fr(e){if("number"==typeof e)return e;if(sr(e))return d;if(Xs(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=Xs(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=Kn(e);var a=fe.test(e);return a||ve.test(e)?pn(e.slice(2),a?2:8):me.test(e)?d:+e}function xr(e){return Rt(e,Tr(e))}function vr(e){return null==e?"":ot(e)}var hr=Ct((function(e,n){if(yo(n)||Ws(n))Rt(n,Ar(n),e);else for(var a in n)Pe.call(n,a)&&Xa(e,a,n[a])})),br=Ct((function(e,n){Rt(n,Tr(n),e)})),gr=Ct((function(e,n,a,i){Rt(n,Tr(n),e,i)})),yr=Ct((function(e,n,a,i){Rt(n,Ar(n),e,i)})),_r=Xt(ii),wr=Hi((function(e,n){e=ke(e);var a=-1,i=n.length,o=i>2?n[2]:t;for(o&&vo(n[0],n[1],o)&&(i=1);++a<i;)for(var s=n[a],r=Tr(s),c=-1,p=r.length;++c<p;){var u=r[c],l=e[u];(l===t||Bs(l,Te[u])&&!Pe.call(e,u))&&(e[u]=s[u])}return e})),jr=Hi((function(e){return e.push(t,Kt),kn(Sr,t,e)}));function kr(e,n,a){var i=null==e?t:yi(e,n);return i===t?a:i}function Er(e,n){return null!=e&&lo(e,n,Ei)}var Rr=Ft((function(e,n,a){null!=n&&"function"!=typeof n.toString&&(n=Le.call(n)),e[n]=a}),Xr(nc)),Or=Ft((function(e,n,a){null!=n&&"function"!=typeof n.toString&&(n=Le.call(n)),Pe.call(e,n)?e[n].push(a):e[n]=[a]}),to),Cr=Hi(Oi);function Ar(e){return Ws(e)?Ja(e):Pi(e)}function Tr(e){return Ws(e)?Ja(e,!0):function(e){if(!Xs(e))return function(e){var n=[];if(null!=e)for(var a in ke(e))n.push(a);return n}(e);var n=yo(e),a=[];for(var i in e)("constructor"!=i||!n&&Pe.call(e,i))&&a.push(i);return a}(e)}var zr=Ct((function(e,n,a){Bi(e,n,a)})),Sr=Ct((function(e,n,a,i){Bi(e,n,a,i)})),Pr=Xt((function(e,n){var a={};if(null==e)return a;var i=!1;n=Sn(n,(function(n){return n=xt(n,e),i||(i=n.length>1),n})),Rt(e,eo(e),a),i&&(a=oi(a,7,Gt));for(var t=n.length;t--;)rt(a,n[t]);return a})),qr=Xt((function(e,n){return null==e?{}:function(e,n){return Ni(e,n,(function(n,a){return Er(e,a)}))}(e,n)}));function Ir(e,n){if(null==e)return{};var a=Sn(eo(e),(function(e){return[e]}));return n=to(n),Ni(e,a,(function(e,a){return n(e,a[0])}))}var Lr=Ht(Ar),Fr=Ht(Tr);function Br(e){return null==e?[]:Zn(e,Ar(e))}var Ur=St((function(e,n,a){return n=n.toLowerCase(),e+(a?Dr(n):n)}));function Dr(e){return Vr(vr(e).toLowerCase())}function Nr(e){return(e=vr(e))&&e.replace(be,na).replace(Ze,"")}var Mr=St((function(e,n,a){return e+(a?"-":"")+n.toLowerCase()})),$r=St((function(e,n,a){return e+(a?" ":"")+n.toLowerCase()})),Wr=zt("toLowerCase"),Yr=St((function(e,n,a){return e+(a?"_":"")+n.toLowerCase()})),Hr=St((function(e,n,a){return e+(a?" ":"")+Vr(n)})),Jr=St((function(e,n,a){return e+(a?" ":"")+n.toUpperCase()})),Vr=zt("toUpperCase");function Kr(e,n,a){return e=vr(e),(n=a?t:n)===t?function(e){return nn.test(e)}(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.match(ce)||[]}(e):e.match(n)||[]}var Gr=Hi((function(e,n){try{return kn(e,t,n)}catch(e){return Vs(e)?e:new _e(e)}})),Zr=Xt((function(e,n){return Rn(n,(function(n){n=Io(n),ai(e,n,Os(e[n],e))})),e}));function Xr(e){return function(){return e}}var Qr=It(),ec=It(!0);function nc(e){return e}function ac(e){return Si("function"==typeof e?e:oi(e,1))}var ic=Hi((function(e,n){return function(a){return Oi(a,e,n)}})),tc=Hi((function(e,n){return function(a){return Oi(e,a,n)}}));function oc(e,n,a){var i=Ar(n),t=gi(n,i);null!=a||Xs(n)&&(t.length||!i.length)||(a=n,n=e,e=this,t=gi(n,Ar(n)));var o=!(Xs(a)&&"chain"in a&&!a.chain),s=Ks(e);return Rn(t,(function(a){var i=n[a];e[a]=i,s&&(e.prototype[a]=function(){var n=this.__chain__;if(o||n){var a=e(this.__wrapped__);return(a.__actions__=Et(this.__actions__)).push({func:i,args:arguments,thisArg:e}),a.__chain__=n,a}return i.apply(e,Pn([this.value()],arguments))})})),e}function sc(){}var rc=Ut(Sn),cc=Ut(Cn),pc=Ut(Ln);function uc(e){return ho(e)?Wn(Io(e)):function(e){return function(n){return yi(n,e)}}(e)}var lc=Nt(),dc=Nt(!0);function mc(){return[]}function fc(){return!1}var xc,vc=Bt((function(e,n){return e+n}),0),hc=Wt("ceil"),bc=Bt((function(e,n){return e/n}),1),gc=Wt("floor"),yc=Bt((function(e,n){return e*n}),1),_c=Wt("round"),wc=Bt((function(e,n){return e-n}),0);return Fa.after=function(e,n){if("function"!=typeof n)throw new Oe(o);return e=dr(e),function(){if(--e<1)return n.apply(this,arguments)}},Fa.ary=Es,Fa.assign=hr,Fa.assignIn=br,Fa.assignInWith=gr,Fa.assignWith=yr,Fa.at=_r,Fa.before=Rs,Fa.bind=Os,Fa.bindAll=Zr,Fa.bindKey=Cs,Fa.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ms(e)?e:[e]},Fa.chain=us,Fa.chunk=function(e,n,a){n=(a?vo(e,n,a):n===t)?1:xa(dr(n),0);var o=null==e?0:e.length;if(!o||n<1)return[];for(var s=0,r=0,c=i(mn(o/n));s<o;)c[r++]=Qi(e,s,s+=n);return c},Fa.compact=function(e){for(var n=-1,a=null==e?0:e.length,i=0,t=[];++n<a;){var o=e[n];o&&(t[i++]=o)}return t},Fa.concat=function(){var e=arguments.length;if(!e)return[];for(var n=i(e-1),a=arguments[0],t=e;t--;)n[t-1]=arguments[t];return Pn(Ms(a)?Et(a):[a],fi(n,1))},Fa.cond=function(e){var n=null==e?0:e.length,a=to();return e=n?Sn(e,(function(e){if("function"!=typeof e[1])throw new Oe(o);return[a(e[0]),e[1]]})):[],Hi((function(a){for(var i=-1;++i<n;){var t=e[i];if(kn(t[0],this,a))return kn(t[1],this,a)}}))},Fa.conforms=function(e){return function(e){var n=Ar(e);return function(a){return si(a,e,n)}}(oi(e,1))},Fa.constant=Xr,Fa.countBy=ms,Fa.create=function(e,n){var a=Ba(e);return null==n?a:ni(a,n)},Fa.curry=function e(n,a,i){var o=Jt(n,8,t,t,t,t,t,a=i?t:a);return o.placeholder=e.placeholder,o},Fa.curryRight=function e(n,a,i){var o=Jt(n,16,t,t,t,t,t,a=i?t:a);return o.placeholder=e.placeholder,o},Fa.debounce=As,Fa.defaults=wr,Fa.defaultsDeep=jr,Fa.defer=Ts,Fa.delay=zs,Fa.difference=Bo,Fa.differenceBy=Uo,Fa.differenceWith=Do,Fa.drop=function(e,n,a){var i=null==e?0:e.length;return i?Qi(e,(n=a||n===t?1:dr(n))<0?0:n,i):[]},Fa.dropRight=function(e,n,a){var i=null==e?0:e.length;return i?Qi(e,0,(n=i-(n=a||n===t?1:dr(n)))<0?0:n):[]},Fa.dropRightWhile=function(e,n){return e&&e.length?pt(e,to(n,3),!0,!0):[]},Fa.dropWhile=function(e,n){return e&&e.length?pt(e,to(n,3),!0):[]},Fa.fill=function(e,n,a,i){var o=null==e?0:e.length;return o?(a&&"number"!=typeof a&&vo(e,n,a)&&(a=0,i=o),function(e,n,a,i){var o=e.length;for((a=dr(a))<0&&(a=-a>o?0:o+a),(i=i===t||i>o?o:dr(i))<0&&(i+=o),i=a>i?0:mr(i);a<i;)e[a++]=n;return e}(e,n,a,i)):[]},Fa.filter=function(e,n){return(Ms(e)?An:mi)(e,to(n,3))},Fa.flatMap=function(e,n){return fi(_s(e,n),1)},Fa.flatMapDeep=function(e,n){return fi(_s(e,n),u)},Fa.flatMapDepth=function(e,n,a){return a=a===t?1:dr(a),fi(_s(e,n),a)},Fa.flatten=$o,Fa.flattenDeep=function(e){return null!=e&&e.length?fi(e,u):[]},Fa.flattenDepth=function(e,n){return null!=e&&e.length?fi(e,n=n===t?1:dr(n)):[]},Fa.flip=function(e){return Jt(e,512)},Fa.flow=Qr,Fa.flowRight=ec,Fa.fromPairs=function(e){for(var n=-1,a=null==e?0:e.length,i={};++n<a;){var t=e[n];i[t[0]]=t[1]}return i},Fa.functions=function(e){return null==e?[]:gi(e,Ar(e))},Fa.functionsIn=function(e){return null==e?[]:gi(e,Tr(e))},Fa.groupBy=bs,Fa.initial=function(e){return null!=e&&e.length?Qi(e,0,-1):[]},Fa.intersection=Yo,Fa.intersectionBy=Ho,Fa.intersectionWith=Jo,Fa.invert=Rr,Fa.invertBy=Or,Fa.invokeMap=gs,Fa.iteratee=ac,Fa.keyBy=ys,Fa.keys=Ar,Fa.keysIn=Tr,Fa.map=_s,Fa.mapKeys=function(e,n){var a={};return n=to(n,3),hi(e,(function(e,i,t){ai(a,n(e,i,t),e)})),a},Fa.mapValues=function(e,n){var a={};return n=to(n,3),hi(e,(function(e,i,t){ai(a,i,n(e,i,t))})),a},Fa.matches=function(e){return Li(oi(e,1))},Fa.matchesProperty=function(e,n){return Fi(e,oi(n,1))},Fa.memoize=Ss,Fa.merge=zr,Fa.mergeWith=Sr,Fa.method=ic,Fa.methodOf=tc,Fa.mixin=oc,Fa.negate=Ps,Fa.nthArg=function(e){return e=dr(e),Hi((function(n){return Ui(n,e)}))},Fa.omit=Pr,Fa.omitBy=function(e,n){return Ir(e,Ps(to(n)))},Fa.once=function(e){return Rs(2,e)},Fa.orderBy=function(e,n,a,i){return null==e?[]:(Ms(n)||(n=null==n?[]:[n]),Ms(a=i?t:a)||(a=null==a?[]:[a]),Di(e,n,a))},Fa.over=rc,Fa.overArgs=qs,Fa.overEvery=cc,Fa.overSome=pc,Fa.partial=Is,Fa.partialRight=Ls,Fa.partition=ws,Fa.pick=qr,Fa.pickBy=Ir,Fa.property=uc,Fa.propertyOf=function(e){return function(n){return null==e?t:yi(e,n)}},Fa.pull=Ko,Fa.pullAll=Go,Fa.pullAllBy=function(e,n,a){return e&&e.length&&n&&n.length?Mi(e,n,to(a,2)):e},Fa.pullAllWith=function(e,n,a){return e&&e.length&&n&&n.length?Mi(e,n,t,a):e},Fa.pullAt=Zo,Fa.range=lc,Fa.rangeRight=dc,Fa.rearg=Fs,Fa.reject=function(e,n){return(Ms(e)?An:mi)(e,Ps(to(n,3)))},Fa.remove=function(e,n){var a=[];if(!e||!e.length)return a;var i=-1,t=[],o=e.length;for(n=to(n,3);++i<o;){var s=e[i];n(s,i,e)&&(a.push(s),t.push(i))}return $i(e,t),a},Fa.rest=function(e,n){if("function"!=typeof e)throw new Oe(o);return Hi(e,n=n===t?n:dr(n))},Fa.reverse=Xo,Fa.sampleSize=function(e,n,a){return n=(a?vo(e,n,a):n===t)?1:dr(n),(Ms(e)?Ka:Vi)(e,n)},Fa.set=function(e,n,a){return null==e?e:Ki(e,n,a)},Fa.setWith=function(e,n,a,i){return i="function"==typeof i?i:t,null==e?e:Ki(e,n,a,i)},Fa.shuffle=function(e){return(Ms(e)?Ga:Xi)(e)},Fa.slice=function(e,n,a){var i=null==e?0:e.length;return i?(a&&"number"!=typeof a&&vo(e,n,a)?(n=0,a=i):(n=null==n?0:dr(n),a=a===t?i:dr(a)),Qi(e,n,a)):[]},Fa.sortBy=js,Fa.sortedUniq=function(e){return e&&e.length?it(e):[]},Fa.sortedUniqBy=function(e,n){return e&&e.length?it(e,to(n,2)):[]},Fa.split=function(e,n,a){return a&&"number"!=typeof a&&vo(e,n,a)&&(n=a=t),(a=a===t?m:a>>>0)?(e=vr(e))&&("string"==typeof n||null!=n&&!ir(n))&&!(n=ot(n))&&ta(e)?ht(ua(e),0,a):e.split(n,a):[]},Fa.spread=function(e,n){if("function"!=typeof e)throw new Oe(o);return n=null==n?0:xa(dr(n),0),Hi((function(a){var i=a[n],t=ht(a,0,n);return i&&Pn(t,i),kn(e,this,t)}))},Fa.tail=function(e){var n=null==e?0:e.length;return n?Qi(e,1,n):[]},Fa.take=function(e,n,a){return e&&e.length?Qi(e,0,(n=a||n===t?1:dr(n))<0?0:n):[]},Fa.takeRight=function(e,n,a){var i=null==e?0:e.length;return i?Qi(e,(n=i-(n=a||n===t?1:dr(n)))<0?0:n,i):[]},Fa.takeRightWhile=function(e,n){return e&&e.length?pt(e,to(n,3),!1,!0):[]},Fa.takeWhile=function(e,n){return e&&e.length?pt(e,to(n,3)):[]},Fa.tap=function(e,n){return n(e),e},Fa.throttle=function(e,n,a){var i=!0,t=!0;if("function"!=typeof e)throw new Oe(o);return Xs(a)&&(i="leading"in a?!!a.leading:i,t="trailing"in a?!!a.trailing:t),As(e,n,{leading:i,maxWait:n,trailing:t})},Fa.thru=ls,Fa.toArray=ur,Fa.toPairs=Lr,Fa.toPairsIn=Fr,Fa.toPath=function(e){return Ms(e)?Sn(e,Io):sr(e)?[e]:Et(qo(vr(e)))},Fa.toPlainObject=xr,Fa.transform=function(e,n,a){var i=Ms(e),t=i||Hs(e)||rr(e);if(n=to(n,4),null==a){var o=e&&e.constructor;a=t?i?new o:[]:Xs(e)&&Ks(o)?Ba(We(e)):{}}return(t?Rn:hi)(e,(function(e,i,t){return n(a,e,i,t)})),a},Fa.unary=function(e){return Es(e,1)},Fa.union=Qo,Fa.unionBy=es,Fa.unionWith=ns,Fa.uniq=function(e){return e&&e.length?st(e):[]},Fa.uniqBy=function(e,n){return e&&e.length?st(e,to(n,2)):[]},Fa.uniqWith=function(e,n){return n="function"==typeof n?n:t,e&&e.length?st(e,t,n):[]},Fa.unset=function(e,n){return null==e||rt(e,n)},Fa.unzip=as,Fa.unzipWith=is,Fa.update=function(e,n,a){return null==e?e:ct(e,n,ft(a))},Fa.updateWith=function(e,n,a,i){return i="function"==typeof i?i:t,null==e?e:ct(e,n,ft(a),i)},Fa.values=Br,Fa.valuesIn=function(e){return null==e?[]:Zn(e,Tr(e))},Fa.without=ts,Fa.words=Kr,Fa.wrap=function(e,n){return Is(ft(n),e)},Fa.xor=os,Fa.xorBy=ss,Fa.xorWith=rs,Fa.zip=cs,Fa.zipObject=function(e,n){return dt(e||[],n||[],Xa)},Fa.zipObjectDeep=function(e,n){return dt(e||[],n||[],Ki)},Fa.zipWith=ps,Fa.entries=Lr,Fa.entriesIn=Fr,Fa.extend=br,Fa.extendWith=gr,oc(Fa,Fa),Fa.add=vc,Fa.attempt=Gr,Fa.camelCase=Ur,Fa.capitalize=Dr,Fa.ceil=hc,Fa.clamp=function(e,n,a){return a===t&&(a=n,n=t),a!==t&&(a=(a=fr(a))==a?a:0),n!==t&&(n=(n=fr(n))==n?n:0),ti(fr(e),n,a)},Fa.clone=function(e){return oi(e,4)},Fa.cloneDeep=function(e){return oi(e,5)},Fa.cloneDeepWith=function(e,n){return oi(e,5,n="function"==typeof n?n:t)},Fa.cloneWith=function(e,n){return oi(e,4,n="function"==typeof n?n:t)},Fa.conformsTo=function(e,n){return null==n||si(e,n,Ar(n))},Fa.deburr=Nr,Fa.defaultTo=function(e,n){return null==e||e!=e?n:e},Fa.divide=bc,Fa.endsWith=function(e,n,a){e=vr(e),n=ot(n);var i=e.length,o=a=a===t?i:ti(dr(a),0,i);return(a-=n.length)>=0&&e.slice(a,o)==n},Fa.eq=Bs,Fa.escape=function(e){return(e=vr(e))&&V.test(e)?e.replace(H,aa):e},Fa.escapeRegExp=function(e){return(e=vr(e))&&ae.test(e)?e.replace(ne,"\\$&"):e},Fa.every=function(e,n,a){var i=Ms(e)?Cn:li;return a&&vo(e,n,a)&&(n=t),i(e,to(n,3))},Fa.find=fs,Fa.findIndex=No,Fa.findKey=function(e,n){return Bn(e,to(n,3),hi)},Fa.findLast=xs,Fa.findLastIndex=Mo,Fa.findLastKey=function(e,n){return Bn(e,to(n,3),bi)},Fa.floor=gc,Fa.forEach=vs,Fa.forEachRight=hs,Fa.forIn=function(e,n){return null==e?e:xi(e,to(n,3),Tr)},Fa.forInRight=function(e,n){return null==e?e:vi(e,to(n,3),Tr)},Fa.forOwn=function(e,n){return e&&hi(e,to(n,3))},Fa.forOwnRight=function(e,n){return e&&bi(e,to(n,3))},Fa.get=kr,Fa.gt=Us,Fa.gte=Ds,Fa.has=function(e,n){return null!=e&&lo(e,n,ki)},Fa.hasIn=Er,Fa.head=Wo,Fa.identity=nc,Fa.includes=function(e,n,a,i){e=Ws(e)?e:Br(e),a=a&&!i?dr(a):0;var t=e.length;return a<0&&(a=xa(t+a,0)),or(e)?a<=t&&e.indexOf(n,a)>-1:!!t&&Dn(e,n,a)>-1},Fa.indexOf=function(e,n,a){var i=null==e?0:e.length;if(!i)return-1;var t=null==a?0:dr(a);return t<0&&(t=xa(i+t,0)),Dn(e,n,t)},Fa.inRange=function(e,n,a){return n=lr(n),a===t?(a=n,n=0):a=lr(a),function(e,n,a){return e>=va(n,a)&&e<xa(n,a)}(e=fr(e),n,a)},Fa.invoke=Cr,Fa.isArguments=Ns,Fa.isArray=Ms,Fa.isArrayBuffer=$s,Fa.isArrayLike=Ws,Fa.isArrayLikeObject=Ys,Fa.isBoolean=function(e){return!0===e||!1===e||Qs(e)&&wi(e)==h},Fa.isBuffer=Hs,Fa.isDate=Js,Fa.isElement=function(e){return Qs(e)&&1===e.nodeType&&!ar(e)},Fa.isEmpty=function(e){if(null==e)return!0;if(Ws(e)&&(Ms(e)||"string"==typeof e||"function"==typeof e.splice||Hs(e)||rr(e)||Ns(e)))return!e.length;var n=uo(e);if(n==w||n==O)return!e.size;if(yo(e))return!Pi(e).length;for(var a in e)if(Pe.call(e,a))return!1;return!0},Fa.isEqual=function(e,n){return Ai(e,n)},Fa.isEqualWith=function(e,n,a){var i=(a="function"==typeof a?a:t)?a(e,n):t;return i===t?Ai(e,n,t,a):!!i},Fa.isError=Vs,Fa.isFinite=function(e){return"number"==typeof e&&Fn(e)},Fa.isFunction=Ks,Fa.isInteger=Gs,Fa.isLength=Zs,Fa.isMap=er,Fa.isMatch=function(e,n){return e===n||Ti(e,n,so(n))},Fa.isMatchWith=function(e,n,a){return a="function"==typeof a?a:t,Ti(e,n,so(n),a)},Fa.isNaN=function(e){return nr(e)&&e!=+e},Fa.isNative=function(e){if(go(e))throw new _e("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return zi(e)},Fa.isNil=function(e){return null==e},Fa.isNull=function(e){return null===e},Fa.isNumber=nr,Fa.isObject=Xs,Fa.isObjectLike=Qs,Fa.isPlainObject=ar,Fa.isRegExp=ir,Fa.isSafeInteger=function(e){return Gs(e)&&e>=-9007199254740991&&e<=l},Fa.isSet=tr,Fa.isString=or,Fa.isSymbol=sr,Fa.isTypedArray=rr,Fa.isUndefined=function(e){return e===t},Fa.isWeakMap=function(e){return Qs(e)&&uo(e)==T},Fa.isWeakSet=function(e){return Qs(e)&&"[object WeakSet]"==wi(e)},Fa.join=function(e,n){return null==e?"":Yn.call(e,n)},Fa.kebabCase=Mr,Fa.last=Vo,Fa.lastIndexOf=function(e,n,a){var i=null==e?0:e.length;if(!i)return-1;var o=i;return a!==t&&(o=(o=dr(a))<0?xa(i+o,0):va(o,i-1)),n==n?function(e,n,a){for(var i=a+1;i--;)if(e[i]===n)return i;return i}(e,n,o):Un(e,Mn,o,!0)},Fa.lowerCase=$r,Fa.lowerFirst=Wr,Fa.lt=cr,Fa.lte=pr,Fa.max=function(e){return e&&e.length?di(e,nc,ji):t},Fa.maxBy=function(e,n){return e&&e.length?di(e,to(n,2),ji):t},Fa.mean=function(e){return $n(e,nc)},Fa.meanBy=function(e,n){return $n(e,to(n,2))},Fa.min=function(e){return e&&e.length?di(e,nc,qi):t},Fa.minBy=function(e,n){return e&&e.length?di(e,to(n,2),qi):t},Fa.stubArray=mc,Fa.stubFalse=fc,Fa.stubObject=function(){return{}},Fa.stubString=function(){return""},Fa.stubTrue=function(){return!0},Fa.multiply=yc,Fa.nth=function(e,n){return e&&e.length?Ui(e,dr(n)):t},Fa.noConflict=function(){return dn._===this&&(dn._=Be),this},Fa.noop=sc,Fa.now=ks,Fa.pad=function(e,n,a){e=vr(e);var i=(n=dr(n))?pa(e):0;if(!n||i>=n)return e;var t=(n-i)/2;return Dt(fn(t),a)+e+Dt(mn(t),a)},Fa.padEnd=function(e,n,a){e=vr(e);var i=(n=dr(n))?pa(e):0;return n&&i<n?e+Dt(n-i,a):e},Fa.padStart=function(e,n,a){e=vr(e);var i=(n=dr(n))?pa(e):0;return n&&i<n?Dt(n-i,a)+e:e},Fa.parseInt=function(e,n,a){return a||null==n?n=0:n&&(n=+n),ba(vr(e).replace(ie,""),n||0)},Fa.random=function(e,n,a){if(a&&"boolean"!=typeof a&&vo(e,n,a)&&(n=a=t),a===t&&("boolean"==typeof n?(a=n,n=t):"boolean"==typeof e&&(a=e,e=t)),e===t&&n===t?(e=0,n=1):(e=lr(e),n===t?(n=e,e=0):n=lr(n)),e>n){var i=e;e=n,n=i}if(a||e%1||n%1){var o=ga();return va(e+o*(n-e+cn("1e-"+((o+"").length-1))),n)}return Wi(e,n)},Fa.reduce=function(e,n,a){var i=Ms(e)?qn:Hn,t=arguments.length<3;return i(e,to(n,4),a,t,pi)},Fa.reduceRight=function(e,n,a){var i=Ms(e)?In:Hn,t=arguments.length<3;return i(e,to(n,4),a,t,ui)},Fa.repeat=function(e,n,a){return n=(a?vo(e,n,a):n===t)?1:dr(n),Yi(vr(e),n)},Fa.replace=function(){var e=arguments,n=vr(e[0]);return e.length<3?n:n.replace(e[1],e[2])},Fa.result=function(e,n,a){var i=-1,o=(n=xt(n,e)).length;for(o||(o=1,e=t);++i<o;){var s=null==e?t:e[Io(n[i])];s===t&&(i=o,s=a),e=Ks(s)?s.call(e):s}return e},Fa.round=_c,Fa.runInContext=e,Fa.sample=function(e){return(Ms(e)?Va:Ji)(e)},Fa.size=function(e){if(null==e)return 0;if(Ws(e))return or(e)?pa(e):e.length;var n=uo(e);return n==w||n==O?e.size:Pi(e).length},Fa.snakeCase=Yr,Fa.some=function(e,n,a){var i=Ms(e)?Ln:et;return a&&vo(e,n,a)&&(n=t),i(e,to(n,3))},Fa.sortedIndex=function(e,n){return nt(e,n)},Fa.sortedIndexBy=function(e,n,a){return at(e,n,to(a,2))},Fa.sortedIndexOf=function(e,n){var a=null==e?0:e.length;if(a){var i=nt(e,n);if(i<a&&Bs(e[i],n))return i}return-1},Fa.sortedLastIndex=function(e,n){return nt(e,n,!0)},Fa.sortedLastIndexBy=function(e,n,a){return at(e,n,to(a,2),!0)},Fa.sortedLastIndexOf=function(e,n){if(null!=e&&e.length){var a=nt(e,n,!0)-1;if(Bs(e[a],n))return a}return-1},Fa.startCase=Hr,Fa.startsWith=function(e,n,a){return e=vr(e),a=null==a?0:ti(dr(a),0,e.length),n=ot(n),e.slice(a,a+n.length)==n},Fa.subtract=wc,Fa.sum=function(e){return e&&e.length?Jn(e,nc):0},Fa.sumBy=function(e,n){return e&&e.length?Jn(e,to(n,2)):0},Fa.template=function(e,n,a){var i=Fa.templateSettings;a&&vo(e,n,a)&&(n=t),e=vr(e),n=gr({},n,i,Vt);var o,s,r=gr({},n.imports,i.imports,Vt),c=Ar(r),p=Zn(r,c),u=0,l=n.interpolate||ge,d="__p += '",m=Ee((n.escape||ge).source+"|"+l.source+"|"+(l===Z?le:ge).source+"|"+(n.evaluate||ge).source+"|$","g"),f="//# sourceURL="+(Pe.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++tn+"]")+"\n";e.replace(m,(function(n,a,i,t,r,c){return i||(i=t),d+=e.slice(u,c).replace(ye,ia),a&&(o=!0,d+="' +\n__e("+a+") +\n'"),r&&(s=!0,d+="';\n"+r+";\n__p += '"),i&&(d+="' +\n((__t = ("+i+")) == null ? '' : __t) +\n'"),u=c+n.length,n})),d+="';\n";var x=Pe.call(n,"variable")&&n.variable;if(x){if(pe.test(x))throw new _e("Invalid `variable` option passed into `_.template`")}else d="with (obj) {\n"+d+"\n}\n";d=(s?d.replace(M,""):d).replace($,"$1").replace(W,"$1;"),d="function("+(x||"obj")+") {\n"+(x?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var v=Gr((function(){return we(c,f+"return "+d).apply(t,p)}));if(v.source=d,Vs(v))throw v;return v},Fa.times=function(e,n){if((e=dr(e))<1||e>l)return[];var a=m,i=va(e,m);n=to(n),e-=m;for(var t=Vn(i,n);++a<e;)n(a);return t},Fa.toFinite=lr,Fa.toInteger=dr,Fa.toLength=mr,Fa.toLower=function(e){return vr(e).toLowerCase()},Fa.toNumber=fr,Fa.toSafeInteger=function(e){return e?ti(dr(e),-9007199254740991,l):0===e?e:0},Fa.toString=vr,Fa.toUpper=function(e){return vr(e).toUpperCase()},Fa.trim=function(e,n,a){if((e=vr(e))&&(a||n===t))return Kn(e);if(!e||!(n=ot(n)))return e;var i=ua(e),o=ua(n);return ht(i,Qn(i,o),ea(i,o)+1).join("")},Fa.trimEnd=function(e,n,a){if((e=vr(e))&&(a||n===t))return e.slice(0,la(e)+1);if(!e||!(n=ot(n)))return e;var i=ua(e);return ht(i,0,ea(i,ua(n))+1).join("")},Fa.trimStart=function(e,n,a){if((e=vr(e))&&(a||n===t))return e.replace(ie,"");if(!e||!(n=ot(n)))return e;var i=ua(e);return ht(i,Qn(i,ua(n))).join("")},Fa.truncate=function(e,n){var a=30,i="...";if(Xs(n)){var o="separator"in n?n.separator:o;a="length"in n?dr(n.length):a,i="omission"in n?ot(n.omission):i}var s=(e=vr(e)).length;if(ta(e)){var r=ua(e);s=r.length}if(a>=s)return e;var c=a-pa(i);if(c<1)return i;var p=r?ht(r,0,c).join(""):e.slice(0,c);if(o===t)return p+i;if(r&&(c+=p.length-c),ir(o)){if(e.slice(c).search(o)){var u,l=p;for(o.global||(o=Ee(o.source,vr(de.exec(o))+"g")),o.lastIndex=0;u=o.exec(l);)var d=u.index;p=p.slice(0,d===t?c:d)}}else if(e.indexOf(ot(o),c)!=c){var m=p.lastIndexOf(o);m>-1&&(p=p.slice(0,m))}return p+i},Fa.unescape=function(e){return(e=vr(e))&&J.test(e)?e.replace(Y,da):e},Fa.uniqueId=function(e){var n=++qe;return vr(e)+n},Fa.upperCase=Jr,Fa.upperFirst=Vr,Fa.each=vs,Fa.eachRight=hs,Fa.first=Wo,oc(Fa,(xc={},hi(Fa,(function(e,n){Pe.call(Fa.prototype,n)||(xc[n]=e)})),xc),{chain:!1}),Fa.VERSION="4.17.21",Rn(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Fa[e].placeholder=Fa})),Rn(["drop","take"],(function(e,n){Na.prototype[e]=function(a){a=a===t?1:xa(dr(a),0);var i=this.__filtered__&&!n?new Na(this):this.clone();return i.__filtered__?i.__takeCount__=va(a,i.__takeCount__):i.__views__.push({size:va(a,m),type:e+(i.__dir__<0?"Right":"")}),i},Na.prototype[e+"Right"]=function(n){return this.reverse()[e](n).reverse()}})),Rn(["filter","map","takeWhile"],(function(e,n){var a=n+1,i=1==a||3==a;Na.prototype[e]=function(e){var n=this.clone();return n.__iteratees__.push({iteratee:to(e,3),type:a}),n.__filtered__=n.__filtered__||i,n}})),Rn(["head","last"],(function(e,n){var a="take"+(n?"Right":"");Na.prototype[e]=function(){return this[a](1).value()[0]}})),Rn(["initial","tail"],(function(e,n){var a="drop"+(n?"":"Right");Na.prototype[e]=function(){return this.__filtered__?new Na(this):this[a](1)}})),Na.prototype.compact=function(){return this.filter(nc)},Na.prototype.find=function(e){return this.filter(e).head()},Na.prototype.findLast=function(e){return this.reverse().find(e)},Na.prototype.invokeMap=Hi((function(e,n){return"function"==typeof e?new Na(this):this.map((function(a){return Oi(a,e,n)}))})),Na.prototype.reject=function(e){return this.filter(Ps(to(e)))},Na.prototype.slice=function(e,n){e=dr(e);var a=this;return a.__filtered__&&(e>0||n<0)?new Na(a):(e<0?a=a.takeRight(-e):e&&(a=a.drop(e)),n!==t&&(a=(n=dr(n))<0?a.dropRight(-n):a.take(n-e)),a)},Na.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Na.prototype.toArray=function(){return this.take(m)},hi(Na.prototype,(function(e,n){var a=/^(?:filter|find|map|reject)|While$/.test(n),i=/^(?:head|last)$/.test(n),o=Fa[i?"take"+("last"==n?"Right":""):n],s=i||/^find/.test(n);o&&(Fa.prototype[n]=function(){var n=this.__wrapped__,r=i?[1]:arguments,c=n instanceof Na,p=r[0],u=c||Ms(n),l=function(e){var n=o.apply(Fa,Pn([e],r));return i&&d?n[0]:n};u&&a&&"function"==typeof p&&1!=p.length&&(c=u=!1);var d=this.__chain__,m=!!this.__actions__.length,f=s&&!d,x=c&&!m;if(!s&&u){n=x?n:new Na(this);var v=e.apply(n,r);return v.__actions__.push({func:ls,args:[l],thisArg:t}),new Da(v,d)}return f&&x?e.apply(this,r):(v=this.thru(l),f?i?v.value()[0]:v.value():v)})})),Rn(["pop","push","shift","sort","splice","unshift"],(function(e){var n=Ce[e],a=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|shift)$/.test(e);Fa.prototype[e]=function(){var e=arguments;if(i&&!this.__chain__){var t=this.value();return n.apply(Ms(t)?t:[],e)}return this[a]((function(a){return n.apply(Ms(a)?a:[],e)}))}})),hi(Na.prototype,(function(e,n){var a=Fa[n];if(a){var i=a.name+"";Pe.call(Ca,i)||(Ca[i]=[]),Ca[i].push({name:n,func:a})}})),Ca[Lt(t,2).name]=[{name:"wrapper",func:t}],Na.prototype.clone=function(){var e=new Na(this.__wrapped__);return e.__actions__=Et(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Et(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Et(this.__views__),e},Na.prototype.reverse=function(){if(this.__filtered__){var e=new Na(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Na.prototype.value=function(){var e=this.__wrapped__.value(),n=this.__dir__,a=Ms(e),i=n<0,t=a?e.length:0,o=function(e,n,a){for(var i=-1,t=a.length;++i<t;){var o=a[i],s=o.size;switch(o.type){case"drop":e+=s;break;case"dropRight":n-=s;break;case"take":n=va(n,e+s);break;case"takeRight":e=xa(e,n-s)}}return{start:e,end:n}}(0,t,this.__views__),s=o.start,r=o.end,c=r-s,p=i?r:s-1,u=this.__iteratees__,l=u.length,d=0,m=va(c,this.__takeCount__);if(!a||!i&&t==c&&m==c)return ut(e,this.__actions__);var f=[];e:for(;c--&&d<m;){for(var x=-1,v=e[p+=n];++x<l;){var h=u[x],b=h.iteratee,g=h.type,y=b(v);if(2==g)v=y;else if(!y){if(1==g)continue e;break e}}f[d++]=v}return f},Fa.prototype.at=ds,Fa.prototype.chain=function(){return us(this)},Fa.prototype.commit=function(){return new Da(this.value(),this.__chain__)},Fa.prototype.next=function(){this.__values__===t&&(this.__values__=ur(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?t:this.__values__[this.__index__++]}},Fa.prototype.plant=function(e){for(var n,a=this;a instanceof Ua;){var i=Fo(a);i.__index__=0,i.__values__=t,n?o.__wrapped__=i:n=i;var o=i;a=a.__wrapped__}return o.__wrapped__=e,n},Fa.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Na){var n=e;return this.__actions__.length&&(n=new Na(this)),(n=n.reverse()).__actions__.push({func:ls,args:[Xo],thisArg:t}),new Da(n,this.__chain__)}return this.thru(Xo)},Fa.prototype.toJSON=Fa.prototype.valueOf=Fa.prototype.value=function(){return ut(this.__wrapped__,this.__actions__)},Fa.prototype.first=Fa.prototype.head,Ke&&(Fa.prototype[Ke]=function(){return this}),Fa}();dn._=ma,(i=function(){return ma}.call(n,a,n,e))===t||(e.exports=i)}.call(this)},5234:(e,n,a)=>{e.exports=a(3765)},983:(e,n,a)=>{"use strict";var i,t,o,s=a(5234),r=a(1017).extname,c=/^\s*([^;\s]*)(?:;|\s|$)/,p=/^text\//i;function u(e){if(!e||"string"!=typeof e)return!1;var n=c.exec(e),a=n&&s[n[1].toLowerCase()];return a&&a.charset?a.charset:!(!n||!p.test(n[1]))&&"UTF-8"}n.charset=u,n.charsets={lookup:u},n.contentType=function(e){if(!e||"string"!=typeof e)return!1;var a=-1===e.indexOf("/")?n.lookup(e):e;if(!a)return!1;if(-1===a.indexOf("charset")){var i=n.charset(a);i&&(a+="; charset="+i.toLowerCase())}return a},n.extension=function(e){if(!e||"string"!=typeof e)return!1;var a=c.exec(e),i=a&&n.extensions[a[1].toLowerCase()];return!(!i||!i.length)&&i[0]},n.extensions=Object.create(null),n.lookup=function(e){if(!e||"string"!=typeof e)return!1;var a=r("x."+e).toLowerCase().substr(1);return a&&n.types[a]||!1},n.types=Object.create(null),i=n.extensions,t=n.types,o=["nginx","apache",void 0,"iana"],Object.keys(s).forEach((function(e){var n=s[e],a=n.extensions;if(a&&a.length){i[e]=a;for(var r=0;r<a.length;r++){var c=a[r];if(t[c]){var p=o.indexOf(s[t[c]].source),u=o.indexOf(n.source);if("application/octet-stream"!==t[c]&&(p>u||p===u&&"application/"===t[c].substr(0,12)))continue}t[c]=e}}}))},7824:e=>{var n=1e3,a=60*n,i=60*a,t=24*i;function o(e,n,a,i){var t=n>=1.5*a;return Math.round(e/a)+" "+i+(t?"s":"")}e.exports=function(e,s){s=s||{};var r,c,p=typeof e;if("string"===p&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(o){var s=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"weeks":case"week":case"w":return 6048e5*s;case"days":case"day":case"d":return s*t;case"hours":case"hour":case"hrs":case"hr":case"h":return s*i;case"minutes":case"minute":case"mins":case"min":case"m":return s*a;case"seconds":case"second":case"secs":case"sec":case"s":return s*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}(e);if("number"===p&&isFinite(e))return s.long?(r=e,(c=Math.abs(r))>=t?o(r,c,t,"day"):c>=i?o(r,c,i,"hour"):c>=a?o(r,c,a,"minute"):c>=n?o(r,c,n,"second"):r+" ms"):function(e){var o=Math.abs(e);return o>=t?Math.round(e/t)+"d":o>=i?Math.round(e/i)+"h":o>=a?Math.round(e/a)+"m":o>=n?Math.round(e/n)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},2130:(e,n,a)=>{"use strict";const i=a(2037),t=a(6560),o=process.env;let s;function r(e){const n=function(e){if(!1===s)return 0;if(t("color=16m")||t("color=full")||t("color=truecolor"))return 3;if(t("color=256"))return 2;if(e&&!e.isTTY&&!0!==s)return 0;const n=s?1:0;if("win32"===process.platform){const e=i.release().split(".");return Number(process.versions.node.split(".")[0])>=8&&Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in o)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some((e=>e in o))||"codeship"===o.CI_NAME?1:n;if("TEAMCITY_VERSION"in o)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(o.TEAMCITY_VERSION)?1:0;if("truecolor"===o.COLORTERM)return 3;if("TERM_PROGRAM"in o){const e=parseInt((o.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(o.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(o.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(o.TERM)||"COLORTERM"in o?1:(o.TERM,n)}(e);return function(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}(n)}t("no-color")||t("no-colors")||t("color=false")?s=!1:(t("color")||t("colors")||t("color=true")||t("color=always"))&&(s=!0),"FORCE_COLOR"in o&&(s=0===o.FORCE_COLOR.length||0!==parseInt(o.FORCE_COLOR,10)),e.exports={supportsColor:r,stdout:r(process.stdout),stderr:r(process.stderr)}},9491:e=>{"use strict";e.exports=a(491)},7147:e=>{"use strict";e.exports=a(147)},3685:e=>{"use strict";e.exports=a(685)},5687:e=>{"use strict";e.exports=a(687)},2037:e=>{"use strict";e.exports=a(37)},1017:e=>{"use strict";e.exports=a(17)},2781:e=>{"use strict";e.exports=a(781)},6224:e=>{"use strict";e.exports=a(224)},7310:e=>{"use strict";e.exports=a(310)},3837:e=>{"use strict";e.exports=a(837)},9796:e=>{"use strict";e.exports=a(796)},3765:e=>{"use strict";e.exports=JSON.parse('{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/3gpphal+json":{"source":"iana","compressible":true},"application/3gpphalforms+json":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/ace+cbor":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/at+jwt":{"source":"iana"},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/captive+json":{"source":"iana","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/city+json":{"source":"iana","compressible":true},"application/clr":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true,"extensions":["cpl"]},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dash-patch+xml":{"source":"iana","compressible":true,"extensions":["mpp"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["es","ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/elm+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/elm+xml":{"source":"iana","compressible":true},"application/emergencycalldata.cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/express":{"source":"iana","extensions":["exp"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/jscalendar+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true,"extensions":["mpf"]},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/missing-blocks+cbor-seq":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/oauth-authz-req+jwt":{"source":"iana"},"application/oblivious-dns-message":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{"source":"iana","compressible":true},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p21":{"source":"iana"},"application/p21+zip":{"source":"iana","compressible":false},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana","extensions":["asc"]},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.cyn":{"source":"iana","charset":"7-BIT"},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sarif+json":{"source":"iana","compressible":true},"application/sarif-external-properties+json":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spdx+json":{"source":"iana","compressible":true},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/token-introspection+jwt":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana","extensions":["trig"]},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ubjson":{"compressible":false,"extensions":["ubj"]},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true,"extensions":["td"]},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.5gnas":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gtpc":{"source":"iana"},"application/vnd.3gpp.interworking-data":{"source":"iana"},"application/vnd.3gpp.lpp":{"source":"iana"},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ngap":{"source":"iana"},"application/vnd.3gpp.pfcp":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.s1ap":{"source":"iana"},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.cmoca-cmresource":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-cmtable":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.age":{"source":"iana","extensions":["age"]},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.arrow.file":{"source":"iana"},"application/vnd.apache.arrow.stream":{"source":"iana"},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["key"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.cryptomator.encrypted":{"source":"iana"},"application/vnd.cryptomator.vault":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.cyclonedx+json":{"source":"iana","compressible":true},"application/vnd.cyclonedx+xml":{"source":"iana","compressible":true},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.d3m-dataset":{"source":"iana"},"application/vnd.d3m-problem":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana","extensions":["dbf"]},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.eclipse.ditto+json":{"source":"iana","compressible":true},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eu.kasparian.car+json":{"source":"iana","compressible":true},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.familysearch.gedcom+zip":{"source":"iana","compressible":false},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujifilm.fb.docuworks":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.binder":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.container":{"source":"iana"},"application/vnd.fujifilm.fb.jfi+xml":{"source":"iana","compressible":true},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.slides":{"source":"iana"},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hl7cda+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hl7v2+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana","extensions":["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxar.archive.3tz+zip":{"source":"iana","compressible":false},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.nacamar.ybrid+json":{"source":"iana","compressible":true},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nebumind.line":{"source":"iana"},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+cbor":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.opentimestamps.ots":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana","extensions":["rar"]},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.resilient.logic":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.seis+json":{"source":"iana","compressible":true},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.sycle+xml":{"source":"iana","compressible":true},"application/vnd.syft+json":{"source":"iana","compressible":true},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veritone.aion+json":{"source":"iana","compressible":true},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.dpp":{"source":"iana"},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"source":"iana","compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true,"extensions":["wif"]},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-iwork-keynote-sffkey":{"extensions":["key"]},"application/x-iwork-numbers-sffnumbers":{"extensions":["numbers"]},"application/x-iwork-pages-sffpages":{"extensions":["pages"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xsl","xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana","extensions":["amr"]},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx","opus"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/scip":{"source":"iana"},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sofa":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/tsvcis":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana","extensions":["avci"]},"image/avcs":{"source":"iana","extensions":["avcs"]},"image/avif":{"source":"iana","compressible":false,"extensions":["avif"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/ktx2":{"source":"iana","extensions":["ktx2"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","compressible":true,"extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"compressible":true,"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.pco.b16":{"source":"iana","extensions":["b16"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/e57":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/step":{"source":"iana"},"model/step+xml":{"source":"iana","compressible":true,"extensions":["stpx"]},"model/step+zip":{"source":"iana","compressible":false,"extensions":["stpz"]},"model/step-xml+zip":{"source":"iana","compressible":false,"extensions":["stpxz"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.pytha.pyox":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.sap.vds":{"source":"iana","extensions":["vds"]},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/cql":{"source":"iana"},"text/cql-expression":{"source":"iana"},"text/cql-identifier":{"source":"iana"},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fhirpath":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/gff3":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shaclc":{"source":"iana"},"text/shex":{"source":"iana","extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/spdx":{"source":"iana","extensions":["spdx"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.familysearch.gedcom":{"source":"iana","extensions":["ged"]},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hans":{"source":"iana"},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"compressible":true,"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/av1":{"source":"iana"},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/ffv1":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana","extensions":["m4s"]},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/jxsv":{"source":"iana"},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/scip":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/vp9":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}')}},n={};function i(a){var t=n[a];if(void 0!==t)return t.exports;var o=n[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var a in n)i.o(n,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var t={};return(()=>{"use strict";i.r(t),i.d(t,{DoesNotExist:()=>p,JsonApi:()=>_,JsonApiException:()=>r,MultipleObjectsReturned:()=>u,NotSingleItem:()=>c,Resource:()=>w});var e=i(6486),n=i.n(e),a=i(9669),o=i.n(a);class s{constructor({status:e,code:n,title:a,detail:i,source:t=null}){this.status=e,this.code=n,this.title=a,this.detail=i,this.source=t}toString(){return`<JsonApiError: ${this.status} - ${this.detail}> `}}class r extends Error{constructor(e,n,...a){super(...a),this.statusCode=e,this.errors=n.map((e=>new s(e))),this.message=this.errors.map((e=>e.toString())).join(", "),Error.captureStackTrace&&Error.captureStackTrace(this,r),this.name="JsonApiException"}}class c extends Error{}class p extends c{}class u extends c{}class l{constructor(e={}){this._overwrite(e)}_overwrite({id:e=null,attributes:a={},relationships:i={},links:t={},redirect:o=null,type:s=null,included:r=[],...c}){if(s&&s!==this.constructor.TYPE)throw new Error(`Received type '${s}', expected ${this.constructor.TYPE}`);const p=a,u=i;Object.entries(c).forEach((([e,a])=>{g(a)||b(a)||h(a)&&(f(a)||m(a)&&(g(a.data)||b(a.data)||n().every(a.data,(e=>g(e)||b(e)))))||v(a)&&a.length>0&&n().every(a,(e=>g(e)||b(e)))?u[e]=a:p[e]=a})),this.id=e,this.attributes=p,this.links=t,this.redirect=o,this.relationships=n().pickBy(this.relationships,((e,n)=>n in u)),this.related=n().pickBy(this.related,((e,n)=>n in u));const l={};r.forEach((e=>{const n=`${e.type}__${e.id}`;l[n]=this.constructor.API.asResource(e)})),Object.entries(u).forEach((([e,n])=>{this._setRelated(e,n,l)}))}_setRelated(e,a,i=null){let t=a,o=i;if(o||(o={}),t)if(v(t)||h(t)&&v(t.data)||h(t)&&f(t)&&!m(t)){this.relationships[e]={};const a=this.relationships[e];if(h(t)&&f(t)&&(a.links=t.links),m(t)&&(t=t.data),v(t)){const i=[],s=[];t.forEach((e=>{const n=this.constructor.API.asResource(e),a=n.asResourceIdentifier();i.push(a);const t=`${a.type}__${a.id}`;t in o?s.push(o[t]):s.push(n)})),a.data=i;let r=null;"links"in a&&"related"in a.links&&(r=a.links.related),this.related[e]&&this.related[e].data&&this.related[e].data.length===s.length&&!n().some(n().zip(this.related[e].data,s),(([e,a])=>e.id!==a.id||n().size(a.attributes)>0||n().size(a.relationships)>0))||(this.related[e]=d.fromData(this.constructor.API,s,r))}}else{let a,i,s=null;if(h(t))m(t)?(i=t.data,"links"in t&&(s=t.links)):i=t,a=this.constructor.API.new(i);else{if(!b(t))throw new Error(`Cannot set relationship '${e}'`);a=t,i=a.asResourceIdentifier()}const r=`${i.type}__${i.id}`;r in o&&(a=o[r]),this.relationships[e]={data:i},s&&(this.relationships[e].links=s),((this.related[e]||{}).id!==a.id||n().size(a.attributes)>0||n().size(a.relationships)>0)&&(this.related[e]=a)}else this.relationships[e]=null,this.related[e]=null}get(e){return e in this.related?this.related[e]:this.attributes[e]}set(e,n){e in this.relationships?(this._setRelated(e,n),this.relationships[e]=this.related[e].asRelationship()):this.attributes[e]=n}async reload(e=null){const n=await this.constructor.API.request({method:"get",url:this.getItemUrl(),params:e?{include:e.join(",")}:null});if(n.status>=300&&n.status<400&&n.headers.location)return void this._overwrite({id:this.id,attributes:this.attributes,relationships:{...this.relationships,...this.related},links:this.links,redirect:n.headers.location});const a=n.data,{data:i}=a;"included"in a&&(i.included=a.included),this._overwrite(i)}static async get(e=null,{include:a=null}={}){if(null===e||n().isPlainObject(e)){let n=this.list();return a&&(n=n.include(...a)),n.get(e||{})}const i=new this({id:e});return await i.reload(a),i}async fetch(e,a=!1){if(!(e in this.relationships))throw new Error(`Resource does not have relationship '${e}'`);const i=this.relationships[e];if(x(i))return null;const t=this.related[e];if((!x(o=t)&&o instanceof l&&(n().size(o.attributes)>0||n().size(o.relationships)>0)||function(e){return!x(e)&&e instanceof d}(t))&&!a)return t;var o;if(n().isObject(i.data))return await t.reload(),t;const s=(i.links||{}).related;if(!s)throw new Error(`Cannot fetch ${e}, no 'related' link`);return this.related[e]=new d(this.constructor.API,s),this.related[e]}async save(e=null,a=null){let i=[],t={};e&&a?(i=e,t=a):e&&(n().isArray(e)?i=e:n().isObject(e)&&(t=e)),Object.entries(t).forEach((([e,n])=>{this.set(e,n),i.push(e)})),this.id?await this._saveExisting(i):await this._saveNew(i)}async _saveExisting(e=[]){0===e.length&&(Object.keys(this.attribute).forEach((n=>{e.push(n)})),Object.keys(this.related).forEach((n=>{e.push(n)})));const n={...this.asResourceIdentifier(),...this._generateDataForSaving(e)},a=await this.constructor.API.request({method:"patch",url:this.getItemUrl(),data:{data:n}});this._postSave(a)}async _saveNew(e=[]){0===e.length&&(Object.keys(this.attributes).forEach((n=>{e.push(n)})),Object.keys(this.related).forEach((n=>{e.push(n)})));const n={type:this.constructor.TYPE};this.id&&(n.id=this.id),Object.assign(n,this._generateDataForSaving(e));const a=await this.constructor.API.request({method:"post",url:this.constructor.getCollectionUrl(),data:{data:n}});this._postSave(a)}_generateDataForSaving(e){const n={};return e.forEach((e=>{if(e in this.attributes)"attributes"in n||(n.attributes={}),n.attributes[e]=this.attributes[e];else{if(!(e in this.relationships))throw new Error(`Unknown field '${e}'`);"relationships"in n||(n.relationships={}),n.relationships[e]=this.constructor.API.asResource(this.relationships[e]).asRelationship()}})),n}_postSave(e){const{data:n}=e.data,a={...this.related};Object.entries(a).forEach((([e,i])=>{if(null===n.relationships[e])a[e]=null;else{const t=i.id,o=n.relationships[e].data.id;t!==o&&(o?a[e]=this.constructor.API.new(n.relationships[e]):delete a[e])}}));const i=n.relationships||{};delete n.relationships,Object.assign(i,a),this._overwrite({relationships:i,...n})}static async create(...e){const n=new this(...e);return await n._saveNew(),n}async delete(){await this.constructor.API.request({method:"delete",url:this.getItemUrl()}),this.id=null}async change(e,n){let a=n;if(!(e in this.relationships))throw new Error(`${e} is not a relationship`);a=a&&this.constructor.API.asResource(a),await this._editRelationship("patch",e,a&&a.asResourceIdentifier()),this.relationships[e]||(this.relationships[e]={}),this.relationships[e].data=a&&a.asResourceIdentifier(),(this.related[e]||{}).id!==(a||{}).id&&(this.related[e]=a)}async add(e,n){await this._editPluralRelationship("post",e,n)}async reset(e,n){await this._editPluralRelationship("patch",e,n)}async remove(e,n){await this._editPluralRelationship("delete",e,n)}async _editRelationship(e,a,i){const t=n().get(this,`relationships.${a}.links.self`,`/${this.constructor.TYPE}/${this.id}/relationships/${a}`);await this.constructor.API.request({method:e,url:t,data:{data:i}})}async _editPluralRelationship(e,n,a){const i=a.map((e=>this.constructor.API.asResource(e).asResourceIdentifier()));await this._editRelationship(e,n,i)}static list(){return new d(this.API,this.getCollectionUrl())}static async bulkCreate(e){const a=[];e.forEach((e=>{const i=this.API.asResource(e),t={type:this.TYPE};n().size(i.attributes)&&(t.attributes=i.attributes),n().size(i.relationships)&&(t.relationships=i.relationships),i.id&&(t.id=i.id),a.push(t)}));const i=await this.API.request({method:"post",url:this.getCollectionUrl(),data:{data:a},bulk:!0});return d.fromData(this.API,i.data.data)}static async bulkDelete(e){const a=[];return e.forEach((e=>{b(e)?a.push(e.asResourceIdentifier()):n().isPlainObject(e)?a.push(this.API.asResource(e).asResourceIdentifier()):a.push({type:this.TYPE,id:e})})),await this.API.request({method:"delete",url:this.getCollectionUrl(),data:{data:a},bulk:!0}),a.length}static async bulkUpdate(e,n){const a=[];e.forEach((e=>{const i=this.API.asResource(e),t=i.asResourceIdentifier();n.forEach((e=>{if(e in i.attributes)"attributes"in t||(t.attributes={}),t.attributes[e]=i.attributes[e];else{if(!(e in i.relationships))throw new Error(`${e} is not part of one of the resources`);"relationships"in t||(t.relationships={}),t.relationships[e]=i.relationships[e]}})),a.push(t)}));const i=await this.API.request({method:"patch",url:this.getCollectionUrl(),data:{data:a},bulk:!0});return d.fromData(this.API,i.data.data)}static async createWithForm(...e){const n=(await this.API.request({method:"post",url:this.getCollectionUrl(),...e})).data,{data:a,included:i}=n;return i&&(a.included=i),this.API.new(a)}getItemUrl(){let e=this.links.self;return e||(e=`/${this.constructor.TYPE}/${this.id}`),e}static getCollectionUrl(){return`/${this.TYPE}`}asResourceIdentifier(){return{type:this.constructor.TYPE,id:this.id}}asRelationship(){return{data:this.asResourceIdentifier()}}static extend({TYPE:e,...n}){const a=class extends(this){static TYPE=e};return Object.assign(a.prototype,n),a}}["extra","filter","page","include","sort","fields","all","allPages"].forEach((e=>{l[e]=function(...n){return this.list()[e](...n)}}));class d{constructor(e,n,a=null){this._API=e,this._url=n,this._params=a,this.data=null,this.next=null,this.previous=null}async fetch(){if(!x(this.data))return;const e=await this._API.request({method:"get",url:this._url,params:this._params}),n={};"included"in e.data&&e.data.included.forEach((e=>{const a=`${e.type}__${e.id}`;n[a]=e})),this.data=[],e.data.data.forEach((e=>{const a={};Object.entries(e.relationships||{}).forEach((([e,i])=>{if(x(i)||!m(i))return;const t=`${i.data.type}__${i.data.id}`;t in n&&(a[e]=this._API.new(n[t]))}));const i=e.relationships||{};delete e.relationships,Object.assign(i,a),this.data.push(this._API.new({relationships:i,...e}))})),this.next=(e.data.links||{}).next||null,this.previous=(e.data.links||{}).previous||null}static fromData(e,n,a=""){const i=new this(e,a);return i.data=n,i}async getNext(){const e=new this.constructor(this._API,this.next);return await e.fetch(),e}async getPrevious(){const e=new this.constructor(this._API,this.previous);return await e.fetch(),e}extra(e){const n={...this._params||{},...e};return new this.constructor(this._API,this._url,n)}filter(e){const n={};return Object.entries(e).forEach((([e,a])=>{const i=e.split("__"),t=[`filter[${i[0]}]`];for(let e=1;e<i.length;e++){const n=i[e];t.push(`[${n}]`)}a instanceof l&&(a=a.id),n[t.join("")]=a})),this.extra(n)}page(e){const a={};return n().isPlainObject(e)?Object.entries(e).forEach((([e,n])=>{a[`page[${e}]`]=n})):a.page=e,this.extra(a)}include(...e){return this.extra({include:e.join(",")})}sort(...e){return this.extra({sort:e.join(",")})}fields(...e){return this.extra({fields:e.join(",")})}async get(e={}){const n=this.filter(e);if(await n.fetch(),0===n.data.length)throw new p(`Does not exist for filter: ${JSON.stringify(e)}`);if(n.data.length>1)throw new u(`Multiple objects returned (${n.data.length}) for filter: ${JSON.stringify(e)}`);return n.data[0]}async*allPages(){await this.fetch();let e=this;for(;yield e,e.next;)e=await e.getNext()}async*all(){for await(const e of this.allPages())for(const n of e.data)yield n}}function m(e){return n().isObject(e)&&"data"in e}function f(e){return n().isObject(e)&&"links"in e}function x(e){return!e}function v(e){return n().isArray(e)}function h(e){return n().isPlainObject(e)}function b(e){return e instanceof l}function g(e){return n().isObject(e)&&"type"in e&&"id"in e}function y(e){return e>=200&&e<400}const _=class{static registry={};constructor(e={}){this.host=this.constructor.HOST,this.auth=null,this.registry={},this.setup(e)}setup({host:e,auth:a}={}){e&&(this.host=e),a&&(n().isFunction(a)?this.auth=a:this.auth=()=>({Authorization:`Bearer ${a}`}))}static register(e,n){this.registry[e.TYPE]=e;const a={configurable:!0,enumerable:!0,get:function(){return this.getCls(e.TYPE)}};Object.defineProperty(this.prototype,n,a),Object.defineProperty(this.prototype,e.TYPE,a)}getCls(e){const n=this;let a=n.registry[e];if(!a){const i=n.constructor.registry[e];a=i?class extends i{static API=n}:class extends l{static TYPE=e;static API=n},n.registry[e]=a}return a}async request({url:e,bulk:a=!1,headers:i={},maxRedirects:t=0,...s}){let c=e;"/"===e[0]&&(c=this.host+e);const p=this.auth();let u;p["Content-Type"]=a?'application/vnd.api+json;profile="bulk"':"application/vnd.api+json",Object.assign(p,i);try{u=await o().request({url:c,headers:p,maxRedirects:t,validateStatus:y,...s})}catch(e){const a=n().get(e.response,"data.errors");throw a?new r(e.response.status,a):e}return u}new({type:e,...n}){return new(this.getCls(e))(n)}asResource(e){if(x(e)||b(e))return e;let n=e;return"data"in e&&(n=e.data),this.new(n)}static extend({HOST:e,...n}){const a=class extends(this){static HOST=e};return Object.assign(a.prototype,n),a}},w=l})(),t})(),e.exports=i()},491:e=>{"use strict";e.exports=__nccwpck_require__(491)},147:e=>{"use strict";e.exports=__nccwpck_require__(147)},685:e=>{"use strict";e.exports=__nccwpck_require__(685)},687:e=>{"use strict";e.exports=__nccwpck_require__(687)},37:e=>{"use strict";e.exports=__nccwpck_require__(37)},17:e=>{"use strict";e.exports=__nccwpck_require__(17)},781:e=>{"use strict";e.exports=__nccwpck_require__(781)},224:e=>{"use strict";e.exports=__nccwpck_require__(224)},310:e=>{"use strict";e.exports=__nccwpck_require__(310)},837:e=>{"use strict";e.exports=__nccwpck_require__(837)},796:e=>{"use strict";e.exports=__nccwpck_require__(796)}},n={};function a(i){var t=n[i];if(void 0!==t)return t.exports;var o=n[i]={exports:{}};return e[i](o,o.exports,a),o.exports}a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var i in n)a.o(n,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";a.r(i),a.d(i,{TransifexApi:()=>s,transifexApi:()=>P});var e=a(717);function n(e){return new Promise((n=>{setTimeout((()=>{n()}),1e3*e)}))}async function t({interval:e=5,...a}){const i=await this.create(a);for(;!i.redirect;)await n(e),await i.reload();return i.redirect}async function o({interval:e=5,...a}){const i=await this.create(a);for(;"succeeded"!==i.get("status");)await n(e),await i.reload()}class s extends e.JsonApi{static HOST="https://rest.api.transifex.com"}class r extends e.Resource{static TYPE="organizations"}s.register(r,"Organization");class c extends e.Resource{static TYPE="users"}s.register(c,"User");class p extends e.Resource{static TYPE="languages"}s.register(p,"Language");class u extends e.Resource{static TYPE="projects"}s.register(u,"Project");class l extends e.Resource{static TYPE="project_webhooks"}s.register(l,"ProjectWebhook");class d extends e.Resource{static TYPE="resources";async purge(){let e=0;for await(const n of this.constructor.API.ResourceString.filter({resource:this}).allPages())e+=n.data.length,await this.constructor.API.ResourceString.bulkDelete(n.data);return e}async downloadSource(e={}){return this.constructor.API.ResourceStringsAsyncDownload.download({resource:this,...e})}}s.register(d,"Resource");class m extends e.Resource{static TYPE="resource_strings"}s.register(m,"ResourceString");class f extends e.Resource{static TYPE="resource_strings_async_downloads";static async download(e){return t.call(this,{content_encoding:"text",file_type:"default",...e})}}s.register(f,"ResourceStringsAsyncDownload");class x extends e.Resource{static TYPE="resource_strings_async_uploads";static async upload(e){return o.call(this,{content_encoding:"text",...e})}}s.register(x,"ResourceStringsAsyncUpload");class v extends e.Resource{static TYPE="resource_string_comments"}s.register(v,"ResourceStringComment");class h extends e.Resource{static TYPE="i18n_formats"}s.register(h,"I18nFormat");class b extends e.Resource{static TYPE="context_screenshot_maps"}s.register(b,"ContextScreenshotMap");class g extends e.Resource{static TYPE="context_screenshots"}s.register(g,"ContextScreenshot");class y extends e.Resource{static TYPE="organization_activity_reports_async_downloads";static async download(e){return t.call(this,e)}}s.register(y,"OrganizationActivityReportsAsyncDownload");class _ extends e.Resource{static TYPE="project_activity_reports_async_downloads";static async download(e){return t.call(this,e)}}s.register(_,"ProjectActivityReportsAsyncDownload");class w extends e.Resource{static TYPE="resource_activity_reports_async_downloads";static async download(e){return t.call(this,e)}}s.register(w,"ResourceActivityReportsAsyncDownload");class j extends e.Resource{static TYPE="team_activity_reports_async_downloads";static async download(e){return t.call(this,e)}}s.register(j,"TeamActivityReportsAsyncDownload");class k extends e.Resource{static TYPE="resource_language_stats"}s.register(k,"ResourceLanguageStats");class E extends e.Resource{static TYPE="resource_translations"}s.register(E,"ResourceTranslation");class R extends e.Resource{static TYPE="resource_translations_async_downloads";static async download(e){return t.call(this,{content_encoding:"text",file_type:"default",mode:"default",...e})}}s.register(R,"ResourceTranslationsAsyncDownload");class O extends e.Resource{static TYPE="resource_translations_async_uploads";static async upload(e){return o.call(this,{content_encoding:"text",file_type:"default",...e})}}s.register(O,"ResourceTranslationsAsyncUpload");class C extends e.Resource{static TYPE="team_memberships"}s.register(C,"TeamMembership");class A extends e.Resource{static TYPE="teams"}s.register(A,"Team");class T extends e.Resource{static TYPE="tmx_async_downloads";static async download(e){return t.call(this,{callback_url:null,...e})}}s.register(T,"TmxAsyncDownload");class z extends e.Resource{static TYPE="tmx_async_uploads";static async upload(e){return o.call(this,{content_encoding:"text",...e})}}s.register(z,"TmxAsyncUpload");class S extends e.Resource{static TYPE="resource_strings_revisions"}s.register(S,"ResourceStringsRevision");const P=new s})(),i})()));
//# sourceMappingURL=node.transifexApi.js.map

/***/ }),

/***/ 417:
/***/ ((module) => {


module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    if(a===b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ 717:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var balanced = __nccwpck_require__(417);

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m) return [str];

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  if (/\$$/.test(m.pre)) {    
    for (var k = 0; k < post.length; k++) {
      var expansion = pre+ '{' + m.body + '}' + post[k];
      expansions.push(expansion);
    }
  } else {
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m.body.indexOf(',') >= 0;
    if (!isSequence && !isOptions) {
      // {a},b}
      if (m.post.match(/,.*\}/)) {
        str = m.pre + '{' + m.body + escClose + m.post;
        return expand(str);
      }
      return [str];
    }

    var n;
    if (isSequence) {
      n = m.body.split(/\.\./);
    } else {
      n = parseCommaParts(m.body);
      if (n.length === 1) {
        // x{{a,b}}y ==> x{a}y x{b}y
        n = expand(n[0], false).map(embrace);
        if (n.length === 1) {
          return post.map(function(p) {
            return m.pre + n[0] + p;
          });
        }
      }
    }

    // at this point, n is the parts, and we know it's not a comma set
    // with a single entry.
    var N;

    if (isSequence) {
      var x = numeric(n[0]);
      var y = numeric(n[1]);
      var width = Math.max(n[0].length, n[1].length)
      var incr = n.length == 3
        ? Math.abs(numeric(n[2]))
        : 1;
      var test = lte;
      var reverse = y < x;
      if (reverse) {
        incr *= -1;
        test = gte;
      }
      var pad = n.some(isPadded);

      N = [];

      for (var i = x; test(i, y); i += incr) {
        var c;
        if (isAlphaSequence) {
          c = String.fromCharCode(i);
          if (c === '\\')
            c = '';
        } else {
          c = String(i);
          if (pad) {
            var need = width - c.length;
            if (need > 0) {
              var z = new Array(need + 1).join('0');
              if (i < 0)
                c = '-' + z + c.slice(1);
              else
                c = z + c;
            }
          }
        }
        N.push(c);
      }
    } else {
      N = [];

      for (var j = 0; j < n.length; j++) {
        N.push.apply(N, expand(n[j], false));
      }
    }

    for (var j = 0; j < N.length; j++) {
      for (var k = 0; k < post.length; k++) {
        var expansion = pre + N[j] + post[k];
        if (!isTop || isSequence || expansion)
          expansions.push(expansion);
      }
    }
  }

  return expansions;
}



/***/ }),

/***/ 491:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("assert");

/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs");

/***/ }),

/***/ 685:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("http");

/***/ }),

/***/ 687:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("https");

/***/ }),

/***/ 37:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("os");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("path");

/***/ }),

/***/ 781:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("stream");

/***/ }),

/***/ 224:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("tty");

/***/ }),

/***/ 310:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("url");

/***/ }),

/***/ 837:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("util");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("zlib");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/create fake namespace object */
/******/ (() => {
/******/ 	var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 	var leafPrototypes;
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 16: return value when it's Promise-like
/******/ 	// mode & 8|1: behave like require
/******/ 	__nccwpck_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = this(value);
/******/ 		if(mode & 8) return value;
/******/ 		if(typeof value === 'object' && value) {
/******/ 			if((mode & 4) && value.__esModule) return value;
/******/ 			if((mode & 16) && typeof value.then === 'function') return value;
/******/ 		}
/******/ 		var ns = Object.create(null);
/******/ 		__nccwpck_require__.r(ns);
/******/ 		var def = {};
/******/ 		leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 		for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 			Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 		}
/******/ 		def['default'] = () => (value);
/******/ 		__nccwpck_require__.d(ns, def);
/******/ 		return ns;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nccwpck_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__nccwpck_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/brace-expansion/index.js
var brace_expansion = __nccwpck_require__(717);
;// CONCATENATED MODULE: ./node_modules/minimatch/dist/mjs/brace-expressions.js
// translate the various posix character classes into unicode properties
// this works across all unicode locales
// { <posix class>: [<translation>, /u flag required, negated]
const posixClasses = {
    '[:alnum:]': ['\\p{L}\\p{Nl}\\p{Nd}', true],
    '[:alpha:]': ['\\p{L}\\p{Nl}', true],
    '[:ascii:]': ['\\x' + '00-\\x' + '7f', false],
    '[:blank:]': ['\\p{Zs}\\t', true],
    '[:cntrl:]': ['\\p{Cc}', true],
    '[:digit:]': ['\\p{Nd}', true],
    '[:graph:]': ['\\p{Z}\\p{C}', true, true],
    '[:lower:]': ['\\p{Ll}', true],
    '[:print:]': ['\\p{C}', true],
    '[:punct:]': ['\\p{P}', true],
    '[:space:]': ['\\p{Z}\\t\\r\\n\\v\\f', true],
    '[:upper:]': ['\\p{Lu}', true],
    '[:word:]': ['\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}', true],
    '[:xdigit:]': ['A-Fa-f0-9', false],
};
// only need to escape a few things inside of brace expressions
// escapes: [ \ ] -
const braceEscape = (s) => s.replace(/[[\]\\-]/g, '\\$&');
// escape all regexp magic characters
const regexpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// everything has already been escaped, we just have to join
const rangesToString = (ranges) => ranges.join('');
// takes a glob string at a posix brace expression, and returns
// an equivalent regular expression source, and boolean indicating
// whether the /u flag needs to be applied, and the number of chars
// consumed to parse the character class.
// This also removes out of order ranges, and returns ($.) if the
// entire class just no good.
const parseClass = (glob, position) => {
    const pos = position;
    /* c8 ignore start */
    if (glob.charAt(pos) !== '[') {
        throw new Error('not in a brace expression');
    }
    /* c8 ignore stop */
    const ranges = [];
    const negs = [];
    let i = pos + 1;
    let sawStart = false;
    let uflag = false;
    let escaping = false;
    let negate = false;
    let endPos = pos;
    let rangeStart = '';
    WHILE: while (i < glob.length) {
        const c = glob.charAt(i);
        if ((c === '!' || c === '^') && i === pos + 1) {
            negate = true;
            i++;
            continue;
        }
        if (c === ']' && sawStart && !escaping) {
            endPos = i + 1;
            break;
        }
        sawStart = true;
        if (c === '\\') {
            if (!escaping) {
                escaping = true;
                i++;
                continue;
            }
            // escaped \ char, fall through and treat like normal char
        }
        if (c === '[' && !escaping) {
            // either a posix class, a collation equivalent, or just a [
            for (const [cls, [unip, u, neg]] of Object.entries(posixClasses)) {
                if (glob.startsWith(cls, i)) {
                    // invalid, [a-[] is fine, but not [a-[:alpha]]
                    if (rangeStart) {
                        return ['$.', false, glob.length - pos, true];
                    }
                    i += cls.length;
                    if (neg)
                        negs.push(unip);
                    else
                        ranges.push(unip);
                    uflag = uflag || u;
                    continue WHILE;
                }
            }
        }
        // now it's just a normal character, effectively
        escaping = false;
        if (rangeStart) {
            // throw this range away if it's not valid, but others
            // can still match.
            if (c > rangeStart) {
                ranges.push(braceEscape(rangeStart) + '-' + braceEscape(c));
            }
            else if (c === rangeStart) {
                ranges.push(braceEscape(c));
            }
            rangeStart = '';
            i++;
            continue;
        }
        // now might be the start of a range.
        // can be either c-d or c-] or c<more...>] or c] at this point
        if (glob.startsWith('-]', i + 1)) {
            ranges.push(braceEscape(c + '-'));
            i += 2;
            continue;
        }
        if (glob.startsWith('-', i + 1)) {
            rangeStart = c;
            i += 2;
            continue;
        }
        // not the start of a range, just a single character
        ranges.push(braceEscape(c));
        i++;
    }
    if (endPos < i) {
        // didn't see the end of the class, not a valid class,
        // but might still be valid as a literal match.
        return ['', false, 0, false];
    }
    // if we got no ranges and no negates, then we have a range that
    // cannot possibly match anything, and that poisons the whole glob
    if (!ranges.length && !negs.length) {
        return ['$.', false, glob.length - pos, true];
    }
    // if we got one positive range, and it's a single character, then that's
    // not actually a magic pattern, it's just that one literal character.
    // we should not treat that as "magic", we should just return the literal
    // character. [_] is a perfectly valid way to escape glob magic chars.
    if (negs.length === 0 &&
        ranges.length === 1 &&
        /^\\?.$/.test(ranges[0]) &&
        !negate) {
        const r = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
        return [regexpEscape(r), false, endPos - pos, false];
    }
    const sranges = '[' + (negate ? '^' : '') + rangesToString(ranges) + ']';
    const snegs = '[' + (negate ? '' : '^') + rangesToString(negs) + ']';
    const comb = ranges.length && negs.length
        ? '(' + sranges + '|' + snegs + ')'
        : ranges.length
            ? sranges
            : snegs;
    return [comb, uflag, endPos - pos, true];
};
//# sourceMappingURL=brace-expressions.js.map
;// CONCATENATED MODULE: ./node_modules/minimatch/dist/mjs/escape.js
/**
 * Escape all magic characters in a glob pattern.
 *
 * If the {@link windowsPathsNoEscape | GlobOptions.windowsPathsNoEscape}
 * option is used, then characters are escaped by wrapping in `[]`, because
 * a magic character wrapped in a character class can only be satisfied by
 * that exact character.  In this mode, `\` is _not_ escaped, because it is
 * not interpreted as a magic character, but instead as a path separator.
 */
const escape_escape = (s, { windowsPathsNoEscape = false, } = {}) => {
    // don't need to escape +@! because we escape the parens
    // that make those magic, and escaping ! as [!] isn't valid,
    // because [!]] is a valid glob class meaning not ']'.
    return windowsPathsNoEscape
        ? s.replace(/[?*()[\]]/g, '[$&]')
        : s.replace(/[?*()[\]\\]/g, '\\$&');
};
//# sourceMappingURL=escape.js.map
;// CONCATENATED MODULE: ./node_modules/minimatch/dist/mjs/unescape.js
/**
 * Un-escape a string that has been escaped with {@link escape}.
 *
 * If the {@link windowsPathsNoEscape} option is used, then square-brace
 * escapes are removed, but not backslash escapes.  For example, it will turn
 * the string `'[*]'` into `*`, but it will not turn `'\\*'` into `'*'`,
 * becuase `\` is a path separator in `windowsPathsNoEscape` mode.
 *
 * When `windowsPathsNoEscape` is not set, then both brace escapes and
 * backslash escapes are removed.
 *
 * Slashes (and backslashes in `windowsPathsNoEscape` mode) cannot be escaped
 * or unescaped.
 */
const unescape_unescape = (s, { windowsPathsNoEscape = false, } = {}) => {
    return windowsPathsNoEscape
        ? s.replace(/\[([^\/\\])\]/g, '$1')
        : s.replace(/((?!\\).|^)\[([^\/\\])\]/g, '$1$2').replace(/\\([^\/])/g, '$1');
};
//# sourceMappingURL=unescape.js.map
;// CONCATENATED MODULE: ./node_modules/minimatch/dist/mjs/index.js




const minimatch = (p, pattern, options = {}) => {
    assertValidPattern(pattern);
    // shortcut: comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === '#') {
        return false;
    }
    return new Minimatch(pattern, options).match(p);
};
/* harmony default export */ const mjs = ((/* unused pure expression or super */ null && (minimatch)));
// Optimized checking for the most common glob patterns.
const starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/;
const starDotExtTest = (ext) => (f) => !f.startsWith('.') && f.endsWith(ext);
const starDotExtTestDot = (ext) => (f) => f.endsWith(ext);
const starDotExtTestNocase = (ext) => {
    ext = ext.toLowerCase();
    return (f) => !f.startsWith('.') && f.toLowerCase().endsWith(ext);
};
const starDotExtTestNocaseDot = (ext) => {
    ext = ext.toLowerCase();
    return (f) => f.toLowerCase().endsWith(ext);
};
const starDotStarRE = /^\*+\.\*+$/;
const starDotStarTest = (f) => !f.startsWith('.') && f.includes('.');
const starDotStarTestDot = (f) => f !== '.' && f !== '..' && f.includes('.');
const dotStarRE = /^\.\*+$/;
const dotStarTest = (f) => f !== '.' && f !== '..' && f.startsWith('.');
const starRE = /^\*+$/;
const starTest = (f) => f.length !== 0 && !f.startsWith('.');
const starTestDot = (f) => f.length !== 0 && f !== '.' && f !== '..';
const qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/;
const qmarksTestNocase = ([$0, ext = '']) => {
    const noext = qmarksTestNoExt([$0]);
    if (!ext)
        return noext;
    ext = ext.toLowerCase();
    return (f) => noext(f) && f.toLowerCase().endsWith(ext);
};
const qmarksTestNocaseDot = ([$0, ext = '']) => {
    const noext = qmarksTestNoExtDot([$0]);
    if (!ext)
        return noext;
    ext = ext.toLowerCase();
    return (f) => noext(f) && f.toLowerCase().endsWith(ext);
};
const qmarksTestDot = ([$0, ext = '']) => {
    const noext = qmarksTestNoExtDot([$0]);
    return !ext ? noext : (f) => noext(f) && f.endsWith(ext);
};
const qmarksTest = ([$0, ext = '']) => {
    const noext = qmarksTestNoExt([$0]);
    return !ext ? noext : (f) => noext(f) && f.endsWith(ext);
};
const qmarksTestNoExt = ([$0]) => {
    const len = $0.length;
    return (f) => f.length === len && !f.startsWith('.');
};
const qmarksTestNoExtDot = ([$0]) => {
    const len = $0.length;
    return (f) => f.length === len && f !== '.' && f !== '..';
};
/* c8 ignore start */
const defaultPlatform = (typeof process === 'object' && process
    ? (typeof process.env === 'object' &&
        process.env &&
        process.env.__MINIMATCH_TESTING_PLATFORM__) ||
        process.platform
    : 'posix');
const path = {
    win32: { sep: '\\' },
    posix: { sep: '/' },
};
/* c8 ignore stop */
const sep = defaultPlatform === 'win32' ? path.win32.sep : path.posix.sep;
minimatch.sep = sep;
const GLOBSTAR = Symbol('globstar **');
minimatch.GLOBSTAR = GLOBSTAR;
const plTypes = {
    '!': { open: '(?:(?!(?:', close: '))[^/]*?)' },
    '?': { open: '(?:', close: ')?' },
    '+': { open: '(?:', close: ')+' },
    '*': { open: '(?:', close: ')*' },
    '@': { open: '(?:', close: ')' },
};
// any single thing other than /
// don't need to escape / when using new RegExp()
const qmark = '[^/]';
// * => any number of characters
const star = qmark + '*?';
// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
const twoStarDot = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?';
// not a ^ or / followed by a dot,
// followed by anything, any number of times.
const twoStarNoDot = '(?:(?!(?:\\/|^)\\.).)*?';
// "abc" -> { a:true, b:true, c:true }
const charSet = (s) => s.split('').reduce((set, c) => {
    set[c] = true;
    return set;
}, {});
// characters that need to be escaped in RegExp.
const reSpecials = charSet('().*{}+?[]^$\\!');
// characters that indicate we have to add the pattern start
const addPatternStartSet = charSet('[.(');
const filter = (pattern, options = {}) => (p) => minimatch(p, pattern, options);
minimatch.filter = filter;
const ext = (a, b = {}) => Object.assign({}, a, b);
const defaults = (def) => {
    if (!def || typeof def !== 'object' || !Object.keys(def).length) {
        return minimatch;
    }
    const orig = minimatch;
    const m = (p, pattern, options = {}) => orig(p, pattern, ext(def, options));
    return Object.assign(m, {
        Minimatch: class Minimatch extends orig.Minimatch {
            constructor(pattern, options = {}) {
                super(pattern, ext(def, options));
            }
            static defaults(options) {
                return orig.defaults(ext(def, options)).Minimatch;
            }
        },
        unescape: (s, options = {}) => orig.unescape(s, ext(def, options)),
        escape: (s, options = {}) => orig.escape(s, ext(def, options)),
        filter: (pattern, options = {}) => orig.filter(pattern, ext(def, options)),
        defaults: (options) => orig.defaults(ext(def, options)),
        makeRe: (pattern, options = {}) => orig.makeRe(pattern, ext(def, options)),
        braceExpand: (pattern, options = {}) => orig.braceExpand(pattern, ext(def, options)),
        match: (list, pattern, options = {}) => orig.match(list, pattern, ext(def, options)),
        sep: orig.sep,
        GLOBSTAR: GLOBSTAR,
    });
};
minimatch.defaults = defaults;
// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
const braceExpand = (pattern, options = {}) => {
    assertValidPattern(pattern);
    // Thanks to Yeting Li <https://github.com/yetingli> for
    // improving this regexp to avoid a ReDOS vulnerability.
    if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        // shortcut. no need to expand.
        return [pattern];
    }
    return brace_expansion(pattern);
};
minimatch.braceExpand = braceExpand;
const MAX_PATTERN_LENGTH = 1024 * 64;
const assertValidPattern = (pattern) => {
    if (typeof pattern !== 'string') {
        throw new TypeError('invalid pattern');
    }
    if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError('pattern is too long');
    }
};
// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
const makeRe = (pattern, options = {}) => new Minimatch(pattern, options).makeRe();
minimatch.makeRe = makeRe;
const match = (list, pattern, options = {}) => {
    const mm = new Minimatch(pattern, options);
    list = list.filter(f => mm.match(f));
    if (mm.options.nonull && !list.length) {
        list.push(pattern);
    }
    return list;
};
minimatch.match = match;
// replace stuff like \* with *
const globUnescape = (s) => s.replace(/\\(.)/g, '$1');
const globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
const regExpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
class Minimatch {
    options;
    set;
    pattern;
    windowsPathsNoEscape;
    nonegate;
    negate;
    comment;
    empty;
    preserveMultipleSlashes;
    partial;
    globSet;
    globParts;
    nocase;
    isWindows;
    platform;
    windowsNoMagicRoot;
    regexp;
    constructor(pattern, options = {}) {
        assertValidPattern(pattern);
        options = options || {};
        this.options = options;
        this.pattern = pattern;
        this.platform = options.platform || defaultPlatform;
        this.isWindows = this.platform === 'win32';
        this.windowsPathsNoEscape =
            !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
        if (this.windowsPathsNoEscape) {
            this.pattern = this.pattern.replace(/\\/g, '/');
        }
        this.preserveMultipleSlashes = !!options.preserveMultipleSlashes;
        this.regexp = null;
        this.negate = false;
        this.nonegate = !!options.nonegate;
        this.comment = false;
        this.empty = false;
        this.partial = !!options.partial;
        this.nocase = !!this.options.nocase;
        this.windowsNoMagicRoot =
            options.windowsNoMagicRoot !== undefined
                ? options.windowsNoMagicRoot
                : !!(this.isWindows && this.nocase);
        this.globSet = [];
        this.globParts = [];
        this.set = [];
        // make the set of regexps etc.
        this.make();
    }
    hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1) {
            return true;
        }
        for (const pattern of this.set) {
            for (const part of pattern) {
                if (typeof part !== 'string')
                    return true;
            }
        }
        return false;
    }
    debug(..._) { }
    make() {
        const pattern = this.pattern;
        const options = this.options;
        // empty patterns and comments match nothing.
        if (!options.nocomment && pattern.charAt(0) === '#') {
            this.comment = true;
            return;
        }
        if (!pattern) {
            this.empty = true;
            return;
        }
        // step 1: figure out negation, etc.
        this.parseNegate();
        // step 2: expand braces
        this.globSet = [...new Set(this.braceExpand())];
        if (options.debug) {
            this.debug = (...args) => console.error(...args);
        }
        this.debug(this.pattern, this.globSet);
        // step 3: now we have a set, so turn each one into a series of
        // path-portion matching patterns.
        // These will be regexps, except in the case of "**", which is
        // set to the GLOBSTAR object for globstar behavior,
        // and will not contain any / characters
        //
        // First, we preprocess to make the glob pattern sets a bit simpler
        // and deduped.  There are some perf-killing patterns that can cause
        // problems with a glob walk, but we can simplify them down a bit.
        const rawGlobParts = this.globSet.map(s => this.slashSplit(s));
        this.globParts = this.preprocess(rawGlobParts);
        this.debug(this.pattern, this.globParts);
        // glob --> regexps
        let set = this.globParts.map((s, _, __) => {
            if (this.isWindows && this.windowsNoMagicRoot) {
                // check if it's a drive or unc path.
                const isUNC = s[0] === '' &&
                    s[1] === '' &&
                    (s[2] === '?' || !globMagic.test(s[2])) &&
                    !globMagic.test(s[3]);
                const isDrive = /^[a-z]:/i.test(s[0]);
                if (isUNC) {
                    return [...s.slice(0, 4), ...s.slice(4).map(ss => this.parse(ss))];
                }
                else if (isDrive) {
                    return [s[0], ...s.slice(1).map(ss => this.parse(ss))];
                }
            }
            return s.map(ss => this.parse(ss));
        });
        this.debug(this.pattern, set);
        // filter out everything that didn't compile properly.
        this.set = set.filter(s => s.indexOf(false) === -1);
        // do not treat the ? in UNC paths as magic
        if (this.isWindows) {
            for (let i = 0; i < this.set.length; i++) {
                const p = this.set[i];
                if (p[0] === '' &&
                    p[1] === '' &&
                    this.globParts[i][2] === '?' &&
                    typeof p[3] === 'string' &&
                    /^[a-z]:$/i.test(p[3])) {
                    p[2] = '?';
                }
            }
        }
        this.debug(this.pattern, this.set);
    }
    // various transforms to equivalent pattern sets that are
    // faster to process in a filesystem walk.  The goal is to
    // eliminate what we can, and push all ** patterns as far
    // to the right as possible, even if it increases the number
    // of patterns that we have to process.
    preprocess(globParts) {
        // if we're not in globstar mode, then turn all ** into *
        if (this.options.noglobstar) {
            for (let i = 0; i < globParts.length; i++) {
                for (let j = 0; j < globParts[i].length; j++) {
                    if (globParts[i][j] === '**') {
                        globParts[i][j] = '*';
                    }
                }
            }
        }
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
            // aggressive optimization for the purpose of fs walking
            globParts = this.firstPhasePreProcess(globParts);
            globParts = this.secondPhasePreProcess(globParts);
        }
        else if (optimizationLevel >= 1) {
            // just basic optimizations to remove some .. parts
            globParts = this.levelOneOptimize(globParts);
        }
        else {
            globParts = this.adjascentGlobstarOptimize(globParts);
        }
        return globParts;
    }
    // just get rid of adjascent ** portions
    adjascentGlobstarOptimize(globParts) {
        return globParts.map(parts => {
            let gs = -1;
            while (-1 !== (gs = parts.indexOf('**', gs + 1))) {
                let i = gs;
                while (parts[i + 1] === '**') {
                    i++;
                }
                if (i !== gs) {
                    parts.splice(gs, i - gs);
                }
            }
            return parts;
        });
    }
    // get rid of adjascent ** and resolve .. portions
    levelOneOptimize(globParts) {
        return globParts.map(parts => {
            parts = parts.reduce((set, part) => {
                const prev = set[set.length - 1];
                if (part === '**' && prev === '**') {
                    return set;
                }
                if (part === '..') {
                    if (prev && prev !== '..' && prev !== '.' && prev !== '**') {
                        set.pop();
                        return set;
                    }
                }
                set.push(part);
                return set;
            }, []);
            return parts.length === 0 ? [''] : parts;
        });
    }
    levelTwoFileOptimize(parts) {
        if (!Array.isArray(parts)) {
            parts = this.slashSplit(parts);
        }
        let didSomething = false;
        do {
            didSomething = false;
            // <pre>/<e>/<rest> -> <pre>/<rest>
            if (!this.preserveMultipleSlashes) {
                for (let i = 1; i < parts.length - 1; i++) {
                    const p = parts[i];
                    // don't squeeze out UNC patterns
                    if (i === 1 && p === '' && parts[0] === '')
                        continue;
                    if (p === '.' || p === '') {
                        didSomething = true;
                        parts.splice(i, 1);
                        i--;
                    }
                }
                if (parts[0] === '.' &&
                    parts.length === 2 &&
                    (parts[1] === '.' || parts[1] === '')) {
                    didSomething = true;
                    parts.pop();
                }
            }
            // <pre>/<p>/../<rest> -> <pre>/<rest>
            let dd = 0;
            while (-1 !== (dd = parts.indexOf('..', dd + 1))) {
                const p = parts[dd - 1];
                if (p && p !== '.' && p !== '..' && p !== '**') {
                    didSomething = true;
                    parts.splice(dd - 1, 2);
                    dd -= 2;
                }
            }
        } while (didSomething);
        return parts.length === 0 ? [''] : parts;
    }
    // First phase: single-pattern processing
    // <pre> is 1 or more portions
    // <rest> is 1 or more portions
    // <p> is any portion other than ., .., '', or **
    // <e> is . or ''
    //
    // **/.. is *brutal* for filesystem walking performance, because
    // it effectively resets the recursive walk each time it occurs,
    // and ** cannot be reduced out by a .. pattern part like a regexp
    // or most strings (other than .., ., and '') can be.
    //
    // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
    // <pre>/<e>/<rest> -> <pre>/<rest>
    // <pre>/<p>/../<rest> -> <pre>/<rest>
    // **/**/<rest> -> **/<rest>
    //
    // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
    // this WOULD be allowed if ** did follow symlinks, or * didn't
    firstPhasePreProcess(globParts) {
        let didSomething = false;
        do {
            didSomething = false;
            // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
            for (let parts of globParts) {
                let gs = -1;
                while (-1 !== (gs = parts.indexOf('**', gs + 1))) {
                    let gss = gs;
                    while (parts[gss + 1] === '**') {
                        // <pre>/**/**/<rest> -> <pre>/**/<rest>
                        gss++;
                    }
                    // eg, if gs is 2 and gss is 4, that means we have 3 **
                    // parts, and can remove 2 of them.
                    if (gss > gs) {
                        parts.splice(gs + 1, gss - gs);
                    }
                    let next = parts[gs + 1];
                    const p = parts[gs + 2];
                    const p2 = parts[gs + 3];
                    if (next !== '..')
                        continue;
                    if (!p ||
                        p === '.' ||
                        p === '..' ||
                        !p2 ||
                        p2 === '.' ||
                        p2 === '..') {
                        continue;
                    }
                    didSomething = true;
                    // edit parts in place, and push the new one
                    parts.splice(gs, 1);
                    const other = parts.slice(0);
                    other[gs] = '**';
                    globParts.push(other);
                    gs--;
                }
                // <pre>/<e>/<rest> -> <pre>/<rest>
                if (!this.preserveMultipleSlashes) {
                    for (let i = 1; i < parts.length - 1; i++) {
                        const p = parts[i];
                        // don't squeeze out UNC patterns
                        if (i === 1 && p === '' && parts[0] === '')
                            continue;
                        if (p === '.' || p === '') {
                            didSomething = true;
                            parts.splice(i, 1);
                            i--;
                        }
                    }
                    if (parts[0] === '.' &&
                        parts.length === 2 &&
                        (parts[1] === '.' || parts[1] === '')) {
                        didSomething = true;
                        parts.pop();
                    }
                }
                // <pre>/<p>/../<rest> -> <pre>/<rest>
                let dd = 0;
                while (-1 !== (dd = parts.indexOf('..', dd + 1))) {
                    const p = parts[dd - 1];
                    if (p && p !== '.' && p !== '..' && p !== '**') {
                        didSomething = true;
                        const needDot = dd === 1 && parts[dd + 1] === '**';
                        const splin = needDot ? ['.'] : [];
                        parts.splice(dd - 1, 2, ...splin);
                        if (parts.length === 0)
                            parts.push('');
                        dd -= 2;
                    }
                }
            }
        } while (didSomething);
        return globParts;
    }
    // second phase: multi-pattern dedupes
    // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
    // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
    // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
    //
    // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
    // ^-- not valid because ** doens't follow symlinks
    secondPhasePreProcess(globParts) {
        for (let i = 0; i < globParts.length - 1; i++) {
            for (let j = i + 1; j < globParts.length; j++) {
                const matched = this.partsMatch(globParts[i], globParts[j], !this.preserveMultipleSlashes);
                if (!matched)
                    continue;
                globParts[i] = matched;
                globParts[j] = [];
            }
        }
        return globParts.filter(gs => gs.length);
    }
    partsMatch(a, b, emptyGSMatch = false) {
        let ai = 0;
        let bi = 0;
        let result = [];
        let which = '';
        while (ai < a.length && bi < b.length) {
            if (a[ai] === b[bi]) {
                result.push(which === 'b' ? b[bi] : a[ai]);
                ai++;
                bi++;
            }
            else if (emptyGSMatch && a[ai] === '**' && b[bi] === a[ai + 1]) {
                result.push(a[ai]);
                ai++;
            }
            else if (emptyGSMatch && b[bi] === '**' && a[ai] === b[bi + 1]) {
                result.push(b[bi]);
                bi++;
            }
            else if (a[ai] === '*' &&
                b[bi] &&
                (this.options.dot || !b[bi].startsWith('.')) &&
                b[bi] !== '**') {
                if (which === 'b')
                    return false;
                which = 'a';
                result.push(a[ai]);
                ai++;
                bi++;
            }
            else if (b[bi] === '*' &&
                a[ai] &&
                (this.options.dot || !a[ai].startsWith('.')) &&
                a[ai] !== '**') {
                if (which === 'a')
                    return false;
                which = 'b';
                result.push(b[bi]);
                ai++;
                bi++;
            }
            else {
                return false;
            }
        }
        // if we fall out of the loop, it means they two are identical
        // as long as their lengths match
        return a.length === b.length && result;
    }
    parseNegate() {
        if (this.nonegate)
            return;
        const pattern = this.pattern;
        let negate = false;
        let negateOffset = 0;
        for (let i = 0; i < pattern.length && pattern.charAt(i) === '!'; i++) {
            negate = !negate;
            negateOffset++;
        }
        if (negateOffset)
            this.pattern = pattern.slice(negateOffset);
        this.negate = negate;
    }
    // set partial to true to test if, for example,
    // "/a/b" matches the start of "/*/b/*/d"
    // Partial means, if you run out of file before you run
    // out of pattern, then that's fine, as long as all
    // the parts match.
    matchOne(file, pattern, partial = false) {
        const options = this.options;
        // a UNC pattern like //?/c:/* can match a path like c:/x
        // and vice versa
        if (this.isWindows) {
            const fileUNC = file[0] === '' &&
                file[1] === '' &&
                file[2] === '?' &&
                typeof file[3] === 'string' &&
                /^[a-z]:$/i.test(file[3]);
            const patternUNC = pattern[0] === '' &&
                pattern[1] === '' &&
                pattern[2] === '?' &&
                typeof pattern[3] === 'string' &&
                /^[a-z]:$/i.test(pattern[3]);
            if (fileUNC && patternUNC) {
                const fd = file[3];
                const pd = pattern[3];
                if (fd.toLowerCase() === pd.toLowerCase()) {
                    file[3] = pd;
                }
            }
            else if (patternUNC && typeof file[0] === 'string') {
                const pd = pattern[3];
                const fd = file[0];
                if (pd.toLowerCase() === fd.toLowerCase()) {
                    pattern[3] = fd;
                    pattern = pattern.slice(3);
                }
            }
            else if (fileUNC && typeof pattern[0] === 'string') {
                const fd = file[3];
                if (fd.toLowerCase() === pattern[0].toLowerCase()) {
                    pattern[0] = fd;
                    file = file.slice(3);
                }
            }
        }
        // resolve and reduce . and .. portions in the file as well.
        // dont' need to do the second phase, because it's only one string[]
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
            file = this.levelTwoFileOptimize(file);
        }
        this.debug('matchOne', this, { file, pattern });
        this.debug('matchOne', file.length, pattern.length);
        for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
            this.debug('matchOne loop');
            var p = pattern[pi];
            var f = file[fi];
            this.debug(pattern, p, f);
            // should be impossible.
            // some invalid regexp stuff in the set.
            /* c8 ignore start */
            if (p === false) {
                return false;
            }
            /* c8 ignore stop */
            if (p === GLOBSTAR) {
                this.debug('GLOBSTAR', [pattern, p, f]);
                // "**"
                // a/**/b/**/c would match the following:
                // a/b/x/y/z/c
                // a/x/y/z/b/c
                // a/b/x/b/x/c
                // a/b/c
                // To do this, take the rest of the pattern after
                // the **, and see if it would match the file remainder.
                // If so, return success.
                // If not, the ** "swallows" a segment, and try again.
                // This is recursively awful.
                //
                // a/**/b/**/c matching a/b/x/y/z/c
                // - a matches a
                // - doublestar
                //   - matchOne(b/x/y/z/c, b/**/c)
                //     - b matches b
                //     - doublestar
                //       - matchOne(x/y/z/c, c) -> no
                //       - matchOne(y/z/c, c) -> no
                //       - matchOne(z/c, c) -> no
                //       - matchOne(c, c) yes, hit
                var fr = fi;
                var pr = pi + 1;
                if (pr === pl) {
                    this.debug('** at the end');
                    // a ** at the end will just swallow the rest.
                    // We have found a match.
                    // however, it will not swallow /.x, unless
                    // options.dot is set.
                    // . and .. are *never* matched by **, for explosively
                    // exponential reasons.
                    for (; fi < fl; fi++) {
                        if (file[fi] === '.' ||
                            file[fi] === '..' ||
                            (!options.dot && file[fi].charAt(0) === '.'))
                            return false;
                    }
                    return true;
                }
                // ok, let's see if we can swallow whatever we can.
                while (fr < fl) {
                    var swallowee = file[fr];
                    this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);
                    // XXX remove this slice.  Just pass the start index.
                    if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                        this.debug('globstar found match!', fr, fl, swallowee);
                        // found a match.
                        return true;
                    }
                    else {
                        // can't swallow "." or ".." ever.
                        // can only swallow ".foo" when explicitly asked.
                        if (swallowee === '.' ||
                            swallowee === '..' ||
                            (!options.dot && swallowee.charAt(0) === '.')) {
                            this.debug('dot detected!', file, fr, pattern, pr);
                            break;
                        }
                        // ** swallows a segment, and continue.
                        this.debug('globstar swallow a segment, and continue');
                        fr++;
                    }
                }
                // no match was found.
                // However, in partial mode, we can't say this is necessarily over.
                /* c8 ignore start */
                if (partial) {
                    // ran out of file
                    this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
                    if (fr === fl) {
                        return true;
                    }
                }
                /* c8 ignore stop */
                return false;
            }
            // something other than **
            // non-magic patterns just have to match exactly
            // patterns with magic have been turned into regexps.
            let hit;
            if (typeof p === 'string') {
                hit = f === p;
                this.debug('string match', p, f, hit);
            }
            else {
                hit = p.test(f);
                this.debug('pattern match', p, f, hit);
            }
            if (!hit)
                return false;
        }
        // Note: ending in / means that we'll get a final ""
        // at the end of the pattern.  This can only match a
        // corresponding "" at the end of the file.
        // If the file ends in /, then it can only match a
        // a pattern that ends in /, unless the pattern just
        // doesn't have any more for it. But, a/b/ should *not*
        // match "a/b/*", even though "" matches against the
        // [^/]*? pattern, except in partial mode, where it might
        // simply not be reached yet.
        // However, a/b/ should still satisfy a/*
        // now either we fell off the end of the pattern, or we're done.
        if (fi === fl && pi === pl) {
            // ran out of pattern and filename at the same time.
            // an exact hit!
            return true;
        }
        else if (fi === fl) {
            // ran out of file, but still had pattern left.
            // this is ok if we're doing the match as part of
            // a glob fs traversal.
            return partial;
        }
        else if (pi === pl) {
            // ran out of pattern, still have file left.
            // this is only acceptable if we're on the very last
            // empty segment of a file with a trailing slash.
            // a/* should match a/b/
            return fi === fl - 1 && file[fi] === '';
            /* c8 ignore start */
        }
        else {
            // should be unreachable.
            throw new Error('wtf?');
        }
        /* c8 ignore stop */
    }
    braceExpand() {
        return braceExpand(this.pattern, this.options);
    }
    parse(pattern) {
        assertValidPattern(pattern);
        const options = this.options;
        // shortcuts
        if (pattern === '**')
            return GLOBSTAR;
        if (pattern === '')
            return '';
        // far and away, the most common glob pattern parts are
        // *, *.*, and *.<ext>  Add a fast check method for those.
        let m;
        let fastTest = null;
        if ((m = pattern.match(starRE))) {
            fastTest = options.dot ? starTestDot : starTest;
        }
        else if ((m = pattern.match(starDotExtRE))) {
            fastTest = (options.nocase
                ? options.dot
                    ? starDotExtTestNocaseDot
                    : starDotExtTestNocase
                : options.dot
                    ? starDotExtTestDot
                    : starDotExtTest)(m[1]);
        }
        else if ((m = pattern.match(qmarksRE))) {
            fastTest = (options.nocase
                ? options.dot
                    ? qmarksTestNocaseDot
                    : qmarksTestNocase
                : options.dot
                    ? qmarksTestDot
                    : qmarksTest)(m);
        }
        else if ((m = pattern.match(starDotStarRE))) {
            fastTest = options.dot ? starDotStarTestDot : starDotStarTest;
        }
        else if ((m = pattern.match(dotStarRE))) {
            fastTest = dotStarTest;
        }
        let re = '';
        let hasMagic = false;
        let escaping = false;
        // ? => one single character
        const patternListStack = [];
        const negativeLists = [];
        let stateChar = false;
        let uflag = false;
        let pl;
        // . and .. never match anything that doesn't start with .,
        // even when options.dot is set.  However, if the pattern
        // starts with ., then traversal patterns can match.
        let dotTravAllowed = pattern.charAt(0) === '.';
        let dotFileAllowed = options.dot || dotTravAllowed;
        const patternStart = () => dotTravAllowed
            ? ''
            : dotFileAllowed
                ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))'
                : '(?!\\.)';
        const subPatternStart = (p) => p.charAt(0) === '.'
            ? ''
            : options.dot
                ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))'
                : '(?!\\.)';
        const clearStateChar = () => {
            if (stateChar) {
                // we had some state-tracking character
                // that wasn't consumed by this pass.
                switch (stateChar) {
                    case '*':
                        re += star;
                        hasMagic = true;
                        break;
                    case '?':
                        re += qmark;
                        hasMagic = true;
                        break;
                    default:
                        re += '\\' + stateChar;
                        break;
                }
                this.debug('clearStateChar %j %j', stateChar, re);
                stateChar = false;
            }
        };
        for (let i = 0, c; i < pattern.length && (c = pattern.charAt(i)); i++) {
            this.debug('%s\t%s %s %j', pattern, i, re, c);
            // skip over any that are escaped.
            if (escaping) {
                // completely not allowed, even escaped.
                // should be impossible.
                /* c8 ignore start */
                if (c === '/') {
                    return false;
                }
                /* c8 ignore stop */
                if (reSpecials[c]) {
                    re += '\\';
                }
                re += c;
                escaping = false;
                continue;
            }
            switch (c) {
                // Should already be path-split by now.
                /* c8 ignore start */
                case '/': {
                    return false;
                }
                /* c8 ignore stop */
                case '\\':
                    clearStateChar();
                    escaping = true;
                    continue;
                // the various stateChar values
                // for the "extglob" stuff.
                case '?':
                case '*':
                case '+':
                case '@':
                case '!':
                    this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c);
                    // if we already have a stateChar, then it means
                    // that there was something like ** or +? in there.
                    // Handle the stateChar, then proceed with this one.
                    this.debug('call clearStateChar %j', stateChar);
                    clearStateChar();
                    stateChar = c;
                    // if extglob is disabled, then +(asdf|foo) isn't a thing.
                    // just clear the statechar *now*, rather than even diving into
                    // the patternList stuff.
                    if (options.noext)
                        clearStateChar();
                    continue;
                case '(': {
                    if (!stateChar) {
                        re += '\\(';
                        continue;
                    }
                    const plEntry = {
                        type: stateChar,
                        start: i - 1,
                        reStart: re.length,
                        open: plTypes[stateChar].open,
                        close: plTypes[stateChar].close,
                    };
                    this.debug(this.pattern, '\t', plEntry);
                    patternListStack.push(plEntry);
                    // negation is (?:(?!(?:js)(?:<rest>))[^/]*)
                    re += plEntry.open;
                    // next entry starts with a dot maybe?
                    if (plEntry.start === 0 && plEntry.type !== '!') {
                        dotTravAllowed = true;
                        re += subPatternStart(pattern.slice(i + 1));
                    }
                    this.debug('plType %j %j', stateChar, re);
                    stateChar = false;
                    continue;
                }
                case ')': {
                    const plEntry = patternListStack[patternListStack.length - 1];
                    if (!plEntry) {
                        re += '\\)';
                        continue;
                    }
                    patternListStack.pop();
                    // closing an extglob
                    clearStateChar();
                    hasMagic = true;
                    pl = plEntry;
                    // negation is (?:(?!js)[^/]*)
                    // The others are (?:<pattern>)<type>
                    re += pl.close;
                    if (pl.type === '!') {
                        negativeLists.push(Object.assign(pl, { reEnd: re.length }));
                    }
                    continue;
                }
                case '|': {
                    const plEntry = patternListStack[patternListStack.length - 1];
                    if (!plEntry) {
                        re += '\\|';
                        continue;
                    }
                    clearStateChar();
                    re += '|';
                    // next subpattern can start with a dot?
                    if (plEntry.start === 0 && plEntry.type !== '!') {
                        dotTravAllowed = true;
                        re += subPatternStart(pattern.slice(i + 1));
                    }
                    continue;
                }
                // these are mostly the same in regexp and glob
                case '[':
                    // swallow any state-tracking char before the [
                    clearStateChar();
                    const [src, needUflag, consumed, magic] = parseClass(pattern, i);
                    if (consumed) {
                        re += src;
                        uflag = uflag || needUflag;
                        i += consumed - 1;
                        hasMagic = hasMagic || magic;
                    }
                    else {
                        re += '\\[';
                    }
                    continue;
                case ']':
                    re += '\\' + c;
                    continue;
                default:
                    // swallow any state char that wasn't consumed
                    clearStateChar();
                    re += regExpEscape(c);
                    break;
            } // switch
        } // for
        // handle the case where we had a +( thing at the *end*
        // of the pattern.
        // each pattern list stack adds 3 chars, and we need to go through
        // and escape any | chars that were passed through as-is for the regexp.
        // Go through and escape them, taking care not to double-escape any
        // | chars that were already escaped.
        for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
            let tail;
            tail = re.slice(pl.reStart + pl.open.length);
            this.debug(this.pattern, 'setting tail', re, pl);
            // maybe some even number of \, then maybe 1 \, followed by a |
            tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, (_, $1, $2) => {
                if (!$2) {
                    // the | isn't already escaped, so escape it.
                    $2 = '\\';
                    // should already be done
                    /* c8 ignore start */
                }
                /* c8 ignore stop */
                // need to escape all those slashes *again*, without escaping the
                // one that we need for escaping the | character.  As it works out,
                // escaping an even number of slashes can be done by simply repeating
                // it exactly after itself.  That's why this trick works.
                //
                // I am sorry that you have to see this.
                return $1 + $1 + $2 + '|';
            });
            this.debug('tail=%j\n   %s', tail, tail, pl, re);
            const t = pl.type === '*' ? star : pl.type === '?' ? qmark : '\\' + pl.type;
            hasMagic = true;
            re = re.slice(0, pl.reStart) + t + '\\(' + tail;
        }
        // handle trailing things that only matter at the very end.
        clearStateChar();
        if (escaping) {
            // trailing \\
            re += '\\\\';
        }
        // only need to apply the nodot start if the re starts with
        // something that could conceivably capture a dot
        const addPatternStart = addPatternStartSet[re.charAt(0)];
        // Hack to work around lack of negative lookbehind in JS
        // A pattern like: *.!(x).!(y|z) needs to ensure that a name
        // like 'a.xyz.yz' doesn't match.  So, the first negative
        // lookahead, has to look ALL the way ahead, to the end of
        // the pattern.
        for (let n = negativeLists.length - 1; n > -1; n--) {
            const nl = negativeLists[n];
            const nlBefore = re.slice(0, nl.reStart);
            const nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
            let nlAfter = re.slice(nl.reEnd);
            const nlLast = re.slice(nl.reEnd - 8, nl.reEnd) + nlAfter;
            // Handle nested stuff like *(*.js|!(*.json)), where open parens
            // mean that we should *not* include the ) in the bit that is considered
            // "after" the negated section.
            const closeParensBefore = nlBefore.split(')').length;
            const openParensBefore = nlBefore.split('(').length - closeParensBefore;
            let cleanAfter = nlAfter;
            for (let i = 0; i < openParensBefore; i++) {
                cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
            }
            nlAfter = cleanAfter;
            const dollar = nlAfter === '' ? '(?:$|\\/)' : '';
            re = nlBefore + nlFirst + nlAfter + dollar + nlLast;
        }
        // if the re is not "" at this point, then we need to make sure
        // it doesn't match against an empty path part.
        // Otherwise a/* will match a/, which it should not.
        if (re !== '' && hasMagic) {
            re = '(?=.)' + re;
        }
        if (addPatternStart) {
            re = patternStart() + re;
        }
        // if it's nocase, and the lcase/uppercase don't match, it's magic
        if (options.nocase && !hasMagic && !options.nocaseMagicOnly) {
            hasMagic = pattern.toUpperCase() !== pattern.toLowerCase();
        }
        // skip the regexp for non-magical patterns
        // unescape anything in it, though, so that it'll be
        // an exact match against a file etc.
        if (!hasMagic) {
            return globUnescape(re);
        }
        const flags = (options.nocase ? 'i' : '') + (uflag ? 'u' : '');
        try {
            const ext = fastTest
                ? {
                    _glob: pattern,
                    _src: re,
                    test: fastTest,
                }
                : {
                    _glob: pattern,
                    _src: re,
                };
            return Object.assign(new RegExp('^' + re + '$', flags), ext);
            /* c8 ignore start */
        }
        catch (er) {
            // should be impossible
            // If it was an invalid regular expression, then it can't match
            // anything.  This trick looks for a character after the end of
            // the string, which is of course impossible, except in multi-line
            // mode, but it's not a /m regex.
            this.debug('invalid regexp', er);
            return new RegExp('$.');
        }
        /* c8 ignore stop */
    }
    makeRe() {
        if (this.regexp || this.regexp === false)
            return this.regexp;
        // at this point, this.set is a 2d array of partial
        // pattern strings, or "**".
        //
        // It's better to use .match().  This function shouldn't
        // be used, really, but it's pretty convenient sometimes,
        // when you just want to work with a regex.
        const set = this.set;
        if (!set.length) {
            this.regexp = false;
            return this.regexp;
        }
        const options = this.options;
        const twoStar = options.noglobstar
            ? star
            : options.dot
                ? twoStarDot
                : twoStarNoDot;
        const flags = options.nocase ? 'i' : '';
        // regexpify non-globstar patterns
        // if ** is only item, then we just do one twoStar
        // if ** is first, and there are more, prepend (\/|twoStar\/)? to next
        // if ** is last, append (\/twoStar|) to previous
        // if ** is in the middle, append (\/|\/twoStar\/) to previous
        // then filter out GLOBSTAR symbols
        let re = set
            .map(pattern => {
            const pp = pattern.map(p => typeof p === 'string'
                ? regExpEscape(p)
                : p === GLOBSTAR
                    ? GLOBSTAR
                    : p._src);
            pp.forEach((p, i) => {
                const next = pp[i + 1];
                const prev = pp[i - 1];
                if (p !== GLOBSTAR || prev === GLOBSTAR) {
                    return;
                }
                if (prev === undefined) {
                    if (next !== undefined && next !== GLOBSTAR) {
                        pp[i + 1] = '(?:\\/|' + twoStar + '\\/)?' + next;
                    }
                    else {
                        pp[i] = twoStar;
                    }
                }
                else if (next === undefined) {
                    pp[i - 1] = prev + '(?:\\/|' + twoStar + ')?';
                }
                else if (next !== GLOBSTAR) {
                    pp[i - 1] = prev + '(?:\\/|\\/' + twoStar + '\\/)' + next;
                    pp[i + 1] = GLOBSTAR;
                }
            });
            return pp.filter(p => p !== GLOBSTAR).join('/');
        })
            .join('|');
        // must match entire pattern
        // ending in a * or ** will make it less strict.
        re = '^(?:' + re + ')$';
        // can match anything, as long as it's not this.
        if (this.negate)
            re = '^(?!' + re + ').*$';
        try {
            this.regexp = new RegExp(re, flags);
            /* c8 ignore start */
        }
        catch (ex) {
            // should be impossible
            this.regexp = false;
        }
        /* c8 ignore stop */
        return this.regexp;
    }
    slashSplit(p) {
        // if p starts with // on windows, we preserve that
        // so that UNC paths aren't broken.  Otherwise, any number of
        // / characters are coalesced into one, unless
        // preserveMultipleSlashes is set to true.
        if (this.preserveMultipleSlashes) {
            return p.split('/');
        }
        else if (this.isWindows && /^\/\/[^\/]+/.test(p)) {
            // add an extra '' for the one we lose
            return ['', ...p.split(/\/+/)];
        }
        else {
            return p.split(/\/+/);
        }
    }
    match(f, partial = this.partial) {
        this.debug('match', f, this.pattern);
        // short-circuit in the case of busted things.
        // comments, etc.
        if (this.comment) {
            return false;
        }
        if (this.empty) {
            return f === '';
        }
        if (f === '/' && partial) {
            return true;
        }
        const options = this.options;
        // windows: need to use /, not \
        if (this.isWindows) {
            f = f.split('\\').join('/');
        }
        // treat the test path as a set of pathparts.
        const ff = this.slashSplit(f);
        this.debug(this.pattern, 'split', ff);
        // just ONE of the pattern sets in this.set needs to match
        // in order for it to be valid.  If negating, then just one
        // match means that we have failed.
        // Either way, return on the first hit.
        const set = this.set;
        this.debug(this.pattern, 'set', set);
        // Find the basename of the path by looking for the last non-empty segment
        let filename = ff[ff.length - 1];
        if (!filename) {
            for (let i = ff.length - 2; !filename && i >= 0; i--) {
                filename = ff[i];
            }
        }
        for (let i = 0; i < set.length; i++) {
            const pattern = set[i];
            let file = ff;
            if (options.matchBase && pattern.length === 1) {
                file = [filename];
            }
            const hit = this.matchOne(file, pattern, partial);
            if (hit) {
                if (options.flipNegate) {
                    return true;
                }
                return !this.negate;
            }
        }
        // didn't get any hits.  this is success if it's a negative
        // pattern, failure otherwise.
        if (options.flipNegate) {
            return false;
        }
        return this.negate;
    }
    static defaults(def) {
        return minimatch.defaults(def).Minimatch;
    }
}
/* c8 ignore start */


/* c8 ignore stop */
minimatch.Minimatch = Minimatch;
minimatch.escape = escape_escape;
minimatch.unescape = unescape_unescape;
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/lru-cache/index.mjs
const perf =
  typeof performance === 'object' &&
  performance &&
  typeof performance.now === 'function'
    ? performance
    : Date

const hasAbortController = typeof AbortController === 'function'

// minimal backwards-compatibility polyfill
// this doesn't have nearly all the checks and whatnot that
// actual AbortController/Signal has, but it's enough for
// our purposes, and if used properly, behaves the same.
const AC = hasAbortController
  ? AbortController
  : class AbortController {
      constructor() {
        this.signal = new AS()
      }
      abort(reason = new Error('This operation was aborted')) {
        this.signal.reason = this.signal.reason || reason
        this.signal.aborted = true
        this.signal.dispatchEvent({
          type: 'abort',
          target: this.signal,
        })
      }
    }

const hasAbortSignal = typeof AbortSignal === 'function'
// Some polyfills put this on the AC class, not global
const hasACAbortSignal = typeof AC.AbortSignal === 'function'
const AS = hasAbortSignal
  ? AbortSignal
  : hasACAbortSignal
  ? AC.AbortController
  : class AbortSignal {
      constructor() {
        this.reason = undefined
        this.aborted = false
        this._listeners = []
      }
      dispatchEvent(e) {
        if (e.type === 'abort') {
          this.aborted = true
          this.onabort(e)
          this._listeners.forEach(f => f(e), this)
        }
      }
      onabort() {}
      addEventListener(ev, fn) {
        if (ev === 'abort') {
          this._listeners.push(fn)
        }
      }
      removeEventListener(ev, fn) {
        if (ev === 'abort') {
          this._listeners = this._listeners.filter(f => f !== fn)
        }
      }
    }

const warned = new Set()
const deprecatedOption = (opt, instead) => {
  const code = `LRU_CACHE_OPTION_${opt}`
  if (shouldWarn(code)) {
    warn(code, `${opt} option`, `options.${instead}`, LRUCache)
  }
}
const deprecatedMethod = (method, instead) => {
  const code = `LRU_CACHE_METHOD_${method}`
  if (shouldWarn(code)) {
    const { prototype } = LRUCache
    const { get } = Object.getOwnPropertyDescriptor(prototype, method)
    warn(code, `${method} method`, `cache.${instead}()`, get)
  }
}
const deprecatedProperty = (field, instead) => {
  const code = `LRU_CACHE_PROPERTY_${field}`
  if (shouldWarn(code)) {
    const { prototype } = LRUCache
    const { get } = Object.getOwnPropertyDescriptor(prototype, field)
    warn(code, `${field} property`, `cache.${instead}`, get)
  }
}

const emitWarning = (...a) => {
  typeof process === 'object' &&
  process &&
  typeof process.emitWarning === 'function'
    ? process.emitWarning(...a)
    : console.error(...a)
}

const shouldWarn = code => !warned.has(code)

const warn = (code, what, instead, fn) => {
  warned.add(code)
  const msg = `The ${what} is deprecated. Please use ${instead} instead.`
  emitWarning(msg, 'DeprecationWarning', code, fn)
}

const isPosInt = n => n && n === Math.floor(n) && n > 0 && isFinite(n)

/* istanbul ignore next - This is a little bit ridiculous, tbh.
 * The maximum array length is 2^32-1 or thereabouts on most JS impls.
 * And well before that point, you're caching the entire world, I mean,
 * that's ~32GB of just integers for the next/prev links, plus whatever
 * else to hold that many keys and values.  Just filling the memory with
 * zeroes at init time is brutal when you get that big.
 * But why not be complete?
 * Maybe in the future, these limits will have expanded. */
const getUintArray = max =>
  !isPosInt(max)
    ? null
    : max <= Math.pow(2, 8)
    ? Uint8Array
    : max <= Math.pow(2, 16)
    ? Uint16Array
    : max <= Math.pow(2, 32)
    ? Uint32Array
    : max <= Number.MAX_SAFE_INTEGER
    ? ZeroArray
    : null

class ZeroArray extends Array {
  constructor(size) {
    super(size)
    this.fill(0)
  }
}

class Stack {
  constructor(max) {
    if (max === 0) {
      return []
    }
    const UintArray = getUintArray(max)
    this.heap = new UintArray(max)
    this.length = 0
  }
  push(n) {
    this.heap[this.length++] = n
  }
  pop() {
    return this.heap[--this.length]
  }
}

class LRUCache {
  constructor(options = {}) {
    const {
      max = 0,
      ttl,
      ttlResolution = 1,
      ttlAutopurge,
      updateAgeOnGet,
      updateAgeOnHas,
      allowStale,
      dispose,
      disposeAfter,
      noDisposeOnSet,
      noUpdateTTL,
      maxSize = 0,
      maxEntrySize = 0,
      sizeCalculation,
      fetchMethod,
      fetchContext,
      noDeleteOnFetchRejection,
      noDeleteOnStaleGet,
      allowStaleOnFetchRejection,
      allowStaleOnFetchAbort,
      ignoreFetchAbort,
    } = options

    // deprecated options, don't trigger a warning for getting them if
    // the thing being passed in is another LRUCache we're copying.
    const { length, maxAge, stale } =
      options instanceof LRUCache ? {} : options

    if (max !== 0 && !isPosInt(max)) {
      throw new TypeError('max option must be a nonnegative integer')
    }

    const UintArray = max ? getUintArray(max) : Array
    if (!UintArray) {
      throw new Error('invalid max value: ' + max)
    }

    this.max = max
    this.maxSize = maxSize
    this.maxEntrySize = maxEntrySize || this.maxSize
    this.sizeCalculation = sizeCalculation || length
    if (this.sizeCalculation) {
      if (!this.maxSize && !this.maxEntrySize) {
        throw new TypeError(
          'cannot set sizeCalculation without setting maxSize or maxEntrySize'
        )
      }
      if (typeof this.sizeCalculation !== 'function') {
        throw new TypeError('sizeCalculation set to non-function')
      }
    }

    this.fetchMethod = fetchMethod || null
    if (this.fetchMethod && typeof this.fetchMethod !== 'function') {
      throw new TypeError(
        'fetchMethod must be a function if specified'
      )
    }

    this.fetchContext = fetchContext
    if (!this.fetchMethod && fetchContext !== undefined) {
      throw new TypeError(
        'cannot set fetchContext without fetchMethod'
      )
    }

    this.keyMap = new Map()
    this.keyList = new Array(max).fill(null)
    this.valList = new Array(max).fill(null)
    this.next = new UintArray(max)
    this.prev = new UintArray(max)
    this.head = 0
    this.tail = 0
    this.free = new Stack(max)
    this.initialFill = 1
    this.size = 0

    if (typeof dispose === 'function') {
      this.dispose = dispose
    }
    if (typeof disposeAfter === 'function') {
      this.disposeAfter = disposeAfter
      this.disposed = []
    } else {
      this.disposeAfter = null
      this.disposed = null
    }
    this.noDisposeOnSet = !!noDisposeOnSet
    this.noUpdateTTL = !!noUpdateTTL
    this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection
    this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection
    this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort
    this.ignoreFetchAbort = !!ignoreFetchAbort

    // NB: maxEntrySize is set to maxSize if it's set
    if (this.maxEntrySize !== 0) {
      if (this.maxSize !== 0) {
        if (!isPosInt(this.maxSize)) {
          throw new TypeError(
            'maxSize must be a positive integer if specified'
          )
        }
      }
      if (!isPosInt(this.maxEntrySize)) {
        throw new TypeError(
          'maxEntrySize must be a positive integer if specified'
        )
      }
      this.initializeSizeTracking()
    }

    this.allowStale = !!allowStale || !!stale
    this.noDeleteOnStaleGet = !!noDeleteOnStaleGet
    this.updateAgeOnGet = !!updateAgeOnGet
    this.updateAgeOnHas = !!updateAgeOnHas
    this.ttlResolution =
      isPosInt(ttlResolution) || ttlResolution === 0
        ? ttlResolution
        : 1
    this.ttlAutopurge = !!ttlAutopurge
    this.ttl = ttl || maxAge || 0
    if (this.ttl) {
      if (!isPosInt(this.ttl)) {
        throw new TypeError(
          'ttl must be a positive integer if specified'
        )
      }
      this.initializeTTLTracking()
    }

    // do not allow completely unbounded caches
    if (this.max === 0 && this.ttl === 0 && this.maxSize === 0) {
      throw new TypeError(
        'At least one of max, maxSize, or ttl is required'
      )
    }
    if (!this.ttlAutopurge && !this.max && !this.maxSize) {
      const code = 'LRU_CACHE_UNBOUNDED'
      if (shouldWarn(code)) {
        warned.add(code)
        const msg =
          'TTL caching without ttlAutopurge, max, or maxSize can ' +
          'result in unbounded memory consumption.'
        emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache)
      }
    }

    if (stale) {
      deprecatedOption('stale', 'allowStale')
    }
    if (maxAge) {
      deprecatedOption('maxAge', 'ttl')
    }
    if (length) {
      deprecatedOption('length', 'sizeCalculation')
    }
  }

  getRemainingTTL(key) {
    return this.has(key, { updateAgeOnHas: false }) ? Infinity : 0
  }

  initializeTTLTracking() {
    this.ttls = new ZeroArray(this.max)
    this.starts = new ZeroArray(this.max)

    this.setItemTTL = (index, ttl, start = perf.now()) => {
      this.starts[index] = ttl !== 0 ? start : 0
      this.ttls[index] = ttl
      if (ttl !== 0 && this.ttlAutopurge) {
        const t = setTimeout(() => {
          if (this.isStale(index)) {
            this.delete(this.keyList[index])
          }
        }, ttl + 1)
        /* istanbul ignore else - unref() not supported on all platforms */
        if (t.unref) {
          t.unref()
        }
      }
    }

    this.updateItemAge = index => {
      this.starts[index] = this.ttls[index] !== 0 ? perf.now() : 0
    }

    this.statusTTL = (status, index) => {
      if (status) {
        status.ttl = this.ttls[index]
        status.start = this.starts[index]
        status.now = cachedNow || getNow()
        status.remainingTTL = status.now + status.ttl - status.start
      }
    }

    // debounce calls to perf.now() to 1s so we're not hitting
    // that costly call repeatedly.
    let cachedNow = 0
    const getNow = () => {
      const n = perf.now()
      if (this.ttlResolution > 0) {
        cachedNow = n
        const t = setTimeout(
          () => (cachedNow = 0),
          this.ttlResolution
        )
        /* istanbul ignore else - not available on all platforms */
        if (t.unref) {
          t.unref()
        }
      }
      return n
    }

    this.getRemainingTTL = key => {
      const index = this.keyMap.get(key)
      if (index === undefined) {
        return 0
      }
      return this.ttls[index] === 0 || this.starts[index] === 0
        ? Infinity
        : this.starts[index] +
            this.ttls[index] -
            (cachedNow || getNow())
    }

    this.isStale = index => {
      return (
        this.ttls[index] !== 0 &&
        this.starts[index] !== 0 &&
        (cachedNow || getNow()) - this.starts[index] >
          this.ttls[index]
      )
    }
  }
  updateItemAge(_index) {}
  statusTTL(_status, _index) {}
  setItemTTL(_index, _ttl, _start) {}
  isStale(_index) {
    return false
  }

  initializeSizeTracking() {
    this.calculatedSize = 0
    this.sizes = new ZeroArray(this.max)
    this.removeItemSize = index => {
      this.calculatedSize -= this.sizes[index]
      this.sizes[index] = 0
    }
    this.requireSize = (k, v, size, sizeCalculation) => {
      // provisionally accept background fetches.
      // actual value size will be checked when they return.
      if (this.isBackgroundFetch(v)) {
        return 0
      }
      if (!isPosInt(size)) {
        if (sizeCalculation) {
          if (typeof sizeCalculation !== 'function') {
            throw new TypeError('sizeCalculation must be a function')
          }
          size = sizeCalculation(v, k)
          if (!isPosInt(size)) {
            throw new TypeError(
              'sizeCalculation return invalid (expect positive integer)'
            )
          }
        } else {
          throw new TypeError(
            'invalid size value (must be positive integer). ' +
              'When maxSize or maxEntrySize is used, sizeCalculation or size ' +
              'must be set.'
          )
        }
      }
      return size
    }
    this.addItemSize = (index, size, status) => {
      this.sizes[index] = size
      if (this.maxSize) {
        const maxSize = this.maxSize - this.sizes[index]
        while (this.calculatedSize > maxSize) {
          this.evict(true)
        }
      }
      this.calculatedSize += this.sizes[index]
      if (status) {
        status.entrySize = size
        status.totalCalculatedSize = this.calculatedSize
      }
    }
  }
  removeItemSize(_index) {}
  addItemSize(_index, _size) {}
  requireSize(_k, _v, size, sizeCalculation) {
    if (size || sizeCalculation) {
      throw new TypeError(
        'cannot set size without setting maxSize or maxEntrySize on cache'
      )
    }
  }

  *indexes({ allowStale = this.allowStale } = {}) {
    if (this.size) {
      for (let i = this.tail; true; ) {
        if (!this.isValidIndex(i)) {
          break
        }
        if (allowStale || !this.isStale(i)) {
          yield i
        }
        if (i === this.head) {
          break
        } else {
          i = this.prev[i]
        }
      }
    }
  }

  *rindexes({ allowStale = this.allowStale } = {}) {
    if (this.size) {
      for (let i = this.head; true; ) {
        if (!this.isValidIndex(i)) {
          break
        }
        if (allowStale || !this.isStale(i)) {
          yield i
        }
        if (i === this.tail) {
          break
        } else {
          i = this.next[i]
        }
      }
    }
  }

  isValidIndex(index) {
    return (
      index !== undefined &&
      this.keyMap.get(this.keyList[index]) === index
    )
  }

  *entries() {
    for (const i of this.indexes()) {
      if (
        this.valList[i] !== undefined &&
        this.keyList[i] !== undefined &&
        !this.isBackgroundFetch(this.valList[i])
      ) {
        yield [this.keyList[i], this.valList[i]]
      }
    }
  }
  *rentries() {
    for (const i of this.rindexes()) {
      if (
        this.valList[i] !== undefined &&
        this.keyList[i] !== undefined &&
        !this.isBackgroundFetch(this.valList[i])
      ) {
        yield [this.keyList[i], this.valList[i]]
      }
    }
  }

  *keys() {
    for (const i of this.indexes()) {
      if (
        this.keyList[i] !== undefined &&
        !this.isBackgroundFetch(this.valList[i])
      ) {
        yield this.keyList[i]
      }
    }
  }
  *rkeys() {
    for (const i of this.rindexes()) {
      if (
        this.keyList[i] !== undefined &&
        !this.isBackgroundFetch(this.valList[i])
      ) {
        yield this.keyList[i]
      }
    }
  }

  *values() {
    for (const i of this.indexes()) {
      if (
        this.valList[i] !== undefined &&
        !this.isBackgroundFetch(this.valList[i])
      ) {
        yield this.valList[i]
      }
    }
  }
  *rvalues() {
    for (const i of this.rindexes()) {
      if (
        this.valList[i] !== undefined &&
        !this.isBackgroundFetch(this.valList[i])
      ) {
        yield this.valList[i]
      }
    }
  }

  [Symbol.iterator]() {
    return this.entries()
  }

  find(fn, getOptions) {
    for (const i of this.indexes()) {
      const v = this.valList[i]
      const value = this.isBackgroundFetch(v)
        ? v.__staleWhileFetching
        : v
      if (value === undefined) continue
      if (fn(value, this.keyList[i], this)) {
        return this.get(this.keyList[i], getOptions)
      }
    }
  }

  forEach(fn, thisp = this) {
    for (const i of this.indexes()) {
      const v = this.valList[i]
      const value = this.isBackgroundFetch(v)
        ? v.__staleWhileFetching
        : v
      if (value === undefined) continue
      fn.call(thisp, value, this.keyList[i], this)
    }
  }

  rforEach(fn, thisp = this) {
    for (const i of this.rindexes()) {
      const v = this.valList[i]
      const value = this.isBackgroundFetch(v)
        ? v.__staleWhileFetching
        : v
      if (value === undefined) continue
      fn.call(thisp, value, this.keyList[i], this)
    }
  }

  get prune() {
    deprecatedMethod('prune', 'purgeStale')
    return this.purgeStale
  }

  purgeStale() {
    let deleted = false
    for (const i of this.rindexes({ allowStale: true })) {
      if (this.isStale(i)) {
        this.delete(this.keyList[i])
        deleted = true
      }
    }
    return deleted
  }

  dump() {
    const arr = []
    for (const i of this.indexes({ allowStale: true })) {
      const key = this.keyList[i]
      const v = this.valList[i]
      const value = this.isBackgroundFetch(v)
        ? v.__staleWhileFetching
        : v
      if (value === undefined) continue
      const entry = { value }
      if (this.ttls) {
        entry.ttl = this.ttls[i]
        // always dump the start relative to a portable timestamp
        // it's ok for this to be a bit slow, it's a rare operation.
        const age = perf.now() - this.starts[i]
        entry.start = Math.floor(Date.now() - age)
      }
      if (this.sizes) {
        entry.size = this.sizes[i]
      }
      arr.unshift([key, entry])
    }
    return arr
  }

  load(arr) {
    this.clear()
    for (const [key, entry] of arr) {
      if (entry.start) {
        // entry.start is a portable timestamp, but we may be using
        // node's performance.now(), so calculate the offset.
        // it's ok for this to be a bit slow, it's a rare operation.
        const age = Date.now() - entry.start
        entry.start = perf.now() - age
      }
      this.set(key, entry.value, entry)
    }
  }

  dispose(_v, _k, _reason) {}

  set(
    k,
    v,
    {
      ttl = this.ttl,
      start,
      noDisposeOnSet = this.noDisposeOnSet,
      size = 0,
      sizeCalculation = this.sizeCalculation,
      noUpdateTTL = this.noUpdateTTL,
      status,
    } = {}
  ) {
    size = this.requireSize(k, v, size, sizeCalculation)
    // if the item doesn't fit, don't do anything
    // NB: maxEntrySize set to maxSize by default
    if (this.maxEntrySize && size > this.maxEntrySize) {
      if (status) {
        status.set = 'miss'
        status.maxEntrySizeExceeded = true
      }
      // have to delete, in case a background fetch is there already.
      // in non-async cases, this is a no-op
      this.delete(k)
      return this
    }
    let index = this.size === 0 ? undefined : this.keyMap.get(k)
    if (index === undefined) {
      // addition
      index = this.newIndex()
      this.keyList[index] = k
      this.valList[index] = v
      this.keyMap.set(k, index)
      this.next[this.tail] = index
      this.prev[index] = this.tail
      this.tail = index
      this.size++
      this.addItemSize(index, size, status)
      if (status) {
        status.set = 'add'
      }
      noUpdateTTL = false
    } else {
      // update
      this.moveToTail(index)
      const oldVal = this.valList[index]
      if (v !== oldVal) {
        if (this.isBackgroundFetch(oldVal)) {
          oldVal.__abortController.abort(new Error('replaced'))
        } else {
          if (!noDisposeOnSet) {
            this.dispose(oldVal, k, 'set')
            if (this.disposeAfter) {
              this.disposed.push([oldVal, k, 'set'])
            }
          }
        }
        this.removeItemSize(index)
        this.valList[index] = v
        this.addItemSize(index, size, status)
        if (status) {
          status.set = 'replace'
          const oldValue =
            oldVal && this.isBackgroundFetch(oldVal)
              ? oldVal.__staleWhileFetching
              : oldVal
          if (oldValue !== undefined) status.oldValue = oldValue
        }
      } else if (status) {
        status.set = 'update'
      }
    }
    if (ttl !== 0 && this.ttl === 0 && !this.ttls) {
      this.initializeTTLTracking()
    }
    if (!noUpdateTTL) {
      this.setItemTTL(index, ttl, start)
    }
    this.statusTTL(status, index)
    if (this.disposeAfter) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift())
      }
    }
    return this
  }

  newIndex() {
    if (this.size === 0) {
      return this.tail
    }
    if (this.size === this.max && this.max !== 0) {
      return this.evict(false)
    }
    if (this.free.length !== 0) {
      return this.free.pop()
    }
    // initial fill, just keep writing down the list
    return this.initialFill++
  }

  pop() {
    if (this.size) {
      const val = this.valList[this.head]
      this.evict(true)
      return val
    }
  }

  evict(free) {
    const head = this.head
    const k = this.keyList[head]
    const v = this.valList[head]
    if (this.isBackgroundFetch(v)) {
      v.__abortController.abort(new Error('evicted'))
    } else {
      this.dispose(v, k, 'evict')
      if (this.disposeAfter) {
        this.disposed.push([v, k, 'evict'])
      }
    }
    this.removeItemSize(head)
    // if we aren't about to use the index, then null these out
    if (free) {
      this.keyList[head] = null
      this.valList[head] = null
      this.free.push(head)
    }
    this.head = this.next[head]
    this.keyMap.delete(k)
    this.size--
    return head
  }

  has(k, { updateAgeOnHas = this.updateAgeOnHas, status } = {}) {
    const index = this.keyMap.get(k)
    if (index !== undefined) {
      if (!this.isStale(index)) {
        if (updateAgeOnHas) {
          this.updateItemAge(index)
        }
        if (status) status.has = 'hit'
        this.statusTTL(status, index)
        return true
      } else if (status) {
        status.has = 'stale'
        this.statusTTL(status, index)
      }
    } else if (status) {
      status.has = 'miss'
    }
    return false
  }

  // like get(), but without any LRU updating or TTL expiration
  peek(k, { allowStale = this.allowStale } = {}) {
    const index = this.keyMap.get(k)
    if (index !== undefined && (allowStale || !this.isStale(index))) {
      const v = this.valList[index]
      // either stale and allowed, or forcing a refresh of non-stale value
      return this.isBackgroundFetch(v) ? v.__staleWhileFetching : v
    }
  }

  backgroundFetch(k, index, options, context) {
    const v = index === undefined ? undefined : this.valList[index]
    if (this.isBackgroundFetch(v)) {
      return v
    }
    const ac = new AC()
    if (options.signal) {
      options.signal.addEventListener('abort', () =>
        ac.abort(options.signal.reason)
      )
    }
    const fetchOpts = {
      signal: ac.signal,
      options,
      context,
    }
    const cb = (v, updateCache = false) => {
      const { aborted } = ac.signal
      const ignoreAbort = options.ignoreFetchAbort && v !== undefined
      if (options.status) {
        if (aborted && !updateCache) {
          options.status.fetchAborted = true
          options.status.fetchError = ac.signal.reason
          if (ignoreAbort) options.status.fetchAbortIgnored = true
        } else {
          options.status.fetchResolved = true
        }
      }
      if (aborted && !ignoreAbort && !updateCache) {
        return fetchFail(ac.signal.reason)
      }
      // either we didn't abort, and are still here, or we did, and ignored
      if (this.valList[index] === p) {
        if (v === undefined) {
          if (p.__staleWhileFetching) {
            this.valList[index] = p.__staleWhileFetching
          } else {
            this.delete(k)
          }
        } else {
          if (options.status) options.status.fetchUpdated = true
          this.set(k, v, fetchOpts.options)
        }
      }
      return v
    }
    const eb = er => {
      if (options.status) {
        options.status.fetchRejected = true
        options.status.fetchError = er
      }
      return fetchFail(er)
    }
    const fetchFail = er => {
      const { aborted } = ac.signal
      const allowStaleAborted =
        aborted && options.allowStaleOnFetchAbort
      const allowStale =
        allowStaleAborted || options.allowStaleOnFetchRejection
      const noDelete = allowStale || options.noDeleteOnFetchRejection
      if (this.valList[index] === p) {
        // if we allow stale on fetch rejections, then we need to ensure that
        // the stale value is not removed from the cache when the fetch fails.
        const del = !noDelete || p.__staleWhileFetching === undefined
        if (del) {
          this.delete(k)
        } else if (!allowStaleAborted) {
          // still replace the *promise* with the stale value,
          // since we are done with the promise at this point.
          // leave it untouched if we're still waiting for an
          // aborted background fetch that hasn't yet returned.
          this.valList[index] = p.__staleWhileFetching
        }
      }
      if (allowStale) {
        if (options.status && p.__staleWhileFetching !== undefined) {
          options.status.returnedStale = true
        }
        return p.__staleWhileFetching
      } else if (p.__returned === p) {
        throw er
      }
    }
    const pcall = (res, rej) => {
      this.fetchMethod(k, v, fetchOpts).then(v => res(v), rej)
      // ignored, we go until we finish, regardless.
      // defer check until we are actually aborting,
      // so fetchMethod can override.
      ac.signal.addEventListener('abort', () => {
        if (
          !options.ignoreFetchAbort ||
          options.allowStaleOnFetchAbort
        ) {
          res()
          // when it eventually resolves, update the cache.
          if (options.allowStaleOnFetchAbort) {
            res = v => cb(v, true)
          }
        }
      })
    }
    if (options.status) options.status.fetchDispatched = true
    const p = new Promise(pcall).then(cb, eb)
    p.__abortController = ac
    p.__staleWhileFetching = v
    p.__returned = null
    if (index === undefined) {
      // internal, don't expose status.
      this.set(k, p, { ...fetchOpts.options, status: undefined })
      index = this.keyMap.get(k)
    } else {
      this.valList[index] = p
    }
    return p
  }

  isBackgroundFetch(p) {
    return (
      p &&
      typeof p === 'object' &&
      typeof p.then === 'function' &&
      Object.prototype.hasOwnProperty.call(
        p,
        '__staleWhileFetching'
      ) &&
      Object.prototype.hasOwnProperty.call(p, '__returned') &&
      (p.__returned === p || p.__returned === null)
    )
  }

  // this takes the union of get() and set() opts, because it does both
  async fetch(
    k,
    {
      // get options
      allowStale = this.allowStale,
      updateAgeOnGet = this.updateAgeOnGet,
      noDeleteOnStaleGet = this.noDeleteOnStaleGet,
      // set options
      ttl = this.ttl,
      noDisposeOnSet = this.noDisposeOnSet,
      size = 0,
      sizeCalculation = this.sizeCalculation,
      noUpdateTTL = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection = this.allowStaleOnFetchRejection,
      ignoreFetchAbort = this.ignoreFetchAbort,
      allowStaleOnFetchAbort = this.allowStaleOnFetchAbort,
      fetchContext = this.fetchContext,
      forceRefresh = false,
      status,
      signal,
    } = {}
  ) {
    if (!this.fetchMethod) {
      if (status) status.fetch = 'get'
      return this.get(k, {
        allowStale,
        updateAgeOnGet,
        noDeleteOnStaleGet,
        status,
      })
    }

    const options = {
      allowStale,
      updateAgeOnGet,
      noDeleteOnStaleGet,
      ttl,
      noDisposeOnSet,
      size,
      sizeCalculation,
      noUpdateTTL,
      noDeleteOnFetchRejection,
      allowStaleOnFetchRejection,
      allowStaleOnFetchAbort,
      ignoreFetchAbort,
      status,
      signal,
    }

    let index = this.keyMap.get(k)
    if (index === undefined) {
      if (status) status.fetch = 'miss'
      const p = this.backgroundFetch(k, index, options, fetchContext)
      return (p.__returned = p)
    } else {
      // in cache, maybe already fetching
      const v = this.valList[index]
      if (this.isBackgroundFetch(v)) {
        const stale =
          allowStale && v.__staleWhileFetching !== undefined
        if (status) {
          status.fetch = 'inflight'
          if (stale) status.returnedStale = true
        }
        return stale ? v.__staleWhileFetching : (v.__returned = v)
      }

      // if we force a refresh, that means do NOT serve the cached value,
      // unless we are already in the process of refreshing the cache.
      const isStale = this.isStale(index)
      if (!forceRefresh && !isStale) {
        if (status) status.fetch = 'hit'
        this.moveToTail(index)
        if (updateAgeOnGet) {
          this.updateItemAge(index)
        }
        this.statusTTL(status, index)
        return v
      }

      // ok, it is stale or a forced refresh, and not already fetching.
      // refresh the cache.
      const p = this.backgroundFetch(k, index, options, fetchContext)
      const hasStale = p.__staleWhileFetching !== undefined
      const staleVal = hasStale && allowStale
      if (status) {
        status.fetch = hasStale && isStale ? 'stale' : 'refresh'
        if (staleVal && isStale) status.returnedStale = true
      }
      return staleVal ? p.__staleWhileFetching : (p.__returned = p)
    }
  }

  get(
    k,
    {
      allowStale = this.allowStale,
      updateAgeOnGet = this.updateAgeOnGet,
      noDeleteOnStaleGet = this.noDeleteOnStaleGet,
      status,
    } = {}
  ) {
    const index = this.keyMap.get(k)
    if (index !== undefined) {
      const value = this.valList[index]
      const fetching = this.isBackgroundFetch(value)
      this.statusTTL(status, index)
      if (this.isStale(index)) {
        if (status) status.get = 'stale'
        // delete only if not an in-flight background fetch
        if (!fetching) {
          if (!noDeleteOnStaleGet) {
            this.delete(k)
          }
          if (status) status.returnedStale = allowStale
          return allowStale ? value : undefined
        } else {
          if (status) {
            status.returnedStale =
              allowStale && value.__staleWhileFetching !== undefined
          }
          return allowStale ? value.__staleWhileFetching : undefined
        }
      } else {
        if (status) status.get = 'hit'
        // if we're currently fetching it, we don't actually have it yet
        // it's not stale, which means this isn't a staleWhileRefetching.
        // If it's not stale, and fetching, AND has a __staleWhileFetching
        // value, then that means the user fetched with {forceRefresh:true},
        // so it's safe to return that value.
        if (fetching) {
          return value.__staleWhileFetching
        }
        this.moveToTail(index)
        if (updateAgeOnGet) {
          this.updateItemAge(index)
        }
        return value
      }
    } else if (status) {
      status.get = 'miss'
    }
  }

  connect(p, n) {
    this.prev[n] = p
    this.next[p] = n
  }

  moveToTail(index) {
    // if tail already, nothing to do
    // if head, move head to next[index]
    // else
    //   move next[prev[index]] to next[index] (head has no prev)
    //   move prev[next[index]] to prev[index]
    // prev[index] = tail
    // next[tail] = index
    // tail = index
    if (index !== this.tail) {
      if (index === this.head) {
        this.head = this.next[index]
      } else {
        this.connect(this.prev[index], this.next[index])
      }
      this.connect(this.tail, index)
      this.tail = index
    }
  }

  get del() {
    deprecatedMethod('del', 'delete')
    return this.delete
  }

  delete(k) {
    let deleted = false
    if (this.size !== 0) {
      const index = this.keyMap.get(k)
      if (index !== undefined) {
        deleted = true
        if (this.size === 1) {
          this.clear()
        } else {
          this.removeItemSize(index)
          const v = this.valList[index]
          if (this.isBackgroundFetch(v)) {
            v.__abortController.abort(new Error('deleted'))
          } else {
            this.dispose(v, k, 'delete')
            if (this.disposeAfter) {
              this.disposed.push([v, k, 'delete'])
            }
          }
          this.keyMap.delete(k)
          this.keyList[index] = null
          this.valList[index] = null
          if (index === this.tail) {
            this.tail = this.prev[index]
          } else if (index === this.head) {
            this.head = this.next[index]
          } else {
            this.next[this.prev[index]] = this.next[index]
            this.prev[this.next[index]] = this.prev[index]
          }
          this.size--
          this.free.push(index)
        }
      }
    }
    if (this.disposed) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift())
      }
    }
    return deleted
  }

  clear() {
    for (const index of this.rindexes({ allowStale: true })) {
      const v = this.valList[index]
      if (this.isBackgroundFetch(v)) {
        v.__abortController.abort(new Error('deleted'))
      } else {
        const k = this.keyList[index]
        this.dispose(v, k, 'delete')
        if (this.disposeAfter) {
          this.disposed.push([v, k, 'delete'])
        }
      }
    }

    this.keyMap.clear()
    this.valList.fill(null)
    this.keyList.fill(null)
    if (this.ttls) {
      this.ttls.fill(0)
      this.starts.fill(0)
    }
    if (this.sizes) {
      this.sizes.fill(0)
    }
    this.head = 0
    this.tail = 0
    this.initialFill = 1
    this.free.length = 0
    this.calculatedSize = 0
    this.size = 0
    if (this.disposed) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift())
      }
    }
  }

  get reset() {
    deprecatedMethod('reset', 'clear')
    return this.clear
  }

  get length() {
    deprecatedProperty('length', 'size')
    return this.size
  }

  static get AbortController() {
    return AC
  }
  static get AbortSignal() {
    return AS
  }
}

/* harmony default export */ const lru_cache = (LRUCache);

// EXTERNAL MODULE: external "path"
var external_path_ = __nccwpck_require__(17);
// EXTERNAL MODULE: external "url"
var external_url_ = __nccwpck_require__(310);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __nccwpck_require__(147);
var external_fs_namespaceObject = /*#__PURE__*/__nccwpck_require__.t(external_fs_, 2);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs/promises");
;// CONCATENATED MODULE: external "events"
const external_events_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("events");
// EXTERNAL MODULE: external "stream"
var external_stream_ = __nccwpck_require__(781);
;// CONCATENATED MODULE: external "string_decoder"
const external_string_decoder_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("string_decoder");
;// CONCATENATED MODULE: ./node_modules/minipass/index.mjs

const proc =
  typeof process === 'object' && process
    ? process
    : {
        stdout: null,
        stderr: null,
      }
;


const SD = external_string_decoder_namespaceObject.StringDecoder

const EOF = Symbol('EOF')
const MAYBE_EMIT_END = Symbol('maybeEmitEnd')
const EMITTED_END = Symbol('emittedEnd')
const EMITTING_END = Symbol('emittingEnd')
const EMITTED_ERROR = Symbol('emittedError')
const CLOSED = Symbol('closed')
const READ = Symbol('read')
const FLUSH = Symbol('flush')
const FLUSHCHUNK = Symbol('flushChunk')
const ENCODING = Symbol('encoding')
const DECODER = Symbol('decoder')
const FLOWING = Symbol('flowing')
const PAUSED = Symbol('paused')
const RESUME = Symbol('resume')
const BUFFER = Symbol('buffer')
const PIPES = Symbol('pipes')
const BUFFERLENGTH = Symbol('bufferLength')
const BUFFERPUSH = Symbol('bufferPush')
const BUFFERSHIFT = Symbol('bufferShift')
const OBJECTMODE = Symbol('objectMode')
// internal event when stream is destroyed
const DESTROYED = Symbol('destroyed')
// internal event when stream has an error
const ERROR = Symbol('error')
const EMITDATA = Symbol('emitData')
const EMITEND = Symbol('emitEnd')
const EMITEND2 = Symbol('emitEnd2')
const ASYNC = Symbol('async')
const ABORT = Symbol('abort')
const ABORTED = Symbol('aborted')
const SIGNAL = Symbol('signal')

const defer = fn => Promise.resolve().then(fn)

// TODO remove when Node v8 support drops
const doIter = global._MP_NO_ITERATOR_SYMBOLS_ !== '1'
const ASYNCITERATOR =
  (doIter && Symbol.asyncIterator) || Symbol('asyncIterator not implemented')
const ITERATOR =
  (doIter && Symbol.iterator) || Symbol('iterator not implemented')

// events that mean 'the stream is over'
// these are treated specially, and re-emitted
// if they are listened for after emitting.
const isEndish = ev => ev === 'end' || ev === 'finish' || ev === 'prefinish'

const isArrayBuffer = b =>
  b instanceof ArrayBuffer ||
  (typeof b === 'object' &&
    b.constructor &&
    b.constructor.name === 'ArrayBuffer' &&
    b.byteLength >= 0)

const isArrayBufferView = b => !Buffer.isBuffer(b) && ArrayBuffer.isView(b)

class Pipe {
  constructor(src, dest, opts) {
    this.src = src
    this.dest = dest
    this.opts = opts
    this.ondrain = () => src[RESUME]()
    dest.on('drain', this.ondrain)
  }
  unpipe() {
    this.dest.removeListener('drain', this.ondrain)
  }
  // istanbul ignore next - only here for the prototype
  proxyErrors() {}
  end() {
    this.unpipe()
    if (this.opts.end) this.dest.end()
  }
}

class PipeProxyErrors extends Pipe {
  unpipe() {
    this.src.removeListener('error', this.proxyErrors)
    super.unpipe()
  }
  constructor(src, dest, opts) {
    super(src, dest, opts)
    this.proxyErrors = er => dest.emit('error', er)
    src.on('error', this.proxyErrors)
  }
}

class Minipass extends external_stream_ {
  constructor(options) {
    super()
    this[FLOWING] = false
    // whether we're explicitly paused
    this[PAUSED] = false
    this[PIPES] = []
    this[BUFFER] = []
    this[OBJECTMODE] = (options && options.objectMode) || false
    if (this[OBJECTMODE]) this[ENCODING] = null
    else this[ENCODING] = (options && options.encoding) || null
    if (this[ENCODING] === 'buffer') this[ENCODING] = null
    this[ASYNC] = (options && !!options.async) || false
    this[DECODER] = this[ENCODING] ? new SD(this[ENCODING]) : null
    this[EOF] = false
    this[EMITTED_END] = false
    this[EMITTING_END] = false
    this[CLOSED] = false
    this[EMITTED_ERROR] = null
    this.writable = true
    this.readable = true
    this[BUFFERLENGTH] = 0
    this[DESTROYED] = false
    if (options && options.debugExposeBuffer === true) {
      Object.defineProperty(this, 'buffer', { get: () => this[BUFFER] })
    }
    if (options && options.debugExposePipes === true) {
      Object.defineProperty(this, 'pipes', { get: () => this[PIPES] })
    }
    this[SIGNAL] = options && options.signal
    this[ABORTED] = false
    if (this[SIGNAL]) {
      this[SIGNAL].addEventListener('abort', () => this[ABORT]())
      if (this[SIGNAL].aborted) {
        this[ABORT]()
      }
    }
  }

  get bufferLength() {
    return this[BUFFERLENGTH]
  }

  get encoding() {
    return this[ENCODING]
  }
  set encoding(enc) {
    if (this[OBJECTMODE]) throw new Error('cannot set encoding in objectMode')

    if (
      this[ENCODING] &&
      enc !== this[ENCODING] &&
      ((this[DECODER] && this[DECODER].lastNeed) || this[BUFFERLENGTH])
    )
      throw new Error('cannot change encoding')

    if (this[ENCODING] !== enc) {
      this[DECODER] = enc ? new SD(enc) : null
      if (this[BUFFER].length)
        this[BUFFER] = this[BUFFER].map(chunk => this[DECODER].write(chunk))
    }

    this[ENCODING] = enc
  }

  setEncoding(enc) {
    this.encoding = enc
  }

  get objectMode() {
    return this[OBJECTMODE]
  }
  set objectMode(om) {
    this[OBJECTMODE] = this[OBJECTMODE] || !!om
  }

  get ['async']() {
    return this[ASYNC]
  }
  set ['async'](a) {
    this[ASYNC] = this[ASYNC] || !!a
  }

  // drop everything and get out of the flow completely
  [ABORT]() {
    this[ABORTED] = true
    this.emit('abort', this[SIGNAL].reason)
    this.destroy(this[SIGNAL].reason)
  }

  get aborted() {
    return this[ABORTED]
  }
  set aborted(_) {}

  write(chunk, encoding, cb) {
    if (this[ABORTED]) return false
    if (this[EOF]) throw new Error('write after end')

    if (this[DESTROYED]) {
      this.emit(
        'error',
        Object.assign(
          new Error('Cannot call write after a stream was destroyed'),
          { code: 'ERR_STREAM_DESTROYED' }
        )
      )
      return true
    }

    if (typeof encoding === 'function') (cb = encoding), (encoding = 'utf8')

    if (!encoding) encoding = 'utf8'

    const fn = this[ASYNC] ? defer : f => f()

    // convert array buffers and typed array views into buffers
    // at some point in the future, we may want to do the opposite!
    // leave strings and buffers as-is
    // anything else switches us into object mode
    if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
      if (isArrayBufferView(chunk))
        chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength)
      else if (isArrayBuffer(chunk)) chunk = Buffer.from(chunk)
      else if (typeof chunk !== 'string')
        // use the setter so we throw if we have encoding set
        this.objectMode = true
    }

    // handle object mode up front, since it's simpler
    // this yields better performance, fewer checks later.
    if (this[OBJECTMODE]) {
      /* istanbul ignore if - maybe impossible? */
      if (this.flowing && this[BUFFERLENGTH] !== 0) this[FLUSH](true)

      if (this.flowing) this.emit('data', chunk)
      else this[BUFFERPUSH](chunk)

      if (this[BUFFERLENGTH] !== 0) this.emit('readable')

      if (cb) fn(cb)

      return this.flowing
    }

    // at this point the chunk is a buffer or string
    // don't buffer it up or send it to the decoder
    if (!chunk.length) {
      if (this[BUFFERLENGTH] !== 0) this.emit('readable')
      if (cb) fn(cb)
      return this.flowing
    }

    // fast-path writing strings of same encoding to a stream with
    // an empty buffer, skipping the buffer/decoder dance
    if (
      typeof chunk === 'string' &&
      // unless it is a string already ready for us to use
      !(encoding === this[ENCODING] && !this[DECODER].lastNeed)
    ) {
      chunk = Buffer.from(chunk, encoding)
    }

    if (Buffer.isBuffer(chunk) && this[ENCODING])
      chunk = this[DECODER].write(chunk)

    // Note: flushing CAN potentially switch us into not-flowing mode
    if (this.flowing && this[BUFFERLENGTH] !== 0) this[FLUSH](true)

    if (this.flowing) this.emit('data', chunk)
    else this[BUFFERPUSH](chunk)

    if (this[BUFFERLENGTH] !== 0) this.emit('readable')

    if (cb) fn(cb)

    return this.flowing
  }

  read(n) {
    if (this[DESTROYED]) return null

    if (this[BUFFERLENGTH] === 0 || n === 0 || n > this[BUFFERLENGTH]) {
      this[MAYBE_EMIT_END]()
      return null
    }

    if (this[OBJECTMODE]) n = null

    if (this[BUFFER].length > 1 && !this[OBJECTMODE]) {
      if (this.encoding) this[BUFFER] = [this[BUFFER].join('')]
      else this[BUFFER] = [Buffer.concat(this[BUFFER], this[BUFFERLENGTH])]
    }

    const ret = this[READ](n || null, this[BUFFER][0])
    this[MAYBE_EMIT_END]()
    return ret
  }

  [READ](n, chunk) {
    if (n === chunk.length || n === null) this[BUFFERSHIFT]()
    else {
      this[BUFFER][0] = chunk.slice(n)
      chunk = chunk.slice(0, n)
      this[BUFFERLENGTH] -= n
    }

    this.emit('data', chunk)

    if (!this[BUFFER].length && !this[EOF]) this.emit('drain')

    return chunk
  }

  end(chunk, encoding, cb) {
    if (typeof chunk === 'function') (cb = chunk), (chunk = null)
    if (typeof encoding === 'function') (cb = encoding), (encoding = 'utf8')
    if (chunk) this.write(chunk, encoding)
    if (cb) this.once('end', cb)
    this[EOF] = true
    this.writable = false

    // if we haven't written anything, then go ahead and emit,
    // even if we're not reading.
    // we'll re-emit if a new 'end' listener is added anyway.
    // This makes MP more suitable to write-only use cases.
    if (this.flowing || !this[PAUSED]) this[MAYBE_EMIT_END]()
    return this
  }

  // don't let the internal resume be overwritten
  [RESUME]() {
    if (this[DESTROYED]) return

    this[PAUSED] = false
    this[FLOWING] = true
    this.emit('resume')
    if (this[BUFFER].length) this[FLUSH]()
    else if (this[EOF]) this[MAYBE_EMIT_END]()
    else this.emit('drain')
  }

  resume() {
    return this[RESUME]()
  }

  pause() {
    this[FLOWING] = false
    this[PAUSED] = true
  }

  get destroyed() {
    return this[DESTROYED]
  }

  get flowing() {
    return this[FLOWING]
  }

  get paused() {
    return this[PAUSED]
  }

  [BUFFERPUSH](chunk) {
    if (this[OBJECTMODE]) this[BUFFERLENGTH] += 1
    else this[BUFFERLENGTH] += chunk.length
    this[BUFFER].push(chunk)
  }

  [BUFFERSHIFT]() {
    if (this[OBJECTMODE]) this[BUFFERLENGTH] -= 1
    else this[BUFFERLENGTH] -= this[BUFFER][0].length
    return this[BUFFER].shift()
  }

  [FLUSH](noDrain) {
    do {} while (this[FLUSHCHUNK](this[BUFFERSHIFT]()) && this[BUFFER].length)

    if (!noDrain && !this[BUFFER].length && !this[EOF]) this.emit('drain')
  }

  [FLUSHCHUNK](chunk) {
    this.emit('data', chunk)
    return this.flowing
  }

  pipe(dest, opts) {
    if (this[DESTROYED]) return

    const ended = this[EMITTED_END]
    opts = opts || {}
    if (dest === proc.stdout || dest === proc.stderr) opts.end = false
    else opts.end = opts.end !== false
    opts.proxyErrors = !!opts.proxyErrors

    // piping an ended stream ends immediately
    if (ended) {
      if (opts.end) dest.end()
    } else {
      this[PIPES].push(
        !opts.proxyErrors
          ? new Pipe(this, dest, opts)
          : new PipeProxyErrors(this, dest, opts)
      )
      if (this[ASYNC]) defer(() => this[RESUME]())
      else this[RESUME]()
    }

    return dest
  }

  unpipe(dest) {
    const p = this[PIPES].find(p => p.dest === dest)
    if (p) {
      this[PIPES].splice(this[PIPES].indexOf(p), 1)
      p.unpipe()
    }
  }

  addListener(ev, fn) {
    return this.on(ev, fn)
  }

  on(ev, fn) {
    const ret = super.on(ev, fn)
    if (ev === 'data' && !this[PIPES].length && !this.flowing) this[RESUME]()
    else if (ev === 'readable' && this[BUFFERLENGTH] !== 0)
      super.emit('readable')
    else if (isEndish(ev) && this[EMITTED_END]) {
      super.emit(ev)
      this.removeAllListeners(ev)
    } else if (ev === 'error' && this[EMITTED_ERROR]) {
      if (this[ASYNC]) defer(() => fn.call(this, this[EMITTED_ERROR]))
      else fn.call(this, this[EMITTED_ERROR])
    }
    return ret
  }

  get emittedEnd() {
    return this[EMITTED_END]
  }

  [MAYBE_EMIT_END]() {
    if (
      !this[EMITTING_END] &&
      !this[EMITTED_END] &&
      !this[DESTROYED] &&
      this[BUFFER].length === 0 &&
      this[EOF]
    ) {
      this[EMITTING_END] = true
      this.emit('end')
      this.emit('prefinish')
      this.emit('finish')
      if (this[CLOSED]) this.emit('close')
      this[EMITTING_END] = false
    }
  }

  emit(ev, data, ...extra) {
    // error and close are only events allowed after calling destroy()
    if (ev !== 'error' && ev !== 'close' && ev !== DESTROYED && this[DESTROYED])
      return
    else if (ev === 'data') {
      return !this[OBJECTMODE] && !data
        ? false
        : this[ASYNC]
        ? defer(() => this[EMITDATA](data))
        : this[EMITDATA](data)
    } else if (ev === 'end') {
      return this[EMITEND]()
    } else if (ev === 'close') {
      this[CLOSED] = true
      // don't emit close before 'end' and 'finish'
      if (!this[EMITTED_END] && !this[DESTROYED]) return
      const ret = super.emit('close')
      this.removeAllListeners('close')
      return ret
    } else if (ev === 'error') {
      this[EMITTED_ERROR] = data
      super.emit(ERROR, data)
      const ret =
        !this[SIGNAL] || this.listeners('error').length
          ? super.emit('error', data)
          : false
      this[MAYBE_EMIT_END]()
      return ret
    } else if (ev === 'resume') {
      const ret = super.emit('resume')
      this[MAYBE_EMIT_END]()
      return ret
    } else if (ev === 'finish' || ev === 'prefinish') {
      const ret = super.emit(ev)
      this.removeAllListeners(ev)
      return ret
    }

    // Some other unknown event
    const ret = super.emit(ev, data, ...extra)
    this[MAYBE_EMIT_END]()
    return ret
  }

  [EMITDATA](data) {
    for (const p of this[PIPES]) {
      if (p.dest.write(data) === false) this.pause()
    }
    const ret = super.emit('data', data)
    this[MAYBE_EMIT_END]()
    return ret
  }

  [EMITEND]() {
    if (this[EMITTED_END]) return

    this[EMITTED_END] = true
    this.readable = false
    if (this[ASYNC]) defer(() => this[EMITEND2]())
    else this[EMITEND2]()
  }

  [EMITEND2]() {
    if (this[DECODER]) {
      const data = this[DECODER].end()
      if (data) {
        for (const p of this[PIPES]) {
          p.dest.write(data)
        }
        super.emit('data', data)
      }
    }

    for (const p of this[PIPES]) {
      p.end()
    }
    const ret = super.emit('end')
    this.removeAllListeners('end')
    return ret
  }

  // const all = await stream.collect()
  collect() {
    const buf = []
    if (!this[OBJECTMODE]) buf.dataLength = 0
    // set the promise first, in case an error is raised
    // by triggering the flow here.
    const p = this.promise()
    this.on('data', c => {
      buf.push(c)
      if (!this[OBJECTMODE]) buf.dataLength += c.length
    })
    return p.then(() => buf)
  }

  // const data = await stream.concat()
  concat() {
    return this[OBJECTMODE]
      ? Promise.reject(new Error('cannot concat in objectMode'))
      : this.collect().then(buf =>
          this[OBJECTMODE]
            ? Promise.reject(new Error('cannot concat in objectMode'))
            : this[ENCODING]
            ? buf.join('')
            : Buffer.concat(buf, buf.dataLength)
        )
  }

  // stream.promise().then(() => done, er => emitted error)
  promise() {
    return new Promise((resolve, reject) => {
      this.on(DESTROYED, () => reject(new Error('stream destroyed')))
      this.on('error', er => reject(er))
      this.on('end', () => resolve())
    })
  }

  // for await (let chunk of stream)
  [ASYNCITERATOR]() {
    let stopped = false
    const stop = () => {
      this.pause()
      stopped = true
      return Promise.resolve({ done: true })
    }
    const next = () => {
      if (stopped) return stop()
      const res = this.read()
      if (res !== null) return Promise.resolve({ done: false, value: res })

      if (this[EOF]) return stop()

      let resolve = null
      let reject = null
      const onerr = er => {
        this.removeListener('data', ondata)
        this.removeListener('end', onend)
        this.removeListener(DESTROYED, ondestroy)
        stop()
        reject(er)
      }
      const ondata = value => {
        this.removeListener('error', onerr)
        this.removeListener('end', onend)
        this.removeListener(DESTROYED, ondestroy)
        this.pause()
        resolve({ value: value, done: !!this[EOF] })
      }
      const onend = () => {
        this.removeListener('error', onerr)
        this.removeListener('data', ondata)
        this.removeListener(DESTROYED, ondestroy)
        stop()
        resolve({ done: true })
      }
      const ondestroy = () => onerr(new Error('stream destroyed'))
      return new Promise((res, rej) => {
        reject = rej
        resolve = res
        this.once(DESTROYED, ondestroy)
        this.once('error', onerr)
        this.once('end', onend)
        this.once('data', ondata)
      })
    }

    return {
      next,
      throw: stop,
      return: stop,
      [ASYNCITERATOR]() {
        return this
      },
    }
  }

  // for (let chunk of stream)
  [ITERATOR]() {
    let stopped = false
    const stop = () => {
      this.pause()
      this.removeListener(ERROR, stop)
      this.removeListener(DESTROYED, stop)
      this.removeListener('end', stop)
      stopped = true
      return { done: true }
    }

    const next = () => {
      if (stopped) return stop()
      const value = this.read()
      return value === null ? stop() : { value }
    }
    this.once('end', stop)
    this.once(ERROR, stop)
    this.once(DESTROYED, stop)

    return {
      next,
      throw: stop,
      return: stop,
      [ITERATOR]() {
        return this
      },
    }
  }

  destroy(er) {
    if (this[DESTROYED]) {
      if (er) this.emit('error', er)
      else this.emit(DESTROYED)
      return this
    }

    this[DESTROYED] = true

    // throw away all buffered data, it's never coming out
    this[BUFFER].length = 0
    this[BUFFERLENGTH] = 0

    if (typeof this.close === 'function' && !this[CLOSED]) this.close()

    if (er) this.emit('error', er)
    // if no error to emit, still reject pending promises
    else this.emit(DESTROYED)

    return this
  }

  static isStream(s) {
    return (
      !!s &&
      (s instanceof Minipass ||
        s instanceof external_stream_ ||
        (s instanceof external_events_namespaceObject &&
          // readable
          (typeof s.pipe === 'function' ||
            // writable
            (typeof s.write === 'function' && typeof s.end === 'function'))))
    )
  }
}

/* harmony default export */ const minipass = (Minipass);

;// CONCATENATED MODULE: ./node_modules/path-scurry/dist/mjs/index.js





const realpathSync = external_fs_.realpathSync.native;
// TODO: test perf of fs/promises realpath vs realpathCB,
// since the promises one uses realpath.native


const defaultFS = {
    lstatSync: external_fs_.lstatSync,
    readdir: external_fs_.readdir,
    readdirSync: external_fs_.readdirSync,
    readlinkSync: external_fs_.readlinkSync,
    realpathSync,
    promises: {
        lstat: promises_namespaceObject.lstat,
        readdir: promises_namespaceObject.readdir,
        readlink: promises_namespaceObject.readlink,
        realpath: promises_namespaceObject.realpath,
    },
};
// if they just gave us require('fs') then use our default
const fsFromOption = (fsOption) => !fsOption || fsOption === defaultFS || fsOption === external_fs_namespaceObject
    ? defaultFS
    : {
        ...defaultFS,
        ...fsOption,
        promises: {
            ...defaultFS.promises,
            ...(fsOption.promises || {}),
        },
    };
// turn something like //?/c:/ into c:\
const uncDriveRegexp = /^\\\\\?\\([a-z]:)\\?$/i;
const uncToDrive = (rootPath) => rootPath.replace(/\//g, '\\').replace(uncDriveRegexp, '$1\\');
// windows paths are separated by either / or \
const eitherSep = /[\\\/]/;
const UNKNOWN = 0; // may not even exist, for all we know
const IFIFO = 0b0001;
const IFCHR = 0b0010;
const IFDIR = 0b0100;
const IFBLK = 0b0110;
const IFREG = 0b1000;
const IFLNK = 0b1010;
const IFSOCK = 0b1100;
const IFMT = 0b1111;
// mask to unset low 4 bits
const IFMT_UNKNOWN = ~IFMT;
// set after successfully calling readdir() and getting entries.
const READDIR_CALLED = 16;
// set after a successful lstat()
const LSTAT_CALLED = 32;
// set if an entry (or one of its parents) is definitely not a dir
const ENOTDIR = 64;
// set if an entry (or one of its parents) does not exist
// (can also be set on lstat errors like EACCES or ENAMETOOLONG)
const ENOENT = 128;
// cannot have child entries -- also verify &IFMT is either IFDIR or IFLNK
// set if we fail to readlink
const ENOREADLINK = 256;
// set if we know realpath() will fail
const ENOREALPATH = 512;
const ENOCHILD = ENOTDIR | ENOENT | ENOREALPATH;
const TYPEMASK = 1023;
const entToType = (s) => s.isFile()
    ? IFREG
    : s.isDirectory()
        ? IFDIR
        : s.isSymbolicLink()
            ? IFLNK
            : s.isCharacterDevice()
                ? IFCHR
                : s.isBlockDevice()
                    ? IFBLK
                    : s.isSocket()
                        ? IFSOCK
                        : s.isFIFO()
                            ? IFIFO
                            : UNKNOWN;
// normalize unicode path names
const normalizeCache = new Map();
const normalize = (s) => {
    const c = normalizeCache.get(s);
    if (c)
        return c;
    const n = s.normalize('NFKD');
    normalizeCache.set(s, n);
    return n;
};
const normalizeNocaseCache = new Map();
const normalizeNocase = (s) => {
    const c = normalizeNocaseCache.get(s);
    if (c)
        return c;
    const n = normalize(s.toLowerCase());
    normalizeNocaseCache.set(s, n);
    return n;
};
/**
 * An LRUCache for storing resolved path strings or Path objects.
 * @internal
 */
class ResolveCache extends lru_cache {
    constructor() {
        super({ max: 256 });
    }
}
// In order to prevent blowing out the js heap by allocating hundreds of
// thousands of Path entries when walking extremely large trees, the "children"
// in this tree are represented by storing an array of Path entries in an
// LRUCache, indexed by the parent.  At any time, Path.children() may return an
// empty array, indicating that it doesn't know about any of its children, and
// thus has to rebuild that cache.  This is fine, it just means that we don't
// benefit as much from having the cached entries, but huge directory walks
// don't blow out the stack, and smaller ones are still as fast as possible.
//
//It does impose some complexity when building up the readdir data, because we
//need to pass a reference to the children array that we started with.
/**
 * an LRUCache for storing child entries.
 * @internal
 */
class ChildrenCache extends lru_cache {
    constructor(maxSize = 16 * 1024) {
        super({
            maxSize,
            // parent + children
            sizeCalculation: a => a.length + 1,
        });
    }
}
/**
 * Path objects are sort of like a super-powered
 * {@link https://nodejs.org/docs/latest/api/fs.html#class-fsdirent fs.Dirent}
 *
 * Each one represents a single filesystem entry on disk, which may or may not
 * exist. It includes methods for reading various types of information via
 * lstat, readlink, and readdir, and caches all information to the greatest
 * degree possible.
 *
 * Note that fs operations that would normally throw will instead return an
 * "empty" value. This is in order to prevent excessive overhead from error
 * stack traces.
 */
class PathBase {
    /**
     * the basename of this path
     *
     * **Important**: *always* test the path name against any test string
     * usingthe {@link isNamed} method, and not by directly comparing this
     * string. Otherwise, unicode path strings that the system sees as identical
     * will not be properly treated as the same path, leading to incorrect
     * behavior and possible security issues.
     */
    name;
    /**
     * the Path entry corresponding to the path root.
     *
     * @internal
     */
    root;
    /**
     * All roots found within the current PathScurry family
     *
     * @internal
     */
    roots;
    /**
     * a reference to the parent path, or undefined in the case of root entries
     *
     * @internal
     */
    parent;
    /**
     * boolean indicating whether paths are compared case-insensitively
     * @internal
     */
    nocase;
    // potential default fs override
    #fs;
    // Stats fields
    #dev;
    get dev() {
        return this.#dev;
    }
    #mode;
    get mode() {
        return this.#mode;
    }
    #nlink;
    get nlink() {
        return this.#nlink;
    }
    #uid;
    get uid() {
        return this.#uid;
    }
    #gid;
    get gid() {
        return this.#gid;
    }
    #rdev;
    get rdev() {
        return this.#rdev;
    }
    #blksize;
    get blksize() {
        return this.#blksize;
    }
    #ino;
    get ino() {
        return this.#ino;
    }
    #size;
    get size() {
        return this.#size;
    }
    #blocks;
    get blocks() {
        return this.#blocks;
    }
    #atimeMs;
    get atimeMs() {
        return this.#atimeMs;
    }
    #mtimeMs;
    get mtimeMs() {
        return this.#mtimeMs;
    }
    #ctimeMs;
    get ctimeMs() {
        return this.#ctimeMs;
    }
    #birthtimeMs;
    get birthtimeMs() {
        return this.#birthtimeMs;
    }
    #atime;
    get atime() {
        return this.#atime;
    }
    #mtime;
    get mtime() {
        return this.#mtime;
    }
    #ctime;
    get ctime() {
        return this.#ctime;
    }
    #birthtime;
    get birthtime() {
        return this.#birthtime;
    }
    #matchName;
    #depth;
    #fullpath;
    #relative;
    #type;
    #children;
    #linkTarget;
    #realpath;
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */
    constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
        this.name = name;
        this.#matchName = nocase ? normalizeNocase(name) : normalize(name);
        this.#type = type & TYPEMASK;
        this.nocase = nocase;
        this.roots = roots;
        this.root = root || this;
        this.#children = children;
        this.#fullpath = opts.fullpath;
        this.#relative = opts.relative;
        this.parent = opts.parent;
        if (this.parent) {
            this.#fs = this.parent.#fs;
        }
        else {
            this.#fs = fsFromOption(opts.fs);
        }
    }
    /**
     * Returns the depth of the Path object from its root.
     *
     * For example, a path at `/foo/bar` would have a depth of 2.
     */
    depth() {
        if (this.#depth !== undefined)
            return this.#depth;
        if (!this.parent)
            return (this.#depth = 0);
        return (this.#depth = this.parent.depth() + 1);
    }
    /**
     * @internal
     */
    childrenCache() {
        return this.#children;
    }
    /**
     * Get the Path object referenced by the string path, resolved from this Path
     */
    resolve(path) {
        if (!path) {
            return this;
        }
        const rootPath = this.getRootString(path);
        const dir = path.substring(rootPath.length);
        const dirParts = dir.split(this.splitSep);
        const result = rootPath
            ? this.getRoot(rootPath).#resolveParts(dirParts)
            : this.#resolveParts(dirParts);
        return result;
    }
    #resolveParts(dirParts) {
        let p = this;
        for (const part of dirParts) {
            p = p.child(part);
        }
        return p;
    }
    /**
     * Returns the cached children Path objects, if still available.  If they
     * have fallen out of the cache, then returns an empty array, and resets the
     * READDIR_CALLED bit, so that future calls to readdir() will require an fs
     * lookup.
     *
     * @internal
     */
    children() {
        const cached = this.#children.get(this);
        if (cached) {
            return cached;
        }
        const children = Object.assign([], { provisional: 0 });
        this.#children.set(this, children);
        this.#type &= ~READDIR_CALLED;
        return children;
    }
    /**
     * Resolves a path portion and returns or creates the child Path.
     *
     * Returns `this` if pathPart is `''` or `'.'`, or `parent` if pathPart is
     * `'..'`.
     *
     * This should not be called directly.  If `pathPart` contains any path
     * separators, it will lead to unsafe undefined behavior.
     *
     * Use `Path.resolve()` instead.
     *
     * @internal
     */
    child(pathPart, opts) {
        if (pathPart === '' || pathPart === '.') {
            return this;
        }
        if (pathPart === '..') {
            return this.parent || this;
        }
        // find the child
        const children = this.children();
        const name = this.nocase
            ? normalizeNocase(pathPart)
            : normalize(pathPart);
        for (const p of children) {
            if (p.#matchName === name) {
                return p;
            }
        }
        // didn't find it, create provisional child, since it might not
        // actually exist.  If we know the parent isn't a dir, then
        // in fact it CAN'T exist.
        const s = this.parent ? this.sep : '';
        const fullpath = this.#fullpath
            ? this.#fullpath + s + pathPart
            : undefined;
        const pchild = this.newChild(pathPart, UNKNOWN, {
            ...opts,
            parent: this,
            fullpath,
        });
        if (!this.canReaddir()) {
            pchild.#type |= ENOENT;
        }
        // don't have to update provisional, because if we have real children,
        // then provisional is set to children.length, otherwise a lower number
        children.push(pchild);
        return pchild;
    }
    /**
     * The relative path from the cwd. If it does not share an ancestor with
     * the cwd, then this ends up being equivalent to the fullpath()
     */
    // TODO: instead of taking a param here, set it to '' in the constructor
    // for the CWD, and set it to this.name for any roots.
    relative() {
        if (this.#relative !== undefined) {
            return this.#relative;
        }
        const name = this.name;
        const p = this.parent;
        if (!p) {
            return (this.#relative = this.name);
        }
        const pv = p.relative();
        const rp = pv + (!pv || !p.parent ? '' : this.sep) + name;
        return (this.#relative = rp);
    }
    /**
     * The fully resolved path string for this Path entry
     */
    fullpath() {
        if (this.#fullpath !== undefined) {
            return this.#fullpath;
        }
        const name = this.name;
        const p = this.parent;
        if (!p) {
            return (this.#fullpath = this.name);
        }
        const pv = p.fullpath();
        const fp = pv + (!p.parent ? '' : this.sep) + name;
        return (this.#fullpath = fp);
    }
    /**
     * Is the Path of an unknown type?
     *
     * Note that we might know *something* about it if there has been a previous
     * filesystem operation, for example that it does not exist, or is not a
     * link, or whether it has child entries.
     */
    isUnknown() {
        return (this.#type & IFMT) === UNKNOWN;
    }
    /**
     * Is the Path a regular file?
     */
    isFile() {
        return (this.#type & IFMT) === IFREG;
    }
    /**
     * Is the Path a directory?
     */
    isDirectory() {
        return (this.#type & IFMT) === IFDIR;
    }
    /**
     * Is the path a character device?
     */
    isCharacterDevice() {
        return (this.#type & IFMT) === IFCHR;
    }
    /**
     * Is the path a block device?
     */
    isBlockDevice() {
        return (this.#type & IFMT) === IFBLK;
    }
    /**
     * Is the path a FIFO pipe?
     */
    isFIFO() {
        return (this.#type & IFMT) === IFIFO;
    }
    /**
     * Is the path a socket?
     */
    isSocket() {
        return (this.#type & IFMT) === IFSOCK;
    }
    /**
     * Is the path a symbolic link?
     */
    isSymbolicLink() {
        return (this.#type & IFLNK) === IFLNK;
    }
    /**
     * Return the entry if it has been subject of a successful lstat, or
     * undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* simply
     * mean that we haven't called lstat on it.
     */
    lstatCached() {
        return this.#type & LSTAT_CALLED ? this : undefined;
    }
    /**
     * Return the cached link target if the entry has been the subject of a
     * successful readlink, or undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * readlink() has been called at some point.
     */
    readlinkCached() {
        return this.#linkTarget;
    }
    /**
     * Returns the cached realpath target if the entry has been the subject
     * of a successful realpath, or undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * realpath() has been called at some point.
     */
    realpathCached() {
        return this.#realpath;
    }
    /**
     * Returns the cached child Path entries array if the entry has been the
     * subject of a successful readdir(), or [] otherwise.
     *
     * Does not read the filesystem, so an empty array *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * readdir() has been called recently enough to still be valid.
     */
    readdirCached() {
        const children = this.children();
        return children.slice(0, children.provisional);
    }
    /**
     * Return true if it's worth trying to readlink.  Ie, we don't (yet) have
     * any indication that readlink will definitely fail.
     *
     * Returns false if the path is known to not be a symlink, if a previous
     * readlink failed, or if the entry does not exist.
     */
    canReadlink() {
        if (this.#linkTarget)
            return true;
        if (!this.parent)
            return false;
        // cases where it cannot possibly succeed
        const ifmt = this.#type & IFMT;
        return !((ifmt !== UNKNOWN && ifmt !== IFLNK) ||
            this.#type & ENOREADLINK ||
            this.#type & ENOENT);
    }
    /**
     * Return true if readdir has previously been successfully called on this
     * path, indicating that cachedReaddir() is likely valid.
     */
    calledReaddir() {
        return !!(this.#type & READDIR_CALLED);
    }
    /**
     * Returns true if the path is known to not exist. That is, a previous lstat
     * or readdir failed to verify its existence when that would have been
     * expected, or a parent entry was marked either enoent or enotdir.
     */
    isENOENT() {
        return !!(this.#type & ENOENT);
    }
    /**
     * Return true if the path is a match for the given path name.  This handles
     * case sensitivity and unicode normalization.
     *
     * Note: even on case-sensitive systems, it is **not** safe to test the
     * equality of the `.name` property to determine whether a given pathname
     * matches, due to unicode normalization mismatches.
     *
     * Always use this method instead of testing the `path.name` property
     * directly.
     */
    isNamed(n) {
        return !this.nocase
            ? this.#matchName === normalize(n)
            : this.#matchName === normalizeNocase(n);
    }
    /**
     * Return the Path object corresponding to the target of a symbolic link.
     *
     * If the Path is not a symbolic link, or if the readlink call fails for any
     * reason, `undefined` is returned.
     *
     * Result is cached, and thus may be outdated if the filesystem is mutated.
     */
    async readlink() {
        const target = this.#linkTarget;
        if (target) {
            return target;
        }
        if (!this.canReadlink()) {
            return undefined;
        }
        /* c8 ignore start */
        // already covered by the canReadlink test, here for ts grumples
        if (!this.parent) {
            return undefined;
        }
        /* c8 ignore stop */
        try {
            const read = await this.#fs.promises.readlink(this.fullpath());
            const linkTarget = this.parent.resolve(read);
            if (linkTarget) {
                return (this.#linkTarget = linkTarget);
            }
        }
        catch (er) {
            this.#readlinkFail(er.code);
            return undefined;
        }
    }
    /**
     * Synchronous {@link PathBase.readlink}
     */
    readlinkSync() {
        const target = this.#linkTarget;
        if (target) {
            return target;
        }
        if (!this.canReadlink()) {
            return undefined;
        }
        /* c8 ignore start */
        // already covered by the canReadlink test, here for ts grumples
        if (!this.parent) {
            return undefined;
        }
        /* c8 ignore stop */
        try {
            const read = this.#fs.readlinkSync(this.fullpath());
            const linkTarget = this.parent.resolve(read);
            if (linkTarget) {
                return (this.#linkTarget = linkTarget);
            }
        }
        catch (er) {
            this.#readlinkFail(er.code);
            return undefined;
        }
    }
    #readdirSuccess(children) {
        // succeeded, mark readdir called bit
        this.#type |= READDIR_CALLED;
        // mark all remaining provisional children as ENOENT
        for (let p = children.provisional; p < children.length; p++) {
            children[p].#markENOENT();
        }
    }
    #markENOENT() {
        // mark as UNKNOWN and ENOENT
        if (this.#type & ENOENT)
            return;
        this.#type = (this.#type | ENOENT) & IFMT_UNKNOWN;
        this.#markChildrenENOENT();
    }
    #markChildrenENOENT() {
        // all children are provisional and do not exist
        const children = this.children();
        children.provisional = 0;
        for (const p of children) {
            p.#markENOENT();
        }
    }
    #markENOREALPATH() {
        this.#type |= ENOREALPATH;
        this.#markENOTDIR();
    }
    // save the information when we know the entry is not a dir
    #markENOTDIR() {
        // entry is not a directory, so any children can't exist.
        // this *should* be impossible, since any children created
        // after it's been marked ENOTDIR should be marked ENOENT,
        // so it won't even get to this point.
        /* c8 ignore start */
        if (this.#type & ENOTDIR)
            return;
        /* c8 ignore stop */
        let t = this.#type;
        // this could happen if we stat a dir, then delete it,
        // then try to read it or one of its children.
        if ((t & IFMT) === IFDIR)
            t &= IFMT_UNKNOWN;
        this.#type = t | ENOTDIR;
        this.#markChildrenENOENT();
    }
    #readdirFail(code = '') {
        // markENOTDIR and markENOENT also set provisional=0
        if (code === 'ENOTDIR' || code === 'EPERM') {
            this.#markENOTDIR();
        }
        else if (code === 'ENOENT') {
            this.#markENOENT();
        }
        else {
            this.children().provisional = 0;
        }
    }
    #lstatFail(code = '') {
        // Windows just raises ENOENT in this case, disable for win CI
        /* c8 ignore start */
        if (code === 'ENOTDIR') {
            // already know it has a parent by this point
            const p = this.parent;
            p.#markENOTDIR();
        }
        else if (code === 'ENOENT') {
            /* c8 ignore stop */
            this.#markENOENT();
        }
    }
    #readlinkFail(code = '') {
        let ter = this.#type;
        ter |= ENOREADLINK;
        if (code === 'ENOENT')
            ter |= ENOENT;
        // windows gets a weird error when you try to readlink a file
        if (code === 'EINVAL' || code === 'UNKNOWN') {
            // exists, but not a symlink, we don't know WHAT it is, so remove
            // all IFMT bits.
            ter &= IFMT_UNKNOWN;
        }
        this.#type = ter;
        // windows just gets ENOENT in this case.  We do cover the case,
        // just disabled because it's impossible on Windows CI
        /* c8 ignore start */
        if (code === 'ENOTDIR' && this.parent) {
            this.parent.#markENOTDIR();
        }
        /* c8 ignore stop */
    }
    #readdirAddChild(e, c) {
        return (this.#readdirMaybePromoteChild(e, c) ||
            this.#readdirAddNewChild(e, c));
    }
    #readdirAddNewChild(e, c) {
        // alloc new entry at head, so it's never provisional
        const type = entToType(e);
        const child = this.newChild(e.name, type, { parent: this });
        const ifmt = child.#type & IFMT;
        if (ifmt !== IFDIR && ifmt !== IFLNK && ifmt !== UNKNOWN) {
            child.#type |= ENOTDIR;
        }
        c.unshift(child);
        c.provisional++;
        return child;
    }
    #readdirMaybePromoteChild(e, c) {
        for (let p = c.provisional; p < c.length; p++) {
            const pchild = c[p];
            const name = this.nocase
                ? normalizeNocase(e.name)
                : normalize(e.name);
            if (name !== pchild.#matchName) {
                continue;
            }
            return this.#readdirPromoteChild(e, pchild, p, c);
        }
    }
    #readdirPromoteChild(e, p, index, c) {
        const v = p.name;
        // retain any other flags, but set ifmt from dirent
        p.#type = (p.#type & IFMT_UNKNOWN) | entToType(e);
        // case sensitivity fixing when we learn the true name.
        if (v !== e.name)
            p.name = e.name;
        // just advance provisional index (potentially off the list),
        // otherwise we have to splice/pop it out and re-insert at head
        if (index !== c.provisional) {
            if (index === c.length - 1)
                c.pop();
            else
                c.splice(index, 1);
            c.unshift(p);
        }
        c.provisional++;
        return p;
    }
    /**
     * Call lstat() on this Path, and update all known information that can be
     * determined.
     *
     * Note that unlike `fs.lstat()`, the returned value does not contain some
     * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
     * information is required, you will need to call `fs.lstat` yourself.
     *
     * If the Path refers to a nonexistent file, or if the lstat call fails for
     * any reason, `undefined` is returned.  Otherwise the updated Path object is
     * returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */
    async lstat() {
        if ((this.#type & ENOENT) === 0) {
            try {
                this.#applyStat(await this.#fs.promises.lstat(this.fullpath()));
                return this;
            }
            catch (er) {
                this.#lstatFail(er.code);
            }
        }
    }
    /**
     * synchronous {@link PathBase.lstat}
     */
    lstatSync() {
        if ((this.#type & ENOENT) === 0) {
            try {
                this.#applyStat(this.#fs.lstatSync(this.fullpath()));
                return this;
            }
            catch (er) {
                this.#lstatFail(er.code);
            }
        }
    }
    #applyStat(st) {
        const { atime, atimeMs, birthtime, birthtimeMs, blksize, blocks, ctime, ctimeMs, dev, gid, ino, mode, mtime, mtimeMs, nlink, rdev, size, uid, } = st;
        this.#atime = atime;
        this.#atimeMs = atimeMs;
        this.#birthtime = birthtime;
        this.#birthtimeMs = birthtimeMs;
        this.#blksize = blksize;
        this.#blocks = blocks;
        this.#ctime = ctime;
        this.#ctimeMs = ctimeMs;
        this.#dev = dev;
        this.#gid = gid;
        this.#ino = ino;
        this.#mode = mode;
        this.#mtime = mtime;
        this.#mtimeMs = mtimeMs;
        this.#nlink = nlink;
        this.#rdev = rdev;
        this.#size = size;
        this.#uid = uid;
        const ifmt = entToType(st);
        // retain any other flags, but set the ifmt
        this.#type = (this.#type & IFMT_UNKNOWN) | ifmt | LSTAT_CALLED;
        if (ifmt !== UNKNOWN && ifmt !== IFDIR && ifmt !== IFLNK) {
            this.#type |= ENOTDIR;
        }
    }
    #onReaddirCB = [];
    #readdirCBInFlight = false;
    #callOnReaddirCB(children) {
        this.#readdirCBInFlight = false;
        const cbs = this.#onReaddirCB.slice();
        this.#onReaddirCB.length = 0;
        cbs.forEach(cb => cb(null, children));
    }
    /**
     * Standard node-style callback interface to get list of directory entries.
     *
     * If the Path cannot or does not contain any children, then an empty array
     * is returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     *
     * @param cb The callback called with (er, entries).  Note that the `er`
     * param is somewhat extraneous, as all readdir() errors are handled and
     * simply result in an empty set of entries being returned.
     * @param allowZalgo Boolean indicating that immediately known results should
     * *not* be deferred with `queueMicrotask`. Defaults to `false`. Release
     * zalgo at your peril, the dark pony lord is devious and unforgiving.
     */
    readdirCB(cb, allowZalgo = false) {
        if (!this.canReaddir()) {
            if (allowZalgo)
                cb(null, []);
            else
                queueMicrotask(() => cb(null, []));
            return;
        }
        const children = this.children();
        if (this.calledReaddir()) {
            const c = children.slice(0, children.provisional);
            if (allowZalgo)
                cb(null, c);
            else
                queueMicrotask(() => cb(null, c));
            return;
        }
        // don't have to worry about zalgo at this point.
        this.#onReaddirCB.push(cb);
        if (this.#readdirCBInFlight) {
            return;
        }
        this.#readdirCBInFlight = true;
        // else read the directory, fill up children
        // de-provisionalize any provisional children.
        const fullpath = this.fullpath();
        this.#fs.readdir(fullpath, { withFileTypes: true }, (er, entries) => {
            if (er) {
                this.#readdirFail(er.code);
                children.provisional = 0;
            }
            else {
                // if we didn't get an error, we always get entries.
                //@ts-ignore
                for (const e of entries) {
                    this.#readdirAddChild(e, children);
                }
                this.#readdirSuccess(children);
            }
            this.#callOnReaddirCB(children.slice(0, children.provisional));
            return;
        });
    }
    #asyncReaddirInFlight;
    /**
     * Return an array of known child entries.
     *
     * If the Path cannot or does not contain any children, then an empty array
     * is returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */
    async readdir() {
        if (!this.canReaddir()) {
            return [];
        }
        const children = this.children();
        if (this.calledReaddir()) {
            return children.slice(0, children.provisional);
        }
        // else read the directory, fill up children
        // de-provisionalize any provisional children.
        const fullpath = this.fullpath();
        if (this.#asyncReaddirInFlight) {
            await this.#asyncReaddirInFlight;
        }
        else {
            /* c8 ignore start */
            let resolve = () => { };
            /* c8 ignore stop */
            this.#asyncReaddirInFlight = new Promise(res => (resolve = res));
            try {
                for (const e of await this.#fs.promises.readdir(fullpath, {
                    withFileTypes: true,
                })) {
                    this.#readdirAddChild(e, children);
                }
                this.#readdirSuccess(children);
            }
            catch (er) {
                this.#readdirFail(er.code);
                children.provisional = 0;
            }
            this.#asyncReaddirInFlight = undefined;
            resolve();
        }
        return children.slice(0, children.provisional);
    }
    /**
     * synchronous {@link PathBase.readdir}
     */
    readdirSync() {
        if (!this.canReaddir()) {
            return [];
        }
        const children = this.children();
        if (this.calledReaddir()) {
            return children.slice(0, children.provisional);
        }
        // else read the directory, fill up children
        // de-provisionalize any provisional children.
        const fullpath = this.fullpath();
        try {
            for (const e of this.#fs.readdirSync(fullpath, {
                withFileTypes: true,
            })) {
                this.#readdirAddChild(e, children);
            }
            this.#readdirSuccess(children);
        }
        catch (er) {
            this.#readdirFail(er.code);
            children.provisional = 0;
        }
        return children.slice(0, children.provisional);
    }
    canReaddir() {
        if (this.#type & ENOCHILD)
            return false;
        const ifmt = IFMT & this.#type;
        // we always set ENOTDIR when setting IFMT, so should be impossible
        /* c8 ignore start */
        if (!(ifmt === UNKNOWN || ifmt === IFDIR || ifmt === IFLNK)) {
            return false;
        }
        /* c8 ignore stop */
        return true;
    }
    shouldWalk(dirs, walkFilter) {
        return ((this.#type & IFDIR) === IFDIR &&
            !(this.#type & ENOCHILD) &&
            !dirs.has(this) &&
            (!walkFilter || walkFilter(this)));
    }
    /**
     * Return the Path object corresponding to path as resolved
     * by realpath(3).
     *
     * If the realpath call fails for any reason, `undefined` is returned.
     *
     * Result is cached, and thus may be outdated if the filesystem is mutated.
     * On success, returns a Path object.
     */
    async realpath() {
        if (this.#realpath)
            return this.#realpath;
        if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type)
            return undefined;
        try {
            const rp = await this.#fs.promises.realpath(this.fullpath());
            return (this.#realpath = this.resolve(rp));
        }
        catch (_) {
            this.#markENOREALPATH();
        }
    }
    /**
     * Synchronous {@link realpath}
     */
    realpathSync() {
        if (this.#realpath)
            return this.#realpath;
        if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type)
            return undefined;
        try {
            const rp = this.#fs.realpathSync(this.fullpath());
            return (this.#realpath = this.resolve(rp));
        }
        catch (_) {
            this.#markENOREALPATH();
        }
    }
}
/**
 * Path class used on win32 systems
 *
 * Uses `'\\'` as the path separator for returned paths, either `'\\'` or `'/'`
 * as the path separator for parsing paths.
 */
class PathWin32 extends PathBase {
    /**
     * Separator for generating path strings.
     */
    sep = '\\';
    /**
     * Separator for parsing path strings.
     */
    splitSep = eitherSep;
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */
    constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
        super(name, type, root, roots, nocase, children, opts);
    }
    /**
     * @internal
     */
    newChild(name, type = UNKNOWN, opts = {}) {
        return new PathWin32(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts);
    }
    /**
     * @internal
     */
    getRootString(path) {
        return external_path_.win32.parse(path).root;
    }
    /**
     * @internal
     */
    getRoot(rootPath) {
        rootPath = uncToDrive(rootPath.toUpperCase());
        if (rootPath === this.root.name) {
            return this.root;
        }
        // ok, not that one, check if it matches another we know about
        for (const [compare, root] of Object.entries(this.roots)) {
            if (this.sameRoot(rootPath, compare)) {
                return (this.roots[rootPath] = root);
            }
        }
        // otherwise, have to create a new one.
        return (this.roots[rootPath] = new PathScurryWin32(rootPath, this).root);
    }
    /**
     * @internal
     */
    sameRoot(rootPath, compare = this.root.name) {
        // windows can (rarely) have case-sensitive filesystem, but
        // UNC and drive letters are always case-insensitive, and canonically
        // represented uppercase.
        rootPath = rootPath
            .toUpperCase()
            .replace(/\//g, '\\')
            .replace(uncDriveRegexp, '$1\\');
        return rootPath === compare;
    }
}
/**
 * Path class used on all posix systems.
 *
 * Uses `'/'` as the path separator.
 */
class PathPosix extends PathBase {
    /**
     * separator for parsing path strings
     */
    splitSep = '/';
    /**
     * separator for generating path strings
     */
    sep = '/';
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */
    constructor(name, type = UNKNOWN, root, roots, nocase, children, opts) {
        super(name, type, root, roots, nocase, children, opts);
    }
    /**
     * @internal
     */
    getRootString(path) {
        return path.startsWith('/') ? '/' : '';
    }
    /**
     * @internal
     */
    getRoot(_rootPath) {
        return this.root;
    }
    /**
     * @internal
     */
    newChild(name, type = UNKNOWN, opts = {}) {
        return new PathPosix(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts);
    }
}
/**
 * The base class for all PathScurry classes, providing the interface for path
 * resolution and filesystem operations.
 *
 * Typically, you should *not* instantiate this class directly, but rather one
 * of the platform-specific classes, or the exported {@link PathScurry} which
 * defaults to the current platform.
 */
class PathScurryBase {
    /**
     * The root Path entry for the current working directory of this Scurry
     */
    root;
    /**
     * The string path for the root of this Scurry's current working directory
     */
    rootPath;
    /**
     * A collection of all roots encountered, referenced by rootPath
     */
    roots;
    /**
     * The Path entry corresponding to this PathScurry's current working directory.
     */
    cwd;
    #resolveCache;
    #children;
    /**
     * Perform path comparisons case-insensitively.
     *
     * Defaults true on Darwin and Windows systems, false elsewhere.
     */
    nocase;
    #fs;
    /**
     * This class should not be instantiated directly.
     *
     * Use PathScurryWin32, PathScurryDarwin, PathScurryPosix, or PathScurry
     *
     * @internal
     */
    constructor(cwd = process.cwd(), pathImpl, sep, { nocase, childrenCacheSize = 16 * 1024, fs = defaultFS, } = {}) {
        this.#fs = fsFromOption(fs);
        if (cwd instanceof URL || cwd.startsWith('file://')) {
            cwd = (0,external_url_.fileURLToPath)(cwd);
        }
        // resolve and split root, and then add to the store.
        // this is the only time we call path.resolve()
        const cwdPath = pathImpl.resolve(cwd);
        this.roots = Object.create(null);
        this.rootPath = this.parseRootPath(cwdPath);
        this.#resolveCache = new ResolveCache();
        this.#children = new ChildrenCache(childrenCacheSize);
        const split = cwdPath.substring(this.rootPath.length).split(sep);
        // resolve('/') leaves '', splits to [''], we don't want that.
        if (split.length === 1 && !split[0]) {
            split.pop();
        }
        /* c8 ignore start */
        if (nocase === undefined) {
            throw new TypeError('must provide nocase setting to PathScurryBase ctor');
        }
        /* c8 ignore stop */
        this.nocase = nocase;
        this.root = this.newRoot(this.#fs);
        this.roots[this.rootPath] = this.root;
        let prev = this.root;
        let len = split.length - 1;
        const joinSep = pathImpl.sep;
        let abs = this.rootPath;
        let sawFirst = false;
        for (const part of split) {
            prev = prev.child(part, {
                relative: new Array(len--).fill('..').join(joinSep),
                fullpath: (abs += (sawFirst ? '' : joinSep) + part),
            });
            sawFirst = true;
        }
        this.cwd = prev;
    }
    /**
     * Get the depth of a provided path, string, or the cwd
     */
    depth(path = this.cwd) {
        if (typeof path === 'string') {
            path = this.cwd.resolve(path);
        }
        return path.depth();
    }
    /**
     * Return the cache of child entries.  Exposed so subclasses can create
     * child Path objects in a platform-specific way.
     *
     * @internal
     */
    childrenCache() {
        return this.#children;
    }
    /**
     * Resolve one or more path strings to a resolved string
     *
     * Same interface as require('path').resolve.
     *
     * Much faster than path.resolve() when called multiple times for the same
     * path, because the resolved Path objects are cached.  Much slower
     * otherwise.
     */
    resolve(...paths) {
        // first figure out the minimum number of paths we have to test
        // we always start at cwd, but any absolutes will bump the start
        let r = '';
        for (let i = paths.length - 1; i >= 0; i--) {
            const p = paths[i];
            if (!p || p === '.')
                continue;
            r = r ? `${p}/${r}` : p;
            if (this.isAbsolute(p)) {
                break;
            }
        }
        const cached = this.#resolveCache.get(r);
        if (cached !== undefined) {
            return cached;
        }
        const result = this.cwd.resolve(r).fullpath();
        this.#resolveCache.set(r, result);
        return result;
    }
    /**
     * find the relative path from the cwd to the supplied path string or entry
     */
    relative(entry = this.cwd) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        return entry.relative();
    }
    /**
     * Return the basename for the provided string or Path object
     */
    basename(entry = this.cwd) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        return entry.name;
    }
    /**
     * Return the dirname for the provided string or Path object
     */
    dirname(entry = this.cwd) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        return (entry.parent || entry).fullpath();
    }
    async readdir(entry = this.cwd, opts = {
        withFileTypes: true,
    }) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes } = opts;
        if (!entry.canReaddir()) {
            return [];
        }
        else {
            const p = await entry.readdir();
            return withFileTypes ? p : p.map(e => e.name);
        }
    }
    readdirSync(entry = this.cwd, opts = {
        withFileTypes: true,
    }) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true } = opts;
        if (!entry.canReaddir()) {
            return [];
        }
        else if (withFileTypes) {
            return entry.readdirSync();
        }
        else {
            return entry.readdirSync().map(e => e.name);
        }
    }
    /**
     * Call lstat() on the string or Path object, and update all known
     * information that can be determined.
     *
     * Note that unlike `fs.lstat()`, the returned value does not contain some
     * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
     * information is required, you will need to call `fs.lstat` yourself.
     *
     * If the Path refers to a nonexistent file, or if the lstat call fails for
     * any reason, `undefined` is returned.  Otherwise the updated Path object is
     * returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */
    async lstat(entry = this.cwd) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        return entry.lstat();
    }
    /**
     * synchronous {@link PathScurryBase.lstat}
     */
    lstatSync(entry = this.cwd) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        return entry.lstatSync();
    }
    async readlink(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false,
    }) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            withFileTypes = entry.withFileTypes;
            entry = this.cwd;
        }
        const e = await entry.readlink();
        return withFileTypes ? e : e?.fullpath();
    }
    readlinkSync(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false,
    }) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            withFileTypes = entry.withFileTypes;
            entry = this.cwd;
        }
        const e = entry.readlinkSync();
        return withFileTypes ? e : e?.fullpath();
    }
    async realpath(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false,
    }) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            withFileTypes = entry.withFileTypes;
            entry = this.cwd;
        }
        const e = await entry.realpath();
        return withFileTypes ? e : e?.fullpath();
    }
    realpathSync(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false,
    }) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            withFileTypes = entry.withFileTypes;
            entry = this.cwd;
        }
        const e = entry.realpathSync();
        return withFileTypes ? e : e?.fullpath();
    }
    async walk(entry = this.cwd, opts = {}) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter, } = opts;
        const results = [];
        if (!filter || filter(entry)) {
            results.push(withFileTypes ? entry : entry.fullpath());
        }
        const dirs = new Set();
        const walk = (dir, cb) => {
            dirs.add(dir);
            dir.readdirCB((er, entries) => {
                /* c8 ignore start */
                if (er) {
                    return cb(er);
                }
                /* c8 ignore stop */
                let len = entries.length;
                if (!len)
                    return cb();
                const next = () => {
                    if (--len === 0) {
                        cb();
                    }
                };
                for (const e of entries) {
                    if (!filter || filter(e)) {
                        results.push(withFileTypes ? e : e.fullpath());
                    }
                    if (follow && e.isSymbolicLink()) {
                        e.realpath()
                            .then(r => (r?.isUnknown() ? r.lstat() : r))
                            .then(r => r?.shouldWalk(dirs, walkFilter) ? walk(r, next) : next());
                    }
                    else {
                        if (e.shouldWalk(dirs, walkFilter)) {
                            walk(e, next);
                        }
                        else {
                            next();
                        }
                    }
                }
            }, true); // zalgooooooo
        };
        const start = entry;
        return new Promise((res, rej) => {
            walk(start, er => {
                /* c8 ignore start */
                if (er)
                    return rej(er);
                /* c8 ignore stop */
                res(results);
            });
        });
    }
    walkSync(entry = this.cwd, opts = {}) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter, } = opts;
        const results = [];
        if (!filter || filter(entry)) {
            results.push(withFileTypes ? entry : entry.fullpath());
        }
        const dirs = new Set([entry]);
        for (const dir of dirs) {
            const entries = dir.readdirSync();
            for (const e of entries) {
                if (!filter || filter(e)) {
                    results.push(withFileTypes ? e : e.fullpath());
                }
                let r = e;
                if (e.isSymbolicLink()) {
                    if (!(follow && (r = e.realpathSync())))
                        continue;
                    if (r.isUnknown())
                        r.lstatSync();
                }
                if (r.shouldWalk(dirs, walkFilter)) {
                    dirs.add(r);
                }
            }
        }
        return results;
    }
    /**
     * Support for `for await`
     *
     * Alias for {@link PathScurryBase.iterate}
     *
     * Note: As of Node 19, this is very slow, compared to other methods of
     * walking.  Consider using {@link PathScurryBase.stream} if memory overhead
     * and backpressure are concerns, or {@link PathScurryBase.walk} if not.
     */
    [Symbol.asyncIterator]() {
        return this.iterate();
    }
    iterate(entry = this.cwd, options = {}) {
        // iterating async over the stream is significantly more performant,
        // especially in the warm-cache scenario, because it buffers up directory
        // entries in the background instead of waiting for a yield for each one.
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            options = entry;
            entry = this.cwd;
        }
        return this.stream(entry, options)[Symbol.asyncIterator]();
    }
    /**
     * Iterating over a PathScurry performs a synchronous walk.
     *
     * Alias for {@link PathScurryBase.iterateSync}
     */
    [Symbol.iterator]() {
        return this.iterateSync();
    }
    *iterateSync(entry = this.cwd, opts = {}) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter, } = opts;
        if (!filter || filter(entry)) {
            yield withFileTypes ? entry : entry.fullpath();
        }
        const dirs = new Set([entry]);
        for (const dir of dirs) {
            const entries = dir.readdirSync();
            for (const e of entries) {
                if (!filter || filter(e)) {
                    yield withFileTypes ? e : e.fullpath();
                }
                let r = e;
                if (e.isSymbolicLink()) {
                    if (!(follow && (r = e.realpathSync())))
                        continue;
                    if (r.isUnknown())
                        r.lstatSync();
                }
                if (r.shouldWalk(dirs, walkFilter)) {
                    dirs.add(r);
                }
            }
        }
    }
    stream(entry = this.cwd, opts = {}) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter, } = opts;
        const results = new minipass({ objectMode: true });
        if (!filter || filter(entry)) {
            results.write(withFileTypes ? entry : entry.fullpath());
        }
        const dirs = new Set();
        const queue = [entry];
        let processing = 0;
        const process = () => {
            let paused = false;
            while (!paused) {
                const dir = queue.shift();
                if (!dir) {
                    if (processing === 0)
                        results.end();
                    return;
                }
                processing++;
                dirs.add(dir);
                const onReaddir = (er, entries, didRealpaths = false) => {
                    /* c8 ignore start */
                    if (er)
                        return results.emit('error', er);
                    /* c8 ignore stop */
                    if (follow && !didRealpaths) {
                        const promises = [];
                        for (const e of entries) {
                            if (e.isSymbolicLink()) {
                                promises.push(e
                                    .realpath()
                                    .then((r) => r?.isUnknown() ? r.lstat() : r));
                            }
                        }
                        if (promises.length) {
                            Promise.all(promises).then(() => onReaddir(null, entries, true));
                            return;
                        }
                    }
                    for (const e of entries) {
                        if (e && (!filter || filter(e))) {
                            if (!results.write(withFileTypes ? e : e.fullpath())) {
                                paused = true;
                            }
                        }
                    }
                    processing--;
                    for (const e of entries) {
                        const r = e.realpathCached() || e;
                        if (r.shouldWalk(dirs, walkFilter)) {
                            queue.push(r);
                        }
                    }
                    if (paused && !results.flowing) {
                        results.once('drain', process);
                    }
                    else if (!sync) {
                        process();
                    }
                };
                // zalgo containment
                let sync = true;
                dir.readdirCB(onReaddir, true);
                sync = false;
            }
        };
        process();
        return results;
    }
    streamSync(entry = this.cwd, opts = {}) {
        if (typeof entry === 'string') {
            entry = this.cwd.resolve(entry);
        }
        else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter, } = opts;
        const results = new minipass({ objectMode: true });
        const dirs = new Set();
        if (!filter || filter(entry)) {
            results.write(withFileTypes ? entry : entry.fullpath());
        }
        const queue = [entry];
        let processing = 0;
        const process = () => {
            let paused = false;
            while (!paused) {
                const dir = queue.shift();
                if (!dir) {
                    if (processing === 0)
                        results.end();
                    return;
                }
                processing++;
                dirs.add(dir);
                const entries = dir.readdirSync();
                for (const e of entries) {
                    if (!filter || filter(e)) {
                        if (!results.write(withFileTypes ? e : e.fullpath())) {
                            paused = true;
                        }
                    }
                }
                processing--;
                for (const e of entries) {
                    let r = e;
                    if (e.isSymbolicLink()) {
                        if (!(follow && (r = e.realpathSync())))
                            continue;
                        if (r.isUnknown())
                            r.lstatSync();
                    }
                    if (r.shouldWalk(dirs, walkFilter)) {
                        queue.push(r);
                    }
                }
            }
            if (paused && !results.flowing)
                results.once('drain', process);
        };
        process();
        return results;
    }
}
/**
 * Windows implementation of {@link PathScurryBase}
 *
 * Defaults to case insensitve, uses `'\\'` to generate path strings.  Uses
 * {@link PathWin32} for Path objects.
 */
class PathScurryWin32 extends PathScurryBase {
    /**
     * separator for generating path strings
     */
    sep = '\\';
    constructor(cwd = process.cwd(), opts = {}) {
        const { nocase = true } = opts;
        super(cwd, external_path_.win32, '\\', { ...opts, nocase });
        this.nocase = nocase;
        for (let p = this.cwd; p; p = p.parent) {
            p.nocase = this.nocase;
        }
    }
    /**
     * @internal
     */
    parseRootPath(dir) {
        // if the path starts with a single separator, it's not a UNC, and we'll
        // just get separator as the root, and driveFromUNC will return \
        // In that case, mount \ on the root from the cwd.
        return external_path_.win32.parse(dir).root.toUpperCase();
    }
    /**
     * @internal
     */
    newRoot(fs) {
        return new PathWin32(this.rootPath, IFDIR, undefined, this.roots, this.nocase, this.childrenCache(), { fs });
    }
    /**
     * Return true if the provided path string is an absolute path
     */
    isAbsolute(p) {
        return (p.startsWith('/') || p.startsWith('\\') || /^[a-z]:(\/|\\)/i.test(p));
    }
}
/**
 * {@link PathScurryBase} implementation for all posix systems other than Darwin.
 *
 * Defaults to case-sensitive matching, uses `'/'` to generate path strings.
 *
 * Uses {@link PathPosix} for Path objects.
 */
class PathScurryPosix extends PathScurryBase {
    /**
     * separator for generating path strings
     */
    sep = '/';
    constructor(cwd = process.cwd(), opts = {}) {
        const { nocase = false } = opts;
        super(cwd, external_path_.posix, '/', { ...opts, nocase });
        this.nocase = nocase;
    }
    /**
     * @internal
     */
    parseRootPath(_dir) {
        return '/';
    }
    /**
     * @internal
     */
    newRoot(fs) {
        return new PathPosix(this.rootPath, IFDIR, undefined, this.roots, this.nocase, this.childrenCache(), { fs });
    }
    /**
     * Return true if the provided path string is an absolute path
     */
    isAbsolute(p) {
        return p.startsWith('/');
    }
}
/**
 * {@link PathScurryBase} implementation for Darwin (macOS) systems.
 *
 * Defaults to case-insensitive matching, uses `'/'` for generating path
 * strings.
 *
 * Uses {@link PathPosix} for Path objects.
 */
class PathScurryDarwin extends PathScurryPosix {
    constructor(cwd = process.cwd(), opts = {}) {
        const { nocase = true } = opts;
        super(cwd, { ...opts, nocase });
    }
}
/**
 * Default {@link PathBase} implementation for the current platform.
 *
 * {@link PathWin32} on Windows systems, {@link PathPosix} on all others.
 */
const Path = process.platform === 'win32' ? PathWin32 : PathPosix;
/**
 * Default {@link PathScurryBase} implementation for the current platform.
 *
 * {@link PathScurryWin32} on Windows systems, {@link PathScurryDarwin} on
 * Darwin (macOS) systems, {@link PathScurryPosix} on all others.
 */
const PathScurry = process.platform === 'win32'
    ? PathScurryWin32
    : process.platform === 'darwin'
        ? PathScurryDarwin
        : PathScurryPosix;
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/pattern.js
// this is just a very light wrapper around 2 arrays with an offset index

const isPatternList = (pl) => pl.length >= 1;
const isGlobList = (gl) => gl.length >= 1;
/**
 * An immutable-ish view on an array of glob parts and their parsed
 * results
 */
class Pattern {
    #patternList;
    #globList;
    #index;
    length;
    #platform;
    #rest;
    #globString;
    #isDrive;
    #isUNC;
    #isAbsolute;
    #followGlobstar = true;
    constructor(patternList, globList, index, platform) {
        if (!isPatternList(patternList)) {
            throw new TypeError('empty pattern list');
        }
        if (!isGlobList(globList)) {
            throw new TypeError('empty glob list');
        }
        if (globList.length !== patternList.length) {
            throw new TypeError('mismatched pattern list and glob list lengths');
        }
        this.length = patternList.length;
        if (index < 0 || index >= this.length) {
            throw new TypeError('index out of range');
        }
        this.#patternList = patternList;
        this.#globList = globList;
        this.#index = index;
        this.#platform = platform;
        // normalize root entries of absolute patterns on initial creation.
        if (this.#index === 0) {
            // c: => ['c:/']
            // C:/ => ['C:/']
            // C:/x => ['C:/', 'x']
            // //host/share => ['//host/share/']
            // //host/share/ => ['//host/share/']
            // //host/share/x => ['//host/share/', 'x']
            // /etc => ['/', 'etc']
            // / => ['/']
            if (this.isUNC()) {
                // '' / '' / 'host' / 'share'
                const [p0, p1, p2, p3, ...prest] = this.#patternList;
                const [g0, g1, g2, g3, ...grest] = this.#globList;
                if (prest[0] === '') {
                    // ends in /
                    prest.shift();
                    grest.shift();
                }
                const p = [p0, p1, p2, p3, ''].join('/');
                const g = [g0, g1, g2, g3, ''].join('/');
                this.#patternList = [p, ...prest];
                this.#globList = [g, ...grest];
                this.length = this.#patternList.length;
            }
            else if (this.isDrive() || this.isAbsolute()) {
                const [p1, ...prest] = this.#patternList;
                const [g1, ...grest] = this.#globList;
                if (prest[0] === '') {
                    // ends in /
                    prest.shift();
                    grest.shift();
                }
                const p = p1 + '/';
                const g = g1 + '/';
                this.#patternList = [p, ...prest];
                this.#globList = [g, ...grest];
                this.length = this.#patternList.length;
            }
        }
    }
    /**
     * The first entry in the parsed list of patterns
     */
    pattern() {
        return this.#patternList[this.#index];
    }
    /**
     * true of if pattern() returns a string
     */
    isString() {
        return typeof this.#patternList[this.#index] === 'string';
    }
    /**
     * true of if pattern() returns GLOBSTAR
     */
    isGlobstar() {
        return this.#patternList[this.#index] === GLOBSTAR;
    }
    /**
     * true if pattern() returns a regexp
     */
    isRegExp() {
        return this.#patternList[this.#index] instanceof RegExp;
    }
    /**
     * The /-joined set of glob parts that make up this pattern
     */
    globString() {
        return (this.#globString =
            this.#globString ||
                (this.#index === 0
                    ? this.isAbsolute()
                        ? this.#globList[0] + this.#globList.slice(1).join('/')
                        : this.#globList.join('/')
                    : this.#globList.slice(this.#index).join('/')));
    }
    /**
     * true if there are more pattern parts after this one
     */
    hasMore() {
        return this.length > this.#index + 1;
    }
    /**
     * The rest of the pattern after this part, or null if this is the end
     */
    rest() {
        if (this.#rest !== undefined)
            return this.#rest;
        if (!this.hasMore())
            return (this.#rest = null);
        this.#rest = new Pattern(this.#patternList, this.#globList, this.#index + 1, this.#platform);
        this.#rest.#isAbsolute = this.#isAbsolute;
        this.#rest.#isUNC = this.#isUNC;
        this.#rest.#isDrive = this.#isDrive;
        return this.#rest;
    }
    /**
     * true if the pattern represents a //unc/path/ on windows
     */
    isUNC() {
        const pl = this.#patternList;
        return this.#isUNC !== undefined
            ? this.#isUNC
            : (this.#isUNC =
                this.#platform === 'win32' &&
                    this.#index === 0 &&
                    pl[0] === '' &&
                    pl[1] === '' &&
                    typeof pl[2] === 'string' &&
                    !!pl[2] &&
                    typeof pl[3] === 'string' &&
                    !!pl[3]);
    }
    // pattern like C:/...
    // split = ['C:', ...]
    // XXX: would be nice to handle patterns like `c:*` to test the cwd
    // in c: for *, but I don't know of a way to even figure out what that
    // cwd is without actually chdir'ing into it?
    /**
     * True if the pattern starts with a drive letter on Windows
     */
    isDrive() {
        const pl = this.#patternList;
        return this.#isDrive !== undefined
            ? this.#isDrive
            : (this.#isDrive =
                this.#platform === 'win32' &&
                    this.#index === 0 &&
                    this.length > 1 &&
                    typeof pl[0] === 'string' &&
                    /^[a-z]:$/i.test(pl[0]));
    }
    // pattern = '/' or '/...' or '/x/...'
    // split = ['', ''] or ['', ...] or ['', 'x', ...]
    // Drive and UNC both considered absolute on windows
    /**
     * True if the pattern is rooted on an absolute path
     */
    isAbsolute() {
        const pl = this.#patternList;
        return this.#isAbsolute !== undefined
            ? this.#isAbsolute
            : (this.#isAbsolute =
                (pl[0] === '' && pl.length > 1) ||
                    this.isDrive() ||
                    this.isUNC());
    }
    /**
     * consume the root of the pattern, and return it
     */
    root() {
        const p = this.#patternList[0];
        return typeof p === 'string' && this.isAbsolute() && this.#index === 0
            ? p
            : '';
    }
    /**
     * Check to see if the current globstar pattern is allowed to follow
     * a symbolic link.
     */
    checkFollowGlobstar() {
        return !(this.#index === 0 ||
            !this.isGlobstar() ||
            !this.#followGlobstar);
    }
    /**
     * Mark that the current globstar pattern is following a symbolic link
     */
    markFollowGlobstar() {
        if (this.#index === 0 || !this.isGlobstar() || !this.#followGlobstar)
            return false;
        this.#followGlobstar = false;
        return true;
    }
}
//# sourceMappingURL=pattern.js.map
;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/ignore.js
// give it a pattern, and it'll be able to tell you if
// a given path should be ignored.
// Ignoring a path ignores its children if the pattern ends in /**
// Ignores are always parsed in dot:true mode


const ignore_defaultPlatform = typeof process === 'object' &&
    process &&
    typeof process.platform === 'string'
    ? process.platform
    : 'linux';
/**
 * Class used to process ignored patterns
 */
class Ignore {
    relative;
    relativeChildren;
    absolute;
    absoluteChildren;
    constructor(ignored, { nobrace, nocase, noext, noglobstar, platform = ignore_defaultPlatform, }) {
        this.relative = [];
        this.absolute = [];
        this.relativeChildren = [];
        this.absoluteChildren = [];
        const mmopts = {
            dot: true,
            nobrace,
            nocase,
            noext,
            noglobstar,
            optimizationLevel: 2,
            platform,
            nocomment: true,
            nonegate: true,
        };
        // this is a little weird, but it gives us a clean set of optimized
        // minimatch matchers, without getting tripped up if one of them
        // ends in /** inside a brace section, and it's only inefficient at
        // the start of the walk, not along it.
        // It'd be nice if the Pattern class just had a .test() method, but
        // handling globstars is a bit of a pita, and that code already lives
        // in minimatch anyway.
        // Another way would be if maybe Minimatch could take its set/globParts
        // as an option, and then we could at least just use Pattern to test
        // for absolute-ness.
        // Yet another way, Minimatch could take an array of glob strings, and
        // a cwd option, and do the right thing.
        for (const ign of ignored) {
            const mm = new Minimatch(ign, mmopts);
            for (let i = 0; i < mm.set.length; i++) {
                const parsed = mm.set[i];
                const globParts = mm.globParts[i];
                const p = new Pattern(parsed, globParts, 0, platform);
                const m = new Minimatch(p.globString(), mmopts);
                const children = globParts[globParts.length - 1] === '**';
                const absolute = p.isAbsolute();
                if (absolute)
                    this.absolute.push(m);
                else
                    this.relative.push(m);
                if (children) {
                    if (absolute)
                        this.absoluteChildren.push(m);
                    else
                        this.relativeChildren.push(m);
                }
            }
        }
    }
    ignored(p) {
        const fullpath = p.fullpath();
        const fullpaths = `${fullpath}/`;
        const relative = p.relative() || '.';
        const relatives = `${relative}/`;
        for (const m of this.relative) {
            if (m.match(relative) || m.match(relatives))
                return true;
        }
        for (const m of this.absolute) {
            if (m.match(fullpath) || m.match(fullpaths))
                return true;
        }
        return false;
    }
    childrenIgnored(p) {
        const fullpath = p.fullpath() + '/';
        const relative = (p.relative() || '.') + '/';
        for (const m of this.relativeChildren) {
            if (m.match(relative))
                return true;
        }
        for (const m of this.absoluteChildren) {
            if (m.match(fullpath))
                true;
        }
        return false;
    }
}
//# sourceMappingURL=ignore.js.map
;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/processor.js
// synchronous utility for filtering entries and calculating subwalks

/**
 * A cache of which patterns have been processed for a given Path
 */
class HasWalkedCache {
    store;
    constructor(store = new Map()) {
        this.store = store;
    }
    copy() {
        return new HasWalkedCache(new Map(this.store));
    }
    hasWalked(target, pattern) {
        return this.store.get(target.fullpath())?.has(pattern.globString());
    }
    storeWalked(target, pattern) {
        const fullpath = target.fullpath();
        const cached = this.store.get(fullpath);
        if (cached)
            cached.add(pattern.globString());
        else
            this.store.set(fullpath, new Set([pattern.globString()]));
    }
}
/**
 * A record of which paths have been matched in a given walk step,
 * and whether they only are considered a match if they are a directory,
 * and whether their absolute or relative path should be returned.
 */
class MatchRecord {
    store = new Map();
    add(target, absolute, ifDir) {
        const n = (absolute ? 2 : 0) | (ifDir ? 1 : 0);
        const current = this.store.get(target);
        this.store.set(target, current === undefined ? n : n & current);
    }
    // match, absolute, ifdir
    entries() {
        return [...this.store.entries()].map(([path, n]) => [
            path,
            !!(n & 2),
            !!(n & 1),
        ]);
    }
}
/**
 * A collection of patterns that must be processed in a subsequent step
 * for a given path.
 */
class SubWalks {
    store = new Map();
    add(target, pattern) {
        if (!target.canReaddir()) {
            return;
        }
        const subs = this.store.get(target);
        if (subs) {
            if (!subs.find(p => p.globString() === pattern.globString())) {
                subs.push(pattern);
            }
        }
        else
            this.store.set(target, [pattern]);
    }
    get(target) {
        const subs = this.store.get(target);
        /* c8 ignore start */
        if (!subs) {
            throw new Error('attempting to walk unknown path');
        }
        /* c8 ignore stop */
        return subs;
    }
    entries() {
        return this.keys().map(k => [k, this.store.get(k)]);
    }
    keys() {
        return [...this.store.keys()].filter(t => t.canReaddir());
    }
}
/**
 * The class that processes patterns for a given path.
 *
 * Handles child entry filtering, and determining whether a path's
 * directory contents must be read.
 */
class Processor {
    hasWalkedCache;
    matches = new MatchRecord();
    subwalks = new SubWalks();
    patterns;
    follow;
    dot;
    opts;
    constructor(opts, hasWalkedCache) {
        this.opts = opts;
        this.follow = !!opts.follow;
        this.dot = !!opts.dot;
        this.hasWalkedCache = hasWalkedCache
            ? hasWalkedCache.copy()
            : new HasWalkedCache();
    }
    processPatterns(target, patterns) {
        this.patterns = patterns;
        const processingSet = patterns.map(p => [target, p]);
        // map of paths to the magic-starting subwalks they need to walk
        // first item in patterns is the filter
        for (let [t, pattern] of processingSet) {
            this.hasWalkedCache.storeWalked(t, pattern);
            const root = pattern.root();
            const absolute = pattern.isAbsolute() && this.opts.absolute !== false;
            // start absolute patterns at root
            if (root) {
                t = t.resolve(root === '/' && this.opts.root !== undefined
                    ? this.opts.root
                    : root);
                const rest = pattern.rest();
                if (!rest) {
                    this.matches.add(t, true, false);
                    continue;
                }
                else {
                    pattern = rest;
                }
            }
            if (t.isENOENT())
                continue;
            let p;
            let rest;
            let changed = false;
            while (typeof (p = pattern.pattern()) === 'string' &&
                (rest = pattern.rest())) {
                const c = t.resolve(p);
                // we can be reasonably sure that .. is a readable dir
                if (c.isUnknown() && p !== '..')
                    break;
                t = c;
                pattern = rest;
                changed = true;
            }
            p = pattern.pattern();
            rest = pattern.rest();
            if (changed) {
                if (this.hasWalkedCache.hasWalked(t, pattern))
                    continue;
                this.hasWalkedCache.storeWalked(t, pattern);
            }
            // now we have either a final string for a known entry,
            // more strings for an unknown entry,
            // or a pattern starting with magic, mounted on t.
            if (typeof p === 'string') {
                // must be final entry
                if (!rest) {
                    const ifDir = p === '..' || p === '' || p === '.';
                    this.matches.add(t.resolve(p), absolute, ifDir);
                }
                else {
                    this.subwalks.add(t, pattern);
                }
                continue;
            }
            else if (p === GLOBSTAR) {
                // if no rest, match and subwalk pattern
                // if rest, process rest and subwalk pattern
                // if it's a symlink, but we didn't get here by way of a
                // globstar match (meaning it's the first time THIS globstar
                // has traversed a symlink), then we follow it. Otherwise, stop.
                if (!t.isSymbolicLink() ||
                    this.follow ||
                    pattern.checkFollowGlobstar()) {
                    this.subwalks.add(t, pattern);
                }
                const rp = rest?.pattern();
                const rrest = rest?.rest();
                if (!rest || ((rp === '' || rp === '.') && !rrest)) {
                    // only HAS to be a dir if it ends in **/ or **/.
                    // but ending in ** will match files as well.
                    this.matches.add(t, absolute, rp === '' || rp === '.');
                }
                else {
                    if (rp === '..') {
                        // this would mean you're matching **/.. at the fs root,
                        // and no thanks, I'm not gonna test that specific case.
                        /* c8 ignore start */
                        const tp = t.parent || t;
                        /* c8 ignore stop */
                        if (!rrest)
                            this.matches.add(tp, absolute, true);
                        else if (!this.hasWalkedCache.hasWalked(tp, rrest)) {
                            this.subwalks.add(tp, rrest);
                        }
                    }
                }
            }
            else if (p instanceof RegExp) {
                this.subwalks.add(t, pattern);
            }
        }
        return this;
    }
    subwalkTargets() {
        return this.subwalks.keys();
    }
    child() {
        return new Processor(this.opts, this.hasWalkedCache);
    }
    // return a new Processor containing the subwalks for each
    // child entry, and a set of matches, and
    // a hasWalkedCache that's a copy of this one
    // then we're going to call
    filterEntries(parent, entries) {
        const patterns = this.subwalks.get(parent);
        // put matches and entry walks into the results processor
        const results = this.child();
        for (const e of entries) {
            for (const pattern of patterns) {
                const absolute = pattern.isAbsolute();
                const p = pattern.pattern();
                const rest = pattern.rest();
                if (p === GLOBSTAR) {
                    results.testGlobstar(e, pattern, rest, absolute);
                }
                else if (p instanceof RegExp) {
                    results.testRegExp(e, p, rest, absolute);
                }
                else {
                    results.testString(e, p, rest, absolute);
                }
            }
        }
        return results;
    }
    testGlobstar(e, pattern, rest, absolute) {
        if (this.dot || !e.name.startsWith('.')) {
            if (!pattern.hasMore()) {
                this.matches.add(e, absolute, false);
            }
            if (e.canReaddir()) {
                // if we're in follow mode or it's not a symlink, just keep
                // testing the same pattern. If there's more after the globstar,
                // then this symlink consumes the globstar. If not, then we can
                // follow at most ONE symlink along the way, so we mark it, which
                // also checks to ensure that it wasn't already marked.
                if (this.follow || !e.isSymbolicLink()) {
                    this.subwalks.add(e, pattern);
                }
                else if (e.isSymbolicLink()) {
                    if (rest && pattern.checkFollowGlobstar()) {
                        this.subwalks.add(e, rest);
                    }
                    else if (pattern.markFollowGlobstar()) {
                        this.subwalks.add(e, pattern);
                    }
                }
            }
        }
        // if the NEXT thing matches this entry, then also add
        // the rest.
        if (rest) {
            const rp = rest.pattern();
            if (typeof rp === 'string' &&
                // dots and empty were handled already
                rp !== '..' &&
                rp !== '' &&
                rp !== '.') {
                this.testString(e, rp, rest.rest(), absolute);
            }
            else if (rp === '..') {
                /* c8 ignore start */
                const ep = e.parent || e;
                /* c8 ignore stop */
                this.subwalks.add(ep, rest);
            }
            else if (rp instanceof RegExp) {
                this.testRegExp(e, rp, rest.rest(), absolute);
            }
        }
    }
    testRegExp(e, p, rest, absolute) {
        if (!p.test(e.name))
            return;
        if (!rest) {
            this.matches.add(e, absolute, false);
        }
        else {
            this.subwalks.add(e, rest);
        }
    }
    testString(e, p, rest, absolute) {
        // should never happen?
        if (!e.isNamed(p))
            return;
        if (!rest) {
            this.matches.add(e, absolute, false);
        }
        else {
            this.subwalks.add(e, rest);
        }
    }
}
//# sourceMappingURL=processor.js.map
;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/walker.js
/**
 * Single-use utility classes to provide functionality to the {@link Glob}
 * methods.
 *
 * @module
 */



const makeIgnore = (ignore, opts) => typeof ignore === 'string'
    ? new Ignore([ignore], opts)
    : Array.isArray(ignore)
        ? new Ignore(ignore, opts)
        : ignore;
/**
 * basic walking utilities that all the glob walker types use
 */
class GlobUtil {
    path;
    patterns;
    opts;
    seen = new Set();
    paused = false;
    aborted = false;
    #onResume = [];
    #ignore;
    #sep;
    signal;
    maxDepth;
    constructor(patterns, path, opts) {
        this.patterns = patterns;
        this.path = path;
        this.opts = opts;
        this.#sep = opts.platform === 'win32' ? '\\' : '/';
        if (opts.ignore) {
            this.#ignore = makeIgnore(opts.ignore, opts);
        }
        // ignore, always set with maxDepth, but it's optional on the
        // GlobOptions type
        /* c8 ignore start */
        this.maxDepth = opts.maxDepth || Infinity;
        /* c8 ignore stop */
        if (opts.signal) {
            this.signal = opts.signal;
            this.signal.addEventListener('abort', () => {
                this.#onResume.length = 0;
            });
        }
    }
    #ignored(path) {
        return this.seen.has(path) || !!this.#ignore?.ignored?.(path);
    }
    #childrenIgnored(path) {
        return !!this.#ignore?.childrenIgnored?.(path);
    }
    // backpressure mechanism
    pause() {
        this.paused = true;
    }
    resume() {
        /* c8 ignore start */
        if (this.signal?.aborted)
            return;
        /* c8 ignore stop */
        this.paused = false;
        let fn = undefined;
        while (!this.paused && (fn = this.#onResume.shift())) {
            fn();
        }
    }
    onResume(fn) {
        if (this.signal?.aborted)
            return;
        /* c8 ignore start */
        if (!this.paused) {
            fn();
        }
        else {
            /* c8 ignore stop */
            this.#onResume.push(fn);
        }
    }
    // do the requisite realpath/stat checking, and return the path
    // to add or undefined to filter it out.
    async matchCheck(e, ifDir) {
        if (ifDir && this.opts.nodir)
            return undefined;
        let rpc;
        if (this.opts.realpath) {
            rpc = e.realpathCached() || (await e.realpath());
            if (!rpc)
                return undefined;
            e = rpc;
        }
        const needStat = e.isUnknown() || this.opts.stat;
        return this.matchCheckTest(needStat ? await e.lstat() : e, ifDir);
    }
    matchCheckTest(e, ifDir) {
        return e &&
            (this.maxDepth === Infinity || e.depth() <= this.maxDepth) &&
            (!ifDir || e.canReaddir()) &&
            (!this.opts.nodir || !e.isDirectory()) &&
            !this.#ignored(e)
            ? e
            : undefined;
    }
    matchCheckSync(e, ifDir) {
        if (ifDir && this.opts.nodir)
            return undefined;
        let rpc;
        if (this.opts.realpath) {
            rpc = e.realpathCached() || e.realpathSync();
            if (!rpc)
                return undefined;
            e = rpc;
        }
        const needStat = e.isUnknown() || this.opts.stat;
        return this.matchCheckTest(needStat ? e.lstatSync() : e, ifDir);
    }
    matchFinish(e, absolute) {
        if (this.#ignored(e))
            return;
        const abs = this.opts.absolute === undefined ? absolute : this.opts.absolute;
        this.seen.add(e);
        const mark = this.opts.mark && e.isDirectory() ? this.#sep : '';
        // ok, we have what we need!
        if (this.opts.withFileTypes) {
            this.matchEmit(e);
        }
        else if (abs) {
            this.matchEmit(e.fullpath() + mark);
        }
        else {
            const rel = e.relative();
            const pre = this.opts.dotRelative && !rel.startsWith('..' + this.#sep)
                ? '.' + this.#sep
                : '';
            this.matchEmit(!rel && mark ? '.' + mark : pre + rel + mark);
        }
    }
    async match(e, absolute, ifDir) {
        const p = await this.matchCheck(e, ifDir);
        if (p)
            this.matchFinish(p, absolute);
    }
    matchSync(e, absolute, ifDir) {
        const p = this.matchCheckSync(e, ifDir);
        if (p)
            this.matchFinish(p, absolute);
    }
    walkCB(target, patterns, cb) {
        /* c8 ignore start */
        if (this.signal?.aborted)
            cb();
        /* c8 ignore stop */
        this.walkCB2(target, patterns, new Processor(this.opts), cb);
    }
    walkCB2(target, patterns, processor, cb) {
        if (this.#childrenIgnored(target))
            return cb();
        if (this.signal?.aborted)
            cb();
        if (this.paused) {
            this.onResume(() => this.walkCB2(target, patterns, processor, cb));
            return;
        }
        processor.processPatterns(target, patterns);
        // done processing.  all of the above is sync, can be abstracted out.
        // subwalks is a map of paths to the entry filters they need
        // matches is a map of paths to [absolute, ifDir] tuples.
        let tasks = 1;
        const next = () => {
            if (--tasks === 0)
                cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()) {
            if (this.#ignored(m))
                continue;
            tasks++;
            this.match(m, absolute, ifDir).then(() => next());
        }
        for (const t of processor.subwalkTargets()) {
            if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
                continue;
            }
            tasks++;
            const childrenCached = t.readdirCached();
            if (t.calledReaddir())
                this.walkCB3(t, childrenCached, processor, next);
            else {
                t.readdirCB((_, entries) => this.walkCB3(t, entries, processor, next), true);
            }
        }
        next();
    }
    walkCB3(target, entries, processor, cb) {
        processor = processor.filterEntries(target, entries);
        let tasks = 1;
        const next = () => {
            if (--tasks === 0)
                cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()) {
            if (this.#ignored(m))
                continue;
            tasks++;
            this.match(m, absolute, ifDir).then(() => next());
        }
        for (const [target, patterns] of processor.subwalks.entries()) {
            tasks++;
            this.walkCB2(target, patterns, processor.child(), next);
        }
        next();
    }
    walkCBSync(target, patterns, cb) {
        /* c8 ignore start */
        if (this.signal?.aborted)
            cb();
        /* c8 ignore stop */
        this.walkCB2Sync(target, patterns, new Processor(this.opts), cb);
    }
    walkCB2Sync(target, patterns, processor, cb) {
        if (this.#childrenIgnored(target))
            return cb();
        if (this.signal?.aborted)
            cb();
        if (this.paused) {
            this.onResume(() => this.walkCB2Sync(target, patterns, processor, cb));
            return;
        }
        processor.processPatterns(target, patterns);
        // done processing.  all of the above is sync, can be abstracted out.
        // subwalks is a map of paths to the entry filters they need
        // matches is a map of paths to [absolute, ifDir] tuples.
        let tasks = 1;
        const next = () => {
            if (--tasks === 0)
                cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()) {
            if (this.#ignored(m))
                continue;
            this.matchSync(m, absolute, ifDir);
        }
        for (const t of processor.subwalkTargets()) {
            if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
                continue;
            }
            tasks++;
            const children = t.readdirSync();
            this.walkCB3Sync(t, children, processor, next);
        }
        next();
    }
    walkCB3Sync(target, entries, processor, cb) {
        processor = processor.filterEntries(target, entries);
        let tasks = 1;
        const next = () => {
            if (--tasks === 0)
                cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()) {
            if (this.#ignored(m))
                continue;
            this.matchSync(m, absolute, ifDir);
        }
        for (const [target, patterns] of processor.subwalks.entries()) {
            tasks++;
            this.walkCB2Sync(target, patterns, processor.child(), next);
        }
        next();
    }
}
class GlobWalker extends GlobUtil {
    matches;
    constructor(patterns, path, opts) {
        super(patterns, path, opts);
        this.matches = new Set();
    }
    matchEmit(e) {
        this.matches.add(e);
    }
    async walk() {
        if (this.signal?.aborted)
            throw this.signal.reason;
        if (this.path.isUnknown()) {
            await this.path.lstat();
        }
        await new Promise((res, rej) => {
            this.walkCB(this.path, this.patterns, () => {
                if (this.signal?.aborted) {
                    rej(this.signal.reason);
                }
                else {
                    res(this.matches);
                }
            });
        });
        return this.matches;
    }
    walkSync() {
        if (this.signal?.aborted)
            throw this.signal.reason;
        if (this.path.isUnknown()) {
            this.path.lstatSync();
        }
        // nothing for the callback to do, because this never pauses
        this.walkCBSync(this.path, this.patterns, () => {
            if (this.signal?.aborted)
                throw this.signal.reason;
        });
        return this.matches;
    }
}
class GlobStream extends GlobUtil {
    results;
    constructor(patterns, path, opts) {
        super(patterns, path, opts);
        this.results = new minipass({
            signal: this.signal,
            objectMode: true,
        });
        this.results.on('drain', () => this.resume());
        this.results.on('resume', () => this.resume());
    }
    matchEmit(e) {
        this.results.write(e);
        if (!this.results.flowing)
            this.pause();
    }
    stream() {
        const target = this.path;
        if (target.isUnknown()) {
            target.lstat().then(() => {
                this.walkCB(target, this.patterns, () => this.results.end());
            });
        }
        else {
            this.walkCB(target, this.patterns, () => this.results.end());
        }
        return this.results;
    }
    streamSync() {
        if (this.path.isUnknown()) {
            this.path.lstatSync();
        }
        this.walkCBSync(this.path, this.patterns, () => this.results.end());
        return this.results;
    }
}
//# sourceMappingURL=walker.js.map
;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/glob.js





// if no process global, just call it linux.
// so we default to case-sensitive, / separators
const glob_defaultPlatform = typeof process === 'object' &&
    process &&
    typeof process.platform === 'string'
    ? process.platform
    : 'linux';
/**
 * An object that can perform glob pattern traversals.
 */
class Glob {
    absolute;
    cwd;
    root;
    dot;
    dotRelative;
    follow;
    ignore;
    magicalBraces;
    mark;
    matchBase;
    maxDepth;
    nobrace;
    nocase;
    nodir;
    noext;
    noglobstar;
    pattern;
    platform;
    realpath;
    scurry;
    stat;
    signal;
    windowsPathsNoEscape;
    withFileTypes;
    /**
     * The options provided to the constructor.
     */
    opts;
    /**
     * An array of parsed immutable {@link Pattern} objects.
     */
    patterns;
    /**
     * All options are stored as properties on the `Glob` object.
     *
     * See {@link GlobOptions} for full options descriptions.
     *
     * Note that a previous `Glob` object can be passed as the
     * `GlobOptions` to another `Glob` instantiation to re-use settings
     * and caches with a new pattern.
     *
     * Traversal functions can be called multiple times to run the walk
     * again.
     */
    constructor(pattern, opts) {
        this.withFileTypes = !!opts.withFileTypes;
        this.signal = opts.signal;
        this.follow = !!opts.follow;
        this.dot = !!opts.dot;
        this.dotRelative = !!opts.dotRelative;
        this.nodir = !!opts.nodir;
        this.mark = !!opts.mark;
        if (!opts.cwd) {
            this.cwd = '';
        }
        else if (opts.cwd instanceof URL || opts.cwd.startsWith('file://')) {
            opts.cwd = (0,external_url_.fileURLToPath)(opts.cwd);
        }
        this.cwd = opts.cwd || '';
        this.root = opts.root;
        this.magicalBraces = !!opts.magicalBraces;
        this.nobrace = !!opts.nobrace;
        this.noext = !!opts.noext;
        this.realpath = !!opts.realpath;
        this.absolute = opts.absolute;
        this.noglobstar = !!opts.noglobstar;
        this.matchBase = !!opts.matchBase;
        this.maxDepth =
            typeof opts.maxDepth === 'number' ? opts.maxDepth : Infinity;
        this.stat = !!opts.stat;
        this.ignore = opts.ignore;
        if (this.withFileTypes && this.absolute !== undefined) {
            throw new Error('cannot set absolute and withFileTypes:true');
        }
        if (typeof pattern === 'string') {
            pattern = [pattern];
        }
        this.windowsPathsNoEscape =
            !!opts.windowsPathsNoEscape ||
                opts.allowWindowsEscape === false;
        if (this.windowsPathsNoEscape) {
            pattern = pattern.map(p => p.replace(/\\/g, '/'));
        }
        if (this.matchBase) {
            if (opts.noglobstar) {
                throw new TypeError('base matching requires globstar');
            }
            pattern = pattern.map(p => (p.includes('/') ? p : `./**/${p}`));
        }
        this.pattern = pattern;
        this.platform = opts.platform || glob_defaultPlatform;
        this.opts = { ...opts, platform: this.platform };
        if (opts.scurry) {
            this.scurry = opts.scurry;
            if (opts.nocase !== undefined &&
                opts.nocase !== opts.scurry.nocase) {
                throw new Error('nocase option contradicts provided scurry option');
            }
        }
        else {
            const Scurry = opts.platform === 'win32'
                ? PathScurryWin32
                : opts.platform === 'darwin'
                    ? PathScurryDarwin
                    : opts.platform
                        ? PathScurryPosix
                        : PathScurry;
            this.scurry = new Scurry(this.cwd, {
                nocase: opts.nocase,
                fs: opts.fs,
            });
        }
        this.nocase = this.scurry.nocase;
        const mmo = {
            // default nocase based on platform
            ...opts,
            dot: this.dot,
            matchBase: this.matchBase,
            nobrace: this.nobrace,
            nocase: this.nocase,
            nocaseMagicOnly: true,
            nocomment: true,
            noext: this.noext,
            nonegate: true,
            optimizationLevel: 2,
            platform: this.platform,
            windowsPathsNoEscape: this.windowsPathsNoEscape,
        };
        const mms = this.pattern.map(p => new Minimatch(p, mmo));
        const [matchSet, globParts] = mms.reduce((set, m) => {
            set[0].push(...m.set);
            set[1].push(...m.globParts);
            return set;
        }, [[], []]);
        this.patterns = matchSet.map((set, i) => {
            return new Pattern(set, globParts[i], 0, this.platform);
        });
    }
    async walk() {
        // Walkers always return array of Path objects, so we just have to
        // coerce them into the right shape.  It will have already called
        // realpath() if the option was set to do so, so we know that's cached.
        // start out knowing the cwd, at least
        return [
            ...(await new GlobWalker(this.patterns, this.scurry.cwd, {
                ...this.opts,
                maxDepth: this.maxDepth !== Infinity
                    ? this.maxDepth + this.scurry.cwd.depth()
                    : Infinity,
                platform: this.platform,
                nocase: this.nocase,
            }).walk()),
        ];
    }
    walkSync() {
        return [
            ...new GlobWalker(this.patterns, this.scurry.cwd, {
                ...this.opts,
                maxDepth: this.maxDepth !== Infinity
                    ? this.maxDepth + this.scurry.cwd.depth()
                    : Infinity,
                platform: this.platform,
                nocase: this.nocase,
            }).walkSync(),
        ];
    }
    stream() {
        return new GlobStream(this.patterns, this.scurry.cwd, {
            ...this.opts,
            maxDepth: this.maxDepth !== Infinity
                ? this.maxDepth + this.scurry.cwd.depth()
                : Infinity,
            platform: this.platform,
            nocase: this.nocase,
        }).stream();
    }
    streamSync() {
        return new GlobStream(this.patterns, this.scurry.cwd, {
            ...this.opts,
            maxDepth: this.maxDepth !== Infinity
                ? this.maxDepth + this.scurry.cwd.depth()
                : Infinity,
            platform: this.platform,
            nocase: this.nocase,
        }).streamSync();
    }
    /**
     * Default sync iteration function. Returns a Generator that
     * iterates over the results.
     */
    iterateSync() {
        return this.streamSync()[Symbol.iterator]();
    }
    [Symbol.iterator]() {
        return this.iterateSync();
    }
    /**
     * Default async iteration function. Returns an AsyncGenerator that
     * iterates over the results.
     */
    iterate() {
        return this.stream()[Symbol.asyncIterator]();
    }
    [Symbol.asyncIterator]() {
        return this.iterate();
    }
}
//# sourceMappingURL=glob.js.map
;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/has-magic.js

/**
 * Return true if the patterns provided contain any magic glob characters,
 * given the options provided.
 *
 * Brace expansion is not considered "magic" unless the `magicalBraces` option
 * is set, as brace expansion just turns one string into an array of strings.
 * So a pattern like `'x{a,b}y'` would return `false`, because `'xay'` and
 * `'xby'` both do not contain any magic glob characters, and it's treated the
 * same as if you had called it on `['xay', 'xby']`. When `magicalBraces:true`
 * is in the options, brace expansion _is_ treated as a pattern having magic.
 */
const hasMagic = (pattern, options = {}) => {
    if (!Array.isArray(pattern)) {
        pattern = [pattern];
    }
    for (const p of pattern) {
        if (new Minimatch(p, options).hasMagic())
            return true;
    }
    return false;
};
//# sourceMappingURL=has-magic.js.map
;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/index.js



function globStreamSync(pattern, options = {}) {
    return new Glob(pattern, options).streamSync();
}
function globStream(pattern, options = {}) {
    return new Glob(pattern, options).stream();
}
function globSync(pattern, options = {}) {
    return new Glob(pattern, options).walkSync();
}
async function glob(pattern, options = {}) {
    return new Glob(pattern, options).walk();
}
function globIterateSync(pattern, options = {}) {
    return new Glob(pattern, options).iterateSync();
}
function globIterate(pattern, options = {}) {
    return new Glob(pattern, options).iterate();
}
// aliases: glob.sync.stream() glob.stream.sync() glob.sync() etc
const streamSync = globStreamSync;
const stream = Object.assign(globStream, { sync: globStreamSync });
const iterateSync = globIterateSync;
const iterate = Object.assign(globIterate, {
    sync: globIterateSync,
});
const sync = Object.assign(globSync, {
    stream: globStreamSync,
    iterate: globIterateSync,
});
/* c8 ignore start */



/* c8 ignore stop */
/* harmony default export */ const dist_mjs = (Object.assign(glob, {
    glob,
    globSync,
    sync,
    globStream,
    stream,
    globStreamSync,
    streamSync,
    globIterate,
    iterate,
    globIterateSync,
    iterateSync,
    Glob: Glob,
    hasMagic: hasMagic,
    escape: escape_escape,
    unescape: unescape_unescape,
}));
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@transifex/api/dist/node.transifexApi.js
var node_transifexApi = __nccwpck_require__(539);
;// CONCATENATED MODULE: ./src/transifex_helper.js



class TransifexApiHelper {
    #organization = null;
    #project = null;
    #resources = null;

    token;
    organization_name;
    project_name;
    language_code;

    //
    constructor(token, organization_name, project_name) {
        this.token = token;
        this.organization_name = organization_name;
        this.project_name = project_name;
    }

    static async create(token, organization_name, project_name) {
        const helper = new TransifexApiHelper(token, organization_name, project_name);
        await helper.initialize();
        return helper;
    }

    //
    async initialize() {
        // API token authentication
        node_transifexApi.transifexApi.setup({ auth: this.token });

        await this.#getOrganization();
        await this.#getProject();

        this.#resources = await this.#project.fetch("resources");
        await this.#resources.fetch();

        this.language_code = await this.getSourceLanguage();
    }

    //
    async getProjectFiles() {
        let resource_files = [];
        for (const r of this.#resources.data) {
            resource_files.push({ id: r.id, name: r.attributes.name, type: r.attributes.i18n_type });
        }

        return resource_files;
    }

    //
    async getSourceLanguage() {
        const src_lang = await this.#project.fetch("source_language");
        return src_lang.attributes.code;
    }

    //
    async #getOrganization() {
        for await (const org of node_transifexApi.transifexApi.Organization.all()) {
            if (org.attributes.name == this.organization_name) {
                this.#organization = org;
                break;
            }
        }

        if (!this.#organization) {
            throw new Error("Organization not found");
        }

        return this.#organization;
    }

    //
    async #getProject() {
        const projects = await this.#organization.fetch("projects");
        this.#project = await projects.get({ name: this.project_name });
        if (!this.#project) {
            throw new Error("Project not found");
        }
        return this.#project;
    }

    //
    async updateResource(resource_name, content) {
        const resource = await this.#resources.get({ name: resource_name });
        return node_transifexApi.transifexApi.ResourceStringsAsyncUpload.upload({
            resource,
            content,
        });
    }

    //
    async createResoure(resource_name) {
        const slug = external_path_.basename(resource_name, external_path_.extname(resource_name))
            .replace(/(\.|\s)/g, "_");

        return node_transifexApi.transifexApi.Resource.create({
            name: resource_name,
            slug,
            project: this.#project,
            relationships: {
                i18n_format: {
                    data: {
                        id: 'INI',
                        type: 'i18n_formats'
                    }
                }
            }
        });
    }

    //
    async createResoureWithContent(resource_name, content) {
        const new_resource = await this.createResoure(resource_name);
        // const sleep = ms => new Promise(r => setTimeout(r, ms));
        // await sleep(5000);
        try {
            return node_transifexApi.transifexApi.ResourceStringsAsyncUpload.upload({
                resource: new_resource,
                content,
            });
        }
        catch (e) {
            console.error(e);
        }
    }

    //
    async deleteResource(resource_name) {
        const res = await this.#resources.get({ name: resource_name });
        return res.delete();
    }
}

;// CONCATENATED MODULE: ./src/index.js






/**
 * Helper functions
 */

// Returns matched filenames based on the given list of glob patterns
const getRepoLanguageFiles = patterns => patterns.reduce((matched, pattern) => matched.concat(globSync(pattern, { ignore: ['node_modules/**', 'vendor/**'] })), []);

// Match a list of filenames against a list of glob patterns
const matchFiles = (files, patterns) => files.filter(f => patterns.find(p => minimatch(f, p)), []).filter(m => m != null);

// Prepares array values (a comma separated string) from env variables
const prepareEnvArrayValue = env_var => env_var.split(",").filter(env_var => env_var != '');

// Converts a filename to it's Transifex project resource name
function convertRepoNameToTransifexName(repo_filename, tfx_name_pattern) {
  const directory = external_path_.dirname(repo_filename);
  const extension = external_path_.extname(repo_filename);

  const filename_regex = '(?<filename>[a-zA-Z0-9_\\.\\-\\s]+)';

  const resource_name_regex_str = tfx_name_pattern
    .replace(/\./g, "\\.")
    .replace("<filename>", filename_regex)
    .replace("<ext>", extension)
    .replace("<directory>", directory);

  const resource_name_regex = new RegExp(resource_name_regex_str);
  const match = tfx_name_pattern.includes("<directory>") ? repo_filename.match(resource_name_regex) : external_path_.basename(repo_filename).match(resource_name_regex);
  if (match) {
    return tfx_name_pattern
      .replace("<filename>", match.groups.filename)
      .replace("<ext>", extension)
      .replace("<directory>", directory);
  }
  else {
    // Should never get here
    throw new Error("No match found for " + repo_filename + " and tfx_name_pattern: " + tfx_name_pattern);
  }
}

//
const extraFilesOnRepo = (transifexFiles, repoFiles, name_pattern) => repoFiles.filter(f => !transifexFiles.includes(convertRepoNameToTransifexName(f, name_pattern)));

//
const extraFilesOnTransifex = (transifexFiles, repoFiles, name_pattern) => transifexFiles.filter(f => !repoFiles.map(f_ => convertRepoNameToTransifexName(f_, name_pattern)).includes(f));


/**
 * Action entrypoint
 */
async function main() {
  // Check if force upload is enabled
  let force_upload = false;
  if (process.env.force_upload.toLowerCase() == 'true' || process.env.force_upload == '1') {
    console.log("---Force Upload Enabled---");
    force_upload = true;
  }

  // Get input and enviroment variables from the Action's context
  const commit_changes = {
    added: prepareEnvArrayValue(process.env.added),
    modified: prepareEnvArrayValue(process.env.modified),
    deleted: prepareEnvArrayValue(process.env.deleted),
    copied: prepareEnvArrayValue(process.env.copied),
    renamed: prepareEnvArrayValue(process.env.renamed),
  };

  const tfx_org = process.env.transifex_organization;
  const tfx_token = process.env.transifex_token;
  const tfx_project = process.env.transifex_project;
  const file_extension = process.env.file_extension;
  const tfx_name_pattern = process.env.transifex_name_pattern;
  // const tfx_file_type = process.env.transifex_file_type;


  // Setup Transifex helper and get project details
  const tfxHelper = await TransifexApiHelper.create(tfx_token, tfx_org, tfx_project);
  const transifexFiles = (await tfxHelper.getProjectFiles()).map(f => f.name);
  const transifex_source_lang = await tfxHelper.getSourceLanguage();

  // Generate the final Transifex resource naming pattern
  const tfx_resource_name_pattern = tfx_name_pattern.replace(/<lang>/g, transifex_source_lang).replace("<ext>", file_extension);

  // Get the repo's language files
  const match_patterns = process.env.match_patterns.split(/\r?\n/).map(p => p.replace(/<lang>/g, transifex_source_lang).replace("<ext>", file_extension));
  const repoFiles = getRepoLanguageFiles(match_patterns);

  // Get the language file modifications reported by git
  const matchedModified = matchFiles(commit_changes.modified, match_patterns);
  // const matchedAdded = matchFiles(commit_changes.added, patterns);
  // const matchedDeleted = matchFiles(commit_changes.deleted, patterns);
  // const matchedCopied = matchFiles(commit_changes.copied, patterns);
  // const matchedRenamed = matchFiles(commit_changes.renamed, patterns);

  // Create the final added,deleted,modified file lists
  const added = extraFilesOnRepo(transifexFiles, repoFiles, tfx_resource_name_pattern);
  const deleted = extraFilesOnTransifex(transifexFiles, repoFiles, tfx_resource_name_pattern);
  const modified = force_upload ? repoFiles.filter(f => !added.includes(f)) : matchedModified.filter(f => !added.includes(f));

  // Helper function to read multiple files asynchronously
  const readFilesAsync = filenames => filenames.map(f => new Promise(async resolve => {
    const contents = (await external_fs_.promises.readFile(f)).toString();
    resolve({
      filename: f,
      contents
    });
  }));

  // Read added/modified file contents
  const added_files_read_promises = readFilesAsync(added);
  const modded_files_read_promises = readFilesAsync(modified)

  let added_request_promises = [];
  let modded_request_promises = [];
  let deleted_request_promises = [];

  // Create new resource
  if (added.length > 0) {
    console.log("Creating resources:");
    console.log(added);

    const added_files = await Promise.all(added_files_read_promises);
    added_request_promises = added_files.map(added_file =>
      tfxHelper.createResoureWithContent(convertRepoNameToTransifexName(added_file.filename, tfx_resource_name_pattern), added_file.contents));
  }

  // Update modified resources
  if (modified.length > 0) {
    console.log("Updating resources:");
    console.log(modified);

    const modded_files = await Promise.all(modded_files_read_promises);
    modded_request_promises = modded_files.map(modded_file =>
      tfxHelper.updateResource(convertRepoNameToTransifexName(modded_file.filename, tfx_resource_name_pattern), modded_file.contents));
  }

  // Delete resources
  if (deleted.length > 0) {
    console.log("Deleting resources:");
    console.log(deleted);
    for (const d of deleted) {
      deleted_request_promises.push(tfxHelper.deleteResource(d));
    };
  }

  // Wait for all requests to finish
  await Promise.all([
    ...added_request_promises,
    ...modded_request_promises,
    ...deleted_request_promises
  ]);
}

try {
  main();
}
catch (e) {
  console.error(e.message);
}
})();

