/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Client/App.js":
/*!***************************!*\
  !*** ./src/Client/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"loadData\": () => (/* binding */ loadData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Redux_Global_Action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Redux/Global/Action */ \"./src/Redux/Global/Action.js\");\n/* harmony import */ var _Util_HelmetTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Util/HelmetTag */ \"./src/Util/HelmetTag.js\");\n/* harmony import */ var _Components_MainComponent_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/MainComponent/Loader */ \"./src/Client/Components/MainComponent/Loader/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\nvar App = /*#__PURE__*/function (_Component) {\n  _inherits(App, _Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Util_HelmetTag__WEBPACK_IMPORTED_MODULE_4__.HelmetTag, {\n        title: \"React App\",\n        description: \"React App Boillerplate\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"App\"\n      }, \"Name: \", this.props.userData[0].name), (0,react_router_config__WEBPACK_IMPORTED_MODULE_2__.renderRoutes)(this.props.route.routes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_MainComponent_Loader__WEBPACK_IMPORTED_MODULE_5__.default, {\n        loading: 'Loading...'\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    userData: state.global.user\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    getUserAction: function getUserAction() {\n      return dispatch((0,_Redux_Global_Action__WEBPACK_IMPORTED_MODULE_3__.getUserAction)());\n    }\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(App),\n  loadData: loadData\n});\nfunction loadData(_ref) {\n  var dispatch = _ref.dispatch;\n  return dispatch((0,_Redux_Global_Action__WEBPACK_IMPORTED_MODULE_3__.getUserAction)());\n}\n\n//# sourceURL=webpack://ssr-react/./src/Client/App.js?");

/***/ }),

/***/ "./src/Client/Components/MainComponent/Loader/index.js":
/*!*************************************************************!*\
  !*** ./src/Client/Components/MainComponent/Loader/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var _loading_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lottie */ \"react-lottie\");\n/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loading_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.json */ \"./src/Client/Components/MainComponent/Loader/loading.json\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar LottieComponent = /*#__PURE__*/function (_Component) {\n  _inherits(LottieComponent, _Component);\n\n  var _super = _createSuper(LottieComponent);\n\n  function LottieComponent(props) {\n    var _this;\n\n    _classCallCheck(this, LottieComponent);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      isStopped: false,\n      isPaused: false\n    };\n    return _this;\n  }\n\n  _createClass(LottieComponent, [{\n    key: \"render\",\n    value: function render() {\n      var defaultOptions = {\n        loop: true,\n        autoplay: true,\n        animationData: /*#__PURE__*/ (_loading_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_loading_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_loading_json__WEBPACK_IMPORTED_MODULE_2__, 2))),\n        rendererSettings: {\n          preserveAspectRatio: 'xMidYMid slice'\n        }\n      };\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"loader \"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"lottie-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_lottie__WEBPACK_IMPORTED_MODULE_1___default()), {\n        options: defaultOptions,\n        height: 300,\n        width: 300,\n        isStopped: this.state.isStopped,\n        isPaused: this.state.isPaused\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n        className: \"subtitle loading-text\"\n      }, this.props.loading)));\n    }\n  }]);\n\n  return LottieComponent;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottieComponent);\n\n//# sourceURL=webpack://ssr-react/./src/Client/Components/MainComponent/Loader/index.js?");

/***/ }),

/***/ "./src/Client/Containers/HomePage/index.js":
/*!*************************************************!*\
  !*** ./src/Client/Containers/HomePage/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar HomePage = function HomePage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, \"Test Container\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: HomePage\n});\n\n//# sourceURL=webpack://ssr-react/./src/Client/Containers/HomePage/index.js?");

/***/ }),

