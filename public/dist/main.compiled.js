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
__webpack_require__(/*! ./js/image-load */ "./public/js/image-load.js");

__webpack_require__(/*! ./bootstrap/js/bootstrap.min */ "./public/bootstrap/js/bootstrap.min.js");

__webpack_require__(/*! ./js/navburger.anim */ "./public/js/navburger.anim.js"); // require("./js/tinymce.form");

/* STYLE */


__webpack_require__(/*! ./bootstrap/css/bootstrap.min.css */ "./public/bootstrap/css/bootstrap.min.css");

__webpack_require__(/*! ./main.scss */ "./public/main.scss");
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2hpZGUuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLWxpdGUuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXIuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VuaXF1ZUJ5LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL2RvbS9kYXRhLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL3NyYy9iYXNlLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL2FsZXJ0LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvYnV0dG9uLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvZG9tL21hbmlwdWxhdG9yLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvdXRpbC9zY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL3NyYy91dGlsL2JhY2tkcm9wLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL3NyYy9vZmZjYW52YXMuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL3NyYy91dGlsL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi4vanMvc3JjL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvdGFiLmpzIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uLi9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4uL2pzL2luZGV4LnVtZC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9wdWJsaWMvanMvaW1hZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvLi9wdWJsaWMvanMvbmF2YnVyZ2VyLmFuaW0uanMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vcHVibGljL2Fzc2V0cy9sb2dvL2xvZ28ucG5nIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL3B1YmxpYy9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzPzliNjEiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyLy4vcHVibGljL21haW4uc2Nzcz85YTg4Iiwid2VicGFjazovL2V2c3UtaW5zaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldnN1LWluc2lkZXIvd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL2V2c3UtaW5zaWRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXZzdS1pbnNpZGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V2c3UtaW5zaWRlci8uL3B1YmxpYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RvckVuZ2luZSIsImZpbmQiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNvbmNhdCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FsbCIsImZpbmRPbmUiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJjaGlsZCIsIm1hdGNoZXMiLCJwYXJlbnRzIiwiYW5jZXN0b3IiLCJwYXJlbnROb2RlIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwicHVzaCIsInByZXYiLCJwcmV2aW91cyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXh0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZ2V0VUlEIiwicHJlZml4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsImhyZWZBdHRyIiwiaW5jbHVkZXMiLCJzdGFydHNXaXRoIiwic3BsaXQiLCJ0cmltIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsImdldEVsZW1lbnRGcm9tU2VsZWN0b3IiLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiaXNFbGVtZW50Iiwib2JqIiwianF1ZXJ5IiwiZ2V0RWxlbWVudCIsImxlbmd0aCIsImVtdWxhdGVUcmFuc2l0aW9uRW5kIiwiZHVyYXRpb24iLCJjYWxsZWQiLCJlbXVsYXRlZER1cmF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJ0eXBlQ2hlY2tDb25maWciLCJjb21wb25lbnROYW1lIiwiY29uZmlnIiwiY29uZmlnVHlwZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlIiwidmFsdWVUeXBlIiwidG9TdHJpbmciLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiUmVnRXhwIiwidGVzdCIsIlR5cGVFcnJvciIsInRvVXBwZXJDYXNlIiwiaXNWaXNpYmxlIiwic3R5bGUiLCJlbGVtZW50U3R5bGUiLCJwYXJlbnROb2RlU3R5bGUiLCJkaXNwbGF5IiwidmlzaWJpbGl0eSIsImlzRGlzYWJsZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImRpc2FibGVkIiwiaGFzQXR0cmlidXRlIiwiZmluZFNoYWRvd1Jvb3QiLCJhdHRhY2hTaGFkb3ciLCJnZXRSb290Tm9kZSIsInJvb3QiLCJTaGFkb3dSb290Iiwibm9vcCIsInJlZmxvdyIsIm9mZnNldEhlaWdodCIsImdldGpRdWVyeSIsImpRdWVyeSIsImJvZHkiLCJpc1JUTCIsImRpciIsImRlZmluZUpRdWVyeVBsdWdpbiIsInBsdWdpbiIsImNhbGxiYWNrIiwiJCIsIm5hbWUiLCJOQU1FIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiZm4iLCJqUXVlcnlJbnRlcmZhY2UiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJyZWFkeVN0YXRlIiwiZXhlY3V0ZSIsImVsZW1lbnRNYXAiLCJNYXAiLCJzZXQiLCJrZXkiLCJpbnN0YW5jZSIsImhhcyIsImluc3RhbmNlTWFwIiwiZ2V0Iiwic2l6ZSIsImNvbnNvbGUiLCJlcnJvciIsIkFycmF5IiwiZnJvbSIsInJlbW92ZSIsImRlbGV0ZSIsIm5hbWVzcGFjZVJlZ2V4Iiwic3RyaXBOYW1lUmVnZXgiLCJzdHJpcFVpZFJlZ2V4IiwiZXZlbnRSZWdpc3RyeSIsInVpZEV2ZW50IiwiY3VzdG9tRXZlbnRzIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJjdXN0b21FdmVudHNSZWdleCIsIm5hdGl2ZUV2ZW50cyIsIlNldCIsImdldFVpZEV2ZW50IiwidWlkIiwiZ2V0RXZlbnQiLCJmaW5kSGFuZGxlciIsImV2ZW50cyIsImhhbmRsZXIiLCJkZWxlZ2F0aW9uU2VsZWN0b3IiLCJ1aWRFdmVudExpc3QiLCJpIiwibGVuIiwiZXZlbnQiLCJvcmlnaW5hbEhhbmRsZXIiLCJub3JtYWxpemVQYXJhbXMiLCJvcmlnaW5hbFR5cGVFdmVudCIsImRlbGVnYXRpb25GbiIsImRlbGVnYXRpb24iLCJ0eXBlRXZlbnQiLCJnZXRUeXBlRXZlbnQiLCJhZGRIYW5kbGVyIiwib25lT2ZmIiwid3JhcEZuIiwicmVsYXRlZFRhcmdldCIsImRlbGVnYXRlVGFyZ2V0IiwidGhpcyIsImhhbmRsZXJzIiwicHJldmlvdXNGbiIsInJlcGxhY2UiLCJkb21FbGVtZW50cyIsInRhcmdldCIsIkV2ZW50SGFuZGxlciIsIm9mZiIsInR5cGUiLCJhcHBseSIsImJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyIiwiYm9vdHN0cmFwSGFuZGxlciIsInJlbW92ZUhhbmRsZXIiLCJCb29sZWFuIiwib24iLCJvbmUiLCJpbk5hbWVzcGFjZSIsImlzTmFtZXNwYWNlIiwiZWxlbWVudEV2ZW50IiwibmFtZXNwYWNlIiwic3RvcmVFbGVtZW50RXZlbnQiLCJoYW5kbGVyS2V5IiwicmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzIiwic2xpY2UiLCJrZXlIYW5kbGVycyIsInRyaWdnZXIiLCJhcmdzIiwiaXNOYXRpdmUiLCJqUXVlcnlFdmVudCIsImJ1YmJsZXMiLCJuYXRpdmVEaXNwYXRjaCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJldnQiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJDdXN0b21FdmVudCIsImNhbmNlbGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsInByZXZlbnREZWZhdWx0IiwiQmFzZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiX2VsZW1lbnQiLCJEYXRhIiwiREFUQV9LRVkiLCJkaXNwb3NlIiwiRVZFTlRfS0VZIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInByb3BlcnR5TmFtZSIsIl9xdWV1ZUNhbGxiYWNrIiwiaXNBbmltYXRlZCIsIltvYmplY3QgT2JqZWN0XSIsIlZFUlNJT04iLCJFcnJvciIsIkFsZXJ0IiwiY2xvc2UiLCJyb290RWxlbWVudCIsIl9nZXRSb290RWxlbWVudCIsImN1c3RvbUV2ZW50IiwiX3RyaWdnZXJDbG9zZUV2ZW50IiwiX3JlbW92ZUVsZW1lbnQiLCJjbG9zZXN0IiwiX2Rlc3Ryb3lFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJlYWNoIiwiZGF0YSIsImFsZXJ0SW5zdGFuY2UiLCJoYW5kbGVEaXNtaXNzIiwiQnV0dG9uIiwidG9nZ2xlIiwic2V0QXR0cmlidXRlIiwibm9ybWFsaXplRGF0YSIsInZhbCIsIm5vcm1hbGl6ZURhdGFLZXkiLCJjaHIiLCJidXR0b24iLCJNYW5pcHVsYXRvciIsInNldERhdGFBdHRyaWJ1dGUiLCJyZW1vdmVEYXRhQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiZGF0YXNldCIsInB1cmVLZXkiLCJjaGFyQXQiLCJnZXREYXRhQXR0cmlidXRlIiwib2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNjcm9sbFRvcCIsImxlZnQiLCJzY3JvbGxMZWZ0IiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwiRGVmYXVsdCIsImludGVydmFsIiwia2V5Ym9hcmQiLCJzbGlkZSIsInBhdXNlIiwid3JhcCIsInRvdWNoIiwiRGVmYXVsdFR5cGUiLCJPUkRFUl9ORVhUIiwiT1JERVJfUFJFViIsIkRJUkVDVElPTl9MRUZUIiwiRElSRUNUSU9OX1JJR0hUIiwiQ2Fyb3VzZWwiLCJzdXBlciIsIl9pdGVtcyIsIl9pbnRlcnZhbCIsIl9hY3RpdmVFbGVtZW50IiwiX2lzUGF1c2VkIiwiX2lzU2xpZGluZyIsInRvdWNoVGltZW91dCIsInRvdWNoU3RhcnRYIiwidG91Y2hEZWx0YVgiLCJfY29uZmlnIiwiX2dldENvbmZpZyIsIl9pbmRpY2F0b3JzRWxlbWVudCIsIl90b3VjaFN1cHBvcnRlZCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwiX3BvaW50ZXJFdmVudCIsIlBvaW50ZXJFdmVudCIsIl9hZGRFdmVudExpc3RlbmVycyIsIl9zbGlkZSIsIm5leHRXaGVuVmlzaWJsZSIsImhpZGRlbiIsImN5Y2xlIiwiY2xlYXJJbnRlcnZhbCIsIl91cGRhdGVJbnRlcnZhbCIsInNldEludGVydmFsIiwidmlzaWJpbGl0eVN0YXRlIiwiYmluZCIsInRvIiwiaW5kZXgiLCJhY3RpdmVJbmRleCIsIl9nZXRJdGVtSW5kZXgiLCJvcmRlciIsIl9oYW5kbGVTd2lwZSIsImFic0RlbHRheCIsImFicyIsImRpcmVjdGlvbiIsIl9rZXlkb3duIiwiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCJzdGFydCIsInBvaW50ZXJUeXBlIiwidG91Y2hlcyIsImNsaWVudFgiLCJtb3ZlIiwiZW5kIiwiY2xlYXJUaW1lb3V0IiwiaXRlbUltZyIsImUiLCJhZGQiLCJ0YWdOYW1lIiwiaW5kZXhPZiIsIl9nZXRJdGVtQnlPcmRlciIsImFjdGl2ZUVsZW1lbnQiLCJpc05leHQiLCJpc1ByZXYiLCJsYXN0SXRlbUluZGV4IiwiaXRlbUluZGV4IiwiX3RyaWdnZXJTbGlkZUV2ZW50IiwiZXZlbnREaXJlY3Rpb25OYW1lIiwidGFyZ2V0SW5kZXgiLCJmcm9tSW5kZXgiLCJfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCIsImFjdGl2ZUluZGljYXRvciIsImluZGljYXRvcnMiLCJwYXJzZUludCIsImVsZW1lbnRJbnRlcnZhbCIsImRlZmF1bHRJbnRlcnZhbCIsImRpcmVjdGlvbk9yT3JkZXIiLCJfZGlyZWN0aW9uVG9PcmRlciIsImFjdGl2ZUVsZW1lbnRJbmRleCIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsImlzQ3ljbGluZyIsImRpcmVjdGlvbmFsQ2xhc3NOYW1lIiwib3JkZXJDbGFzc05hbWUiLCJfb3JkZXJUb0RpcmVjdGlvbiIsInRyaWdnZXJTbGlkRXZlbnQiLCJjb21wbGV0ZUNhbGxCYWNrIiwiYWN0aW9uIiwicmlkZSIsImNhcm91c2VsSW50ZXJmYWNlIiwic2xpZGVJbmRleCIsImRhdGFBcGlDbGlja0hhbmRsZXIiLCJjYXJvdXNlbHMiLCJwYXJlbnQiLCJDb2xsYXBzZSIsIl9pc1RyYW5zaXRpb25pbmciLCJfdHJpZ2dlckFycmF5IiwiaWQiLCJ0b2dnbGVMaXN0IiwiZWxlbSIsImZpbHRlckVsZW1lbnQiLCJmb3VuZEVsZW0iLCJfc2VsZWN0b3IiLCJfcGFyZW50IiwiX2dldFBhcmVudCIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJoaWRlIiwic2hvdyIsImFjdGl2ZXMiLCJhY3RpdmVzRGF0YSIsImNvbnRhaW5lciIsInRlbXBBY3RpdmVEYXRhIiwiZWxlbUFjdGl2ZSIsImNvbGxhcHNlSW50ZXJmYWNlIiwiZGltZW5zaW9uIiwiX2dldERpbWVuc2lvbiIsInNldFRyYW5zaXRpb25pbmciLCJzY3JvbGxTaXplIiwidHJpZ2dlckFycmF5TGVuZ3RoIiwiaXNUcmFuc2l0aW9uaW5nIiwic2VsZWN0ZWQiLCJ0cmlnZ2VyQXJyYXkiLCJpc09wZW4iLCJ0cmlnZ2VyRGF0YSIsIlJFR0VYUF9LRVlET1dOIiwiUExBQ0VNRU5UX1RPUCIsIlBMQUNFTUVOVF9UT1BFTkQiLCJQTEFDRU1FTlRfQk9UVE9NIiwiUExBQ0VNRU5UX0JPVFRPTUVORCIsIlBMQUNFTUVOVF9SSUdIVCIsIlBMQUNFTUVOVF9MRUZUIiwiYm91bmRhcnkiLCJyZWZlcmVuY2UiLCJwb3BwZXJDb25maWciLCJhdXRvQ2xvc2UiLCJEcm9wZG93biIsIl9wb3BwZXIiLCJfbWVudSIsIl9nZXRNZW51RWxlbWVudCIsIl9pbk5hdmJhciIsIl9kZXRlY3ROYXZiYXIiLCJnZXRQYXJlbnRGcm9tRWxlbWVudCIsIlBvcHBlciIsInJlZmVyZW5jZUVsZW1lbnQiLCJfZ2V0UG9wcGVyQ29uZmlnIiwiaXNEaXNwbGF5U3RhdGljIiwibW9kaWZpZXJzIiwibW9kaWZpZXIiLCJlbmFibGVkIiwiY3JlYXRlUG9wcGVyIiwiZm9jdXMiLCJfY29tcGxldGVIaWRlIiwiZGVzdHJveSIsInVwZGF0ZSIsIl9nZXRQbGFjZW1lbnQiLCJwYXJlbnREcm9wZG93biIsImlzRW5kIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIl9nZXRPZmZzZXQiLCJtYXAiLCJwb3BwZXJEYXRhIiwiZGVmYXVsdEJzUG9wcGVyQ29uZmlnIiwicGxhY2VtZW50Iiwib3B0aW9ucyIsIl9zZWxlY3RNZW51SXRlbSIsIml0ZW1zIiwiZHJvcGRvd25JbnRlcmZhY2UiLCJ0b2dnbGVzIiwiY29udGV4dCIsImNvbXBvc2VkUGF0aCIsImlzTWVudVRhcmdldCIsImNsaWNrRXZlbnQiLCJpc0FjdGl2ZSIsInN0b3BQcm9wYWdhdGlvbiIsImdldFRvZ2dsZUJ1dHRvbiIsImNsZWFyTWVudXMiLCJnZXRJbnN0YW5jZSIsImNsaWNrIiwiZGF0YUFwaUtleWRvd25IYW5kbGVyIiwiZ2V0V2lkdGgiLCJkb2N1bWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJpbm5lcldpZHRoIiwid2lkdGgiLCJfZGlzYWJsZU92ZXJGbG93IiwiX3NldEVsZW1lbnRBdHRyaWJ1dGVzIiwiY2FsY3VsYXRlZFZhbHVlIiwiYWN0dWFsVmFsdWUiLCJvdmVyZmxvdyIsInN0eWxlUHJvcCIsInNjcm9sbGJhcldpZHRoIiwicmVzZXQiLCJfcmVzZXRFbGVtZW50QXR0cmlidXRlcyIsInJlbW92ZVByb3BlcnR5IiwiY2xpY2tDYWxsYmFjayIsIkJhY2tkcm9wIiwiX2lzQXBwZW5kZWQiLCJfYXBwZW5kIiwiX2dldEVsZW1lbnQiLCJfZW11bGF0ZUFuaW1hdGlvbiIsImJhY2tkcm9wIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24iLCJNb2RhbCIsIl9kaWFsb2ciLCJfYmFja2Ryb3AiLCJfaW5pdGlhbGl6ZUJhY2tEcm9wIiwiX2lzU2hvd24iLCJfaWdub3JlQmFja2Ryb3BDbGljayIsIl9pc0FuaW1hdGVkIiwic2hvd0V2ZW50Iiwic2Nyb2xsQmFySGlkZSIsIl9hZGp1c3REaWFsb2ciLCJfc2V0RXNjYXBlRXZlbnQiLCJfc2V0UmVzaXplRXZlbnQiLCJfc2hvd0JhY2tkcm9wIiwiX3Nob3dFbGVtZW50IiwiX2hpZGVNb2RhbCIsImh0bWxFbGVtZW50IiwiaGFuZGxlVXBkYXRlIiwibW9kYWxCb2R5IiwiX2VuZm9yY2VGb2N1cyIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJzY3JvbGxCYXJSZXNldCIsImN1cnJlbnRUYXJnZXQiLCJpc01vZGFsT3ZlcmZsb3dpbmciLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJvdmVyZmxvd1kiLCJtb2RhbFRyYW5zaXRpb25EdXJhdGlvbiIsImdldFNjcm9sbEJhcldpZHRoIiwiaXNCb2R5T3ZlcmZsb3dpbmciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInNjcm9sbCIsIk9mZmNhbnZhcyIsIl9lbmZvcmNlRm9jdXNPbkVsZW1lbnQiLCJibHVyIiwidW5kZWZpbmVkIiwiYWxsUmVhZHlPcGVuIiwiZWwiLCJ1cmlBdHRycyIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYWxsb3dlZEF0dHJpYnV0ZSIsImF0dHIiLCJhbGxvd2VkQXR0cmlidXRlTGlzdCIsImF0dHJOYW1lIiwibm9kZU5hbWUiLCJub2RlVmFsdWUiLCJyZWdFeHAiLCJhdHRyUmVnZXgiLCJzYW5pdGl6ZUh0bWwiLCJ1bnNhZmVIdG1sIiwiYWxsb3dMaXN0Iiwic2FuaXRpemVGbiIsImNyZWF0ZWREb2N1bWVudCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImFsbG93bGlzdEtleXMiLCJlbGVtZW50cyIsImVsTmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJhbGxvd2VkQXR0cmlidXRlcyIsImlubmVySFRNTCIsIkJTQ0xTX1BSRUZJWF9SRUdFWCIsIkRJU0FMTE9XRURfQVRUUklCVVRFUyIsImFuaW1hdGlvbiIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImh0bWwiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJjdXN0b21DbGFzcyIsInNhbml0aXplIiwiQXR0YWNobWVudE1hcCIsIkFVVE8iLCJUT1AiLCJSSUdIVCIsIkJPVFRPTSIsIkxFRlQiLCIqIiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsIkhJREUiLCJISURERU4iLCJTSE9XIiwiU0hPV04iLCJJTlNFUlRFRCIsIkNMSUNLIiwiRk9DVVNJTiIsIkZPQ1VTT1VUIiwiTU9VU0VFTlRFUiIsIk1PVVNFTEVBVkUiLCJUb29sdGlwIiwiX2lzRW5hYmxlZCIsIl90aW1lb3V0IiwiX2hvdmVyU3RhdGUiLCJfYWN0aXZlVHJpZ2dlciIsInRpcCIsIl9zZXRMaXN0ZW5lcnMiLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsIl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQiLCJfaXNXaXRoQWN0aXZlVHJpZ2dlciIsIl9lbnRlciIsIl9sZWF2ZSIsImdldFRpcEVsZW1lbnQiLCJfaGlkZU1vZGFsSGFuZGxlciIsImlzV2l0aENvbnRlbnQiLCJzaGFkb3dSb290IiwiaXNJblRoZURvbSIsIm93bmVyRG9jdW1lbnQiLCJ0aXBJZCIsInNldENvbnRlbnQiLCJhdHRhY2htZW50IiwiX2dldEF0dGFjaG1lbnQiLCJfYWRkQXR0YWNobWVudENsYXNzIiwicHJldkhvdmVyU3RhdGUiLCJfY2xlYW5UaXBDbGFzcyIsImdldFRpdGxlIiwic2V0RWxlbWVudENvbnRlbnQiLCJjb250ZW50IiwidGV4dENvbnRlbnQiLCJ1cGRhdGVBdHRhY2htZW50IiwiZGF0YUtleSIsIl9nZXREZWxlZ2F0ZUNvbmZpZyIsInBoYXNlIiwiX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZSIsIm9uRmlyc3RVcGRhdGUiLCJldmVudEluIiwiZXZlbnRPdXQiLCJfZml4VGl0bGUiLCJvcmlnaW5hbFRpdGxlVHlwZSIsImRhdGFBdHRyaWJ1dGVzIiwiZGF0YUF0dHIiLCJ0YWJDbGFzcyIsInRva2VuIiwidENsYXNzIiwic3RhdGUiLCJwb3BwZXIiLCJQb3BvdmVyIiwiX2dldENvbnRlbnQiLCJtZXRob2QiLCJTY3JvbGxTcHkiLCJfc2Nyb2xsRWxlbWVudCIsIl9vZmZzZXRzIiwiX3RhcmdldHMiLCJfYWN0aXZlVGFyZ2V0IiwiX3Njcm9sbEhlaWdodCIsIl9wcm9jZXNzIiwicmVmcmVzaCIsImF1dG9NZXRob2QiLCJvZmZzZXRNZXRob2QiLCJvZmZzZXRCYXNlIiwiX2dldFNjcm9sbFRvcCIsIl9nZXRTY3JvbGxIZWlnaHQiLCJ0YXJnZXRTZWxlY3RvciIsInRhcmdldEJDUiIsImhlaWdodCIsIml0ZW0iLCJzb3J0IiwicGFnZVlPZmZzZXQiLCJtYXgiLCJfZ2V0T2Zmc2V0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJtYXhTY3JvbGwiLCJfYWN0aXZhdGUiLCJfY2xlYXIiLCJxdWVyaWVzIiwibGluayIsImpvaW4iLCJsaXN0R3JvdXAiLCJuYXZJdGVtIiwibm9kZSIsInNweSIsIlRhYiIsImxpc3RFbGVtZW50IiwiaXRlbVNlbGVjdG9yIiwiaGlkZUV2ZW50IiwiY29tcGxldGUiLCJhY3RpdmUiLCJfdHJhbnNpdGlvbkNvbXBsZXRlIiwiZHJvcGRvd25DaGlsZCIsImRyb3Bkb3duRWxlbWVudCIsImRyb3Bkb3duIiwiYXV0b2hpZGUiLCJUb2FzdCIsIl9oYXNNb3VzZUludGVyYWN0aW9uIiwiX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24iLCJfY2xlYXJUaW1lb3V0IiwiX21heWJlU2NoZWR1bGVIaWRlIiwiX29uSW50ZXJhY3Rpb24iLCJpc0ludGVyYWN0aW5nIiwibG9nbyIsInNyYyIsImxvZ29JbWFnZSIsIm5hdlRvZ2dsZXIiLCJuYXZiYXJDb250YWluZXIiLCJuYXZJc09wZW4iLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnFEO0FBQ3RDO0FBQ2YsaUNBQWlDLDZEQUFnQjtBQUNqRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNIZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxpQkFBaUIs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QTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQSxFOzs7OztXQ1ZBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7QUNmQTtBQUNBQyxtQkFBTyxDQUFDLGtEQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsNEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQywwREFBRCxDQUFQLEMsQ0FDQTs7QUFFQTs7O0FBQ0FBLG1CQUFPLENBQUMsbUZBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFQLEMiLCJmaWxlIjoibWFpbi5jb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IHN1cGVyUHJvcEJhc2UgZnJvbSBcIi4vc3VwZXJQcm9wQmFzZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGdldFByb3RvdHlwZU9mIGZyb20gXCIuL2dldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBnZXRDb21wb3NpdGVSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IG9yZGVyTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcIi4vdXRpbHMvZGVib3VuY2UuanNcIjtcbmltcG9ydCB2YWxpZGF0ZU1vZGlmaWVycyBmcm9tIFwiLi91dGlscy92YWxpZGF0ZU1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IHVuaXF1ZUJ5IGZyb20gXCIuL3V0aWxzL3VuaXF1ZUJ5LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgbWVyZ2VCeU5hbWUgZnJvbSBcIi4vdXRpbHMvbWVyZ2VCeU5hbWUuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi9lbnVtcy5qc1wiO1xudmFyIElOVkFMSURfRUxFTUVOVF9FUlJPUiA9ICdQb3BwZXI6IEludmFsaWQgcmVmZXJlbmNlIG9yIHBvcHBlciBhcmd1bWVudCBwcm92aWRlZC4gVGhleSBtdXN0IGJlIGVpdGhlciBhIERPTSBlbGVtZW50IG9yIHZpcnR1YWwgZWxlbWVudC4nO1xudmFyIElORklOSVRFX0xPT1BfRVJST1IgPSAnUG9wcGVyOiBBbiBpbmZpbml0ZSBsb29wIGluIHRoZSBtb2RpZmllcnMgY3ljbGUgaGFzIGJlZW4gZGV0ZWN0ZWQhIFRoZSBjeWNsZSBoYXMgYmVlbiBpbnRlcnJ1cHRlZCB0byBwcmV2ZW50IGEgYnJvd3NlciBjcmFzaC4nO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcbiAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBtb2RpZmllcnMgaXMgaW52YWxpZCBmb3IgYW55IHJlYXNvblxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXJzID0gdW5pcXVlQnkoW10uY29uY2F0KG9yZGVyZWRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKTtcblxuICAgICAgICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHN0YXRlLm9wdGlvbnMucGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgICAgICAgICAgdmFyIGZsaXBNb2RpZmllciA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ2ZsaXAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZmxpcE1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXV0b1wiIHBsYWNlbWVudHMgcmVxdWlyZSB0aGUgXCJmbGlwXCIgbW9kaWZpZXIgYmUnLCAncHJlc2VudCBhbmQgZW5hYmxlZCB0byB3b3JrLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwb3BwZXIpLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3AsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQ7IC8vIFdlIG5vIGxvbmdlciB0YWtlIGludG8gYWNjb3VudCBgbWFyZ2luc2Agb24gdGhlIHBvcHBlciwgYW5kIGl0IGNhblxuICAgICAgICAgIC8vIGNhdXNlIGJ1Z3Mgd2l0aCBwb3NpdGlvbmluZywgc28gd2UnbGwgd2FybiB0aGUgY29uc3VtZXJcblxuXG4gICAgICAgICAgaWYgKFttYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRdLnNvbWUoZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobWFyZ2luKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBDU1MgXCJtYXJnaW5cIiBzdHlsZXMgY2Fubm90IGJlIHVzZWQgdG8gYXBwbHkgcGFkZGluZycsICdiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudCBvciBib3VuZGFyeS4nLCAnVG8gcmVwbGljYXRlIG1hcmdpbiwgdXNlIHRoZSBgb2Zmc2V0YCBtb2RpZmllciwgYXMgd2VsbCBhcycsICd0aGUgYHBhZGRpbmdgIG9wdGlvbiBpbiB0aGUgYHByZXZlbnRPdmVyZmxvd2AgYW5kIGBmbGlwYCcsICdtb2RpZmllcnMuJ10uam9pbignICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBfX2RlYnVnX2xvb3BzX18gPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIF9fZGVidWdfbG9vcHNfXyArPSAxO1xuXG4gICAgICAgICAgICBpZiAoX19kZWJ1Z19sb29wc19fID4gMTAwKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5GSU5JVEVfTE9PUF9FUlJPUik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHg6IHJlY3QubGVmdCxcbiAgICB5OiByZWN0LnRvcFxuICB9O1xufSIsImltcG9ydCB7IHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50UmVjdCBmcm9tIFwiLi9nZXREb2N1bWVudFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuLi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSkgOiBpc0hUTUxFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjsgLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQpO1xuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSIsImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufSIsImltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59IiwiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBpc1RhYmxlRWxlbWVudCBmcm9tIFwiLi9pc1RhYmxlRWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcbiAgdmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSAhPT0gLTE7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufSIsImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwOyAvLyBOQjogVGhpcyBpc24ndCBzdXBwb3J0ZWQgb24gaU9TIDw9IDEyLiBJZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiwgdGhlIHBvcHBlclxuICAvLyBjYW4gYmUgb2JzY3VyZWQgdW5kZXJuZWF0aCBpdC5cbiAgLy8gQWxzbywgYGh0bWwuY2xpZW50SGVpZ2h0YCBhZGRzIHRoZSBib3R0b20gYmFyIGhlaWdodCBpbiBTYWZhcmkgaU9TLCBldmVuXG4gIC8vIGlmIGl0IGlzbid0IG9wZW4sIHNvIGlmIHRoaXMgaXNuJ3QgYXZhaWxhYmxlLCB0aGUgcG9wcGVyIHdpbGwgYmUgZGV0ZWN0ZWRcbiAgLy8gdG8gb3ZlcmZsb3cgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvbyBlYXJseS5cblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDsgLy8gVXNlcyBMYXlvdXQgVmlld3BvcnQgKGxpa2UgQ2hyb21lOyBTYWZhcmkgZG9lcyBub3QgY3VycmVudGx5KVxuICAgIC8vIEluIENocm9tZSwgaXQgcmV0dXJucyBhIHZhbHVlIHZlcnkgY2xvc2UgdG8gMCAoKy8tKSBidXQgY29udGFpbnMgcm91bmRpbmdcbiAgICAvLyBlcnJvcnMgZHVlIHRvIGZsb2F0aW5nIHBvaW50IG51bWJlcnMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgcHJlY2lzaW9uLlxuICAgIC8vIFNhZmFyaSByZXR1cm5zIGEgbnVtYmVyIDw9IDAsIHVzdWFsbHkgPCAtMSB3aGVuIHBpbmNoLXpvb21lZFxuICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZhaWxzIGluIG1vYmlsZSBlbXVsYXRpb24gbW9kZSBpbiBDaHJvbWUuXG4gICAgLy8gTWF0aC5hYnMod2luLmlubmVyV2lkdGggLyB2aXN1YWxWaWV3cG9ydC5zY2FsZSAtIHZpc3VhbFZpZXdwb3J0LndpZHRoKSA8XG4gICAgLy8gMC4wMDFcbiAgICAvLyBGYWxsYmFjayBoZXJlOiBcIk5vdCBTYWZhcmlcIiB1c2VyQWdlbnRcblxuICAgIGlmICghL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsImltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcIi4vZ2V0U2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn0iLCJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsImV4cG9ydCAqIGZyb20gXCIuL2VudW1zLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93LCBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyQmFzZSB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciB9IGZyb20gXCIuL3BvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsiLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBUaGlzIG1vZGlmaWVyIHRha2VzIHRoZSBzdHlsZXMgcHJlcGFyZWQgYnkgdGhlIGBjb21wdXRlU3R5bGVzYCBtb2RpZmllclxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuLi9kb20tdXRpbHMvY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHdpdGhpbiBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgZWxlbWVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50IChub3QgYW4gU1ZHRWxlbWVudCkuJywgJ1RvIHVzZSBhbiBTVkcgYXJyb3csIHdyYXAgaXQgaW4gYW4gSFRNTEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMnLCAndGhlIGFycm93LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgbW9kaWZpZXJcXCdzIGBlbGVtZW50YCBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIHBvcHBlcicsICdlbGVtZW50LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgd2luID0gd2luZG93O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZChyb3VuZCh4ICogZHByKSAvIGRwcikgfHwgMCxcbiAgICB5OiByb3VuZChyb3VuZCh5ICogZHByKSAvIGRwcikgfHwgMFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzO1xuXG4gIHZhciBfcmVmMyA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKG9mZnNldHMpIDogdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyhvZmZzZXRzKSA6IG9mZnNldHMsXG4gICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgIHggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeCxcbiAgICAgIF9yZWYzJHkgPSBfcmVmMy55LFxuICAgICAgeSA9IF9yZWYzJHkgPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR5O1xuXG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHkgLT0gb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0KSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0OyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeCAtPSBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXSAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8IDIgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjQuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjQub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRDb21wdXRlZFN0eWxlKHN0YXRlLmVsZW1lbnRzLnBvcHBlcikudHJhbnNpdGlvblByb3BlcnR5IHx8ICcnO1xuXG4gICAgaWYgKGFkYXB0aXZlICYmIFsndHJhbnNmb3JtJywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLnNvbWUoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvblByb3BlcnR5LmluZGV4T2YocHJvcGVydHkpID49IDA7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogRGV0ZWN0ZWQgQ1NTIHRyYW5zaXRpb25zIG9uIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nJywgJ0NTUyBwcm9wZXJ0aWVzOiBcInRyYW5zZm9ybVwiLCBcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLicsICdcXG5cXG4nLCAnRGlzYWJsZSB0aGUgXCJjb21wdXRlU3R5bGVzXCIgbW9kaWZpZXJcXCdzIGBhZGFwdGl2ZWAgb3B0aW9uIHRvIGFsbG93JywgJ2ZvciBzbW9vdGggdHJhbnNpdGlvbnMsIG9yIHJlbW92ZSB0aGVzZSBwcm9wZXJ0aWVzIGZyb20gdGhlIENTUycsICd0cmFuc2l0aW9uIGRlY2xhcmF0aW9uIG9uIHRoZSBwb3BwZXIgZWxlbWVudCBpZiBvbmx5IHRyYW5zaXRpb25pbmcnLCAnb3BhY2l0eSBvciBiYWNrZ3JvdW5kLWNvbG9yIGZvciBleGFtcGxlLicsICdcXG5cXG4nLCAnV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBwb3BwZXIgZWxlbWVudCBhcyBhIHdyYXBwZXIgYXJvdW5kIGFuIGlubmVyJywgJ2VsZW1lbnQgdGhhdCBjYW4gaGF2ZSBhbnkgQ1NTIHByb3BlcnR5IHRyYW5zaXRpb25lZCBmb3IgYW5pbWF0aW9ucy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBseVN0eWxlcyB9IGZyb20gXCIuL2FwcGx5U3R5bGVzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycm93IH0gZnJvbSBcIi4vYXJyb3cuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcHV0ZVN0eWxlcyB9IGZyb20gXCIuL2NvbXB1dGVTdHlsZXMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVycy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGlwIH0gZnJvbSBcIi4vZmxpcC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoaWRlIH0gZnJvbSBcIi4vaGlkZS5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvZmZzZXQgfSBmcm9tIFwiLi9vZmZzZXQuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9wcGVyT2Zmc2V0cyB9IGZyb20gXCIuL3BvcHBlck9mZnNldHMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldmVudE92ZXJmbG93IH0gZnJvbSBcIi4vcHJldmVudE92ZXJmbG93LmpzXCI7IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcyB8fCBjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWUgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdW21haW5BeGlzXSA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4oX21pbiwgdGV0aGVyTWluKSA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IG1hdGhNYXgoX21heCwgdGV0aGVyTWF4KSA6IF9tYXgpO1xuXG4gICAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXNdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbmltcG9ydCBvZmZzZXQgZnJvbSBcIi4vbW9kaWZpZXJzL29mZnNldC5qc1wiO1xuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSBcIi4vbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuL21vZGlmaWVycy9hcnJvdy5qc1wiO1xuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlcywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93LCBoaWRlXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyIsImltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyB2YXJpYXRpb25QbGFjZW1lbnRzLCBiYXNlUGxhY2VtZW50cywgcGxhY2VtZW50cyBhcyBhbGxQbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gYWxsUGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBUaGUgYGFsbG93ZWRBdXRvUGxhY2VtZW50c2Agb3B0aW9uIGRpZCBub3QgYWxsb3cgYW55JywgJ3BsYWNlbWVudHMuIEVuc3VyZSB0aGUgYHBsYWNlbWVudGAgb3B0aW9uIG1hdGNoZXMgdGhlIHZhcmlhdGlvbicsICdvZiB0aGUgYWxsb3dlZCBwbGFjZW1lbnRzLicsICdGb3IgZXhhbXBsZSwgXCJhdXRvXCIgY2Fubm90IGJlIHVzZWQgdG8gYWxsb3cgXCJib3R0b20tc3RhcnRcIi4nLCAnVXNlIFwiYXV0by1zdGFydFwiIGluc3RlYWQuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufSIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciByZWZlcmVuY2VFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2VFbGVtZW50KTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChzdHIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIFtdLmNvbmNhdChhcmdzKS5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHtcbiAgICByZXR1cm4gcC5yZXBsYWNlKC8lcy8sIGMpO1xuICB9LCBzdHIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufSIsImltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59IiwidmFyIGhhc2ggPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwidmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufSIsImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciByb3VuZCA9IE1hdGgucm91bmQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59IiwiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaXF1ZUJ5KGFyciwgZm4pIHtcbiAgdmFyIGlkZW50aWZpZXJzID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gZm4oaXRlbSk7XG5cbiAgICBpZiAoIWlkZW50aWZpZXJzLmhhcyhpZGVudGlmaWVyKSkge1xuICAgICAgaWRlbnRpZmllcnMuYWRkKGlkZW50aWZpZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn0iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCIuL2Zvcm1hdC5qc1wiO1xuaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX01PRElGSUVSX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHByb3ZpZGVkIGFuIGludmFsaWQgJXMgcHJvcGVydHksIGV4cGVjdGVkICVzIGJ1dCBnb3QgJXMnO1xudmFyIE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiByZXF1aXJlcyBcIiVzXCIsIGJ1dCBcIiVzXCIgbW9kaWZpZXIgaXMgbm90IGF2YWlsYWJsZSc7XG52YXIgVkFMSURfUFJPUEVSVElFUyA9IFsnbmFtZScsICdlbmFibGVkJywgJ3BoYXNlJywgJ2ZuJywgJ2VmZmVjdCcsICdyZXF1aXJlcycsICdvcHRpb25zJ107XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgT2JqZWN0LmtleXMobW9kaWZpZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCAnXCJuYW1lXCInLCAnXCJzdHJpbmdcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLm5hbWUpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlbmFibGVkJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmVuYWJsZWQgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZW5hYmxlZFwiJywgJ1wiYm9vbGVhblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZW5hYmxlZCkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdwaGFzZSc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyUGhhc2VzLmluZGV4T2YobW9kaWZpZXIucGhhc2UpIDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicGhhc2VcIicsIFwiZWl0aGVyIFwiICsgbW9kaWZpZXJQaGFzZXMuam9pbignLCAnKSwgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucGhhc2UpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmbic6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5mbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZm5cIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VmZmVjdCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lZmZlY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVmZmVjdFwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXMnOlxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlc0lmRXhpc3RzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzSWZFeGlzdHNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb3B0aW9ucyc6XG4gICAgICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlBvcHBlckpTOiBhbiBpbnZhbGlkIHByb3BlcnR5IGhhcyBiZWVuIHByb3ZpZGVkIHRvIHRoZSBcXFwiXCIgKyBtb2RpZmllci5uYW1lICsgXCJcXFwiIG1vZGlmaWVyLCB2YWxpZCBwcm9wZXJ0aWVzIGFyZSBcIiArIFZBTElEX1BST1BFUlRJRVMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBzICsgXCJcXFwiXCI7XG4gICAgICAgICAgfSkuam9pbignLCAnKSArIFwiOyBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwcm92aWRlZC5cIik7XG4gICAgICB9XG5cbiAgICAgIG1vZGlmaWVyLnJlcXVpcmVzICYmIG1vZGlmaWVyLnJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XG4gICAgICAgIGlmIChtb2RpZmllcnMuZmluZChmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZC5uYW1lID09PSByZXF1aXJlbWVudDtcbiAgICAgICAgfSkgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCByZXF1aXJlbWVudCwgcmVxdWlyZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSIsImltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuL21hdGguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcbiAgcmV0dXJuIG1hdGhNYXgobWluLCBtYXRoTWluKHZhbHVlLCBtYXgpKTtcbn0iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGRvbS9zZWxlY3Rvci1lbmdpbmUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOT0RFX1RFWFQgPSAzXG5cbmNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKVxuICB9LFxuXG4gIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICB9LFxuXG4gIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5lbGVtZW50LmNoaWxkcmVuKVxuICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG5cbiAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGVcblxuICAgIHdoaWxlIChhbmNlc3RvciAmJiBhbmNlc3Rvci5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgYW5jZXN0b3Iubm9kZVR5cGUgIT09IE5PREVfVEVYVCkge1xuICAgICAgaWYgKGFuY2VzdG9yLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIH1cblxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfSxcblxuICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbbmV4dF1cbiAgICAgIH1cblxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3JFbmdpbmVcbiIsImltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5jb25zdCB0b1R5cGUgPSBvYmogPT4ge1xuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGAke29ian1gXG4gIH1cblxuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1YmxpYyBVdGlsIEFwaVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICBkbyB7XG4gICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpXG4gIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG5cbiAgcmV0dXJuIHByZWZpeFxufVxuXG5jb25zdCBnZXRTZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKVxuXG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgIGxldCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHIgfHwgKCFocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGhyZWZBdHRyID0gYCMke2hyZWZBdHRyLnNwbGl0KCcjJylbMV19YFxuICAgIH1cblxuICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvclxufVxuXG5jb25zdCBnZXRTZWxlY3RvckZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxufVxuXG5jb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgbGV0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uRGVsYXkgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG5cbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbn1cblxuY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpXG59XG5cbmNvbnN0IGlzRWxlbWVudCA9IG9iaiA9PiB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodHlwZW9mIG9iai5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgb2JqID0gb2JqWzBdXG4gIH1cblxuICByZXR1cm4gdHlwZW9mIG9iai5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuY29uc3QgZ2V0RWxlbWVudCA9IG9iaiA9PiB7XG4gIGlmIChpc0VsZW1lbnQob2JqKSkgeyAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICAgIHJldHVybiBvYmouanF1ZXJ5ID8gb2JqWzBdIDogb2JqXG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgJiYgb2JqLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShvYmopXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBlbXVsYXRlVHJhbnNpdGlvbkVuZCA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcbiAgY29uc3QgZHVyYXRpb25QYWRkaW5nID0gNVxuICBjb25zdCBlbXVsYXRlZER1cmF0aW9uID0gZHVyYXRpb24gKyBkdXJhdGlvblBhZGRpbmdcblxuICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBsaXN0ZW5lcilcbiAgfVxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgbGlzdGVuZXIpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KVxuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbilcbn1cblxuY29uc3QgdHlwZUNoZWNrQ29uZmlnID0gKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpID0+IHtcbiAgT2JqZWN0LmtleXMoY29uZmlnVHlwZXMpLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZSAmJiBpc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYFxuICAgICAgKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuc3R5bGUgJiYgZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZSkge1xuICAgIGNvbnN0IGVsZW1lbnRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcbiAgICBjb25zdCBwYXJlbnROb2RlU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQucGFyZW50Tm9kZSlcblxuICAgIHJldHVybiBlbGVtZW50U3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmXG4gICAgICBwYXJlbnROb2RlU3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmXG4gICAgICBlbGVtZW50U3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbidcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkXG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdmYWxzZSdcbn1cblxuY29uc3QgZmluZFNoYWRvd1Jvb3QgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiBlbGVtZW50Lm9mZnNldEhlaWdodFxuXG5jb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHsgalF1ZXJ5IH0gPSB3aW5kb3dcblxuICBpZiAoalF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1uby1qcXVlcnknKSkge1xuICAgIHJldHVybiBqUXVlcnlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjaylcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJ1xuXG5jb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUVcbiAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV1cbiAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luXG4gICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGV4ZWN1dGUgPSBjYWxsYmFjayA9PiB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0VUlELFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIGlzRWxlbWVudCxcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIHR5cGVDaGVja0NvbmZpZyxcbiAgaXNWaXNpYmxlLFxuICBpc0Rpc2FibGVkLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgbm9vcCxcbiAgcmVmbG93LFxuICBnZXRqUXVlcnksXG4gIG9uRE9NQ29udGVudExvYWRlZCxcbiAgaXNSVEwsXG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkb20vZGF0YS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IGVsZW1lbnRNYXAgPSBuZXcgTWFwKClcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXQoZWxlbWVudCwga2V5LCBpbnN0YW5jZSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAvLyBjYW4gYmUgcmVtb3ZlZCBsYXRlciB3aGVuIG11bHRpcGxlIGtleS9pbnN0YW5jZXMgYXJlIGZpbmUgdG8gYmUgdXNlZFxuICAgIGlmICghaW5zdGFuY2VNYXAuaGFzKGtleSkgJiYgaW5zdGFuY2VNYXAuc2l6ZSAhPT0gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluc3RhbmNlTWFwLnNldChrZXksIGluc3RhbmNlKVxuICB9LFxuXG4gIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgaW5zdGFuY2VNYXAuZGVsZXRlKGtleSlcblxuICAgIC8vIGZyZWUgdXAgZWxlbWVudCByZWZlcmVuY2VzIGlmIHRoZXJlIGFyZSBubyBpbnN0YW5jZXMgbGVmdCBmb3IgYW4gZWxlbWVudFxuICAgIGlmIChpbnN0YW5jZU1hcC5zaXplID09PSAwKSB7XG4gICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkb20vZXZlbnQtaGFuZGxlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGdldGpRdWVyeSB9IGZyb20gJy4uL3V0aWwvaW5kZXgnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qL1xuY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovXG5jb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvXG5jb25zdCBldmVudFJlZ2lzdHJ5ID0ge30gLy8gRXZlbnRzIHN0b3JhZ2VcbmxldCB1aWRFdmVudCA9IDFcbmNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn1cbmNvbnN0IGN1c3RvbUV2ZW50c1JlZ2V4ID0gL14obW91c2VlbnRlcnxtb3VzZWxlYXZlKS9pXG5jb25zdCBuYXRpdmVFdmVudHMgPSBuZXcgU2V0KFtcbiAgJ2NsaWNrJyxcbiAgJ2RibGNsaWNrJyxcbiAgJ21vdXNldXAnLFxuICAnbW91c2Vkb3duJyxcbiAgJ2NvbnRleHRtZW51JyxcbiAgJ21vdXNld2hlZWwnLFxuICAnRE9NTW91c2VTY3JvbGwnLFxuICAnbW91c2VvdmVyJyxcbiAgJ21vdXNlb3V0JyxcbiAgJ21vdXNlbW92ZScsXG4gICdzZWxlY3RzdGFydCcsXG4gICdzZWxlY3RlbmQnLFxuICAna2V5ZG93bicsXG4gICdrZXlwcmVzcycsXG4gICdrZXl1cCcsXG4gICdvcmllbnRhdGlvbmNoYW5nZScsXG4gICd0b3VjaHN0YXJ0JyxcbiAgJ3RvdWNobW92ZScsXG4gICd0b3VjaGVuZCcsXG4gICd0b3VjaGNhbmNlbCcsXG4gICdwb2ludGVyZG93bicsXG4gICdwb2ludGVybW92ZScsXG4gICdwb2ludGVydXAnLFxuICAncG9pbnRlcmxlYXZlJyxcbiAgJ3BvaW50ZXJjYW5jZWwnLFxuICAnZ2VzdHVyZXN0YXJ0JyxcbiAgJ2dlc3R1cmVjaGFuZ2UnLFxuICAnZ2VzdHVyZWVuZCcsXG4gICdmb2N1cycsXG4gICdibHVyJyxcbiAgJ2NoYW5nZScsXG4gICdyZXNldCcsXG4gICdzZWxlY3QnLFxuICAnc3VibWl0JyxcbiAgJ2ZvY3VzaW4nLFxuICAnZm9jdXNvdXQnLFxuICAnbG9hZCcsXG4gICd1bmxvYWQnLFxuICAnYmVmb3JldW5sb2FkJyxcbiAgJ3Jlc2l6ZScsXG4gICdtb3ZlJyxcbiAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAncmVhZHlzdGF0ZWNoYW5nZScsXG4gICdlcnJvcicsXG4gICdhYm9ydCcsXG4gICdzY3JvbGwnXG5dKVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHJpdmF0ZSBtZXRob2RzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBnZXRVaWRFdmVudChlbGVtZW50LCB1aWQpIHtcbiAgcmV0dXJuICh1aWQgJiYgYCR7dWlkfTo6JHt1aWRFdmVudCsrfWApIHx8IGVsZW1lbnQudWlkRXZlbnQgfHwgdWlkRXZlbnQrK1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudChlbGVtZW50KSB7XG4gIGNvbnN0IHVpZCA9IGdldFVpZEV2ZW50KGVsZW1lbnQpXG5cbiAgZWxlbWVudC51aWRFdmVudCA9IHVpZFxuICBldmVudFJlZ2lzdHJ5W3VpZF0gPSBldmVudFJlZ2lzdHJ5W3VpZF0gfHwge31cblxuICByZXR1cm4gZXZlbnRSZWdpc3RyeVt1aWRdXG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IGVsZW1lbnRcblxuICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbilcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgW2V2ZW50XSlcbiAgfVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcblxuICAgIGZvciAobGV0IHsgdGFyZ2V0IH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgIGZvciAobGV0IGkgPSBkb21FbGVtZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgaWYgKGRvbUVsZW1lbnRzW2ldID09PSB0YXJnZXQpIHtcbiAgICAgICAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9jb25zaXN0ZW50LWRlc3RydWN0dXJpbmdcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0YXJnZXQsIFtldmVudF0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUbyBwbGVhc2UgRVNMaW50XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgY29uc3QgdWlkRXZlbnRMaXN0ID0gT2JqZWN0LmtleXMoZXZlbnRzKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB1aWRFdmVudExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1t1aWRFdmVudExpc3RbaV1dXG5cbiAgICBpZiAoZXZlbnQub3JpZ2luYWxIYW5kbGVyID09PSBoYW5kbGVyICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gZXZlbnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICBjb25zdCBkZWxlZ2F0aW9uID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnXG4gIGNvbnN0IG9yaWdpbmFsSGFuZGxlciA9IGRlbGVnYXRpb24gPyBkZWxlZ2F0aW9uRm4gOiBoYW5kbGVyXG5cbiAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudClcbiAgY29uc3QgaXNOYXRpdmUgPSBuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudClcblxuICBpZiAoIWlzTmF0aXZlKSB7XG4gICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgfVxuXG4gIHJldHVybiBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdXG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbiwgb25lT2ZmKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBoYW5kbGVyID0gZGVsZWdhdGlvbkZuXG4gICAgZGVsZWdhdGlvbkZuID0gbnVsbFxuICB9XG5cbiAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgaWYgKGN1c3RvbUV2ZW50c1JlZ2V4LnRlc3Qob3JpZ2luYWxUeXBlRXZlbnQpKSB7XG4gICAgY29uc3Qgd3JhcEZuID0gZm4gPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmICFldmVudC5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkpIHtcbiAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZWxlZ2F0aW9uRm4pIHtcbiAgICAgIGRlbGVnYXRpb25GbiA9IHdyYXBGbihkZWxlZ2F0aW9uRm4pXG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZXIgPSB3cmFwRm4oaGFuZGxlcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pXG4gIGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50KGVsZW1lbnQpXG4gIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pXG4gIGNvbnN0IHByZXZpb3VzRm4gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgb3JpZ2luYWxIYW5kbGVyLCBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGwpXG5cbiAgaWYgKHByZXZpb3VzRm4pIHtcbiAgICBwcmV2aW91c0ZuLm9uZU9mZiA9IHByZXZpb3VzRm4ub25lT2ZmICYmIG9uZU9mZlxuXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChvcmlnaW5hbEhhbmRsZXIsIG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSlcbiAgY29uc3QgZm4gPSBkZWxlZ2F0aW9uID9cbiAgICBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIDpcbiAgICBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIpXG5cbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsXG4gIGZuLm9yaWdpbmFsSGFuZGxlciA9IG9yaWdpbmFsSGFuZGxlclxuICBmbi5vbmVPZmYgPSBvbmVPZmZcbiAgZm4udWlkRXZlbnQgPSB1aWRcbiAgaGFuZGxlcnNbdWlkXSA9IGZuXG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGRlbGVnYXRpb24pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpXG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSlcbiAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XVxufVxuXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG5cbiAgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmZvckVhY2goaGFuZGxlcktleSA9PiB7XG4gICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtoYW5kbGVyS2V5XVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5vcmlnaW5hbEhhbmRsZXIsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50XG59XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbiwgZmFsc2UpXG4gIH0sXG5cbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIHRydWUpXG4gIH0sXG5cbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtcyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gdHlwZUV2ZW50ICE9PSBvcmlnaW5hbFR5cGVFdmVudFxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50KGVsZW1lbnQpXG4gICAgY29uc3QgaXNOYW1lc3BhY2UgPSBvcmlnaW5hbFR5cGVFdmVudC5zdGFydHNXaXRoKCcuJylcblxuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxIYW5kbGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICBpZiAoIWV2ZW50cyB8fCAhZXZlbnRzW3R5cGVFdmVudF0pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG9yaWdpbmFsSGFuZGxlciwgZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZWxlbWVudEV2ZW50ID0+IHtcbiAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuICAgIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5mb3JFYWNoKGtleUhhbmRsZXJzID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKVxuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRba2V5SGFuZGxlcnNdXG5cbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQub3JpZ2luYWxIYW5kbGVyLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgY29uc3QgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KGV2ZW50KVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudFxuICAgIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpXG5cbiAgICBsZXQgalF1ZXJ5RXZlbnRcbiAgICBsZXQgYnViYmxlcyA9IHRydWVcbiAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlXG4gICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICAgIGxldCBldnQgPSBudWxsXG5cbiAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpXG4gICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICAgIH1cblxuICAgIGlmIChpc05hdGl2ZSkge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKVxuICAgICAgZXZ0LmluaXRFdmVudCh0eXBlRXZlbnQsIGJ1YmJsZXMsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICBidWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIG1lcmdlIGN1c3RvbSBpbmZvcm1hdGlvbiBpbiBvdXIgZXZlbnRcbiAgICBpZiAodHlwZW9mIGFyZ3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldnQsIGtleSwge1xuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmdzW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgdHlwZW9mIGpRdWVyeUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybiBldnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IHtcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGV4ZWN1dGUsXG4gIGdldEVsZW1lbnQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50XG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVkVSU0lPTiA9ICc1LjAuMSdcblxuY2xhc3MgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcblxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcbiAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGxcbiAgICB9KVxuICB9XG5cbiAgX3F1ZXVlQ2FsbGJhY2soY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgaWYgKCFpc0FuaW1hdGVkKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICBFdmVudEhhbmRsZXIub25lKGVsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4gZXhlY3V0ZShjYWxsYmFjaykpXG5cbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChlbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gIH1cblxuICAvKiogU3RhdGljICovXG5cbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXQoZWxlbWVudCwgdGhpcy5EQVRBX0tFWSlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJylcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIGBicy4ke3RoaXMuTkFNRX1gXG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3Jcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnYWxlcnQnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5hbGVydCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBTRUxFQ1RPUl9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJhbGVydFwiXSdcblxuY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQUxFUlQgPSAnYWxlcnQnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgY2xvc2UoZWxlbWVudCkge1xuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZWxlbWVudCA/IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIDogdGhpcy5fZWxlbWVudFxuICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gdGhpcy5fdHJpZ2dlckNsb3NlRXZlbnQocm9vdEVsZW1lbnQpXG5cbiAgICBpZiAoY3VzdG9tRXZlbnQgPT09IG51bGwgfHwgY3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChyb290RWxlbWVudClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Um9vdEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHx8IGVsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9BTEVSVH1gKVxuICB9XG5cbiAgX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfQ0xPU0UpXG4gIH1cblxuICBfcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50KSwgZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfQ0xPU0VEKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVEaXNtaXNzKGFsZXJ0SW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBhbGVydEluc3RhbmNlLmNsb3NlKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfRElTTUlTUywgQWxlcnQuaGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSkpXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5BbGVydCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihBbGVydClcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnYnV0dG9uJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYnV0dG9uJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiYnV0dG9uXCJdJ1xuXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgLy8gVG9nZ2xlIGNsYXNzIGFuZCBzeW5jIHRoZSBgYXJpYS1wcmVzc2VkYCBhdHRyaWJ1dGUgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgLnRvZ2dsZSgpYCBtZXRob2RcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBCdXR0b24odGhpcylcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gIGxldCBkYXRhID0gRGF0YS5nZXQoYnV0dG9uLCBEQVRBX0tFWSlcbiAgaWYgKCFkYXRhKSB7XG4gICAgZGF0YSA9IG5ldyBCdXR0b24oYnV0dG9uKVxuICB9XG5cbiAgZGF0YS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkJ1dHRvbiB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihCdXR0b24pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkb20vbWFuaXB1bGF0b3IuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbCkge1xuICBpZiAodmFsID09PSAndHJ1ZScpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gTnVtYmVyKHZhbCkudG9TdHJpbmcoKSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsKVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gJycgfHwgdmFsID09PSAnbnVsbCcpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YClcbn1cblxuY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKVxuICB9LFxuXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YClcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge31cblxuICAgIE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldClcbiAgICAgIC5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKCdicycpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IHB1cmVLZXkgPSBrZXkucmVwbGFjZSgvXmJzLywgJycpXG4gICAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aClcbiAgICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pXG4gICAgICB9KVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKVxuICB9LFxuXG4gIG9mZnNldChlbGVtZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRcbiAgICB9XG4gIH0sXG5cbiAgcG9zaXRpb24oZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmlwdWxhdG9yXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Nhcm91c2VsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzbGlkZTogZmFsc2UsXG4gIHBhdXNlOiAnaG92ZXInLFxuICB3cmFwOiB0cnVlLFxuICB0b3VjaDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2xpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgd3JhcDogJ2Jvb2xlYW4nLFxuICB0b3VjaDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSAnLmFjdGl2ZS5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX05FWFRfUFJFViA9ICcuY2Fyb3VzZWwtaXRlbS1uZXh0LCAuY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUiA9ICdbZGF0YS1icy10YXJnZXRdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCdcbmNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pdGVtcyA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMudG91Y2hTdGFydFggPSAwXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgbmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVClcbiAgICB9XG4gIH1cblxuICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVilcbiAgICB9XG4gIH1cblxuICBwYXVzZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX05FWFRfUFJFViwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgICB0aGlzLmN5Y2xlKHRydWUpXG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgfVxuXG4gIGN5Y2xlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLmludGVydmFsICYmICF0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKVxuXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID8gdGhpcy5uZXh0V2hlblZpc2libGUgOiB0aGlzLm5leHQpLmJpbmQodGhpcyksXG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHRvKGluZGV4KSB7XG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudClcblxuICAgIGlmIChpbmRleCA+IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyID0gaW5kZXggPiBhY3RpdmVJbmRleCA/XG4gICAgICBPUkRFUl9ORVhUIDpcbiAgICAgIE9SREVSX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKG9yZGVyLCB0aGlzLl9pdGVtc1tpbmRleF0pXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YXggPSBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRheCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRheCAvIHRoaXMudG91Y2hEZWx0YVhcblxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fc2xpZGUoZGlyZWN0aW9uID4gMCA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUKVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiwgZXZlbnQgPT4gdGhpcy5wYXVzZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgZXZlbnQgPT4gdGhpcy5jeWNsZShldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiB0aGlzLl90b3VjaFN1cHBvcnRlZCkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKSkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQuY2xpZW50WFxuICAgICAgfSBlbHNlIGlmICghdGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlID0gZXZlbnQgPT4ge1xuICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxID9cbiAgICAgICAgMCA6XG4gICAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoZXZlbnQgPT4gdGhpcy5jeWNsZShldmVudCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkuZm9yRWFjaChpdGVtSW1nID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihpdGVtSW1nLCBFVkVOVF9EUkFHX1NUQVJULCBlID0+IGUucHJldmVudERlZmF1bHQoKSlcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiBzdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUlVQLCBldmVudCA9PiBlbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNITU9WRSwgZXZlbnQgPT4gbW92ZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hFTkQsIGV2ZW50ID0+IGVuZChldmVudCkpXG4gICAgfVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX0xFRlRfS0VZKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fUklHSFQpXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IEFSUk9XX1JJR0hUX0tFWSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5fc2xpZGUoRElSRUNUSU9OX0xFRlQpXG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgdGhpcy5faXRlbXMgPSBlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZSA/XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU0sIGVsZW1lbnQucGFyZW50Tm9kZSkgOlxuICAgICAgW11cblxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGVsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbUJ5T3JkZXIob3JkZXIsIGFjdGl2ZUVsZW1lbnQpIHtcbiAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVFxuICAgIGNvbnN0IGlzUHJldiA9IG9yZGVyID09PSBPUkRFUl9QUkVWXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBsYXN0SXRlbUluZGV4ID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMVxuICAgIGNvbnN0IGlzR29pbmdUb1dyYXAgPSAoaXNQcmV2ICYmIGFjdGl2ZUluZGV4ID09PSAwKSB8fCAoaXNOZXh0ICYmIGFjdGl2ZUluZGV4ID09PSBsYXN0SXRlbUluZGV4KVxuXG4gICAgaWYgKGlzR29pbmdUb1dyYXAgJiYgIXRoaXMuX2NvbmZpZy53cmFwKSB7XG4gICAgICByZXR1cm4gYWN0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhID0gaXNQcmV2ID8gLTEgOiAxXG4gICAgY29uc3QgaXRlbUluZGV4ID0gKGFjdGl2ZUluZGV4ICsgZGVsdGEpICUgdGhpcy5faXRlbXMubGVuZ3RoXG5cbiAgICByZXR1cm4gaXRlbUluZGV4ID09PSAtMSA/XG4gICAgICB0aGlzLl9pdGVtc1t0aGlzLl9pdGVtcy5sZW5ndGggLSAxXSA6XG4gICAgICB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdXG4gIH1cblxuICBfdHJpZ2dlclNsaWRlRXZlbnQocmVsYXRlZFRhcmdldCwgZXZlbnREaXJlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgocmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBmcm9tSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudCkpXG5cbiAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJREUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGZyb21JbmRleCxcbiAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgIH0pXG4gIH1cblxuICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICAgIGFjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcblxuICAgICAgY29uc3QgaW5kaWNhdG9ycyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ESUNBVE9SLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2F0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChOdW1iZXIucGFyc2VJbnQoaW5kaWNhdG9yc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKSwgMTApID09PSB0aGlzLl9nZXRJdGVtSW5kZXgoZWxlbWVudCkpIHtcbiAgICAgICAgICBpbmRpY2F0b3JzW2ldLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAgICAgaW5kaWNhdG9yc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJylcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMClcblxuICAgIGlmIChlbGVtZW50SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgfVxuICB9XG5cbiAgX3NsaWRlKGRpcmVjdGlvbk9yT3JkZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBvcmRlciA9IHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uT3JPcmRlcilcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5fZ2V0SXRlbUJ5T3JkZXIob3JkZXIsIGFjdGl2ZUVsZW1lbnQpXG5cbiAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KVxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG5cbiAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVFxuICAgIGNvbnN0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9TVEFSVCA6IENMQVNTX05BTUVfRU5EXG4gICAgY29uc3Qgb3JkZXJDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX05FWFQgOiBDTEFTU19OQU1FX1BSRVZcbiAgICBjb25zdCBldmVudERpcmVjdGlvbk5hbWUgPSB0aGlzLl9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKVxuXG4gICAgaWYgKG5leHRFbGVtZW50ICYmIG5leHRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gdGhpcy5fdHJpZ2dlclNsaWRlRXZlbnQobmV4dEVsZW1lbnQsIGV2ZW50RGlyZWN0aW9uTmFtZSlcbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnQpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBjb25zdCB0cmlnZ2VyU2xpZEV2ZW50ID0gKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpKSB7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgICByZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKVxuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSwgb3JkZXJDbGFzc05hbWUsIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgICAgc2V0VGltZW91dCh0cmlnZ2VyU2xpZEV2ZW50LCAwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIGFjdGl2ZUVsZW1lbnQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICB0cmlnZ2VyU2xpZEV2ZW50KClcbiAgICB9XG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBfZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pIHtcbiAgICBpZiAoIVtESVJFQ1RJT05fUklHSFQsIERJUkVDVElPTl9MRUZUXS5pbmNsdWRlcyhkaXJlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uXG4gICAgfVxuXG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfUFJFViA6IE9SREVSX05FWFRcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWXG4gIH1cblxuICBfb3JkZXJUb0RpcmVjdGlvbihvcmRlcikge1xuICAgIGlmICghW09SREVSX05FWFQsIE9SREVSX1BSRVZdLmluY2x1ZGVzKG9yZGVyKSkge1xuICAgICAgcmV0dXJuIG9yZGVyXG4gICAgfVxuXG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUXG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlRcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBjYXJvdXNlbEludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGxldCBfY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICBfY29uZmlnID0ge1xuICAgICAgICAuLi5fY29uZmlnLFxuICAgICAgICAuLi5jb25maWdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGVcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbChlbGVtZW50LCBfY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgZGF0YS50byhjb25maWcpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7YWN0aW9ufVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVthY3Rpb25dKClcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwgJiYgX2NvbmZpZy5yaWRlKSB7XG4gICAgICBkYXRhLnBhdXNlKClcbiAgICAgIGRhdGEuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRhcmdldCksXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKVxuICAgIH1cbiAgICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNvbmZpZy5pbnRlcnZhbCA9IGZhbHNlXG4gICAgfVxuXG4gICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UodGFyZ2V0LCBjb25maWcpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgRGF0YS5nZXQodGFyZ2V0LCBEQVRBX0tFWSkudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBDYXJvdXNlbC5kYXRhQXBpQ2xpY2tIYW5kbGVyKVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjYXJvdXNlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZShjYXJvdXNlbHNbaV0sIERhdGEuZ2V0KGNhcm91c2Vsc1tpXSwgREFUQV9LRVkpKVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQ2Fyb3VzZWwgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ2Fyb3VzZWwpXG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50LFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnY29sbGFwc2UnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICB0b2dnbGU6IHRydWUsXG4gIHBhcmVudDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHRvZ2dsZTogJ2Jvb2xlYW4nLFxuICBwYXJlbnQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnXG5cbmNvbnN0IFdJRFRIID0gJ3dpZHRoJ1xuY29uc3QgSEVJR0hUID0gJ2hlaWdodCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFUyA9ICcuc2hvdywgLmNvbGxhcHNpbmcnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gU2VsZWN0b3JFbmdpbmUuZmluZChcbiAgICAgIGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtocmVmPVwiIyR7dGhpcy5fZWxlbWVudC5pZH1cIl0sYCArXG4gICAgICBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1bZGF0YS1icy10YXJnZXQ9XCIjJHt0aGlzLl9lbGVtZW50LmlkfVwiXWBcbiAgICApXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAgICAgLmZpbHRlcihmb3VuZEVsZW0gPT4gZm91bmRFbGVtID09PSB0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGxcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlc1xuICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgYWN0aXZlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQUNUSVZFUywgdGhpcy5fcGFyZW50KVxuICAgICAgICAuZmlsdGVyKGVsZW0gPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1wYXJlbnQnKSA9PT0gdGhpcy5fY29uZmlnLnBhcmVudFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgICB9KVxuXG4gICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWN0aXZlcyA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRoaXMuX3NlbGVjdG9yKVxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBjb25zdCB0ZW1wQWN0aXZlRGF0YSA9IGFjdGl2ZXMuZmluZChlbGVtID0+IGNvbnRhaW5lciAhPT0gZWxlbSlcbiAgICAgIGFjdGl2ZXNEYXRhID0gdGVtcEFjdGl2ZURhdGEgPyBEYXRhLmdldCh0ZW1wQWN0aXZlRGF0YSwgREFUQV9LRVkpIDogbnVsbFxuXG4gICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgYWN0aXZlcy5mb3JFYWNoKGVsZW1BY3RpdmUgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyICE9PSBlbGVtQWN0aXZlKSB7XG4gICAgICAgICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UoZWxlbUFjdGl2ZSwgJ2hpZGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhY3RpdmVzRGF0YSkge1xuICAgICAgICAgIERhdGEuc2V0KGVsZW1BY3RpdmUsIERBVEFfS0VZLCBudWxsKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgaWYgKHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuICAgIH1cblxuICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoXG4gICAgaWYgKHRyaWdnZXJBcnJheUxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlckFycmF5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXVxuICAgICAgICBjb25zdCBlbGVtID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICAgIGlmIChlbGVtICYmICFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmdcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhXSURUSCkgPyBXSURUSCA6IEhFSUdIVFxuICB9XG5cbiAgX2dldFBhcmVudCgpIHtcbiAgICBsZXQgeyBwYXJlbnQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgcGFyZW50ID0gZ2V0RWxlbWVudChwYXJlbnQpXG5cbiAgICBjb25zdCBzZWxlY3RvciA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtkYXRhLWJzLXBhcmVudD1cIiR7cGFyZW50fVwiXWBcblxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHBhcmVudClcbiAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudClcblxuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoXG4gICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgW2VsZW1lbnRdXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGlmICghZWxlbWVudCB8fCAhdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNPcGVuID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdHJpZ2dlckFycmF5LmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgIH1cblxuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBjb2xsYXBzZUludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZShlbGVtZW50LCBfY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UodGhpcywgY29uZmlnKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgfHwgKGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnRhZ05hbWUgPT09ICdBJykpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCB0cmlnZ2VyRGF0YSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuICBjb25zdCBzZWxlY3RvckVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcblxuICBzZWxlY3RvckVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGxldCBjb25maWdcbiAgICBpZiAoZGF0YSkge1xuICAgICAgLy8gdXBkYXRlIHBhcmVudCBhdHRyaWJ1dGVcbiAgICAgIGlmIChkYXRhLl9wYXJlbnQgPT09IG51bGwgJiYgdHlwZW9mIHRyaWdnZXJEYXRhLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZGF0YS5fY29uZmlnLnBhcmVudCA9IHRyaWdnZXJEYXRhLnBhcmVudFxuICAgICAgICBkYXRhLl9wYXJlbnQgPSBkYXRhLl9nZXRQYXJlbnQoKVxuICAgICAgfVxuXG4gICAgICBjb25maWcgPSAndG9nZ2xlJ1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSB0cmlnZ2VyRGF0YVxuICAgIH1cblxuICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZylcbiAgfSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Db2xsYXBzZSB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDb2xsYXBzZSlcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNEaXNhYmxlZCxcbiAgaXNFbGVtZW50LFxuICBpc1Zpc2libGUsXG4gIGlzUlRMLFxuICBub29wLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Ryb3Bkb3duJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5jb25zdCBTUEFDRV9LRVkgPSAnU3BhY2UnXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMiAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG5jb25zdCBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZfXwke0FSUk9XX0RPV05fS0VZfXwke0VTQ0FQRV9LRVl9YClcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9OQVZCQVIgPSAnbmF2YmFyJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXSdcbmNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiBbMCwgMl0sXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJyxcbiAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICBwb3BwZXJDb25maWc6IG51bGwsXG4gIGF1dG9DbG9zZTogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgYXV0b0Nsb3NlOiAnKGJvb2xlYW58c3RyaW5nKSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9tZW51ID0gdGhpcy5fZ2V0TWVudUVsZW1lbnQoKVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNob3coKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVG90YWxseSBkaXNhYmxlIFBvcHBlciBmb3IgRHJvcGRvd25zIGluIE5hdmJhclxuICAgIGlmICh0aGlzLl9pbk5hdmJhcikge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ25vbmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgICAgY29uc3QgaXNEaXNwbGF5U3RhdGljID0gcG9wcGVyQ29uZmlnLm1vZGlmaWVycy5maW5kKG1vZGlmaWVyID0+IG1vZGlmaWVyLm5hbWUgPT09ICdhcHBseVN0eWxlcycgJiYgbW9kaWZpZXIuZW5hYmxlZCA9PT0gZmFsc2UpXG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKVxuXG4gICAgICBpZiAoaXNEaXNwbGF5U3RhdGljKSB7XG4gICAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdzdGF0aWMnKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgIXBhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWxlbSA9PiBFdmVudEhhbmRsZXIub24oZWxlbSwgJ21vdXNlb3ZlcicsIG5vb3ApKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfU0hPVylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0ssIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9KVxuICB9XG5cbiAgX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSwgcmVsYXRlZFRhcmdldClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWxlbSA9PiBFdmVudEhhbmRsZXIub2ZmKGVsZW0sICdtb3VzZW92ZXInLCBub29wKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGNvbmZpZy5yZWZlcmVuY2UpICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke05BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcInJlZmVyZW5jZVwiIHByb3ZpZGVkIHR5cGUgXCJvYmplY3RcIiB3aXRob3V0IGEgcmVxdWlyZWQgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIiBtZXRob2QuYClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF1cbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfTkFWQkFSfWApICE9PSBudWxsXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWwgPT4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdE1lbnVJdGVtKGV2ZW50KSB7XG4gICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHRoaXMuX21lbnUpLmZpbHRlcihpc1Zpc2libGUpXG5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpXG5cbiAgICAvLyBVcFxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSAmJiBpbmRleCA+IDApIHtcbiAgICAgIGluZGV4LS1cbiAgICB9XG5cbiAgICAvLyBEb3duXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfRE9XTl9LRVkgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgLy8gaW5kZXggaXMgLTEgaWYgdGhlIGZpcnN0IGtleWRvd24gaXMgYW4gQXJyb3dVcFxuICAgIGluZGV4ID0gaW5kZXggPT09IC0xID8gMCA6IGluZGV4XG5cbiAgICBpdGVtc1tpbmRleF0uZm9jdXMoKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGRyb3Bkb3duSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gRGF0YS5nZXQoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IERyb3Bkb3duKGVsZW1lbnQsIF9jb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBEcm9wZG93bi5kcm9wZG93bkludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIChldmVudC5idXR0b24gPT09IFJJR0hUX01PVVNFX0JVVFRPTiB8fCAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgIT09IFRBQl9LRVkpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgY29udGV4dCA9IERhdGEuZ2V0KHRvZ2dsZXNbaV0sIERBVEFfS0VZKVxuICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmICghY29udGV4dC5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKVxuICAgICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9lbGVtZW50KSB8fFxuICAgICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRQYXJlbnRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIEFuZCBub3QgYSBrZXkgaW4gUkVHRVhQX0tFWURPV04gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIElmIHNwYWNlIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gIC0gSWYga2V5IGlzIG90aGVyIHRoYW4gZXNjYXBlXG4gICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAgIC0gSWYgdHJpZ2dlciBpbnNpZGUgdGhlIG1lbnUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSA/XG4gICAgICBldmVudC5rZXkgPT09IFNQQUNFX0tFWSB8fCAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZICYmXG4gICAgICAoKGV2ZW50LmtleSAhPT0gQVJST1dfRE9XTl9LRVkgJiYgZXZlbnQua2V5ICE9PSBBUlJPV19VUF9LRVkpIHx8XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX01FTlUpKSkgOlxuICAgICAgIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQua2V5KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gKCkgPT4gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgZ2V0VG9nZ2xlQnV0dG9uKCkuZm9jdXMoKVxuICAgICAgRHJvcGRvd24uY2xlYXJNZW51cygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSB8fCBldmVudC5rZXkgPT09IEFSUk9XX0RPV05fS0VZKSkge1xuICAgICAgZ2V0VG9nZ2xlQnV0dG9uKCkuY2xpY2soKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCBldmVudC5rZXkgPT09IFNQQUNFX0tFWSkge1xuICAgICAgRHJvcGRvd24uY2xlYXJNZW51cygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBEcm9wZG93bi5nZXRJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24oKSkuX3NlbGVjdE1lbnVJdGVtKGV2ZW50KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBEcm9wZG93bi5kcm9wZG93bkludGVyZmFjZSh0aGlzKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkRyb3Bkb3duIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB1dGlsL3Njcm9sbEJhci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvcidcblxuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5cbmNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKVxufVxuXG5jb25zdCBoaWRlID0gKHdpZHRoID0gZ2V0V2lkdGgoKSkgPT4ge1xuICBfZGlzYWJsZU92ZXJGbG93KClcbiAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZXMgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKCdib2R5JywgJ3BhZGRpbmdSaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMsIHRvIGtlZXAgc2hvd24gZnVsbHdpZHRoXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCAncGFkZGluZ1JpZ2h0JywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsICdtYXJnaW5SaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aClcbn1cblxuY29uc3QgX2Rpc2FibGVPdmVyRmxvdyA9ICgpID0+IHtcbiAgY29uc3QgYWN0dWFsVmFsdWUgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93XG4gIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93JywgYWN0dWFsVmFsdWUpXG4gIH1cblxuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbn1cblxuY29uc3QgX3NldEVsZW1lbnRBdHRyaWJ1dGVzID0gKHNlbGVjdG9yLCBzdHlsZVByb3AsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZ2V0V2lkdGgoKVxuICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdXG4gICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtzdHlsZVByb3BdXG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcCwgYWN0dWFsVmFsdWUpXG4gICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGBcbiAgICB9KVxufVxuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoJ2JvZHknLCAnb3ZlcmZsb3cnKVxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcygnYm9keScsICdwYWRkaW5nUmlnaHQnKVxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCAncGFkZGluZ1JpZ2h0JylcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsICdtYXJnaW5SaWdodCcpXG59XG5cbmNvbnN0IF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzID0gKHNlbGVjdG9yLCBzdHlsZVByb3ApID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wKVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcClcbiAgICB9IGVsc2Uge1xuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApXG4gICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSB2YWx1ZVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSAoKSA9PiB7XG4gIHJldHVybiBnZXRXaWR0aCgpID4gMFxufVxuXG5leHBvcnQge1xuICBnZXRXaWR0aCxcbiAgaGlkZSxcbiAgaXNCb2R5T3ZlcmZsb3dpbmcsXG4gIHJlc2V0XG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHV0aWwvYmFja2Ryb3AuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgeyBlbXVsYXRlVHJhbnNpdGlvbkVuZCwgZXhlY3V0ZSwgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsIHJlZmxvdywgdHlwZUNoZWNrQ29uZmlnIH0gZnJvbSAnLi9pbmRleCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaXNWaXNpYmxlOiB0cnVlLCAvLyBpZiBmYWxzZSwgd2UgdXNlIHRoZSBiYWNrZHJvcCBoZWxwZXIgd2l0aG91dCBhZGRpbmcgYW55IGVsZW1lbnQgdG8gdGhlIGRvbVxuICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgcm9vdEVsZW1lbnQ6IGRvY3VtZW50LmJvZHksIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbiAgY2xpY2tDYWxsYmFjazogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaXNWaXNpYmxlOiAnYm9vbGVhbicsXG4gIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgcm9vdEVsZW1lbnQ6ICdlbGVtZW50JyxcbiAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbn1cbmNvbnN0IE5BTUUgPSAnYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ21vZGFsLWJhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUV9YFxuXG5jbGFzcyBCYWNrZHJvcCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIHNob3coY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hcHBlbmQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3codGhpcy5fZ2V0RWxlbWVudCgpKVxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwb3NlKClcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IENMQVNTX05BTUVfQkFDS0RST1BcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGNvbmZpZy5yb290RWxlbWVudCA9IGNvbmZpZy5yb290RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FwcGVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2dldEVsZW1lbnQoKSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9nZXRFbGVtZW50KCksIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuICAgICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuY2xpY2tDYWxsYmFjaylcbiAgICB9KVxuXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWVcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTilcblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gIH1cblxuICBfZW11bGF0ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2dldEVsZW1lbnQoKSlcbiAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2dldEVsZW1lbnQoKSwgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiBleGVjdXRlKGNhbGxiYWNrKSlcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9nZXRFbGVtZW50KCksIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tkcm9wXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgeyBnZXRXaWR0aCBhcyBnZXRTY3JvbGxCYXJXaWR0aCwgaGlkZSBhcyBzY3JvbGxCYXJIaWRlLCByZXNldCBhcyBzY3JvbGxCYXJSZXNldCB9IGZyb20gJy4vdXRpbC9zY3JvbGxiYXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdtb2RhbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm1vZGFsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBmb2N1czogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgZm9jdXM6ICdib29sZWFuJ1xufVxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRVVQX0RJU01JU1MgPSBgbW91c2V1cC5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLW9wZW4nXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJ1xuXG5jb25zdCBTRUxFQ1RPUl9ESUFMT0cgPSAnLm1vZGFsLWRpYWxvZydcbmNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgc2Nyb2xsQmFySGlkZSgpXG5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9PUEVOKVxuXG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCBldmVudCA9PiB0aGlzLmhpZGUoZXZlbnQpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2RpYWxvZywgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VVUF9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2lzQW5pbWF0ZWQoKVxuXG4gICAgaWYgKGlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9kaWFsb2csIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9oaWRlTW9kYWwoKSwgdGhpcy5fZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgW3dpbmRvdywgdGhpcy5fZGlhbG9nXVxuICAgICAgLmZvckVhY2goaHRtbEVsZW1lbnQgPT4gRXZlbnRIYW5kbGVyLm9mZihodG1sRWxlbWVudCwgRVZFTlRfS0VZKSlcblxuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuXG4gICAgLyoqXG4gICAgICogYGRvY3VtZW50YCBoYXMgMiBldmVudHMgYEVWRU5UX0ZPQ1VTSU5gIGFuZCBgRVZFTlRfQ0xJQ0tfREFUQV9BUElgXG4gICAgICogRG8gbm90IG1vdmUgYGRvY3VtZW50YCBpbiBgaHRtbEVsZW1lbnRzYCBhcnJheVxuICAgICAqIEl0IHdpbGwgcmVtb3ZlIGBFVkVOVF9DTElDS19EQVRBX0FQSWAgZXZlbnQgdGhhdCBzaG91bGQgcmVtYWluXG4gICAgICovXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBpc1Zpc2libGU6IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSwgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlXG4gICAgICBpc0FuaW1hdGVkOiB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICB9KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5faXNBbmltYXRlZCgpXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fCB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAvLyBEb24ndCBtb3ZlIG1vZGFsJ3MgRE9NIHBvc2l0aW9uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG5cbiAgICBpZiAobW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKHRyYW5zaXRpb25Db21wbGV0ZSwgdGhpcy5fZGlhbG9nLCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgX2VuZm9yY2VGb2N1cygpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHtcbiAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgIXRoaXMuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MpXG4gICAgfVxuICB9XG5cbiAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHRoaXMuX2FkanVzdERpYWxvZygpKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHdpbmRvdywgRVZFTlRfUkVTSVpFKVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICBzY3JvbGxCYXJSZXNldCgpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfSlcbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coY2FsbGJhY2spXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKVxuICAgIGNvbnN0IG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnKVxuICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJydcbiAgICAgICAgfSlcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9XG4gICAgfSlcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxCYXJXaWR0aCgpXG4gICAgY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSBzY3JvbGxiYXJXaWR0aCA+IDBcblxuICAgIGlmICgoIWlzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZyAmJiAhaXNSVEwoKSkgfHwgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgaXNSVEwoKSkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAoKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgIWlzUlRMKCkpIHx8ICghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nICYmIGlzUlRMKCkpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0SW5zdGFuY2UodGhpcykgfHwgbmV3IE1vZGFsKHRoaXMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVywgc2hvd0V2ZW50ID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0SW5zdGFuY2UodGFyZ2V0KSB8fCBuZXcgTW9kYWwodGFyZ2V0KVxuXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuTW9kYWwgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTW9kYWwpXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IG9mZmNhbnZhcy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc0Rpc2FibGVkLFxuICBpc1Zpc2libGUsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgeyBoaWRlIGFzIHNjcm9sbEJhckhpZGUsIHJlc2V0IGFzIHNjcm9sbEJhclJlc2V0IH0gZnJvbSAnLi91dGlsL3Njcm9sbGJhcidcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnb2ZmY2FudmFzJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMub2ZmY2FudmFzJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzY3JvbGw6IGZhbHNlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJ2Jvb2xlYW4nLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzY3JvbGw6ICdib29sZWFuJ1xufVxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93J1xuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwib2ZmY2FudmFzXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwib2ZmY2FudmFzXCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgIHNjcm9sbEJhckhpZGUoKVxuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzT25FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcbiAgICB0aGlzLl9lbGVtZW50LmJsdXIoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICBzY3JvbGxCYXJSZXNldCgpXG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbGJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGlzVmlzaWJsZTogdGhpcy5fY29uZmlnLmJhY2tkcm9wLFxuICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICBjbGlja0NhbGxiYWNrOiAoKSA9PiB0aGlzLmhpZGUoKVxuICAgIH0pXG4gIH1cblxuICBfZW5mb3JjZUZvY3VzT25FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHtcbiAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgIGVsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAhZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gICAgZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgKCkgPT4gdGhpcy5oaWRlKCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKSB8fCBuZXcgT2ZmY2FudmFzKHRoaXMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICB0aGlzLmZvY3VzKClcbiAgICB9XG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgY29uc3QgYWxsUmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxsUmVhZHlPcGVuICYmIGFsbFJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgT2ZmY2FudmFzLmdldEluc3RhbmNlKGFsbFJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gRGF0YS5nZXQodGFyZ2V0LCBEQVRBX0tFWSkgfHwgbmV3IE9mZmNhbnZhcyh0YXJnZXQpXG5cbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKS5mb3JFYWNoKGVsID0+IChEYXRhLmdldChlbCwgREFUQV9LRVkpIHx8IG5ldyBPZmZjYW52YXMoZWwpKS5zaG93KCkpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXNcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogdXRpbC9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCB1cmlBdHRycyA9IG5ldyBTZXQoW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXSlcblxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvaVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2lcblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZSA9IChhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICBjb25zdCBhdHRyTmFtZSA9IGF0dHIubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyTmFtZSkpIHtcbiAgICBpZiAodXJpQXR0cnMuaGFzKGF0dHJOYW1lKSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHIubm9kZVZhbHVlKSB8fCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoYXR0ci5ub2RlVmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCByZWdFeHAgPSBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0clJlZ2V4ID0+IGF0dHJSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChyZWdFeHBbaV0udGVzdChhdHRyTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZuKSB7XG4gIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCBhbGxvd2xpc3RLZXlzID0gT2JqZWN0LmtleXMoYWxsb3dMaXN0KVxuICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZWwgPSBlbGVtZW50c1tpXVxuICAgIGNvbnN0IGVsTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICghYWxsb3dsaXN0S2V5cy5pbmNsdWRlcyhlbE5hbWUpKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWwuYXR0cmlidXRlcylcbiAgICBjb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFtdLmNvbmNhdChhbGxvd0xpc3RbJyonXSB8fCBbXSwgYWxsb3dMaXN0W2VsTmFtZV0gfHwgW10pXG5cbiAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIGdldEVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgbm9vcCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCB7XG4gIERlZmF1bHRBbGxvd2xpc3QsXG4gIHNhbml0aXplSHRtbFxufSBmcm9tICcuL3V0aWwvc2FuaXRpemVyJ1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Rvb2x0aXAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b29sdGlwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdicy10b29sdGlwJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICB0cmlnZ2VyOiAnc3RyaW5nJyxcbiAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBmYWxsYmFja1BsYWNlbWVudHM6ICdhcnJheScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGN1c3RvbUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKSdcbn1cblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgQVVUTzogJ2F1dG8nLFxuICBUT1A6ICd0b3AnLFxuICBSSUdIVDogaXNSVEwoKSA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gIEJPVFRPTTogJ2JvdHRvbScsXG4gIExFRlQ6IGlzUlRMKCkgPyAncmlnaHQnIDogJ2xlZnQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICB0aXRsZTogJycsXG4gIGRlbGF5OiAwLFxuICBodG1sOiBmYWxzZSxcbiAgc2VsZWN0b3I6IGZhbHNlLFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBvZmZzZXQ6IFswLCAwXSxcbiAgY29udGFpbmVyOiBmYWxzZSxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgc2FuaXRpemU6IHRydWUsXG4gIHNhbml0aXplRm46IG51bGwsXG4gIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgcG9wcGVyQ29uZmlnOiBudWxsXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTjogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1c6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV046IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTjogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUjogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX01PREFMID0gJ21vZGFsJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IEhPVkVSX1NUQVRFX1NIT1cgPSAnc2hvdydcbmNvbnN0IEhPVkVSX1NUQVRFX09VVCA9ICdvdXQnXG5cbmNvbnN0IFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIgPSAnLnRvb2x0aXAtaW5uZXInXG5cbmNvbnN0IFRSSUdHRVJfSE9WRVIgPSAnaG92ZXInXG5jb25zdCBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJ1xuY29uc3QgVFJJR0dFUl9DTElDSyA9ICdjbGljaydcbmNvbnN0IFRSSUdHRVJfTUFOVUFMID0gJ21hbnVhbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgLy8gcHJpdmF0ZVxuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgICB0aGlzLl90aW1lb3V0ID0gMFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fVxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcblxuICAgIC8vIFByb3RlY3RlZFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy50aXAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG5cbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX01PREFMfWApLCAnaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy50aXAgJiYgdGhpcy50aXAucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy50aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnRpcClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKVxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBmaW5kU2hhZG93Um9vdCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGlzSW5UaGVEb20gPSBzaGFkb3dSb290ID09PSBudWxsID9cbiAgICAgIHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy5fZWxlbWVudCkgOlxuICAgICAgc2hhZG93Um9vdC5jb250YWlucyh0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSlcblxuICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgIHRoaXMuc2V0Q29udGVudCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLl9jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID9cbiAgICAgIHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgIHRoaXMuX2NvbmZpZy5wbGFjZW1lbnRcblxuICAgIGNvbnN0IGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudClcbiAgICB0aGlzLl9hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudClcblxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzLl9jb25maWdcbiAgICBEYXRhLnNldCh0aXAsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGlwKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBjdXN0b21DbGFzcyA9IHR5cGVvZiB0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MoKSA6IHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzc1xuICAgIGlmIChjdXN0b21DbGFzcykge1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoLi4uY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJldkhvdmVyU3RhdGUgPSB0aGlzLl9ob3ZlclN0YXRlXG5cbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSBudWxsXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKVxuXG4gICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX3BvcHBlcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIT1ZFUl9TVEFURV9TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTilcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCkpXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgaXNBbmltYXRlZClcbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXBcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX2NvbmZpZy50ZW1wbGF0ZVxuXG4gICAgdGhpcy50aXAgPSBlbGVtZW50LmNoaWxkcmVuWzBdXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIsIHRpcCksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIHNldEVsZW1lbnRDb250ZW50KGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudChjb250ZW50KSkge1xuICAgICAgY29udGVudCA9IGdldEVsZW1lbnQoY29udGVudClcblxuICAgICAgLy8gY29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQucGFyZW50Tm9kZSAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50LnRleHRDb250ZW50XG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICBjb250ZW50ID0gc2FuaXRpemVIdG1sKGNvbnRlbnQsIHRoaXMuX2NvbmZpZy5hbGxvd0xpc3QsIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZUZuKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnRcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICB9XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBsZXQgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLl9jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICB0aGlzLl9jb25maWcudGl0bGUuY2FsbCh0aGlzLl9lbGVtZW50KSA6XG4gICAgICAgIHRoaXMuX2NvbmZpZy50aXRsZVxuICAgIH1cblxuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgdXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KSB7XG4gICAgaWYgKGF0dGFjaG1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgIHJldHVybiAnZW5kJ1xuICAgIH1cblxuICAgIGlmIChhdHRhY2htZW50ID09PSAnbGVmdCcpIHtcbiAgICAgIHJldHVybiAnc3RhcnQnXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaG1lbnRcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBEYXRhLmdldChldmVudC5kZWxlZ2F0ZVRhcmdldCwgZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKVxuICAgICAgRGF0YS5zZXQoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXksIGNvbnRleHQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbCA9PiBOdW1iZXIucGFyc2VJbnQodmFsLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogdGhpcy5fY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBlbGVtZW50OiBgLiR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hcnJvd2BcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb25DaGFuZ2UnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9uRmlyc3RVcGRhdGU6IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5vcHRpb25zLnBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi4odHlwZW9mIHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKGRlZmF1bHRCc1BvcHBlckNvbmZpZykgOiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgIHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoYCR7Q0xBU1NfUFJFRklYfS0ke3RoaXMudXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KX1gKVxuICB9XG5cbiAgX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5fY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMudG9nZ2xlKGV2ZW50KSlcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VFTlRFUiA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50SW4sIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5fZW50ZXIoZXZlbnQpKVxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRPdXQsIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5fbGVhdmUoZXZlbnQpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX01PREFMfWApLCAnaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2ZpeFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICBjb25zdCBvcmlnaW5hbFRpdGxlVHlwZSA9IHR5cGVvZiB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAodGl0bGUgfHwgb3JpZ2luYWxUaXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlIHx8ICcnKVxuICAgICAgaWYgKHRpdGxlICYmICF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGl0bGUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKVxuICAgIH1cbiAgfVxuXG4gIF9lbnRlcihldmVudCwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpXG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXG4gICAgICBdID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChjb250ZXh0LmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuXG4gICAgaWYgKCFjb250ZXh0Ll9jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuX2NvbmZpZy5kZWxheS5zaG93KSB7XG4gICAgICBjb250ZXh0LnNob3coKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0Ll9jb25maWcuZGVsYXkuc2hvdylcbiAgfVxuXG4gIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpXG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IGNvbnRleHQuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldClcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9PVVRcblxuICAgIGlmICghY29udGV4dC5fY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0Ll9jb25maWcuZGVsYXkuaGlkZSkge1xuICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0Ll9jb25maWcuZGVsYXkuaGlkZSlcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIGZvciAoY29uc3QgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykuZm9yRWFjaChkYXRhQXR0ciA9PiB7XG4gICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmhhcyhkYXRhQXR0cikpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBjb25maWcuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogZ2V0RWxlbWVudChjb25maWcuY29udGFpbmVyKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgaWYgKGNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgY29uZmlnLnRlbXBsYXRlID0gc2FuaXRpemVIdG1sKGNvbmZpZy50ZW1wbGF0ZSwgY29uZmlnLmFsbG93TGlzdCwgY29uZmlnLnNhbml0aXplRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLl9jb25maWdba2V5XSkge1xuICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5fY29uZmlnW2tleV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSB0aXAuZ2V0QXR0cmlidXRlKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFiQ2xhc3MubWFwKHRva2VuID0+IHRva2VuLnRyaW0oKSlcbiAgICAgICAgLmZvckVhY2godENsYXNzID0+IHRpcC5jbGFzc0xpc3QucmVtb3ZlKHRDbGFzcykpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gcG9wcGVyRGF0YVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50aXAgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXJcbiAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICB0aGlzLl9hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChzdGF0ZS5wbGFjZW1lbnQpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuVG9vbHRpcCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb29sdGlwKVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdwb3BvdmVyJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMucG9wb3ZlcidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBDTEFTU19QUkVGSVggPSAnYnMtcG9wb3ZlcidcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gIG9mZnNldDogWzAsIDhdLFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBjb250ZW50OiAnJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcbiAgY29udGVudDogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTjogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1c6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV046IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTjogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUjogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfVElUTEUgPSAnLnBvcG92ZXItaGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgUG9wb3ZlciBleHRlbmRzIFRvb2x0aXAge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gT3ZlcnJpZGVzXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKVxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuXG4gICAgLy8gd2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9USVRMRSwgdGlwKSwgdGhpcy5nZXRUaXRsZSgpKVxuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb250ZW50ID0gY29udGVudC5jYWxsKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0NPTlRFTlQsIHRpcCksIGNvbnRlbnQpXG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICB0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKGAke0NMQVNTX1BSRUZJWH0tJHt0aGlzLnVwZGF0ZUF0dGFjaG1lbnQoYXR0YWNobWVudCl9YClcbiAgfVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1jb250ZW50JykgfHwgdGhpcy5fY29uZmlnLmNvbnRlbnRcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSB0aXAuZ2V0QXR0cmlidXRlKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFiQ2xhc3MubWFwKHRva2VuID0+IHRva2VuLnRyaW0oKSlcbiAgICAgICAgLmZvckVhY2godENsYXNzID0+IHRpcC5jbGFzc0xpc3QucmVtb3ZlKHRDbGFzcykpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFBvcG92ZXIodGhpcywgX2NvbmZpZylcbiAgICAgICAgRGF0YS5zZXQodGhpcywgREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlBvcG92ZXIgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oUG9wb3ZlcilcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNFbGVtZW50LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogMTAsXG4gIG1ldGhvZDogJ2F1dG8nLFxuICB0YXJnZXQ6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQ6ICdudW1iZXInLFxuICBtZXRob2Q6ICdzdHJpbmcnLFxuICB0YXJnZXQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9BQ1RJVkFURSA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NDUk9MTCA9IGBzY3JvbGwke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnXG5jb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5cbmNvbnN0IE1FVEhPRF9PRkZTRVQgPSAnb2Zmc2V0J1xuY29uc3QgTUVUSE9EX1BPU0lUSU9OID0gJ3Bvc2l0aW9uJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9MSVNUX0lURU1TfSwgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAuJHtDTEFTU19OQU1FX0RST1BET1dOX0lURU19YFxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSAwXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfU0NST0xMLCAoKSA9PiB0aGlzLl9wcm9jZXNzKCkpXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICAgIHRoaXMuX3Byb2Nlc3MoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IGF1dG9NZXRob2QgPSB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB0aGlzLl9zY3JvbGxFbGVtZW50LndpbmRvdyA/XG4gICAgICBNRVRIT0RfT0ZGU0VUIDpcbiAgICAgIE1FVEhPRF9QT1NJVElPTlxuXG4gICAgY29uc3Qgb2Zmc2V0TWV0aG9kID0gdGhpcy5fY29uZmlnLm1ldGhvZCA9PT0gJ2F1dG8nID9cbiAgICAgIGF1dG9NZXRob2QgOlxuICAgICAgdGhpcy5fY29uZmlnLm1ldGhvZFxuXG4gICAgY29uc3Qgb2Zmc2V0QmFzZSA9IG9mZnNldE1ldGhvZCA9PT0gTUVUSE9EX1BPU0lUSU9OID9cbiAgICAgIHRoaXMuX2dldFNjcm9sbFRvcCgpIDpcbiAgICAgIDBcblxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG5cbiAgICBjb25zdCB0YXJnZXRzID0gU2VsZWN0b3JFbmdpbmUuZmluZCh0aGlzLl9zZWxlY3RvcilcblxuICAgIHRhcmdldHMubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRTZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGFyZ2V0U2VsZWN0b3IpIDogbnVsbFxuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBpZiAodGFyZ2V0QkNSLndpZHRoIHx8IHRhcmdldEJDUi5oZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgTWFuaXB1bGF0b3Jbb2Zmc2V0TWV0aG9kXSh0YXJnZXQpLnRvcCArIG9mZnNldEJhc2UsXG4gICAgICAgICAgICB0YXJnZXRTZWxlY3RvclxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0pXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSlcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLl9vZmZzZXRzLnB1c2goaXRlbVswXSlcbiAgICAgICAgdGhpcy5fdGFyZ2V0cy5wdXNoKGl0ZW1bMV0pXG4gICAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX0tFWSlcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT09ICdzdHJpbmcnICYmIGlzRWxlbWVudChjb25maWcudGFyZ2V0KSkge1xuICAgICAgbGV0IHsgaWQgfSA9IGNvbmZpZy50YXJnZXRcbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgaWQgPSBnZXRVSUQoTkFNRSlcbiAgICAgICAgY29uZmlnLnRhcmdldC5pZCA9IGlkXG4gICAgICB9XG5cbiAgICAgIGNvbmZpZy50YXJnZXQgPSBgIyR7aWR9YFxuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldFNjcm9sbFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID9cbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQucGFnZVlPZmZzZXQgOlxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3BcbiAgfVxuXG4gIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KFxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgX2dldE9mZnNldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID9cbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCA6XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgX3Byb2Nlc3MoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICBjb25zdCBtYXhTY3JvbGwgPSB0aGlzLl9jb25maWcub2Zmc2V0ICsgc2Nyb2xsSGVpZ2h0IC0gdGhpcy5fZ2V0T2Zmc2V0SGVpZ2h0KClcblxuICAgIGlmICh0aGlzLl9zY3JvbGxIZWlnaHQgIT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0c1t0aGlzLl90YXJnZXRzLmxlbmd0aCAtIDFdXG5cbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpXG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1swXSAmJiB0aGlzLl9vZmZzZXRzWzBdID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgdGhpcy5fY2xlYXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX29mZnNldHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICBjb25zdCBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJlxuICAgICAgICAgIHNjcm9sbFRvcCA+PSB0aGlzLl9vZmZzZXRzW2ldICYmXG4gICAgICAgICAgKHR5cGVvZiB0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gJ3VuZGVmaW5lZCcgfHwgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pXG5cbiAgICAgIGlmIChpc0FjdGl2ZVRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl90YXJnZXRzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcblxuICAgIHRoaXMuX2NsZWFyKClcblxuICAgIGNvbnN0IHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3Rvci5zcGxpdCgnLCcpXG4gICAgICAubWFwKHNlbGVjdG9yID0+IGAke3NlbGVjdG9yfVtkYXRhLWJzLXRhcmdldD1cIiR7dGFyZ2V0fVwiXSwke3NlbGVjdG9yfVtocmVmPVwiJHt0YXJnZXR9XCJdYClcblxuICAgIGNvbnN0IGxpbmsgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHF1ZXJpZXMuam9pbignLCcpKVxuXG4gICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBsaW5rLmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmsgYXMgYWN0aXZlXG4gICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIFNlbGVjdG9yRW5naW5lLnBhcmVudHMobGluaywgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApXG4gICAgICAgIC5mb3JFYWNoKGxpc3RHcm91cCA9PiB7XG4gICAgICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuICAgICAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9YClcbiAgICAgICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcblxuICAgICAgICAgIC8vIEhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiAubmF2LWxpbmsgaXMgaW5zaWRlIC5uYXYtaXRlbVxuICAgICAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9OQVZfSVRFTVMpXG4gICAgICAgICAgICAuZm9yRWFjaChuYXZJdGVtID0+IHtcbiAgICAgICAgICAgICAgU2VsZWN0b3JFbmdpbmUuY2hpbGRyZW4obmF2SXRlbSwgU0VMRUNUT1JfTkFWX0xJTktTKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfQUNUSVZBVEUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgIH0pXG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZCh0aGlzLl9zZWxlY3RvcilcbiAgICAgIC5maWx0ZXIobm9kZSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICAuZm9yRWFjaChub2RlID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRJbnN0YW5jZSh0aGlzKSB8fCBuZXcgU2Nyb2xsU3B5KHRoaXMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKVxuICAgIC5mb3JFYWNoKHNweSA9PiBuZXcgU2Nyb2xsU3B5KHNweSkpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuU2Nyb2xsU3B5IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNEaXNhYmxlZCxcbiAgcmVmbG93XG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0YWInXG5jb25zdCBEQVRBX0tFWSA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fTUVOVSA9ICdkcm9wZG93bi1tZW51J1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9VTCA9ICc6c2NvcGUgPiBsaSA+IC5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCA9ICc6c2NvcGUgPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgaWYgKCh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiZcbiAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBwcmV2aW91c1xuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUClcblxuICAgIGlmIChsaXN0RWxlbWVudCkge1xuICAgICAgY29uc3QgaXRlbVNlbGVjdG9yID0gbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdVTCcgfHwgbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdPTCcgPyBTRUxFQ1RPUl9BQ1RJVkVfVUwgOiBTRUxFQ1RPUl9BQ1RJVkVcbiAgICAgIHByZXZpb3VzID0gU2VsZWN0b3JFbmdpbmUuZmluZChpdGVtU2VsZWN0b3IsIGxpc3RFbGVtZW50KVxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IHByZXZpb3VzID9cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHByZXZpb3VzLCBFVkVOVF9ISURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pIDpcbiAgICAgIG51bGxcblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAoaGlkZUV2ZW50ICE9PSBudWxsICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fZWxlbWVudCwgbGlzdEVsZW1lbnQpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHByZXZpb3VzLCBFVkVOVF9ISURERU4sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hY3RpdmF0ZShlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudHMgPSBjb250YWluZXIgJiYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBjb250YWluZXIubm9kZU5hbWUgPT09ICdPTCcpID9cbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQUNUSVZFX1VMLCBjb250YWluZXIpIDpcbiAgICAgIFNlbGVjdG9yRW5naW5lLmNoaWxkcmVuKGNvbnRhaW5lciwgU0VMRUNUT1JfQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlID0gYWN0aXZlRWxlbWVudHNbMF1cbiAgICBjb25zdCBpc1RyYW5zaXRpb25pbmcgPSBjYWxsYmFjayAmJiAoYWN0aXZlICYmIGFjdGl2ZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4gdGhpcy5fdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spXG5cbiAgICBpZiAoYWN0aXZlICYmIGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBjb25zdCBkcm9wZG93bkNoaWxkID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQsIGFjdGl2ZS5wYXJlbnROb2RlKVxuXG4gICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICBkcm9wZG93bkNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgcmVmbG93KGVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZU5hbWUgPT09ICdMSScpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fTUVOVSkpIHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTilcblxuICAgICAgaWYgKGRyb3Bkb3duRWxlbWVudCkge1xuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgZHJvcGRvd25FbGVtZW50KVxuICAgICAgICAgIC5mb3JFYWNoKGRyb3Bkb3duID0+IGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IFRhYih0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IFRhYih0aGlzKVxuICBkYXRhLnNob3coKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRhYiB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUYWIpXG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgcmVmbG93LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndG9hc3QnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b2FzdCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFT1ZFUiA9IGBtb3VzZW92ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRU9VVCA9IGBtb3VzZW91dCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICBkZWxheTogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhdXRvaGlkZTogdHJ1ZSxcbiAgZGVsYXk6IDUwMDBcbn1cblxuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJ0b2FzdFwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuXG4gICAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSlcbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tYXliZVNjaGVkdWxlSGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gfHwgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpXG4gIH1cblxuICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgIGNhc2UgJ21vdXNlb3V0JzpcbiAgICAgICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3RpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgY2FzZSAnZm9jdXNvdXQnOlxuICAgICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoaXNJbnRlcmFjdGluZykge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgIGlmICh0aGlzLl9lbGVtZW50ID09PSBuZXh0RWxlbWVudCB8fCB0aGlzLl9lbGVtZW50LmNvbnRhaW5zKG5leHRFbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCAoKSA9PiB0aGlzLmhpZGUoKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVkVSLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRvYXN0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvYXN0KVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBpbmRleC51bWQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9zcmMvYWxlcnQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vc3JjL2J1dHRvbidcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL3NyYy9jYXJvdXNlbCdcbmltcG9ydCBDb2xsYXBzZSBmcm9tICcuL3NyYy9jb2xsYXBzZSdcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL3NyYy9kcm9wZG93bidcbmltcG9ydCBNb2RhbCBmcm9tICcuL3NyYy9tb2RhbCdcbmltcG9ydCBPZmZjYW52YXMgZnJvbSAnLi9zcmMvb2ZmY2FudmFzJ1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi9zcmMvcG9wb3ZlcidcbmltcG9ydCBTY3JvbGxTcHkgZnJvbSAnLi9zcmMvc2Nyb2xsc3B5J1xuaW1wb3J0IFRhYiBmcm9tICcuL3NyYy90YWInXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9zcmMvdG9hc3QnXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3NyYy90b29sdGlwJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEFsZXJ0LFxuICBCdXR0b24sXG4gIENhcm91c2VsLFxuICBDb2xsYXBzZSxcbiAgRHJvcGRvd24sXG4gIE1vZGFsLFxuICBPZmZjYW52YXMsXG4gIFBvcG92ZXIsXG4gIFNjcm9sbFNweSxcbiAgVGFiLFxuICBUb2FzdCxcbiAgVG9vbHRpcFxufVxuIiwiaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2xvZ28vbG9nby5wbmdcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9nb1wiKTtcclxuICBsb2dvLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnNyYyA9IGxvZ29JbWFnZSkpO1xyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBuYXZUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItdG9nZ2xlclwiKTtcclxuICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi0tbmF2LWxpc3QtY29udGFpbmVyXCIpO1xyXG4gIGxldCBuYXZJc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgaWYgKG5hdlRvZ2dsZXIpIHtcclxuICAgIG5hdlRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKCFuYXZJc09wZW4pIHtcclxuICAgICAgICBuYXZUb2dnbGVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3Blbi1uYXZiYXJcIik7XHJcbiAgICAgICAgbmF2SXNPcGVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZUb2dnbGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1uYXZiYXJcIik7XHJcbiAgICAgICAgbmF2SXNPcGVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkOWYxOGI3YWU1OWM2NTQ2ZThjOTQ0YTkwMWMwOTY1OS5wbmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKiBKQVZBU0NSSVBUICovXHJcbnJlcXVpcmUoXCIuL2pzL2ltYWdlLWxvYWRcIik7XHJcbnJlcXVpcmUoXCIuL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAubWluXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9uYXZidXJnZXIuYW5pbVwiKTtcclxuLy8gcmVxdWlyZShcIi4vanMvdGlueW1jZS5mb3JtXCIpO1xyXG5cclxuLyogU1RZTEUgKi9cclxucmVxdWlyZShcIi4vYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcclxucmVxdWlyZShcIi4vbWFpbi5zY3NzXCIpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==