/******/!function(modules){/******/
/******/
// The require function
/******/
function __webpack_require__(moduleId){/******/
/******/
// Check if module is in cache
/******/
if(installedModules[moduleId])/******/
return installedModules[moduleId].exports;/******/
// Create a new module (and put it into the cache)
/******/
var module=installedModules[moduleId]={/******/
i:moduleId,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var installedModules={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
__webpack_require__.m=modules,/******/
/******/
// expose the module cache
/******/
__webpack_require__.c=installedModules,/******/
/******/
// define getter function for harmony exports
/******/
__webpack_require__.d=function(exports,name,getter){/******/
__webpack_require__.o(exports,name)||/******/
Object.defineProperty(exports,name,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:getter})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
__webpack_require__.n=function(module){/******/
var getter=module&&module.__esModule?/******/
function(){return module.default}:/******/
function(){return module};/******/
/******/
return __webpack_require__.d(getter,"a",getter),getter},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},/******/
/******/
// __webpack_public_path__
/******/
__webpack_require__.p="",__webpack_require__(__webpack_require__.s=7)}([/* 0 */
/***/
function(module,exports){module.exports=require("react")},/* 1 */
/***/
function(module,exports){module.exports=require("react-router-config")},/* 2 */
/***/
function(module,exports){module.exports=require("react-redux")},/* 3 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0__Client_App__=__webpack_require__(14),__WEBPACK_IMPORTED_MODULE_1__Client_Container_Home__=__webpack_require__(19);/* harmony default export */
__webpack_exports__.a=[_objectSpread(_objectSpread({},__WEBPACK_IMPORTED_MODULE_0__Client_App__.a),{},{routes:[_objectSpread(_objectSpread({path:"/"},__WEBPACK_IMPORTED_MODULE_1__Client_Container_Home__.a),{},{exact:!0})]})]},/* 4 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (binding) */
__webpack_require__.d(__webpack_exports__,"b",function(){return USER_INIT}),/* harmony export (binding) */
__webpack_require__.d(__webpack_exports__,"c",function(){return USER_SUCCESS}),/* harmony export (binding) */
__webpack_require__.d(__webpack_exports__,"a",function(){return USER_FAILED});var USER_INIT="USER_INIT",USER_SUCCESS="USER_SUCCESS",USER_FAILED="USER_FAILED"},/* 5 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony default export */
__webpack_exports__.a={
// Base Url
BaseUrl:"https://jsonplaceholder.typicode.com",UserApi:"/users"}},/* 6 */
/***/
function(module,exports){module.exports=require("redux")},/* 7 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0_react_router_config__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_1_express__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_config__),__webpack_require__(8)),__WEBPACK_IMPORTED_MODULE_1_express___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__),__WEBPACK_IMPORTED_MODULE_2__Helpers_renderer__=__webpack_require__(9),__WEBPACK_IMPORTED_MODULE_3__Helpers_router__=__webpack_require__(3),__WEBPACK_IMPORTED_MODULE_4__Helpers_store__=__webpack_require__(21),__WEBPACK_IMPORTED_MODULE_5_babel_polyfill__=__webpack_require__(26),bodyParser=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_polyfill__),__webpack_require__(27)),app=__WEBPACK_IMPORTED_MODULE_1_express___default()(),PORT=Object({NODE_ENV:"production"}).PORT||4500;app.use(bodyParser.urlencoded({extended:!1})),app.use(bodyParser.json()),app.get("/dist.js",function(req,res,next){req.url=req.url+".gz",res.set("Content-Encoding","gzip"),res.set("Content-Type","text/javascript"),next()}),app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static("public")),app.get("*",function(req,res){var store=Object(__WEBPACK_IMPORTED_MODULE_4__Helpers_store__.a)(req),promises=Object(__WEBPACK_IMPORTED_MODULE_0_react_router_config__.matchRoutes)(__WEBPACK_IMPORTED_MODULE_3__Helpers_router__.a,req.path).map(function(_ref){var route=_ref.route,match=_ref.match;return route.loadData?route.loadData(store,match):null}).map(function(promise){if(promise)return new Promise(function(resolve,reject){promise.then(resolve).catch(resolve)})});Promise.all(promises).then(function(){var context={},content=Object(__WEBPACK_IMPORTED_MODULE_2__Helpers_renderer__.a)(req,store,context);if(context.url)return res.redirect(301,context.url);context.notFound&&res.status(404),res.send(content)}).catch(function(err){return console.log(err)})}),app.listen(PORT,function(){console.log("server is up and running")})},/* 8 */
/***/
function(module,exports){module.exports=require("express")},/* 9 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__=__webpack_require__(10),__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__),__WEBPACK_IMPORTED_MODULE_2_react_dom_server__=__webpack_require__(11),__WEBPACK_IMPORTED_MODULE_3_react_router_config__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__),__webpack_require__(1)),__WEBPACK_IMPORTED_MODULE_4_react_router_dom__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_config__),__webpack_require__(12)),__WEBPACK_IMPORTED_MODULE_5_react_redux__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__),__webpack_require__(2)),__WEBPACK_IMPORTED_MODULE_6_react_helmet__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__),__webpack_require__(13)),__WEBPACK_IMPORTED_MODULE_7__router__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_helmet__),__webpack_require__(3));/* harmony default export */
__webpack_exports__.a=function(req,store,context){var content=Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__.renderToString)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_redux__.Provider,{store:store},/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__.StaticRouter,{location:req.path,context:context},/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,Object(__WEBPACK_IMPORTED_MODULE_3_react_router_config__.renderRoutes)(__WEBPACK_IMPORTED_MODULE_7__router__.a))))),helmet=__WEBPACK_IMPORTED_MODULE_6_react_helmet__.Helmet.renderStatic();return'<!DOCTYPE html>\n    <html lang="en">\n      <head>\n        '.concat(helmet.title.toString(),"\n        ").concat(helmet.meta.toString(),"\n        ").concat(helmet.link.toString(),'\n        <meta charset="utf-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n\n        <link rel="icon" type="image/x-icon" rel="icon" href="/assets/images/favicon.ico">\n        <link rel="stylesheet" type="text/css" href="/assets/css/style.css">\n\n        <title>REACTJS SSR</title>\n\n\t\t  </head>\n    <body>\n      <div id="root">').concat(content,"</div>\n      <script>\n          window.INITIAL_STATE = ").concat(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(store.getState()),"\n      <\/script>\n\n      <script src=\"/dist.js\"><\/script>\n\n      <script>\n        if ('serviceWorker' in navigator) {\n          window.addEventListener('load', function() {\n            navigator.serviceWorker.register('/service-worker.js').then(function(registration) {\n              return null;\n            }, function(err) {\n              return null;\n            });\n          });\n        }\n      <\/script>\n\n\t  </body>\n    </html>\n  ")}},/* 10 */
/***/
function(module,exports){module.exports=require("serialize-javascript")},/* 11 */
/***/
function(module,exports){module.exports=require("react-dom/server")},/* 12 */
/***/
function(module,exports){module.exports=require("react-router-dom")},/* 13 */
/***/
function(module,exports){module.exports=require("react-helmet")},/* 14 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function mapStateToProps(state){return{userData:state.global.user}}function mapDispatchToProps(dispatch){return{getUserAction:function(){return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__Redux_Global_Action__.a)())}}}function loadData(_ref){return(0,_ref.dispatch)(Object(__WEBPACK_IMPORTED_MODULE_3__Redux_Global_Action__.a)())}/* unused harmony export loadData */
/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_react_router_config__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_2_react_redux__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_config__),__webpack_require__(2)),__WEBPACK_IMPORTED_MODULE_3__Redux_Global_Action__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__),__webpack_require__(15)),App=/*#__PURE__*/function(_Component){function App(){return _classCallCheck(this,App),_super.apply(this,arguments)}_inherits(App,_Component);var _super=_createSuper(App);return _createClass(App,[{key:"render",value:function(){/*#__PURE__*/
return console.log("==========",this.props.userData),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,Object(__WEBPACK_IMPORTED_MODULE_1_react_router_config__.renderRoutes)(this.props.route.routes))}}]),App}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);/* harmony default export */
__webpack_exports__.a={component:Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__.connect)(mapStateToProps,mapDispatchToProps)(App),loadData:loadData}},/* 15 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}var gen=fn.apply(self,args);_next(void 0)})}}/* harmony export (binding) */
__webpack_require__.d(__webpack_exports__,"a",function(){return getUserAction});/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0__ActionType__=__webpack_require__(16),__WEBPACK_IMPORTED_MODULE_1_js_cookie__=__webpack_require__(17),__WEBPACK_IMPORTED_MODULE_1_js_cookie___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_cookie__),__WEBPACK_IMPORTED_MODULE_2__Helpers_endpoints__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_3__Util_GlobalFuntion__=__webpack_require__(18),getUserAction=function(){/*#__PURE__*/
return function(){var _ref=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch,getState,api){var stateData,token,response;return regeneratorRuntime.wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:return dispatch(__WEBPACK_IMPORTED_MODULE_0__ActionType__.b()),stateData=getState(),token=__WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.get("token"),_context.next=5,api.get(__WEBPACK_IMPORTED_MODULE_2__Helpers_endpoints__.a.UserApi,Object(__WEBPACK_IMPORTED_MODULE_3__Util_GlobalFuntion__.a)(token));case 5:response=_context.sent,200===response.status?(console.log("========>>>",stateData),dispatch(__WEBPACK_IMPORTED_MODULE_0__ActionType__.c(response.data))):dispatch(__WEBPACK_IMPORTED_MODULE_0__ActionType__.a(response));case 7:case"end":return _context.stop()}},_callee)}));return function(_x,_x2,_x3){return _ref.apply(this,arguments)}}()}},/* 16 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";function userInit(){return{type:__WEBPACK_IMPORTED_MODULE_0__ActionConstant__.b}}function userSuccess(payload){return{type:__WEBPACK_IMPORTED_MODULE_0__ActionConstant__.c,payload:payload}}function userFailed(payload){return{type:__WEBPACK_IMPORTED_MODULE_0__ActionConstant__.a,payload:payload}}/* harmony export (immutable) */
__webpack_exports__.b=userInit,/* harmony export (immutable) */
__webpack_exports__.c=userSuccess,/* harmony export (immutable) */
__webpack_exports__.a=userFailed;/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0__ActionConstant__=__webpack_require__(4)},/* 17 */
/***/
function(module,exports){module.exports=require("js-cookie")},/* 18 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";function authHeaders(token){return{headers:{"x-api-key":token||null}}}/* harmony export (immutable) */
__webpack_exports__.a=authHeaders},/* 19 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1__Components_Home__=__webpack_require__(20),Home=function(){/*#__PURE__*/
/*#__PURE__*/
/*#__PURE__*/
return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,"Test Container"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Components_Home__.a,null))};/* harmony default export */
__webpack_exports__.a={component:Home}},/* 20 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),HomeComponent=function(){/*#__PURE__*/
/*#__PURE__*/
return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,"Test Components"))};/* harmony default export */
__webpack_exports__.a=HomeComponent},/* 21 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0_redux__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_1_redux_thunk__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__),__webpack_require__(22)),__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__),__WEBPACK_IMPORTED_MODULE_2_axios__=__webpack_require__(23),__WEBPACK_IMPORTED_MODULE_2_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__),__WEBPACK_IMPORTED_MODULE_3__rootReducer__=__webpack_require__(24),__WEBPACK_IMPORTED_MODULE_4__endpoints__=__webpack_require__(5);/* harmony default export */
__webpack_exports__.a=function(req){var axiosInstance=__WEBPACK_IMPORTED_MODULE_2_axios___default.a.create({baseURL:__WEBPACK_IMPORTED_MODULE_4__endpoints__.a.BaseUrl,headers:{cookie:req.get("cookie")||""}});return Object(__WEBPACK_IMPORTED_MODULE_0_redux__.createStore)(__WEBPACK_IMPORTED_MODULE_3__rootReducer__.a,{},Object(__WEBPACK_IMPORTED_MODULE_0_redux__.applyMiddleware)(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(axiosInstance)))}},/* 22 */
/***/
function(module,exports){module.exports=require("redux-thunk")},/* 23 */
/***/
function(module,exports){module.exports=require("axios")},/* 24 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0_redux__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_1__Redux_Global_Reducer__=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__),__webpack_require__(25));/* harmony default export */
__webpack_exports__.a=Object(__WEBPACK_IMPORTED_MODULE_0_redux__.combineReducers)({global:__WEBPACK_IMPORTED_MODULE_1__Redux_Global_Reducer__.a})},/* 25 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function GlobalReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case __WEBPACK_IMPORTED_MODULE_0__ActionConstant__.b:return _objectSpread({},state);case __WEBPACK_IMPORTED_MODULE_0__ActionConstant__.c:case __WEBPACK_IMPORTED_MODULE_0__ActionConstant__.a:return _objectSpread(_objectSpread({},state),{},{user:action.payload});default:return state}}/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0__ActionConstant__=__webpack_require__(4),initialState={user:[]};/* harmony default export */
__webpack_exports__.a=GlobalReducer},/* 26 */
/***/
function(module,exports){module.exports=require("babel-polyfill")},/* 27 */
/***/
function(module,exports){module.exports=require("body-parser")}]);