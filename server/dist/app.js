/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../app.ts":
/*!*****************!*\
  !*** ../app.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-logger */ \"koa-logger\");\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_logger__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var kcors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kcors */ \"kcors\");\n/* harmony import */ var kcors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(kcors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _server_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./server/route */ \"../server/route/index.ts\");\n// const Koa =\n\n\n\n\n\n\nvar app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\napp.use(kcors__WEBPACK_IMPORTED_MODULE_4___default()());\nvar port = 3000;\napp.use(koa_logger__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_2___default()({}));\napp.use(koa_json__WEBPACK_IMPORTED_MODULE_3___default()({}));\napp.use(_server_route__WEBPACK_IMPORTED_MODULE_5__[\"default\"].routes()).use(_server_route__WEBPACK_IMPORTED_MODULE_5__[\"default\"].allowedMethods()); // app.use(historyApiFallback());\n\napp.listen(port, function () {\n  console.log(\"app is listening at porn \".concat(port, \"!\"));\n});\n\n//# sourceURL=webpack:///../app.ts?");

/***/ }),

/***/ "../server/controller/todoList.ts":
/*!****************************************!*\
  !*** ../server/controller/todoList.ts ***!
  \****************************************/
/*! exports provided: getTodoList, createList, statusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodoList\", function() { return getTodoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createList\", function() { return createList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"statusEnum\", function() { return statusEnum; });\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"core-js/modules/es.array.map\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"core-js/modules/es.object.to-string\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ \"core-js/modules/es.promise\");\n/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/response */ \"../server/utils/response.ts\");\n/* harmony import */ var _models_todoList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../models/todoList */ \"../server/models/todoList.ts\");\n/* harmony import */ var _schema_todoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../schema/todoList */ \"../server/schema/todoList.ts\");\n\n\n\n\n\n\nvar _this = undefined;\n\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n}; // 获取列表\n\n\n\n\n\nvar getTodoList = function getTodoList(ctx) {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"response\"])(ctx, {\n              data: Object(_models_todoList__WEBPACK_IMPORTED_MODULE_6__[\"findAllList\"])()\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n};\nvar createList = function createList(ctx) {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {\n    var content, success;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            // const rules = yup.object().shape({\n            //   content: yup.string().required(),\n            // });\n            content = ctx.request.body.content;\n            success = Object(_models_todoList__WEBPACK_IMPORTED_MODULE_6__[\"createTodoList\"])(content);\n            Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"response\"])(ctx, {\n              data: success\n            }, success);\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n};\nvar statusEnum = function statusEnum(ctx) {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {\n    var data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            data = _schema_todoList__WEBPACK_IMPORTED_MODULE_7__[\"todoListEnumData\"].map(function (e, idx) {\n              return {\n                value: e,\n                key: idx\n              };\n            });\n            Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"response\"])(ctx, {\n              data: data\n            });\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n};\n\n//# sourceURL=webpack:///../server/controller/todoList.ts?");

/***/ }),

/***/ "../server/db/index.ts":
/*!*****************************!*\
  !*** ../server/db/index.ts ***!
  \*****************************/
/*! exports provided: todoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoList\", function() { return todoList; });\nvar todoList = [];\n\n//# sourceURL=webpack:///../server/db/index.ts?");

/***/ }),

/***/ "../server/models/todoList.ts":
/*!************************************!*\
  !*** ../server/models/todoList.ts ***!
  \************************************/
/*! exports provided: createTodoList, findAllList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodoList\", function() { return createTodoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllList\", function() { return findAllList; });\n/* harmony import */ var _schema_todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../schema/todoList */ \"../server/schema/todoList.ts\");\n/* harmony import */ var _db_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../db/index */ \"../server/db/index.ts\");\n\n\nvar createTodoList = function createTodoList(content) {\n  var result = Object(_schema_todoList__WEBPACK_IMPORTED_MODULE_0__[\"todoListModel\"])(content);\n  _db_index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].push(result);\n  console.log('todoList: ', _db_index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"]);\n  return true;\n};\nvar findAllList = function findAllList() {\n  return _db_index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"];\n};\n\n//# sourceURL=webpack:///../server/models/todoList.ts?");

/***/ }),

