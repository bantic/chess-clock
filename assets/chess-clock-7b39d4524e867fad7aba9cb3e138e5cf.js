"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("chess-clock/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chess-clock/app",["exports","ember-resolver","ember-load-initializers","chess-clock/config/environment"],(function(e,t,r,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=u(e)
if(t){var o=u(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(c,Ember.Application)
var r=a(c)
function c(){var e
o(this,c)
for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u]
return f(l(e=r.call.apply(r,[this].concat(a))),"modulePrefix",n.default.modulePrefix),f(l(e),"podModulePrefix",n.default.podModulePrefix),f(l(e),"Resolver",t.default),e}return c}()
e.default=s,(0,r.default)(s,n.default.modulePrefix)})),define("chess-clock/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chess-clock/components/chess-clock",["exports","@glimmer/component"],(function(e,t){var r,n,o,i,a,c,l,u,f,s,p
function d(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=_(e)
if(t){var o=_(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return v(this,r)}}function v(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var j=Ember.HTMLBars.template({id:"1NSFXfvV",block:'{"symbols":[],"statements":[[10,"div"],[15,0,[31,["chess-clock ",[30,[36,0],[[32,0,["isWhiteTurn"]],"white"],null]," ",[30,[36,0],[[32,0,["isBlackTurn"]],"black"],null]]]],[12],[2,"\\n  "],[10,"div"],[14,0,"white clock"],[12],[2,"\\n    "],[11,"button"],[16,"disabled",[30,[36,1],[[32,0,["isWhiteTurn"]]],null]],[24,4,"button"],[4,[38,3],["click",[30,[36,2],[[32,0,["toggleClock"]],"white"],null]],null],[12],[2,"\\n      "],[1,[30,[36,4],[[32,0,["timeRemainingWhite"]],"mm:ss"],null]],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"div"],[14,0,"black clock"],[12],[2,"\\n    "],[11,"button"],[16,"disabled",[30,[36,1],[[32,0,["isBlackTurn"]]],null]],[24,4,"button"],[4,[38,3],["click",[30,[36,2],[[32,0,["toggleClock"]],"black"],null]],null],[12],[2,"\\n      "],[1,[30,[36,4],[[32,0,["timeRemainingBlack"]],"mm:ss"],null]],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["if","not","fn","on","format-ms"]}',meta:{moduleName:"chess-clock/components/chess-clock.hbs"}}),k=6e4,P=(r=Ember._tracked,n=Ember._tracked,o=Ember._tracked,i=Ember._tracked,a=Ember._action,p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)})(i,e)
var t,r,n,o=h(i)
function i(){var e
b(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return d(g(e=o.call.apply(o,[this].concat(r))),"isWhiteTurn",l,g(e)),d(g(e),"isBlackTurn",u,g(e)),d(g(e),"timeRemainingWhite",f,g(e)),d(g(e),"timeRemainingBlack",s,g(e)),e.timeRemainingWhite=e.args.minutes*k,e.timeRemainingBlack=e.args.minutes*k,e.isWhiteTurn=!0,e.startClock(),e}return t=i,(r=[{key:"startClock",value:function(){var e=this,t=new Date
this.update=function(){if(!e.isDestroying){var r=new Date,n=r-t
t=r,e.isWhiteTurn?e.timeRemainingWhite-=n:e.isBlackTurn&&(e.timeRemainingBlack-=n),requestAnimationFrame(e.update)}},this.update()}},{key:"toggleClock",value:function(e){"white"===e?(this.isBlackTurn=!0,this.isWhiteTurn=!1):(this.isBlackTurn=!1,this.isWhiteTurn=!0)}}])&&m(t.prototype,r),n&&m(t,n),i}(t.default),l=O((c=p).prototype,"isWhiteTurn",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),u=O(c.prototype,"isBlackTurn",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),f=O(c.prototype,"timeRemainingWhite",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=O(c.prototype,"timeRemainingBlack",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O(c.prototype,"toggleClock",[a],Object.getOwnPropertyDescriptor(c.prototype,"toggleClock"),c.prototype),c)
e.default=P,Ember._setComponentTemplate(j,P)})),define("chess-clock/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chess-clock/helpers/app-version",["exports","chess-clock/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,a=n.shaOnly||n.hideVersion,c=null
return i&&(n.showExtended&&(c=o.match(r.versionExtendedRegExp)),c||(c=o.match(r.versionRegExp))),a&&(c=o.match(r.shaRegExp)),c?c[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o})),define("chess-clock/helpers/format-ms",["exports"],(function(e){function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,o=!1,i=void 0
try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(l){o=!0,i=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Helper.helper((function(e){var r=t(e,2),n=r[0],o=(r[1],Math.floor(n/6e4)),i=Math.floor((n-1e3*o*60)/1e3)
return o="".concat(o).padStart(2,"0"),i="".concat(i).padStart(2,"0"),"".concat(o,":").concat(i)}))
e.default=n})),define("chess-clock/helpers/not",["exports"],(function(e){function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var r=[],n=!0,o=!1,i=void 0
try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(l){o=!0,i=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Helper.helper((function(e){return!t(e,1)[0]}))
e.default=n})),define("chess-clock/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("chess-clock/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("chess-clock/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","chess-clock/config/environment"],(function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i})),define("chess-clock/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r})),define("chess-clock/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chess-clock/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:r.default}
e.default=n})),define("chess-clock/initializers/export-application-global",["exports","chess-clock/config/environment"],(function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n})),define("chess-clock/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize:function(){}}})),define("chess-clock/router",["exports","chess-clock/config/environment"],(function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=c(e)
if(t){var o=c(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return i(this,r)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(c,Ember.Router)
var i=o(c)
function c(){var e
r(this,c)
for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u]
return l(a(e=i.call.apply(i,[this].concat(o))),"location",t.default.locationType),l(a(e),"rootURL",t.default.rootURL),e}return c}()
e.default=u,u.map((function(){}))})),define("chess-clock/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chess-clock/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chess-clock/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chess-clock/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chess-clock/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"2FES6wa0",block:'{"symbols":[],"statements":[[8,"chess-clock",[],[["@minutes"],[10]],null],[2,"\\n"]],"hasEval":false,"upvars":[]}',meta:{moduleName:"chess-clock/templates/application.hbs"}})
e.default=t})),define("chess-clock/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("chess-clock/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("chess-clock/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("chess-clock/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("chess-clock/config/environment",[],(function(){try{var e="chess-clock/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("chess-clock/app").default.create({name:"chess-clock",version:"0.0.0+fae8b9d3"})