/***/ "./src/Client/Containers/NotFoundPage/index.js":
/*!*****************************************************!*\
  !*** ./src/Client/Containers/NotFoundPage/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;\n  staticContext.notFound = true;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"notFound\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    className: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"canvas\", {\n    className: \"snow\",\n    id: \"snow\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"main-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"We couldn\\u2019t find the page you\\u2019re looking for.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"subtext\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"subtextsub\"\n  }, \"You may have clicked the wrong link or mistyped the address. Please use the links below.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"button\",\n    href: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Go Back to Home\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ground\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mound\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mound_text\"\n  }, \"404\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mound_spade\"\n  })))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: NotFoundPage\n});\n\n//# sourceURL=webpack://ssr-react/./src/Client/Containers/NotFoundPage/index.js?");

/***/ }),

/***/ "./src/Helpers/endpoints.js":
/*!**********************************!*\
  !*** ./src/Helpers/endpoints.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  UserApi: '/users'\n});\n\n//# sourceURL=webpack://ssr-react/./src/Helpers/endpoints.js?");

/***/ }),

/***/ "./src/Helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/Helpers/renderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router */ \"./src/Helpers/router.js\");\n\n\n\n\n\n\n\n\nvar renderUrl = \"/slug/\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, store, context) {\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n    location: req.path,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_4__.renderRoutes)(_router__WEBPACK_IMPORTED_MODULE_7__.default)))));\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet.renderStatic();\n  return \"<!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n      <head>\\n        \".concat(helmet.title.toString(), \"\\n        \").concat(helmet.meta.toString(), \"\\n        \").concat(helmet.link.toString(), \"\\n        <meta charset=\\\"utf-8\\\">\\n        <meta name=\\\"theme-color\\\" content=\\\"#000000\\\" />\\n        <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1, shrink-to-fit=no\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\"/>\\n        <meta data-react-helmet=\\\"true\\\" name=\\\"robots\\\" content=\\\"INDEX, FOLLOW\\\" />\\n        <meta data-react-helmet=\\\"true\\\" name=\\\"googlebot\\\" content=\\\"INDEX, FOLLOW\\\">\\n\\n        <!-- Safari -->\\n        <meta name=\\\"apple-mobile-web-app-apable\\\" content=\\\"yes\\\" />\\n        <meta name=\\\"apple-mobile-web-app-status-bar-style\\\" content=\\\"black\\\" />\\n        <meta name=\\\"apple-mobile-web-app-title\\\" content=\\\"ReactJS SSR\\\" />\\n\\n        <!-- Internate Explorer -->\\n        <meta name=\\\"msapplication-TileColor\\\" content=\\\"#fff\\\" />\\n\\n        <link data-react-helmet=\\\"true\\\" rel=\\\"canonical\\\" href=\\\"https://github.com/anmolsukki\\\"/>\\n        <link rel=\\\"icon\\\" type=\\\"image/x-icon\\\" rel=\\\"icon\\\" href=\\\"\").concat(renderUrl, \"images/favicon.ico\\\">\\n        <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"\").concat(renderUrl, \"css/style.css?v=1.1\\\">\\n        <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"\").concat(renderUrl, \"css/LottieComponent.css\\\">\\n        <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"\").concat(renderUrl, \"css/notFound.css\\\">\\n\\n        <!-- Global site tag (gtag.js) - Google Analytics -->\\n        <script async src=\\\"https://www.googletagmanager.com/gtag/js?id=GA_CODE_HERE\\\"></script>\\n        <script>\\n          window.dataLayer = window.dataLayer || [];\\n          function gtag(){dataLayer.push(arguments);}\\n          gtag('js', new Date());\\n          gtag('config', 'GA_CODE_HERE');\\n        </script>\\n\\n\\t\\t  </head>\\n    <body>\\n      <div id=\\\"root\\\">\").concat(content, \"</div>\\n      <script>\\n          window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(store.getState()), \"\\n      </script>\\n\\n      <script src=\\\"\").concat(renderUrl, \"dist.js\\\"></script>\\n\\n      <script>\\n        if ('serviceWorker' in navigator) {\\n          window.addEventListener('load', function() {\\n            navigator.serviceWorker.register('\").concat(renderUrl, \"service-worker.js').then(function(registration) {\\n              return null;\\n            }, function(err) {\\n              return null;\\n            });\\n          });\\n        }\\n      </script>\\n\\n\\t  </body>\\n    </html>\\n  \");\n});\n\n//# sourceURL=webpack://ssr-react/./src/Helpers/renderer.js?");