/***/ "../server/route/index.ts":
/*!********************************!*\
  !*** ../server/route/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist */ \"../server/route/todolist.ts\");\n\n\n\n\nvar Router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a({\n  prefix: '/api'\n}); // todoList模块\n\nRouter.use('/todoList', _todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].routes(), _todolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allowedMethods());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///../server/route/index.ts?");

/***/ }),

/***/ "../server/route/todolist.ts":
/*!***********************************!*\
  !*** ../server/route/todolist.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/todoList */ \"../server/controller/todoList.ts\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * 子路由:todolist;\n */\n\n\nvar router = koa_router__WEBPACK_IMPORTED_MODULE_1___default()();\nvar routers = router.get('/list', _controller_todoList__WEBPACK_IMPORTED_MODULE_0__[\"getTodoList\"]).get('/statusEnum', _controller_todoList__WEBPACK_IMPORTED_MODULE_0__[\"statusEnum\"]).post('/add', _controller_todoList__WEBPACK_IMPORTED_MODULE_0__[\"createList\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routers);\n\n//# sourceURL=webpack:///../server/route/todolist.ts?");

/***/ }),

/***/ "../server/schema/todoList.ts":
/*!************************************!*\
  !*** ../server/schema/todoList.ts ***!
  \************************************/
/*! exports provided: todoListEnumData, todoListEnum, todoListModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoListEnumData\", function() { return todoListEnumData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoListEnum\", function() { return todoListEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoListModel\", function() { return todoListModel; });\nvar _id = 0;\n/**\n * 0:开始\n * 1:正在进行\n * 2:结束`\n */\n\nvar todoListEnumData = ['开始', '正在进行', '结束'];\nvar todoListEnum;\n\n(function (todoListEnum) {\n  todoListEnum[todoListEnum[\"START\"] = 0] = \"START\";\n  todoListEnum[todoListEnum[\"DOING\"] = 1] = \"DOING\";\n  todoListEnum[todoListEnum[\"DONE\"] = 2] = \"DONE\";\n})(todoListEnum || (todoListEnum = {}));\n/**\n *\n *\n * @param {*} content\n * @param {*} status\n * @returns {ITodoList}\n */\n\n\nvar todoListModel = function todoListModel(content) {\n  var id = _id++;\n  return {\n    id: id,\n    content: content,\n    status: todoListEnum.START\n  };\n};\n\n//# sourceURL=webpack:///../server/schema/todoList.ts?");

/***/ }),

/***/ "../server/utils/response.ts":
/*!***********************************!*\
  !*** ../server/utils/response.ts ***!
  \***********************************/
/*! exports provided: response */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"response\", function() { return response; });\n/**\n *\n *\n * @date 2019-05-05\n * @export\n * @param {Koa.Context} ctx\n * @param {Response} [result={}]\n * @param {boolean} [success=true]\n * @param {number} [status=200]\n */\nfunction response(ctx) {\n  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var success = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var status = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 200;\n  ctx.body = {\n    success: success,\n    status: status,\n    result: result\n  };\n}\n\n//# sourceURL=webpack:///../server/utils/response.ts?");

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./../app.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./../app.ts */\"../app.ts\");\n\n\n//# sourceURL=webpack:///multi_./../app.ts?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "core-js/modules/es.array.map":
/*!***********************************************!*\
  !*** external "core-js/modules/es.array.map" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.map\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.map%22?");

/***/ }),

/***/ "core-js/modules/es.object.to-string":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.to-string" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.to-string\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.to-string%22?");

/***/ }),

/***/ "core-js/modules/es.promise":
/*!*********************************************!*\
  !*** external "core-js/modules/es.promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.promise\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.promise%22?");

/***/ }),

/***/ "kcors":
/*!************************!*\
  !*** external "kcors" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"kcors\");\n\n//# sourceURL=webpack:///external_%22kcors%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");\n\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-json\");\n\n//# sourceURL=webpack:///external_%22koa-json%22?");

/***/ }),

/***/ "koa-logger":
/*!*****************************!*\
  !*** external "koa-logger" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-logger\");\n\n//# sourceURL=webpack:///external_%22koa-logger%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ })

/******/ });