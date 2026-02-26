(()=>{function e(r){var i,s=n[r]
return void 0!==s?s.exports:(i=n[r]={exports:{}},t[r].call(i.exports,i,i.exports,e),i.exports)}var t={9100:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),i(n(4908),t)},4908:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.inject=t.ObjectGraph=void 0
const r=n(2450)
t.ObjectGraph=class{constructor(e){this._members={},this.name=e}adding(e,t){const n=this.clone()
return n._members[e.name]=t,n}removing(e){const t=this.clone()
return delete t._members[e.name],t}optional(e){return this._members[e.name]}required(e){const t=this._members[e.name]
if((0,r.isNothing)(t)){const t=Object.keys(this._members).sort().join(", ")
throw new Error(`No member with type ${e.name} found in ${this.name}. Candidates ${t}`)}return t}clone(){const e=new(0,this.constructor)(this.name)
for(const[t,n]of Object.entries(this._members))e._members[t]=n
return e}},t.inject=function(e,t){return t.required(e)}},9089:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isBaseActionProvider=void 0
const r=n(2450)
t.isBaseActionProvider=function(e){return"object"==typeof e&&(0,r.isSome)(null==e?void 0:e.actionFor)}},129:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),i(n(9089),t)},8770:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3421:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IntentDispatcher=void 0
const r=n(2450),i=n(4395),s=n(3907),o=n(1222)
t.IntentDispatcher=class{constructor(){this.dispatchableMap={}}register(e){if((0,r.isNothing)(e.$intentKind))throw new Error("Dispatcher cannot register a controller without an $intentKind")
if(e.$intentKind in this.dispatchableMap)throw new Error(`Dispatcher already has a controller registered for ${e.$intentKind}`)
this.dispatchableMap[e.$intentKind]=e}async dispatch(e,t){if("$static"===e.$kind){const t=Reflect.get(e,"$data")
if((0,r.isNothing)(t))throw new Error("StaticIntent<R> contains no data")
return t}const n=this.dispatchableMap[e.$kind]
if((0,r.isNothing)(n)||!(0,i.isIntentController)(n))throw new Error(`No controller registered to handle ${e.$kind}`)
const a=e.$pageIntentInstrumentation,u=t.optional(o.net)
if((0,r.isSome)(a)&&(0,r.isSome)(u)){const r=new s.ProxiedNetwork(u,a),i=t.adding(o.net,r)
return await n.perform(e,i)}return await n.perform(e,t)}controller(e){return this.dispatchableMap[e.$kind]}get registeredControllers(){return Object.values(this.dispatchableMap)}}},8346:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),i(n(4395),t),i(n(3421),t),i(n(8770),t),i(n(867),t)},4395:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isIntentController=void 0
const r=n(2450)
t.isIntentController=function(e){return"object"==typeof e&&(0,r.isSome)(null==e?void 0:e.perform)}},867:(e,t)=>{function n(e){return{$kind:"$static",$data:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Continuous=t.makeSidepackedIntent=t.makeStaticContinuousIntentsOf=t.makeStaticIntent=void 0,t.makeStaticIntent=n,t.makeStaticContinuousIntentsOf=function(e){const t=new Array
for(const i of e)t.push(n(r.of(i)))
return t},t.makeSidepackedIntent=function(e,t){return{$kind:"$sidepacked",$initial:e,$intent:t}}
class r{static of(e){return new r(new i(e))}static contentsOf(e){return new r(e)}constructor(e){this.base=e}toJSON(){if(this.base instanceof i)return this.base.toJSON()
throw new TypeError("Continuous was not created with a single element")}async*[Symbol.asyncIterator](){yield*this.base}}t.Continuous=r
class i{constructor(e){this.element=e}toJSON(){return this.element}async*[Symbol.asyncIterator](){yield this.element}}},5881:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),i(n(8346),t),i(n(129),t)},5542:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),i(n(5827),t),i(n(1721),t),i(n(9031),t),i(n(447),t),i(n(2024),t),i(n(2450),t)},4172:(e,t,n)=>{function r(e){return Array.isArray(e)?"array":null===e?"null":typeof e}function i(e,t,n,i){l({type:"badType",expected:t,actual:`${r(n)} (${n})`,objectPath:(0,d.isSome)(i)&&i.length>0?i:"<this>",contextNames:a(),recoveryAction:e,stack:(new Error).stack})}function s(e){return!(0,d.isNothing)(e)&&(Object.prototype.hasOwnProperty.call(e,"$incidents")||Object.isExtensible(e))}function o(e){f.nameStack.push(e)}function a(){return 0===f.nameStack.length?["<empty stack>"]:f.nameStack.slice(0)}function u(){f.nameStack.length,f.nameStack.pop()}function c(e,t,n){let r,s=null;(0,d.isSome)(n)&&n.length>0&&(s=e,f.suppressedIncidentPaths.push(n))
try{o(e),r=t()}catch(e){throw e.hasThrown||(i("defaultValue","no exception",e.message),e.hasThrown=!0),e}finally{e===s&&f.suppressedIncidentPaths.pop(),u()}return r}function l(e){f.suppressedIncidentPaths.includes(e.objectPath)||f.incidents.push(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.unexpectedNull=t.catchingContext=t.context=t.recordValidationIncidents=t.endContext=t.getContextNames=t.beginContext=t.messageForRecoveryAction=t.isValidatable=t.unexpectedType=t.extendedTypeof=void 0
const d=n(2450)
t.extendedTypeof=r,t.unexpectedType=i,t.isValidatable=s,t.messageForRecoveryAction=function(e){switch(e){case"coercedValue":return"Coerced format"
case"defaultValue":return"Default value used"
case"ignoredValue":return"Ignored value"
default:return"Unknown"}}
const f={nameStack:Array(),incidents:Array(),suppressedIncidentPaths:Array()}
t.beginContext=o,t.getContextNames=a,t.endContext=u,t.recordValidationIncidents=function(e){s(e)&&(e.$incidents=f.incidents),f.incidents=[],f.nameStack=[],f.suppressedIncidentPaths=[]},t.context=c,t.catchingContext=function(e,t,n){let r=null
try{r=c(e,t)}catch(e){r=null,(0,d.isSome)(n)&&(r=n(e))}return r},t.unexpectedNull=function(e,t,n){l({type:"nullValue",expected:t,actual:"null",objectPath:(0,d.isSome)(n)&&n.length>0?n:"<this>",contextNames:a(),recoveryAction:e,stack:(new Error).stack})}},8836:(e,t,n)=>{t.Qm=void 0,n(2450)
const r=n(900)
n(2366),t.Qm=(0,r.makeMetatype)("jet-engine:fetchTimingMetricsBuilder")},4789:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},573:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeCompoundAction=t.isCompoundAction=void 0,t.isCompoundAction=function(e){return"compoundAction"===(null==e?void 0:e.$kind)},t.makeCompoundAction=function(e,t){return{$kind:"compoundAction",subactions:t,actionMetrics:e}}},9120:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeEmptyAction=t.isEmptyAction=void 0,t.isEmptyAction=function(e){return"emptyAction"===(null==e?void 0:e.$kind)},t.makeEmptyAction=function(e){return{$kind:"emptyAction",actionMetrics:e}}},9634:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5599:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6158:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9400:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1235:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),i(n(4789),t),i(n(573),t),i(n(9120),t),i(n(9634),t),i(n(5599),t),i(n(2170),t),i(n(6158),t),i(n(9400),t),i(n(4362),t)},4362:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},998:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeArtworkURLTemplate=void 0
const r=n(4172),i=n(2450),s=n(1974),o=new RegExp("^({w}|[0-9]+(?:.[0-9]*)?)x({h}|[0-9]+(?:.[0-9]*)?)({c}|[a-z]{2}).({f}|[a-z]+)$")
t.makeArtworkURLTemplate=function(e){if(void 0===new s.URL(e).pathname)return r.context("makeArtworkURLTemplate",()=>{r.unexpectedType("ignoredValue","A valid URL string",e)}),null
const t=e.substring(e.lastIndexOf("/")+1),n=o.exec(t)
return(0,i.isNothing)(n)||5!==n.length?(r.context("makeArtworkURLTemplate",()=>{r.unexpectedType("ignoredValue","A valid artwork URL template ending with {w}x{h}{c}.{f} format",t)}),null):e}},7615:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6301:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.areEqual=t.luminanceFrom=t.dynamicWith=t.named=t.rgbWith=t.htmlWith=t.Color=void 0
const r=n(2450)
t.Color={fromHex:e=>(0,r.isNothing)(e)?null:{$kind:"html",value:e},fromRGB:(e,t,n,r=1)=>({$kind:"rgb",red:e,green:t,blue:n,alpha:r}),named:e=>({$kind:"named",name:e}),dynamicWith:(e,t,n,r)=>({$kind:"dynamic",lightColor:e,lightHighContrastColor:t,darkColor:n,darkHighContrastColor:r}),luminanceFrom:e=>.2126*e.red+.7152*e.green+.0722*e.blue,areEqual(e,n){if((0,r.isNothing)(e))return(0,r.isNothing)(n)
if((0,r.isNothing)(n))return(0,r.isNothing)(e)
const i=e.$kind,s=n.$kind
if("named"===i&&"named"===s){const t=n
return e.name===t.name}if("rgb"===i&&"rgb"===s){const t=e,r=n
return t.red===r.red&&t.green===r.green&&t.blue===r.blue&&t.alpha===r.alpha}if("dynamic"===i&&"dynamic"===s){const r=e,i=n
return t.Color.areEqual(r.lightColor,i.lightColor)&&t.Color.areEqual(r.lightHighContrastColor,i.lightHighContrastColor)&&t.Color.areEqual(r.darkColor,i.darkColor)&&t.Color.areEqual(r.darkHighContrastColor,i.darkHighContrastColor)}return!1}}
const i=t.Color.fromHex
t.htmlWith=i
const s=t.Color.fromRGB
t.rgbWith=s
const o=t.Color.named
t.named=o
const a=t.Color.dynamicWith
t.dynamicWith=a
const u=t.Color.luminanceFrom
t.luminanceFrom=u
const c=t.Color.areEqual
t.areEqual=c},5827:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),i(n(1235),t),i(n(998),t),i(n(7615),t),i(n(6301),t),i(n(8681),t),i(n(9184),t),i(n(7129),t),i(n(2359),t)},8681:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.menuSeparatorID=void 0,t.menuSeparatorID="com.apple.JetEngine.separator"},9184:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},7129:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2359:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},6882:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.exportBootstrap=void 0,t.exportBootstrap=function(e){"undefined"!=typeof $exportBootstrap&&$exportBootstrap(e)}},8706:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),i(n(6882),t),i(n(4816),t)},4816:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LegacyRuntime=t.Runtime=void 0
const n="function"==typeof exportService
class r{constructor(e,t){this.dispatcher=e,this.objectGraph=t}async dispatch(e){return await this.dispatcher.dispatch(e,this.objectGraph)}}t.Runtime=r,t.LegacyRuntime=class extends r{constructor(e,t,n){super(e,t),this.services=n}serviceWithName(e){return this.services[e]}exportingService(e,t){return n&&function(e,t){exportService(e,t)}(e,t),this.services[e]=t,this}}},1219:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},8045:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3922:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9891:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1121:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1721:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),"undefined"==typeof preprocessor&&(globalThis.preprocessor={PRODUCTION_BUILD:!1,CARRY_BUILD:!1,DEBUG_BUILD:!1,INTERNAL_BUILD:!1}),"undefined"==typeof testContent&&(globalThis.testContent={INCLUDE_TEST_CONTENT:!1}),i(n(1219),t),i(n(8045),t),i(n(3922),t),i(n(9891),t),i(n(1121),t),i(n(9247),t),i(n(3907),t),i(n(6534),t),i(n(5817),t),i(n(3043),t),i(n(5037),t),i(n(5937),t),i(n(1222),t)},9247:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3907:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProxiedNetwork=void 0,t.ProxiedNetwork=class{constructor(e,t){this.original=e,this.pageIntentInstrumentation=t}async fetch(e){return e.$pageIntentInstrumentation=this.pageIntentInstrumentation,await this.original.fetch(e)}}},6534:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5817:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3043:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5037:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},5937:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1222:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.services=t.random=t.plist=t.platform=t.net=t.localizer=t.host=t.cryptography=t.cookieProvider=t.bundle=t.bag=void 0
const r=n(900)
t.bag=(0,r.makeMetatype)("jet-engine:bag"),t.bundle=(0,r.makeMetatype)("jet-engine:bundle"),t.cookieProvider=(0,r.makeMetatype)("jet-engine:cookieProvider"),t.cryptography=(0,r.makeMetatype)("jet-engine:cryptography"),t.host=(0,r.makeMetatype)("jet-engine:host"),t.localizer=(0,r.makeMetatype)("jet-engine:localizer"),t.net=(0,r.makeMetatype)("jet-engine:net"),t.platform=(0,r.makeMetatype)("jet-engine:platform"),t.plist=(0,r.makeMetatype)("jet-engine:plist"),t.random=(0,r.makeMetatype)("jet-engine:random"),t.services=(0,r.makeMetatype)("jet-engine:services")},2490:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9031:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),i(n(2490),t)},447:(e,t)=>{var n
Object.defineProperty(t,"__esModule",{value:!0}),t.notInstrumented=t.PageInvocationPoint=t.EMPTY_LINTED_METRICS_EVENT=void 0,t.EMPTY_LINTED_METRICS_EVENT={fields:{},issues:[]},(n=t.PageInvocationPoint||(t.PageInvocationPoint={})).pageEnter="pageEnter",n.pageExit="pageExit",n.appExit="appExit",n.appEnter="appEnter",n.backButton="backButton",t.notInstrumented=function(e){switch(e){case 0:return{data:[],custom:{}}
case 1:default:return{}
case 2:return{instructions:[],custom:{}}
case 3:return{id:{id:"",impressionIndex:NaN},fields:{},custom:{}}}}},2024:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2450:(e,t)=>{function n(e){return null==e}function r(e){return null!=e}Object.defineProperty(t,"__esModule",{value:!0}),t.flatMapOptional=t.mapOptional=t.unsafeUnwrapOptional=t.unwrapOptional=t.isSome=t.isNothing=t.unsafeUninitialized=void 0,t.unsafeUninitialized=function(){},t.isNothing=n,t.isSome=r,t.unwrapOptional=function(e){if(n(e))throw new ReferenceError
return e},t.unsafeUnwrapOptional=function(e){return e},t.mapOptional=function(e,t){return r(e)?t(e):e},t.flatMapOptional=function(e,t){return r(e)?t(e):e}},900:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeMetatype=void 0,t.makeMetatype=function(e){return{name:e}}},2366:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isPromise=void 0,t.isPromise=function(e){return null!==e&&"object"==typeof e&&"function"==typeof e.then}},1974:(e,t,n)=>{function r(e,t,n){const r=e.indexOf(t)
let i,s=e
if(-1!==r){const o=e.slice(0,r),a=e.slice(r+t.length,e.length)
"prefix"===n?(i=o,s=a):(i=a,s=o)}return{result:i,remainder:s}}Object.defineProperty(t,"__esModule",{value:!0}),t.URL=void 0
const i=n(2450),s=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,o=/([^=?&]+)=?([^&]*)/g,a=["hash","query","pathname","host"]
class u{constructor(e){var t
if(this.query={},(0,i.isNothing)(e))return
let n=e
const o=s.exec(e)
if((0,i.isSome)(o)){let e=o[1]
null!=e&&(e=e.split(":")[0]),this.protocol=null!=e?e:void 0,n=null!==(t=o[3])&&void 0!==t?t:void 0}let c={remainder:n,result:void 0}
for(const e of a){if(void 0===c||void 0===c.remainder)break
switch(e){case"hash":c=r(c.remainder,"#","suffix"),this.hash=null==c?void 0:c.result
break
case"query":c=r(c.remainder,"?","suffix"),void 0!==(null==c?void 0:c.result)&&(this.query=u.queryFromString(c.result))
break
case"pathname":c=r(c.remainder,"/","suffix"),void 0!==(null==c?void 0:c.result)&&(this.pathname="/"+c.result)
break
case"host":{const e=r(c.remainder,"@","prefix"),t=null==e?void 0:e.result,n=null==e?void 0:e.remainder
if(void 0!==t){const e=t.split(":")
this.username=decodeURIComponent(e[0]),this.password=decodeURIComponent(e[1])}if(void 0!==n){const e=n.split(":")
this.host=e[0],this.port=e[1]}break}default:throw new Error("Unhandled case!")}}}get(e){switch(e){case"protocol":return this.protocol
case"username":return this.username
case"password":return this.password
case"port":return this.port
case"pathname":return this.pathname
case"query":return this.query
case"hash":return this.hash
default:return this[e]}}set(e,t){if(void 0===t)return this
switch("query"===e&&"string"==typeof t&&(t=u.queryFromString(t)),e){case"protocol":this.protocol=t
break
case"username":this.username=t
break
case"password":this.password=t
break
case"port":this.port=t
break
case"pathname":this.pathname=t
break
case"query":this.query=t
break
case"hash":this.hash=t
break
default:this[e]=t}return this}append(e,t){let n,r=this.get(e)
if("query"===e)void 0===r&&(r={}),"string"==typeof t&&(t=u.queryFromString(t)),n="string"==typeof r?{existingValue:r,...t}:{...r,...t}
else{void 0===r&&(r="")
let i=r
void 0===i&&(i="")
let s=i
if("pathname"===e){const e=i.length
0!==e&&"/"===r[e-1]||(s+="/")}s+=t,n=s}return this.set(e,n)}param(e,t){return null===e||(void 0===this.query&&(this.query={}),void 0===t?delete this.query[e]:this.query[e]=t),this}removeParam(e){return void 0===e||void 0===this.query||e in this.query&&delete this.query[e],this}path(e){return this.append("pathname",e)}pathExtension(){var e,t
if(void 0===this.pathname)return
const n=null!==(t=null===(e=this.pathname.split("/").filter(e=>e.length>0).pop())||void 0===e?void 0:e.split("."))&&void 0!==t?t:[]
return n.filter(function(e){return""!==e}).length<2?void 0:n.pop()}pathComponents(){return void 0===this.pathname?[]:this.pathname.split("/").filter(e=>e.length>0)}build(){return this.toString()}toString(){let e=""
return void 0!==this.protocol&&(e+=this.protocol+"://"),void 0!==this.username&&(e+=encodeURIComponent(this.username),void 0!==this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),void 0!==this.host&&(e+=this.host,void 0!==this.port&&(e+=":"+this.port)),void 0!==this.pathname&&(e+=this.pathname),void 0!==this.query&&0!==Object.keys(this.query).length&&(e+="?"+u.toQueryString(this.query)),void 0!==this.hash&&(e+="#"+this.hash),e}static queryFromString(e){const t={}
let n=o.exec(e)
for(;null!==n&&n.length>=3;){const r=decodeURIComponent(n[1].replace(/\+/g," ")),i=decodeURIComponent(n[2].replace(/\+/g," "))
t[r]=i,n=o.exec(e)}return t}static toQueryString(e){let t="",n=!0
for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r)
const i=e[r]
null!==i&&i.length>0&&(t+="="+encodeURIComponent(i))}return t}static from(e){return new u(e)}static fromComponents(e,t,n,r,i){const s=new u
return s.protocol=e,s.host=t,s.pathname=n,s.query=null!=r?r:{},s.hash=i,s}}t.URL=u},6034:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return i(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAugmentedData=void 0
const o=s(n(581))
t.fetchAugmentedData=async function(e,t,n,r,i){const s=n(e,t,i)
if(null==s)return await Promise.resolve({originalData:t,additionalData:null})
const a=Array.from(s),u=[]
for(const t of a){const n=r(e,t)
if(o.isNull(n)){const e=a.indexOf(t)
a.splice(e,1)}else u.push(n)}return await Promise.all(u).then(e=>{const n=new Map
for(const[t,r]of a.entries()){const i=e[t]
n.set(r,i)}return{originalData:t,additionalData:n}})}},8371:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),i(n(6762),t),i(n(6034),t),i(n(264),t),i(n(5917),t),i(n(5658),t),i(n(4625),t),i(n(695),t)},377:function(e,t,n){function r(e,t,n){return h.isNull(e)?null:h.asDictionary(e.attributes,t,n)}function i(e,t,n="coercible"){return h.isNull(e)?null:h.asString(e.attributes,t,n)}function s(e,t,n="coercible"){if(h.isNull(e))return null
const r=h.asString(e.attributes,t,n)
return(0,f.isNothing)(r)?null:new Date(r)}function o(e){return!h.isNull(h.asDictionary(e,"attributes"))}function a(e){const t=h.asDictionary(e,"meta")
if((0,f.isNothing)(t))throw new p.MissingFieldError(e.id,"meta")
return t}function u(e,t){let n
return n=Array.isArray(e)?e:[e],Array.isArray(t)?n.push(...t):n.push(t),n}var c=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),d=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&c(t,e,n)
return l(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.concatObjectPaths=t.requiredMetaAttributeAsNumber=t.requiredMetaAttributeAsString=t.requiredMeta=t.requiredAttributeAsDictionary=t.requiredAttributeAsDate=t.requiredAttributeAsString=t.attributeAllowsNondefaultTreatmentInNondefaultPage=t.attributeKeyAsCustomAttributeKey=t.isNotHydrated=t.hasAttributes=t.attributeAsNumber=t.attributeAsBooleanOrFalse=t.attributeAsBoolean=t.attributeAsDate=t.metaAsString=t.attributeAsString=t.attributeAsArrayOrEmpty=t.attributeAsInterface=t.attributeAsDictionary=void 0
const f=n(2450),h=d(n(581)),p=d(n(1636))
t.attributeAsDictionary=r,t.attributeAsInterface=function(e,t,n){return r(e,t,n)},t.attributeAsArrayOrEmpty=function(e,t){return h.isNull(e)?[]:h.asArrayOrEmpty(e.attributes,t)},t.attributeAsString=i,t.metaAsString=function(e,t,n="coercible"){return h.isNull(e)?null:h.asString(e.meta,t,n)},t.attributeAsDate=s,t.attributeAsBoolean=function(e,t,n="coercible"){return h.isNull(e)?null:h.asBoolean(e.attributes,t,n)},t.attributeAsBooleanOrFalse=function(e,t){return!h.isNull(e)&&h.asBooleanOrFalse(e.attributes,t)},t.attributeAsNumber=function(e,t,n="coercible"){return h.isNull(e)?null:h.asNumber(e.attributes,t,n)},t.hasAttributes=o,t.isNotHydrated=function(e){return!o(e)},t.attributeKeyAsCustomAttributeKey=function(e){return w[e]},t.attributeAllowsNondefaultTreatmentInNondefaultPage=function(e){return"customArtwork"===e}
const w={artwork:"customArtwork",screenshotsByType:"customScreenshotsByType",promotionalText:"customPromotionalText",videoPreviewsByType:"customVideoPreviewsByType",customScreenshotsByTypeForAd:"customScreenshotsByTypeForAd",customVideoPreviewsByTypeForAd:"customVideoPreviewsByTypeForAd"}
t.requiredAttributeAsString=function(e,t){const n=i(e,t)
if((0,f.isNothing)(n))throw new p.MissingFieldError(e.id,u("attributes",t))
return n},t.requiredAttributeAsDate=function(e,t){const n=s(e,t)
if((0,f.isNothing)(n))throw new p.MissingFieldError(e.id,u("attributes",t))
return n},t.requiredAttributeAsDictionary=function(e,t){const n=r(e,t)
if((0,f.isNothing)(n))throw new p.MissingFieldError(e.id,u("attributes",t))
return n},t.requiredMeta=a,t.requiredMetaAttributeAsString=function(e,t){const n=a(e),r=h.asString(n,t)
if((0,f.isNothing)(r))throw new p.MissingFieldError(e.id,u("meta",t))
return r},t.requiredMetaAttributeAsNumber=function(e,t){const n=a(e),r=h.asNumber(n,t)
if((0,f.isNothing)(r))throw new p.MissingFieldError(e.id,u("meta",t))
return r},t.concatObjectPaths=u},1180:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return i(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.BagWrapper=void 0
const o=n(5542),a=s(n(1222)),u=n(581)
t.BagWrapper=class{constructor(e){this.bag=e.required(a.bag)}get language(){return this.bag.string("language")}get mediaCountryCode(){return this.bag.string("countryCode")}get mediaHost(){return this.bag.url("apps-media-api-host")}get mediaPreviewHost(){return this.bag.string("apps-media-api-preview-host")}get mediaRealmHost(){return this.bag.string("notification-settings-media-api-host")}get mediaApiLanguage(){const e=this.bag.string("language-tag")
return(0,o.isSome)(e)?e:this.bag.string("language")}get edgeEndpoints(){const e=this.bag.array("apps-media-api-edge-end-points")
return void 0===e?[]:(0,u.asArrayOrEmpty)((0,u.asJSONValue)(e))}get mediaEdgeSearchHost(){return this.bag.string("apps-media-api-search-edge-host")}get redirectUrlWhitelistedQueryParams(){let e=(0,u.asArrayOrEmpty)((0,u.asJSONValue)(this.bag.array("processRedirectUrl/whitelistedQueryParams")))
return(0,u.isNullOrEmpty)(e)&&(e=["affC","adId","advp","at","ct","itsct","itscg","itscc","itcCt","its_qt","ls","partnerId","pt","qtkid","uo"]),e}}},8172:function(e,t,n){function r(e){return u.isDefinedNonNull(e.attributes)}var i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n)
return s(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.metricsFromMediaApiObject=t.dataCollectionFromResultsListContainer=t.isDataCollectionPartiallyHydrated=t.isDataCollectionHydrated=t.isDataHydrated=t.dataCollectionFromDataContainer=t.dataFromDataContainer=t.requiredStringID=void 0
const a=n(2450),u=o(n(581))
n(5917),t.requiredStringID=function(e){const t=u.asString(e,"id")
if((0,a.isNothing)(t))throw new Error(`Data.id '${e.id}' is not a string.`)
return t},t.dataFromDataContainer=function(e){const t=u.asArrayOrEmpty(e,"data")
return t.length,1!==t.length?null:t[0]},t.dataCollectionFromDataContainer=function(e){return u.asArrayOrEmpty(e,"data")},t.isDataHydrated=r,t.isDataCollectionHydrated=function(e){for(let t=e.length-1;t>=0;t-=1)if(!r(e[t]))return!1
return!0},t.isDataCollectionPartiallyHydrated=function(e){for(const t of e)if(r(t))return!0
return!1},t.dataCollectionFromResultsListContainer=function(e){return u.asArrayOrEmpty(e,"results.contents")},t.metricsFromMediaApiObject=function(e){return u.asDictionary(e,"meta.metrics")}},1636:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MissingFieldError=void 0
class n extends Error{constructor(e,t){super(),this.dataId=e,this.attributePath=t}}t.MissingFieldError=n},6762:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),i(n(377),t),i(n(1180),t),i(n(8172),t),i(n(4285),t),i(n(1289),t),i(n(264),t),i(n(581),t),i(n(4030),t),i(n(1636),t)},4285:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1289:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},264:function(e,t,n){function r(e){switch(host.platform){case"iOS":return"iPad"===host.deviceModelFamily?"ipad":"iphone"
case"macOS":return"mac"
case"tvOS":return"appletv"
case"watchOS":return"watch"
case"xrOS":return"realityDevice"
default:return null}}var i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n)
return s(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.Request=t.defaultPlatformForClient=void 0
const a=o(n(581))
t.defaultPlatformForClient=r,t.Request=class{constructor(e,t){if(this.contentsResourceTypes=new Set,this.ids=new Set,this.seeds=new Set,this.relationshipIncludes=new Set,this.relationshipIncludesOnly=new Set,this.attributeIncludes=new Set,this.platform=null,this.additionalPlatforms=new Set,this.additionalQuery={},this.relationshipLimits={},this.searchTerm=null,this.searchTypes=[],this.context=null,this.useCustomAttributes=!1,this.shouldOmitAutomaticRelationship=!1,this.objectGraph=e,this.platform=r(),!a.isNullOrEmpty(t))if("string"==typeof t)this.href=t
else if(Array.isArray(t)){const e=new Set
for(const n of t)e.add(n.type),this.ids.add(n.id)
1===e.size?this.resourceType=e.values().next().value:e.size>1&&(this.resourceType="contents",this.contentsResourceTypes=e)}}forType(e){return this.resourceType=e,this}withIds(e){for(const t of e)a.isDefinedNonNullNonEmpty(t)&&this.ids.add(t)
return this}withSeeds(e){for(const t of e)a.isDefinedNonNullNonEmpty(t)&&this.seeds.add(t)
return this}includingRelationships(e){for(const t of e)this.relationshipIncludes.add(t)
return this}includingOnlyRelationships(e){for(const t of e)this.relationshipIncludesOnly.add(t)
return this}includingScopedRelationships(e,t){null==this.scopedRelationshipIncludes&&(this.scopedRelationshipIncludes=new Map)
let n=this.scopedRelationshipIncludes.get(e)
null==n&&(n=new Set)
for(const e of t)n.add(e)
return this.scopedRelationshipIncludes.set(e,n),this}includingMetaKeys(e,t){null==this.metaIncludes&&(this.metaIncludes=new Map)
let n=this.metaIncludes.get(e)
null==n&&(n=new Set)
for(const e of t)n.add(e)
return this.metaIncludes.set(e,n),this}includingAssociateKeys(e,t){null==this.associateIncludes&&(this.associateIncludes=new Map)
let n=this.associateIncludes.get(e)
null==n&&(n=new Set)
for(const e of t)n.add(e)
return this.associateIncludes.set(e,n),this}includingRelationshipsForUpsell(e){const t="marketing-items"
if(e){null==this.scopedRelationshipIncludes&&(this.scopedRelationshipIncludes=new Map)
let e=this.scopedRelationshipIncludes.get("editorial-items")
null==e&&(e=new Set),e.add(t),this.scopedRelationshipIncludes.set("editorial-items",e)}else this.relationshipIncludes.add(t)
{null==this.metaIncludes&&(this.metaIncludes=new Map)
let e=this.metaIncludes.get("marketing-items")
null==e&&(e=new Set),e.add("metrics"),this.metaIncludes.set("marketing-items",e)}return this}includingAttributes(e){for(const t of e)this.attributeIncludes.add(t)
return this}includingScopedAttributes(e,t){null==this.scopedAttributeIncludes&&(this.scopedAttributeIncludes=new Map)
let n=this.scopedAttributeIncludes.get(e)
null==n&&(n=new Set)
for(const e of t)n.add(e)
return this.scopedAttributeIncludes.set(e,n),this}includingAdditionalPlatforms(e){for(const t of e)this.additionalPlatforms.add(t)
return this}includingScopedAvailableIn(e,t){null==this.scopedAvailableInIncludes&&(this.scopedAvailableInIncludes=new Map)
let n=this.scopedAvailableInIncludes.get(e)
null==n&&(n=new Set)
for(const e of t)n.add(e)
return this.scopedAvailableInIncludes.set(e,n),this}includingScopedSparseLimit(e,t){return null==this.scopedSparseLimit&&(this.scopedSparseLimit=new Map),this.scopedSparseLimit.set(e,t),this}addingQuery(e,t){return this.additionalQuery[e]=t,this}addingRelationshipLimit(e,t){return this.relationshipLimits[e]=t,this}withSearchTerm(e){return this.searchTerm=e,this}searchingOverTypes(e){for(const t of e)this.searchTypes.push(t)
return this}addingContext(e){return this.context=e,this}format(e){return this.responseFormat=e,this}usingCustomAttributes(e){return this.useCustomAttributes=e,this}alwaysUseIdsAsQueryParam(e){return this.useIdsAsQueryParam=e,this}attributingTo(e){return this.canonicalUrl=e,this}withFilter(e,t){return this.filterType=e,this.filterValue=t,this}withLimit(e){return this.limit=e,this}withSparseLimit(e){return null!==e&&(this.sparseLimit=e),this}withSparseCount(e){return null!==e&&(this.sparseCount=e),this}enablingFeature(e){return null==this.enabledFeatures&&(this.enabledFeatures=[]),this.enabledFeatures.push(e),this}enablingFeatures(e){return null==this.enabledFeatures&&(this.enabledFeatures=[]),this.enabledFeatures.push(...e),this}asPartialResponseLimitedToFields(e){return this.fields=e,this}includesResourceType(e){return this.resourceType===e||!!a.isDefinedNonNull(this.contentsResourceTypes)&&this.contentsResourceTypes.has(e)}}},581:function(e,t,n){function r(e){return s(e)?null:Array.isArray(e)?e.join("."):e}function i(e,t,n){if(null==e)return n
if(o(t))return e
let r
if("string"==typeof t){if(r=w[t],o(r)){if(!t.includes(".")){const r=e[t]
return null!=r?r:n}r=t.split("."),w[t]=r}}else r=t
let i=e
for(const e of r)if(i=i[e],null==i)return n
return i}function s(e){return null==e}function o(e){return s(e)||0===Object.keys(e).length}function a(e){return null!=e}function u(e,t,n="coercible"){const o=i(e,t,null)
if(s(o))return o
if("string"==typeof o)return o
{const e="object"==typeof o?null:String(o)
switch(n){case"strict":h.context("asString",()=>{h.unexpectedType("coercedValue","string",o,r(t))})
break
case"coercible":s(e)&&h.context("asString",()=>{h.unexpectedType("coercedValue","string",o,r(t))})}return e}}function c(e,t,n){const o=i(e,t,null)
return o instanceof Object&&!Array.isArray(o)?o:(s(o)||h.context("asDictionary",()=>{h.unexpectedType("defaultValue","object",o,r(t))}),a(n)?n:null)}var l=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),d=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),f=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n)
return d(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.asJSONData=t.asJSONValue=t.asBoolean=t.asInterface=t.asDictionary=t.asNumber=t.asDate=t.asString=t.asBooleanOrFalse=t.asArrayOrEmpty=t.isArrayDefinedNonNullAndEmpty=t.isNumber=t.isDefinedNonNullNonEmpty=t.isDefinedNonNull=t.isNullOrEmpty=t.isNull=t.traverse=t.objectPathToString=void 0
const h=f(n(4172)),p=n(2450)
t.objectPathToString=r
const w={}
t.traverse=i,t.isNull=s,t.isNullOrEmpty=o,t.isDefinedNonNull=a,t.isDefinedNonNullNonEmpty=function(e){return a(e)&&0!==Object.keys(e).length},t.isNumber=function(e){if(s(e))return!1
let t
return t="string"==typeof e?parseInt(e):e,!Number.isNaN(t)},t.isArrayDefinedNonNullAndEmpty=function(e){return a(e)&&0===e.length},t.asArrayOrEmpty=function(e,t){const n=i(e,t,null)
return Array.isArray(n)?n:(s(n)||h.context("asArrayOrEmpty",()=>{h.unexpectedType("defaultValue","array",n,r(t))}),[])},t.asBooleanOrFalse=function(e,t){const n=i(e,t,null)
return"boolean"==typeof n?n:(s(n)||h.context("asBooleanOrFalse",()=>{h.unexpectedType("defaultValue","boolean",n,r(t))}),!1)},t.asString=u,t.asDate=function(e,t,n="coercible"){const r=u(e,t,n)
return(0,p.isNothing)(r)?null:new Date(r)},t.asNumber=function(e,t,n="coercible"){const o=i(e,t,null)
if(s(o)||"number"==typeof o)return o
{const e=Number(o)
switch(n){case"strict":h.context("asNumber",()=>{h.unexpectedType("coercedValue","number",o,r(t))})
break
case"coercible":if(isNaN(e))return h.context("asNumber",()=>{h.unexpectedType("coercedValue","number",o,r(t))}),null}return e}},t.asDictionary=c,t.asInterface=function(e,t,n){return c(e,t,n)},t.asBoolean=function(e,t,n="coercible"){const o=i(e,t,null)
if(s(o))return null
if("boolean"==typeof o)return o
if("string"==typeof o){if("true"===o)return!0
if("false"===o)return!1}const a=Boolean(o)
switch(n){case"strict":h.context("asBoolean",()=>{h.unexpectedType("coercedValue","number",o,r(t))})
break
case"coercible":if(s(a))return h.context("asBoolean",()=>{h.unexpectedType("coercedValue","number",o,r(t))}),null}return a},t.asJSONValue=function(e){if(null==e)return null
switch(typeof e){case"string":case"number":case"boolean":return e
case"object":return Array.isArray(e),e
default:return h.context("asJSONValue",()=>{h.unexpectedType("defaultValue","JSONValue",typeof e)}),null}},t.asJSONData=function(e){return null==e?null:e instanceof Object&&!Array.isArray(e)?e:(h.context("asJSONValue",()=>{h.unexpectedType("defaultValue","object",typeof e)}),null)}},4030:(e,t,n)=>{function r(e,t,n){const r=e.indexOf(t)
let i,s=e
if(-1!==r){const o=e.slice(0,r),a=e.slice(r+t.length,e.length)
"prefix"===n?(i=o,s=a):(i=a,s=o)}return{result:i,remainder:s}}Object.defineProperty(t,"__esModule",{value:!0}),t.URL=void 0
const i=n(2450),s=n(581),o=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,a=/([^=?&]+)=?([^&]*)/g,u=["hash","query","pathname","host"]
class c{constructor(e){if(this.query={},(0,s.isNullOrEmpty)(e))return
let t=e
const n=o.exec(e)
if(null!=n){let e=n[1]
e&&(e=e.split(":")[0]),this.protocol=e,t=n[3]}let i={remainder:t,result:void 0}
for(const e of u){if(!i.remainder)break
switch(e){case"hash":i=r(i.remainder,"#","suffix"),this.hash=i.result
break
case"query":i=r(i.remainder,"?","suffix"),(0,s.isDefinedNonNullNonEmpty)(i.result)&&(this.query=c.queryFromString(i.result))
break
case"pathname":i=r(i.remainder,"/","suffix"),(0,s.isDefinedNonNullNonEmpty)(i.result)&&(this.pathname="/"+i.result)
break
case"host":if(i.remainder){const e=r(i.remainder,"@","prefix"),t=e.result,n=e.remainder
if((0,s.isDefinedNonNullNonEmpty)(t)){const e=t.split(":")
this.username=decodeURIComponent(e[0]),this.password=decodeURIComponent(e[1])}if(n){const e=n.split(":")
this.host=e[0],this.port=e[1]}}break
default:throw new Error("Unhandled case!")}}}set(e,t){if((0,s.isNullOrEmpty)(t))return this
switch("query"===e&&"string"==typeof t&&(t=c.queryFromString(t)),e){case"protocol":this.protocol=t
break
case"username":this.username=t
break
case"password":this.password=t
break
case"port":this.port=t
break
case"pathname":this.pathname=t
break
case"query":this.query=t
break
case"hash":this.hash=t
break
default:this[e]=t}return this}get(e){switch(e){case"protocol":return this.protocol
case"username":return this.username
case"password":return this.password
case"port":return this.port
case"pathname":return this.pathname
case"query":return this.query
case"hash":return this.hash
default:return this[e]}}append(e,t){const n=this.get(e)
let r
if("query"===e)"string"==typeof t&&(t=c.queryFromString(t)),r="string"==typeof n?{existingValue:n,...t}:{...n,...t}
else{let i=n
i||(i="")
let s=i
if("pathname"===e){const e=i.length
e&&"/"===i[e-1]||(s+="/")}s+=t,r=s}return this.set(e,r)}param(e,t){return e?(null==this.query&&(this.query={}),this.query[e]=t,this):this}removeParam(e){return e&&null!=this.query?(void 0!==this.query[e]&&delete this.query[e],this):this}path(e){return this.append("pathname",e)}pathExtension(){var e
if((0,i.isNothing)(this.pathname))return null
const t=null===(e=this.pathname.split("/").filter(e=>e.length>0).pop())||void 0===e?void 0:e.split(".")
return void 0===t||t.filter(e=>""!==e).length<2?null:t.pop()}pathComponents(){return(0,s.isNullOrEmpty)(this.pathname)?[]:this.pathname.split("/").filter(e=>e.length>0)}popPathComponent(){if((0,s.isNullOrEmpty)(this.pathname))return null
const e=this.pathname.slice(this.pathname.lastIndexOf("/")+1)
return 0===e.length?null:(this.pathname=this.pathname.slice(0,this.pathname.lastIndexOf("/")),e)}build(){return this.toString()}toString(){let e=""
return(0,s.isDefinedNonNullNonEmpty)(this.protocol)&&(e+=this.protocol+"://"),this.username&&(e+=encodeURIComponent(this.username),this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),(0,s.isDefinedNonNullNonEmpty)(this.host)&&(e+=this.host,this.port&&(e+=":"+this.port)),(0,s.isDefinedNonNullNonEmpty)(this.pathname)&&(e+=this.pathname,e.endsWith("/")&&this.pathname.length>0&&(e=e.slice(0,-1))),null!=this.query&&Object.keys(this.query).length>0&&(e+="?"+c.toQueryString(this.query)),(0,s.isDefinedNonNullNonEmpty)(this.hash)&&(e+="#"+this.hash),e}static queryFromString(e){const t={}
let n=a.exec(e)
for(;null!=n;){const r=decodeURIComponent(n[1]),i=decodeURIComponent(n[2])
t[r]=i,n=a.exec(e)}return t}static toQueryString(e){let t="",n=!0
for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r)
const i=e[r];(0,s.isDefinedNonNullNonEmpty)(i)&&i.length&&(t+="="+encodeURIComponent(i))}return t}static from(e){return new c(e)}static fromComponents(e,t,n,r,i){const s=new c
return s.protocol=e,s.host=t,s.pathname=n,s.query=r,s.hash=i,s}}t.URL=c},5917:function(e,t,n){async function r(e,t,n){const r=await e.network.fetch(t)
if(!r.ok)throw Error(`Bad Status code ${r.status} for ${t.url}`)
const i=Date.now(),s=n(r.body),o=Date.now(),u=function(e,t,n){return f.isNull(e)||0===e.length?null:{...e[0],parseStartTime:t,parseEndTime:n}}(r.metrics,i,o)
return f.isDefinedNonNull(u)&&(s[a.timingValues]=u),s[a.requestedUrl]=t.url.toString(),s}function i(e,t){return e.redirectUrlWhitelistedQueryParams.filter(e=>{var n
return f.isDefinedNonNull(null===(n=t.query)||void 0===n?void 0:n[e])})}async function s(e,t,n,r,u={},c=!1,l){var p,m,b
const A=new h.URL(n),y=i(e,A)
for(const e of y)A.removeParam(e)
const O=A.toString()
let P=u.headers
null==P&&(P={}),P.Authorization="Bearer "+r
const I={url:O,excludeIdentifierHeadersForAccount:null!==(p=u.excludeIdentifierHeadersForAccount)&&void 0!==p&&p,alwaysIncludeAuthKitHeaders:null===(m=u.alwaysIncludeAuthKitHeaders)||void 0===m||m,alwaysIncludeMMeClientInfoAndDeviceHeaders:null===(b=u.alwaysIncludeMMeClientInfoAndDeviceHeaders)||void 0===b||b,headers:P,method:u.method,body:u.requestBodyString,timeout:u.timeout},S=await e.network.fetch(I)
try{if(401===S.status||403===S.status){if(c)throw Error("We refreshed the token but we still get 401 from the API")
return t.resetToken(),await t.refreshToken().then(async r=>await s(e,t,n,r,u,!0,l))}if(404===S.status)throw o()
if(!S.ok){const e=new w(`Bad Status code ${S.status} for ${O}, original ${n}`)
throw e.statusCode=S.status,e}const r=t=>{const r=Date.now()
let i
if(f.isNull(t.body)||""===t.body){if(204!==t.status)throw o()
i={}}else i=JSON.parse(t.body)
const s=Date.now()
if(i[a.pageInformation]=f.asJSONData(function(e,t){const n=e.storefrontIdentifier
let r=null
if(f.isDefinedNonNullNonEmpty(n)){const e=n.split("-")
f.isDefinedNonNullNonEmpty(e)&&(r=e[0])}return{serverInstance:t.headers[g],storeFrontHeader:n,language:e.bagLanguage,storeFront:r,environmentDataCenter:t.headers[v]}}(e,t)),t.metrics.length>0){const e={...t.metrics[0],parseStartTime:r,parseEndTime:s}
i[a.timingValues]=e}else{const e={pageURL:t.url,parseStartTime:r,parseEndTime:s}
i[a.timingValues]=e}if(i[a.contentMaxAge]=function(e){const t=Object.keys(e.headers).find(e=>"cache-control"===e.toLowerCase())
if(f.isNull(t)||""===t)return null
const n=e.headers[t]
if(f.isNullOrEmpty(n))return null
const r=n.match(/max-age=(\d+)/)
return f.isNull(r)||r.length<2?null:f.asNumber(r[1])}(t),Array.isArray(i.data)&&f.isArrayDefinedNonNullAndEmpty(i.data)&&!f.asBooleanOrFalse(u.allowEmptyDataResponse))throw o()
return i[a.requestedUrl]=n,i}
return(0,d.isSome)(l)?l.measureParsing(S,r):r(S)}catch(e){if(e instanceof w)throw e
throw new Error(`Error Fetching - filtered: ${O}, original: ${n}, ${e.name}, ${e.message}`)}}function o(){const e=new w("No content")
return e.statusCode=204,e}var a,u=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),c=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&u(t,e,n)
return c(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.NetworkError=t.redirectParametersInUrl=t.fetchData=t.fetchPlist=t.fetchJSON=t.fetch=t.ResponseMetadata=void 0
const d=n(2450),f=l(n(581)),h=l(n(4030)),p=l(n(695))
!function(e){e.requestedUrl="_jet-internal:metricsHelpers_requestedUrl",e.timingValues="_jet-internal:metricsHelpers_timingValues",e.pageInformation="_jet-internal:metricsHelpers_pageInformation",e.contentMaxAge="_jet-internal:responseMetadata_contentMaxAge"}(a=t.ResponseMetadata||(t.ResponseMetadata={})),t.fetch=r,t.fetchJSON=async function(e,t){return await r(e,t,e=>(0,d.isSome)(e)?JSON.parse(e):{})},t.fetchPlist=async function(e,t){return await r(e,t,n=>{if((0,d.isSome)(n))return e.plist.parse(n)
throw new Error(`Could not fetch Plist, response body was not defined for ${t.url}`)})},t.fetchData=async function(e,t,n,r){const i=p.buildURLFromRequest(e,n).toString(),o=(Date.now(),await t.refreshToken()),u=await s(e,t,i,o,r,!1,e.fetchTimingMetricsBuilder)
return Date.now(),n.canonicalUrl&&(u[a.requestedUrl]=n.canonicalUrl),u},t.redirectParametersInUrl=i
class w extends Error{}t.NetworkError=w
const g="x-apple-application-instance",v="x-apple-application-site"},5658:function(e,t,n){function r(e,t){const n=d.attributeAsDictionary(e,"platformAttributes")
return l.traverse(n,t)}function i(e,t,n){const i=r(e,t)
return l.isNull(i)?null:l.asDictionary(i,n)}function s(e,t,n,i="coercible"){const s=r(e,t)
return l.isNull(s)?null:l.asString(s,n,i)}var o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n)
return a(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.requiredPlatformAttributeAsDictionary=t.requiredPlatformAttributeAsString=t.platformAttributeAsNumber=t.platformAttributeAsBooleanOrFalse=t.platformAttributeAsBoolean=t.platformAttributeAsString=t.platformAttributeAsArrayOrEmpty=t.platformAttributeAsDictionary=t.hasPlatformAttribute=void 0
const c=n(2450),l=u(n(581)),d=u(n(377)),f=u(n(1636))
t.hasPlatformAttribute=function(e,t){const n=r(e,t)
return l.isDefinedNonNullNonEmpty(n)},t.platformAttributeAsDictionary=i,t.platformAttributeAsArrayOrEmpty=function(e,t,n){const i=r(e,t)
return l.isNull(i)?[]:l.asArrayOrEmpty(i,n)},t.platformAttributeAsString=s,t.platformAttributeAsBoolean=function(e,t,n,i="coercible"){const s=r(e,t)
return l.isNull(s)?null:l.asBoolean(s,n,i)},t.platformAttributeAsBooleanOrFalse=function(e,t,n){const i=r(e,t)
return!l.isNull(i)&&l.asBooleanOrFalse(i,n)},t.platformAttributeAsNumber=function(e,t,n,i="coercible"){const s=r(e,t)
return l.isNull(s)?null:l.asNumber(s,n,i)},t.requiredPlatformAttributeAsString=function(e,t,n){const r=s(e,t,n)
if((0,c.isNothing)(r))throw new f.MissingFieldError(e.id,d.concatObjectPaths(["attributes","platformAttribute",t],n))
return r},t.requiredPlatformAttributeAsDictionary=function(e,t,n){const r=i(e,t,n)
if((0,c.isNothing)(r))throw new f.MissingFieldError(e.id,d.concatObjectPaths(["attributes","platformAttribute",t],n))
return r}},4625:function(e,t,n){function r(e,t){return c.asInterface(e.relationships,t)}function i(e,t){const n=c.asArrayOrEmpty(e.relationships,[t,"data"])
return 0===n.length?null:(n.length,n[0])}function s(e,t){return c.asArrayOrEmpty(e.relationships,[t,"data"])}var o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n)
return a(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.requiredRelationshipCollectionNonEmpty=t.requiredRelationshipData=t.relationshipViewsCollection=t.relationshipCollection=t.relationshipData=t.relationship=t.hasRelationship=void 0
const c=u(n(581)),l=n(2450),d=u(n(1636))
t.hasRelationship=function(e,t,n=!0){const i=r(e,t)
return!((0,l.isNothing)(i)||n&&0===i.data.length)},t.relationship=r,t.relationshipData=i,t.relationshipCollection=s,t.relationshipViewsCollection=function(e,t){return c.asArrayOrEmpty(e.views,[t,"data"])},t.requiredRelationshipData=function(e,t){const n=i(e,t)
if((0,l.isNothing)(n))throw new d.MissingFieldError(e.id,["relationships",t,"data"])
return n},t.requiredRelationshipCollectionNonEmpty=function(e,t){const n=s(e,t)
if(0===n.length)throw new d.MissingFieldError(e.id,["relationships",t,"data"])
return n}},695:function(e,t,n){function r(e){switch(e){case"apps":case"app-events":case"arcade-apps":case"app-bundles":case"charts":case"contents":case"developers":case"eula":case"in-apps":case"multiple-system-operators":case"user-reviews":case"customers-also-bought-apps-with-download-intent":case"chart-list":default:return"catalog"
case"games/recommendations":return"games/recommendations"
case"categories":case"editorial-items":case"editorial-item-groups":case"editorial-elements":case"groupings":case"multiplex":case"multirooms":case"rooms":case"today":case"collections":return"editorial"
case"ratings":return"ratings"
case"personalization-data":case"reviews":return"me"
case"upsellMarketingItem":case"landing":case"engagement-data":return"engagement"
case"landing:new-protocol":case"recommendations":case"personal-recommendations":return"recommendations"}}var i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){var t,n
if(e&&e.__esModule)return e
if(t={},null!=e)for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n)
return s(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.buildURLFromRequest=void 0
const a=n(2450),u=o(n(581)),c=o(n(4030)),l=o(n(377))
t.buildURLFromRequest=function(e,t){var n,i
const s=u.isDefinedNonNullNonEmpty(t.href)?t.href:function(e,t){switch(t){case"games/search":case"games/search-suggestions":return`/v1/games/${r(t)}/${e.mediaCountryCode}`
case"personalization-data":case"reviews":return`/v1/${r(t)}/`
default:return`/v1/${r(t)}/${e.mediaCountryCode}/`}}(e,t.resourceType),o=new c.URL(s)
if(u.isDefinedNonNullNonEmpty(t.resourceType))for(const e of function(e,t){switch(e){case"eula":return void 0===t?[e]:[e,t]
case"landing:new-protocol":case"recommendations":case"searchLanding:see-all":case"search-hints":case"games/recommendations":return[]
case"landing":return void 0===t?["search",e]:["search",e,t]
case"user-reviews":case"customers-also-bought-apps-with-download-intent":case"game-highlights":return["apps"]
case"reviews":return["reviews","apps"]
case"multiplex":return["multiplex"]
case"upsellMarketingItem":return["upsell","marketing-items"]
case"trending-contents":return["search",e]
case"player-highlights":return["players"]
case"search-suggestions":case"games/search":case"games/search-suggestions":case"search-groups":return["search"]
case"chart-list":return["charts"]
default:return[e]}}(t.resourceType,t.targetResourceType))o.append("pathname",e)
if(t.ids.size>1||(0,a.isSome)(t.useIdsAsQueryParam))o.param("ids",Array.from(t.ids).join(","))
else if(1===t.ids.size){const e=t.ids.values().next().value
o.append("pathname",encodeURIComponent(e))}if(t.seeds.size>0&&o.param("seeds",Array.from(t.seeds).join(",")),void 0!==t.resourceType){const e=function(e){switch(e){case"user-reviews":return"reviews"
case"customers-also-bought-apps-with-download-intent":return"view/customers-also-bought-apps-with-download-intent"
case"collections":default:return null
case"searchLanding:see-all":return"view/see-all"
case"search-hints":return"search/suggestions"
case"game-highlights":case"player-highlights":return"view/highlights"
case"games/search":case"search-groups":return"groups"
case"games/search-suggestions":case"search-suggestions":return"suggestions"}}(t.resourceType)
u.isDefinedNonNullNonEmpty(e)&&o.append("pathname",e)}if(o.param("platform",null!==(n=t.platform)&&void 0!==n?n:void 0),t.additionalPlatforms.size>0&&o.param("additionalPlatforms",Array.from(t.additionalPlatforms).sort().join(",")),t.attributeIncludes.size>0||t.useCustomAttributes){let e=Array.from(t.attributeIncludes)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=l.attributeKeyAsCustomAttributeKey(e))&&void 0!==t?t:e})
return t.push("customArtwork"),t}(e)),e.sort(),o.param("extend",e.join(","))}if(u.isDefinedNonNull(t.scopedAttributeIncludes))for(const[e,n]of t.scopedAttributeIncludes.entries())o.param(`extend[${e}]`,Array.from(n).sort().join(","))
if(t.relationshipIncludesOnly.size>0?o.param("includeOnly",Array.from(t.relationshipIncludesOnly).sort().join(",")):t.relationshipIncludes.size>0&&o.param("include",Array.from(t.relationshipIncludes).sort().join(",")),t.shouldOmitAutomaticRelationship&&o.param("omit[resource]","autos"),u.isDefinedNonNull(t.scopedRelationshipIncludes))for(const[e,n]of t.scopedRelationshipIncludes.entries())o.param(`include[${e}]`,Array.from(n).sort().join(","))
if(u.isDefinedNonNull(t.metaIncludes))for(const[e,n]of t.metaIncludes.entries())o.param(`meta[${e}]`,Array.from(n).sort().join(","))
if(u.isDefinedNonNull(t.associateIncludes))for(const[e,n]of t.associateIncludes.entries())o.param(`associate[${e}]`,Array.from(n).sort().join(","))
if(u.isDefinedNonNull(t.scopedAvailableInIncludes))for(const[e,n]of t.scopedAvailableInIncludes.entries())o.param(`availableIn[${e}]`,Array.from(n).sort().join(","))
if(u.isDefinedNonNullNonEmpty(t.fields)){let e=Array.from(t.fields)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=l.attributeKeyAsCustomAttributeKey(e))&&void 0!==t?t:e})
return t}(e)),t.fields.sort(),o.param("fields",e.join(","))}if(u.isDefinedNonNull(t.limit)&&t.limit>0&&o.param("limit",`${t.limit}`),u.isDefinedNonNull(t.sparseLimit)&&o.param("sparseLimit",`${t.sparseLimit}`),u.isDefinedNonNull(t.scopedSparseLimit))for(const[e,n]of t.scopedSparseLimit.entries())o.param(`sparseLimit[${e}]`,String(n))
u.isDefinedNonNull(t.sparseCount)&&o.param("sparseCount",`${t.sparseCount}`)
for(const e of Object.keys(t.relationshipLimits).sort()){const n=t.relationshipLimits[e]
o.param(`limit[${e}]`,`${n}`)}u.isDefinedNonNullNonEmpty(t.additionalQuery)&&o.append("query",t.additionalQuery),u.isDefinedNonNullNonEmpty(t.searchTerm)&&(((0,a.isNothing)(t.resourceType)||"search-hints"!==t.resourceType)&&(o.append("pathname","search"),o.param("bubble[search]",t.searchTypes.join(","))),o.param("term",t.searchTerm)),u.isDefinedNonNullNonEmpty(t.enabledFeatures)&&o.param("with",t.enabledFeatures.join(",")),u.isDefinedNonNullNonEmpty(t.context)&&o.param("contexts",t.context),u.isDefinedNonNullNonEmpty(t.filterType)&&u.isDefinedNonNullNonEmpty(t.filterValue)&&o.param(`filter[${t.filterType}]`,t.filterValue)
const f=e.mediaApiLanguage
return u.isDefinedNonNull(f)&&u.isNull(t.additionalQuery.l)&&o.param("l",f),u.isDefinedNonNullNonEmpty(t.responseFormat)&&o.param("format[resources]",t.responseFormat),o.host=null!==(i=function(e,t,n){var r
const i=null!==(r=t.pathname)&&void 0!==r?r:""
let s=null
return s=n.isStorePreviewRequest?e.mediaPreviewHost:n.isMediaRealmRequest?e.mediaRealmHost:i.includes("search/landing")?-1!==e.edgeEndpoints.indexOf("landing")?e.mediaEdgeHost:e.mediaHost:e.edgeEndpoints.map(e=>i.includes(e)).reduce(d,!1)?i.includes("search")&&!i.includes("view/see-all")?e.mediaEdgeSearchHost:e.mediaEdgeHost:e.mediaHost,u.isNull(s)&&(s="api.apps.apple.com"),s}(e,o,t))&&void 0!==i?i:void 0,o.protocol="https",o}
const d=(e,t)=>e||t}},n={}
e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{function t(e){return r(e)?null:Array.isArray(e)?e.join("."):e}function n(e,t,n){if(null==e)return n
if(!t)return e
let r
if(typeof t===dm){if(r=cb[t],!r){if(!t.includes(".")){const r=e[t]
return null!=r?r:n}r=t.split("."),cb[t]=r}}else r=t
let i=e
for(const e of r)if(i=i[e],null==i)return n
return i}function r(e){return null==e}function i(e){return r(e)||0===Object.keys(e).length}function s(e){return typeof e!==sg&&null!==e}function o(e){return!(0,ks.isNothing)(e)&&(typeof e===dm||Array.isArray(e)?e.length>0:0!==Object.keys(e).length)}function a(e,i){const s=n(e,i,null)
return Array.isArray(s)?s:(r(s)||Ds.context("asArrayOrEmpty",()=>{Ds.unexpectedType(Ev,"array",s,t(i))}),[])}function u(e,i){return function(e,i,s){const o=n(e,s,null)
return typeof o===Rh?o:(r(o)||Ds.context("asBooleanWithDefault",()=>{Ds.unexpectedType(Ev,Rh,o,t(s))}),!1)}(e,0,i)}function c(e,i,s=kv){const o=n(e,i,null)
if(r(o))return o
if(typeof o===dm)return o
{const e=typeof o===jp?null:String(o)
switch(s){case ud:Ds.context(Vu,()=>{Ds.unexpectedType(kp,dm,o,t(i))})
break
case kv:r(e)&&Ds.context(Vu,()=>{Ds.unexpectedType(kp,dm,o,t(i))})}return e}}function l(e,i,s=kv){const o=n(e,i,null)
if(r(o)||typeof o===Cp)return o
{const e=Number(o)
switch(s){case ud:Ds.context(Gu,()=>{Ds.unexpectedType(kp,Cp,o,t(i))})
break
case kv:if(isNaN(e))return Ds.context(Gu,()=>{Ds.unexpectedType(kp,Cp,o,t(i))}),null}return e}}function d(e,i,o){const a=n(e,i,null)
return a instanceof Object&&!Array.isArray(a)?a:(r(a)||Ds.context("asDictionary",()=>{Ds.unexpectedType(Ev,jp,a,t(i))}),s(o)?o:null)}function f(e,t,n){return d(e,t,n)}function h(e,i,s=kv){const o=n(e,i,null)
if(r(o))return null
if(typeof o===Rh)return o
if(typeof o===dm){if(o===Gv)return!0
if("false"===o)return!1}const a=Boolean(o)
switch(s){case ud:Ds.context(Wu,()=>{Ds.unexpectedType(kp,Cp,o,t(i))})
break
case kv:if(r(a))return Ds.context(Wu,()=>{Ds.unexpectedType(kp,Cp,o,t(i))}),null}return a}function p(e){if(null==e)return null
switch(typeof e){case dm:case Cp:case Rh:return e
case jp:return Array.isArray(e),e
default:return Ds.context(Hu,()=>{Ds.unexpectedType(Ev,"JSONValue",typeof e)}),null}}function w(e){return null==e?null:e instanceof Object&&!Array.isArray(e)?e:(Ds.context(Hu,()=>{Ds.unexpectedType(Ev,jp,typeof e)}),null)}function g(e,t,n){const r=e.indexOf(t)
let i,s=e
if(-1!==r){const o=e.slice(0,r),a=e.slice(r+t.length,e.length)
n===Qu?(i=o,s=a):(i=a,s=o)}return{result:i,remainder:s}}function v(e){if(null==e)return e
const t=Object.create(Object.getPrototypeOf(e))
return Object.assign(t,e),t}function m(e,t){return e instanceof t}function b(e){return!(!(0,ks.isSome)(e.protocol)||-1===dy.indexOf(e.protocol))}function A(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t+1}function y(e){const t=e.indexOf("{"),n=e.indexOf("}")
return t>=0&&n>t?e.substring(t+1,n):e}function O(e,t){const n=t.indexOf("{"),r=e.length-(t.length-(t.indexOf("}")+1))
return n>=0&&r>n?e.substring(n,r):e}function P(e){if((0,ks.isNothing)(e)||""===e)return null
const t=wy.exec(e)
return null===t||4!==t.length&&5!==t.length?null:{red:parseInt(t[1],16)/255,green:parseInt(t[2],16)/255,blue:parseInt(t[3],16)/255,alpha:(0,ks.isSome)(t[4])?parseInt(t[4],16)/255:void 0,type:Og}}function I(e,t,n,r){return{red:e,green:t,blue:n,alpha:r,type:Og}}function S(e,t=84){if((0,ks.isNothing)(e))return!1
switch(e.type){case Og:return 100*(.2126*(n=e).red+.7152*n.green+.0722*n.blue)<t
case Jh:return e.name===Mc
default:return!1}var n}function T(e){return{name:e,type:Jh}}function E(e){return{prominentPlay:!0,fullScreenToggle:!1,inlinePlayPause:e.client.isMac,muteUnmute:!0}}function _(e,t,r){return e?Ds.context(t,()=>{let i=e[by],s=null
return i?(s=n(i,t),s||(s=R(i,t,r))):(i={},e[by]=i,s=R(i,t,r)),s}):null}function R(e,t,n){const r=n()
return e[t]=r,r}function D(e,t,n){return(0,ks.isNothing)(e)?null:d(e.attributes,t,n)}function k(e,t){return r(e)?[]:a(e.attributes,t)}function C(e,t,n=kv){return r(e)?null:c(e.attributes,t,n)}function x(e,t,n=kv){return r(e)?null:h(e.attributes,t,n)}function N(e,t){return!r(e)&&u(e.attributes,t)}function F(e,t,n=kv){return r(e)?null:l(e.attributes,t,n)}function M(e){return!r(d(e,"attributes"))}function L(e){return Ay[e]}function B(e){return e===Mf}function j(e,t){return n(D(e,"platformAttributes"),t)}function U(e,t){return o(j(e,t))}function $(e,t,n){const i=j(e,t)
return r(i)?null:d(i,n)}function V(e,t,n){const i=j(e,t)
return r(i)?[]:a(i,n)}function G(e,t,n,i=kv){const s=j(e,t)
return r(s)?null:c(s,n,i)}function W(e,t,n,i=kv){const s=j(e,t)
return r(s)?null:h(s,n,i)}function H(e,t,n){const i=j(e,t)
return!r(i)&&u(i,n)}function q(e){throw new Error(`This method should never be called with value: ${e}`)}function z(e,t,r){if(void 0===r&&(r=function(e){const t=function(e){return function(e,t){var n
const r=e.optional(Gb.metatype)
return null===(n=null==r?void 0:r.currentTreatmentForExperiment(t))||void 0===n?void 0:n.identifier}(e,Ls.ProductPageVariants)}(e)
return t}(e)),i(t.id))return
const s={adamID:t.id,productPageId:yy,treatmentPageIdMap:{[yy]:yy},experimentIdMap:{},experimentLocaleMap:{}}
return i(n(t,jg,null))||(function(e,t,r){const s=n(r,"meta.cppData",null)
if(i(s))return
const a=c(s,op)
o(a)&&(t.productPageId=a)}(0,s,t),function(e,t,r,s,a){const u=n(a,"meta.experimentData",null)
if(i(u))return
const l=n(u,r,null)
if(i(l))return
const d=c(l,Wl),f=c(l,du)
let h=null
const p=n(l,"trafficAllocation",null)
h=o(p)?function(e,t,n){if(void 0===n||i(n))return yy
for(const[e,r]of Object.entries(t))if(o(r)&&-1!==r.indexOf(n))return e
return yy}(0,p,s):function(e,t,n){const r=oe(e,t,`customAttributes.${n}`)
if(i(r))return yy
const s=Object.keys(r)[0]
return i(s)?yy:s}(e,a,r),o(h)&&o(d)&&(t.treatmentPageIdMap[r]=h,t.experimentIdMap[r]=d,o(f)&&(t.experimentLocaleMap[r]=f))}(e,s,yy,r,t)),s}function Y(e,t,r,o,a){if(i(t))return null
let u
if(r.productPageId!==yy){const e=r.treatmentPageIdMap[yy]
u=a?[`${r.productPageId}.${yy}.${o}`,`${yy}.${e}.${o}`,`${yy}.${yy}.${o}`]:[`${r.productPageId}.${yy}.${o}`,`${yy}.${yy}.${o}`]}else{const e=r.treatmentPageIdMap[yy]
u=[`${yy}.${e}.${o}`,`${yy}.${yy}.${o}`]}for(const e of u){const r=n(t,e)
if(s(r))return r}return null}function J(e){return(0,ks.isNothing)(e)||e.productPageId===yy?null:e.productPageId}function K(e){const t={}
X(e,of)&&(t[fu]=e.productPageId)
const n=e.treatmentPageIdMap[yy],r=e.experimentIdMap[yy],i=e.experimentLocaleMap[yy]
return X(e,Ud)&&(t.pageVariantId=n,t.pageExperimentId=r,t.pageExperimentLocale=i),t}function Q(e){const t={}
X(e,of)&&(t[fu]=e.productPageId)
const n=e.treatmentPageIdMap[yy],r=e.experimentIdMap[yy],i=e.experimentLocaleMap[yy]
return X(e,Ud)&&(t.variantId=n,t[Wl]=r,t[du]=i),t}function X(e,t){if(r(e))return!1
switch(t){case of:return o(e.productPageId)&&e.productPageId!==yy
case Ud:return o(e.experimentIdMap)
default:q(t)}}function Z(e,t){return s(e)?f(e.relationships,t):null}function ee(e,t,n){const r=a(t.relationships,[n,pg])
return 0===r.length?null:(r.length>1&&e.console.warn(`there was an array of relationships when only the first was asked for in relationship ${n}`),r[0])}function te(e,t,n=!1){return!function(e,t,n=!0){const r=Z(e,t)
return!!r&&!(!r.data||n&&0===r.data.length)}(e,t,!1)&&n?null:a(e.relationships,[t,pg])}function ne(e,t,n,r=!1){return _(t,`dataHasDeviceFamily.${n}`,()=>!(!t||!n)&&-1!==se(e,t,r).indexOf(n))}function re(e,t,n,r=!1){var i
return null!==(i=ne(e,t,n,r))&&void 0!==i&&i&&1===se(e,t,r).length}function ie(e,t,n,r=!1){const i=new Set(se(e,t,r))
return n.length===i.size&&n.every(e=>i.has(e))}function se(e,t,n=!1){const r=k(t,qw)
if(0===r.length&&n){const r=te(t,Um)
if((0,ks.isSome)(r))for(const t of r){const r=se(e,t,n)
if(o(r))return r}}return r}function oe(e,t,n,r,i){if(r||(r=fe(e,t)),(0,ks.isNothing)(r))return null
let s=$(t,r,n)
return s||(s=D(t,n,i)),s}function ae(e,t,n,r){const s=null!=r?r:fe(e,t)
if((0,ks.isNothing)(s))return[]
let o=V(t,s,n)
return i(o)&&(o=k(t,n)),o}function ue(e,t,n,r,i=kv){const s=null!=r?r:fe(e,t)
if((0,ks.isNothing)(s))return null
let o=G(t,s,n,i)
return o||(o=C(t,n,i)),o}function ce(e,t,n,i,s=kv){if(i||(i=fe(e,t)),(0,ks.isNothing)(i))return null
let o=W(t,i,n,s)
return r(o)&&(o=x(t,n,s)),o}function le(e,t,n,i){if(i||(i=fe(e,t)),(0,ks.isNothing)(i))return!1
let s=W(t,i,n)
return r(s)&&(s=N(t,n)),s}function de(e,t,n,i=kv){const s=fe(e,t)
if((0,ks.isNothing)(s))return null
let o=function(e,t,n,i=kv){const s=j(e,t)
return r(s)?null:l(s,n,i)}(t,s,n,i)
return r(o)&&(o=F(t,n)),o}function fe(e,t,n){const i="bestAttributePlatformFromData",s=(0,ks.isSome)(n)?`${i}.${n}`:i
return _(t,s,()=>{const i=ie(e,t,[hv,wv,Hh],!0),s=re(e,t,$p),o=re(e,t,Fm),a=re(e,t,Mm),u=re(e,t,Pg)
let c=null
if(s?c=hg:o?c=cv:i?c=lm:a?c=Mm:u&&(c=rv),!r(c))return c
const l=pe(e,n)
for(const e of l)if(U(t,e))return e
return he(e)})}function he(e){switch(e.client.deviceType){case Cm:case Tm:return lm
case"tv":return hg
case Fm:return cv
case Mm:return Mm
case pm:return rv
default:return null}}function pe(e,t){const n=he(e)
if(null===n)return[]
switch(n){case lm:return"VisionAppStore"===t||"com.apple.visionproapp"===t?[rv,lm,hg,cv]:[lm,hg,cv,rv]
case cv:return[cv,lm,hg,rv]
case hg:return[hg,lm,cv,rv]
case Mm:return[lm,Mm,cv,rv]
case rv:return[rv,lm,hg,cv]
default:return[n]}}function we(e,t,n,r,i){const s=L(r)
if((0,ks.isNothing)(s))return null
const a=Y(0,oe(e,t,jc,i),n,s,B(s))
return o(a)?d(a):oe(e,t,r,i)}function ge(e,t,n,r,i){const s=L(r)
if((0,ks.isNothing)(s))return null
const a=Y(0,oe(e,t,jc,i),n,s,B(s))
return o(a)?c(a):ue(e,t,r)}function ve(e,t){if(i(t))return null
const n=a(t,`meta.associations.${e}.data`)
return(0,ks.isNothing)(n)?null:[...n]}function me(e,t){var n,i,a
const u=t.href&&t.href.length>0?t.href:function(e,t,n,r){switch(n){case sd:case mm:case Ih:return`/v1/${be(n)}/`
default:const i=(0,ks.isSome)(r)&&r.length>0?r:e.bag.mediaCountryCode,s=`/v1/${be(n)}/${i}`
return t?s:`${s}/`}}(e,t.isMixedMediaRequest,t.resourceType,t.countryCodeOverride),c=new ly(u)
if(o(t.resourceType))for(const e of function(e,t){switch(e){case Dp:return void 0===t?[e]:[e,t]
case ad:return[]
case Ff:return void 0===t?[em,e]:[em,e,t]
case xf:return[Um]
case mm:return[mm,Um]
case kf:return[kf]
case tg:return[Ro,Mg]
case $u:return[em,e]
case Cf:return[Um]
case Nf:case Ef:return[]
case Ih:return[Um]
default:return[e]}}(t.resourceType,t.targetResourceType))c.append(Rg,e)
if(t.isMixedMediaRequest)for(const[e,n]of t.idsByResourceType.entries())c.param(`ids[${e}]`,Array.from(n).sort().join(","))
else if(t.ids.size>1||t.useIdsAsQueryParam)c.param("ids",Array.from(t.ids).sort().join(","))
else if(1===t.ids.size){const e=t.ids.values().next().value
c.append(Rg,e)}if(void 0!==t.resourceType){const e=function(e){switch(e){case xf:return mm
case Cf:return"view/customers-also-bought-apps-with-download-intent"
case Ig:return jm
case Nf:return Yu
case Ef:return"search/suggestions"
default:return null}}(t.resourceType)
o(e)&&c.append(Rg,e)}if(c.param("platform",null!==(n=t.platform)&&void 0!==n?n:void 0),t.additionalPlatforms.size>0&&c.param("additionalPlatforms",Array.from(t.additionalPlatforms).sort().join(",")),t.attributeIncludes.size>0||t.useCustomAttributes){let e=Array.from(t.attributeIncludes)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=L(e))&&void 0!==t?t:e})
return t.push(Mf),t.push(ah),t}(e)),e.sort(),c.param("extend",e.join(","))}if(t.includeAppBinaryTraitsAttribute&&t.includingScopedAttributes(Um,[Mo]),s(t.scopedAttributeIncludes))for(const[e,n]of t.scopedAttributeIncludes.entries())c.param(`extend[${e}]`,Array.from(n).sort().join(","))
if(t.relationshipIncludes.size>0&&c.param("include",Array.from(t.relationshipIncludes).sort().join(",")),s(t.scopedRelationshipIncludes))for(const[e,n]of t.scopedRelationshipIncludes.entries())c.param(`include[${e}]`,Array.from(n).sort().join(","))
if(s(t.metaIncludes))for(const[e,n]of t.metaIncludes.entries())c.param(`meta[${e}]`,Array.from(n).sort().join(","))
if(s(a=t.viewsIncludes)&&a.size>0&&c.param("views",Array.from(t.viewsIncludes).sort().join(",")),s(t.kindIncludes))for(const[e,n]of t.kindIncludes.entries())c.param(`kinds[${e}]`,Array.from(n).sort().join(","))
if(s(t.associateIncludes))for(const[e,n]of t.associateIncludes.entries())c.param(`associate[${e}]`,Array.from(n).sort().join(","))
if(s(t.scopedAvailableInIncludes))for(const[e,n]of t.scopedAvailableInIncludes.entries())c.param(`availableIn[${e}]`,Array.from(n).sort().join(","))
if(o(t.fields)){let e=Array.from(t.fields)
t.useCustomAttributes&&(e=function(e){const t=e.map(e=>{var t
return null!==(t=L(e))&&void 0!==t?t:e})
return t}(e)),t.fields.sort(),c.param(Vf,e.join(","))}if(s(t.limit)&&t.limit>0&&c.param("limit",`${t.limit}`),s(t.sparseLimit)&&c.param("sparseLimit",`${t.sparseLimit}`),s(t.scopedSparseLimit))for(const[e,n]of t.scopedSparseLimit.entries())c.param(`sparseLimit[${e}]`,String(n))
s(t.sparseCount)&&c.param("sparseCount",`${t.sparseCount}`)
for(const e of Object.keys(t.relationshipLimits).sort()){const n=t.relationshipLimits[e]
c.param(`limit[${e}]`,`${n}`)}o(t.additionalQuery)&&c.append(zw,t.additionalQuery),o(t.searchTerm)&&(((0,ks.isNothing)(t.resourceType)||t.resourceType!==Ef)&&(c.append(Rg,em),c.param("bubble[search]",t.searchTypes.join(","))),c.param(lw,t.searchTerm)),o(t.enabledFeatures)&&c.param(Zf,t.enabledFeatures.join(",")),o(t.context)&&c.param(Cw,t.context),o(t.filterType)&&o(t.filterValue)&&c.param(`filter[${t.filterType}]`,t.filterValue)
const l=e.bag.mediaApiLanguage
return s(l)&&r(t.additionalQuery.l)&&c.param("l",l),c.host=null!==(i=function(e,t,n){var i
const s=null!==(i=t.pathname)&&void 0!==i?i:""
let o=null
return o=n.isStorePreviewRequest?e.bag.mediaPreviewHost:n.isMediaRealmRequest?e.bag.mediaRealmHost:s.includes("search/landing")?-1!==e.bag.edgeEndpoints.indexOf(Ff)?e.bag.mediaEdgeHost(e):e.bag.mediaHost:n.resourceType===Ih&&(0,ks.isSome)(e.bag.appDistributionMediaAPIHost)?e.bag.appDistributionMediaAPIHost:n.isMixedMediaRequest&&e.bag.mediaAPICatalogMixedShouldUseEdge?e.bag.mediaEdgeHost(e):e.bag.edgeEndpoints.map(e=>s.includes(e)).reduce(Uy,!1)?s.includes(em)&&!s.includes(Yu)?e.bag.mediaEdgeSearchHost:e.bag.mediaEdgeHost(e):e.bag.mediaHost,r(o)&&(o="api.apps.apple.com"),o}(e,c,t))&&void 0!==i?i:void 0,c.protocol=od,c}function be(e){switch(e){case Um:case xm:case Hg:case Em:case Wh:case jm:case Lg:case Dp:case jv:case qd:case xf:case Cf:return qu
case"categories":case _g:case Sm:case"editorial-item-groups":case Ld:case Vg:case kf:case"multirooms":case"rooms":case Im:case Ig:return"editorial"
case cd:return cd
case sd:case mm:return"me"
case tg:case Ff:return zu
case ad:case Td:return Qg
case"engagement-data":return zu
case Ih:return"listing"
default:return qu}}function Ae(e){return r(e)||""===e?null:(-1!==e.indexOf("T")&&(e=e.split("T")[0]),new Date(e.replace(/-/g,"/")))}function ye(e){if(r(e))return null
const t=function(e){return r(e)?null:new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))}(e)
return r(t)?null:t.getTime()}function Oe(e){if(r(e))return null
const t=new Date(e)
return t.setHours(0,0,0,0),t}function Pe(e,t){const n=Math.pow(10,t)
return(e>0?Math.floor:Math.ceil)(e/n)*n}function Ie(e,t){let n=t.targetType
return n||(n=e.client.isVision?mp:Zv),n}function Se(e){let t=e.idType
return t===Yv?t=null:t||(t=tm),t}function Te(e,t){return ai(e,t)?Xv:null}function Ee(e,t,n){const r=c(t,Bg),i=ne(e,t,Fm,!0),s=re(e,t,Fm,!0),o=function(e,t,n,r=!1){const i=new Set(se(e,t,r))
for(const e of n)if(i.has(e))return!0
return!1}(e,t,[hv,wv,Hh,$p,Mm],!0),a=ie(e,t,[hv,wv,Hh,$p,Mm],!0),u=e.client.isiOS||e.client.isTV||e.client.isWatch,l=e.client.isMac&&e.appleSilicon.isSupportEnabled,d=e.client.isVision,f=ne(e,t,Pg,!0),h=re(e,t,Pg,!0)
if(s||i&&e.client.isMac||i&&n===cv)switch(r){case Um:return ja
case Em:return"macSoftwareBundle"}if((h||f&&e.client.isVision||f&&n===rv)&&r===Um)return"visionSoftware"
if(a||o&&u||o&&l||o&&d||o&&n===lm||o&&n===Mm||o&&n===hg)switch(r){case Um:return"iosSoftware"
case Em:return"mobileSoftwareBundle"}switch(r){case jv:return"softwareAddOn"
case Vg:return bp
case Ld:case Sm:return aw
case Lg:return Ua
default:return null}}function _e(e){return null==e?"":e}function Re(e){if(!e)return null
let t=null
const n=new ly(e).query
if((0,Cs.isSome)(n))for(const e of Object.keys(n))if("referrer"===e){n[e]===Kc&&(t="com.apple.siri")
break}return t}function De(e){var t
return(0,Cs.isNothing)(e)?{}:null!==(t=f(ke(w(e))))&&void 0!==t?t:{}}function ke(e){if(r(e))return null
if(e instanceof Array){const t=[]
for(const n of e){const e=ke(n)
s(e)&&t.push(e)}return t}if(e instanceof Object){const t={}
return Object.keys(e).forEach((n,r,i)=>{const o=ke(e[n])
s(o)&&(t[n]=o)}),t}return e}function Ce(e){if(!e)return null
const t=new ly(e),n=t.query,i=null==n?void 0:n[lw],s=t.pathname
return r(i)||r(s)?null:s.endsWith("/search")?i:null}function xe(e){if((0,Cs.isNothing)(e))return null
const t=new ly(e),n=t.query,r=null==n?void 0:n[Tv],i=t.pathname
return(0,Cs.isNothing)(r)||(0,Cs.isNothing)(i)?null:i.includes("/app")?r:null}function Ne(e,t,n,r){if(!t||!n)return _m
if(t.type===Em)return vc
const i=n.style
if((0,Cs.isNothing)(i))return _m
switch(i){case Lp:return lm
case zh:return Fm
case Cd:return"tv"
case rh:return Tr(e,t,null!=r?r:void 0)===rv?pm:Mm
case qh:return Dv
case fw:return fw
default:return q(i),_m}}function Fe(e,t,n){const r=t.locationTracker.locationStack.map(e=>e.location)
return[$e(e,t,n),...r]}function Me(e,t,n){const r=new Gy
r.location=$e(e,t,n),t.locationTracker.locationStack.unshift(r)}function Le(e){0!==e.locationStack.length?e.locationStack.shift():Ds.unexpectedType(Pv,"non-empty location stack","empty location stack")}function Be(e){const t=Ve(e)
return t?t.position:e.rootPosition}function je(e){const t=Ve(e)
return t?t.location:null}function Ue(e){const t=Ve(e)
t?t.position++:e.rootPosition++}function $e(e,t,n){var r
const i=function(e,t,n){var r,i
let s=n;(null===(r=t.anonymizationOptions)||void 0===r?void 0:r.anonymizationString)&&(s=t.anonymizationOptions.anonymizationString)
const o={locationPosition:Be(t.locationTracker),locationType:Ie(e,t),name:(0,ks.isNothing)(s)?"":s}
return(0,ks.isSome)(t.badges)&&(o.badges=null!==(i=w(t.badges))&&void 0!==i?i:void 0),t.recoMetricsData&&Object.assign(o,t.recoMetricsData),o}(e,t,n)
if(!t.id&&t.locationTracker)i.idType=om,i.id=Be(t.locationTracker).toString()
else{const e=Se(t);(0,ks.isSome)(e)&&(i.idType=e)
let n=t.id;(null===(r=t.anonymizationOptions)||void 0===r?void 0:r.anonymizationString)&&(n=t.anonymizationOptions.anonymizationString),i.id=(0,ks.isNothing)(n)?"":n}return t.fcKind&&(i.fcKind=t.fcKind),t.displayStyle&&(i.displayStyle=t.displayStyle),t.inAppEventId&&(i.inAppEventId=t.inAppEventId),t.relatedSubjectIds&&(i.relatedSubjectIds=t.relatedSubjectIds),t.canonicalId&&(i.canonicalId=t.canonicalId),t.optimizationEntityId&&(i.optimizationEntityId=t.optimizationEntityId),t.optimizationId&&(i.optimizationId=t.optimizationId),(0,ks.isSome)(t.rowIndex)&&(i.rowIndex=t.rowIndex),t.productVariantData&&Object.assign(i,Q(t.productVariantData)),i}function Ve(e){return 0===e.locationStack.length?null:e.locationStack[0]}function Ge(e){if(null!==rO)return rO
if(e.client.isWatch){const t=new Map,n=new Map
for(const n of e.bag.systemApps){const e=c(n,Jo,kv),r=c(n,"id",kv);(0,ks.isSome)(e)&&(0,ks.isSome)(r)&&t.set(r,e)}for(const t of e.bag.nonDeletableSystemApps){const e=c(t,Jo,kv),r=c(t,"id",kv);(0,ks.isSome)(e)&&(0,ks.isSome)(r)&&n.set(r,e)}const i=new Map
rO={bundleIdFromData(n){const i=t.get(n.id)
return r(i)?ue(e,n,Kv):i},isSystemAppFromData:e=>t.has(e.id),isUnsupportedDeletableSystemAppFromData(r){if(t.has(r.id)&&!n.has(r.id)){const n=t.get(r.id)
if(o(n)){const t=i.get(n)
if((0,ks.isSome)(t))return t
const r=!e.client.deletableSystemAppCanBeInstalledOnWatchWithBundleID(n)
return i.set(n,r),r}}return!1},adamIdFromSystemBundleId(e){for(const[n,r]of t)if(r===e)return n}}}else rO={bundleIdFromData:t=>ue(e,t,Kv),isSystemAppFromData:e=>N(e,dw),isUnsupportedDeletableSystemAppFromData:e=>!1,adamIdFromSystemBundleId(e){}}
return rO}function We(e,t=!1,n=!1,r=0){const i=function(e,t){let n
switch(e.host.clientIdentifier){case gd:case $f:case Ac:n=!1
break
default:n=e.client.supportsHEIF}return t?n?ih:Od:n?ih:Xc}(e,t)
return He(e,i,n,r)}function He(e,t,n=!1,r=0){const i=function(e,t,n){return t===ih?e.client.isTV&&21===n?70:60:70}(e,t,r)
return new vb(t,i,n)}function qe(e,t,n=0,r=0,i=null,s=null,o=null){const a=new mb(t,n,r,[We(e,!1,!1,0)])
return a.backgroundColor=i,a.textColor=s,a.checksum=o,a}function ze(e,t){return!(!s(t)||Ye(e,t)||!N(t,dw)&&!N(t,"reviewsRestricted"))}function Ye(e,t){return!(i(t)||!e.bag.enableSystemAppReviews)&&(e.client.isWatch?Ge(e).isSystemAppFromData(t)||N(t,dw):Ge(e).isSystemAppFromData(t))}function Je(e,t){return t.map(t=>t.createProductPageSection(e))}function Ke(e,t,n,r,i,s,o){const a=function(e,t,n){switch(t){case yw:return n?ys:As
case Sf:return Os
case Ug:return n?vs:io
case xg:return n?bs:ms
case Tf:return n?Is:Ps
default:return io}}(0,n,r)
let u=[]
u=t?i&&a.purchasedOrderingCompact?a.purchasedOrderingCompact.slice():a.purchasedOrdering.slice():s&&a.downloadingOrdering?i&&a.downloadingOrderingCompact?a.downloadingOrderingCompact.slice():a.downloadingOrdering.slice():i&&a.notPurchasedOrderingCompact?a.notPurchasedOrderingCompact.slice():a.notPurchasedOrdering.slice()
const c=t?a.purchasedSpotlightIndex:a.notPurchasedSpotlightIndex
if(o&&o.spotlightSection){const e=function(e,t){for(let n=0;n<t.length;n++){const r=t[n]
if(e.sectionType===r.sectionType&&e.shelfId===r.shelfId&&JSON.stringify(e.shelfBasedMappedIds)===JSON.stringify(r.shelfBasedMappedIds))return n}return-1}(o.spotlightSection,u);-1!==e&&(u.splice(e,1),u.splice(c,0,o.spotlightSection))}return u}function Qe(e){var t
return(0,Cs.isSome)(e)&&(null===(t=e.id)||void 0===t?void 0:t.indexOf(KO))>-1}function Xe(e,t){const n=t.shelfMapping[_v],r=t.shelfMapping[Xp],s=e.featureFlags.isEnabled(Tg)?t.shelfMapping[Cv]:t.shelfMapping[Uw],a=t.shelfMapping[Zp],u=t.shelfMapping[ew]
if(i(n)&&i(r)&&i(s)&&i(a)&&i(u))return null
let c=null,l=[],d=null,f=null,h=null,p=null,w=null
if(o(null==r?void 0:r.items))for(const e of r.items){const t=e
switch(t.sourceType){case Cv:c=t.review
break
case"user":l.push(t.review)}}else l=null
if(o(null==s?void 0:s.items)&&(c=e.props.enabled("separateEditorsChoiceShelf")?s.items[0]:s.items[0].review),o(null==a?void 0:a.items)&&(f=a.items[0].action),o(null==u?void 0:u.items)){const e=u.items[0].action
h=e.writeReviewAction,p=e.supportAction}o(null==n?void 0:n.items)&&(d=n.items[0],w=null==n?void 0:n.seeAllAction)
const g=new Zy
g.adamId=t.lockup.adamId,g.ratings=d,g.tapToRate=f,g.editorsChoice=c,g.reviews=l,g.supportAction=p,g.writeReviewAction=h,g.alwaysAllowReviews=t.alwaysAllowReviews
const v=new By("reviewsContainer")
return v.title=function(e){switch(e.client.deviceType){case"tv":return e.loc.string("TV_PRODUCT_SECTION_RATINGS")
case Mm:return null
default:return e.loc.string("PRODUCT_SECTION_REVIEWS")}}(e),v.items=[g],v.seeAllAction=w,v}function Ze(e){var t
const n={}
if(!e)return n
Object.assign(n,e.baseFields),e.pageUrl?n[yp]=e.pageUrl:e.timingMetrics&&e.timingMetrics.pageURL&&(n[yp]=e.timingMetrics.pageURL),e.recoMetricsData&&Object.assign(n,e.recoMetricsData),e.mercuryMetricsData&&Object.assign(n,e.mercuryMetricsData),e.productVariantData&&Object.assign(n,K(e.productVariantData)),e.iAdInfo&&s(e.iAdInfo.pageFields[FP.hasIAdData])&&(n[FP.hasIAdData]=e.iAdInfo.pageFields[FP.hasIAdData])
const r=null===(t=e.iAdInfo)||void 0===t?void 0:t.pageFields[Sw]
return s(r)&&(n[Sw]=r),De(n)}function et(e,t){return C(t,hP)}function tt(e,t,n,o,a){if(r(n))return
t.pageMetrics.pageFields=Ze(n),t.pageMetrics.addManyInstructions(function(e,t,n){var r,o,a
const u=ot(t,n)
t.searchTermContext&&(u[Tv]=t.searchTermContext.term)
const c=v(u)
t.iAdInfo&&Object.assign(c,t.iAdInfo.impressionsFields),t.guidedSearch&&Object.assign(c,t.guidedSearch)
const l=s(t.iAdInfo),d=i(null===(r=t.iAdInfo)||void 0===r?void 0:r.missedOpportunityReason)&&e.client.isPad,f=[{data:br(e,c,l&&d,null!==(a=null===(o=t.iAdInfo)||void 0===o?void 0:o.shouldIncludeAdRotationFields)&&void 0!==a&&a,!0),invocationPoints:[Vs.PageInvocationPoint.appExit,Vs.PageInvocationPoint.pageExit]}]
if(l){const n=function(e,t,n){var r,i
const o=s(n.iAdInfo)&&e.client.isPad&&((0,ks.isNothing)(n.iAdInfo.missedOpportunityReason)||0===n.iAdInfo.missedOpportunityReason.length),a=null!==(i=null===(r=n.iAdInfo)||void 0===r?void 0:r.shouldIncludeAdRotationFields)&&void 0!==i&&i,u=[],c=br(e,t,o,a,!1).fields
if(c[Qh]=ll,null!==n&&s(n.iAdInfo)){const e=n.iAdInfo.fastImpressionsEventVersion
c[Xh]=e,u.push(Xh),5===e&&(c.viewableArea="excludingTabBar",delete c[Pw])}const l=["fastImpressions",zp,zd]
return o&&l.push(Yd),a&&l.push(Zh),vr(0,new Zb(c,l,u,yr(0,c),Ar(e,c,n)))}(e,c,t)
f.push({data:n,invocationPoints:[Vs.PageInvocationPoint.appExit,Vs.PageInvocationPoint.pageExit,Vs.PageInvocationPoint.timer]})}return f}(e,n,o)),t.pageMetrics.addData(rt(e,n,o,a),[Vs.PageInvocationPoint.pageEnter]),t.pageMetrics.addData(function(e,t,n){const r=rt(e,t,n)
return r.fields[gg]=ya,r}(e,n,o),[Vs.PageInvocationPoint.pageExit]),t.pageMetrics.pageRenderFields=st(e,n,o),t.pageRenderMetrics=st(e,n,o),function(e){return!(e instanceof cP||e instanceof iP||e instanceof oP)}(t)&&t.pageMetrics.addData(it(e,n,o),[Vs.PageInvocationPoint.backButton])
const u=e.fetchTimingMetricsBuilder;(0,ks.isSome)(u)&&u.decorate(t)}function nt(e,t,n,r,i,o){let a="",u=""
switch(t){case Ks.AppEvent:a=`${n}_${r}`,u=qf
break
case Ks.ContingentOffer:case Ks.OfferItem:a=`${n}`,u="OfferDetails"}const c={pageId:a,pageType:u}
s(i)&&(c[ch]=i[ym],c[Op]=i[kh])
const l=new mP(c)
return l.recoMetricsData=null!=o?o:void 0,l}function rt(e,t,n,r){var i,o,a,u,c
const l=ot(t,n)
t.iAdInfo&&Object.assign(l,t.iAdInfo.pageFields),s(t.offerReleaseDate)&&(l[Pl]=ye(t.offerReleaseDate))
const d=t.searchTermContext
d&&(l[Tv]=d.term,d.suggestedTerm&&(l.searchSuggestedTerm=d.suggestedTerm),d.correctedTerm&&(l.searchCorrectedTerm=d.correctedTerm),d.originatingTerm&&(l.searchOriginatingTerm=d.originatingTerm)),t.guidedSearch&&Object.assign(l,t.guidedSearch)
const f=function(e,t,n,r,i,s){const o={}
Object.assign(o,i),o[gg]=Vm,r&&(o[pa]=r.clientCorrelationKey,o.requestStartTime=r.requestStartTime,o.responseStartTime=r.responseStartTime,o.responseEndTime=r.responseEndTime)
const a=[zp,zd]
return n&&a.push("crossfireReferralCandidate"),Or(e,o),vr(0,new Zb(o,a,[],yr(0,o),Ar(e,o,null,s)))}(e,0,null!==(i=t.isCrossfireReferralCandidate)&&void 0!==i&&i,t.timingMetrics,l,r),h=null!==(a=null===(o=t.iAdInfo)||void 0===o?void 0:o.iAdIsPresent)&&void 0!==a&&a,p=null!==(c=null===(u=t.iAdInfo)||void 0===u?void 0:u.shouldIncludeAdRotationFields)&&void 0!==c&&c
return h&&p&&f.includingFields.push(Zh),f}function it(e,t,n){return function(e,t){const n={}
return Object.assign(n,t),n[xp]=Np,mr(e,Np,Lm,n)}(e,ot(t,n))}function st(e,t,n){const r=ot(t,n)
return t.searchTermContext&&(r[Tv]=t.searchTermContext.term),t.baseFields&&Object.assign(r,t.baseFields),function(e,t,n){const r={}
return Object.assign(r,n),r[gg]=wa,t&&(r[yp]||(r[yp]=t.pageURL),r[pa]=t.clientCorrelationKey,r.platformRequestStartTime=t.requestStartTime,r.platformResponseStartTime=t.responseStartTime,r.platformResponseEndTime=t.responseEndTime,r.platformResponseWasCached=t.responseWasCached,r.platformJsonParseStartTime=t.parseStartTime,r.platformJsonParseEndTime=t.parseEndTime),Or(e,r),r}(e,t.timingMetrics,r)}function ot(e,t){const n={}
return s(e.offerType)&&(n[hh]=e.offerType),void 0!==t&&n&&t(n),n}function at(e,t,n,s){return Ds.context("clickOptionsForLockup",()=>{const o=t.id.slice()
let a=t.id
void 0!==n.anonymizationOptions&&n.anonymizationOptions.anonymizationString.length>0&&(a=n.anonymizationOptions.anonymizationString)
const u={...n,...s,id:a,contextualAdamId:o,softwareType:Te(e,t)}
return i(u.targetType)&&(u.targetType=e.client.isVision?mp:Zv),r(u.kind)&&(u.kind=Ee(e,t)),x(t,Qv)&&(u.offerType=Yg),u})}function ut(e,t,n){var r
ct(e,t,{...n,actionType:Sl,subscriptionSKU:null!==(r=e.bag.arcadeProductId)&&void 0!==r?r:void 0,actionContext:Xv,targetType:Lm})}function ct(e,t,n,r=!1,i){var o,a,u,c,l,d,f
let h=n.actionType
h||(h=Dm)
const p={actionType:h}
let w
w=t instanceof aA?t.actions:[t],w.forEach(e=>{if(e instanceof Wy){const t=e
p[Kh]=t.pageUrl}else if(e instanceof oA){const t=e
p[Kh]=t.url}}),n.actionDetails&&(p[Lw]=n.actionDetails),n.actionContext&&(p.actionContext=n.actionContext),s(n.offerType)&&(p[hh]=n.offerType),s(n.offerReleaseDate)&&(p[Pl]=ye(n.offerReleaseDate))
const g=null!==(u=null!==(a=null===(o=n.anonymizationOptions)||void 0===o?void 0:o.anonymizationString)&&void 0!==a?a:null==t?void 0:t.title)&&void 0!==u?u:""
let v
p[dp]=Fe(e,n,g),n.pageInformation&&n.pageInformation.searchTermContext&&(p[Tv]=n.pageInformation.searchTermContext.term),s(n.softwareType)&&(p[np]=n.softwareType),(n.isAdvert||n.isAdEligible)&&r&&(null===(c=n.pageInformation)||void 0===c?void 0:c.iAdInfo)&&(Object.assign(p,n.pageInformation.iAdInfo.clickFields),e.client.isPad&&(v=[Yd])),n.mercuryMetricsData&&Object.assign(p,n.mercuryMetricsData),(0,ks.isSome)(n.subjectIds)&&(p.subjectIds=n.subjectIds)
const m=mr(e,n.id,null!=i?i:Ie(e,n),p,v)
n.actionContext===Xv&&("buy"===n.actionType||n.actionType===Sl)&&(m.includingFields.push(_a),m.fields[Vy]=n.contextualAdamId,(0,ks.isSome)(t.adamId)&&(t.actionMetrics.custom[Vy]=t.adamId))
const b=null!==(f=null===(d=null===(l=n.pageInformation)||void 0===l?void 0:l.iAdInfo)||void 0===d?void 0:d.shouldIncludeAdRotationFields)&&void 0!==f&&f
n.isAdvert&&b&&m.includingFields.push(Zh),t.actionMetrics.addMetricsData(m)}function lt(e){switch(e){case fd:case Eh:case zg:case"groupingLockup":return!0
default:return!1}}function dt(e,t){return e.client.isiOS&&function(e,t){var n
if(t<=0)return!1
if(t>=1)return!0
const r=null===(n=e.metricsIdentifiersCache)||void 0===n?void 0:n.getMetricsIdForType(Bs.user)
return!(0,Cs.isNothing)(r)&&0!==r.length&&!(r.length<2)&&function(e){function t(e){const t=e.charCodeAt(0)
return t>=48&&t<=57?52+t-48:t>=65&&t<=90?26+t-65:t>=97&&t<=122?t-97:t}const n=e.slice(-2)
return(62*t(n[0])+t(n[1]))/3843}(r)<t}(e,e.bag.gameControllerRecommendedRolloutRate)&&ht(e,t)===Yo}function ft(e,t){switch(ht(e,t)){case Wf:case yd:case Ad:return!0
default:return!1}}function ht(e,t){const n=he(e)
if(null===n)return cw
if(!U(t,n)){const r=oe(e,t,pv)
if(null===r||i(r))return cw
const s=r[n]
return i(s)?cw:s}const r=ue(e,t,hw)
return o(r)?r:cw}function pt(e,t,n=80894){let i=!1
return 2&n&&(i=i||function(e,t){return!e.client.isWatch&&(le(e,t,ao)||le(e,t,uo))}(e,t)),4&n&&(i=i||function(e,t){return _(t,"shouldFilterDeletableSystemApp",()=>{const n=Ge(e)
if(!n.isSystemAppFromData(t))return!1
const r=n.bundleIdFromData(t),i=e.host.deviceModel,o=i.startsWith(Ic),a=i.startsWith(po)
let u
switch(u=!(!fi(e,"12.3")&&!e.client.isVision)||e.bag.isTVAppEnabled,r){case"com.apple.Bridge":case"com.apple.Passbook":case"com.apple.journal":case yc:case"com.apple.mobilephone":return!o
case"com.apple.Photo-Booth":return!a
case"com.apple.tv":return!u
case"com.apple.videos":return u
case"com.apple.iCloudDriveApp":return!0
case"com.apple.facetime":return!gt(e,"any-telephony",t)||!gt(e,"venice",t)
case"com.apple.Fitness":if(a||o){let t=!1
return s(e.user.isFitnessAppInstallationAllowed)&&(t=e.user.isFitnessAppInstallationAllowed),!t}return!0
case"com.apple.measure":return!gt(e,"arkit",t)
case"com.apple.Jellyfish":return!gt(e,"front-depth-camera",t)
case co:case lo:return!0
case"com.apple.NanoHeartRhythm":return!e.client.isElectrocardiogramInstallationAllowed
case wo:return!gt(e,"magnetometer",t)
case"com.apple.NanoOxygenSaturation.watchkitapp":return!e.client.isScandiumInstallationAllowed
case go:case"com.apple.NanoRadio":return!0
case vo:return!e.client.isCharonSupported
case mo:return!e.client.isMandrakeSupported
case"com.apple.GenerativePlaygroundApp":return!gt(e,"generative-model-systems",t)}return!1})}(e,t)),8&n&&(i=i||function(e,t){return _(t,"shouldFilterUnsupportedWatchAppOnWatchClient",()=>{const n=le(e,t,iv),r=t.type===Em
return e.host.clientIdentifier===kb&&!n&&!r})}(e,t)),16&n&&(i=i||function(e,t){return t.type===jv&&!o(d(t,Ch))&&!o(d(t,md))&&!N(t,"isMerchandisedEnabled")}(0,t)),32&n&&(i=i||function(e,t){return _(t,"shouldFilterLegacyApps",()=>{const n=ue(e,t,Kv)
if(e.client.isiOS||e.client.isVision)switch(n){case"com.apple.mobileme.fmip1":case co:return!0}if(e.client.isVision&&"com.apple.MobileStore"===n)return!0
if(e.client.isWatch)switch(n){case lo:return!0
case fo:return fi(e,ho)
case"com.apple.findmy.findpeople":return!fi(e,ho)}if(e.client.isMac)switch(n){case"com.apple.FaceTime":case"com.apple.InstallAssistant.Seed.macOS1013Seed1":case"com.apple.InstallAssistant.OSX12PublicSeed2":case"com.apple.InstallAssistant.OSX12CustomerSeed1":case"com.apple.InstallAssistant.OSX12Seed2":case"com.apple.Server.v3":case"com.apple.Server.v2":case"com.apple.Server.v1":return!0}return!1})}(e,t)),64&n&&(i=i||function(e,t){return _(t,"isLegacyMacOSInstaller",()=>{const n=ue(e,t,Kv)
if(!e.client.isMac)return!1
switch(n){case"com.apple.InstallAssistant.ElCapitan2":case"com.apple.InstallAssistant.ElCapitan":case"com.apple.InstallAssistant.Yosemite":case"com.apple.InstallAssistant.Mavericks":case"com.apple.InstallAssistant.MountainLion":case"com.apple.InstallAssistant.Lion":case"com.apple.InstallAssistant.Sierra":case"com.apple.InstallAssistant.HighSierra":case"com.apple.InstallAssistant.Mojave":return!0}return!1})}(e,t)),128&n&&(i=i||function(e,t){return _(t,"shouldFilterUnsupportedPlatform",()=>!wi(e,t))}(e,t)),16384&n&&(i=i||function(e,t){return _(t,"shouldFilterUnsupportedPlatformForCharts",()=>{if(t.type!==Um&&t.type!==Em)return!1
const n=kr(e,t),r=Br(0,t,!0),i=jr(e,t)
return!Wr(e,t,n,e.client.deviceType,r,i)})}(e,t)),256&n&&(i=i||function(e,t){return _(t,"shouldFilterUnsupportedPreordersOnPlatform",()=>{if(!N(t,Qv))return!1
if(t.type!==Um)return!1
const n=kr(e,t),r=Br(0,t,e.appleSilicon.isSupportEnabled),i=jr(e,t)
return!function(e,t,n,r,i){const s=function(e,t,n,r){switch(t){case Cm:return[Cm,Mm,Dv]
case Tm:return[Cm,Tm,Dv]
case"tv":return["tv"]
case Mm:return[Mm]
case Fm:return n?[Fm,Cm,Tm]:[Fm]
case pm:return r?[pm,Cm,Tm]:[pm]
default:return[]}}(0,n,r,i)
return s.some(e=>Gr(t,e))}(0,n,e.client.deviceType,r,i)})}(e,t)),512&n&&(i=i||wt(e,t)),1024&n&&(i=i||function(e,t){if(e.client.isWatch)return!1
const n=N(t,dw),r=!le(e,t,Tc)&&le(e,t,Rw)
return n&&r}(e,t)),2048&n&&(i=i||function(e,t){return e.client.deviceType===Mm&&(!le(e,t,Rw)&&!le(e,t,Sc)&&!function(e,t){return!(!r(t)&&0!==t.length)||e.client.isPairedSystemVersionAtLeast(t)}(e,G(t,fe(e,t),Av)))}(e,t)),4096&n&&(i=i||function(e,t){return e.client.deviceType===Fm&&(le(e,t,bo,he(e))&&!e.appleSilicon.isSupportEnabled)}(e,t)),8192&n&&(i=i||function(e,t){const n=kr(e,t)
return!(e.client.deviceType!==Fm||!n.includes(Fm))&&!qr(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable)}(e,t)),32768&n&&(i=i||function(e,t){if(!e.client.isCompanionVisionApp)return!1
const n=H(t,lm,Ec)
return!(kr(e,t).indexOf(pm)>-1||n)}(e,t)),65536&n&&(i=i||function(e,t){return!!Ge(e).isSystemAppFromData(t)&&wt(e,t)}(e,t)),i}function wt(e,t){return!(!e.client.isPhone||!le(e,t,Rw)||function(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),i=l(n[0])||0,s=l(n[1])||0,o=l(n[2])||0
return e.client.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(i,s,o)}(e,ue(e,t,xh)))||(e.client.isWatch?!fi(e,ue(e,t,xh)):!fi(e,$r(e,t,e.appleSilicon.isSupportEnabled)))}function gt(e,t,n){const r=jr(e,n)
return e.client.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp([t],r)}function vt(e,t){const n=le(e,t,"usesExternalPurchase"),r=le(e,t,"usesExternalLinkPurchase")
return n||r}function mt(e,t){return e.bag.enableExternalPurchases&&e.bag.enabledExternalPurchasesPlacements.includes(t)}function bt(e,t,n){return Ds.context("offerDataFromData",()=>{const r=ae(e,t,og,n)
return 0===r.length?null:r[0]})}function At(e,t,n,i,a,u,l,d=um,f,h,p){return Ds.context(`offerActionFromOfferData: ${n.id}`,()=>{var w,g,v,m,b,A,y
let O=c(t,Zw)
if(r(O))return Ds.unexpectedNull(Pv,dm,il),null
if(n.type===Em&&(O.indexOf("rebuy")>=0?O=O.replace("rebuy=false",za):(O.length>0&&(O+="&"),O+=za)),o(l.inAppEventId)&&(O.length>0&&(O+="&"),O+=`mtInAppEventId=${l.inAppEventId}`),l.isAdvert){const e=null===(g=null===(w=l.pageInformation)||void 0===w?void 0:w.iAdInfo)||void 0===g?void 0:g.placementId
s(e)&&(O.length>0&&(O+="&"),O+=`${OP.placementId}=${e}`)
const t=null===(m=null===(v=l.pageInformation)||void 0===v?void 0:v.iAdInfo)||void 0===m?void 0:m.containerId
s(t)&&(O.length>0&&(O+="&"),O+=`${OP.containerId}=${t}`)
const n=null===(A=null===(b=l.pageInformation)||void 0===b?void 0:b.iAdInfo)||void 0===A?void 0:A.clickFields[wh]
s(n)&&(O.length>0&&(O+="&"),O+=`${OP.templateType}=${n}`)}const P=n.id
if(r(P))return Ds.unexpectedNull(Pv,dm,"item.offer.id"),null
const I=function(e,t,n,r,i,s,o,a,u,l){return Ds.context("purchaseConfigurationFromProduct",()=>{const d=C(t,$m)
let f=C(t,$g)
f||(f=Fl)
const h=Ge(e).bundleIdFromData(t),p=kr(e,t),w=C(t,da),g=ue(e,t,"preflightPackageUrl"),v=ai(e,t),m=Br(0,t,e.appleSilicon.isSupportEnabled),b=jr(e,t),A=c(u,ym),y=c(u,kh),O=Ct(e,t)?e.client.remoteDownloadIdentifiers:[],P=new wb(n,f,d,h,p,r,i,o,w,!1,g,v,m,b,a.inAppEventId,A,y,void 0,Ur(e,t),l,O)
return P.pageInformation=s,P.productVariantData=z(e,t),P.targetType=a.targetType,P.metricsKind=a.kind,P})}(e,n,O,i,l.excludeAttribution,l.pageInformation,u,l,f,h),S=function(e,t,n,r,i,s=um,o=!1,a){return Ds.context("offerActionFromOfferData",()=>{const u=c(t,Bg),l=o&&s===um&&(0,ks.isSome)(e.bag.adsOverrideLanguage)?e.adsLoc:e.loc
let d
switch(u){case"get":if(s===Eg)d=e.loc.string(Ya,"Get")
else{const t="OfferButton.Title.Get.TitleCase",n=e.client.isWatch?t:af
d=l.string(n)}break
case Yg:d=s===Eg?e.loc.string(Ja,"Pre-Order"):l.string(af)
break
default:d=u}let f=null,h=null
const p=Pt(0,t)
p>0&&(f=p,h=c(t,Gw))
const w=Ae(c(t,Hp)),g=new uA(d,n,r,a)
return g.price=f,g.priceFormatted=h,g.expectedReleaseDate=w,g.includeBetaApps=i,g})}(e,t,P,I,a,d,null!==(y=l.isAdvert)&&void 0!==y&&y,p)
return function(e,t,n,r,i){var a,u,c,l,d
const f=n.pageInformation,h=Fe(e,{...n,targetType:Lm},null!==(a=t.title)&&void 0!==a?a:"")
let p=null!==(c=null===(u=n.anonymizationOptions)||void 0===u?void 0:u.anonymizationString)&&void 0!==c?c:t.adamId;(0,ks.isSome)(n.targetId)&&(null===(l=n.targetId)||void 0===l?void 0:l.length)>0&&(p=n.targetId),function(e,t,n,r,i,a,u,c,l){var d,f,h,p,w
const g={}
if(i){const e=i
u&&(null!==(h=null===(f=null===(d=e.iAdInfo)||void 0===d?void 0:d.iAdAdamId)||void 0===f?void 0:f.length)&&void 0!==h?h:0)>0&&(0,ks.isSome)(e.iAdInfo)&&e.iAdInfo.iAdAdamId===t.adamId&&Object.assign(g,e.iAdInfo.clickFields),o(e.searchTermContext)&&(g[Tv]=e.searchTermContext.term)}(0,ks.isSome)(c)&&Object.assign(g,c),g[Lw]={buyParams:t.purchaseConfiguration.buyParams},void 0!==a&&(g[dp]=a),g[Vy]=t.adamId,t.actionMetrics.custom[Vy]=t.adamId,r&&(g[hh]=Yg,s(t.expectedReleaseDate)&&(g[Pl]=ye(t.expectedReleaseDate)))
const v=mr(e,n,Lm,g,void 0,l)
g[Vy]=t.adamId,t.actionMetrics.custom[Vy]=t.adamId,v.includingFields.push(Il),t.purchaseConfiguration.isArcadeApp&&v.includingFields.push(_a)
const m=null!==(w=null===(p=null==i?void 0:i.iAdInfo)||void 0===p?void 0:p.shouldIncludeAdRotationFields)&&void 0!==w&&w
u&&m&&v.includingFields.push(Zh),u&&e.client.isPad&&v.includingFields.push(Yd),t.actionMetrics.addMetricsData(v)}(e,t,p,r,f,h,null!==(d=n.isAdvert)&&void 0!==d&&d,n.recoMetricsData,i)}(e,S,l,i,h),S})}function yt(e,t){return r(t)||r(t.price)||0===t.price}function Ot(e,t){return Ds.context("expectedReleaseDateFromData",()=>Ae(C(t,"offers.0.expectedReleaseDate")))}function Pt(e,t){const n=c(t,Bg)
return"buy"===n||"complete"===n||n===Yg?l(t,Nh):null}function It(e,t,n,i,s,a=um,u=null,c=!1){if((0,ks.isNothing)(t))return null
if(ci(e,n)){if(a===Eg)return null
if(a===um)return rr(e,n,s,null)
const r=ue(e,n,Kv)
if(o(r)){const e=function(e,t=null){return e===Fm?function(e){let t="x-apple.systempreferences:com.apple.preferences.softwareupdate?client=AppStore&variant=CUSTOMER"
return e&&(t+=`&installMajorOSBundle=${e}`),t}(t):null}(Fm,r)
if((0,ks.isSome)(e)){const n=new oA(e)
return new hA(t.adamId,n)}}}if(a===um&&(n.type===Em||li(e,n)||c))return rr(e,n,s,null)
if(i&&"tv"!==e.client.deviceType&&!ai(e,n)){const i=function(e,t,n,i,s){if(r(t))return null
const o=St(e,n,t,!1,i)
return o.buyAction=t,o}(e,t,n,s)
if(null!==i)return i}const l=re(e,n,Pg),d=e.client.isCompanionVisionApp
if(!ai(e,n)&&(d||l&&e.client.deviceType!==pm))return function(e,t,n,r,i){const s=Dt(e,t,n,r,i),o=new hA(t.adamId,s)
return o.title=t.title,o}(e,t,n,yt(0,t),ai(e,n))
if(re(e,n,$p)&&"tv"!==e.client.deviceType)return function(e,t,n){const r=new mA(um)
r.title=e.loc.string("Alert.Buy.TvOnly.Title"),r.message=e.loc.string("Alert.Buy.TvOnly.Message"),r.isCancelable=!0,r.buttonActions=n?[Nt(e,t)]:[t],r.buttonTitles=[e.loc.string("Alert.Buy.TvOnly.ButtonTitle")]
const i=new hA(t.adamId,r)
return i.title=t.title,i}(e,t,le(e,n,Gf))
if(!le(e,n,Tc)&&le(e,n,Rw)&&e.client.deviceType!==Mm)return function(e,t){const n=new mA(um)
n.title=e.loc.string("Alert.Buy.WatchOnly.Title"),n.message=e.loc.string("Alert.Buy.WatchOnly.Message"),n.isCancelable=!0,n.buttonActions=[t],n.buttonTitles=[e.loc.string("Alert.Buy.WatchOnly.ButtonTitle")]
const r=new hA(t.adamId,n)
return r.title=t.title,r}(e,t)
const f=ue(e,n,xh)
if(o(u)&&u===kb&&(0,ks.isSome)(f)&&hi(e,f))return function(e,t,n){const r=new mA(um)
r.title=e.loc.string("ProductPage.WatchOSUpdateRequired.Title").replace(jw,n),r.message=e.loc.string("ProductPage.WatchOSUpdateRequired.Message").replace(jw,n),r.buttonActions=[t],r.buttonTitles=[e.loc.string(Lc)]
const i=new hA(t.adamId,t)
return i.buyAction=r,i}(e,t,f)
if(function(e,t){return!!ai(e,t)||!(!e.client.isTV&&!e.client.isVision)}(e,n)){if(ai(e,n))return function(e,t,n,r,i,s,o){if(!ai(e,n))return t
switch(e.client.deviceType){case"tv":return function(e,t,n,r,i,s){var o,a,u,c
const l=_t(e,t,null,n,r),d=l.startAction,f=l.underlyingOfferAction,h=lt(i),p=new bP(Nm,i,n.id);(0,ks.isSome)(null===(a=null===(o=s.pageInformation)||void 0===o?void 0:o.searchTermContext)||void 0===a?void 0:a.term)&&(p.metricsOverlay[Tv]=null===(u=s.pageInformation.searchTermContext)||void 0===u?void 0:u.term)
const w=null===(c=e.metricsIdentifiersCache)||void 0===c?void 0:c.getMetricsFieldsForTypes([Bs.user,Bs.client]);(0,ks.isSome)(w)&&(p.metricsOverlay={...p.metricsOverlay,...w}),h&&(p.purchaseSuccessAction=f,p.carrierLinkSuccessAction=f)
const g=new Wy(tg)
if(g.pageData=p,s&&s.pageInformation&&(g.referrerUrl=s.pageInformation.pageUrl),d instanceof uA&&(s.actionDetails={buyParams:d.purchaseConfiguration.buyParams,...s.actionDetails}),ut(e,g,s),r){const t=St(e,n,f,!0,s)
t.buyAction=d
const r=St(e,n,f,!0,s)
return r.buyAction=d,t.subscribePageAction=r,f.buyCompletedAction=function(e,t){if(!e.client.isTV)return null
const n=new lA
e.client.isAutomaticDownloadingEnabled()?n.title=e.loc.string(Ll):n.title=e.loc.string(rp)
const r=new lA
r.title=e.loc.string(rp)
for(const t of[n,r])t.isCancelable=!1,t.shouldCheckForAvailableDiskSpace=!1,t.remoteControllerRequirement=null,t.shouldCheckForGameController=!1,t.shouldPromptForConfirmation=!0,t.shouldIncludeActiveAccountInFooterMessage=!0,t.completionAction=new OA,t.completionAction.title=e.loc.string(Lc)
const i=new PA(Bl,new aA([t,r]))
return i.rateLimit=e.bag.arcadePreOrderUpsellLimitSeconds,i.fallbackAction=r,new IA(i,n,n,n)}(e,g),t}{const i=new hA(n.id,d),s=_t(e,t,g,n,r).startAction
return i.subscribePageAction=s,i}}(e,t,n,r,s,o)
case pm:return function(e,t,n,r,i,s){var o,a,u,c
const l=Rt(e,t,null,n,r),d=l.startAction,f=l.underlyingOfferAction,h=lt(i),p=new bP(Nm,i,n.id);(0,ks.isSome)(null===(a=null===(o=s.pageInformation)||void 0===o?void 0:o.searchTermContext)||void 0===a?void 0:a.term)&&(p.metricsOverlay[Tv]=null===(u=s.pageInformation.searchTermContext)||void 0===u?void 0:u.term)
const w=null===(c=e.metricsIdentifiersCache)||void 0===c?void 0:c.getMetricsFieldsForTypes([Bs.user,Bs.client]);(0,ks.isSome)(w)&&(p.metricsOverlay={...p.metricsOverlay,...w}),h&&(p.purchaseSuccessAction=f,p.carrierLinkSuccessAction=f)
const g=new Wy(tg)
if(g.pageData=p,s&&s.pageInformation&&(g.referrerUrl=s.pageInformation.pageUrl),d instanceof uA&&(s.actionDetails={buyParams:d.purchaseConfiguration.buyParams,...s.actionDetails}),ut(e,g,s),r&&null!==f){const t=St(e,n,f,!0,s)
t.buyAction=d
const r=St(e,n,f,!0,s)
return r.buyAction=d,t.subscribePageAction=r,f.buyCompletedAction=Et(e,g),t}{const i=new hA(n.id,d),s=Rt(e,t,g,n,r).startAction
return i.subscribePageAction=s,i}}(e,t,n,r,s,o)
default:return function(e,t,n,r,i,s,o){var a,u,c,l
const d=lt(s),f=new bP(Nm,s,n.id);(0,ks.isSome)(null===(u=null===(a=o.pageInformation)||void 0===a?void 0:a.searchTermContext)||void 0===u?void 0:u.term)&&(f.metricsOverlay[Tv]=null===(c=o.pageInformation.searchTermContext)||void 0===c?void 0:c.term)
const h=null===(l=e.metricsIdentifiersCache)||void 0===l?void 0:l.getMetricsFieldsForTypes([Bs.user,Bs.client]);(0,ks.isSome)(h)&&(f.metricsOverlay={...f.metricsOverlay,...h}),e.props.enabled(uf)&&e.client.isCompanionVisionApp&&(0,ks.isNothing)(f.metricsOverlay[Iw])&&(f.metricsOverlay[Iw]="com.apple.visionproapp"),d&&(f.purchaseSuccessAction=t,f.carrierLinkSuccessAction=t)
const p=new Wy(tg)
if(p.pageData=f,o&&o.pageInformation&&(p.referrerUrl=o.pageInformation.pageUrl),o.actionDetails={buyParams:t.purchaseConfiguration.buyParams,...o.actionDetails},ut(e,p,o),r&&t instanceof uA){const r=St(e,n,t,!0,o)
r.buyAction=t
const i=St(e,n,t,!0,o)
return i.buyAction=t,r.subscribePageAction=i,t.buyCompletedAction=Et(e,p),r}const w=re(e,n,Pg)
if(Ct(e,n)||w&&e.client.deviceType!==pm){const r=Dt(e,t,n,!0,!0),i=Dt(e,p,n,!0,!0),s=new hA(n.id,r)
return s.subscribePageAction=new hA(n.id,i),s}const g=new hA(n.id,t)
return g.subscribePageAction=p,g}(e,t,n,r,0,s,o)}}(e,t,n,i,0,function(e,t,n){if(n)return Bf
switch(t){case zg:return Eh
case um:case Eg:return fd
default:return ow}}(0,a,i),s)
const o=function(e,t,n,i,s){return"tv"===e.client.deviceType?_t(e,t,null,n,i):e.client.isVision?Rt(e,t,null,n,i):{startAction:r(t)?null:t,underlyingOfferAction:null}}(e,t,n,i),u=o.startAction
if(i){const t=St(e,n,o.underlyingOfferAction,!1,s)
return t.buyAction=u,t}return u}return function(e,t,n,i){if(r(t))return null
if(e.client.newPaymentMethodEnabled||n)return t
const s=new OA
s.impressionMetrics=t.impressionMetrics
const o=v(i)
r(o)||(o.actionType=Sl,o.targetType=Lm,ct(e,s,o))
const a=new cA(t,s)
return a.confirmationAccessibilityAction=function(e,t){if(r(t))return null
const n=new mA(um)
r(t.priceFormatted)?(n.title=e.loc.string(up),n.message="Are you sure you want to get "+t.purchaseConfiguration.appName):(n.title="Buy App",n.message=`Are you sure you want to buy ${t.purchaseConfiguration.appName} for ${t.priceFormatted}`),n.isCancelable=!0,n.buttonActions=[t]
const i=new hA(t.adamId,t)
return i.buyAction=n,i}(e,t),a}(e,t,i,s)}function St(e,t,n,r,i){let s
if(r){const o=Tt(e,t,n.purchaseConfiguration.appName,r,!0,i),a=Tt(e,t,n.purchaseConfiguration.appName,r,!1,i)
s=new IA(a,a,o,a)}else s=Tt(e,t,n.purchaseConfiguration.appName,!1,!1,i)
return new hA(t.id,s)}function Tt(e,t,n,r,i,s){const o=new dA(t.id,r)
let a,u,c,l
if(a=e.loc.string("CANCEL_COMING_SOON_TITLE"),e.client.isAutomaticDownloadingEnabled()&&(r&&i||!r)?(o.title=e.loc.string("CANCEL_COMING_SOON_BUTTON_DOWNLOAD"),c=e.loc.string("COMING_SOON_BODY_DOWNLOAD").replace(cf,n)):(o.title=e.loc.string("CANCEL_COMING_SOON_BUTTON"),c=e.loc.string("COMING_SOON_BODY").replace(cf,n)),u=e.loc.string("CANCEL_COMING_SOON_CANCEL"),e.client.deviceType===Fm||"tv"===e.client.deviceType){const e=new mA(um)
e.title=a,e.message=c,e.buttonActions=[o],e.isCancelable=!0,e.cancelTitle=u,e.destructiveActionIndex=0,l=e}else if(e.client.deviceType===pm){const t=new mA(um)
t.title=a,t.artwork=qe(e,"systemimage://bell.slash.fill",95,90),t.message=c,t.buttonActions=[o],t.isCancelable=!0,t.cancelTitle=u,l=t}else{const e=new vA([o])
e.title=a,e.message=c,e.isCancelable=!0,e.cancelTitle=u,e.isCustom=!1,e.destructiveActionIndex=0,l=e}return ct(e,o,{...s,actionType:"cancelPreorder"}),l}function Et(e,t){if(e.client.isTV)return null
const n=qe(e,"systemimage://checkmark",95,90),r=qe(e,Io,95,90),i=e.client.isVision
let s,o
if(i?(s=new mA(um),s.title=e.loc.string(gh),s.artwork=qe(e,Ka,95,90),s.isCancelable=!0,e.client.isAutomaticDownloadingEnabled()?s.message=e.loc.string(Ll):s.message=e.loc.string(rp)):(s=new mA(lp),s.title="",s.artwork=n,e.client.isAutomaticDownloadingEnabled()?(s.message=e.loc.string(Ll),s.toastDuration=2.5):(s.message=e.loc.string(rp),s.toastDuration=1.5)),i){const n=new mA(um)
n.title=e.loc.string(gh),n.artwork=qe(e,Ka,95,90),n.message=e.loc.string(rp),n.isCancelable=!0
const r=new PA(Bl,new aA([t]))
r.title=e.loc.string("ACTION_OK"),r.rateLimit=e.bag.arcadePreOrderUpsellLimitSeconds,r.fallbackAction=null,n.cancelAction=r,o=n}else{const n=new mA(lp)
n.title="",n.artwork=r,n.message=e.loc.string(rp),n.toastDuration=1.5
const i=new PA(Bl,new aA([t,n]))
i.rateLimit=e.bag.arcadePreOrderUpsellLimitSeconds,i.fallbackAction=n,o=i}const a=!e.client.isAuthorizedForUserNotifications()
return e.bag.newEventsForODJAreEnabled&&a?new IA(new OA,new OA,new OA,new OA):new IA(o,s,s,s)}function _t(e,t,n,i,o,a){if(r(t))return{startAction:null,underlyingOfferAction:null}
const u=new lA,c=yt(0,t),l=t.purchaseConfiguration.appName
u.shouldCheckForAvailableDiskSpace=!o,e.host.isTV?(u.remoteControllerRequirement=ht(e,i),u.shouldCheckForGameController=!1):(u.remoteControllerRequirement=cw,u.shouldCheckForGameController=le(e,i,Gf)),u.shouldPromptForConfirmation=!e.featureFlags.isEnabled("disable_redundant_interstitial")
const d=F(i,Qa)
if(s(d)&&(u.checkRestrictionsForContentRating=d),c){const t=o?e.loc.string("OfferAlert.TV.Title.PredorderFree"):e.loc.string("OfferAlert.TV.Title.Free")
u.title=t.replace(Jp,l)}else{const n=o?e.loc.string("OfferAlert.TV.Title.PreorderPaid"):e.loc.string("OfferAlert.TV.Title.Paid")
u.title=n.replace(Jp,l).replace(vh,t.priceFormatted)}const f=v(t)
f.title=o?e.loc.string("OfferButton.Title.Preorder"):c?e.loc.string(af):e.loc.string("OfferButton.Title.Buy")
const h=(0,ks.isNothing)(n)?f:n
u.completionAction=h,u.shouldIncludeActiveAccountInFooterMessage=!0
const p=[]
le(e,i,Qc)&&p.push(e.loc.string("OFFERS_IN_APP_PURCHASES","Offers In-App Purchases")),p.length>0&&(u.footerMessage=p.join(e.loc.string("TV_OFFER_ALERT_FOOTER_LINE_BREAK"))),u.impressionMetrics=f.impressionMetrics
const w=v(u)
w.shouldPromptForConfirmation=!1,w.title=null,w.footerMessage=null
const g=new hA(t.adamId,w)
return ai(e,i)||(g.buyAction=u),g.openAction=t,{startAction:g,underlyingOfferAction:f}}function Rt(e,t,n,i,s,o){if(r(t))return{startAction:null,underlyingOfferAction:null}
const a=new lA,u=yt(0,t)
a.remoteControllerRequirement=ht(e,i)
const c=v(t)
c.title=s?e.loc.string("OFFER_BUTTON_TITLE_PREORDER"):u?e.loc.string("OFFER_BUTTON_TITLE_GET"):e.loc.string("OFFER_BUTTON_TITLE_BUY")
const l=(0,ks.isNothing)(n)?c:n
a.completionAction=l,a.impressionMetrics=c.impressionMetrics
const d=v(a)
d.shouldPromptForConfirmation=!1,d.title=null,d.footerMessage=null
const f=new hA(t.adamId,d)
return f.buyAction=a,f.cancelAction=c,f.openAction=c,{startAction:f,underlyingOfferAction:c}}function Dt(e,t,n,r,i){const s=new mA(um)
return s.isCancelable=!0,s.buttonActions=[t],s.imageName="vision.pro",Ct(e,n)?r?(s.title=e.loc.string("Alert.Buy.VisionOnly.Free.RemoteDownloads.Title"),s.message=e.loc.string("Alert.Buy.VisionOnly.Free.RemoteDownloads.Message"),s.buttonTitles=[e.loc.string("Alert.Buy.VisionOnly.Free.RemoteDownloads.ButtonTitle")]):(s.title=e.loc.string("Alert.Buy.VisionOnly.Paid.RemoteDownloads.Title"),s.message=e.loc.string("Alert.Buy.VisionOnly.Paid.RemoteDownloads.Message"),s.buttonTitles=[e.loc.string("Alert.Buy.VisionOnly.Paid.RemoteDownloads.ButtonTitle")]):(s.title=e.loc.string("Alert.Buy.VisionOnly.Title"),s.message=i?e.loc.string("Alert.Buy.VisionOnly.Message.Arcade"):e.loc.string("Alert.Buy.VisionOnly.Message"),s.buttonTitles=[e.loc.string("Alert.Buy.VisionOnly.ButtonTitle")]),s}function kt(e,t){if(!e.props.enabled("remoteDownloadIdentifiers"))return!1
if(!e.client.isCompanionVisionApp)return!1
const n=kr(e,t).includes(pm)||function(e){return H(e,lm,Ec)}(t)
return!!n}function Ct(e,t){return!!kt(e,t)&&xt(e)}function xt(e){return!((0,ks.isNothing)(e.client.remoteDownloadIdentifiers)||0===e.client.remoteDownloadIdentifiers.length)}function Nt(e,t){const n=new mA(um)
return n.title=e.loc.string("Alert.Buy.TvGameControllerRequired.Title"),n.message=e.loc.string("Alert.Buy.TvGameControllerRequired.Message"),n.buttonTitles=[e.loc.string("Alert.Buy.TvGameControllerRequired.ButtonTitle")],n.isCancelable=!0,n.buttonActions=[t],n}function Ft(e,t,n,i,o,a,u,l,d,f,h=um,p=!1,w=!1,g,m){return r(t)?null:Ds.context("displayPropertiesFromOfferAction",()=>{var r,g
let b=u
pt(e,i,77238)&&(b=uw),ar(e,i)||(b=uw),e.client.isCompanionVisionApp&&!Ct(e,i)&&(b=uw)
const A=null!==(r=lr(e,i))&&void 0!==r?r:m
let y=null
A&&(y=A.id)
let O=new gb(n,t.adamId,b,y,l)
O.isPreorder=o
const P=w&&h===um&&(0,ks.isSome)(e.bag.adsOverrideLanguage),I=P?e.adsLoc:e.loc
if(O.useAdsLocale=P,o)if(ai(e,i))O.offerLabelStyle=Bf,e.client.isVision&&!a?O.subtitles[Hp]=e.loc.string(gh):O.subtitles[Hp]=pi(e,i,e.loc.string(gh)),O.titleSymbolNames[Xa]=lf,O.titleSymbolNames[Za]="bell.fill",O.subtitles[Hp]===e.loc.string("ARCADE_PREORDER_COMING_SOON")&&(O.subtitles[Hp]=e.loc.string(gh))
else{O.offerLabelStyle=Yg,O.titleSymbolNames[Bm]=lf
const t=pi(e,i,"");(0,ks.isSome)(t)&&(O.subtitles[Hp]=t)}const S=i.type===Em,T=yt(0,t),E=T&&S&&!wi(e,i,!1)
!E||e.client.isMac||e.client.isTV?O.isFree=T:O.isFree=!1
let _=null
if(h===um&&(i.type===Em||ci(e,i)||li(e,i)||p))_=e.loc.string(eu)
else{if(h===Eg&&(i.type===Em||ci(e,i)||li(e,i)))return null
_=h===tu&&e.props.enabled(Ip)?e.loc.string("OfferButton.Title.Select"):T?h===Eg?o?e.loc.string(Ja):e.loc.string(Ya):t.title:!e.client.isTV||l!==zg&&l!==Eh?h===Eg?o?e.loc.string("OfferButton.FlowPreview.PreorderWithPrice").replace(vh,t.priceFormatted):e.loc.string("OfferButton.FlowPreview.BuyWithPrice").replace(vh,t.priceFormatted):t.priceFormatted:e.loc.string("OfferButton.Title.BuyWithPrice").replace(vh,t.priceFormatted)}if(O.titles[Bm]=_,O.priceFormatted=t.priceFormatted,e.client.newPaymentMethodEnabled||h===Eg||(O.titles[jl]=T?e.loc.string("OfferButton.Title.ConfirmGet"):e.loc.string("OfferButton.Title.ConfirmBuy")),ai(e,i))if(h===Eg){const t=e.loc.string("OfferButton.FlowPreview.Arcade.Standard")
O.titles[Bm]=t,O.titles[df]=t,O.titles[Mw]=e.loc.string("OfferButton.FlowPreview.Arcade.Open"),O.titles[Ul]=t,o&&(O.titles[nu]=e.loc.string("OfferButton.FlowPreview.Arcade.PreorderSubscribed"),O.titles[ru]=e.loc.string("OfferButton.FlowPreview.Arcade.PreorderNotSubscribed"))}else{const e=I.string("OfferButton.Arcade.Title.Standard")
O.titles[Bm]=e,O.titles[df]=e,O.titles[Mw]=I.string("OfferButton.Arcade.Title.Open"),O.titles[Ul]=e,o&&(O.titles[nu]=I.string("OfferButton.Arcade.Title.PreorderSubscribed"),O.titles[ru]=I.string("OfferButton.Arcade.Title.PreorderNotSubscribed"),O.titles[Xa]=I.string("OfferButton.Arcade.Title.PreorderedSubscribed"),O.titles[Za]=I.string("OfferButton.Arcade.Title.PreorderedNotSubscribed"))}if(d&&h!==Eg){const t=c(d,Va),n=c(d,Gw)
if(s(n)&&s(t)){let r=null,i=null
switch(t){case Ga:f?(r=e.loc.string($l),i=e.loc.string($l)):(r=e.loc.string($l),i=e.loc.string(ff))
break
case Wa:const t=e.loc.string("OfferButton.IntroPrice.PaidUpfront.Trial").replace(vh,n)
f?(r=t,i=t):(r=t,i=e.loc.string(ff))
break
case Ha:r=e.loc.string(ff),i=e.loc.string(ff)}O.titles[Vl]=r,O.titles[Gl]=i,O.subtitles[Vl]=e.loc.string(iu),O.subtitles[Gl]=e.loc.string(iu)
const s=10
let o=!1
for(const e of Object.keys(O.titles))if(O.titles[e].length>s){o=!0
break}o&&(O=O.newOfferDisplayPropertiesChangingAppearance(!1,null,sa))}}const R=le(e,i,Qc),D=vt(e,i),k=mt(e,Zv),C=D&&k
if(O.hasInAppPurchases=R,O.hasExternalPurchases=C,R||C){const t=C?"OfferButton.ExternalPurchases.Subtitle":"Offer.InlineInAppPurchases",n=I.string(t)
O.subtitles[Bm]=n,e.client.newPaymentMethodEnabled||h===Eg||(O.subtitles[jl]=n)}O.isDeletableSystemApp=Ge(e).isSystemAppFromData(i)&&!li(e,i)
const x=F(i,Qa)
O.contentRating=x,O.appCapabilities=t.purchaseConfiguration.appCapabilities
const N=null!==(g=te(i,Um))&&void 0!==g?g:[],M=[]
if((0,ks.isSome)(N))for(const t of N)wi(e,t)&&M.push(t.id)
return i.type===Em&&h!==Eg&&(O.offerToken={offerAction:t,offerDisplayProperties:v(O),freeBundleId:E?t.adamId:void 0,supportedBundleChildrenIds:M.length>0?M:void 0}),O})}function Mt(e,t,n){const r=C(t,n)
if(i(r))return null
const o=new ly(r)
let a=null
switch(e.host.clientIdentifier){case Cb:a=Dv
break
case kb:a=Mm}a&&o.param(oy,a)
const u=J(z(e,t))
return s(u)&&o.param(GA,u),o.toString()}function Lt(e,t,n){if(i(t))return null
const r=new _A(t)
return r.title=null!=n?n:e.loc.string("ShareSheet.CopyLink.Title"),r.artwork=qe(e,"systemimage://link"),new bA("com.apple.AppStore.copyLinkActivity",r)}function Bt(e,t,n){return Ds.context("shareSheetDataForProductFromProductData",()=>{if(r(t)||e.client.isWatch)return null
const i=Mt(e,t,wm),o=C(t,$m),a=C(t,$g),u=t.id,c=e.client.storefrontIdentifier
if(!(i&&o&&a&&u))return null
const l=Mt(e,t,"shortUrl")
let d=null,f=null
const h=Ug,p=ue(e,t,yv)||a
s(t)&&C(t,wm)&&(d=Sr(e,t,{useCase:1},n),f=function(e,t){return Ds.context("notesMetadataFromProductData",()=>{var n
if(r(t))return null
const i=C(t,$m)
if((0,Cs.isNothing)(i)||0===i.length)return null
const s=Mt(e,t,wm),o=C(t,$g),a=C(t,"genreNames.0"),u=null===(n=Jr(e,t))||void 0===n?void 0:n.fileSizeByDevice
let c
switch(t.type){case Um:c=ym
break
case Em:c=vc
break
case jv:c=fw
break
default:c=null}return new Ob(i,s,o,a,u,c)})}(e,t))
const w=new Ib(u,c,o,h,d,[],[],!1,p,null,null,f)
return new Sb(w,i,l)})}function jt(e,t,n,i,o){return Ds.context(`shareActionFromData: ${t.type}`,()=>{var a
const u=t.id
switch(e.client.deviceType){case Fm:{const r=Bt(e,t)
if(r){const t=new AA(r,[])
return ct(e,t,{targetType:Lm,id:u,actionType:Lh,pageInformation:n,locationTracker:i}),t}break}case Cm:case Tm:case pm:{const c=Bt(e,t,o),d=[]
if((null===(a=null==c?void 0:c.url)||void 0===a?void 0:a.length)>0){const t=Lt(e,c.url)
s&&d.push(t)}const f=function(e,t){if(!e.bag.isContentGiftingEnabled)return null
if(r(t))return null
const n=bt(e,t)
return r(n)||x(t,Qv)?null:l(n,Nh)>0?t.id:null}(e,t)
if(f){const t=new Wy("finance")
t.presentationContext=_c,t.title=e.loc.string("SHARE_GIFT_APP"),t.artwork=qe(e,"systemimage://app.gift"),t.pageUrl=`gift/${f}`,ct(e,t,{targetType:Lm,id:u,actionType:Dh,actionContext:yo,pageInformation:n,locationTracker:i})
const r=new bA("com.apple.AppStore.giftActivity",t)
d.push(r)}if(c){const t=new AA(c,d,so)
return t.title=e.loc.string("SHARE_APP"),t.artwork=qe(e,Rc),ct(e,t,{targetType:Lm,id:u,actionType:Lh,actionContext:yo,pageInformation:n,locationTracker:i}),t}if(d.length>0){const t=d.map(e=>e.action),r=new vA(t)
return r.isCancelable=!0,r.isCustom=!0,ct(e,r,{targetType:Lm,id:u,actionType:"actionSheet",pageInformation:n,locationTracker:i}),r}break}}return null})}function Ut(e,t,n){if((0,Cs.isNothing)(t))return null
const r=t.match(/P(\d+)([A-Z]+)/)
if(!r||3!==r.length)return null
let i=l(r[1]),s=r[2]
return i&&s?("D"===s&&i>0&&i%7==0&&(s="W",i/=7),new PP(i,null!=n?n:1,s)):null}function $t(e,t,n,r){let i
switch(t){case"D":i=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Days.one").replace(mw,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Days",n)
break
case"W":i=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Weeks.one").replace(mw,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Weeks",n)
break
case"M":i=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Months.one").replace(mw,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Months",n)
break
case"Y":i=1===n?e.loc.string("InAppOfferPage.Description.PriceDuration.Years.one").replace(mw,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.PriceDuration.Years",n)}return i.replace(qa,r)}function Vt(e,t,n){switch(t){case"D":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Days.one").replace(mw,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Days",n)
case"W":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Weeks.one").replace(mw,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Weeks",n)
case"M":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Months.one").replace(mw,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Months",n)
case"Y":return 1===n?e.loc.string("InAppOfferPage.Description.DurationCount.Years.one").replace(mw,e.loc.formattedCount(n)):e.loc.stringWithCount("InAppOfferPage.Description.DurationCount.Years",n)}return null}function Gt(e,t){var n,r,s
const o=ee(e,t,Mp)
if((0,ks.isNothing)(o))return
const a=bt(e,o),u=d(o,Ch)
if(i(a)||i(u))return
const f=null===(n=Wt(e,c(a,gw),l(a,vw),c(a,Gw)))||void 0===n?void 0:n.replace("/","/\u2060"),h=null===(r=Wt(e,c(u,gw),l(u,vw),c(u,Gw)))||void 0===r?void 0:r.replace("/","/\u2060")
if(i(f)||i(h))return null
const p=C(t,$m),w={"@@discountedPrice@@/@@recurringSubscriptionPeriod@@":h,"@@regularPrice@@/@@recurringSubscriptionPeriod@@":f,"@@discountedPricePerRecurringSubscriptionPeriod@@":h,"@@regularPricePerRecurringSubscriptionPeriod@@":f}
let g=null!=p?p:""
Object.keys(w).forEach(e=>{g=g.replace(e,w[e])})
const v=g.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,""),m=new Tb(g,Fg,So),b=null!==(s=C(t,Dw))&&void 0!==s?s:"",A=e.loc.string("ContingentOffer.Description.Format"),y={"@@BranchName@@":C(o,$m),"@@RegularPrice@@":f,"@@DiscountedPrice@@":h}
let O=A
return Object.keys(y).forEach(e=>{O=O.replace(e,y[e])}),{title:m,rawTitle:v,description:[O,b].join(" ")}}function Wt(e,t,n,r){const i=Ut(0,t,n)
if(!(0,ks.isNothing)(i)&&!(0,ks.isNothing)(r))return $t(e,i.type,i.periodDuration,r)}function Ht(e,t,n){const r=D(t,n)
return(0,Cs.isNothing)(r)?null:Ir(e,r,{useCase:0,withJoeColorPlaceholder:!0,cropCode:"sr"})}function qt(e,t,n){const r=fe(e,t)
if((0,Cs.isNothing)(r))return null
const i=$(t,r,n)
return(0,Cs.isNothing)(i)?null:Ir(e,i,{useCase:0,withJoeColorPlaceholder:!0,cropCode:"sr"})}function zt(e,t,n,i,s){const o=Ht(e,t,`${n}.previewFrame`)
if(r(o))return null
const a=C(t,`${n}.video`)
if(r(a))return null
const u=new _b(a,o,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:i,showPlaybackControls:!1,playbackControls:s?{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0}:{},autoPlayPlaybackControls:s?{muteUnmute:!0}:{}})
return u.canPlayFullScreen=i,u.allowsAutoPlay=!0,u.looping=!0,u}function Yt(e,t,n,s,o,a,u,c,l,d,f,h){var p,w,g,v
if((0,Cs.isNothing)(t)||(0,Cs.isNothing)(n))return null
const m=nn(t),b={...c,id:t.id,relatedSubjectIds:[n.id],idType:tm},A={...c,id:n.id,relatedSubjectIds:[n.id],targetType:Zv,idType:tm,kind:null,softwareType:null,title:null!==(p=C(n,$m))&&void 0!==p?p:"",excludeAttribution:i(d)}
if(m===Ks.AppEvent&&(b[Jf]=t.id,A[Jf]=t.id),(v=c)&&Object.prototype.hasOwnProperty.call(v,"id")&&(b.id=c.id,b.idType=c.idType),h){const n=m===Ks.ContingentOffer?null===(w=Gt(e,t))||void 0===w?void 0:w.rawTitle:C(t,$m)
Me(e,b,null!=n?n:"")}const y=C(t,Cc),O={metricsOptions:A,artworkUseCase:1,externalDeepLinkUrl:null!=y?y:void 0,crossLinkSubtitle:u?s:void 0,offerEnvironment:o,offerStyle:a,skipDefaultClickAction:!l,includeBetaApps:!0,referrerData:null!=d?d:void 0,shouldHideArcadeHeader:e.featureFlags.isEnabled("hide_arcade_header_on_arcade_tab")&&f,parentAppData:n,useJoeColorIconPlaceholder:!0,overrideArtworkTextColorKey:jh},P=tr(e,m===Ks.AppEvent?n:t,O)
return h&&Le(c.locationTracker),r(P)?null:(u&&(P.crossLinkTitle=null!==(g=e.loc.uppercased(P.title))&&void 0!==g?g:void 0),P)}function Jt(e,t,n,r,i){if(n.startDate.getTime()<=Date.now())return null
if((0,Cs.isNothing)(n.lockup))return null
const s=e.loc.string("APP_EVENTS_NOTIFICATION_TITLE").replace("{appTitle}",n.lockup.title),o=e.loc.string("APP_EVENTS_NOTIFICATION_DETAIL").replace("{eventTitle}",n.title),a=n.startDate,u=n.lockup.icon,c=n.lockup.icon.template.replace("{w}",`${u.width}`).replace("{h}",`${u.height}`).replace("{c}","wd").replace("{f}",Od)
let l,d
if(i&&(l=new mA(lp),l.title=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_TITLE"),l.message=e.loc.string("APP_EVENTS_NOTIFICATION_TOAST_DETAIL"),l.artwork=qe(e,Io)),e.bag.newEventsForODJAreEnabled){const i=new OA,s=Ze(r.pageInformation)
s[xp]="notifyActivateNotificationsDisabled",s[dp]=Fe(e,{...r,id:t.id},""),s[Uh]=""
const o=mr(e,n.lockup.adamId,Zv,s)
i.actionMetrics.addMetricsData(o),d=i}else{const t=new mA(um)
t.title=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_TITLE"),t.message=e.loc.string("APP_EVENTS_NOTIFICATION_NOT_AUTHORIZED_DETAIL"),t.isCancelable=!0,t.buttonTitles=[e.loc.string(Ao)],t.buttonActions=[new oA("prefs:root=NOTIFICATIONS_ID&path=com.apple.AppStore",!0)],d=t}const f=new mA(um)
f.title=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_TITLE"),f.message=e.loc.string("APP_EVENTS_NOTIFICATION_FAILURE_DETAIL"),f.isCancelable=!0
const h=(new ly).set(dg,NA).param(KA,n.lockup.adamId).param(WA,n.lockup.bundleId).param(ZA,n.appEventId)
h.host=$A
const p=C(t,Cc);(0,Cs.isSome)(p)&&(null==p?void 0:p.length)>0&&h.param(ey,encodeURIComponent(p))
const w=Ze(r.pageInformation)
w[xp]="notifyActivate",w[dp]=Fe(e,{...r,id:t.id},"")
const g=mr(e,n.lockup.adamId,Zv,w),m=v(w)
m[xp]="notifyDeactivate"
const b=mr(e,n.lockup.adamId,Zv,m)
return new tP(t.id,s,o,c,a,l,d,f,h.build(),g,b)}function Kt(e,t,n,r,i,s){const o=sn(e,t,n,r,i,lv,s,null)
if((0,Cs.isNothing)(o))return
const a={id:t.id,actionDetails:{action:"Open",contentType:rn(t)},relatedSubjectIds:[n.id],...i}
return nn(t)===Ks.AppEvent&&(a[Jf]=t.id),ct(e,o,a),o}function Qt(e,t){let n=null!=e?e:""
return Object.keys(t).forEach(e=>{n=n.replace(e,t[e])}),n}function Xt(e,t,n,r,i){let s
switch(t){case fp:s=Dm
break
case Np:s=Np
break
case Pd:s=Id}const o={targetType:Lm,actionType:s,targetId:t,idType:void 0,location:Fe(e,{pageInformation:n,locationTracker:r,targetType:Lm,id:t},null!=i?i:t)}
return mr(e,t,Lm,o)}function Zt(e,t,n,r,i){let s
switch(t){case fp:s=Dm
break
case Np:s=Np
break
case Pd:s=Id}const o={targetType:Lm,actionType:s,targetId:t,idType:void 0,location:Fe(e,{pageInformation:n,locationTracker:r,targetType:Lm,id:t},null!=i?i:t)}
return mr(e,t,Lm,o)}function en(e,t,n,r,a,u,c,l,d,f,h,p,w,g,v){var m,b,A
if(t.type!==xm)return null
const y=C(t,"promotionStartDate")
if((0,Cs.isNothing)(y)||0===y.length)return null
const O=new Date(y)
if((0,Cs.isNothing)(O))return null
const P=new Date
if(O.getTime()>P.getTime()&&!v)return O
const I=Ht(e,t,zf),T=zt(e,t,"lockupVideo",!1,!1)
if((0,Cs.isNothing)(I)&&i(T))return null
const E=null!==(m=null==T?void 0:T.preview)&&void 0!==m?m:I,_=S(null==E?void 0:E.backgroundColor)?Am:Fv,R=S(null==E?void 0:E.backgroundColor,10),D=C(t,$m)
let k=C(t,sv)
o(w)&&(k=w)
const x=C(t,"startDate")
if((0,Cs.isNothing)(D)||0===D.length||(0,Cs.isNothing)(k)||0===k.length||(0,Cs.isNothing)(x)||0===x.length)return null
const N=new Date(x)
if((0,Cs.isNothing)(N))return null
const F=null!==(b=C(t,Dw))&&void 0!==b?b:"",M=null!=n?n:ee(e,t,ym)
let L=null
if(s(M)){if(L=Yt(e,t,M,D,u,c,l,f,p,null,g,!0),(0,Cs.isNothing)(L))return null}else if(!d)return null
const B=C(t,"requirement"),j=C(t,yv),U=C(t,"endDate")
let $
if((0,Cs.isSome)(U)&&U.length>0&&($=new Date(U)),void 0!==$&&$.getTime()<=P.getTime()&&!h)return null
const V=function(e,t,n){let r=null!=e?e:"live"
return"live"===r&&s(n)&&n.getTime()-t.getTime()>216e5&&(r="happening"),r}(null!==(A=C(t,"badgeKind"))&&void 0!==A?A:void 0,N,$),G=function(e,t,n,r){const i=[],s=Oe(n)
if((0,Cs.isNothing)(s))return[]
const o=e.loc.string("AppEvents.FormattedDate.SevenDaysOrMore.DateFormat"),a=e.loc.uppercased(e.loc.formatDate(o,n)),u=new QO(!1,void 0,null!=a?a:void 0,void 0,void 0)
i.push(u)
const c=new Date(s)
c.setDate(c.getDate()-6)
const l=e.loc.string("AppEvents.FormattedDate.SixDaysOrLess.DateFormat"),d=e.loc.formatDate(l,n),f=e.loc.uppercased(d),h=new QO(!1,c,null!=f?f:void 0,void 0,void 0)
i.push(h)
const p=new Date(s)
p.setDate(p.getDate()-1)
const w=e.loc.string("AppEvents.FormattedDate.Tomorrow"),g=e.loc.formatDateInSentence(w,Po,n),v=e.loc.uppercased(g),m=new QO(!1,p,null!=v?v:void 0,void 0,void 0)
if(i.push(m),n.getHours()>1||1===n.getHours()&&n.getMinutes()>0){let t
t=n.getHours()>=19?e.loc.string("AppEvents.FormattedDate.Tonight"):e.loc.string("AppEvents.FormattedDate.Today")
const r=e.loc.formatDateInSentence(t,Po,n),o=e.loc.uppercased(r),a=new QO(!1,null!=s?s:void 0,null!=o?o:void 0,void 0,void 0)
i.push(a)}const b=new Date(n)
let A
A="available"===(b.setHours(b.getHours()-1),t)?"AppEvents.FormattedDate.AvailableIn.MinutesCountdown":"AppEvents.FormattedDate.StartsIn.MinutesCountdown"
const y=new QO(!1,b,void 0,n,A)
let O,P
switch(i.push(y),t){case"available":O=e.loc.string("AppEvents.FormattedDate.NowAvailable"),P=!1
break
case"happening":O=e.loc.string("AppEvents.FormattedDate.HappeningNow"),P=!1
break
default:O=e.loc.string("AppEvents.FormattedDate.Live"),P=!0}const I=new QO(P,n,O,void 0,void 0)
if(i.push(I),null!==r){const t=new QO(!1,r,e.loc.string("AppEvents.FormattedDate.EventEnded"),void 0,void 0)
i.push(t)}return i}(e,V,N,$),W=new ZO(t.id,null!=I?I:void 0,null!=T?T:void 0,D,null!=j?j:void 0,F,N,$,k,null!=B?B:void 0,L,r,G,_,R)
if(s(M)){const n={...f,id:M.id,inAppEventId:t.id,relatedSubjectIds:[M.id]}
W.notificationConfig=Jt(e,t,W,n,!0)}return a&&s(M)&&(W.clickAction=Kt(e,t,M,W,f,p)),W}function tn(e,t,n,r){const i=Ut(0,t,n)
return(0,ks.isNothing)(i)||(0,ks.isNothing)(r)?null:$t(e,null==i?void 0:i.type,null==i?void 0:i.periodDuration,r)}function nn(e){switch(e.type){case xm:return Ks.AppEvent
case Wg:return Ks.ContingentOffer
case Zg:return Ks.OfferItem
default:return null}}function rn(e){switch(e.type){case xm:return Yf
case Wg:case Zg:return kc
default:return null}}function sn(e,t,n,i,a,u,c,l){const d=nn(t),f={...a,targetType:rn(t)}
switch(d){case Ks.AppEvent:return function(e,t,n,i,a,u,c,l){const d=function(e,t,n,i,a,u,c,l){var d,f
const h=Ht(e,t,Xg),p=zt(e,t,Gg,!0,!0),w=v(i),g=null!==(d=null==p?void 0:p.preview)&&void 0!==d?d:h
let m=Am,b=!0,A=!1
s(g)&&(b=S(g.backgroundColor),A=S(g.backgroundColor,10),m=b?Am:Fv)
const y=nt(0,Ks.AppEvent,t.id,n.id,c,null!==(f=a.recoMetricsData)&&void 0!==f?f:null),O={...a,pageInformation:y,locationTracker:{rootPosition:0,locationStack:[]},targetType:qf},P={...O,id:n.id,inAppEventId:t.id,relatedSubjectIds:[n.id]}
w.notificationConfig=Jt(e,t,i,P,!1)
const I=function(e,t,n,r){var i,o
const a=C(t,wm)
if((0,Cs.isNothing)(a)||0===a.length)return null
const u=null!==(i=n.moduleArtwork)&&void 0!==i?i:null===(o=n.moduleVideo)||void 0===o?void 0:o.preview
let c=e.loc.string(Oo)
c===Oo&&(c=n.subtitle)
const l=function(e,t,n,r,i,s){return Ds.context("shareSheetDataForAppEvent",()=>{const e=new Pb(t,n,s)
return new Sb(e,r,void 0)})}(0,n.title,c,a,0,u)
if(!s(l))return null
const d=function(e,t,n){var r
const i=[]
if((null==n?void 0:n.length)>0){const t=Lt(e,n)
s&&i.push(t)}if(t.startDate.getTime()<=Date.now())return i
if(e.host.clientIdentifier===Nb)return i
const o=new mA(um)
o.title=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_TITLE"),o.message=e.loc.string("APP_EVENTS_CALENDAR_NOT_AUTHORIZED_DETAIL"),o.isCancelable=!0,o.buttonTitles=[e.loc.string(Ao)],o.buttonActions=[new oA("prefs:root=Privacy&path=CALENDARS",!0)]
let a=!1
if(s(t.endDate)){const e=Oe(t.startDate),n=Oe(t.endDate),r=t.endDate.getTime()-t.startDate.getTime(),i=216e5
n.getTime()>e.getTime()&&r>i&&(a=!0)
const s=8634e4
e.getTime()===n.getTime()&&r>=s&&(a=!0)}const u=new EA(t.startDate,t.endDate,a,t.title,null===(r=t.lockup)||void 0===r?void 0:r.title,t.detail,n,o,"free")
u.title=e.loc.string("SHARE_SHEET_ADD_TO_CALENDAR"),u.artwork=qe(e,"systemimage://calendar.circle")
const c=new bA("com.apple.AppStore.createCalendarEventActivity",u)
return i.unshift(c),i}(e,n,a),f=new AA(l,d)
return ct(e,f,{...r,targetType:Zv,actionType:Lh,idType:tm}),f}(e,t,i,P),T=b?Am:Fv,E=Yt(e,t,n,w.title,T,Vw,!1,O,u,c,!1,!1)
if(r(E))return null
w.lockup=E
const _=new eP(w,h,p,I,m,A)
return tt(e,_,y,e=>{o(c)&&Jb.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),_}(e,t,n,i,a,c,l),f=new Wy("appEventDetail")
return f.title=i.title,f.pageData=d,f.animationBehavior=u,a&&a.pageInformation&&(f.referrerUrl=a.pageInformation.pageUrl),f}(e,t,n,i,f,u,c,l)
case Ks.ContingentOffer:return function(e,t,n,i,a,u,c,l){const d=function(e,t,n,i,a,u,c,l){var d,f
const h=qt(e,t,Xg),p=v(i)
let w=Am,g=!0
s(h)&&(g=S(h.backgroundColor),w=g?Am:Fv)
const m=nt(0,Ks.ContingentOffer,t.id,n.id,c,null!==(d=a.recoMetricsData)&&void 0!==d?d:null),b={...a,pageInformation:m,locationTracker:{rootPosition:0,locationStack:[]}},A=g?Am:Fv,y=Yt(e,t,n,null!==(f=p.title)&&void 0!==f?f:void 0,A,Vw,!1,b,u,c,!1,!1)
if(r(y))return null
p.offerLockup=y,p.trunkAppIcon=i.trunkAppIcon
const O=new iP(p,null!=h?h:void 0,w)
return O.backButtonActionMetrics.addMetricsData(Xt(e,Np,m,b.locationTracker)),O.learnMoreActionMetrics.addMetricsData(Xt(e,fp,m,b.locationTracker,i.learnMoreTitle)),O.closeButtonActionMetrics.addMetricsData(Xt(e,Pd,m,b.locationTracker)),tt(e,O,m,e=>{o(c)&&Jb.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),O}(e,t,n,i,a,c,l),f=new Wy("contingentOfferDetail")
return f.title=i.title,f.pageData=d,f.animationBehavior=u,a&&a.pageInformation&&(f.referrerUrl=a.pageInformation.pageUrl),f}(e,t,n,i,f,u,c,l)
case Ks.OfferItem:return function(e,t,n,i,s,a,u,c){const l=function(e,t,n,i,s,a,u,c){var l,d
let f=qt(e,t,Xg)
f=null
const h=Am,p=v(i),w=nt(0,Ks.OfferItem,t.id,n.id,u,null!==(l=s.recoMetricsData)&&void 0!==l?l:null),g={...s,pageInformation:w,locationTracker:{rootPosition:0,locationStack:[]}},m=Am,b=Yt(e,t,n,null!==(d=p.title)&&void 0!==d?d:void 0,m,Vw,!1,g,a,u,!1,!1)
if(r(b))return null
p.offerLockup=b
const A=e.loc.string("Winback.AdditionalInfoButton.Title"),y=ee(e,t,Bp),O=C(t,Sd)
let P;(0,ks.isSome)(O)&&(0,ks.isSome)(y)&&(P=function(e,t,n,r){if((0,ks.isNothing)(n))return
const i=C(n,$m),s=(0,ks.isSome)(i)?Fh+i+Mh:void 0,o=C(n,Dw),a=(0,ks.isSome)(o)?o+Qf:void 0,u=Fh+e.loc.string("Promotion.Terms.Title")+Mh
let c
const l=e.loc.string(To)
if((0,ks.isSome)(i)&&(0,ks.isSome)(r)){const n={"@@redemptionDate@@":e.loc.formatDate(l,r),"@@skuName@@":i}
c=Qt(C(t,Vh),n)}const d=[s,a,u,c].filter(ks.isSome).join(Qf)
return new Tb(d,Fg)}(e,t,y,new Date(O)))
const I=new oP(p,void 0,void 0,h,!1,A,P)
return I.backButtonActionMetrics.addMetricsData(Zt(e,Np,w,g.locationTracker)),I.learnMoreActionMetrics.addMetricsData(Zt(e,fp,w,g.locationTracker,A)),I.closeButtonActionMetrics.addMetricsData(Zt(e,Pd,w,g.locationTracker)),tt(e,I,w,e=>{o(u)&&Jb.shared.addReferralContextToMetricsFieldsIfNecessary(e)}),I}(e,t,n,i,s,u,c),d=new Wy("offerItemDetail")
return d.title=i.title,d.pageData=l,d.animationBehavior=a,s&&s.pageInformation&&(d.referrerUrl=s.pageInformation.pageUrl),d}(e,t,n,i,f,u,c,l)
default:return null}}function on(e,t,n,r,i,s,a){if(!o(i)&&e.client.deviceType!==Fm)return t
let u
if(e.client.isiOS){const e=new pA(n,ym)
u=new TA(r,i,e)}else u=new oA(i)
const c=v(a)
if(c.actionType=Mw,c.actionDetails={actionUrl:i},ct(e,u,c,!0,Lm),t instanceof hA)return t.openAction=u,t.includeBetaApps=s,t
{const e=new hA(n,t)
return e.openAction=u,e.includeBetaApps=s,e}}function an(e,t,n=!1,r=!1,i=!0){const s=n?"contentIconTrimmedMonochrome":"contentIconTrimmed",o="brandLogo",a=oe(e,t,cm)
if(r)return d(a,o)
{let e=d(a,s)
return i&&(0,Cs.isNothing)(e)&&(e=d(a,o)),e}}function un(e,t,n){if(!o(t))return null
let r=null
r=e.client.isVision?"bb":(0,ks.isNothing)(n)?"sr":n
const s=Ir(e,t,{cropCode:r,useCase:12,allowingTransparency:!0})
return i(s)?null:s}function cn(e,t,n,s){const o=er(e,t)
if(i(o))return null
const a=e.loc.string("BADGE_CATEGORY_HEADING"),u=e.client.isTV?kw:Bm,c=e.client.isTV?Fc:km,l=new zy(c,bg,{},u,a,o,null,o,a,lv)
if(new Wy(Vm).title=C(t,$g),n&&"tv"!==e.client.deviceType){const n=an(e,t,!0)
if(c===km&&r(n))return null
l.artwork=un(e,n,"bb")}return l}function ln(e,t,n,r){const i=oe(e,t,ql)
if(i){const t=Xr(0,e.host.clientIdentifier)
if(t){const n=d(i,t)
if(n){const t=l(n,Qd),r=c(n,pu),i=c(n,bv),s=c(n,Ov),o=e.loc.string("BADGE_CHART_POSITION_HEADING"),a=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_CHART_POSITION_TITLE").replace("{chartPosition}",t.toString()),u=new zy(mf,mf,{position:e.loc.decimal(t)},Bm,o,r,null,a,r,kg),d=function(e,t,n){return me(e,new jy(e).forType(Wh).addingQuery(Up,Um).addingQuery(Ov,n).addingQuery(bv,t).includingMacOSCompatibleIOSAppsWhenSupported(!0)).toString()}(e,i,s)
if((0,ks.isSome)(d)&&!e.client.isVision){const e=new Wy("topCharts")
e.pageUrl=d,u.clickAction=e}return u}}}return null}function dn(e,t,n,r){if(!e.client.isVision)return null
if(!jr(e,t))return null
let i="",s=""
const o=kr(e,t)
if(Gr(o,Tm))i="DESIGNED_FOR_PAD",s=na
else{if(!Gr(o,Cm))return null
i="DESIGNED_FOR_PHONE",s=ra}const a=e.loc.string(i),u=new zy(km,bg,{},Bm,null,a,null,null,a)
return u.artwork=qe(e,s),u}function fn(e,t,n,r){const i=C(t,Zo)
if(i){const r={contentRating:i},s=F(t,"contentRatingsBySystem.appsBrazil.rank"),o=ei(e,null!=s?s:void 0)
let a
o&&(r.contentRatingResource=o),a=n&&!e.client.isVision?e.loc.string(bf):e.loc.string(Af)
const u=e.loc.string("BADGE_AGE_RATING_HEADING"),c=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_AGE_RATING_TITLE"),l=e.client.isTV?kw:Bm
return new zy(vf,vf,r,l,u,a,void 0,i,c,kg)}return null}function hn(e,t,n,r){var i
return e.host.isTV?function(e,t,n,r){if(e.host.isTV){let n=null,r=null,i=null
switch(ht(e,t)){case Ad:r=e.loc.string("BADGE_SIRI_REMOTE_REQUIRED_OR_CONTROLLER_OPTIONAL_HEADING"),i=e.loc.string(Tp),n=new zy(wu,wu,{},Bm,r,i,null,null,i,kg)
break
case yd:r=e.loc.string("BADGE_SIRI_REMOTE_REQUIRED_HEADING"),i=e.loc.string(Tp),n=new zy(gu,gu,{},Bm,r,i,null,null,i,kg)
break
case Wf:r=e.loc.string("BADGE_MFI_REQUIRED_HEADING"),i=e.loc.string(Tp),n=new zy(vu,vu,{},Bm,r,i,null,null,i,kg)
break
case bd:r=e.loc.string(yf),i=e.loc.string(Tp),n=new zy(mu,mu,{},Bm,r,i,null,null,i,kg)}return n&&(n.clickAction=$n(e)?new SA(Wv):new yA(new Yy(Gm,Wv))),n}return null}(e,t):null!==(i=pn(e,t))&&void 0!==i?i:wn(e,t)}function pn(e,t,n,r){return e.client.isiOS?function(e,t,n,r){if(dt(e,t)){const t=e.loc.string(yf),n=e.loc.string("ProductPage.Badge.GameController.Recommended"),r=new zy(Sp,Sp,{},Bm,t,n,null,null,n,kg)
return r.clickAction=$n(e)?new SA(Wv):new yA(new Yy(Gm,Wv)),r}return null}(e,t):e.client.isVision?function(e,t,n,r){if(ft(e,t)){const t=e.loc.string(yf),n=e.loc.string("BADGE_MFI_REQUIRED"),r=new zy(Sp,Sp,{},Bm,t,n,null,null,n,kg)
return r.artwork=qe(e,Of),r.clickAction=new SA(Wv),r}return null}(e,t):null}function wn(e,t,n,r){return function(e,t,n,r){if(!function(e,t){switch(ht(e,t)){case bd:case Wf:case yd:case Ad:case Yo:return!0
default:return!1}}(e,t)||ft(e,t)||dt(e,t))return null
{const t=e.loc.string(yf),n=e.loc.string(Tp),r=new zy(Sp,Sp,{},Bm,t,n,null,null,n,kg)
return e.client.isVision&&(r.artwork=qe(e,Of)),r.clickAction=$n(e)?new SA(Wv):new yA(new Yy(Gm,Wv)),r}}(e,t)}function gn(e,t,n,i){const o=ee(e,t,mv),a=e.loc.string("BADGE_DEVELOPER_HEADING"),u=C(t,$g),c=e.client.isTV?kw:Bm,l=e.client.isTV?Fc:km,d=new zy(l,mv,{},c,a,u,null,u,a,lv)
if(n&&"tv"!==e.client.deviceType){const t=an(e,o,!0)
l===km&&r(t)?e.client.isVision?d.artwork=qe(e,"systemimage://person.fill"):d.artwork=qe(e,Pf,26,26):d.artwork=un(e,t)}const f=Qr(0,o)
if(s(f)){const n=new Wy(Vm)
n.title=C(t,$g),n.pageUrl=f,ct(e,n,{targetType:Mv,id:o.id,actionType:Dm,pageInformation:i.pageInformation,locationTracker:i.locationTracker}),d.clickAction=n}return d}function vn(e,t,n,r){if(jr(e,t))return null
const i=oe(e,t,Ow)
if(i){const r=c(i,$d)
if(r&&r===Vd){if(e.client.isVision){const n=e.loc.string(bu),r=new zy(km,Cv,{},Bm,null,n,null,null,n)
return r.artwork=qe(e,"systemimage://laurel.leading"),r.trailingArtwork=qe(e,"systemimage://laurel.trailing"),r.clickAction=new SA(_v,tw,nw,t.id),r}{let r,i
r="Games"===k(t,al)[0]?e.loc.string("EDITORIAL_BADGE_GAMES"):e.loc.string("EDITORIAL_BADGE_APPS"),i=n?e.loc.string("EDITORS_CHOICE_RIBBON_HEADING"):e.loc.string(bu)
const s=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_EDITORS_CHOICE"),o=new zy(Cv,Cv,{},Bm,i,r,null,s,r)
return $n(e)?o.clickAction=new SA(e.featureFlags.isEnabled(Tg)?Cv:_v):o.clickAction=new yA(new Yy(Gm,mm)),o}}}return null}function mn(e,t,n,r){if(!e.client.isVision)return null
if(!le(e,t,th))return null
const i=e.loc.string("PRODUCT_PAGE_BADGE_HIGH_MOTION_HEADING"),s=e.loc.string("PRODUCT_PAGE_BADGE_HIGH_MOTION_CAPTION"),o=new zy(zl,zl,{},Bm,i,s,null,s,i,lv)
return n&&"tv"!==e.client.deviceType&&(o.artwork=qe(e,Au)),o}function bn(e,t,r,i){const s=ae(e,t,yu),o=(a=s).length<=0?null:{tag:c(n(a,"0.tag")).split("-")[0].toUpperCase(),name:c(n(a,"0.name"))}
var a
if(!o)return null
const u={paragraphText:o.tag}
let l
const d=s.length
l=d>1?e.loc.string("BADGE_LANGUAGE_CAPTION").replace("{number_other_languages}",e.loc.formattedCount(d-1)):o.name
const f=e.loc.string("BADGE_LANGUAGE_HEADING")
return new zy(Xw,mh,u,Bm,f,l,null,null,l,kg)}function An(e,t,n,r){if(e.host.isWatch)return null
const i=de(e,t,"minPlayers"),o=de(e,t,"maxPlayers")
if(!s(i)||!s(o))return null
if(i<=0||o<=0||i>o)return null
const a=e.loc.string(Ou),u=On(e,i,o,!1),c=On(e,i,o,!0),l=e.loc.string(Ou),d={paragraphText:yn(e,i,o)},f=e.client.isTV?kw:Bm
return new zy(Xw,"multiplayer",d,f,a,u,null,c,l,kg)}function yn(e,t,n){return t===n?t<=32?e.loc.formattedCount(t):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MIN_AND_MAX_LIMIT").replace(Yl,e.loc.formattedCount(32)):n<=32?e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_DEFINITE_LIMIT").replace(Yl,e.loc.formattedCount(t)).replace(Pu,e.loc.formattedCount(n)):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER_INDEFINITE_MAX_LIMIT").replace(Yl,e.loc.formattedCount(t)).replace(Pu,e.loc.formattedCount(32))}function On(e,t,n,r){return 1===t&&1===n?e.client.isVision?e.loc.string("BADGE_PLAYERS_CAPTION_PLAYER"):e.loc.string("BADGE_PLAYERS_CAPTION_SINGLE"):1===t||r?e.client.isVision?e.loc.string("BADGE_PLAYERS_CAPTION_PLAYERS"):e.loc.string("BADGE_PLAYERS_CAPTION_MULTIPLAYER"):e.loc.string("BADGE_PLAYERS_CAPTION_REQUIRED")}function Pn(e,t,n,r){if(!e.client.isVision)return null
if(!N(t,Qv))return null
let i
const s=Ae(c(bt(e,t),Hp))
if(null!==s){const n=If,r=e.loc.formatDate(n,s),o=pi(e,t,null)
i=(0,ks.isSome)(o)?o:e.loc.string("BADGE_PREORDER_DATE").replace(Jl,r)}const o={paragraphText:e.loc.string("BADGE_PREORDER_TITLE")}
return new zy(Yg,Yg,o,Bm,null,i,null,null,i)}function In(e,t,n,r){if(n&&e.host.isWatch)return null
const i=D(t,Ep)
let s=null
const o=ze(e,t)
if(!o&&i&&i.value&&i.ratingCount){const t=l(i,"value"),n=Math.round(10*t)/10,r=e.loc.decimal(n,1),o=l(i,"ratingCount"),a=e.loc.formattedCount(o)
let u
u=e.client.isVision?a:e.loc.stringWithCount("ProductPage.BadgeRating.Caption.ShortTemplate",o).replace(Kl,a)
const c=e.loc.stringWithCount("ProductPage.BadgeRating.Caption.LongTemplate",o).replace(Kl,a).replace("{rating}",r),d=e.loc.string("PRODUCT_ACCESSIBILITY_BADGE_STAR_RATING").replace("{starCount}",r)
s=new zy(Kw,Kw,{rating:n,ratingFormatted:r},Bm,u,u,c,d,u)}else{if(n)return null
const t=e.loc.string(Iu)
if(o&&t!==Iu)s=new zy(Kw,Kw,{},Bm,null,t,null,t)
else if(!o){const t=e.loc.string("BADGE_NOT_ENOUGH_RATINGS_CAPTION")
s=new zy(Kw,Kw,{},Bm,null,t,null,t)}}if(s){let n
return n=e.client.isVision?new SA(_v,tw,nw,t.id):new SA(_v),s.clickAction=$n(e)?n:new yA(new Yy(Gm,mm)),s}return null}function Sn(e,t,n,r){const i=e.client.isWatch?km:bh,s=bh,o={contentRating:n},a=e.client.isTV?kw:Bm,u=e.loc.string(`ProductPage.Badge.AgeRating.${r}.Heading`)
let c
c=e.client.isVision?e.loc.string(`ProductPage.Badge.AgeRating.${r}.Heading`):t?e.loc.string(bf):e.loc.string(Af)
const l=n,d=e.loc.string(`ProductPage.Badge.AgeRating.${r}.AX.Caption`)
return new zy(i,s,o,a,u,c,void 0,l,d,kg)}function Tn(e,t,n,r){if(e.props.isNotEnabled(qo))return function(e,t,n,r){const i=F(t,Su),s=ti(e,null!=i?i:void 0)
if((0,Cs.isSome)(i)&&(0,Cs.isSome)(s)){const t=Sn(e,n,s,"AU"),r=ei(e,i)
return(null==t?void 0:t.type)===km&&(0,Cs.isSome)(r)&&(t.artwork=qe(e,`resource://${r}`,26,26)),t}const o=F(t,Tu),a=ti(e,null!=o?o:void 0)
if((0,Cs.isSome)(o)&&(0,Cs.isSome)(a)){const t=Sn(e,n,a,"FR"),r=ei(e,o)
return(null==t?void 0:t.type)===km&&(0,Cs.isSome)(r)&&(t.artwork=qe(e,`resource://${r}`,26,26)),t}const u=F(t,Eu),c=C(t,_u)
if((0,Cs.isSome)(u)&&(0,Cs.isSome)(c))return function(e,t,n,r){const i=ei(e,n)
if((0,Cs.isNothing)(i))return
const s=km,o=bh,a={contentRating:r},u=e.client.isTV?kw:Bm,c=e.loc.string("ProductPage.Badge.AgeRating.KR.Heading")
let l,d
l=t&&!e.client.isVision?e.loc.string(bf):e.client.isVision?e.loc.string("ProductPage.Badge.AgeRating.KR.Heading"):e.loc.string(Af),d=e.client.isTV?void 0:r
const f=e.loc.string("ProductPage.Badge.AgeRating.KR.AX.Caption"),h=new zy(s,o,a,u,c,l,void 0,d,f,kg)
return h.isMonochrome=!1,h.artwork=qe(e,`resource://${i}`,26,26),h}(e,n,u,c)}(e,t,n)
const i=F(t,Su),s=C(t,"contentRatingsBySystem.appsAustralia.name")
if((0,Cs.isSome)(i)&&(0,Cs.isSome)(s))return En(e,n,"AU",i,s,!1)
const o=F(t,Tu),a=C(t,"contentRatingsBySystem.appsFrance.name")
if((0,Cs.isSome)(o)&&(0,Cs.isSome)(a))return En(e,n,"FR",o,a,!1)
const u=F(t,Eu),c=C(t,_u)
return(0,Cs.isSome)(u)&&(0,Cs.isSome)(c)?En(e,n,"KR",u,c,!0):void 0}function En(e,t,n,r,i,s){const o=ti(e,r),a=ei(e,r)
if((0,Cs.isNothing)(a)||(0,Cs.isNothing)(o))return
const u=km,c=bh,l={contentRating:o},d=e.client.isTV?kw:Bm,f=e.loc.string(`ProductPage.Badge.AgeRating.${n}.Heading`)
let h,p
h=t&&!e.client.isVision?e.loc.string(bf):e.client.isVision?e.loc.string(`ProductPage.Badge.AgeRating.${n}.Heading`):e.loc.string(Af),p=e.client.isTV?void 0:i
const w=e.loc.string(`ProductPage.Badge.AgeRating.${n}.AX.Caption`),g=new zy(u,c,l,d,f,h,void 0,p,w,kg)
return g.isMonochrome=!s,g.artwork=qe(e,`resource://${a}`,26,26),g}function _n(e,t,n,r){return t?Ds.context("badgesFromLookupResponse",()=>{let i,s=!1
return N(t,Qv)?i=e.client.isVision?_P:IP:e.client.isTV?i=RP:e.client.isVision?i=EP:n?(i=TP,(e.host.isiOS||e.host.isMac)&&-1===i.indexOf(vn)&&i.splice(1,0,vn),s=!0):i=SP,function(e,t,n,r,i,s){const o=[]
for(const i of t){const t=i(e,n,r,s)
t&&o.push(t)}if(i&&o.some(e=>e.key===mf)){const e=o.findIndex(e=>e.key===bg)
e>=0&&o.splice(e,1)}return o}(e,i,t,n,s,r)}):null}function Rn(e,t,n,a,u,c){const l=D(t,Bc)
let f=[],h=[],p=function(e,t){let n
if(ar(e,t)){const r=Br(0,t,e.appleSilicon.isSupportEnabled),i=jr(e,t),s=kr(e,t),o=qr(e,t,e.appleSilicon.isSupportEnabled,e.appleSilicon.isRosettaAvailable),a=zr(e,s,e.client.deviceType,r,i,o),u=e.loc.deviceDisplayName(e)
a&&u&&(n=e.loc.string("InfoList.Requirements.Summary").replace("{deviceName}",u))}return n}(e,t)
const w=le(e,t,Lo,he(e))
if(o(l)){const t=function(e){const t=[hv,wv,Hh,Fm,Pg,$p,Mm],n=function(e,t,n){let r=null
switch(t){case Cm:r=hv
break
case Tm:r=wv
break
case Fm:r=Fm
break
case"tv":r=$p
break
case Mm:r=Mm
break
case pm:r=Pg}return s(n)&&n===Hh&&(r=Hh),r}(0,e.client.deviceType,e.host.deviceModel)
if(s(n)){const e=t.indexOf(n)
e>0&&(t.splice(e,1),t.unshift(n))}return t}(e)
for(const n of t){const t=d(l,n)
if(o(t)){const r=Dn(0,t,e.appleSilicon.isSupportEnabled&&n===Fm&&w&&!e.appleSilicon.isRosettaAvailable)
s(r)&&(f.push(r[0]),h.push(r[1]))}}!s(p)&&f.length>0&&(p=f[0].text)}else{const n=function(e,t){const n=ue(e,t,"requirementsString")
return r(n)?null:[new Py(n),new Iy(n)]}(e,t)
s(n)&&(f=[n[0]],h=[n[1]])}if(i(f))return null
const g=u?"":e.loc.string("Requirements"),v=new Oy(g,f,h,p)
return e.client.isVision&&(v.leadingArtwork=qe(e,lu),v.prefersSmallLeadingArtwork=!0),v}function Dn(e,t,n){var r
const i=null!==(r=c(t,"deviceFamily"))&&void 0!==r?r:void 0
let s=c(t,"requirementString")
const u=a(t,"devices")
if(n){const e=c(t,"rosettaUnavailableRequirementString")
o(e)&&(s=e)}if((0,Cs.isNothing)(s))return null
const l=[]
for(const e of u)l.push("\u2022\t\u2068"+e+"\u2069")
const d=l.length>0?l.join("\n"):void 0
return[new Py(s,i,void 0,d),new Iy(s,{heading:i,listText:d})]}function kn(e,t){if(!e.client.isVision)return null
const n=new Wy("annotationDetail"),r=v(t)
return r.shouldAlwaysPresentExpanded=!0,n.pageData=r,n}function Cn(e,t,n){return new Sy(n,void 0,void 0,void 0,void 0,void 0,void 0,void 0,{type:"canPerformAppAction",appAction:e,appCapabilities:t})}function xn(e,t,n=null){return Ds.context("descriptionFromData",()=>{r(n)&&(n=z(e,t))
let i=function(e,t,n){return ge(e,t,n,ko)}(e,t,n)
i||(i="")
let s=ue(e,t,Dw)
s||(s="")
let o=""
i.length>0&&s.length>0&&(o="\n\n")
const a=i+o+s
if(a.length>0){const e=new Tb(a)
return e.isCollapsed=!0,e}return null})}function Nn(e,t){return o(D(t,ww))}function Fn(e,t,n,i){const s=hr(e,t,n,Ne(e,t,n.icon,null),i,!0)
!function(e,t,n){var i,s,o,a,u
const c=null!==(s=null===(i=t.searchAdOpportunity)||void 0===i?void 0:i.searchAd)&&void 0!==s?s:t.searchAd
if(r(c))return
null===(o=t.clickAction)||void 0===o||o.actionMetrics.clearAll(),t.clickAction&&ct(e,t.clickAction,n,!0)
const l=n.pageInformation,d={actionType:"ad_transparency"};(null==l?void 0:l.iAdInfo)&&Object.assign(d,l.iAdInfo.clickFields)
const f=mr(e,t.adamId,Lm,d)
null!==(u=null===(a=null==l?void 0:l.iAdInfo)||void 0===a?void 0:a.shouldIncludeAdRotationFields)&&void 0!==u&&u&&f.includingFields.push(Zh),c.transparencyAction.actionMetrics.addMetricsData(f)}(e,n,s),function(e,t,n,r){if(!t||!r)return
dr(e,t,n)
const i=De(r.fastImpressionsFieldsForCurrentItem(n.locationTracker,n.adSlotOverride))
if((0,Cs.isSome)(t.impressionMetrics)){Object.assign(t.impressionMetrics.fields,i)
const e=u(n.disableFastImpressionsForAds)
t.impressionMetrics=new iA(t.impressionMetrics,!e)}(0,Cs.isSome)(t.impressionMetrics)&&(t.impressionMetrics.fields[Hd]=nf)}(e,n,s,s.pageInformation.iAdInfo)}function Mn(e,t,n){let i=et(0,t);(r(i)||0===i.length)&&(i=e.random.nextUUID(),function(e,t){e.console.log(`[Ads] ${t}`),e.client.buildType===Vp&&e.isAvailable(Zm)&&s(e.ads.debugLog)&&(r(kP)&&s(e.ads.isNativeAdLoggingEnabled)&&(kP=e.ads.isNativeAdLoggingEnabled()),kP&&e.ads.debugLog(t))}(e,`Error: instanceId was null or empty. Assigned ${i}`))
const o=D(t,ww),a=C(t,"iad.impressionId"),u=C(t,"iad.privacy"),c=C(t,jd),l=new fP(u)
l.title=e.adsLoc.string("IAD_PRIVACY_MARKER_BUTTON_TITLE")
const d=ai(e,t)?Ap:Bd,f=N(t,Qv)?Yg:Bm,h=jn(0,n),p=new qy(i,t.id,c,d,"markerPress",f,h),w=Ln(i,n),g=Bn(0,l,p)
return new dP(i,o,w,a,g)}function Ln(e,t){const n=null==t?void 0:t.baseFields.pageId,r=typeof n===dm?n:_m
return{placed:{adInstanceId:e,pageIdentifier:r},pageEnter:{pageIdentifier:r},pageExit:{pageIdentifier:r},onScreen:{adInstanceId:e},offScreen:{adInstanceId:e},visible:{adInstanceId:e},completed:{adInstanceId:e}}}function Bn(e,t,n){const r=new RA(n),i=new aA([r,t])
return i.title=t.title,i}function jn(e,t){const n=null==t?void 0:t.iAdInfo
if(r(n))return sg
const i=n.placementType
switch(i){case Ng:return Xo
case Ag:return"searchAds"
case Im:case Vv:case Iv:return Xo
default:throw new Error(`This method should never be called with value: ${i}`)}}function Un(e,t,n){return Ds.context("createProductPageSidePackFromResponse",()=>{if(!e.client.isSidepackingEnabled)return null
const a=function(e,t,n){const r=C(t,wm),i=C(t,$m),s=C(t,$g)
let o=null
n&&(o=n.iAdClickFields)
const a=function(e,t,n,r,i){var s
const o=new mP({pageType:t,pageId:n,page:`${t}_${n}`,pageDetails:r})
if(i){const t=vP.placementTypeFromPlacementId(e,c(i,Pw))
o.iAdInfo=new vP(e,t,vP.createInitialSlotInfos(e,t,null,null),null!==(s=c(i,Sw))&&void 0!==s?s:void 0),o.iAdInfo.applyClickFieldsFromPageRequest(n,i)}return o}(e,Jw,t.id,`${s}_${i}`,o)
return a.pageUrl=r,new DP(a,{rootPosition:0,locationStack:[]})}(e,t,n),h=function(e,t,n,a,h,p,w,g=!1){return Ds.context("createProductPageSidePack",()=>{var g
let v
s(a)&&(v=a.clientIdentifierOverride)
const m=t.id,b=C(t,$m),A=N(t,dw),y=ze(e,t),O=ai(e,t),P={pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker,id:m,isAdvert:!!n.metricsPageInformation.iAdInfo&&n.metricsPageInformation.iAdInfo.iAdIsPresent},I=new nO,E=new ky,_=x(t,Qv)
_&&s(n)&&s(n.metricsPageInformation)&&(n.metricsPageInformation.offerType=Yg,n.metricsPageInformation.offerReleaseDate=Ot(0,t)),E.adamId=m,E.bundleId=c(t,Kv),I.uber=function(e,t,n){const a=Tr(e,t,n)
if(e.client.isVision&&a!==rv)return null
const u=ai(e,t),l=function(e,t){return!!e.client.isVision||t&&(e.client.isiOS||e.client.isMac)}(e,u)?gm:Ko,d=new aP(l)
if(d.artwork=Kr(e,t,{supportsArcade:u}),e.client.isiOS&&(d.compactArtwork=Kr(e,t,{supportsArcade:u,prefersCompactVariant:!0})),d.video=function(e,t,n,i,a){let u=[]
if(o(i))u=i
else switch(e.client.deviceType){case Fm:case"tv":u=["splashVideo16x9"]
break
case Tm:u=["splashVideo4x3"]
break
case pm:u=["productUberMotion16x9"]
break
default:u=["splashVideo3x4"]}let l=null,d=null
for(const n of u)if(l=oe(e,t,[sm,n]),d=oe(e,t,[sm,n,Aw]),o(l))break
const f=Ir(e,d,{useCase:21,withJoeColorPlaceholder:!0,cropCode:"sr"})
if(s(l)){const t=c(l,Jv)
if(r(t))return null
let n,i
return e.host.isiOS||e.host.isMac||e.host.isTV?(n={prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},i={muteUnmute:!0}):(n={},i={}),new _b(t,f,{allowsAutoPlay:!0,looping:!0,canPlayFullScreen:!1,showPlaybackControls:!1,playbackControls:n,autoPlayPlaybackControls:i})}return null}(e,t),s(d.video)&&(d.video.playbackId=function(e){return`ProductPage.${e.id}.productUberVideoPlaybackId`}(t)),(e.client.isTV||e.client.isVision&&a===rv)&&(d.iconArtwork=Sr(e,t,{useCase:10,withJoeColorPlaceholder:e.client.isTV,allowingTransparency:!e.client.isTV},n),e.client.isVision&&(0,ks.isNothing)(d.artwork)&&(0,ks.isNothing)(d.video)&&(d.style="background")),u&&i(d.video)&&i(d.artwork)&&!e.client.isVision){const r=function(e,t,n,r=null,i=null,s){return function(e,t,n){const r=[]
if(n&&n.length>0){const i=n.map(e=>e.mediaPlatform)
for(const s of n){const n=[]
for(const e of s.artwork){const t=new Ey
t.screenshot=e,n.push(t)}const o=s.mediaPlatform,a=new _y(n,o,i,Mr(e,o),xr(e,t,i),Nr(e,t,i))
r.push(a)}}return r}(e,t,_r(e,t,n,r,s,i))}(e,t,11,(e.client.deviceType,null),z(e,t),n)
if(r.length>0&&r[0].items.length>0){const e=r[0].items[0]
d.video=e.video,d.artwork=e.screenshot}}return i(d.compactArtwork)&&e.client.isiOS&&(d.compactArtwork=d.artwork),d.isValidUber(e.client.isTV,e.client.isVision)?d:null}(e,t,v)
const R=I.uber&&I.uber.style===gm
if(E.icon=Sr(e,t,{useCase:10,withJoeColorPlaceholder:void 0},v),I.title=b,I.isIncomplete=!0,E.title=b,E.subtitle=Jn(e,t),E.developerTagline=ue(e,t,yv),I.regularPriceFormatted=C(t,"regularPriceFormatted"),I.logoArtwork=function(e,t){let n=null,r=null
if("tv"!==e.client.deviceType)return null
n=Ho,r="bb"
const i=oe(e,t,n)
return s(i)&&s("bb")?Ir(e,i,{cropCode:"bb",useCase:0,withJoeColorPlaceholder:!0}):null}(e,t),I.navigationBarIconArtwork=function(e,t,n){return e.client.isVision?Sr(e,t,{useCase:10},n):null}(e,t,v),y||(E.rating=F(t,nl)),e.client.isTV&&o(I.uber)){let e
s(I.uber.video)&&s(I.uber.video.preview)?e=I.uber.video.preview.backgroundColor:s(I.uber.artwork)?e=I.uber.artwork.backgroundColor:s(I.uber.iconArtwork)&&(e=I.uber.iconArtwork.backgroundColor),I.hasDarkUserInterfaceStyle=!!s(e)&&S(e,50)}E.children=Yn(e,t,{metricsOptions:P,artworkUseCase:1})
const D=function(e,t,n,r,i,a,c){var l
const d=bt(e,t),f=ue(e,t,Kv),h=x(t,Qv),p=At(e,d,t,h,!1,Ne(e,t,n,null==a?void 0:a.clientIdentifierOverride),i,zg,c,a.webBrowser)
if(null!==(l=null==a?void 0:a.webBrowser)&&void 0!==l&&l&&e.props.enabled(Ip))return{buttonAction:new wA(t.id),offerAction:p}
let w
if(o(p)){s(a)&&(p.lineItem=a.iAdLineItem)
const n=o(a)?a.clientIdentifierOverride:null
if(w=It(e,p,t,h,i,zg,n),s(a)&&o(w)){const n=he(e),r=ge(e,t,z(e,t),ah,n),s=o(r)&&!u(a.isCppDeepLinkDisabled),c=o(a.externalDeepLinkUrl)
if(s||c){const t=s?r:a.externalDeepLinkUrl
w=on(e,w,p.adamId,f,t,!1,i)}}}return{buttonAction:w,offerAction:p}}(e,t,E.icon,0,P,a,p)
if(E.buttonAction=D.buttonAction,_){let n
I.theme=hd
let r=null
if(O)n="",r=e.loc.uppercased(pi(e,t,e.loc.string(Ql)))
else if(n=e.loc.string(Ql),s(D.offerAction.expectedReleaseDate)){const n=If,i=e.loc.formatDate(n,D.offerAction.expectedReleaseDate),s=e.loc.string("PREORDER_EXPANDED_OFFER_SUBTITLE").replace(Jl,i)
r=pi(e,t,s)}else e.client.isTV&&(r=e.loc.string(Ql))
I.expandedOfferDetails=new Jy(n,r)}let k,M
R&&O&&(I.theme=nm),R&&O?(k=nm,M=Eh):(k=ig,M=zg)
const L=e.client.isVision?"navigationBar":zg,B=ig,j=O?Ap:ym,U=null!==(g=null==a?void 0:a.webBrowser)&&void 0!==g&&g?tu:zg
let $
E.offerDisplayProperties=Ft(e,D.offerAction,j,t,_,!1,k,M,null,null,U,!1,!1),I.titleOfferDisplayProperties=Ft(e,D.offerAction,j,t,_,!1,B,L,null,null,U)
const V=ee(e,t,mv),W=Qr(0,V)
s(W)&&($=new Wy(Vm),$.title=C(t,$g),$.pageUrl=W,ct(e,$,{targetType:Lm,id:V.id,actionType:Dm,pageInformation:n.metricsPageInformation,locationTracker:n.locationTracker})),I.developerAction=$,I.shareAction=jt(e,t,n.metricsPageInformation,n.locationTracker,v),E.tertiaryTitle=Kn(e,t),E.tertiaryTitleAction=Xn(e,t),E.tertiaryTitleArtwork=Qn(e,t)
const H={appPlatforms:kr(e,t),clientIdentifierOverride:v,offerButtonShouldBeDisabled:!1,productTitle:I.title,metricsPageInformation:n.metricsPageInformation,metricsLocationTracker:n.locationTracker,webBrowser:a.webBrowser},q=function(e,t,n){let s=null,a=null,u=null,c=null,l=null,d=null,f=!1,h=null
const p=le(e,t,ao),w=le(e,t,uo)
if((p||w)&&(s=e.client.isMac?e.loc.string("APP_UPDATE_REQUIRED_MACOS"):e.client.isVision?e.loc.string("ProductPage.Banner.UpdateRequired.Vision"):e.loc.string("APP_UPDATE_REQUIRED_IOS"),n.offerButtonShouldBeDisabled=!0),null===s&&pt(e,t,1024)&&(s=e.loc.string("OFFER_WATCH_ONLY_BANNER"),n.offerButtonShouldBeDisabled=!0),null===s&&!ar(e,t))if(s=e.loc.string(su),e.client.isTV)s=e.loc.string(ou)
else if(e.client.isVision){const r=Rn(e,t,0,0,!1);(0,ks.isSome)(r)&&(u=kn(e,r),(0,ks.isSome)(u)&&(u.title=e.loc.string(Kp),s=e.loc.string(ip).replace(sp,u.title))),n.offerButtonShouldBeDisabled=!0}else if(e.client.isiOS||e.client.isMac){if($n(e)){const t=new SA(hm)
t.title=e.loc.string(Kp),t.indexId=Qp,c=t}else{const t=new Yy(Gm,hm),n=new yA(t)
n.title=e.loc.string(Kp),n.indexId=Qp,c=n}s=e.loc.string(ip).replace(sp,c.title),n.offerButtonShouldBeDisabled=!0}if(null===s&&pt(e,t,36)&&(s=e.loc.string(au),n.offerButtonShouldBeDisabled=!0),pt(e,t,512)){const n=$r(e,t,e.appleSilicon.isSupportEnabled),r=function(e,t){if(t.type!==Em)return!1
const n=te(t,Um)
if(!n||0===n.length)return!1
let r=0
for(const t of n)pt(e,t,512)&&r++
return 0!==r&&r!==n.length}(e,t)
switch(e.client.deviceType){case Fm:const i=r?"ProductPage.Banner.Bundle.SomeAppsRequireMinimumOS.macOS":"UNSUPPORTED_MACOS_VERSION"
s=e.loc.string(i).replace(jw,n)
break
case Cm:case Tm:const o=r?"ProductPage.Banner.Bundle.SomeAppsRequireMinimumOS.iOS":uu
s=e.loc.string(o).replace(jw,n)
break
case"tv":const a=r?"ProductPage.Banner.Bundle.SomeAppsRequireMinimumOS.tvOS":"UNSUPPORTED_TVOS_VERSION"
s=e.loc.string(a).replace(jw,n)
break
case Mm:const u=ue(e,t,xh),c=r?"ProductPage.Banner.Bundle.SomeAppsRequireMinimumOS.watchOS":cu
s=e.loc.string(c).replace(jw,u)
break
case pm:const l=r?"ProductPage.Banner.Bundle.SomeAppsRequireMinimumOS.visionOS":"UNSUPPORTED_VISIONOS_VERSION"
s=e.loc.string(l).replace(jw,n)
break
default:s=e.loc.string(au)}if(e.client.isPhone&&le(e,t,Rw)){const n=ue(e,t,xh)
s=e.loc.string(cu).replace(jw,n)}}if(e.client.isWatch&&pt(e,t,2048)){const n=G(t,fe(e,t),Av)
s=e.loc.string(uu).replace(jw,n)}if(pt(e,t,128))if(n.offerButtonShouldBeDisabled=!0,s=e.loc.string(su),e.client.isTV)s=e.loc.string(ou)
else if(e.client.isVision){const r=Rn(e,t,0,0,!1);(0,ks.isSome)(r)&&(u=kn(e,r),(0,ks.isSome)(u)&&(u.title=e.loc.string(Kp),s=e.loc.string(ip).replace(sp,u.title))),n.offerButtonShouldBeDisabled=!0}else if(e.client.isiOS||e.client.isMac)if($n(e)){const t=new SA(hm)
t.title=e.loc.string(Kp),t.indexId=Qp,c=t,s=e.loc.string(ip).replace(sp,t.title)}else{const t=new Yy(Gm,hm),n=new yA(t)
n.title=e.loc.string(Kp),n.indexId=Qp,c=n,s=e.loc.string(ip).replace(sp,n.title)}if(pt(e,t,8192)){if($n(e)){const t=new SA(hm)
t.title=e.loc.string(Kp),t.indexId=Qp,c=t}else{const t=new Yy(Gm,hm),n=new yA(t)
n.title=e.loc.string(Kp),n.indexId=Qp,c=n}s=e.loc.string(ip).replace(sp,c.title)}(function(e,t){if(e.client.deviceType!==Fm)return!1
if(t.type!==Em)return!1
const n=te(t,Um)
if(0===n.length)return!1
let i=!1,s=!1
for(const t of n){if(r(t.attributes))continue
const n=Hr(e,t)
n.runsOnAppleSilicon&&!n.runsOnIntel?i=!0:s=!0}return i&&s})(e,t)&&!e.appleSilicon.isSupportEnabled&&(s=e.loc.string("ProductPage.Banner.Bundle.SomeAppsRequireAppleSilicon"))
const g=N(t,Qv)
li(e,t)&&(s=g?e.host.isWatch?e.loc.string("UNSUPPORTED_COMPANION_CONFIGURATION_PREORDER"):e.loc.string("ProductPage.WatchOS.PreOrderRequiresiPhone"):e.loc.string("UNSUPPORTED_COMPANION_CONFIGURATION","Requires iPhone"),n.offerButtonShouldBeDisabled=!0)
const v=ue(e,t,xh)
if(null===s&&n.clientIdentifierOverride===kb&&hi(e,v)&&(s=e.loc.string("ProductPage.Banner.PairedWatchOSVersionBelowMinimum").replace(jw,v)),re(e,t,Pg)&&!e.client.isVision&&!e.client.isCompanionVisionApp){const t=e.loc.string("BANNER_VISION_ONLY_APP_LEARN_MORE_LINK")
u=function(e,t,n,r){const s=e.bag.visionOnlyAppLearnMoreEditorialItemId
if(i(s))return null
const o=new Wy(Hv)
return o.title=t,o.pageUrl=`https://apps.apple.com/story/id${s}`,ct(e,o,{id:fp,targetType:am,actionType:Dm,pageInformation:n,locationTracker:r}),o}(e,t,n.metricsPageInformation,n.metricsLocationTracker),s=function(e,t,n){return t&&n?e.loc.string("BANNER_VISION_ONLY_APP_WITH_LINK").replace(Fw,t):e.loc.string("BANNER_VISION_ONLY_APP_NO_LINK")}(e,t,u),c=null,l=qe(e,lu),d=T(oh),f=!0}kt(e,t)&&!xt(e)?(n.offerButtonShouldBeDisabled=!0,s=e.loc.string("ProductPage.Banner.Companion.VisionDeviceRequired")):e.client.isCompanionVisionApp&&!kt(e,t)&&(n.offerButtonShouldBeDisabled=!0,s=e.loc.string("ProductPage.Banner.Companion.RemoteDownloadUnavailable"))
const m=vt(e,t),b=mt(e,"product-page-banner")
if((null===s||!n.offerButtonShouldBeDisabled)&&m&&b){const t=e.loc.string("ProductPage.ExternalPurchasesBanner.LearnMore")
if(u=function(e,t,n,r){const s=e.bag.externalPurchasesLearnMoreEditorialItemId
if(i(s)||!e.bag.enableExternalPurchases)return null
const o=new Wy(Hv)
return o.title=t,o.pageUrl=`https://apps.apple.com/story/id${s}`,ct(e,o,{id:fp,targetType:am,actionType:Dm,pageInformation:n,locationTracker:r}),o}(e,t,n.metricsPageInformation,n.metricsLocationTracker),s=function(e,t,n){if(t&&n&&!e.client.isTV&&!e.client.isWatch){if(e.client.isMac||e.client.isVision){if((0,ks.isSome)(e.bag.externalPurchasesProductPageBannerTextVariant)){const n=`ProductPage.ExternalPurchasesBanner.WithLink_WithoutNewline.Variant${e.bag.externalPurchasesProductPageBannerTextVariant}`
return e.loc.string(n).replace(Fw,t)}return e.loc.string("ProductPage.ExternalPurchasesBanner.WithLink_WithoutNewline").replace(Fw,t)}if((0,ks.isSome)(e.bag.externalPurchasesProductPageBannerTextVariant)){const n=`ProductPage.ExternalPurchasesBanner.WithLink.Variant${e.bag.externalPurchasesProductPageBannerTextVariant}`
return e.loc.string(n).replace(Fw,t)}return e.loc.string("ProductPage.ExternalPurchasesBanner.WithLink").replace(Fw,t)}if((0,ks.isSome)(e.bag.externalPurchasesProductPageBannerTextVariant)){const t=`ProductPage.ExternalPurchasesBanner.NoLink.Variant${e.bag.externalPurchasesProductPageBannerTextVariant}`
return e.loc.string(t)}return e.loc.string("ProductPage.ExternalPurchasesBanner.NoLink")}(e,t,u),c=null,e.bag.externalPurchasesIncludeProductPageBannerIcon?"secondaryInfoCircle"===e.bag.externalPurchasesProductPageBannerIconVariant?(l=qe(e,"systemimage://info.circle"),d=T(oh)):(l=qe(e,pf),d=e.client.isVision?T(oh):T("systemRed")):(l=null,d=null),e.client.isTV)if((0,ks.isSome)(e.bag.externalPurchasesProductPageBannerTextVariant)){const t=`ProductPage.ExternalPurchasesBanner.Focused.Variant${e.bag.externalPurchasesProductPageBannerTextVariant}`
a=e.loc.string(t)}else a=e.loc.string("ProductPage.ExternalPurchasesBanner.Focused")
f=!0}if(e.props.isNotEnabled(Ip)&&(null===s||!n.offerButtonShouldBeDisabled)&&(0,ks.isSome)(n.webBrowser)&&n.webBrowser&&(s=e.props.enabled("productPageSetDefaultBrowserOnPurchase")?e.loc.string("ProductPage.Banner.DefaultBrowser.Message"):e.loc.string("ProductPage.Banner.WebBrowser.Message"),l=qe(e,"systemimage://gear"),d=T(oh),h=wf),(null==s?void 0:s.length)>0)return new Sy(s,a,u,c,l,d,f,h)
if(!n.offerButtonShouldBeDisabled){const n=Ur(e,t)
if(o(n))return function(e,t){const n=e.loc.string("ProductPage.Banner.ExternalBrowser.Message")
let r=n,i=n,s=n,o=n,a=n
return[Nw].includes(e.client.buildType)&&(r+="\n(Internal: unknown)",i+="\n(Internal: buyOrGet)",s+="\n(Internal: redownload)",o+="\n(Internal: update)",a+="\n(Internal: open)"),new Ty(Cn(gf,t,r),Cn(gf,t,i),Cn(gf,t,s),Cn(Ml,t,o),Cn("launch",t,a))}(e,n)}return null}(e,t,H)
q instanceof Sy?I.banner=q:q instanceof Ty&&(I.appStateBanner=q)
const Y=E.offerDisplayProperties
H.offerButtonShouldBeDisabled&&o(Y)&&(E.offerDisplayProperties=Y.newOfferDisplayPropertiesChangingAppearance(!1,uw))
const J=!pt(e,t,512)
if(!A&&!H.offerButtonShouldBeDisabled&&J){const n=function(e,t){return Ds.context("updateOfferDataFromData",()=>{const n=ae(e,t,og)
if(0===n.length)return null
for(const e of n)if(c(e,Bg)===Ml)return e
return null})}(e,t)
I.updateBuyParams=c(n,Zw),I.externalVersionIdentifier=de(e,t,Xl)}if(e.client.isTV&&(E.developerTagline?I.descriptionHeader=e.loc.string("PRODUCT_DESCRIPTION_HEADER").replace(Jp,I.title).replace("{subtitle}",E.developerTagline):I.descriptionHeader=I.title,I.description=xn(e,t)),O&&(E.editorialTagline=e.loc.string("APPLE_ARCADE")),e.client.isTV||e.client.isWatch||e.client.isVision){const r=e.client.isVision
I.badges=_n(e,t,r,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation})}if(I.lockup=E,I.appPlatforms=kr(e,t),s(h)){const n=function(e,t,n,o,a,u,h,p,w,g,v,m,b,A,y){const O=nn(t),P={...g,targetType:rn(t)}
switch(O){case Ks.AppEvent:return en(e,t,n,!1,!1,u,h,!0,!1,P,!0,m,null,A,!1)
case Ks.ContingentOffer:return function(e,t,n,o,a,u,c,l){var h,p,w
if(t.type!==Wg)return null
const g=qt(e,t,zf)
if(r(g))return null
const v=S(g.backgroundColor)?Am:Fv,m=C(t,Fp),b=C(t,yv),A=C(t,Bv),y=e.loc.string("ContingentOffer.AdditionalInfoButton.Title")
if((0,ks.isNothing)(m)||(0,ks.isNothing)(A))return null
const O=ee(e,t,Mp)
if((0,ks.isNothing)(O)||i(d(O,Ch)))return null
const P=Gt(e,t)
if((0,ks.isNothing)(P)||(0,ks.isNothing)(null==P?void 0:P.title))return null
const I=ee(e,t,Kf),T=N(I,$h),E=Yt(e,t,I,"",o,a,!1,u,false,null,false,!0)
if((0,ks.isNothing)(E))return null
const _=ee(e,t,"trunk-app")
let R;(0,ks.isSome)(_)&&(0,ks.isSome)(b)&&(null==b?void 0:b.length)>0&&(R=null!==(h=qt(e,_,km))&&void 0!==h?h:Ht(e,_,km)),(0,ks.isSome)(b)&&(null==b?void 0:b.length)>0&&(R=null!==(p=function(e,t){var n,r
const i=f(t,"meta.associations.trunks")
if((0,ks.isNothing)(i))return null
const s=i.data[0]
if(null!==(r=null===(n=null==s?void 0:s.meta)||void 0===n?void 0:n[xc])&&void 0!==r&&r){const t=oe(e,s,Nc)
return(0,ks.isNothing)(t)?null:Ir(e,t,{useCase:1,style:Lp})}return null}(e,t))&&void 0!==p?p:R)
const D=function(e,t,n){const r=Fh+C(n,$m)+Mh,i=C(n,Dw)+Qf,s=Fh+e.loc.string("ContingentOffer.Terms.Title")+Mh,o=C(t,Vh)
return new Tb([r,i,s,o].join(Qf),Fg)}(e,t,O),k=new nP(g,v,T,y,P.title,null!=b?b:void 0,null!==(w=P.description)&&void 0!==w?w:void 0,A,m,D,null!=R?R:void 0,E)
return k.title=P.rawTitle,s(I)&&(k.clickAction=Kt(e,t,I,k,u,false)),k}(e,t,0,u,h,P)
case Ks.OfferItem:return function(e,t,n,o,a,u,f,h){var p,w,g,v,m,b
if(t.type!==Zg)return null
const A=C(t,sv)
if("resubscription"!==A&&A!==Xf)return null
const y=Fv,O=ee(e,t,Bp)
if((0,ks.isNothing)(O))return null
const P=d(O,md),I=bt(e,O)
if((0,ks.isNothing)(P))return null
const S=null!==(p=null!=n?n:ee(e,t,ym))&&void 0!==p?p:ee(e,O,ym),T=N(S,$h),E=C(t,Sd)
if((0,ks.isNothing)(E)||!function(e){if((0,ks.isNothing)(e)||i(e))return!1
const t=new Date(e)
if(r(t))return!1
const n=new Date
return!(t.getTime()<=n.getTime())}(E))return null
const _=new Date(E)
let R=function(e,t){if((0,ks.isNothing)(t))return null
const n=Oe(t),i=new Date,s=(a=n,r(o=i)||r(a)?null:Math.floor((a.getTime()-o.getTime())/864e5))
var o,a
if((0,ks.isNothing)(s))return null
const u=function(e,t){var n,r
return(null===(n=Oe(e))||void 0===n?void 0:n.getTime())===(null===(r=Oe(t))||void 0===r?void 0:r.getTime())}(i,t)
if(s>90)return e.loc.string(Eo)
if(s>5){const n=i.getFullYear()!==t.getFullYear()?e.loc.string("OfferItems.FormattedDate.NextYear.DateFormat"):e.loc.string("OfferItems.FormattedDate.FiveDaysOrMore.DateFormat"),r=e.loc.uppercased(e.loc.formatDate(n,t))
return(0,ks.isNothing)(r)?null:e.loc.string("OfferItems.FormattedDate.FiveDaysOrMore.Title").replace(_o,r)}return s>1?e.loc.string("OfferItems.FormattedDate.FiveDaysOrLess.Title").replace(mw,e.loc.formattedCount(s)):1!==s||u?e.loc.string("OfferItems.FormattedDate.Today.Title"):e.loc.string("OfferItems.FormattedDate.Tomorrow.Title")}(e,_);(0,ks.isNothing)(R)&&(R=e.loc.string(Eo))
let D=Sr(e,O,{useCase:3,withJoeColorPlaceholder:!0,overrideTextColorKey:jh})
i(D)&&(D=qe(e,"systemimage://questionmark.circle",200,200,{type:Og,red:0,green:0,blue:0,alpha:1}),D.style=fw)
const k=Ut(0,c(P,gw),l(P,vw)),x=(0,ks.isSome)(k)?Vt(e,k.type,k.periodDuration*k.periodCount):void 0,F=null===(w=tn(e,c(I,gw),l(I,vw),c(I,Gw)))||void 0===w?void 0:w.replace("/","/\u2060"),M=null===(g=tn(e,c(P,gw),l(P,vw),c(P,Gw)))||void 0===g?void 0:g.replace("/","/\u2060"),L=e.loc.string(To),B={"@@redemptionDate@@":e.loc.formatDate(L,_),"@@skuName@@":null!==(v=C(O,$m))&&void 0!==v?v:"@@skuName@@","@@discountedPrice@@":null!=M?M:"@@discountedPrice@@","@@regularPricePerDuration@@":null!=F?F:"@@regularPricePerDuration@@","@@discountDuration@@":null!=x?x:"@@discountDuration@@","@@payUpfrontPrice@@":null!==(m=c(P,Gw))&&void 0!==m?m:"@@payUpfrontPrice@@"},j=C(t,Fp)
if((0,ks.isNothing)(j))return null
const U=Qt(C(t,"title"),B),$=new Tb(U,Fg,So),V=Qt(C(t,yv),B),G=Qt(null!==(b=C(t,"details"))&&void 0!==b?b:"",B)
let W
if(s(S)&&(W=Yt(e,t,S,"",o,a,!1,u,false,null,false,!0)),(0,ks.isNothing)(W))return null
const H=new sP(null,null,y,T,$,R,V,G,j,_,D,W)
return H.title=U,s(S)&&(H.clickAction=Kt(e,t,S,H,u,false)),H}(e,t,n,u,h,P)
default:return null}}(e,h,t,0,0,Am,nm,0,0,P,0,!1,0,!1)
if(s(h)&&n instanceof XO){const r=n
I.appPromotionDetailPageFlowAction=sn(e,h,t,r,P,av,!1,w)}}!function(e,t,n,r,s,a){if(t.shelfMapping[Pm]=new By(Zl,"productTopLockup"),"tv"!==e.client.deviceType&&!e.client.isVision){const s={developerAction:t.developerAction}
t.shelfMapping[fm]=function(e,t,n,r){return Ds.context("descriptionShelf",()=>{if(i(t))return null
const s=new By("productDescription"),o=function(e,t){return t?Ds.context("productDescriptionLinksFromData",()=>{const n=[],r=ue(e,t,kd)
if(r){const t=new oA(r,!1),i=e.loc.string("PRODUCT_DEVELOPER_WEBSITE")
n.push(new My(i,t,"safari"))}const i=ue(e,t,Dd)
if(i){const t=new oA(i,!1),r=e.loc.string("DEVELOPER_SUPPORT")
n.push(new My(r,t,"questionmark.circle"))}return n}):null}(e,t),a=xn(e,t)
if(null===a)return null
const u=new Ry(a,o,r.developerAction)
return s.items=[u],e.client.isWatch&&(s.title=e.loc.string("PRODUCT_DESCRIPTION")),n.addImpressionsToShelf(e,s,fm),s})}(e,n,r,s)}if(e.client.isiOS||e.client.isMac){const i={useInlineUberStyle:t.uber&&t.uber.style===gm}
t.shelfMapping[Mv]=function(e,t,n,r){if($n(e)){const r=new By("productBadge"),i=_n(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation})
return r.items=i,r.isHorizontal=!0,n.addImpressionsToShelf(e,r,Mv),r}{const i=new By(Mv),s=_n(e,t,!0,{locationTracker:n.locationTracker,pageInformation:n.metricsPageInformation}),o=!r.useInlineUberStyle,a=!1,u=r.useInlineUberStyle,c=new Ly(s,o,a,u,"justified")
return i.items=[c],i.isHorizontal=!0,n.addImpressionsToShelf(e,i,Mv),i}}(e,n,r,i)}!function(e,t,n,r,i){const s=function(e,t,r){return e.map(e=>e.shelfId===Rm&&r?n:e.shelfId===Rm?n[0]?[n[0]]:[]:[e]).reduce((e,t)=>e.concat(t)).map(e=>e.createShelfIdList()).reduce((e,t)=>e.concat(t))},a=Ke(0,!0,e.host.platform,r,!1,!1,i),u=Ke(0,!1,e.host.platform,r,!1,!1,i),c=Ke(0,!0,e.host.platform,r,!0,!1,i),l=Ke(0,!1,e.host.platform,r,!0,!1,i),d=Ke(0,!1,e.host.platform,r,!1,!0,i),f=Ke(0,!1,e.host.platform,r,!0,!0,i)
t.shelfOrderings.purchasedOrdering=s(a,0,!1),t.shelfOrderings.purchasedOrdering_ExpandedMedia=s(a,0,!0),t.shelfOrderings[tO]=s(u,0,!1),t.shelfOrderings.notPurchasedOrdering_ExpandedMedia=s(u,0,!0),t.shelfOrderings.purchasedOrdering_Compact=s(c,0,!1),t.shelfOrderings.purchasedOrdering_ExpandedMedia_Compact=s(c,0,!0),t.shelfOrderings.notPurchasedOrdering_Compact=s(l,0,!1),t.shelfOrderings.notPurchasedOrdering_ExpandedMedia_Compact=s(l,0,!0),t.shelfOrderings.downloadingOrdering=s(d,0,!1),t.shelfOrderings.downloadingOrdering_ExpandedMedia=s(d,0,!0),t.shelfOrderings.downloadingOrdering_Compact=s(f,0,!1),t.shelfOrderings.downloadingOrdering_ExpandedMedia_Compact=s(f,0,!0),t.defaultShelfOrdering=tO
for(const e of Object.keys(t.shelfMapping))o(t.shelfMapping[e])&&(t.shelfMapping[e].id=e)}(e,t,[],ai(e,n),s)}(e,I,t,n,a),I.uber&&!e.client.isVision&&(I.presentationOptions.push("prefersOverlayedPageHeader"),I.presentationOptions.push("prefersNonStandardBackButton")),I.alwaysAllowReviews=Ye(e,t)
const K=null==a?void 0:a.iAdDismissAdActionMetrics
if((0,Cs.isSome)(K)){const e=new qy(c(K.instanceId),c(K.adamId),c(K.bundleId),c(K.advertType),c(K.invocation),c(K.purchaseType),c(K.reportingDestination)),t=new RA(e)
I.pageDisappearedAction=t
const n=new qy(c(K.instanceId),c(K.adamId),c(K.bundleId),c(K.advertType),Qo,c(K.purchaseType),c(K.reportingDestination))
I.lockup.buttonAction=Bn(0,I.lockup.buttonAction,n)}return I})}(e,t,a,n)
return function(e,t,n){r(n)||(t.pageMetrics.addData(it(e,n,void 0),[Vs.PageInvocationPoint.backButton]),r(t.pageMetrics.pageFields)&&(t.pageMetrics.pageFields={}))}(e,h,a.metricsPageInformation),h})}function $n(e){return e.featureFlags.isEnabled("shelves_2_0_product")||e.client.isiOS||e.client.isTV||e.client.isVision||!1}function Vn(e){return f(function(e){return a(e,"meta.associations.editorial-cards.data")}(e)[0])}function Gn(e,t,n,i,a,u,l,d,f,h){return Ds.context("flowPreviewActionsConfigurationForProductFromData",()=>{if(e.client.deviceType!==Cm&&e.client.deviceType!==Tm)return null
const p=Wn(e,t)
if(!o(p))return null
const w=[]
let g=null,m=null
const b=N(p,Qv)
if(n){const t=ai(e,p),n=qn(0,p.type,t),o=function(e,t,n,i,s,o,a){return r(t)||t.type!==Um?null:At(e,bt(e,t),t,n,!1,Ne(e,t,Sr(e,t,null,o),o),a,Eg)}(e,p,b,0,0,i,l)
m=Ft(e,o,n,p,b,!1,null,null,null,null,Eg)
const a=function(e,t,n,i,s,o,a,u){if(r(n))return null
let c=It(e,n,t,i,o,Eg,s)
return(null==u?void 0:u.length)>0&&(c=on(e,c,n.adamId,null,u,!1,o)),c}(e,p,o,b,i,l,0,d)
s(a)&&s(m)&&(g=w.length,w.push(a))}const A=function(e,t,n){const r=jt(e,t,n.pageInformation,n.locationTracker)
return s(r)?(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SHARE"),r.artwork=qe(e,Rc),r):r}(e,p,u)
s(A)&&w.push(A)
const y=ze(e,p)
if(!b&&!y){if(s(a)&&a instanceof Wy&&(a.pageData instanceof Ky||a.pageData instanceof nO)){const t=function(e,t,n){const r=function(e,t,n){return Ds.context("seeRatingsAndReviewsActionFromData",()=>{const r=v(n)
if(n.pageData instanceof Ky||n.pageData instanceof nO){let i
i=e.client.isVision?new SA(_v,tw,nw,t):new SA(_v)
const s=$n(e)?i:new yA(new Yy(Gm,mm)),o=v(n.pageData)
o.fullProductFetchedAction=s,r.pageData=o}return r})}(e,t.id,n)
return s(r)&&(r.title=e.loc.string("FLOW_PREVIEW_ACTION_SEE_RATINGS_AND_REVIEWS"),r.artwork=qe(e,"systemimage://star"),r.animationBehavior=av),r}(e,p,a)
s(t)&&w.push(t)}if(!re(e,t,$p)){const t=function(e,t,n,r){const i=function(e,t,n,r,i){return Ds.context("writeReviewActionFromData",()=>{const i=t.id
if((null==i?void 0:i.length)>0){const o=t.type===Em,a=F(t,Kw),u=s(a)&&a>0
return function(e,t,n,r,i=!1,s,o){return Ds.context("createWriteReviewAction",()=>{const a=i?e.loc.string("EDIT_REVIEW"):e.loc.string("WRITE_A_REVIEW"),u=function(e,t,n){return function(e,t){const n=ly.from(e),r=c(n.query,hu)
return t&&(null==r?void 0:r.length)>0&&(n.query[hu]=iO[r]||r),n}(e.bag.writeReviewURL,n).param("id",t).build()}(e,t,n)
let l
switch(e.client.deviceType){case Fm:{const e=new gA(t,u)
e.title=a,e.appIcon=r,e.itemDescription=s,e.appName=o,l=e
break}default:if(e.featureFlags.isEnabled("review_composer_redesign")){const n=new gA(t,u)
n.title=a,n.appName=o,n.itemDescription=s,n.appIcon=r,n.artwork=qe(e,Jc),l=n
break}{const n=new Wy("writeReview")
n.title=a,n.pageUrl=u,n.pageData=t,n.presentationContext=_c,n.artwork=qe(e,Jc),l=n
break}}return l})}(e,i,o,void 0,u,n,r)}return null})}(e,t,n,r)
return s(i)&&(i.title=e.loc.string("FLOW_PREVIEW_ACTION_WRITE_REVIEW"),i.artwork=qe(e,Jc)),i}(e,p,f,h)
s(t)&&w.push(t)}}return new Eb(w,m,g)})}function Wn(e,t){return Ds.context(`productDataFromData: ${t.type}`,()=>{switch(t.type){case Um:case Em:return t
case Sm:{const n=te(t,vv)
if(o(n)&&1===n.length){const t=n[0]
return Wn(e,t)}break}case Ld:{const n=te(t,jm)
if(o(n)&&1===n.length){const t=n[0]
return Wn(e,t)}break}default:return null}return null})}function Hn(e,t,n,r,i){if((0,Cs.isNothing)(t)||0===t.length||r.has(t))return null
const s=new xy(Ph)
return s.moduleType=td,(0,Cs.isSome)(t)&&(s.labelText=t,fr(e,s,pr(i,td,s.labelText,rm))),r.add(t),[s]}function qn(e,t,n){return t===jv?n?Nm:"inAppPurchase":n?Ap:ym}function zn(e,t,n,r,i,s){t&&Ds.context("copyDataIntoLockup",()=>{var o,l,d,f,h
const p=N(t,Qv)
if(r.isContainedInPreorderExclusiveShelf&&!p)return null
const w=null!==(o=null==r?void 0:r.attributePlatformOverride)&&void 0!==o?o:he(e),g=z(e,t)
n.productVariantID=J(g),r.metricsOptions.productVariantData=g,n.adamId=t.id
const m=ue(e,t,Kv,null==r?void 0:r.attributePlatformOverride)
n.bundleId=m,n.decorations=[]
let b=null
r&&r.clientIdentifierOverride&&(b=r.clientIdentifierOverride),n.icon=Sr(e,t,{useCase:r.artworkUseCase,withJoeColorPlaceholder:r.useJoeColorIconPlaceholder,overrideTextColorKey:r.overrideArtworkTextColorKey},b,g,r.attributePlatformOverride),r&&r.titleObjectPath?n.title=ue(e,t,r.titleObjectPath,null==r?void 0:r.attributePlatformOverride):n.title=C(t,$m),n.useAdsLocale=r.metricsOptions.isAdvert&&(0,ks.isSome)(e.bag.adsOverrideLanguage)
const A=ai(e,t,null==r?void 0:r.attributePlatformOverride)
A&&function(e){return!e.client.isTV||e.host.clientIdentifier!==mc}(e)&&!r.shouldHideArcadeHeader&&(e.client.isTV?n.decorations.push(Nm):n.heading=r.metricsOptions.isAdvert?e.adsLoc.string(el):e.loc.string(el)),r.shouldShowFriendsPlayingShowcase&&n.decorations.push("showcaseFriendsPlaying")
const y=!A&&!p&&(null===(l=r.isMultilineTertiaryTitleAllowed)||void 0===l||l)
if(r.isSubtitleHidden||function(e,t,n){return Ds.context("isBadgeMultilineFromData",()=>{if(!n)return!1
if(!Br(0,t,e.client.isMac))return!1
if(Zn(e,t))return!1
const r=kr(e,t)
return Gr(r,Tm)||Gr(r,Cm)})}(e,t,y)||(n.subtitle=Jn(e,t,r)),n.tertiaryTitle=Kn(e,t,y,r.hideCompatibilityBadge),n.tertiaryTitleAction=Xn(e,t),n.tertiaryTitleArtwork=Qn(e,t),n.developerTagline=ue(e,t,yv,null==r?void 0:r.attributePlatformOverride),n.editorialTagline=ui(e,t,"tagline",!1,null==r?void 0:r.attributePlatformOverride),n.editorialDescription=ui(e,t,Bm,!1,null==r?void 0:r.attributePlatformOverride),n.shortEditorialDescription=ui(e,t,lg,!1,null==r?void 0:r.attributePlatformOverride),n.ageRating=C(t,Zo),n.productDescription=ue(e,t,Dw,null==r?void 0:r.attributePlatformOverride),!ze(e,t)&&(F(t,tl)>0||!r||!r.hideZeroRatings)){n.rating=F(t,nl)
const i=F(t,tl),s=r.metricsOptions.isAdvert?e.bag.adsOverrideLanguage:null
n.ratingCount=e.loc.formattedCountForPreferredLocale(e,i,s)}const O=at(e,t,r.metricsOptions,r.metricsClickOptions)
Me(e,O,n.title)
const P=bt(e,t,null==r?void 0:r.attributePlatformOverride),I=null!==(d=null==r?void 0:r.includeBetaApps)&&void 0!==d&&d,S=Ne(e,t,n.icon,b),T=v(O),E=At(e,P,t,p,I,S,T,um,null==r?void 0:r.referrerData),_=a(P,rl)
let R=It(e,E,t,p,T,um,b,r.shouldNavigateToProductPage)
const k=ge(e,t,g,ah,w),x=Nn(0,t),M=!x||function(e){const t=u(D(e,ww),"passthroughAdInfo.deepLinkEligible"),n=u(e,"meta.passthroughAdInfo.deepLinkEligible")
return t||n}(t),L=M&&(null==k?void 0:k.length)>0,B=(null===(f=null==r?void 0:r.externalDeepLinkUrl)||void 0===f?void 0:f.length)>0
if(L||B){const i=L?k:r.externalDeepLinkUrl
R=on(e,R,E.adamId,m,i,I,T),(null===(h=r.crossLinkSubtitle)||void 0===h?void 0:h.length)>0&&(n.crossLinkTitle=e.loc.uppercased(C(t,$m)),n.crossLinkSubtitle=r.crossLinkSubtitle)}n.buttonAction=R,n.includeBetaApps=I,n.developerName=C(t,$g),(0,ks.isNothing)(n.developerName)&&(n.developerName=C(t,ea)),n.children=Yn(e,t,r),(0,ks.isSome)(s)&&s(),Le(r.metricsOptions.locationTracker)
const j=Bt(e,t,b)
if(j){const t=new OA,r=v(O)
r.actionType=Lh,r.targetType=Zv,ct(e,t,r)
const i=new Dy
i.shareAction=t,i.shareSheetData=j,n.contextMenuData=i}const U=null!=i?i:lr(e,t)
let $=!1
U&&($=!(Pt(0,bt(e,U))>0))
const V=qn(0,t.type,A)
n.offerDisplayProperties=r?Ft(e,E,V,t,p,r.isContainedInPreorderExclusiveShelf,r.offerStyle,r.offerEnvironment,_[0],$,um,r.shouldNavigateToProductPage,r.metricsOptions.isAdvert,0,r.parentAppData):Ft(e,E,V,t,p,r.isContainedInPreorderExclusiveShelf,null,null,_[0],$,um),r&&r.skipDefaultClickAction||(n.clickAction=sr(e,t,O,{clientIdentifierOverride:b,productVariantData:g,isCppDeepLinkEligible:M})),r&&r.ordinal&&(n.ordinal=r.ordinal)
const G=oe(e,t,Ow,null==r?void 0:r.attributePlatformOverride),W=jr(e,t)
if(G&&!W){const e=c(G,$d),t=e&&e===Vd
n.isEditorsChoice=t}x||(n.flowPreviewActionsConfiguration=Gn(e,t,!1,b,n.clickAction,r.metricsOptions,O,r.externalDeepLinkUrl,n.subtitle,n.title))
const H=hr(e,t,n,S,r.metricsOptions,r.canDisplayArcadeOfferButton)
dr(e,n,H)})}function Yn(e,t,n){const i=Z(t,Um)
return i?function(e,t,n){return r(t)?[]:function(e,t,n){return Ds.context("lockupsFromData",()=>{if(!t)return[]
const i=[]
let o=!1
for(let a=0;a<t.length&&!o;a++){const u=t[a]
if(!M(u)){n.contentUnavailable&&(o=n.contentUnavailable(a,u))
continue}const c=n.lockupOptions
let l=80894
if(n.includeOrdinals){const r=n.ordinalDirection===aa?t.length-a:a+1
c.ordinal=e.loc.decimal(r).toString()}if(s(n.filter)&&(l=n.filter),pt(e,u,l)&&!n.shouldShowOnUnsupportedPlatform)continue
const d=tr(e,u,c)
!r(d)&&d.isValid()&&(i.push(d),Ue(n.lockupOptions.metricsOptions.locationTracker))}return i})}(e,t.data,n)}(e,i,{lockupOptions:n,filter:0}):null}function Jn(e,t,n=null){return(0,ks.isNothing)(t)?null:Ds.context("subtitleFromData",()=>{let r
return n&&n.subtitleObjectPath&&(r=ue(e,t,n.subtitleObjectPath,null==n?void 0:n.attributePlatformOverride)),i(r)&&(r=ue(e,t,yv,null==n?void 0:n.attributePlatformOverride)),r||er(e,t,n)})}function Kn(e,t,n=!1,r){return Ds.context("badgeFromData",()=>{if(r)return null
const i=Br(0,t,e.client.isMac),s=jr(e,t)
if(i||s){let r=""
const s=kr(e,t)
if(Gr(s,Tm)?r="Platform.DesignedForPad":Gr(s,Cm)&&(r="Platform.DesignedForPhone"),(null==r?void 0:r.length)>0)return i&&(Zn(e,t)||(r+=".NotVerified",n&&(r+=".Expanded"))),e.loc.string(r)}return null})}function Qn(e,t){if(jr(e,t)&&e.client.isVision){const n=kr(e,t)
if(Gr(n,Tm))return qe(e,na)
if(Gr(n,Cm))return qe(e,ra)}return null}function Xn(e,t){return Ds.context("badgeActionFromData",()=>{if(!Br(0,t,e.client.isMac))return null
if(Zn(e,t))return null
const n=kr(e,t)
if(!Gr(n,Tm)&&!Gr(n,Cm))return null
const r=new Wy(Hv)
return r.pageUrl=`https://apps.apple.com/story/id${e.bag.appleSiliconMacUnverifiedBadgeEditorialItemId}`,r})}function Zn(e,t){if(!e.appleSilicon.isSupportEnabled)return!0
const n=ce(e,t,ia,lm)
return!!s(n)&&n}function er(e,t,n=null){return Ds.context("categoryFromData",()=>{const r=ue(e,t,wg,null==n?void 0:n.attributePlatformOverride)
if((null==r?void 0:r.length)>0)return r
const i=te(t,ol)
if(i.length>0){let e=i[0]
const t=6014..toString()
if(e.id===t)for(const n of i){const r=C(n,Hd)
if(n.id!==t&&r===t){e=n
break}}return C(e,$m)}{const e=k(t,al)
return e.length>0?e[0]:null}})}function tr(e,t,n){return Ds.context("lockupFromData",()=>{var r,a,u,l,d,f,h,p,w
if(!t)return Ds.unexpectedNull(Pv,pg),null
const g=Nn(0,t)
n.metricsOptions.isAdvert=g
const v=function(e,t){var n
if((0,Cs.isNothing)(t)||(0,Cs.isNothing)(e))return!1
const r=null===(n=je(t))||void 0===n?void 0:n.id
if((0,Cs.isNothing)(r))return!1
const i=function(e,t){var n
const r=(null!==(n={today:[{shelfIdentifier:Im,adEligibleIndex:1}],productPageYMAL:[{shelfIdentifier:pw,adEligibleIndex:0}],searchLanding:[{shelfIdentifier:"R8802",adEligibleIndex:0}],searchResults:[{shelfIdentifier:Bh,adEligibleIndex:0}]}[e])&&void 0!==n?n:[]).find(e=>e.shelfIdentifier===t)
return o(r)&&s(r.adEligibleIndex)?r.adEligibleIndex:void 0}(e,r)
return!(0,Cs.isNothing)(i)&&Be(t)===i}(null===(a=null===(r=n.metricsOptions.pageInformation)||void 0===r?void 0:r.iAdInfo)||void 0===a?void 0:a.placementType,n.metricsOptions.locationTracker)
if(n.metricsOptions.isAdEligible=v,(g||v)&&(null===(l=null===(u=n.metricsOptions.pageInformation)||void 0===u?void 0:u.iAdInfo)||void 0===l||l.apply(e,t)),g&&(null===(f=null===(d=n.metricsOptions.pageInformation)||void 0===d?void 0:d.iAdInfo)||void 0===f||f.setTemplateType(eg)),!M(t))return null
switch(t.type){case jv:return n.offerEnvironment=sa,nr(e,t,n)
case xm:const r=ee(e,t,ym)
if(i(r))return null
const s=new ky
return zn(e,r,s,n),s
case Wg:case Zg:return function(e,t,n){return Ds.context("appPromotionOfferLockupFromData",()=>{var r,i,s
const o=null!==(r=lr(e,t))&&void 0!==r?r:n.parentAppData,a=ur(e,t)
if(N(o,$h)){const r=nr(e,t,n)
r.offerDisplayProperties.titles[Bm]=e.loc.string(oa),r.offerDisplayProperties.isStreamlinedBuy=!0,r.offerDisplayProperties.hasDiscount=!1
const i=D(a,km),s=qt(e,o,km),u=Ir(e,i,{useCase:n.artworkUseCase,withJoeColorPlaceholder:n.useJoeColorIconPlaceholder,style:fw,overrideTextColorKey:n.overrideArtworkTextColorKey})
return r.icon=null!=u?u:s,r}{const r=new ky
zn(e,o,r,n)
const u=at(e,t,n.metricsOptions,n.metricsClickOptions)
Me(e,u,r.title)
const l=ue(e,o,Kv),d=C(a,Ww),f=C(o,ta),h=new fA(d,o.id,l,r.buttonAction,f)
if(h.appTitle=null!==(i=C(o,$m))&&void 0!==i?i:"",h.productTitle=null!==(s=C(a,$m))&&void 0!==s?s:"",t.type===Zg){const e=c(cr(a),sl);(0,ks.isSome)(e)&&e.length>0&&(h.additionalBuyParams="adHocOfferId="+e)}else h.additionalBuyParams="contingentItemId="+t.id
return r.buttonAction=h,Le(n.metricsOptions.locationTracker),r}})}(e,t,n)
default:const o=new ky
return zn(e,t,o,n),(0,ks.isSome)(null===(h=n.metricsOptions.pageInformation)||void 0===h?void 0:h.iAdInfo)&&((g||v)&&function(e,t,n,r,i=!0){if(!r.isAdvert)return void Fn(e,t,n,r)
let s
e.props.enabled(yg)?(n.searchAdOpportunity=function(e,t,n){const r=Mn(e,t,n),i=Ln(r.instanceId,n)
return new lP(r.instanceId,i,r)}(e,t,r.pageInformation),s=n.searchAdOpportunity.searchAd):(n.searchAd=Mn(e,t,r.pageInformation),s=n.searchAd)
const o=ai(e,t)?Ap:Bd,a=jn(0,r.pageInformation),u=C(t,jd),c=N(t,Qv)?Yg:Bm,l=new qy(s.instanceId,t.id,u,o,"advertPressed",c,a)
n.clickAction=Bn(0,n.clickAction,l)
const d=new qy(s.instanceId,t.id,u,o,Qo,c,a)
n.buttonAction=Bn(0,n.buttonAction,d),n.itemBackground="ad",n.offerDisplayProperties&&i&&(n.offerDisplayProperties=n.offerDisplayProperties.newOfferDisplayPropertiesChangingAppearance(!1,ig,"ad")),N(t,"iad.format.userRating")||(n.rating=null,n.ratingCount=null),Fn(e,t,n,r)}(e,t,o,n.metricsOptions),g&&(e.props.enabled(yg)?null===(p=o.searchAdOpportunity)||void 0===p||p.setTemplateType(eg):null===(w=o.searchAd)||void 0===w||w.setTemplateType(eg))),o}})}function nr(e,t,n){return Ds.context("inAppPurchaseLockupFromData",()=>{const r=new Fy
return function(e,t,n,r){t&&Ds.context("copyDataIntoInAppPurchaseLockup",()=>{var i
const s=null!==(i=lr(e,t))&&void 0!==i?i:r.parentAppData,u=N(s,$h),d=ur(e,t)
zn(e,t=d,n,r,s),n.productIdentifier=C(t,Ww),n.parent=tr(e,s,r),n.description=C(t,Dw),n.isVisibleByDefault=N(t,"isMerchandisedVisibleByDefault"),n.isSubscription=N(t,Gd)
const f=bt(e,t),h=a(f,rl)
n.offerDisplayProperties.hasDiscount=h.length>0,n.offerDisplayProperties.subscriptionFamilyId=C(t,"subscriptionFamilyId")
const p=new Wy("inAppPurchaseInstall")
p.presentationContext="presentModalFormSheet"
const w=function(e,t,n){const r=(new CP).param(VA,n).param(ry,t).build()
return`${DA}:/${LA}/${MA}/?${r}`}(0,n.adamId,s.id)
p.pageUrl=w
const g=new Hy
g.parentLockup=v(n.parent),g.lockup=v(n),g.preInstallOfferDescription=function(e,t){const n=a(t,rl)[0]
if(!n)return null
const r=c(n,gw),i=l(n,vw),s=c(t,gw),o=l(t,vw)
if(!r||!s)return null
const u=c(n,Va),d=Ut(0,r,i),f=Ut(0,s,o),h=c(n,Gw).replace(/ /g,"\xa0"),p=c(t,Gw).replace(/ /g,"\xa0")
let w=$t(e,f.type,f.periodDuration,p)
switch(w=w.replace(/\//g,"\u2060/\u2060"),u){case Ga:const t=Vt(e,d.type,d.periodDuration*d.periodCount)
if(t&&w)return e.loc.string("InAppOfferPage.Description.FreeTrialTemplate").replace(xl,t).replace(Nl,w)
break
case Wa:const n=Vt(e,d.type,d.periodDuration*d.periodCount)
if(n&&w)return e.loc.string("InAppOfferPage.Description.PaidUpFrontTemplate").replace(xl,n).replace("@@trialPrice@@",h).replace(Nl,w)
break
case Ha:const r=$t(e,d.type,d.periodDuration,h),i=Vt(e,d.type,d.periodDuration*d.periodCount)
if(i&&w)return e.loc.string("InAppOfferPage.Description.PaidTrialTemplate").replace("@@trialPriceDuration@@",r).replace(xl,i).replace(Nl,w)
break
default:return null}return null}(e,f),p.pageData=g
const m=C(t,Ww),b=ue(e,s,Kv),A=C(s,ta),y=o(cr(t)),O=hr(e,t,n,fw,r.metricsOptions,r.canDisplayArcadeOfferButton)
if(Me(e,O,n.title),u&&y){const i=new fA(m,s.id,b,n.parent.buttonAction)
n.parent&&(i.appTitle=n.parent.title),i.productTitle=n.title,i.streamlineBuyAction=function(e,t,n,r,i){var s
const a={...i.metricsOptions,id:n.id,targetId:n.id,idType:tm,actionDetails:{parentAdamId:n.id}},u=Ne(e,t,r.icon,i.clientIdentifierOverride),l=v(a),d=cr(t),f=bt(e,t),h=bt(e,n),p=new $y(c(h,Zw))
let w=null!==(s=c(d,Zw))&&void 0!==s?s:c(f,Zw)
w+=`&appAdamId=${c(n,"id")}`,w+=`&appExtVrsId=${p.get(Wd,"")}`,w+=`&bid=${ue(e,n,Kv)}`,w+="&bvrs=1.0",w+=`&offerName=${ue(e,t,Ww)}`
const g=c(d,sl)
return o(g)&&(w+=`&adHocOfferId=${g}`),f[Zw]=w,At(e,f,t,!1,!1,u,l,um,null==i?void 0:i.referrerData,!1,n.id)}(e,t,s,n,r),n.buttonAction=i,n.subtitle=C(s,$m)}else if(A){const t=new fA(m,s.id,b,p,A)
n.parent&&(t.appTitle=n.parent.title),t.productTitle=n.title
const i={...r.metricsOptions,id:n.adamId,idType:tm,actionDetails:{parentAdamId:s.id}}
ct(e,t,i),n.buttonAction=t}else{const t=new mA(um)
t.title=e.loc.string("SEED_IN_APP_UNSUPPORTED_MESSAGE_OPTION_1"),t.message="",t.isCancelable=!0,n.buttonAction=t}if(Le(r.metricsOptions.locationTracker),!r||!r.skipDefaultClickAction){const r=ir(e,t,O)
n.clickAction=r,n.productAction=r}!function(e,t,n){t&&(t.impressionMetrics||dr(e,t,n),t.parent&&t.parent.adamId&&(0,Cs.isSome)(t.impressionMetrics)&&(t.impressionMetrics.fields.parentAdamId=_e(t.parent.adamId)))}(e,n,O)},il)}(e,t,r,n),r})}function rr(e,t,n,a,u=null,l){return Ds.context(`actionFromData: ${t.type}`,()=>{switch(t.type){case Um:case Em:return sr(e,t,n,{clientIdentifierOverride:a,externalDeepLinkUrl:u,isCppDeepLinkEligible:l})
case jv:return ir(e,t,n)
case Sm:return function(e,t,n,a,u,l){return i(t)?null:Ds.context(ua,()=>{var d
let f,h
switch(function(e,t){return i(t)?0:Ds.context(ua,()=>{if(function(e){const t=c(e,eh)
return t&&t===Ed}(D(t,am)))return 1
const n=C(t,ca),r=n===ul||n===la
if(N(t,hp)||r)return 2
const i=te(t,gv),s=te(t,vv),a=o(i)&&1===i.length,u=o(s)&&1===s.length
return u&&s[0].type===xm||a&&i[0].type===xm?4:u?3:e.client.isVision&&(0,ks.isSome)(t.href)&&t.href.length>0?5:0})}(e,t)){case 1:return function(e,t,n){return Ds.context("editorialItemExternalLinkActionFromData",()=>{const r=c(D(t,am),wm),i=new oA(r),s=ui(e,t,lg)
if(s)i.title=s
else{const e=new ly(r)
i.title=e.host}return ct(e,i,n),i})}(e,t,n)
case 2:f=Hv
const p=ly.from(C(t,wm))
s(u)&&p.param(JA,JSON.stringify(u)),e.client.isiOS&&(0,ks.isSome)(l)&&!l.isHorizontalShelfContext&&p.param(ty,JSON.stringify(l))
const w=null===(d=Vn(t))||void 0===d?void 0:d.id;(0,ks.isSome)(w)&&p.param(ny,w),h=p.build()
break
case 3:const g=te(t,vv)[0]
return rr(e,g,n,a)
case 4:const v=te(t,gv),m=o(v)&&1===v.length?v[0]:te(t,vv)[0],b=ee(e,m,ym)
if(i(b))return null
const A=en(e,m,b,!1,!1,Am,lv,!1,!1,n,!1,!0,null,!1,!1)
return r(A)||A instanceof Date?null:Kt(e,m,b,A,n,!0)
case 5:f=Vm,h=function(e,t,n){if(!(0,ks.isNothing)(t))return me(e,new jy(e,t).addingQueryValues(void 0)).toString()}(e,t.href)
break
default:f=_m,h=c(D(t,am),wm)}if((0,ks.isNothing)(h))return null
const p=new Wy(f)
p.pageUrl=h
let w=ui(e,t,$m)
return r(w)&&(w=c(t,Bv)),p.title=w,ct(e,p,n),p})}(e,t,n,a)
case _g:return function(e,t,n){return t?Ds.context("editorialPageActionFromData",()=>{const r=t.href
if(i(r))return Ds.unexpectedNull(Pv,dm,uh),null
const s=new Wy(Vm)
return s.pageUrl=r,s.title=function(e,t,n,r=!1){var i
let s
if(r){const r=Vn(t)
M(r)&&(s=ue(e,r,[qg,n]))}return s=null!==(i=null!=s?s:ue(e,t,[pp,n]))&&void 0!==i?i:ue(e,t,[qg,n]),s}(e,t,$m),i(s.title)&&(s.title=C(t,$m)),ct(e,s,n),s}):null}(e,t,n)
case qd:return function(e,t,n){return t?Ds.context("msoActionFromPlatformData",()=>{const r=C(t,wm)
if(!r)return Ds.unexpectedNull(Pv,dm,wm),null
const i=new Wy(sh)
return i.pageUrl=r,i.title=C(t,$m),ct(e,i,n),i}):null}(e,t,n)
case Vg:return function(e,t,n){return t?Ds.context("groupingActionFromData",()=>{if(!t.href)return Ds.unexpectedNull(Pv,dm,uh),null
const r=new Wy(Vm)
return r.pageUrl=me(e,function(e,t){const n=[cm,sm,iv,uv,Av,fg]
e.appleSilicon.isSupportEnabled&&n.push(Sv)
const r=new jy(e,t).includingAttributes(n).includingMacOSCompatibleIOSAppsWhenSupported();(function(e){return e.bag.enableAppEvents&&e.client.isiOS})(e)&&(r.enablingFeature(Uv),r.includingScopedAttributes(xm,[fm,Xg,Gg]),r.includingScopedRelationships(xm,[ym]),r.includingScopedRelationships("editorial-item-shelves",[xm]))
const i=function(e){let t=null
return e.host.clientIdentifier===Cb?t=Dv:e.host.clientIdentifier===kb?t=Mm:e.client.isWatch&&e.client.isTinkerWatch&&(t="tinker"),t}(e)
return s(i)&&r.addingQuery(Cw,i),r}(e,t.href)).toString(),r.title=or(0,t),ct(e,r,n),r}):null}(e,t,n)
default:return function(e,t,n){return t?Ds.context("genericActionFromData",()=>{const r=c(t,Bg),i=C(t,wm)
if(!i)return Ds.unexpectedNull(Pv,dm,wm),null
const s=new Wy(Vm)
return s.pageUrl=i,s.title=r===Vg?or(0,t):C(t,$m),ct(e,s,n),s}):null}(e,t,n)}})}function ir(e,t,n){return Ds.context("iAPActionFromData",()=>{var r
const i=lr(e,t)
if(!i)return null
const o=new Wy(ev),a=ly.from(C(i,wm)),u=J(null!==(r=n.productVariantData)&&void 0!==r?r:z(e,i))
s(u)&&a.param(GA,u)
const c=a.toString(),l=C(t,Ww),d=N(t,Gd)
return o.pageUrl=function(e,t,n,r){const i=(new CP).param(iy,t).param(HA,n).param(sy,r.toString()).build()
return`${DA}:/${LA}/${FA}/?${i}`}(0,c,l,d),o.title=C(t,$m),ct(e,o,n),o})}function sr(e,t,n,r){var a,u,l,d
if(!t)return null
const f=null!==(a=r.clientIdentifierOverride)&&void 0!==a?a:null,h=null!==(u=r.externalDeepLinkUrl)&&void 0!==u?u:null,p=!(null!==(l=r.isCppDeepLinkEligible)&&void 0!==l&&l),g=null!==(d=r.productVariantData)&&void 0!==d?d:z(e,t)
return Ds.context("productActionFromData",()=>{var r,a,u
let l=C(t,wm)
if(!l)return Ds.unexpectedNull(Pv,dm,wm),null
let d={}
const v=new ly(l)
if(n.isAdvert){const i=c(t,da)
null!==i&&i.length>0&&v.param(wP,i)
const s=null===(r=n.pageInformation.iAdInfo)||void 0===r?void 0:r.clickFields
v.param(pP,JSON.stringify(s)),d={iAdClickFields:w(s),iAdLineItem:i}
const o=et(0,t)
if((0,ks.isSome)(o)){const r=ai(e,t)?Ap:Bd,i=jn(0,n.pageInformation),s=C(t,jd),a=N(t,Qv)?Yg:Bm,u=new qy(o,t.id,s,r,"productPageDismissed",a,i)
v.param(gP,JSON.stringify(u)),d.iAdDismissAdActionMetrics=w(u)}}const m=J(g)
s(m)&&v.param(GA,m),d.externalDeepLinkUrl=h,s(h)&&v.param("externalDeepLinkUrl",h),d.isCppDeepLinkDisabled=p,v.param("isCppDeepLinkDisabled",p.toString()),d.clientIdentifierOverride=f,(null==f?void 0:f.length)>0&&v.param(fa,f)
const b=null===(u=null===(a=n.pageInformation)||void 0===a?void 0:a.searchTermContext)||void 0===u?void 0:u.term;(0,ks.isSome)(b)&&v.param(Tv,b),l=v.toString()
const A=new Wy(ev)
A.pageUrl=l,A.pageData=function(e,t,n={}){if(!e.client.isSidepackingEnabled)return null
const r=ai(e,t),a=Un(e,t,n)
return $n(e)?a:function(e,t,n,r){return Ds.context("createProductPageFromShelfBasedProductPage",()=>{var a,u,c,l
const d=new Ky
return d.adamId=t.lockup.adamId,d.bundleId=t.lockup.bundleId,d.icon=t.lockup.icon,d.isEditorsChoice=t.lockup.isEditorsChoice,d.ordinal=t.lockup.ordinal,d.title=t.lockup.title,d.subtitle=t.lockup.subtitle,d.developerTagline=t.lockup.developerTagline,d.editorialTagline=t.lockup.editorialTagline,d.editorialDescription=t.lockup.editorialDescription,d.shortEditorialDescription=t.lockup.shortEditorialDescription,d.rating=t.lockup.rating,d.ratingCount=t.lockup.ratingCount,d.ageRating=t.lockup.ageRating,d.buttonAction=t.lockup.buttonAction,d.offerDisplayProperties=t.lockup.offerDisplayProperties,d.titleOfferDisplayProperties=t.titleOfferDisplayProperties,d.clickAction=t.lockup.clickAction,d.children=t.lockup.children,d.contextMenuData=t.lockup.contextMenuData,d.shelfBackground=t.lockup.shelfBackground,d.searchAd=t.lockup.searchAd,d.searchAdOpportunity=t.lockup.searchAdOpportunity,d.crossLinkTitle=t.lockup.crossLinkTitle,d.crossLinkSubtitle=t.lockup.crossLinkSubtitle,d.tertiaryTitle=t.lockup.tertiaryTitle,d.tertiaryTitleAction=t.lockup.tertiaryTitleAction,d.tertiaryTitleArtwork=t.lockup.tertiaryTitleArtwork,d.flowPreviewActionsConfiguration=t.lockup.flowPreviewActionsConfiguration,d.productDescription=t.lockup.productDescription,d.itemBackground=t.lockup.itemBackground,d.developerAction=t.developerAction,d.logoArtwork=t.logoArtwork,d.navigationBarIconArtwork=t.navigationBarIconArtwork,d.uberArtwork=null===(a=t.uber)||void 0===a?void 0:a.artwork,d.uberArtworkForCompactDisplay=null===(u=t.uber)||void 0===u?void 0:u.compactArtwork,d.uberVideo=null===(c=t.uber)||void 0===c?void 0:c.video,d.uberStyle=null===(l=t.uber)||void 0===l?void 0:l.style,d.media=function(e){const t=[]
for(const n of Object.values(e.shelfMapping))if(Qe(n)){const e=n.contentsMetadata,r=n.items
t.push(new _y(r,e.platform,e.allPlatforms,e.platformDescription,e.allPlatformsDescription,e.allPlatformsDescriptionPlacement))}return t}(t),s(t.shelfMapping[Mv])?d.badges=function(e,t){if(i(null==t?void 0:t.items))return[]
if($n(e))return t.items
{const e=t.items
return e.length>0?e[0].badges:[]}}(e,t.shelfMapping[Mv]):(e.host.isWatch||e.host.isTV)&&(d.badges=t.badges),d.shareAction=t.shareAction,d.pageMetrics=t.pageMetrics,d.pageRenderMetrics=t.pageRenderMetrics,d.isComplete=!t.isIncomplete,d.hasDarkUserInterfaceStyle=t.hasDarkUserInterfaceStyle,d.mediaSectionTitle=e.client.isTV?null:e.loc.string("ProductPage.Section.ScreenshotsPreview.Title"),d.expandedOfferDetails=t.expandedOfferDetails,d.regularPriceFormatted=t.regularPriceFormatted,d.theme=t.theme,d.externalVersionIdentifier=t.externalVersionIdentifier,d.updateBuyParams=t.updateBuyParams,d.appPlatforms=t.appPlatforms,d.descriptionHeader=t.descriptionHeader,d.description=t.description,d.banner=t.banner,d.secondaryBanner=t.secondaryBanner,d.fullProductFetchedAction=t.fullProductFetchedAction,d.appPromotionDetailPageFlowAction=t.appPromotionDetailPageFlowAction,d.pageRefreshPolicy=t.pageRefreshPolicy,d.purchasedOrdering=Je(e,Ke(0,!0,e.host.platform,n,!1,!1,r)),d.notPurchasedOrdering=Je(e,Ke(0,!1,e.host.platform,n,!1,!1,r)),d.shelfMapping=function(e,t){const n={}
for(const r of Xy){let i
i=r===mm?Xe(e,t):t.shelfMapping[r],o(i)&&(n[r]=i)}return n}(e,t),d.alwaysAllowReviews=t.alwaysAllowReviews,d})}(e,a,r,n)}(e,t,d),A.title=C(t,$m),n&&n.pageInformation&&(A.referrerUrl=n.pageInformation.pageUrl)
const y=N(t,Qv)
return ct(e,A,y?{...n,offerType:Yg,offerReleaseDate:Ot(0,t)}:n,!0),A})}function or(e,t){const n=k(t,al)
return o(n)?n[0]:C(t,$m)}function ar(e,t){if(!t)return!1
if(e.client.isWatch||e.client.isCompanionVisionApp)return!0
const n=function(e,t,n){const r=Br(0,t,n),i=jr(e,t)
return ue(e,t,r?Sv:i?"requiredCapabilitiesForRealityDevice":uv)}(e,t,e.appleSilicon.isSupportEnabled)
if(i(n))return!0
const r=n.split(" "),s=jr(e,t)
return e.client.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(r,s)}function ur(e,t){if(!t)return null
switch(t.type){case Wg:return ee(e,t,Mp)
case Zg:return ee(e,t,Bp)}return t}function cr(e){if(!e)return null
const t=d(e,Ch)
if(o(t))return t
const n=d(e,md)
return o(n)?n:null}function lr(e,t){if(!t)return null
switch(t.type){case Wg:return ee(e,t,Kf)
case Zg:const n=ee(e,t,Bp)
return ee(e,n,ym)}return ee(e,t,ym)}function dr(e,t,n){t&&(t.impressionMetrics=new rA(function(e,t){var n,r,a
let u=t.id,c=t.title
if(o(t.anonymizationOptions)){const e=null!==(r=null===(n=t.anonymizationOptions)||void 0===n?void 0:n.anonymizationString)&&void 0!==r?r:"ANONYMOUS"
u=e,c=e}else u&&t.createUniqueImpressionId&&!e.client.isWatch&&(u=`${u}${NP}${random.nextUUID()}`)
const l={id:_e(u),name:_e(c),impressionType:Ie(e,t)},d=Se(t)
if((0,Cs.isSome)(d)&&(l[tf]=d),t&&t.kind&&(l[sv]=t.kind),t&&t.softwareType&&(l[np]=t.softwareType),t&&t.recoMetricsData&&Object.assign(l,t.recoMetricsData),t&&t.mercuryMetricsData&&Object.assign(l,t.mercuryMetricsData),t&&t.lockupDisplayStyle&&(l[Zd]=t.lockupDisplayStyle),t&&t.locationTracker){const e=Be(t.locationTracker)
l.impressionIndex=e,""===l.id&&(l.id=e.toString(),l[tf]=om)}return t&&t.modelSource&&(l.modelSource=t.modelSource),s(t.offerType)&&(l[hh]=t.offerType),t&&s(t.displaysArcadeUpsell)&&(l.displaysArcadeUpsell=t.displaysArcadeUpsell),t&&s(t.isPreorder)&&(l[Qv]=t.isPreorder),s(t.adamId)&&i(t.anonymizationOptions)&&(l[Jg]=t.adamId),t&&s(t.badges)&&(l.badges=t.badges),t&&s(t.inAppEventId)&&(l[Jf]=t.inAppEventId),t&&s(t.relatedSubjectIds)&&(l.relatedSubjectIds=t.relatedSubjectIds),(null===(a=null==t?void 0:t.hintsEntity)||void 0===a?void 0:a.length)&&(l.hintsEntity=t.hintsEntity),t&&s(t.autoAdvanceInterval)&&(l.autoAdvanceInterval=t.autoAdvanceInterval),s(null==t?void 0:t.fcKind)&&(l.fcKind=t.fcKind),s(null==t?void 0:t.canonicalId)&&(l[Yh]=t.canonicalId),s(null==t?void 0:t.displayStyle)&&(l.displayStyle=t.displayStyle),s(t.productVariantData)&&Object.assign(l,Q(t.productVariantData)),""===l.id&&e.console.log(`impressionId missing. Tracking broken for ${l.name} of ${l.impressionType}`),l}(e,n)))}function fr(e,t,n){var r
t&&(dr(e,t,n),(n.isAdvert||n.isAdEligible)&&(null===(r=n.pageInformation)||void 0===r?void 0:r.iAdInfo)&&t.impressionMetrics&&(t.impressionMetrics=new iA(t.impressionMetrics,!0)))}function hr(e,t,n,r,a,u,c){const l=function(e,t,n,r,i){return Ds.context("impressionOptions",()=>{const i=Ee(e,t),s=Te(e,t),o={...r,kind:i,softwareType:s,title:n,id:t.id}
return le(e,t,Qv,void 0)&&(o.offerType=Yg),o})}(e,t,n.title,a)
l.lockupDisplayStyle=r,i(l.targetType)&&(l.targetType=e.client.isVision?mp:Zv),u&&ai(e,t)&&(l.displaysArcadeUpsell=!0)
const d=a.id
return o(cr(t))&&s(d)&&d.length>0&&(l.id=d),l}function pr(e,t,n,r){return Ds.context("impressionOptionsForMetadataRibbonItem",()=>({...e,id:t,kind:null,softwareType:null,title:n,idType:r,targetType:Tl}))}function wr(e){const t=a(e,Kg)
for(const e of t){const t=c(e,"id");(0,Cs.isNothing)(t)||(e.id=gr(t))}}function gr(e){return e.includes(NP)?e.split(NP)[0]:e}function vr(e,t){var n
const r=null!==(n=t.excludingFields)&&void 0!==n?n:[]
return r.push("amsMetricsID"),new Zb(t.fields,t.includingFields,r,t.topic,t.shouldFlush)}function mr(e,t,n,r,i,s){const o={}
Object.assign(o,r),o[gg]=qp,o[cl]=n,o[ha]=t
const a=["impressionsSnapshot",zp]
return i&&a.push(...i),Or(e,o),vr(0,new Zb(o,a,[],yr(0,o),Ar(e,o,null,s)))}function br(e,t,n,r,i){const s={}
Object.assign(s,t),s[gg]=Kg,s[Qh]="data-metrics",s[Xh]=4
const o=[Kg,zp,zd]
return n&&o.push(Yd),r&&o.push(Zh),i&&o.push("impressionsAppendix"),Or(e,s),vr(0,new Zb(s,o,[Xh],yr(0,s),Ar(e,s)))}function Ar(e,t,n=null,r){var i,s
const a=t[gg]
let c=!1
if(!o(a))return c
const l=null!=r&&r
switch(a){case qp:c=u(t,FP.hasIAdData)||l
break
case fl:c=!0
break
case Kg:c=u(t,FP.hasIAdData),t[Qh]!==ll||(null===(i=null==n?void 0:n.iAdInfo)||void 0===i?void 0:i.placementType)!==Vv&&(null===(s=null==n?void 0:n.iAdInfo)||void 0===s?void 0:s.placementType)!==Iv||(c=!0)
break
case Vm:c=e.host.clientIdentifier===Nb&&(u(t,FP.hasIAdData)||l)}const d=e.host.isiOS
return"com.apple.AppStore.SubscribePageExtension"!==e.host.clientIdentifier||d||(c=!0),c}function yr(e,t){return t[Uh]||Xb}function Or(e,t){e.bag.isMetricsAb2DataFallbackEnabled&&(0,Cs.isSome)(e.experimentCache)&&(t.alt_ab2_data=JSON.stringify(e.experimentCache.createAb2Data()))}function Pr(e,t,n){if((0,Cs.isNothing)(t))return
const r=Ze(n.pageInformation)
if(null===r)return
r.id=_e(n.id)
const i=Se(n);(0,Cs.isSome)(i)&&(r[tf]=i),r[Bg]=Jv,r.typeDetails="iTunesStoreContent",r[dp]=Fe(e,n,""),n.actionDetails&&(r[Lw]=n.actionDetails),t.templateMediaEvent=function(e,t){const n={}
return Object.assign(n,t),n[gg]=dl,Or(e,n),vr(0,new Zb(n,[],[],yr(0,n),Ar(e,n)))}(e,r)
const s=v(r)
s[Kh]=t.videoUrl,t.templateClickEvent=function(e,t,n,r){const i={}
Object.assign(i,r),i[gg]=qp,i[cl]=n,i[ha]=null
const s=[zp]
return Or(e,i),vr(0,new Zb(i,s,[],yr(0,i),Ar(e,i)))}(e,0,Lm,s)}function Ir(e,t,n){return Ds.context("artworkFromApiArtwork",()=>{var i
const o=!!s(n.allowingTransparency)&&n.allowingTransparency,a=e.client.isVision,d=s(n.withJoeColorPlaceholder)?n.withJoeColorPlaceholder:a,f=c(t,wm)
if(r(f))return null
const h=u(t,"hasP3"),p=[We(e,o,h,n.useCase)]
let w
if(u(t,"supportsLayeredImage")&&(e.client.isTV||e.client.isVision)&&p.push(He(e,nh,h,n.useCase)),o)w=T("clear")
else if(d){const e=P(c(t,"bgColor"))
r(e)||(w=e)}r(w)&&!e.client.isVision&&(w=T("placeholderBackground"))
const g=null!==(i=n.overrideTextColorKey)&&void 0!==i?i:"textColor1",v=P(c(t,g)),m=new mb(f,n.overrideWidth||l(t,bw),n.overrideHeight||l(t,xw),p)
return m.backgroundColor=w,m.checksum=c(t,Uc),s(v)&&(m.textColor=v),s(n.style)&&(m.style=n.style),s(n.cropCode)&&(m.crop=n.cropCode),s(n.contentMode)&&(m.contentMode=n.contentMode),m})}function Sr(e,t,n,i,o,a){return Ds.context("iconFromData",()=>{if(!t)return Ds.unexpectedNull(Pv,pg),null
const u=t.type,c=null!=a?a:Tr(e,t,i),l=i||e.host.clientIdentifier,d=$(t,c,"circularArtwork")
if((l===kb||"VisionAppStore"===l||e.client.isWatch||le(e,t,Rw)||e.client.isVision&&c===rv)&&s(d))return Ir(e,d,{...n,style:rh,withJoeColorPlaceholder:!0})
const f=ii(e,t),h=ni(e,t)&&(l===Cb||f),p=$(t,c,"ovalArtwork")
if(h&&s(p))return Ir(e,p,{...n,style:qh})
let w
return u===jv?(w=D(t,km),Ir(e,w,{...n,style:fw})):u===Em?(w=D(t,km),Ir(e,w,{...n,style:Lp,allowingTransparency:!0})):(r(o)&&(o=z(e,t)),w=function(e,t,n,r){return we(e,t,r,km,n)}(e,t,c,o),c===hg||i===xb?Ir(e,w,{...n,style:Cd}):c===rv||"VisionAppStore"===l?Ir(e,w,{...n,style:rh}):c===cv?Ir(e,w,{...n,style:zh,allowingTransparency:!0}):(e.client.isWatch,Ir(e,w,{...n,style:Lp})))})}function Tr(e,t,n){switch(n){case kb:case Cb:return lm
case xb:return hg
case"VisionAppStore":return rv
default:return fe(e,t,n)}}function Er(e,t,n,r){if(!t)return null
const i=function(e){switch(e){case Cm:return hv
case Tm:return wv
case"tv":return"tv"
case Mm:return oo
case Fm:return"macbook"
case Dv:return Uf
case pm:return"visionpro"
default:q(e)}}(t),s=di(0,n),o=function(e,t){switch(t){case Gc:return 13/rI.width
case Vc:return 11/iI.width
case $c:return 5.5/sI.width
case Nd:return mI/oI.width
case xd:return mI/aI.width
default:return null}}(0,n),a=function(e,t){switch(t){case Gc:return 30/rI.width
case Nd:return vI/oI.width
case xd:return vI/aI.width
default:return di(0,t)}}(0,n)
return new Ab(t,n,i,r,s,o,a)}function _r(e,t,n,i=null,s,o,a=!1,u){return Ds.context("screenshotsFromData",()=>{const c=[]
r(o)&&(o=z(e,t))
let l=i
if(!l||0===l.length){const n=s||e.host.clientIdentifier
let r=e.client.deviceType
n===kb&&(r=Mm),"VisionAppStore"!==s&&"com.apple.visionproapp"!==s||(r=pm),l=Dr(e,t,n,r)}for(const r of l){const i=[]
let s
if(r===Dv?(s=si(e,t,lm),ri(e,t,lm)&&i.push("faceTime")):s="tv"!==r||e.host.isTV?r!==pm||e.host.isVision?r!==Fm||e.host.isMac?r!==Cm&&r!==Tm&&r!==Mm||e.host.isiOS||e.host.isWatch?oi(e,t,o,a):oi(e,t,o,a,lm):oi(e,t,o,a,cv):oi(e,t,o,a,rv):oi(e,t,o,a,hg),!s)continue
const l=Rr(e,s,r,n,i,u)
l&&c.push(l)}return c})}function Rr(e,t,n,r,i,s){const u=function(e,t){return t===Dv?e.client.deviceType===Tm?Tm:Cm:t}(e,n),c=Yr(e,u,e.client.screenSize)
let l,d=null
for(let e=0;e<c.length&&!o(d);e++)d=a(t,c[e]),l=c[e]
if(o(d)){const t=d.map(function(t){return Ir(e,t,{useCase:r,cropCode:s})}),o=Er(0,n,l,i)
return new bb(t,o)}return null}function Dr(e,t,n,r){return _(t,`sortedAppPlatformsFromData.${n}.${r}`,()=>{const i=kr(e,t),s=[]
let o=[]
const a=function(e,t){-1===o.indexOf(e)&&-1===s.indexOf(e)&&-1!==i.indexOf(e)&&(o.push(e),t&&s.push(t))}
switch("VisionAppStore"!==n&&"com.apple.visionproapp"!==n||a(pm),n){case kb:a(Mm)
break
case Cb:a(Dv)}switch(r){case Cm:a(Cm)
break
case Tm:a(Tm)
break
case"tv":a("tv")
break
case Mm:a(Mm)
break
case Fm:a(Fm)
break
case pm:a(pm)}return"VisionAppStore"!==n&&"com.apple.visionproapp"!==n||(a(Tm),a(Cm)),e.appleSilicon.isSupportEnabled||e.client.isVision?(a(Tm),a(Cm)):(a(Cm),a(Tm)),a(Fm),a(pm),a("tv"),a(Mm),a(Dv),o=o.filter(function(e){return-1===s.indexOf(e)}),o})}function kr(e,t){return t?_(t,"supportedAppPlatformsFromData",()=>Cr(e,t,!0)):null}function Cr(e,t,n){if(!t)return null
const r=ni(e,t,lm),i=ii(e,t),s=function(e,t){return le(e,t,iv)}(e,t)
let o=k(t,qw)
if(t.type===Em&&n){const e=k(t,"unionDeviceFamilies")
e.length>0&&(o=e)}const a=[]
let u=!1
for(const e of o)switch(e){case hv:i||a.push(Cm)
break
case wv:i||a.push(Tm)
break
case $p:a.push("tv")
break
case Mm:a.push(Mm),u=!0
break
case Pg:a.push(pm)
break
case Fm:a.push(Fm)}return r&&a.push(Dv),!u&&s&&a.push(Mm),a}function xr(e,t,n){if(Fr(e,t,n)){const t=n[0].appPlatform.toUpperCase()
return e.loc.string(`ONLY_FOR_${t}_APP`)}let r=n.reduce((e,t)=>e.concat(Lr(t)),[])
try{return e.loc.tryString(`PLATFORMS_${r.join("_")}`)}catch(t){return r=["PHONE","PAD","MAC","VISION","TV","WATCH","MESSAGES","FACETIME"].filter(e=>r.includes(e)),e.loc.string(`PLATFORMS_${r.join("_")}`)}}function Nr(e,t,n){return Fr(e,t,n)?"top":"bottom"}function Fr(e,t,n){if(1===n.length){const r=n[0],i=Br(0,t,e.appleSilicon.isSupportEnabled),s=jr(e,t),o=Gr(Vr(0,e.client.deviceType,i,s),r.appPlatform),a=0===r.supplementaryAppPlatforms.length,u=r.appPlatform!==e.client.deviceType
if(a&&u&&!o)return!0}return!1}function Mr(e,t){const n=Lr(t)
return e.loc.string(`PLATFORMS_${n.join("_")}`)}function Lr(e){const t=e.appPlatform.toUpperCase(),n=e.supplementaryAppPlatforms.map(e=>e.toUpperCase())
return[t].concat(n)}function Br(e,t,n){return n&&N(t,bo)}function jr(e,t){return e.client.isVision&&H(t,lm,Ec)}function Ur(e,t){if(!e.client.isiOS)return
let n
return e.isAvailable(Zm)&&[Nw,Vp].includes(e.client.buildType)&&(0,ks.isSome)(e.ads.fetchAppBinaryTraitsOverride)&&(n=e.ads.fetchAppBinaryTraitsOverride()),(0,ks.isNothing)(n)&&(n=V(t,lm,Mo)),n}function $r(e,t,n){const r=Br(0,t,n),i=jr(e,t)
if(r){const n=ue(e,t,"minimumMacOSVersion")
if(o(n))return n}else if(i){const n=ue(e,t,"minimumXROSVersion")
if(o(n))return n}return G(t,fe(e,t),Av)}function Vr(e,t,n,r){switch(t){case Cm:return[Cm,Dv]
case Tm:return[Cm,Tm,Dv]
case"tv":return["tv"]
case Mm:return[Mm]
case Fm:return n?[Fm,Cm,Tm]:[Fm]
case pm:return r?[pm,Cm,Tm]:[pm]
default:return[]}}function Gr(e,t){return-1!==e.indexOf(t)}function Wr(e,t,n,r,i,s,o=!0){const a=function(e,t,n,r,i){let s
switch(n){case Cm:return s=Ge(e),(0,ks.isSome)(t)&&s.isSystemAppFromData(t)?[Cm,Mm,Dv]:[Cm,Mm,Dv,"tv",pm]
case Tm:return s=Ge(e),(0,ks.isSome)(t)&&s.isSystemAppFromData(t)?[Cm,Tm,Dv]:[Cm,Tm,Dv,"tv",pm]
case"tv":return["tv"]
case Mm:return[Mm]
case Fm:return r?[Fm,Cm,Tm]:[Fm]
case pm:return i?[pm,Cm,Tm]:[pm]
default:return[]}}(e,t,r,i,s)
return!!a.some(e=>Gr(n,e))&&(!e.client.isMac||!a.includes(Fm)||o)}function Hr(e,t){var n
const i=new MP
if(e.client.deviceType!==Fm)return i
if(t.type!==Em)return i.runsOnIntel=null===(n=ce(e,t,"runsOnIntel",he(e)))||void 0===n||n,i.runsOnAppleSilicon=le(e,t,"runsOnAppleSilicon",he(e)),i.requiresRosetta=le(e,t,Lo,he(e)),i
const s=te(t,Um)
if(0===s.length)return i
for(const t of s){if(r(t.attributes))continue
const n=Hr(e,t)
i.runsOnIntel=i.runsOnIntel||n.runsOnIntel,i.runsOnAppleSilicon=i.runsOnAppleSilicon||n.runsOnAppleSilicon,i.requiresRosetta=i.requiresRosetta||n.requiresRosetta}return i}function qr(e,t,n,r){const i=Hr(e,t)
return n?i.runsOnAppleSilicon&&(!i.requiresRosetta||i.requiresRosetta&&r):i.runsOnIntel}function zr(e,t,n,r,i,s=!0){return!!Vr(0,n,r,i).some(e=>Gr(t,e))&&(!e.client.isMac||!t.includes(Fm)||s)}function Yr(e,t,n){switch(t){case Fm:return[Fm]
case Mm:return[xd,Nd,$c,Vc,Gc]
case"tv":return["appleTV"]
case pm:return["appleVisionPro"]
case Tm:{const t=[]
return(n.isEqualTo(JP)||n.isEqualTo(KP)||n.isEqualTo(ZP)||n.isEqualTo(eI))&&e.client.screenCornerRadius>0?(t.push(Gp),t.push(Wp),t.push(wp),t.push(gp),t.push(wv)):n.isEqualTo(YP)?(t.push(wp),t.push(Gp),t.push(Wp),t.push(gp),t.push(wv)):n.isEqualTo(qP)||n.isEqualTo(zP)||n.isEqualTo(QP)||n.isEqualTo(XP)||n.isEqualTo(tI)||n.isEqualTo(nI)?(t.push(Wp),t.push(Gp),t.push(wp),t.push(gp),t.push(wv)):n.isEqualTo(HP)?(t.push(gp),t.push(wv),t.push(Wp),t.push(wp),t.push(Gp)):n.isEqualTo(uI)?(t.push(Wp),t.push(wp),t.push(Gp),t.push(gp),t.push(wv)):n.isEqualTo(WP)?(t.push(wv),t.push(gp),t.push(Wp),t.push(wp),t.push(Gp)):(t.push(Gp),t.push(Wp),t.push(wv),t.push(gp),t.push(wp)),t}case Cm:{let e
e=n.isEqualTo(BP)||n.isEqualTo(dI)?Wc:n.isEqualTo(jP)||n.isEqualTo(cI)||n.isEqualTo(lI)?Fd:n.isEqualTo(GP)?hv:n.isEqualTo(VP)?Bo:n.isEqualTo($P)?jo:n.isEqualTo(UP)?Uo:n.isEqualTo(fI)||n.isEqualTo(pI)?Hc:n.isEqualTo(hI)||n.isEqualTo(wI)?qc:Fd
const t=gI.indexOf(e),r=gI.slice(0,t)
r.reverse()
const i=gI.slice(t+1)
return[e].concat(r,i)}default:return[]}}function Jr(e,t){if(r(t))return null
const n=oe(e,t,Co),i=oe(e,t,xo),s=Br(0,t,!0),u=re(e,t,Fm)
if((e.client.isMac||u)&&!s){const s=e.bag.enableProductPageInstallSize?function(e,t){const n=$(t,cv,No)
if((0,ks.isNothing)(n))return null
const r=n[Wo]
return(0,ks.isNothing)(r)?null:l(r)}(0,t):function(e,t){const n=bt(e,t)
if(r(n))return null
const i=a(n,"assets")
if(!i.length)return null
for(const e of i)if(c(e,"flavor")===ja)return l(e,hf)
return null}(e,t)
if(o(i)){const e=l(i,$o)
return new Rb(s,null,null,e)}if(o(n)){const e=l(n,Vo),t=l(n,Go)
return new Rb(s,e,t,null)}return new Rb(s,null,null,null)}{const r=D(t,Do)
if(r){let t=[]
e.client.thinnedApplicationVariantIdentifier&&(t=e.client.thinnedApplicationVariantIdentifier.split(" ")),t=t.concat([e.host.deviceModel,"universal"])
for(const e of t){const t=l(r[e])
if(t){if(o(i)){const e=l(i,$o)
return new Rb(t,null,null,e)}if(o(n)){const e=l(n,Vo),r=l(n,Go)
return new Rb(t,e,r,null)}return new Rb(t,null,null,null)}}}}return null}function Kr(e,t,n){let r,o=null,a=null,u=null,c=null
switch(e.client.deviceType){case Fm:n.supportsArcade?(o=zc,u="sr"):(o="editorialArtwork.centeredFullscreenBackground",u="ep")
break
case"tv":n.presentedInTopShelf?(o="editorialArtwork.topShelf",u="sr"):(o=zc,u="ta",a="editorialArtwork.fullscreenBackground",c="sr")
break
case pm:o="editorialArtwork.productUberStatic16x9",u="sr"
break
default:n.supportsArcade?n.prefersCompactVariant||e.client.isPhone?(o="editorialArtwork.splashTall",u="oc"):(o=zc,u="oh"):(o="editorialArtwork.bannerUber",u="sr")}return r=oe(e,t,o),null!==a&&i(r)&&(r=oe(e,t,a),null!==c&&(u=c)),s(r)&&s(u)?Ir(e,r,{cropCode:u,useCase:21,withJoeColorPlaceholder:!0,overrideHeight:null,overrideWidth:null}):null}function Qr(e,t){return s(t)?`${DA}:/${BA}/${jA}?${YA}=${t.href}`:null}function Xr(e,t){switch(t){case"com.apple.AppStore":case Nb:return"appStore"
case kb:return Mm
case Cb:return Dv
case xb:return Md
default:return null}}function Zr(e,t){switch(t){case 6:return["L","AgeRatingL"]
case 7:return["10","AgeRating10"]
case 8:return["12","AgeRating12"]
case 9:return["14","AgeRating14"]
case 10:return["16","AgeRating16"]
case 11:return["18","AgeRating18"]
case 12:return["AL","AgeRatingL-Official"]
case 13:return["A10","AgeRating10-Official"]
case 14:return["A12","AgeRating12-Official"]
case 15:return["A14","AgeRating14-Official"]
case 16:return["A16","AgeRating16-Official"]
case 17:return["A18","AgeRating18-Official"]
case 20:return["All","AgeRating-KR-All"]
case 21:return["12","AgeRating-KR-12"]
case 22:return["15","AgeRating-KR-15"]
case 31:return["15+","AgeRating-AU-15"]
case 32:return e.props.isNotEnabled(qo)?["18+",zo]:["R 18+",zo]
case 47:return["18+","AgeRating-FR-18"]
default:return}}function ei(e,t){var n
return null===(n=Zr(e,t))||void 0===n?void 0:n[1]}function ti(e,t){var n
return null===(n=Zr(e,t))||void 0===n?void 0:n[0]}function ni(e,t,n){return le(e,t,"hasMessagesExtension",n)}function ri(e,t,n){return le(e,t,Rd,n)}function ii(e,t){return le(e,t,"isHiddenFromSpringboard")}function si(e,t,n){return oe(e,t,_d,n)}function oi(e,t,n,r,i){return we(e,t,n,r?Hf:rg,i)}function ai(e,t,n){return le(e,t,"supportsArcade",n)}function ui(e,t,n,r=!1,i){var s,o
if((0,ks.isNothing)(t))return null
let a
if(r){const r=Vn(t)
M(r)&&(a=ue(e,r,[qg,n],i))}return a=null!==(o=null!==(s=null!=a?a:ue(e,t,[pp,n],i))&&void 0!==s?s:ue(e,t,[qg,n],i))&&void 0!==o?o:ue(e,t,["itunesNotes",n],i),a}function ci(e,t){return _(t,"isMacOSInstaller",()=>{if(!e.client.isMac)return!1
const n=ue(e,t,Kv)
return!!s(n)&&n.startsWith("com.apple.InstallAssistant")})}function li(e,t){const n=Ge(e)
return e.host.isWatch?!!n.isUnsupportedDeletableSystemAppFromData(t)||!!e.client.isTinkerWatch&&!le(e,t,Sc)&&!le(e,t,Rw):!!function(e,t,n){if(n&&Ge(e).isSystemAppFromData(t)){const e=C(t,"watchBundleId")
if(o(e))switch(e){case"com.apple.mobilemail.watchkitapp":case"com.apple.news.watchkitapp":case"com.apple.iBooks.watchkitapp":return!0
default:return!1}}return!1}(e,t,e.client.isTinkerWatch)||(e.client.isTinkerWatch?n.isSystemAppFromData(t)?!le(e,t,Tc)&&!le(e,t,Rw):!le(e,t,Sc)&&!le(e,t,Rw):e.client.isWatch&&n.isSystemAppFromData(t)&&!le(e,t,Rw))}function di(e,t){switch(t){case Gp:return 18/JP.width
case Wp:return 18/qP.width
case Wc:return 41.5/BP.width
case Fd:return 39/jP.width
case Hc:return 55/fI.width
case qc:return 55/hI.width
case Vc:return 34/iI.width
case $c:return 55/sI.width
case Nd:return 108/oI.width
case xd:return 108/aI.width
default:return null}}function fi(e,t){if(r(t)||0===t.length)return!0
const n=t.split("."),i=l(n[0])||0,s=l(n[1])||0,o=l(n[2])||0
return e.host.isOSAtLeast(i,s,o)}function hi(e,t){return!r(t)&&0!==t.length&&e.client.isActivePairedWatchSystemVersionBelow(t)}function pi(e,t,n){const r=bt(e,t)
if(c(r,Bg)===Yg){const n=c(r,Hp),i=ue(e,t,fg)
if(o(i)){if(o(n)){const t=Ae(n),r={"@@expectedDateMY@@":e.loc.string("PreOrder.Date.MonthYear"),"@@expectedDateMDY@@":e.loc.string("PreOrder.Date.MonthDayYear")}
for(const[n,s]of Object.entries(r))if(i.includes(n)){let r=e.loc.formatDateWithContext(s,t,"middleOfSentence")
return e.client.isTV&&(r=r.replace(/ /g,"\xa0")),i.replace(n,r)}}return i}}return n}function wi(e,t,n=!0){return Ds.context("isSupportedOnCurrentPlatform",()=>{if(t.type!==Um&&t.type!==Em)return!0
const r=Cr(e,t,n),i=Br(0,t,e.appleSilicon.isSupportEnabled),s=jr(e,t)
return Wr(e,t,r,e.client.deviceType,i,s)})}function gi(e,t){const n=a(t,pg)
return n.length>1&&e.console.warn("tried to extract data from container but more than one member present"),1!==n.length?null:n[0]}function vi(e){return a(e,pg)}function mi(e){switch(e){case"gameCenter":case"gameCenterArcade":case"gameCenterGeneral":return!0
default:return!1}}function bi(e){switch(e){case"adWithText":case"adWithPortraitScreenshots":case"adWithLandscapeScreenshot":case"adWithPortraitVideo":case"adWithLandscapeVideo":case"adMaterialWithPortraitScreenshots":case"adMaterialWithLandscapeScreenshots":case"adGridWithPortraitScreenshots":case"adGridWithLandscapeScreenshots":return!0
default:return!1}}function Ai(e){switch(e){case"appDistributionInstall":case"appStoreInstall":return!0
default:return!1}}function yi(e){return Ai(e)||bi(e)}function Oi(e,t){return!("webBrowser"===e&&!t)}function Pi(e){switch(e){case Lp:return"roundedRect"
case rh:return"maskToCircle"
case qh:return"pill"
case fw:return"iap"
case Cd:return"tvRect"
default:return"none"}}function Ii(e,t){if(0===t.length)return(0,Ds.unexpectedNull)(Ev,"ArtworkVariant"),"png"
const n=function(e,t){if(e.host.isTV){const e=t.find(e=>e.format===nh)
if(!r(e))return e}else{const e=t.find(e=>e.format!==nh)
if(!r(e))return e}return t[0]}(e,t).format
switch(n){case Xc:return"jpeg"
case Od:return"png"
case ih:return"heic"
case nh:return"lcr"
default:throw new TypeError(`Unknown artwork format ${n}`)}}function Si(e,t){return(0,Ds.context)("translateArtwork",()=>({urlTemplate:t.template,width:t.width,height:t.height,decoration:Pi(t.style),preferredCrop:t.crop,preferredFormat:Ii(e,t.variants)}))}function Ti(e){return(0,Ds.context)("translateMediaPlatform",()=>({deviceCornerRadiusFactor:e.deviceCornerRadiusFactor}))}function Ei(e){if(r(e))return
const t=[]
for(const n of e)switch(n){case Il:t.push("appState")
break
case mh:t.push("languages")
break
case zp:t.push("pageFields")}return t}function _i(e){if(r(e))return
const t=[]
for(const n of e)switch(n){case"base":t.push("base")
break
case"time":t.push("eventTime")
break
case ep:t.push("pageContext")}return t}function Ri(e,t){let n=0
return e.offerType===Ap&&(n|=4),e.offerLabelStyle===Yg?n|=8:n|=2,e.style===uw&&(n|=16),"watch"===t&&(n|=32),e.isDeletableSystemApp&&(n|=64),e.isFree&&(n|=256),"singleSignOn"===t&&(n|=512),"contingentPricing"===t&&(n|=1024),"wallet"===t&&(n|=8192),n}function Di(e,t,n,r,i,s,o){let a=Ri(t,n)
return r.includes(Dv)&&(a|=1),zr(e,r,e.client.deviceType,e.appleSilicon.isSupportEnabled,e.client.isVision)||(a&=-3),e.host.isiOS&&"watch"===n&&i===fo&&(a|=16),s&&(a|=128),o&&(a|=16384),a}function ki(e,t,n){const r=e.titles
return"singleSignOn"===t?(r.standard=n.loc.string(Uu),r.appStoreRepair=n.loc.string(Uu)):"gameCenterGeneral"===t&&(r.open=n.loc.string("OfferButton.GameCenterGeneral.Title.Open"),e.offerLabelStyle!==Yg&&e.offerLabelStyle!==Bf||(r.standard=n.loc.string("OfferButton.GameCenterGeneral.Title.Preorder"))),r}function Ci(e,t){return"contingentPricing"===t?{}:e}function xi(e,t,n){return Oi(n,e.props.enabled(Ip))?[]:t.actionMetrics.data.map(e=>function(e){return{shouldFlush:e.shouldFlush,topic:e.topic,fields:e.fields,includingFields:Ei(e.includingFields),excludingFields:_i(e.excludingFields)}}(e))}function Ni(e,t,n){const r=t===Ol?"arcadeAppClip":"arcadeAppStoreComponents"
return n.isiOS?(new ly).set(dg,CA).set(iw,UA).param(KA,e.adamId).param(zA,r).build():Fi(e)}function Fi(e){return(new ly).set(dg,CA).set(iw,rw).path(LA).path(e.adamId).build()}function Mi(e,t,n,r){return{id:t.adamId,titles:ki(t,n,r),subtitles:Ci(t.subtitles,n),flags:Ri(t,n),ageRating:t.contentRating,metrics:xi(r,e,n)}}function Li(e,t,n,i,s){const o=Bi(e,t,n,i,s)
if(!r(o))return{...o,titles:{},subtitles:{}}}function Bi(e,t,n,o,a=[]){if(!r(t))return(0,Ds.context)("translateActionToOffer",()=>t instanceof mA?function(e,t,n,r,i){return(0,Ds.context)("translateAlertAction",()=>{const s=1===t.buttonActions.length?Li(e,t.buttonActions[0],n,r,i):void 0,o=1===t.buttonTitles.length?t.buttonTitles[0]:void 0
return{...Mi(t,n,r,e),$kind:"alertOffer",alertTitle:t.title,alertMessage:t.message,alertButtonOffer:s,alertButtonTitle:o}})}(e,t,n,o,a):t instanceof lA?function(e,t,n,r,i){return(0,Ds.context)("translateOfferAlertAction",()=>{const s=Li(e,t.completionAction,n,r,i)
return{...Mi(t,n,r,e),$kind:"offerAlertOffer",alertTitle:t.title,alertMessage:t.message,alertFooterMessage:t.footerMessage,isCancelable:t.isCancelable,checkRestrictionsForContentRating:t.checkRestrictionsForContentRating,remoteControllerRequirement:t.remoteControllerRequirement,shouldCheckForAvailableDiskSpace:t.shouldCheckForAvailableDiskSpace,shouldIncludeActiveAccountInFooterMessage:t.shouldIncludeActiveAccountInFooterMessage,shouldPromptForConfirmation:t.shouldPromptForConfirmation,completionOffer:s}})}(e,t,n,o,a):t instanceof Wy?function(e,t,n,i){return(0,Ds.context)("translateFlowAction",()=>{if(t.page!==ev)return void(0,Ds.unexpectedType)(Pv,ev,t.page)
if(r(t.pageUrl))return void(0,Ds.unexpectedType)(Pv,"URL",t.pageUrl)
const s=new ly(t.pageUrl)
return s.set(dg,CA),{...Mi(t,n,i,e),$kind:Df,url:s.build(),isSensitive:!1}})}(e,t,n,o):t instanceof uA?function(e,t,n,o,a){return(0,Ds.context)("translateOfferAction",()=>{var u,l
const d=t.purchaseConfiguration,f=d.appPlatforms
if(r(f))return void(0,Ds.unexpectedNull)(Pv,"AppPlatform[]","purchaseConfiguration.appPlatforms")
const h=d.bundleId
if(r(h))return void(0,Ds.unexpectedNull)(Pv,dm,"purchaseConfiguration.bundleId")
const p=null!==(u=d.isHalva)&&void 0!==u&&u,g=null!==(l=d.supportsVisionOSCompatibleIOSBinary)&&void 0!==l&&l,v=new $y(d.buyParams)
if("singleSignOn"===o){const e=a.find(e=>e.$kind===Bu)
v.set("requiresSSOEntitlement",String(e.requiresSSOEntitlement),"")}const m=new $y
return function(e,t,n,o,a,u,l,d,f,h,p,g){var v,m,b
const A=Ze(o),y=c(w(A),Yw)
t.set(Yw,y)
const O=c(w(A),Sg)
t.set(Sg,O)
const P=c(w(A),Yp);(0,ks.isSome)(P)&&P.length>0&&t.set(OP.containerId,P,null)
const I=(null!==(v=null==y?void 0:y.split("_"))&&void 0!==v?v:[]).includes(n),S=O===Jw,T=(null===(m=t.get(Sa,null))||void 0===m?void 0:m.length)>0
if(!S||I||T){let e=c(w(o),Tv)
i(e)&&(e=xe(null==o?void 0:o.pageUrl)),r(e)||t.set(Tv,e)}if(S&&(0,ks.isSome)(o)&&(0,ks.isSome)(o.pageUrl)&&"browserChoice"===(null===(b=new ly(o.pageUrl).query)||void 0===b?void 0:b[ml])&&(t.set(Xd,bl),t.set(Ta,"1",null)),function(e,t,n,r){const i=s(n)&&n.adamID===t,o=s(r)&&r.adamID===t&&!i
if(i&&s(n)){const t=K(n)
for(const n of Object.keys(t)){const r=c(t,n);(0,ks.isSome)(r)&&e.set(n,r)}}if(o&&s(r)){const t=Q(r)
for(const n of Object.keys(t)){const r=c(t,n);(0,ks.isSome)(r)&&e.set(n,r)}}}(t,n,null==o?void 0:o.productVariantData,void 0),!r(l)&&l.length>0&&t.set(Zd,l),t.set(Jf,null),s(Jb.shared.activeReferralData)){if(t.set(dh,Jb.shared.activeReferralData.extRefApp2,null),t.set(fh,Jb.shared.activeReferralData.extRefUrl2,null),(0,ks.isSome)(Jb.shared.activeReferralData.kind)){const e=Jb.shared.activeReferralData.kind.name
e!==Ea&&"appClip"!==e||t.set(Iw,Al)}}else t.set(dh,null,null),t.set(fh,void 0,null)}(0,m,t.adamId,d.pageInformation,0,0,d.metricsPlatformDisplayStyle),m.set(id,o,null),{...Mi(t,n,o,e),$kind:ju,flags:Di(e,n,o,f,h,p,g),baseBuyParams:v.toString(),metricsBuyParams:m.toString(),additionalHeaders:d.additionalHeaders,preflightPackageURL:d.preflightPackageUrl,bundleID:h,itemName:d.appName,vendorName:d.vendor,capabilities:d.appCapabilities}})}(e,t,n,o,a):t instanceof cA?Bi(e,t.buyAction,n,o,a):t instanceof hA?r(t.subscribePageAction)?function(e,t,n,r,i){return(0,Ds.context)("translateOfferStateAction",()=>({...Mi(t,n,r,e),$kind:"statefulOffer",defaultOffer:Li(e,t.defaultAction,n,r,i),buyOffer:Li(e,t.buyAction,n,r,i),openOffer:Li(e,t.openAction,n,r,i)}))}(e,t,n,o,a):function(e,t,n,i,s){return(0,Ds.context)("translateArcadeOfferStateAction",()=>{if(r(t.subscribePageAction)&&(0,Ds.unexpectedNull)(Pv,"Action","offerStateAction.subscribePageAction"),n.offerLabelStyle===Yg){let s
if(t.buyAction instanceof uA&&!r(t.buyAction.expectedReleaseDate)){const n=If,r=e.loc.formatDate(n,t.buyAction.expectedReleaseDate),i=e.loc.string("Offer.Label.PreorderExpandedSubtitle","Expected @@releaseDate@@").replace("@@releaseDate@@",r).replace(Jl,r)
s=e.loc.uppercased(i)}else(0,Ds.unexpectedNull)(Pv,dm,"offerStateAction.buyAction.expectedReleaseDate")
return{$kind:Df,id:t.adamId,titles:{standard:e.loc.string(eu)},subtitles:{preorderStatus:s},flags:Ri(n,i),ageRating:n.contentRating,metrics:xi(e,t.subscribePageAction,i),url:Fi(n),isSensitive:!1}}{const o=Li(e,t.defaultAction,n,i,s)
if(r(o))return void(0,Ds.unexpectedNull)(Pv,"ASCOffer","offerStateAction.defaultAction")
const a={$kind:Df,id:t.adamId,titles:{},subtitles:{},flags:Ri(n,i),ageRating:n.contentRating,metrics:xi(e,t.subscribePageAction,i),url:Ni(n,i,e.client),isSensitive:!1}
return{...Mi(t,n,i,e),$kind:"arcadeOffer",notSubscribedOffer:a,subscribedOffer:o}}})}(e,t,n,o,a):t instanceof oA?function(e,t,n,r){return(0,Ds.context)("translateExternalUrlAction",()=>({...Mi(t,n,r,e),$kind:Df,url:t.url,isSensitive:t.isSensitive}))}(e,t,n,o):void 0)}async function ji(e,t,n){var r
const i=Date.now(),s=await e.mediaToken.refreshToken(),o=e.fetchTimingMetricsBuilder,a=null!=n?n:{},u=null===(r=e.personalizationMetricsIdentifiersCache)||void 0===r?void 0:r.getMetricsIdForType(Bs.user);(0,ks.isSome)(u)&&((0,ks.isSome)(null==a?void 0:a.headers)?a.headers[bI]=u:a.headers={[bI]:u})
const c=await $i(e,t,s,a,!1,o),l=Date.now()
t.canonicalUrl&&(c[eo.requestedUrl]=t.canonicalUrl)
const d=l-i
if(d>500){const n=me(e,t).toString()
e.console.warn("Fetch took too long ("+d.toString()+"ms) "+n)}return c}function Ui(e,t){return e.bag.redirectUrlWhitelistedQueryParams.filter(e=>{var n
return s(null===(n=t.query)||void 0===n?void 0:n[e])})}async function $i(e,t,n,a={},c=!1,d){var f,h
const p=me(e,t).toString(),g=new ly(p),v=Ui(e,g)
for(const e of v)g.removeParam(e)
const m=g.toString()
let b=a.headers
b||(b={}),b.Authorization="Bearer "+n
const A=await e.network.fetch({url:m,headers:b,method:a.method,body:a.requestBodyString,timeout:a.timeout})
try{if(401===A.status||403===A.status){if(c)throw Error("We refreshed the token but we still get 401 from the API")
return e.mediaToken.resetToken(),await e.mediaToken.refreshToken().then(async n=>await $i(e,t,n,a,!0,d))}if(404===A.status)throw Vi()
if(!A.ok){const e=new AI(`Bad Status code ${A.status} for ${m}, original ${p}`)
throw e.statusCode=A.status,e}const n=n=>{var c,d
const f=Date.now()
let h
if(r(n.body)||""===n.body){if(204!==n.status)throw Vi()
h={}}else try{h=JSON.parse(n.body)}catch(t){let r=t.message
throw[Nw,Vp].includes(e.client.buildType)&&(r=`${t.message}, body: ${n.body}`),new yI(r)}const g=Date.now()
if(h){if(h[eo.pageInformation]=w(function(e,t){const n=e.client.storefrontIdentifier
let r=null
if((null==n?void 0:n.length)>0){const e=n.split("-")
o(e)&&(r=e[0])}return{serverInstance:t.headers[OI],storeFrontHeader:n,language:e.bag.language,storeFront:r,environmentDataCenter:t.headers[PI]}}(e,n)),n.metrics.length>0){const e={...n.metrics[0],parseStartTime:f,parseEndTime:g}
h[eo.timingValues]=e}else{const e={pageURL:n.url,parseStartTime:f,parseEndTime:g}
h[eo.timingValues]=e}if(h[eo.contentMaxAge]=function(e,t){const n=Object.keys(t.headers).find(e=>"cache-control"===e.toLowerCase())
if(r(n)||""===n)return null
const s=t.headers[n]
if(i(s))return null
const o=s.match(/max-age=(\d+)/)
return r(o)||o.length<2?null:l(o[1])}(0,n),Array.isArray(h.data)&&s(d=h.data)&&0===d.length&&!u(a.allowEmptyDataResponse))throw Vi()
Array.isArray(h.data)&&t.originalOrdering.length>1&&(h.data=function(e,t,n,r=[]){const i={}
for(const e of n)i[Gi(0,e.type,e.id)]=e
const s=[]
for(const e of t){const t=i[Gi(0,e.type,e.id)]
if((0,ks.isSome)(t)){if(o(r)){t.meta={...e.meta}
for(const n of r)Wi(0,n,t,e,i)}s.push(t)}}return s}(0,t.originalOrdering,null!==(c=h.data)&&void 0!==c?c:[],t.supplementaryMetadataAssociations)),h[eo.requestedUrl]=p}return h}
return(0,ks.isSome)(d)?d.measureParsing(A,n):n(A)}catch(e){if(e instanceof AI)throw e
const t=null!==(f=A.headers["x-apple-jingle-correlation-key"])&&void 0!==f?f:null===(h=A.metrics[0])||void 0===h?void 0:h.clientCorrelationKey
throw new Error(`Error Fetching - filtered: ${m}, original: ${p}, correlationKey: ${null!=t?t:"N/A"}, ${e.name}, ${e.message}`)}}function Vi(){const e=new AI("No content")
return e.statusCode=204,e}function Gi(e,t,n){return`${t}_${n}`}function Wi(e,t,n,r,i){var s;(0,ks.isNothing)(n.meta)?n.meta={associations:{}}:(0,ks.isNothing)(n.meta.associations)&&(n.meta.associations={})
const a=ve(t,r)
if(o(a)){const e=[]
for(const t of a){const n=i[Gi(0,t.type,t.id)];(0,ks.isSome)(n)&&e.push(n)}(null!==(s=d(n.meta.associations))&&void 0!==s?s:{})[t]={data:e}}}async function Hi(e,t,n,r){const i={refreshToken:async()=>await mediaTokens.getTokenFor(n,r),resetToken:()=>mediaTokens.resetTokenFor(n,r)},s=e.adding(rb,i)
return await ji(s,t,{})}function qi(e){return!(0,Cs.isNothing)(e)&&e.id!==II}function zi(e){return"gameCenterGeneral"===e?"xp_amp_gc_cs":void 0}function Yi(e,t,n){if(!r(n.icon)&&"offerOnly"!==t)return Si(e,n.icon)}function Ji(e){return e.loc.string(el)}function Ki(e,t,n,r){var i
return"offerOnly"===t?void 0:"webBrowser"===t&&null!==(i=ue(e,r,Sh))&&void 0!==i?i:n.title}function Qi(e,t,n){return mi(t)&&e.client.isTV||"offerOnly"===t||"tvAppOpenIn"===t||"webBrowser"===t&&e.props.isNotEnabled(Ip)?void 0:n.subtitle}function Xi(e,t){return"offerOnly"===e?void 0:t.ageRating}function Zi(e,t,n){const r=function(e,t,n){return"overlayClip"!==t?null:4&n.flags?e.loc.string("Callout.ArcadeTrial"):e.loc.string("Callout.AppClip")}(e,t,n)
return(0,ks.isNothing)(r)?{}:{overlayCallout:r}}function es(e,t,n,i,s,o){return(0,Ds.context)("translateLockup",()=>{switch(t){case"overlay":case"overlayClip":case"standard":case"watch":case"gameCenter":case"gameCenterArcade":case"gameCenterGeneral":case"offerOnly":case"contingentPricing":case"safariExtension":case"signInWithApple":case"singleSignOn":case"tvProvider":case"tvAppOpenIn":case"wallet":case"adWithText":case"adWithPortraitScreenshots":case"adWithLandscapeScreenshot":case"adWithPortraitVideo":case"adWithLandscapeVideo":case"adMaterialWithPortraitScreenshots":case"adMaterialWithLandscapeScreenshots":case"adGridWithPortraitScreenshots":case"adGridWithLandscapeScreenshots":case"appStoreInstall":case"appDistributionInstall":case"webBrowser":const a=function(e){return e instanceof Fy?"inAppPurchase":"app"}(n),u=function(e,t,n,i){const s=t.impressionMetrics
if(r(s)||Oi(n,e.props.enabled(Ip))||i)return
const o=s.fields,a={id:o.id,name:o[$m],kind:o[sv],softwareType:o[np],offerType:o[hh],pageId:o.id,pageType:"Overlay"}
return"webBrowser"===n&&(a[hl]=bl),{instructions:[{data:{shouldFlush:!1,topic:zi(n),fields:{eventType:Vm},includingFields:["appState","pageFields"],excludingFields:[]},invocationPoints:["appear"]},{data:{shouldFlush:!1,topic:zi(n),fields:{eventType:Kg,eventVersion:3,impressions:[{id:o.id,impressionId:1,impressionIndex:0,kind:o[sv],name:o[$m],impressionType:Zv}]},includingFields:["appState","pageFields"],excludingFields:[]},invocationPoints:["disappear"]},{data:{shouldFlush:!0,topic:zi(n),fields:{actionType:Dm,eventType:qp,targetId:o.id,targetType:Zv},includingFields:["pageFields"],excludingFields:[]},invocationPoints:["click"]}],pageFields:a}}(e,n,t,qi(o)),c=function(e,t,n,i){return"gameCenterArcade"===t||"offerOnly"===t?void 0:(0,ks.isSome)(null==i?void 0:i.name)?{text:i.name}:!r(n.decorations)&&n.decorations.includes(Nm)?{text:Ji(e),kind:Nm}:r(n.heading)||n.heading!==Ji(e)?"overlay"===t||"overlayClip"===t||"singleSignOn"===t?{text:(s=e.loc.string("Lockup.Heading.Overlay"),`appstore:::${s}`),kind:tp}:"webBrowser"!==t||r(n.developerName)?r(n.tertiaryTitle)?void 0:{text:n.tertiaryTitle}:{text:n.developerName}:{text:n.heading,kind:Nm}
var s}(e,t,n,o)
let l;(0,ks.isSome)(c)&&(0,ks.isSome)(c.kind)&&(l={headingKind:c.kind})
const d=function(e,t,n,r,i,s){const o=[]
return bi(r)?(o.push(function(e,t,n){if(!bi(n))throw new Error(`Invalid lockup context ${n} for ASCAdLockupFeature`)
return{$kind:"adLockupFeature",isEditorsChoice:!!(0,ks.isSome)(t.isEditorsChoice)&&t.isEditorsChoice,rating:t.rating,ratingCount:t.ratingCount,description:t.productDescription}}(0,t,r)),o.push(cs(t)),"adWithText"!==r&&o.push(as(e,t))):Ai(r)?(o.push(function(e,t,n,r){if(!Ai(n))throw new Error(`Invalid lockup context ${n} for ASCLockupFeatureMiniProductPage`)
const i=ue(e,r,wg),s=le(e,r,Lu)?e.loc.string("MiniProductPage.Category.Distributor"):i
let o,a=ue(e,r,"latestVersionInfo.versionDisplay");((0,ks.isNothing)(a)||0===a.length)&&(a=ue(e,r,"bundleVersion")),(0,ks.isSome)(a)&&a.length>0&&(o=e.loc.string("Version.Inline").replace("@@version_number@@",a))
const u=[o,s].filter(e=>(0,ks.isSome)(e)).join(" \u2022 ")
let c=t.productDescription
return((0,ks.isNothing)(c)||0===c.length)&&(c=ue(e,r,"description.short")),{$kind:"miniProductPageFeature",metadata:u,description:c}}(e,t,r,n)),o.push(as(e,t)),o.push(function(e,t,n,r){var i,s,o
const a=null!==(i=te(r,ol,!0))&&void 0!==i?i:[],u=null!==(s=C(a[0],$m))&&void 0!==s?s:void 0,c=null===(o=a[0])||void 0===o?void 0:o.id,l=[]
for(const e of a.slice(1)){const t=C(e,Hd),n=C(e,$m)
t===c&&(0,ks.isSome)(n)&&l.push({name:n,id:e.id})}return{$kind:"genreFeature",genreName:u,genreID:c,subgenres:l}}(0,0,0,n))):(0,ks.isSome)(n)&&"safariExtension"===r?o.push(function(e,t){return{$kind:"safariExtensionFeature",contentProviderTeamID:ue(e,t,"contentProviderTeamId")}}(e,n)):"webBrowser"===r?o.push(function(e){return{$kind:"bundleIDFeature",bundleID:e.bundleId}}(t)):(0,ks.isSome)(n)&&"singleSignOn"===r?o.push(function(e,t){return{$kind:Bu,requiresSSOEntitlement:le(e,t,"supportsSingleSignOnEnrollment")}}(e,n)):(0,ks.isSome)(n)&&(mi(r)||"signInWithApple"===r)&&o.push(us(e,t,n)),o.push(function(e){return{$kind:"variantLockupFeature",productVariantID:e.productVariantID}}(t)),(0,ks.isSome)(i)&&function(e){return e.props.enabled("lockupDisplayContextFeature")}(e)&&o.push(function(e){return{$kind:"displayContextFeature",headingKind:e.headingKind}}(i)),(0,ks.isSome)(n)&&(0,ks.isSome)(s)&&o.push(function(e,t,n,r){return{$kind:"appDistributionFeature",distributorBundleId:null==r?void 0:r.id,appVersionId:null==r?void 0:r.appVersionId}}(0,0,0,s)),(0,ks.isSome)(n)&&"appDistributionInstall"===r&&(o.push(function(e,t){const n=ee(e,t,mv)
return{$kind:"appDistributionInstallFeature",developerId:null==n?void 0:n.id,webDistributionDomains:k(t,"webDistributionDomains"),supportUrl:ue(e,t,Hl),contentRatingsBySystem:D(t,"contentRatingsBySystem"),isDistributor:le(e,t,Lu)}}(e,n)),o.push(us(e,t,n))),!(0,ks.isSome)(n)||"signInWithApple"!==r&&"wallet"!==r||o.push(function(e,t,n,r){let i,s
return"signInWithApple"!==r&&"wallet"!==r||(i=ue(e,n,Gh)),"signInWithApple"===r&&(s=ue(e,n,Dp)),{$kind:"extendedAttributesFeature",privacyPolicyUrl:i,eula:s}}(e,0,n,r)),("signInWithApple"===r||Ai(r))&&o.push(cs(t)),o}(e,n,s,t,l,o)
let f
if(qi(o))f=function(e,t,n){return{$kind:"appDistributionOffer",id:t,titles:{},subtitles:{},flags:4096,ageRating:null,metrics:[],appVersionId:n.appVersionId,distributorId:n.id}}(0,n.adamId,o)
else if((0,ks.isSome)(i))f=void 0
else{const r=Bi(e,n.buttonAction,n.offerDisplayProperties,t,d)
f=function(e,t,n,r,i){return[ts,ns,rs,is].reduce((t,s)=>s(e,t,n,r,i),t)}(e,r,t,u,s)}if("webBrowser"===t){const e=function(e){if((0,ks.isNothing)(e))return
const t=e
return t.$kind===ju?{$kind:"buyParamsFeature",appOffer:t}:void 0}(f);(0,ks.isSome)(e)&&d.push(e)}return{id:n.adamId,kind:a,metrics:u,icon:Yi(e,t,n),heading:null==c?void 0:c.text,title:Ki(e,t,n,s),subtitle:Qi(e,t,n),ageRating:Xi(t,n),offer:f,features:d}
default:throw new Error(`Unknown lockup context ${t}`)}})}function ts(e,t,n,r,i){if(!(0,ks.isNothing)(t))return(0,ks.isNothing)(t.subtitles)?t:{...t,subtitles:{...t.subtitles,...Zi(e,n,t)}}}function ns(e,t,n,r,i){if(!(0,ks.isNothing)(t))return(0,ks.isNothing)(r)||(0,ks.isNothing)(r.pageFields)?t:{...t,metrics:t.metrics.map(e=>({...e,fields:{...e.fields,...r.pageFields}}))}}function rs(e,t,n,r,i){const s=f(i,rd)
if("contingentPricing"!==n||(0,ks.isNothing)(t)||(0,ks.isNothing)(s)||s.offerType!==Rf)return t
const o=t,a=N(i,$h),u=s.offerID,c=s.IAPItemID,l=s.IAPItemName,d=s.IAPProductName
let h
const p=o.titles
if(p.standard=e.loc.string(Mu),p.discountOwnedParent=e.loc.string(oa),p.discountUnownedParent=e.loc.string("OfferButton.Title.SubscribeAndInstall"),h=a?ss(0,o,s):o,a&&!s.eligibleForDiscountedPrice){const t=os(e,s.streamlinedOfferData)
p.discountOwnedParent=t}return{...{...o,metrics:o.metrics.map(e=>({...e,fields:{...e.fields,contingentPriceEntityId:u}}))},$kind:wc,titles:p,organicOffer:o,streamlinedOffer:h,isStreamlined:a,contingentItemID:Number(u),offerID:u,iapItemID:Number(c),iapItemName:l,iapProductName:d,offerType:0}}function is(e,t,n,r,i){const s=f(i,rd)
if("contingentPricing"!==n||(0,ks.isNothing)(t)||(0,ks.isNothing)(s)||s.offerType!==Xf)return t
const o=t,a=N(i,$h),u=s.offerID,c=s.IAPItemID,l=s.IAPItemName,d=s.IAPProductName
let h
const p=o.titles
if(p.standard=e.loc.string(Mu),p.discountOwnedParent=e.loc.string("OfferButton.Title.Redeem"),p.discountUnownedParent=e.loc.string("OfferButton.Title.RedeemAndInstall"),h=a?ss(0,o,s):o,a&&!s.eligibleForDiscountedPrice){const t=os(e,s.streamlinedOfferData)
p.discountOwnedParent=t}return{...{...o,metrics:o.metrics.map(e=>({...e,fields:{...e.fields,contingentPriceEntityId:u}}))},$kind:wc,titles:p,organicOffer:o,streamlinedOffer:h,isStreamlined:a,contingentItemID:null,offerID:u,iapItemID:Number(c),iapItemName:l,iapProductName:d,offerType:1}}function ss(e,t,n){const r=new $y(t.baseBuyParams),i=c(n.streamlinedOfferData,Zw),s=new $y(i)
return s.set(Wd,r.get(Wd,null),null),t.flags|=2048,{...t,baseBuyParams:s.toString()}}function os(e,t){const n=c(t,gw),r=l(t,vw),i=c(t,Gw)
if((0,ks.isNothing)(n)||(0,ks.isNothing)(i))return
const s=Ut(0,n,r),o=$t(e,s.type,s.periodDuration,i)
return e.loc.string("OfferButton.Title.SubscribeForPrice").replace(qa,o)}function as(e,t,n){let r,i
return t instanceof Cy&&(t.screenshots&&t.screenshots.length>0&&(r={artwork:t.screenshots[0].artwork.map(t=>Si(e,t)),mediaPlatform:Ti(t.screenshots[0].mediaPlatform)}),t.trailers&&t.trailers.length>0&&(i={videos:t.trailers[0].videos.map(t=>function(e,t){return(0,Ds.context)("translateVideo",()=>({videoURL:t.videoUrl,preview:Si(e,t.preview)}))}(e,t)),mediaPlatform:Ti(t.trailers[0].mediaPlatform)})),{$kind:"mediaFeature",screenshots:r,trailers:i}}function us(e,t,n){var r
return{$kind:"shortNameFeature",shortName:null!==(r=ue(e,n,Sh))&&void 0!==r?r:t.title}}function cs(e){return{$kind:"developerNameFeature",developerName:e.developerName}}function ls(e,t,n,r){if((0,Cs.isSome)(r)){if(!U(t,ds(r)))return!1
if(yi(n))return!1}if(e.client.isTV&&!zr(e,kr(e,t),"tv",!1,!1))return!1
if(mi(n)&&!le(e,t,vp))return!1
if("safariExtension"===n){if(!le(e,t,"hasSafariExtension"))return!1
const n=kr(e,t),r=jr(e,t)
if(!zr(e,n,e.client.deviceType,!1,r))return!1}return!0}function ds(e){switch(e){case Ug:return lm
case xg:return cv
case yw:return hg
case Sf:return Mm
case"visionOS":return rv
default:return null}}function fs(e,t,n,o,u,f){return(0,Ds.context)("buildLockup",()=>{const h=function(e,t,n,r){const i=mt(e,Zv)&&vt(e,n),s=ds(r)
switch(t){case"overlay":case"overlayClip":case"standard":case"gameCenter":case"gameCenterArcade":case"gameCenterGeneral":case"offerOnly":case"contingentPricing":case"safariExtension":case"signInWithApple":case"singleSignOn":case"tvProvider":case"tvAppOpenIn":case"appStoreInstall":case"appDistributionInstall":case"wallet":case"webBrowser":return{metricsOptions:{pageInformation:new mP,locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:0,shouldNavigateToProductPage:i,attributePlatformOverride:s}
case"watch":return{metricsOptions:{pageInformation:new mP,locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:0,clientIdentifierOverride:"com.apple.AppStore.BridgeStoreExtension",shouldNavigateToProductPage:i,attributePlatformOverride:s}
case"adWithText":case"adWithPortraitScreenshots":case"adWithLandscapeScreenshot":case"adWithPortraitVideo":case"adWithLandscapeVideo":case"adMaterialWithPortraitScreenshots":case"adMaterialWithLandscapeScreenshots":case"adGridWithPortraitScreenshots":case"adGridWithLandscapeScreenshots":const n=new mP
return n.iAdInfo=new vP(e,Ag,vP.createInitialSlotInfos(e,Ag,null,null)),{metricsOptions:{pageInformation:n,locationTracker:{rootPosition:0,locationStack:[]}},artworkUseCase:4,shouldNavigateToProductPage:i,attributePlatformOverride:s}
default:throw new Error(`Unknown context ${t}`)}}(e,n,o,u)
switch(t){case"app":case"appBundle":let p
return yi(n)?(hs(e,n,o),p=function(e,t,n,o,u=null,f){return Ds.context("mixedMediaLockupFromData",()=>{const h=new Cy
return zn(e,t,h,n,null,()=>{(function(e,t,n,o,u){var c,l,f,h,p,w,g,v,m,b,A
if(i(t))return
if(n.showMetadataInformationInLockup=e.bag.isLLMSearchTagsEnabled||e.client.isPad,!e.client.isPhone)return
const y=d(t,jg),O=null!==(l=null===(c=null==y?void 0:y.displayStyle)||void 0===c?void 0:c.metadataRibbon)&&void 0!==l?l:null===(f=null==o?void 0:o.displayStyle)||void 0===f?void 0:f.metadataRibbon
let P=[]
P=e.bag.isLLMSearchTagsEnabled?null!==(g=null!==(p=null===(h=null==y?void 0:y.displayStyle)||void 0===h?void 0:h.llmRibbon)&&void 0!==p?p:null===(w=null==y?void 0:y.displayStyle)||void 0===w?void 0:w.metadataRibbon)&&void 0!==g?g:null===(v=null==o?void 0:o.displayStyle)||void 0===v?void 0:v.metadataRibbon:null!==(b=null===(m=null==y?void 0:y.displayStyle)||void 0===m?void 0:m.metadataRibbon)&&void 0!==b?b:null===(A=null==o?void 0:o.displayStyle)||void 0===A?void 0:A.metadataRibbon
const I=function(e,t,n,o,a,u=xP){if(i(o))return[]
const c=[],l=new Set
for(const d of o)if(!i(d))for(const i of d){const o=u[i]
if(r(o))continue
const d=o(e,t,n,l,a.metricsOptions)
if(s(d)){c.push(...d)
break}}return c}(e,t,n,O,u),S=function(e,t,n,o,u,c=xP){if(i(o))return[]
const l=a(t.meta,"associations.tags.data"),f=[]
let h=0,p=0
const w=new Set
for(const a of o){const o=Array.isArray(a)?a:[a]
if(!i(o))for(const i of o){const o=i===Tl
let a,g=t,v=""
if(i===td){const n=d(t,jg);(0,Cs.isSome)(null==n?void 0:n.rankedSecondaryGenreShortDisplayNames)&&(v=null==n?void 0:n.rankedSecondaryGenreShortDisplayNames[p]),(0,Cs.isSome)(v)?(a=Hn(e,v,0,w,u.metricsOptions),p+=1):a=[]}else{const s=c[i]
if(r(s))continue
g=o?l[h]:t,a=s(e,g,n,w,u.metricsOptions),h=o?h+1:h}if(s(a)){f.push(...a)
for(const e of a)(0,Cs.isSome)(e.impressionMetrics)&&Ue(u.metricsOptions.locationTracker)
break}}}return f}(e,t,n,P,u)
n.metadataRibbonItems=I,n.searchTagRibbonItems=S,n.shouldEvenlyDistributeRibbonItems=!e.bag.isLLMSearchTagsEnabled})(e,t,h,u,n),function(e,t,n,o,u,f){var h
if(!t)return
if(u.isNetworkConstrained)return
const p=null!==(h=u.metricsOptions.isAdvert)&&void 0!==h&&h
Ds.context("copyMediaIntoMixedMediaLockup",()=>{n.screenshots=_r(e,t,4,null,u.clientIdentifierOverride,null,p,f)
const h=n.screenshots[0]
n.trailers=[]
const w=function(e,t,n,i,o,u=!1,f){const h=function(e,t,n,i=null,o=null,u=!1,f){return Ds.context("platformVideoPreviewFromData",()=>{r(o)&&(o=z(e,t))
const h=function(e,t,n,r,i){return we(e,t,n,r?Yc:Hw,void 0)}(e,t,o,u),p={}
if(!h)return null
let w=Dr(e,t,e.host.clientIdentifier,e.client.deviceType)
if(s(i)){const e=[]
for(const t of w)i.includes(t)&&e.push(t)
w=e}if(0===w.length)return null
for(const t of w){const r=Yr(e,t,e.client.screenSize)
for(const t of Object.keys(h)){const r=a(h,t),i=[]
for(const o of r){const r=d(o,Aw)
if(!r){Ds.unexpectedNull(Pv,jp,`videoPreviewsByType.${t}.previewFrame`)
continue}const a=c(o,Jv)
if(!a){Ds.unexpectedNull(Pv,dm,`videoPreviewsByType.${t}.video`)
continue}const u=qe(e,c(r,wm),l(r,bw),l(r,xw),null,null,c(r,Uc))
s(f)&&(u.crop=f),i.push(new _b(a,u,n))}p[t]=i}for(const e of r)if(p[e])return new LP(p[e],Er(0,t,e))}return null})}(e,t,n,null,null,u,f)
if(!h)return null
const p=h.videos,w=[]
if(p&&p.length>0)for(const t of p)Pr(e,t,{...i,id:o}),w.push(t)
let g=null
return w.length>0&&(g=new Ny,g.videos=w,g.mediaPlatform=h.mediaPlatform),g}(e,t,o,u.metricsOptions,n.adamId,p,f)
s(w)&&(i(h)||w.mediaPlatform.isEqualTo(h.mediaPlatform))&&n.trailers.push(w)})}(e,t,h,o,n,f),function(e,t,n,r){var i
if(!e.client.isPhone)return
const o=c(t.meta,"imageLockupFromData")
s(o)?n.screenshotsDisplayStyle=o:s(null===(i=null==r?void 0:r.displayStyle)||void 0===i?void 0:i.screenshots)&&(n.screenshotsDisplayStyle=r.displayStyle.screenshots)}(e,t,h,u)}),h})}(e,o,h,function(e){return{playbackControls:{prominentPlay:!0,fullScreenToggle:!0,inlinePlayPause:!0,muteUnmute:!0},autoPlayPlaybackControls:E(e)}}(e))):(hs(e,n,o),p=tr(e,o,h)),es(e,n,p,u,o,f)
case"inAppPurchase":const w=nr(e,o,h)
return es(e,n,w,u)
default:throw new TypeError(`Unknown lockup kind ${t}`)}})}function hs(e,t,n){if("appDistributionInstall"!==t)return
const r=function(e,t){const n=pe(e)
for(const r of n)if(o(oe(e,t,Fo,r)))return r
return he(e)}(e,n),i=oe(e,n,Fo,r)
if(o(i)){const t=Object.keys(i).sort((e,t)=>{var n,r
const i=null!==(n=l(e))&&void 0!==n?n:0
return(null!==(r=l(t))&&void 0!==r?r:0)-i}),s=i[t[0]]
if((0,Cs.isSome)(s)&&(n.attributes.platformAttributes[`${r}`]=s),(0,Cs.isNothing)(n.attributes[qw])){let t=ae(e,n,qw,r)
0===t.length&&(t=[hv]),n.attributes[qw]=t}}}function ps(e,t,n,i,s){return(0,Ds.context)("buildSingleLockup",()=>{const o=gi(e,s)
if(r(o))throw new Error("Lockup response contains no data")
if(!ls(e,o,n,i))throw new Error("Lockup response cannot be translated")
return fs(e,t,n,o,i)})}function ws(e,t,n,r,i){return(0,Ds.context)("buildMultipleLockups",()=>({lockups:vi(i).reduce((i,s)=>(ls(e,s,n,r)&&i.push(fs(e,t,n,s,r)),i),[])}))}async function gs(e,t){return typeof campaignAttributionService!==sg?await campaignAttributionService.processRedirectURL(t):await e.network.fetch({url:e.bag.redirectUrlEndpoint,method:"POST",headers:{"Content-Type":ef},body:`url=${encodeURIComponent(t)}`}).then(e=>e.ok)}var vs,ms,bs,As,ys,Os,Ps,Is,Ss,Ts,Es,_s,Rs,Ds,ks,Cs,xs,Ns,Fs,Ms,Ls,Bs,js,Us,$s,Vs,Gs,Ws,Hs,qs,zs,Ys,Js,Ks,Qs,Xs,Zs,eo,to,no,ro,io={}
e.r(io),e.d(io,{downloadingOrdering:()=>fO,downloadingOrderingCompact:()=>hO,notPurchasedOrdering:()=>lO,notPurchasedOrderingCompact:()=>dO,notPurchasedSpotlightIndex:()=>aO,purchasedOrdering:()=>uO,purchasedOrderingCompact:()=>cO,purchasedSpotlightIndex:()=>oO}),vs={},e.r(vs),e.d(vs,{downloadingOrdering:()=>AO,downloadingOrderingCompact:()=>yO,notPurchasedOrdering:()=>mO,notPurchasedOrderingCompact:()=>bO,notPurchasedSpotlightIndex:()=>wO,purchasedOrdering:()=>gO,purchasedOrderingCompact:()=>vO,purchasedSpotlightIndex:()=>pO}),ms={},e.r(ms),e.d(ms,{notPurchasedOrdering:()=>SO,notPurchasedSpotlightIndex:()=>PO,purchasedOrdering:()=>IO,purchasedSpotlightIndex:()=>OO}),bs={},e.r(bs),e.d(bs,{notPurchasedOrdering:()=>RO,notPurchasedSpotlightIndex:()=>EO,purchasedOrdering:()=>_O,purchasedSpotlightIndex:()=>TO}),As={},e.r(As),e.d(As,{notPurchasedOrdering:()=>xO,notPurchasedSpotlightIndex:()=>kO,purchasedOrdering:()=>CO,purchasedSpotlightIndex:()=>DO}),ys={},e.r(ys),e.d(ys,{notPurchasedOrdering:()=>LO,notPurchasedSpotlightIndex:()=>FO,purchasedOrdering:()=>MO,purchasedSpotlightIndex:()=>NO}),Os={},e.r(Os),e.d(Os,{notPurchasedOrdering:()=>$O,notPurchasedSpotlightIndex:()=>jO,purchasedOrdering:()=>UO,purchasedSpotlightIndex:()=>BO}),Ps={},e.r(Ps),e.d(Ps,{notPurchasedOrdering:()=>HO,notPurchasedSpotlightIndex:()=>GO,purchasedOrdering:()=>WO,purchasedSpotlightIndex:()=>VO}),Is={},e.r(Is),e.d(Is,{notPurchasedOrdering:()=>JO,notPurchasedSpotlightIndex:()=>zO,purchasedOrdering:()=>YO,purchasedSpotlightIndex:()=>qO})
const so="expanded",oo="applewatch",ao="is32bitOnly",uo="requires32bit",co="is.workflow.my.app",lo="com.apple.mobileme.fmf1",fo="com.apple.findmy",ho="8.3",po="iPad",wo="com.apple.NanoCompass.watchkitapp",go="com.apple.DeepBreathing",vo="com.apple.Depth",mo="com.apple.Mandrake",bo="isIOSBinaryMacOSCompatible",Ao="ACTION_SETTINGS",yo="shareSheet",Oo="SHARE_APP_EVENT_SUBTITLE",Po="j:mm",Io="systemimage://bell.fill",So="appPromotionTitle",To="OfferItems.FormattedDate.RedemptionDate.DateFormat",Eo="OfferItems.Available.Now",_o="@@date@@",Ro="upsell",Do="fileSizeByDevice",ko="promotionalText",Co="backgroundAssetsInfo",xo="backgroundAssetsInfoWithOptional",No="installSizeByDeviceInBytes",Fo="versionAttributes",Mo="appBinaryTraits",Lo="requiresRosetta",Bo="iphone5",jo="iphone6",Uo="iphone6+",$o="maxEssentialInstallSizeInBytes",Vo="maxDownloadSizeInBytes",Go="maxInstallSizeInBytes",Wo="Mac",Ho="editorialArtwork.contentLogoTrimmed",qo="updatedFallRegulatoryAssets",zo="AgeRating-AU-18",Yo="CONTROLLER_RECOMMENDED",Jo="bundle-id",Ko="above",Qo="offerButtonPress",Xo="promotedContent",Zo="contentRatingsBySystem.appsApple.name",ea="developerName",ta="firstVersionSupportingInAppPurchaseApi",na="systemimage://ipad.landscape",ra="systemimage://iphone",ia="isVerifiedForAppleSiliconMac",sa="widthConstrainedLockup",oa="OfferButton.Title.Subscribe",aa="descending",ua="editorialItemActionFromData",ca="displaySubStyle",la="NumberedList",da="iad.lineItem",fa="clientIdentifierOverride",ha="targetId",pa="clientCorrelationKey",wa="pageRender",ga="hasiAdData",va="viewedInfo",ma="viewedInfoDetailed",ba="cookie",Aa="ownerDsid",ya="pageExit",Oa="trampoline",Pa="trampolineContext",Ia="widgetContext",Sa="contingentItemId",Ta="browserChoiceScreenBuy",Ea="clip",_a="buttonName",Ra="iAdOdmlSuccess",Da="metadata",ka="iAdIsSpecifiedCreativeUsed",Ca="APPSTORE_SEARCH_LANDING_PAGE",xa="APPSTORE_SEARCH_RESULT_PAGE",Na="APPSTORE_TODAY_TAB",Fa="APPSTORE_PRODUCT_PAGE",Ma="APPSTORE_PRODUCT_PAGE_DOWNLOAD",La="iAdSlotId",Ba="iAdPageCustomId",ja="macSoftware",Ua="artist",$a="pending",Va="modeType",Ga="FreeTrial",Wa="PayUpFront",Ha="PayAsYouGo",qa="@@price@@",za="rebuy=true",Ya="OfferButton.FlowPreview.Get",Ja="OfferButton.FlowPreview.Preorder",Ka="systemimage://bell.badge.fill",Qa="contentRatingsBySystem.appsApple.value",Xa="preorderedSubscribed",Za="preorderedNotSubscribed",eu="OfferButton.Title.View",tu="productPageBrowserChoice",nu="preorderSubscribed",ru="preorderNotSubscribed",iu="INTRO_PRICE_OFFER_SUBTITLE",su="NOT_COMPATIBLE_BANNER",ou="NOT_COMPATIBLE_BANNER_NO_LINK",au="UNSUPPORTED_CAPABILITIES",uu="UNSUPPORTED_IOS_VERSION",cu="UNSUPPORTED_WATCHOS_VERSION",lu="systemimage://visionpro",du="experimentLocale",fu="pageCustomId",hu="displayable-kind",pu="genreName",wu="siriRemoteOrControllerRequired",gu="siriRemoteRequired",vu="controllerRequired",mu="controllerOptional",bu="EDITORS_CHOICE_SINGLE_LINE",Au="resource://motion.circle.fill",yu="supportedLocales",Ou="BADGE_PLAYERS_HEADING",Pu="{maxPlayers}",Iu="BADGE_NO_RATINGS_CAPTION",Su="contentRatingsBySystem.appsAustralia.rank",Tu="contentRatingsBySystem.appsFrance.rank",Eu="contentRatingsBySystem.appsKorea.rank",_u="contentRatingsBySystem.appsKorea.name",Ru="highlightedTextView",Du="@@chartPosition@@",ku="developerInfo",Cu="divider",xu="errors",Nu="allowedDistributorIds",Fu="impressionTimes",Mu="OfferButton.Title.InstallApp",Lu="isDistributor",Bu="singleSignOnFeature",ju="appOffer",Uu="OfferButton.Title.Install",$u="trending-contents",Vu="asString",Gu="asNumber",Wu="asBoolean",Hu="asJSONValue",qu="catalog",zu="engagement",Yu="view/see-all",Ju="its_qt",Ku="adId",Qu="prefix",Xu="username",Zu="password",ec="port",tc="-caseInsensitive",nc="signatureResumption",rc="checkForLongUrl",ic="getPass",sc="certId",oc="metrics-identifiers",ac="language",uc="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/accountSummary",cc="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/redeemLandingPage",lc="IPHONE_BRAND_NAME",dc="IPAD_BRAND_NAME",fc="APPLE_TV_BRAND_NAME",hc="APPLE_WATCH_BRAND_NAME",pc="MAC_BRAND_NAME",wc="contingentOffer",gc="timer",vc="bundle",mc="com.apple.Arcade",bc="com.apple.appstorecomponentsd",Ac="com.apple.AppStore.Widgets",yc="com.apple.visionproapp",Oc="primaryTerm",Pc="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/signupWizard",Ic="iPhone",Sc="isStandaloneWithCompanionForWatchOS",Tc="isDeliveredInIOSAppForWatchOS",Ec="isXROSCompatible",_c="presentModal",Rc="systemimage://square.and.arrow.up",Dc="customers-also-bought-apps-download",kc="module",Cc="deepLink",xc="useTrunkArtwork",Nc="editorialArtwork.brandLogo",Fc="custom",Mc="black",Lc="Action.OK",Bc="requirementsByDeviceFamily",jc="customAttributes",Uc="checksum",$c="appleWatch_2021",Vc="appleWatch_2018",Gc="appleWatch",Wc="iphone_6_5",Hc="iphone_d73",qc="iphone_d74",zc="editorialArtwork.splashFullScreen",Yc="customVideoPreviewsByTypeForAd",Jc="systemimage://square.and.pencil",Kc="siri",Qc="hasInAppPurchases",Xc="jpeg",Zc="status",el="Lockup.Heading.Arcade",tl="userRating.ratingCount",nl="userRating.value",rl="discounts",il="item.offer.buyParams",sl="offerId",ol="genres",al="genreNames",ul="List",cl="targetType",ll="data-metrics-impressions-low-latency",dl="media",fl="exit",hl="overridePageContext",pl="userId",wl="dsId",gl="refAppType",vl="widget",ml="context",bl="BrowserChoice",Al="com.apple.AppStore.clipOverlay",yl="paymentTopicFromBag",Ol="overlayClip",Pl="offerReleaseDate",Il="appState",Sl="buyInitiate",Tl="tag",El="iAdEligible",_l="impressionParentId",Rl="searchGhostHintPrefix",Dl="searchGhostHintTermPhase",kl="searchGhostHintTerm",Cl="dsid",xl="@@durationCount@@",Nl="@@postTrialPriceDuration@@",Fl="test",Ml="update",Ll="PREORDER_NOTIFY_AUTOMATIC_DOWNLOAD_MESSAGE",Bl="arcade-preorder",jl="confirmation",Ul="notSubscribed",$l="OfferButton.IntroPrice.FreeTrial",Vl="discountOwnedParent",Gl="discountUnownedParent",Wl="experimentId",Hl="supportUrl",ql="chartPositions",zl="highMotion",Yl="{minPlayers}",Jl="{releaseDate}",Kl="{count}",Ql="Offer.Expanded.Title.ComingSoon",Xl="externalVersionId",Zl="marker",ed="supportsGameController",td="rankedSecondaryGenre",nd="results",rd="subscriptionOfferMetadata",id="ascLockupContext",sd="personalization-data",od="https",ad="landing:new-protocol",ud="strict",cd="ratings",ld="suffix",dd="apps-media-api-edge-host",fd="arcadeGroupingLockup",hd="blue",pd="FlowAction",wd="pageChange",gd="com.apple.TVAppStore.AppStoreTopShelfExtension",vd="checkForPreorders",md="meta.discountOffer",bd="CONTROLLER_OPTIONAL",Ad="SIRI_REMOTE_OR_CONTROLLER_REQUIRED",yd="SIRI_REMOTE_REQUIRED",Od="png",Pd="close",Id="dismiss",Sd="redemptionExpirationDate",Td="personal-recommendations",Ed="external",_d="messagesScreenshots",Rd="supportsFunCamera",Dd="supportURLForLanguage",kd="websiteUrl",Cd="tvRect",xd="appleWatch_2024",Nd="appleWatch_2022",Fd="iphone_5_8",Md="appletv",Ld="editorial-elements",Bd="standardApp",jd="platformAttributes.ios.bundleId",Ud="abExperiment",$d="editorialBadgeType",Vd="editorialPriority",Gd="isSubscription",Wd="appExtVrsId",Hd="parentId",qd="multiple-system-operators",zd="pageReferrer",Yd="advertDeviceWindow",Jd="iAdMetadata",Kd="iAdImpressionId",Qd="position",Xd="prevPage",Zd="platformDisplayStyle",ef="application/x-www-form-urlencoded",tf="idType",nf="ad_container",rf="iAdAppStoreClientRequestId",sf="impressionId",of="customProductPage",af="OfferButton.Title.Get",uf="supportsCompanionCheck",cf="{appName}",lf="checkmark",df="trial",ff="OfferButton.IntroPrice.Trial",hf="size",pf="systemimage://exclamationmark.triangle",wf="webBrowser",gf="install",vf="contentRating",mf="chartPosition",bf="BADGE_AGE_RATING_YEARS",Af="BADGE_AGE_RATING",yf="BADGE_MFI_HEADING",Of="systemimage://gamecontroller.fill",Pf="systemimage://person.crop.square",If="MMM d, yyyy",Sf="watchOS",Tf="xrOS",Ef="search-hints",_f="imageWithLabel",Rf="contingent",Df="urlOffer",kf="multiplex",Cf="customers-also-bought-apps-with-download-intent",xf="user-reviews",Nf="searchLanding:see-all",Ff="landing",Mf="customArtwork",Lf="hash",Bf="arcadeComingSoon",jf="actionLinks",Uf="message",$f="com.apple.Arcade.ArcadeTopShelfExtension",Vf="fields",Gf="requiresGameController",Wf="CONTROLLER_REQUIRED",Hf="customScreenshotsByTypeForAd",qf="EventDetails",zf="lockupArtwork",Yf="eventModule",Jf="inAppEventId",Kf="branch-app",Qf="<br>",Xf="winback",Zf="with",eh="target",th="isHighMotion",nh="lcr",rh="round",ih="heic",sh="mso",oh="secondaryText",ah="customDeepLink",uh="href",ch="refApp",lh="impressionType",dh="extRefApp2",fh="extRefUrl2",hh="offerType",ph="searchPrefix",wh="iAdTemplateType",gh="ARCADE_PREORDER_LOCKUP_COMING_SOON",vh="{price}",mh="languages",bh="storefrontContentRating",Ah="allProductReviewActions",yh="productReviewsHeader",Oh="genreShortDisplayName",Ph="textLabel",Ih="app-distribution",Sh="shortName",Th="many",Eh="arcadeProductPage",_h="textLinksShelf",Rh="boolean",Dh="gift",kh="externalUrl",Ch="meta.contingentItemOffer",xh="minimumWatchOSVersion",Nh="price",Fh="<b>",Mh="</b>",Lh="share",Bh="search-results",jh="textColor4",Uh="topic",$h="supportsStreamlinedBuy",Vh="additionalTerms",Gh="privacyPolicyUrl",Wh="charts",Hh="ipod",qh="pill",zh="unadorned",Yh="canonicalId",Jh="named",Kh="actionUrl",Qh="impressionQueue",Xh="eventVersion",Zh="advertRotation",ep="pageContext",tp="overlay",np="softwareType",rp="PREORDER_NOTIFY_MESSAGE",ip="NOT_COMPATIBLE_BANNER_TEMPLATE",sp="{linkTitle}",op="ppid",ap="few",up="GET",cp="code",lp="toast",dp="location",fp="LearnMore",hp="isCanvasAvailable",pp="enrichedEditorialNotes",wp="ipadPro",gp="ipad_10_5",vp="isGameCenterEnabled",mp="lockupSmall",bp="grouping",Ap="arcadeApp",yp="pageUrl",Op="extRefUrl",Pp="refUrl",Ip="webBrowserUpdates",Sp="controller",Tp="BADGE_MFI_SUPPORTED",Ep="userRating",_p="arcadeProductPageInlineMessage",Rp="productPageInlineMessage",Dp="eula",kp="coercedValue",Cp="number",xp="actionType",Np="back",Fp="badge",Mp="branch",Lp="roundedRect",Bp="salables",jp="object",Up="types",$p="tvos",Vp="internal",Gp="ipadPro_2018",Wp="ipad_11",Hp="expectedReleaseDate",qp="click",zp="pageFields",Yp="iAdContainerId",Jp="{title}",Kp="NOT_COMPATIBLE_BANNER_LINK_TITLE",Qp="compatibilityAnnotation",Xp="allProductReviews",Zp="tapToRateProductReviewAction",ew="writeAReviewProductReviewAction",tw="notPurchasedRatingsAndReviews",nw="purchasedRatingsAndReviews",rw="apps.apple.com",iw="host",sw="one",ow="arcadeGeneric",aw="editorialItem",uw="disabled",cw="NO_BADGE",lw="term",dw="isFirstPartyHideableApp",fw="iap",hw="remoteControllerRequirement",pw="customers-also-bought-apps",ww="iad",gw="recurringSubscriptionPeriod",vw="numOfPeriods",mw="@@count@@",bw="width",Aw="previewFrame",yw="tvOS",Ow="editorialBadgeInfo",Pw="iAdPlacementId",Iw="hostApp",Sw="iAdId",Tw="userProductReviews",Ew="bundleParents",_w="textCards",Rw="isStandaloneForWatchOS",Dw="description.standard",kw="annotation",Cw="contexts",xw="height",Nw="debug",Fw="{learnMoreLink}",Mw="open",Lw="actionDetails",Bw="iAdSlotInfo",jw="{osVersion}",Uw="editorsChoiceProductReviews",$w="bundleChildren",Vw="transparent",Gw="priceFormatted",Ww="offerName",Hw="videoPreviewsByType",qw="deviceFamilies",zw="query",Yw="pageId",Jw="Software",Kw="rating",Qw="notPurchasedLinks",Xw="paragraph",Zw="buyParams",eg="APPLOCKUP",tg="upsellMarketingItem",ng="metrics",rg="screenshotsByType",ig="colored",sg="undefined",og="offers",ag="other",ug="inAppPurchases",cg="subscriptions",lg="short",dg="protocol",fg="expectedReleaseDateDisplayFormat",hg="appletvos",pg="data",wg="genreDisplayName",gg="eventType",vg="iAdMissedOpportunityReason",mg="productReviewsFooter",bg="category",Ag="searchResults",yg="advertSlotReporting",Og="rgb",Pg="realityDevice",Ig="collections",Sg="pageType",Tg="review_summarization",Eg="flowPreview",_g="editorial-pages",Rg="pathname",Dg="reviewSummary",kg="view",Cg="purchasedLinks",xg="macOS",Ng="searchLanding",Fg="text/x-apple-as3-nqml",Mg="marketing-items",Lg="developers",Bg="type",jg="meta",Ug="iOS",$g="artistName",Vg="groupings",Gg="productVideo",Wg="contingent-items",Hg="arcade-apps",qg="editorialNotes",zg="productPage",Yg="preorder",Jg="adamId",Kg="impressions",Qg="recommendations",Xg="productArtwork",Zg="offer-items",ev="product",tv="editorialQuote",nv="mostRecentVersion",rv="xros",iv="isAppleWatchSupported",sv="kind",ov="preorderDisclaimer",av="never",uv="requiredCapabilities",cv="osx",lv="infer",dv="featuredIn",fv="account",hv="iphone",pv="compatibilityControllerRequirement",wv="ipad",gv="primary-content",vv="card-contents",mv="developer",bv="genre",Av="minimumOSVersion",yv="subtitle",Ov="chart",Pv="ignoredValue",Iv="productPageYMALDuringDownload",Sv="macRequiredCapabilities",Tv="searchTerm",Ev="defaultValue",_v="productRatings",Rv="action",Dv="messages",kv="coercible",Cv="editorsChoice",xv="privacyFooter",Nv="videos",Fv="light",Mv="informationRibbon",Lv="moreByDeveloper",Bv="label",jv="in-apps",Uv="appEvents",$v="privacyTypes",Vv="productPageYMAL",Gv="true",Wv="capabilities",Hv="article",qv="privacyHeader",zv="similarItems",Yv="none",Jv="video",Kv="bundleId",Qv="isPreorder",Xv="Arcade",Zv="lockup",em="search",tm="its_id",nm="white",rm="static",im="friendsPlaying",sm="editorialVideo",om="sequential",am="link",um="default",cm="editorialArtwork",lm="ios",dm="string",fm="description",hm="information",pm="vision",wm="url",gm="inline",vm="leading",mm="reviews",bm="achievements",Am="dark",ym="app",Om="header",Pm="topLockup",Im="today",Sm="editorial-items",Tm="pad",Em="app-bundles",_m="unknown",Rm="screenshots",Dm="navigate",km="artwork",Cm="phone",xm="app-events",Nm="arcade",Fm="mac",Mm="watch",Lm="button",Bm="standard",jm="contents",Um="apps",$m="name",Vm="page",Gm="shelf"
Ss=e(5881),Ts=e(9100),Es=e(8836),_s=e(1222)
const Wm=(0,(Rs=e(900)).makeMetatype)("app-store:storeMetrics"),Hm=(0,Rs.makeMetatype)("app-store:amsEngagement"),qm=(0,Rs.makeMetatype)("app-store:device"),zm=(0,Rs.makeMetatype)("app-store:user"),Ym=(0,Rs.makeMetatype)("app-store:metricsIdentifiers"),Jm=(0,Rs.makeMetatype)("app-store:personalizationStore"),Km=(0,Rs.makeMetatype)("app-store:arcade"),Qm=(0,Rs.makeMetatype)("app-store:gameCenter"),Xm=(0,Rs.makeMetatype)("app-store:resilientDeepLinks"),Zm=(0,Rs.makeMetatype)("app-store:ads"),eb=(0,Rs.makeMetatype)("app-store:onDeviceRecommendationsManager"),tb=(0,Rs.makeMetatype)("app-store:onDeviceSearchHistoryManager"),nb=(0,Rs.makeMetatype)("app-store:featureFlags"),rb=(0,Rs.makeMetatype)("app-store:mediaTokenService"),ib=(0,Rs.makeMetatype)("app-store:adsLocalizer"),sb=(0,Rs.makeMetatype)("app-store:appDistribution"),ob=(0,Rs.makeMetatype)("app-store:timeoutManager"),ab=(0,Rs.makeMetatype)("app-store:treatmentStore"),ub=(0,Rs.makeMetatype)("app-store:userDefaults")
Ds=e(4172),ks=e(2450)
const cb={}
class lb{constructor(e){this.implementation=e}}class db extends lb{get isSupportEnabled(){return s(this.implementation)&&this.implementation.isSupportEnabled}get isRosettaAvailable(){return s(this.implementation)&&this.implementation.isRosettaAvailable}}db.type=(0,Rs.makeMetatype)("app-store:as-wrapper"),Cs=e(5542)
class fb extends lb{constructor(e,t){super(e),this.cachedEnableAdditionalLoggingForPPV=null}get todayAdMediumLockupScreenshotEnabled(){var e
return null!==(e=this.implementation.boolean("today-ad-medium-lockup-screenshots-enabled"))&&void 0!==e&&e}get todayAdMediumLockupScreenshotAnimationEnabled(){var e
return null===(e=this.implementation.boolean("today-ad-medium-lockup-screenshots-animation-enabled"))||void 0===e||e}get trendingSearchesURL(){return this.implementation.url("trending-searches")}get searchHintsURL(){return this.implementation.url("searchHints")}get personalizedUserReviewURL(){return this.implementation.url("personalizedUserReviewUrl")}get personalizedUserReviewEnabled(){return this.implementation.boolean("personalizedUserReviewEnabled")}get userRateURL(){return this.implementation.url("p2-application-user-rate-content")}get writeReviewURL(){return this.implementation.url("p2-application-user-write-review")}get accessoryRoomURL(){return this.implementation.url("p2-accessory-room")}get passbookMainURL(){return this.implementation.url("passbook")}get libraryLinkURL(){return this.implementation.url("library-link")}get metricsConfiguration(){return w(this.implementation.dictionary(ng))}get metricsPaymentNamespaceEnabled(){if(i(this.metricsPaymentTopic))return!1
const e=w(this.implementation.dictionary(oc)),t=d(e,"APPSTORE_PAYMENTS_ENGAGEMENT"),n=d(e,"APPSTORE_PAYMENTS_ENGAGEMENT_CLIENT")
return(0,Cs.isSome)(t)&&0!==t.length&&(0,Cs.isSome)(n)&&0!==n.length}get metricsPaymentTopic(){var e
return null!==(e=c(this.metricsConfiguration,"topics.APPSTORE_PAYMENTS_ENGAGEMENT_TOPIC"))&&void 0!==e?e:null}get personalizationUserIdEnabled(){const e=d(w(this.implementation.dictionary(oc)),"APPSTORE_PERSONALIZATION")
return(0,Cs.isSome)(e)&&0!==Object.keys(e).length}get language(){return this.implementation.string(ac)}get mediaApiLanguage(){return this.implementation.string("language-tag")||this.implementation.string(ac)}get termsAndConditionsURL(){return this.implementation.url("p2-service-terms-url")}get usePostForAppStoreSearch(){return this.implementation.boolean("usePostForAppStoreSearch")}get isMonetaryGiftingEnabled(){return this.implementation.boolean("isBuyingScheduledGiftCertificateEnabled")}get accountTopUpURL(){return this.implementation.url("AddFundsUrl")}get accountTopUpTitle(){return this.implementation.string("account-top-up-title")}get isContentGiftingEnabled(){return this.implementation.boolean("isScheduledGiftingEnabled")}get buyButtonMetadataURL(){return this.implementation.url("personalized-buy-buttons/software")}get isTVAppEnabled(){return this.implementation.boolean("uvSearch/nowplaying-enabled")}get emailSupportLinkURL(){return this.implementation.url("supportLinkUrl")}get voteUrl(){return this.implementation.url("voteUrl")}get enableReviewSummarization(){return this.implementation.boolean("enable-review-summarization")}get reviewSummaryReportConcernData(){return w(this.implementation.dictionary("review-summarization-report-concern"))}get reportConcernUrl(){return this.implementation.url("reportConcernUrl")}get reportConcernExplanation(){return this.implementation.string("reportConcernExplanation")}get reportConcernReasons(){return a(p(this.implementation.array("reportConcernReasons")))}get reportProblemEnabled(){var e
return null!==(e=this.implementation.boolean("product-page-report-problem-enabled"))&&void 0!==e&&e}get productPageReportProblemURL(){return this.implementation.string("product-page-report-problem-url")}get productPageReportProblemSADSubscriptionArray(){return a(p(this.implementation.array("product-page-report-problem-sad-subscriptions")))}get productPageReportProblemSecondPartyAppArray(){const e=a(p(this.implementation.array("product-page-report-problem-second-party-apps")))
return i(e)?["1473505534","1416238567","640199958","1529498570","915061776","1130498044","1070072560"]:e}get createAccountUrl(){var e
return null!==(e=this.implementation.url("createAccountUrl"))&&void 0!==e?e:Pc}get mediaCountryCode(){return this.implementation.string("countryCode")}get mediaHost(){return this.implementation.url("apps-media-api-host")}mediaEdgeHost(e){return e.host.clientIdentifier===bc?this.implementation.url(dd):this.implementation.string(dd)}get mediaAPICatalogMixedShouldUseEdge(){var e
return null!==(e=this.implementation.boolean("apps-media-api-catalog-mixed-should-use-edge"))&&void 0!==e&&e}get mediaEdgeSearchHost(){return this.implementation.string("apps-media-api-search-edge-host")}get mediaPreviewHost(){return this.implementation.string("apps-media-api-preview-host")}get mediaRealmHost(){return this.implementation.string("notification-settings-media-api-host")}get edgeEndpoints(){const e=this.implementation.array("apps-media-api-edge-end-points")
return typeof e===sg?[]:a(p(e))}get mediaAdvertRequestLimit(){var e
return null!==(e=this.implementation.double("apps-media-api-search-ads-limit"))&&void 0!==e?e:4}get searchSortOptions(){return a(p(this.implementation.array("searchSortOptions")))}get ageBands(){return a(p(this.implementation.array("ageBands")))}get redirectUrlWhitelistedQueryParams(){let e=a(p(this.implementation.array("processRedirectUrl/whitelistedQueryParams")))
return i(e)&&(e=["affC",Ku,"advp","at","ct","itsct","itscg","itscc","itcCt",Ju,"ls","partnerId","pt","qtkid","uo"]),e}get redirectUrlEndpoint(){var e
return null!==(e=this.implementation.string("processRedirectUrl/endpoint"))&&void 0!==e?e:"https://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/processRedirectUrl"}get aristotleParentAppAdamId(){var e
return null!==(e=this.implementation.string("aristotle-app-id"))&&void 0!==e?e:"383941000"}get arcadeAppAdamId(){return this.implementation.string("app-store-app-id")}get arcadeProductFamilyId(){var e
return null!==(e=this.implementation.string("arcade-iap-family-id"))&&void 0!==e?e:this.implementation.string("ocelot-iap-family-id")}get arcadeProductId(){var e
return null!==(e=this.implementation.string("arcade-iap-offer-name"))&&void 0!==e?e:this.implementation.string("ocelot-iap-offer-name")}get arcadeCategoryBarSAGUpliftDisplayRate(){var e
return null!==(e=this.implementation.double("arcade-category-bar-see-all-games-display-rate"))&&void 0!==e?e:0}get isArcadeEnabled(){var e
return null!==(e=this.implementation.boolean("arcade-enabled"))&&void 0!==e&&e}get searchResultsLearnMoreEditorialId(){return this.implementation.string("transparencyLawEditorialItemId")}get systemApps(){return a(p(this.implementation.array("hideableSystemApps")))}get nonDeletableSystemApps(){const e=p(this.implementation.array("nonDeletableSystemApps"))
return o(e)?a(e):[{id:1635387927,"bundle-id":vo},{id:1635862301,"bundle-id":mo},{id:1584216343,"bundle-id":"com.apple.findmy.finddevices"},{id:1584215960,"bundle-id":"com.apple.NanoWorldClock"},{id:1584215812,"bundle-id":"com.apple.HeartRate"},{id:1584215851,"bundle-id":"com.apple.SessionTrackerApp"},{id:1146562108,"bundle-id":"com.apple.NanoPhone"},{id:1146560473,"bundle-id":"com.apple.MobileSMS"},{id:1584215428,"bundle-id":"com.apple.NanoPhotos"},{id:1459455352,"bundle-id":go},{id:1067456176,"bundle-id":wo}]}get tabsStandard(){return a(p(this.implementation.array("tabs/standard")))}get watchAppsGroupingURL(){var e
return null!==(e=this.implementation.url("watchAppsGrouping"))&&void 0!==e?e:"https://apps.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=1472048385"}get requireAgeVerification(){return this.implementation.boolean("requireAgeVerification")}get ageRatingLearnMoreEditorialItemId(){return this.implementation.string("ageRatingLearnMoreEditorialItemId")}get appleSiliconMacUnverifiedBadgeEditorialItemId(){return this.implementation.string("appleSiliconMacUnverifiedBadgeEditorialItemId")}get safariExtensionsGroupingURL(){return this.implementation.url("safariExtensionsGrouping")}get familySubscriptionsLearnMoreEditorialItemId(){return this.implementation.string("familySubscriptionsLearnMoreEditorialItemId")}get dynamicUIRegexStrings(){const e=this.implementation.array("commerce-ui-urls/dynamic-url-patterns")
return typeof e===sg?[]:a(p(e))}get financeUIRegexStrings(){const e=this.implementation.array("commerce-ui-urls/url-patterns")
return typeof e===sg?[]:a(p(e))}get webViewRegexStrings(){const e=this.implementation.array("commerce-ui-urls/v2-url-patterns")
return typeof e===sg?[]:a(p(e))}get arcadePreOrderUpsellLimitSeconds(){var e
return null!==(e=this.implementation.double("arcadePreOrderUpsellLimitSeconds"))&&void 0!==e?e:86400}get recentlyPlayedGamesWindowInSeconds(){var e
return null!==(e=this.implementation.double("recentlyPlayedGamesWindowInSeconds"))&&void 0!==e?e:7776e3}get gamesFriendsPlayedWindowInSeconds(){var e
return null!==(e=this.implementation.integer("games-friends-played-window-in-seconds"))&&void 0!==e?e:15778800}get enableComingSoonToggle(){return this.implementation.boolean("enableComingSoonToggle")}get enablePrivacyNutritionLabels(){var e
return null!==(e=this.implementation.boolean("enable-privacy-nutrition-labels"))&&void 0!==e&&e}get enableSellerInfo(){var e
return null!==(e=this.implementation.boolean("enable-seller-info"))&&void 0!==e&&e}get enableSellerICPAnnotation(){var e
return null!==(e=this.implementation.boolean("enable-seller-icp"))&&void 0!==e&&e}get enableFeaturedCategoriesOnGroupings(){var e
return null!==(e=this.implementation.boolean("enable-featured-categories-on-groupings"))&&void 0!==e&&e}get enableCategoryBricksOnGroupings(){var e
return null!==(e=this.implementation.boolean("enable-category-bricks-on-groupings"))&&void 0!==e&&e}get arcadeOfferEditorialItemId(){return this.implementation.string("arcadeOfferEditorialItemId")}get sponsoredSearchODMLTimeout(){var e
return null!==(e=this.implementation.double("sponsored-search-odml-timeout"))&&void 0!==e?e:3}get isSearchLandingAdsEnabled(){var e
return null!==(e=this.implementation.boolean("isSearchLandingAdsEnabled"))&&void 0!==e&&e}get isLLMSearchTagsEnabled(){var e
return null!==(e=this.implementation.boolean("apps-search-tags-enabled"))&&void 0!==e&&e}get searchLandingAdFetchTimeout(){var e
return null!==(e=this.implementation.double("search-landing-ad-fetch-timeout"))&&void 0!==e?e:.175}get searchLandingPageOffscreenRefreshInterval(){var e
return null!==(e=this.implementation.double("search-landing-offscreen-refresh-interval-in-seconds"))&&void 0!==e?e:60}get searchLandingPageRefreshUpdateDelayInterval(){var e
return null!==(e=this.implementation.double("search-landing-page-update-delay-interval-in-seconds"))&&void 0!==e?e:.3}get appPrivacyLearnMoreEditorialItemId(){return this.implementation.string("appPrivacyLearnMoreEditorialItemId")}get ratingsAndReviewsLearnMoreEditorialId(){return this.implementation.string("ratings-and-reviews-learn-more-editorial-item-id")}get reviewSummarizationLearnMoreEditorialItemId(){return this.implementation.string("review-summarization-learn-more-editorial-item-id")}get suppressedPrivacyAppIds(){const e=this.implementation.array("suppressedPrivacyLabels")
return typeof e===sg?[]:a(p(e))}get appPrivacyDefinitionsEditorialItemId(){return this.implementation.string("appPrivacyDefinitionsEditorialItemId")}get todayWidgetLivePreviewRolloutRate(){var e
return null!==(e=this.implementation.double("todayWidgetLivePreviewRolloutRate"))&&void 0!==e?e:1}get hero3RolloutRate(){var e
return null!==(e=this.implementation.double("arcade-hero-shelf-tagline-style-rollout-rate"))&&void 0!==e?e:1}get arcadeTrialEnrolledStateRate(){var e
return null!==(e=this.implementation.double("arcade-trial-enrolled-state-rate"))&&void 0!==e?e:0}get marketingItemSelectionTimeout(){var e
return null!==(e=this.implementation.double("marketing-item-selection-timeout"))&&void 0!==e?e:1}get enableAppEvents(){var e
return null!==(e=this.implementation.boolean("enableAppEvents"))&&void 0!==e&&e}get enableProductPageVariants(){var e
return null!==(e=this.implementation.boolean("enableProductPageVariants"))&&void 0!==e&&e}get enableArcadeTrialEligibleBadging(){return this.implementation.boolean("enable-arcade-trial-eligible-badging")}get heroCarouselAutoScrollDuration(){var e
return null!==(e=this.implementation.double("heroCarouselAutoScrollDuration"))&&void 0!==e?e:7}get enableAdditionalLoggingForPPV(){var e,t
return null==this.cachedEnableAdditionalLoggingForPPV&&(this.cachedEnableAdditionalLoggingForPPV=null!==(e=this.implementation.boolean("enableAdditionalLoggingForPPV"))&&void 0!==e&&e),null!==(t=this.cachedEnableAdditionalLoggingForPPV)&&void 0!==t&&t}get enableOnDevicePersonalization(){const e=this.implementation.boolean("enable-on-device-personalization")
return!!r(e)||e}get enableAutomaticPageRefresh(){var e
return null===(e=this.implementation.boolean("enable-automatic-page-refresh"))||void 0===e||e}get widgetSuggestionsFromTodayTabRolloutRate(){var e
return null!==(e=this.implementation.double("today-widget-suggestions-from-today-tab-rollout-rate"))&&void 0!==e?e:1}get todayWidgetSmartStackJitterMinutes(){var e
return null!==(e=this.implementation.double("today-widget-smart-stack-jitter-minutes"))&&void 0!==e?e:45}get enableSystemAppReviews(){var e
return null!==(e=this.implementation.boolean("enable-system-app-reviews"))&&void 0!==e&&e}get enableCPPInSearchAds(){return this.implementation.boolean("enableCPPsInSearchAds")||!1}get cancelPreorderItemSrv(){return this.implementation.url("cancelPreorderItemSrv")||"https://buy.itunes.apple.com/commerce/preorders/cancel"}get getCancellablePreorderItemsSrv(){return this.implementation.url("getCancellablePreorderItemsSrv")||"https://buy.itunes.apple.com/commerce/preorders/cancellable"}get enabledAdPlacements(){return a(p(this.implementation.array("enabled-ad-placements")))}get adPlacementTimeouts(){return d(w(this.implementation.dictionary("ad-placement-timeouts")))}get inAppPurchasesLearnMoreEditorialItemId(){return this.implementation.string("in-app-purchases-learn-more-editorial-item-id")}get enableExternalPurchases(){var e
return null!==(e=this.implementation.boolean("enable-external-purchase"))&&void 0!==e&&e}get enabledExternalPurchasesPlacements(){return a(p(this.implementation.array("enabled-external-purchase-placements")))}get externalPurchasesLearnMoreEditorialItemId(){return this.implementation.string("external-purchase-learn-more-editorial-item-id")}get externalBrowserLearnMoreEditorialItemId(){return this.implementation.string("external-browser-learn-more-editorial-item-id")}get sharePlayAppsEditorialItemId(){return this.implementation.string("share-play-apps-editorial-item-id")}get externalPurchasesIncludeProductPageBannerIcon(){var e
return null!==(e=this.implementation.boolean("external-purchase-product-page-banner-include-icon"))&&void 0!==e&&e}get externalPurchasesProductPageAnnotationVariant(){return this.implementation.string("external-purchase-product-page-annotation-variant")}get newEventsForODJAreEnabled(){var e
return null!==(e=this.implementation.boolean("new-events-for-odj-are-enabled"))&&void 0!==e&&e}get defaultChart(){return w(this.implementation.dictionary("default-chart"))}get accountUrl(){var e
return null!==(e=this.implementation.url("accountUrl"))&&void 0!==e?e:uc}get redeemUrl(){var e
return null!==(e=this.implementation.url("redeemUrl"))&&void 0!==e?e:cc}get charityUrl(){var e
return null!==(e=this.implementation.url("charityUrl"))&&void 0!==e?e:"https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/buyCharityGiftWizard"}get manageSubscriptionsUrl(){var e
return null!==(e=this.implementation.url("manageSubscriptionsUrl"))&&void 0!==e?e:"https://finance-app.itunes.apple.com/subscriptions/manage?context=deeplink"}get manageSubscriptionsV2Url(){var e
return null!==(e=this.implementation.url("manageSubscriptionsV2Url"))&&void 0!==e?e:"https://apps.mzstatic.com/content/54a1317a0ad442d3965d64ef6bfaae1c/"}get adsOverrideLanguage(){return this.implementation.string("ads-override-language")}get gameControllerRecommendedRolloutRate(){var e
return null!==(e=this.implementation.double("game-controller-recommended-rollout-rate"))&&void 0!==e?e:0}get gameControllerLearnMoreEditorialItemId(){return this.implementation.string("game-controller-learn-more-editorial-item-id")}get mediaAPISearchHintsEnabled(){var e
return null!==(e=this.implementation.boolean("apps-search-suggestions-enabled"))&&void 0!==e&&e}get mediaAPISearchHintsRolloutRate(){var e
return null!==(e=this.implementation.double("apps-search-suggestions-rollout-rate"))&&void 0!==e?e:0}get mediaAPISearchFocusEnabled(){var e
return null!==(e=this.implementation.boolean("apps-search-focus-suggestions-enabled"))&&void 0!==e&&e}get supportsSearchLandingPageV2(){var e
return null!==(e=this.implementation.boolean("supports-apps-slp-v2"))&&void 0!==e&&e}get enableSearchLandingPageV2ByTreatment(){var e
return null!==(e=this.implementation.boolean("enable-apps-slp-v2-by-treatment"))&&void 0!==e&&e}get searchLandingPageV2RolloutRate(){var e
return null!==(e=this.implementation.double("apps-slp-v2-rollout-rate"))&&void 0!==e?e:0}get todayTabArcadePersonalizationRate(){var e
return null!==(e=this.implementation.double("today-tab-arcade-personalization-rate"))&&void 0!==e?e:0}get gameCenterExtendSupportedFeatures(){var e
return null!==(e=this.implementation.boolean("game-center-extend-supported-features"))&&void 0!==e&&e}get adPlacementEligibleSlotPositions(){const e=w(this.implementation.dictionary("ad-placement-eligible-slot-positions"))
return o(e)?e:{today:[{shelfIdentifier:"0",slot:0},{shelfIdentifier:"0",slot:1}],"product-page-ymal":[{shelfIdentifier:pw,slot:0}]}}get managePreordersUrl(){var e
return null!==(e=this.implementation.url("preordersUrl"))&&void 0!==e?e:"https://finance-app.itunes.apple.com/preorders"}get modifyAccount(){var e
return null!==(e=this.implementation.url("modifyAccount"))&&void 0!==e?e:uc}get purchaseHistoryUrl(){return this.implementation.url("purchaseHistoryUrl")}get ratingsReviewsUrl(){var e
return null!==(e=this.implementation.url("ratingsReviewsUrl"))&&void 0!==e?e:"https://apps.mzstatic.com/content/54a1317a0ad442d3965d64ef6bfaae1c/ratings-reviews"}get signup(){var e
return null!==(e=this.implementation.url("signup"))&&void 0!==e?e:Pc}get redeemCodeLanding(){var e
return null!==(e=this.implementation.url("redeemCodeLanding"))&&void 0!==e?e:cc}get reportProblemUrl(){return this.implementation.string("reportProblemUrl")}get unrestrictedServerSideTabBadging(){var e
return null!==(e=this.implementation.boolean("unrestricted-server-side-tab-badging"))&&void 0!==e&&e}get todayAdCondensedEnabled(){var e
return null!==(e=this.implementation.boolean("today-ad-condensed-enabled"))&&void 0!==e&&e}get enableVisionAppStoreBinCompatChecks(){var e
return null!==(e=this.implementation.boolean("enable-vision-app-store-bincompat-checks"))&&void 0!==e&&e}get safariExtensionsEditorialPageId(){return this.implementation.url("safari-extensions-editorial-page-id")}get buddyOnboardingEditorialItemId(){return this.implementation.string("buddy-onboarding-editorial-item-id")}get productPageFriendsPlayingClickEventsEnabled(){var e
return null!==(e=this.implementation.boolean("product-page-friends-playing-click-events-enabled"))&&void 0!==e&&e}get highMotionLearnMoreEditorialItemId(){return this.implementation.string("high-motion-learn-more-editorial-item-id")}get todayAdMediumLockupScreenshotsRiverSpeed(){return this.implementation.double("today-ad-medium-lockup-screenshots-river-speed")}get arcadeDownloadPackCategoriesCollectionId(){return this.implementation.string("arcade-download-packs-onboarding-collection-id")}get arcadeDownloadPackShelfTTLInSeconds(){var e
return null!==(e=this.implementation.integer("arcade-starter-pack-ttl-in-seconds"))&&void 0!==e?e:0}get enableOfferItems(){var e
return null!==(e=this.implementation.boolean("enable-winback-offers"))&&void 0!==e&&e}get appDistributionMediaAPIHost(){return this.implementation.string("app-distribution-media-api-host")}get appDistributionLanguageTag(){return this.implementation.string("app-distribution-language-tag")}get supportsAppDistribution(){var e
return null!==(e=this.implementation.boolean("supports-app-distribution"))&&void 0!==e&&e}get arcadeDownloadPackPostSubscribeTrigger(){var e
return null===(e=this.implementation.boolean("arcade-download-packs-post-subscribe-trigger"))||void 0===e||e}get enableContingentOffers(){var e
return null!==(e=this.implementation.boolean("enable-contingent-offers"))&&void 0!==e&&e}get arcadeDownloadPackRolloutRate(){var e
return null!==(e=this.implementation.double("arcade-download-packs-rollout-rate"))&&void 0!==e?e:0}get enableVisionPlatform(){var e
return null!==(e=this.implementation.boolean("enable-vision-platform"))&&void 0!==e&&e}get supportedMixedMediaRequestUsecases(){var e
return null!==(e=d(w(this.implementation.dictionary("supported-mixed-media-request-usecases"))))&&void 0!==e?e:{}}get arcadeDownloadPacksMetricsEventsEnabled(){var e
return null===(e=this.implementation.boolean("arcade-download-packs-metrics-events-enabled"))||void 0===e||e}get arcadeDownloadPacksImpressionEventsEnabled(){var e
return null===(e=this.implementation.boolean("arcade-download-packs-impression-events-enabled"))||void 0===e||e}get visionOnlyAppLearnMoreEditorialItemId(){return this.implementation.string("vision-only-app-learn-more-editorial-item-id")}get arcadeDownloadPacksCIPDeeplinkIntegrationEnabled(){var e
return null!==(e=this.implementation.boolean("arcade-download-packs-cip-deeplink-trigger"))&&void 0!==e&&e}get arcadeDownloadPacksHardwareTabBadgeUpsellIntegrationEnabled(){var e
return null!==(e=this.implementation.boolean("arcade-download-packs-hw-tabbadge-trigger"))&&void 0!==e&&e}get aboutAppStoreUrl(){return this.implementation.string("about-app-store-url")}get aboutInAppPurchasesEditorialItemId(){return this.implementation.string("about-in-app-purchases-editorial-item-id")}get requestARefundUrl(){return this.implementation.string("request-a-refund-url")}get personalizedRecommendationsToggleEnabled(){var e
return null!==(e=this.implementation.boolean("enable-personalized-recommendations-toggle"))&&void 0!==e&&e}get metricsIdMigrationEnabled(){var e
return null===(e=this.implementation.boolean("metrics-id-migration-enabled"))||void 0===e||e}get isNaturalLanguageSearchEnabled(){var e
return null!==(e=this.implementation.boolean("apps-natural-language-search-enabled"))&&void 0!==e&&e}get isNaturalLanguageSearchResultsEnabled(){var e
return null!==(e=this.implementation.boolean("apps-natural-language-search-results-enabled"))&&void 0!==e&&e}get metricsIdentifiersShouldCache(){var e
return null===(e=this.implementation.boolean("metrics-identifiers-should-cache"))||void 0===e||e}get changePaymentMethodUrl(){return this.implementation.string("change-payment-method-url")}get aboutFrenchAppStoreEditorialItemId(){return this.implementation.string("about-app-store-editorial-item-id")}get isOnDemandShelfFetchingEnabled(){var e
return null===(e=this.implementation.boolean("on-demand-product-shelf-fetching-enabled"))||void 0===e||e}get isMetricsUserIdFallbackEnabled(){var e
return null!==(e=this.implementation.boolean("metrics-user-id-fallback-enabled"))&&void 0!==e&&e}get isMetricsAb2DataFallbackEnabled(){var e
return null===(e=this.implementation.boolean("metrics-ab2data-fallback-enabled"))||void 0===e||e}get enableRecoOnDeviceReordering(){var e
return null!==(e=this.implementation.boolean("enable-on-device-reco-reordering"))&&void 0!==e&&e}get ribbonBarVisionEditorialItemIds(){return a(p(this.implementation.array("ribbon-bar-vision-editorial-item-ids")))}get searchFilterEditorialItemIds(){const e=a(p(this.implementation.array("search-filter-editorial-item-ids")))
return new Set(e)}get enableDeviceDrivenDiscoveryContent(){var e
return null!==(e=this.implementation.boolean("enable-device-driven-discovery-content"))&&void 0!==e&&e}get enableProductPageInstallSize(){var e
return null!==(e=this.implementation.boolean("enable-product-page-install-size"))&&void 0!==e&&e}get externalPurchasesProductPageBannerTextVariant(){return this.implementation.string("external-purchase-product-page-banner-text-variant")}get externalPurchasesProductPageBannerIconVariant(){return this.implementation.string("external-purchase-product-page-banner-icon-variant")}get maxGamesForFetchingEvents(){var e
return null!==(e=this.implementation.integer("max-games-for-fetching-events"))&&void 0!==e?e:30}get mockHomeFeedURL(){return this.implementation.string("mock-home-feed-url")}get disablePlayTogetherEndpoint(){var e
return null!==(e=this.implementation.boolean("disable-play-together-endpoint"))&&void 0!==e&&e}get enableLicenses(){var e
return null!==(e=this.implementation.boolean("enable-licenses"))&&void 0!==e&&e}get disabledRichLinkPresentationEditorialItemIds(){var e
return a(p(null!==(e=this.implementation.array("disabled-rich-link-presentation-editorial-item-ids"))&&void 0!==e?e:["1842906680"]))}}fb.type=(0,Rs.makeMetatype)("app-store:bag-wrapper")
class hb{constructor(){this.$incidents=void 0}isValid(){return!0}}class pb extends hb{constructor(e=null){super(),this.impressionMetrics=e}}class wb extends hb{constructor(e,t,n,r,i,s,o,a,u,c,l,d,f,h,p,w,g,v,m,b,A){super(),this.buyParams=e,this.vendor=t,this.appName=n,this.bundleId=r,this.appPlatforms=i,this.isPreorder=null!=s&&s,this.excludeAttribution=null==o||o,this.metricsPlatformDisplayStyle=a,this.isRedownload=null!=c&&c,this.lineItem=u,this.preflightPackageUrl=void 0===l?null:l,this.isArcadeApp=d,this.isHalva=f,this.supportsVisionOSCompatibleIOSBinary=h,this.inAppEventId=p,this.extRefApp2=w,this.extRefUrl2=g,this.additionalHeaders=v,this.appCapabilities=m,this.isDefaultBrowser=b,this.remoteDownloadIdentifiers=A}}class gb extends hb{constructor(e,t,n,r,i,s,o,a,u,c,l,d,f,h,p,w,g,v,m,b,A,y){super(),this.offerType=e,this.adamId=t,this.parentAdamId=r,this.style=null==n?lv:n,this.environment=null==i?Fv:i,this.offerTint=null==s?{type:hd}:s,this.titles=null==o?{}:o,this.titleSymbolNames=null==a?{}:a,this.subtitles=null==u?{}:u,this.hasInAppPurchases=c,this.hasExternalPurchases=l,this.isDeletableSystemApp=d,this.isFree=f,this.isPreorder=h,this.offerLabelStyle=null==p?Yv:p,this.hasDiscount=w,this.contentRating=g,this.subscriptionFamilyId=v,this.useAdsLocale=m,this.priceFormatted=b,this.isStreamlinedBuy=A,this.appCapabilities=y}newOfferDisplayPropertiesChangingAppearance(e,t,n,r){return new gb(this.offerType,this.adamId,null==t||!e&&this.style===uw?this.style:t,this.parentAdamId,null==n?this.environment:n,null==r?this.offerTint:r,this.titles,this.titleSymbolNames,this.subtitles,this.hasInAppPurchases,this.hasExternalPurchases,this.isDeletableSystemApp,this.isFree,this.isPreorder,this.offerLabelStyle,this.hasDiscount,this.contentRating,this.subscriptionFamilyId,this.useAdsLocale,this.priceFormatted,this.isStreamlinedBuy,this.appCapabilities)}}!function(e){e[e.scaleToFill=0]="scaleToFill",e[e.scaleAspectFit=1]="scaleAspectFit",e[e.scaleAspectFill=2]="scaleAspectFill",e[e.redraw=3]="redraw",e[e.center=4]="center",e[e.top=5]="top",e[e.bottom=6]="bottom",e[e.left=7]="left",e[e.right=8]="right",e[e.topLeft=9]="topLeft",e[e.topRight=10]="topRight",e[e.bottomLeft=11]="bottomLeft",e[e.bottomRight=12]="bottomRight"}(xs||(xs={}))
class vb extends hb{constructor(e,t,n){super(),this.format=e,this.quality=t,this.supportsWideGamut=n}isValid(){return this.format&&void 0!==this.supportsWideGamut}}class mb extends hb{constructor(e,t,n,r,i,s){super(),this.checksum=null,this.backgroundColor=null,this.textColor=null,this.style=null,this.crop="bb",this.contentMode=null,this.template=e,this.width=t,this.height=n,this.variants=r,this.backgroundColor=i,this.textColor=s}isPortrait(){return this.height>=this.width}isLandscape(){return!this.isPortrait()}isValid(){return""!==this.template&&this.width>0&&this.height>0&&this.variants.length>0}}class bb extends hb{constructor(e,t){super(),this.artwork=e,this.mediaPlatform=t}}class Ab extends hb{constructor(e,t,n,r,i,s,o){super(),this.appPlatform=e,this.supplementaryAppPlatforms=r||[],this.deviceCornerRadiusFactor=i,this.mediaType=t,this.systemImageName=n,this.deviceBorderThickness=s,this.outerDeviceCornerRadiusFactor=o}isEqualTo(e){this.supplementaryAppPlatforms.sort(),e.supplementaryAppPlatforms.sort()
const t=this.supplementaryAppPlatforms.join(",")===e.supplementaryAppPlatforms.join(",")
return e.appPlatform===this.appPlatform&&e.mediaType===this.mediaType&&e.systemImageName===this.systemImageName&&t&&e.deviceCornerRadiusFactor===this.deviceCornerRadiusFactor}}class yb{constructor(e,t){this.width=e,this.height=t}static fromNativeSize(e){return new yb(e.width,e.height)}isEqualTo(e){return e.width===this.width&&e.height===this.height}}class Ob extends hb{constructor(e,t,n,r,i,s){super(),this.itemName=e,this.url=t,this.developer=n,this.category=r,this.fileSize=i,this.mediaType=s}}class Pb extends hb{constructor(e,t,n){super(),this.context="appEvent",this.text=e,this.subtitle=t,this.artwork=n}}class Ib extends hb{constructor(e,t,n,r,i,s,o,a,u,c,l,d){super(),this.context=ev,this.adamId=e,this.storeFrontIdentifier=t,this.name=n,this.platform=r,this.icon=i,this.screenshots=s,this.videos=o,this.isMessagesOnlyApp=a,this.subtitle=u,this.genreName=c,this.messagesAppIcon=l,this.notesMetadata=d}}class Sb extends hb{constructor(e,t,n){super(),this.metadata=e,this.url=t,this.shortUrl=n}}class Tb extends pb{constructor(e,t,n){super(),this.text=e,this.mediaType=t||"text/plain",this.style=n||Bm,this.alignment="localized",this.isCollapsed=!1,this.suppressVerticalMargins=!1,this.wantsCollapsedNewlines=!0}}class Eb extends hb{constructor(e,t=null,n=null){super(),this.actions=e,this.offerDisplayProperties=t,this.offerActionIndex=n}}class _b extends hb{constructor(e,t,n){super(),this.videoUrl=e,this.preview=t,this.allowsAutoPlay=n.allowsAutoPlay,this.looping=n.looping,this.canPlayFullScreen=n.canPlayFullScreen,this.showPlaybackControls=n.showPlaybackControls,this.playbackControls={...n.playbackControls},this.autoPlayPlaybackControls={...n.autoPlayPlaybackControls},this.templateMediaEvent=null}}class Rb{constructor(e,t,n,r){this.fileSizeByDevice=e,this.maxDownloadSizeInBytes=t,this.maxInstallSizeInBytes=n,this.maxEssentialInstallSizeInBytes=r}}!function(e){e.Mini="mini",e.ExtraWide="extraWide",e.None="none"}(Ns||(Ns={})),function(e){e.TopRight="topRight",e.TopLeft="topLeft",e.MiddleLeft="middleLeft"}(Fs||(Fs={})),function(e){e.SquareByWidth="squareByWidth",e.SquareByHeight="squareByHeight",e.FreeForm="freeForm"}(Ms||(Ms={}))
class Db{constructor(e,t,n,r,i){this.width=e,this.height=t,this.asRatioOfSize=null!=n&&n,this.location=r,this.constraint=i}}Db.defaultTileArtworkSafeArea={width:.4,height:.4,asRatioOfSize:!0,constraint:Ms.SquareByWidth,location:{relativeLocation:Fs.TopRight}},Db.defaultPillArtworkSafeArea={width:.28,height:1,asRatioOfSize:!0,constraint:Ms.FreeForm,location:{relativeLocation:Fs.MiddleLeft}},Db.defaultTileTextSafeArea={width:.15,height:0,asRatioOfSize:!0},Db.defaultPillTextSafeArea={width:.28,height:0,asRatioOfSize:!0}
const kb="com.apple.AppStore.BridgeStoreExtension",Cb="com.apple.MobileSMS",xb="com.apple.TVAppStore",Nb="com.apple.AppStore.ProductPageExtension"
class Fb extends lb{get buildType(){return this.implementation.buildType}get deviceType(){return this.implementation.deviceType}get guid(){return this.implementation.guid}get isActivityAvailable(){return this.implementation.isActivityAvailable}get isElectrocardiogramInstallationAllowed(){return this.implementation.isElectrocardiogramInstallationAllowed}get isScandiumInstallationAllowed(){return this.implementation.isScandiumInstallationAllowed}get isSidepackingEnabled(){return this.implementation.isSidepackingEnabled}get isTinkerWatch(){return this.implementation.isTinkerWatch}get newPaymentMethodEnabled(){return this.implementation.newPaymentMethodEnabled}get screenCornerRadius(){return this.implementation.screenCornerRadius}get screenSize(){return yb.fromNativeSize(this.implementation.screenSize)}get storefrontIdentifier(){return this.implementation.storefrontIdentifier}get supportsHEIF(){return this.implementation.supportsHEIF}get thinnedApplicationVariantIdentifier(){return this.implementation.thinnedApplicationVariantIdentifier}get isMandrakeSupported(){return this.implementation.isMandrakeSupported}get isCharonSupported(){return this.implementation.isCharonSupported}get hostBundleId(){return this.implementation.hostBundleId}isPairedSystemVersionAtLeast(e){var t,n,r
return null!==(r=null===(n=(t=this.implementation).isPairedSystemVersionAtLeast)||void 0===n?void 0:n.call(t,e))&&void 0!==r&&r}deletableSystemAppCanBeInstalledOnWatchWithBundleID(e){return this.implementation.deletableSystemAppCanBeInstalledOnWatchWithBundleID(e)}deviceHasCapabilities(e){return this.implementation.deviceHasCapabilities(e)}deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(e,t){return(!this.isPad||!e.includes("healthkit"))&&(!this.isVision||!e.includes("iphone-performance-gaming-tier")&&!e.includes("apple-graphics-performance-tier"))&&this.implementation.deviceHasCapabilitiesIncludingCompatibilityCheckIsVisionOSCompatibleIOSApp(e,t)}isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n){return this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(e,t,n)}canDevicePerformAppActionWithAppCapabilities(e,t){return this.implementation.canDevicePerformAppActionWithAppCapabilities(e,t)}isAutomaticDownloadingEnabled(){return this.implementation.isAutomaticDownloadingEnabled()}isAuthorizedForUserNotifications(){return this.implementation.isAuthorizedForUserNotifications()}isActivePairedWatchSystemVersionBelow(e){const t=e.split("."),n=l(t[0])||0,r=l(t[1])||0,i=l(t[2])||0
return!this.implementation.isActivePairedWatchSystemVersionAtLeastMajorVersionMinorVersionPatchVersion(n,r,i)}get isPhone(){return this.deviceType===Cm}get isPad(){return this.deviceType===Tm}get isiOS(){return this.isPhone||this.isPad}get isMac(){return this.deviceType===Fm}get isTV(){return"tv"===this.deviceType}get isWatch(){return this.deviceType===Mm}get isVision(){return this.deviceType===pm}get isCompanionVisionApp(){return this.hostBundleId===yc}get remoteDownloadIdentifiers(){return this.implementation.remoteDownloadIdentifiers}}Fb.type=(0,Rs.makeMetatype)("app-store:client-wrapper")
class Mb extends lb{async orderedVisibleIAPs(e,t,n,r){return await new Promise((i,s)=>{const o=t.filter(e=>null!=e),a=n.filter(e=>null!=e)
this.implementation.orderedVisibleIAPs(e,o,a,r,(e,t)=>{t?s(t):i(e)})})}async visibilityForIAPs(e){return await new Promise((t,n)=>{this.implementation.visibilityForIAPs(e,(e,n)=>{t(n?{}:e)})})}}Mb.type=(0,Rs.makeMetatype)("app-store:client-ordering-wrapper")
class Lb extends lb{info(...e){return this.implementation.info(...e)}error(...e){return this.implementation.error(...e)}log(...e){return this.implementation.log(...e)}warn(...e){return this.implementation.warn(...e)}}Lb.type=(0,Rs.makeMetatype)("app-store:console-wrapper")
class Bb extends lb{get clientIdentifier(){return this.implementation.clientIdentifier}get clientVersion(){return this.implementation.clientVersion}get deviceLocalizedModel(){return this.implementation.deviceLocalizedModel}get deviceModel(){return this.implementation.deviceModel}get deviceModelFamily(){return this.implementation.deviceModelFamily}get devicePhysicalModel(){return this.implementation.devicePhysicalModel}get deviceMarketingFamilyName(){return this.implementation.deviceMarketingFamilyName}get osBuild(){return this.implementation.osBuild}get platform(){return this.implementation.platform}isOSAtLeast(e,t,n){return this.implementation.isOSAtLeast(e,t,n)}get isiOS(){return this.platform===Ug}get isMac(){return this.platform===xg}get isTV(){return this.platform===yw}get isWatch(){return this.platform===Sf}get isWeb(){return"web"===this.platform}get isWindows(){return"Windows"===this.platform}get isVision(){return this.platform===Tf}}Bb.type=(0,Rs.makeMetatype)("app-store:host-wrapper")
class jb{constructor(){this.locData={},this.language="en"}updateLocalizationData(e,t){this.locData=e,this.language=t}localize(e,t){let n=this.locData[e]
return void 0!==n&&typeof n===dm||(n=e),t&&(n=this.replaceTokens(n,t)),n=this.replaceMarkupTokens(n,t),n}localizeWithCount(e,t,n,r){let i,s,o=null
return 0===n&&(i=`${t}.zero`,this.isLocalized(e,i)&&(o=i)),null===o&&(o=t,s=this.pluralCategory(e,n),s!==ag&&(i=`${t}.${s}`,this.isLocalized(e,i)&&(o=i))),r||(r={}),void 0===r.count&&(r.count=this.formatNumber(n.toString())),void 0===r.number&&(r.number=this.formatNumber(n.toString())),this.localize(null!=o?o:t,r)}replaceTokens(e,t){return Object.entries(t).forEach(([t,n])=>{const r="@@"+t+"@@"
e=this.replaceSubstring(e,r,n)}),e}replaceMarkupTokens(e,t){if(e.indexOf("##")<=-1)return e
let n
return t?(n={...jb.MARKUP_PARAMS},Object.entries(t).forEach(([e,t])=>{n[e]=t})):n=jb.MARKUP_PARAMS,Object.entries(n).forEach(([t,n])=>{const r="##"+t+"##"
e=e.replace(new RegExp(r,"gi"),n)}),e=e.replace(/##([^##]+)##/gi,"<$1>")}replaceSubstring(e,t,n){return e.split(t).join(n)}formatNumber(e){let t=this.locData._decimalSeparator
void 0!==t&&typeof t===dm||(t=".")
let n=this.locData._thousandsSeparator
void 0!==n&&typeof n===dm||(n=".")
const r=parseFloat(e).toString().split("."),i=r[0].split("")
for(let e=i.length-3;e>0;e-=3)i.splice(e,0,n)
return r[0]=i.join(""),r.join(t)}isLocalized(e,t){const n=this.locData[t]
return void 0!==n&&typeof n===dm&&(-1===t.indexOf(".")||n!==t&&(0!==n.indexOf("**")||n.lastIndexOf("**")!==n.length-2)||(e.console.error("Unlocalized key in keys dictionary",t),!1))}pluralCategory(e,t){const n=jb.pluralCategoryFnByLanguage[this.language]
return void 0!==n?n(t):(e.console.warn("Missing plural category function for: "+this.language),ag)}}jb.MARKUP_PARAMS={nbsp:"&nbsp;",gt:"&gt;",lt:"&lt;",copy:"\xa9"},jb.pluralCategoryDefault=function(e){return ag},jb.pluralCategoryOne=function(e){return 1===e?sw:ag},jb.pluralCategoryArabic=function(e){const t=e>>0
if(t!==e)return ag
if(0===t)return"zero"
if(1===t)return sw
if(2===t)return"two"
const n=t%100
return n>=11?Th:n>=3?ap:ag},jb.pluralCategoryFrench=function(e){return e<2&&e>=0?sw:ag},jb.pluralCategoryHebrew=function(e){const t=e>>0
return t!==e?ag:1===t?sw:2===t?"two":0==t%10&&t>10?Th:ag},jb.pluralCategoryPolish=function(e){const t=e>>0
if(t!==e)return ag
if(1===t)return sw
const n=t%10
if(n<=4&&n>=2){const e=t%100
if(e>14||e<12)return ap}return Th},jb.pluralCategoryRomanian=function(e){const t=e>>0
if(t!==e)return ap
if(0===t)return ap
if(1===t)return sw
const n=e%100
return n<=19&&n>=1?ap:ag},jb.pluralCategoryRussian=function(e){const t=e>>0
if(t!==e)return ag
const n=t%10
if(n>=5||0===n)return Th
const r=t%100
return r<=14&&r>=11?Th:1===n?sw:ap},jb.pluralCategoryFnByLanguage={zh:jb.pluralCategoryDefault,id:jb.pluralCategoryDefault,ja:jb.pluralCategoryDefault,ko:jb.pluralCategoryDefault,ms:jb.pluralCategoryDefault,th:jb.pluralCategoryDefault,vi:jb.pluralCategoryDefault,en:jb.pluralCategoryOne,ca:jb.pluralCategoryOne,da:jb.pluralCategoryOne,nl:jb.pluralCategoryOne,de:jb.pluralCategoryOne,el:jb.pluralCategoryOne,fi:jb.pluralCategoryOne,hu:jb.pluralCategoryOne,it:jb.pluralCategoryOne,nb:jb.pluralCategoryOne,no:jb.pluralCategoryOne,pt:jb.pluralCategoryOne,es:jb.pluralCategoryOne,sv:jb.pluralCategoryOne,tr:jb.pluralCategoryOne,ar:jb.pluralCategoryArabic,fr:jb.pluralCategoryFrench,iw:jb.pluralCategoryHebrew,pl:jb.pluralCategoryPolish,ro:jb.pluralCategoryRomanian,ru:jb.pluralCategoryRussian}
class Ub extends lb{constructor(e,t){super(e),this.locFile=null,this.ampLoc=new jb,this.LOC_STRING_CACHE={},this.objectGraph=t}get identifier(){return this.implementation.identifier}get safeIdentifier(){return this.implementation.identifier.split("_")[0]}string(e,t){return this.implementation.string(e)}tryString(e){const t=this.implementation.string(e)
if(t===e||t===`**${e}**`)throw Ds.context("tryString",()=>{Ds.unexpectedType(kp,"Localization key",e,null)}),new Error(`No value exists for localization key '${e}'`)
return t}stringWithFallback(e,t){const n=this.implementation.string(e)
return n===`**AppStore.${e}**`?t:n}stringForPreferredLocale(e,t,n,r){if(i(n))return this.string(t,r)
const s=`${t}_${n}`
let o=this.LOC_STRING_CACHE[s]
if(!o)if(o=this.implementation.stringForPreferredLocale(t,n),o&&o!==t)this.LOC_STRING_CACHE[s]=o
else{const e=this.ampLoc.localize(t)
o=e!==t?e:r||t}return o}stringWithCount(e,t,n){let r=this.implementation.stringWithCount(e,t)
if(!r||r===e){const i=this.ampLoc.localizeWithCount(this.objectGraph,e,t,n)
i&&(r=i)}return r}stringWithCounts(e,t,n){return this.implementation.stringWithCounts(e,t)}uppercased(e){return e?e.toLocaleUpperCase(this.safeIdentifier):null}decimal(e,t){let n=this.implementation.decimal(e,t)
return n||(n=typeof e===Cp?`* ${e.toString()} *`:this.nullString()),n}fileSize(e){let t=this.implementation.fileSize(e)
return t||(t=this.nullString()),t}formattedCount(e){let t=this.implementation.formattedCount(e)
return t||(t=this.nullString()),t}formattedCountForPreferredLocale(e,t,n){if(i(n))return this.formattedCount(t)
let r=this.implementation.formattedCountForPreferredLocale(t,n)
return r||(r=this.nullString()),r}timeAgoWithContext(e,t){let n=this.implementation.timeAgoWithContext(e,t)
return n||(n=this.nullString()),n}formatDate(e,t){let n=this.implementation.formatDate(e,t)
return n||(n=this.nullString()),n}formatDateWithContext(e,t,n){let r=this.implementation.formatDateWithContext(e,t,n)
return r||(r=this.nullString()),r}formatDateInSentence(e,t,n){let r=this.implementation.formatDateInSentence(e,t,n)
return r||(r=this.nullString()),r}relativeDate(e){let t=this.implementation.relativeDate(e)
return t||(t=this.nullString()),t}formatDuration(e,t){let n=this.implementation.formatDuration(e,t)
return n||(n=this.nullString()),n}applyLocalizations(e,t,n){this.isLocFileLoaded(e)||(this.locFile=e,this.ampLoc.updateLocalizationData(t,n.slice(0,2)))}isLocFileLoaded(e){return this.locFile===e}normalizedLocale(e,t,n){if("yue-hant"===(t=t.toLowerCase())){const t=e.props.asString("macauStorefrontIdentifier")
return typeof n===dm&&typeof t===dm&&-1!==n.indexOf(t)?"zh-ma":"zh-hk"}return t}nullString(){return"* null *"}load(e){if(void 0===e.bag.language||null===e.bag.language)throw new Error("Bag language is not available. Unable to load localizations.")
const t=this.normalizedLocale(e,e.bag.language,e.client.storefrontIdentifier),n=`local/${t}`
if(!this.isLocFileLoaded(n)){const r=e.props.asDictionary(`localizations.${t}`)
if(null!=r)this.applyLocalizations(n,r,t)
else{const r=e.props.asDictionary("localizations.en-us")
null!=r&&this.applyLocalizations(n,r,t)}}}deviceDisplayName(e){if(e.client.isVision&&(0,ks.isSome)(e.host.deviceMarketingFamilyName))return e.host.deviceMarketingFamilyName
if(e.host.deviceLocalizedModel)return e.host.deviceLocalizedModel
switch(e.client.deviceType){case Cm:const e=this.string(lc)
return e===lc?Ic:e
case Tm:const t=this.string(dc)
return t===dc?po:t
case"tv":const n=this.string(fc)
return n===fc?"Apple\xa0TV":n
case Mm:const r=this.string(hc)
return r===hc?"Apple\xa0Watch":r
case Fm:const i=this.string(pc)
return i===pc?Wo:i
default:return null}}}Ub.type=(0,Rs.makeMetatype)("app-store:loc-wrapper")
class $b extends lb{value(e){return n(this.implementation,e)}enabled(e){const t=this.value(e)
return typeof t!==sg?Boolean(t):Boolean(this.implementation.clientFeatures[e])}isNotEnabled(e){return!this.enabled(e)}asDictionary(e){return d(this.implementation,e)}asString(e){return c(this.implementation,e)}asNumber(e){return l(this.implementation,e)}asArray(e){return a(this.implementation,e)}}$b.type=(0,Rs.makeMetatype)("app-store:props-wrapper")
class Vb extends lb{retrieveString(e){const t=this.implementation.retrieveString(e)
return(null==t?void 0:t.length)>0&&"<null>"!==t?t:null}storeString(e,t){this.implementation.storeString(t,e)}}Vb.type=(0,Rs.makeMetatype)("app-store:storage-wrapper"),(to=Ls||(Ls={})).ArcadeDownloadPackOnboarding="Tf5Kjqz",to.CondensedTodayAds="tBc9hUt",to.ProductPagePreloading="m0henFo",to.ProductPageVariants="fNPb5Km",to.ProductPageYMALRowCount="isj11bm",to.SearchLandingPage="WqjkRLH"
class Gb{constructor(){this.cachedTreatments={},this.cachedRawTreatments={}}async loadTreatments(e){const t=this.experimentAreasForPlatform(e)
if(t.length>0)try{this.cachedRawTreatments=await e.treatmentStore.treatmentsForAreas(t)
for(const[e,t]of Object.entries(this.cachedRawTreatments)){const n=t.identifier
this.cachedTreatments[e]={...t,identifier:n.split(":")[0]}}}catch(t){e.console.error("Failed to load treatments",t)}}currentTreatmentForExperiment(e){return this.cachedTreatments[e]}createAb2Data(){const e=[]
for(const[t,n]of Object.entries(this.cachedRawTreatments))e.push({areaId:t,bucket:-2,treatmentId:n.identifier})
return e}experimentAreasForPlatform(e){const t=[]
switch(e.client.deviceType){case Cm:case Tm:t.push(Ls.ArcadeDownloadPackOnboarding,Ls.CondensedTodayAds,Ls.ProductPagePreloading,Ls.ProductPageVariants,Ls.ProductPageYMALRowCount,Ls.SearchLandingPage)}return t}}Gb.metatype=(0,Rs.makeMetatype)("app-store:experimentCache"),(no=Bs||(Bs={})).client="clientId",no.user="userId",function(e){e.client="APPSTORE_ENGAGEMENT_CLIENT",e.user="APPSTORE_ENGAGEMENT"}(js||(js={})),function(e){e.client="APPSTORE_PAYMENTS_ENGAGEMENT_CLIENT",e.user="APPSTORE_PAYMENTS_ENGAGEMENT"}(Us||(Us={})),function(e){e.user="APPSTORE_PERSONALIZATION"}($s||($s={}))
const Wb={[Bs.client]:{keyType:Bs.client,bagNamespace:Us.client,crossSyncDevice:!1},[Bs.user]:{keyType:Bs.user,bagNamespace:Us.user,crossSyncDevice:!0}},Hb={[Bs.client]:{keyType:Bs.client,bagNamespace:js.client,crossSyncDevice:!1},[Bs.user]:{keyType:Bs.user,bagNamespace:js.user,crossSyncDevice:!0}}
Bs.user,Bs.user,$s.user
class qb{constructor(e=Hb){this.cachedMetricsIds={},this.cachedMetricsFields={},this.shouldAddDsIdFallbackField=!1,this.userDsId=null,this.identifierContextMapping=e}async loadValues(e,t){e.bag.isMetricsUserIdFallbackEnabled&&!e.user.isUnderThirteen?(this.shouldAddDsIdFallbackField=!0,this.userDsId=e.user.dsid):(this.shouldAddDsIdFallbackField=!1,this.userDsId=null)
const n=[]
for(const r of t){const t=await this.loadValuesForIdType(e,r)
n.push(t)}for(const{idType:e,id:t,fields:r}of n)t&&(this.cachedMetricsIds[e]=t),r&&(this.cachedMetricsFields[e]=r)}async loadValuesForIdType(e,t){const n={idType:t},r=this.identifierContextMapping[t]
if(r){try{const i=await Ds.context("MetricsIdentifiersCache:loadValues:metricsFields",async()=>await e.metricsIdentifiers.getMetricsFieldsForContexts([r]))
if((0,Cs.isSome)(i)){n[Vf]=i
const e=i[t];(0,Cs.isSome)(e)&&typeof e===dm&&e.length>0&&(n.id=e)}}catch(n){e.console.error(`Unable to fetch metrics fields for idType ${t}`,n)}if((0,Cs.isNothing)(n.id))try{const t=await Ds.context("MetricsIdentifiersCache:loadValues:metricsIdentifier",async()=>await e.metricsIdentifiers.getIdentifierForContext(r));(0,Cs.isSome)(t)&&(n.id=t)}catch(n){e.console.error(`Unable to fetch metrics identifier for idType ${t}`,n)}}return n}getMetricsIdForType(e){return this.cachedMetricsIds[e]}getMetricsFieldsForTypes(e){const t=e.map(e=>{var t
return null!==(t=this.cachedMetricsFields[e])&&void 0!==t?t:{}}),n=Object.assign({},...t)
return this.shouldAddDsIdFallbackField&&-1!==e.indexOf(Bs.user)&&this.addDsIdFallbackFieldIfNecessary(n),n}addDsIdFallbackFieldIfNecessary(e){const t=e[Bs.user];((0,Cs.isNothing)(t)||typeof t!==dm||0===t.length||t.length===qb.clientGeneratedUserIdLength)&&(0,Cs.isSome)(this.userDsId)&&this.userDsId.length>0&&(e[wl]=this.userDsId)}}qb.defaultMetatype=(0,Rs.makeMetatype)("app-store:metricsIdentifiersCache"),qb.paymentMetatype=(0,Rs.makeMetatype)("app-store:paymentMetricsIdentifiersCache"),qb.personalizationMetatype=(0,Rs.makeMetatype)("app-store:personalizationMetricsIdentifiersCache"),qb.clientGeneratedUserIdLength=24
const zb={bag:_s.bag,dispatcher:(0,Rs.makeMetatype)("dispatcher"),host:_s.host,localizer:_s.localizer,network:_s.net,plist:_s.plist,platform:_s.platform,router:(0,Rs.makeMetatype)("router"),client:(0,Rs.makeMetatype)("client"),debugSettings:(0,Rs.makeMetatype)("debugSettings"),nativeIntentDispatcher:(0,Rs.makeMetatype)("nativeIntentDispatcher")}
class Yb extends Ts.ObjectGraph{configureDefaults(e,t,n,r,i,s,o,a,u,c,l,d,f,h,p,w,g,v,m,b,A,y,O,P,I,S,T,E,_,R,D,k,C,x,N){const F=this.addingCryptography(t).addingHost(n).addingNetwork(r).addingPlatform(i).addingPlist(s).addingRandom(o).addingServices(a).addingCookieProvider(u).addingBag(e).addingConsole(c).addingStoreMetrics(l).addingAMSEngagement(d).addingLoc(f).addingAdsLoc(h).addingDevice(p).addingClient(w).addingProperties(g).addingUser(v).addingMetricsIdentifiers(m).addingClientOrdering(b).addingPersonalizationStore(A).addingArcade(y).addingGameCenter(O).addingDeepLinks(P).addingAppleSilicon(I).addingStorage(S).addingAds(T).addingOnDeviceRecommendationsManager(E).addingOnDeviceSearchHistoryManager(_).addingFeatureFlags(R).addingMediaToken(D).addingAppDistribution(k).addingTimeoutManager(C).addingAdsLoc(h).addingTreatmentStore(x).addingUserDefaults(N)
return F.loc.load(F),F}get bag(){return this.required(fb.type)}addingBag(e){return this.addingBagWrapper(new fb(e,this.host)).adding(_s.bag,e)}addingBagWrapper(e){return this.adding(fb.type,e)}get console(){return this.required(Lb.type)}addingConsole(e){return this.addingConsoleWrapper(new Lb(e))}addingConsoleWrapper(e){return this.adding(Lb.type,e)}get cryptography(){return this.required(_s.cryptography)}addingCryptography(e){return this.adding(_s.cryptography,e)}get host(){return this.required(Bb.type)}addingHost(e){return this.addingHostWrapper(new Bb(e))}addingHostWrapper(e){return this.adding(Bb.type,e)}get network(){return this.required(_s.net)}addingNetwork(e){return this.adding(_s.net,e)}get platform(){return this.required(_s.platform)}addingPlatform(e){return this.adding(_s.platform,e)}get plist(){return this.required(_s.plist)}addingPlist(e){return this.adding(_s.plist,e)}get random(){return this.required(_s.random)}addingRandom(e){return this.adding(_s.random,e)}get services(){return this.required(_s.services)}addingServices(e){return this.adding(_s.services,e)}get cookieProvider(){return this.required(_s.cookieProvider)}addingCookieProvider(e){return this.adding(_s.cookieProvider,e)}get fetchTimingMetricsBuilder(){return this.optional(Es.Qm)}addingFetchTimingMetricsBuilder(e){return this.adding(Es.Qm,e)}get storeMetrics(){return this.required(Wm)}addingStoreMetrics(e){return this.adding(Wm,e)}get amsEngagement(){return this.optional(Hm)}addingAMSEngagement(e){return this.adding(Hm,e)}get loc(){return this.required(Ub.type)}addingLoc(e){return this.addingLocWrapper(new Ub(e,this))}addingLocWrapper(e){return this.adding(Ub.type,e)}get adsLoc(){return this.required(ib)}addingAdsLoc(e){return this.adding(ib,e)}get device(){return this.required(qm)}addingDevice(e){return this.adding(qm,e)}get client(){return this.required(Fb.type)}addingClient(e){return this.addingClientWrapper(new Fb(e))}addingClientWrapper(e){return this.adding(Fb.type,e)}get props(){return this.required($b.type)}addingProperties(e){return this.addingPropertiesWrapper(new $b(e))}addingPropertiesWrapper(e){return this.adding($b.type,e)}get user(){return this.required(zm)}addingUser(e){return this.adding(zm,e)}get metricsIdentifiers(){return this.required(Ym)}addingMetricsIdentifiers(e){return this.adding(Ym,e)}get clientOrdering(){return this.required(Mb.type)}addingClientOrdering(e){return this.addingClientOrderingWrapper(new Mb(e))}addingClientOrderingWrapper(e){return this.adding(Mb.type,e)}get personalizationStore(){return this.required(Jm)}addingPersonalizationStore(e){return this.adding(Jm,e)}get arcade(){return this.required(Km)}addingArcade(e){return this.adding(Km,e)}get gameCenter(){return this.required(Qm)}addingGameCenter(e){return this.adding(Qm,e)}get deepLinks(){return this.required(Xm)}addingDeepLinks(e){return this.adding(Xm,e)}get appleSilicon(){return this.required(db.type)}addingAppleSilicon(e){return this.addingAppleSiliconWrapper(new db(e))}addingAppleSiliconWrapper(e){return this.adding(db.type,e)}get storage(){return this.required(Vb.type)}addingStorage(e){return this.addingStorageWrapper(new Vb(e))}addingStorageWrapper(e){return this.adding(Vb.type,e)}get ads(){return this.required(Zm)}addingAds(e){return this.adding(Zm,e)}get onDeviceRecommendationsManager(){return this.required(eb)}addingOnDeviceRecommendationsManager(e){return this.adding(eb,e)}get onDeviceSearchHistoryManager(){return this.required(tb)}addingOnDeviceSearchHistoryManager(e){return this.adding(tb,e)}get featureFlags(){return this.required(nb)}addingFeatureFlags(e){return this.adding(nb,e)}get mediaToken(){return this.required(rb)}addingMediaToken(e){return this.adding(rb,e)}get appDistribution(){return this.required(sb)}addingAppDistribution(e){return this.adding(sb,e)}get timeoutManager(){return this.required(ob)}addingTimeoutManager(e){return this.adding(ob,e)}get treatmentStore(){return this.required(ab)}addingTreatmentStore(e){return this.adding(ab,e)}get experimentCache(){return this.optional(Gb.metatype)}get metricsIdentifiersCache(){return this.optional(qb.defaultMetatype)}get paymentMetricsIdentifiersCache(){return this.optional(qb.paymentMetatype)}get personalizationMetricsIdentifiersCache(){return this.optional(qb.personalizationMetatype)}get userDefaults(){if(!this.props.isNotEnabled("jsUserDefaults"))return this.required(ub)}addingUserDefaults(e){return this.adding(ub,e)}isAvailable(e){return s(this.optional(e))}get dispatcher(){return this.required(zb.dispatcher)}get nativeIntentDispatcher(){return this.required(zb.nativeIntentDispatcher)}get debugSettings(){return this.required(zb.debugSettings)}get router(){return this.required(zb.router)}get localizer(){return this.required(zb.localizer)}}class Jb{static createSharedMetricsReferralContext(e){Jb.shared||(Jb.shared=new Jb(e))}constructor(e){this.currentReferral=null,e.host.isiOS?(this.isMetricsReferralContextRequired=!0,this.isEventDetailClickEventOverrideNecessary=!e.host.isOSAtLeast(16,2,0)):e.host.isMac?(this.isMetricsReferralContextRequired=e.host.isOSAtLeast(13,0,0),this.isEventDetailClickEventOverrideNecessary=!1):(this.isMetricsReferralContextRequired=!1,this.isEventDetailClickEventOverrideNecessary=!1)}get shouldUseJSReferralData(){return this.isMetricsReferralContextRequired&&s(this.currentReferral)}get activeReferralData(){return this.shouldUseJSReferralData&&null!==this.currentReferral&&this.currentReferral.isActive?this.currentReferral.data:null}setReferralDataForProduct(e,t){var n,i,s
if(!this.isMetricsReferralContextRequired||r(t))return
const o=null!==(n=c(t,ym))&&void 0!==n?n:null,a=null!==(i=c(t,kh))&&void 0!==i?i:null,u=null!==(s=f(t,sv))&&void 0!==s?s:null
this.currentReferral={id:`${e}_${Date.now()}`,data:{extRefApp2:o,extRefUrl2:a,kind:u,refUrl:null},isActive:!1,productPageExtensionInfo:null}}setReferralDataForProductPageExtensionIfNecessary(e){var t,i
if(!this.isMetricsReferralContextRequired)return
const s=c(e,Yw),o=c(e,ch)
if(!Kb.isProductPageExtension(e)||!Kb.isValidPageEvent(e)||r(s)||r(o))return
const a=null!==(t=c(e,Op))&&void 0!==t?t:null,u=c(e,gl)
let l
switch(u){case Oa:l=w(n(e,Pa))
break
case vl:l=w(n(e,Ia))
break
default:l={}}const d=null!==(i=c(e,Pp))&&void 0!==i?i:null
this.currentReferral={id:`${s}_${Date.now()}`,data:{extRefApp2:o,extRefUrl2:a,refUrl:d,kind:{name:u,context:l}},isActive:!1,productPageExtensionInfo:{productId:s}},this.addReferralContextToMetricsFieldsIfNecessary(e)}beginReferralContextForPageIfNecessary(e){this.isMetricsReferralContextRequired&&Kb.isValidPageEvent(e)&&Kb.isReferralForEvent(this.currentReferral,e)&&null!==this.currentReferral&&(this.currentReferral.isActive=!0)}endReferralContextIfNecessaryForPageEvent(e){this.isMetricsReferralContextRequired&&Kb.isValidPageEvent(e)&&Kb.isReferralForEvent(this.currentReferral,e)&&(this.currentReferral=null)}addReferralContextToMetricsFieldsIfNecessary(e){var t
this.isMetricsReferralContextRequired&&(e[Jb.referralContextEventField]=null===(t=this.currentReferral)||void 0===t?void 0:t.id)}removeReferralContextInfoFromMetricsEvent(e){this.isMetricsReferralContextRequired&&delete e[Jb.referralContextEventField]}addReferralDataToEventIfNecessary(e){if(!r(this.activeReferralData)&&Kb.shouldAddReferralDataToEvent(e)&&(!Kb.isEventDetailsClickEvent(e)||this.isEventDetailClickEventOverrideNecessary)&&(Kb.isEventDetailsClickEvent(e)&&(e[Sg]=qf),e[ch]=this.activeReferralData.extRefApp2,e[Op]=this.activeReferralData.extRefUrl2,o(this.activeReferralData.refUrl)&&(e[Pp]=this.activeReferralData.refUrl),null!==this.activeReferralData&&null!==this.activeReferralData.kind))switch(e[gl]=this.activeReferralData.kind.name,e[gl]){case Oa:e[Pa]=this.activeReferralData.kind.context
break
case vl:e[Ia]=this.activeReferralData.kind.context}}}Jb.referralContextEventField="referralContextId"
class Kb{static isProductPageExtension(e){return c(e,ym)===Kb.productPageExtensionAppId}static isValidPageEvent(e){const t=c(e,Sg)
return!(0,Cs.isNothing)(t)&&Kb.validPageEventTypes.has(t)}static isReferralForEvent(e,t){var n
if(r(e))return!1
const i=t[Jb.referralContextEventField],o=c(t,Yw)
return s(i)?i===e.id:!(!Kb.isProductPageExtension(t)||!s(o))&&o===(null===(n=null==e?void 0:e.productPageExtensionInfo)||void 0===n?void 0:n.productId)}static shouldAddReferralDataToEvent(e){return e.eventType!==qp||this.isEventDetailsClickEvent(e)}static isEventDetailsClickEvent(e){if(e.eventType!==qp)return!1
const t=e.location,n=null==t?void 0:t[0]
return s(n)&&n.locationType===qf}}Kb.productPageExtensionAppId="com.apple.AppStore.ProductPageExtension",Kb.eventDetailsPageType=qf,Kb.validPageEventTypes=new Set([Jw,"SoftwareBundle",Kb.eventDetailsPageType])
const Qb=(Vs=e(447)).PageInvocationPoint
Qb[em]=em,Qb[gc]=gc,Qb[av]=av,Qb[wd]=wd
const Xb="xp_ase_appstore_ue"
class Zb{constructor(e,t,n,r,i=!1){this.fields=e,this.includingFields=t,this.excludingFields=n,this.topic=r,this.shouldFlush=i}}class eA extends hb{constructor(e){super(),this.fields=e}}class tA extends hb{constructor(e){super(),this.data=e||[],this.custom={}}addMetricsData(e){this.data.push(e)}addManyMetricsData(e){for(const t of e)this.addMetricsData(t)}clearAll(){this.data.length=0}}class nA extends hb{constructor(){super(),this.instructions=[],this.custom={}}addInstruction(e){this.instructions.push(e)}addManyInstructions(e){for(const t of e)this.addInstruction(t)}addData(e,t){const n={data:e,invocationPoints:t}
this.instructions.push(n)}addManyData(e,t){for(const n of e)this.addData(n,t)}}class rA{constructor(e,t,n){this.fields=e,this.id=t,this.custom=n}}class iA extends rA{constructor(e,t){super(e.fields,e.id,e.custom||{}),void 0!==this.custom&&(this.custom.isFast=t),this.isFast=t}}class sA extends pb{constructor(e){super(),this.title=null,this.artwork=null,this.presentationStyle=[],this.actionClass=e,this.$kind=e,this.actionMetrics=new tA}}class oA extends sA{constructor(e,t=!0){super("ExternalUrlAction"),this.url=e,this.isSensitive=t}}class aA extends sA{constructor(e){super("CompoundAction")
const t=[]
for(const n of e)this.actionMetrics.addManyMetricsData(n.actionMetrics.data),Object.assign(this.actionMetrics.custom,n.actionMetrics.custom),n.actionMetrics.clearAll(),t.push(n)
this.actions=t}}class uA extends sA{constructor(e,t,n,r){super("OfferAction"),this.title=e,this.adamId=t,this.parentAdamId=r,this.purchaseConfiguration=n,n&&(this.bundleId=n.bundleId,this.lineItem=n.lineItem),this.includeBetaApps=!1}}class cA extends sA{constructor(e,t){super("OfferConfirmationAction"),this.buyAction=e,this.confirmationInitiationAction=t}}class lA extends sA{constructor(){super("OfferAlertAction"),this.title=null,this.message=null,this.footerMessage=null,this.isCancelable=!0,this.shouldCheckForAvailableDiskSpace=!1,this.checkRestrictionsForContentRating=null,this.remoteControllerRequirement=cw,this.shouldCheckForGameController=!1,this.shouldIncludeActiveAccountInFooterMessage=!1,this.shouldPromptForConfirmation=!1,this.completionAction=null}}class dA extends sA{constructor(e,t){super("CancelPreorderAction"),this.preorderAdamId=e,this.isArcade=t}}class fA extends sA{constructor(e,t,n,r,i){super("InAppPurchaseAction"),this.productIdentifier=e,this.appAdamId=t,this.appBundleId=n,this.installRequiredAction=r,this.minimumShortVersionSupportingInAppPurchaseFlow=i}}class hA extends sA{constructor(e,t){super("OfferStateAction"),this.title=t.title,this.adamId=e,this.defaultAction=t,this.includeBetaApps=!1}}class pA extends sA{constructor(e,t=ym){super("OpenAppAction"),this.adamId=e,this.destination=t}}class wA extends sA{constructor(e){super("SelectAppAction"),this.adamId=e}}class gA extends sA{constructor(e,t){super("WriteReviewAction"),this.adamId=e,this.url=t}}class vA extends sA{constructor(e){super("SheetAction"),this.actions=e,this.isCancelable=!1,this.cancelTitle=null,this.message=null,this.style=um,this.isCustom=!1,this.destructiveActionIndex=null}}class mA extends sA{constructor(e){super("AlertAction"),this.style=e,this.title=null,this.message=null,this.isCancelable=!1,this.cancelTitle=null,this.cancelAction=null,this.buttonActions=[],this.buttonTitles=[],this.destructiveActionIndex=null,this.imageName=null}}class bA extends pb{constructor(e,t){super(),this.activityType=e,this.action=t}}class AA extends sA{constructor(e,t,n=so){super("ShareSheetAction"),this.data=e,this.activities=t,this.shareSheetStyle=n}}class yA extends sA{constructor(e,t){super("ProductPageScrollAction"),this.section=e,this.clicksOnScroll=t}}class OA extends sA{constructor(){super("BlankAction")}}class PA extends sA{constructor(e,t){super("RateLimitedAction"),this.actionKey=e,this.primaryAction=t}}class IA extends sA{constructor(e,t,n,r){super("ArcadeSubscriptionStateAction"),this.notSubscribedAction=e,this.purchasingAction=t,this.subscribedAction=n,this.unknownAction=r}}class SA extends sA{constructor(e,t,n,r,i,s){super("ShelfBasedPageScrollAction"),this.shelfId=e,this.notPurchasedShelfId=t,this.purchasedShelfId=n,this.adamId=r,this.index=i,this.clicksOnScroll=s}}class TA extends sA{constructor(e,t,n){super("AppLaunchTrampolineAction"),this.bundleId=e,this.payloadUrl=t,this.fallbackAction=n}}class EA extends sA{constructor(e,t,n,r,i,s,o,a,u){super("CreateCalendarEventAction"),this.startDate=e,this.endDate=t,this.isAllDay=n,this.name=r,this.location=i,this.notes=s,this.url=o,this.notAuthorizedAction=a,this.availability=u}}class _A extends sA{constructor(e){super("CopyTextAction"),this.text=e}}class RA extends sA{constructor(e){super("AdInteractionAction"),this.adActionMetrics=e}}const DA="x-as3-internal",kA=od,CA="itms-apps",xA=mc,NA="appstore-ui",FA="lookup",MA=gf,LA=ym,BA=mv,jA=uh,UA="appClipSubscribe",$A="launchApp",VA=(new Set(["storepreview.apple.com","preview.apps.apple.com"]),"id"),GA=op,WA=Kv,HA=Ww,qA=Rv,zA=ml,YA=uh,JA="recoMetrics",KA="appId",QA=Ju,XA=Ku,ZA="eventid",ey=Cc,ty="todayCardConfig",ny="filter[canvas:cardId]",ry="inAppPurchaseId",iy="productUrl",sy=Gd,oy=ym,ay=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,uy=/([^=?&]+)=?([^&]*)/g,cy=[Lf,zw,Rg,iw]
class ly{constructor(e){if(this.query={},!e)return
let t=e
const n=ay.exec(e)
if(n){let e=n[1]
e&&(e=e.split(":")[0]),this.protocol=e,t=n[3]}let r={remainder:t,result:void 0}
for(const e of cy){if(!r.remainder)break
switch(e){case Lf:r=g(r.remainder,"#",ld),this.hash=r.result
break
case zw:r=g(r.remainder,"?",ld),r.result&&(this.query=ly.queryFromString(r.result))
break
case Rg:r=g(r.remainder,"/",ld),r.result&&(this.pathname="/"+r.result)
break
case iw:if(r.remainder){const e=g(r.remainder,"@",Qu),t=e.result,n=e.remainder
if(t){const e=t.split(":")
this.username=decodeURIComponent(e[0]),this.password=decodeURIComponent(e[1])}if(n){const e=n.split(":")
this.host=e[0],this.port=e[1]}}break
default:throw new Error("Unhandled case!")}}}set(e,t){if(!t)return this
switch(e===zw&&typeof t===dm&&(t=ly.queryFromString(t)),e){case dg:this.protocol=t
break
case Xu:this.username=t
break
case Zu:this.password=t
break
case ec:this.port=t
break
case Rg:this.pathname=t
break
case zw:this.query=t
break
case Lf:this.hash=t
break
default:this[e]=t}return this}get(e){switch(e){case dg:return this.protocol
case Xu:return this.username
case Zu:return this.password
case ec:return this.port
case Rg:return this.pathname
case zw:return this.query
case Lf:return this.hash
default:return this[e]}}append(e,t){const n=this.get(e)
let r
if(e===zw)typeof t===dm&&(t=ly.queryFromString(t)),r=typeof n===dm?{existingValue:n,...t}:{...n,...t}
else{let i=n
i||(i="")
let s=i
if(e===Rg){const e=i.length
e&&"/"===i[e-1]||(s+="/")}s+=t,r=s}return this.set(e,r)}param(e,t){return e?(this.query||(this.query={}),this.query[e]=t,this):this}removeParam(e){return e&&this.query?(void 0!==this.query[e]&&delete this.query[e],this):this}path(e){return this.append(Rg,e)}pathExtension(){var e
if((0,ks.isNothing)(this.pathname))return null
const t=null===(e=this.pathname.split("/").filter(e=>e.length>0).pop())||void 0===e?void 0:e.split(".")
return void 0===t||t.filter(e=>""!==e).length<2?null:t.pop()}pathComponents(){return this.pathname?this.pathname.split("/").filter(e=>e.length>0):[]}popPathComponent(){if(!this.pathname)return null
const e=this.pathname.slice(this.pathname.lastIndexOf("/")+1)
return 0===e.length?null:(this.pathname=this.pathname.slice(0,this.pathname.lastIndexOf("/")),e)}build(){return this.toString()}toString(){let e=""
return this.protocol&&(e+=this.protocol+"://"),this.username&&(e+=encodeURIComponent(this.username),this.password&&(e+=":"+encodeURIComponent(this.password)),e+="@"),this.host&&(e+=this.host,this.port&&(e+=":"+this.port)),this.pathname&&(e+=this.pathname,e.endsWith("/")&&this.pathname.length>0&&(e=e.slice(0,-1))),this.query&&Object.keys(this.query).length&&(e+="?"+ly.toQueryString(this.query)),this.hash&&(e+="#"+this.hash),e}static queryFromString(e){const t={}
let n=uy.exec(e)
for(;n;){const r=decodeURIComponent(n[1]),i=decodeURIComponent(n[2])
t[r]=i,n=uy.exec(e)}return t}static toQueryString(e){let t="",n=!0
for(const r of Object.keys(e)){n||(t+="&"),n=!1,t+=encodeURIComponent(r)
const i=e[r]
i&&i.length&&(t+="="+encodeURIComponent(i))}return t}static from(e){return new ly(e)}static fromComponents(e,t,n,r,i){const s=new ly
return s.protocol=e,s.host=t,s.pathname=n,s.query=r,s.hash=i,s}}const dy=[kA,CA,"itms-appss","itms-messages","itms-messagess","itms-watch","itms-watchs","macappstore","macappstores","com.apple.tvappstore","com.apple.TVAppStore",xA]
class fy{constructor(e){var t
this.identifier=e.identifier,this._protocol=null==(t=e.protocol)?null:t,this._hostName=e.hostName,e.path?(this._pathComponents=e.path.split("/").filter(e=>e.length>0),this._pathParameterMap=function(e){const t={}
return e.forEach((e,n)=>{A(e)&&(t[e]=n)}),t}(this._pathComponents)):(this._pathComponents=null,this._pathParameterMap=null),this._pathExtension=e.pathExtension,this._query=function(e){const t=[]
if(!e)return t
for(const n of e){const e=n.split("=")
let r=e[0]
const i=-1!==r.indexOf("?")
r=r.replace("?","")
const s=-1!==r.indexOf(tc)
r=r.replace(tc,"")
let o=null
e.length>1&&(o=decodeURIComponent(e[1])),t.push({key:r,value:o,optional:i,caseInsensitive:s})}return t}(e.query),this._hash=e.hash,this._regex=e.regex,e.exclusions?this._exclusions=e.exclusions.map(function(e){return new fy(e)}):this._exclusions=null}matches(e){var t,n
if(this._regex){if(!this._regex.length)return!1
let t=!1
for(const n of this._regex)if(n.test(e.toString())){t=!0
break}if(!t)return!1}if(this._protocol&&e.protocol!==this._protocol)return!1
if(this._hostName&&e.host!==this._hostName)return!1
if(this._pathComponents){const t=this._pathComponents,n=e.pathComponents()
if(t.length!==n.length)return!1
const r=t.length
for(let e=0;e<r;e++){const r=t[e]
if(!A(r)&&r!==n[e])return!1}}if(this._pathExtension&&e.pathExtension()!==this._pathExtension)return!1
if(this._query)for(const r of this._query){let i
if(r.caseInsensitive)for(const[n,s]of Object.entries(null!==(t=e.query)&&void 0!==t?t:{}))r.key.toLocaleLowerCase()===n.toLocaleLowerCase()&&(i=s)
else i=null===(n=e.query)||void 0===n?void 0:n[r.key]
if(!i&&!r.optional)return!1
if(r.value&&r.value!==i)return!1}if(this._hash&&e.hash!==this._hash)return!1
if(this._exclusions)for(const t of this._exclusions){if(t._exclusions)throw Error("Matching exclusion rules with further exclusion rules may introduce significant code-complexity and/or reduce the ease with which developers are able to reason about your desired goals. Are there any simpler options?")
if(t.matches(e))return!1}return!0}extractParameters(e){var t,n
const r={}
if(null!==this._pathComponents&&null!==this._pathParameterMap){const t=e.pathComponents()
for(const e of Object.keys(this._pathParameterMap)){const n=y(e),i=O(t[this._pathParameterMap[e]],e)
r[n]=decodeURIComponent(i)}}if(this._query)for(const i of this._query)r[i.key]=null!==(n=null===(t=e.query)||void 0===t?void 0:t[i.key])&&void 0!==n?n:void 0
return r}}class hy{constructor(){this._routeMappings=[]}associate(e,t){const n=[]
for(const t of e)n.push(new fy(t))
this._routeMappings.push({route:n,object:t})}routedObjectForUrl(e){let t=typeof e===dm?new ly(e):e
t=function(e){let t=typeof e===dm?new ly(e):e
if(!b(t))return t
const n=t.query,r=null==n?void 0:n[wm]
return(!t.host||0===t.host.length)&&null!=r&&(t=new ly(r),(null==n?void 0:n[Cl])&&(t=t.append(zw,{dsid:n[Cl]})),(null==n?void 0:n[nc])&&(t=t.append(zw,{signatureResumption:n[nc]}))),ly.fromComponents(kA,t.host,t.pathname,t.query,t.hash)}(t),t=function(e){var t,n,r
const i=typeof e===dm?new ly(e):e
if(!b(i))return i
const s=i.build()
let o,a=(0,ks.isNothing)(i.query)?void 0:v(i.query)
const u={},c=[{key:"MZSearch.woa",action:em},{key:em,action:em},{key:"buyLandingPage",action:Dh},{key:"buyCharityGiftWizard",action:"donate"},{key:"longUrlHandler",action:rc},{key:vd,action:vd}],l={"accessory-lookup":"accessoryLookup","finance-app":fv,viewEula:Dp,software:Um,primaryTerm:em}
let d=!1
for(const e of Object.keys(u))if(i.host&&-1!==i.host.indexOf(e)){d=!0,o=u[e]
break}let f=!1
for(const e of c){const t=e.key
if(i.pathname&&-1!==i.pathComponents().indexOf(t)){f=!0,o=e.action,void 0!==(null==a?void 0:a[t])&&delete a[t]
break}}for(const e of Object.keys(l)){const r=void 0!==(null===(t=i.query)||void 0===t?void 0:t[e])&&null!==i.query[e],s=(null===(n=i.query)||void 0===n?void 0:n[Rv])&&-1!==i.query[Rv].indexOf(e)
if(r||s){o=l[e],void 0!==(null==a?void 0:a[e])&&delete a[e]
break}}if(o===fv&&-1!==s.indexOf(ic)&&(o="addToPassbook",void 0!==a&&delete a[ic]),o){const e=null,t=null,n={action:o}
"redeem"===o&&void 0!==a&&(a[cp]||a[sc])?n[cp]=a[cp]||a[sc]:o!==fv&&o!==vd&&o!==rc||!f&&!d||(n.originalUrl=i.toString())
const s=null===(r=i.query)||void 0===r?void 0:r[Oc]
return o===em&&void 0!==s&&void 0!==a&&(a[Oc]=s),a={...a,...n},ly.fromComponents(i.protocol,t,e,a,i.hash)}return i}(t)
for(const e of this._routeMappings)for(const n of e.route)if(n.matches(t))return{normalizedUrl:t,parameters:n.extractParameters(t),object:e.object,matchedRuleIdentifier:n.identifier}
return{normalizedUrl:t,parameters:null,object:null,matchedRuleIdentifier:null}}}class py{constructor(e){this._count=e,this._triggers=[]}countDown(){if(0!==this._count&&(this._count--,0===this._count)){for(const e of this._triggers)e()
this._triggers.splice(0)}}then(e){0===this._count?e():this._triggers.push(e)}}const wy=new RegExp("#?([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])([0-9,a-f,A-F][0-9,a-f,A-F])?"),gy=(I(0,0,0),I(1,1,1),mm)
P("F0F0F8"),P("303031"),function(e){e.MoreByDeveloper="moreByDeveloper",e.SimilarItems="similarItems",e.SmallStory="smallStory"}(Gs||(Gs={}))
const vy=(0,Rs.makeMetatype)("app-store:page-router")
Ws=e(8706)
class my extends Ws.LegacyRuntime{constructor(e,t){super(e,t,{})}exportingService(e,t){this.wrapServiceInValidation(t)
const n={...this.serviceWithName(e)||{},...t}
return super.exportingService(e,n)}exportingServiceName(e,t,n){const r={}
r[t]=n,this.exportingService(e,r)}wrapServiceInValidation(e){for(const t of Object.keys(e)){const n=e[t]
n instanceof Function&&(e[t]=function(...e){const t=n.apply(this,e)
return t instanceof Promise?t.then(e=>(Ds.recordValidationIncidents(e),e)):(Ds.recordValidationIncidents(t),t)})}}}const by="_jet-internal:derived-data",Ay={artwork:Mf,screenshotsByType:"customScreenshotsByType",promotionalText:"customPromotionalText",videoPreviewsByType:"customVideoPreviewsByType",customScreenshotsByTypeForAd:Hf,customVideoPreviewsByTypeForAd:Yc,customDeepLink:ah},yy=um
class Oy extends hb{constructor(e,t,n,r,i){super(),this.title=e,this.summary=r,this.items=t,this.items_V2=n,this.shouldAlwaysPresentExpanded=!1,this.linkAction=i}}class Py extends hb{constructor(e,t,n,r,i=[]){super(),this.text=e,this.heading=t,this.subText=n,this.listText=r,this.headingArtworkItems=i}}class Iy extends hb{constructor(e,t={}){super(),this.text=e,this.heading=t.heading,this.headingArtworks=t.headingArtworks,this.listText=t.listText,this.textPairs=t.textPairs}}class Sy extends hb{constructor(e,t,n,r,i,s,o,a,u){super(),this.message=e,this.focusedMessage=t,this.action=n,this.fullProductAction=r,this.leadingArtwork=i,this.leadingArtworkTintColor=s,this.includeBackgroundBorder=o,this.kind=a,this.hideCriteria=u}}class Ty extends hb{constructor(e,t,n,r,i){super(),this.unknownBanner=e,this.buyBanner=t,this.downloadBanner=n,this.updateBanner=r,this.openBanner=i}}class Ey extends hb{}class _y extends hb{constructor(e,t,n,r,i,s){super(),this.items=e,this.mediaPlatform=t,this.allPlatforms=n,this.platformDescription=r,this.allPlatformsDescription=i,this.allPlatformsDescriptionPlacement=s}}class Ry extends hb{constructor(e,t,n){super(),this.paragraph=e,this.developerAction=n,this.developerLinks=t}}class Dy extends hb{}class ky extends pb{isValid(){return!!this.title&&!(!this.icon||!this.icon.isValid())&&super.isValid()}}class Cy extends ky{constructor(){super(),this.screenshots=[],this.trailers=[],this.overrideLockupPosition=null,this.screenshotsDisplayStyle="control",this.metadataRibbonItems=[],this.showMetadataInformationInLockup=!1}}class xy extends pb{constructor(e){super(),this.viewType=e,this.moduleType=null,this.labelText=null,this.borderedText=null,this.highlightedText=null,this.starRating=null,this.secondaryViewPlacement=vm,this.artwork=null,this.maxCharacterCount=null,this.truncationLegibilityCharacterCountThreshold=null,this.allowsTruncation=null}}class Ny extends hb{constructor(e,t){super(),e&&(this.videos=e),t&&(this.mediaPlatform=t)}isValid(){return this.videos&&this.videos.length>0&&super.isValid()}}class Fy extends ky{}class My extends hb{constructor(e,t,n,r){super(),this.text=e,this.clickAction=t,this.systemImageName=n,this.adamIdForPurchaseHistoryFilter=r}}class Ly extends pb{constructor(e,t,n,r,i){super(),this.badges=e,this.hasTopSeparator=t,this.hasBottomSeparator=n,this.separatorsAreFullWidth=r,this.alignment=i}}!function(e){e.OnPageLoad="onPageLoad",e.OnShelfWillAppear="onShelfWillAppear"}(Hs||(Hs={})),function(e){e.ViewAligned="viewAligned",e.CenterAligned="centerAligned"}(qs||(qs={}))
class By extends pb{constructor(e,t=null,n=null){super(),this.contentType=e,this.marker=t,this.items=n||[],this.header=void 0,this.url=null,this.mergeWhenFetched=!1,this.fetchStrategy=Hs.OnPageLoad,this.batchGroup=null,this.seeAllAction=null,this.footerTitle=null,this.footerAction=null,this.eyebrow=null,this.eyebrowArtwork=null,this.title=null,this.titleArtwork=null,this.subtitle=null,this.isHorizontal=!1,this.isHidden=!1,this.rowsPerColumn=null,this.background={type:Yv},this.contentsMetadata={type:Yv},this.isPersonalized=!1,this.shouldFilterApps=!1}}!function(e){e.TopLeading="topLeading",e.Top="top",e.TopTrailing="topTrailing",e.Trailing="trailing",e.BottomTrailing="bottomTrailing",e.Bottom="bottom",e.BottomLeading="bottomLeading",e.Leading="leading"}(zs||(zs={})),function(e){e.Grid="grid",e.Hero="hero",e.Standard="standard"}(Ys||(Ys={})),function(e){e.Icon="icon",e.Category="category"}(Js||(Js={}))
class jy{constructor(e,t,n,r){this.contentsResourceTypes=new Set,this.ids=new Set,this.idsByResourceType=new Map,this.originalOrdering=[],this.relationshipIncludes=new Set,this.attributeIncludes=new Set,this.platform=null,this.supplementaryMetadataAssociations=[],this.additionalPlatforms=new Set,this.additionalQuery={},this.relationshipLimits={},this.searchTerm=null,this.searchTypes=[],this.context=null,this.useCustomAttributes=!1,this.countryCodeOverride=void 0,this.objectGraph=e,this.platform=function(e){if(e.props.enabled(uf)&&e.client.isCompanionVisionApp)return Pg
switch(e.client.deviceType){case Cm:return hv
case Tm:return wv
case"tv":return Md
case Fm:return Fm
case Mm:return Mm
case pm:return Pg
default:return null}}(e),this.isMixedMediaRequest=null!=n&&n,this.supplementaryMetadataAssociations=null!=r?r:[],this.includeAppBinaryTraitsAttribute=e.client.isiOS,i(t)||(typeof t===dm?this.href=t:Array.isArray(t)&&this.withDataItems(t,r,n))}addDataToIDsByResourceType(e){const t=e.type,n=e.id
let r=this.idsByResourceType.get(t);(0,ks.isNothing)(r)&&(r=new Set),r.add(n),this.idsByResourceType.set(t,r)}forType(e){return this.resourceType=e,this}withDataItems(e,t,n){if(0===e.length)return this
this.isMixedMediaRequest=this.isMixedMediaRequest||null!=n&&n
for(const r of e)if(this.ids.add(r.id),this.addDataToIDsByResourceType(r),(0,ks.isSome)(n)&&n&&(0,ks.isSome)(t)&&t.length>0)for(const e of t){const t=ve(e,r);(0,ks.isSome)(t)&&t.length>0&&t.forEach(e=>{this.addDataToIDsByResourceType(e)})}return 1===this.idsByResourceType.size?(this.resourceType=this.idsByResourceType.keys().next().value,this.isMixedMediaRequest=!1):this.idsByResourceType.size>1&&!this.isMixedMediaRequest&&(this.resourceType=jm,this.contentsResourceTypes=new Set(Array.from(this.idsByResourceType.keys()))),this.originalOrdering.push(...e),this}withIdOfType(e,t){return this.withDataItems([{id:e,type:t}])}withIdsOfType(e,t){return this.withDataItems(e.map(e=>({id:e,type:t})))}includingRelationships(e){for(const t of e)this.relationshipIncludes.add(t)
return this}includingScopedRelationships(e,t){this.scopedRelationshipIncludes||(this.scopedRelationshipIncludes=new Map)
let n=this.scopedRelationshipIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedRelationshipIncludes.set(e,n),this}includingMetaKeys(e,t){this.metaIncludes||(this.metaIncludes=new Map)
let n=this.metaIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.metaIncludes.set(e,n),this}includingViews(e){this.viewsIncludes||(this.viewsIncludes=new Set)
for(const t of e)this.viewsIncludes.add(t)
return this}includingKindsKeys(e,t){this.kindIncludes||(this.kindIncludes=new Map)
let n=this.kindIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.kindIncludes.set(e,n),this}includingAssociateKeys(e,t){this.associateIncludes||(this.associateIncludes=new Map)
let n=this.associateIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.associateIncludes.set(e,n),this}includingRelationshipsForUpsell(e){const t=Mg
if(e){this.scopedRelationshipIncludes||(this.scopedRelationshipIncludes=new Map)
let e=this.scopedRelationshipIncludes.get(Sm)
e||(e=new Set),e.add(t),this.scopedRelationshipIncludes.set(Sm,e)}else this.relationshipIncludes.add(t)
{this.metaIncludes||(this.metaIncludes=new Map)
let e=this.metaIncludes.get(Mg)
e||(e=new Set),e.add(ng),this.metaIncludes.set(Mg,e)}return this}includingAttributes(e){for(const t of e)this.attributeIncludes.add(t)
return this}includingScopedAttributes(e,t){this.scopedAttributeIncludes||(this.scopedAttributeIncludes=new Map)
let n=this.scopedAttributeIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedAttributeIncludes.set(e,n),this}includingAdditionalPlatforms(e){for(const t of e)this.additionalPlatforms.add(t)
return this}includingScopedAvailableIn(e,t){this.scopedAvailableInIncludes||(this.scopedAvailableInIncludes=new Map)
let n=this.scopedAvailableInIncludes.get(e)
n||(n=new Set)
for(const e of t)n.add(e)
return this.scopedAvailableInIncludes.set(e,n),this}includingScopedSparseLimit(e,t){return this.scopedSparseLimit=new Map,this.scopedSparseLimit.set(e,t),this}addingQuery(e,t){return(0,ks.isSome)(t)?this.additionalQuery[e]=t:delete this.addingQuery[e],this}addingQueryValues(e){return this.additionalQuery={...this.addingQuery,...e},this}addingRelationshipLimit(e,t){return this.relationshipLimits[e]=t,this}withSearchTerm(e){return this.searchTerm=e,this}searchingOverTypes(e){for(const t of e)this.searchTypes.push(t)
return this}addingContext(e){return this.context=e,this}includingMacOSCompatibleIOSAppsWhenSupported(e=!1){return this.objectGraph.appleSilicon.isSupportEnabled&&(e||this.enablingFeature("macOSCompatibleIOSApps"),this.includingScopedAttributes(Um,[ia])),this}includingAppBinaryTraitsAttribute(e=!0){return this.includeAppBinaryTraitsAttribute=e,this}usingCustomAttributes(e){return this.useCustomAttributes=e,this}alwaysUseIdsAsQueryParam(e){return this.useIdsAsQueryParam=e,this}attributingTo(e){return this.canonicalUrl=e,this}withFilter(e,t){return this.filterType=e,this.filterValue=t,this}withLimit(e){return this.limit=e,this}withSparseLimit(e){return null!==e&&(this.sparseLimit=e),this}withSparseCount(e){return null!==e&&(this.sparseCount=e),this}enablingFeature(e){return this.enabledFeatures||(this.enabledFeatures=[]),this.enabledFeatures.push(e),this}enablingFeatures(e){return this.enabledFeatures||(this.enabledFeatures=[]),this.enabledFeatures.push(...e),this}asPartialResponseLimitedToFields(e){return this.fields=e,this}includesResourceType(e){return this.resourceType===e||!!s(this.contentsResourceTypes)&&this.contentsResourceTypes.has(e)}withCountryCodeOverride(e){return this.countryCodeOverride=e,this}}const Uy=(e,t)=>e||t
class $y{constructor(e){if(this._values={},(0,ks.isSome)(e)&&e.length>0){const t=e.split("&")
for(const e of t){const[t,n]=e.split("="),r=decodeURIComponent(t),i=(0,ks.isNothing)(n)?"":decodeURIComponent(n)
this._values[r]=i}}}_searchKey(e,t){if(0===e.length)throw new Error("key may not be zero length")
return(0,ks.isNothing)(t)||0===t.length?e:`${t}${e.charAt(0).toUpperCase()}${e.slice(1)}`}get(e,t="mt"){const n=this._searchKey(e,t)
return this._values[n]}set(e,t,n="mt"){const r=this._searchKey(e,n)
return(0,ks.isNothing)(t)?delete this._values[r]:this._values[r]=t,this}toString(){let e=""
for(const t of Object.keys(this._values)){const n=this._values[t]
e.length>0&&(e+="&"),e+=encodeURIComponent(t),e+="=",e+=encodeURIComponent(n)}return e}toEncodedMap(){const e={}
for(const t of Object.keys(this._values)){const n=this._values[t],r=encodeURIComponent(t),i=encodeURIComponent(n)
e[r]=i}return e}toRawMap(){return{...this._values}}}const Vy="jet_adamId"
class Gy{constructor(){this.position=0}}class Wy extends sA{constructor(e,t){super(pd),this.$kind="flowAction",this.page=e,this.pageUrl=t,this.pageData=null,this.referrerData=void 0,this.presentationContext=lv,this.animationBehavior=lv,this.origin="inapp"}}class Hy extends hb{constructor(){super(),this.pageMetrics=new nA,this.pageRenderMetrics={}}}class qy extends hb{constructor(e,t,n,r,i,s,o){super(),this.instanceId=e,this.adamId=t,this.bundleId=n,this.advertType=r,this.invocation=i,this.purchaseType=s,this.reportingDestination=o}}class zy extends hb{constructor(e,t,n,r,i,s,o,a,u,c=lv){super(),this.type=e,this.key=t,this.content=n,this.heading=i,this.caption=s,this.longCaption=o,this.leadingValue=c,this.accessibilityTitle=a,this.accessibilityCaption=u,this.style=r,this.isMonochrome=!0}}class Yy extends hb{constructor(e,t){super(),this.type=e,this.shelfId=t}}class Jy extends hb{constructor(e,t){super(),this.title=e,this.subtitle=t}}class Ky extends ky{constructor(){super(),this.pageMetrics=new nA,this.pageRenderMetrics={}}}const Qy=new Set([Om,Pm,Rm]),Xy=new Set([bm,jf,Uv,$w,Ew,Wv,fm,tv,dv,im,ug,hm,Mv,Qw,Cg,Lv,nv,ov,xv,qv,$v,mm,zv,cg,_w,_h,Nv])
class Zy extends hb{}class eO extends hb{constructor(){super(),this.shelfOrderings={},this.shelfMapping={},this.presentationOptions=[],this.isIncomplete=!1,this.pageMetrics=new nA,this.pageRenderMetrics={}}}const tO="notPurchasedOrdering"
class nO extends eO{constructor(){super(...arguments),this.appPlatforms=[]}}let rO=null
const iO={11:"43",30:"44"}
class sO{constructor(e,t,n){this.sectionType=e,this.shelfId=t,this.shelfBasedMappedIds=n}createProductPageSection(e){return Qy.has(this.sectionType)?new Yy(this.sectionType,null):new Yy(this.sectionType,this.shelfId)}createShelfIdList(){return this.shelfBasedMappedIds||[this.shelfId]}}const oO=5,aO=5,uO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,Rp),new sO(Gm,ov),new sO(Gm,$w),new sO(Gm,Ew),new sO(Gm,Uv),new sO(Gm,nv),new sO(Gm,cg),new sO(Gm,ug),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Xp,Ah,mg]),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,Lv),new sO(Gm,zv)],cO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,Rp),new sO(Gm,ov),new sO(Gm,$w),new sO(Gm,Ew),new sO(Gm,Uv),new sO(Gm,nv),new sO(Gm,cg),new sO(Gm,ug),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Dg,Tw,Uw,mg,Zp,ew]),new sO(Gm,Zp),new sO(Gm,Tw),new sO(Gm,Uw),new sO(Gm,ew),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,Lv),new sO(Gm,zv)],lO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,Rp),new sO(Gm,ov),new sO(Gm,$w),new sO(Gm,Ew),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,Uv),new sO(Gm,tv),new sO(Gm,Nv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Xp,mg]),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,nv),new sO(Gm,cg),new sO(Gm,ug),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Qw),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,Lv),new sO(Gm,zv)],dO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,Rp),new sO(Gm,ov),new sO(Gm,$w),new sO(Gm,Ew),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,Uv),new sO(Gm,tv),new sO(Gm,Nv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Dg,Tw,Uw,mg]),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,nv),new sO(Gm,cg),new sO(Gm,ug),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Qw),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,Lv),new sO(Gm,zv)],fO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,Rp),new sO(Gm,ov),new sO(Gm,zv),new sO(Gm,$w),new sO(Gm,Ew),new sO(Gm,Uv),new sO(Gm,nv),new sO(Gm,cg),new sO(Gm,ug),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Xp,Ah,mg]),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,Lv)],hO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,Rp),new sO(Gm,ov),new sO(Gm,zv),new sO(Gm,$w),new sO(Gm,Ew),new sO(Gm,Uv),new sO(Gm,nv),new sO(Gm,cg),new sO(Gm,ug),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Dg,Tw,Uw,mg,Zp,ew]),new sO(Gm,Zp),new sO(Gm,Tw),new sO(Gm,Uw),new sO(Gm,ew),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,Lv)],pO=5,wO=5,gO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,_p),new sO(Gm,ov),new sO(Gm,Uv),new sO(Gm,nv),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Xp,Ah,mg]),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,zv),new sO(Gm,Lv)],vO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,_p),new sO(Gm,ov),new sO(Gm,Uv),new sO(Gm,nv),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Dg,Tw,Uw,mg,Zp,ew]),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,zv),new sO(Gm,Lv)],mO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,_p),new sO(Gm,ov),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,Nv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Xp,mg]),new sO(Gm,Uv),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,nv),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Qw),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,zv),new sO(Gm,Lv)],bO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,_p),new sO(Gm,ov),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,Nv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Dg,Tw,Uw,mg]),new sO(Gm,Uv),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,nv),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Qw),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,zv),new sO(Gm,Lv)],AO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,_p),new sO(Gm,ov),new sO(Gm,zv),new sO(Gm,Uv),new sO(Gm,nv),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Ah,Xp,mg]),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,Lv)],yO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,_p),new sO(Gm,ov),new sO(Gm,zv),new sO(Gm,Uv),new sO(Gm,nv),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,Cv),new sO(Gm,mm,[_v,Zp,Dg,Tw,Uw,mg,ew]),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,Lv)],OO=5,PO=5,IO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,ov),new sO(Gm,$w),new sO(Gm,Ew),new sO(Gm,Uv),new sO(Gm,nv),new sO(Gm,cg),new sO(Gm,ug),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,mm),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,Lv),new sO(Gm,zv)],SO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,ov),new sO(Gm,$w),new sO(Gm,Ew),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,Uv),new sO(Gm,tv),new sO(Gm,Nv),new sO(Gm,mm),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,nv),new sO(Gm,cg),new sO(Gm,ug),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Qw),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,Lv),new sO(Gm,zv)],TO=5,EO=5,_O=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,ov),new sO(Gm,Uv),new sO(Gm,nv),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,mm),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,zv),new sO(Gm,Lv)],RO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Mv),new sO(Gm,ov),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,tv),new sO(Gm,Nv),new sO(Gm,mm),new sO(Gm,Uv),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,nv),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Qw),new sO(Gm,Wv),new sO(Gm,dv),new sO(Gm,zv),new sO(Gm,Lv)],DO=5,kO=5,CO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,_w),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,nw),new sO(Gm,Lv),new sO(Gm,zv),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,_h)],xO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Rm,Rm),new sO(Gm,_w),new sO(Gm,Nv),new sO(Gm,tw),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Lv),new sO(Gm,zv),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Qw),new sO(Gm,_h)],NO=5,FO=5,MO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,_w),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,nw),new sO(Gm,zv),new sO(Gm,Lv),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,_h)],LO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Rm,Rm),new sO(Gm,_w),new sO(Gm,Nv),new sO(Gm,tw),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,zv),new sO(Gm,Lv),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Qw),new sO(Gm,_h)],BO=3,jO=3,UO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,nv),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,jf)],$O=[new sO(Om,Om),new sO(Pm,Pm),new sO(Rm,Rm),new sO(Gm,fm),new sO(Gm,nv),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,jf)],VO=5,GO=5,WO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,ov),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,_w),new sO(Gm,yh),new sO(Gm,nw),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,Lv),new sO(Gm,zv)],HO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,ov),new sO(Rm,Rm),new sO(Gm,_w),new sO(Gm,Nv),new sO(Gm,yh),new sO(Gm,tw),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Qw),new sO(Gm,Wv),new sO(Gm,Lv),new sO(Gm,zv)],qO=5,zO=5,YO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,ov),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,Nv),new sO(Rm,Rm),new sO(Gm,_w),new sO(Gm,yh),new sO(Gm,nw),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Cg),new sO(Gm,Wv),new sO(Gm,zv),new sO(Gm,Lv)],JO=[new sO(Om,Om),new sO(Pm,Pm),new sO(Gm,ov),new sO(Rm,Rm),new sO(Gm,_w),new sO(Gm,Nv),new sO(Gm,yh),new sO(Gm,tw),new sO(Gm,bm),new sO(Gm,im),new sO(Gm,qv),new sO(Gm,$v),new sO(Gm,xv),new sO(Gm,hm),new sO(Gm,Qw),new sO(Gm,Wv),new sO(Gm,zv),new sO(Gm,Lv)],KO="product_media"
class QO extends hb{constructor(e,t,n,r,i){super(),this.showLiveIndicator=e,this.displayFromDate=t,this.displayText=n,this.countdownToDate=r,this.countdownStringKey=i}}!function(e){e.AppEvent="appEvent",e.ContingentOffer="contingentOffer",e.OfferItem="offerItem"}(Ks||(Ks={}))
class XO extends pb{constructor(e){super(),this.promotionType=e}}class ZO extends XO{constructor(e,t,n,r,i,s,o,a,u,c,l,d,f,h,p){super(Ks.AppEvent),this.appEventId=e,this.moduleArtwork=t,this.moduleVideo=n,this.title=r,this.subtitle=i,this.detail=s,this.startDate=o,this.endDate=a,this.kind=u,this.requirements=c,this.lockup=l,this.hideLockupWhenNotInstalled=d,this.formattedDates=f,this.mediaOverlayStyle=h,this.includeBorderInDarkMode=p,this.clickAction=null}}class eP extends hb{constructor(e,t,n,r,i,s){super(),this.appEvent=e,this.artwork=t,this.video=n,this.shareAction=r,this.mediaOverlayStyle=i,this.includeBorderInDarkMode=s,this.pageMetrics=new nA,this.pageRenderMetrics={}}}class tP extends hb{constructor(e,t,n,r,i,s,o,a,u,c,l){super(),this.appEventId=e,this.title=t,this.detail=n,this.artworkUrl=r,this.displayTime=i,this.scheduledAction=s,this.notAuthorizedAction=o,this.failureAction=a,this.destinationUrl=u,this.scheduleClickEvent=c,this.cancelScheduleClickEvent=l}}class nP extends XO{constructor(e,t,n,r,i,s,o,a,u,c,l,d){super(Ks.ContingentOffer),this.backgroundArtwork=e,this.isStreamlinedBuy=n,this.mediaOverlayStyle=t,this.titleFormatted=i,this.subtitle=s,this.additionalInfo=c,this.description=o,this.label=a,this.badge=u,this.offerLockup=d,this.trunkAppIcon=l,this.learnMoreTitle=r,this.clickAction=null}}class rP extends pb{constructor(e){super(),this.promotionType=e}}class iP extends rP{constructor(e,t,n){super(Ks.ContingentOffer),this.contingentOffer=e,this.artwork=t,this.mediaOverlayStyle=n,this.pageMetrics=new nA,this.pageRenderMetrics={},this.learnMoreActionMetrics=new tA,this.backButtonActionMetrics=new tA,this.closeButtonActionMetrics=new tA}}class sP extends XO{constructor(e,t,n,r,i,s,o,a,u,c,l,d){super(Ks.OfferItem),this.moduleArtwork=e,this.moduleVideo=t,this.isStreamlinedBuy=r,this.mediaOverlayStyle=n,this.titleFormatted=i,this.description=a,this.badge=u,this.offerLockup=d,this.subtitle=o,this.endDate=c,this.expiryDateFormatted=s,this.iapArtwork=l,this.clickAction=null}}class oP extends rP{constructor(e,t,n,r,i,s,o){super(Ks.OfferItem),this.offerItem=e,this.artwork=t,this.learnMoreTitle=s,this.video=n,this.mediaOverlayStyle=r,this.pageMetrics=new nA,this.additionalInfo=o,this.pageRenderMetrics={},this.learnMoreActionMetrics=new tA,this.backButtonActionMetrics=new tA,this.closeButtonActionMetrics=new tA}}class aP extends hb{constructor(e){super(),this.style=e}isValidUber(e,t){function n(e){return null!=e&&0!==Object.keys(e).length}return n(this.artwork)||n(this.compactArtwork)||n(this.video)||n(this.compactVideo)||(e||t)&&n(this.iconArtwork)}}class uP extends hb{constructor(){super(),this.pageMetrics=new nA,this.pageRenderMetrics={}}}class cP extends uP{}!function(e){e.visionOS="xros",e.iOS="ios"}(Qs||(Qs={}))
class lP extends hb{constructor(e,t,n){super(),this.instanceId=e,this.eventPayloads=t,this.searchAd=n}setTemplateType(e){this.eventPayloads.placed.iAdTemplateType=e}setDuplicatePosition(e){this.eventPayloads.placed.duplicatePosition=e}setMissedOpportunityReason(e){this.eventPayloads.placed.missedOpportunityReason=e}}class dP extends hb{constructor(e,t,n,r,i){super(),this.instanceId=e,this.iAd=t,this.eventPayloads=n,this.impressionId=r,this.transparencyAction=i}setTemplateType(e){this.eventPayloads.placed.iAdTemplateType=e}setDuplicatePosition(e){this.eventPayloads.placed.duplicatePosition=e}}class fP extends sA{constructor(e){super("AdTransparencyAction"),this.adTransparencyData=e}}const hP="jet_native_advert_instanceid"
e(8371),function(e){e.EditorialItem="editorialItem",e.EditorialItemGroup="editorialItemGroup"}(Xs||(Xs={}))
const pP="X-AppStore-iAdClickToken",wP="X-AppStore-iAdLineItem",gP="X-AppStore-iAdDismissAdActionMetrics"
class vP{constructor(e,t,n,r,i,o,a){this.placementType=t,this.placementId=null===t?null:this.placementIdFromType(t),this.pageFields={},this.clickFields={},this.impressionsFields={},this.fastImpressionFields={},this.iAdClickEventFields={},this._iAdApplied=!1,this._iAdAdamId=void 0,this.positionInfo=a,this.slotInfo=n,this.setInitialAdData(e,r,i),s(o)&&(this.pageFields[Ra]=o),this.fastImpressionFields[El]=!0}static from(e,t){var n,r,i,s
const o=new vP(e,c(t.placementType),a(t.slotInfo),null!==(n=c(t.iAdId))&&void 0!==n?n:void 0,null!==(r=c(t.appStoreClientRequestId))&&void 0!==r?r:void 0,null!==(i=h(t.wasOdmlSuccessful))&&void 0!==i?i:void 0,f(t.positionInfo))
return o._iAdApplied=u(t._iAdApplied),o._iAdAdamId=null!==(s=c(t._iAdAdamId))&&void 0!==s?s:void 0,Object.assign(o.pageFields,t.pageFields),Object.assign(o.clickFields,t.clickFields),Object.assign(o.impressionsFields,t.impressionsFields),Object.assign(o.fastImpressionFields,t.fastImpressionFields),Object.assign(o.iAdClickEventFields,t.iAdClickEventFields),o.updateContainerId(c(t.containerId)),o}static createInitialSlotInfos(e,t,n,r){var i
switch(t){case Vv:case Iv:const s=vP.containerIdFromType(t),o=null!==(i=null==n?void 0:n.slot)&&void 0!==i?i:0
return[{containerId:s,slots:[{slotId:`${s}_${o}`,slotIndex:o,hasAdData:!1}]}]
case Im:const a=function(e,t){if((0,Cs.isNothing)(t))return
const n=function(e){switch(e){case Ag:return Bh
case Ng:return"search-landing"
case Im:return Im
case Vv:return"product-page-ymal"
case Iv:return"product-page-ymal-during-download"
default:return}}(t)
return(0,Cs.isNothing)(n)?void 0:e.bag.adPlacementEligibleSlotPositions[n]}(e,t),u=(0,ks.isNothing)(a)?[]:a.map(e=>e.slot),c={},l=(0,ks.isSome)(n)?n.slot-1:null
let d=!1
return u.forEach(e=>{var t
const n=d?e-1:e,i=null==r?void 0:r.find(e=>e.containedAdSlots.includes(n)),s=l===e,o=function(e,t,n){return(0,ks.isNothing)(n)?"0":n.type===Xs.EditorialItemGroup?(!(n.containedAdSlots.length>1)||e===n.containedAdSlots[0]||n.containedAdSlots[n.containedAdSlots.length-1],"0"):"0"}(n,0,i),a=null!==(t=c[o])&&void 0!==t?t:{containerId:o,slots:[]}
c[o]=a
const u={slotId:`${o}_${e}`,slotIndex:e,hasAdData:!1}
a.slots.push(u),d=d||s}),Object.values(c)
default:return null}}get iAdIsPresent(){return this._iAdApplied}get iAdAdamId(){return this._iAdAdamId}updateForAdResponse(e,t){var n
r(t)||(this.placementType=t.placementType,this.placementId=this.placementIdFromType(this.placementType),this.positionInfo=null===(n=t.onDeviceAd)||void 0===n?void 0:n.positionInfo,this.setInitialAdData(e,t.iAdId,t.clientRequestId))}setInitialAdData(e,t,n){if((0,ks.isNothing)(t)||(0,ks.isNothing)(n))return
switch(this.pageFields[FP.hasIAdData]=!0,this.placementType){case Im:case Vv:case Iv:this.impressionsFields[FP.hasIAdData]=!0}switch(this.pageFields[rf]=n,this.placementType){case Im:case Vv:case Iv:this.clickFields[rf]=n,this.impressionsFields[rf]=n}const r=_e(t)
if(this.pageFields[Sw]=r,this.impressionsFields[Sw]=r,this.clickFields[Sw]=r,this.updateContainerId(null),this.updateSlotInfo(),o(this.slotInfo)&&(this.pageFields[Bw]=this.slotInfo,this.clickFields[Bw]=this.slotInfo,this.impressionsFields[Bw]=this.slotInfo),null!==this.placementId&&this.placementId.length>0)switch(this.pageFields[Pw]=this.placementId,this.clickFields[Pw]=this.placementId,this.impressionsFields[Pw]=this.placementId,this.placementType){case Im:case Vv:case Iv:this.fastImpressionFields[Pw]=this.placementId}}updateContainerId(e){this.placementType===Im?(this.containerId=null!=e?e:null,s(this.containerId)&&(this.clickFields[Yp]=this.containerId,this.fastImpressionFields[Yp]=this.containerId)):(this.containerId=null===this.placementType?null:vP.containerIdFromType(this.placementType),s(this.containerId)&&(this.pageFields[Yp]=this.containerId,this.clickFields[Yp]=this.containerId,this.fastImpressionFields[Yp]=this.containerId))}containerIdForSlotIndex(e){if((0,ks.isNothing)(e)||(0,ks.isNothing)(this.slotInfo))return null
for(const t of this.slotInfo)for(const n of t.slots)if(n.slotIndex===e)return t.containerId
return this.containerId}apply(e,t){if((0,ks.isNothing)(t)||i(t))return
const n=t.id,r=D(t,ww)
if(this._iAdAdamId=n,r){this.impressionsFields[FP.hasIAdData]=!0,this.clickFields[FP.hasIAdData]=!0
const i=_e(r[sf])
this.fastImpressionFields[Kd]=i,this.clickFields[Kd]=i
const s=_e(r[Da])
this.clickFields[Jd]=s,this.fastImpressionFields[Jd]=s,this.pageFields[Jg]=n,this.pageFields.iAd={iAdFormat:De(f(p(r),"format")),iAdAlgoId:_e(r.algoId),iAdImpressionId:_e(r[sf]),iAdMetadata:_e(r[Da])}
const o=z(e,t)
this.updateIAdMetricsFieldsForProductVariantData(o,this.clickFields),Object.assign(this.iAdClickEventFields,r),this._iAdApplied=!0,this.setMissedOpportunity(e,void 0,this.placementType)}this.updateSlotInfo(),o(this.slotInfo)&&(this.pageFields[Bw]=this.slotInfo,this.clickFields[Bw]=this.slotInfo,this.impressionsFields[Bw]=this.slotInfo)}applyClickFieldsFromPageRequest(e,t){this._iAdApplied=!0,this._iAdAdamId=e,Object.assign(this.clickFields,t),Object.keys(this.pageFields).forEach(e=>delete this.pageFields[e])}setSpecifiedCreativeUsed(e){this.fastImpressionFields[ka]=e,this.clickFields[ka]=e}setTemplateType(e){this.pageFields[wh]=e,this.impressionsFields[wh]=e,this.clickFields[wh]=e}setMissedOpportunity(e,t,n){if(this.missedOpportunityReason=t,s(t))switch(this.clickFields[vg]=t,this.placementType){case Im:case Vv:case Iv:break
default:this.pageFields[vg]=t,this.impressionsFields[vg]=t}else delete this.clickFields[vg],n===Iv?(this.pageFields[vg]=null,this.impressionsFields[vg]=null):(delete this.pageFields[vg],delete this.impressionsFields[vg])
s(t)?(this.pageFields[vg]=t,this.impressionsFields[vg]=t):(delete this.pageFields[vg],delete this.impressionsFields[vg]),this.updateSlotInfo(),o(this.slotInfo)&&(this.pageFields[Bw]=this.slotInfo,this.clickFields[Bw]=this.slotInfo,this.impressionsFields[Bw]=this.slotInfo)}placementIdFromType(e){switch(e){case Ng:return Ca
case Ag:return xa
case Im:return Na
case Vv:return Fa
case Iv:return Ma
default:throw new Error(`This method should never be called with value: ${e}`)}}static placementTypeFromPlacementId(e,t){switch(t){case Ca:return Ng
case xa:return Ag
case Na:return Im
case Fa:return Vv
case Ma:return Iv
default:return e.console.log(`Failed to get placementType from placementId ${t}. Defaulting to searchResults`),Ag}}static containerIdFromType(e){switch(e){case Vv:return pw
case Iv:return Dc
default:return null}}fastImpressionsFieldsForCurrentItem(e,t){switch(this.placementType){case Vv:case Iv:case Im:let r
if((0,ks.isSome)(t))r=t
else{const t=je(e)
r=null!==t&&"todayCard"===t.locationType?(n=e).locationStack.length<2?null:n.locationStack[1].position:Be(e)}const i=v(this.fastImpressionFields)
if(i[La]=`${this.containerIdForSlotIndex(r)}_${r}`,r!==this.adjustedSlotIndex){const e=[El,Pw,Yp,La]
Object.keys(i).forEach(t=>{e.includes(t)||delete i[t]})}return i
default:return this.fastImpressionFields}var n}get adjustedSlotIndex(){var e
const t=null===(e=this.positionInfo)||void 0===e?void 0:e.slot
return s(t)?t-1:null}updateSlotInfo(){if(!(0,ks.isNothing)(this.slotInfo))switch(this.placementType){case Vv:case Iv:for(const e of this.slotInfo)for(const t of e.slots)t.hasAdData=this.iAdIsPresent,s(this.missedOpportunityReason)&&(t.missedOpportunityReason=this.missedOpportunityReason)
break
case Im:const e=this.adjustedSlotIndex
for(const t of this.slotInfo)for(const n of t.slots){const t=e===n.slotIndex,r=this.iAdIsPresent&&t
let i=this.missedOpportunityReason
!t&&s(e)&&(i="NOAD"),n.hasAdData=r,s(i)&&(n.missedOpportunityReason=i)}}}updateIAdMetricsFieldsForProductVariantData(e,t){(0,ks.isSome)(e)&&X(e,of)?t[Ba]=e.productPageId:delete t[Ba]}get fastImpressionsEventVersion(){switch(this.placementType){case Vv:case Iv:case Im:return 5
default:return 4}}get shouldIncludeAdRotationFields(){switch(this.placementType){case Vv:case Iv:case Im:return!1
default:return!0}}}class mP{constructor(e={}){this.baseFields=e}}new Set([rf,Sw,Bw,Ra,El,Yp,Kd,Jd,Jg,"iAd",Pw,vg,ga,wh,gg,Qh])
class bP extends hb{constructor(e,t,n,r){super(),this.serviceType=e,this.placement=t,this.seed=n,this.clientOptions=r,this.metricsOverlay={topic:Xb}}}const AP=new class{constructor(){this._app="",this._clientId="",this._pages=[]}get _requestId(){const e=Date.now().toString(36).toUpperCase(),t=Math.floor(1e5*Math.random()).toString(36).toUpperCase()
return this._clientId+"z"+e+"z"+t}get _prevPage(){return this._pages.length>=2?this._pages[this._pages.length-2]:void 0}useApp(e){""!==this._app||r(e)||(this._app=e)}useClientId(e){r(e)||(this._clientId=e)}usePageHistory(e){if(0!==e.length){this._pages.length=0
for(const t of e){const e=c(t)
r(e)||this._pages.push(e)}}}useNativeValues(e){const t=c(e,"nativeApp")
this.useApp(t)
const n=c(e,"nativeClientId")
this.useClientId(n)
const r=a(e,"nativePageHistory")
this.usePageHistory(r)}getPageHistoryFor(e){const t=this._pages.slice()
return this._pages.length>=5&&this._pages.shift(),this._pages.push(e),t}get params(){return{app:this._app,clientId:this._clientId,requestId:this._requestId,prevPage:this._prevPage,eventTime:Date.now()}}}
let yP=null
const OP={containerId:"mtContainerId",placementId:"mtIadPlacementId",templateType:"mtIadTemplateType"}
class PP{constructor(e,t,n){this.periodDuration=e,this.periodCount=t,this.type=n}isEqualTo(e){return e.periodDuration===this.periodDuration&&e.periodCount===this.periodCount&&e.type===this.type}}const IP=[fn,Tn,cn,An,gn,hn,bn],SP=[In,vn,ln,fn,Tn],TP=[In,fn,Tn,pn,function(e,t,n,r){if(e.client.isTV||e.client.isVision)return null
if(!le(e,t,vp))return null
const i=e.loc.string("BADGE_FRIENDS_HEADING","Friends"),s=Bm,o=im,a=im,u={maxNumberOfAvatarsToDisplay:3,maxNumberOfFriendsBeforeTruncation:99,adamId:t.id}
return new zy(o,a,u,s,i,"",null,"",i,lv)},ln,cn,An,gn,wn,bn,function(e,t,n,i){if(Ge(e).isSystemAppFromData(t))return null
const s=Jr(e,t)
if(r(s)||r(s.fileSizeByDevice))return null
const o=function(e,t){let n
if(n=(0,ks.isSome)(t.maxEssentialInstallSizeInBytes)?t.fileSizeByDevice+t.maxEssentialInstallSizeInBytes:(0,ks.isSome)(t.maxInstallSizeInBytes)?t.fileSizeByDevice+t.maxInstallSizeInBytes:t.fileSizeByDevice,n<=0)return null
const r=e.loc.fileSize(n).trim().split(/\s+/)
return 2!==r.length?null:{size:r[0],unit:r[1]}}(e,s)
if(!o)return null
const a={paragraphText:o.size},u=o.unit,c=e.loc.string("BADGE_SIZE_HEADING")
return new zy(Xw,hf,a,Bm,c,u,null,null,u,kg)}],EP=[Pn,dn,In,pn,vn,fn,Tn,mn,cn,An,wn,gn],_P=[Pn,dn,vn,cn,fn,Tn,mn,An,hn,gn],RP=[In,vn,hn,ln,fn,Tn,cn,An,gn]
class DP{constructor(e,t,n=0){this.sequenceId=0,this.metricsPageInformation=e,this.locationTracker=t,this.sequenceId=n}addImpressionsToShelf(e,t,n,r,i,s,o){dr(e,t,{id:null!=r?r:`${this.sequenceId}`,idType:null!=i?i:om,kind:null,softwareType:null,targetType:n,title:null!=o?o:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker,recoMetricsData:s}),this.sequenceId++}getSequenceId(){return this.sequenceId}addImpressionsFieldsToSimilarItemsShelf(e,t,n,r){t&&(dr(e,t,{id:DP.similarItemsShelfId,kind:null,softwareType:null,targetType:n,title:t.title,pageInformation:this.metricsPageInformation,locationTracker:this.locationTracker,idType:r}),this.sequenceId++)}static resetLocationTrackerForSimilarItemsDuringDownloadShelf(e,t){const n=t.sourceLocationTracker
!function(e,t){const n=Ve(e)
n?n.position=0:e.rootPosition=0}(n),je(n).id=DP.similarItemsDuringDownloadShelfId}static addImpressionsFieldsToSimilarItemsDuringDownloadShelf(e,t,n){t&&dr(e,t,{id:DP.similarItemsDuringDownloadShelfId,kind:null,softwareType:null,targetType:zv,title:n.title,pageInformation:n.sourcePageInformation,locationTracker:n.sourceLocationTracker,idType:"relationship"})}}DP.similarItemsShelfId=pw,DP.similarItemsDuringDownloadShelfId=Dc
let kP=null
class CP{static get contentType(){return ef}constructor(){this._params=""}param(e,t){if(e&&t){const n=this._params.length>0?"&":""
this._params+=`${n}${encodeURIComponent(e)}=${encodeURIComponent(t)}`}return this}build(){return this._params}}const xP={chartPositions:function(e,t,n,r,s){var o,a
const u=function(e,t){const n=oe(e,t,ql)
if(i(n))return null
const r=Xr(0,e.host.clientIdentifier)
return i(r)?null:d(n,r)}(e,t)
if(i(u))return null
const f=l(u,Qd)
if((0,ks.isNothing)(f)||f>50)return null
const h=null!==(o=c(u,"genreShortName"))&&void 0!==o?o:c(u,pu)
if(null!=h){if(r.has(h))return null
r.add(h)}let p
p=e.props.enabled(Ru)&&e.bag.isLLMSearchTagsEnabled?new xy("highlightedText"):new xy("borderedTextLabel"),p.moduleType=ql
const w=(0,ks.isSome)(null===(a=n.searchAdOpportunity)||void 0===a?void 0:a.searchAd)||(0,ks.isSome)(n.searchAd)?e.bag.adsOverrideLanguage:null,g=(0,ks.isSome)(w)?e.adsLoc:e.loc
if(e.client.isiOS){const t=g.string("MetadataRibbon.ChartPosition").replace(Du,e.loc.formattedCountForPreferredLocale(e,f,w))
e.props.enabled(Ru)&&e.bag.isLLMSearchTagsEnabled?(p.highlightedText=t,p.labelText=g.string("MetadataRibbon.ChartPositionAndCategory.Tags").replace(Du,e.loc.formattedCountForPreferredLocale(e,f,w)).replace("@@category@@",h)):(p.labelText=h,p.borderedText=t)}return p.secondaryViewPlacement=vm,fr(e,p,pr(s,mf,p.labelText,rm)),[p]},genreDisplayName:function(e,t,n,r,s){const o=an(e,t,!0),a=(0,Cs.isSome)(o),u=er(e,t)
if(i(u))return null
if(null!=u){if(r.has(u))return null
r.add(u)}const c=new xy(a?_f:Ph)
if(c.moduleType=wg,c.labelText=u,a){const t=Ir(e,o,{useCase:20})
t.crop="sr",c.artwork=t}return fr(e,c,pr(s,wg,c.labelText,rm)),[c]},genreShortDisplayName:function(e,t,n,r,i){const s=an(e,t,!0),o=(0,Cs.isSome)(s),a=C(t,Oh)
if(null!=a){if(r.has(a))return null
r.add(a)}if((0,Cs.isNothing)(a)||0===a.length)return null
const u=new xy(o?_f:Ph)
return u.moduleType=Oh,u.labelText=a,o&&(u.artwork=Ir(e,s,{useCase:20,cropCode:"sr"})),fr(e,u,pr(i,wg,u.labelText,rm)),[u]},secondaryGenreShortDisplayNames:function(e,t,n,r,s){const o=k(t,"secondaryGenreShortDisplayNames")
return i(o)?null:o.map(t=>{const n=new xy(Ph)
n.moduleType=Oh,n.labelText=t
const r=pr(s,wg,n.labelText,rm)
return fr(e,n,r),Ue(s.locationTracker),n}).filter(e=>null!=e.labelText&&!r.has(e.labelText))},developerInfo:function(e,t,n,r,i){var s
let o=n.developerName
if((0,Cs.isNothing)(o)&&(o=null!==(s=C(t,$g))&&void 0!==s?s:C(t,ea)),null!=o){if(r.has(o))return null
r.add(o)}if((0,Cs.isSome)(o)&&o.length>0){const t=new xy(_f)
t.moduleType=ku,t.labelText=o,t.artwork=qe(e,Pf)
const n=6
return t.maxCharacterCount=16,t.truncationLegibilityCharacterCountThreshold=Math.min(n,o.length),t.allowsTruncation=o.length>=n,fr(e,t,pr(i,ku,t.labelText,rm)),[t]}return null},editorialBadgeInfo:function(e,t,n,r,i){var s
if(n.isEditorsChoice){const t=new xy(Cv)
return t.moduleType=Ow,t.useAdsLocale=((0,ks.isSome)(null===(s=n.searchAdOpportunity)||void 0===s?void 0:s.searchAd)||(0,ks.isSome)(n.searchAd))&&(0,ks.isSome)(e.bag.adsOverrideLanguage),fr(e,t,pr(i,Ow,"Editors Choice",rm)),[t]}return null},userRating:function(e,t,n,r,i){const o=le(e,t,Qv)
if(s(n.ratingCount)&&s(n.rating)&&!o){const t=new xy("starRating")
return t.moduleType=Ep,t.starRating=n.rating,t.labelText=n.ratingCount,fr(e,t,pr(i,Ep,"User Rating",rm)),[t]}return null},supportsGameController:function(e,t,n,r,i){var s
let o=!1
switch(ue(e,t,hw)){case Wf:case bd:o=!0}if(le(e,t,ed)&&(o=!0),!o)return null
const a=new xy(_f)
a.moduleType=ed
const u=((0,ks.isSome)(n.searchAd)||(0,ks.isSome)(null===(s=n.searchAdOpportunity)||void 0===s?void 0:s.searchAd))&&(0,ks.isSome)(e.bag.adsOverrideLanguage)
return a.labelText=u?e.adsLoc.string(Tp):e.loc.string(Tp),a.artwork=qe(e,Of),fr(e,a,pr(i,ed,"Supports Game Controller",rm)),[a]},tag:function(e,t,n,r,i){const s=t,o=new xy(Ph)
return o.moduleType=Tl,o.labelText=C(s,$m),(0,Cs.isNothing)(o.labelText)||0===o.labelText.length||r.has(o.labelText)?null:(fr(e,o,pr(i,s.id,o.labelText,"tag_id")),r.add(o.labelText),[o])},divider:function(e,t,n,r,i){const s=new xy(Cu)
return s.moduleType=Cu,s.labelText="|",[s]}},NP="::"
class FP{constructor(e){this._options=Object.freeze(e)}get defaultTopic(){return this._options.defaultTopic}_reduceFieldAccuracy(e,t){for(const n of t){const t=c(n,"fieldName")
if(r(t))continue
const i=l(e,t)
if(r(i))continue
let s=l(n,"magnitude")
r(s)&&(s=1048576)
let o=l(n,"significantDigits")
if(r(o)&&(o=2),s<=0||o<0){e[t]=Number.NaN
continue}const a=i/s
e[t]=Pe(a,o)}}_urlScrubbingAdParameters(e){const t=new ly(e)
return t.removeParam(pP),t.removeParam(wP),t.removeParam(gP),t.build()}_urlScrubbingExtRefUrl(e){const t=new ly(e)
return t.username="",t.password="",t.pathname=void 0,t.query=void 0,t.hash=void 0,t.build()}_derezFastImpressions(e){const t=c(e,Qh),n=l(e,Xh)
if(t===ll){if(4===n){const t=a(e,Kg)
e[Kg]=t.map(e=>{if((0,ks.isNothing)(e))return e
const t=a(e,va)
return 0===t.length||(e[va]=t.map(e=>{if((0,ks.isNothing)(e))return e
const t=l(e,"d")
return e.s=0,(0,ks.isSome)(t)&&(e.d=Pe(t,2)),e})),e})}if(5===n){const t=a(e,Kg)
e[Kg]=t.map(e=>{if((0,ks.isNothing)(e))return e
delete e.cardType,(i(c(e,Jd))||i(c(e,Kd)))&&delete e.id
const t=d(e,ma)
return(0,ks.isNothing)(t)||i(t)||(Object.entries(t).forEach(([e,n])=>{const r=a(n)
t[e]=r.map(e=>{if((0,ks.isNothing)(e))return e
const t=l(e,"d")
return e.s=0,(0,ks.isSome)(t)&&(e.d=Pe(t,2)),e})}),e[ma]=t),e})}}}_decorateSearchResultImpressions(e){const t=c(e,Sg),n=c(e,Yw)
"Search"===t&&"hints"!==n&&function(e){const t=a(e,Kg)
let n
for(const e of t){const t=c(e,lh)
if((0,ks.isSome)(e)&&"SearchResults"===t){n=e[sf]
break}}n&&(e[Kg]=t.map(e=>{const t=c(e,lh),r="card"===t||t===Yf
return(0,ks.isSome)(e)&&r&&(e[_l]=n),e}))}(e)}_decorateSearchFocusImpressions(e){const t=c(e,Sg),n=c(e,Yw)
"SearchFocus"===t&&"Focus"===n&&function(e){var t
const n=a(e,Kg)
let r
for(const e of n)if("R8804"===c(e,Yh)){r=null!==(t=c(e,sf))&&void 0!==t?t:void 0
break}r&&(e[Kg]=n.map(e=>{const t=c(e,Yh),n=c(e,lh)
return i(t)&&n===am&&null!=e&&null==c(e,_l)&&(e[_l]=r),e}))}(e)}_decorateAll(e,t,n){var i,s
const o=this._options.bagProvider,u=o("metricsBase",n)
r(u)||typeof u!==jp||Object.assign(t,u),t.clientBuildType=this._options.buildType,t.resourceRevNum=this._options.jsVersion,t.xpSendMethod="jet-js",this._options.buyDecorator.useApp(c(t,ym)),delete t[Vy]
const l=function*(e){if((0,ks.isNothing)(e))return
const t=e.split(";")
for(const e of t){const t=e.indexOf("=")
if(-1===t){const t=decodeURIComponent(e).trim()
yield{key:t,value:""}}else{const n=decodeURIComponent(e.substring(0,t)).trim(),r=decodeURIComponent(e.substring(t+1)).trim()
yield{key:n,value:r}}}}(c(t,ba))
for(const e of l)if("xp_ci"===e.key){this._options.buyDecorator.useClientId(e.value)
break}delete t[ba]
const d=null!==(s=null===(i=e.metricsIdentifiersCache)||void 0===i?void 0:i.getMetricsFieldsForTypes([Bs.client]))&&void 0!==s?s:{}
Object.assign(t,d),delete t.clientGeneratedId
const f=c(t,Sg),h=c(t,Yw)
if(!r(f)&&!r(h)){const e=c(o("compoundSeparator",n))||"_"
t[Vm]=`${f}${e}${h}`}const p=a(o("deResFields",n))
this._reduceFieldAccuracy(t,p)
const w=[yp,Kh,Op,Pp,wm,"parentPageUrl"]
for(const e of w){const n=c(t,e);(0,ks.isSome)(n)&&n.length>0&&(t[e]=e===Op?this._urlScrubbingExtRefUrl(n):this._urlScrubbingAdParameters(n))}const g=c(t,hl)
if((0,ks.isSome)(g)&&(delete t[hl],t[ep]=g),e.bag.isMetricsUserIdFallbackEnabled){const n=c(t,pl)
let r=null;((0,ks.isNothing)(n)||0===n.length||n.length===FP.clientGeneratedUserIdLength)&&(r=e.user.dsid),(0,ks.isSome)(r)&&r.length>0&&(t[wl]=r)}}_decorateClick(e){!function(e){const t=c(e,ph),n=c(e,Rl)
r(t)&&(0,Cs.isSome)(n)&&(null==n?void 0:n.length)>0&&(e[ph]=n),c(e,Dl)===$a&&delete e[kl]}(e),this._decorateSearchResultImpressions(e),this._decorateSearchFocusImpressions(e),Jb.shared.addReferralDataToEventIfNecessary(e),this._filterBuyParams(e)
const t=c(e,Sg)
!(0,ks.isNothing)(t)&&t.toLowerCase().includes(em)||delete e[Kg],wr(e)}_decorateImpressions(e,t){if(i(t[Kg]))return!1
this._derezFastImpressions(t),this._decorateSearchResultImpressions(t)
const n=c(t,Pp)
if((0,ks.isSome)(n)&&n.length>0&&(t[Tv]=Ce(n),delete t[Pp]),e.client.isVision){const e=c(t,yp)
if((0,ks.isSome)(e)&&(0,ks.isNothing)(t[Tv])){const n=xe(e);(0,ks.isSome)(n)&&(t[Tv]=n)}}return wr(t),delete t[Qh],!0}_decorateMedia(e){const t=l(e,Qd)
r(t)||(e[Qd]=Math.round(t))}_filterBuyParams(e){const t=c(e,"actionDetails.buyParams")
if((0,ks.isSome)(t)&&t.length>0){const n=new $y(t);[Aa].forEach(e=>{n.set(e,null,null)}),(0,ks.isSome)(e[Lw])&&(e[Lw][Zw]=n.toString())}}_decoratePage(e,t){const n=c(t,Vm)
r(n)||(t.pageHistory=this._options.buyDecorator.getPageHistoryFor(n)),Jb.shared.setReferralDataForProductPageExtensionIfNecessary(t),Jb.shared.beginReferralContextForPageIfNecessary(t),Jb.shared.addReferralDataToEventIfNecessary(t)
const i=c(t,Pp)
if(!r(i)){const e=Re(i),n=Ce(i)
null!==e&&e.length>0&&(t[ch]=e),null!==n&&n.length>0&&(t[Tv]=n)}if(e.client.isVision){const e=c(t,yp)
if((0,ks.isSome)(e)&&(0,ks.isNothing)(t[Tv])){const n=xe(e);(0,ks.isSome)(n)&&(t[Tv]=n)}}}_decoratePageChange(e,t){this._decoratePage(e,t)}_decorateSearch(e){e[Xh]=3,function(e){var t
const n=null!==(t=e[Lw])&&void 0!==t?t:{},i=n[ph],s=c(e,Rl)
r(i)&&(0,Cs.isSome)(s)&&(null==s?void 0:s.length)>0&&(n[ph]=s,e[Lw]=n),c(e,Dl)===$a&&delete e[kl],"input"===e[xp]&&delete e[kl]}(e)}_decoratePageExit(e){Jb.shared.endReferralContextIfNecessaryForPageEvent(e)}_filterExtraneous(e){!function(e){delete e[Rl],delete e[Dl],delete e.searchGhostHintTermLastDisplayed}(e),Jb.shared.removeReferralContextInfoFromMetricsEvent(e)}makeEvent(e,t){const n=c(t,gg)
this._options.isLoggingEnabled&&e.console.log(`Building event for topic: ${n}`)
const r=t[Iw],i=t[ym]
if("com.apple.mobilesafari"===r&&i===bc)return new eA({})
const s=c(t,Uh)||this._options.defaultTopic
this._decorateAll(e,t,s),e.user.isUnderThirteen&&(delete t[wl],delete t[pl])
const o=t[Op]
switch(o&&""===o&&delete t[Op],n){case qp:this._decorateClick(t)
break
case fl:break
case Kg:if(!this._decorateImpressions(e,t))return new eA({})
break
case dl:this._decorateMedia(t)
break
case Vm:this._decoratePage(e,t)
break
case wd:this._decoratePageChange(e,t)
break
case ya:this._decoratePageExit(t)
break
case em:this._decorateSearch(t)}return this._filterExtraneous(t),e.bag.metricsIdMigrationEnabled&&function(e){delete e[Cl],delete e.DSID}(t),new eA(t)}}FP.clientGeneratedUserIdLength=24,FP.hasIAdData=ga
class MP{constructor(){this.runsOnIntel=!0,this.runsOnAppleSilicon=!0,this.requiresRosetta=!1}}!function(e){e[e.seeAllPage=0]="seeAllPage",e[e.categoryBreakout=1]="categoryBreakout",e[e.other=2]="other"}(Zs||(Zs={}))
class LP{constructor(e,t){this.videos=e,this.mediaPlatform=t}}const BP=new yb(414,896),jP=new yb(375,812),UP=new yb(414,736),$P=new yb(375,667),VP=new yb(320,568),GP=new yb(320,480),WP=(new yb(768,1024),new yb(810,1080)),HP=new yb(834,1112),qP=new yb(834,1194),zP=new yb(1194,834),YP=new yb(1024,1366),JP=new yb(1024,1366),KP=new yb(1366,1024),QP=new yb(744,1133),XP=new yb(1133,744),ZP=new yb(1032,1376),eI=new yb(1376,1032),tI=new yb(834,1210),nI=new yb(1210,834),rI=new yb(312,390),iI=new yb(368,448),sI=new yb(396,484),oI=new yb(410,502),aI=new yb(416,496),uI=new yb(820,1180),cI=new yb(360,780),lI=new yb(390,844),dI=new yb(428,926),fI=new yb(393,852),hI=new yb(430,932),pI=new yb(402,874),wI=new yb(440,956),gI=[qc,Wc,Hc,Fd,Uo,jo,Bo,hv],vI=112.5,mI=4.5;(ro=eo||(eo={})).requestedUrl="_jet-internal:metricsHelpers_requestedUrl",ro.timingValues="_jet-internal:metricsHelpers_timingValues",ro.pageInformation="_jet-internal:metricsHelpers_pageInformation",ro.contentMaxAge="_jet-internal:responseMetadata_contentMaxAge"
const bI="X-Apple-AppStore-UserId-Secondary"
class AI extends Error{}class yI extends Error{}const OI="x-apple-application-instance",PI="x-apple-application-site",II="com.apple.AppStore"
class SI extends Error{}const TI=new class{constructor(){this.registeredBuilders=new Set,this.pageRouter=new hy,this.shelfRouter=new hy,this.paginationRouter=new hy}registerPageBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.pageRouter.associate(t.pageRoute(e),t),this.shelfRouter.associate(t.shelfRoute(e),t),this.paginationRouter.associate(t.paginationRoute(e),t)}registerShelfBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.shelfRouter.associate(t.shelfRoute(e),t)}registerPaginationBuilder(e,t){if(this.registeredBuilders.has(t.builderClass))throw new Error(`routing: Registering duplicate builderClass ${t.builderClass}`)
this.registeredBuilders.add(t.builderClass),this.paginationRouter.associate(t.paginationRoute(e),t)}fetchFlowPage(e){const t=this.pageRouter.routedObjectForUrl(e)
if(!t.object)return"unknown"
const n=t.object
return"ProductBuilder"===n.builderClass&&t.parameters[qA]!==gy&&"write-review"!==t.parameters[qA]?ev:n.pageType()}async fetchPage(e,t,n){return await this.fetchAction(e,t,null).then(async r=>await new Promise((i,s)=>{if(!r)throw new Error(`Promise resolved to null action for: ${t}`)
if(r.actionClass!==pd){if("TabChangeAction"===r.actionClass){const e=r
if(1===e.actions.length&&e.actions[0].actionClass===pd){const t=e.actions[0].pageData
return m(t,n)?void i(t):void s(new Error(`pageData is not expected type ${n.name}, ${JSON.stringify(t)}`))}}s(new Error("Action is not a flowAction or a tabChangeAction that contains a single flowAction."))}else{const o=r.pageData
if(!m(o,n)){const a=r.pageUrl
return a&&a!==t?void this.fetchPage(e,a,n).then(e=>{i(e)}).catch(e=>{s(e)}):void s(new Error(`pageData is not expected type ${n.name}, ${JSON.stringify(o)}`))}i(o)}}))}async fetchAction(e,t,n,r=new Set){return await new Promise((i,s)=>{const o=this.pageRouter.routedObjectForUrl(t)
o.object?o.object.handlePage(e,o.normalizedUrl,o.parameters,o.matchedRuleIdentifier,n,i,s):this.redirectAndRefetchActionIfPossible(e,o.normalizedUrl,i,s,r)})}async fetchMoreOfPage(e,t){return await new Promise((n,r)=>{const i=t.url
if(!i)return void r(new Error("Page token missing required `url` property"))
const s=this.paginationRouter.routedObjectForUrl(i)
s.object?s.object.handlePagination(e,s.normalizedUrl,s.parameters,s.matchedRuleIdentifier,t,n,r):r(new Error(`fetchMoreOfPage: Unhandled pagination url: ${i}`))})}async fetchShelves(e,t){return await new Promise((n,r)=>{const i=Object.keys(t),s={shelves:{},errors:{}},o=new py(i.length)
o.then(()=>{if(Object.keys(s.shelves).length>0)n(s)
else{const e=Object.keys(s.errors).map(e=>s.errors[e].message)
0===e.length?r(new Error(`Could not load any shelves: ${JSON.stringify(t)}`)):r(new Error(e.join("\n")))}})
for(const n of i){const r=t[n],i=e=>{s.shelves[n]=e,o.countDown()},a=e=>{s.errors[n]=e,o.countDown()},u=this.shelfRouter.routedObjectForUrl(r)
u.object?u.object.handleShelf(e,u.normalizedUrl,u.parameters,u.matchedRuleIdentifier,i,a):a(new Error(`fetchShelves: Unhandled shelf url: ${r}`))}})}redirectAndRefetchActionIfPossible(e,t,n,r,i=new Set){const s=t.toString()
i.has(s)?r(new Error(`redirectAndRefetchActionIfPossible: Redirect cycle detected for URL: ${s}`)):(i.add(s),e.network.fetch({url:s,method:up}).then(s=>{this.hasGotoURLInResponse(e,s)?n(new OA):200===s.status&&s.redirected&&s.url?this.fetchAction(e,s.url,null,i).then(n,r):r(new Error(`redirectAndRefetchActionIfPossible: Unhandled page url: ${t}`))}).catch(()=>{r(new Error(`redirectAndRefetchActionIfPossible: Failed to fetch page at url: ${t}`))}))}hasGotoURLInResponse(e,t){if(i(t.body))return!1
try{const n=p(e.plist.parse(t.body)),r=c(n,"action.kind"),i=c(n,"action.url")
return!("Goto"!==r||!(0,Cs.isSome)(i))}catch{return!1}}fetchBuilder(e){const t=this.pageRouter.routedObjectForUrl(e)||this.shelfRouter.routedObjectForUrl(e)||this.paginationRouter.routedObjectForUrl(e)
return t?t.object:null}},EI=function(e,t,n){var r
const i=function(e,t,n,r,i,s,o,a,u,c,l,d,f,h,p,w,g,v,m,b,A,y,O,P,I,S,T,E,_,R,D,k,C,x,N,F,M){return e.configureDefaults(n,r,i,s,o,a,u,c,l,d,f,h,p,w,g,v,m,b,A,y,O,P,I,S,T,E,_,R,D,k,C,x,N,F,M).adding(vy,t)}(new Yb("app-store"),e,bag,cryptography,host,net,platform,plist,random,services,cookieProvider,console,ask.storeMetrics,ask.amsEngagement,ask.loc,ask.adsLoc,ask.device,ask.client,ask.props,ask.user,ask.metricsIdentifiers,ask.clientOrdering,ask.personalizationStore,ask.arcade,ask.gameCenter,ask.resilientDeepLinks,ask.appleSilicon,ask.storage,ask.ads,ask.onDeviceRecommendationsManager,ask.onDeviceSearchHistoryManager,null!==(r=ask.featureFlags)&&void 0!==r?r:{isEnabled:()=>!1,isGSEUIEnabled:()=>!1},null!=n?n:mediaToken,ask.appDistribution,ask.timeoutManager,ask.treatmentStore,ask.userDefaults)
return Jb.createSharedMetricsReferralContext(i),i}(TI,0,{refreshToken:async()=>await Promise.resolve(""),resetToken:()=>{}}),_I=new my(new Ss.IntentDispatcher,EI)
_I.exportingService("lockups",function(e){return{async fetchLockupCollection(t){if("webBrowsers"===t.id&&e.props.isNotEnabled("webBrowserCollectionProductPageFix"))throw new Error("Client is missing webBrowserCollectionProductPageFix")
const n=await async function(e,t,n,r){let i
switch(r>20&&(e.console.warn("[AppStoreComponents] Requested lockups limit is exceeding maximum threshold, capping at 20"),r=20),t){case"newArcadeGames":i=function(e,t=!1){let n=new jy(e).forType(Hg)
return t&&(n=n.addingQuery(Zf,"comingSoonApps")),e.client.isVision&&(n=n.includingAdditionalPlatforms([hv,wv]),n.attributeIncludes.add(pv)),n}(e,!1).withSparseLimit(r)
break
case"gamesForYou":i=function(e,t){let n=new jy(e).forType(Td).addingQuery("sparseLimit[contents]",`${t}`).addingQuery("include[personal-recommendations]",jm).addingQuery("filter[kind]","arcadeGamesForYou")
return e.client.isVision&&(n=n.includingAdditionalPlatforms([hv,wv])),n}(e,r+1)
break
case"sharePlay":i=new jy(e).withIdOfType(function(e){if("sharePlay"===e)return"1584065502"
q(e)}(t),Ig).withLimit(r)
break
case"webBrowsers":let n
try{e.props.enabled("accountCachedServerData")&&(n=await e.user.accountCachedServerDataStringForKey(7))}catch{}i=new jy(e).forType(Um).includingAttributes([Sh]).withFilter(Wv,"browser").withCountryCodeOverride(n)
break
default:i=new jy(e).withIdOfType(t,Ig).withLimit(r)}return mi(n)&&(i=i.includingAttributes([vp])),i}(e,t.id,t.context,t.limit),r=await Hi(e,n,t.clientIdentifier,t.clientVersion),i=function(e,t){switch(e){case"newArcadeGames":return{data:t.results.contents}
case"gamesForYou":return{data:t.data[0].relationships[jm].data}
case"sharePlay":case"webBrowsers":return{data:t.data}
default:q(e)}}(t.id,r)
return ws(e,t.kind,t.context,null,i)},buildOne:async t=>await Promise.resolve(ps(e,t.kind,t.context,t.platformOverride,t.response)),buildMany:async t=>await Promise.resolve(ws(e,t.kind,t.context,t.platformOverride,t.response)),buildAppDistributionLockups:async t=>await Promise.resolve(async function(e,t,n,r,s,u,c){return await(0,Ds.context)("buildAppDistributionLockups",async()=>await async function(e,t,n,r,s,u,c){if((0,Cs.isNothing)(s))return ws(e,t,n,null,r)
!function(e,t){if(i(e)||i(t))throw new SI(`Missing either appsResponse ${i(e)} or appDistributionResponse ${i(t)} in lockup builder.`)
if(o(null==e?void 0:e.errors)||o(null==t?void 0:t.errors)){const n=a(e,xu)
let r
const i=[]
n.forEach((e,t)=>{"404"===e[Zc]?r=e:i.push(e)})
const s=a(t,xu)
let o
const u=[]
if(s.forEach(e=>{"404"===e[Zc]?o=e:u.push(e)}),(0,Cs.isSome)(r)&&(0,Cs.isSome)(o))throw new SI(`Both responses returned 404: ${JSON.stringify(r)} ${JSON.stringify(o)}`)
if(i.length>0||u.length>0)throw new SI(`Received errors: ${JSON.stringify(i)} ${JSON.stringify(u)}`)}}(r,s)
const l=[],d=vi(r),f=vi(s),h=await e.appDistribution.distributorPriorityList,p={}
for(const e of f)p[e.id]=e
for(const e of d){const t=p[e.id];(0,Cs.isSome)(t)&&delete p[e.id],l.push({appStoreData:e,appDistributionData:t})}for(const e of Object.values(p))l.push({appStoreData:null,appDistributionData:e})
const w=[],g=[]
if(l.forEach(e=>{const t=function(e,t){if((0,Cs.isNothing)(e.appStoreData)&&(0,Cs.isNothing)(e.appDistributionData))return null
const n=t.includes(II)
if((0,Cs.isNothing)(e.appDistributionData)&&n)return{data:e.appStoreData}
const r=k(e.appDistributionData,Nu),i=t.filter(e=>null==r?void 0:r.includes(e)).length>0,s=t[0]===II,o=(0,Cs.isSome)(e.appStoreData)
return!i||s&&o?o&&n?{data:e.appStoreData}:null:e}(e,h)
var n
n=t,(0,Cs.isSome)(n)&&"appStoreData"in n?g.push(t):function(e){return(0,Cs.isSome)(e)&&pg in e}(t)&&w.push(t)}),g.length>0){const t=await async function(e,t,n){const r={}
t.forEach(e=>{const t=e.appDistributionData.id,i=k(e.appDistributionData,Nu)
n.filter(e=>null==i?void 0:i.includes(e)).forEach(e=>{(0,Cs.isSome)(r[e])?r[e].push(t):r[e]=[t]})})
const s=await e.appDistribution.appAvailabilityWithDistributorToAppIds(r),o=[]
for(const e of t){const t=s.find(t=>e.appDistributionData.id===t.id),r=(0,Cs.isSome)(e.appStoreData)
if(i(null==t?void 0:t.distributors))r&&o.push({data:e.appStoreData})
else for(const i of n){if(i===II){if(r){o.push({data:e.appStoreData})
break}continue}const n=t.distributors.find(e=>e.id===i)
if((0,Cs.isSome)(n)){o.push({data:e.appDistributionData,distributor:n})
break}}}return o}(e,g,h)
w.push(...t)}const v=await async function(e,t,n,r){const i=[],s=[]
for(const n of t){if((0,Cs.isNothing)(n.distributor)){i.push(n)
continue}const t=oe(e,n.data,`versionAttributes.${n.distributor.appVersionId}`);(0,Cs.isSome)(t)?i.push(n):s.push(n)}if(s.length>0){const t=await async function(e,t,n,r){const i=t.map(e=>e.data.id),s=e.bag.appDistributionLanguageTag,o=new jy(e).withIdsOfType(i,Ih).addingQuery("l",s).alwaysUseIdsAsQueryParam(!0)
t.forEach(e=>{o.addingQuery(`version[apps:${e.data.id}]`,`${e.distributor.appVersionId}`)})
const a=await Hi(e,o,n,r),u=[]
for(const e of a.data){const n=t.find(t=>t.data.id===e.id);(0,Cs.isSome)(n)&&((0,Cs.isNothing)(e.relationships)&&(e.relationships=n.data.relationships),u.push({data:e,distributor:n.distributor}))}return u}(e,s,n,r)
i.push(...t)}return i}(e,w,u,c),m=function(e,t,n,r){var i
const s=[]
for(const o of r){if((0,Cs.isNothing)(o.data)||!ls(e,o.data,n,void 0))continue
const r=o.data
if((0,Cs.isSome)(o.distributor)){const t=fe(e,r),n=oe(e,r,`versionAttributes.${o.distributor.appVersionId}`,t);(0,Cs.isSome)(n)&&(r.attributes.platformAttributes[`${t}`]=n)}const a=fs(e,t,n,r,null,null!==(i=o.distributor)&&void 0!==i?i:{id:II,name:null,appVersionId:null});(0,Cs.isSome)(a)&&s.push(a)}return s}(e,t,n,v)
return{lockups:m}}(e,t,n,r,s,u,c))}(e,t.kind,t.context,t.appsResponse,t.appDistributionResponse,t.clientIdentifier,t.clientVersion))}}(EI)),_I.exportingService(ng,function(e){return{async processEvent(t){const i=await async function(e){const t=new qb
let n
if(e instanceof Yb){const r=[t.loadValues(e,[Bs.client,Bs.user])]
e.props.enabled(yl)&&e.bag.metricsPaymentNamespaceEnabled&&(n=new qb(Wb),r.push(n.loadValues(e,[Bs.client,Bs.user]))),await Promise.all(r)}return e.adding(qb.defaultMetatype,t).adding(qb.paymentMetatype,n||t)}(e),s=w(t.fields)
!function(e){const t=a(e,Kg)
if(0===t.length)return
const n=Date.now()
for(const e of t){const t=a(e,Fu)
t.length>0||(t.push(n),e[Fu]=t)}}(s)
const o=function(e){var t
return null===yP&&(yP=new FP({defaultTopic:Xb,buildType:e.client.buildType,jsVersion:null!==(t=e.props.asString("version"))&&void 0!==t?t:_m,buyDecorator:AP,isLoggingEnabled:!0,bagProvider:(t,i)=>{const s=e.bag.metricsConfiguration
if(!r(i)){const e=n(s,[i,t])
if(!r(e))return e}return n(s,t)}})),yP}(i).makeEvent(i,s)
return await Promise.resolve(o)},async recordCampaignToken(t){const n=(r=t.campaignToken,i=t.providerToken,s=t.adamId,(new ly).set(dg,CA).set(iw,rw).path(LA).path(s).param("ct",r).param("pt",i).build())
var r,i,s
return await gs(e,n)},async recordQToken(t){const n=(r=t.qToken,i=t.campaignToken,s=t.advertisementId,o=t.adamId,(new ly).set(dg,CA).set(iw,rw).path(LA).path(`id${o}`).param(QA,r).param("ct",i).param(XA,s).build())
var r,i,s,o
return await gs(e,n)},async processRedirectURLWithParameters(t){const n=(r=t.parameters,i=t.adamId,(new ly).set(dg,CA).set(iw,rw).path(LA).path(`id${i}`).set(zw,r).build())
var r,i
return await gs(e,n)},processRedirectURL:async t=>i(Ui(e,new ly(t.url)))?await Promise.resolve(!1):await gs(e,t.url)}}(EI)),_I.exportingService(og,function(e){return{async decorate(t){const n=t.offer,i=new $y(n.metricsBuyParams)
if((0,ks.isSome)(t.context)&&!0===t.context.isDSIDLess||512==(512&n.flags)){const e=new $y(n.baseBuyParams),t=""
i.set(Xl,e.get(Wd,t),t)}return(0,ks.isSome)(t.context)&&t.context.shouldInstallParentApp&&i.set("installParentApp",Gv,null),function(e,t,n,i,o,a,u){var l,d
const f=c(a,ep)
t.set(ep,f)
const h=e.props.enabled(yl)?e.bag.metricsPaymentTopic:void 0
t.set(Uh,null!=h?h:Xb),AP.useNativeValues(a)
const p=AP.params
for(const e of Object.keys(p)){if(e===Xd&&(0,ks.isSome)(t.get(Xd)))continue
const n=c(p,e)
t.set(e,n)}if(!r(u))for(const e of Object.keys(u)){const n=c(u,e)
t.set(e,n),t.set(e,n,null)}if(!a)return t.set(Tv,null),void t.set(Zd,null)
const w=c(a,Iw)
if((0,ks.isSome)(w)&&w.length>0&&t.set(Iw,w),(null===(l=t.get(Sa,null))||void 0===l?void 0:l.length)>0&&t.set(ym,e.host.clientIdentifier),!Jb.shared.shouldUseJSReferralData){const e=c(a,fh),n=Re(e)
e&&n&&(a[ch]=n)
const r=c(a,"usageContext")
if((0,ks.isSome)(r)){switch(r){case tp:t.set(Iw,"com.apple.AppStore.overlay")
break
case Ol:t.set(Iw,Al)}t.set(dh,w,null)}else{const e=c(a,dh)
t.set(dh,e,null)
const n=c(a,fh)
t.set(fh,n,null),c(a,"extRefAppType")===Ea&&t.set(Iw,Al)}}const g=t.get(Yw),v=t.get(Sg),m=(null!==(d=null==g?void 0:g.split("_"))&&void 0!==d?d:[]).includes(n)
if(v!==Jw||m){const e=Ce(c(a,Pp))
s(e)&&t.set(Tv,e)}t.set(Aa,null,null)}(e,i,n.id,0,0,t.nativeMetrics,t.osMetrics),(0,ks.isSome)(e.bag.metricsPaymentTopic)&&i.set(Uh,e.bag.metricsPaymentTopic),"webBrowser"===i.get(id,null)&&(i.set(Xd,bl),i.set(Ta,"1",null)),i.set(id,null,null),await Promise.resolve({...n,metricsBuyParams:i.toString()})}}}(EI)),_I.exportingService("contingent-pricing",function(e){return{async buildContingentItem(t){const n=function(e,t){let n,r
return(0,ks.isSome)(t[nd])?(n=function(e,t){const n=gi(e,d(t,nd))
if(n.type===Wg)return Z(n,Kf)
if(n.type===Zg)return Z(ee(e,n,Bp),ym)
if(n.type===jv)return Z(n,ym)
throw new Error("App data was not returned in response.")}(e,t),r=function(e,t){const n=gi(e,d(t,nd))
if(n.type===Wg){const t=ee(e,n,Mp)
return{streamlinedOfferData:d(t,Ch),eligibleForDiscountedPrice:!0,offerID:n.id,IAPItemID:t.id,IAPItemName:C(t,Ww),IAPProductName:C(t,$m),offerType:Rf}}if(n.type===Zg){const t=ee(e,n,Bp),r=d(t,md),s=bt(e,t)
if(i(s))throw new Error("Subscription missing regular priced offer for ASCSubscriptionOfferMetadata")
const o=c(r,sl),a=c(s,Zw)
if(i(a))throw new Error("Subscription missing buyParams for ASCSubscriptionOfferMetadata")
return r.buyParams=a+`&adHocOfferId=${o}`,{streamlinedOfferData:r,eligibleForDiscountedPrice:!0,offerID:o,IAPItemID:t.id,IAPItemName:C(t,Ww),IAPProductName:C(t,$m),offerType:Xf}}if(n.type===jv){const t=n
return{streamlinedOfferData:bt(e,t),eligibleForDiscountedPrice:!1,offerID:"0",IAPItemID:t.id,IAPItemName:C(t,Ww),IAPProductName:C(t,$m),offerType:Rf}}throw new Error(`Top-level response type ${n.type} is not supported.`)}(e,t)):(n=function(e,t){return Z(ee(e,gi(e,t),Mp),ym)}(e,t),r=function(e,t){const n=gi(e,t),r=ee(e,n,Mp),i=d(r,Ch),s=bt(e,r)
let o
return o=(0,ks.isSome)(i)?i:s,{streamlinedOfferData:o,eligibleForDiscountedPrice:(0,ks.isSome)(i),offerID:n.id,IAPItemID:r.id,IAPItemName:C(r,Ww),IAPProductName:C(r,$m),offerType:Rf}}(e,t)),n.data.length>0&&(n.data[0][rd]=r),n}(e,t.response)
return ps(e,"app","contingentPricing",null,n)}}}(EI))})()})()

//# sourceMappingURL=main.js.map