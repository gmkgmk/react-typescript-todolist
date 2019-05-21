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
/*! exports provided: getTodoList, createList, statusEnum, removeList, updateTodoListStatus, updateTodoListContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodoList\", function() { return getTodoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createList\", function() { return createList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"statusEnum\", function() { return statusEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeList\", function() { return removeList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTodoListStatus\", function() { return updateTodoListStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTodoListContent\", function() { return updateTodoListContent; });\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"core-js/modules/es.array.map\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"core-js/modules/es.object.to-string\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ \"core-js/modules/es.promise\");\n/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/response */ \"../server/utils/response.ts\");\n/* harmony import */ var _models_todoList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../models/todoList */ \"../server/models/todoList.ts\");\n/* harmony import */ var _schema_todoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../schema/todoList */ \"../server/schema/todoList.ts\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ \"yup\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\nvar _this = undefined;\n\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n}; // 获取列表\n\n\n\n\n\n // for everything\n\nvar getTodoList = function getTodoList(ctx) {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"response\"])(ctx, {\n              data: Object(_models_todoList__WEBPACK_IMPORTED_MODULE_6__[\"findAllList\"])()\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n};\n/**\n * 新增list\n * @param {*} ctx\n * @returns\n */\n\nvar createList = function createList(ctx) {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {\n    var schema, body, result, param, success;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            schema = yup__WEBPACK_IMPORTED_MODULE_8__[\"object\"]().shape({\n              value: yup__WEBPACK_IMPORTED_MODULE_8__[\"string\"]().required('value is Required')\n            }); // check validity\n\n            body = ctx.request.body;\n            _context2.next = 4;\n            return schema.validate(body).catch(function (e) {\n              return Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"fail\"])(ctx, e.message);\n            });\n\n          case 4:\n            result = _context2.sent;\n\n            if (result) {\n              _context2.next = 7;\n              break;\n            }\n\n            return _context2.abrupt(\"return\");\n\n          case 7:\n            param = body.value;\n            success = Object(_models_todoList__WEBPACK_IMPORTED_MODULE_6__[\"createTodoList\"])(param);\n            Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"response\"])(ctx, {\n              msg: '新增成功'\n            }, success);\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n};\nvar statusEnum = function statusEnum(ctx) {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {\n    var data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            data = _schema_todoList__WEBPACK_IMPORTED_MODULE_7__[\"todoListEnumData\"].map(function (e, idx) {\n              return {\n                value: e,\n                key: idx\n              };\n            });\n            Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"response\"])(ctx, {\n              data: data\n            });\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n};\nvar removeList = function removeList(ctx) {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4() {\n    var schema, body, result, id, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            schema = yup__WEBPACK_IMPORTED_MODULE_8__[\"object\"]().shape({\n              id: yup__WEBPACK_IMPORTED_MODULE_8__[\"number\"]('id must be number').required('value is Required')\n            }); // check validity\n\n            body = ctx.request.body;\n            _context4.next = 4;\n            return schema.validate(body).catch(function (e) {\n              return Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"fail\"])(ctx, e.message);\n            });\n\n          case 4:\n            result = _context4.sent;\n\n            if (result) {\n              _context4.next = 7;\n              break;\n            }\n\n            return _context4.abrupt(\"return\");\n\n          case 7:\n            id = body.id;\n            data = Object(_models_todoList__WEBPACK_IMPORTED_MODULE_6__[\"deleteListById\"])(id);\n\n            if (data) {\n              Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"response\"])(ctx, {\n                msg: '删除成功'\n              });\n            } else {\n              Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"fail\"])(ctx, {\n                msg: '删除失败,请重试'\n              });\n            }\n\n          case 10:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n};\nvar updateTodoListStatus = function updateTodoListStatus(ctx) {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5() {\n    var schema, body, result, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            schema = yup__WEBPACK_IMPORTED_MODULE_8__[\"object\"]().shape({\n              id: yup__WEBPACK_IMPORTED_MODULE_8__[\"number\"]('id must be number').required('value is Required'),\n              status: yup__WEBPACK_IMPORTED_MODULE_8__[\"number\"]('status must be number').required('value is Required')\n            });\n            body = ctx.request.body;\n            _context5.next = 4;\n            return schema.validate(body).catch(function (e) {\n              return Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"fail\"])(ctx, e.message);\n            });\n\n          case 4:\n            result = _context5.sent;\n\n            if (result) {\n              _context5.next = 7;\n              break;\n            }\n\n            return _context5.abrupt(\"return\");\n\n          case 7:\n            data = Object(_models_todoList__WEBPACK_IMPORTED_MODULE_6__[\"updateStatusById\"])(body);\n\n            if (data) {\n              _context5.next = 11;\n              break;\n            }\n\n            Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"fail\"])(ctx, {\n              msg: '查询todolist失败'\n            });\n            return _context5.abrupt(\"return\");\n\n          case 11:\n            Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"response\"])(ctx, {\n              data: data\n            });\n\n          case 12:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n};\nvar updateTodoListContent = function updateTodoListContent(ctx) {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6() {\n    var schema, body, result, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            schema = yup__WEBPACK_IMPORTED_MODULE_8__[\"object\"]().shape({\n              id: yup__WEBPACK_IMPORTED_MODULE_8__[\"number\"]('id must be number').required('value is Required'),\n              content: yup__WEBPACK_IMPORTED_MODULE_8__[\"string\"]('status must be number').required('value is Required')\n            });\n            body = ctx.request.body;\n            _context6.next = 4;\n            return schema.validate(body).catch(function (e) {\n              return Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"fail\"])(ctx, e.message);\n            });\n\n          case 4:\n            result = _context6.sent;\n\n            if (result) {\n              _context6.next = 7;\n              break;\n            }\n\n            return _context6.abrupt(\"return\");\n\n          case 7:\n            data = Object(_models_todoList__WEBPACK_IMPORTED_MODULE_6__[\"updateContentById\"])(body);\n\n            if (data) {\n              _context6.next = 11;\n              break;\n            }\n\n            Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"fail\"])(ctx, {\n              msg: '查询todolist失败'\n            });\n            return _context6.abrupt(\"return\");\n\n          case 11:\n            Object(_utils_response__WEBPACK_IMPORTED_MODULE_5__[\"response\"])(ctx, {\n              data: data\n            });\n\n          case 12:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n};\n\n//# sourceURL=webpack:///../server/controller/todoList.ts?");

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
/*! exports provided: createTodoList, findAllList, deleteListById, updateStatusById, updateContentById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodoList\", function() { return createTodoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllList\", function() { return findAllList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteListById\", function() { return deleteListById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStatusById\", function() { return updateStatusById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateContentById\", function() { return updateContentById; });\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ \"core-js/modules/es.array.find\");\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find-index */ \"core-js/modules/es.array.find-index\");\n/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice */ \"core-js/modules/es.array.splice\");\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _schema_todoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schema/todoList */ \"../server/schema/todoList.ts\");\n/* harmony import */ var _db_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../db/index */ \"../server/db/index.ts\");\n\n\n\n\n\nvar createTodoList = function createTodoList(content) {\n  var result = Object(_schema_todoList__WEBPACK_IMPORTED_MODULE_3__[\"todoListModel\"])(content);\n  _db_index__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"].push(result);\n  return true;\n};\nvar findAllList = function findAllList() {\n  return _db_index__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"];\n};\nvar deleteListById = function deleteListById(id) {\n  var index = _db_index__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"].findIndex(function (e) {\n    return e.id === id;\n  });\n\n  if (index !== -1) {\n    _db_index__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"].splice(index, 1);\n    return true;\n  }\n};\nvar updateStatusById = function updateStatusById(_ref) {\n  var id = _ref.id,\n      status = _ref.status;\n  var todoListRow = _db_index__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"].find(function (e) {\n    return e.id === id;\n  });\n\n  if (todoListRow) {\n    todoListRow.status = status;\n    return true;\n  }\n};\nvar updateContentById = function updateContentById(_ref2) {\n  var id = _ref2.id,\n      content = _ref2.content;\n  var todoListRow = _db_index__WEBPACK_IMPORTED_MODULE_4__[\"todoList\"].find(function (e) {\n    return e.id === id;\n  });\n\n  if (todoListRow) {\n    todoListRow.content = content;\n    return true;\n  }\n};\n\n//# sourceURL=webpack:///../server/models/todoList.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/todoList */ \"../server/controller/todoList.ts\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * 子路由:todolist;\n */\n\n\nvar router = koa_router__WEBPACK_IMPORTED_MODULE_1___default()();\nvar routers = router.get('/list', _controller_todoList__WEBPACK_IMPORTED_MODULE_0__[\"getTodoList\"]).get('/statusEnum', _controller_todoList__WEBPACK_IMPORTED_MODULE_0__[\"statusEnum\"]).post('/add', _controller_todoList__WEBPACK_IMPORTED_MODULE_0__[\"createList\"]).post('/removeList', _controller_todoList__WEBPACK_IMPORTED_MODULE_0__[\"removeList\"]).post('/updateStatus', _controller_todoList__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoListStatus\"]).post('/updateContent', _controller_todoList__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoListContent\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routers);\n\n//# sourceURL=webpack:///../server/route/todolist.ts?");

/***/ }),

