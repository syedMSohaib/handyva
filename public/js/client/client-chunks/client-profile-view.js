(self["webpackChunk"] = self["webpackChunk"] || []).push([["client-profile-view"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@vue-stripe/vue-stripe/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@vue-stripe/vue-stripe/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
Object.defineProperty(exports, "__esModule", ({value:!0}));var DEFAULT_LOCALE="auto",SUPPORTED_LOCALES=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],SUPPORTED_SUBMIT_TYPES=["auto","book","donate","pay"],BILLING_ADDRESS_COLLECTION_TYPES=["required","auto"],DEFAULT_ELEMENT_STYLE={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},VUE_STRIPE_VERSION=__webpack_require__(/*! ../package.json */ "./node_modules/@vue-stripe/vue-stripe/package.json").version,STRIPE_PARTNER_DETAILS={name:"vue-stripe",version:VUE_STRIPE_VERSION,url:process.env.VUE_STRIPE_WEBSITE,partner_id:process.env.VUE_STRIPE_PARTNER_ID},INSECURE_HOST_ERROR_MESSAGE="Vue Stripe will not work on an insecure host. Make sure that your site is using TCP/SSL.",isSecureHost=function(){return"localhost"===window.location.hostname||"https:"===window.location.protocol},index={install:function(e,t){isSecureHost()||console.warn(INSECURE_HOST_ERROR_MESSAGE);var n=t.pk,r=t.stripeAccount,o=t.apiVersion,i=t.locale,s=window.Stripe(n,{stripeAccount:r,apiVersion:o,locale:i});s.registerAppInfo(STRIPE_PARTNER_DETAILS),e.prototype.$stripe=s}};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var runtime_1=createCommonjsModule((function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function l(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),s=new x(r||[]);return i._invoke=function(e,t,n){var r=u;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var a=w(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=c(e,t,n);if("normal"===l.type){if(r=n.done?h:d,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=h,n.method="throw",n.arg=l.arg)}}}(e,n,s),i}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u="suspendedStart",d="suspendedYield",p="executing",h="completed",m={};function f(){}function y(){}function E(){}var v={};v[i]=function(){return this};var S=Object.getPrototypeOf,_=S&&S(S(R([])));_&&_!==n&&r.call(_,i)&&(v=_);var g=E.prototype=f.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function A(e){var t;this._invoke=function(n,o){function i(){return new Promise((function(t,i){!function t(n,o,i,s){var a=c(e[n],e,o);if("throw"!==a.type){var l=a.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,i,s)}),(function(e){t("throw",e,i,s)})):Promise.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return t("throw",e,i,s)}))}s(a.arg)}(n,o,t,i)}))}return t=t?t.then(i,i):i()}}function w(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,w(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=c(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:L}}function L(){return{value:t,done:!0}}return y.prototype=g.constructor=E,E.constructor=y,E[a]=y.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(A.prototype),A.prototype[s]=function(){return this},e.AsyncIterator=A,e.async=function(t,n,r,o){var i=new A(l(t,n,r,o));return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),g[a]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var l=r.call(s,"catchLoc"),c=r.call(s,"finallyLoc");if(l&&c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}})),regenerator=runtime_1;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var loadParams,V3_URL="https://js.stripe.com/v3",V3_URL_REGEX=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,EXISTING_SCRIPT_MESSAGE="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",findScript=function(){for(var e=document.querySelectorAll('script[src^="'.concat(V3_URL,'"]')),t=0;t<e.length;t++){var n=e[t];if(V3_URL_REGEX.test(n.src))return n}return null},injectScript=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(V3_URL).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},registerWrapper=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:t})},stripePromise=null,loadScript=function(e){return null!==stripePromise?stripePromise:stripePromise=new Promise((function(t,n){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(EXISTING_SCRIPT_MESSAGE),window.Stripe)t(window.Stripe);else try{var r=findScript();r&&e?console.warn(EXISTING_SCRIPT_MESSAGE):r||(r=injectScript(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(e){return void n(e)}else t(null)}))},initStripe=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return registerWrapper(r,n),r},validateLoadParams=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==_typeof(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)},loadStripeCalled=!1,loadStripe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];loadStripeCalled=!0;var r=Date.now();return loadScript(loadParams).then((function(e){return initStripe(e,t,r)}))};loadStripe.setLoadParameters=function(e){if(loadStripeCalled)throw new Error("You cannot change load parameters after calling loadStripe");loadParams=validateLoadParams(e)};
/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */
var index$1={beforeCreate:function(){var e=this.$options.props;e&&(this._$coertions=Object.keys(e).filter((function(t){return e[t].coerce})).map((function(t){return[t,e[t].coerce]})))},computed:{$coerced:function(){var e=this;return this._$coertions.reduce((function(t,n){var r=n[0],o=n[1];return t[r]=o.call(e,e.$props[r]),t}),{})}}},props={pk:{type:String,required:!0},mode:{type:String,validator:function(e){return["payment","subscription"].includes(e)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return SUPPORTED_SUBMIT_TYPES.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return BILLING_ADDRESS_COLLECTION_TYPES.includes(e)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},locale:{type:String,default:DEFAULT_LOCALE,coerce:function(e){return SUPPORTED_LOCALES.includes(e)?e:(console.warn("VueStripe Warning: '".concat(e,"' is not supported by Stripe yet. Falling back to default '").concat(DEFAULT_LOCALE,"'.")),DEFAULT_LOCALE)}},shippingAddressCollection:{type:Object,validator:function(e){return Object.prototype.hasOwnProperty.call(e,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean}},index$2={props:props,mixins:[index$1],render:function(e){return e},mounted:function(){isSecureHost()||console.warn(INSECURE_HOST_ERROR_MESSAGE)},methods:{redirectToCheckout:function(){var e,t;return regenerator.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,isSecureHost()){n.next=3;break}throw Error(INSECURE_HOST_ERROR_MESSAGE);case 3:return this.$emit("loading",!0),this.disableAdvancedFraudDetection&&loadStripe.setLoadParameters({advancedFraudSignals:!1}),n.next=7,regenerator.awrap(loadStripe(this.pk));case 7:if((e=n.sent).registerAppInfo(STRIPE_PARTNER_DETAILS),!this.sessionId){n.next=12;break}return e.redirectToCheckout({sessionId:this.sessionId}),n.abrupt("return");case 12:if(!this.lineItems||!this.lineItems.length||this.mode){n.next=15;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),n.abrupt("return");case 15:t={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},e.redirectToCheckout(t),n.next=23;break;case 19:n.prev=19,n.t0=n.catch(0),console.error(n.t0),this.$emit("error",n.t0);case 23:case"end":return n.stop()}}),null,this,[[0,19]])}}};function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var defineProperty=_defineProperty;function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ELEMENT_TYPE="card",script={props:{pk:{type:String,required:!0},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return DEFAULT_ELEMENT_STYLE}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(e){return["solid","default"].includes(e)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var e,t,n=this;return regenerator.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(isSecureHost()){r.next=3;break}return document.getElementById("stripe-element-mount-point").innerHTML='<p style="color: red">'.concat(INSECURE_HOST_ERROR_MESSAGE,"</p>"),r.abrupt("return");case 3:return this.disableAdvancedFraudDetection&&loadStripe.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},t={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},r.next=8,regenerator.awrap(loadStripe(this.pk,e));case 8:this.stripe=r.sent,this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(ELEMENT_TYPE,t),this.element.mount("#stripe-element-mount-point"),this.element.on("change",(function(e){var t=document.getElementById("stripe-element-errors");e.error?t.textContent=e.error.message:t.textContent="",n.onChange(e)})),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",(function(e){var t,r,o,i;return regenerator.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,n.$emit("loading",!0),e.preventDefault(),t=_objectSpread({},n.element),n.amount&&(t.amount=n.amount),s.next=7,regenerator.awrap(n.stripe.createToken(t));case 7:if(r=s.sent,o=r.token,!(i=r.error)){s.next=15;break}return document.getElementById("stripe-element-errors").textContent=i.message,n.$emit("error",i),s.abrupt("return");case 15:n.$emit("token",o),s.next=22;break;case 18:s.prev=18,s.t0=s.catch(0),console.error(s.t0),n.$emit("error",s.t0);case 22:return s.prev=22,n.$emit("loading",!1),s.finish(22);case 25:case"end":return s.stop()}}),null,null,[[0,18,22,25]])}));case 20:case"end":return r.stop()}}),null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};function normalizeComponent(e,t,n,r,o,i,s,a,l,c){"boolean"!=typeof s&&(l=a,a=s,s=!1);const u="function"==typeof n?n.options:n;let d;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),r&&(u._scopeId=r),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):t&&(d=s?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),d)if(u.functional){const e=u.render;u.render=function(t,n){return d.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,d):[d]}return n}const isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(e){return(e,t)=>addStyle(e,t)}let HEAD;const styles={};function addStyle(e,t){const n=isOldIE?t.media||"default":e,r=styles[n]||(styles[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===HEAD&&(HEAD=document.head||document.getElementsByTagName("head")[0]),HEAD.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(n),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const e=r.ids.size-1,t=document.createTextNode(n),o=r.element.childNodes;o[e]&&r.element.removeChild(o[e]),o.length?r.element.insertBefore(t,o[e]):r.element.appendChild(t)}}}const __vue_script__=script;var __vue_render__=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("form",{attrs:{id:"stripe-element-form"}},[t("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[t("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),t("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;const __vue_inject_styles__=function(e){e&&e("data-v-29b37d78_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.StripeElement[data-v-29b37d78] {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n.StripeElement--focus[data-v-29b37d78] {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n.StripeElement--invalid[data-v-29b37d78] {\n  border-color: #fa755a;\n}\n.StripeElement--webkit-autofill[data-v-29b37d78] {\n  background-color: #fefde5 !important;\n}\n.hide[data-v-29b37d78] {\n  visibility: hidden;\n}\n",map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6OA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,kBAAA;AACA",file:"Card.vue",sourcesContent:["<template>\n  <div>\n    <form id=\"stripe-element-form\">\n      <div id=\"stripe-element-mount-point\" />\n      <slot name=\"stripe-element-errors\">\n        <div\n          id=\"stripe-element-errors\"\n          role=\"alert\"\n        />\n      </slot>\n      <button\n        ref=\"submitButtonRef\"\n        type=\"submit\"\n        class=\"hide\"\n      />\n    </form>\n  </div>\n</template>\n\n<script>\nimport { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';\nimport { isSecureHost } from '../utils';\nimport {\n  DEFAULT_ELEMENT_STYLE,\n  STRIPE_PARTNER_DETAILS,\n  INSECURE_HOST_ERROR_MESSAGE,\n} from '../constants';\nconst ELEMENT_TYPE = 'card';\nexport default {\n  props: {\n    pk: {\n      type: String,\n      required: true,\n    },\n    stripeAccount: {\n      type: String,\n      default: undefined,\n    },\n    apiVersion: {\n      type: String,\n      default: undefined,\n    },\n    locale: {\n      type: String,\n      default: 'auto',\n    },\n    elementsOptions: {\n      type: Object,\n      default: () => ({}),\n    },\n    disableAdvancedFraudDetection: {\n      type: Boolean,\n    },\n    // element specific options\n    classes: {\n      type: Object,\n      default: () => ({}),\n    },\n    elementStyle: {\n      type: Object,\n      default: () => (DEFAULT_ELEMENT_STYLE),\n    },\n    value: {\n      type: String,\n      default: undefined,\n    },\n    hidePostalCode: Boolean,\n    iconStyle: {\n      type: String,\n      default: 'default',\n      validator: value => ['solid', 'default'].includes(value),\n    },\n    hideIcon: Boolean,\n    disabled: Boolean,\n  },\n  data () {\n    return {\n      loading: false,\n      stripe: null,\n      elements: null,\n      element: null,\n      card: null,\n    };\n  },\n  computed: {\n    form () {\n      return document.getElementById('stripe-element-form');\n    },\n  },\n  async mounted () {\n    if (!isSecureHost()) {\n      document.getElementById('stripe-element-mount-point').innerHTML = `<p style=\"color: red\">${INSECURE_HOST_ERROR_MESSAGE}</p>`;\n      return;\n    }\n\n    if (this.disableAdvancedFraudDetection) loadStripe.setLoadParameters({ advancedFraudSignals: false });\n\n    const stripeOptions = {\n      stripeAccount: this.stripeAccount,\n      apiVersion: this.apiVersion,\n      locale: this.locale,\n    };\n    const createOptions = {\n      classes: this.classes,\n      style: this.elementStyle,\n      value: this.value,\n      hidePostalCode: this.hidePostalCode,\n      iconStyle: this.iconStyle,\n      hideIcon: this.hideIcon,\n      disabled: this.disabled,\n    };\n\n    this.stripe = await loadStripe(this.pk, stripeOptions);\n    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);\n    this.elements = this.stripe.elements(this.elementsOptions);\n    this.element = this.elements.create(ELEMENT_TYPE, createOptions);\n    this.element.mount('#stripe-element-mount-point');\n\n    this.element.on('change', (event) => {\n      var displayError = document.getElementById('stripe-element-errors');\n      if (event.error) {\n        displayError.textContent = event.error.message;\n      } else {\n        displayError.textContent = '';\n      }\n      this.onChange(event);\n    });\n\n    this.element.on('blur', this.onBlur);\n    this.element.on('click', this.onClick);\n    this.element.on('escape', this.onEscape);\n    this.element.on('focus', this.onFocus);\n    this.element.on('ready', this.onReady);\n\n    this.form.addEventListener('submit', async (event) => {\n      try {\n        this.$emit('loading', true);\n        event.preventDefault();\n        const data = {\n          ...this.element,\n        };\n        if (this.amount) data.amount = this.amount;\n        const { token, error } = await this.stripe.createToken(data);\n        if (error) {\n          const errorElement = document.getElementById('stripe-element-errors');\n          errorElement.textContent = error.message;\n          this.$emit('error', error);\n          return;\n        }\n        this.$emit('token', token);\n      } catch (error) {\n        console.error(error);\n        this.$emit('error', error);\n      } finally {\n        this.$emit('loading', false);\n      }\n    });\n  },\n  methods: {\n    /**\n     * Triggers the submission of the form\n     * @return {void}\n     */\n    submit () {\n      this.$refs.submitButtonRef.click();\n    },\n    /**\n     * Clears the element\n     * @return {void}\n     */\n    clear () {\n      this.element.clear();\n    },\n    /**\n     * Destroys the element\n     * @return {void}\n     */\n    destroy () {\n      this.element.destroy();\n    },\n    /**\n     * Focuses on the element\n     * @return {void}\n     */\n    focus () {\n      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');\n      this.element.focus();\n    },\n    /**\n     * Unmounts the element\n     * @return {void}\n     */\n    unmount () {\n      this.element.unmount();\n    },\n    /**\n     * Updates the element\n     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.\n     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.\n     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.\n     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.\n     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.\n     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.\n     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.\n     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled\n     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.\n     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.\n     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.\n     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.\n     */\n    update (opts) {\n      this.element.update(opts);\n    },\n    // events\n    onChange (e) {\n      this.$emit('element-change', e);\n    },\n    onReady (e) {\n      this.$emit('element-ready', e);\n    },\n    onFocus (e) {\n      this.$emit('element-focus', e);\n    },\n    onBlur (e) {\n      this.$emit('element-blur', e);\n    },\n    onEscape (e) {\n      this.$emit('element-escape', e);\n    },\n    onClick (e) {\n      this.$emit('element-click', e);\n    },\n  },\n};\n<\/script>\n\n<style scoped>\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.StripeElement {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n.hide {\n  visibility: hidden;\n}\n</style>\n"]},media:void 0})},__vue_scope_id__="data-v-29b37d78",__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,!1,void 0,!1,createInjector,void 0,void 0);var index$3={install:function(e,t){var n,r,o,i,s,a,l;return regenerator.async((function(c){for(;;)switch(c.prev=c.next){case 0:n=t.pk,r=t.stripeAccount,o=t.apiVersion,i=t.locale,s=t.elementsOptions,(a=window.Stripe(n,{stripeAccount:r,apiVersion:o,locale:i})).registerAppInfo(STRIPE_PARTNER_DETAILS),l=a.elements(s),e.prototype.$stripe=a,e.prototype.$stripeElements=l;case 6:case"end":return c.stop()}}))}};exports.StripeCheckout=index$2,exports.StripeElementCard=__vue_component__,exports.StripeElementsPlugin=index$3,exports.StripePlugin=index;


