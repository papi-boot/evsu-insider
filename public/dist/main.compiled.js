/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _get; }
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__.default)(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _superPropBase; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popperGenerator": function() { return /* binding */ popperGenerator; },
/* harmony export */   "createPopper": function() { return /* binding */ createPopper; },
/* harmony export */   "detectOverflow": function() { return /* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__.default; }
/* harmony export */ });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(reference.contextElement) : [],
          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = (0,_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__.default)([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0,_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__.default)(modifiers);

          if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__.default)(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_7__.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__.default)(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__.default)(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__.default)(popper), state.options.strategy === 'fixed'),
          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__.default)(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__.default)(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ contains; }
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getBoundingClientRect; }
/* harmony export */ });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getClippingRect; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element) {
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__.default)(element)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__.default)((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__.default)((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_8__.default)(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__.default)(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__.default)(element) : element;

  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_11__.default)(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_12__.default)(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);
    accRect.right = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getCompositeRect; }
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__.default)(offsetParent);
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__.default)(elementOrVirtualElement);
  var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__.default)(documentElement)) {
      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_5__.default)(offsetParent);
    }

    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(offsetParent)) {
      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__.default)(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getComputedStyle; }
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getDocumentElement; }
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getDocumentRect; }
/* harmony export */ });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__.default)(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__.default)(element);
  var y = -winScroll.scrollTop;

  if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__.default)(body || html).direction === 'rtl') {
    x += (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getHTMLElementScroll; }
/* harmony export */ });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getLayoutRect; }
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__.default)(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getNodeName; }
/* harmony export */ });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getNodeScroll; }
/* harmony export */ });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__.default)(node);
  } else {
    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__.default)(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getOffsetParent; }
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");







function getTrueOffsetParent(element) {
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_2__.default)(element);

  while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(currentNode)) < 0) {
    var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_4__.default)(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_5__.default)(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) === 'html' || (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getParentNode; }
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__.default)(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getScrollParent; }
/* harmony export */ });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__.default)(node)) {
    return node;
  }

  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__.default)(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getViewportRect; }
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



function getViewportRect(element) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__.default)(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__.default)(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getWindow; }
/* harmony export */ });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getWindowScroll; }
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getWindowScrollBarX; }
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__.default)(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": function() { return /* binding */ isElement; },
/* harmony export */   "isHTMLElement": function() { return /* binding */ isHTMLElement; },
/* harmony export */   "isShadowRoot": function() { return /* binding */ isShadowRoot; }
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isScrollParent; }
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__.default)(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isTableElement; }
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ listScrollParents; }
/* harmony export */ });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_1__.default)(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__.default)(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__.default)(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "top": function() { return /* binding */ top; },
/* harmony export */   "bottom": function() { return /* binding */ bottom; },
/* harmony export */   "right": function() { return /* binding */ right; },
/* harmony export */   "left": function() { return /* binding */ left; },
/* harmony export */   "auto": function() { return /* binding */ auto; },
/* harmony export */   "basePlacements": function() { return /* binding */ basePlacements; },
/* harmony export */   "start": function() { return /* binding */ start; },
/* harmony export */   "end": function() { return /* binding */ end; },
/* harmony export */   "clippingParents": function() { return /* binding */ clippingParents; },
/* harmony export */   "viewport": function() { return /* binding */ viewport; },
/* harmony export */   "popper": function() { return /* binding */ popper; },
/* harmony export */   "reference": function() { return /* binding */ reference; },
/* harmony export */   "variationPlacements": function() { return /* binding */ variationPlacements; },
/* harmony export */   "placements": function() { return /* binding */ placements; },
/* harmony export */   "beforeRead": function() { return /* binding */ beforeRead; },
/* harmony export */   "read": function() { return /* binding */ read; },
/* harmony export */   "afterRead": function() { return /* binding */ afterRead; },
/* harmony export */   "beforeMain": function() { return /* binding */ beforeMain; },
/* harmony export */   "main": function() { return /* binding */ main; },
/* harmony export */   "afterMain": function() { return /* binding */ afterMain; },
/* harmony export */   "beforeWrite": function() { return /* binding */ beforeWrite; },
/* harmony export */   "write": function() { return /* binding */ write; },
/* harmony export */   "afterWrite": function() { return /* binding */ afterWrite; },
/* harmony export */   "modifierPhases": function() { return /* binding */ modifierPhases; }
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterMain": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterMain; },
/* harmony export */   "afterRead": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterRead; },
/* harmony export */   "afterWrite": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterWrite; },
/* harmony export */   "auto": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.auto; },
/* harmony export */   "basePlacements": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements; },
/* harmony export */   "beforeMain": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeMain; },
/* harmony export */   "beforeRead": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeRead; },
/* harmony export */   "beforeWrite": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeWrite; },
/* harmony export */   "bottom": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom; },
/* harmony export */   "clippingParents": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents; },
/* harmony export */   "end": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.end; },
/* harmony export */   "left": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.left; },
/* harmony export */   "main": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.main; },
/* harmony export */   "modifierPhases": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases; },
/* harmony export */   "placements": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements; },
/* harmony export */   "popper": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper; },
/* harmony export */   "read": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.read; },
/* harmony export */   "reference": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference; },
/* harmony export */   "right": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.right; },
/* harmony export */   "start": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.start; },
/* harmony export */   "top": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.top; },
/* harmony export */   "variationPlacements": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements; },
/* harmony export */   "viewport": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport; },
/* harmony export */   "write": function() { return /* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.write; },
/* harmony export */   "applyStyles": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.applyStyles; },
/* harmony export */   "arrow": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.arrow; },
/* harmony export */   "computeStyles": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.computeStyles; },
/* harmony export */   "eventListeners": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.eventListeners; },
/* harmony export */   "flip": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.flip; },
/* harmony export */   "hide": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.hide; },
/* harmony export */   "offset": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.offset; },
/* harmony export */   "popperOffsets": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.popperOffsets; },
/* harmony export */   "preventOverflow": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.preventOverflow; },
/* harmony export */   "popperGenerator": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.popperGenerator; },
/* harmony export */   "detectOverflow": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "createPopperBase": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.createPopper; },
/* harmony export */   "createPopper": function() { return /* reexport safe */ _popper_js__WEBPACK_IMPORTED_MODULE_4__.createPopper; },
/* harmony export */   "createPopperLite": function() { return /* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__.createPopper; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper.js */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__.default)(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__.default)(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(state.placement);
  var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__.default)(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__.default)(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__.default)(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_7__.default)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__.default)(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapToStyles": function() { return /* binding */ mapToStyles; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");






 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)((0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(x * dpr) / dpr) || 0,
    y: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)((0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.left;
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__.default)(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__.default)(popper)) {
      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__.default)(popper);

      if ((0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__.default)(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__.default)(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__.default)(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {
    return [];
  }

  var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(placement);
  return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement);

    var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(mainVariationSide);
    }

    var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__.default)(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__.default)(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStyles": function() { return /* reexport safe */ _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "arrow": function() { return /* reexport safe */ _arrow_js__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "computeStyles": function() { return /* reexport safe */ _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "eventListeners": function() { return /* reexport safe */ _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "flip": function() { return /* reexport safe */ _flip_js__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "hide": function() { return /* reexport safe */ _hide_js__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "offset": function() { return /* reexport safe */ _offset_js__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "popperOffsets": function() { return /* reexport safe */ _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "preventOverflow": function() { return /* reexport safe */ _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__.default; }
/* harmony export */ });
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");










/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distanceAndSkiddingToXY": function() { return /* binding */ distanceAndSkiddingToXY; }
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__.default)(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__.default)(state.placement);
  var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__.default)(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(basePlacement);
  var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__.default)(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__.default)(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__.default)();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__.default)(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(min, tetherMin) : min, offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;

      var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(_min, tetherMin) : _min, _offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": function() { return /* binding */ createPopper; },
/* harmony export */   "popperGenerator": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator; },
/* harmony export */   "defaultModifiers": function() { return /* binding */ defaultModifiers; },
/* harmony export */   "detectOverflow": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_5__.default; }
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.default, _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__.default, _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default, _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__.default];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": function() { return /* binding */ createPopper; },
/* harmony export */   "popperGenerator": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator; },
/* harmony export */   "defaultModifiers": function() { return /* binding */ defaultModifiers; },
/* harmony export */   "detectOverflow": function() { return /* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "createPopperLite": function() { return /* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper; },
/* harmony export */   "applyStyles": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles; },
/* harmony export */   "arrow": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow; },
/* harmony export */   "computeStyles": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles; },
/* harmony export */   "eventListeners": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners; },
/* harmony export */   "flip": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip; },
/* harmony export */   "hide": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide; },
/* harmony export */   "offset": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset; },
/* harmony export */   "popperOffsets": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets; },
/* harmony export */   "preventOverflow": function() { return /* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow; }
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");










var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.default, _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__.default, _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default, _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__.default, _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__.default, _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__.default, _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__.default, _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__.default, _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__.default];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ computeAutoPlacement; }
/* harmony export */ });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;
  var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {
    return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ computeOffsets; }
/* harmony export */ });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) : null;
  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ debounce; }
/* harmony export */ });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ detectOverflow; }
/* harmony export */ });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__.default)(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__.default)(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__.default)((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__.default)(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__.default)(referenceElement);
  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__.default)({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__.default)(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ expandToHashMap; }
/* harmony export */ });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ format; }
/* harmony export */ });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getAltAxis; }
/* harmony export */ });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getBasePlacement; }
/* harmony export */ });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getFreshSideObject; }
/* harmony export */ });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getMainAxisFromPlacement; }
/* harmony export */ });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getOppositePlacement; }
/* harmony export */ });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getOppositeVariationPlacement; }
/* harmony export */ });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getVariation; }
/* harmony export */ });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "max": function() { return /* binding */ max; },
/* harmony export */   "min": function() { return /* binding */ min; },
/* harmony export */   "round": function() { return /* binding */ round; }
/* harmony export */ });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mergeByName; }
/* harmony export */ });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mergePaddingObject; }
/* harmony export */ });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__.default)(), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ orderModifiers; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rectToClientRect; }
/* harmony export */ });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ uniqueBy; }
/* harmony export */ });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ validateModifiers; }
/* harmony export */ });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ within; }
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.max)(min, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(value, max));
}

/***/ }),