/***/ }),

/***/ "./src/Helpers/rootReducer.js":
/*!************************************!*\
  !*** ./src/Helpers/rootReducer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Redux_Global_Reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redux/Global/Reducer */ \"./src/Redux/Global/Reducer.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  global: _Redux_Global_Reducer__WEBPACK_IMPORTED_MODULE_1__.default\n}));\n\n//# sourceURL=webpack://ssr-react/./src/Helpers/rootReducer.js?");

/***/ }),

/***/ "./src/Helpers/router.js":
/*!*******************************!*\
  !*** ./src/Helpers/router.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Client_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Client/App */ \"./src/Client/App.js\");\n/* harmony import */ var _Client_Containers_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Client/Containers/HomePage */ \"./src/Client/Containers/HomePage/index.js\");\n/* harmony import */ var _Client_Containers_NotFoundPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Client/Containers/NotFoundPage */ \"./src/Client/Containers/NotFoundPage/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar renderUrl = \"/slug/\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_objectSpread(_objectSpread({}, _Client_App__WEBPACK_IMPORTED_MODULE_0__.default), {}, {\n  routes: [_objectSpread(_objectSpread({\n    path: \"\".concat(renderUrl)\n  }, _Client_Containers_HomePage__WEBPACK_IMPORTED_MODULE_1__.default), {}, {\n    exact: true\n  }), _objectSpread({}, _Client_Containers_NotFoundPage__WEBPACK_IMPORTED_MODULE_2__.default)]\n})]);\n\n//# sourceURL=webpack://ssr-react/./src/Helpers/router.js?");

/***/ }),

/***/ "./src/Helpers/store.js":
/*!******************************!*\
  !*** ./src/Helpers/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ \"./src/Helpers/rootReducer.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req) {\n  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default().create({\n    baseURL: \"https://jsonplaceholder.typicode.com\",\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_rootReducer__WEBPACK_IMPORTED_MODULE_3__.default, {}, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument(axiosInstance)));\n  return store;\n});\n\n//# sourceURL=webpack://ssr-react/./src/Helpers/store.js?");

/***/ }),

/***/ "./src/Redux/Global/Action.js":
/*!************************************!*\
  !*** ./src/Redux/Global/Action.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserAction\": () => (/* binding */ getUserAction)\n/* harmony export */ });\n/* harmony import */ var _ActionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionType */ \"./src/Redux/Global/ActionType.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Helpers_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Helpers/endpoints */ \"./src/Helpers/endpoints.js\");\n/* harmony import */ var _Util_GlobalFuntion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/GlobalFuntion */ \"./src/Util/GlobalFuntion.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar getUserAction = function getUserAction() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n      var token, response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch(_ActionType__WEBPACK_IMPORTED_MODULE_0__.userInit());\n              token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('token');\n              _context.next = 4;\n              return api.get(_Helpers_endpoints__WEBPACK_IMPORTED_MODULE_2__.default.UserApi, (0,_Util_GlobalFuntion__WEBPACK_IMPORTED_MODULE_3__.authHeaders)(token));\n\n            case 4:\n              response = _context.sent;\n\n              if (response.status === 200) {\n                dispatch(_ActionType__WEBPACK_IMPORTED_MODULE_0__.userSuccess(response.data));\n              } else {\n                dispatch(_ActionType__WEBPACK_IMPORTED_MODULE_0__.userFailed(response));\n              }\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://ssr-react/./src/Redux/Global/Action.js?");

/***/ }),

