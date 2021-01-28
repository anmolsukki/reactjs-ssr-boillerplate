!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("react-router-config")},function(t,e){t.exports=require("react-helmet")},function(t,e){t.exports=require("react-redux")},function(t,e,n){"use strict";function r(t){return{headers:{"x-api-key":t||null}}}function o(){return"/"}e.a=r,e.c=o,n.d(e,"b",function(){return i});var i=function(t,e,n){console.log("%c".concat(t),"color: ".concat(e||"#1687a7","; font-weight: bolder; font-size: 13px; font-style: italic;"),n||"")}},function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=n(15),c=n(25),p=n(26);e.a=[o(o({},a.a),{},{routes:[o(o({path:"/"},c.a),{},{exact:!0}),o({},p.a)]})]},function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i});var r="USER_INIT",o="USER_SUCCESS",i="USER_FAILED"},function(t,e){t.exports=require("redux")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=(n.n(r),n(10)),i=n.n(o),a=n(1),c=(n.n(a),n(11)),p=n(5),s=n(27),u=n(16),l=n(32),f=i()();f.use(l.urlencoded({extended:!1})),f.use(l.json()),console.log(u.magenta.bold("Server Initialize")),f.get("/dist.js",function(t,e,n){t.url=t.url+".gz",e.set("Content-Encoding","gzip"),e.set("Content-Type","text/javascript"),n()}),f.use(i.a.static("public")),f.get("*",function(t,e){var n=Object(s.a)(t),r=Object(a.matchRoutes)(p.a,t.path).map(function(t){var e=t.route,r=t.match;return e.loadData?e.loadData(n,r):null}).map(function(t){if(t)return new Promise(function(e,n){t.then(e).catch(e)})});Promise.all(r).then(function(){var r={},o=Object(c.a)(t,n,r);if(r.url)return e.redirect(301,r.url);r.notFound&&e.status(404),e.send(o)}).catch(function(t){return console.log(t)})}),f.listen(3e3,function(){console.log("server is up and running")})},function(t,e){t.exports=require("babel-polyfill")},function(t,e){t.exports=require("express")},function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(12),a=(n.n(i),n(2)),c=(n.n(a),n(3)),p=(n.n(c),n(1)),s=(n.n(p),n(13)),u=(n.n(s),n(14)),l=n.n(u),f=n(4),y=n(5);e.a=function(t,e,n){var r=Object(i.renderToString)(o.a.createElement(c.Provider,{store:e},o.a.createElement(s.StaticRouter,{location:t.path,context:n},o.a.createElement(o.a.Fragment,null,Object(p.renderRoutes)(y.a))))),u=a.Helmet.renderStatic();return'<!DOCTYPE html>\n    <html lang="en">\n      <head>\n        '.concat(u.title.toString(),"\n        ").concat(u.meta.toString(),"\n        ").concat(u.link.toString(),'\n        <meta charset="utf-8">\n        <meta name="theme-color" content="#000000" />\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <meta name="viewport" content="width=device-width, initial-scale=1"/>\n        <meta data-react-helmet="true" name="robots" content="INDEX, FOLLOW" />\n        <meta data-react-helmet="true" name="googlebot" content="INDEX, FOLLOW">\n\n        \x3c!-- Safari --\x3e\n        <meta name="apple-mobile-web-app-apable" content="yes" />\n        <meta name="apple-mobile-web-app-status-bar-style" content="black" />\n        <meta name="apple-mobile-web-app-title" content="ReactJS SSR" />\n\n        \x3c!-- Internate Explorer --\x3e\n        <meta name="msapplication-TileColor" content="#fff" />\n\n        <link data-react-helmet="true" rel="canonical" href="https://github.com/anmolsukki"/>\n        <link rel="icon" type="image/x-icon" rel="icon" href="').concat(Object(f.c)(),'images/favicon.ico">\n        <link rel="stylesheet" type="text/css" href="').concat(Object(f.c)(),'css/style.css?v=1.1">\n        <link rel="stylesheet" type="text/css" href="').concat(Object(f.c)(),'css/LottieComponent.css">\n        <link rel="stylesheet" type="text/css" href="').concat(Object(f.c)(),"css/notFound.css\">\n\n        \x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n        <script async src=\"https://www.googletagmanager.com/gtag/js?id=GA_CODE_HERE\"><\/script>\n        <script>\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'GA_CODE_HERE');\n        <\/script>\n\n\t\t  </head>\n    <body>\n      <div id=\"root\">").concat(r,"</div>\n      <script>\n          window.INITIAL_STATE = ").concat(l()(e.getState()),'\n      <\/script>\n\n      <script src="').concat(Object(f.c)(),"dist.js\"><\/script>\n\n      <script>\n        if ('serviceWorker' in navigator) {\n          window.addEventListener('load', function() {\n            navigator.serviceWorker.register('/service-worker.js').then(function(registration) {\n              return null;\n            }, function(err) {\n              return null;\n            });\n          });\n        }\n      <\/script>\n\n\t  </body>\n    </html>\n  ")}},function(t,e){t.exports=require("react-dom/server")},function(t,e){t.exports=require("react-router-dom")},function(t,e){t.exports=require("serialize-javascript")},function(t,e,n){"use strict";function r(t){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=f();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t){return{userData:t.global.user}}function m(t){return{getUserAction:function(){return t(Object(v.a)())}}}function d(t){return(0,t.dispatch)(Object(v.a)())}var x=n(0),b=n.n(x),h=n(3),k=(n.n(h),n(1)),v=(n.n(k),n(17)),g=n(4),O=n(21),w=n(22),j=function(t){function e(){return o(this,e),n.apply(this,arguments)}c(e,t);var n=s(e);return a(e,[{key:"render",value:function(){var t=[{a:"a"},{a:"b"}];return Object(g.b)("browser message","green"),Object(g.b)("data message","red",t),b.a.createElement("div",null,b.a.createElement(O.a,{title:"React App",description:"React App Boillerplate"}),b.a.createElement("div",{className:"App"},"Name: ",this.props.userData[0].name),Object(k.renderRoutes)(this.props.route.routes),b.a.createElement(w.a,{loading:"Loading..."}))}}]),e}(x.Component);e.a={component:Object(h.connect)(_,m)(j),loadData:d}},function(t,e){t.exports=require("chalk")},function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),p=c.value}catch(t){return void n(t)}c.done?e(p):Promise.resolve(p).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){function a(t){r(p,o,i,a,c,"next",t)}function c(t){r(p,o,i,a,c,"throw",t)}var p=t.apply(e,n);a(void 0)})}}n.d(e,"a",function(){return u});var i=n(18),a=n(19),c=n.n(a),p=n(20),s=n(4),u=function(){return function(){var t=o(regeneratorRuntime.mark(function t(e,n,r){var o,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e(i.b()),o=c.a.get("token"),t.next=4,r.get(p.a.UserApi,Object(s.a)(o));case 4:a=t.sent,e(200===a.status?i.c(a.data):i.a(a));case 6:case"end":return t.stop()}},t)}));return function(e,n,r){return t.apply(this,arguments)}}()}},function(t,e,n){"use strict";function r(){return{type:a.b}}function o(t){return{type:a.c,payload:t}}function i(t){return{type:a.a,payload:t}}e.b=r,e.c=o,e.a=i;var a=n(6)},function(t,e){t.exports=require("js-cookie")},function(t,e,n){"use strict";e.a={UserApi:"/users"}},function(t,e,n){"use strict";function r(t){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=f();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return b});var _=n(0),m=n.n(_),d=n(2),x=n.n(d),b=function(t){function e(){return o(this,e),n.apply(this,arguments)}c(e,t);var n=s(e);return a(e,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.description,r=t.image,o=t.keywords;return m.a.createElement(x.a,{title:e,meta:[{name:"description",content:n},{name:"keywords",content:o},{name:"og:title",content:e},{name:"og:description",content:n},{name:"twitter:title",content:e},{name:"twitter:description",content:n},{name:"twitter:site",contant:"@anmolsukki"},{name:"twitter:card",contant:"summary"},{name:"og:site_name",contant:"Zarves"},{name:"og:image",content:r}]})}}]),e}(_.Component)},function(t,e,n){"use strict";function r(t){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=f();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var _=n(0),m=n.n(_),d=n(23),x=n.n(d),b=n(24),h=(n.n(b),function(t){function e(t){var r;return o(this,e),r=n.call(this,t),r.state={isStopped:!1,isPaused:!1},r}c(e,t);var n=s(e);return a(e,[{key:"render",value:function(){var t={loop:!0,autoplay:!0,animationData:b,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return m.a.createElement("div",{className:"loader "},m.a.createElement("div",{className:"lottie-container"},m.a.createElement(x.a,{options:t,height:300,width:300,isStopped:this.state.isStopped,isPaused:this.state.isPaused}),m.a.createElement("p",{className:"subtitle loading-text"},this.props.loading)))}}]),e}(_.Component));e.a=h},function(t,e){t.exports=require("react-lottie")},function(t,e){t.exports={v:"5.1.6",fr:30,ip:0,op:90,w:300,h:300,nm:"Comp 2",ddd:0,assets:[{id:"comp_0",layers:[{ddd:0,ind:1,ty:4,nm:"Shape Layer 3",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[81,59.26,0],ix:2},a:{a:0,k:[-30,-6.544,0],ix:1},s:{a:1,k:[{i:{x:[.651,.667,.667],y:[.998,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p651_0p998_0p333_0","0p667_1_0p333_0","0p667_1_0p333_0"],t:9,s:[0,75.476,100],e:[110,75.476,100]},{i:{x:[.524,.833,.833],y:[.97,1,1]},o:{x:[.379,.167,.167],y:[.013,0,0]},n:["0p524_0p97_0p379_0p013","0p833_1_0p167_0","0p833_1_0p167_0"],t:21,s:[110,75.476,100],e:[100,75.476,100]},{t:29}],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[85.26,14.271],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:2,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"fl",c:{a:0,k:[.23529411764705882,.30196078431372547,.4117647058823529,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[12.63,-8.364],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:118,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Shape Layer 2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[81,41.26,0],ix:2},a:{a:0,k:[-30,-6.544,0],ix:1},s:{a:1,k:[{i:{x:[.651,.667,.667],y:[.997,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p651_0p997_0p333_0","0p667_1_0p333_0","0p667_1_0p333_0"],t:3,s:[0,75.476,100],e:[90,75.476,100]},{i:{x:[.524,.833,.833],y:[.94,1,1]},o:{x:[.379,.167,.167],y:[.027,0,0]},n:["0p524_0p94_0p379_0p027","0p833_1_0p167_0","0p833_1_0p167_0"],t:15,s:[90,75.476,100],e:[85,75.476,100]},{t:23}],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[85.26,14.271],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:2,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"fl",c:{a:0,k:[.23529411764705882,.30196078431372547,.4117647058823529,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[12.63,-8.364],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:166,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[48.961,49.211,0],ix:2},a:{a:0,k:[-66.789,-32.789,0],ix:1},s:{a:1,k:[{i:{x:[.044,.044,.667],y:[.991,.991,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p044_0p991_0p333_0","0p044_0p991_0p333_0","0p667_1_0p333_0"],t:0,s:[0,0,100],e:[93,93,100]},{t:12}],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[38.422,38.422],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:4,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"fl",c:{a:0,k:[.23529411764705882,.30196078431372547,.4117647058823529,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-66.789,-32.789],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:166,st:0,bm:0}]}],layers:[{ddd:0,ind:1,ty:0,nm:"Comp 1",refId:"comp_0",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[150,175,0],ix:2},a:{a:0,k:[100,50,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,w:200,h:100,ip:62,op:152,st:62,bm:0},{ddd:0,ind:2,ty:0,nm:"Comp 1",refId:"comp_0",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:62,s:[100],e:[60]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:76,s:[60],e:[60]},{t:94}],ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.182,y:1},o:{x:.333,y:0},n:"0p182_1_0p333_0",t:62,s:[150,175,0],e:[150,123.5,0],to:[0,-8.58333301544189,0],ti:[0,8.58333301544189,0]},{i:{x:.182,y:.182},o:{x:.167,y:.167},n:"0p182_0p182_0p167_0p167",t:76,s:[150,123.50000000000001,0],e:[150,123.5,0],to:[0,0,0],ti:[0,0,0]},{t:94}],ix:2},a:{a:0,k:[100,50,0],ix:1},s:{a:1,k:[{i:{x:[.069,.069,.667],y:[.995,.995,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p069_0p995_0p333_0","0p069_0p995_0p333_0","0p667_1_0p333_0"],t:62,s:[100,100,100],e:[80,80,100]},{i:{x:[.833,.833,.833],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p833_1_0p333_0","0p833_1_0p333_0","0p833_1_0p333_0"],t:76,s:[80,80,100],e:[80,80,100]},{t:94}],ix:6}},ao:0,w:200,h:100,ip:30,op:120,st:30,bm:0},{ddd:0,ind:3,ty:0,nm:"Comp 1",refId:"comp_0",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:30,s:[100],e:[60]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:44,s:[60],e:[60]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:62,s:[60],e:[0]},{t:76}],ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.182,y:1},o:{x:.333,y:0},n:"0p182_1_0p333_0",t:30,s:[150,175,0],e:[150,123.5,0],to:[0,-8.58333301544189,0],ti:[0,8.58333301544189,0]},{i:{x:.182,y:.182},o:{x:.167,y:.167},n:"0p182_0p182_0p167_0p167",t:44,s:[150,123.50000000000001,0],e:[150,123.5,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.182,y:1},o:{x:.167,y:0},n:"0p182_1_0p167_0",t:62,s:[150,123.50000000000001,0],e:[150,86.5,0],to:[0,-6.16666650772095,0],ti:[0,6.16666650772095,0]},{t:76}],ix:2},a:{a:0,k:[100,50,0],ix:1},s:{a:1,k:[{i:{x:[.069,.069,.667],y:[.995,.995,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p069_0p995_0p333_0","0p069_0p995_0p333_0","0p667_1_0p333_0"],t:30,s:[100,100,100],e:[80,80,100]},{i:{x:[.833,.833,.833],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p833_1_0p333_0","0p833_1_0p333_0","0p833_1_0p333_0"],t:44,s:[80,80,100],e:[80,80,100]},{i:{x:[.833,.833,.833],y:[1,1,1]},o:{x:[.167,.167,.167],y:[0,0,0]},n:["0p833_1_0p167_0","0p833_1_0p167_0","0p833_1_0p167_0"],t:62,s:[80,80,100],e:[50,50,100]},{t:76}],ix:6}},ao:0,w:200,h:100,ip:-2,op:88,st:-2,bm:0},{ddd:0,ind:4,ty:0,nm:"Comp 1",refId:"comp_0",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:-1,s:[100],e:[60]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:13,s:[60],e:[60]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:31,s:[60],e:[0]},{t:45}],ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.182,y:1},o:{x:.333,y:0},n:"0p182_1_0p333_0",t:-1,s:[150,175,0],e:[150,123.5,0],to:[0,-8.58333301544189,0],ti:[0,8.58333301544189,0]},{i:{x:.182,y:.182},o:{x:.167,y:.167},n:"0p182_0p182_0p167_0p167",t:13,s:[150,123.50000000000001,0],e:[150,123.5,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.182,y:1},o:{x:.167,y:0},n:"0p182_1_0p167_0",t:31,s:[150,123.50000000000001,0],e:[150,86.5,0],to:[0,-6.16666650772095,0],ti:[0,6.16666650772095,0]},{t:45}],ix:2},a:{a:0,k:[100,50,0],ix:1},s:{a:1,k:[{i:{x:[.069,.069,.667],y:[.995,.995,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p069_0p995_0p333_0","0p069_0p995_0p333_0","0p667_1_0p333_0"],t:-1,s:[100,100,100],e:[80,80,100]},{i:{x:[.833,.833,.833],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p833_1_0p333_0","0p833_1_0p333_0","0p833_1_0p333_0"],t:13,s:[80,80,100],e:[80,80,100]},{i:{x:[.833,.833,.833],y:[1,1,1]},o:{x:[.167,.167,.167],y:[0,0,0]},n:["0p833_1_0p167_0","0p833_1_0p167_0","0p833_1_0p167_0"],t:31,s:[80,80,100],e:[50,50,100]},{t:45}],ix:6}},ao:0,w:200,h:100,ip:-33,op:57,st:-33,bm:0},{ddd:0,ind:5,ty:0,nm:"Comp 1",refId:"comp_0",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:-35,s:[100],e:[60]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:-21,s:[60],e:[60]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:-1,s:[60],e:[0]},{t:13}],ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.182,y:1},o:{x:.333,y:0},n:"0p182_1_0p333_0",t:-35,s:[150,175,0],e:[150,123.5,0],to:[0,-8.58333301544189,0],ti:[0,8.58333301544189,0]},{i:{x:.182,y:.182},o:{x:.167,y:.167},n:"0p182_0p182_0p167_0p167",t:-21,s:[150,123.50000000000001,0],e:[150,123.5,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.182,y:1},o:{x:.167,y:0},n:"0p182_1_0p167_0",t:-1,s:[150,123.50000000000001,0],e:[150,86.5,0],to:[0,-6.16666650772095,0],ti:[0,6.16666650772095,0]},{t:13}],ix:2},a:{a:0,k:[100,50,0],ix:1},s:{a:1,k:[{i:{x:[.069,.069,.667],y:[.995,.995,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p069_0p995_0p333_0","0p069_0p995_0p333_0","0p667_1_0p333_0"],t:-35,s:[100,100,100],e:[80,80,100]},{i:{x:[.833,.833,.833],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p833_1_0p333_0","0p833_1_0p333_0","0p833_1_0p333_0"],t:-21,s:[80,80,100],e:[80,80,100]},{i:{x:[.833,.833,.833],y:[1,1,1]},o:{x:[.167,.167,.167],y:[0,0,0]},n:["0p833_1_0p167_0","0p833_1_0p167_0","0p833_1_0p167_0"],t:-1,s:[80,80,100],e:[50,50,100]},{t:13}],ix:6}},ao:0,w:200,h:100,ip:-76,op:14,st:-76,bm:0}],markers:[]}},function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=function(){return o.a.createElement("div",{className:"App"},"Test Container")};e.a={component:i}},function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=function(t){var e=t.staticContext;return(void 0===e?{}:e).notFound=!0,o.a.createElement("div",{className:"notFound"},o.a.createElement("section",{className:"error"},o.a.createElement("div",{className:"content"},o.a.createElement("canvas",{className:"snow",id:"snow"}),o.a.createElement("div",{className:"main-text"},o.a.createElement("h1",null,o.a.createElement("div",null,"We couldn’t find the page you’re looking for."),o.a.createElement("div",{className:"subtext"},o.a.createElement("div",{className:"subtextsub"},"You may have clicked the wrong link or mistyped the address. Please use the links below."))),o.a.createElement("div",null,o.a.createElement("a",{className:"button",href:"/"},o.a.createElement("span",null,"Go Back to Home"))),o.a.createElement("div",{className:"ground"},o.a.createElement("div",{className:"mound"},o.a.createElement("div",{className:"mound_text"},"404"),o.a.createElement("div",{className:"mound_spade"})))))))};e.a={component:i}},function(t,e,n){"use strict";var r=n(7),o=(n.n(r),n(28)),i=n.n(o),a=n(29),c=n.n(a),p=n(30);e.a=function(t){var e=c.a.create({baseURL:"https://jsonplaceholder.typicode.com",headers:{cookie:t.get("cookie")||""}});return Object(r.createStore)(p.a,{},Object(r.applyMiddleware)(i.a.withExtraArgument(e)))}},function(t,e){t.exports=require("redux-thunk")},function(t,e){t.exports=require("axios")},function(t,e,n){"use strict";var r=n(7),o=(n.n(r),n(31));e.a=Object(r.combineReducers)({global:o.a})},function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.b:return o({},t);case c.c:case c.a:return o(o({},t),{},{user:e.payload});default:return t}}var c=n(6),p={user:[]};e.a=a},function(t,e){t.exports=require("body-parser")}]);