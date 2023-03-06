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

/***/ "./client/app.tsx":
/*!************************!*\
  !*** ./client/app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firstcomponent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstcomponent/component */ \"./client/firstcomponent/component.tsx\");\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Hello World!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"From inside src/app.tsx, which is bundled to public/bundle.js via Webpack\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"New Paragraph\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Yet another new paragraph\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_firstcomponent_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://chat-app/./client/app.tsx?");

/***/ }),

/***/ "./client/firstcomponent/component.tsx":
/*!*********************************************!*\
  !*** ./client/firstcomponent/component.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Component = function Component() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"A component\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);\n\n//# sourceURL=webpack://chat-app/./client/firstcomponent/component.tsx?");

/***/ }),

/***/ "./server/index.tsx":
/*!**************************!*\
  !*** ./server/index.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/app */ \"./client/app.tsx\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n// import root app to be rendered\n\n\n\n\n// setup environment variables\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n// initialize app and define port\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar port = process.env.PORT || 3000;\n// if environment is dev enable live browser reloads\nif (true) {\n  // source: https://dev.to/cassiolacerda/automatically-refresh-the-browser-on-node-express-server-changes-x1f680-1k0o\n  var livereload = __webpack_require__(/*! livereload */ \"livereload\");\n  var connectLiveReload = __webpack_require__(/*! connect-livereload */ \"connect-livereload\");\n  var liveReloadServer = livereload.createServer();\n  liveReloadServer.server.once(\"connection\", function () {\n    setTimeout(function () {\n      liveReloadServer.refresh(\"/\");\n    }, 100);\n  });\n  app.use(connectLiveReload());\n}\n// app.use('/static', express.static(path.join(__dirname, '..', 'dist')))\napp.get('/', function (req, res) {\n  var component = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_client_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n  var html = \"\\n    <!DOCTYPE html>\\n    <html lang='en'>\\n        <head>\\n            <meta charset='UTF-8'>\\n            <meta http-equiv='X-UA-Compatible' content='IE=edge'>\\n            <meta name='viewport' content='width=device-width, initial-scale=1.0'>\\n            <meta name='description' content='React App from Scratch'>\\n            <meta name='author' content='Robert Steele'>\\n            <title>React App from Scratch</title>\\n        </head>\\n        <body>\\n            <div id='root'>\".concat(component, \"</div>\\n            <script src='bundle.js'></script>\\n        </body>\\n    </html>\\n  \");\n  res.send(html);\n});\napp.listen(port, function () {\n  console.log(\"Server now listening at http://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack://chat-app/./server/index.tsx?");

/***/ }),

/***/ "connect-livereload":
/*!*************************************!*\
  !*** external "connect-livereload" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("connect-livereload");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "livereload":
/*!*****************************!*\
  !*** external "livereload" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("livereload");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.tsx");
/******/ 	
/******/ })()
;