/***/ "./src/Redux/Global/ActionConstant.js":
/*!********************************************!*\
  !*** ./src/Redux/Global/ActionConstant.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"USER_INIT\": () => (/* binding */ USER_INIT),\n/* harmony export */   \"USER_SUCCESS\": () => (/* binding */ USER_SUCCESS),\n/* harmony export */   \"USER_FAILED\": () => (/* binding */ USER_FAILED)\n/* harmony export */ });\nvar USER_INIT = 'USER_INIT';\nvar USER_SUCCESS = 'USER_SUCCESS';\nvar USER_FAILED = 'USER_FAILED';\n\n//# sourceURL=webpack://ssr-react/./src/Redux/Global/ActionConstant.js?");

/***/ }),

/***/ "./src/Redux/Global/ActionType.js":
/*!****************************************!*\
  !*** ./src/Redux/Global/ActionType.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userInit\": () => (/* binding */ userInit),\n/* harmony export */   \"userSuccess\": () => (/* binding */ userSuccess),\n/* harmony export */   \"userFailed\": () => (/* binding */ userFailed)\n/* harmony export */ });\n/* harmony import */ var _ActionConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionConstant */ \"./src/Redux/Global/ActionConstant.js\");\n\nfunction userInit() {\n  return {\n    type: _ActionConstant__WEBPACK_IMPORTED_MODULE_0__.USER_INIT\n  };\n}\nfunction userSuccess(payload) {\n  return {\n    type: _ActionConstant__WEBPACK_IMPORTED_MODULE_0__.USER_SUCCESS,\n    payload: payload\n  };\n}\nfunction userFailed(payload) {\n  return {\n    type: _ActionConstant__WEBPACK_IMPORTED_MODULE_0__.USER_FAILED,\n    payload: payload\n  };\n}\n\n//# sourceURL=webpack://ssr-react/./src/Redux/Global/ActionType.js?");

/***/ }),

/***/ "./src/Redux/Global/Reducer.js":
/*!*************************************!*\
  !*** ./src/Redux/Global/Reducer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ActionConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionConstant */ \"./src/Redux/Global/ActionConstant.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  user: []\n};\n\nfunction GlobalReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _ActionConstant__WEBPACK_IMPORTED_MODULE_0__.USER_INIT:\n      return _objectSpread({}, state);\n\n    case _ActionConstant__WEBPACK_IMPORTED_MODULE_0__.USER_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: action.payload\n      });\n\n    case _ActionConstant__WEBPACK_IMPORTED_MODULE_0__.USER_FAILED:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: action.payload\n      });\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalReducer);\n\n//# sourceURL=webpack://ssr-react/./src/Redux/Global/Reducer.js?");

/***/ }),

/***/ "./src/Util/GlobalFuntion.js":
/*!***********************************!*\
  !*** ./src/Util/GlobalFuntion.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authHeaders\": () => (/* binding */ authHeaders),\n/* harmony export */   \"browserLog\": () => (/* binding */ browserLog)\n/* harmony export */ });\nfunction authHeaders(token) {\n  var header = {\n    headers: {\n      'x-api-key': token ? token : null\n    }\n  };\n  return header;\n}\nvar browserLog = function browserLog(message, color, data) {\n  console.log(\"%c\".concat(message), \"color: \".concat(color ? color : '#1687a7', \"; font-weight: bolder; font-size: 13px; font-style: italic;\"), data || '');\n};\n\n//# sourceURL=webpack://ssr-react/./src/Util/GlobalFuntion.js?");

/***/ }),