/***/ "./public/bootstrap/js/bootstrap.min.js":
/*!**********************************************!*\
  !*** ./public/bootstrap/js/bootstrap.min.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* module decorator */ module = __webpack_require__.hmd(module);











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*!
  * Bootstrap v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(exports)) && "undefined" != "object" ? module.exports = e(__webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js")) : "function" == typeof define && __webpack_require__.amdO ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(undefined, function (t) {
  "use strict";

  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (s) {
      if ("default" !== s) {
        var i = Object.getOwnPropertyDescriptor(t, s);
        Object.defineProperty(e, s, i.get ? i : {
          enumerable: !0,
          get: function get() {
            return t[s];
          }
        });
      }
    }), e.default = t, Object.freeze(e);
  }

  var s = e(t);

  var i = {
    find: function find(t) {
      var _ref;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref = []).concat.apply(_ref, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__.default)(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref2;

      return (_ref2 = []).concat.apply(_ref2, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__.default)(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var s = [];
      var i = t.parentNode;

      for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) {
        i.matches(e) && s.push(i), i = i.parentNode;
      }

      return s;
    },
    prev: function prev(t, e) {
      var s = t.previousElementSibling;

      for (; s;) {
        if (s.matches(e)) return [s];
        s = s.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var s = t.nextElementSibling;

      for (; s;) {
        if (s.matches(e)) return [s];
        s = s.nextElementSibling;
      }

      return [];
    }
  },
      n = function n(t) {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
      o = function o(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _s = t.getAttribute("href");

      if (!_s || !_s.includes("#") && !_s.startsWith(".")) return null;
      _s.includes("#") && !_s.startsWith("#") && (_s = "#" + _s.split("#")[1]), e = _s && "#" !== _s ? _s.trim() : null;
    }

    return e;
  },
      r = function r(t) {
    var e = o(t);
    return e && document.querySelector(e) ? e : null;
  },
      a = function a(t) {
    var e = o(t);
    return e ? document.querySelector(e) : null;
  },
      l = function l(t) {
    if (!t) return 0;

    var _window$getComputedSt = window.getComputedStyle(t),
        e = _window$getComputedSt.transitionDuration,
        s = _window$getComputedSt.transitionDelay;

    var i = Number.parseFloat(e),
        n = Number.parseFloat(s);
    return i || n ? (e = e.split(",")[0], s = s.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0;
  },
      c = function c(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      h = function h(t) {
    return !(!t || "object" != (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      d = function d(t) {
    return h(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? i.findOne(t) : null;
  },
      u = function u(t, e) {
    var s = !1;
    var i = e + 5;
    t.addEventListener("transitionend", function e() {
      s = !0, t.removeEventListener("transitionend", e);
    }), setTimeout(function () {
      s || c(t);
    }, i);
  },
      g = function g(t, e, s) {
    Object.keys(s).forEach(function (i) {
      var n = s[i],
          o = e[i],
          r = o && h(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
      var a;
      if (!new RegExp(n).test(r)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(i, "\" provided type \"").concat(r, "\" but expected type \"").concat(n, "\"."));
    });
  },
      f = function f(t) {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      var _e = getComputedStyle(t),
          _s2 = getComputedStyle(t.parentNode);

      return "none" !== _e.display && "none" !== _s2.display && "hidden" !== _e.visibility;
    }

    return !1;
  },
      p = function p(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      m = function m(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e2 = t.getRootNode();

      return _e2 instanceof ShadowRoot ? _e2 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? m(t.parentNode) : null;
  },
      _ = function _() {},
      b = function b(t) {
    return t.offsetHeight;
  },
      v = function v() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      y = function y() {
    return "rtl" === document.documentElement.dir;
  },
      w = function w(t) {
    var e;
    e = function e() {
      var e = v();

      if (e) {
        var _s3 = t.NAME,
            _i = e.fn[_s3];
        e.fn[_s3] = t.jQueryInterface, e.fn[_s3].Constructor = t, e.fn[_s3].noConflict = function () {
          return e.fn[_s3] = _i, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e();
  },
      E = function E(t) {
    "function" == typeof t && t();
  },
      T = new Map();

  var A = {
    set: function set(t, e, s) {
      T.has(t) || T.set(t, new Map());
      var i = T.get(t);
      i.has(e) || 0 === i.size ? i.set(e, s) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0], "."));
    },
    get: function get(t, e) {
      return T.has(t) && T.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!T.has(t)) return;
      var s = T.get(t);
      s.delete(e), 0 === s.size && T.delete(t);
    }
  };
  var k = /[^.]*(?=\..*)\.|.*/,
      L = /\..*/,
      C = /::\d+$/,
      D = {};
  var N = 1;
  var S = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      O = /^(mouseenter|mouseleave)/i,
      I = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function x(t, e) {
    return e && "".concat(e, "::").concat(N++) || t.uidEvent || N++;
  }

  function j(t) {
    var e = x(t);
    return t.uidEvent = e, D[e] = D[e] || {}, D[e];
  }

  function P(t, e) {
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var i = Object.keys(t);

    for (var _n = 0, _o = i.length; _n < _o; _n++) {
      var _o2 = t[i[_n]];
      if (_o2.originalHandler === e && _o2.delegationSelector === s) return _o2;
    }

    return null;
  }

  function M(t, e, s) {
    var i = "string" == typeof e,
        n = i ? s : e;
    var o = B(t);
    return I.has(o) || (o = t), [i, n, o];
  }

  function H(t, e, s, i, n) {
    if ("string" != typeof e || !t) return;

    if (s || (s = i, i = null), O.test(e)) {
      var _t2 = function _t2(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      i ? i = _t2(i) : s = _t2(s);
    }

    var _M = M(e, s, i),
        _M2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_M, 3),
        o = _M2[0],
        r = _M2[1],
        a = _M2[2],
        l = j(t),
        c = l[a] || (l[a] = {}),
        h = P(c, r, o ? s : null);

    if (h) return void (h.oneOff = h.oneOff && n);
    var d = x(r, e.replace(k, "")),
        u = o ? function (t, e, s) {
      return function i(n) {
        var o = t.querySelectorAll(e);

        for (var _r = n.target; _r && _r !== this; _r = _r.parentNode) {
          for (var _a = o.length; _a--;) {
            if (o[_a] === _r) return n.delegateTarget = _r, i.oneOff && $.off(t, n.type, e, s), s.apply(_r, [n]);
          }
        }

        return null;
      };
    }(t, s, i) : function (t, e) {
      return function s(i) {
        return i.delegateTarget = t, s.oneOff && $.off(t, i.type, e), e.apply(t, [i]);
      };
    }(t, s);
    u.delegationSelector = o ? s : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function R(t, e, s, i, n) {
    var o = P(e[s], i, n);
    o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
  }

  function B(t) {
    return t = t.replace(L, ""), S[t] || t;
  }

  var $ = {
    on: function on(t, e, s, i) {
      H(t, e, s, i, !1);
    },
    one: function one(t, e, s, i) {
      H(t, e, s, i, !0);
    },
    off: function off(t, e, s, i) {
      if ("string" != typeof e || !t) return;

      var _M3 = M(e, s, i),
          _M4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.default)(_M3, 3),
          n = _M4[0],
          o = _M4[1],
          r = _M4[2],
          a = r !== e,
          l = j(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void R(t, l, r, o, n ? s : null);
      }

      c && Object.keys(l).forEach(function (s) {
        !function (t, e, s, i) {
          var n = e[s] || {};
          Object.keys(n).forEach(function (o) {
            if (o.includes(i)) {
              var _i2 = n[o];
              R(t, e, s, _i2.originalHandler, _i2.delegationSelector);
            }
          });
        }(t, l, s, e.slice(1));
      });
      var h = l[r] || {};
      Object.keys(h).forEach(function (s) {
        var i = s.replace(C, "");

        if (!a || e.includes(i)) {
          var _e3 = h[s];
          R(t, l, r, _e3.originalHandler, _e3.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, s) {
      if ("string" != typeof e || !t) return null;
      var i = v(),
          n = B(e),
          o = e !== n,
          r = I.has(n);
      var a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && i && (a = i.Event(e, s), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== s && Object.keys(s).forEach(function (t) {
        Object.defineProperty(d, t, {
          get: function get() {
            return s[t];
          }
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }
  };

  var z = /*#__PURE__*/function () {
    function z(t) {
      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, z);

      (t = d(t)) && (this._element = t, A.set(this._element, this.constructor.DATA_KEY, this));
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(z, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        A.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        if (!s) return void E(t);
        var i = l(e);
        $.one(e, "transitionend", function () {
          return E(t);
        }), u(e, i);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return A.get(t, this.DATA_KEY);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.0.1";
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs." + this.NAME;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return "." + this.DATA_KEY;
      }
    }]);

    return z;
  }();

  var U = /*#__PURE__*/function (_z) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(U, _z);

    var _super = _createSuper(U);

    function U() {
      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, U);

      return _super.apply(this, arguments);
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(U, [{
      key: "close",
      value: function close(t) {
        var e = t ? this._getRootElement(t) : this._element,
            s = this._triggerCloseEvent(e);

        null === s || s.defaultPrevented || this._removeElement(e);
      }
    }, {
      key: "_getRootElement",
      value: function _getRootElement(t) {
        return a(t) || t.closest(".alert");
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(t) {
        return $.trigger(t, "close.bs.alert");
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(t) {
        var _this2 = this;

        t.classList.remove("show");
        var e = t.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement(t);
        }, t, e);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(t) {
        t.parentNode && t.parentNode.removeChild(t), $.trigger(t, "closed.bs.alert");
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.alert");
          e || (e = new U(this)), "close" === t && e[t](this);
        });
      }
    }, {
      key: "handleDismiss",
      value: function handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }]);

    return U;
  }(z);

  $.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', U.handleDismiss(new U())), w(U);

  var q = /*#__PURE__*/function (_z2) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(q, _z2);

    var _super2 = _createSuper(q);

    function q() {
      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, q);

      return _super2.apply(this, arguments);
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(q, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.button");
          e || (e = new q(this)), "toggle" === t && e[t]();
        });
      }
    }]);

    return q;
  }(z);

  function F(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function W(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  $.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    var s = A.get(e, "bs.button");
    s || (s = new q(e)), s.toggle();
  }), w(q);
  var K = {
    setDataAttribute: function setDataAttribute(t, e, s) {
      t.setAttribute("data-bs-" + W(e), s);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + W(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (s) {
        var i = s.replace(/^bs/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = F(t.dataset[s]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return F(t.getAttribute("data-bs-" + W(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      V = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      Q = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      X = "next",
      Y = "prev",
      G = "left",
      Z = "right";

  var J = /*#__PURE__*/function (_z3) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(J, _z3);

    var _super3 = _createSuper(J);

    function J(t, e) {
      var _this3;

      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, J);

      _this3 = _super3.call(this, t), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(e), _this3._indicatorsElement = i.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(J, [{
      key: "next",
      value: function next() {
        this._isSliding || this._slide(X);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && f(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._isSliding || this._slide(Y);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), i.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (c(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this4 = this;

        this._activeElement = i.findOne(".active.carousel-item", this._element);

        var e = this._getItemIndex(this._activeElement);

        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding) return void $.one(this._element, "slid.bs.carousel", function () {
          return _this4.to(t);
        });
        if (e === t) return this.pause(), void this.cycle();
        var s = t > e ? X : Y;

        this._slide(s, this._items[t]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread({}, V), t), g("carousel", t, Q), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? Z : G);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        this._config.keyboard && $.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), $.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var t = function t(_t3) {
          !_this6._pointerEvent || "pen" !== _t3.pointerType && "touch" !== _t3.pointerType ? _this6._pointerEvent || (_this6.touchStartX = _t3.touches[0].clientX) : _this6.touchStartX = _t3.clientX;
        },
            e = function e(t) {
          _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
        },
            s = function s(t) {
          !_this6._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (_this6.touchDeltaX = t.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
            return _this6.cycle(t);
          }, 500 + _this6._config.interval));
        };

        i.find(".carousel-item img", this._element).forEach(function (t) {
          $.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", function (e) {
          return t(e);
        }), $.on(this._element, "pointerup.bs.carousel", function (t) {
          return s(t);
        }), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", function (e) {
          return t(e);
        }), $.on(this._element, "touchmove.bs.carousel", function (t) {
          return e(t);
        }), $.on(this._element, "touchend.bs.carousel", function (t) {
          return s(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(Z)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(G)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? i.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var s = t === X,
            i = t === Y,
            n = this._getItemIndex(e),
            o = this._items.length - 1;

        if ((i && 0 === n || s && n === o) && !this._config.wrap) return e;
        var r = (n + (i ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r];
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var s = this._getItemIndex(t),
            n = this._getItemIndex(i.findOne(".active.carousel-item", this._element));

        return $.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: n,
          to: s
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e4 = i.findOne(".active", this._indicatorsElement);

          _e4.classList.remove("active"), _e4.removeAttribute("aria-current");

          var _s4 = i.find("[data-bs-target]", this._indicatorsElement);

          for (var _e5 = 0; _e5 < _s4.length; _e5++) {
            if (Number.parseInt(_s4[_e5].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              _s4[_e5].classList.add("active"), _s4[_e5].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || i.findOne(".active.carousel-item", this._element);
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this7 = this;

        var s = this._directionToOrder(t),
            n = i.findOne(".active.carousel-item", this._element),
            o = this._getItemIndex(n),
            r = e || this._getItemByOrder(s, n),
            a = this._getItemIndex(r),
            l = Boolean(this._interval),
            c = s === X,
            h = c ? "carousel-item-start" : "carousel-item-end",
            d = c ? "carousel-item-next" : "carousel-item-prev",
            u = this._orderToDirection(s);

        if (r && r.classList.contains("active")) return void (this._isSliding = !1);
        if (this._triggerSlideEvent(r, u).defaultPrevented) return;
        if (!n || !r) return;
        this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;

        var g = function g() {
          $.trigger(_this7._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: u,
            from: o,
            to: a
          });
        };

        if (this._element.classList.contains("slide")) {
          r.classList.add(d), b(r), n.classList.add(h), r.classList.add(h);

          var _t4 = function _t4() {
            r.classList.remove(h, d), r.classList.add("active"), n.classList.remove("active", d, h), _this7._isSliding = !1, setTimeout(g, 0);
          };

          this._queueCallback(_t4, n, !0);
        } else n.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, g();

        l && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [Z, G].includes(t) ? y() ? t === G ? Y : X : t === G ? X : Y : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [X, Y].includes(t) ? y() ? t === Y ? G : Z : t === Y ? Z : G : t;
      }
    }], [{
      key: "Default",
      get: function get() {
        return V;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var s = A.get(t, "bs.carousel"),
            i = _objectSpread(_objectSpread({}, V), K.getDataAttributes(t));

        "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(e) && (i = _objectSpread(_objectSpread({}, i), e));
        var n = "string" == typeof e ? e : i.slide;
        if (s || (s = new J(t, i)), "number" == typeof e) s.to(e);else if ("string" == typeof n) {
          if (void 0 === s[n]) throw new TypeError("No method named \"".concat(n, "\""));
          s[n]();
        } else i.interval && i.ride && (s.pause(), s.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          J.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = a(this);
        if (!e || !e.classList.contains("carousel")) return;

        var s = _objectSpread(_objectSpread({}, K.getDataAttributes(e)), K.getDataAttributes(this)),
            i = this.getAttribute("data-bs-slide-to");

        i && (s.interval = !1), J.carouselInterface(e, s), i && A.get(e, "bs.carousel").to(i), t.preventDefault();
      }
    }]);

    return J;
  }(z);

  $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", J.dataApiClickHandler), $.on(window, "load.bs.carousel.data-api", function () {
    var t = i.find('[data-bs-ride="carousel"]');

    for (var _e6 = 0, _s5 = t.length; _e6 < _s5; _e6++) {
      J.carouselInterface(t[_e6], A.get(t[_e6], "bs.carousel"));
    }
  }), w(J);
  var tt = {
    toggle: !0,
    parent: ""
  },
      et = {
    toggle: "boolean",
    parent: "(string|element)"
  };

  var st = /*#__PURE__*/function (_z4) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(st, _z4);

    var _super4 = _createSuper(st);

    function st(t, e) {
      var _this8;

      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, st);

      _this8 = _super4.call(this, t), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(e), _this8._triggerArray = i.find("[data-bs-toggle=\"collapse\"][href=\"#".concat(_this8._element.id, "\"],[data-bs-toggle=\"collapse\"][data-bs-target=\"#").concat(_this8._element.id, "\"]"));
      var s = i.find('[data-bs-toggle="collapse"]');

      for (var _t5 = 0, _e7 = s.length; _t5 < _e7; _t5++) {
        var _e8 = s[_t5],
            _n2 = r(_e8),
            _o3 = i.find(_n2).filter(function (t) {
          return t === _this8._element;
        });

        null !== _n2 && _o3.length && (_this8._selector = _n2, _this8._triggerArray.push(_e8));
      }

      _this8._parent = _this8._config.parent ? _this8._getParent() : null, _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._element, _this8._triggerArray), _this8._config.toggle && _this8.toggle();
      return _this8;
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(st, [{
      key: "toggle",
      value: function toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._element.classList.contains("show")) return;
        var t, e;
        this._parent && (t = i.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof _this9._config.parent ? t.getAttribute("data-bs-parent") === _this9._config.parent : t.classList.contains("collapse");
        }), 0 === t.length && (t = null));
        var s = i.findOne(this._selector);

        if (t) {
          var _i3 = t.find(function (t) {
            return s !== t;
          });

          if (e = _i3 ? A.get(_i3, "bs.collapse") : null, e && e._isTransitioning) return;
        }

        if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        t && t.forEach(function (t) {
          s !== t && st.collapseInterface(t, "hide"), e || A.set(t, "bs.collapse", null);
        });

        var n = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
          t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
        }), this.setTransitioning(!0);
        var o = "scroll" + (n[0].toUpperCase() + n.slice(1));
        this._queueCallback(function () {
          _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[n] = "", _this9.setTransitioning(!1), $.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[n] = this._element[o] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._element.classList.contains("show")) return;
        if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", b(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;
        if (e > 0) for (var _t6 = 0; _t6 < e; _t6++) {
          var _e9 = this._triggerArray[_t6],
              _s6 = a(_e9);

          _s6 && !_s6.classList.contains("show") && (_e9.classList.add("collapsed"), _e9.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(function () {
          _this10.setTransitioning(!1), _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), $.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(t) {
        this._isTransitioning = t;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, tt), t)).toggle = Boolean(t.toggle), g("collapse", t, et), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
    }, {
      key: "_getParent",
      value: function _getParent() {
        var _this11 = this;

        var t = this._config.parent;
        t = d(t);
        var e = "[data-bs-toggle=\"collapse\"][data-bs-parent=\"".concat(t, "\"]");
        return i.find(e, t).forEach(function (t) {
          var e = a(t);

          _this11._addAriaAndCollapsedClass(e, [t]);
        }), t;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        var s = t.classList.contains("show");
        e.forEach(function (t) {
          s ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", s);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return tt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "collapseInterface",
      value: function collapseInterface(t, e) {
        var s = A.get(t, "bs.collapse");

        var i = _objectSpread(_objectSpread(_objectSpread({}, tt), K.getDataAttributes(t)), "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(e) && e ? e : {});

        if (!s && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), s || (s = new st(t, i)), "string" == typeof e) {
          if (void 0 === s[e]) throw new TypeError("No method named \"".concat(e, "\""));
          s[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          st.collapseInterface(this, t);
        });
      }
    }]);

    return st;
  }(z);

  $.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = K.getDataAttributes(this),
        s = r(this);
    i.find(s).forEach(function (t) {
      var s = A.get(t, "bs.collapse");
      var i;
      s ? (null === s._parent && "string" == typeof e.parent && (s._config.parent = e.parent, s._parent = s._getParent()), i = "toggle") : i = e, st.collapseInterface(t, i);
    });
  }), w(st);
  var it = new RegExp("ArrowUp|ArrowDown|Escape"),
      nt = y() ? "top-end" : "top-start",
      ot = y() ? "top-start" : "top-end",
      rt = y() ? "bottom-end" : "bottom-start",
      at = y() ? "bottom-start" : "bottom-end",
      lt = y() ? "left-start" : "right-start",
      ct = y() ? "right-start" : "left-start",
      ht = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      dt = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var ut = /*#__PURE__*/function (_z5) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ut, _z5);

    var _super5 = _createSuper(ut);

    function ut(t, e) {
      var _this12;

      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, ut);

      _this12 = _super5.call(this, t), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar(), _this12._addEventListeners();
      return _this12;
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(ut, [{
      key: "toggle",
      value: function toggle() {
        p(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
      }
    }, {
      key: "show",
      value: function show() {
        if (p(this._element) || this._menu.classList.contains("show")) return;
        var t = ut.getParentFromElement(this._element),
            e = {
          relatedTarget: this._element
        };

        if (!$.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          var _ref3;

          if (this._inNavbar) K.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var _e10 = this._element;
            "parent" === this._config.reference ? _e10 = t : h(this._config.reference) ? _e10 = d(this._config.reference) : "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(this._config.reference) && (_e10 = this._config.reference);

            var _i4 = this._getPopperConfig(),
                _n3 = _i4.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });

            this._popper = s.createPopper(_e10, this._menu, _i4), _n3 && K.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref3 = []).concat.apply(_ref3, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__.default)(document.body.children)).forEach(function (t) {
            return $.on(t, "mouseover", _);
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), $.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (p(this._element) || !this._menu.classList.contains("show")) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(ut.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this13 = this;

        $.on(this._element, "click.bs.dropdown", function (t) {
          t.preventDefault(), _this13.toggle();
        });
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref4;

        $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref4 = []).concat.apply(_ref4, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__.default)(document.body.children)).forEach(function (t) {
          return $.off(t, "mouseover", _);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), K.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), K.getDataAttributes(this._element)), t), g("dropdown", t, this.constructor.DefaultType), "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t.reference) && !h(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return i.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return lt;
        if (t.classList.contains("dropstart")) return ct;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ot : nt : e ? at : rt;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this14 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this14._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(t) {
        var e = i.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(f);
        if (!e.length) return;
        var s = e.indexOf(t.target);
        "ArrowUp" === t.key && s > 0 && s--, "ArrowDown" === t.key && s < e.length - 1 && s++, s = -1 === s ? 0 : s, e[s].focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return ht;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return dt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "dropdown";
      }
    }, {
      key: "dropdownInterface",
      value: function dropdownInterface(t, e) {
        var s = A.get(t, "bs.dropdown");

        if (s || (s = new ut(t, "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(e) ? e : null)), "string" == typeof e) {
          if (void 0 === s[e]) throw new TypeError("No method named \"".concat(e, "\""));
          s[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          ut.dropdownInterface(this, t);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
        var e = i.find('[data-bs-toggle="dropdown"]');

        for (var _s7 = 0, _i5 = e.length; _s7 < _i5; _s7++) {
          var _i6 = A.get(e[_s7], "bs.dropdown");

          if (!_i6 || !1 === _i6._config.autoClose) continue;
          if (!_i6._element.classList.contains("show")) continue;
          var _n4 = {
            relatedTarget: _i6._element
          };

          if (t) {
            var _e11 = t.composedPath(),
                _s8 = _e11.includes(_i6._menu);

            if (_e11.includes(_i6._element) || "inside" === _i6._config.autoClose && !_s8 || "outside" === _i6._config.autoClose && _s8) continue;
            if (_i6._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            "click" === t.type && (_n4.clickEvent = t);
          }

          _i6._completeHide(_n4);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return a(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var _this15 = this;

        if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !it.test(t.key)) return;
        var e = this.classList.contains("show");
        if (!e && "Escape" === t.key) return;
        if (t.preventDefault(), t.stopPropagation(), p(this)) return;

        var s = function s() {
          return _this15.matches('[data-bs-toggle="dropdown"]') ? _this15 : i.prev(_this15, '[data-bs-toggle="dropdown"]')[0];
        };

        if ("Escape" === t.key) return s().focus(), void ut.clearMenus();
        e || "ArrowUp" !== t.key && "ArrowDown" !== t.key ? e && "Space" !== t.key ? ut.getInstance(s())._selectMenuItem(t) : ut.clearMenus() : s().click();
      }
    }]);

    return ut;
  }(z);

  $.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', ut.dataApiKeydownHandler), $.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", ut.dataApiKeydownHandler), $.on(document, "click.bs.dropdown.data-api", ut.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", ut.clearMenus), $.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), ut.dropdownInterface(this);
  }), w(ut);

  var gt = function gt() {
    var t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  },
      ft = function ft() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gt();
    pt(), mt("body", "paddingRight", function (e) {
      return e + t;
    }), mt(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
      return e + t;
    }), mt(".sticky-top", "marginRight", function (e) {
      return e - t;
    });
  },
      pt = function pt() {
    var t = document.body.style.overflow;
    t && K.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden";
  },
      mt = function mt(t, e, s) {
    var n = gt();
    i.find(t).forEach(function (t) {
      if (t !== document.body && window.innerWidth > t.clientWidth + n) return;
      var i = t.style[e],
          o = window.getComputedStyle(t)[e];
      K.setDataAttribute(t, e, i), t.style[e] = s(Number.parseFloat(o)) + "px";
    });
  },
      _t = function _t() {
    bt("body", "overflow"), bt("body", "paddingRight"), bt(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), bt(".sticky-top", "marginRight");
  },
      bt = function bt(t, e) {
    i.find(t).forEach(function (t) {
      var s = K.getDataAttribute(t, e);
      void 0 === s ? t.style.removeProperty(e) : (K.removeDataAttribute(t, e), t.style[e] = s);
    });
  },
      vt = {
    isVisible: !0,
    isAnimated: !1,
    rootElement: document.body,
    clickCallback: null
  },
      yt = {
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "element",
    clickCallback: "(function|null)"
  };

  var wt = /*#__PURE__*/function () {
    function wt(t) {
      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, wt);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(wt, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && b(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
          E(t);
        })) : E(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this16 = this;

        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
          _this16.dispose(), E(t);
        })) : E(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t7 = document.createElement("div");

          _t7.className = "modal-backdrop", this._config.isAnimated && _t7.classList.add("fade"), this._element = _t7;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, vt), "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t) ? t : {})).rootElement = t.rootElement || document.body, g("backdrop", t, yt), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this17 = this;

        this._isAppended || (this._config.rootElement.appendChild(this._getElement()), $.on(this._getElement(), "mousedown.bs.backdrop", function () {
          E(_this17._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && ($.off(this._element, "mousedown.bs.backdrop"), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        if (!this._config.isAnimated) return void E(t);
        var e = l(this._getElement());
        $.one(this._getElement(), "transitionend", function () {
          return E(t);
        }), u(this._getElement(), e);
      }
    }]);

    return wt;
  }();

  var Et = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      Tt = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var At = /*#__PURE__*/function (_z6) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(At, _z6);

    var _super6 = _createSuper(At);

    function At(t, e) {
      var _this18;

      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, At);

      _this18 = _super6.call(this, t), _this18._config = _this18._getConfig(e), _this18._dialog = i.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1;
      return _this18;
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(At, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this19 = this;

        if (this._isShown || this._isTransitioning) return;
        this._isAnimated() && (this._isTransitioning = !0);
        var e = $.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        });
        this._isShown || e.defaultPrevented || (this._isShown = !0, ft(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return _this19.hide(t);
        }), $.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          $.one(_this19._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this19._element && (_this19._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this19._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this20 = this;

        if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
        if ($.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var e = this._isAnimated();

        e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), $.off(this._element, "click.dismiss.bs.modal"), $.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, e);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return $.off(t, ".bs.modal");
        }), this._backdrop.dispose(), (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(At.prototype), "dispose", this).call(this), $.off(document, "focusin.bs.modal");
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new wt({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Et), K.getDataAttributes(this._element)), t), g("modal", t, Tt), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this21 = this;

        var e = this._isAnimated(),
            s = i.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, s && (s.scrollTop = 0), e && b(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(function () {
          _this21._config.focus && _this21._element.focus(), _this21._isTransitioning = !1, $.trigger(_this21._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, e);
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this22 = this;

        $.off(document, "focusin.bs.modal"), $.on(document, "focusin.bs.modal", function (t) {
          document === t.target || _this22._element === t.target || _this22._element.contains(t.target) || _this22._element.focus();
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this23 = this;

        this._isShown ? $.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this23._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this23.hide()) : _this23._config.keyboard || "Escape" !== t.key || _this23._triggerBackdropTransition();
        }) : $.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this24 = this;

        this._isShown ? $.on(window, "resize.bs.modal", function () {
          return _this24._adjustDialog();
        }) : $.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this25 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove("modal-open"), _this25._resetAdjustments(), _t(), $.trigger(_this25._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this26 = this;

        $.on(this._element, "click.dismiss.bs.modal", function (t) {
          _this26._ignoreBackdropClick ? _this26._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this26._config.backdrop ? _this26.hide() : "static" === _this26._config.backdrop && _this26._triggerBackdropTransition());
        }), this._backdrop.show(t);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this27 = this;

        if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
        var e = l(this._dialog);
        $.off(this._element, "transitionend"), $.one(this._element, "transitionend", function () {
          _this27._element.classList.remove("modal-static"), t || ($.one(_this27._element, "transitionend", function () {
            _this27._element.style.overflowY = "";
          }), u(_this27._element, e));
        }), u(this._element, e), this._element.focus();
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = gt(),
            s = e > 0;
        (!s && t && !y() || s && !t && y()) && (this._element.style.paddingLeft = e + "px"), (s && !t && !y() || !s && t && y()) && (this._element.style.paddingRight = e + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Et;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var s = At.getInstance(this) || new At(this, "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === s[t]) throw new TypeError("No method named \"".concat(t, "\""));
            s[t](e);
          }
        });
      }
    }]);

    return At;
  }(z);

  $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this28 = this;

    var e = a(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), $.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || $.one(e, "hidden.bs.modal", function () {
        f(_this28) && _this28.focus();
      });
    }), (At.getInstance(e) || new At(e)).toggle(this);
  }), w(At);
  var kt = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Lt = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Ct = /*#__PURE__*/function (_z7) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Ct, _z7);

    var _super7 = _createSuper(Ct);

    function Ct(t, e) {
      var _this29;

      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, Ct);

      _this29 = _super7.call(this, t), _this29._config = _this29._getConfig(e), _this29._isShown = !1, _this29._backdrop = _this29._initializeBackDrop(), _this29._addEventListeners();
      return _this29;
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(Ct, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this30 = this;

        this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (ft(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
          $.trigger(_this30._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this31 = this;

        this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || ($.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
          _this31._element.setAttribute("aria-hidden", !0), _this31._element.removeAttribute("aria-modal"), _this31._element.removeAttribute("role"), _this31._element.style.visibility = "hidden", _this31._config.scroll || _t(), $.trigger(_this31._element, "hidden.bs.offcanvas");
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Ct.prototype), "dispose", this).call(this), $.off(document, "focusin.bs.offcanvas");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, kt), K.getDataAttributes(this._element)), "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t) ? t : {}), g("offcanvas", t, Lt), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this32 = this;

        return new wt({
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this32.hide();
          }
        });
      }
    }, {
      key: "_enforceFocusOnElement",
      value: function _enforceFocusOnElement(t) {
        $.off(document, "focusin.bs.offcanvas"), $.on(document, "focusin.bs.offcanvas", function (e) {
          document === e.target || t === e.target || t.contains(e.target) || t.focus();
        }), t.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this33 = this;

        $.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', function () {
          return _this33.hide();
        }), $.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this33._config.keyboard && "Escape" === t.key && _this33.hide();
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "Default",
      get: function get() {
        return kt;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.offcanvas") || new Ct(this, "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Ct;
  }(z);

  $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this34 = this;

    var e = a(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this)) return;
    $.one(e, "hidden.bs.offcanvas", function () {
      f(_this34) && _this34.focus();
    });
    var s = i.findOne(".offcanvas.show");
    s && s !== e && Ct.getInstance(s).hide(), (A.get(e, "bs.offcanvas") || new Ct(e)).toggle(this);
  }), $.on(window, "load.bs.offcanvas.data-api", function () {
    i.find(".offcanvas.show").forEach(function (t) {
      return (A.get(t, "bs.offcanvas") || new Ct(t)).show();
    });
  }), w(Ct);

  var Dt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Nt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      St = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Ot = function Ot(t, e) {
    var s = t.nodeName.toLowerCase();
    if (e.includes(s)) return !Dt.has(s) || Boolean(Nt.test(t.nodeValue) || St.test(t.nodeValue));
    var i = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t8 = 0, _e12 = i.length; _t8 < _e12; _t8++) {
      if (i[_t8].test(s)) return !0;
    }

    return !1;
  };

  function It(t, e, s) {
    var _ref5;

    if (!t.length) return t;
    if (s && "function" == typeof s) return s(t);

    var i = new window.DOMParser().parseFromString(t, "text/html"),
        n = Object.keys(e),
        o = (_ref5 = []).concat.apply(_ref5, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__.default)(i.body.querySelectorAll("*")));

    var _loop = function _loop(_t9, _s9) {
      var _ref6;

      var s = o[_t9],
          i = s.nodeName.toLowerCase();

      if (!n.includes(i)) {
        s.parentNode.removeChild(s);
        return "continue";
      }

      var r = (_ref6 = []).concat.apply(_ref6, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__.default)(s.attributes)),
          a = [].concat(e["*"] || [], e[i] || []);

      r.forEach(function (t) {
        Ot(t, a) || s.removeAttribute(t.nodeName);
      });
    };

    for (var _t9 = 0, _s9 = o.length; _t9 < _s9; _t9++) {
      var _ret = _loop(_t9, _s9);

      if (_ret === "continue") continue;
    }

    return i.body.innerHTML;
  }

  var xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      jt = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Pt = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      Mt = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: y() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: y() ? "right" : "left"
  },
      Ht = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      Rt = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  };

  var Bt = /*#__PURE__*/function (_z8) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Bt, _z8);

    var _super8 = _createSuper(Bt);

    function Bt(t, e) {
      var _this35;

      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, Bt);

      if (void 0 === s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this35 = _super8.call(this, t), _this35._isEnabled = !0, _this35._timeout = 0, _this35._hoverState = "", _this35._activeTrigger = {}, _this35._popper = null, _this35._config = _this35._getConfig(e), _this35.tip = null, _this35._setListeners();
      return _this35;
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(Bt, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e13 = this._initializeOnDelegatedTarget(t);

          _e13._activeTrigger.click = !_e13._activeTrigger.click, _e13._isWithActiveTrigger() ? _e13._enter(null, _e13) : _e13._leave(null, _e13);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), $.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._popper && this._popper.destroy(), (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Bt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _o$classList,
            _ref7,
            _this36 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = $.trigger(this._element, this.constructor.Event.SHOW),
            e = m(this._element),
            i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
        if (t.defaultPrevented || !i) return;
        var o = this.getTipElement(),
            r = n(this.constructor.NAME);
        o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this._config.animation && o.classList.add("fade");

        var a = "function" == typeof this._config.placement ? this._config.placement.call(this, o, this._element) : this._config.placement,
            l = this._getAttachment(a);

        this._addAttachmentClass(l);

        var c = this._config.container;
        A.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (c.appendChild(o), $.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = s.createPopper(this._element, o, this._getPopperConfig(l)), o.classList.add("show");
        var h = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
        h && (_o$classList = o.classList).add.apply(_o$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__.default)(h.split(" "))), "ontouchstart" in document.documentElement && (_ref7 = []).concat.apply(_ref7, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__.default)(document.body.children)).forEach(function (t) {
          $.on(t, "mouseover", _);
        });
        var d = this.tip.classList.contains("fade");

        this._queueCallback(function () {
          var t = _this36._hoverState;
          _this36._hoverState = null, $.trigger(_this36._element, _this36.constructor.Event.SHOWN), "out" === t && _this36._leave(null, _this36);
        }, this.tip, d);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref8,
            _this37 = this;

        if (!this._popper) return;
        var t = this.getTipElement();
        if ($.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref8 = []).concat.apply(_ref8, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__.default)(document.body.children)).forEach(function (t) {
          return $.off(t, "mouseover", _);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains("fade");
        this._queueCallback(function () {
          _this37._isWithActiveTrigger() || ("show" !== _this37._hoverState && t.parentNode && t.parentNode.removeChild(t), _this37._cleanTipClass(), _this37._element.removeAttribute("aria-describedby"), $.trigger(_this37._element, _this37.constructor.Event.HIDDEN), _this37._popper && (_this37._popper.destroy(), _this37._popper = null));
        }, this.tip, e), this._hoverState = "";
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();
        this.setElementContent(i.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show");
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return h(e) ? (e = d(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = It(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title");

        return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t;
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        var s = this.constructor.DATA_KEY;
        return (e = e || A.get(t.delegateTarget, s)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), A.set(t.delegateTarget, s, e)), e;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this38 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this38._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this39 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function fn(t) {
              return _this39._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this39._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Mt[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this40 = this;

        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) $.on(_this40._element, _this40.constructor.Event.CLICK, _this40._config.selector, function (t) {
            return _this40.toggle(t);
          });else if ("manual" !== t) {
            var _e14 = "hover" === t ? _this40.constructor.Event.MOUSEENTER : _this40.constructor.Event.FOCUSIN,
                _s10 = "hover" === t ? _this40.constructor.Event.MOUSELEAVE : _this40.constructor.Event.FOCUSOUT;

            $.on(_this40._element, _e14, _this40._config.selector, function (t) {
              return _this40._enter(t);
            }), $.on(_this40._element, _s10, _this40._config.selector, function (t) {
              return _this40._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this40._element && _this40.hide();
        }, $.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e._config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e._config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t10 in this._activeTrigger) {
          if (this._activeTrigger[_t10]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = K.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          jt.has(t) && delete e[t];
        }), (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), e), "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t) && t ? t : {})).container = !1 === t.container ? document.body : d(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), g("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = It(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        if (this._config) for (var _e15 in this._config) {
          this.constructor.Default[_e15] !== this._config[_e15] && (t[_e15] = this._config[_e15]);
        }
        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(xt);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ht;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Rt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Pt;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.tooltip");
          var s = "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t) && t;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Bt(this, s)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Bt;
  }(z);

  w(Bt);

  var $t = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      zt = _objectSpread(_objectSpread({}, Bt.Default), {}, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ut = _objectSpread(_objectSpread({}, Bt.DefaultType), {}, {
    content: "(string|element|function)"
  }),
      qt = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  var Ft = /*#__PURE__*/function (_Bt) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Ft, _Bt);

    var _super9 = _createSuper(Ft);

    function Ft() {
      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, Ft);

      return _super9.apply(this, arguments);
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(Ft, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();
        this.setElementContent(i.findOne(".popover-header", t), this.getTitle());

        var e = this._getContent();

        "function" == typeof e && (e = e.call(this._element)), this.setElementContent(i.findOne(".popover-body", t), e), t.classList.remove("fade", "show");
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._element.getAttribute("data-bs-content") || this._config.content;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match($t);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return zt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return qt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ut;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.popover");
          var s = "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t) ? t : null;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Ft(this, s), A.set(this, "bs.popover", e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Ft;
  }(Bt);

  w(Ft);
  var Wt = {
    offset: 10,
    method: "auto",
    target: ""
  },
      Kt = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  };

  var Vt = /*#__PURE__*/function (_z9) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Vt, _z9);

    var _super10 = _createSuper(Vt);

    function Vt(t, e) {
      var _this41;

      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, Vt);

      _this41 = _super10.call(this, t), _this41._scrollElement = "BODY" === _this41._element.tagName ? window : _this41._element, _this41._config = _this41._getConfig(e), _this41._selector = "".concat(_this41._config.target, " .nav-link, ").concat(_this41._config.target, " .list-group-item, ").concat(_this41._config.target, " .dropdown-item"), _this41._offsets = [], _this41._targets = [], _this41._activeTarget = null, _this41._scrollHeight = 0, $.on(_this41._scrollElement, "scroll.bs.scrollspy", function () {
        return _this41._process();
      }), _this41.refresh(), _this41._process();
      return _this41;
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(Vt, [{
      key: "refresh",
      value: function refresh() {
        var _this42 = this;

        var t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            e = "auto" === this._config.method ? t : this._config.method,
            s = "position" === e ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), i.find(this._selector).map(function (t) {
          var n = r(t),
              o = n ? i.findOne(n) : null;

          if (o) {
            var _t11 = o.getBoundingClientRect();

            if (_t11.width || _t11.height) return [K[e](o).top + s, n];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this42._offsets.push(t[0]), _this42._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        $.off(this._scrollElement, ".bs.scrollspy"), (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Vt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("string" != typeof (t = _objectSpread(_objectSpread(_objectSpread({}, Wt), K.getDataAttributes(this._element)), "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t) && t ? t : {})).target && h(t.target)) {
          var _e16 = t.target.id;
          _e16 || (_e16 = n("scrollspy"), t.target.id = _e16), t.target = "#" + _e16;
        }

        return g("scrollspy", t, Kt), t;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            s = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= s) {
          var _t12 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t12 && this._activate(_t12);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e17 = this._offsets.length; _e17--;) {
            this._activeTarget !== this._targets[_e17] && t >= this._offsets[_e17] && (void 0 === this._offsets[_e17 + 1] || t < this._offsets[_e17 + 1]) && this._activate(this._targets[_e17]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(t) {
        this._activeTarget = t, this._clear();

        var e = this._selector.split(",").map(function (e) {
          return "".concat(e, "[data-bs-target=\"").concat(t, "\"],").concat(e, "[href=\"").concat(t, "\"]");
        }),
            s = i.findOne(e.join(","));

        s.classList.contains("dropdown-item") ? (i.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add("active"), s.classList.add("active")) : (s.classList.add("active"), i.parents(s, ".nav, .list-group").forEach(function (t) {
          i.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), i.prev(t, ".nav-item").forEach(function (t) {
            i.children(t, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        })), $.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        i.find(this._selector).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return Wt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Vt.getInstance(this) || new Vt(this, "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Vt;
  }(z);

  $.on(window, "load.bs.scrollspy.data-api", function () {
    i.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new Vt(t);
    });
  }), w(Vt);

  var Qt = /*#__PURE__*/function (_z10) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Qt, _z10);

    var _super11 = _createSuper(Qt);

    function Qt() {
      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, Qt);

      return _super11.apply(this, arguments);
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(Qt, [{
      key: "show",
      value: function show() {
        var _this43 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
        var t;

        var e = a(this._element),
            s = this._element.closest(".nav, .list-group");

        if (s) {
          var _e18 = "UL" === s.nodeName || "OL" === s.nodeName ? ":scope > li > .active" : ".active";

          t = i.find(_e18, s), t = t[t.length - 1];
        }

        var n = t ? $.trigger(t, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if ($.trigger(this._element, "show.bs.tab", {
          relatedTarget: t
        }).defaultPrevented || null !== n && n.defaultPrevented) return;

        this._activate(this._element, s);

        var o = function o() {
          $.trigger(t, "hidden.bs.tab", {
            relatedTarget: _this43._element
          }), $.trigger(_this43._element, "shown.bs.tab", {
            relatedTarget: t
          });
        };

        e ? this._activate(e, e.parentNode, o) : o();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, s) {
        var _this44 = this;

        var n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.children(e, ".active") : i.find(":scope > li > .active", e))[0],
            o = s && n && n.classList.contains("fade"),
            r = function r() {
          return _this44._transitionComplete(t, n, s);
        };

        n && o ? (n.classList.remove("show"), this._queueCallback(r, t, !0)) : r();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, s) {
        if (e) {
          e.classList.remove("active");

          var _t13 = i.findOne(":scope > .dropdown-menu .active", e.parentNode);

          _t13 && _t13.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }

        t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), b(t), t.classList.contains("fade") && t.classList.add("show");
        var n = t.parentNode;

        if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
          var _e19 = t.closest(".dropdown");

          _e19 && i.find(".dropdown-toggle", _e19).forEach(function (t) {
            return t.classList.add("active");
          }), t.setAttribute("aria-expanded", !0);
        }

        s && s();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.tab") || new Qt(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Qt;
  }(z);

  $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this) || (A.get(this, "bs.tab") || new Qt(this)).show();
  }), w(Qt);
  var Xt = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      Yt = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var Gt = /*#__PURE__*/function (_z11) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Gt, _z11);

    var _super12 = _createSuper(Gt);

    function Gt(t, e) {
      var _this45;

      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, Gt);

      _this45 = _super12.call(this, t), _this45._config = _this45._getConfig(e), _this45._timeout = null, _this45._hasMouseInteraction = !1, _this45._hasKeyboardInteraction = !1, _this45._setListeners();
      return _this45;
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(Gt, [{
      key: "show",
      value: function show() {
        var _this46 = this;

        $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), b(this._element), this._element.classList.add("showing"), this._queueCallback(function () {
          _this46._element.classList.remove("showing"), _this46._element.classList.add("show"), $.trigger(_this46._element, "shown.bs.toast"), _this46._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this47 = this;

        this._element.classList.contains("show") && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(function () {
          _this47._element.classList.add("hide"), $.trigger(_this47._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Gt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Yt), K.getDataAttributes(this._element)), "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t) && t ? t : {}), g("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this48 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this48.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var s = t.relatedTarget;
        this._element === s || this._element.contains(s) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this49 = this;

        $.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
          return _this49.hide();
        }), $.on(this._element, "mouseover.bs.toast", function (t) {
          return _this49._onInteraction(t, !0);
        }), $.on(this._element, "mouseout.bs.toast", function (t) {
          return _this49._onInteraction(t, !1);
        }), $.on(this._element, "focusin.bs.toast", function (t) {
          return _this49._onInteraction(t, !0);
        }), $.on(this._element, "focusout.bs.toast", function (t) {
          return _this49._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "DefaultType",
      get: function get() {
        return Xt;
      }
    }, {
      key: "Default",
      get: function get() {
        return Yt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.toast");

          if (e || (e = new Gt(this, "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.default)(t) && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Gt;
  }(z);

  return w(Gt), {
    Alert: U,
    Button: q,
    Carousel: J,
    Collapse: st,
    Dropdown: ut,
    Modal: At,
    Offcanvas: Ct,
    Popover: Ft,
    ScrollSpy: Vt,
    Tab: Qt,
    Toast: Gt,
    Tooltip: Bt
  };
});

/***/ }),

/***/ "./public/js/image-load.js":
/*!*********************************!*\
  !*** ./public/js/image-load.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_logo_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo/logo.png */ "./public/assets/logo/logo.png");

window.addEventListener("DOMContentLoaded", function () {
  var logo = document.querySelectorAll(".logo");
  logo.forEach(function (item) {
    return item.src = _assets_logo_logo_png__WEBPACK_IMPORTED_MODULE_0__.default;
  });
});

/***/ }),

/***/ "./public/js/login.js":
/*!****************************!*\
  !*** ./public/js/login.js ***!
  \****************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", function () {
  var loadingSignIn = document.querySelector(".loading-container");
  var btnSignIn = document.querySelector(".btn__sign-in");
  btnSignIn.addEventListener("click", function (e) {
    loadingSignIn.classList.remove("d-none");
  });
});

/***/ }),

/***/ "./public/js/navburger.anim.js":
/*!*************************************!*\
  !*** ./public/js/navburger.anim.js ***!
  \*************************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", function () {
  var navToggler = document.querySelector(".burger-toggler");
  var navbarContainer = document.querySelector(".--nav-list-container");
  var navIsOpen = false;

  if (navToggler) {
    navToggler.addEventListener("click", function () {
      if (!navIsOpen) {
        navToggler.classList.add("open");
        navbarContainer.classList.add("open-navbar");
        navIsOpen = true;
      } else {
        navToggler.classList.remove("open");
        navbarContainer.classList.remove("open-navbar");
        navIsOpen = false;
      }
    });
  }
});

/***/ }),

/***/ "./public/js/option_post_toggle.js":
/*!*****************************************!*\
  !*** ./public/js/option_post_toggle.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


window.addEventListener("DOMContentLoaded", function () {
  var toggleOptionBtn = document.querySelectorAll(".pin__post");
  var optionContainer = document.querySelectorAll(".option-container"); //for delete dialog

  var deleteOptionBtn = document.querySelectorAll(".delete__option-btn");
  var deleteDialog = document.querySelectorAll(".custom__delete-dialog");
  var deleteDialogCancel = document.querySelectorAll(".custom__dialog-btn-cancel");
  var deleteDialogConfirm = document.querySelectorAll(".custom__dialog-btn-confirm");

  var _loop = function _loop(i) {
    var optionIsOpen = false;
    toggleOptionBtn[i].addEventListener("click", function (e) {
      if (!optionIsOpen) {
        optionContainer[i].classList.remove("d-none");
        optionIsOpen = true;
      } else {
        optionContainer[i].classList.add("d-none");
        optionIsOpen = false;
      }

      toggleOptions(e, toggleOptionBtn[i].dataset.postId);
    });
  };

  for (var i = 0; i < toggleOptionBtn.length; i++) {
    _loop(i);
  }

  var toggleOptions = function toggleOptions(e) {
    Array.from(toggleOptionBtn).indexOf(e.target) + 1;
  }; //dialog delete


  var _loop2 = function _loop2(_i) {
    deleteOptionBtn[_i].addEventListener("click", function (e) {
      deleteDialog[_i].classList.remove("d-none");

      deletePost(e);
    });

    deleteDialogCancel[_i].addEventListener("click", function (e) {
      deleteDialog[_i].classList.add("d-none");

      closeDialog(e);
    });

    deleteDialogConfirm[_i].addEventListener("click", function (e) {
      confirmDeletePost(e, deleteDialogConfirm[_i].dataset.postId);
    });
  };

  for (var _i = 0; _i < deleteOptionBtn.length; _i++) {
    _loop2(_i);
  }

  var deletePost = function deletePost(e) {
    Array.from(deleteOptionBtn).indexOf(e.target) + 1;
  }; //closing dialog


  var closeDialog = function closeDialog(e) {
    Array.from(deleteDialogCancel).indexOf(e.target) + 1;
  }; //Delete post/answer


  var confirmDeletePost = function confirmDeletePost(e, dataPostId) {
    Array.from(deleteDialogConfirm).indexOf(e.target) + 1;

    var deleteOnePost = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var response, data, message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("/evsu-insider/post-options/".concat(dataPostId), {
                  method: "DELETE",
                  cache: "no-cache",
                  mode: "cors"
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                data = _context.sent;

                if (!response.ok) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", data);

              case 11:
                message = {
                  error: "Something went wrong on deleting the content."
                };
                return _context.abrupt("return", message);

              case 13:
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
      }));

      return function deleteOnePost() {
        return _ref.apply(this, arguments);
      };
    }(); //DELETE REQUEST PROMISE


    deleteOnePost().then(function (res) {
      window.location.href = res.url;
    }).catch(function (err) {
      return console.error(err);
    });
  };
});

/***/ }),

/***/ "./public/js/options_post.js":
/*!***********************************!*\
  !*** ./public/js/options_post.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


window.addEventListener("DOMContentLoaded", function () {
  var deleteButton = document.querySelector(".btn__delete-answer");
  var dataPostId_delete = deleteButton.dataset.postId;
  var loadingSpinner = document.querySelectorAll(".loading-spinner"); // Update form

  var updateForm = document.querySelector(".update__form");
  var updateTitle = document.querySelector(".update__title");
  var updateTag = document.querySelector(".update__tag");
  var updateBody = document.querySelector(".update__body");
  var updateBtn = document.querySelector(".btn__update-answer");
  var dataPostId_update = updateBtn.dataset.postId; //click event to trigger delete request

  deleteButton.addEventListener("click", function () {
    //send Delete Http Request
    loadingSpinner.forEach(function (item) {
      return item.classList.remove("d-none");
    });

    var deleteOnePost = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var response, data, message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("/evsu-insider/post-options/".concat(dataPostId_delete), {
                  method: "DELETE",
                  cache: "no-cache",
                  mode: "cors"
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                data = _context.sent;

                if (!response.ok) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", data);

              case 11:
                message = {
                  error: "Something went wrong on deleting the content."
                };
                return _context.abrupt("return", message);

              case 13:
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
      }));

      return function deleteOnePost() {
        return _ref.apply(this, arguments);
      };
    }(); //DELETE REQUEST PROMISE


    deleteOnePost().then(function (res) {
      window.location.href = res.url;
    }).catch(function (err) {
      return console.error(err);
    });
  }); //click event to trigger put request

  updateForm.addEventListener("submit", function (e) {
    e.preventDefault();
    loadingSpinner.forEach(function (item) {
      return item.classList.remove("d-none");
    });
    var postUpdatedContent = {
      post_title: updateTitle.value,
      post_tag: updateTag.value,
      // eslint-disable-next-line no-undef
      post_body: tinymce.get("shareAnswerForm").getContent()
    };

    var updateOnePost = /*#__PURE__*/function () {
      var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        var response, data, message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch("/evsu-insider/post-options/".concat(dataPostId_update), {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  cache: "no-cache",
                  mode: "cors",
                  body: JSON.stringify(postUpdatedContent)
                });

              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.json();

              case 6:
                data = _context2.sent;

                if (!response.ok) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", data);

              case 11:
                message = {
                  message: "Something went wrong when attempted to update the answer."
                };
                return _context2.abrupt("return", message);

              case 13:
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 15]]);
      }));

      return function updateOnePost() {
        return _ref2.apply(this, arguments);
      };
    }(); //UPDATE REQUEST PROMISE


    updateOnePost().then(function (res) {
      window.location.href = res.url;
    }).catch(function (err) {
      return console.error(err);
    });
  });
});