/***/ }),

/***/ "./node_modules/@vue-stripe/vue-stripe/package.json":
/*!**********************************************************!*\
  !*** ./node_modules/@vue-stripe/vue-stripe/package.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@vue-stripe/vue-stripe","version":"4.2.5","description":"Stripe Checkout & Elements for Vue.js","author":"jofftiquez@gmail.com","scripts":{"build":"rollup -c","lint":"vue-cli-service lint --fix","prebuild":"rimraf dist","test":"jest"},"main":"dist/index.js","module":"dist","dependencies":{"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},"devDependencies":{"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3","eslint":"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2","jest":"^24.9.0","lint-staged":"^9.5.0","rimraf":"^3.0.0","rollup":"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},"bugs":{"url":"https://github.com/vue-stripe/vue-stripe/issues"},"gitHooks":{"pre-commit":"lint-staged"},"homepage":"https://github.com/vue-stripe/vue-stripe#readme","keywords":["vue","vuejs","stripe","checkout","payment"],"license":"MIT","lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},"repository":{"type":"git","url":"git@github.com:vue-stripe/vue-stripe.git"},"typings":"typings/index.d.ts"}');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue-stripe/vue-stripe */ "./node_modules/@vue-stripe/vue-stripe/dist/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    StripeElementCard: _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_1__.StripeElementCard
  },
  data: function data() {
    return {
      user: undefined,
      packages: [],
      desired_package: undefined,
      card: {},
      profile: '',
      cover: '',
      types: {
        'img': ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp', 'image/gif']
      },
      pr: {},
      countries: window.info.countries,
      spk: "pk_test_b8qmpGr3IZYARJcwgfWNKevX00zxOc9EbZ",
      taskcount: 1,
      token: null
    };
  },
  mounted: function mounted() {
    this.me();
    this.getPackages();
  },
  methods: {
    upgradePackage: function upgradePackage() {
      var _this = this;

      axios.post('upgrade-package', {
        package_id: this.desired_package ? this.desired_package.id : null
      }).then(function (data) {
        _this.pr = {};
        $('#upgrade-plan').modal('hide');

        _this.me();

        _this.$toastr.success(data.data.message, "Success !");
      })["catch"](function (e) {
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this.$toastr.error(errors[key], "Error!");
        });
      });
    },
    getPackages: function getPackages() {
      var _this2 = this;

      axios.get('listing/packages').then(function (_ref) {
        var data = _ref.data;
        return _this2.packages = data;
      });
    },
    updateCardDetail: function updateCardDetail() {
      var _this3 = this;

      axios.post('update-card-details', {
        card: this.card,
        source_id: this.user.card_details ? this.user.card_details.id : null
      }).then(function (_ref2) {
        var data = _ref2.data;
        _this3.card = {};
        $('#upgrade-card').modal('hide');

        _this3.$toastr.success(data.message, "Success !");

        _this3.me();
      })["catch"](function (e) {
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this3.$toastr.error(errors[key], "Error!");
        });
      });
    },
    chargeTask: function chargeTask() {
      var _this4 = this;

      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      axios.post('charge-task', {
        taskcount: this.taskcount
      }).then(function (_ref3) {
        var data = _ref3.data;

        _this4.$toastr.success(data.message, "Success !");

        window.location.reload();
      });
    },
    updateProfile: function updateProfile() {
      var _this5 = this;

      axios.post('update', this.user).then(function (_ref4) {
        var data = _ref4.data;

        _this5.$toastr.success(data.message, "Success !");

        _this5.me();
      });
    },
    me: function me() {
      var _this6 = this;

      axios.get('dashboard/my/info').then(function (_ref5) {
        var data = _ref5.data;
        _this6.user = data;
        _this6.profile = user.image;
        _this6.cover = user.cover;
      });
    },
    submit: function submit(scope) {
      var _this7 = this;

      this.$validator.validateAll(scope).then(function (result) {
        if (!result) return;

        _this7.changePassword();
      });
    },
    toBase64: function toBase64(file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
          return resolve(reader.result);
        };

        reader.onerror = function (error) {
          return reject(error);
        };
      });
    },
    handleFileChange: function handleFileChange(e, elem) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var file, types, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = e.target.files[0];
                console.log(file);
                types = _this8.types;

                if (!types.img.includes(file.type)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 6;
                return _this8.toBase64(file)["catch"](function (e) {
                  return Error(e);
                });

              case 6:
                result = _context.sent;

                if (!(result instanceof Error)) {
                  _context.next = 12;
                  break;
                }

                console.log('Error: ', result.message);
                return _context.abrupt("return");

              case 12:
                _this8[elem] = result;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleProfilePicture: function handleProfilePicture(e) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this9.handleFileChange(e, 'profile');

              case 2:
                formData = new FormData();
                formData.append('image', e.target.files[0]);
                axios.post("update-profilepic", formData).then(function (_ref6) {
                  var data = _ref6.data;
                  return _this9.$toastr.success(data.message, "Success !");
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleCover: function handleCover(e) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this10.handleFileChange(e, 'cover');

              case 2:
                formData = new FormData();
                formData.append('cover', e.target.files[0]);
                axios.post("update-cover", formData).then(function (_ref7) {
                  var data = _ref7.data;
                  return _this10.$toastr.success(data.message, "Success !");
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    changePassword: function changePassword() {
      var _this11 = this;

      axios.post("/update-password", this.pr).then(function (data) {
        _this11.pr = {};
        $('#changePasswordModal').modal('hide');

        _this11.$toastr.success(data.data.message, "Success !");
      })["catch"](function (e) {
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this11.$toastr.error(errors[key], "Error!");
        });
      });
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bold-h {\n    font-weight: bold;\n    padding-bottom: 10px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/client/views/profile/ProfileComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/client/views/profile/ProfileComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileComponent_vue_vue_type_template_id_28a47151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileComponent.vue?vue&type=template&id=28a47151& */ "./resources/js/client/views/profile/ProfileComponent.vue?vue&type=template&id=28a47151&");
/* harmony import */ var _ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/views/profile/ProfileComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProfileComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/client/views/profile/ProfileComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProfileComponent_vue_vue_type_template_id_28a47151___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileComponent_vue_vue_type_template_id_28a47151___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/views/profile/ProfileComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/client/views/profile/ProfileComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/client/views/profile/ProfileComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/client/views/profile/ProfileComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/client/views/profile/ProfileComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/client/views/profile/ProfileComponent.vue?vue&type=template&id=28a47151&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/client/views/profile/ProfileComponent.vue?vue&type=template&id=28a47151& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_28a47151___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_28a47151___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_28a47151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileComponent.vue?vue&type=template&id=28a47151& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=template&id=28a47151&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=template&id=28a47151&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/profile/ProfileComponent.vue?vue&type=template&id=28a47151& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.user
    ? _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row page-titles mx-0" }, [
          _c("div", { staticClass: "col-sm-6 p-md-0" }, [
            _c("div", { staticClass: "welcome-text" }, [
              _c("h4", [_vm._v(_vm._s(_vm.$route.meta.title))])
            ])
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c(
              "div",
              { staticClass: "profile card card-body px-3 pt-3 pb-0" },
              [
                _c("div", { staticClass: "profile-head" }, [
                  _c("div", { staticClass: "photo-content" }, [
                    _c("div", {
                      staticClass: "cover-photo",
                      style:
                        "background: url('" +
                        _vm.cover +
                        "') center center / cover;"
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "profile-info" }, [
                    _c("div", { staticClass: "profile-photo" }, [
                      _c("img", {
                        staticClass: "img-fluid rounded-circle",
                        attrs: { src: _vm.profile, alt: "" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "profile-details" }, [
                      _c("div", { staticClass: "profile-name px-3 pt-2" }, [
                        _c("h4", { staticClass: "text-primary mb-0" }, [
                          _vm._v(_vm._s(_vm.user.name))
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("Name")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "profile-email px-2 pt-2" }, [
                        _c("h4", { staticClass: "text-muted mb-0" }, [
                          _vm._v(_vm._s(_vm.user.email))
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("Email")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown ml-auto" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "dropdown-menu dropdown-menu-right" },
                          [
                            _c("input", {
                              ref: "profile_pic",
                              staticStyle: { display: "none" },
                              attrs: { accept: "image/*", type: "file" },
                              on: { change: _vm.handleProfilePicture }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              ref: "cover_pic",
                              staticStyle: { display: "none" },
                              attrs: { accept: "image/*", type: "file" },
                              on: { change: _vm.handleCover }
                            }),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "dropdown-item",
                                on: {
                                  click: function($event) {
                                    return _vm.$refs.profile_pic.click()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fi-rr-camera mr-2" }),
                                _vm._v(
                                  " Update Profile Picture\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "dropdown-item",
                                on: {
                                  click: function($event) {
                                    return _vm.$refs.cover_pic.click()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fi-rr-gallery mr-2" }),
                                _vm._v(
                                  "\n                                        Update Cover Photo"
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "profile-tab" }, [
                  _c("div", { staticClass: "custom-tab-1" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "tab-content" }, [
                      _c(
                        "div",
                        {
                          staticClass: "tab-pane fade active show",
                          attrs: { id: "about-me" }
                        },
                        [
                          _c("div", { staticClass: "profile-about-me" }, [
                            _c(
                              "div",
                              { staticClass: "pt-4 border-bottom-1 pb-3" },
                              [
                                _c("p", { staticClass: "mb-2" }, [
                                  _vm._v(_vm._s(_vm.user.about))
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "profile-skills mb-5" },
                            [
                              _c("h4", { staticClass: "text-primary mb-2" }, [
                                _vm._v("Skills")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.user.skills.split(","), function(
                                skill,
                                sindex
                              ) {
                                return _c(
                                  "a",
                                  {
                                    key: sindex,
                                    staticClass:
                                      "btn btn-primary light btn-xs mb-1",
                                    attrs: { href: "javascript:void(0);" }
                                  },
                                  [_vm._v(_vm._s(skill))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "profile-lang  mb-5" },
                            [
                              _c("h4", { staticClass: "text-primary mb-2" }, [
                                _vm._v("Language")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.user.language.split(","), function(
                                language,
                                lindex
                              ) {
                                return _c(
                                  "a",
                                  {
                                    key: lindex,
                                    staticClass: "text-muted pr-3 f-s-16",
                                    attrs: { href: "javascript:void(0);" }
                                  },
                                  [_vm._v(_vm._s(language))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "profile-personal-info" }, [
                            _c("h4", { staticClass: "text-primary mb-4" }, [
                              _vm._v("Personal Information")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [
                                  _vm._v(_vm._s(_vm.user.first_name))
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(4),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [_vm._v(_vm._s(_vm.user.last_name))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(5),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [_vm._v(_vm._s(_vm.user.email))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(6),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [
                                  _vm._v(_vm._s(_vm.user.verified_email))
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(7),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [_vm._v(_vm._s(_vm.user.dob))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(8),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [_vm._v(_vm._s(_vm.user.gender))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(9),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [_vm._v(_vm._s(_vm.user.homephone))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(10),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [_vm._v(_vm._s(_vm.user.cellphone))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(11),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [_vm._v(_vm._s(_vm.user.skype))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(12),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [
                                  _vm._v(_vm._s(_vm.user.availability))
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(13),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [_vm._v(_vm._s(_vm.user.age))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(14),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [
                                  _c("b", [_vm._v("Home Address: ")]),
                                  _vm._v(" " + _vm._s(_vm.user.address))
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _c("span", [
                                  _c("b", [_vm._v("Work Address: ")]),
                                  _vm._v(" " + _vm._s(_vm.user.work_address))
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _c("span", [
                                  _c("b", [_vm._v("Mailing Address: ")]),
                                  _vm._v(" " + _vm._s(_vm.user.mailing_address))
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _c("span", [
                                  _c("b", [_vm._v("Temporary Address: ")]),
                                  _vm._v(" " + _vm._s(_vm.user.temp_address))
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-2" }, [
                              _vm._m(15),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-9 col-7" }, [
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.user.experience) +
                                      " Year\n                                                    Experiences"
                                  )
                                ])
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "tab-pane fade",
                          attrs: { id: "profile-settings" }
                        },
                        [
                          _c("div", { staticClass: "pt-3" }, [
                            _c("div", { staticClass: "settings-form" }, [
                              _c("form", [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("About Me")]),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.user.about,
                                        expression: "user.about"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      placeholder:
                                        "Say something about yourself"
                                    },
                                    domProps: { value: _vm.user.about },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.user,
                                          "about",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c("label", [_vm._v("Date of Birth")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.dob,
                                            expression: "user.dob"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "date" },
                                        domProps: { value: _vm.user.dob },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "dob",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c("label", [_vm._v("Gender")]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.user.gender,
                                              expression: "user.gender"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.user,
                                                "gender",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "Male" } },
                                            [_vm._v("Male")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Female" } },
                                            [_vm._v("Female")]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c("label", [
                                        _vm._v("Secondary Email Address")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.verified_email,
                                            expression: "user.verified_email"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder:
                                            "Enter your secondary email address"
                                        },
                                        domProps: {
                                          value: _vm.user.verified_email
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "verified_email",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c("label", [
                                        _vm._v("Home phone Number")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.homephone,
                                            expression: "user.homephone"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Enter your home phone"
                                        },
                                        domProps: { value: _vm.user.homephone },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "homephone",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c("label", [
                                        _vm._v("Cell phone Number")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.cellphone,
                                            expression: "user.cellphone"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Enter your cell phone"
                                        },
                                        domProps: { value: _vm.user.cellphone },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "cellphone",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c("label", [_vm._v("Skype ID")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.skype,
                                            expression: "user.skype"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Enter your skype id"
                                        },
                                        domProps: { value: _vm.user.skype },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "skype",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c("label", [_vm._v("My Availability")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.availability,
                                            expression: "user.availability"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder:
                                            "Enter your availability e.g Full Time (Freelancer)"
                                        },
                                        domProps: {
                                          value: _vm.user.availability
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "availability",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c("label", [_vm._v("Age")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.age,
                                            expression: "user.age"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "number",
                                          min: 0,
                                          placeholder: "Enter your age"
                                        },
                                        domProps: { value: _vm.user.age },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "age",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c("label", [
                                        _vm._v("Year of Experience")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.experience,
                                            expression: "user.experience"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "number",
                                          min: 0,
                                          placeholder: "Enter your experience"
                                        },
                                        domProps: {
                                          value: _vm.user.experience
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "experience",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c("label", [_vm._v("Skills")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.skills,
                                            expression: "user.skills"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder:
                                            "Enter your skills. e.g, PHP, Laravel, Java"
                                        },
                                        domProps: { value: _vm.user.skills },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "skills",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "forum-geroup col-md-6" },
                                    [
                                      _c("label", [_vm._v("Language")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.language,
                                            expression: "user.language"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder:
                                            "How many languages do you know ? e.g English, French, Urdu"
                                        },
                                        domProps: { value: _vm.user.language },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "language",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Home Address")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.user.address,
                                        expression: "user.address"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", placeholder: "" },
                                    domProps: { value: _vm.user.address },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.user,
                                          "address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Work Address")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.user.work_address,
                                        expression: "user.work_address"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", placeholder: "" },
                                    domProps: { value: _vm.user.work_address },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.user,
                                          "work_address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Mailing Address")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.user.mailing_address,
                                        expression: "user.mailing_address"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", placeholder: "" },
                                    domProps: {
                                      value: _vm.user.mailing_address
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.user,
                                          "mailing_address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Temporary Address")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.user.temp_address,
                                        expression: "user.temp_address"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", placeholder: "" },
                                    domProps: { value: _vm.user.temp_address },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.user,
                                          "temp_address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-3" },
                                    [
                                      _c("label", [_vm._v("Country")]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.user.country,
                                              expression: "user.country"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.user,
                                                "country",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        _vm._l(_vm.countries, function(
                                          country
                                        ) {
                                          return _c(
                                            "option",
                                            {
                                              key: country.id,
                                              domProps: { value: country.iso }
                                            },
                                            [_vm._v(_vm._s(country.nicename))]
                                          )
                                        }),
                                        0
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-3" },
                                    [
                                      _c("label", [_vm._v("City")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.city,
                                            expression: "user.city"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.user.city },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "city",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-3" },
                                    [
                                      _c("label", [_vm._v("State")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.state,
                                            expression: "user.state"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.user.state },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "state",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-3" },
                                    [
                                      _c("label", [_vm._v("Zip")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.zipcode,
                                            expression: "user.zipcode"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.user.zipcode },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "zipcode",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: { type: "button" },
                                    on: { click: _vm.updateProfile }
                                  },
                                  [_vm._v("Update")]
                                )
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "tab-pane fade",
                          attrs: { id: "plan-settings" }
                        },
                        [
                          _c("div", { staticClass: "row mt-4" }, [
                            _vm._m(16),
                            _vm._v(" "),
                            _vm.user.card_details
                              ? _c("div", { staticClass: "row col-12" }, [
                                  _c("div", { staticClass: "bold-h col-3" }, [
                                    _vm._v("Card Type")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-9" }, [
                                    _vm._v(_vm._s(_vm.user.card_details.brand))
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "bold-h col-3" }, [
                                    _vm._v("Card Number")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-9" }, [
                                    _vm._v(
                                      "**** **** **** " +
                                        _vm._s(_vm.user.card_details.last4)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "bold-h col-3" }, [
                                    _vm._v("Expiration Date")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-9" }, [
                                    _vm._v(
                                      _vm._s(_vm.user.card_details.exp_month) +
                                        " / " +
                                        _vm._s(_vm.user.card_details.exp_year)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "bold-h col-3" }, [
                                    _vm._v("Card Holder Name")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-9" }, [
                                    _vm._v(_vm._s(_vm.user.card_details.name))
                                  ])
                                ])
                              : _c("div", { staticClass: "col-12" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "alert alert-danger rounded-0"
                                    },
                                    [
                                      _vm._v(
                                        "User card details not found, Please add it to proceed"
                                      )
                                    ]
                                  )
                                ]),
                            _vm._v(" "),
                            _vm._m(17)
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row mt-4" }, [
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                { staticClass: "profile-personal-info" },
                                [
                                  _c(
                                    "h4",
                                    { staticClass: "text-primary mb-4" },
                                    [_vm._v("Plan Information")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row mb-2" }, [
                                    _vm._m(18),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-7" },
                                      [
                                        _c("span", {}, [
                                          _vm._v(
                                            _vm._s(_vm.user.plan.title) +
                                              "\n                                                            (" +
                                              _vm._s(_vm.user.plan.no_of_task) +
                                              "\n                                                            Tasks)"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", {}, [
                                          _vm._v(
                                            _vm._s(_vm.user.remaining_tasks) +
                                              "\n                                                            Tasks"
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c("div", { staticClass: "row mb-2 mt-4" }, [
                            _vm._m(19),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-12" }, [
                              _c("div", { staticClass: "flex-cust1" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass: "minus",
                                    on: {
                                      click: function() {
                                        _vm.taskcount < 1
                                          ? (_vm.taskcount = 1)
                                          : _vm.taskcount--
                                      }
                                    }
                                  },
                                  [_vm._v("-")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.taskcount,
                                      expression: "taskcount"
                                    }
                                  ],
                                  staticClass:
                                    "task-input custom-form-control task_count",
                                  attrs: { min: 1, type: "number" },
                                  domProps: { value: _vm.taskcount },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.taskcount = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "plus",
                                    on: {
                                      click: function($event) {
                                        _vm.taskcount++
                                      }
                                    }
                                  },
                                  [_vm._v("+")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { ref: "card", staticClass: "mt-3" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex-c" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-handy-task",
                                    attrs: { type: "submit" },
                                    on: { click: _vm.chargeTask }
                                  },
                                  [_vm._v("Charge Now")]
                                ),
                                _vm._v(" "),
                                _c("p", { staticClass: "total-charge" }, [
                                  _vm._v("($4) will be charged")
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c("div", { staticClass: "row mb-2 mt-4" }, [
                            _vm._m(20),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c("p", { staticClass: "total-charge" }, [
                                _vm._v(
                                  "Plan can be upgraded on next renewal\n                                                subscription (" +
                                    _vm._s(_vm.user.billing_date) +
                                    ")"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _vm.user.can_change_package
                                ? _c("div", { staticClass: "flex-c" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-handy-task",
                                        attrs: {
                                          type: "submit",
                                          "data-toggle": "modal",
                                          "data-target": "#upgrade-plan"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "Upgrade\n                                                    Plan"
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e()
                            ])
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "modal fade",
                      attrs: { id: "upgrade-card" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "modal-dialog modal-dialog-centered",
                          attrs: { role: "document" }
                        },
                        [
                          _c("div", { staticClass: "modal-content" }, [
                            _vm._m(21),
                            _vm._v(" "),
                            _c("div", { staticClass: "modal-body py-2 px-4" }, [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-12 mb-2" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.card.name,
                                        expression: "card.name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Card Holder Name"
                                    },
                                    domProps: { value: _vm.card.name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.card,
                                          "name",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-12 mb-2" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.card.number,
                                        expression: "card.number"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder:
                                        "Card Number e.g. 5555 5555 5555 4444"
                                    },
                                    domProps: { value: _vm.card.number },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.card,
                                          "number",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-12 mb-2" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.card.exp_month,
                                        expression: "card.exp_month"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      placeholder: "Card Expiry Month e.g. 02 "
                                    },
                                    domProps: { value: _vm.card.exp_month },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.card,
                                          "exp_month",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-12 mb-2" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.card.exp_year,
                                        expression: "card.exp_year"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      placeholder: "Card Expiry Year e.g. 2030 "
                                    },
                                    domProps: { value: _vm.card.exp_year },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.card,
                                          "exp_year",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-12 mb-2" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.card.cvc,
                                        expression: "card.cvc"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      placeholder: "Card CVC"
                                    },
                                    domProps: { value: _vm.card.cvc },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.card,
                                          "cvc",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "modal-footer" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger light",
                                  attrs: {
                                    type: "button",
                                    "data-dismiss": "modal"
                                  }
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "button" },
                                  on: { click: _vm.updateCardDetail }
                                },
                                [_vm._v("Save")]
                              )
                            ])
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "modal fade",
                      attrs: { id: "upgrade-plan" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "modal-dialog modal-dialog-centered",
                          attrs: { role: "document" }
                        },
                        [
                          _c("div", { staticClass: "modal-content" }, [
                            _vm._m(22),
                            _vm._v(" "),
                            _c("div", { staticClass: "modal-body py-2 px-4" }, [
                              _c("h4", { staticClass: "selectplan mb-2" }, [
                                _vm._v(
                                  "\n                                            Please select plan from the dropdown\n                                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.desired_package,
                                          expression: "desired_package"
                                        }
                                      ],
                                      staticClass: "dropdown-groups",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.desired_package = $event.target
                                            .multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v("Select Package")
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(_vm.packages, function(
                                        pack,
                                        packid
                                      ) {
                                        return _c(
                                          "optgroup",
                                          {
                                            key: packid,
                                            attrs: { label: packid }
                                          },
                                          _vm._l(pack, function(p, pid) {
                                            return _c(
                                              "option",
                                              {
                                                key: pid,
                                                domProps: { value: p }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                            " +
                                                    _vm._s(p.title) +
                                                    " - " +
                                                    _vm._s(p.no_of_task) +
                                                    " Tasks\n                                                        "
                                                )
                                              ]
                                            )
                                          }),
                                          0
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row mt-2" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _vm.desired_package
                                    ? _c("p", {}, [
                                        _vm._v(
                                          _vm._s(_vm.desired_package.price) +
                                            "$ will be charged"
                                        )
                                      ])
                                    : _vm._e()
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "modal-footer" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger light",
                                  attrs: {
                                    type: "button",
                                    "data-dismiss": "modal"
                                  }
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "button" },
                                  on: { click: _vm.upgradePackage }
                                },
                                [_vm._v("Upgrade")]
                              )
                            ])
                          ])
                        ]
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex"
      },
      [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("Home")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item active" }, [
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _vm._v("Profile")
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-primary light sharp",
        attrs: { href: "#", "data-toggle": "dropdown", "aria-expanded": "true" }
      },
      [_c("i", { staticClass: "fi-rr-pencil" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "nav nav-tabs" }, [
      _c("li", { staticClass: "nav-item " }, [
        _c(
          "a",
          {
            staticClass: "nav-link show active",
            attrs: { href: "#about-me", "data-toggle": "tab" }
          },
          [_vm._v("About Me")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: { href: "#profile-settings", "data-toggle": "tab" }
          },
          [_vm._v("Edit Profile")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: { href: "#plan-settings", "data-toggle": "tab" }
          },
          [_vm._v("Plan Settings")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("First Name"),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Last Name "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Email "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Verified Email Address "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Date of Birth "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Gender "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Home Phone "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Cell Phone "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Skype ID "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Availability "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Age "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Location "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Field Experience "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h4", { staticClass: "text-primary mb-4" }, [
        _vm._v("Update Card Details")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-handy-task",
          attrs: {
            "data-toggle": "modal",
            "data-target": "#upgrade-card",
            type: "button"
          }
        },
        [_vm._v("Update Card Details")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-5" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Current Plan "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ]),
      _vm._v(" "),
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Remaining Task "),
        _c("span", { staticClass: "pull-right" }, [_vm._v(":")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Add Tasks\n                                            ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h5", { staticClass: "f-w-500" }, [
        _vm._v("Upgrade Plan\n                                            ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Please enter card details")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Upgrade Plan")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);