/***/ "./src/Util/HelmetTag.js":
/*!*******************************!*\
  !*** ./src/Util/HelmetTag.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelmetTag\": () => (/* binding */ HelmetTag)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar HelmetTag = /*#__PURE__*/function (_Component) {\n  _inherits(HelmetTag, _Component);\n\n  var _super = _createSuper(HelmetTag);\n\n  function HelmetTag() {\n    _classCallCheck(this, HelmetTag);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(HelmetTag, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          title = _this$props.title,\n          description = _this$props.description,\n          image = _this$props.image,\n          keywords = _this$props.keywords;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), {\n        title: title,\n        meta: [{\n          name: 'description',\n          content: description\n        }, {\n          name: 'keywords',\n          content: keywords\n        }, {\n          name: 'og:title',\n          content: title\n        }, {\n          name: 'og:description',\n          content: description\n        }, {\n          name: 'twitter:title',\n          content: title\n        }, {\n          name: 'twitter:description',\n          content: description\n        }, {\n          name: 'twitter:site',\n          contant: '@anmolsukki'\n        }, {\n          name: 'twitter:card',\n          contant: 'summary'\n        }, {\n          name: 'og:site_name',\n          contant: 'Zarves'\n        }, {\n          name: 'og:image',\n          content: image\n        }]\n      });\n    }\n  }]);\n\n  return HelmetTag;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n//# sourceURL=webpack://ssr-react/./src/Util/HelmetTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Helpers_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Helpers/renderer */ \"./src/Helpers/renderer.js\");\n/* harmony import */ var _Helpers_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Helpers/router */ \"./src/Helpers/router.js\");\n/* harmony import */ var _Helpers_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Helpers/store */ \"./src/Helpers/store.js\");\n\n\n\n\n\n\n\nvar chalk = __webpack_require__(/*! chalk */ \"chalk\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\"); // const basicAuth = require('express-basic-auth');\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\napp.use(bodyParser.json());\napp.get('/dist.js', function (req, res, next) {\n  req.url = req.url + '.gz';\n  res.set('Content-Encoding', 'gzip');\n  res.set('Content-Type', 'text/javascript');\n  next();\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().static('public'));\n/* app.use(\r\n  basicAuth({\r\n    users: { admin: 'scbank' },\r\n    challenge: true,\r\n  })\r\n); */\n\napp.get('*', function (req, res) {\n  var store = (0,_Helpers_store__WEBPACK_IMPORTED_MODULE_5__.default)(req);\n  var promises = (0,react_router_config__WEBPACK_IMPORTED_MODULE_2__.matchRoutes)(_Helpers_router__WEBPACK_IMPORTED_MODULE_4__.default, req.path).map(function (_ref) {\n    var route = _ref.route,\n        match = _ref.match;\n    return route.loadData ? route.loadData(store, match) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve).catch(resolve);\n      });\n    }\n  });\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = (0,_Helpers_renderer__WEBPACK_IMPORTED_MODULE_3__.default)(req, store, context);\n\n    if (context.url) {\n      return res.redirect(301, context.url);\n    }\n\n    if (context.notFound) {\n      res.status(404);\n    }\n\n    res.send(content);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n});\napp.listen(3000, function () {\n  console.log(chalk.hex('#073FCF').bold.underline(\"server is up and running\"));\n});\n\n//# sourceURL=webpack://ssr-react/./src/index.js?");

/***/ }),