/***/ }),

/***/ "./public/js/quote.js":
/*!****************************!*\
  !*** ./public/js/quote.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


window.addEventListener("DOMContentLoaded", function () {
  var quoteText = document.querySelector(".quote__text");
  var quoteAuthor = document.querySelector(".quote__author");

  var randomQuote = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response, data, message;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://goquotes-api.herokuapp.com/api/v1/all?type=tag&val=motivational", {
                method: "GET"
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;

              if (!response.ok) {
                _context.next = 12;
                break;
              }

              _context.next = 9;
              return data;

            case 9:
              return _context.abrupt("return", _context.sent);

            case 12:
              message = {
                message: "Something went wrong on fetching daily quote"
              };
              return _context.abrupt("return", message);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function randomQuote() {
      return _ref.apply(this, arguments);
    };
  }();

  randomQuote().then(function (quotes) {
    var randomNumber = Math.floor(Math.random() * 112);
    quoteText.innerHTML = "<em>\"".concat(quotes.quotes[randomNumber].text, "\"</em>");
    quoteAuthor.innerHTML = quotes.quotes[randomNumber].author;
  }).catch(function (err) {
    return console.error(err);
  });
});

/***/ }),

/***/ "./public/js/subject_dropdown.js":
/*!***************************************!*\
  !*** ./public/js/subject_dropdown.js ***!
  \***************************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", function () {
  var subjectDropdown = document.querySelectorAll(".subject__dropdown");
  var subjectDropdownGroup = document.querySelectorAll(".subject__dropdown-group");
  var subjectDropdownBtn = document.querySelectorAll(".subject__dropdown-btn");
  var subjectDropdownIcon = document.querySelectorAll(".fa-chevron-right");

  var _loop = function _loop(i) {
    var subjectDropdownOpen = false;
    subjectDropdownBtn[i].addEventListener("click", function (e) {
      if (!subjectDropdownOpen) {
        subjectDropdown[i].classList.add("subject__dropdown-open");
        subjectDropdownIcon[i].classList.add("icon-rotate");
        subjectDropdownOpen = true;
      } else {
        subjectDropdown[i].classList.remove("subject__dropdown-open");
        subjectDropdownIcon[i].classList.remove("icon-rotate");
        subjectDropdownOpen = false;
      }

      arrayIndexFinder(e);
    });
  };

  for (var i = 0; i < subjectDropdownGroup.length; i++) {
    _loop(i);
  }

  var arrayIndexFinder = function arrayIndexFinder(e) {
    Array.from(subjectDropdown).indexOf(e.target);
  };
});

/***/ }),

/***/ "./public/assets/logo/logo.png":
/*!*************************************!*\
  !*** ./public/assets/logo/logo.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d9f18b7ae59c6546e8c944a901c09659.png");

/***/ }),

/***/ "./public/bootstrap/css/bootstrap.min.css":
/*!************************************************!*\
  !*** ./public/bootstrap/css/bootstrap.min.css ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/main.scss":
/*!**************************!*\
  !*** ./public/main.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

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
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

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
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
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
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
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
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

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
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/* JAVASCRIPT */
window.addEventListener("beforeunload", function () {});

__webpack_require__(/*! ./js/image-load */ "./public/js/image-load.js");

__webpack_require__(/*! ./js/login */ "./public/js/login.js");

__webpack_require__(/*! ./js/option_post_toggle */ "./public/js/option_post_toggle.js");

__webpack_require__(/*! ./bootstrap/js/bootstrap.min */ "./public/bootstrap/js/bootstrap.min.js");

__webpack_require__(/*! ./js/navburger.anim */ "./public/js/navburger.anim.js");

__webpack_require__(/*! ./js/subject_dropdown */ "./public/js/subject_dropdown.js");

__webpack_require__(/*! ./js/options_post */ "./public/js/options_post.js");

__webpack_require__(/*! ./js/quote */ "./public/js/quote.js"); // require("./js/tinymce.form");

/* STYLE */


__webpack_require__(/*! ./bootstrap/css/bootstrap.min.css */ "./public/bootstrap/css/bootstrap.min.css");