/***/ "../server/schema/todoList.ts":
/*!************************************!*\
  !*** ../server/schema/todoList.ts ***!
  \************************************/
/*! exports provided: todoListEnumData, todoListEnum, todoListModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoListEnumData\", function() { return todoListEnumData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoListEnum\", function() { return todoListEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoListModel\", function() { return todoListModel; });\nvar _id = 0;\n/**\n * 0:开始\n * 1:正在进行\n * 2:结束`\n */\n\nvar todoListEnumData = ['未开始', '正在进行', '结束'];\nvar todoListEnum;\n\n(function (todoListEnum) {\n  todoListEnum[todoListEnum[\"START\"] = 0] = \"START\";\n  todoListEnum[todoListEnum[\"DOING\"] = 1] = \"DOING\";\n  todoListEnum[todoListEnum[\"DONE\"] = 2] = \"DONE\";\n})(todoListEnum || (todoListEnum = {}));\n/**\n *\n *\n * @param {*} content\n * @param {*} status\n * @returns {ITodoList}\n */\n\n\nvar todoListModel = function todoListModel(content) {\n  var id = _id++;\n  return {\n    id: id,\n    content: content,\n    status: todoListEnum.START\n  };\n};\n\n//# sourceURL=webpack:///../server/schema/todoList.ts?");

/***/ }),

/***/ "../server/utils/response.ts":
/*!***********************************!*\
  !*** ../server/utils/response.ts ***!
  \***********************************/
/*! exports provided: response, fail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"response\", function() { return response; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fail\", function() { return fail; });\n/**\n *\n *\n * @date 2019-05-05\n * @export\n * @param {Koa.Context} ctx\n * @param {Response} [result={}]\n * @param {boolean} [success=true]\n * @param {number} [status=200]\n */\nfunction response(ctx, result) {\n  var success = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var status = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 200;\n  ctx.body = {\n    success: success,\n    status: status,\n    result: result\n  };\n}\nfunction fail(ctx, result) {\n  var success = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var status = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;\n  ctx.body = {\n    success: success,\n    status: status,\n    result: result\n  };\n}\n\n//# sourceURL=webpack:///../server/utils/response.ts?");

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

/***/ "core-js/modules/es.array.find":
/*!************************************************!*\
  !*** external "core-js/modules/es.array.find" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.find\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.find%22?");

/***/ }),

/***/ "core-js/modules/es.array.find-index":
/*!******************************************************!*\
  !*** external "core-js/modules/es.array.find-index" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.find-index\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.find-index%22?");

/***/ }),

/***/ "core-js/modules/es.array.map":
/*!***********************************************!*\
  !*** external "core-js/modules/es.array.map" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.map\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.map%22?");

/***/ }),

/***/ "core-js/modules/es.array.splice":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.splice" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.splice\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.splice%22?");

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

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yup\");\n\n//# sourceURL=webpack:///external_%22yup%22?");

/***/ })

/******/ });