/***/ "./src/Client/Components/MainComponent/Loader/loading.json":
/*!*****************************************************************!*\
  !*** ./src/Client/Components/MainComponent/Loader/loading.json ***!
  \*****************************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"v\":\"5.1.6\",\"fr\":30,\"ip\":0,\"op\":90,\"w\":300,\"h\":300,\"nm\":\"Comp 2\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[81,59.26,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-30,-6.544,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.651,0.667,0.667],\"y\":[0.998,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p651_0p998_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":9,\"s\":[0,75.476,100],\"e\":[110,75.476,100]},{\"i\":{\"x\":[0.524,0.833,0.833],\"y\":[0.97,1,1]},\"o\":{\"x\":[0.379,0.167,0.167],\"y\":[0.013,0,0]},\"n\":[\"0p524_0p97_0p379_0p013\",\"0p833_1_0p167_0\",\"0p833_1_0p167_0\"],\"t\":21,\"s\":[110,75.476,100],\"e\":[100,75.476,100]},{\"t\":29}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[85.26,14.271],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":2,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.23529411764705882,0.30196078431372547,0.4117647058823529,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[12.63,-8.364],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":118,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[81,41.26,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-30,-6.544,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.651,0.667,0.667],\"y\":[0.997,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p651_0p997_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":3,\"s\":[0,75.476,100],\"e\":[90,75.476,100]},{\"i\":{\"x\":[0.524,0.833,0.833],\"y\":[0.94,1,1]},\"o\":{\"x\":[0.379,0.167,0.167],\"y\":[0.027,0,0]},\"n\":[\"0p524_0p94_0p379_0p027\",\"0p833_1_0p167_0\",\"0p833_1_0p167_0\"],\"t\":15,\"s\":[90,75.476,100],\"e\":[85,75.476,100]},{\"t\":23}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[85.26,14.271],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":2,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.23529411764705882,0.30196078431372547,0.4117647058823529,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[12.63,-8.364],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":166,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[48.961,49.211,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-66.789,-32.789,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.044,0.044,0.667],\"y\":[0.991,0.991,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p044_0p991_0p333_0\",\"0p044_0p991_0p333_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[0,0,100],\"e\":[93,93,100]},{\"t\":12}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[38.422,38.422],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":4,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.23529411764705882,0.30196078431372547,0.4117647058823529,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-66.789,-32.789],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":166,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"Comp 1\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[150,175,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[100,50,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":200,\"h\":100,\"ip\":62,\"op\":152,\"st\":62,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":0,\"nm\":\"Comp 1\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":62,\"s\":[100],\"e\":[60]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":76,\"s\":[60],\"e\":[60]},{\"t\":94}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.182,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p182_1_0p333_0\",\"t\":62,\"s\":[150,175,0],\"e\":[150,123.5,0],\"to\":[0,-8.58333301544189,0],\"ti\":[0,8.58333301544189,0]},{\"i\":{\"x\":0.182,\"y\":0.182},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p182_0p182_0p167_0p167\",\"t\":76,\"s\":[150,123.50000000000001,0],\"e\":[150,123.5,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":94}],\"ix\":2},\"a\":{\"a\":0,\"k\":[100,50,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.069,0.069,0.667],\"y\":[0.995,0.995,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p069_0p995_0p333_0\",\"0p069_0p995_0p333_0\",\"0p667_1_0p333_0\"],\"t\":62,\"s\":[100,100,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p833_1_0p333_0\",\"0p833_1_0p333_0\",\"0p833_1_0p333_0\"],\"t\":76,\"s\":[80,80,100],\"e\":[80,80,100]},{\"t\":94}],\"ix\":6}},\"ao\":0,\"w\":200,\"h\":100,\"ip\":30,\"op\":120,\"st\":30,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":0,\"nm\":\"Comp 1\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":30,\"s\":[100],\"e\":[60]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":44,\"s\":[60],\"e\":[60]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":62,\"s\":[60],\"e\":[0]},{\"t\":76}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.182,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p182_1_0p333_0\",\"t\":30,\"s\":[150,175,0],\"e\":[150,123.5,0],\"to\":[0,-8.58333301544189,0],\"ti\":[0,8.58333301544189,0]},{\"i\":{\"x\":0.182,\"y\":0.182},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p182_0p182_0p167_0p167\",\"t\":44,\"s\":[150,123.50000000000001,0],\"e\":[150,123.5,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.182,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p182_1_0p167_0\",\"t\":62,\"s\":[150,123.50000000000001,0],\"e\":[150,86.5,0],\"to\":[0,-6.16666650772095,0],\"ti\":[0,6.16666650772095,0]},{\"t\":76}],\"ix\":2},\"a\":{\"a\":0,\"k\":[100,50,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.069,0.069,0.667],\"y\":[0.995,0.995,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p069_0p995_0p333_0\",\"0p069_0p995_0p333_0\",\"0p667_1_0p333_0\"],\"t\":30,\"s\":[100,100,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p833_1_0p333_0\",\"0p833_1_0p333_0\",\"0p833_1_0p333_0\"],\"t\":44,\"s\":[80,80,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"n\":[\"0p833_1_0p167_0\",\"0p833_1_0p167_0\",\"0p833_1_0p167_0\"],\"t\":62,\"s\":[80,80,100],\"e\":[50,50,100]},{\"t\":76}],\"ix\":6}},\"ao\":0,\"w\":200,\"h\":100,\"ip\":-2,\"op\":88,\"st\":-2,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":0,\"nm\":\"Comp 1\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":-1,\"s\":[100],\"e\":[60]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":13,\"s\":[60],\"e\":[60]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":31,\"s\":[60],\"e\":[0]},{\"t\":45}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.182,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p182_1_0p333_0\",\"t\":-1,\"s\":[150,175,0],\"e\":[150,123.5,0],\"to\":[0,-8.58333301544189,0],\"ti\":[0,8.58333301544189,0]},{\"i\":{\"x\":0.182,\"y\":0.182},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p182_0p182_0p167_0p167\",\"t\":13,\"s\":[150,123.50000000000001,0],\"e\":[150,123.5,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.182,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p182_1_0p167_0\",\"t\":31,\"s\":[150,123.50000000000001,0],\"e\":[150,86.5,0],\"to\":[0,-6.16666650772095,0],\"ti\":[0,6.16666650772095,0]},{\"t\":45}],\"ix\":2},\"a\":{\"a\":0,\"k\":[100,50,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.069,0.069,0.667],\"y\":[0.995,0.995,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p069_0p995_0p333_0\",\"0p069_0p995_0p333_0\",\"0p667_1_0p333_0\"],\"t\":-1,\"s\":[100,100,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p833_1_0p333_0\",\"0p833_1_0p333_0\",\"0p833_1_0p333_0\"],\"t\":13,\"s\":[80,80,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"n\":[\"0p833_1_0p167_0\",\"0p833_1_0p167_0\",\"0p833_1_0p167_0\"],\"t\":31,\"s\":[80,80,100],\"e\":[50,50,100]},{\"t\":45}],\"ix\":6}},\"ao\":0,\"w\":200,\"h\":100,\"ip\":-33,\"op\":57,\"st\":-33,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":0,\"nm\":\"Comp 1\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":-35,\"s\":[100],\"e\":[60]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":-21,\"s\":[60],\"e\":[60]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":-1,\"s\":[60],\"e\":[0]},{\"t\":13}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.182,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p182_1_0p333_0\",\"t\":-35,\"s\":[150,175,0],\"e\":[150,123.5,0],\"to\":[0,-8.58333301544189,0],\"ti\":[0,8.58333301544189,0]},{\"i\":{\"x\":0.182,\"y\":0.182},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p182_0p182_0p167_0p167\",\"t\":-21,\"s\":[150,123.50000000000001,0],\"e\":[150,123.5,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.182,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p182_1_0p167_0\",\"t\":-1,\"s\":[150,123.50000000000001,0],\"e\":[150,86.5,0],\"to\":[0,-6.16666650772095,0],\"ti\":[0,6.16666650772095,0]},{\"t\":13}],\"ix\":2},\"a\":{\"a\":0,\"k\":[100,50,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.069,0.069,0.667],\"y\":[0.995,0.995,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p069_0p995_0p333_0\",\"0p069_0p995_0p333_0\",\"0p667_1_0p333_0\"],\"t\":-35,\"s\":[100,100,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p833_1_0p333_0\",\"0p833_1_0p333_0\",\"0p833_1_0p333_0\"],\"t\":-21,\"s\":[80,80,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"n\":[\"0p833_1_0p167_0\",\"0p833_1_0p167_0\",\"0p833_1_0p167_0\"],\"t\":-1,\"s\":[80,80,100],\"e\":[50,50,100]},{\"t\":13}],\"ix\":6}},\"ao\":0,\"w\":200,\"h\":100,\"ip\":-76,\"op\":14,\"st\":-76,\"bm\":0}],\"markers\":[]}');\n\n//# sourceURL=webpack://ssr-react/./src/Client/Components/MainComponent/Loader/loading.json?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("babel-polyfill");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

module.exports = require("chalk");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("js-cookie");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-helmet");;

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-lottie");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");;

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(key => def[key] = () => value[key]);
/******/ 			}
/******/ 			def['default'] = () => value;
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;