__webpack_require__(/*! ./main.scss */ "./public/main.scss");
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvY3JlYXRlUG9wcGVyLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2NvbnRhaW5zLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlTmFtZS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlU2Nyb2xsLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2luc3RhbmNlT2YuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNUYWJsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9lbnVtcy5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2Fycm93LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZmxpcC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2luZGV4LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL29mZnNldC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci1saXRlLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9leHBhbmRUb0hhc2hNYXAuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRBbHRBeGlzLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tYXRoLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VCeU5hbWUuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9vcmRlck1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy91bmlxdWVCeS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3ZhbGlkYXRlTW9kaWZpZXJzLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvZG9tL3NlbGVjdG9yLWVuZ2luZS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL3NyYy9kb20vZGF0YS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL2RvbS9ldmVudC1oYW5kbGVyLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvYmFzZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL3NyYy9hbGVydC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL2RvbS9tYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL3NyYy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL3V0aWwvc2Nyb2xsYmFyLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvdXRpbC9iYWNrZHJvcC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL21vZGFsLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvb2ZmY2FudmFzLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvdXRpbC9zYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL3NyYy90b29sdGlwLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL3Njcm9sbHNweS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL3RhYi5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL3RvYXN0LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9pbmRleC51bWQuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vcHVibGljL2pzL2ltYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vcHVibGljL2pzL2xvZ2luLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL3B1YmxpYy9qcy9uYXZidXJnZXIuYW5pbS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9wdWJsaWMvanMvb3B0aW9uX3Bvc3RfdG9nZ2xlLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL3B1YmxpYy9qcy9vcHRpb25zX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vcHVibGljL2pzL3F1b3RlLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL3B1YmxpYy9qcy9zdWJqZWN0X2Ryb3Bkb3duLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL3B1YmxpYy9hc3NldHMvbG9nby9sb2dvLnBuZyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9wdWJsaWMvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzcz85YjYxIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL3B1YmxpYy9tYWluLnNjc3M/OWE4OCIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL2V2c3UtaW5zaWRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2V2c3UtaW5zaWRlci93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2V2c3UtaW5zaWRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V2c3UtaW5zaWRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V2c3UtaW5zaWRlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9wdWJsaWMvaW5kZXguanMiXSwibmFtZXMiOlsiU2VsZWN0b3JFbmdpbmUiLCJmaW5kIiwic2VsZWN0b3IiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjb25jYXQiLCJFbGVtZW50IiwicHJvdG90eXBlIiwicXVlcnlTZWxlY3RvckFsbCIsImNhbGwiLCJmaW5kT25lIiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY2hpbGQiLCJtYXRjaGVzIiwicGFyZW50cyIsImFuY2VzdG9yIiwicGFyZW50Tm9kZSIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsInB1c2giLCJwcmV2IiwicHJldmlvdXMiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJocmVmQXR0ciIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsInNwbGl0IiwidHJpbSIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImlzRWxlbWVudCIsIm9iaiIsImpxdWVyeSIsImdldEVsZW1lbnQiLCJsZW5ndGgiLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsImR1cmF0aW9uIiwiY2FsbGVkIiwiZW11bGF0ZWREdXJhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwidHlwZUNoZWNrQ29uZmlnIiwiY29tcG9uZW50TmFtZSIsImNvbmZpZyIsImNvbmZpZ1R5cGVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsInRvU3RyaW5nIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsIlJlZ0V4cCIsInRlc3QiLCJUeXBlRXJyb3IiLCJ0b1VwcGVyQ2FzZSIsImlzVmlzaWJsZSIsInN0eWxlIiwiZWxlbWVudFN0eWxlIiwicGFyZW50Tm9kZVN0eWxlIiwiZGlzcGxheSIsInZpc2liaWxpdHkiLCJpc0Rpc2FibGVkIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkaXNhYmxlZCIsImhhc0F0dHJpYnV0ZSIsImZpbmRTaGFkb3dSb290IiwiYXR0YWNoU2hhZG93IiwiZ2V0Um9vdE5vZGUiLCJyb290IiwiU2hhZG93Um9vdCIsIm5vb3AiLCJyZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJnZXRqUXVlcnkiLCJqUXVlcnkiLCJib2R5IiwiaXNSVEwiLCJkaXIiLCJkZWZpbmVKUXVlcnlQbHVnaW4iLCJwbHVnaW4iLCJjYWxsYmFjayIsIiQiLCJuYW1lIiwiTkFNRSIsIkpRVUVSWV9OT19DT05GTElDVCIsImZuIiwialF1ZXJ5SW50ZXJmYWNlIiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwicmVhZHlTdGF0ZSIsImV4ZWN1dGUiLCJlbGVtZW50TWFwIiwiTWFwIiwic2V0Iiwia2V5IiwiaW5zdGFuY2UiLCJoYXMiLCJpbnN0YW5jZU1hcCIsImdldCIsInNpemUiLCJjb25zb2xlIiwiZXJyb3IiLCJBcnJheSIsImZyb20iLCJyZW1vdmUiLCJkZWxldGUiLCJuYW1lc3BhY2VSZWdleCIsInN0cmlwTmFtZVJlZ2V4Iiwic3RyaXBVaWRSZWdleCIsImV2ZW50UmVnaXN0cnkiLCJ1aWRFdmVudCIsImN1c3RvbUV2ZW50cyIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiY3VzdG9tRXZlbnRzUmVnZXgiLCJuYXRpdmVFdmVudHMiLCJTZXQiLCJnZXRVaWRFdmVudCIsInVpZCIsImdldEV2ZW50IiwiZmluZEhhbmRsZXIiLCJldmVudHMiLCJoYW5kbGVyIiwiZGVsZWdhdGlvblNlbGVjdG9yIiwidWlkRXZlbnRMaXN0IiwiaSIsImxlbiIsImV2ZW50Iiwib3JpZ2luYWxIYW5kbGVyIiwibm9ybWFsaXplUGFyYW1zIiwib3JpZ2luYWxUeXBlRXZlbnQiLCJkZWxlZ2F0aW9uRm4iLCJkZWxlZ2F0aW9uIiwidHlwZUV2ZW50IiwiZ2V0VHlwZUV2ZW50IiwiYWRkSGFuZGxlciIsIm9uZU9mZiIsIndyYXBGbiIsInJlbGF0ZWRUYXJnZXQiLCJkZWxlZ2F0ZVRhcmdldCIsInRoaXMiLCJoYW5kbGVycyIsInByZXZpb3VzRm4iLCJyZXBsYWNlIiwiZG9tRWxlbWVudHMiLCJ0YXJnZXQiLCJFdmVudEhhbmRsZXIiLCJvZmYiLCJ0eXBlIiwiYXBwbHkiLCJib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlciIsImJvb3RzdHJhcEhhbmRsZXIiLCJyZW1vdmVIYW5kbGVyIiwiQm9vbGVhbiIsIm9uIiwib25lIiwiaW5OYW1lc3BhY2UiLCJpc05hbWVzcGFjZSIsImVsZW1lbnRFdmVudCIsIm5hbWVzcGFjZSIsInN0b3JlRWxlbWVudEV2ZW50IiwiaGFuZGxlcktleSIsInJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyIsInNsaWNlIiwia2V5SGFuZGxlcnMiLCJ0cmlnZ2VyIiwiYXJncyIsImlzTmF0aXZlIiwialF1ZXJ5RXZlbnQiLCJidWJibGVzIiwibmF0aXZlRGlzcGF0Y2giLCJkZWZhdWx0UHJldmVudGVkIiwiZXZ0IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJjYW5jZWxhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJwcmV2ZW50RGVmYXVsdCIsIkJhc2VDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIl9lbGVtZW50IiwiRGF0YSIsIkRBVEFfS0VZIiwiZGlzcG9zZSIsIkVWRU5UX0tFWSIsImdldE93blByb3BlcnR5TmFtZXMiLCJwcm9wZXJ0eU5hbWUiLCJfcXVldWVDYWxsYmFjayIsImlzQW5pbWF0ZWQiLCJbb2JqZWN0IE9iamVjdF0iLCJWRVJTSU9OIiwiRXJyb3IiLCJBbGVydCIsImNsb3NlIiwicm9vdEVsZW1lbnQiLCJfZ2V0Um9vdEVsZW1lbnQiLCJjdXN0b21FdmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsIl9yZW1vdmVFbGVtZW50IiwiY2xvc2VzdCIsIl9kZXN0cm95RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiZWFjaCIsImRhdGEiLCJhbGVydEluc3RhbmNlIiwiaGFuZGxlRGlzbWlzcyIsIkJ1dHRvbiIsInRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsIm5vcm1hbGl6ZURhdGEiLCJ2YWwiLCJub3JtYWxpemVEYXRhS2V5IiwiY2hyIiwiYnV0dG9uIiwiTWFuaXB1bGF0b3IiLCJzZXREYXRhQXR0cmlidXRlIiwicmVtb3ZlRGF0YUF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImdldERhdGFBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsImRhdGFzZXQiLCJwdXJlS2V5IiwiY2hhckF0IiwiZ2V0RGF0YUF0dHJpYnV0ZSIsIm9mZnNldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxUb3AiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInBvc2l0aW9uIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIkRlZmF1bHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwic2xpZGUiLCJwYXVzZSIsIndyYXAiLCJ0b3VjaCIsIkRlZmF1bHRUeXBlIiwiT1JERVJfTkVYVCIsIk9SREVSX1BSRVYiLCJESVJFQ1RJT05fTEVGVCIsIkRJUkVDVElPTl9SSUdIVCIsIkNhcm91c2VsIiwic3VwZXIiLCJfaXRlbXMiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1BhdXNlZCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRGVsdGFYIiwiX2NvbmZpZyIsIl9nZXRDb25maWciLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJfdG91Y2hTdXBwb3J0ZWQiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIl9wb2ludGVyRXZlbnQiLCJQb2ludGVyRXZlbnQiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfc2xpZGUiLCJuZXh0V2hlblZpc2libGUiLCJoaWRkZW4iLCJjeWNsZSIsImNsZWFySW50ZXJ2YWwiLCJfdXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInZpc2liaWxpdHlTdGF0ZSIsImJpbmQiLCJ0byIsImluZGV4IiwiYWN0aXZlSW5kZXgiLCJfZ2V0SXRlbUluZGV4Iiwib3JkZXIiLCJfaGFuZGxlU3dpcGUiLCJhYnNEZWx0YXgiLCJhYnMiLCJkaXJlY3Rpb24iLCJfa2V5ZG93biIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwic3RhcnQiLCJwb2ludGVyVHlwZSIsInRvdWNoZXMiLCJjbGllbnRYIiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsIml0ZW1JbWciLCJlIiwiYWRkIiwidGFnTmFtZSIsImluZGV4T2YiLCJfZ2V0SXRlbUJ5T3JkZXIiLCJhY3RpdmVFbGVtZW50IiwiaXNOZXh0IiwiaXNQcmV2IiwibGFzdEl0ZW1JbmRleCIsIml0ZW1JbmRleCIsIl90cmlnZ2VyU2xpZGVFdmVudCIsImV2ZW50RGlyZWN0aW9uTmFtZSIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4IiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJhY3RpdmVJbmRpY2F0b3IiLCJpbmRpY2F0b3JzIiwicGFyc2VJbnQiLCJlbGVtZW50SW50ZXJ2YWwiLCJkZWZhdWx0SW50ZXJ2YWwiLCJkaXJlY3Rpb25Pck9yZGVyIiwiX2RpcmVjdGlvblRvT3JkZXIiLCJhY3RpdmVFbGVtZW50SW5kZXgiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJpc0N5Y2xpbmciLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwiX29yZGVyVG9EaXJlY3Rpb24iLCJ0cmlnZ2VyU2xpZEV2ZW50IiwiY29tcGxldGVDYWxsQmFjayIsImFjdGlvbiIsInJpZGUiLCJjYXJvdXNlbEludGVyZmFjZSIsInNsaWRlSW5kZXgiLCJkYXRhQXBpQ2xpY2tIYW5kbGVyIiwiY2Fyb3VzZWxzIiwicGFyZW50IiwiQ29sbGFwc2UiLCJfaXNUcmFuc2l0aW9uaW5nIiwiX3RyaWdnZXJBcnJheSIsImlkIiwidG9nZ2xlTGlzdCIsImVsZW0iLCJmaWx0ZXJFbGVtZW50IiwiZm91bmRFbGVtIiwiX3NlbGVjdG9yIiwiX3BhcmVudCIsIl9nZXRQYXJlbnQiLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiaGlkZSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJjb250YWluZXIiLCJ0ZW1wQWN0aXZlRGF0YSIsImVsZW1BY3RpdmUiLCJjb2xsYXBzZUludGVyZmFjZSIsImRpbWVuc2lvbiIsIl9nZXREaW1lbnNpb24iLCJzZXRUcmFuc2l0aW9uaW5nIiwic2Nyb2xsU2l6ZSIsInRyaWdnZXJBcnJheUxlbmd0aCIsImlzVHJhbnNpdGlvbmluZyIsInNlbGVjdGVkIiwidHJpZ2dlckFycmF5IiwiaXNPcGVuIiwidHJpZ2dlckRhdGEiLCJSRUdFWFBfS0VZRE9XTiIsIlBMQUNFTUVOVF9UT1AiLCJQTEFDRU1FTlRfVE9QRU5EIiwiUExBQ0VNRU5UX0JPVFRPTSIsIlBMQUNFTUVOVF9CT1RUT01FTkQiLCJQTEFDRU1FTlRfUklHSFQiLCJQTEFDRU1FTlRfTEVGVCIsImJvdW5kYXJ5IiwicmVmZXJlbmNlIiwicG9wcGVyQ29uZmlnIiwiYXV0b0Nsb3NlIiwiRHJvcGRvd24iLCJfcG9wcGVyIiwiX21lbnUiLCJfZ2V0TWVudUVsZW1lbnQiLCJfaW5OYXZiYXIiLCJfZGV0ZWN0TmF2YmFyIiwiZ2V0UGFyZW50RnJvbUVsZW1lbnQiLCJQb3BwZXIiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsImlzRGlzcGxheVN0YXRpYyIsIm1vZGlmaWVycyIsIm1vZGlmaWVyIiwiZW5hYmxlZCIsImNyZWF0ZVBvcHBlciIsImZvY3VzIiwiX2NvbXBsZXRlSGlkZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJfZ2V0UGxhY2VtZW50IiwicGFyZW50RHJvcGRvd24iLCJpc0VuZCIsImdldFByb3BlcnR5VmFsdWUiLCJfZ2V0T2Zmc2V0IiwibWFwIiwicG9wcGVyRGF0YSIsImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsInBsYWNlbWVudCIsIm9wdGlvbnMiLCJfc2VsZWN0TWVudUl0ZW0iLCJpdGVtcyIsImRyb3Bkb3duSW50ZXJmYWNlIiwidG9nZ2xlcyIsImNvbnRleHQiLCJjb21wb3NlZFBhdGgiLCJpc01lbnVUYXJnZXQiLCJjbGlja0V2ZW50IiwiaXNBY3RpdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXRUb2dnbGVCdXR0b24iLCJjbGVhck1lbnVzIiwiZ2V0SW5zdGFuY2UiLCJjbGljayIsImRhdGFBcGlLZXlkb3duSGFuZGxlciIsImdldFdpZHRoIiwiZG9jdW1lbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsIndpZHRoIiwiX2Rpc2FibGVPdmVyRmxvdyIsIl9zZXRFbGVtZW50QXR0cmlidXRlcyIsImNhbGN1bGF0ZWRWYWx1ZSIsImFjdHVhbFZhbHVlIiwib3ZlcmZsb3ciLCJzdHlsZVByb3AiLCJzY3JvbGxiYXJXaWR0aCIsInJlc2V0IiwiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJyZW1vdmVQcm9wZXJ0eSIsImNsaWNrQ2FsbGJhY2siLCJCYWNrZHJvcCIsIl9pc0FwcGVuZGVkIiwiX2FwcGVuZCIsIl9nZXRFbGVtZW50IiwiX2VtdWxhdGVBbmltYXRpb24iLCJiYWNrZHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiTW9kYWwiLCJfZGlhbG9nIiwiX2JhY2tkcm9wIiwiX2luaXRpYWxpemVCYWNrRHJvcCIsIl9pc1Nob3duIiwiX2lnbm9yZUJhY2tkcm9wQ2xpY2siLCJfaXNBbmltYXRlZCIsInNob3dFdmVudCIsInNjcm9sbEJhckhpZGUiLCJfYWRqdXN0RGlhbG9nIiwiX3NldEVzY2FwZUV2ZW50IiwiX3NldFJlc2l6ZUV2ZW50IiwiX3Nob3dCYWNrZHJvcCIsIl9zaG93RWxlbWVudCIsIl9oaWRlTW9kYWwiLCJodG1sRWxlbWVudCIsImhhbmRsZVVwZGF0ZSIsIm1vZGFsQm9keSIsIl9lbmZvcmNlRm9jdXMiLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsIl9yZXNldEFkanVzdG1lbnRzIiwic2Nyb2xsQmFyUmVzZXQiLCJjdXJyZW50VGFyZ2V0IiwiaXNNb2RhbE92ZXJmbG93aW5nIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwib3ZlcmZsb3dZIiwibW9kYWxUcmFuc2l0aW9uRHVyYXRpb24iLCJnZXRTY3JvbGxCYXJXaWR0aCIsImlzQm9keU92ZXJmbG93aW5nIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJzY3JvbGwiLCJPZmZjYW52YXMiLCJfZW5mb3JjZUZvY3VzT25FbGVtZW50IiwiYmx1ciIsInVuZGVmaW5lZCIsImFsbFJlYWR5T3BlbiIsImVsIiwidXJpQXR0cnMiLCJTQUZFX1VSTF9QQVRURVJOIiwiREFUQV9VUkxfUEFUVEVSTiIsImFsbG93ZWRBdHRyaWJ1dGUiLCJhdHRyIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJhdHRyTmFtZSIsIm5vZGVOYW1lIiwibm9kZVZhbHVlIiwicmVnRXhwIiwiYXR0clJlZ2V4Iiwic2FuaXRpemVIdG1sIiwidW5zYWZlSHRtbCIsImFsbG93TGlzdCIsInNhbml0aXplRm4iLCJjcmVhdGVkRG9jdW1lbnQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJhbGxvd2xpc3RLZXlzIiwiZWxlbWVudHMiLCJlbE5hbWUiLCJhdHRyaWJ1dGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJpbm5lckhUTUwiLCJCU0NMU19QUkVGSVhfUkVHRVgiLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJhbmltYXRpb24iLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiZGVsYXkiLCJodG1sIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwiY3VzdG9tQ2xhc3MiLCJzYW5pdGl6ZSIsIkF0dGFjaG1lbnRNYXAiLCJBVVRPIiwiVE9QIiwiUklHSFQiLCJCT1RUT00iLCJMRUZUIiwiKiIsImEiLCJhcmVhIiwiYiIsImJyIiwiY29sIiwiY29kZSIsImRpdiIsImVtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJpbWciLCJsaSIsIm9sIiwicCIsInByZSIsInMiLCJzbWFsbCIsInNwYW4iLCJzdWIiLCJzdXAiLCJzdHJvbmciLCJ1IiwidWwiLCJISURFIiwiSElEREVOIiwiU0hPVyIsIlNIT1dOIiwiSU5TRVJURUQiLCJDTElDSyIsIkZPQ1VTSU4iLCJGT0NVU09VVCIsIk1PVVNFRU5URVIiLCJNT1VTRUxFQVZFIiwiVG9vbHRpcCIsIl9pc0VuYWJsZWQiLCJfdGltZW91dCIsIl9ob3ZlclN0YXRlIiwiX2FjdGl2ZVRyaWdnZXIiLCJ0aXAiLCJfc2V0TGlzdGVuZXJzIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0IiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJfZW50ZXIiLCJfbGVhdmUiLCJnZXRUaXBFbGVtZW50IiwiX2hpZGVNb2RhbEhhbmRsZXIiLCJpc1dpdGhDb250ZW50Iiwic2hhZG93Um9vdCIsImlzSW5UaGVEb20iLCJvd25lckRvY3VtZW50IiwidGlwSWQiLCJzZXRDb250ZW50IiwiYXR0YWNobWVudCIsIl9nZXRBdHRhY2htZW50IiwiX2FkZEF0dGFjaG1lbnRDbGFzcyIsInByZXZIb3ZlclN0YXRlIiwiX2NsZWFuVGlwQ2xhc3MiLCJnZXRUaXRsZSIsInNldEVsZW1lbnRDb250ZW50IiwiY29udGVudCIsInRleHRDb250ZW50IiwidXBkYXRlQXR0YWNobWVudCIsImRhdGFLZXkiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJwaGFzZSIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJvbkZpcnN0VXBkYXRlIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX2ZpeFRpdGxlIiwib3JpZ2luYWxUaXRsZVR5cGUiLCJkYXRhQXR0cmlidXRlcyIsImRhdGFBdHRyIiwidGFiQ2xhc3MiLCJ0b2tlbiIsInRDbGFzcyIsInN0YXRlIiwicG9wcGVyIiwiUG9wb3ZlciIsIl9nZXRDb250ZW50IiwibWV0aG9kIiwiU2Nyb2xsU3B5IiwiX3Njcm9sbEVsZW1lbnQiLCJfb2Zmc2V0cyIsIl90YXJnZXRzIiwiX2FjdGl2ZVRhcmdldCIsIl9zY3JvbGxIZWlnaHQiLCJfcHJvY2VzcyIsInJlZnJlc2giLCJhdXRvTWV0aG9kIiwib2Zmc2V0TWV0aG9kIiwib2Zmc2V0QmFzZSIsIl9nZXRTY3JvbGxUb3AiLCJfZ2V0U2Nyb2xsSGVpZ2h0IiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJoZWlnaHQiLCJpdGVtIiwic29ydCIsInBhZ2VZT2Zmc2V0IiwibWF4IiwiX2dldE9mZnNldEhlaWdodCIsImlubmVySGVpZ2h0IiwibWF4U2Nyb2xsIiwiX2FjdGl2YXRlIiwiX2NsZWFyIiwicXVlcmllcyIsImxpbmsiLCJqb2luIiwibGlzdEdyb3VwIiwibmF2SXRlbSIsIm5vZGUiLCJzcHkiLCJUYWIiLCJsaXN0RWxlbWVudCIsIml0ZW1TZWxlY3RvciIsImhpZGVFdmVudCIsImNvbXBsZXRlIiwiYWN0aXZlIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93biIsImF1dG9oaWRlIiwiVG9hc3QiLCJfaGFzTW91c2VJbnRlcmFjdGlvbiIsIl9oYXNLZXlib2FyZEludGVyYWN0aW9uIiwiX2NsZWFyVGltZW91dCIsIl9tYXliZVNjaGVkdWxlSGlkZSIsIl9vbkludGVyYWN0aW9uIiwiaXNJbnRlcmFjdGluZyIsImxvZ28iLCJzcmMiLCJsb2dvSW1hZ2UiLCJsb2FkaW5nU2lnbkluIiwiYnRuU2lnbkluIiwibmF2VG9nZ2xlciIsIm5hdmJhckNvbnRhaW5lciIsIm5hdklzT3BlbiIsInRvZ2dsZU9wdGlvbkJ0biIsIm9wdGlvbkNvbnRhaW5lciIsImRlbGV0ZU9wdGlvbkJ0biIsImRlbGV0ZURpYWxvZyIsImRlbGV0ZURpYWxvZ0NhbmNlbCIsImRlbGV0ZURpYWxvZ0NvbmZpcm0iLCJvcHRpb25Jc09wZW4iLCJ0b2dnbGVPcHRpb25zIiwicG9zdElkIiwiZGVsZXRlUG9zdCIsImNsb3NlRGlhbG9nIiwiY29uZmlybURlbGV0ZVBvc3QiLCJkYXRhUG9zdElkIiwiZGVsZXRlT25lUG9zdCIsImZldGNoIiwiY2FjaGUiLCJtb2RlIiwicmVzcG9uc2UiLCJqc29uIiwib2siLCJtZXNzYWdlIiwidGhlbiIsInJlcyIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsImNhdGNoIiwiZXJyIiwiZGVsZXRlQnV0dG9uIiwiZGF0YVBvc3RJZF9kZWxldGUiLCJsb2FkaW5nU3Bpbm5lciIsInVwZGF0ZUZvcm0iLCJ1cGRhdGVUaXRsZSIsInVwZGF0ZVRhZyIsInVwZGF0ZUJvZHkiLCJ1cGRhdGVCdG4iLCJkYXRhUG9zdElkX3VwZGF0ZSIsInBvc3RVcGRhdGVkQ29udGVudCIsInBvc3RfdGl0bGUiLCJwb3N0X3RhZyIsInBvc3RfYm9keSIsInRpbnltY2UiLCJnZXRDb250ZW50IiwidXBkYXRlT25lUG9zdCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVvdGVUZXh0IiwicXVvdGVBdXRob3IiLCJyYW5kb21RdW90ZSIsInF1b3RlcyIsInJhbmRvbU51bWJlciIsInRleHQiLCJhdXRob3IiLCJzdWJqZWN0RHJvcGRvd24iLCJzdWJqZWN0RHJvcGRvd25Hcm91cCIsInN1YmplY3REcm9wZG93bkJ0biIsInN1YmplY3REcm9wZG93bkljb24iLCJzdWJqZWN0RHJvcGRvd25PcGVuIiwiYXJyYXlJbmRleEZpbmRlciIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGcUQ7QUFDdEM7QUFDZixpQ0FBaUMsNkRBQWdCO0FBQ2pELEM7Ozs7Ozs7Ozs7Ozs7OztBQ0hlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDYitDO0FBQ2hDO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlC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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QSxtQkFBTyxDQUFDLHdDQUFELENBQVAsQyxDQUNBOztBQUVBOzs7QUFDQUEsbUJBQU8sQ0FBQyxtRkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHVDQUFELENBQVAsQyIsImZpbGUiOiJtYWluLmNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgc3VwZXJQcm9wQmFzZSBmcm9tIFwiLi9zdXBlclByb3BCYXNlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgZ2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vZ2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCBnZXRDb21wb3NpdGVSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IG9yZGVyTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcIi4vdXRpbHMvZGVib3VuY2UuanNcIjtcbmltcG9ydCB2YWxpZGF0ZU1vZGlmaWVycyBmcm9tIFwiLi91dGlscy92YWxpZGF0ZU1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IHVuaXF1ZUJ5IGZyb20gXCIuL3V0aWxzL3VuaXF1ZUJ5LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgbWVyZ2VCeU5hbWUgZnJvbSBcIi4vdXRpbHMvbWVyZ2VCeU5hbWUuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi9lbnVtcy5qc1wiO1xudmFyIElOVkFMSURfRUxFTUVOVF9FUlJPUiA9ICdQb3BwZXI6IEludmFsaWQgcmVmZXJlbmNlIG9yIHBvcHBlciBhcmd1bWVudCBwcm92aWRlZC4gVGhleSBtdXN0IGJlIGVpdGhlciBhIERPTSBlbGVtZW50IG9yIHZpcnR1YWwgZWxlbWVudC4nO1xudmFyIElORklOSVRFX0xPT1BfRVJST1IgPSAnUG9wcGVyOiBBbiBpbmZpbml0ZSBsb29wIGluIHRoZSBtb2RpZmllcnMgY3ljbGUgaGFzIGJlZW4gZGV0ZWN0ZWQhIFRoZSBjeWNsZSBoYXMgYmVlbiBpbnRlcnJ1cHRlZCB0byBwcmV2ZW50IGEgYnJvd3NlciBjcmFzaC4nO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcbiAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBtb2RpZmllcnMgaXMgaW52YWxpZCBmb3IgYW55IHJlYXNvblxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXJzID0gdW5pcXVlQnkoW10uY29uY2F0KG9yZGVyZWRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKTtcblxuICAgICAgICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHN0YXRlLm9wdGlvbnMucGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgICAgICAgICAgdmFyIGZsaXBNb2RpZmllciA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ2ZsaXAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZmxpcE1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXV0b1wiIHBsYWNlbWVudHMgcmVxdWlyZSB0aGUgXCJmbGlwXCIgbW9kaWZpZXIgYmUnLCAncHJlc2VudCBhbmQgZW5hYmxlZCB0byB3b3JrLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwb3BwZXIpLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3AsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQ7IC8vIFdlIG5vIGxvbmdlciB0YWtlIGludG8gYWNjb3VudCBgbWFyZ2luc2Agb24gdGhlIHBvcHBlciwgYW5kIGl0IGNhblxuICAgICAgICAgIC8vIGNhdXNlIGJ1Z3Mgd2l0aCBwb3NpdGlvbmluZywgc28gd2UnbGwgd2FybiB0aGUgY29uc3VtZXJcblxuXG4gICAgICAgICAgaWYgKFttYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRdLnNvbWUoZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobWFyZ2luKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBDU1MgXCJtYXJnaW5cIiBzdHlsZXMgY2Fubm90IGJlIHVzZWQgdG8gYXBwbHkgcGFkZGluZycsICdiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudCBvciBib3VuZGFyeS4nLCAnVG8gcmVwbGljYXRlIG1hcmdpbiwgdXNlIHRoZSBgb2Zmc2V0YCBtb2RpZmllciwgYXMgd2VsbCBhcycsICd0aGUgYHBhZGRpbmdgIG9wdGlvbiBpbiB0aGUgYHByZXZlbnRPdmVyZmxvd2AgYW5kIGBmbGlwYCcsICdtb2RpZmllcnMuJ10uam9pbignICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBfX2RlYnVnX2xvb3BzX18gPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIF9fZGVidWdfbG9vcHNfXyArPSAxO1xuXG4gICAgICAgICAgICBpZiAoX19kZWJ1Z19sb29wc19fID4gMTAwKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5GSU5JVEVfTE9PUF9FUlJPUik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHg6IHJlY3QubGVmdCxcbiAgICB5OiByZWN0LnRvcFxuICB9O1xufSIsImltcG9ydCB7IHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50UmVjdCBmcm9tIFwiLi9nZXREb2N1bWVudFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuLi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSkgOiBpc0hUTUxFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjsgLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQpO1xuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSIsImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufSIsImltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59IiwiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBpc1RhYmxlRWxlbWVudCBmcm9tIFwiLi9pc1RhYmxlRWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcbiAgdmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSAhPT0gLTE7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufSIsImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwOyAvLyBOQjogVGhpcyBpc24ndCBzdXBwb3J0ZWQgb24gaU9TIDw9IDEyLiBJZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiwgdGhlIHBvcHBlclxuICAvLyBjYW4gYmUgb2JzY3VyZWQgdW5kZXJuZWF0aCBpdC5cbiAgLy8gQWxzbywgYGh0bWwuY2xpZW50SGVpZ2h0YCBhZGRzIHRoZSBib3R0b20gYmFyIGhlaWdodCBpbiBTYWZhcmkgaU9TLCBldmVuXG4gIC8vIGlmIGl0IGlzbid0IG9wZW4sIHNvIGlmIHRoaXMgaXNuJ3QgYXZhaWxhYmxlLCB0aGUgcG9wcGVyIHdpbGwgYmUgZGV0ZWN0ZWRcbiAgLy8gdG8gb3ZlcmZsb3cgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvbyBlYXJseS5cblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDsgLy8gVXNlcyBMYXlvdXQgVmlld3BvcnQgKGxpa2UgQ2hyb21lOyBTYWZhcmkgZG9lcyBub3QgY3VycmVudGx5KVxuICAgIC8vIEluIENocm9tZSwgaXQgcmV0dXJucyBhIHZhbHVlIHZlcnkgY2xvc2UgdG8gMCAoKy8tKSBidXQgY29udGFpbnMgcm91bmRpbmdcbiAgICAvLyBlcnJvcnMgZHVlIHRvIGZsb2F0aW5nIHBvaW50IG51bWJlcnMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgcHJlY2lzaW9uLlxuICAgIC8vIFNhZmFyaSByZXR1cm5zIGEgbnVtYmVyIDw9IDAsIHVzdWFsbHkgPCAtMSB3aGVuIHBpbmNoLXpvb21lZFxuICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZhaWxzIGluIG1vYmlsZSBlbXVsYXRpb24gbW9kZSBpbiBDaHJvbWUuXG4gICAgLy8gTWF0aC5hYnMod2luLmlubmVyV2lkdGggLyB2aXN1YWxWaWV3cG9ydC5zY2FsZSAtIHZpc3VhbFZpZXdwb3J0LndpZHRoKSA8XG4gICAgLy8gMC4wMDFcbiAgICAvLyBGYWxsYmFjayBoZXJlOiBcIk5vdCBTYWZhcmlcIiB1c2VyQWdlbnRcblxuICAgIGlmICghL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsImltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcIi4vZ2V0U2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn0iLCJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsImV4cG9ydCAqIGZyb20gXCIuL2VudW1zLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93LCBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyQmFzZSB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciB9IGZyb20gXCIuL3BvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsiLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBUaGlzIG1vZGlmaWVyIHRha2VzIHRoZSBzdHlsZXMgcHJlcGFyZWQgYnkgdGhlIGBjb21wdXRlU3R5bGVzYCBtb2RpZmllclxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuLi9kb20tdXRpbHMvY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHdpdGhpbiBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgZWxlbWVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50IChub3QgYW4gU1ZHRWxlbWVudCkuJywgJ1RvIHVzZSBhbiBTVkcgYXJyb3csIHdyYXAgaXQgaW4gYW4gSFRNTEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMnLCAndGhlIGFycm93LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgbW9kaWZpZXJcXCdzIGBlbGVtZW50YCBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIHBvcHBlcicsICdlbGVtZW50LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgd2luID0gd2luZG93O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZChyb3VuZCh4ICogZHByKSAvIGRwcikgfHwgMCxcbiAgICB5OiByb3VuZChyb3VuZCh5ICogZHByKSAvIGRwcikgfHwgMFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzO1xuXG4gIHZhciBfcmVmMyA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKG9mZnNldHMpIDogdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyhvZmZzZXRzKSA6IG9mZnNldHMsXG4gICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgIHggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeCxcbiAgICAgIF9yZWYzJHkgPSBfcmVmMy55LFxuICAgICAgeSA9IF9yZWYzJHkgPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR5O1xuXG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHkgLT0gb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0KSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0OyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeCAtPSBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXSAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8IDIgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjQuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjQub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRDb21wdXRlZFN0eWxlKHN0YXRlLmVsZW1lbnRzLnBvcHBlcikudHJhbnNpdGlvblByb3BlcnR5IHx8ICcnO1xuXG4gICAgaWYgKGFkYXB0aXZlICYmIFsndHJhbnNmb3JtJywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLnNvbWUoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvblByb3BlcnR5LmluZGV4T2YocHJvcGVydHkpID49IDA7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogRGV0ZWN0ZWQgQ1NTIHRyYW5zaXRpb25zIG9uIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nJywgJ0NTUyBwcm9wZXJ0aWVzOiBcInRyYW5zZm9ybVwiLCBcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLicsICdcXG5cXG4nLCAnRGlzYWJsZSB0aGUgXCJjb21wdXRlU3R5bGVzXCIgbW9kaWZpZXJcXCdzIGBhZGFwdGl2ZWAgb3B0aW9uIHRvIGFsbG93JywgJ2ZvciBzbW9vdGggdHJhbnNpdGlvbnMsIG9yIHJlbW92ZSB0aGVzZSBwcm9wZXJ0aWVzIGZyb20gdGhlIENTUycsICd0cmFuc2l0aW9uIGRlY2xhcmF0aW9uIG9uIHRoZSBwb3BwZXIgZWxlbWVudCBpZiBvbmx5IHRyYW5zaXRpb25pbmcnLCAnb3BhY2l0eSBvciBiYWNrZ3JvdW5kLWNvbG9yIGZvciBleGFtcGxlLicsICdcXG5cXG4nLCAnV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBwb3BwZXIgZWxlbWVudCBhcyBhIHdyYXBwZXIgYXJvdW5kIGFuIGlubmVyJywgJ2VsZW1lbnQgdGhhdCBjYW4gaGF2ZSBhbnkgQ1NTIHByb3BlcnR5IHRyYW5zaXRpb25lZCBmb3IgYW5pbWF0aW9ucy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBseVN0eWxlcyB9IGZyb20gXCIuL2FwcGx5U3R5bGVzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycm93IH0gZnJvbSBcIi4vYXJyb3cuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcHV0ZVN0eWxlcyB9IGZyb20gXCIuL2NvbXB1dGVTdHlsZXMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVycy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGlwIH0gZnJvbSBcIi4vZmxpcC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoaWRlIH0gZnJvbSBcIi4vaGlkZS5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvZmZzZXQgfSBmcm9tIFwiLi9vZmZzZXQuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9wcGVyT2Zmc2V0cyB9IGZyb20gXCIuL3BvcHBlck9mZnNldHMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldmVudE92ZXJmbG93IH0gZnJvbSBcIi4vcHJldmVudE92ZXJmbG93LmpzXCI7IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcyB8fCBjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWUgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdW21haW5BeGlzXSA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4oX21pbiwgdGV0aGVyTWluKSA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IG1hdGhNYXgoX21heCwgdGV0aGVyTWF4KSA6IF9tYXgpO1xuXG4gICAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXNdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbmltcG9ydCBvZmZzZXQgZnJvbSBcIi4vbW9kaWZpZXJzL29mZnNldC5qc1wiO1xuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSBcIi4vbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuL21vZGlmaWVycy9hcnJvdy5qc1wiO1xuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlcywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93LCBoaWRlXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyIsImltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyB2YXJpYXRpb25QbGFjZW1lbnRzLCBiYXNlUGxhY2VtZW50cywgcGxhY2VtZW50cyBhcyBhbGxQbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gYWxsUGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBUaGUgYGFsbG93ZWRBdXRvUGxhY2VtZW50c2Agb3B0aW9uIGRpZCBub3QgYWxsb3cgYW55JywgJ3BsYWNlbWVudHMuIEVuc3VyZSB0aGUgYHBsYWNlbWVudGAgb3B0aW9uIG1hdGNoZXMgdGhlIHZhcmlhdGlvbicsICdvZiB0aGUgYWxsb3dlZCBwbGFjZW1lbnRzLicsICdGb3IgZXhhbXBsZSwgXCJhdXRvXCIgY2Fubm90IGJlIHVzZWQgdG8gYWxsb3cgXCJib3R0b20tc3RhcnRcIi4nLCAnVXNlIFwiYXV0by1zdGFydFwiIGluc3RlYWQuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufSIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciByZWZlcmVuY2VFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2VFbGVtZW50KTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChzdHIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIFtdLmNvbmNhdChhcmdzKS5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHtcbiAgICByZXR1cm4gcC5yZXBsYWNlKC8lcy8sIGMpO1xuICB9LCBzdHIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufSIsImltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59IiwidmFyIGhhc2ggPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwidmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufSIsImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciByb3VuZCA9IE1hdGgucm91bmQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59IiwiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaXF1ZUJ5KGFyciwgZm4pIHtcbiAgdmFyIGlkZW50aWZpZXJzID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gZm4oaXRlbSk7XG5cbiAgICBpZiAoIWlkZW50aWZpZXJzLmhhcyhpZGVudGlmaWVyKSkge1xuICAgICAgaWRlbnRpZmllcnMuYWRkKGlkZW50aWZpZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn0iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCIuL2Zvcm1hdC5qc1wiO1xuaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX01PRElGSUVSX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHByb3ZpZGVkIGFuIGludmFsaWQgJXMgcHJvcGVydHksIGV4cGVjdGVkICVzIGJ1dCBnb3QgJXMnO1xudmFyIE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiByZXF1aXJlcyBcIiVzXCIsIGJ1dCBcIiVzXCIgbW9kaWZpZXIgaXMgbm90IGF2YWlsYWJsZSc7XG52YXIgVkFMSURfUFJPUEVSVElFUyA9IFsnbmFtZScsICdlbmFibGVkJywgJ3BoYXNlJywgJ2ZuJywgJ2VmZmVjdCcsICdyZXF1aXJlcycsICdvcHRpb25zJ107XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgT2JqZWN0LmtleXMobW9kaWZpZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCAnXCJuYW1lXCInLCAnXCJzdHJpbmdcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLm5hbWUpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlbmFibGVkJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmVuYWJsZWQgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZW5hYmxlZFwiJywgJ1wiYm9vbGVhblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZW5hYmxlZCkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdwaGFzZSc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyUGhhc2VzLmluZGV4T2YobW9kaWZpZXIucGhhc2UpIDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicGhhc2VcIicsIFwiZWl0aGVyIFwiICsgbW9kaWZpZXJQaGFzZXMuam9pbignLCAnKSwgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucGhhc2UpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmbic6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5mbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZm5cIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VmZmVjdCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lZmZlY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVmZmVjdFwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXMnOlxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlc0lmRXhpc3RzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzSWZFeGlzdHNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb3B0aW9ucyc6XG4gICAgICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlBvcHBlckpTOiBhbiBpbnZhbGlkIHByb3BlcnR5IGhhcyBiZWVuIHByb3ZpZGVkIHRvIHRoZSBcXFwiXCIgKyBtb2RpZmllci5uYW1lICsgXCJcXFwiIG1vZGlmaWVyLCB2YWxpZCBwcm9wZXJ0aWVzIGFyZSBcIiArIFZBTElEX1BST1BFUlRJRVMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBzICsgXCJcXFwiXCI7XG4gICAgICAgICAgfSkuam9pbignLCAnKSArIFwiOyBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwcm92aWRlZC5cIik7XG4gICAgICB9XG5cbiAgICAgIG1vZGlmaWVyLnJlcXVpcmVzICYmIG1vZGlmaWVyLnJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XG4gICAgICAgIGlmIChtb2RpZmllcnMuZmluZChmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZC5uYW1lID09PSByZXF1aXJlbWVudDtcbiAgICAgICAgfSkgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCByZXF1aXJlbWVudCwgcmVxdWlyZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSIsImltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuL21hdGguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcbiAgcmV0dXJuIG1hdGhNYXgobWluLCBtYXRoTWluKHZhbHVlLCBtYXgpKTtcbn0iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGRvbS9zZWxlY3Rvci1lbmdpbmUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOT0RFX1RFWFQgPSAzXG5cbmNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKVxuICB9LFxuXG4gIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICB9LFxuXG4gIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5lbGVtZW50LmNoaWxkcmVuKVxuICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG5cbiAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGVcblxuICAgIHdoaWxlIChhbmNlc3RvciAmJiBhbmNlc3Rvci5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgYW5jZXN0b3Iubm9kZVR5cGUgIT09IE5PREVfVEVYVCkge1xuICAgICAgaWYgKGFuY2VzdG9yLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIH1cblxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfSxcblxuICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbbmV4dF1cbiAgICAgIH1cblxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3JFbmdpbmVcbiIsImltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5jb25zdCB0b1R5cGUgPSBvYmogPT4ge1xuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGAke29ian1gXG4gIH1cblxuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1YmxpYyBVdGlsIEFwaVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICBkbyB7XG4gICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpXG4gIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG5cbiAgcmV0dXJuIHByZWZpeFxufVxuXG5jb25zdCBnZXRTZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKVxuXG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgIGxldCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHIgfHwgKCFocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGhyZWZBdHRyID0gYCMke2hyZWZBdHRyLnNwbGl0KCcjJylbMV19YFxuICAgIH1cblxuICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvclxufVxuXG5jb25zdCBnZXRTZWxlY3RvckZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxufVxuXG5jb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgbGV0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uRGVsYXkgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG5cbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbn1cblxuY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpXG59XG5cbmNvbnN0IGlzRWxlbWVudCA9IG9iaiA9PiB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodHlwZW9mIG9iai5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgb2JqID0gb2JqWzBdXG4gIH1cblxuICByZXR1cm4gdHlwZW9mIG9iai5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuY29uc3QgZ2V0RWxlbWVudCA9IG9iaiA9PiB7XG4gIGlmIChpc0VsZW1lbnQob2JqKSkgeyAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICAgIHJldHVybiBvYmouanF1ZXJ5ID8gb2JqWzBdIDogb2JqXG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgJiYgb2JqLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShvYmopXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBlbXVsYXRlVHJhbnNpdGlvbkVuZCA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcbiAgY29uc3QgZHVyYXRpb25QYWRkaW5nID0gNVxuICBjb25zdCBlbXVsYXRlZER1cmF0aW9uID0gZHVyYXRpb24gKyBkdXJhdGlvblBhZGRpbmdcblxuICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBsaXN0ZW5lcilcbiAgfVxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgbGlzdGVuZXIpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KVxuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbilcbn1cblxuY29uc3QgdHlwZUNoZWNrQ29uZmlnID0gKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpID0+IHtcbiAgT2JqZWN0LmtleXMoY29uZmlnVHlwZXMpLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZSAmJiBpc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYFxuICAgICAgKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuc3R5bGUgJiYgZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZSkge1xuICAgIGNvbnN0IGVsZW1lbnRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcbiAgICBjb25zdCBwYXJlbnROb2RlU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQucGFyZW50Tm9kZSlcblxuICAgIHJldHVybiBlbGVtZW50U3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmXG4gICAgICBwYXJlbnROb2RlU3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmXG4gICAgICBlbGVtZW50U3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbidcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkXG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdmYWxzZSdcbn1cblxuY29uc3QgZmluZFNoYWRvd1Jvb3QgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiBlbGVtZW50Lm9mZnNldEhlaWdodFxuXG5jb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHsgalF1ZXJ5IH0gPSB3aW5kb3dcblxuICBpZiAoalF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1uby1qcXVlcnknKSkge1xuICAgIHJldHVybiBqUXVlcnlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjaylcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJ1xuXG5jb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUVcbiAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV1cbiAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luXG4gICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGV4ZWN1dGUgPSBjYWxsYmFjayA9PiB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0VUlELFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIGlzRWxlbWVudCxcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIHR5cGVDaGVja0NvbmZpZyxcbiAgaXNWaXNpYmxlLFxuICBpc0Rpc2FibGVkLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgbm9vcCxcbiAgcmVmbG93LFxuICBnZXRqUXVlcnksXG4gIG9uRE9NQ29udGVudExvYWRlZCxcbiAgaXNSVEwsXG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkb20vZGF0YS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IGVsZW1lbnRNYXAgPSBuZXcgTWFwKClcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXQoZWxlbWVudCwga2V5LCBpbnN0YW5jZSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAvLyBjYW4gYmUgcmVtb3ZlZCBsYXRlciB3aGVuIG11bHRpcGxlIGtleS9pbnN0YW5jZXMgYXJlIGZpbmUgdG8gYmUgdXNlZFxuICAgIGlmICghaW5zdGFuY2VNYXAuaGFzKGtleSkgJiYgaW5zdGFuY2VNYXAuc2l6ZSAhPT0gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluc3RhbmNlTWFwLnNldChrZXksIGluc3RhbmNlKVxuICB9LFxuXG4gIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgaW5zdGFuY2VNYXAuZGVsZXRlKGtleSlcblxuICAgIC8vIGZyZWUgdXAgZWxlbWVudCByZWZlcmVuY2VzIGlmIHRoZXJlIGFyZSBubyBpbnN0YW5jZXMgbGVmdCBmb3IgYW4gZWxlbWVudFxuICAgIGlmIChpbnN0YW5jZU1hcC5zaXplID09PSAwKSB7XG4gICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkb20vZXZlbnQtaGFuZGxlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGdldGpRdWVyeSB9IGZyb20gJy4uL3V0aWwvaW5kZXgnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qL1xuY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovXG5jb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvXG5jb25zdCBldmVudFJlZ2lzdHJ5ID0ge30gLy8gRXZlbnRzIHN0b3JhZ2VcbmxldCB1aWRFdmVudCA9IDFcbmNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn1cbmNvbnN0IGN1c3RvbUV2ZW50c1JlZ2V4ID0gL14obW91c2VlbnRlcnxtb3VzZWxlYXZlKS9pXG5jb25zdCBuYXRpdmVFdmVudHMgPSBuZXcgU2V0KFtcbiAgJ2NsaWNrJyxcbiAgJ2RibGNsaWNrJyxcbiAgJ21vdXNldXAnLFxuICAnbW91c2Vkb3duJyxcbiAgJ2NvbnRleHRtZW51JyxcbiAgJ21vdXNld2hlZWwnLFxuICAnRE9NTW91c2VTY3JvbGwnLFxuICAnbW91c2VvdmVyJyxcbiAgJ21vdXNlb3V0JyxcbiAgJ21vdXNlbW92ZScsXG4gICdzZWxlY3RzdGFydCcsXG4gICdzZWxlY3RlbmQnLFxuICAna2V5ZG93bicsXG4gICdrZXlwcmVzcycsXG4gICdrZXl1cCcsXG4gICdvcmllbnRhdGlvbmNoYW5nZScsXG4gICd0b3VjaHN0YXJ0JyxcbiAgJ3RvdWNobW92ZScsXG4gICd0b3VjaGVuZCcsXG4gICd0b3VjaGNhbmNlbCcsXG4gICdwb2ludGVyZG93bicsXG4gICdwb2ludGVybW92ZScsXG4gICdwb2ludGVydXAnLFxuICAncG9pbnRlcmxlYXZlJyxcbiAgJ3BvaW50ZXJjYW5jZWwnLFxuICAnZ2VzdHVyZXN0YXJ0JyxcbiAgJ2dlc3R1cmVjaGFuZ2UnLFxuICAnZ2VzdHVyZWVuZCcsXG4gICdmb2N1cycsXG4gICdibHVyJyxcbiAgJ2NoYW5nZScsXG4gICdyZXNldCcsXG4gICdzZWxlY3QnLFxuICAnc3VibWl0JyxcbiAgJ2ZvY3VzaW4nLFxuICAnZm9jdXNvdXQnLFxuICAnbG9hZCcsXG4gICd1bmxvYWQnLFxuICAnYmVmb3JldW5sb2FkJyxcbiAgJ3Jlc2l6ZScsXG4gICdtb3ZlJyxcbiAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAncmVhZHlzdGF0ZWNoYW5nZScsXG4gICdlcnJvcicsXG4gICdhYm9ydCcsXG4gICdzY3JvbGwnXG5dKVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHJpdmF0ZSBtZXRob2RzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBnZXRVaWRFdmVudChlbGVtZW50LCB1aWQpIHtcbiAgcmV0dXJuICh1aWQgJiYgYCR7dWlkfTo6JHt1aWRFdmVudCsrfWApIHx8IGVsZW1lbnQudWlkRXZlbnQgfHwgdWlkRXZlbnQrK1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudChlbGVtZW50KSB7XG4gIGNvbnN0IHVpZCA9IGdldFVpZEV2ZW50KGVsZW1lbnQpXG5cbiAgZWxlbWVudC51aWRFdmVudCA9IHVpZFxuICBldmVudFJlZ2lzdHJ5W3VpZF0gPSBldmVudFJlZ2lzdHJ5W3VpZF0gfHwge31cblxuICByZXR1cm4gZXZlbnRSZWdpc3RyeVt1aWRdXG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IGVsZW1lbnRcblxuICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbilcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgW2V2ZW50XSlcbiAgfVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcblxuICAgIGZvciAobGV0IHsgdGFyZ2V0IH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgIGZvciAobGV0IGkgPSBkb21FbGVtZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgaWYgKGRvbUVsZW1lbnRzW2ldID09PSB0YXJnZXQpIHtcbiAgICAgICAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9jb25zaXN0ZW50LWRlc3RydWN0dXJpbmdcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0YXJnZXQsIFtldmVudF0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUbyBwbGVhc2UgRVNMaW50XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgY29uc3QgdWlkRXZlbnRMaXN0ID0gT2JqZWN0LmtleXMoZXZlbnRzKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB1aWRFdmVudExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1t1aWRFdmVudExpc3RbaV1dXG5cbiAgICBpZiAoZXZlbnQub3JpZ2luYWxIYW5kbGVyID09PSBoYW5kbGVyICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gZXZlbnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICBjb25zdCBkZWxlZ2F0aW9uID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnXG4gIGNvbnN0IG9yaWdpbmFsSGFuZGxlciA9IGRlbGVnYXRpb24gPyBkZWxlZ2F0aW9uRm4gOiBoYW5kbGVyXG5cbiAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudClcbiAgY29uc3QgaXNOYXRpdmUgPSBuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudClcblxuICBpZiAoIWlzTmF0aXZlKSB7XG4gICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgfVxuXG4gIHJldHVybiBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdXG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbiwgb25lT2ZmKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBoYW5kbGVyID0gZGVsZWdhdGlvbkZuXG4gICAgZGVsZWdhdGlvbkZuID0gbnVsbFxuICB9XG5cbiAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgaWYgKGN1c3RvbUV2ZW50c1JlZ2V4LnRlc3Qob3JpZ2luYWxUeXBlRXZlbnQpKSB7XG4gICAgY29uc3Qgd3JhcEZuID0gZm4gPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmICFldmVudC5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkpIHtcbiAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZWxlZ2F0aW9uRm4pIHtcbiAgICAgIGRlbGVnYXRpb25GbiA9IHdyYXBGbihkZWxlZ2F0aW9uRm4pXG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZXIgPSB3cmFwRm4oaGFuZGxlcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pXG4gIGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50KGVsZW1lbnQpXG4gIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pXG4gIGNvbnN0IHByZXZpb3VzRm4gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgb3JpZ2luYWxIYW5kbGVyLCBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGwpXG5cbiAgaWYgKHByZXZpb3VzRm4pIHtcbiAgICBwcmV2aW91c0ZuLm9uZU9mZiA9IHByZXZpb3VzRm4ub25lT2ZmICYmIG9uZU9mZlxuXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChvcmlnaW5hbEhhbmRsZXIsIG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSlcbiAgY29uc3QgZm4gPSBkZWxlZ2F0aW9uID9cbiAgICBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIDpcbiAgICBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIpXG5cbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsXG4gIGZuLm9yaWdpbmFsSGFuZGxlciA9IG9yaWdpbmFsSGFuZGxlclxuICBmbi5vbmVPZmYgPSBvbmVPZmZcbiAgZm4udWlkRXZlbnQgPSB1aWRcbiAgaGFuZGxlcnNbdWlkXSA9IGZuXG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGRlbGVnYXRpb24pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpXG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSlcbiAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XVxufVxuXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG5cbiAgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmZvckVhY2goaGFuZGxlcktleSA9PiB7XG4gICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtoYW5kbGVyS2V5XVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5vcmlnaW5hbEhhbmRsZXIsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50XG59XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbiwgZmFsc2UpXG4gIH0sXG5cbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIHRydWUpXG4gIH0sXG5cbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtcyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gdHlwZUV2ZW50ICE9PSBvcmlnaW5hbFR5cGVFdmVudFxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50KGVsZW1lbnQpXG4gICAgY29uc3QgaXNOYW1lc3BhY2UgPSBvcmlnaW5hbFR5cGVFdmVudC5zdGFydHNXaXRoKCcuJylcblxuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxIYW5kbGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICBpZiAoIWV2ZW50cyB8fCAhZXZlbnRzW3R5cGVFdmVudF0pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG9yaWdpbmFsSGFuZGxlciwgZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZWxlbWVudEV2ZW50ID0+IHtcbiAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuICAgIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5mb3JFYWNoKGtleUhhbmRsZXJzID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKVxuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRba2V5SGFuZGxlcnNdXG5cbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQub3JpZ2luYWxIYW5kbGVyLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgY29uc3QgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KGV2ZW50KVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudFxuICAgIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpXG5cbiAgICBsZXQgalF1ZXJ5RXZlbnRcbiAgICBsZXQgYnViYmxlcyA9IHRydWVcbiAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlXG4gICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICAgIGxldCBldnQgPSBudWxsXG5cbiAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpXG4gICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICAgIH1cblxuICAgIGlmIChpc05hdGl2ZSkge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKVxuICAgICAgZXZ0LmluaXRFdmVudCh0eXBlRXZlbnQsIGJ1YmJsZXMsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICBidWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIG1lcmdlIGN1c3RvbSBpbmZvcm1hdGlvbiBpbiBvdXIgZXZlbnRcbiAgICBpZiAodHlwZW9mIGFyZ3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldnQsIGtleSwge1xuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmdzW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgdHlwZW9mIGpRdWVyeUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybiBldnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IHtcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGV4ZWN1dGUsXG4gIGdldEVsZW1lbnQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50XG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVkVSU0lPTiA9ICc1LjAuMSdcblxuY2xhc3MgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcblxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcbiAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGxcbiAgICB9KVxuICB9XG5cbiAgX3F1ZXVlQ2FsbGJhY2soY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgaWYgKCFpc0FuaW1hdGVkKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICBFdmVudEhhbmRsZXIub25lKGVsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4gZXhlY3V0ZShjYWxsYmFjaykpXG5cbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChlbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gIH1cblxuICAvKiogU3RhdGljICovXG5cbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXQoZWxlbWVudCwgdGhpcy5EQVRBX0tFWSlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJylcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIGBicy4ke3RoaXMuTkFNRX1gXG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3Jcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnYWxlcnQnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5hbGVydCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBTRUxFQ1RPUl9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJhbGVydFwiXSdcblxuY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQUxFUlQgPSAnYWxlcnQnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgY2xvc2UoZWxlbWVudCkge1xuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZWxlbWVudCA/IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIDogdGhpcy5fZWxlbWVudFxuICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gdGhpcy5fdHJpZ2dlckNsb3NlRXZlbnQocm9vdEVsZW1lbnQpXG5cbiAgICBpZiAoY3VzdG9tRXZlbnQgPT09IG51bGwgfHwgY3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChyb290RWxlbWVudClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Um9vdEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHx8IGVsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9BTEVSVH1gKVxuICB9XG5cbiAgX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfQ0xPU0UpXG4gIH1cblxuICBfcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50KSwgZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfQ0xPU0VEKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVEaXNtaXNzKGFsZXJ0SW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBhbGVydEluc3RhbmNlLmNsb3NlKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfRElTTUlTUywgQWxlcnQuaGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSkpXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5BbGVydCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihBbGVydClcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnYnV0dG9uJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYnV0dG9uJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiYnV0dG9uXCJdJ1xuXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgLy8gVG9nZ2xlIGNsYXNzIGFuZCBzeW5jIHRoZSBgYXJpYS1wcmVzc2VkYCBhdHRyaWJ1dGUgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgLnRvZ2dsZSgpYCBtZXRob2RcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBCdXR0b24odGhpcylcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gIGxldCBkYXRhID0gRGF0YS5nZXQoYnV0dG9uLCBEQVRBX0tFWSlcbiAgaWYgKCFkYXRhKSB7XG4gICAgZGF0YSA9IG5ldyBCdXR0b24oYnV0dG9uKVxuICB9XG5cbiAgZGF0YS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkJ1dHRvbiB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihCdXR0b24pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkb20vbWFuaXB1bGF0b3IuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbCkge1xuICBpZiAodmFsID09PSAndHJ1ZScpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gTnVtYmVyKHZhbCkudG9TdHJpbmcoKSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsKVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gJycgfHwgdmFsID09PSAnbnVsbCcpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YClcbn1cblxuY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKVxuICB9LFxuXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YClcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge31cblxuICAgIE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldClcbiAgICAgIC5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKCdicycpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IHB1cmVLZXkgPSBrZXkucmVwbGFjZSgvXmJzLywgJycpXG4gICAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aClcbiAgICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pXG4gICAgICB9KVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKVxuICB9LFxuXG4gIG9mZnNldChlbGVtZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRcbiAgICB9XG4gIH0sXG5cbiAgcG9zaXRpb24oZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmlwdWxhdG9yXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Nhcm91c2VsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzbGlkZTogZmFsc2UsXG4gIHBhdXNlOiAnaG92ZXInLFxuICB3cmFwOiB0cnVlLFxuICB0b3VjaDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2xpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgd3JhcDogJ2Jvb2xlYW4nLFxuICB0b3VjaDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSAnLmFjdGl2ZS5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX05FWFRfUFJFViA9ICcuY2Fyb3VzZWwtaXRlbS1uZXh0LCAuY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUiA9ICdbZGF0YS1icy10YXJnZXRdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCdcbmNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pdGVtcyA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMudG91Y2hTdGFydFggPSAwXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgbmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVClcbiAgICB9XG4gIH1cblxuICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVilcbiAgICB9XG4gIH1cblxuICBwYXVzZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX05FWFRfUFJFViwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgICB0aGlzLmN5Y2xlKHRydWUpXG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgfVxuXG4gIGN5Y2xlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLmludGVydmFsICYmICF0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKVxuXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID8gdGhpcy5uZXh0V2hlblZpc2libGUgOiB0aGlzLm5leHQpLmJpbmQodGhpcyksXG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHRvKGluZGV4KSB7XG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudClcblxuICAgIGlmIChpbmRleCA+IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyID0gaW5kZXggPiBhY3RpdmVJbmRleCA/XG4gICAgICBPUkRFUl9ORVhUIDpcbiAgICAgIE9SREVSX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKG9yZGVyLCB0aGlzLl9pdGVtc1tpbmRleF0pXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YXggPSBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRheCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRheCAvIHRoaXMudG91Y2hEZWx0YVhcblxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fc2xpZGUoZGlyZWN0aW9uID4gMCA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUKVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiwgZXZlbnQgPT4gdGhpcy5wYXVzZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgZXZlbnQgPT4gdGhpcy5jeWNsZShldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiB0aGlzLl90b3VjaFN1cHBvcnRlZCkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKSkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQuY2xpZW50WFxuICAgICAgfSBlbHNlIGlmICghdGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlID0gZXZlbnQgPT4ge1xuICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxID9cbiAgICAgICAgMCA6XG4gICAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoZXZlbnQgPT4gdGhpcy5jeWNsZShldmVudCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkuZm9yRWFjaChpdGVtSW1nID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihpdGVtSW1nLCBFVkVOVF9EUkFHX1NUQVJULCBlID0+IGUucHJldmVudERlZmF1bHQoKSlcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiBzdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUlVQLCBldmVudCA9PiBlbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNITU9WRSwgZXZlbnQgPT4gbW92ZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hFTkQsIGV2ZW50ID0+IGVuZChldmVudCkpXG4gICAgfVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX0xFRlRfS0VZKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fUklHSFQpXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IEFSUk9XX1JJR0hUX0tFWSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5fc2xpZGUoRElSRUNUSU9OX0xFRlQpXG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgdGhpcy5faXRlbXMgPSBlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZSA/XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU0sIGVsZW1lbnQucGFyZW50Tm9kZSkgOlxuICAgICAgW11cblxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGVsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbUJ5T3JkZXIob3JkZXIsIGFjdGl2ZUVsZW1lbnQpIHtcbiAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVFxuICAgIGNvbnN0IGlzUHJldiA9IG9yZGVyID09PSBPUkRFUl9QUkVWXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBsYXN0SXRlbUluZGV4ID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMVxuICAgIGNvbnN0IGlzR29pbmdUb1dyYXAgPSAoaXNQcmV2ICYmIGFjdGl2ZUluZGV4ID09PSAwKSB8fCAoaXNOZXh0ICYmIGFjdGl2ZUluZGV4ID09PSBsYXN0SXRlbUluZGV4KVxuXG4gICAgaWYgKGlzR29pbmdUb1dyYXAgJiYgIXRoaXMuX2NvbmZpZy53cmFwKSB7XG4gICAgICByZXR1cm4gYWN0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhID0gaXNQcmV2ID8gLTEgOiAxXG4gICAgY29uc3QgaXRlbUluZGV4ID0gKGFjdGl2ZUluZGV4ICsgZGVsdGEpICUgdGhpcy5faXRlbXMubGVuZ3RoXG5cbiAgICByZXR1cm4gaXRlbUluZGV4ID09PSAtMSA/XG4gICAgICB0aGlzLl9pdGVtc1t0aGlzLl9pdGVtcy5sZW5ndGggLSAxXSA6XG4gICAgICB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdXG4gIH1cblxuICBfdHJpZ2dlclNsaWRlRXZlbnQocmVsYXRlZFRhcmdldCwgZXZlbnREaXJlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgocmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBmcm9tSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudCkpXG5cbiAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJREUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGZyb21JbmRleCxcbiAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgIH0pXG4gIH1cblxuICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICAgIGFjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcblxuICAgICAgY29uc3QgaW5kaWNhdG9ycyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ESUNBVE9SLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2F0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChOdW1iZXIucGFyc2VJbnQoaW5kaWNhdG9yc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKSwgMTApID09PSB0aGlzLl9nZXRJdGVtSW5kZXgoZWxlbWVudCkpIHtcbiAgICAgICAgICBpbmRpY2F0b3JzW2ldLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAgICAgaW5kaWNhdG9yc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJylcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMClcblxuICAgIGlmIChlbGVtZW50SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgfVxuICB9XG5cbiAgX3NsaWRlKGRpcmVjdGlvbk9yT3JkZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBvcmRlciA9IHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uT3JPcmRlcilcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5fZ2V0SXRlbUJ5T3JkZXIob3JkZXIsIGFjdGl2ZUVsZW1lbnQpXG5cbiAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KVxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG5cbiAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVFxuICAgIGNvbnN0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9TVEFSVCA6IENMQVNTX05BTUVfRU5EXG4gICAgY29uc3Qgb3JkZXJDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX05FWFQgOiBDTEFTU19OQU1FX1BSRVZcbiAgICBjb25zdCBldmVudERpcmVjdGlvbk5hbWUgPSB0aGlzLl9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKVxuXG4gICAgaWYgKG5leHRFbGVtZW50ICYmIG5leHRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gdGhpcy5fdHJpZ2dlclNsaWRlRXZlbnQobmV4dEVsZW1lbnQsIGV2ZW50RGlyZWN0aW9uTmFtZSlcbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnQpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBjb25zdCB0cmlnZ2VyU2xpZEV2ZW50ID0gKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpKSB7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgICByZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKVxuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSwgb3JkZXJDbGFzc05hbWUsIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgICAgc2V0VGltZW91dCh0cmlnZ2VyU2xpZEV2ZW50LCAwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIGFjdGl2ZUVsZW1lbnQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICB0cmlnZ2VyU2xpZEV2ZW50KClcbiAgICB9XG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBfZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pIHtcbiAgICBpZiAoIVtESVJFQ1RJT05fUklHSFQsIERJUkVDVElPTl9MRUZUXS5pbmNsdWRlcyhkaXJlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uXG4gICAgfVxuXG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfUFJFViA6IE9SREVSX05FWFRcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWXG4gIH1cblxuICBfb3JkZXJUb0RpcmVjdGlvbihvcmRlcikge1xuICAgIGlmICghW09SREVSX05FWFQsIE9SREVSX1BSRVZdLmluY2x1ZGVzKG9yZGVyKSkge1xuICAgICAgcmV0dXJuIG9yZGVyXG4gICAgfVxuXG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUXG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlRcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBjYXJvdXNlbEludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGxldCBfY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICBfY29uZmlnID0ge1xuICAgICAgICAuLi5fY29uZmlnLFxuICAgICAgICAuLi5jb25maWdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGVcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbChlbGVtZW50LCBfY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgZGF0YS50byhjb25maWcpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7YWN0aW9ufVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVthY3Rpb25dKClcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwgJiYgX2NvbmZpZy5yaWRlKSB7XG4gICAgICBkYXRhLnBhdXNlKClcbiAgICAgIGRhdGEuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRhcmdldCksXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKVxuICAgIH1cbiAgICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNvbmZpZy5pbnRlcnZhbCA9IGZhbHNlXG4gICAgfVxuXG4gICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UodGFyZ2V0LCBjb25maWcpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgRGF0YS5nZXQodGFyZ2V0LCBEQVRBX0tFWSkudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBDYXJvdXNlbC5kYXRhQXBpQ2xpY2tIYW5kbGVyKVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjYXJvdXNlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZShjYXJvdXNlbHNbaV0sIERhdGEuZ2V0KGNhcm91c2Vsc1tpXSwgREFUQV9LRVkpKVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQ2Fyb3VzZWwgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ2Fyb3VzZWwpXG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50LFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnY29sbGFwc2UnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICB0b2dnbGU6IHRydWUsXG4gIHBhcmVudDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHRvZ2dsZTogJ2Jvb2xlYW4nLFxuICBwYXJlbnQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnXG5cbmNvbnN0IFdJRFRIID0gJ3dpZHRoJ1xuY29uc3QgSEVJR0hUID0gJ2hlaWdodCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFUyA9ICcuc2hvdywgLmNvbGxhcHNpbmcnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gU2VsZWN0b3JFbmdpbmUuZmluZChcbiAgICAgIGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtocmVmPVwiIyR7dGhpcy5fZWxlbWVudC5pZH1cIl0sYCArXG4gICAgICBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1bZGF0YS1icy10YXJnZXQ9XCIjJHt0aGlzLl9lbGVtZW50LmlkfVwiXWBcbiAgICApXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAgICAgLmZpbHRlcihmb3VuZEVsZW0gPT4gZm91bmRFbGVtID09PSB0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGxcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlc1xuICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgYWN0aXZlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQUNUSVZFUywgdGhpcy5fcGFyZW50KVxuICAgICAgICAuZmlsdGVyKGVsZW0gPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1wYXJlbnQnKSA9PT0gdGhpcy5fY29uZmlnLnBhcmVudFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgICB9KVxuXG4gICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWN0aXZlcyA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRoaXMuX3NlbGVjdG9yKVxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBjb25zdCB0ZW1wQWN0aXZlRGF0YSA9IGFjdGl2ZXMuZmluZChlbGVtID0+IGNvbnRhaW5lciAhPT0gZWxlbSlcbiAgICAgIGFjdGl2ZXNEYXRhID0gdGVtcEFjdGl2ZURhdGEgPyBEYXRhLmdldCh0ZW1wQWN0aXZlRGF0YSwgREFUQV9LRVkpIDogbnVsbFxuXG4gICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgYWN0aXZlcy5mb3JFYWNoKGVsZW1BY3RpdmUgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyICE9PSBlbGVtQWN0aXZlKSB7XG4gICAgICAgICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UoZWxlbUFjdGl2ZSwgJ2hpZGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhY3RpdmVzRGF0YSkge1xuICAgICAgICAgIERhdGEuc2V0KGVsZW1BY3RpdmUsIERBVEFfS0VZLCBudWxsKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgaWYgKHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuICAgIH1cblxuICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoXG4gICAgaWYgKHRyaWdnZXJBcnJheUxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlckFycmF5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXVxuICAgICAgICBjb25zdCBlbGVtID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICAgIGlmIChlbGVtICYmICFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmdcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhXSURUSCkgPyBXSURUSCA6IEhFSUdIVFxuICB9XG5cbiAgX2dldFBhcmVudCgpIHtcbiAgICBsZXQgeyBwYXJlbnQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgcGFyZW50ID0gZ2V0RWxlbWVudChwYXJlbnQpXG5cbiAgICBjb25zdCBzZWxlY3RvciA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtkYXRhLWJzLXBhcmVudD1cIiR7cGFyZW50fVwiXWBcblxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHBhcmVudClcbiAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudClcblxuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoXG4gICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgW2VsZW1lbnRdXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGlmICghZWxlbWVudCB8fCAhdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNPcGVuID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdHJpZ2dlckFycmF5LmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgIH1cblxuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBjb2xsYXBzZUludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZShlbGVtZW50LCBfY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UodGhpcywgY29uZmlnKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgfHwgKGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnRhZ05hbWUgPT09ICdBJykpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCB0cmlnZ2VyRGF0YSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuICBjb25zdCBzZWxlY3RvckVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcblxuICBzZWxlY3RvckVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGxldCBjb25maWdcbiAgICBpZiAoZGF0YSkge1xuICAgICAgLy8gdXBkYXRlIHBhcmVudCBhdHRyaWJ1dGVcbiAgICAgIGlmIChkYXRhLl9wYXJlbnQgPT09IG51bGwgJiYgdHlwZW9mIHRyaWdnZXJEYXRhLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZGF0YS5fY29uZmlnLnBhcmVudCA9IHRyaWdnZXJEYXRhLnBhcmVudFxuICAgICAgICBkYXRhLl9wYXJlbnQgPSBkYXRhLl9nZXRQYXJlbnQoKVxuICAgICAgfVxuXG4gICAgICBjb25maWcgPSAndG9nZ2xlJ1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSB0cmlnZ2VyRGF0YVxuICAgIH1cblxuICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZylcbiAgfSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Db2xsYXBzZSB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDb2xsYXBzZSlcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNEaXNhYmxlZCxcbiAgaXNFbGVtZW50LFxuICBpc1Zpc2libGUsXG4gIGlzUlRMLFxuICBub29wLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Ryb3Bkb3duJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5jb25zdCBTUEFDRV9LRVkgPSAnU3BhY2UnXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMiAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG5jb25zdCBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZfXwke0FSUk9XX0RPV05fS0VZfXwke0VTQ0FQRV9LRVl9YClcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9OQVZCQVIgPSAnbmF2YmFyJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXSdcbmNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiBbMCwgMl0sXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJyxcbiAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICBwb3BwZXJDb25maWc6IG51bGwsXG4gIGF1dG9DbG9zZTogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgYXV0b0Nsb3NlOiAnKGJvb2xlYW58c3RyaW5nKSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9tZW51ID0gdGhpcy5fZ2V0TWVudUVsZW1lbnQoKVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNob3coKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVG90YWxseSBkaXNhYmxlIFBvcHBlciBmb3IgRHJvcGRvd25zIGluIE5hdmJhclxuICAgIGlmICh0aGlzLl9pbk5hdmJhcikge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ25vbmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgICAgY29uc3QgaXNEaXNwbGF5U3RhdGljID0gcG9wcGVyQ29uZmlnLm1vZGlmaWVycy5maW5kKG1vZGlmaWVyID0+IG1vZGlmaWVyLm5hbWUgPT09ICdhcHBseVN0eWxlcycgJiYgbW9kaWZpZXIuZW5hYmxlZCA9PT0gZmFsc2UpXG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKVxuXG4gICAgICBpZiAoaXNEaXNwbGF5U3RhdGljKSB7XG4gICAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdzdGF0aWMnKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgIXBhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWxlbSA9PiBFdmVudEhhbmRsZXIub24oZWxlbSwgJ21vdXNlb3ZlcicsIG5vb3ApKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfU0hPVylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0ssIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9KVxuICB9XG5cbiAgX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSwgcmVsYXRlZFRhcmdldClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWxlbSA9PiBFdmVudEhhbmRsZXIub2ZmKGVsZW0sICdtb3VzZW92ZXInLCBub29wKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGNvbmZpZy5yZWZlcmVuY2UpICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke05BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcInJlZmVyZW5jZVwiIHByb3ZpZGVkIHR5cGUgXCJvYmplY3RcIiB3aXRob3V0IGEgcmVxdWlyZWQgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIiBtZXRob2QuYClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF1cbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfTkFWQkFSfWApICE9PSBudWxsXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWwgPT4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdE1lbnVJdGVtKGV2ZW50KSB7XG4gICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHRoaXMuX21lbnUpLmZpbHRlcihpc1Zpc2libGUpXG5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpXG5cbiAgICAvLyBVcFxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSAmJiBpbmRleCA+IDApIHtcbiAgICAgIGluZGV4LS1cbiAgICB9XG5cbiAgICAvLyBEb3duXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfRE9XTl9LRVkgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgLy8gaW5kZXggaXMgLTEgaWYgdGhlIGZpcnN0IGtleWRvd24gaXMgYW4gQXJyb3dVcFxuICAgIGluZGV4ID0gaW5kZXggPT09IC0xID8gMCA6IGluZGV4XG5cbiAgICBpdGVtc1tpbmRleF0uZm9jdXMoKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGRyb3Bkb3duSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gRGF0YS5nZXQoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IERyb3Bkb3duKGVsZW1lbnQsIF9jb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBEcm9wZG93bi5kcm9wZG93bkludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIChldmVudC5idXR0b24gPT09IFJJR0hUX01PVVNFX0JVVFRPTiB8fCAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgIT09IFRBQl9LRVkpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgY29udGV4dCA9IERhdGEuZ2V0KHRvZ2dsZXNbaV0sIERBVEFfS0VZKVxuICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmICghY29udGV4dC5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKVxuICAgICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9lbGVtZW50KSB8fFxuICAgICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRQYXJlbnRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIEFuZCBub3QgYSBrZXkgaW4gUkVHRVhQX0tFWURPV04gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIElmIHNwYWNlIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gIC0gSWYga2V5IGlzIG90aGVyIHRoYW4gZXNjYXBlXG4gICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAgIC0gSWYgdHJpZ2dlciBpbnNpZGUgdGhlIG1lbnUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSA/XG4gICAgICBldmVudC5rZXkgPT09IFNQQUNFX0tFWSB8fCAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZICYmXG4gICAgICAoKGV2ZW50LmtleSAhPT0gQVJST1dfRE9XTl9LRVkgJiYgZXZlbnQua2V5ICE9PSBBUlJPV19VUF9LRVkpIHx8XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX01FTlUpKSkgOlxuICAgICAgIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQua2V5KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gKCkgPT4gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgZ2V0VG9nZ2xlQnV0dG9uKCkuZm9jdXMoKVxuICAgICAgRHJvcGRvd24uY2xlYXJNZW51cygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSB8fCBldmVudC5rZXkgPT09IEFSUk9XX0RPV05fS0VZKSkge1xuICAgICAgZ2V0VG9nZ2xlQnV0dG9uKCkuY2xpY2soKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCBldmVudC5rZXkgPT09IFNQQUNFX0tFWSkge1xuICAgICAgRHJvcGRvd24uY2xlYXJNZW51cygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBEcm9wZG93bi5nZXRJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24oKSkuX3NlbGVjdE1lbnVJdGVtKGV2ZW50KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBEcm9wZG93bi5kcm9wZG93bkludGVyZmFjZSh0aGlzKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkRyb3Bkb3duIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB1dGlsL3Njcm9sbEJhci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvcidcblxuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5cbmNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKVxufVxuXG5jb25zdCBoaWRlID0gKHdpZHRoID0gZ2V0V2lkdGgoKSkgPT4ge1xuICBfZGlzYWJsZU92ZXJGbG93KClcbiAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZXMgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKCdib2R5JywgJ3BhZGRpbmdSaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMsIHRvIGtlZXAgc2hvd24gZnVsbHdpZHRoXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCAncGFkZGluZ1JpZ2h0JywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsICdtYXJnaW5SaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aClcbn1cblxuY29uc3QgX2Rpc2FibGVPdmVyRmxvdyA9ICgpID0+IHtcbiAgY29uc3QgYWN0dWFsVmFsdWUgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93XG4gIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93JywgYWN0dWFsVmFsdWUpXG4gIH1cblxuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbn1cblxuY29uc3QgX3NldEVsZW1lbnRBdHRyaWJ1dGVzID0gKHNlbGVjdG9yLCBzdHlsZVByb3AsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZ2V0V2lkdGgoKVxuICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdXG4gICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtzdHlsZVByb3BdXG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcCwgYWN0dWFsVmFsdWUpXG4gICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGBcbiAgICB9KVxufVxuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoJ2JvZHknLCAnb3ZlcmZsb3cnKVxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcygnYm9keScsICdwYWRkaW5nUmlnaHQnKVxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCAncGFkZGluZ1JpZ2h0JylcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsICdtYXJnaW5SaWdodCcpXG59XG5cbmNvbnN0IF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzID0gKHNlbGVjdG9yLCBzdHlsZVByb3ApID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wKVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcClcbiAgICB9IGVsc2Uge1xuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApXG4gICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSB2YWx1ZVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSAoKSA9PiB7XG4gIHJldHVybiBnZXRXaWR0aCgpID4gMFxufVxuXG5leHBvcnQge1xuICBnZXRXaWR0aCxcbiAgaGlkZSxcbiAgaXNCb2R5T3ZlcmZsb3dpbmcsXG4gIHJlc2V0XG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHV0aWwvYmFja2Ryb3AuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgeyBlbXVsYXRlVHJhbnNpdGlvbkVuZCwgZXhlY3V0ZSwgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsIHJlZmxvdywgdHlwZUNoZWNrQ29uZmlnIH0gZnJvbSAnLi9pbmRleCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaXNWaXNpYmxlOiB0cnVlLCAvLyBpZiBmYWxzZSwgd2UgdXNlIHRoZSBiYWNrZHJvcCBoZWxwZXIgd2l0aG91dCBhZGRpbmcgYW55IGVsZW1lbnQgdG8gdGhlIGRvbVxuICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgcm9vdEVsZW1lbnQ6IGRvY3VtZW50LmJvZHksIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbiAgY2xpY2tDYWxsYmFjazogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaXNWaXNpYmxlOiAnYm9vbGVhbicsXG4gIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgcm9vdEVsZW1lbnQ6ICdlbGVtZW50JyxcbiAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbn1cbmNvbnN0IE5BTUUgPSAnYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ21vZGFsLWJhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUV9YFxuXG5jbGFzcyBCYWNrZHJvcCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIHNob3coY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hcHBlbmQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3codGhpcy5fZ2V0RWxlbWVudCgpKVxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwb3NlKClcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IENMQVNTX05BTUVfQkFDS0RST1BcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGNvbmZpZy5yb290RWxlbWVudCA9IGNvbmZpZy5yb290RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FwcGVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2dldEVsZW1lbnQoKSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9nZXRFbGVtZW50KCksIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuICAgICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuY2xpY2tDYWxsYmFjaylcbiAgICB9KVxuXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWVcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTilcblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gIH1cblxuICBfZW11bGF0ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2dldEVsZW1lbnQoKSlcbiAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2dldEVsZW1lbnQoKSwgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiBleGVjdXRlKGNhbGxiYWNrKSlcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9nZXRFbGVtZW50KCksIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tkcm9wXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgeyBnZXRXaWR0aCBhcyBnZXRTY3JvbGxCYXJXaWR0aCwgaGlkZSBhcyBzY3JvbGxCYXJIaWRlLCByZXNldCBhcyBzY3JvbGxCYXJSZXNldCB9IGZyb20gJy4vdXRpbC9zY3JvbGxiYXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdtb2RhbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm1vZGFsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBmb2N1czogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgZm9jdXM6ICdib29sZWFuJ1xufVxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRVVQX0RJU01JU1MgPSBgbW91c2V1cC5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLW9wZW4nXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJ1xuXG5jb25zdCBTRUxFQ1RPUl9ESUFMT0cgPSAnLm1vZGFsLWRpYWxvZydcbmNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgc2Nyb2xsQmFySGlkZSgpXG5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9PUEVOKVxuXG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCBldmVudCA9PiB0aGlzLmhpZGUoZXZlbnQpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2RpYWxvZywgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VVUF9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2lzQW5pbWF0ZWQoKVxuXG4gICAgaWYgKGlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9kaWFsb2csIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9oaWRlTW9kYWwoKSwgdGhpcy5fZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgW3dpbmRvdywgdGhpcy5fZGlhbG9nXVxuICAgICAgLmZvckVhY2goaHRtbEVsZW1lbnQgPT4gRXZlbnRIYW5kbGVyLm9mZihodG1sRWxlbWVudCwgRVZFTlRfS0VZKSlcblxuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuXG4gICAgLyoqXG4gICAgICogYGRvY3VtZW50YCBoYXMgMiBldmVudHMgYEVWRU5UX0ZPQ1VTSU5gIGFuZCBgRVZFTlRfQ0xJQ0tfREFUQV9BUElgXG4gICAgICogRG8gbm90IG1vdmUgYGRvY3VtZW50YCBpbiBgaHRtbEVsZW1lbnRzYCBhcnJheVxuICAgICAqIEl0IHdpbGwgcmVtb3ZlIGBFVkVOVF9DTElDS19EQVRBX0FQSWAgZXZlbnQgdGhhdCBzaG91bGQgcmVtYWluXG4gICAgICovXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBpc1Zpc2libGU6IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSwgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlXG4gICAgICBpc0FuaW1hdGVkOiB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICB9KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5faXNBbmltYXRlZCgpXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fCB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAvLyBEb24ndCBtb3ZlIG1vZGFsJ3MgRE9NIHBvc2l0aW9uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG5cbiAgICBpZiAobW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKHRyYW5zaXRpb25Db21wbGV0ZSwgdGhpcy5fZGlhbG9nLCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgX2VuZm9yY2VGb2N1cygpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHtcbiAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgIXRoaXMuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MpXG4gICAgfVxuICB9XG5cbiAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHRoaXMuX2FkanVzdERpYWxvZygpKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHdpbmRvdywgRVZFTlRfUkVTSVpFKVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICBzY3JvbGxCYXJSZXNldCgpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfSlcbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coY2FsbGJhY2spXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKVxuICAgIGNvbnN0IG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnKVxuICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJydcbiAgICAgICAgfSlcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9XG4gICAgfSlcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxCYXJXaWR0aCgpXG4gICAgY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSBzY3JvbGxiYXJXaWR0aCA+IDBcblxuICAgIGlmICgoIWlzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZyAmJiAhaXNSVEwoKSkgfHwgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgaXNSVEwoKSkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAoKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgIWlzUlRMKCkpIHx8ICghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nICYmIGlzUlRMKCkpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0SW5zdGFuY2UodGhpcykgfHwgbmV3IE1vZGFsKHRoaXMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVywgc2hvd0V2ZW50ID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0SW5zdGFuY2UodGFyZ2V0KSB8fCBuZXcgTW9kYWwodGFyZ2V0KVxuXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuTW9kYWwgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTW9kYWwpXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IG9mZmNhbnZhcy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc0Rpc2FibGVkLFxuICBpc1Zpc2libGUsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgeyBoaWRlIGFzIHNjcm9sbEJhckhpZGUsIHJlc2V0IGFzIHNjcm9sbEJhclJlc2V0IH0gZnJvbSAnLi91dGlsL3Njcm9sbGJhcidcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnb2ZmY2FudmFzJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMub2ZmY2FudmFzJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzY3JvbGw6IGZhbHNlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJ2Jvb2xlYW4nLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzY3JvbGw6ICdib29sZWFuJ1xufVxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93J1xuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwib2ZmY2FudmFzXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwib2ZmY2FudmFzXCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgIHNjcm9sbEJhckhpZGUoKVxuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzT25FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcbiAgICB0aGlzLl9lbGVtZW50LmJsdXIoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICBzY3JvbGxCYXJSZXNldCgpXG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbGJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGlzVmlzaWJsZTogdGhpcy5fY29uZmlnLmJhY2tkcm9wLFxuICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICBjbGlja0NhbGxiYWNrOiAoKSA9PiB0aGlzLmhpZGUoKVxuICAgIH0pXG4gIH1cblxuICBfZW5mb3JjZUZvY3VzT25FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHtcbiAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgIGVsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAhZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gICAgZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgKCkgPT4gdGhpcy5oaWRlKCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKSB8fCBuZXcgT2ZmY2FudmFzKHRoaXMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICB0aGlzLmZvY3VzKClcbiAgICB9XG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgY29uc3QgYWxsUmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxsUmVhZHlPcGVuICYmIGFsbFJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgT2ZmY2FudmFzLmdldEluc3RhbmNlKGFsbFJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gRGF0YS5nZXQodGFyZ2V0LCBEQVRBX0tFWSkgfHwgbmV3IE9mZmNhbnZhcyh0YXJnZXQpXG5cbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKS5mb3JFYWNoKGVsID0+IChEYXRhLmdldChlbCwgREFUQV9LRVkpIHx8IG5ldyBPZmZjYW52YXMoZWwpKS5zaG93KCkpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXNcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogdXRpbC9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCB1cmlBdHRycyA9IG5ldyBTZXQoW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXSlcblxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvaVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2lcblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZSA9IChhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICBjb25zdCBhdHRyTmFtZSA9IGF0dHIubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyTmFtZSkpIHtcbiAgICBpZiAodXJpQXR0cnMuaGFzKGF0dHJOYW1lKSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHIubm9kZVZhbHVlKSB8fCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoYXR0ci5ub2RlVmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCByZWdFeHAgPSBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0clJlZ2V4ID0+IGF0dHJSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChyZWdFeHBbaV0udGVzdChhdHRyTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZuKSB7XG4gIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCBhbGxvd2xpc3RLZXlzID0gT2JqZWN0LmtleXMoYWxsb3dMaXN0KVxuICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZWwgPSBlbGVtZW50c1tpXVxuICAgIGNvbnN0IGVsTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICghYWxsb3dsaXN0S2V5cy5pbmNsdWRlcyhlbE5hbWUpKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWwuYXR0cmlidXRlcylcbiAgICBjb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFtdLmNvbmNhdChhbGxvd0xpc3RbJyonXSB8fCBbXSwgYWxsb3dMaXN0W2VsTmFtZV0gfHwgW10pXG5cbiAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIGdldEVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgbm9vcCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCB7XG4gIERlZmF1bHRBbGxvd2xpc3QsXG4gIHNhbml0aXplSHRtbFxufSBmcm9tICcuL3V0aWwvc2FuaXRpemVyJ1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Rvb2x0aXAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b29sdGlwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdicy10b29sdGlwJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICB0cmlnZ2VyOiAnc3RyaW5nJyxcbiAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBmYWxsYmFja1BsYWNlbWVudHM6ICdhcnJheScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGN1c3RvbUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKSdcbn1cblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgQVVUTzogJ2F1dG8nLFxuICBUT1A6ICd0b3AnLFxuICBSSUdIVDogaXNSVEwoKSA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gIEJPVFRPTTogJ2JvdHRvbScsXG4gIExFRlQ6IGlzUlRMKCkgPyAncmlnaHQnIDogJ2xlZnQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICB0aXRsZTogJycsXG4gIGRlbGF5OiAwLFxuICBodG1sOiBmYWxzZSxcbiAgc2VsZWN0b3I6IGZhbHNlLFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBvZmZzZXQ6IFswLCAwXSxcbiAgY29udGFpbmVyOiBmYWxzZSxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgc2FuaXRpemU6IHRydWUsXG4gIHNhbml0aXplRm46IG51bGwsXG4gIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgcG9wcGVyQ29uZmlnOiBudWxsXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTjogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1c6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV046IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTjogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUjogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX01PREFMID0gJ21vZGFsJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IEhPVkVSX1NUQVRFX1NIT1cgPSAnc2hvdydcbmNvbnN0IEhPVkVSX1NUQVRFX09VVCA9ICdvdXQnXG5cbmNvbnN0IFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIgPSAnLnRvb2x0aXAtaW5uZXInXG5cbmNvbnN0IFRSSUdHRVJfSE9WRVIgPSAnaG92ZXInXG5jb25zdCBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJ1xuY29uc3QgVFJJR0dFUl9DTElDSyA9ICdjbGljaydcbmNvbnN0IFRSSUdHRVJfTUFOVUFMID0gJ21hbnVhbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgLy8gcHJpdmF0ZVxuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgICB0aGlzLl90aW1lb3V0ID0gMFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fVxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcblxuICAgIC8vIFByb3RlY3RlZFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy50aXAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG5cbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX01PREFMfWApLCAnaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy50aXAgJiYgdGhpcy50aXAucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy50aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnRpcClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKVxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBmaW5kU2hhZG93Um9vdCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGlzSW5UaGVEb20gPSBzaGFkb3dSb290ID09PSBudWxsID9cbiAgICAgIHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy5fZWxlbWVudCkgOlxuICAgICAgc2hhZG93Um9vdC5jb250YWlucyh0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSlcblxuICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgIHRoaXMuc2V0Q29udGVudCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLl9jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID9cbiAgICAgIHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgIHRoaXMuX2NvbmZpZy5wbGFjZW1lbnRcblxuICAgIGNvbnN0IGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudClcbiAgICB0aGlzLl9hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudClcblxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzLl9jb25maWdcbiAgICBEYXRhLnNldCh0aXAsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGlwKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBjdXN0b21DbGFzcyA9IHR5cGVvZiB0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MoKSA6IHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzc1xuICAgIGlmIChjdXN0b21DbGFzcykge1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoLi4uY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJldkhvdmVyU3RhdGUgPSB0aGlzLl9ob3ZlclN0YXRlXG5cbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSBudWxsXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKVxuXG4gICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX3BvcHBlcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIT1ZFUl9TVEFURV9TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTilcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCkpXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgaXNBbmltYXRlZClcbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXBcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX2NvbmZpZy50ZW1wbGF0ZVxuXG4gICAgdGhpcy50aXAgPSBlbGVtZW50LmNoaWxkcmVuWzBdXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIsIHRpcCksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIHNldEVsZW1lbnRDb250ZW50KGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudChjb250ZW50KSkge1xuICAgICAgY29udGVudCA9IGdldEVsZW1lbnQoY29udGVudClcblxuICAgICAgLy8gY29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQucGFyZW50Tm9kZSAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50LnRleHRDb250ZW50XG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICBjb250ZW50ID0gc2FuaXRpemVIdG1sKGNvbnRlbnQsIHRoaXMuX2NvbmZpZy5hbGxvd0xpc3QsIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZUZuKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnRcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICB9XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBsZXQgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLl9jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICB0aGlzLl9jb25maWcudGl0bGUuY2FsbCh0aGlzLl9lbGVtZW50KSA6XG4gICAgICAgIHRoaXMuX2NvbmZpZy50aXRsZVxuICAgIH1cblxuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgdXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KSB7XG4gICAgaWYgKGF0dGFjaG1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgIHJldHVybiAnZW5kJ1xuICAgIH1cblxuICAgIGlmIChhdHRhY2htZW50ID09PSAnbGVmdCcpIHtcbiAgICAgIHJldHVybiAnc3RhcnQnXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaG1lbnRcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBEYXRhLmdldChldmVudC5kZWxlZ2F0ZVRhcmdldCwgZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKVxuICAgICAgRGF0YS5zZXQoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXksIGNvbnRleHQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbCA9PiBOdW1iZXIucGFyc2VJbnQodmFsLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogdGhpcy5fY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBlbGVtZW50OiBgLiR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hcnJvd2BcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb25DaGFuZ2UnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9uRmlyc3RVcGRhdGU6IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5vcHRpb25zLnBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi4odHlwZW9mIHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKGRlZmF1bHRCc1BvcHBlckNvbmZpZykgOiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgIHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoYCR7Q0xBU1NfUFJFRklYfS0ke3RoaXMudXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KX1gKVxuICB9XG5cbiAgX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5fY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMudG9nZ2xlKGV2ZW50KSlcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VFTlRFUiA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50SW4sIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5fZW50ZXIoZXZlbnQpKVxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRPdXQsIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5fbGVhdmUoZXZlbnQpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX01PREFMfWApLCAnaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2ZpeFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICBjb25zdCBvcmlnaW5hbFRpdGxlVHlwZSA9IHR5cGVvZiB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAodGl0bGUgfHwgb3JpZ2luYWxUaXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlIHx8ICcnKVxuICAgICAgaWYgKHRpdGxlICYmICF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGl0bGUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKVxuICAgIH1cbiAgfVxuXG4gIF9lbnRlcihldmVudCwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpXG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXG4gICAgICBdID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChjb250ZXh0LmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuXG4gICAgaWYgKCFjb250ZXh0Ll9jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuX2NvbmZpZy5kZWxheS5zaG93KSB7XG4gICAgICBjb250ZXh0LnNob3coKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0Ll9jb25maWcuZGVsYXkuc2hvdylcbiAgfVxuXG4gIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpXG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IGNvbnRleHQuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldClcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9PVVRcblxuICAgIGlmICghY29udGV4dC5fY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0Ll9jb25maWcuZGVsYXkuaGlkZSkge1xuICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0Ll9jb25maWcuZGVsYXkuaGlkZSlcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIGZvciAoY29uc3QgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykuZm9yRWFjaChkYXRhQXR0ciA9PiB7XG4gICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmhhcyhkYXRhQXR0cikpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBjb25maWcuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogZ2V0RWxlbWVudChjb25maWcuY29udGFpbmVyKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgaWYgKGNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgY29uZmlnLnRlbXBsYXRlID0gc2FuaXRpemVIdG1sKGNvbmZpZy50ZW1wbGF0ZSwgY29uZmlnLmFsbG93TGlzdCwgY29uZmlnLnNhbml0aXplRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLl9jb25maWdba2V5XSkge1xuICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5fY29uZmlnW2tleV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSB0aXAuZ2V0QXR0cmlidXRlKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFiQ2xhc3MubWFwKHRva2VuID0+IHRva2VuLnRyaW0oKSlcbiAgICAgICAgLmZvckVhY2godENsYXNzID0+IHRpcC5jbGFzc0xpc3QucmVtb3ZlKHRDbGFzcykpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gcG9wcGVyRGF0YVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50aXAgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXJcbiAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICB0aGlzLl9hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChzdGF0ZS5wbGFjZW1lbnQpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuVG9vbHRpcCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb29sdGlwKVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdwb3BvdmVyJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMucG9wb3ZlcidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBDTEFTU19QUkVGSVggPSAnYnMtcG9wb3ZlcidcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gIG9mZnNldDogWzAsIDhdLFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBjb250ZW50OiAnJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcbiAgY29udGVudDogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTjogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1c6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV046IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTjogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUjogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfVElUTEUgPSAnLnBvcG92ZXItaGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgUG9wb3ZlciBleHRlbmRzIFRvb2x0aXAge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gT3ZlcnJpZGVzXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKVxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuXG4gICAgLy8gd2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9USVRMRSwgdGlwKSwgdGhpcy5nZXRUaXRsZSgpKVxuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb250ZW50ID0gY29udGVudC5jYWxsKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0NPTlRFTlQsIHRpcCksIGNvbnRlbnQpXG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICB0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKGAke0NMQVNTX1BSRUZJWH0tJHt0aGlzLnVwZGF0ZUF0dGFjaG1lbnQoYXR0YWNobWVudCl9YClcbiAgfVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1jb250ZW50JykgfHwgdGhpcy5fY29uZmlnLmNvbnRlbnRcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSB0aXAuZ2V0QXR0cmlidXRlKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFiQ2xhc3MubWFwKHRva2VuID0+IHRva2VuLnRyaW0oKSlcbiAgICAgICAgLmZvckVhY2godENsYXNzID0+IHRpcC5jbGFzc0xpc3QucmVtb3ZlKHRDbGFzcykpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFBvcG92ZXIodGhpcywgX2NvbmZpZylcbiAgICAgICAgRGF0YS5zZXQodGhpcywgREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlBvcG92ZXIgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oUG9wb3ZlcilcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNFbGVtZW50LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogMTAsXG4gIG1ldGhvZDogJ2F1dG8nLFxuICB0YXJnZXQ6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQ6ICdudW1iZXInLFxuICBtZXRob2Q6ICdzdHJpbmcnLFxuICB0YXJnZXQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9BQ1RJVkFURSA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NDUk9MTCA9IGBzY3JvbGwke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnXG5jb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5cbmNvbnN0IE1FVEhPRF9PRkZTRVQgPSAnb2Zmc2V0J1xuY29uc3QgTUVUSE9EX1BPU0lUSU9OID0gJ3Bvc2l0aW9uJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9MSVNUX0lURU1TfSwgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAuJHtDTEFTU19OQU1FX0RST1BET1dOX0lURU19YFxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSAwXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfU0NST0xMLCAoKSA9PiB0aGlzLl9wcm9jZXNzKCkpXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICAgIHRoaXMuX3Byb2Nlc3MoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IGF1dG9NZXRob2QgPSB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB0aGlzLl9zY3JvbGxFbGVtZW50LndpbmRvdyA/XG4gICAgICBNRVRIT0RfT0ZGU0VUIDpcbiAgICAgIE1FVEhPRF9QT1NJVElPTlxuXG4gICAgY29uc3Qgb2Zmc2V0TWV0aG9kID0gdGhpcy5fY29uZmlnLm1ldGhvZCA9PT0gJ2F1dG8nID9cbiAgICAgIGF1dG9NZXRob2QgOlxuICAgICAgdGhpcy5fY29uZmlnLm1ldGhvZFxuXG4gICAgY29uc3Qgb2Zmc2V0QmFzZSA9IG9mZnNldE1ldGhvZCA9PT0gTUVUSE9EX1BPU0lUSU9OID9cbiAgICAgIHRoaXMuX2dldFNjcm9sbFRvcCgpIDpcbiAgICAgIDBcblxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG5cbiAgICBjb25zdCB0YXJnZXRzID0gU2VsZWN0b3JFbmdpbmUuZmluZCh0aGlzLl9zZWxlY3RvcilcblxuICAgIHRhcmdldHMubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRTZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGFyZ2V0U2VsZWN0b3IpIDogbnVsbFxuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBpZiAodGFyZ2V0QkNSLndpZHRoIHx8IHRhcmdldEJDUi5oZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgTWFuaXB1bGF0b3Jbb2Zmc2V0TWV0aG9kXSh0YXJnZXQpLnRvcCArIG9mZnNldEJhc2UsXG4gICAgICAgICAgICB0YXJnZXRTZWxlY3RvclxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0pXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSlcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLl9vZmZzZXRzLnB1c2goaXRlbVswXSlcbiAgICAgICAgdGhpcy5fdGFyZ2V0cy5wdXNoKGl0ZW1bMV0pXG4gICAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX0tFWSlcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT09ICdzdHJpbmcnICYmIGlzRWxlbWVudChjb25maWcudGFyZ2V0KSkge1xuICAgICAgbGV0IHsgaWQgfSA9IGNvbmZpZy50YXJnZXRcbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgaWQgPSBnZXRVSUQoTkFNRSlcbiAgICAgICAgY29uZmlnLnRhcmdldC5pZCA9IGlkXG4gICAgICB9XG5cbiAgICAgIGNvbmZpZy50YXJnZXQgPSBgIyR7aWR9YFxuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldFNjcm9sbFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID9cbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQucGFnZVlPZmZzZXQgOlxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3BcbiAgfVxuXG4gIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KFxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgX2dldE9mZnNldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID9cbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCA6XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgX3Byb2Nlc3MoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICBjb25zdCBtYXhTY3JvbGwgPSB0aGlzLl9jb25maWcub2Zmc2V0ICsgc2Nyb2xsSGVpZ2h0IC0gdGhpcy5fZ2V0T2Zmc2V0SGVpZ2h0KClcblxuICAgIGlmICh0aGlzLl9zY3JvbGxIZWlnaHQgIT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0c1t0aGlzLl90YXJnZXRzLmxlbmd0aCAtIDFdXG5cbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpXG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1swXSAmJiB0aGlzLl9vZmZzZXRzWzBdID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgdGhpcy5fY2xlYXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX29mZnNldHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICBjb25zdCBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJlxuICAgICAgICAgIHNjcm9sbFRvcCA+PSB0aGlzLl9vZmZzZXRzW2ldICYmXG4gICAgICAgICAgKHR5cGVvZiB0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gJ3VuZGVmaW5lZCcgfHwgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pXG5cbiAgICAgIGlmIChpc0FjdGl2ZVRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl90YXJnZXRzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcblxuICAgIHRoaXMuX2NsZWFyKClcblxuICAgIGNvbnN0IHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3Rvci5zcGxpdCgnLCcpXG4gICAgICAubWFwKHNlbGVjdG9yID0+IGAke3NlbGVjdG9yfVtkYXRhLWJzLXRhcmdldD1cIiR7dGFyZ2V0fVwiXSwke3NlbGVjdG9yfVtocmVmPVwiJHt0YXJnZXR9XCJdYClcblxuICAgIGNvbnN0IGxpbmsgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHF1ZXJpZXMuam9pbignLCcpKVxuXG4gICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBsaW5rLmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmsgYXMgYWN0aXZlXG4gICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIFNlbGVjdG9yRW5naW5lLnBhcmVudHMobGluaywgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApXG4gICAgICAgIC5mb3JFYWNoKGxpc3RHcm91cCA9PiB7XG4gICAgICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuICAgICAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9YClcbiAgICAgICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcblxuICAgICAgICAgIC8vIEhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiAubmF2LWxpbmsgaXMgaW5zaWRlIC5uYXYtaXRlbVxuICAgICAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9OQVZfSVRFTVMpXG4gICAgICAgICAgICAuZm9yRWFjaChuYXZJdGVtID0+IHtcbiAgICAgICAgICAgICAgU2VsZWN0b3JFbmdpbmUuY2hpbGRyZW4obmF2SXRlbSwgU0VMRUNUT1JfTkFWX0xJTktTKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfQUNUSVZBVEUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgIH0pXG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZCh0aGlzLl9zZWxlY3RvcilcbiAgICAgIC5maWx0ZXIobm9kZSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICAuZm9yRWFjaChub2RlID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRJbnN0YW5jZSh0aGlzKSB8fCBuZXcgU2Nyb2xsU3B5KHRoaXMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKVxuICAgIC5mb3JFYWNoKHNweSA9PiBuZXcgU2Nyb2xsU3B5KHNweSkpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuU2Nyb2xsU3B5IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNEaXNhYmxlZCxcbiAgcmVmbG93XG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0YWInXG5jb25zdCBEQVRBX0tFWSA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fTUVOVSA9ICdkcm9wZG93bi1tZW51J1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9VTCA9ICc6c2NvcGUgPiBsaSA+IC5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCA9ICc6c2NvcGUgPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgaWYgKCh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiZcbiAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBwcmV2aW91c1xuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUClcblxuICAgIGlmIChsaXN0RWxlbWVudCkge1xuICAgICAgY29uc3QgaXRlbVNlbGVjdG9yID0gbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdVTCcgfHwgbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdPTCcgPyBTRUxFQ1RPUl9BQ1RJVkVfVUwgOiBTRUxFQ1RPUl9BQ1RJVkVcbiAgICAgIHByZXZpb3VzID0gU2VsZWN0b3JFbmdpbmUuZmluZChpdGVtU2VsZWN0b3IsIGxpc3RFbGVtZW50KVxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IHByZXZpb3VzID9cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHByZXZpb3VzLCBFVkVOVF9ISURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pIDpcbiAgICAgIG51bGxcblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAoaGlkZUV2ZW50ICE9PSBudWxsICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fZWxlbWVudCwgbGlzdEVsZW1lbnQpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHByZXZpb3VzLCBFVkVOVF9ISURERU4sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hY3RpdmF0ZShlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudHMgPSBjb250YWluZXIgJiYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBjb250YWluZXIubm9kZU5hbWUgPT09ICdPTCcpID9cbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQUNUSVZFX1VMLCBjb250YWluZXIpIDpcbiAgICAgIFNlbGVjdG9yRW5naW5lLmNoaWxkcmVuKGNvbnRhaW5lciwgU0VMRUNUT1JfQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlID0gYWN0aXZlRWxlbWVudHNbMF1cbiAgICBjb25zdCBpc1RyYW5zaXRpb25pbmcgPSBjYWxsYmFjayAmJiAoYWN0aXZlICYmIGFjdGl2ZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4gdGhpcy5fdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spXG5cbiAgICBpZiAoYWN0aXZlICYmIGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBjb25zdCBkcm9wZG93bkNoaWxkID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQsIGFjdGl2ZS5wYXJlbnROb2RlKVxuXG4gICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICBkcm9wZG93bkNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgcmVmbG93KGVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZU5hbWUgPT09ICdMSScpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fTUVOVSkpIHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTilcblxuICAgICAgaWYgKGRyb3Bkb3duRWxlbWVudCkge1xuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgZHJvcGRvd25FbGVtZW50KVxuICAgICAgICAgIC5mb3JFYWNoKGRyb3Bkb3duID0+IGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IFRhYih0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IFRhYih0aGlzKVxuICBkYXRhLnNob3coKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRhYiB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUYWIpXG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgcmVmbG93LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndG9hc3QnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b2FzdCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFT1ZFUiA9IGBtb3VzZW92ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRU9VVCA9IGBtb3VzZW91dCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICBkZWxheTogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhdXRvaGlkZTogdHJ1ZSxcbiAgZGVsYXk6IDUwMDBcbn1cblxuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJ0b2FzdFwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuXG4gICAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSlcbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tYXliZVNjaGVkdWxlSGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gfHwgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpXG4gIH1cblxuICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgIGNhc2UgJ21vdXNlb3V0JzpcbiAgICAgICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3RpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgY2FzZSAnZm9jdXNvdXQnOlxuICAgICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoaXNJbnRlcmFjdGluZykge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgIGlmICh0aGlzLl9lbGVtZW50ID09PSBuZXh0RWxlbWVudCB8fCB0aGlzLl9lbGVtZW50LmNvbnRhaW5zKG5leHRFbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCAoKSA9PiB0aGlzLmhpZGUoKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVkVSLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRvYXN0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvYXN0KVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBpbmRleC51bWQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9zcmMvYWxlcnQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vc3JjL2J1dHRvbidcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL3NyYy9jYXJvdXNlbCdcbmltcG9ydCBDb2xsYXBzZSBmcm9tICcuL3NyYy9jb2xsYXBzZSdcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL3NyYy9kcm9wZG93bidcbmltcG9ydCBNb2RhbCBmcm9tICcuL3NyYy9tb2RhbCdcbmltcG9ydCBPZmZjYW52YXMgZnJvbSAnLi9zcmMvb2ZmY2FudmFzJ1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi9zcmMvcG9wb3ZlcidcbmltcG9ydCBTY3JvbGxTcHkgZnJvbSAnLi9zcmMvc2Nyb2xsc3B5J1xuaW1wb3J0IFRhYiBmcm9tICcuL3NyYy90YWInXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9zcmMvdG9hc3QnXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3NyYy90b29sdGlwJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEFsZXJ0LFxuICBCdXR0b24sXG4gIENhcm91c2VsLFxuICBDb2xsYXBzZSxcbiAgRHJvcGRvd24sXG4gIE1vZGFsLFxuICBPZmZjYW52YXMsXG4gIFBvcG92ZXIsXG4gIFNjcm9sbFNweSxcbiAgVGFiLFxuICBUb2FzdCxcbiAgVG9vbHRpcFxufVxuIiwiaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2xvZ28vbG9nby5wbmdcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9nb1wiKTtcclxuICBsb2dvLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnNyYyA9IGxvZ29JbWFnZSkpO1xyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBsb2FkaW5nU2lnbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBidG5TaWduSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fc2lnbi1pblwiKTtcclxuXHJcbiAgYnRuU2lnbkluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbG9hZGluZ1NpZ25Jbi5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gIH0pXHJcbn0pO1xyXG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IG5hdlRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlci10b2dnbGVyXCIpO1xyXG4gIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLS1uYXYtbGlzdC1jb250YWluZXJcIik7XHJcbiAgbGV0IG5hdklzT3BlbiA9IGZhbHNlO1xyXG5cclxuICBpZiAobmF2VG9nZ2xlcikge1xyXG4gICAgbmF2VG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoIW5hdklzT3Blbikge1xyXG4gICAgICAgIG5hdlRvZ2dsZXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuLW5hdmJhclwiKTtcclxuICAgICAgICBuYXZJc09wZW4gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdlRvZ2dsZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLW5hdmJhclwiKTtcclxuICAgICAgICBuYXZJc09wZW4gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCB0b2dnbGVPcHRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBpbl9fcG9zdFwiKTtcclxuICBjb25zdCBvcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvbi1jb250YWluZXJcIik7XHJcblxyXG4gIC8vZm9yIGRlbGV0ZSBkaWFsb2dcclxuICBjb25zdCBkZWxldGVPcHRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZV9fb3B0aW9uLWJ0blwiKTtcclxuICBjb25zdCBkZWxldGVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1c3RvbV9fZGVsZXRlLWRpYWxvZ1wiKTtcclxuICBjb25zdCBkZWxldGVEaWFsb2dDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuY3VzdG9tX19kaWFsb2ctYnRuLWNhbmNlbFwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlRGlhbG9nQ29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5jdXN0b21fX2RpYWxvZy1idG4tY29uZmlybVwiXHJcbiAgKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2dnbGVPcHRpb25CdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBvcHRpb25Jc09wZW4gPSBmYWxzZTtcclxuICAgIHRvZ2dsZU9wdGlvbkJ0bltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKCFvcHRpb25Jc09wZW4pIHtcclxuICAgICAgICBvcHRpb25Db250YWluZXJbaV0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgICAgICBvcHRpb25Jc09wZW4gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wdGlvbkNvbnRhaW5lcltpXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIG9wdGlvbklzT3BlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2dnbGVPcHRpb25zKGUsIHRvZ2dsZU9wdGlvbkJ0bltpXS5kYXRhc2V0LnBvc3RJZCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgdG9nZ2xlT3B0aW9ucyA9IChlKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKHRvZ2dsZU9wdGlvbkJ0bikuaW5kZXhPZihlLnRhcmdldCkgKyAxO1xyXG4gIH07XHJcblxyXG4gIC8vZGlhbG9nIGRlbGV0ZVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlT3B0aW9uQnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkZWxldGVPcHRpb25CdG5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGRlbGV0ZURpYWxvZ1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICBkZWxldGVQb3N0KGUpO1xyXG4gICAgfSk7XHJcbiAgICBkZWxldGVEaWFsb2dDYW5jZWxbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGRlbGV0ZURpYWxvZ1tpXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICBjbG9zZURpYWxvZyhlKTtcclxuICAgIH0pO1xyXG4gICAgZGVsZXRlRGlhbG9nQ29uZmlybVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY29uZmlybURlbGV0ZVBvc3QoZSwgZGVsZXRlRGlhbG9nQ29uZmlybVtpXS5kYXRhc2V0LnBvc3RJZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVBvc3QgPSAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShkZWxldGVPcHRpb25CdG4pLmluZGV4T2YoZS50YXJnZXQpICsgMTtcclxuICB9O1xyXG5cclxuICAvL2Nsb3NpbmcgZGlhbG9nXHJcbiAgY29uc3QgY2xvc2VEaWFsb2cgPSAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShkZWxldGVEaWFsb2dDYW5jZWwpLmluZGV4T2YoZS50YXJnZXQpICsgMTtcclxuICB9O1xyXG4gIC8vRGVsZXRlIHBvc3QvYW5zd2VyXHJcbiAgY29uc3QgY29uZmlybURlbGV0ZVBvc3QgPSAoZSwgZGF0YVBvc3RJZCkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShkZWxldGVEaWFsb2dDb25maXJtKS5pbmRleE9mKGUudGFyZ2V0KSArIDE7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlT25lUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYC9ldnN1LWluc2lkZXIvcG9zdC1vcHRpb25zLyR7ZGF0YVBvc3RJZH1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgICBlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZyBvbiBkZWxldGluZyB0aGUgY29udGVudC5cIixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL0RFTEVURSBSRVFVRVNUIFBST01JU0VcclxuICAgIGRlbGV0ZU9uZVBvc3QoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9O1xyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fZGVsZXRlLWFuc3dlclwiKTtcclxuICBjb25zdCBkYXRhUG9zdElkX2RlbGV0ZSA9IGRlbGV0ZUJ1dHRvbi5kYXRhc2V0LnBvc3RJZDtcclxuICBjb25zdCBsb2FkaW5nU3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9hZGluZy1zcGlubmVyXCIpO1xyXG5cclxuICAvLyBVcGRhdGUgZm9ybVxyXG4gIGNvbnN0IHVwZGF0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZV9fZm9ybVwiKTtcclxuICBjb25zdCB1cGRhdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBkYXRlX190aXRsZVwiKTtcclxuICBjb25zdCB1cGRhdGVUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZV9fdGFnXCIpO1xyXG4gIGNvbnN0IHVwZGF0ZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZV9fYm9keVwiKTtcclxuICBjb25zdCB1cGRhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fdXBkYXRlLWFuc3dlclwiKTtcclxuICBjb25zdCBkYXRhUG9zdElkX3VwZGF0ZSA9IHVwZGF0ZUJ0bi5kYXRhc2V0LnBvc3RJZDtcclxuXHJcbiAgLy9jbGljayBldmVudCB0byB0cmlnZ2VyIGRlbGV0ZSByZXF1ZXN0XHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvL3NlbmQgRGVsZXRlIEh0dHAgUmVxdWVzdFxyXG4gICAgbG9hZGluZ1NwaW5uZXIuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpKTtcclxuICAgIGNvbnN0IGRlbGV0ZU9uZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGAvZXZzdS1pbnNpZGVyL3Bvc3Qtb3B0aW9ucy8ke2RhdGFQb3N0SWRfZGVsZXRlfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIG9uIGRlbGV0aW5nIHRoZSBjb250ZW50LlwiLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vREVMRVRFIFJFUVVFU1QgUFJPTUlTRVxyXG4gICAgZGVsZXRlT25lUG9zdCgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy51cmw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gIH0pO1xyXG5cclxuICAvL2NsaWNrIGV2ZW50IHRvIHRyaWdnZXIgcHV0IHJlcXVlc3RcclxuICB1cGRhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvYWRpbmdTcGlubmVyLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XHJcblxyXG4gICAgY29uc3QgcG9zdFVwZGF0ZWRDb250ZW50ID0ge1xyXG4gICAgICBwb3N0X3RpdGxlOiB1cGRhdGVUaXRsZS52YWx1ZSxcclxuICAgICAgcG9zdF90YWc6IHVwZGF0ZVRhZy52YWx1ZSxcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICAgIHBvc3RfYm9keTogdGlueW1jZS5nZXQoXCJzaGFyZUFuc3dlckZvcm1cIikuZ2V0Q29udGVudCgpLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwZGF0ZU9uZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGAvZXZzdS1pbnNpZGVyL3Bvc3Qtb3B0aW9ucy8ke2RhdGFQb3N0SWRfdXBkYXRlfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdFVwZGF0ZWRDb250ZW50KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aGVuIGF0dGVtcHRlZCB0byB1cGRhdGUgdGhlIGFuc3dlci5cIixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL1VQREFURSBSRVFVRVNUIFBST01JU0VcclxuICAgIHVwZGF0ZU9uZVBvc3QoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgcXVvdGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdW90ZV9fdGV4dFwiKTtcclxuICBjb25zdCBxdW90ZUF1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVvdGVfX2F1dGhvclwiKTtcclxuICBjb25zdCByYW5kb21RdW90ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9nb3F1b3Rlcy1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvYWxsP3R5cGU9dGFnJnZhbD1tb3RpdmF0aW9uYWxcIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBkYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIG9uIGZldGNoaW5nIGRhaWx5IHF1b3RlXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJhbmRvbVF1b3RlKClcclxuICAgIC50aGVuKChxdW90ZXMpID0+IHtcclxuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEyKTtcclxuICAgICAgcXVvdGVUZXh0LmlubmVySFRNTCA9YDxlbT5cIiR7cXVvdGVzLnF1b3Rlc1tyYW5kb21OdW1iZXJdLnRleHR9XCI8L2VtPmA7XHJcbiAgICAgIHF1b3RlQXV0aG9yLmlubmVySFRNTCA9IHF1b3Rlcy5xdW90ZXNbcmFuZG9tTnVtYmVyXS5hdXRob3I7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbn0pO1xyXG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHN1YmplY3REcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ViamVjdF9fZHJvcGRvd25cIik7XHJcbiAgY29uc3Qgc3ViamVjdERyb3Bkb3duR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1YmplY3RfX2Ryb3Bkb3duLWdyb3VwXCIpO1xyXG4gIGNvbnN0IHN1YmplY3REcm9wZG93bkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ViamVjdF9fZHJvcGRvd24tYnRuXCIpO1xyXG4gIGNvbnN0IHN1YmplY3REcm9wZG93bkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhLWNoZXZyb24tcmlnaHRcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViamVjdERyb3Bkb3duR3JvdXAubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBzdWJqZWN0RHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgICBzdWJqZWN0RHJvcGRvd25CdG5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmICghc3ViamVjdERyb3Bkb3duT3Blbikge1xyXG4gICAgICAgIHN1YmplY3REcm9wZG93bltpXS5jbGFzc0xpc3QuYWRkKFwic3ViamVjdF9fZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25JY29uW2ldLmNsYXNzTGlzdC5hZGQoXCJpY29uLXJvdGF0ZVwiKTtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25PcGVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25baV0uY2xhc3NMaXN0LnJlbW92ZShcInN1YmplY3RfX2Ryb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duSWNvbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaWNvbi1yb3RhdGVcIik7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duT3BlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGFycmF5SW5kZXhGaW5kZXIoZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFycmF5SW5kZXhGaW5kZXIgPSAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShzdWJqZWN0RHJvcGRvd24pLmluZGV4T2YoZS50YXJnZXQpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDlmMThiN2FlNTljNjU0NmU4Yzk0NGE5MDFjMDk2NTkucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLyogSkFWQVNDUklQVCAqL1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCAoKSA9PiB7fSk7XHJcbnJlcXVpcmUoXCIuL2pzL2ltYWdlLWxvYWRcIik7XHJcbnJlcXVpcmUoXCIuL2pzL2xvZ2luXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9vcHRpb25fcG9zdF90b2dnbGVcIilcclxucmVxdWlyZShcIi4vYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5taW5cIik7XHJcbnJlcXVpcmUoXCIuL2pzL25hdmJ1cmdlci5hbmltXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9zdWJqZWN0X2Ryb3Bkb3duXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9vcHRpb25zX3Bvc3RcIik7XHJcbnJlcXVpcmUoXCIuL2pzL3F1b3RlXCIpO1xyXG4vLyByZXF1aXJlKFwiLi9qcy90aW55bWNlLmZvcm1cIik7XHJcblxyXG4vKiBTVFlMRSAqL1xyXG5yZXF1aXJlKFwiLi9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi9tYWluLnNjc3NcIik7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==